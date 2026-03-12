
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const geminiKey = process.env.GEMINI_API_KEY!;

if (!supabaseUrl || !supabaseKey || !geminiKey) {
    console.error('Missing credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const genAI = new GoogleGenerativeAI(geminiKey);
const vocabModel = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });

const ADVISOR_ID = 'a55884ee-0b8a-46d2-a303-3d70a439020b'; // The Fitness Ad Architect

const KNOWLEDGE_FILES = [
    './knowledge-base/marketing/meta-ads-leaden-guide.md',
    './knowledge-base/marketing/fitness-scaling-funnel-strategy.md',
    './knowledge-base/marketing/fitness-ads-intro-guide.md'
];

async function getEmbedding(text: string) {
    const result = await (vocabModel as any).embedContent({
        content: { role: 'user', parts: [{ text }] },
        outputDimensionality: 1536
    });
    return result.embedding.values;
}

async function ingest() {
    console.log('Starting ingestion for Fitness Ad Architect...');

    for (const filePath of KNOWLEDGE_FILES) {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            console.error(`File not found: ${fullPath}`);
            continue;
        }

        const content = fs.readFileSync(fullPath, 'utf-8');
        const title = path.basename(filePath);

        console.log(`Processing: ${title}...`);

        // Check if duplicate
        const { data: existingDoc } = await supabase
            .from('documents')
            .select('id')
            .eq('title', title)
            .eq('advisor_id', ADVISOR_ID)
            .maybeSingle();

        let doc;
        if (existingDoc) {
            console.log(`Document ${title} already exists. Updating existing document.`);
            doc = existingDoc;
        } else {
            const { data: newDoc, error: createError } = await supabase
                .from('documents')
                .insert({
                    advisor_id: ADVISOR_ID,
                    title: title,
                    content_type: 'markdown',
                })
                .select()
                .single();

            if (createError) {
                console.error(`Error creating document ref for ${title}:`, createError);
                continue;
            }
            doc = newDoc;
        }

        // Delete existing chunks if any
        await supabase.from('document_chunks').delete().eq('document_id', doc.id);

        // Chunking (approx 1000 chars with 200 overlap)
        const chunks: string[] = [];
        const chunkSize = 1000;
        const overlap = 200;

        for (let i = 0; i < content.length; i += (chunkSize - overlap)) {
            chunks.push(content.slice(i, i + chunkSize));
            if (i + chunkSize >= content.length) break;
        }

        console.log(`Inserting ${chunks.length} chunks...`);

        for (let i = 0; i < chunks.length; i++) {
            const chunkContent = chunks[i];
            try {
                const embedding = await getEmbedding(chunkContent);
                const { error: chunkError } = await supabase.from('document_chunks').insert({
                    document_id: doc.id,
                    content: chunkContent,
                    embedding: embedding
                });

                if (chunkError) {
                    console.error(`Error inserting chunk ${i}:`, chunkError);
                } else {
                    process.stdout.write(`\rProgress: ${i + 1}/${chunks.length}`);
                }

                // Rate limiting safeguard
                await new Promise(resolve => setTimeout(resolve, 100));
            } catch (err) {
                console.error(`\nFailed to process chunk ${i}:`, err);
            }
        }
        console.log(`\nCompleted: ${title}\n`);
    }

    console.log('Ingestion process finished.');
}

ingest().catch(console.error);
