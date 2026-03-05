async function testLogin() {
    console.log('Testing extension login against production...');
    const url = 'https://ai-advisor-production-80f9.up.railway.app';
    const fakeKey = 'aiadv_faketestabc123';

    try {
        const res = await fetch(`${url}/api/extension/advisors`, {
            headers: {
                'x-api-key': fakeKey
            }
        });

        console.log(`Status: ${res.status}`);
        const text = await res.text();
        console.log(`Response: ${text}`);
    } catch (e) {
        console.error('Fetch failed:', e);
    }
}

testLogin();
