
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspect() {
    try {
        console.log('--- ADVISORS ---');
        const { data: advisors } = await supabase.from('advisors').select('*');
        advisors?.forEach(a => {
            console.log(`Advisor: ${a.name}`);
            if (a.system_prompt.includes('497')) console.log(`  !! System Prompt contains "497"`);
            if (a.description.includes('497')) console.log(`  !! Description contains "497"`);
        });

        console.log('\n--- RECENT SESSIONS ---');
        const { data: sessions } = await supabase.from('chat_sessions').select('*').order('created_at', { ascending: false }).limit(5);
        for (const s of sessions || []) {
            console.log(`Session: ${s.id} - ${s.title}`);
            const { data: msgs } = await supabase.from('chat_messages').select('*').eq('session_id', s.id).order('created_at', { ascending: false }).limit(2);
            msgs?.forEach(m => {
                console.log(`  [${m.role}] ${m.content.substring(0, 100)}...`);
            });
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

inspect();
