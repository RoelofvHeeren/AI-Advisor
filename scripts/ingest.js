const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdf = require('pdf-parse');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load env vars
const envConfig = require('fs').readFileSync('.env.local', 'utf-8');
const env = {};
envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;
const geminiKey = env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseKey || !geminiKey) {
    console.error('Missing credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const genAI = new GoogleGenerativeAI(geminiKey);
const vocabModel = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });

const BOOKS = [
    {
        title: '$100M Leads',
        id: '1XQ_D7TEfZa_lwFMLKUOC-17Hix19dxmf',
        url: 'https://drive.google.com/uc?export=download&id=1XQ_D7TEfZa_lwFMLKUOC-17Hix19dxmf'
    },
    {
        title: '$100M Offers',
        id: '1bFsOzzxNQHM_-Vc7rRsLwNCpSxZRtEAS',
        url: 'https://drive.google.com/uc?export=download&id=1bFsOzzxNQHM_-Vc7rRsLwNCpSxZRtEAS'
    },
    {
        title: 'Gym Launch Secrets',
        id: '1Jlgbs8TbA-I7fotLW4Svt3eV1Gs_C1gn',
        url: 'https://drive.google.com/uc?export=download&id=1Jlgbs8TbA-I7fotLW4Svt3eV1Gs_C1gn'
    }
];

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 303) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

// Gemini Embedding Function
async function getEmbedding(text) {
    // Request 768 dimensions to match DB
    const result = await vocabModel.embedContent({
        content: { role: 'user', parts: [{ text }] },
        outputDimensionality: 768
    });
    const embedding = result.embedding;
    return embedding.values;
}

async function ingest() {
    console.log('Starting ingestion with Gemini...');

    // 1. Create Advisor (Alex Hormozi)
    console.log('Creating/Fetching Advisor: Alex Hormozi');
    const { data: advisor, error: advError } = await supabase
        .from('advisors')
        .select('id')
        .eq('name', 'Alex Hormozi')
        .maybeSingle();

    let advisorId = advisor?.id;

    if (!advisorId) {
        const { data: newAdvisor, error: createError } = await supabase
            .from('advisors')
            .insert({
                name: 'Alex Hormozi',
                description: 'Business mogul and author of $100M Leads and $100M Offers.',
                system_prompt: 'You are Alex Hormozi. You are direct, high-energy, and focused on providing actionable business advice based on your books ($100M Leads, $100M Offers). Do not fluff. Give straight value. Use caps for emphasis occasionally. Use simple language.',
                avatar_url: 'https://pbs.twimg.com/profile_images/1625969246237622273/W8t3wB4Q_400x400.jpg'
            })
            .select()
            .single();

        if (createError) {
            console.error('Error creating advisor:', createError);
            return;
        }
        advisorId = newAdvisor.id;
    }

    console.log(`Advisor ID: ${advisorId}`);

    // 2. Process Books
    for (const book of BOOKS) {
        console.log(`Processing: ${book.title}...`);
        const filePath = path.join(__dirname, `${book.id}.pdf`);

        if (!fs.existsSync(filePath)) {
            console.log('Downloading...');
            await downloadFile(book.url, filePath);
        } else {
            console.log('File already exists locally.');
        }

        console.log('Parsing PDF...');
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        // Sanitize text: remove null bytes which Postgres hates
        const text = data.text.replace(/\0/g, '');

        // Check if duplicate
        const { data: existingDoc } = await supabase.from('documents').select('id').eq('title', book.title).eq('advisor_id', advisorId).maybeSingle();
        if (existingDoc) {
            console.log(`Document ${book.title} already exists. Skipping.`);
            continue;
        }

        const { data: doc, error: docError } = await supabase
            .from('documents')
            .insert({
                advisor_id: advisorId,
                title: book.title,
                source_url: book.url,
                content_type: 'pdf'
            })
            .select()
            .single();

        if (docError) {
            console.error('Error creating document ref:', docError);
            continue;
        }

        console.log('Chunking text...');
        const chunks = [];
        const chunkSize = 1000;
        const overlap = 200;

        for (let i = 0; i < text.length; i += (chunkSize - overlap)) {
            chunks.push(text.slice(i, i + chunkSize));
        }
        console.log(`Generated ${chunks.length} chunks.`);

        console.log('Generating embeddings and inserting...');
        let processed = 0;

        // Process sequentially to be safe with rate limits on free tier, or small batches
        // Gemini free tier has rate limits, let's go conservative: 1 at a time or small batch with delay
        for (const chunkContent of chunks) {
            try {
                const embedding = await getEmbedding(chunkContent);
                await supabase.from('document_chunks').insert({
                    document_id: doc.id,
                    content: chunkContent,
                    embedding: embedding
                });
                processed++;
                if (processed % 10 === 0) process.stdout.write(`\rProgress: ${processed}/${chunks.length}`);

                // Tiny delay to be nice to the API
                await new Promise(r => setTimeout(r, 100));

            } catch (e) {
                console.error('\nError processing chunk:', e.message);
                // If quota, break
                if (e.message.includes('429')) break;
            }
        }
        console.log('\nDone with book:', book.title);
    }

    console.log('Ingestion Complete!');
}

ingest();
