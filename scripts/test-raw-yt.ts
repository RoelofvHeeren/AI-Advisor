import * as fs from 'fs';

async function testRaw() {
    const videoId = 'dQw4w9WgXcQ';
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    try {
        console.log(`Fetching ${videoUrl}`);
        const response = await fetch(videoUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cookie': 'CONSENT=YES+cb.20210328-17-p0.en+FX+417;'
            }
        });

        const html = await response.text();
        console.log('Got HTML, length:', html.length);

        const regex = /ytInitialPlayerResponse\s*=\s*({.+?});/;
        const match = html.match(regex);

        if (!match) {
            console.log('Could not find player response in HTML');
            if (html.includes('consent.youtube.com')) console.log('Redirected to consent page');
            if (html.includes('recaptcha')) console.log('Bot detection triggered');
            return;
        }

        const playerResponse = JSON.parse(match[1]);
        const captionTracks = playerResponse?.captions?.playerCaptionsTracklistRenderer?.captionTracks;

        console.log('Available tracks:', captionTracks?.length);
        if (captionTracks) {
            console.log(captionTracks.map((t: any) => ({ languageCode: t.languageCode, kind: t.kind, url: t.baseUrl })));

            const track = captionTracks[0];
            console.log('Fetching first track URL...');
            const xmlRes = await fetch(track.baseUrl + '&fmt=json3', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Cookie': 'CONSENT=YES+cb.20210328-17-p0.en+FX+417;'
                }
            });
            const xml = await xmlRes.text();
            console.log('XML snippet:', xml.substring(0, 500));
            fs.writeFileSync('test-transcript.xml', xml);
        }
    } catch (e) {
        console.error(e);
    }
}

testRaw();
