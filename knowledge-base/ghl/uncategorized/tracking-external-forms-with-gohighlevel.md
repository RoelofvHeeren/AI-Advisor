---
title: "Tracking External Forms with GoHighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel"
category: "Uncategorized"
---

# Tracking External Forms with GoHighLevel

###   

###   

### Purpose of This Guide

This guide explains how to install and use the **External Tracking Script** to record page views and track **GHL and standard HTML form submissions** on external websites like WordPress, Shopify, Wix, Webflow, or custom HTML.

Use this setup if you:

-   Embed a GHL form on an external website
    
-   Use a **standard HTML form** (not iframe-based)
    
-   Want page views and submissions tracked for attribution
    
-   Want to trigger workflows when those events occur
    

⚠️ **Iframe-based or widget-based third-party forms are still not supported.**  
Forms must exist directly in the DOM and use valid HTML `<form>` elements.

  

**TABLE OF CONTENTS**

-   [What Is the External Tracking Script?](#What-Is-the-External-Tracking-Script?)
-   [Important Behavior Notes](#Important-Behavior-Notes)
-   [Why You Need It](#Why-You-Need-It)
-   [What It Does](#What-It-Does)
-   [Before You Start](#Before-You-Start)
-   [Step 1: Get Your Tracking Script](#Step-1%3A-Get-Your-Tracking-Script)
-   [Step 2: Install the Script](#Step-2%3A-Install-the-Script)
-   [Step 3: Ensure Your Form Is Compatible](#Step-3%3A-Ensure-Your-Form-Is-Compatible)
-   [✨ Custom Field Capture (New)](#%E2%9C%A8-Custom-Field-Capture-\(New\))
-   [Smarter Field Mapping](#Smarter-Field-Mapping)
-   [Better Data Handling](#Better-Data-Handling)
-   [Step 4: View Submissions](#Step-4%3A-View-Submissions)
-   [Step 5: Workflow Triggers](#Step-5%3A-Workflow-Triggers)
-   [Advanced Troubleshooting](#Advanced-Troubleshooting)
-   [Example Full Form](#Example-Full-Form)
-   [Platform-Specific Installation](#Platform-Specific-Installation)
-   [FAQs](#FAQs)

  

* * *

## What Is the External Tracking Script?

The tracking script is a small piece of JavaScript unique to your account.  
When placed on your external site, it:

-   Records page views
    
-   Tracks compatible form submissions
    
-   Captures mapped **custom field values**
    
-   Stores anonymous activity until the visitor becomes known
    
-   Sends tracked events to your CRM for reporting and workflow automation
    

It acts as the bridge that lets you see activity from sites not hosted inside the platform.

* * *

## Important Behavior Notes

⚠️ **No contact or activity log will appear until a form submission occurs.**

Here’s how it works:

-   Page views are tracked anonymously
    
-   Anonymous activity is stored in the browser
    
-   Once a form is submitted:
    
    -   A contact is created or updated
        
    -   All prior activity is linked to that contact
        

### This script does **not**:

-   Create contacts from iframe-based or widget-based forms
    
-   Track interactions like clicks or scrolls
    
-   Track session analytics or cross-domain behavior
    
-   Capture hidden or disabled form fields (unless explicitly configured)
    

* * *

## Why You Need It

Without the tracking script, we cannot:

-   Record page views on external websites
    
-   Attribute leads or conversions to campaigns
    
-   Trigger workflows based on external activity
    

With the tracking script installed:

-   You can track our forms on external websites
    
-   You can measure page performance in the Attribution Report
    
-   You can trigger automations for visitors who submit a form
    

* * *

## What It Does

Tracks:

-   Page views
    
-   Form submissions
    
-   Workflow triggers (based on above events)
    

Doesn’t track:

-   Scrolls, clicks, or time-on-page
    
-   Session-level analytics
    
-   Cross-domain behavior
    

* * *

## Before You Start

-   The site domain must be connected to your account
    
-   The form must:
    
    -   Be a **GHL embed**, **or**
        
    -   Be a **standard HTML `<form>`** with valid input fields
        
-   Forms inside **iframes, popups, or JS widgets** will not be tracked
    

* * *

## Step 1: Get Your Tracking Script

In your account:

1.  Go to Settings → External Tracking
    
2.  Click Copy Script
    

Your snippet will look like this:

<script   
  src="https://link.yourdomain.com/js/external-tracking.js"  
  data-tracking-id="tk\_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">  
</script>

Do not modify your data-tracking-id. It’s unique to your account.

* * *

## Step 2: Install the Script

Paste the script before the closing </body> tag on your website.

Option A: Add Directly (Recommended)

Example:

<!-- External Tracking Script \-->  
<script   
  src="https://link.yourdomain.com/js/external-tracking.js"  
  data-tracking-id="tk\_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">  
</script>  
</body>  
</html>

Works for:

-   Custom HTML sites
    
-   WordPress
    
-   Wix / Squarespace / Webflow
    

### Option B: Install via Google Tag Manager (GTM)

⚠️ Known Issue: GTM may remove the data-tracking-id attribute, breaking initialization.  
If you see console errors like LC Tracking: Missing data-tracking-id attribute,  
 your GTM setup is stripping the ID.

Temporary Fix / Workaround:

1.  Create a Custom HTML Tag in GTM.
    
2.  Paste your full tracking code (do not modify it).
    
3.  Set trigger to All Pages.
    
4.  Preview the page, open DevTools → Elements tab.
    
5.  Verify the data-tracking-id attribute is still present in the script tag.
    
    -   If it’s missing → install the code manually in your site footer.
        

* * *

## Step 3: Ensure Your Form Is Compatible

**The tracking script supports:**

-   GHL embedded forms
    
-   Standard HTML forms rendered directly in the DOM
    

### Form Requirements

For submissions and field capture to work:

-   A real `<form>` tag must exist
    
-   Fields must:
    
    -   Be **visible**
        
    -   Have a valid `name` attribute
        
-   An email field must be present
    

### Not Supported

-   Forms inside iframes
    
-   Popup-based forms
    
-   Third-party widgets that do not expose real inputs in the DOM
    

  

## ✨ Custom Field Capture (New)

External Tracking now captures **more than just name and email**.

### Supported Field Types

The script can capture:

-   Single-line & multi-line text
    
-   Dropdowns (single & multi-select)
    
-   Checkboxes & radio buttons
    
-   Ratings & scores
    
-   Number, monetary & date picker fields
    
-   File uploads & signatures (**metadata only**)
    
-   Source, captcha & boolean fields
    

### Field Capture Rules

Fields are captured only if they:

-   Are visible on the form
    
-   Have a valid `name` attribute
    

Hidden or disabled fields are ignored unless explicitly configured.

* * *

## Smarter Field Mapping

Captured fields are mapped using this priority order:

1.  Field `name` matches a HighLevel property or custom field key
    
2.  Field label matches a HighLevel display name
    
3.  Field `name` matches label text (case-insensitive)
    

If no match is found:

-   The value is stored as `unmapped_field`
    
-   This helps identify and fix mapping issues quickly
    

* * *

## Better Data Handling

Captured values are stored with awareness of:

-   Text vs numeric fields
    
-   Single-select vs multi-select values
    
-   Metadata-only handling for file uploads and signatures
    

This ensures consistent behavior in workflows and automations.

  

* * *

## Step 4: View Submissions

In the CRM :

1.  Go to Sites → Forms → Submissions
    
2.  Filter by External Form Name
    
3.  Submissions appear with a tag: external form: {form\_name}
    

* * *

## Step 5: Workflow Triggers

You can automate actions based on:

-   Page View Trigger: Fires when a visitor views a page with the tracking script even if anonymous. Anonymous activity is stored and later attached to the contact when they submit an LC form.
    
-   Form Submission Trigger: Fires when a compatible form is submitted.
    

Available filters:

-   Domain
    
-   Page path
    
-   External form name
    
-   UTM parameters (Campaign, Source, Medium, etc.)
    

* * *

## Advanced Troubleshooting

### 1\. Enable Debug Mode

Add data-debug="true" to your script:

<script   
  src="https://link.yourdomain.com/js/external-tracking.js"  
  data-tracking-id="tk\_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
  data-debug="true">  
</script>

Then open DevTools → Console and check for \[LC Tracking\] logs.

### 2\. Network Checks

-   Look for successful 2xx responses.
    
-   Ensure no CORS errors appear.
    

### 3\. Cookie Verification

-   Go to Application → Cookies
    
-   Confirm a session cookie is created.  
     If missing → browser privacy or third-party restrictions might block it.
    

### 4\. Common Issues

<table style="box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; max-width: 100%; border: none; empty-cells: show; cursor: default;"><colgroup style="box-sizing: border-box;"><col width="147" style="box-sizing: border-box;"><col width="352" style="box-sizing: border-box;"></colgroup><tbody style="box-sizing: border-box;"><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word; text-align: center;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 700;">Problem</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word; text-align: center;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 700;">Fix</span></span></p></td></tr><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">No console logs</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Add&nbsp;</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(24, 128, 56); font-weight: 400;">data-debug="true</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;and verify script placement</span></span></p></td></tr><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">CORS errors</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Check server CORS settings</span></span></p></td></tr><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Form not tracked</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Confirm&nbsp;</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(24, 128, 56); font-weight: 400;">&lt;form&gt;</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;tag and email input exist</span></span></p></td></tr><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Tracking ID missing</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Ensure GTM hasn’t stripped attributes</span></span></p></td></tr><tr style="box-sizing: border-box; user-select: none; height: 25.75pt;"><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">SPA routing issues</span></span></p></td><td style="box-sizing: border-box; padding: 5pt; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1pt solid rgb(0, 0, 0); overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="box-sizing: border-box; margin-bottom: 0pt; margin-left: 0px; font-size: 13px; line-height: 1.38; word-break: normal; overflow-wrap: break-word;"><span style="box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;"><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">Trigger manual&nbsp;</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(24, 128, 56); font-weight: 400;">page_view</span><span style="box-sizing: border-box; font-size: 11pt; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;events after route change</span></span></p></td></tr></tbody></table>

* * *

## Example Full Form

<form name="signup">  
  <label>Email</label>  
  <input type="email" name="email" required />  
  <label>First Name</label>  
  <input type="text" name="first\_name" />  
  <button type="submit">Submit</button>  
</form>

* * *

## Platform-Specific Installation

### WordPress

1.  Copy tracking code.
    
2.  Go to Appearance → Theme Editor → Footer (or use Insert Headers and Footers plugin).
    
3.  Paste before </body> tag.
    
4.  Save changes.
    

Avoid page builders or plugins that replace forms with <div> widgets.

#### Important for WordPress users

Many WordPress page builders and plugins use non-form elements (such as <div> containers or JavaScript-based widgets) instead of real <form> tags.  
Those forms are not compatible with the tracking script for submission tracking.

If your forms do not use real <form> tags:

-   Page view tracking will still work, but
    
-   Form submissions will not sync to your CRM.
    

To ensure compatibility:

-   Use plugins that output valid HTML forms (for example, WPForms, Gravity Forms, or Contact Form 7).
    
-   Confirm that the form includes <form> and <input type="email"> elements.
    
-   Avoid forms inside iframes or popups.
    

* * *

### Wix

1.  Go to Settings → Advanced → Custom Code → + Add Custom Code
    
2.  Paste your script
    
3.  Set All Pages → Load code on each new page → Place in Body (end)
    
4.  Apply and publish.
    

* * *

### Squarespace

1.  Go to Settings → Advanced → Code Injection
    
2.  Paste the script in the Header or Footer field
    
3.  Save and publish.
    

* * *

### Shopify

1.  In Shopify Admin → Online Store → Themes → Edit Code
    
2.  Open theme.liquid
    
3.  Paste code before </body>
    
4.  Save.
    

* * *

### HubSpot

1.  Go to Settings → Website → Pages → Templates or Site Footer HTML
    
2.  Paste your script before </body>
    
3.  Save and publish.
    

* * *

### Drupal

1.  Go to Structure → Blocks → Add Block
    
2.  Paste your script into the block body
    
3.  Save.
    

* * *

### Magento

Follow Magento’s Design Guide for adding third-party JavaScript in the Header or Footer HTML.

* * *

### Joomla

1.  Go to Extensions → Templates → Templates → index.php
    
2.  Paste before </body>
    
3.  Save.
    

* * *

## FAQs

**Q: Can I capture custom fields from external forms now?**  
Yes. External Tracking can now capture and map supported custom field types from compatible forms.

**Q: Are third-party forms supported?**  
Only if they render real HTML inputs directly in the DOM. Iframe-based or widget forms are still unsupported.

**Q: Are files uploaded via forms stored?**  
No. Only file metadata is captured.

**Q: Does this affect attribution or workflows?**  
Yes. Captured field data can be used reliably in workflows and attribution reporting.