import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config({ path: '.env.local' });

async function testRetrieval() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // 1. Get embedding for a test query
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const embeddingModel = genAI.getGenerativeModel({ model: 'models/gemini-embedding-001' });
  const result = await embeddingModel.embedContent({
      content: { role: 'user', parts: [{ text: "What is this video about?" }] }
  });
  
  let queryEmbedding = result.embedding.values;
  queryEmbedding = queryEmbedding.slice(0, 1536);
  
  // 2. Search for the query embedding in the DB
  const { data: advisors } = await supabase.from('advisors').select('*');
  if (!advisors || advisors.length === 0) {
      console.log("No advisors found.");
      return;
  }
  
  for (const adv of advisors) {
      console.log(`Searching for context in Advisor: ${adv.name} (${adv.id})`);
      const { data, error } = await supabase.rpc('match_document_chunks', {
          query_embedding: queryEmbedding as any,
          match_threshold: 0.3, // Matching threshold from the API route
          match_count: 3,
          filter_advisor_id: adv.id,
      });
      
      if (error) {
          console.error("Error retrieving context:", error);
      } else {
          console.log(`Found ${data ? data.length : 0} matching chunks.`);
          if (data && data.length > 0) {
              console.log("First chunk snippet:", (data[0] as any).content.substring(0, 100) + "...");
          }
      }
  }
}
testRetrieval();
