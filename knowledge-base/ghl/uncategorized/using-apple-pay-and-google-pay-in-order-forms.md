---
title: "Using Apple Pay and Google Pay in order forms"
url: "https://help.gohighlevel.com/support/solutions/articles/48001229200-using-apple-pay-and-google-pay-in-order-forms"
category: "Uncategorized"
---

# Using Apple Pay and Google Pay in order forms

Accepting Apple Pay and Google Pay in your Order Form is a great way to improve the purchase experience for your customers. These payment methods offer convenience, security, and speed that traditional payment methods cannot match.

  

#### **Covered in this Article:**

#### [**How to use Apple Pay and Google Pay in the CRM?**](#How-to-use-Apple-Pay-and-Google-Pay-in-the-CRM?)

#### **[How do I enable Apple Pay and Google Pay?](#How-do-I-enable-Apple-Pay-and-Google-Pay?)**

#### **[Troubleshooting for Apple Pay](#Troubleshooting-for-Apple-Pay)**

#### **[Troubleshooting for Google Pay](#Troubleshooting-for-Google-Pay)**

#### **[](#FAQ)  
[FAQ](#FAQ)**

#### [What will differ in my reporting of transactions and orders?](#What-will-differ-in-my-reporting-of-transactions-and-orders?)

#### [What is the difference in Stripe pricing for transactions processed through credit cards and Apple/Google Pay?](#What-is-the-difference-in-Stripe-pricing-for-transactions-processed-through-credit-cards-and-Apple/Google-Pay?)

#### [I'm using PayPal as my payment provider instead of Stripe. Can I provide Apple Pay and Google Pay to my customers?](#I'm-using-PayPal-as-my-payment-provider-instead-of-Stripe.-Can-I-provide-Apple-Pay-and-Google-Pay-to-my-customers?)

#### [Can I enable other payment methods like Bank redirects and ACH as well?](#Can-I-enable-other-payment-methods-like-Bank-redirects,-and-ACH-as-well?)

#### [How do I disable the other payment methods option after enabling them once?](#How-do-I-disable-the-other-payment-methods-option-after-enabling-them-once?)

  

  

* * *

## **How to use Apple Pay and Google Pay in the CRM?**

Stripe lets you display Google Pay by default alongside the credit card option. Turn the toggle on the integrations page to complete the additional requirement of registering domains with Stripe for displaying Apple Pay. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003234638/original/CIq6-4GxITrF4kSlh7XlUG4_NWGaR9PjEQ.png?1689772696)

  

Once completed, Google Pay and Apple Pay will show alongside the credit card option on order forms. Recurring payments and upsells are supported with Apple Pay/Google Pay

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003227532/original/hx9QDvGm4Xpm06lgnDi2mXobknNXL6dD6w.png?1689768902)  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003227578/original/_lrqMDwNra0tiGcrVzYBCZ8EwdMzZ9b4Sg.png?1689768914)

  

**PayPal only shows up if PayPal is enabled under Payments ➝ Integrations)**

  

Your customers will see Apple Pay **and** Google Pay based on their geographic location and the web browser of the end customer. They will be able to use it based on whether or not they have a payment method associated with their Google account/Apple account. Only if both these conditions apply Google Pay/Apple Pay will be visible for payment along with the default choice for a credit card.

  

**[Countries and Regions that Support Apple Pay](https://support.apple.com/en-in/HT207957)**  
**[Countries that Support Google Pay](https://support.google.com/googlepay/answer/12429287)**

  

**Currently, supported browsers include Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, and Microsoft Edge for Windows.**

  

**Please Note:**

This capability only works with **Version 2 Funnels.** Please refer to [this article](https://help.gohighlevel.com/support/solutions/articles/48001204903-why-and-how-to-upgrade-a-version-1-funnel-to-version-2-) to know how to upgrade V1 funnels to V2.

  

  

**Please note:**

There might be a case that the browser is not up to date, Apple Pay and Google Pay are not supported in the customer's country or a relevant credit card has not been added to the customer's  Apple/Google account. No option to pay via Apple Pay or Google pay will appear in that case. But the customer will still be able to see the credit card option to pay 

  

  

* * *

## **How do I enable Apple Pay and Google Pay?**

  

Using Stripe Connect under the **Payments ➝ Integrations** page is the primary requirement. If you're using Stripe APIs to connect to Stripe, please use **Stripe Connect** to use this feature. Once you have connected your Stripe account in **Payments> Integrations**, a toggle is provided to enable Apple Pay and Google Pay on the order forms. 

  

  

  

* * *

## **Troubleshooting Apple Pay**

  

1\. The toggle to enable Apple Pay and Google Pay should be turned on while Stripe is connected to the location  
  

2\. [Make sure that Apple Pay is available in your country](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)  
  

3\. Ensure that the domain on which the funnel is hosted is registered with Stripe. This is an additional requirement for Apple Pay and should ideally automatically happen as soon as the toggle is turned on

  

 a. Head over to your Stripe dashboard [on this URL](https://dashboard.stripe.com/settings/payments/apple_pay) and see if the domain is listed in the Web Domains section

  

 b. If the domain is not listed here, you can manually add the domain by clicking on Add New Domain. This is only intended for a quick resolution; you should raise a ticket with us if it does not automatically register on turning the toggle.  
  

4\. If the domain appears registered, ensure that the domain association file is hosted for that domain. This means that a file should get downloaded upon visiting [https://example.com/.well-known/apple-developer-merchantid-domain-association if](https://example.com/.well-known/apple-developer-merchantid-domain-associationif) you're registering at [https://example.com](https://example.com)  
[Click here for more information on this.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)  
  

5\. The browser or the device fulfills the following requirements:

The end customer is on the web in Safari, starting with iOS 10 or macOS Sierra

[List of compatible devices with Apple Pay](https://support.apple.com/en-us/HT208531)  
[List of participating banks with Apple Pay](https://support.apple.com/en-us/HT204916)

  

  

  

* * *

## **Troubleshooting Google Pay**

  

1\. The toggle to enable Apple Pay and Google Pay should be turned on while Stripe is connected to the location.  
  

2\. Make sure that Google Pay is [available in your country](https://stripe.com/docs/connect/payment-method-available-countries#google-pay)  
  

3\. The customer is using Google Chrome or Safari.  
  

4\. The customer has a valid card registered with Google Pay.

  

  

* * *

## **FAQ**

  

**What will differ in my reporting of transactions and orders?  
**There will be no change in the reporting or tracking of the transactions and orders. Stripe treats Apple Pay and Google Pay payments as card payments. All the purchased orders via Apple Pay or Google pay will be reflected on the Orders/Transactions/Subscriptions page.

  

**What is the difference in Stripe pricing for transactions processed through credit cards and Apple/Google Pay?**There is no difference in the pricing between credit card transactions and Apple Pay/Google Pay transactions. They are charged similarly to credit card transactions. [Learn More here about Apple Pay.](https://stripe.com/docs/apple-pay)

  

**I'm using PayPal as my payment provider instead of Stripe. Can I provide Apple Pay and Google Pay to my customers?**

No, Apple Pay and Google Pay can be provided as payment methods using Stripe Connect only in Funnels version 2

  

**Can I enable other payment methods like Bank redirects and ACH as well?**

Currently, only Apple Pay and Google Pay can be enabled using Stripe. Enabling other payment methods as well will be upcoming in Q3/Q4 2023

  

**Why is Google Pay showing if I didn’t enable it?**

Stripe may automatically enable supported payment methods — including Apple Pay and Google Pay — based on your account settings and device/browser compatibility. Even if you didn’t explicitly activate Google Pay, it may appear on your HighLevel order form if your browser or device supports Google Pay/Apple Pay or Stripe’s default wallet settings are active for your account.

**What happens if I run a test transaction with Apple Pay or Google Pay?**

When you are using Stripe in Test Mode, any Apple Pay or Google Pay transactions are simulated and not involve real charges or actual money movement. You may see a successful transaction in your Stripe dashboard, but this is for testing purposes only. There is no need to reverse or refund test transactions — they are for testing purposes only and do not impact your Stripe balance.