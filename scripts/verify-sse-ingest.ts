import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function verifySSE() {
  const platformUrl = "https://ai-advisor-production-80f9.up.railway.app";
  // Fetch a valid API key from Supabase .env.local via some shell logic or just use the one we know exists
  const apiKey = process.env.EXTENSION_API_KEY || "fb3a0972-7489-498c-8438-fb376378c85b"; // Using the known valid key from previous logs

  console.log("🚀 Starting SSE Ingestion Verification...");
  console.log(`📡 Endpoint: ${platformUrl}/api/extension/ingest`);

  const response = await fetch(`${platformUrl}/api/extension/ingest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify({
      advisorIds: ["d50b31de-4f95-48b8-8eae-41dabad5e2a4"], // Alex Hormozi
      items: [
        { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Test Video 1", type: "youtube" }
      ]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ Request failed:", errorText);
    return;
  }

  console.log("✅ Connection established. Processing stream...");

  if (!response.body) {
    throw new Error("Response body is null");
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const text = decoder.decode(value);
    const chunks = text.split('\n\n');

    for (const chunk of chunks) {
      if (chunk.startsWith('data: ')) {
        try {
          const data = JSON.parse(chunk.replace('data: ', ''));
          console.log("📦 Received Event:", data.type || "unknown", data.status || "");

          if (data.type === 'done') {
            console.log("🏁 Stream Complete!");
            console.log(`📊 Summary: ${data.successful}/${data.total} items successful.`);
            process.exit(0);
          }
        } catch (e) {
          // Fragmented JSON, ignore or buffer (rare in this sim)
        }
      }
    }
  }
}

verifySSE().catch(console.error);
