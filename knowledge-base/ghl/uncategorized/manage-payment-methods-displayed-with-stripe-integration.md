---
title: "Manage payment methods displayed with Stripe integration"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration"
category: "Uncategorized"
---

# Manage payment methods displayed with Stripe integration

LeadConnector displays payment methods dynamically if business users have Stripe connected as their default payment provider for processing payments across the system.  
  
The following payment methods are supported as of today

1.  Cards
2.  Apple Pay (requires registered domains)
3.  Google Pay
4.  ACH Direct Debit
5.  Affirm (requires shipping address)
6.  Klarna (requires shipping address)
7.  AfterPay (requires shipping address)
8.  Bancontact
9.  Ideal
10.  Sepa Direct Debit
11.  Link (requires registered domains)
12.  Amazon Pay
13.  Revolut Pay - Popular in UK
14.  CashApp
15.  GrabPay - Popular in Malaysia
16.  Zip - Popular in Australia
17.  BACS Direct Debit - Popular in UK
18.  BECS Direct Debit (AU) - Popular in Australia
19.  FPX - Popular in Malaysia

  

We use different configurations with Stripe to display payment methods across different channels. And since there are more payment methods to be added here continuously, this help document outlines the steps to turn on/off specific payment methods as per use cases.

  

  

Sub-account users need to navigate to their Stripe dashboard for specifically turning on/off payment methods to display. Navigate to **Settings -> Connect -> Payment methods -> Your account** to see the list of payment methods activated by LeadConnector.  
  
Remember to select LeadConnector configurations in the dropdown here since there can be more platforms your Stripe account is connected to. Refer to the image below

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025575985/original/Y7OzZ5caCjV5-gjd_uzyskEOA7oO3bNMyQ.png?1715000142)

  

  

Now, there will be 4 configurations available with LeadConnector here. This basically allows managing payment methods for 4 different kinds of channels that we provide on our end

  

1.  **Invoice** - Used for one time invoices or recurring invoices with auto payments turned off and Text2Pay links - **Cards, Apple Pay, Google Pay, ACH Direct Debit, Affirm, Klarna, AfterPay, Link, Amazon Pay and Revolut Pay turned on by default**
2.  **InvoiceWithAutopayment** - Used for recurring invoices with auto-payments enabled - **Cards, Apple Pay, Google Pay and ACH Direct Debit turned on by default**
3.  **Store** - Used for payment methods on online stores on websites - **Cards, Apple Pay, Google Pay, Affirm, Klarna, AfterPay, **Link, Amazon Pay and Revolut Pay** turned on by default**
4.  **Default** - Used everywhere else like 1-step and 2-step order forms, payment links, memberships and communities - **Cards, Apple Pay, Google Pay, **Link, Amazon Pay and Revolut Pay** turned on by default**

  

  

  

Business users will be able to select a configuration and turn on/off specific payment methods from the list above. To turn off a specific payment method, select the right configuration followed by selecting the payment method and you will be seeing an option to turn it off  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025607719/original/6YCi0V4l2LP-hbwcm77tUnWeNskDd9wcrA.png?1715062639)  

  

  
Keep a check on this help article to see the further updates for configurations and payment methods in each configuration. Some of the payment methods will be seen as blocked since those payment methods are yet to be enabled on our end to support in all connected accounts. 

  

  

**Recurring Payments/Subscriptions**:

For viewing a particular payment method for Subscriptions, it should also be enabled in the  
**Stripe Settings -> Payment Methods -> Billing Payment Methods** along with enabling them inside LeadConnector.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038919075/original/idaHuzjpE5wT_30NFdU5wgl00T7vsuKO-A.png?1735220064)**

  

  

Business users are now able to offer additional payment methods across different channels like order forms, forms, invoices, payment links, online stores to customers.

  

This is available only for businesses using Stripe as a payment provider.

  

This helps in increasing conversions by offering payment flexibility to end customers across different geographies:

-   IDeal - popular in Netherlands
-   Bancontact - common payment method in Belgium
-   Sepa Direct Debit - common payment method in European Union

  

All order and transaction details will be registered under the Payments menu as for a credit card payment. This includes the functioning of the existing Order Submitted and Payment received triggers, as well. This is a migratory change from Stripe's end and requires changes to propagate to all accounts over few days. So this might be already available for some accounts and in progress for others.

  

  

  

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913189/original/ZdFdxODhueL3GJ4rdLCQX6IrVVcGPIAgwA.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913187/original/mGJtDMETGdHwtu6OF-r4-tZyQIyxhUQYVQ.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913188/original/TlXQxpPWsrN2uGh5y6umtmbQohb_LbqUtA.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913190/original/1Go3DHoB3fE3AGNGGwrARSOYUtaFbT95Nw.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913186/original/jOJjeD8jhUEUmyqqloDyQha_dGDOU0xGyQ.jpeg?1735211541)