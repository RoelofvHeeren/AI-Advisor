import { ingestContent } from '../src/lib/ingest-service';

async function main() {
    const advisorId = "YOUR_ADVISOR_ID_HERE"; // Need to find this
    const urls = [
        "https://www.youtube.com/watch?v=MPDbgSLrfo4&t=18s"
    ];

    for (const url of urls) {
        console.log(`Ingesting ${url}...`);
        try {
            await ingestContent({
                advisorId,
                type: 'youtube',
                url
            });
            console.log(`Success: ${url}`);
        } catch (e) {
            console.error(`Error ingesting ${url}:`, e);
        }
    }
}

main().catch(console.error);
