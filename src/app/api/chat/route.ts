import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { genAI, embeddingModel } from '@/lib/gemini';
import { FunctionDeclaration, SchemaType } from '@google/generative-ai';
import { github_list_files, github_read_file, github_create_or_update_file } from '@/lib/tools/github';

export async function POST(req: Request) {
    try {
        const { message, sessionId, advisorIds: providedAdvisorIds, model, attachments } = await req.json();

        if (!message && (!attachments || attachments.length === 0)) {
            return NextResponse.json({ error: 'Missing message or attachments' }, { status: 400 });
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
            content: { role: 'user', parts: [{ text: message || "Attachment provided" }] }
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

        // 3.5 Fetch Document Titles (Table of Contents)
        const { data: documents } = await supabase
            .from('documents')
            .select('title, advisor_id')
            .in('advisor_id', advisorIds);

        let documentContext = '';
        if (documents && documents.length > 0) {
            documentContext = '\n[COMPLETE KNOWLEDGE LIBRARY INDEX]:\nHere is the full list of all documents/videos this expert has access to (you can refer to this list if the user asks what you know about):\n';
            advisors.forEach(adv => {
                const advDocs = documents.filter(d => d.advisor_id === adv.id);
                if (advDocs.length > 0) {
                    if (advisors.length > 1) {
                        documentContext += `\n${adv.name}'s Library:\n`;
                    }
                    advDocs.forEach(d => {
                        documentContext += `- ${d.title}\n`;
                    });
                }
            });
            documentContext += '\n';
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
                match_count: 40,
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
You are a HIGH-LEVEL MENTOR and EXPERT ADVISOR with UNPRECEDENTED ACCESS to your full knowledge base.
- CORE PRINCIPLE: Use DISCERNMENT. You have access to 40+ snippets of specific knowledge (provided below), but you should ONLY draw from and cite what is directly relevant and necessary for the current query.
- ADAPTIVE LENGTH: If the user asks a simple question or a confirmation (e.g., "Is that right?"), respond briefly and naturally (e.g., "Yes indeed").
- DEEP-DIVE MODE: Switch to exhaustive, detail-oriented mode ONLY when the query is complex, strategic, or explicitly asks for a breakdown.
- QUALITY OVER QUANTITY: When a deep-dive is required, synthesize the EXTENSIVE context provided below into a high-impact response. Do not skip crucial details, but do not include irrelevant filler.
- Methodically DIAGNOSE the user's situation with sharp, clarifying questions when context is missing.
- Structure complex advice with clear headings and bold text, explaining the "Why" (strategic) before the "How" (tactical).
- Explicitly attribute specific insights to your knowledge base when it adds value.
- DOCUMENT GENERATION: If you generate a best-practice document, SOP, or data table, do NOT include instructions on how to download it as a PDF or CSV. The user has built-in buttons for this. Simply provide the high-value content directly.
- GITHUB REPOSITORY ACCESS: You have explicit permission to read from, list, and write directly to the user's GitHub repositories using the provided tools. 
    - When the user asks you to create a file or "upload" something to their project, you MUST use the \`github_create_or_update_file\` tool to push the content directly to the repo. Do not ask for permission, just do it.
    - If you are asked to review a project, use \`github_list_files\` to explore the structure, and \`github_read_file\` to read the code, then synthesize your advice.
    - NEVER invent file structures; always use the list tool to verify what actually exists in the repository before reading or writing.
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
${documentContext}
CONTEXT FROM EXPERT KNOWLEDGE BASES:
${combinedContext}

------

USER QUERY: ${message || "Please analyze the attached files."}

GO:
    `;

        const parts: any[] = [{ text: fullPrompt }];

        if (attachments && attachments.length > 0) {
            for (const att of attachments) {
                parts.push({
                    inlineData: {
                        data: att.base64,
                        mimeType: att.type
                    }
                });
            }
        }

        // 7. Generate response dynamically with selected model
        const selectedModel = model || 'gemini-3-flash-preview';

        // Define GitHub tools schema
        const githubTools = [
            {
                name: "github_list_files",
                description: "List files and directories in a specific GitHub repository.",
                parameters: {
                    type: SchemaType.OBJECT,
                    properties: {
                        owner: { type: SchemaType.STRING, description: "Repository owner (e.g., 'RoelofvHeeren')" },
                        repo: { type: SchemaType.STRING, description: "Repository name (e.g., 'AI-Advisor')" },
                        path: { type: SchemaType.STRING, description: "Optional path to list contents of a specific directory" },
                    },
                    required: ["owner", "repo"],
                },
            },
            {
                name: "github_read_file",
                description: "Read the exact content of a specific file from a GitHub repository.",
                parameters: {
                    type: SchemaType.OBJECT,
                    properties: {
                        owner: { type: SchemaType.STRING, description: "Repository owner (e.g., 'RoelofvHeeren')" },
                        repo: { type: SchemaType.STRING, description: "Repository name (e.g., 'AI-Advisor')" },
                        path: { type: SchemaType.STRING, description: "Full path to the file (e.g., 'src/app/page.tsx')" },
                    },
                    required: ["owner", "repo", "path"],
                },
            },
            {
                name: "github_create_or_update_file",
                description: "Push changes or create a new file directly into a GitHub repository.",
                parameters: {
                    type: SchemaType.OBJECT,
                    properties: {
                        owner: { type: SchemaType.STRING, description: "Repository owner (e.g., 'RoelofvHeeren')" },
                        repo: { type: SchemaType.STRING, description: "Repository name (e.g., 'AI-Advisor')" },
                        path: { type: SchemaType.STRING, description: "Full path to the file to create or update (e.g., 'docs/best-practices.md')" },
                        content: { type: SchemaType.STRING, description: "The full raw text content to write to the file." },
                        commit_message: { type: SchemaType.STRING, description: "A concise commit message explaining the change." },
                    },
                    required: ["owner", "repo", "path", "content", "commit_message"],
                },
            }
        ];

        const dynamicGeminiModel = genAI.getGenerativeModel({
            model: selectedModel,
            tools: [{ functionDeclarations: githubTools as FunctionDeclaration[] }]
        });

        // Loop to handle potential multiple tool calls
        let chatSession = dynamicGeminiModel.startChat({ history: [] }); // We pass history manually via parts, so start new
        let result = await chatSession.sendMessage(parts);
        let responseText = '';

        let toolCalls = result.response.functionCalls();
        while (toolCalls && toolCalls.length > 0) {
            const toolResults = [];

            for (const call of toolCalls) {
                console.log('AI Requested Tool:', call.name, call.args);
                let funcResult: any;

                try {
                    if (call.name === 'github_list_files') {
                        funcResult = await github_list_files(call.args as any);
                    } else if (call.name === 'github_read_file') {
                        funcResult = await github_read_file(call.args as any);
                    } else if (call.name === 'github_create_or_update_file') {
                        funcResult = await github_create_or_update_file(call.args as any);
                    } else {
                        funcResult = { error: `Unknown tool: ${call.name}` };
                    }
                } catch (e: any) {
                    console.error(`Tool Execution Error (${call.name}):`, e.message);
                    funcResult = { error: e.message };
                }

                toolResults.push({
                    functionResponse: {
                        name: call.name,
                        response: funcResult
                    }
                });
            }

            // Send tool results back to the model
            result = await chatSession.sendMessage(toolResults);
            toolCalls = result.response.functionCalls();
        }

        responseText = result.response.text();

        // 8. PERSIST TO DB
        if (sessionId) {
            let dbMessage = message;
            if (attachments && attachments.length > 0) {
                dbMessage += `\n\n*(Attached ${attachments.length} file${attachments.length > 1 ? 's' : ''})*`;
            }
            if (!dbMessage.trim()) dbMessage = "*(Sent attachments)*";

            // Save User Message
            await supabase.from('chat_messages').insert({
                session_id: sessionId,
                role: 'user',
                content: dbMessage.trim()
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
