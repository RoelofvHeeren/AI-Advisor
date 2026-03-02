import sys
import json
import os
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.proxies import WebshareProxyConfig, GenericProxyConfig

def get_transcript(video_id):
    try:
        username = os.environ.get("PROXY_USERNAME")
        password = os.environ.get("PROXY_PASSWORD")
        proxy_url = os.environ.get("PROXY_URL")
        
        ytt_api = YouTubeTranscriptApi()
        
        if proxy_url:
            ytt_api = YouTubeTranscriptApi(
                proxy_config=GenericProxyConfig(
                    http_url=proxy_url,
                    https_url=proxy_url,
                )
            )
        elif username and password:
            ytt_api = YouTubeTranscriptApi(
                proxy_config=WebshareProxyConfig(
                    proxy_username=username,
                    proxy_password=password,
                )
            )
            
        transcript_data = ytt_api.get_transcript(video_id)
        
        full_transcript = " ".join([t['text'] for t in transcript_data])
        return {"success": True, "transcript": full_transcript}
    except Exception as e:
        return {"success": False, "error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"success": False, "error": "No video_id provided"}))
        sys.exit(1)
        
    video_id = sys.argv[1]
    result = get_transcript(video_id)
    print(json.dumps(result))
