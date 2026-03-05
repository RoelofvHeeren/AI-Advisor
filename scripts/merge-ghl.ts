import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    // 1. Fix the avatar URL
    console.log('Fixing avatar URL...');
    const { data: newAdv, error: e1 } = await supabase
        .from('advisors')
        .update({ avatar_url: 'https://cdn.dribbble.com/users/3522201/screenshots/16629735/media/3133de5cc51a2d67aae905eff784ed2b.png' })
        .eq('name', 'GoHighLevel Support')
        .select('id, name')
        .single();

    if (e1) {
        console.error('Failed to update avatar:', e1);
    } else {
        console.log(`Updated avatar for: ${newAdv.name}`);
    }

    // 2. Find old advisor
    const { data: oldAdv, error: e2 } = await supabase
        .from('advisors')
        .select('id, name')
        .eq('id', '1d754367-c12c-4183-bd70-363cb184234c')
        .maybeSingle();

    if (e2 || !oldAdv) {
        console.error('Could not find old Go High Level advisor');
    } else {
        console.log(`Found old advisor: ${oldAdv.name} (${oldAdv.id})`);

        // 3. Move documents
        if (newAdv) {
            const { data: docs, error: e3 } = await supabase
                .from('documents')
                .update({ advisor_id: newAdv.id })
                .eq('advisor_id', oldAdv.id)
                .select('id, title');

            if (e3) {
                console.error('Failed to move documents:', e3);
            } else {
                console.log(`Moved ${docs.length} documents from ${oldAdv.name} to ${newAdv.name}`);
                for (const doc of docs) {
                    console.log(` - ${doc.title}`);
                }
            }
        }
    }

    // Check total GHL documents
    if (newAdv) {
        const { count, error: e4 } = await supabase
            .from('documents')
            .select('*', { count: 'exact', head: true })
            .eq('advisor_id', newAdv.id);
        console.log(`Total documents now under ${newAdv.name}: ${count}`);
    }
}

run().catch(console.error);
