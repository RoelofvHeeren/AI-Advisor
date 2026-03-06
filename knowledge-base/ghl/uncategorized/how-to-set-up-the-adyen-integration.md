---
title: "How to set up the Adyen integration?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007032-how-to-set-up-the-adyen-integration-"
category: "Uncategorized"
---

# How to set up the Adyen integration?

Easily accept credit and debit card payments across Europe and North America with HighLevel’s Adyen Payments integration. This article explains how the integration works, who it’s for, and how to connect your Adyen account in minutes. You’ll also learn supported capabilities, routing behavior, testing, refunds, and FAQs. Perfect for agencies serving enterprise clients that standardize on Adyen.

* * *

**TABLE OF CONTENTS**

-   [What is Adyen Payments Integration?](#%E2%80%8B%E2%80%8BWhat-is-Adyen-Payments-Integration?)
-   [Key Benefits of Adyen Payments Integration](#Key-Benefits-of-Adyen-Payments-Integration)
-   [Prerequisites](#Prerequisites)
-   [At-a-Glance: Credentials, Capabilities, Regions](#At-a-Glance%3A-Credentials,-Capabilities,-Regions)
-   [How To Setup Adyen Payments Integration](#How-To-Setup-Adyen-Payments-Integration)
-   [Testing with Adyen (Sandbox)](#Testing-with-Adyen-\(Sandbox\))
-   [Refunds & Disputes](#Refunds-&-Disputes)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)
-   [Payment Links](#Payment-Links%C2%A0)

* * *

# **What is Adyen Payments Integration?**

  

Adyen Payments Integration connects an existing Adyen merchant account to HighLevel so you can process card transactions on supported sales channels using Adyen’s PCI-compliant infrastructure. This enables agencies and sub-accounts to meet enterprise procurement requirements while keeping payment collection inside HighLevel.

Adyen Payments Integration lets administrators add Adyen credentials (Company API Key and, for Live, the Live URL Prefix) in HighLevel and route eligible card transactions through Adyen on selected channels such as Invoices and Payment Links.

* * *

## **Key Benefits of Adyen Payments Integration**

  

Understanding the value helps you decide when to choose Adyen over other processors connected to your sub-account. These benefits focus on enterprise needs, geographic coverage, and security.

  

-   **Enterprise readiness:** win deals with companies that standardize on Adyen.  
      
    
-   **3D Secure (3DS) support:** adds an extra authentication layer for high-risk or cross-border payments.  
      
    
-   **Broader EU & North America coverage:** onboard businesses operating in those regions with a single provider.  
      
    
-   **Fast client adoption:** existing Adyen merchants can plug in credentials and start selling quickly.
    

* * *

## **Prerequisites**

  

Preparing these items avoids connection errors and speeds up onboarding.  
  

-   Active Adyen merchant account approved for processing (Test and Live).  
      
    
-   Company API Key for **Test** and **Live** environments.  
      
    
-   **Live URL Prefix** available in your Adyen account (used only for Live).  
      
    
-   HighLevel account with Admin access to **Payments**.
    

* * *

## **At-a-Glance: Credentials, Capabilities, Regions**

  

Use this quick reference to confirm which credentials are required, what the integration supports today, and where it’s available. Keep it handy during setup and client scoping to avoid misconfiguration or overpromising.  
  

| Category | Item | Details |
| --- | --- | --- |
| **Credential Requirements** | Live mode | Company API Key **and** Live URL Prefix |
| Test (Sandbox) | Company API Key |
| Live URL Prefix | Hex-encoded string that precedes live endpoints (e.g., `1797a841fbb37ca7-MyStore`); found in Adyen dev settings |
| **Supported Capabilities** | Payment methods | Card payments (credit/debit) |
| Authentication | 3D Secure (3DS) supported |
| HighLevel surfaces | Invoices; Payment Links; Stores; Forms/Funnels order forms (where card payments are supported) |
| **Supported Regions & Currencies** | Regions | EU/UK; United States; Canada |
| Currencies & settlement | Determined by Adyen account approval and configuration |

* * *

## **How To Setup Adyen Payments Integration**

  

Follow these steps to connect Adyen securely and verify everything works before going live.

  

1.  In your **HighLevel** sub-account, Go to **Payments → Integrations**. Click **Connect Adyen**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386395/original/9yJ_eT8Sjjer8_wN3uJIyeZEDkTb6ahUbA.png?1764253233)  
      
    
2.  Choose **Live** or **Test** from the toggle.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386481/original/cAJQ1d8VKPzNQ-p7opNk7BbDAAnzpHOc3Q.png?1764253309)  
      
    
3.  Enter your **Company API Key**. [How to find Adyen API Key?](https://docs.adyen.com/development-resources/api-credentials)  
      
    
4.  _(Live only)_ Paste your **Live URL Prefix**.  
      
    
5.  Click **Save**. A success message confirms the connection.
    

* * *

## **Testing with Adyen (Sandbox)**

  

Testing prevents unintended charges and helps verify 3DS behavior before switching to Live.  
  

-   Use **Test** mode to simulate card payments; no real charges occur.  
      
    
-   Use Adyen-provided **test card numbers** and follow any 3DS prompts to confirm authentication flows.  
      
    
-   After successful tests, switch the integration to **Live**, add the **Live URL Prefix**, and repeat a low-value verification payment.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059386305/original/Nthj7Hy3KCgoG29Bk2RXKFreQZQ9Gbldbw.png?1764253202)

* * *

## **Refunds & Disputes**

  

Knowing where to issue refunds and manage disputes reduces delays and chargeback risk for your clients.  
  

-   **Refunds:** If refunds are enabled for your account within HighLevel, you can issue full or partial refunds from **Payments → Transactions** (or from the related Invoice). Otherwise, refunds can be initiated directly in your Adyen dashboard.  
      
    
-   **Disputes/Chargebacks:** Disputes are managed in **Adyen**. Monitor dispute notifications and provide evidence per Adyen’s timelines and guidance.  
      
    
-   Refund timing, fees, and settlement adjustments are determined by Adyen.
    

* * *

## **Frequently Asked Questions**

  

**Q: Can I enable Apple Pay or Google Pay through Adyen in HighLevel?**  
Not at launch. The integration currently supports card payments only.

  

**Q: Is there extra HighLevel transaction pricing on top of Adyen fees?**  
No. Transactions are processed by Adyen under your existing Adyen pricing.

  

**Q: What happens if I leave the Live URL Prefix blank in Live mode?**  
Live transactions will fail because Adyen cannot route the request without the prefix.

  

**Q: Can I connect both Stripe and Adyen to the same sub-account?**  
Yes. Keep multiple gateways connected and select a **Default Provider** per channel.

  

**Q: Does 3DS require a HighLevel setting?**  
No. 3DS challenge flows are handled by Adyen during checkout when required.

  

**Q: Where do I see Adyen payouts and fees?**  
In your Adyen dashboard. Settlement timing and fees are determined by Adyen.

  

**Q: Is the Adyen integration card-only at launch?**  
Yes. The current release supports credit/debit card payments. Wallets (Apple/Google Pay), BNPL, and terminals are not available yet.

* * *

## **Related Articles**

  

-   ## 
    
    [](https://help.gohighlevel.com/support/solutions/articles/155000002177-payment-links)[Payment Links](https://help.gohighlevel.com/support/solutions/articles/155000002177-payment-links)    
      
    
-   [How to integrate Razorpay within the CRM](https://help.gohighlevel.com/support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm)  
      
    
-   [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)  
      
    
-   [Manage payment methods displayed with Stripe integration](https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration)  
      
    
-   [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)  
      
    
-   [Managing Granular Permissions for Payments](https://help.gohighlevel.com/support/solutions/articles/155000006470-managing-granular-permissions-for-payments)