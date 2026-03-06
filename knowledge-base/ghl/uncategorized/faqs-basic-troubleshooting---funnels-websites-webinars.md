---
title: "FAQs, Basic Troubleshooting - Funnels, Websites, Webinars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars"
category: "Uncategorized"
---

# FAQs, Basic Troubleshooting - Funnels, Websites, Webinars

## Overview

This article provides troubleshooting steps for common issues encountered while using certain features within funnels, websites, and webinars. These steps will help users resolve problems related to tracking codes, custom fields, images, rendering issues, and more.

* * *

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Common Issues and Troubleshooting Steps](#Common-Issues-and-Troubleshooting-Steps)
    -   [1\. Head Tracking Code is Not Part of Tag](#1.-Head-Tracking-Code-is-Not-Part-of-%3Chead%3E-Tag)
    -   [2\. Updated Custom Fields Do Not Render in Preview/Site](#2.-Updated-Custom-Fields-Do-Not-Render-in-Preview/Site)
    -   [3\. Blurry or Slow-Loading Images](#3.-Blurry-or-Slow-Loading-Images)
    -   [4\. Custom Values Breaking or Not Rendering in Preview](#4.-Custom-Values-Breaking-or-Not-Rendering-in-Preview)
    -   [5\. Identifying the Funnel, Page, or Location of a Live Site](#5.-Identifying-the-Funnel,-Page,-or-Location-of-a-Live-Site)
    -   [6\. Site Not Rendering Correctly (Alignment Issues, Refresh Loops, etc.)](#6.-Site-Not-Rendering-Correctly-\(Alignment-Issues,-Refresh-Loops,-etc.\))
    -   [7\. Page Speed Score or Speed is Too Slow](#7.-Page-Speed-Score-or-Speed-is-Too-Slow)
    -   [8\. Security Headers Blocking Site Assets](#8.-Security-Headers-Blocking-Site-Assets)

* * *

## Common Issues and Troubleshooting Steps

### 1\. Head Tracking Code is Not Part of `<head>` Tag

**Issue**  
The head and body tracking codes are injected on the client side (browser), so they won't appear inside the `<head>` tag in the source code. What you see in the page source is the initial HTML data used for rendering the page. Our platform dynamically injects the tracking codes on the client side, which means they will not be present in the static source view.

Even if users implement custom tracking solutions, such as Google Tag Manager (GTM), those scripts will still function as expected; client-side injection is compatible with GTM and similar tools.

**Explanation**  
What you see in the source code is the page data used for rendering the page, not the dynamically injected tracking codes.

**Troubleshooting Steps**  
Refer to the video explanation for how GoHighLevel injects head and body tracking codes: _Video Link_

* * *

### 2\. Updated Custom Fields Do Not Render in Preview/Site

**Issue**  
Custom field values do not show up on the site when updated via backend (e.g., automations, workflows).

**Explanation**

-   Custom fields are stored in the contact database, but the site fetches field data from local storage or cookies to render it on the next page.
-   When a contact fills out a **form, survey, or order form**, the entered values are saved to local storage.
    
-   If custom field values (like scores or estimated costs) are updated via **automations**, **workflows**, or other **backend processes**, they are **not** stored in local storage.
    
-   As a result, these fields **won’t render** on funnel pages since the front-end display relies on data stored locally in the browser.
    
-   This behavior is **intentional**, ensuring faster page rendering and personalization for data submitted directly by users.
    

#### **Troubleshooting Steps**

1.  Verify if the affected custom fields are being populated through **forms/surveys** or via **backend automation**.
    
2.  If they’re backend-updated, they will not appear on the funnel page because no corresponding local storage entry exists.
    
3.  To ensure these fields render:
    
    -   Add the relevant fields to the **form or survey** so that user input triggers storage in local data.
        
    -   Alternatively, use a custom script or logic to push backend-updated field values into local storage before rendering.
        

> **⚠ Note** \- Only **custom fields updated via direct user input** (e.g., form or survey submissions) are saved to local storage and rendered on the funnel page.  
> Fields updated through **backend automation** (such as score or CRM updates) will **not** appear on the site.

* * *

### 3\. Blurry or Slow-Loading Images

**Issue**  
Some images appear blurry or load slowly due to image optimization settings.

**Explanation**  
Image optimization improves page speed but applies a universal quality setting. Some images may lose clarity if optimization is too aggressive.

**Troubleshooting Steps**

-   Disable image optimization for specific images in the builder.
    
-   For background images, disable optimization in funnel settings.
    
-   Upload higher-resolution images to maintain clarity after optimization.
    

* * *

### 4\. Custom Values Breaking or Not Rendering in Preview

**Issue**  
Custom values do not render properly in the funnel.

**Possible Causes & Fixes**

**Hyperlink Issue:**

-   Check if any custom value in a text element has been converted into a hyperlink.
    
-   Remove hyperlinks from affected elements, as they break rendering.
    

**ChatGPT Response Formatting Issue:**

-   ChatGPT-generated content may contain special characters (e.g., `\n`) that break the funnel page.
    
-   Update the ChatGPT prompt to return HTML-formatted content.
    
-   Alternatively, use the **“text formatter”** action to replace `\n` with `<br/>`.
    

* * *

### 5\. Identifying the Funnel, Page, or Location of a Live Site

**Steps to Identify**

1.  Open the **Network tab** in the browser.
    
2.  Clear the console and enable the **XHR filter**.
    
3.  Reload the page.
    
4.  Check the event call in the network logs.
    
5.  Open the payload section to find the required details.
    

* * *

### 6\. Site Not Rendering Correctly (Alignment Issues, Refresh Loops, etc.)

**Issue**  
The site is not displaying properly, with elements misaligned or the page continuously refreshing.

**Troubleshooting Steps**

-   Remove all custom code in code elements, head/footer tracking code, and custom CSS.
    

**To find custom code elements:**

1.  Open the builder.
    
2.  Inspect the page preview.
    
3.  Use **Ctrl + F (Windows)** or **Cmd + F (Mac)** to search for `c-custom-code`.
    
4.  If found, remove custom code elements and check if the issue persists.
    

**Check for Specific Issues:**

-   Ensure no sections, columns, or elements have the **sticky** option enabled (sticky CSS only works in preview mode).
    
-   Remove expired timer elements, as they may cause display issues.
    
-   Open the browser console and check for errors.
    
-   If a **hydration error** appears, escalate the issue as a support ticket.
    

* * *

### 7\. Page Speed Score or Speed is Too Slow

**Issue**  
The page is loading slowly, or speed analysis tools return low performance scores.

**Note**  
The dev team does not provide debugging support for improving page speed directly.

**Recommended Tools**

-   [PageSpeed Insights](https://pagespeed.web.dev/)
    
-   [GTMetrix](https://gtmetrix.com/)
    

These tools help analyze the performance of a page and suggest improvements.

**Troubleshooting & Optimization Steps**

-   Check for external scripts or CSS loading via tracking code or custom code elements.
    
-   Evaluate the length and content density of the page.
    
-   Optimize images using GoHighLevel’s **Image Optimization** toggle, or manually compress them.
    
-   **Best practice:** Images loading above the fold should be under **200kb** to help achieve good LCP scores on mobile.
    
-   Enable **Optimize JavaScript** to delay hydration of non-essential JS and tracking codes — this improves **TBT (Total Blocking Time)**.
    
-   Look for custom code elements injecting third-party widgets or JavaScript.
    
-   Move heavy elements (forms, calendars, review widgets, maps, etc.) below the fold.
    

**Benchmark**  
A well-optimized GoHighLevel page typically scores:

-   **Above 80 on mobile**
    
-   **Above 95 on desktop**
    

This includes scenarios where tracking codes and high-resolution images are present.

* * *

### 8\. Security Headers Blocking Site Assets

**Issue**  
Pages or funnel steps fail to load scripts, images, or styles when restrictive or invalid security headers are configured in the **Security** tab under **Sites → Funnels → Particular Funnel with the Issue**.

**Common Causes**

-   Misconfigured or overly restrictive `Content-Security-Policy` values.
    
-   Line breaks or invalid characters in the header value.
    
-   Restrictive directives blocking assets from GoHighLevel’s CDN or third-party integrations.
    
-   Incorrect URL configuration after editing the headers.
    

**Troubleshooting Steps**

1.  Go to **Sites → Settings → Security tab**.
    
2.  Review any custom headers (e.g., `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`).
    
3.  Temporarily remove or clear all custom headers and reload the page.
    
    -   If the page loads correctly, the issue is caused by one of the header configurations.
        
4.  Ensure there are **no line breaks** or **new lines** in the header value.
    
    -   Header values must be entered as a **single continuous line**.
        
5.  Avoid using restrictive or unsupported rules unless you fully understand their effect.  
    **Example of valid format:**
    
    ```
    default-src 'self'; img-src *; script-src 'self' https://example.com;
    ```
    
6.  If the homepage continues to fail, try assigning a **different URL path** temporarily.
    
7.  After adjustments, clear cache or test in **Incognito Mode** to confirm resolution.
    

**Troubleshooting Tips**

-   Verify the syntax of each header and confirm no invalid or unsupported directives are used.
    
-   If the customer reintroduces invalid values, request they remove or simplify them.
    

**Benchmark**  
A correctly configured page with valid security headers should:

-   Load all GoHighLevel assets without blocking.
    
-   Show no “Refused to load” or “Blocked by CSP” errors in the browser console.
    

**Validation Tip**  
Use [CSP Evaluator by Google](https://csp-evaluator.withgoogle.com/) to check if the configured Content-Security-Policy is valid and secure.

* * *