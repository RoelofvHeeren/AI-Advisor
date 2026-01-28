const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const envConfig = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

async function run() {
    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });
        // Try requesting 768
        const result = await model.embedContent({
            content: { role: 'user', parts: [{ text: 'Hello world' }] },
            outputDimensionality: 768
        });
        console.log(`Requested 768. Got: ${result.embedding.values.length}`);
    } catch (e) {
        console.log(`Error with param: ${e.message}`);
    }
}
run();
