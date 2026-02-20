import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET(req: Request) {
    try {
        const { data, error } = await supabase
            .from('api_keys')
            .select('*')
            .limit(1);

        return NextResponse.json({
            success: !error,
            data,
            error: error ? {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            } : null
        });
    } catch (err: any) {
        return NextResponse.json({
            success: false,
            error: err.message
        });
    }
}
