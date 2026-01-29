import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET(req: Request) {
    try {
        const apiKey = req.headers.get('x-api-key');

        if (!apiKey) {
            return NextResponse.json({ error: 'API key required' }, { status: 401 });
        }

        // Verify API key and get user
        const { data: keyData, error: keyError } = await supabase
            .from('api_keys')
            .select('user_id, is_active')
            .eq('key', apiKey)
            .single();

        if (keyError || !keyData || !keyData.is_active) {
            return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
        }

        // Get user's advisors
        const { data: advisors, error: advisorsError } = await supabase
            .from('advisors')
            .select('id, name, avatar_url')
            .order('name');

        if (advisorsError) throw advisorsError;

        return NextResponse.json({ advisors });
    } catch (error: any) {
        console.error('Extension advisors error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
