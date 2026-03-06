---
title: "SaaS Bulk Rebilling Setup for Multiple Sub-Accounts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005766-saas-bulk-rebilling-setup-for-multiple-sub-accounts"
category: "Uncategorized"
---

# SaaS Bulk Rebilling Setup for Multiple Sub-Accounts

This article will show you how to configure rebilling markups in bulk for multiple sub-accounts using HighLevel. This powerful feature helps agencies save time, maintain consistent pricing, and scale efficiently across large account lists.

* * *

**TABLE OF CONTENTS**

-   [What is Bulk Rebilling Markup Configuration?](#What-is-Bulk-Rebilling-Markup-Configuration?)
-   [Key Benefits of Bulk Rebilling Markup Configuration](#Key-Benefits-of-Bulk-Rebilling-Markup-Configuration)
-   [Bulk Action History](#Bulk-Action-History)
-   [How To Configure Bulk Rebilling Markups](#How-To-Configure-Bulk-Rebilling-Markups)
-   [Important Notes and Best Practices](#Important-Notes-and-Best-Practices)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is Bulk Rebilling Markup Configuration?**

  

The Bulk Rebilling Markup Configuration feature allows agencies to set rebilling markups across multiple sub-accounts at the same time. Previously, agencies had to configure each account individually, which was time-consuming and prone to errors. Now, you can apply standardized markup logic to dozens or even hundreds of sub-accounts instantly, making it easier to monetize services consistently and efficiently.

* * *

## **Key Benefits of Bulk Rebilling Markup Configuration**

  

Applying markups in bulk streamlines your billing operations and enforces uniform pricing policies across your client base.

  

-   **Time Efficiency**: Eliminate repetitive per-account edits and reclaim hours each month  
      
    
-   **Revenue Consistency**: Apply identical markup logic to every client, ensuring predictable and consistent margins  
      
    
-   **Operational Scalability**: Roll out new services or price changes to hundreds of accounts in at once  
      
    
-   **Error Reduction**: Centralized settings decrease the risk of mismatched or forgotten markups  
      
    
-   **Onboarding Speed**: Pair bulk rebilling with automated SaaS onboarding to get new clients live faster
    

* * *

## **Bulk Action History**

  

Every bulk job is logged in **Bulk Action History**. Here you can track status, drill into past actions and (when supported) roll back or re‑run the action. This audit trail helps your team verify changes and troubleshoot edge cases without guessing which accounts were updated. To access to **Bulk Action History**, click the **Clock Icon** located next to **Bulk Actions** on the **Sub-Accounts** page. 

  

For more information on Bulk Action History, see [How to manage SaaS sub-accounts in bulk with ease?](https://help.gohighlevel.com/en/support/solutions/articles/155000005270)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050549328/original/qHy_g5J8n-D5LQ5yXv7UKAAGhd3z9IbIOg.png?1753722797) 

* * *

## **How To Configure Bulk Rebilling Markups**

  

Configuring rebilling markups in bulk is designed to be intuitive and quick, even when managing large numbers of accounts.

  

  

#### **Step 1:** Select Sub-Accounts

  

-   From the Agency Dashboard, click **Sub‑Accounts**  
      
    
-   Check the box beside each sub‑account you want to update (use filters or **Select All** for large batches)  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050453495/original/HVJvoPlPNRJ8o9CtQjEJiZzd2kCv7P_iTA.png?1753457897)  
  

#### **Step 2:** Bulk Action

  

-   Click **Bulk Actions** in the upper‑right corner  
      
    
-   Choose **Enable Rebilling** from the drop‑down menu
    

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050453557/original/F6Xw9BNcotobxuIsZVR9XkvuXGRudgjzBg.png?1753457934)**

  

#### **Step 3:** Choose Payment Provider

  

-   In the pop‑up, select your connected payment provider, such as Stripe, and click **Continue**  
      
    
-   If no payment provider is currently connected, set this up first. For more info on setting up a payment provider, see [Getting Started - Connect Stripe](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050453624/original/V_gRwEifJTHTeaXw5b0e2SwXDJkWTxRwlw.png?1753457977)  
  

#### **Step 4:** Configure Markups

  

-   The **Configure Rebilling Services** modal lists each usage‑based service (Phone, Email, AI, etc.)  
      
    
-   Drag the global slider (**Enable rebilling on all services and apply same markup**) to set one multiplier across all services  
      
    
-   Adjust the individual sliders for fine‑grained control over each individual service  
      
    
-   Click the **Arrow** icon next to each service to view the rate breakdown
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050453681/original/2SrOyRvoQae2FsAvc4uq9VfrEE3U_7sD0w.png?1753458037)  
  

#### **Step 5:** Confirm Action

  

-   A summary dialog displays the number of selected sub‑accounts  
      
    
-   Verify details, then click **Enable Rebilling** to confirm
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050453722/original/DzwvRgUGBAj1KZNRnJP0MqLabjA_JQUqEw.png?1753458077)

  

  

#### **Step  6:** Verify Rebilling Activation

  

-   If a sub-account already has a card on file, rebilling will activate immediately with the new markup settings  
      
    

-   If a sub-account does not yet have a payment method, a customer profile will be created with your selected payment provider. Once the sub-account admin adds a card, rebilling will automatically activate using the predefined markups.

* * *

## **Important Notes and Best Practices**

  

Understanding these operational details will help you avoid potential issues and maximize the efficiency of this feature.

  

-   Sub-accounts without a payment method **will not start rebilling** until a card is added, but your markup configurations will be saved and ready.  
      
    
-   Double-check markup percentages to align with your agency’s overall pricing and profitability goals.  
      
    
-   Audit your markup configurations periodically to ensure all sub-accounts stay consistent with your current policies.  
      
    
-   Consider creating internal SOPs to pair this feature with standardized onboarding flows for new sub-accounts.  
    

* * *

## **Frequently Asked Questions**

  

**Q: Can I update markups individually after using bulk configuration?**  
Yes! You can always adjust or override markups on an individual sub-account basis later if needed.  
  

**Q: What happens if a sub-account already has custom markup settings?**  
 Bulk configuration will overwrite existing markups with the new bulk settings you specify.

  

**Q: Can I bulk disable rebilling instead of setting it?**  
This feature is designed for enabling and configuring markups in bulk. Disabling must be done individually.

**Q: Will rebilling auto-enable for accounts without a card on file?**  
 Rebilling will auto-enable as soon as the sub-account admin adds a card to their profile.

* * *

## **Related Articles**

  

-   [Rebilling, Reselling, and Wallets Explained](https://help.gohighlevel.com/en/support/solutions/articles/155000002095)  
      
    
-   [](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)[Getting Started - Connect Stripe](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)[](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)  
      
    
-   [Reselling & Rebilling through SaaS V2 Payment Providers](https://help.gohighlevel.com/en/support/solutions/articles/155000005083)  
      
    
-   [How to Manage SaaS Sub-Accounts in Bulk with Ease?](https://help.gohighlevel.com/en/support/solutions/articles/155000005270)  
      
    
-   [Activate SaaS Mode, Request Payment, and Configure Phone Rebilling](https://help.gohighlevel.com/en/support/solutions/articles/48001177740)  
      
    
-   [SaaS Mode – Full Setup Guide + FAQ](https://help.gohighlevel.com/en/support/solutions/articles/48001184920)  
      
    
-   [Smart Prompts for Bulk SaaS Enablement](https://help.gohighlevel.com/en/support/solutions/articles/155000005614)