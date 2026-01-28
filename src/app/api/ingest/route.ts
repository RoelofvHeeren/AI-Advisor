import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { embeddingModel } from '@/lib/gemini';
import pdf from 'pdf-parse';
import * as cheerio from 'cheerio';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const advisorId = formData.get('advisorId') as string;
        const type = formData.get('type') as string; // 'text' or 'pdf'
        const title = formData.get('title') as string || 'General Knowledge';

        if (!advisorId) {
            return NextResponse.json({ error: 'Missing advisorId' }, { status: 400 });
        }

        let textContent = '';

        if (type === 'text') {
            textContent = formData.get('content') as string;
        } else if (type === 'web') {
            const url = formData.get('url') as string;
            const res = await fetch(url);
            const html = await res.text();
            const $ = cheerio.load(html);

            // Basic text extraction: focus on substantive content
            $('script, style, nav, footer, header').remove();
            textContent = $('body').text().replace(/\s+/g, ' ').trim();

            if (!title || title === url) {
                const pageTitle = $('title').text();
                if (pageTitle) (formData as any).set('title', pageTitle);
            }
        } else {
            const file = formData.get('file') as File;
            if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const data = await pdf(buffer);
            textContent = data.text;
        }

        if (!textContent) {
            return NextResponse.json({ error: 'No content found to ingest' }, { status: 400 });
        }

        // Sanitize
        textContent = textContent.replace(/\0/g, '');

        // 1. Create Document Entry
        const { data: doc, error: docError } = await supabase
            .from('documents')
            .insert({
                advisor_id: advisorId,
                title: title,
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

        // 3. Embedding & Insertion (Sequential for rate safety)
        let processed = 0;
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
            processed++;
        }

        return NextResponse.json({
            success: true,
            chunks: chunks.length,
            docId: doc.id
        });

    } catch (error: any) {
        console.error('Ingestion error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
