---
title: "Troubleshooting: Extra HTML or Unrelated Text Appearing in Calendar Embed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed"
category: "Uncategorized"
---

# Troubleshooting: Extra HTML or Unrelated Text Appearing in Calendar Embed

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [What’s Actually Happening](#What%E2%80%99s-Actually-Happening)
-   [How to Verify](#How-to-Verify)
-   [How to Fix It](#How-to-Fix-It)
-   [Key Takeaway](#Key-Takeaway)

* * *

## Overview

Some users may see unrelated text (for example, third-party references like _“Marketing Agency,” “Demo Reviews,” or “Free Trial Offers”_) when embedding a calendar onto their website or funnel. This can raise concerns about SEO, site trust, or script security.

In most cases, these extra snippets are not coming from the calendar embed code. Instead, they are part of the page where the embed is placed.

* * *

## What’s Actually Happening

-   The calendar embed script is clean and does not inject third-party text or links.
    
-   In funnels or websites, extra snippets (such as _reviews_ or unrelated business names) are usually hidden blocks within the page builder content.
    
-   On external sites (for example, WordPress), these snippets may come from unrelated elements already present on the page.
    
-   These elements may have been added accidentally, left over from a template, or hidden with styling (for example, `display: none`).
    

* * *

## How to Verify

1.  Copy the embed code directly from **Calendar Settings → Embed Code**.
    
2.  Paste it into a plain text editor (such as Notepad).
    
    -   You should see only the expected `<iframe>` or `<script>` calendar embed.
        
    -   If unrelated text appears here, contact support (this is rare).
        
3.  Double-check the embed code for **missing opening or closing brackets**:
    
    -   Example of a common mistake:
        
        `<script>   ... lines of code ... </script`
        
        Here, the closing `>` is missing. Similarly, sometimes the starting `<` can be left out.
        
    -   If you spot this, correct the brackets and re-embed the code.
        
4.  Inspect the webpage where the calendar was added:
    
    -   For funnels/websites: open the builder and check for hidden or unused sections.
        
    -   For external sites: use the site’s editor or browser **Inspect Element** tool (right-click → Inspect) to review page content.
        

* * *

## How to Fix It

-   **If using Funnels/Websites:**
    
    1.  Go to the page where the calendar is embedded.
        
    2.  Look for hidden or unused blocks.
        
    3.  Delete or edit any unrelated text.
        
-   **If You Cannot Find the Elements:**
    
    -   Use search (Ctrl+F or Cmd+F) inside the editor for keywords such as _trial_, _review_, or _demo_.
        
    -   If still unclear, reach out to support with:
        
        -   The page URL where the issue appears.
            
        -   A Loom video showing the steps you took.
            

* * *

## Key Takeaway

The calendar embed code itself does not add external text or harm SEO. Any unexpected content comes from the page where it is embedded and can be removed directly in the builder or site editor. Always make sure the embed code is copied fully, with all brackets correctly included.