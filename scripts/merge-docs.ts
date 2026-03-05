import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const DRY_RUN = false; // FINALLY!

async function fetchAllDocuments() {
    let allDocs: any[] = [];
    let page = 0;
    const pageSize = 1000;

    console.log('Fetching all documents from Supabase...');

    while (true) {
        const { data, error } = await supabase
            .from('documents')
            .select('*')
            .range(page * pageSize, (page + 1) * pageSize - 1)
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Error fetching documents:', error);
            break;
        }

        if (!data || data.length === 0) break;

        allDocs = [...allDocs, ...data];
        console.log(`Fetched ${allDocs.length} documents...`);

        if (data.length < pageSize) break;
        page++;
    }

    return allDocs;
}

async function mergeDocuments() {
    console.log(`🚀 Starting Knowledge Base Consolidation... ${DRY_RUN ? '(DRY RUN)' : ''}`);

    const allDocs = await fetchAllDocuments();
    console.log(`\nTotal documents to process: ${allDocs.length}`);

    // 2. Define Grouping Logic
    const groups: Record<string, any[]> = {};

    for (const doc of allDocs) {
        let category = 'Others';

        const titleMatched = doc.title.toLowerCase().includes('api doc:');

        if (titleMatched) {
            const url = doc.source_url || '';
            // Match marketplace.gohighlevel.com/docs/ghl/contacts/ or marketplace.gohighlevel.com/docs/webhook/
            const match = url.match(/\/docs\/(?:ghl\/|category\/)?([a-z0-9-]+)/);
            if (match && match[1]) {
                const rawCat = match[1];
                category = `API - ${rawCat.charAt(0).toUpperCase() + rawCat.slice(1).replace(/-/g, ' ')}`;
            } else {
                category = 'API - General';
            }
        } else if (doc.content_type === 'youtube') {
            continue;
        } else {
            const parts = doc.title.split(' - ');
            if (parts.length > 1) {
                category = `Support - ${parts[0]}`;
            } else {
                category = 'Support - General';
            }
        }

        // UNIQUE KEY: advisorId + category
        const groupKey = `${doc.advisor_id}::${category}`;
        if (!groups[groupKey]) groups[groupKey] = [];
        groups[groupKey].push(doc);
    }

    const groupKeys = Object.keys(groups).sort();
    console.log(`\nIdentified ${groupKeys.length} advisor-category groups.`);

    // 3. Process each group
    for (const groupKey of groupKeys) {
        const [advisorId, category] = groupKey.split('::');
        const docs = groups[groupKey];
        if (docs.length <= 2 && category !== 'API - General') {
            // Keep small categories as is, unless it's a general bucket
            continue;
        }

        console.log(`\n📦 Group: "${category}" (${docs.length} items)`);

        if (DRY_RUN) {
            console.log('Sample titles:', docs.slice(0, 3).map(d => d.title).join(', ') + (docs.length > 3 ? '...' : ''));
            continue;
        }

        const sortedDocs = [...docs].sort((a, b) => a.title.localeCompare(b.title));

        let mergedContent = `# ${category} - Complete Reference\n\n`;
        let mergedRawContent = `Merged Documentation: ${category}\n\n`;

        for (const doc of sortedDocs) {
            mergedContent += `\n---\n## ${doc.title}\nSource: ${doc.source_url || 'N/A'}\n\n${doc.content}\n\n`;
            mergedRawContent += `\n--- DOCUMENT: ${doc.title} ---\n${doc.raw_content}\n\n`;
        }

        // 4. Create Master Document
        const { data: masterDoc, error: masterError } = await supabase
            .from('documents')
            .insert({
                advisor_id: docs[0].advisor_id,
                title: `${category} (Complete Reference)`,
                content_type: docs[0].content_type,
                source_url: null,
                content: mergedContent,
                raw_content: mergedRawContent
            })
            .select()
            .single();

        if (masterError || !masterDoc) {
            console.error(`Error creating master doc for ${category}:`, masterError);
            continue;
        }

        console.log(`Created master doc: ${masterDoc.id}`);

        // 5. Re-link chunks
        const docIdsToMigrate = docs.map(d => d.id);
        const { error: relinkError } = await supabase
            .from('document_chunks')
            .update({ document_id: masterDoc.id })
            .in('document_id', docIdsToMigrate);

        if (relinkError) {
            console.error(`Error re-linking chunks for ${category}:`, relinkError);
            continue;
        }

        // 6. Delete old documents
        const { error: deleteError } = await supabase
            .from('documents')
            .delete()
            .in('id', docIdsToMigrate);

        if (deleteError) {
            console.error(`Error deleting old docs for ${category}:`, deleteError);
        } else {
            console.log(`Successfully merged ${docs.length} items into 1!`);
        }
    }

    console.log(`\n✅ Consolidation Complete! ${DRY_RUN ? '(No changes applied)' : ''}`);
}

mergeDocuments().catch(console.error);
