---
title: "Supported Payment Providers & Methods by Product Area (What Works Where)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-"
category: "Uncategorized"
---

# Supported Payment Providers & Methods by Product Area (What Works Where)

Use this quick guide to see which payment providers and payment methods work in each part of HighLevel. The table covers Stripe, PayPal, Square, NMI, AuthorizeDotNet, and Razorpay, plus wallets, BNPL, ACH/SEPA, and card readers. Save it for onboarding, troubleshooting, and planning your checkout experiences.

* * *

**TABLE OF CONTENTS**

-   [What is the Payment Providers by Product Area Table?](#What-is-the-Payment-Providers-by-Product-Area-Table?)[](#Table%3A-Payment-Providers-&-Methods-Supported-by-Product-Area)
-   [Table: Payment Providers & Methods Supported by Product Area](#Table%3A-Payment-Providers-&-Methods-Supported-by-Product-Area)[](#Product-Area-Definitions)
-   [Product Area Definitions](#Product-Area-Definitions)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Payment Providers by Product Area Table?**

  

This table provides a single, authoritative mapping of payment providers and methods to supported HighLevel product areas. It includes, for example, Stripe Cards, Apple Pay/Google Pay, PayPal, NMI, Authorize.Net, Square, and Razorpay across Order Forms, Invoices, and Payment Links. It answers, “Where can I use this provider or method?” without digging through multiple articles.

* * *

## **Payment Providers & Methods Supported by Product Area**

  

**Note:** Some payment methods **don't support subscription or recurring payments**, they are only available for one-time payments.

  

| Payment Providers / Methods | Order Forms | Form Payments | Survey Payments | Email Direct Checkout (uses payment links) | Ecom Store | Invoices | Invoices (Recurring) | Payment Links | Courses | Communities | Contact page (charge a card) | Saas Mode | Calendar / Services | Service Menu | POS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stripe (Card) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Stripe > Apple pay/ Google pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | Y |
| Stripe > Affirm/Klarna/Afterpay | Y | Y | Y | Y | Y | Y | N | Y | N  
 |   
 | N | Y | N | N | N |
| Stripe > ACH Direct debit | N | N | N | N | N | Y | Y | N | N | N | N | N | N | N | N |
| Stripe > Ideal/Bancontact | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | N |
| Stripe > SEPA | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Amazon Pay / Revolut Pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Link | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Card Reader (Stripe M2 and BBPOS Wisepad 3) | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| PayPal | Y | Y | N | Y | Y | Y | Y | Y | Y | Y | N | N | N | N | N |
| AuthorizeDotNet - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| NMI - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square - Cards | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square > Card Reader | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| Razorpay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |
| 3rd Party Integrations | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |

* * *

## **Product Area Definitions**

  

-   **Order Forms**: Funnel/website-based forms tailored for selling products and offers.  
      
    
-   **Form Payments**: Standard forms enhanced with the Payment Element for collecting payments or donations.  
      
    
-   **Survey Payments**: Surveys that include the Payment Element so you can accept payments during submission.  
      
    
-   **Email Direct Checkout (uses payment links)**: Checkout initiated directly from an email using a payment link.  
      
    
-   **Ecommerce Store**: Storefront and product catalog with a native checkout.  
      
    
-   **Invoices**: One-time invoice generation and collection flows.  
      
    
-   **Invoices (Recurring)**: Recurring invoice templates and automated billing cycles.  
      
    
-   **Payment Links**: Links to a hosted checkout for one or more products.  
      
    
-   **Courses**: Payments tied to course purchases/access.  
      
    
-   **Communities**: Payments for community memberships or groups.  
      
    
-   **Contact page (charge a card)**: Charge a saved or new card directly from the contact record.  
      
    
-   **SaaS Mode**: Agency’s software plans and subscriptions billed to sub-accounts.  
      
    
-   **Calendar / Services**: Collecting payments with calendar bookings or services.  
      
    
-   **Service Menu**: Menu-based service ordering experiences.  
      
    
-   **POS**: In-person payments via mobile or supported card readers.

* * *

## **Frequently Asked Questions**

  

**Q: Why does the wallet button (e.g., Apple Pay/Google Pay) not appear even though the table shows “Y”?**

Wallet buttons only appear in supported environments: **Apple Pay on Apple devices** (iPhone/iPad/Mac) and **Google Pay on Android**. Make sure the method is enabled with your provider and the wallet is set up on the device.

  

**Q: The table shows “Y” for a provider—does that guarantee subscriptions will work?**

Not necessarily. Some methods support only one-time payments. Check the **Note** above and test your recurring use case before launch.

  

****Q: Can I show Stripe and PayPal together on the same checkout?**** 

In many product areas you can offer more than one option if both are connected and enabled. The checkout will show the available buttons/options automatically.

  

**Q: Do card readers work on Order Forms or Invoices?** 

No. Card readers are only marked **Y** for **POS**. Use POS for in‑person payments.

* * *

## **Related Articles**

  

-   [Getting Started — Connect Stripe](https://help.gohighlevel.com/support/solutions/articles/155000005073/)  
      
    
-   [Configure Stripe Payment Methods inside HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000005164)  
      
    
-   [How to integrate Razorpay within the CRM](https://help.gohighlevel.com/en/support/solutions/articles/155000002559)  
      
    
-   [How to set up the NMI integration](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)  
      
    
-   [Authorize.net integration for processing payments](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)  
      
    
-   [How to Connect and Use Square Payment Processor in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000003314)