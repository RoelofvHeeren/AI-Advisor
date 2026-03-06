
import { ingestContent } from '../src/lib/ingest-service';

async function testIngestion() {
    console.log('--- Testing Ingestion Progress Reporting ---');

    try {
        const result = await ingestContent({
            advisorId: 'aed6b7a7-b8d9-4753-9a77-abc4be8b4666', // Meta Ad Advisor
            type: 'text',
            title: 'Progress Test Document',
            content: 'This is a test document. '.repeat(100), // Very short to speed up test
            onStatusUpdate: (status) => {
                console.log(`📡 [SSE Event] Status: ${status}`);
            }
        });

        console.log('✅ Ingestion success:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('❌ Ingestion failed:', error);
    }
}

testIngestion();
