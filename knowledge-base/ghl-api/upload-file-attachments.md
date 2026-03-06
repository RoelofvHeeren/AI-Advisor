---
title: "Upload file attachments"
url: "https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments"
category: ""
---

# Upload file attachments

# Upload file attachments

POST 

## /conversations/messages/upload

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment".  
  
**Note:** One of conversationId or contactId must be provided.  
  
**File Size Limits:**

-   Maximum file size: 5 MB
-   Maximum files per upload: 5

  
**Allowed file types:**  
  
**Images:** JPG, JPEG, PNG, GIF, SVG, HEIC, AI  
  
**Videos:** MP4, MPEG, 3GP  
  
**Audio:** MP3, WAV, WAVE, AIFF, AIF, AIFC, GSM, ULAW, OGG, AAC, M4A, AMR  
  
**Documents:** PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX, ODT  
  
**Archives:** ZIP, RAR  
  
**Other:** VCF, VCARD (contact files), ICS (calendar files)  
  
The API will return an object with the URLs

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   404
-   413
-   415

Uploaded the file successfully

Bad Request

Unauthorized

Not Found - Conversation id, contact id, workflow id or campaign id not found

Payload Too Large

Unsupported Media Type