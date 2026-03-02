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
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
        async start(controller) {
            const sendEvent = (data: any) => {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
            };

            try {
                const apiKey = req.headers.get('x-api-key');

                if (!apiKey) {
                    sendEvent({ error: 'API key required' });
                    controller.close();
                    return;
                }

                // Verify API key
                const { data: keyData, error: keyError } = await supabase
                    .from('api_keys')
                    .select('user_id, is_active')
                    .eq('key', apiKey)
                    .maybeSingle();

                if (keyError) {
                    sendEvent({ error: 'Invalid API key', details: keyError.message });
                    controller.close();
                    return;
                }

                if (!keyData || !keyData.is_active) {
                    sendEvent({ error: 'Invalid API key or inactive' });
                    controller.close();
                    return;
                }

                const { advisorIds, items } = await req.json();

                if (!advisorIds || !Array.isArray(advisorIds) || advisorIds.length === 0) {
                    sendEvent({ error: 'At least one advisor required' });
                    controller.close();
                    return;
                }

                if (!items || !Array.isArray(items) || items.length === 0) {
                    sendEvent({ error: 'At least one item required' });
                    controller.close();
                    return;
                }

                const jobId = crypto.randomUUID();
                const totalSteps = items.length * advisorIds.length;
                let completedSteps = 0;
                const results = [];

                // Process each item
                for (const item of items) {
                    const { type, url, title } = item;

                    if (!type || !url) {
                        results.push({ url, success: false, error: 'Missing type or URL' });
                        completedSteps += advisorIds.length;
                        sendEvent({ type: 'error', url, error: 'Missing type or URL' });
                        continue;
                    }

                    // Process for each advisor
                    for (const advisorId of advisorIds) {
                        try {
                            sendEvent({
                                type: 'progress',
                                url,
                                title,
                                advisorId,
                                status: 'Processing...',
                                current: ++completedSteps,
                                total: totalSteps
                            });

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

                            sendEvent({
                                type: 'item_success',
                                url,
                                advisorId,
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
                            sendEvent({
                                type: 'item_error',
                                url,
                                advisorId,
                                error: error.message
                            });
                        }
                    }
                }

                const successCount = results.filter(r => r.success).length;

                sendEvent({
                    type: 'done',
                    success: true,
                    jobId,
                    total: totalSteps,
                    successful: successCount,
                    results
                });
            } catch (error: any) {
                console.error('Extension ingest stream error:', error);
                sendEvent({ type: 'error', error: error.message });
            } finally {
                controller.close();
            }
        }
    });

    return new Response(stream, {
        headers: {
            ...corsHeaders,
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        },
    });
}
