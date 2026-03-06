---
title: "Usage Based Pricing on App Markeptlace"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005111-usage-based-pricing-on-app-markeptlace"
category: "Uncategorized"
---

# Usage Based Pricing on App Markeptlace

  
HighLevel’s App Marketplace supports usage‑based pricing so developers can charge per execution, per message, or per custom event—and agencies can add markups and set daily limits. This article explains what the model is, how pricing modules work, and how to configure markup, limits, and charge flow. Follow the concise, role‑based steps to launch confidently and keep client billing transparent.

* * *

**TABLE OF CONTENTS**

-   [What is Marketplace Usage‑Based Pricing and Agency Rebilling?](#What-is-Marketplace-Usage%E2%80%91Based-Pricing-and-Agency-Rebilling?)
-   [Key Benefits of Marketplace Usage‑Based Pricing and Agency Rebilling](#Key-Benefits-of-Marketplace-Usage%E2%80%91Based-Pricing-and-Agency-Rebilling)
-   [Usage-Based Pricing Modules](#Usage-Based-Pricing-Modules)
    -   [Per‑Execution Pricing for Marketplace Actions and Triggers](#Per%E2%80%91Execution-Pricing-for-Marketplace-Actions-and-Triggers)
    -   [Per‑Message Pricing for Conversation Providers](#Per%E2%80%91Message-Pricing-for-Conversation-Providers)
    -   [Custom Per‑Usage Pricing for App‑Specific Events](#Custom-Per%E2%80%91Usage-Pricing-for-App%E2%80%91Specific-Events)
-   [Billing Controls & Protections](#Billing-Controls-&-Protections-%E2%80%8B)
-   [How To Set Up Marketplace Usage‑Based Pricing and Agency Rebilling](#How-To-Set-Up-Marketplace-Usage%E2%80%91Based-Pricing-and-Agency-Rebilling)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is Marketplace Usage‑Based Pricing and Agency Rebilling?**

  
Usage‑based pricing ties charges directly to app activity so costs scale with actual usage rather than flat subscriptions. Agency rebilling lets agencies resell those per‑use charges with their own markup so they can maintain margin while centralizing client billing.

  

Usage‑based pricing covers three modules: per‑execution fees for Actions/Triggers, per‑message fees for Conversation Providers (with separate inbound and outbound rates), and custom per‑usage fees for app‑defined events posted through the Marketplace billing APIs. Agency rebilling applies an agency‑set markup to these per‑use charges and bills the appropriate wallet based on your rebilling setup.

* * *

## **Key Benefits of Marketplace Usage‑Based Pricing and Agency Rebilling**

  
Educational description: Knowing the advantages helps teams decide when consumption‑based billing makes sense and how to protect budgets and margins.

  

-   **Aligned costs**: charges track real activity instead of flat, fixed plans  
      
    
-   **Granular control**: choose per‑execution, per‑message (inbound/outbound), or custom events  
      
    
-   **Agency margin**: **markup controls** let agencies add profit on top of developer pricing  
      
    
-   **Spend protection**: **daily usage limits** cap consumption to avoid bill shock  
      
    
-   **Clarity on billing**: **wallet charge flow** clarifies who is billed with/without rebilling
    

* * *

## **Usage-Based Pricing Modules**

  
App developers can now set a per-usage price on their Marketplace apps. An app can have a usage-based price for three modules:

  

### **Per‑Execution Pricing for Marketplace Actions and Triggers**

  
Charge each time an action or trigger runs, which works well for workflow‑heavy or automation‑driven apps.

  

-   Unit: each execution of a supported action or trigger.  
      
    
-   Typical uses: premium actions, data enrichment, sync steps.  
      
    
-   Where to configure: App → Pricing → enable **Actions & Triggers** and set the per‑execution price.  
      
    

### **Per‑Message Pricing for Conversation Providers**

  
Messaging costs can vary by direction and channel. Separate inbound and outbound rates keep pricing aligned to the real cost of delivery and handling.  
  

-   Unit: each message handled by the Conversation Provider.  
      
    
-   Directional pricing: set distinct **Inbound** and **Outbound** prices.  
      
    
-   Where to configure: App → Pricing → **Conversation Provider** pricing fields.
    

  

### **Custom Per‑Usage Pricing for App‑Specific Events**

  
Bill for unique events—like minutes, tokens, or other units—by defining your own event and posting usage with the billing APIs.

  

-   Unit examples: per minute (e.g., AI voice), per token, per scanned item.  
      
    
-   Where to configure: App → Pricing → **Custom Event (API‑billed)** and define price/unit; post usage via billing APIs.  
      
    
-   Validation: post test usage and confirm charges appear before go‑live.
    

* * *

## **Billing Controls & Protections**

  

One compact table summarizing markup, charge flow, and usage limits to speed configuration and reconciliation.

  

| Item | What it does | Where to configure | Impact on billing | Key notes |
| --- | --- | --- | --- | --- |
| Agency Markup | Adds margin to developer per‑use pricing | App Marketplace → **App Reselling** (Usage‑Based) | Increases per‑unit price billed to client (when rebilling ON) | App‑level; not client‑specific |
| Rebilling ON | Bills the client's sub‑account wallet | Agency billing settings (**Rebilling**) | Usage charges debit sub‑account wallet | Verify wallets are funded |
| Rebilling OFF | Bills the agency wallet | Agency billing settings (**Rebilling**) | Usage charges debit agency wallet | Monitor agency wallet balance |
| Daily Usage Limits | Caps daily billable units per app | App Marketplace → **Usage Limits** | Usage pauses at cap; resumes next day | Set caps to match budget/volume |

* * *

## **How To Set Up Marketplace Usage‑Based Pricing and Agency Rebilling**

  
Proper configuration ensures correct pricing, accurate posting of usage events, and predictable client billing.

  

1.  Go to **App Marketplace** → open the app → **App Reselling** (Usage‑Based).  
      
    
2.  Select **Set Usage‑Based Pricing** (or equivalent) and enter your **markup**; Save.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058417770/original/Wip_LlMcsLfo9IZwF9GmHTH2vJmrWemgAg.gif?1763131962)  
      
    
3.  Go to **App Marketplace** → **Usage Limits** and set daily caps per client/sub‑account; Save.  
      
    
4.  Ensure **Rebilling** is enabled so eligible charges debit the sub‑account wallet.  
      
    
5.  Where can I see the app's usage-based charges?   
      
    If an app has usage-based pricing, the pricing details are listed in the **Pricing** section of the app's **Details** page.   
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058419128/original/9OhgC36ejur0KDG_2bZTgfM-Nv9JQiTTPQ.png?1763132367)  
      
    For Workflow Actions and Triggers, the usage pricing is also listed in the **Discover** tab in the Workflow builder.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058419243/original/zKnvrkqQFZ5EOK-VuYp0DdbNvfTjszAHMA.png?1763132394)
    

* * *

## **Frequently Asked Questions**

  
**Q: Who is billed when rebilling is on vs. off?  
**With rebilling on, the sub‑account wallet is charged. With rebilling off, the agency wallet is charged.  
  

**Q: Can I set different inbound and outbound message prices?  
**Yes. Conversation Providers support separate inbound and outbound per‑message rates.  
  

**Q: Are markups per app or per client?  
**Markups are configured at the app level for usage‑based apps. Clients see only the agency price.  
  

**Q: What happens when a daily limit is reached?  
**Billable usage for that app pauses for the rest of the day and resumes after the daily reset.  
  

**Q: Can subscription and usage pricing be used together?  
**Yes. Use subscriptions for access and usage‑based pricing for consumption when supported by the app.  
  

**Q: How do I test before rolling out to clients?  
**Developers can post test usage via the billing APIs; agencies can verify charges and limit behavior on their markup and limits screens.  
  

**Q: Where do I view usage‑based charges?  
**Review charges in relevant App Marketplace views and wallets; some usage may also be visible where the app is discovered (e.g., Workflows Discover) depending on the module.

* * *

## **Related Articles**

  

-   [Usage‑Based Pricing on App Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000005111-usage-based-pricing-on-app-marketplace)   
      
    
-   [Marketplace Agency Reselling for Apps with Usage‑Based Pricing](https://help.gohighlevel.com/support/solutions/articles/155000005501-marketplace-agency-reselling-for-apps-with-usage-based-pricing)   
      
    
-   [Set Up Your App Pricing (Developers)](https://help.gohighlevel.com/support/solutions/articles/155000001217-set-up-your-app-pricing#Usage-based-pricing)  
      
    
-   [Rebilling, Reselling, and Wallets Explained](https://help.gohighlevel.com/support/solutions/articles/155000005340-rebilling-reselling-and-wallets-explained)   
      
    
-   [Agency Daily Usage Limits for Usage‑Based Apps](https://help.gohighlevel.com/support/solutions/articles/155000005512-agency-daily-usage-limits-for-usage-based-apps)