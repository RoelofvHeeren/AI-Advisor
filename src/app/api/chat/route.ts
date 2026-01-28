import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { geminiModel, embeddingModel } from '@/lib/gemini';

export async function POST(req: Request) {
    try {
        const { message, advisorIds } = await req.json();

        if (!message || !advisorIds || !Array.isArray(advisorIds) || advisorIds.length === 0) {
            return NextResponse.json({ error: 'Missing message or advisorIds' }, { status: 400 });
        }

        // 1. Get embedding for the user's message
        const embeddingResult = await embeddingModel.embedContent({
            content: { role: 'user', parts: [{ text: message }] },
            outputDimensionality: 768
        });
        const queryEmbedding = embeddingResult.embedding.values;

        // 2. Fetch all Advisors info
        const { data: advisors } = await supabase
            .from('advisors')
            .select('*')
            .in('id', advisorIds);

        if (!advisors || advisors.length === 0) {
            return NextResponse.json({ error: 'No advisors found' }, { status: 404 });
        }

        // 3. Search for context across all selected advisors
        // We'll run match_document_chunks for each or modify search to handle multiple.
        // For simplicity, let's run them and combine.
        const contextPromises = advisors.map(adv =>
            supabase.rpc('match_document_chunks', {
                query_embedding: queryEmbedding,
                match_threshold: 0.3, // Lower threshold for broader group discussion
                match_count: 3,
                filter_advisor_id: adv.id,
            })
        );

        const contextResults = await Promise.all(contextPromises);

        let combinedContext = '';
        contextResults.forEach((res, idx) => {
            const advName = advisors[idx].name;
            const chunks = res.data?.map((c: any) => c.content).join('\n') || 'No specific context.';
            combinedContext += `\n[KNOWLEDGE FOR ${advName.toUpperCase()}]:\n${chunks}\n`;
        });

        // 4. Construct prompt
        let systemPrompt = '';
        if (advisors.length === 1) {
            systemPrompt = advisors[0].system_prompt;
        } else {
            const names = advisors.map(a => a.name).join(', ');
            systemPrompt = `
You are facilitating a group discussion between the following experts: ${names}.
Each expert has their own knowledge base provided below. 

YOUR GOAL: Respond as a collaborative panel. Address the user's query by synthesizing the advice from these experts. You can attribute specific points to specific experts (e.g. "Alex would suggest focusing on volume..."). Keep the tone professional, high-value, and direct.

PERSONAS INVOLVED:
${advisors.map(a => `- ${a.name}: ${a.system_prompt}`).join('\n')}
        `;
        }

        const fullPrompt = `
${systemPrompt}

CONTEXT FROM EXPERT KNOWLEDGE BASES:
${combinedContext}

------

USER QUERY: ${message}

GO:
    `;

        // 5. Generate response
        const result = await geminiModel.generateContent(fullPrompt);
        const responseText = result.response.text();

        return NextResponse.json({ text: responseText });

    } catch (error: any) {
        console.error('Chat error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
