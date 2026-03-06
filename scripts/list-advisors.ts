
import { supabaseClient as supabase } from '../src/lib/supabase-client';

async function run() {
    try {
        const { data, error } = await supabase.from('advisors').select('*');
        if (error) {
            console.error('Error fetching advisors:', error);
            return;
        }
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Catch error:', err);
    }
}

run();
