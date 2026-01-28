import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { embeddingModel } from '@/lib/gemini';
import * as cheerio from 'cheerio';

async function ingestUrl(url: string, advisorId: string) {
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);

        const html = await res.text();
        const $ = cheerio.load(html);

        // Basic text extraction
        $('script, style, nav, footer, header').remove();
        let textContent = $('body').text().replace(/\s+/g, ' ').trim();
        const title = $('title').text() || url;

        if (!textContent || textContent.length < 100) return null;

        // Sanitize
        textContent = textContent.replace(/\0/g, '');

        // 1. Create Document Entry
        const { data: doc, error: docError } = await supabase
            .from('documents')
            .insert({
                advisor_id: advisorId,
                title: title,
                content_type: 'web'
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

        return { title, chunks: chunks.length };
    } catch (error) {
        console.error(`Error ingesting ${url}:`, error);
        return null;
    }
}

export async function POST(req: Request) {
    try {
        const { query, advisorId } = await req.json();
        const apiKey = process.env.TAVILY_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'TAVILY_API_KEY is missing in environment variables' }, { status: 500 });
        }

        if (!query || !advisorId) {
            return NextResponse.json({ error: 'Missing query or advisorId' }, { status: 400 });
        }

        // 1. Search for relevant content
        const searchRes = await fetch('https://api.tavily.com/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: apiKey,
                query: query,
                search_depth: 'advanced',
                max_results: 5
            })
        });

        const searchData = await searchRes.json();
        if (!searchData.results) {
            return NextResponse.json({ error: 'Search failed', details: searchData }, { status: 500 });
        }

        const urls = searchData.results.map((r: any) => r.url);
        const results = [];

        // 2. Process URLs
        for (const url of urls) {
            const res = await ingestUrl(url, advisorId);
            if (res) results.push(res);
        }

        return NextResponse.json({
            success: true,
            results: results
        });

    } catch (error: any) {
        console.error('Research error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
