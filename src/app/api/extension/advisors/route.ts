import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

// Helper for CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: Request) {
    try {
        const apiKey = req.headers.get('x-api-key');

        if (!apiKey) {
            return NextResponse.json({ error: 'API key required' }, { status: 401, headers: corsHeaders });
        }

        // Verify API key and get user
        const { data: keyData, error: keyError } = await supabase
            .from('api_keys')
            .select('user_id, is_active')
            .eq('key', apiKey)
            .single();

        if (keyError) {
            return NextResponse.json({ error: 'Invalid API key', details: keyError.message }, { status: 401, headers: corsHeaders });
        }

        if (!keyData || !keyData.is_active) {
            return NextResponse.json({ error: 'Invalid API key or inactive' }, { status: 401, headers: corsHeaders });
        }

        // Get user's advisors
        const { data: advisors, error: advisorsError } = await supabase
            .from('advisors')
            .select('id, name, avatar_url')
            .order('name');

        if (advisorsError) throw advisorsError;

        return NextResponse.json({ advisors }, { headers: corsHeaders });
    } catch (error: any) {
        console.error('Extension advisors error:', error);
        return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
    }
}
