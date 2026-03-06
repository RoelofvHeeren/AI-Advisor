---
title: "Getting Started - Connect Stripe"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005073-getting-started-connect-stripe"
category: "Uncategorized"
---

# Getting Started - Connect Stripe

Ready to simplify your transactions? Stripe integration makes accepting credit card payments, subscriptions, and more straightforward and secure. Let's walk through setting it up together!

* * *

## **Connect Stripe  
**

  

First, head over to your Payments section. This is where all the magic happens—integrating payment gateways to streamline your customer transactions.

1.  Navigate to **Payments > Integrations**. Here, you'll find popular options like Stripe, PayPal, Authorize.net, NMI, Manual Payment Methods (ex: cash on delivery, COD), and Square.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047521122/original/Pzm_agDxZiQDXGxZ40DuvBmhEBQEk5IbEw.png?1748649426)  
      
    
2.  Click **Connect with Stripe**. This will direct you to securely log in or create your Stripe account if you haven't done so already.  
      
    
3.  Finally, **authorize your Stripe account**. This step ensures everything syncs smoothly and securely. When the integration is finished you can click **Manage** to edit the connection.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047521127/original/o7bIfWXE2UK74snQVqVpQO2k2PC5hsFd3A.png?1748649525)  
      
    

Awesome job! Now your payments are ready to roll.

  

**Not using Stripe?** You can still sell with other supported gateways (e.g., Authorize.net, NMI, Square, Adyen, Razorpay) depending on the product area, or record one-time invoices without Stripe Connect (manual payment entry). For full parity with Payments reports/receipts, connect a supported gateway. See **[Supported Payment Providers by Product Area](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)** and **[Manual invoices without Stripe Connect.](https://help.gohighlevel.com/support/solutions/articles/48001220600-common-uses-cases-for-payments-and-invoices)**

  

**Next**, you can:

-   Explore how to connect Stripe at the sub-account level for more tailored control.
-   Learn how to import products and pricing directly from Stripe to save you time.  
      
    

Need a deeper dive? Check these out:

  

-   **[Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/en/support/solutions/articles/155000006075)**  
      
    
-   **[Authorize.net Integration (example non-Stripe gateway)](https://help.gohighlevel.com/en/support/solutions/articles/48001231144)** 
    
-   **[Using invoices without Stripe Connect (manual payments) (from “How to send your first invoice…”)](https://help.gohighlevel.com/en/support/solutions/articles/48001208702)** 
    
-   **[HighLevel API (docs & limits)](https://help.gohighlevel.com/en/support/solutions/articles/48001060529)** 
    
-   **[Webhooks (Zapier) – send purchase data to HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000001183)** 
    
-   **[Custom Payments Integration (developer path)](https://help.gohighlevel.com/en/support/solutions/articles/155000002620)**  
    

* * *

# **Frequently Asked Questions**

  

**Q: Can I connect more than one Stripe account?**

Each HighLevel **sub-account** supports a connection to **one Stripe account** at a time.  
If you manage multiple brands or businesses, create separate sub-accounts and connect a different Stripe account to each one.  
  

**Q.Can I track Stripe payments in HighLevel _without_ connecting Stripe via OAuth?**Not automatically. Payments created directly in Stripe won’t sync into HighLevel unless Stripe is connected. You can issue **manual** one-time invoices without Stripe Connect (you’ll record the payment yourself), but automated charge syncing and Payments reporting require a connected provider.

  
****Q. Can a third-party (e.g., Easify) push purchase events into HighLevel via API or webhooks for attribution?**  
**Yes, with limits. Third-party tools can POST events to HighLevel using the public API or send data via Webhooks/Zapier to update the contact, tags, and opportunity values for pipeline/revenue attribution. This approach helps marketing attribution and sales reporting but does not create HighLevel “Payments” records/receipts unless the sale runs through a connected payment provider or a custom payments integration.  

  
**Q. Is there an API-based alternative to avoid a full Stripe login while still recording payments in the Payments area?**  
Build or use a **custom payments integration**. HighLevel supports building a provider that plugs into checkouts, subscriptions, saved methods, and Payments reporting—no Stripe OAuth required. This is a developer path and is separate from manual invoices.

**Q. What are the recommended non-Stripe processors that integrate cleanly with HighLevel?**  
HighLevel supports multiple gateways by product area (e.g., **Authorize.net, NMI, Square, Adyen, Razorpay, PayPal buttons**). Check the official **“What Works Where”** matrix and each provider’s setup guide to confirm support for **order forms, invoices, subscriptions,** etc. 

  
**Q: What permissions do I need in Stripe to complete the connection?**

You must have **admin-level access** or the proper permissions in Stripe to authorize integrations.  
If you cannot approve the connection, ask the Stripe account owner to adjust your permission level.

  

**Q: Will existing payments in Stripe show up in HighLevel after I connect?**

No. HighLevel only tracks **new transactions** created through HighLevel after the integration.  
Payments made directly inside Stripe **before** connecting your account will not sync into HighLevel.

  

**Q: What currencies can I accept with Stripe in HighLevel?**

Supported currencies depend on your **Stripe account’s country** and the currencies enabled in that Stripe account.  
HighLevel sends the transaction data to Stripe, and Stripe processes it using the currencies you have enabled.

  

**Q: Can I test payments using Stripe’s test mode?**

Yes. Stripe’s **test mode** allows you to simulate payments without charging real cards.  
These test payments won’t appear in live reporting, so switch back to **live mode** when you're ready to accept real payments.

  

**Q: How do I send product info to Stripe?**

Product details created inside HighLevel are **automatically sent to Stripe** when a customer completes a purchase.  
HighLevel transmits the product name, price, and transaction data during checkout.