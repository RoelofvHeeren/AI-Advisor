import sys
import json
from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id):
    try:
        # Try English manual/auto
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        
        try:
            # Try manual English first
            transcript = transcript_list.find_transcript(['en'])
        except:
            # Fallback to any English (like auto-generated)
            try:
                transcript = transcript_list.find_generated_transcript(['en'])
            except:
                # Fallback to the first available transcript
                transcript = next(iter(transcript_list))
        
        full_transcript = " ".join([t['text'] for t in transcript.fetch()])
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
