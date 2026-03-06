---
title: "How to install LeadConnector on WordPress"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005560-how-to-install-leadconnector-on-wordpress"
category: "Uncategorized"
---

# How to install LeadConnector on WordPress

This article explains how HighLevel Hosting auto-installs the LeadConnector (LC) plugin on newly provisioned WordPress sites. It also covers the Plugin Status Indicator in HighLevel, including how to reconnect using OAuth when the plugin is disconnected.

  

**IMPORTANT**: When you provision a new WordPress site through \*\*HighLevel Hosting\*\*, HighLevel automatically installs the \*\*LeadConnector (LC) plugin\*\* during setup.

* * *

  

* * *

**TABLE OF CONTENTS**

-   [What is the LC WordPress Plugin?](#What-is-the-LC-WordPress-Plugin?)
-   [Key Benefits of the Wordpress LC Plugin](#Key-Benefits-of-the-Wordpress-LC-Plugin)
-   [How to Enable and Manage Chat Widgets in WordPress](#How-to-Enable-and-Manage-Chat-Widgets-in-WordPress)
-   [SEO Meta Tags Re-enabled in Funnels](#SEO-Meta-Tags-Re-enabled-in-Funnels)
-   [Plugin Usage Tracking with Pendo](#Plugin-Usage-Tracking-with-Pendo)
-   [Backend Improvements & Bug Fixes](#Backend-Improvements-&-Bug-Fixes)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Next Steps](#Next-Steps)

* * *

## **What is the LC WordPress Plugin?**

  

The LC WordPress Plugin allows you to embed and manage key HighLevel functionalities directly within your WordPress site. This integration simplifies how you control live chat experiences, lead funnels, and event tracking—eliminating the need to switch platforms or manually manage embed codes.

  

When you provision a new WordPress site through \*\*HighLevel Hosting\*\*, HighLevel automatically installs the \*\*LeadConnector (LC) plugin\*\* during setup.

  

HighLevel also shows a \*\*Plugin Status Indicator\*\* in the dashboard so you can confirm whether the plugin is connected without logging into WordPress.

* * *

## **Key Benefits of the Wordpress LC Plugin**

  

This release introduces new controls for chat widget activation, support for multiple widgets, and foundational improvements for better performance and analytics.

  

-   **Enable/disable chat widgets directly** within the WordPress admin.  
      
    
-   **Dropdown selector** allows choosing from multiple chat widgets (one active at a time).  
      
    
-   **Auto-sync** of selected widget with the GHL Dashboard ensures consistency.  
      
    
-   **SEO meta tags for Funnels re-enabled** for enhanced search engine visibility.  
      
    
-   **Pendo event tracking added** to monitor plugin usage behavior.  
      
    
-   **Backend stability improvements**, including scheduled task (cron) reliability.

* * *

## **How to Enable and Manage Chat Widgets in WordPress**

  

You can now easily control chat widget visibility and behavior from the LC Plugin settings—without needing to copy-paste embed codes or access the GHL dashboard each time.

  

Use the Plugin Status Indicator to confirm whether the LC plugin is connected.

  

1\. Go to \*\*Sites → WordPress\*\* in your HighLevel account.

  

2\. Open the hosted WordPress site you want to check.

  

3\. Find the \*\*Plugin Status\*\* indicator for \*\*LeadConnector (LC)\*\*.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063939335/original/ciM02SNNPhCJXCJnC5f8HZYvZScb4HSQ1A.png?1769976933)

  

  

4\. Review the state shown:

  

-      \* \*\*Connected\*\*  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063939287/original/Bt_abGXCcYfa9zttPAEFy5izDILN0SrO7w.png?1769976711)  
      
    
-      \* \*\*Not Connected\*\*  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063939273/original/JPbFFs6QtWuc1OdfMmAbrY8AMw95Uq6lNQ.png?1769976649)  
      
    
-      \* \*\*Installed\*\*  
      
    
-      \* \*\*Connected + Active\*\*  
      
    
-      \* \*\*Connected + Not Active\*\*  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063939308/original/qYypqVVO22U3DAE7-7DFDY1NyIeXMSYyMw.png?1769976772)

  
  

**Resolved Issue:** Previously, widgets selected in the GHL Dashboard would not always update on the site. This issue is now fixed. The plugin now always reflects the current selection and changes from the dashboard.

* * *

## **SEO Meta Tags Re-enabled in Funnels**

  

Meta tags help improve the visibility of your Funnel pages in search engine results. With this update, HighLevel has re-enabled support for SEO tags on Funnel pages.

  

### **Benefits:**

-   Funnel pages now include <title>, <meta name="description">, and other key tags.  
      
    
-   Enhanced discoverability and click-through rates from search engines.  
      
    
-   No manual reconfiguration needed—just ensure SEO settings are enabled within your Funnel setup.  
      
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048560647/original/5p95qE16Gj1jUb3FpHzA3Nsw9ZTsPw0rdw.png?1750344254)

* * *

## **Plugin Usage Tracking with Pendo**

  

To better understand how users interact with the plugin, Pendo event tracking has been added.

  

### **What’s Tracked:**

-   User interactions within the LC Plugin interface.  
      
    
-   Usage data for toggles, dropdowns, and plugin engagement.  
      
    

**Note**: This data is used by HighLevel teams to refine the product and is not currently user-accessible.

* * *

## **Backend Improvements & Bug Fixes**

  

A range of behind-the-scenes upgrades make the plugin more robust and scalable.

  

-   **Authentication Cron Fix**: Scheduled tasks (such as widget syncing) now run reliably.  
      
    
-   **Plugin Architecture Refactor**: Simplified and optimized the internal structure to support future enhancements and ease of maintenance.  
      
    

These updates enhance performance and reduce the chances of bugs or failed updates.

* * *

## **Frequently Asked Questions**

  

**Q: Can I activate more than one chat widget at a time?**  
 No. Only one widget can be selected and embedded at a time.

  

  

**Q: Will my site reflect updates made to the selected widget in the HighLevel dashboard?**  
 Yes. The widget configuration is now reliably synced whenever changed in the dashboard.

  

  

**Q: Do I need to manually re-enable SEO tags in Funnels?**  
 No. The functionality is automatically restored. Ensure Funnel SEO settings are correctly configured.

  

  

**Q: Is Pendo tracking optional?**  
No. It runs silently in the background and doesn’t affect site performance or require user configuration.

  

  

**Q: Do these updates affect older versions of the plugin?**  
It’s recommended to update to the latest version to benefit from these enhancements.

  

  

**Q: “How do I install the LC plugin?” / Q: “How do I reconnect?”**

Answers must reflect auto-install, OAuth Connect Now CTA, and scope (new sites only).

* * *

## **Next Steps**

  

-   Update your LC Plugin to the latest version from the WordPress admin.  
    
-   Enable and select your chat widget through the new toggle and dropdown.
-   Review Funnel SEO settings for increased traffic opportunities.
-   Keep an eye on plugin functionality to benefit from real-time updates and fixes.
-   Contact support if you experience any issues with widget visibility or configuration syncing.