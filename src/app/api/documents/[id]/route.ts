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

        if (document.content) {
            return NextResponse.json({
                title: document.title,
                type: document.content_type,
                created_at: document.created_at,
                content: document.content,
                raw_content: document.raw_content
            });
        }

        // Fetch all chunks for this document (Fallback/Legacy)
        const { data: chunks, error: chunksError } = await supabase
            .from('document_chunks')
            .select('content')
            .eq('document_id', documentId)
            .order('id', { ascending: true });

        if (chunksError) {
            throw chunksError;
        }

        // Combine chunks with de-overlapping logic
        function mergeChunks(chunks: string[]): string {
            if (chunks.length === 0) return '';
            let result = chunks[0];
            for (let i = 1; i < chunks.length; i++) {
                const current = chunks[i];
                // Find overlap (check the last 1000 chars of result vs current)
                const s1 = result.slice(-1000);
                const maxOverlap = Math.min(s1.length, current.length);
                let overlap = 0;

                for (let j = maxOverlap; j > 0; j--) {
                    if (s1.endsWith(current.slice(0, j))) {
                        overlap = j;
                        break;
                    }
                }
                result += current.slice(overlap);
            }
            return result;
        }

        const fullContent = mergeChunks(chunks.map(c => c.content));

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
