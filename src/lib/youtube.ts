import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function getYouTubeTranscript(videoId: string) {
    let layer1Error = '';

    // Layer 1: Try Python bridge (Gold Standard)
    try {
        console.log(`Layer 1: Attempting Python bridge for ${videoId}...`);
        const scriptPath = path.join(process.cwd(), 'scripts', 'get_transcript.py');

        // Try different python binaries (common in different environments)
        const pythonBinaries = ['python3', 'python', '/opt/venv/bin/python'];
        let stdout = '';
        let success = false;
        let lastBinaryError = '';

        for (const bin of pythonBinaries) {
            try {
                // Limit execution time to 15s
                const { stdout: res, stderr: err } = await execAsync(`${bin} "${scriptPath}" ${videoId}`, { timeout: 15000 });
                if (err) console.warn(`[Layer 1 ${bin} stderr]:`, err);
                stdout = res;
                success = true;
                break;
            } catch (e: any) {
                lastBinaryError = e.message;
                continue;
            }
        }

        if (success) {
            try {
                const result = JSON.parse(stdout);
                if (result.success && result.transcript) {
                    console.log('Layer 1 Success: Transcript retrieved via Python.');
                    return result.transcript;
                }
                layer1Error = `Python Script Error: ${result.error}`;
                console.warn('Layer 1 Failed:', layer1Error);
            } catch (pE: any) {
                layer1Error = `Python Output Parsing Error: ${pE.message} | Raw: ${stdout.substring(0, 100)}`;
                console.warn('Layer 1 Failed:', layer1Error);
            }
        } else {
            layer1Error = `Python Binary Error (tried ${pythonBinaries.join(', ')}): ${lastBinaryError}`;
            console.warn('Layer 1 Failed:', layer1Error);
        }
    } catch (error: any) {
        layer1Error = `Layer 1 Unexpected Exception: ${error.message}`;
        console.warn(layer1Error);
    }

    // Layer 2: Manual JS Scraper (Robust Fallback)
    let layer2Error = '';
    try {
        console.log(`Layer 2: Attempting manual JS scraper for ${videoId}...`);
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const response = await fetch(videoUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cookie': 'CONSENT=YES+cb.20210328-17-p0.en+FX+417;'
            },
            signal: AbortSignal.timeout(15000)
        });

        if (!response.ok) throw new Error(`YouTube watch page returned status ${response.status}`);

        const html = await response.text();

        // Improved regex to find the captions inside the huge HTML
        const regex = /ytInitialPlayerResponse\s*=\s*({.+?});/;
        const match = html.match(regex);
        if (!match) {
            // Check if it's a restricted page
            if (html.includes('consent.youtube.com')) throw new Error('Redirected to consent page');
            if (html.includes('recaptcha')) throw new Error('Bot detection (reCAPTCHA) triggered');
            throw new Error('Could not find player response in HTML');
        }

        const playerResponse = JSON.parse(match[1]);
        const captionTracks = playerResponse?.captions?.playerCaptionsTracklistRenderer?.captionTracks;

        if (!captionTracks || captionTracks.length === 0) throw new Error('No caption tracks found in player response JSON');

        const track = captionTracks.find((t: any) => t.languageCode === 'en' && !t.kind) ||
            captionTracks.find((t: any) => t.languageCode === 'en') ||
            captionTracks.find((t: any) => !t.kind) ||
            captionTracks[0];

        console.log(`[YouTube] Fetching transcript from: ${track.baseUrl.substring(0, 50)}...`);
        const transcriptRes = await fetch(track.baseUrl, { signal: AbortSignal.timeout(15000) });
        if (!transcriptRes.ok) throw new Error(`Transcript XML fetch failed with status ${transcriptRes.status}`);

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
        throw new Error('Transcript parsing returned empty content');
    } catch (e: any) {
        layer2Error = e.message;
        console.warn('Layer 2 Failed:', layer2Error);
    }

    // Layer 3: Library Fallback
    try {
        console.log('Layer 3: Attempting youtube-transcript library...');
        const { YoutubeTranscript } = await import('youtube-transcript');
        const ytTranscript = await YoutubeTranscript.fetchTranscript(videoId);
        return ytTranscript.map(t => t.text).join(' ');
    } catch (libError: any) {
        console.error('Layer 3 Failed:', libError.message);
        throw new Error(`ALL LAYERS FAILED. | L1: ${layer1Error} | L2: ${layer2Error} | L3: ${libError.message}`);
    }
}
