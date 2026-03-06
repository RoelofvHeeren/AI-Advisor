---
title: "Download transcription by Message ID"
url: "https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription"
category: ""
---

# Download transcription by Message ID

# Download transcription by Message ID

GET 

## /conversations/locations/:locationId/messages/:messageId/transcription/download

Download the recording transcription for a message by passing the message id

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401

Downloads the attached transcription of the message

**Response Headers**

-   **Content-Type** any
    
    text/plain
    
-   **Content-Disposition** any
    
    Attachment; filename="transcription.txt"
    

Bad Request

Unauthorized