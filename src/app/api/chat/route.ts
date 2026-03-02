import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { geminiModel, embeddingModel } from '@/lib/gemini';

export async function POST(req: Request) {
    try {
        const { message, sessionId, advisorIds: providedAdvisorIds } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Missing message' }, { status: 400 });
        }

        let advisorIds = providedAdvisorIds;

        // 1. If sessionId is provided, fetch linked advisors if none provided
        if (sessionId && (!advisorIds || advisorIds.length === 0)) {
            const { data: sessionAdvisors } = await supabase
                .from('chat_session_advisors')
                .select('advisor_id')
                .eq('session_id', sessionId);

            if (sessionAdvisors) {
                advisorIds = sessionAdvisors.map(sa => sa.advisor_id);
            }
        }

        if (!advisorIds || advisorIds.length === 0) {
            return NextResponse.json({ error: 'Missing advisorIds' }, { status: 400 });
        }

        // 2. Get embedding for the user's message
        const embeddingResult = await (embeddingModel as any).embedContent({
            content: { role: 'user', parts: [{ text: message }] }
        });
        let queryEmbedding = embeddingResult.embedding.values;

        // Slice embedding from 3072 to 1536 to match the database vector scale
        queryEmbedding = queryEmbedding.slice(0, 1536);

        // 3. Fetch all Advisors info
        const { data: advisors } = await supabase
            .from('advisors')
            .select('*')
            .in('id', advisorIds);

        if (!advisors || advisors.length === 0) {
            return NextResponse.json({ error: 'No advisors found' }, { status: 404 });
        }

        // 4. Load Previous History if sessionId exists
        let history = '';
        if (sessionId) {
            const { data: pastMessages } = await supabase
                .from('chat_messages')
                .select('*')
                .eq('session_id', sessionId)
                .order('created_at', { ascending: true })
                .limit(10);

            if (pastMessages) {
                history = pastMessages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n');
            }
        }

        // 5. Search for context across all selected advisors
        const contextPromises = advisors.map(adv =>
            supabase.rpc('match_document_chunks', {
                query_embedding: queryEmbedding,
                match_threshold: 0.3,
                match_count: 6,
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

        // 6. Construct prompt
        const MENTOR_INSTRUCTION = `
IMPORTANT BEHAVIORAL INSTRUCTION:
You are a HIGH-LEVEL MENTOR and EXPERT ADVISOR.
- Your goal is to provide deep, actionable, and high-impact value in every response.
- Do NOT settle for generic or short answers. If a topic is complex, provide a comprehensive breakdown.
- Methodically DIAGNOSE the user's situation by asking sharp, clarifying questions if their query is vague.
- When giving advice, structure it with clear headings, bold text for key concepts, and explain the "Why" (strategic) before the "How" (tactical).
- Draw HEAVILY from the specific knowledge base context provided below. Attribute specific insights to the relevant knowledge source when possible.
- Adapt your length to the complexity: be concise for simple facts, but be thorough and expansive for strategy, planning, or complex problem-solving.
`;

        let systemPrompt = '';
        if (advisors.length === 1) {
            systemPrompt = `
${advisors[0].system_prompt}

${MENTOR_INSTRUCTION}
`;
        } else {
            const names = advisors.map(a => a.name).join(', ');
            systemPrompt = `
You are facilitating a group discussion between the following experts: ${names}.
Each expert has their own knowledge base provided below. 

YOUR GOAL: Respond as a collaborative panel. Address the user's query by synthesizing the advice from these experts. You can attribute specific points to specific experts (e.g. "Alex would suggest focusing on volume..."). Keep the tone professional, high-value, and direct.

${MENTOR_INSTRUCTION}

PERSONAS INVOLVED:
${advisors.map(a => `- ${a.name}: ${a.system_prompt}`).join('\n')}
        `;
        }

        const fullPrompt = `
${systemPrompt}

${history ? `PREVIOUS CONVERSATION HISTORY:\n${history}\n` : ''}

CONTEXT FROM EXPERT KNOWLEDGE BASES:
${combinedContext}

------

USER QUERY: ${message}

GO:
    `;

        // 7. Generate response
        const result = await geminiModel.generateContent(fullPrompt);
        const responseText = result.response.text();

        // 8. PERSIST TO DB
        if (sessionId) {
            // Save User Message
            await supabase.from('chat_messages').insert({
                session_id: sessionId,
                role: 'user',
                content: message
            });
            // Save Assistant Message
            await supabase.from('chat_messages').insert({
                session_id: sessionId,
                role: 'assistant',
                content: responseText
            });
            // Update last_message_at
            await supabase.from('chat_sessions').update({
                last_message_at: new Date().toISOString()
            }).eq('id', sessionId);
        }

        return NextResponse.json({ text: responseText });

    } catch (error: any) {
        console.error('Chat error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
