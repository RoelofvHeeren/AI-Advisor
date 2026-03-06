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
    onStatusUpdate?: (status: string) => void;
}

export async function ingestContent(params: IngestParams) {
    const { advisorId, type, url, title, content, file, onStatusUpdate } = params;

    const reportProgress = (status: string) => {
        if (onStatusUpdate) onStatusUpdate(status);
        console.log(`[Ingest Progress] ${status}`);
    };

    if (!advisorId) throw new Error('Missing advisorId');

    let textContent = '';
    let finalTitle = title || 'General Knowledge';

    if (type === 'text') {
        textContent = content || '';
    } else if (type === 'web') {
        if (!url) throw new Error('Missing URL for web ingestion');
        try {
            reportProgress(`Fetching web page: ${url}`);
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
            reportProgress(`Processing YouTube video: ${url}`);
            // Extract video ID
            const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|\/v\/|shorts\/|embed\/))([^?&"'>]+)/);
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            if (!videoId) {
                throw new Error('Could not extract Video ID from URL.');
            }

            if (content && content.trim()) {
                reportProgress('Using provided transcript content');
                textContent = content;
            } else {
                reportProgress('Fetching transcript from YouTube...');
                const transcript = await getYouTubeTranscript(videoId);
                if (!transcript) {
                    throw new Error('No transcript found (all layers failed). The video might not have captions.');
                } else {
                    textContent = transcript;
                }
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
        reportProgress('Parsing PDF file...');
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

    // 1. Synthesize Content (Billion Dollar Limitless Optimization)
    let optimizedContent = '';
    try {
        reportProgress('Starting knowledge synthesis...');

        const BLOCK_SIZE = 75000;
        const totalBlocks = Math.ceil(textContent.length / BLOCK_SIZE);

        for (let i = 0; i < totalBlocks; i++) {
            reportProgress(`Synthesizing knowledge block ${i + 1} of ${totalBlocks}...`);
            const start = i * BLOCK_SIZE;
            const end = start + BLOCK_SIZE;
            const chunk = textContent.slice(start, end);

            const synthesisPrompt = `
            You are a world-class Knowledge Synthesis Engine. 
            Transform the following raw transcript block (Part ${i + 1} of ${totalBlocks}) into a beautifully structured Markdown document.
            
            CRITICAL RULES:
            1. NEVER DELETE OR SUMMARIZE AWAY ANY INFORMATION. Every fact, quote, and detail must be preserved.
            2. ADD structure: Use hierarchical headers (#, ##, ###), bullet points, and bolded key terms.
            ${i === totalBlocks - 1 ? '3. TAGGING: At the bottom, add a "Key Entities & Topics" section with extracted tags.' : '3. DO NOT ADD a tagging section yet, this is not the final block.'}
            4. FORMATTING: Use tables for comparisons and clean lists for steps.
            5. OBJECTIVE: Make this document extremely "findable" for an AI and perfectly readable for a human. Keep the text flowing naturally.
            
            Raw Transcript Content Block:
            ${chunk}
            `;

            let retries = 3;
            let result;
            while (retries > 0) {
                try {
                    result = await geminiModel.generateContent(synthesisPrompt);
                    break;
                } catch (e: any) {
                    retries--;
                    if (retries === 0) throw e;
                    reportProgress(`Synthesis retry for block ${i + 1}...`);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }

            if (result) {
                const response = await result.response;
                optimizedContent += response.text() + '\n\n';
            }

            // Add a small delay between chunks to avoid rate limiting
            if (i < totalBlocks - 1) {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        reportProgress('Knowledge synthesis complete.');
    } catch (e: any) {
        console.warn('[Ingest] Synthesis failed, falling back to raw text:', e.message);
        reportProgress('Synthesis failed, using raw text fallback.');
        // If it fails mid-way, just use pure raw text to ensure no broken layout
        optimizedContent = textContent;
    }

    // 2. Create Document Entry
    let docId: string;
    try {
        reportProgress('Finalizing document in database...');
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
            throw docError;
        }

        docId = doc.id;

        // Store both formatted and raw content
        try {
            await supabase.from('documents').update({
                content: optimizedContent,
                raw_content: textContent
            }).eq('id', docId);
        } catch (e) {
            console.warn('[Ingest] Advanced columns update failed');
        }

    } catch (e: any) {
        throw new Error(`Trace [DB_DOC_CREATE]: ${e.message}`);
    }

    // 3. Chunking (CRITICAL: Perform on RAW TEXT for 100% data access for the AI)
    const chunks: string[] = [];
    try {
        reportProgress('Chunking content for indexing...');
        const chunkSize = 1000;
        const overlap = 200;

        // We use textContent here so the AI brain is 100% verbatim
        for (let i = 0; i < textContent.length; i += (chunkSize - overlap)) {
            chunks.push(textContent.slice(i, i + chunkSize));
        }
    } catch (e: any) {
        throw new Error(`Trace [CHUNKING]: ${e.message}`);
    }

    // 4. Embedding & Insertion
    try {
        const totalChunks = chunks.length;
        reportProgress(`Generating embeddings for ${totalChunks} chunks...`);
        for (let idx = 0; idx < chunks.length; idx++) {
            const chunkContent = chunks[idx];

            if (idx % 5 === 0) {
                reportProgress(`Indexing: ${idx + 1}/${totalChunks} chunks...`);
            }

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
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
        reportProgress('Indexing complete.');
    } catch (e: any) {
        throw new Error(`Trace [EMBEDDING_DB]: ${e.message}`);
    }

    return {
        success: true,
        docId: docId,
        chunks: chunks.length
    };
}
