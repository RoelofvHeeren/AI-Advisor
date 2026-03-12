
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAdvisors() {
    const { data, error } = await supabase
        .from('advisors')
        .select('*');

    if (error) {
        console.error('Error fetching advisors:', error);
        return;
    }

    console.log(JSON.stringify(data, null, 2));
}

fetchAdvisors();
