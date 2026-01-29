import { NextResponse } from 'next/server';
import { ingestContent } from '@/lib/ingest-service';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const advisorId = formData.get('advisorId') as string;
        const type = formData.get('type') as any; // 'text', 'web', 'youtube', 'pdf'
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const url = formData.get('url') as string;
        const file = formData.get('file') as File;

        const result = await ingestContent({
            advisorId,
            type,
            title,
            content,
            url,
            file: file || undefined
        });

        return NextResponse.json(result);

    } catch (error: any) {
        console.error('Ingestion error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
