---
title: "Get Recording by Message ID"
url: "https://marketplace.gohighlevel.com/docs/ghl/conversations/get-message-recording"
category: ""
---

# Get Recording by Message ID

# Get Recording by Message ID

GET 

## /conversations/messages/:messageId/locations/:locationId/recording

Get the recording for a message by passing the message id

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401

Gives the attached recording to the message

**Response Headers**

-   **Content-Type** any
    
    audio/x-wav
    
-   **Content-Disposition** any
    
    Attachment; filename=audio.wav
    

Bad Request

Unauthorized