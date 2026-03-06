---
title: "WhatsApp Error: “Message type is currently not supported”"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006419-whatsapp-error-message-type-is-currently-not-supported-"
category: "Uncategorized"
---

# WhatsApp Error: “Message type is currently not supported”

If you see the error **“Message type is currently not supported”** when sending messages through WhatsApp, it means the message you are trying to send uses a format or media type that WhatsApp’s Business API does not currently support.

* * *

## **Why This Happens**

This error usually occurs in the following situations:

1.  **Unsupported Media Type**
    
    -   Trying to send file formats not allowed by WhatsApp (e.g., `.exe`, `.zip`, `.tar`).
        
    -   WhatsApp supports only specific media formats like **images (JPG, PNG), documents (PDF, DOCX), videos (MP4), and audio (AAC, MP3, OGG)**.
        
2.  **Unsupported Message Type**
    
    -   Certain interactive features (like custom unsupported buttons or message structures) are not available.
        
    -   Document messages with captions are currently not supported.
        
    -   Attempting to send **stickers, GIFs, or other unsupported formats**.
        
3.  **Template Restrictions**
    
    -   If you are using a WhatsApp Template, the template body or header might include a type of parameter that is not supported.
        

* * *

## **How to Fix It**

✅ **Check Media File Format**

-   Use only WhatsApp-supported file types:
    
    -   **Images:** JPG, JPEG, PNG
        
    -   **Documents:** PDF, DOCX, PPTX, XLSX, TXT
        
    -   **Audio:** AAC, MP3, OGG
        
    -   **Video:** MP4 (max 16MB)
        

✅ **Check Message Content**

-   Avoid sending stickers, GIFs, or files not supported by WhatsApp.
    
-   Use approved templates for proactive messaging.
    

✅ **Reconfigure Templates (if used)**

-   Ensure the message template is approved and follows Meta’s formatting guidelines.
    
-   Avoid sending messages with unsupported parameters or dangling placeholders.
    

✅ **Try Sending as a Different Type**

-   If the format isn’t supported (e.g., a `.zip` file), upload it somewhere else (like Google Drive) and share the **link** instead.
    

* * *

## **Example**

❌ Incorrect: Sending a `.zip` file via WhatsApp.  
✅ Correct: Upload the `.zip` file to Google Drive and send the download link in your WhatsApp message.  
  
Note: Please refer meta article :  [https://developers.facebook.com/docs/whatsapp/on-premises/errors/](https://developers.facebook.com/docs/whatsapp/on-premises/errors/)

* * *

## **Summary**

The error **“Message type is currently not supported”** means WhatsApp cannot process the format of the message you are sending. To resolve:

-   Stick to supported file types and formats.
    
-   Use approved templates for outbound messaging.
    
-   Avoid unsupported formats like stickers, GIFs, and zipped files.