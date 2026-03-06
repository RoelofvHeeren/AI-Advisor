import sys
import json
import os
from youtube_transcript_api import YouTubeTranscriptApi
try:
    from youtube_transcript_api.proxies import WebshareProxyConfig, GenericProxyConfig
except ImportError:
    WebshareProxyConfig = None
    GenericProxyConfig = None

def get_transcript(video_id):
    try:
        username = os.environ.get("PROXY_USERNAME")
        password = os.environ.get("PROXY_PASSWORD")
        proxy_url = os.environ.get("PROXY_URL")
        
        ytt_api = YouTubeTranscriptApi()
        
        if proxy_url and GenericProxyConfig:
            proxies = {
                "http": proxy_url,
                "https": proxy_url
            }
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id, proxies=proxies)
        else:
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
            
        transcript = transcript_list.find_transcript(['en'])
        transcript_data = transcript.fetch()
        
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
