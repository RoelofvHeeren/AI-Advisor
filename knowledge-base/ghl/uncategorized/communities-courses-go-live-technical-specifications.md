---
title: "Communities & Courses — Go Live Technical Specifications"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006726-communities-courses-go-live-technical-specifications"
category: "Uncategorized"
---

# Communities & Courses — Go Live Technical Specifications

### TECHNICAL SPECIFICATIONS FOR LIVE VIDEOS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  
**Key Frame Interval:** 2 seconds (recommended)  
**Streaming Protocol:** WebRTC (real-time low-latency)

  

#### RESOLUTION AND BITRATE RECOMMENDATIONS

**Current Configuration:** 720p @ 30 fps (HD)

-   **Resolution:** 1280 × 720
    
-   **Video Bitrate:** 1,200 Kbps (1.2 Mbps)
    
-   **Frame Rate:** 30 frames per second
    
-   **Aspect Ratio:** 16:9
    
-   **Simulcast:** Enabled (automatically generates multi-quality streams)
    

  

| Quality | Resolution | Bitrate | Frame Rate |
| --- | --- | --- | --- |
| **High** | 1280 × 720 | 1,200 Kbps | 30 FPS |
| **Medium** | ~640 × 360 | ~500 Kbps | 30 FPS |
| **Low** | ~320 × 180 | ~150 Kbps | 30 FPS |

  

  

## VIDEO SPECIFICATIONS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-   **Protocol:** WebRTC Streaming
    
-   **Supported Codecs:** H.264 (default), VP8, VP9, AV1
    
-   **Video Length:** No duration limit (configurable per session)
    
-   **Frame Type:** Progressive Scan
    
-   **Bitrate Encoding:** Variable Bitrate (VBR) with Simulcast
    
-   **Pixel Aspect Ratio:** 16:9 (default)
    
    -   Supports 4:3 and 9:16 (vertical) formats
        
-   **Video Orientation:** Auto-adaptive to device rotation
    

  

## AUDIO SPECIFICATIONS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-   **Sample Rate:** 48 kHz (48,000 Hz)
    
-   **Channel Layout:** Mono (1 channel) — optimized for speech clarity
    
-   **Audio Codec:** Opus
    
-   **Audio Bitrate:** 96 Kbps
    

* * *

## ADDITIONAL FEATURES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-   **Simulcast:** Enabled — adaptive quality across bandwidths
-   **Dynacast:** Enabled — dynamically adjusts bitrate per participant
-   **DTX (Discontinuous Transmission):** Enabled — conserves bandwidth during silence
-   **RED (Redundant Encoding):** Enabled — improves recovery from packet loss
-   **Echo Cancellation:** Enabled — reduces feedback and echo
-   **Noise Suppression:** Enabled — minimizes background noise
-   **Auto Gain Control:** Enabled — normalizes audio levels automatically

  

## Summary

| Parameter | Value |
| --- | --- |
| **Resolution** | 1280×720 (HD) |
| **Frame Rate** | 30 FPS |
| **Bitrate** | 1.2 Mbps (1,200,000 bps) |
| **Audio Channel** | Mono |
| **Aspect Ratio** | 16:9 |
| **Video Length** | No Limit |