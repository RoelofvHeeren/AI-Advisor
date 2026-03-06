---
title: "Customize Default Naming Conventions for New SaaS Accounts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005902-customize-default-naming-conventions-for-new-saas-accounts"
category: "Uncategorized"
---

# Customize Default Naming Conventions for New SaaS Accounts

Discover the new configuration in the SaaS Configurator that lets your agency control how **new** SaaS sub-accounts are named at creation. Choose between the **Customer’s name** or the business **Company Name** to reduce post-onboarding edits and improve clarity across search, reporting, and client communications. This article explains the options, behavior, setup, and external checkout requirements so your team can adopt the best convention for your workflow.

* * *

**TABLE OF CONTENTS**  
  

-   [What Is the Default Naming Convention for New SaaS Sub-Accounts?](https://help.gohighlevel.com/a/dashboard/default#What-Is-the-Default-Naming-Convention-for-New-SaaS-Sub-Accounts?)
-   [Key Benefits of Default Naming Convention for New SaaS Subscribers](https://help.gohighlevel.com/a/dashboard/default#Key-Benefits-of-Default-Naming-Convention-for-New-SaaS-Subscribers)
-   [How To Setup Default Naming Convention for New SaaS Subscribers](https://help.gohighlevel.com/a/dashboard/default#How-To-Setup-Default-Naming-Convention-for-New-SaaS-Subscribers)
-   [Naming Convention Options](https://help.gohighlevel.com/a/dashboard/default#Naming-Convention-Options%C2%A0) 
-   [External Checkout Integration](https://help.gohighlevel.com/a/dashboard/default#External-Checkout-Integration)
-   [Behavior & Examples](https://help.gohighlevel.com/a/dashboard/default#Behavior-&-Examples)
-   [Frequently Asked Questions](https://help.gohighlevel.com/a/dashboard/default#Frequently-Asked-Questions)
-   [Related Articles](https://help.gohighlevel.com/a/dashboard/default#Related-Articles)

* * *

# **What Is the Default Naming Convention for New SaaS Sub-Accounts?**

  
This setting defines the **default naming convention** used when HighLevel creates a **new SaaS sub-account** during checkout. Agencies can pick **Company Name** (the business provided during checkout) or keep the traditional **Customer Name + ’s Account** format. The choice applies to **future** sign-ups and does **not** rename existing accounts.

  

Note: This option lives in the **SaaS Configurator** at the Agency level and is available to agencies with **SaaS Mode** on the **Agency Pro ($497) plan**. If you’re on Starter or Freelancer, upgrade to **Agency Pro** to access SaaS Configurator features.

* * *

## **Key Benefits of Default Naming Convention for New SaaS Subscribers**

  

-   **Improved Clarity:** Sub-account names reflect the operating business rather than only the buyer’s personal name.  
      
    
-   **Enhanced Client Experience:** Reduces manual post-onboarding updates by applying your preferred naming automatically.  
      
    
-   **Operational Efficiency:** Makes accounts easier to search, filter, and recognize for support and success teams.  
      
    
-   **Flexible Options:** Switch between **Company Name** and **Customer Name + ’s Account** to match your internal workflow.
    

* * *

## **How To Setup Default Naming Convention for New SaaS Subscribers**

  

1.  In your Agency viewOpen **SaaS Configurator** → **Advanced Settings** → **Sub-Account** **Onboarding**.  
      
    
2.  Under **Sub-Account Onboarding**, choose one:
    
    -   **Company Name** (recommended for business-forward clarity), or
        
    -   **Customer Name + ’s Account** (useful if your team searches primarily by owner).  
          
        
3.  Click **Save**. New SaaS sub-accounts created via HighLevel funnels (and supported external checkouts) will now follow your selection.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052559942/original/71dxTxR0svvIDdWv2CscYvCvHQPGVKhLOg.jpeg?1756371305)

* * *

## **Naming Convention Options** 

  
Review what each option does so you can align the default with how your team identifies and supports new customers.

  

-   **Company Name** — Uses the **business name** provided at checkout so the sub-account clearly represents the client’s brand.
    
    -   _Example:_ **Acme Dental**  
          
        
-   **Customer Name + ’s Account** — Uses the buyer’s personal name with **’s Account** appended.
    
    -   _Example:_ **Jane Smith’s Account**  
          
        

**Note:** If the Company Name field is not present or is left empty during checkout, HighLevel defaults to Customer Name + ’s Account.

* * *

## **External Checkout Integration**

  
You can extend the same naming behavior **beyond** HighLevel funnel checkouts by passing the client’s business name from your external checkout into HighLevel as metadata.  
  

-   Ensure your external checkout sends a **non-empty** `companyName` **subscription metadata** value.  
      
    
-   Keep the SaaS Configurator set to **Use Company Name** to apply the business name when metadata is present.  
      
    
-   If `companyName` is missing or empty, HighLevel falls back to **Customer Name + ’s Account**.  
      
    

**Example metadata payload (illustrative):**

`{ "subscription": { "metadata": { "companyName": "Acme Dental" } } }`

* * *

## **Behavior & Examples**

  
These quick examples clarify what you and your clients will see after signup so expectations are aligned.

  

-   **If “Company Name” is selected and provided at checkout:**
    
    -   _Resulting sub-account:_ **Acme Dental**
        
-   **If “Company Name” is selected but not provided:**
    
    -   _Resulting sub-account:_ **Jane Smith’s Account** _(fallback to customer name)_
        
-   **If “Customer Name + ’s Account” is selected:**
    
    -   _Resulting sub-account:_ **Jane Smith’s Account**
        

  

**Note:** After Account Creation admins can update the **Location’s Friendly Business Name** later if needed. Changing this later does not retroactively change past confirmations or emails already sent. 

  

## **Company name capture**

  

HighLevel captures the Company Name a customer enters at checkout and includes it in the subscription’s metadata as \`companyName\`.

  

This applies to:

-   V2 funnels using the Payments ecosystem (metadata passed via APIs)
-   SaaS V1 setups using Stripe (metadata passed via Stripe)

* * *

## **Frequently Asked Questions**

  
**Q:** **Does this setting affect existing SaaS accounts?**  
No. It applies only to **new** SaaS sign-ups after you save the setting.

  

**Q:** **What happens if no Company Name is provided during checkout?**  
HighLevel defaults to **Customer Name + ’s Account**.

  

**Q: Can we change the default later?**  
Yes. Update the option in **SaaS Configurator** at any time. It applies to **future** sign-ups.

  

**Q:** **How do we enable this for external checkouts?**  
Send a **non-empty** `companyName` in subscription metadata and keep the setting on **Use Company Name**.

  

**Q:** **Will changing the setting rename previously created accounts?**  
No. There’s no retroactive renaming.

  

**Q: Does this influence merge fields like** `**{{location.name}}**` **in communications?**  
The initial Location name reflects the chosen convention at creation. Messages using `{{location.name}}` will display that name unless it’s edited later in the Location settings.

  

**Q:** **Could unusual characters in Company Name cause issues?**  
Use standard alphanumeric characters where possible for best results. If a name is not accepted by your external checkout or looks incorrect, edit the Location name after creation.

* * *

### **Related Articles**

  

-   **[](https://help.gohighlevel.com/support/solutions/articles/155000004199-saas-configurator-onboarding)**[](https://help.gohighlevel.com/support/solutions/articles/155000004199-saas-configurator-onboarding)[SaaS Configurator: Onboarding](https://help.gohighlevel.com/support/solutions/articles/155000004199-saas-configurator-onboarding)  
      
    
-   [SaaS Mode – Full Setup Guide & FAQ](https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq)  
      
    
-   [Guide to SaaS Plan Creation, Sales, and Customer Onboarding](https://help.gohighlevel.com/support/solutions/articles/155000003670-guide-to-saas-plan-creation-sales-and-customer-onboarding)  
      
    
-   [Using Stripe Checkout Pages For SaaS Mode Plans](https://help.gohighlevel.com/support/solutions/articles/48001187056-using-stripe-checkout-pages-for-saas-mode-plans)  
      
    
-   [Convert Existing Sub-Account to SaaS Mode Subscription Plan](https://help.gohighlevel.com/support/solutions/articles/48001188055-convert-existing-sub-account-to-saas-mode-subscription-plan)
    

###