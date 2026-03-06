---
title: "Custom Values in WordPress"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress"
category: "Uncategorized"
---

# Custom Values in WordPress

  

  

The **Custom Values integration** in the LC WordPress Plugin lets you display live HighLevel data inside WordPress pages or posts using shortcodes. It brings the same personalization used in funnels, emails, and automations directly to WordPress—no coding or complex setup required.

* * *

**TABLE OF CONTENTS**  
  

-   [What Are Custom Values in WordPress?](#What-Are-Custom-Values-in-WordPress?)
-   [Key Benefits](#Key-Benefits%E2%80%8B)
-   [Native Sync with HighLevel](#Native-Sync-with-HighLevel)
-   [Using Shortcodes in WordPress](#Using-Shortcodes-in-WordPress)
-   [Custom Value Manager (WP Admin)](#Custom-Value-Manager-\(WP-Admin\)%E2%80%8B)
-   [Dynamic Rendering and Page Output](#Dynamic-Rendering-and-Page-Output)
-   [Setup Steps](#Setup-Steps)
-   [FAQ](#FAQ)
-   [Related Articles](#Related-Articles%E2%80%8B)

* * *

## **What Are Custom Values in WordPress?**

  

Custom Values in WordPress sync the _key:value_ pairs from your HighLevel sub-account (system and custom) and make them available as WordPress shortcodes.  
  

When a visitor loads a page, the plugin automatically pulls the latest data—keeping your content current without manual edits.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562835/original/IEUOx-L1w_JNUDMJSTd6AzdFhvfLTXBE0A.png?1759961095)

* * *

## **Key Benefits**  
  

-   **Omnichannel consistency:** Use the same data in automations, emails, and websites.  
      
    
-   **Real-time updates:** Change a value once in HighLevel—WordPress updates instantly.  
      
    
-   **No-code setup:** Paste a shortcode instead of editing code.  
      
    
-   **Reusable templates:** Build client sites with placeholders that auto-fill on sync.  
      
    
-   **Seamless integration:** WordPress becomes part of your HighLevel ecosystem.
    

* * *

## **Native Sync with HighLevel**

  

The LC Plugin connects your WordPress site to your HighLevel sub-account through secure OAuth. Once authorized, it:

-   Fetches all system and user-defined Custom Values.  
      
    
-   Stores them locally for quick access.  
      
    
-   Resyncs automatically every 12 hours (manual **Sync Now** also available).
    

  

This ensures your WordPress data always mirrors your HighLevel account without manual syncing.

* * *

## **Using Shortcodes in WordPress**

  

Shortcodes let you dynamically display live data anywhere inside your WordPress content—page builders, blocks, or classic posts.

  

**Syntax:**  
  

```
[hl_custom_value name="custom_values.your_key"]
```

  
**Example:**  
  

```
Wish You a Very [hl_custom_value name="custom_values.festive_greeting"]
```

  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562839/original/N08SHblr1WdL7Yy4LhsF4AQ5bmm3xjOsaA.png?1759961130)

  

  
You can use shortcodes in **Elementor, Divi, Bricks, Beaver Builder, Gutenberg, or the Classic Editor**—any builder that supports native WordPress shortcodes.  
  

* * *

## **Custom Value Manager (WP Admin)**

Inside WordPress, open the HighLevel Custom Values section to view and manage your synced keys.  
  

Here you can:  
  

-   View each synced Custom Value and its current data.  
      
    
-   Copy shortcodes in one click.  
      
    
-   Trigger a manual resync or enable automatic syncing.  
      
    
-   Filter by folders matching your HighLevel structure.
    

  

This makes it easy to organize and access all synced data directly within your WordPress dashboard.

* * *

## **Dynamic Rendering and Page Output**

  

When a visitor opens a page, the LC Plugin renders the Custom Value in real time.  
  

If caching plugins are used, stale data may appear unless proper cache rules are applied.

  

**Best Practices:**  
  

-   Enable **“Purge cache on resync”** if caching is active.  
      
    
-   Avoid caching pages that display contact-specific values.  
      
    
-   Always resync after updating values in HighLevel.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562869/original/WKGPdC6c-hXDD7rPHW9xvTsOChaDHjGJZw.png?1759961240)

* * *

## **Setup Steps**

  

To connect your WordPress site with HighLevel, make sure you’re using LC Plugin version 3.5.0 or higher. In your WordPress Admin, open the HighLevel settings and select Connect Account, then authorize your HighLevel login. Choose the appropriate sub-account and grant access. Once connected, the plugin will automatically sync and display a confirmation message stating Connected to LeadConnector.  
  

  

After the sync completes, open the Custom Values section in HighLevel to confirm that your data has been imported. You can then copy a shortcode and place it within any page or post using your preferred builder. When published, your WordPress content will dynamically display the synced HighLevel data in real time.  
  

* * *

## **FAQ**  
  

**Does it support contact-level values?**

Yes—if the visitor is tracked via cookie or URL parameter.  
  
**Will it slow my site?**

No. Values are cached locally and refreshed only during sync operations.  
  
**Can I connect multiple sub-accounts?**

Each WordPress install can connect to one sub-account. Use multisite for multiple clients.  
  

**What if a value is deleted in HighLevel?**

It appears blank until you resync or replace it.  
  

**Who can authorize connections?**

Only HighLevel users with API access to the sub-account can connect WordPress.

* * *

## **Related Articles**  
  

-   [](https://help.gohighlevel.com/support/solutions/articles/48001161575)[How to Use Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/48001161575)   
      
      
    
-   [](https://help.gohighlevel.com/support/solutions/articles/155000004390)[Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)  
      
      
    
-   [](https://help.gohighlevel.com/support/solutions/articles/155000003353)[Workflow Action – Update Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/155000003353)  
      
      
    
-   [](https://help.gohighlevel.com/support/solutions/articles/155000005560) [LC WordPress Plugin Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000005560)  
      
      
    
-   [](https://help.gohighlevel.com/support/solutions/articles/48001231547)[WordPress Plugin & Theme Management](https://help.gohighlevel.com/en/support/solutions/articles/48001231547)
    

* * *