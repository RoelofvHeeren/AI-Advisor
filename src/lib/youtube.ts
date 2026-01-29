import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function getYouTubeTranscript(videoId: string) {
    // Layer 1: Try Python bridge (Gold Standard)
    try {
        console.log(`Layer 1: Attempting Python bridge for ${videoId}...`);
        // Note: Railway Railpack installs python/pip automatically if requirements.txt exists
        const scriptPath = path.join(process.cwd(), 'scripts', 'get_transcript.py');
        const { stdout } = await execAsync(`python3 "${scriptPath}" ${videoId}`);
        const result = JSON.parse(stdout);

        if (result.success && result.transcript) {
            console.log('Layer 1 Success: Transcript retrieved via Python.');
            return result.transcript;
        }
        console.warn('Layer 1 Failed:', result.error);
    } catch (error: any) {
        console.warn('Layer 1 Exception (likely Python not available locally):', error.message);
    }

    // Layer 2: Manual JS Scraper (Robust Fallback)
    try {
        console.log(`Layer 2: Attempting manual JS scraper for ${videoId}...`);
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const response = await fetch(videoUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const html = await response.text();

        const regex = /ytInitialPlayerResponse\s*=\s*({.+?});/;
        const match = html.match(regex);
        if (!match) return null;

        const playerResponse = JSON.parse(match[1]);
        const captionTracks = playerResponse?.captions?.playerCaptionsTracklistRenderer?.captionTracks;

        if (!captionTracks || captionTracks.length === 0) return null;

        const track = captionTracks.find((t: any) => t.languageCode === 'en' && !t.kind) ||
            captionTracks.find((t: any) => t.languageCode === 'en') ||
            captionTracks.find((t: any) => !t.kind) ||
            captionTracks[0];

        const transcriptRes = await fetch(track.baseUrl);
        const xml = await transcriptRes.text();

        const textRegex = /<text.*?>(.*?)<\/text>/g;
        let textContent = '';
        let textMatch;
        while ((textMatch = textRegex.exec(xml)) !== null) {
            const line = textMatch[1]
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'");
            textContent += line + ' ';
        }

        if (textContent.trim()) {
            console.log('Layer 2 Success: Transcript retrieved via JS manual.');
            return textContent.trim();
        }
    } catch (error) {
        console.error('Layer 2 Error:', error);
    }

    return null;
}
