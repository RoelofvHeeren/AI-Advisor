import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: documentId } = await params;

        // Fetch document info
        const { data: document, error: docError } = await supabase
            .from('documents')
            .select('*')
            .eq('id', documentId)
            .single();

        if (docError || !document) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }

        // Fetch all chunks for this document
        const { data: chunks, error: chunksError } = await supabase
            .from('document_chunks')
            .select('content')
            .eq('document_id', documentId)
            .order('id', { ascending: true });

        if (chunksError) {
            throw chunksError;
        }

        // Combine chunks
        const fullContent = chunks.map(c => c.content).join('');

        return NextResponse.json({
            title: document.title,
            type: document.content_type,
            created_at: document.created_at,
            content: fullContent
        });

    } catch (error: any) {
        console.error('Error fetching document content:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
