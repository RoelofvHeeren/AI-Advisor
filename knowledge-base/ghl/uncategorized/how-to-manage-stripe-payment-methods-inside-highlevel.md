---
title: "How to Manage Stripe Payment Methods inside HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005164-how-to-manage-stripe-payment-methods-inside-highlevel"
category: "Uncategorized"
---

# How to Manage Stripe Payment Methods inside HighLevel

Now you can manage your Stripe payment methods entirely within HighLevel, no need to switch back and forth between dashboards! Simplify your payment setup across invoices, funnels, stores, and more while ensuring greater control and flexibility for your business.

* * *

**TABLE OF CONTENTS**

-   [What is Stripe Payment Method Management?](#What-is-Stripe-Payment-Method-Management?)[](#Key-Benefits-of-Stripe-Payment-Method-Management)
-   [Key Benefits of Stripe Payment Method Management](#Key-Benefits-of-Stripe-Payment-Method-Management)[](#How-To-Manage-Stripe-Payment-Methods)
-   [How To Manage Stripe Payment Methods](#How-To-Manage-Stripe-Payment-Methods)[](#Step-1%3A%C2%A0Navigate-to-Payments-Settings)
    -   [Step 1: Navigate to Payments Settings](#Step-1%3A%C2%A0Navigate-to-Payments-Settings)[](#Step-2%3A-Enable/Disable-Payment-Methods)
    -   [Step 2: Enable/Disable Payment Methods](#Step-2%3A-Enable/Disable-Payment-Methods)[](#Stripe-Payment-Method-Settings-for-Different-Product-Areas)
-   [Stripe Payment Method Settings for Different Product Areas](#Stripe-Payment-Method-Settings-for-Different-Product-Areas)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Stripe Payment Method Management?**

  

Stripe Payment Method Management allows you to configure which payment options (like credit cards, wallets, bank debits) are available across various HighLevel product areas, directly inside your HighLevel account. This eliminates the need to manage payment methods separately on Stripe’s dashboard, streamlining operations and improving payment setup control.

* * *

## **Key Benefits of Stripe Payment Method Management**

  

Understanding how managing Stripe payment methods directly in HighLevel benefits your business helps you make the most out of this feature.

  

-   **Centralized Control**: Manage all your Stripe payment options without leaving HighLevel.  
      
    
-   **Separate Live and Test Modes**: Customize payment methods individually for live and test environments.  
      
    
-   **Checkout-Specific Visibility**: Only available payment methods will show in each checkout’s options.  
      
    
-   **Subscription-Specific Settings**: Manage unique payment configurations specifically for subscriptions.  
      
    
-   **Reduced Dependency on Stripe Dashboard**: No longer necessary to edit payment methods in Stripe.  
      
    
-   **Seamless User Experience**: Streamlined configuration leads to faster setup across invoices, funnels, forms, and stores.
    

* * *

## **How To Manage Stripe Payment Methods**

  

Effectively setting up your Stripe payment options ensures smooth transactions across all your product areas. Follow these easy steps to start managing them directly within HighLevel:

  

### **Step 1:** Navigate to Payments Settings

  

1.  Click on the **Payments** tab from your sub-account**.**  
      
    **![](https://jumpshare.com/share/QBmLPdkT6Pk1AOPpvIza+/Screen+Shot+2025-09-26+at+6.59.40+PM.png)**  
      
    
2.  Click on **Integrations.**  
      
    **![](https://jumpshare.com/share/JHbfPz7KSctOW0sm6dES+/Screen+Shot+2025-09-26+at+7.01.17+PM.png)**  
      
    
3.  Click the **Manage** button next to your connected Stripe account.  
      
    ![](https://jumpshare.com/share/BFqx1iYlIkdYvuxdfizA+/Screen+Shot+2025-09-26+at+7.02.22+PM.png)  
      
    

### **Step 2:** Enable/Disable Payment Methods

  

1.  Click on the **Manage Payment Methods** option.  
      
    ![](https://jumpshare.com/share/h45km1PT8AsRjI6HFKjq+/Screen+Shot+2025-09-26+at+7.05.08+PM.png)  
      
    
2.  You’ll see a **list of payment methods available** for different **product areas**.  
      
    
3.  Toggle **on or off** based on which payment methods you want available for a particular product area.  
      
    ![](https://jumpshare.com/share/CXTT1QrIgg0QHMeEoDA3+/GIF+Recording+2025-09-26+at+7.16.56+PM.gif)  
      
    
4.  If you’re offering **subscription products**, you’ll see a special drop-down called **Subscriptions**. Configure payment methods specifically for subscription checkouts here.  
      
    ![](https://jumpshare.com/share/Bcz0GPsSUjrRv3ycBAcA+/GIF+Recording+2025-09-26+at+7.20.02+PM.gif)

* * *

## **Stripe Payment Method Settings for Different Product Areas**

  

Managing Stripe payment methods across product areas ensures that your customer-facing interfaces only show relevant payment options. Here’s where your configurations apply:  
  

-   **Invoices**
    
-   **Invoices with AutoPayments**
    
-   **Payment Links**
    
-   **Funnels - One-Step Order Form**
    
-   **Funnels - Two-Step Order Form**
    
-   **Forms**
    
-   **E-commerce Stores**
    
-   **Calendars**
    
-   **Courses**
    
-   **Communities**
    
-   **Subscriptions**
    

  

Each checkout will respect the settings you’ve configured — no more surprises for your customers at checkout!

* * *

## **Frequently Asked Questions**

  

**Q: What are the transaction fees for Stripe?**

Stripe transaction fees vary depending on your country and the type of payment method used. Generally, Stripe charges a percentage of each transaction plus a fixed fee. Because pricing differs by region, you should always refer to [Stripe’s official pricing page](https://stripe.com/pricing) for the most accurate and up-to-date details.

  

**Q: Why don’t I see the Subscriptions list in HighLevel?**

The **Subscriptions list** only becomes available after you’ve added at least one subscription product in **Live Mode** within the respective sub-account. This requirement comes directly from Stripe.

[](https://stripe.com/pricing)

  

**Q: What happens if I already have payment methods configured in Stripe?**

Your existing settings are preserved. Default payment methods for product areas or checkouts will match your original Stripe setup unless you update them inside HighLevel.

  

**Q: Will Live and Test modes have separate settings?**

Yes! You can configure payment methods independently for Live and Test environments, allowing full flexibility during development and production.

  

**Q: Why don’t I see the Subscriptions dropdown?**

The Subscriptions settings become available **only after** adding at least one subscription product in Live Mode in that sub-account, according to Stripe’s rules.

  

**Q: Are these changes applied to all sub-accounts?**

Each sub-account connected to Stripe needs to configure its payment methods individually under its Payments settings.

  

**Q: The Checkout and PMC pages do not show BLIK, even though it is active in Stripe. How can I enable it?**

BLIK will not appear in our current integration. Stripe determines which payment methods are shown at runtime based on the connected account’s Payment Method Configuration and the checkout context. BLIK is not supported in this flow because it requires immediate PaymentIntent confirmation at checkout, which is not compatible with our deferred payment flow. We do not have plans to change this setup right now, but we regularly review payment method coverage with Stripe to support current use cases.

  
  

* * *

## **Related Articles**

  

-   [Stripe Integration Setup](https://help.gohighlevel.com/support/solutions/articles/48001148251-stripe-integration)  
      
    
-   [How to Create a Payment Link](https://help.gohighlevel.com/support/solutions/articles/48001152822-payment-links)  
      
    
-   [Building a Funnel with a Two-Step Order Form](https://help.gohighlevel.com/support/solutions/articles/48001175113-two-step-order-form)  
      
    
-   [Selling Products with E-commerce Stores](https://help.gohighlevel.com/support/solutions/articles/48001208837-e-commerce-store)