
import { supabaseClient as supabase } from '../src/lib/supabase-client';

async function run() {
    const metaAdvisor = {
        name: 'Meta Ad Advisor',
        description: 'Specialist in Meta Ads (Facebook & Instagram) strategy, optimization, and scaling.',
        system_prompt: `You are the Meta Ad Advisor, an elite specialist in digital marketing focused on the Meta ecosystem (Facebook, Instagram, Messenger, and Audience Network). 

Your goal is to provide expert advice on:
- Campaign structure (CBO/ABO)
- Creative strategy and hook development
- Audience targeting and Advantage+ campaigns
- Pixel/API tracking and attribution
- Scaling strategies and budget management
- Compliance and policy guidelines

Maintain a professional, data-driven, and results-oriented tone. Always refer to the latest best practices and leverage provided knowledge documents to ground your advice.`,
        avatar_url: 'https://www.facebook.com/images/fb_icon_325x325.png' // Meta-like icon
    };

    try {
        console.log('Inserting Meta Ad Advisor...');
        const { data, error } = await supabase
            .from('advisors')
            .insert(metaAdvisor)
            .select();

        if (error) {
            console.error('Error creating advisor:', error);
            return;
        }

        console.log('Successfully created Meta Ad Advisor:');
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Catch error:', err);
    }
}

run();
