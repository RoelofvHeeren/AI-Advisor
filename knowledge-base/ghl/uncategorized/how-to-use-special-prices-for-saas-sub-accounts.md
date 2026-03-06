---
title: "How to Use Special Prices for SaaS Sub-Accounts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006380-how-to-use-special-prices-for-saas-sub-accounts"
category: "Uncategorized"
---

# How to Use Special Prices for SaaS Sub-Accounts

Need to give a client a one-off discount or custom contract price without touching Stripe? Special Prices for SaaS Sub-Accounts lets HighLevel agencies set a unique price during SaaS-mode activation—no duplicate accounts, no manual Stripe work.

  

Special Prices work when manually convert an existing sub-account to SaaS mode.

  

* * *

**TABLE OF CONTENTS**

-   [What are Special Prices for SaaS Sub-Accounts?](#What-are-Special-Prices-for-SaaS-Sub-Accounts?)
    -   [Key Benefits of Special Prices](#Key-Benefits-of-Special-Prices)
    -   [Set Up a Special Price](#Set-Up-a-Special-Price)
        -   [Step 1: Go to Manage Client](#Step-1%3A-Go-to-Manage-Client)
        -   [Step 2: Add a Subscription](#Step-2%3A-Add-a-Subscription)
        -   [Step 3: Create a Special Price](#Step-3%3A-Create-a-Special-Price)
        -   [Step 4: Confirm Subscription](#Step-4%3A-Confirm-Subscription)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What are Special Prices for SaaS Sub-Accounts?**

  

Special Prices let you override the fixed plan amounts in SaaS Configurator when you convert an existing sub-account to SaaS Mode. Instead of creating a temporary product/price in Stripe, you enter the exact amount you negotiated and HighLevel creates (or re-uses) a hidden “special price” behind the scenes.

* * *

## **Key Benefits of Special Prices**

  

-   Custom Deals on the Fly – Offer promotional rates, enterprise discounts, or market-test new price points without editing your master plans.  
      
    
-   Faster Checkout – Stop jumping to Stripe; everything happens inside HighLevel’s SaaS conversion wizard.  
      
    
-   Metadata-Aware Re-Use – HighLevel automatically re-uses an existing special price if the amount and billing period match, keeping your Stripe catalog tidy.

* * *

## **Set Up a Special Price**

  

Using Special Prices is built into the normal “Switch to SaaS” flow for an existing sub-account.

  

In Agency view, open Accounts → locate the client → click the three-dot menu → Switch to SaaS.

  

Choose “Customer already exists in Stripe” (or add the customer if needed).

  

On the Plan selection screen, click Create Special Price.

Enter the Monthly or Yearly amount you negotiated.

Confirm the currency and billing interval.

  

Select the newly created Special Price, then Continue.

  

Review the subscription summary and click Activate.

  

HighLevel provisions the SaaS plan immediately; your client stays in the same sub-account and is billed at the special rate. 

  

The special price only applies to the one plan you're editing. The client stays in the same sub-account. If you later need to change the amount, create a new special price and swap the subscription in Stripe or via Manage Client → Subscriptions.

###   

### **Step 1: Go to Manage Client**

-   From **Agency View**, open **Sub-Accounts List**.  
      
    
-   Select the sub-account.  
      
    
-   Click **Manage Client**.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054872441/original/kzQ_zIGnJYhF17Y47L8Coqc0hYrCu4umbQ.png?1759194067)

  

### **Step 2: Add a Subscription**

-   Under the **SaaS tab**, select **Add a Subscription**.  
      
    
-   Choose the **payment provider**.  
      
    
-   Select an existing customer profile or create a new one.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054356334/original/J9luwVQsXMsUlTgdX-k9icKg8ckMw35jzQ.png?1758616447)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054356447/original/7um_kWe6QpasPg7G53bZprQlKojVJz5AMg.png?1758616471)

  

### **Step 3: Create a Special Price**

-   In the **Select Plan** modal, click **Create a Special Price** under your desired plan.  
      
    
-   Enter the **custom price** (amount, currency, interval).  
      
    
-   Click **Save Price**.  
      
    

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054872454/original/SEW0g3y-37mlOb1-2ie0rszWsAvnFdFRSA.png?1759194130)**  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054356644/original/m0-tMWaUlGgEFUuhJeRZEOjRc-S23yQJ8Q.png?1758616605)**  

  

The system checks if an identical special price already exists (same product, currency, interval, and amount). If found, it will reuse it. Otherwise, a new special price will be created.

  

### **Step 4: Confirm Subscription**

-   Proceed to confirm the plan with the special price applied.  
      
    
-   The subscription is now attached to the sub-account at the special rate.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054356830/original/NZJylyPGYbUtHd1sqQTngNgLIKonpDeacA.png?1758616656)

  

* * *

## **Frequently Asked Questions**

  

**Q: Does creating a Special Price change my original SaaS Configurator plans?**

A: No. Your public plans remain untouched; Special Prices live as separate Stripe price objects used only for the specific subscription.

  

**Q: Can I use Special Prices when a brand-new client signs up through my checkout page?**

A: Not yet. Today they’re only available when you manually convert an existing sub-account to SaaS Mode. Public checkout links still use your standard plan pricing.

  

**Q: Will the client see the name “Special Price” on their invoice?**

A: They’ll see your normal plan name; the underlying Stripe price ID is different but invoices stay branded with your plan product.

  

**Q: Can I upgrade or downgrade a Special-Price client later?**

A: Yes. You can swap them to any other price—standard or special—inside Manage Client → Subscriptions. HighLevel will soon add guided upgrade paths using special prices.

  

**Q: How do I find all Special Prices in Stripe?**

A: Filter Prices in Stripe by metadata key “hl\_special\_price=true”. All special price objects include this flag for easy reporting.

* * *

## **Related Articles**

  

-   [Convert Existing Sub-Account to SaaS Mode Subscription](https://help.gohighlevel.com/en/support/solutions/articles/48001188055)  
      
    
-   [SaaS Mode – Full Setup Guide + FAQ](https://help.gohighlevel.com/en/support/solutions/articles/48001184920)  
      
    
-   [How To Manage Stripe Payment Methods Inside HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000005164)  
      
    
-   [How to Upgrade/Downgrade a SaaS Plan for a Location](https://help.gohighlevel.com/en/support/solutions/articles/48001207110)  
      
    
-   [2FA for New SaaS Sub-Accounts](https://help.gohighlevel.com/en/support/solutions/articles/155000001488)

#   

###