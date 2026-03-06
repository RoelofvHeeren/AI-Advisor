---
title: "Effortless File Search: Media Center’s File Type Filter for Quick Access"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007005-effortless-file-search-media-center-s-file-type-filter-for-quick-access"
category: "Uncategorized"
---

# Effortless File Search: Media Center’s File Type Filter for Quick Access

The new File Type Filter for Media Center lets you zero-in on photos, videos, audio, docs, PDFs, and more with a single click—so you spend less time scrolling and more time creating.

* * *

**TABLE OF CONTENTS**

-   [What is the File Type Filter in Media Center?](#What-is-the-File-Type-Filter-in-Media-Center?)[](#Key-Benefits-of-the-File-Type-Filter)
-   [Key Benefits of the File Type Filter](#Key-Benefits-of-the-File-Type-Filter)[](#File-Type-Categories)
-   [File Type Categories](#File-Type-Categories)[](#Smart-Context-Awareness)
-   [Smart Context Awareness](#Smart-Context-Awareness)[](#Persistent-Search-Integration)
-   [Persistent Search Integration](#Persistent-Search-Integration)[](#Cross-Module-Consistency)
-   [Cross-Module Consistency](#Cross-Module-Consistency)[](#How-To-Set-Up-&-Use-the-File-Type-Filter)
-   [How To Set Up & Use the File Type Filter](#How-To-Set-Up-&-Use-the-File-Type-Filter)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the File Type Filter in Media Center?**

File Type Filter is a dropdown control added to the Media Center toolbar that hides non-matching files and shows only the categories you choose (Photos, Videos, Audio, Docs, PDFs, Other, or All). The filter works across My Media, Google Drive, and any connected libraries, intelligently de-activating in sources where file-type filtering isn’t relevant (e.g., Unsplash).

* * *

## **Key Benefits of the File Type Filter**

  

-   **Simplified file discovery:** locate the right asset in seconds  
      
    
-   **Cleaner workspace:** unclutter large libraries by hiding irrelevant formats  
      
    
-   **Fewer clicks:** apply once and keep browsing; search terms persist as you move between tabs(help.gohighlevel.com)  
      
    
-   **Consistent experience:** same dropdown in My Media, Google Drive, and External sources  
      
    
-   **Context-aware:** automatically disables when browsing image-only libraries (Unsplash, Pixabay)  
      
    
-   **Backend-optimised:** server-side filtering delivers results faster even in very large folders

* * *

## **File Type Categories**

  

File Type Filter groups extensions into easy-to-understand buckets so you don’t have to remember every format.

  

-   **Photos** – JPG, PNG, SVG, GIF
-   **Videos** – MP4, MOV, WEBM, AVI
-   **Audio** – MP3, WAV, OGG
-   **Docs** – DOCX, TXT, CSV, XLSX, PPTX
-   **PDFs** – Portable Document Format files
-   **Other** – ZIP, RAW, and miscellaneous formats

* * *

## **Smart Context Awareness**

  

Smart Context Awareness automatically disables the dropdown when a source already contains one file type (for example, Unsplash returns only images). This prevents confusing “empty” states and keeps the UI clean. 

* * *

## **Persistent Search Integration**

  

Search terms you enter in the Media Center now “stick” as you hop between My Media, Google Drive, and External Libraries. The File Type Filter respects and preserves those search terms so you can refine results without starting over. 

* * *

## **Cross-Module Consistency**

  

Because Media Center powers uploads for Social Planner, Funnels, Email Builder, Communities, and more, the File Type Filter instantly improves every workflow that opens the Media dialog. Edits you make in one module are reflected everywhere thanks to shared Media Storage infrastructure.(help.gohighlevel.com) 

* * *

## **How To Set Up & Use the File Type Filter**

  

These steps focus only on using the **File Type** control so you can quickly narrow results, combine with search, and understand reset behavior across sources.

1.  In **Media Storage**, locate the **File Type** dropdown in the top toolbar (beside **Sort**).  
      
    
2.  Click **File Type** and choose a category: **Photos**, **Videos**, **Audio**, **Docs**, **PDFs**, **Other**, or **All** (default).  
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062714550/original/goMsKWhXmElG6c5RW5VZeswsy8vrxqvM7w.png?1768471662)**  
    
3.  Browse or use **Search**; only matching files remain visible.  
      
    
4.  Reset options:
    
    -   Change **File Type** back to **All** to see everything in the current source, or  
          
        
    -   Switch sources (**My Media**, **Google Drive**, **External Libraries**) to clear the **File Type** selection. **Search** persists.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062730578/original/EhW6vtnY48konJF0u5tIsO-KDBOAHwR7Mw.png?1768479554)
        

**Callouts**

-   **Does not affect storage**: Filters change what you see, not what you store.  
      
    
-   **Availability**: Desktop app and web. Mobile filtering not yet available.
    

##   

  
  

* * *

## **Frequently Asked Questions**

  

**Q:** **Does the filter affect upload limits or storage usage?**

No. It only changes what you see; storage policies remain the same.

**Q: Can I multi-select files across different types after filtering?**

Yes—switch back to All, then multi-select. Multi-select only works within the current view.

**Q: Why is the dropdown greyed out in Unsplash?**

Smart Context Awareness disables the control in sources where every file is already an image to avoid redundant filtering.

**Q: Will my filter choice sync to other team members?**

No. **File Type** is a user‑level preference and resets per session for each user.

**Q: Is the filter available in the Mobile App?**

Not yet. Mobile Media Library already includes basic search and upcoming updates will introduce mobile filtering.

**Q: Which API endpoint powers backend filtering for developers?**

MediaService → /medias?type={photo|video|audio|doc|pdf|other}. For channels authenticated with OAuth, this endpoint honors the \`type\` parameter consistently and can return folders (in addition to files) when a valid type is provided.

**Q: Does “Docs” include Google Docs links?**

No. Docs refers to uploaded document files (DOCX, TXT, etc.). Linked Google Docs appear under “Other.” 

* * *

### **Related Articles**

  

-   [Media Library – Mobile App](https://help.gohighlevel.com/en/support/solutions/articles/155000006309)  
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/155000006538)
-   [Media Library – Built-In Image Editor](https://help.gohighlevel.com/en/support/solutions/articles/155000006538)  
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/155000002707)
-   [Complete Guide to Media Storage](https://help.gohighlevel.com/en/support/solutions/articles/155000002707)  
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/48001216629)
-   [Media Storage & File Upload Limits](https://help.gohighlevel.com/en/support/solutions/articles/48001216629)  
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/155000006576)
-   [Simplify Your Template Library by Hiding Types and Tags](https://help.gohighlevel.com/en/support/solutions/articles/155000006576)