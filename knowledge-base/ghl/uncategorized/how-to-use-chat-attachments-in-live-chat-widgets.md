---
title: "How to use Chat Attachments in Live Chat Widgets"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006682-how-to-use-chat-attachments-in-live-chat-widgets"
category: "Uncategorized"
---

# How to use Chat Attachments in Live Chat Widgets

This guide explains, step by step, how to let website visitors share images and PDFs in the chat widget, and how your team can review those files in the inbox. Written from a product perspective for admins and agents.

* * *

## **TABLE OF CONTENTS**

  

-   [What are Chat Attachments](#What-are-Chat-Attachments)
-   [Supported file types & limits](#Supported-file-types-&-limits)
-   [Pre-requisites](#Pre-requisites)
-   [Uploading files (visitor side)](#Uploading-files-\(visitor-side\))
-   [Reviewing files (agent side)](#Reviewing-files-\(agent-side\))
-   [Optional: How to allow the AI bot to respond to images](#Optional%3A-How-to-allow-the-AI-bot-to-respond-to-images)
-   [Best practices](#Best-practices)
-   [FAQs](#FAQs)
-   [Troubleshooting](#Troubleshooting)

  

* * *

## **What are Chat Attachments**

  

Chat Attachments allow visitors to include **files** with their chat messages. The widget supports **images and PDFs** and shows clear feedback while uploads are in progress. Agents receive the files in the **team inbox(**CRM conversations**)** and can preview or download them.

This is applicable only in **Live Chat Widgets(website chat).** No changes are required in the widget builder but the experience of the visitor is explained here.

* * *

## **Supported file types & limits**

  

-   **File types:** `.jpg`, `.jpeg`, `.png`, `.heic` (iPhone photos), `.pdf`
    
-   **Per‑file size limit:** **up to 25 MB**
    
-   **Per‑message limit:** **up to 5 files**
    
-   **Preview behavior:**
    
    -   **JPG/PNG:** small inline preview in the chat bubble and in the inbox
        
    -   **HEIC/PDF:** shown as a filename with a download option (no inline preview)
        
-   **Send rule:** A short **text message is required** to send attachments
    

* * *

## **Pre-requisites**

-   Live Chat is installed on your website
    
-   Agents have access to the **team inbox** i.e. CRM conversations
    

* * *

## **Uploading files (visitor side)**

  

**Desktop**

1.  Click the **paperclip** icon in the chat composer **or** drag files from your **file explorer** into the chat.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055904013/original/ZXst3mJDzZlMeZxLLl3FBhqQ-1Y4cHhjcQ.png?1760401242)
    
2.  Select up to **5** supported files (each **≤ 25 MB**).
    
3.  **Type a short message** (required) and click **Send**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055904053/original/e1tgELP7W8PSn_ImAPFToA4uUCTxb2Kvsw.png?1760401431)  
      
    

**Mobile**

1.  Tap the **paperclip** icon.
    
2.  Choose **Camera** or **Gallery**.
    
3.  Pick your file(s), **add a short message** and **Send**.
    

What visitors will see:

-   **JPG/PNG** show a small preview directly in the conversation.
    
-   **HEIC/PDF** appear as a file name with a download option.
    

* * *

## **Reviewing files (agent side)**

  

In the **team inbox**:

-   Click **JPG/PNG** to preview or download
    
-   Click **HEIC/PDF** to download  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055904048/original/NSaaI6xl2aapkqbk5t8wPKDRXlQzlDn5hA.png?1760401397)  
      
    

**Tip**: If your browser doesn’t preview HEIC, download the file and open it locally.

* * *

## **Optional: How to allow the AI bot to respond to images**

  

If you use an conversation AI agent and want it to **respond to images** visitors send:

1.  Go to **Settings > Labs** (sub - account tab) and enable **Respond to images**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055904055/original/cTw-bHgXQ1STiF5nxjns26Z7YIZQcFU-sA.png?1760401450)
    
2.  Open your **AI Agent** and toggle **Allow this bot to respond to images**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055904058/original/NYFHKggKLiFd3MPRb-YC9NXcOm6-p7Jc-w.png?1760401459)  
    

**Current limitation:** The bot can respond to **images only**. PDFs are not supported yet.

* * *

## **Best practices**

-   **Keep file names clean:** use letters, numbers, hyphens/underscores; avoid repeated spaces and special symbols
    
-   **Compress large images** before sending when on slow networks
    

* * *

## **FAQs**

  

**1\. Can visitors send more than one file?**  
Yes. Up to **5 files** per message.

**2\. Why do I need to type a message?**  
It keeps conversations clear and searchable; attachments require a short text.

**3\. Why don’t some files preview?**  
Only **JPG/PNG** preview inline. **HEIC/PDF** appear as a downloadable file.

**4\. Can I upload files from the widget builder?**  
No. Files are attached from the **visitor chat**, and agents review them in the **team inbox(**CRM Conversations**)**.

* * *

## **Troubleshooting**

  

-   **“This file has already been attached”** : Remove the duplicate and attach a different file.
    
-   **“This file is too big”** : Reduce to **≤ 25 MB**; consider compressing the image.
    
-   **“This file type isn’t supported”** : Convert to JPG/PNG/HEIC/PDF.
    
-   **Drag‑and‑drop doesn’t work** : Drag from your **file explorer** or try the paperclip picker instead.
    
-   **Slow upload** : Large files or slow connections take longer; compress if needed.