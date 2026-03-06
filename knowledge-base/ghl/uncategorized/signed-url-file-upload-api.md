---
title: "Signed URL File Upload API"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007290-signed-url-file-upload-api"
category: "Uncategorized"
---

# Signed URL File Upload API

Signed URL File Upload lets you stream files directly from the client to Google Cloud Storage (GCS) using secure, time-limited URLs. This improves upload speed and reliability, eliminates server memory pressure, and enables support for larger media—**up to 100MB on WhatsApp** and **5MB on other channels**. Learn how it works, key safeguards, and how to implement the three-step flow.

* * *

**TABLE OF CONTENTS**

-   [What is Signed URL File Upload?](#What-is-Signed-URL-File-Upload?)
-   [Key Benefits of Signed URL File Upload](#Key-Benefits-of-Signed-URL-File-Upload)
-   [Three-Step Upload Flow](#Three-Step-Upload-Flow)
-   [Channel-Based Size Limits](#Channel-Based-Size-Limits)
-   [Content-Type Validation](#Content-Type-Validation)
-   [Security Guards & Access Control](#Security-Guards-&-Access-Control)
-   [Error Handling & Expiry](#Error-Handling-&-Expiry)
-   [Implementation Tips](#Implementation-Tips)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is Signed URL File Upload?**

  
Signed URL File Upload is an infrastructure upgrade that replaces server-buffered uploads with direct, secure client-to-GCS streaming. Instead of sending file bytes through application servers, clients upload to a short-lived, signed URL issued by HighLevel. This architecture reduces Out-Of-Memory (OOM) risk, speeds up transfers, and enforces file validation and access controls.

* * *

## **Key Benefits of Signed URL File Upload**

  
Understanding the benefits helps you decide when to adopt this flow for messaging and media use cases, especially high-volume or large-file scenarios like WhatsApp.

  

-   **Stability:** files never buffer in server memory, eliminating OOM crashes.  
      
    
-   **Larger uploads:** support media up to 100MB for WhatsApp; other channels up to 5MB.  
      
    
-   **Performance**: direct client-to-GCS transfer shortens upload paths and reduces latency.  
      
    
-   **Reliability**: signed URLs expire after 15 minutes with clear error handling on expiry.  
      
    
-   **Security**: path validation, access control, and content-type verification at multiple stages.

* * *

## **Three-Step Upload Flow**

  
The signed-URL pattern breaks uploads into discrete phases—request, upload, and completion—so each step can validate metadata, enforce limits, and return actionable errors without risking server memory.

  

  

**1\. Initiate** — POST /conversations/messages/upload/initiate  
Send file metadata to request a time-limited signed URL and object path.  
  
  

**2\. Upload** — Client → PUT the file directly to the signed URL (GCS)  
Stream the file bytes to GCS using the provided URL before it expires.  
  
  

**3\. Complete** — POST /conversations/messages/upload/complete  
HighLevel verifies the stored object and returns the **public URL** for use in messages.

* * *

## **Channel-Based Size Limits**

  
Different messaging channels have different maximum media sizes. Enforcing limits up front prevents wasted bandwidth and faster error feedback.

  

-   **WhatsApp**: up to 100MB  
      
    
-   **All other channels:** up to 5MB  
      
    **Pre-validation:** oversized files are rejected before upload begins to save time and data.

* * *

## **Content-Type Validation**

  

Accurate MIME types help keep uploads safe and compatible. Dual-stage validation blocks spoofed or mismatched files that could break downstream delivery.

  

-   **On Initiate:** Validates that declared contentType matches the file extension.  
      
    
-   **On Complete:** Verifies the stored contentType in GCS matches the filename.  
      
    
-   **Outcome**: Prevents content-type spoofing and file-type mismatches.

* * *

## **Security Guards & Access Control**

  
Strong guards protect storage namespaces and ensure only authorized users upload files to the correct conversation and location.

  

-   Confirms the conversation exists and belongs to the specified location.  
      
    
-   Verifies the user has access to that location.  
      
    
-   Ensures the file path matches the expected format for the location/conversation.  
      
    
-   Signed URLs are time-limited (15 minutes) to reduce misuse.

* * *

## **Error Handling & Expiry**

  
Knowing how errors surface at each phase helps you implement resilient clients that recover gracefully from validation failures or expired URLs.

  

-   **URL expired:** Request a new signed URL by repeating Initiate.  
      
    
-   **Oversized file:** Adjust the file or switch to a channel with a higher limit (e.g., WhatsApp up to 100MB).  
      
    
-   **Content-type mismatch:** Ensure the filename extension and Content-Type accurately represent the file.  
      
    
-   **Permission/path errors:** Verify location access and conversation identifiers.

* * *

## **Implementation Tips**

  
These practical pointers reduce friction during integration and improve success rates for large uploads.

  

-   Start initiating close to the actual upload time to maximize the 15-minute window.  
      
    
-   Always set an explicit Content-Type header on the PUT request to match the file.  
      
    
-   Capture and log the object path from Initiate for troubleshooting.  
      
    
-   For large files (e.g., WhatsApp videos), avoid unnecessary retries; if the upload stalls near expiry, re-initiate.  
      
    
-   Validate size and MIME client-side before Initiate to surface quicker errors to users.

* * *

## **Frequently Asked Questions**

  

**Q. Is the “Complete” call required?**  
Yes. Completion verifies the object in storage and returns the final URL for messaging.

  

  

**Q. What happens if the signed URL expires mid-upload?**  
Restart the flow: re-run Initiate to get a fresh signed URL, then upload and complete.

  

  

**Q. Are objects public after completion?**  
The Complete step returns a public URL for use in messages. Follow your organization’s data handling policies when sharing.

  

  

**Q. Can I upload any file type if the size fits?**  
No. Content-type validation blocks mismatches; ensure the file extension and Content-Type are correct.

  

  

**Q. Do other channels besides WhatsApp support 100MB?**  
No. Other channels are limited to **5MB.**

  

  

**Q. How does this improve stability?**  
Files stream directly to GCS; the application server never buffers file content, eliminating OOM risk.

  

  

**Q. What’s the signed URL lifetime?**  
Signed URLs expire after **15 minutes.**

  

  

**Q. Can I reuse the same signed URL for multiple files?**  
No. Each Initiate call issues a URL for a specific file/path and timeframe.