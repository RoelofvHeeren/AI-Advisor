import { config } from 'dotenv';
config({ path: '.env.local' });
import { supabase } from '../src/lib/supabase-server';

async function checkKeys() {
    const { data, error } = await supabase.from('api_keys').select('*');
    if (error) {
        console.error('Error fetching keys:', error);
    } else {
        console.log('API Keys in DB:');
        console.log(data);
    }
}

checkKeys();
