import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { ingestContent } from '@/lib/ingest-service';

// Helper for CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
    try {
        const apiKey = req.headers.get('x-api-key');

        if (!apiKey) {
            return NextResponse.json({ error: 'API key required' }, { status: 401, headers: corsHeaders });
        }

        // Verify API key
        const { data: keyData, error: keyError } = await supabase
            .from('api_keys')
            .select('user_id, is_active')
            .eq('key', apiKey)
            .single();

        if (keyError || !keyData || !keyData.is_active) {
            return NextResponse.json({ error: 'Invalid API key' }, { status: 401, headers: corsHeaders });
        }

        const { advisorIds, items } = await req.json();

        if (!advisorIds || !Array.isArray(advisorIds) || advisorIds.length === 0) {
            return NextResponse.json({ error: 'At least one advisor required' }, { status: 400, headers: corsHeaders });
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'At least one item required' }, { status: 400, headers: corsHeaders });
        }

        const jobId = crypto.randomUUID();
        const results = [];

        // Process each item
        for (const item of items) {
            const { type, url, title } = item;

            if (!type || !url) {
                results.push({ url, success: false, error: 'Missing type or URL' });
                continue;
            }

            // Process for each advisor directly using the service (NO INTERNAL FETCH)
            for (const advisorId of advisorIds) {
                try {
                    const result = await ingestContent({
                        advisorId,
                        type,
                        url,
                        title
                    });

                    results.push({
                        url,
                        advisorId,
                        success: true,
                        chunks: result.chunks
                    });
                } catch (error: any) {
                    console.error(`Ingestion failed for item ${url}:`, error);
                    results.push({
                        url,
                        advisorId,
                        success: false,
                        error: error.message
                    });
                }
            }
        }

        const successCount = results.filter(r => r.success).length;

        return NextResponse.json({
            success: true,
            jobId,
            queued: items.length * advisorIds.length,
            completed: results.length,
            successful: successCount,
            results
        }, { headers: corsHeaders });
    } catch (error: any) {
        console.error('Extension ingest error:', error);
        return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
