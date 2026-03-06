import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function test() {
  console.time('Total Time');
  
  // 1. Fetch Advisor
  console.time('Fetch Advisor');
  const { data: advisors } = await supabase.from('advisors').select('*').limit(1);
  const advisorId = advisors![0].id;
  console.timeEnd('Fetch Advisor');

  // 2. Fetch Document Table of Contents
  console.time('Fetch TOC');
  const { data: documents } = await supabase.from('documents').select('title, advisor_id').in('advisor_id', [advisorId]).limit(10000);
  console.timeEnd('Fetch TOC');
  console.log(`TOC Items: ${documents?.length}`);

  // 3. Generate Embedding
  console.time('Embedding');
  const vocabModel = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });
  const embeddingResult = await vocabModel.embedContent("What custom fields are recommended for my use case?");
  let queryEmbedding = embeddingResult.embedding.values.slice(0, 1536);
  console.timeEnd('Embedding');

  // 4. Vector Search
  console.time('Vector Search');
  const { data: context } = await supabase.rpc('match_document_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: 0.3,
      match_count: 40,
      filter_advisor_id: advisorId,
  });
  console.timeEnd('Vector Search');
  console.log(`Context Chunks: ${context?.length}`);

  // 5. Gemini Generation
  console.time('Gemini Generation');
  const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
  const result = await model.generateContent("Say 'hello' and list 3 words.");
  console.log(result.response.text());
  console.timeEnd('Gemini Generation');

  console.timeEnd('Total Time');
}

test();
