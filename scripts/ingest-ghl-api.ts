import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';

// Load env vars
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const geminiKey = process.env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseKey || !geminiKey) {
    console.error('Missing credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const genAI = new GoogleGenerativeAI(geminiKey);
const vocabModel = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });

const KNOWLEDGE_BASE_DIR = path.join(process.cwd(), 'knowledge-base', 'ghl-api');

// Sleep helper
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Gemini Embedding Function
async function getEmbedding(text: string) {
    const result = await vocabModel.embedContent({
        content: { role: 'user', parts: [{ text }] },
        // @ts-ignore
        outputDimensionality: 1536
    });

    let embedding = result.embedding.values;
    if (embedding.length > 1536) {
        embedding = embedding.slice(0, 1536);
    }
    return embedding;
}

async function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): Promise<string[]> {
    const files = await fs.readdir(dirPath);

    for (const file of files) {
        if ((await fs.stat(dirPath + "/" + file)).isDirectory()) {
            arrayOfFiles = await getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else if (file.endsWith('.md')) {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    }
    return arrayOfFiles;
}

async function ingest() {
    console.log('Starting GoHighLevel API Bulk Ingestion...');

    // 1. Fetch GHL Advisor
    console.log('Fetching Advisor: GoHighLevel Support');
    const { data: advisor, error: advError } = await supabase
        .from('advisors')
        .select('id')
        .eq('name', 'GoHighLevel Support')
        .maybeSingle();

    let advisorId = advisor?.id;

    if (!advisorId) {
        console.error('Could not find GoHighLevel Support advisor. Run main ingest first.');
        return;
    }

    console.log(`Advisor ID: ${advisorId}`);

    // 2. Gather Markdown Files
    console.log('Scanning for scraped knowledge base markdown files...');
    const allFiles = await getAllFiles(KNOWLEDGE_BASE_DIR);
    console.log(`Found ${allFiles.length} API Markdown articles.`);

    // 3. Process Files
    let processedFiles = 0;

    for (const filePath of allFiles) {
        const text = await fs.readFile(filePath, 'utf-8');

        // Extract title from frontmatter or filename
        let title = path.basename(filePath, '.md');
        const titleMatch = text.match(/title:\s*"([^"]+)"/);
        if (titleMatch && titleMatch[1]) {
            title = 'API Doc: ' + titleMatch[1];
        } else {
            title = 'API Doc: ' + title;
        }

        const urlMatch = text.match(/url:\s*"([^"]+)"/);
        const url = urlMatch ? urlMatch[1] : `ghl-api-${path.basename(filePath, '.md')}`;

        // Sanitize text: remove null bytes
        const cleanText = text.replace(/\0/g, '');

        // Check if duplicate
        const { data: existingDoc } = await supabase
            .from('documents')
            .select('id')
            .eq('title', title)
            .eq('advisor_id', advisorId)
            .maybeSingle();

        if (existingDoc) {
            console.log(`[Skipping] Document ${title} already exists.`);
            processedFiles++;
            continue;
        }

        console.log(`\n[Ingesting ${processedFiles + 1}/${allFiles.length}] ${title}`);

        const { data: doc, error: docError } = await supabase
            .from('documents')
            .insert({
                advisor_id: advisorId,
                title: title,
                source_url: url,
                content_type: 'text',
                raw_content: cleanText,
                content: cleanText
            })
            .select()
            .single();

        if (docError) {
            console.error(`Error creating document ref for ${title}:`, docError.message);
            continue;
        }

        // Chunking text
        const chunks = [];
        const chunkSize = 1000;
        const overlap = 200;

        for (let i = 0; i < cleanText.length; i += (chunkSize - overlap)) {
            chunks.push(cleanText.slice(i, i + chunkSize));
        }

        // Generating embeddings and inserting
        let chunksProcessed = 0;
        for (const chunkContent of chunks) {
            try {
                const embedding = await getEmbedding(chunkContent);
                await supabase.from('document_chunks').insert({
                    document_id: doc.id,
                    content: chunkContent,
                    embedding: embedding
                });

                chunksProcessed++;
                process.stdout.write(`\rChunks Embedded: ${chunksProcessed}/${chunks.length}`);

                await sleep(150); // Be nice to API limits
            } catch (e: any) {
                console.error(`\nError processing chunk for ${title}:`, e.message);
                if (e.message.includes('429')) {
                    console.log('Hit rate limit! Sleeping for 10 seconds...');
                    await sleep(10000);
                }
            }
        }

        processedFiles++;
    }

    console.log('\n\nBulk Ingestion Complete!');
}

ingest().catch(console.error);
