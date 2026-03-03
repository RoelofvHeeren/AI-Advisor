import { supabase } from '@/lib/supabase-server';
import { getYouTubeTranscript } from '@/lib/youtube';
import { geminiModel, embeddingModel } from '@/lib/gemini';
import * as cheerio from 'cheerio';

export interface IngestParams {
    advisorId: string;
    type: 'text' | 'web' | 'youtube' | 'pdf';
    url?: string;
    title?: string;
    content?: string;
    file?: Buffer | Blob;
}

export async function ingestContent(params: IngestParams) {
    const { advisorId, type, url, title, content, file } = params;

    if (!advisorId) throw new Error('Missing advisorId');

    let textContent = '';
    let finalTitle = title || 'General Knowledge';

    if (type === 'text') {
        textContent = content || '';
    } else if (type === 'web') {
        if (!url) throw new Error('Missing URL for web ingestion');
        try {
            console.log(`[Ingest] Fetching web page: ${url}`);
            const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
            if (!res.ok) throw new Error(`Web fetch failed with status ${res.status}`);
            const html = await res.text();
            const $ = cheerio.load(html);

            // Basic text extraction: focus on substantive content
            $('script, style, nav, footer, header').remove();
            textContent = $('body').text().replace(/\s+/g, ' ').trim();

            if (!finalTitle || finalTitle === url) {
                finalTitle = $('title').text() || url;
            }
        } catch (e: any) {
            console.error(`[Ingest] Web fetch error for ${url}:`, e);
            throw new Error(`Web Page Fetch Error: ${e.message}`);
        }
    } else if (type === 'youtube') {
        if (!url) throw new Error('Missing YouTube URL');
        try {
            console.log(`[Ingest] Processing YouTube: ${url}`);
            // Extract video ID
            const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|\/v\/|shorts\/|embed\/))([^?&"'>]+)/);
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            if (!videoId) {
                throw new Error('Could not extract Video ID from URL.');
            }

            const transcript = await getYouTubeTranscript(videoId);
            if (!transcript) {
                throw new Error('No transcript found (all layers failed). The video might not have captions.');
            } else {
                textContent = transcript;
            }

            if (!finalTitle || finalTitle === 'General Knowledge' || finalTitle === 'YouTube Video') {
                finalTitle = `YouTube Transcript: ${url}`;
            }
        } catch (e: any) {
            console.error(`[Ingest] YouTube error for ${url}:`, e);
            throw new Error(`YouTube Process Error: ${e.message}`);
        }
    }
    else if (type === 'pdf') {
        if (!file) throw new Error('No PDF file provided');
        const buffer = file instanceof Buffer ? file : Buffer.from(await (file as Blob).arrayBuffer());

        const pdf = (await import('pdf-parse')).default;
        const data = await pdf(buffer);
        textContent = data.text;
    }

    if (!textContent) {
        throw new Error('No content found to ingest');
    }

    // Sanitize
    textContent = textContent.replace(/\0/g, '');

    // 1. Synthesize Content (Million Dollar Optimization)
    let optimizedContent = textContent;
    try {
        console.log('[Ingest] Synthesizing content for superior findability...');
        const synthesisPrompt = `
            You are a world-class Knowledge Synthesis Engine. 
            Transform the following raw transcript into a beautifully structured Markdown document.
            
            CRITICAL RULES:
            1. NEVER DELETE OR SUMMARIZE AWAY ANY INFORMATION. Every fact, quote, and detail must be preserved.
            2. ADD structure: Use hierarchical headers (#, ##, ###), bullet points, and bolded key terms.
            3. TAGGING: At the bottom, add a "Key Entities & Topics" section with extracted tags.
            4. FORMATTING: Use tables for comparisons and clean lists for steps.
            5. OBJECTIVE: Make this document extremely "findable" for an AI and perfectly readable for a human.
            
            Raw Transcript Content:
            ${textContent.substring(0, 30000)} ... (content continues)
        `;

        const result = await geminiModel.generateContent(synthesisPrompt);
        const response = await result.response;
        optimizedContent = response.text();
        console.log('[Ingest] Synthesis successful.');
    } catch (e: any) {
        console.warn('[Ingest] Synthesis failed, falling back to raw text:', e.message);
        optimizedContent = textContent;
    }

    // 2. Create Document Entry
    let docId: string;
    try {
        // We try to insert into our new columns if they exist. 
        // Supabase will error if we insert columns that don't exist yet.
        // So we'll try the "new way" first, fallback to "old way" if it fails.
        let insertData: any = {
            advisor_id: advisorId,
            title: finalTitle,
            content_type: type
        };

        const { data: doc, error: docError } = await supabase
            .from('documents')
            .insert(insertData)
            .select()
            .single();

        if (docError) {
            console.error('Initial insert failed, trying to update later:', docError.message);
            throw docError;
        }

        docId = doc.id;

        // Try to update with content/raw_content (this might fail if columns missing, but won't block the ingestion)
        try {
            await supabase.from('documents').update({
                content: optimizedContent,
                raw_content: textContent
            }).eq('id', docId);
        } catch (e) {
            console.warn('[Ingest] Advanced columns update failed (this is expected if you haven\'t run the SQL yet)');
        }

    } catch (e: any) {
        throw new Error(`Trace [DB_DOC_CREATE]: ${e.message}`);
    }

    // 3. Chunking (Perform on the Optimized content for better AI retrieval)
    const chunks: string[] = [];
    try {
        const chunkSize = 1000;
        const overlap = 200;

        for (let i = 0; i < optimizedContent.length; i += (chunkSize - overlap)) {
            chunks.push(optimizedContent.slice(i, i + chunkSize));
        }
    } catch (e: any) {
        throw new Error(`Trace [CHUNKING]: ${e.message}`);
    }

    // 4. Embedding & Insertion
    try {
        for (const chunkContent of chunks) {
            let result;
            let retries = 3;
            let delay = 1000;

            while (retries > 0) {
                try {
                    result = await (embeddingModel as any).embedContent({
                        content: { role: 'user', parts: [{ text: chunkContent }] }
                    });
                    break;
                } catch (e: any) {
                    console.warn(`[Ingest] Embedding retry remaining: ${retries - 1}. Error: ${e.message}`);
                    retries--;
                    if (retries === 0) throw e;
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                }
            }

            let embedding = result.embedding.values;

            // Slice embedding from 3072 to 1536 dimensions to match the Supabase schema
            embedding = embedding.slice(0, 1536);

            const { error: chunkError } = await supabase.from('document_chunks').insert({
                document_id: docId,
                content: chunkContent,
                embedding: embedding
            });
            if (chunkError) throw chunkError;

            // Small cooldown between chunks if we have many
            if (chunks.length > 5) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    } catch (e: any) {
        throw new Error(`Trace [EMBEDDING_DB]: ${e.message}`);
    }

    return {
        success: true,
        docId: docId,
        chunks: chunks.length
    };
}
