---
title: "Apple Pay and Google Pay in invoices and Text2Pay links"
url: "https://help.gohighlevel.com/support/solutions/articles/155000000080-apple-pay-and-google-pay-in-invoices-and-text2pay-links"
category: "Uncategorized"
---

# Apple Pay and Google Pay in invoices and Text2Pay links

Apple Pay and Google Pay are now supported with one-time and recurring invoices as well as Text2Pay links.  
Your customers will see Apple Pay **and** Google Pay based on their geographic location and the web browser of the end customer. They will be able to use it based on whether or not they have a payment method associated with their Google account/Apple account. Only if both these conditions apply Google Pay/Apple Pay will be visible for payment along with the default choice for a credit card.  
  
**[Countries and Regions that Support Apple Pay](https://support.apple.com/en-in/HT207957)**  
**[Countries that Support Google Pay](https://support.google.com/googlepay/answer/12429287)**

**Currently, supported browsers include Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, and Microsoft Edge for Windows.**

  

  

## **How do I enable Apple Pay and Google Pay?**

Using Stripe Connect under the Payments ➝ Integrations page is the primary requirement. If you're using Stripe APIs to connect to Stripe, please use Stripe Connect to use this feature. Once you have connected your Stripe account in Payments> Integrations, you just need to enable Apple Pay and Google Pay in your Stripe account and they will automatically start appearing in invoices and Text2Pay links

  

**Apple pay requires an additional step to register the domain on which the payment will be accepted using Apple Pay. The platform will do this registration for all business automatically as soon as the Stripe account is connected. This will automatically allow them to offer Apple Pay as a payment method in invoices and text2pay link payments** 

  

## **FAQ**

### **What will differ in my reporting of transactions and orders?  
**

There will be no change in the reporting or tracking of the transactions and orders. Stripe treats Apple Pay and Google Pay payments as card payments. All the purchased orders via Apple Pay or Google Pay will be reflected on the Invoices and Transactions page.

  

### **What is the difference in Stripe pricing for transactions processed through credit cards and Apple/Google Pay?**

There is no difference in the pricing between credit card transactions and Apple Pay/Google Pay transactions. They are charged similarly to credit card transactions. [Learn More here about Apple Pay.](https://stripe.com/docs/apple-pay)

  

### **I'm using PayPal/Authorize.net/NMI as my payment provider instead of Stripe. Can I provide Apple Pay and Google Pay to my customers?**

No, Apple Pay and Google Pay can be provided as payment methods using Stripe Connect only 

  

### **Can I enable other payment methods like Bank redirects and ACH as well?**

Currently, only Apple Pay and Google Pay can be enabled using Stripe. Enabling other payment methods like ACH payments will be available by Q3 2023

  

  

  

## **Troubleshooting for Apple Pay**

  

1\. The toggle to enable Apple Pay and Google Pay should be turned on while Stripe is connected to the location  
  

2\. [Make sure that Apple Pay is available in your country](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)  
  

3\. Ensure that the domain on which the invoice is hosted is registered with Stripe. This is an additional requirement for Apple Pay and should ideally automatically happen as soon as the toggle is turned on

 a. Head over to your Stripe dashboard [on this URL](https://dashboard.stripe.com/settings/payments/apple_pay) and see if the domain is listed in the Web Domains section

 b. If the domain is not listed here, you can manually add the domain by clicking on Add New Domain. This is only intended for a quick resolution; you should raise a ticket with us if it does not automatically register on turning the toggle.  
  

4\. If the domain appears registered, ensure that the domain association file is hosted for that domain. This means that a file should get downloaded upon visiting [https://example.com/.well-known/apple-developer-merchantid-domain-association if](https://example.com/.well-known/apple-developer-merchantid-domain-associationif) you're registering at [https://example.com](https://example.com/)  
[Click here for more information on this.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)  
  

5\. The browser or the device fulfills the following requirements:

The end customer is on the web in Safari, starting with iOS 10 or macOS Sierra

[List of compatible devices with Apple Pay](https://support.apple.com/en-us/HT208531)  
[List of participating banks with Apple Pay](https://support.apple.com/en-us/HT204916)

  

  

  

## **Troubleshooting for Google Pay**

1\. Stripe should be connected on the Integrations page.  
  

2\. Make sure that Google Pay is [available in your country](https://stripe.com/docs/connect/payment-method-available-countries#google-pay)  
  

3\. The customer is using Google Chrome or Safari.  
  

4\. The customer has a valid card registered with Google Pay.