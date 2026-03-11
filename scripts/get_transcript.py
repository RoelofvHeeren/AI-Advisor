import sys
import json
import os
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    TranscriptsDisabled,
    NoTranscriptFound,
    CouldNotRetrieveTranscript,
    VideoUnavailable,
    YouTubeRequestFailed
)

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
        
        proxies = None
        if proxy_url:
            proxies = {
                "http": proxy_url,
                "https": proxy_url
            }

        # Try to get transcript
        try:
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id, proxies=proxies)
            transcript = transcript_list.find_transcript(['en'])
            transcript_data = transcript.fetch()
        except (TranscriptsDisabled, NoTranscriptFound, NoTranscriptAvailable) if 'NoTranscriptAvailable' in globals() else (TranscriptsDisabled, NoTranscriptFound):
            return {"success": False, "error": "TRANSCRIPTS_DISABLED", "details": "Transcripts are disabled or not found for this video."}
        except VideoUnavailable:
            return {"success": False, "error": "VIDEO_UNAVAILABLE", "details": "The video is unavailable."}
        except YouTubeRequestFailed as e:
            return {"success": False, "error": "YOUTUBE_REQUEST_FAILED", "details": str(e)}
        except Exception as e:
            # Check for the specific "no element found" error which often means transcript issues
            if "no element found" in str(e).lower():
                 return {"success": False, "error": "TRANSCRIPTS_DISABLED", "details": "YouTube returned empty response for transcripts (no element found)."}
            raise e
        
        full_transcript = " ".join([t['text'] for t in transcript_data])
        return {"success": True, "transcript": full_transcript}
    except Exception as e:
        return {"success": False, "error": "UNEXPECTED_ERROR", "details": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"success": False, "error": "No video_id provided"}))
        sys.exit(1)
        
    video_id = sys.argv[1]
    result = get_transcript(video_id)
    print(json.dumps(result))
