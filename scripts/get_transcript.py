import sys
import json
import os
import youtube_transcript_api
from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id):
    try:
        proxy_url = os.environ.get("PROXY_URL")
        proxy_user = os.environ.get("PROXY_USERNAME")
        proxy_pass = os.environ.get("PROXY_PASSWORD")
        proxy_host = os.environ.get("PROXY_HOST", "p.webshare.io:80")

        if not proxy_url and proxy_user and proxy_pass:
            proxy_url = f"http://{proxy_user}:{proxy_pass}@{proxy_host}"

        proxies = None
        if proxy_url:
            proxies = {"http": proxy_url, "https": proxy_url}

        transcript_data = None
        
        # Try the modern list_transcripts API first
        if hasattr(YouTubeTranscriptApi, 'list_transcripts'):
            try:
                transcript_list = YouTubeTranscriptApi.list_transcripts(video_id, proxies=proxies)
                try:
                    transcript = transcript_list.find_transcript(['en'])
                except Exception:
                    transcript = next(iter(transcript_list))
                transcript_data = transcript.fetch()
            except Exception as e:
                # If list_transcripts exists but fails, try the older API as a fallback
                if hasattr(YouTubeTranscriptApi, 'get_transcript'):
                    try:
                        transcript_data = YouTubeTranscriptApi.get_transcript(video_id, proxies=proxies)
                    except Exception:
                        raise e # Raise the original error from list_transcripts if both fail
                else:
                    raise e
        elif hasattr(YouTubeTranscriptApi, 'get_transcript'):
            # Older API
            transcript_data = YouTubeTranscriptApi.get_transcript(video_id, proxies=proxies)
        else:
            api_methods = dir(YouTubeTranscriptApi)
            api_version = getattr(youtube_transcript_api, '__version__', 'unknown')
            api_file = getattr(youtube_transcript_api, '__file__', 'unknown_file')
            return {"success": False, "error": "LIBRARY_INCOMPATIBLE", "details": f"File: {api_file}. Version: {api_version}. Methods: {api_methods}"}

        if transcript_data:
            full_transcript = " ".join([t['text'] for t in transcript_data])
            return {"success": True, "transcript": full_transcript}
        else:
            return {"success": False, "error": "EMPTY_TRANSCRIPT", "details": "Library returned no data."}

    except Exception as e:
        error_msg = str(e)
        # Standardize error categories
        if any(pattern in error_msg.lower() for pattern in ["disabled", "no transcript", "not found"]):
            return {"success": False, "error": "TRANSCRIPTS_DISABLED", "details": error_msg}
        if "no element found" in error_msg.lower():
            # This is often a networking/parsing error, not necessarily disabled transcripts
            return {"success": False, "error": "YOUTUBE_API_ERROR", "details": f"YouTube returned invalid/empty response: {error_msg}"}
        
        return {"success": False, "error": "TRANSCRIPTION_FAILED", "details": error_msg}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"success": False, "error": "No video_id provided"}))
        sys.exit(1)
        
    video_id = sys.argv[1]
    result = get_transcript(video_id)
    print(json.dumps(result))
