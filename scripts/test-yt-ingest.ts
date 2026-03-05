import { getYouTubeTranscript } from '../src/lib/youtube';

async function test() {
    // Rick Astley - Never Gonna Give You Up
    const videoId = 'dQw4w9WgXcQ';
    console.log(`Testing transcript fetch for video ID: ${videoId}`);

    try {
        console.log('--- Starting layers ---');
        const transcript = await getYouTubeTranscript(videoId);

        console.log('\n--- SUCCESS ---');
        console.log(`Transcript extracted! Length: ${transcript.length} characters`);
        console.log(`Preview: "${transcript.substring(0, 150)}..."`);
    } catch (e) {
        console.error('\n--- FAILED ---', e);
    }
}

test();
