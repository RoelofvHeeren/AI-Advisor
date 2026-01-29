import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { getYouTubeTranscript } from '@/lib/youtube';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: Request) {
    const results: any = {
        timestamp: new Date().toISOString(),
        environment: {
            node_version: process.version,
            platform: process.platform,
            railway: process.env.RAILWAY_ENVIRONMENT || 'local',
            debug_version: '1.1 (Detailed Errors Enabled)'
        },
        tests: {}
    };

    try {
        // Test 1: Supabase Connectivity
        try {
            const { data, error } = await supabase.from('advisors').select('id').limit(1);
            results.tests.supabase = error ? `Error: ${error.message}` : 'Success (Connected)';
        } catch (e: any) {
            results.tests.supabase = `Exception: ${e.message}`;
        }

        // Test 2: YouTube Connectivity (Connectivity only, no transcript)
        try {
            const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            const res = await fetch(testUrl, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
            results.tests.youtube_head = res.ok ? 'Success (Accessible)' : `Failed with status ${res.status}`;
        } catch (e: any) {
            results.tests.youtube_head = `Fetch Exception: ${e.message}`;
        }

        // Test 3: Transcription Logic Test
        try {
            const testId = 'jANz5D6KzKw'; // Use the video the user is testing
            const transcript = await getYouTubeTranscript(testId);
            results.tests.transcription_engine = transcript ? `Success (${transcript.substring(0, 30)}...)` : 'Failed (Empty result)';
        } catch (e: any) {
            results.tests.transcription_engine = `Error: ${e.message}`;
        }

        return NextResponse.json(results, { headers: corsHeaders });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
