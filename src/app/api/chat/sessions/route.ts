import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // 'single' or 'mastermind'

    try {
        let query = supabase
            .from('chat_sessions')
            .select(`
                *,
                chat_session_advisors (
                    advisor_id,
                    advisors (name, avatar_url)
                )
            `)
            .order('last_message_at', { ascending: false });

        if (type === 'mastermind') {
            query = query.eq('is_mastermind', true);
        } else if (type === 'single') {
            query = query.eq('is_mastermind', false);
        }

        const { data, error } = await query;
        if (error) throw error;

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { title, advisorIds, isMastermind } = await req.json();

        // 1. Create Session
        const { data: session, error: sessionError } = await supabase
            .from('chat_sessions')
            .insert({
                title: title || (isMastermind ? 'New Mastermind' : 'New Chat'),
                is_mastermind: !!isMastermind
            })
            .select()
            .single();

        if (sessionError) throw sessionError;

        // 2. Link Advisors
        if (advisorIds && advisorIds.length > 0) {
            const links = advisorIds.map((id: string) => ({
                session_id: session.id,
                advisor_id: id
            }));
            const { error: linkError } = await supabase.from('chat_session_advisors').insert(links);
            if (linkError) throw linkError;
        }

        return NextResponse.json(session);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    try {
        const { error } = await supabase.from('chat_sessions').delete().eq('id', id);
        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
