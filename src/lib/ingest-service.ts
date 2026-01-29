import { supabase } from '@/lib/supabase-server';
import { getYouTubeTranscript } from '@/lib/youtube';
import { embeddingModel } from '@/lib/gemini';
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

    // 1. Create Document Entry
    const { data: doc, error: docError } = await supabase
        .from('documents')
        .insert({
            advisor_id: advisorId,
            title: finalTitle,
            content_type: type
        })
        .select()
        .single();

    if (docError) throw docError;

    // 2. Chunking
    const chunks: string[] = [];
    const chunkSize = 1000;
    const overlap = 200;

    for (let i = 0; i < textContent.length; i += (chunkSize - overlap)) {
        chunks.push(textContent.slice(i, i + chunkSize));
    }

    // 3. Embedding & Insertion
    for (const chunkContent of chunks) {
        const result = await (embeddingModel as any).embedContent({
            content: { role: 'user', parts: [{ text: chunkContent }] },
            outputDimensionality: 768
        });
        const embedding = result.embedding.values;

        await supabase.from('document_chunks').insert({
            document_id: doc.id,
            content: chunkContent,
            embedding: embedding
        });
    }

    return {
        success: true,
        docId: doc.id,
        chunks: chunks.length
    };
}
