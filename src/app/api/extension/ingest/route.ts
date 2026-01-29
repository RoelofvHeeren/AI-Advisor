import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function POST(req: Request) {
    try {
        const apiKey = req.headers.get('x-api-key');

        if (!apiKey) {
            return NextResponse.json({ error: 'API key required' }, { status: 401 });
        }

        // Verify API key
        const { data: keyData, error: keyError } = await supabase
            .from('api_keys')
            .select('user_id, is_active')
            .eq('key', apiKey)
            .single();

        if (keyError || !keyData || !keyData.is_active) {
            return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
        }

        const { advisorIds, items } = await req.json();

        if (!advisorIds || !Array.isArray(advisorIds) || advisorIds.length === 0) {
            return NextResponse.json({ error: 'At least one advisor required' }, { status: 400 });
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'At least one item required' }, { status: 400 });
        }

        // Create a batch job ID
        const jobId = crypto.randomUUID();
        const results = [];

        // Process each item
        for (const item of items) {
            const { type, url, title } = item;

            if (!type || !url) {
                results.push({ url, success: false, error: 'Missing type or URL' });
                continue;
            }

            // Process for each advisor
            for (const advisorId of advisorIds) {
                try {
                    // Call the existing ingest API
                    const formData = new FormData();
                    formData.append('advisorId', advisorId);
                    formData.append('type', type);
                    formData.append('url', url);
                    if (title) formData.append('title', title);

                    const ingestRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/ingest`, {
                        method: 'POST',
                        body: formData
                    });

                    const ingestData = await ingestRes.json();

                    if (ingestRes.ok) {
                        results.push({
                            url,
                            advisorId,
                            success: true,
                            chunks: ingestData.chunks
                        });
                    } else {
                        results.push({
                            url,
                            advisorId,
                            success: false,
                            error: ingestData.error
                        });
                    }
                } catch (error: any) {
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
        });
    } catch (error: any) {
        console.error('Extension ingest error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
