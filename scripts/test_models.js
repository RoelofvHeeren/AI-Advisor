const https = require('https');
const fs = require('fs');

// Load env vars
const envConfig = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const key = env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

console.log('Querying:', url.replace(key, 'HIDDEN'));

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.models) {
                console.log('Found models via REST:');
                json.models.forEach(m => {
                    if (m.name.includes('bedding')) {
                        console.log(` - ${m.name}`);
                        console.log(`   Methods: ${JSON.stringify(m.supportedGenerationMethods)}`);
                    }
                });
            } else {
                console.log('REST Error:', JSON.stringify(json, null, 2));
            }
        } catch (e) { console.log('Parse error', data); }
    })
});
