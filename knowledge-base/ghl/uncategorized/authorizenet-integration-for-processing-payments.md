---
title: "Authorize.net  integration for processing payments"
url: "https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments"
category: "Uncategorized"
---

# Authorize.net  integration for processing payments

This article will show you how to integrate Authorize.Net with your HighLevel account to process payments seamlessly. By connecting Authorize.Net, you can manage customer transactions, accept payments through various methods, and ensure a smooth checkout experience. This integration supports payments for invoices, order forms, and subscriptions, providing a unified payment processing solution.

* * *

  

# **What is Authorize.Net Integration?**

The Authorize.Net integration allows you to securely process payments in your HighLevel account using Authorize.Net as your payment gateway. With this integration, you can accept Card Payments for invoices, order forms, and subscriptions. Authorize.Net provides a trusted, reliable, and secure way to handle customer transactions and manage payments directly from within your CRM.

Whether you're running a small business or managing multiple clients, this integration simplifies the payment collection process, making it easier to track and manage your revenue streams.

  

* * *

## **Key Benefits of Authorize.Net Integration**

  

1.  **Secure Payment Processing**: Authorize.Net ensures that all transactions are protected with advanced security protocols, keeping customer data safe.
    
2.  **Supports Multiple Payment Methods**: Accept payments via credit cards, giving your customers more flexibility. (More methods coming soon)
    
3.  **Streamlined Invoicing and Order Forms**: Seamlessly process payments for invoices, subscriptions, and order forms without the need for manual intervention.
    
4.  **Real-Time Payment Tracking**: Track and manage payments directly from your HighLevel dashboard for better financial oversight.
    
5.  **Improved Customer Experience**: Provide your customers with a professional and efficient checkout experience.
    

* * *

## **How To Set Up Authorize.Net Integration**

  

1.  **Obtain Your Authorize.Net API Credentials**:
    
    -   Log in to your Authorize.Net account.
    -   Navigate to **Account Settings > API Credentials & Keys**.
    -   Generate your API Login ID and Transaction Key.
2.  **Connect Authorize.Net to HighLevel**:
    
    -   In HighLevel, go to **Settings > Payments**.
    -   Click **Add Payment Gateway** and select **Authorize.Net**.
    -   Enter your API Login ID and Transaction Key.
3.  **Test the Connection**:
    
    -   After entering your credentials, perform a test transaction to ensure the integration is working correctly.
4.  **Enable Payment Methods**:
    
    -   Once connected, configure which payment methods (e.g., credit card) you want to enable for your invoices, order forms, and subscriptions.
5.  **Start Processing Payments**:
    
    -   Use HighLevel to create invoices, order forms, or subscriptions, and start collecting payments via Authorize.Net.

* * *

## **Frequently Asked Questions**

  

  

Authorize.Net is considered a competitive payment processor due to its reliability, security, and wide range of features. It has operated for over 20 years, providing payment processing services to businesses of all sizes. Authorize.Net provides robust security measures to protect transactions, sensitive customer information, and reliable uptime to ensure smooth transactions. Additionally, Authorize.Net offers features such as recurring billing, mobile compatibility, and integrations with popular e-commerce platforms.,

  

  

#### **Covered in this Article**

#### [**Which Payment Processor to use?**](#Which-Payment-Processor-to-use?)

#### **[Requirements to use Authorize.Net](#Requirements-to-use-Authorize.Net)**

#### **[How to integrate Authorize.Net as a Payment Gateway?](#How-to-integrate-Authorize.Net-as-a-Payment-Gateway?)**

#### **[Side Notes for using Authorize.Net](#Side-Notes-for-using-Authorize.Net)**

#### **[Test cards for Authorize.net integration.](#Test-cards-for-Authorize.net-integration.%C2%A0)** 

####   
[**FAQ**](#FAQ)

#### [Why don't I see PayPal among the default gateway options?](#Why-don't-I-see-Paypal-among-the-default-gateway-options?)

#### [What will change in the reporting of transactions done with Authorize.net? Where will I be able to keep track of all payments?](#What-will-change-in-the-reporting-of-transactions-done-with-Authorize.net?-Where-will-I-be-able-to-keep-track-of-all-payments?)

#### [Where will I be able to find the subscriptions created via Authorize.net? I cannot relate to the subscription status defined on the Subscriptions page.](#Where-will-I-be-able-to-find-the-subscriptions-created-via-Authorize.net?-I-cannot-relate-to-the-subscription-status-defined-on-the-Subscriptions-page.)

#### [How do I Cancel/End a subscription created via Authorize.net? I am not able to do so in the merchant portal.](#How-do-I-Cancel/End-a-subscription-created-via-Authorize.net?-I-am-not-able-to-do-so-in-the-merchant-portal.)

#### [Will I be able to refund transactions as well within the application itself?](#Will-I-be-able-to-refund-transactions-as-well-within-the-application-itself?)

#### [I am using FDS filters with Authorize.net to hold transactions for review if the address is not submitted, the card code is not submitted, etc. Is the system compatible with handling those cases?](#I-am-using-FDS-filters-with-Authorize.net-to-hold-transactions-for-review-if-the-address-is-not-submitted-or-the-card-code-is-not-submitted-etc.-Is-the-system-compatible-with-handling-those-cases?)

#### [When will Authorize.net be available for invoices/Text2Pay/Calendar payments/memberships and other areas?](#When-will-Authorize.net-be-available-for-invoices/Text2Pay/Calendar-payments/memberships-and-other-areas?)

  

  

  

* * *

## **Which Payment Processor to use?**  
  

Deciding between Stripe, PayPal, and Authorize.net will depend on what's best for your business. Here's a comparison:

  

**Stripe:** A popular choice for online businesses and startups, Stripe offers a developer-friendly platform, custom integrations, and transparent pricing.

  

**PayPal:** PayPal is a well-established payment processor with a global presence and a wide range of features, including a secure payment gateway, invoicing, and recurring payments.

  

**Authorize.net:** Authorize.net is a trusted payment processor with a long history of providing reliable and secure payment processing services. It offers comprehensive features, including fraud detection and mobile compatibility.

  

Ultimately, the best choice depends on the specific needs of your business, such as the types of payments you need to accept, your target market, and your budget. It's recommended to compare each processor's features, fees, and support options before deciding.

  

**Please Note:**

The data for fees is accurate as of when this article is being published, for more information please check out the Pricing pages of the three options listed:  
  
**Stripe: [https://stripe.com/gb/pricing](https://stripe.com/gb/pricing)**  
**Paypal: [https://www.paypal.com/us/webapps/mpp/merchant-fees](https://www.paypal.com/us/webapps/mpp/merchant-fees)**  
**Authorize.net: [https://www.authorize.net/en-us/sign-up/pricing.html](https://www.authorize.net/en-us/sign-up/pricing.html)**

  

* * *

## **Requirements to use [](//Authorize.net)Authorize.Net**

  

Authorize.net can accept transactions from [United States, Australian, and Canadian](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207) merchants.  
Currencies supported with [Authorize.net](http://Authorize.net) - [Link](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207)

  
Before you can integrate [Authorize.Net,](//Authorize.Net)  you must confirm whether you are on a browser that supports using it.

  

**Below is a list of supported and tested browsers:**

  

<table border="1" cellpadding="1" cellspacing="1" data-identifyelement="1133" style="box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; color: rgb(32, 42, 68); font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; margin-right: calc(67%); width: 33%;"><tbody data-identifyelement="1134" style="box-sizing: border-box;"><tr data-identifyelement="1135" style="box-sizing: border-box;"><td colspan="1" data-identifyelement="1136" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1137" style="margin-left: 20px;"><strong data-identifyelement="1138" style="box-sizing: border-box; font-weight: 700;">Browser Name</strong></div></td><td colspan="1" data-identifyelement="1139" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1140" style="margin-left: 20px;"><strong data-identifyelement="1141" style="box-sizing: border-box; font-weight: 700;">Recommend Version</strong></div></td></tr><tr data-identifyelement="1142" style="box-sizing: border-box;"><td colspan="1" data-identifyelement="1143" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1144" style="margin-left: 20px;">Chrome</div></td><td colspan="1" data-identifyelement="1145" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1146" style="margin-left: 20px;">v80 or higher</div></td></tr><tr data-identifyelement="1147" style="box-sizing: border-box;"><td colspan="1" data-identifyelement="1148" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1149" style="margin-left: 20px;">Edge (Chromium)</div></td><td colspan="1" data-identifyelement="1150" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1151" style="margin-left: 20px;">v85 or higher</div></td></tr><tr data-identifyelement="1152" style="box-sizing: border-box;"><td colspan="1" data-identifyelement="1153" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1154" style="margin-left: 20px;">Firefox</div></td><td colspan="1" data-identifyelement="1155" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1156" style="margin-left: 20px;">v78 or higher</div></td></tr><tr data-identifyelement="1157" style="box-sizing: border-box;"><td colspan="1" data-identifyelement="1158" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1159" style="margin-left: 20px;">Safari</div></td><td colspan="1" data-identifyelement="1160" rowspan="1" style="box-sizing: border-box; padding: 0px;"><div data-identifyelement="1161" style="margin-left: 20px;">v12 or higher</div></td></tr></tbody></table>

  

You can check and verify the browser and version you are using by:

  

Use the below help/about information when inside the respective browser:  
**[Chrome](https://www.google.com/chrome/update/)**

**[Edge](https://support.microsoft.com/en-us/microsoft-edge/find-out-which-version-of-microsoft-edge-you-have-c726bee8-c42e-e472-e954-4cf5123497eb)**

**[Firefox](https://support.mozilla.org/en-US/kb/find-what-version-firefox-you-are-using)**

**[Safari](https://support.apple.com/safari)**

  

Utilize sites like:

[https://www.whatsmybrowser.org/](https://www.whatsmybrowser.org/)

[https://www.whatismybrowser.com/](https://www.whatismybrowser.com/)

  

For the Merchant Interface inside Authorize.net, if an unsupported browser or version is detected, two possible messages may display depending on how low the browser version is.,

  

**Browser Warning/Out of Date** – In this case, Authorize.net may have detected a browser/version that you may encounter issues with. You should update to a newer version or use a different supported browser. 

  

**Examples of Outdated browsers:**

  

Internet Explorer (IE) 11

Edge (Legacy)

Opera

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762635/original/GKfxv8yq-4fvH8Z_imbBLYO_QymhEZHU3Q.png?1675167685)

  

**Browser Block/Out of Date** – In this case, we have detected a browser/version that will encounter issues, and an updated browser version needs to be used or a different supported browser.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762749/original/KtjM7pJ7sGxe3bSPyQzvG-RIDVMfNuDZhQ.png?1675167724)

* * *

  

## **How to integrate [](//Authorize.net)Authorize.Net as a Payment Gateway?**  
  

1\. Once you are sure you are using a supported browser and that you are operating from within one of the supported countries, [you will need to acquire Live and Sandbox API keys from Authorize.net](https://developer.authorize.net/hello_world/common_setup_questions.html#:~:text=How%20do%20I%20obtain%20the%20transaction%20key%20for%20my%20sandbox%20account%3F)

  

For sandbox API keys, log into the [sandbox Merchant Interface](https://sandbox.authorize.net). For Live API keys, log into the [Live Merchant Interface](https://account.authorize.net).

  

[Click Here](https://developer.authorize.net/hello_world/testing_guide.html) for more details on Sandbox vs. Live Mode in [Authorize.Net](//Authorize.net).

* * *

* * *

2\. Then you can proceed to **Payments> Integrations>**Drop the 3 API Keys you got from your **Merchant Interface** in [Authorize.Net](//Authorize.net). 

  

You can input the **Live API Keys** in the Live fields.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804144/original/HOBNH3in9ASQb-G6x7kYxlwqQhUtTsHISw.png?1675175721)

  

And you can input the **Sandbox API Keys** in the Sandbox Fields.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804449/original/c1PlVkmiNqkN6Ajbwb52IMMBB-Q1Lz-4yQ.png?1675175803)  

Once you have input the desired API Keys, click on the **Save** Button.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806039/original/ab0_IqVbPs2X9Vub6cIQlq3doNO09HHYBQ.png?1675176076)

  

3\. It will show you a quick prompt asking whether you want to make [](//Authorize.net)Authorize.Net [](//Authorize.net) your Default Payment Gateway.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806389/original/IL6l8BahVDEvcCMpvO9j4AqAB8Uqh_Y17A.png?1675176142)

Clicking on **Cancel** will still integrate [](//Authorize.net)Authorize.Net but will not make it the Default Gateway.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806859/original/77rhBaAuwHnXc3dSD99tCHCV_zJ6ygbNZA.png?1675176231)

  

Clicking on **Confirm** will integrate [](//Authorize.net)Authorize.net[](//Authorize.net) and make it the Default Payment Gateway.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278807334/original/ehWEyfGMBx06EEmV6-kny_h2Mbvr-ds-zw.png?1675176320)

  

**Please Note**

You are not required to disconnect **Stripe** to connect to **Authorize.net**. You can connect to both gateways on the integrations page. However, since you have connected two different gateways for processing payments, you will need to define a default gateway for processing payments. **PayPal** will continue to function alongside Authorize.net/Stripe in order forms, whichever is set as the default 

  

* * *

## **Side Notes for using Authorize.Net**

If Authorize.net is connected and set as the default gateway, other product areas like memberships and SAAS payment links will continue to process payments using Stripe. 

If there are recurring subscriptions/pending transactions with Stripe, they will continue to run as is until the Stripe connection is in place. We encourage you not to disconnect any gateway. Defining the default gateway will run new transactions through the desired choice and keep the existing subscriptions running through Stripe and PayPal integrations in place.

  

**Please Note:**

  

You need to [upgrade to funnels version 2](https://help.gohighlevel.com/support/solutions/articles/48001204903-how-to-upgrade-a-version-1-funnel-to-version-2-) to make use of this feature.

  

[Click here](https://account.authorize.net/help/Miscellaneous/FAQ/Frequently_Asked_Questions.htm) for the link to [](//Authorize.Net)Authorize.Net[](//Authorize.Net)'s FAQ section.

  

### **Test cards for Authorize.net integration.** 

Expiry Date can be any future date, and any 3/4 digits value can be the CVC: 

  

4007000000027 (Visa)

4012888818888 (Visa)

4111111111111111 (Visa)

370000000000002 (American Express)

5424000000000015 (Mastercard)

2223000010309703 (Mastercard)

2223000010309711 (Mastercard)

6011000000000012 (Discover)

3088000000000017 (JCB)

38000000000006 (Diners Club/ Carte Blanche)

* * *

## **FAQ**

### **Why don't I see Paypal among the default gateway options?**

You can connect to Paypal and use it as a payment method alongside a credit card payment method using Stripe/Authorize.net. This means the default has to be chosen among Stripe/Authorize.net when connected. PayPal can be used independently and alongside credit card payment methods on order forms. and 

  

### **What will change in the reporting of transactions done with Authorize.net? Where will I be able to keep track of all payments?**

There will be no change in the Orders/Subscriptions/Transactions reporting. All the payments done via Authorize.net will be available under Payments ➝ Transactions. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278810849/original/6FPZdXeiv4MDSp1d36218_ezuIA6CZaUEA.png?1675177050)

  

Also, there will be no change in the functioning of workflow triggers/attribution associated. All the functionalities will work the same with Authorize.net.

###   

### **Where will I be able to find the subscriptions created via Authorize.net? I cannot relate to the subscription status defined on the Subscriptions page.**

  

All subscriptions created on the order forms can be tracked under **Payments ➝ Subscriptions**. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278816562/original/SP8Q-LT4WctAzVMUVMK7OvsFSnxFFOdYXQ.png?1675178073)

The following list represents subscription statuses and their inferences: 

  

**Pending** \- When held for merchant review due to FDS

**Trial** \- Subscription is in trial mode

**Active** \- Last payment was made, and there is an upcoming payment as well

**Expired** \- All the subscription payments have been completed, and the subscription no longer exists

**Canceled** \- The merchant canceled the subscription using the Cancel action, and no further payments are to be processed.

**Unpaid** \- The last payment for the subscription was not paid successfully. The subscription is ongoing, but the final payment was unsuccessful.

  

  

Cancellation will be possible for the subscriptions according to the status: 

  

<table data-identifyelement="1381" style="width: 62%; margin-right: calc(38%);"><tbody class="tdfocus-1675178609235" data-identifyelement="1382"><tr data-identifyelement="1383"><td class="tdfocus-1675178489500" data-identifyelement="1384" style="width: 51.2135%; text-align: center;"><p class="qlbt-cell-line tdfocus-1675178176607" data-cell="cell-n5zbaa" data-colspan="1" data-identifyelement="1385" data-row="row-7fnpsa" data-rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin-bottom: 0px; margin-left: 0px; padding: 0px; border: 0px; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; caret-color: rgba(0, 0, 0, 0); counter-reset: list-0 0;"><span class="tdfocus-1675178181379" data-block-id="block-b87f6eea-ed45-4d81-8a17-0d80647a3574" data-identifyelement="1386" dir="ltr" style="box-sizing: border-box; color: rgb(42, 46, 52); margin-bottom: 0px; margin-left: 0px; padding: 0px; border: 0px; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; caret-color: rgba(0, 0, 0, 0);"><strong class="tdfocus-1675178487025" data-identifyelement="1387" dir="ltr">Status</strong></span></p></td><td class="tdfocus-1675178496705" data-identifyelement="1388" style="width: 48.7865%; text-align: center;"><p class="qlbt-cell-line tdfocus-1675178213592" data-cell="cell-5p4sai" data-colspan="1" data-identifyelement="1389" data-row="row-8olw0n" data-rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin-bottom: 0px; margin-left: 0px; padding: 0px; border: 0px; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; caret-color: rgba(0, 0, 0, 0); counter-reset: list-0 0;"><span class="tdfocus-1675178211279" data-block-id="block-a4759249-2970-4b68-96f1-30f6ffc4ce1e" data-identifyelement="1390" style="box-sizing: border-box; color: rgb(42, 46, 52); margin-bottom: 0px; margin-left: 0px; padding: 0px; border: 0px; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; caret-color: rgba(0, 0, 0, 0);"><strong class="tdfocus-1675178494785" data-identifyelement="1391">Cancel</strong></span></p></td></tr><tr data-identifyelement="1392"><td class="tdfocus-1675178505199" data-identifyelement="1393" dir="ltr" style="width: 51.2135%; text-align: center;">Pending</td><td class="tdfocus-1675178541171" data-identifyelement="1394" dir="ltr" style="width: 48.7865%; text-align: center;">No</td></tr><tr data-identifyelement="1395"><td data-identifyelement="1396" dir="ltr" style="width: 51.2135%; text-align: center;">Trial</td><td data-identifyelement="1397" dir="ltr" style="width: 48.7865%; text-align: center;">Yes</td></tr><tr data-identifyelement="1398"><td data-identifyelement="1399" dir="ltr" style="width: 51.2135%; text-align: center;">Active</td><td data-identifyelement="1400" dir="ltr" style="width: 48.7865%; text-align: center;">Yes</td></tr><tr data-identifyelement="1401"><td data-identifyelement="1402" dir="ltr" style="width: 51.2135%; text-align: center;">Expired</td><td data-identifyelement="1403" dir="ltr" style="width: 48.7865%; text-align: center;">No</td></tr><tr data-identifyelement="1404"><td class=" tdfocus-1675178615482" data-identifyelement="1405" dir="ltr" style="width: 51.2135%; text-align: center;">Canceled</td><td data-identifyelement="1406" dir="ltr" style="width: 48.7865%; text-align: center;">No</td></tr><tr data-identifyelement="1407"><td data-identifyelement="1408" dir="ltr" style="width: 51.2135%; text-align: center;">Unpaid</td><td data-identifyelement="1409" dir="ltr" style="width: 48.7865%; text-align: center;">Yes</td></tr></tbody></table>

  

  

Cancel Action is provided only against those subscriptions which are created on Authorize.net. Cancellation of subscriptions for Stripe and PayPal will be added soon. 

  

**The following flow describes the handling of subscription statuses and payment retry logics in case of a subsequent payment failure :**

  

-   If the first subscription payment is successful while purchasing the subscription on the order form, the subscription will move into the active state
    -   It can also move into the trial status if there is a trial period attached to the recurring product
-   The subscription will remain active until every recurring payment is made successfully for the subscription and will move to "Expired" after the completion of payments.
-   If the credit card expires for the end customer in the middle of the subscription, the payment requires authentication from the end customer, or the last payment didn't go through successfully; the status will move over to "Unpaid."
    -   The payment will be attempted two more times after 24 hrs each. The status will remain "Unpaid."
    -   The subscription will remain in the Unpaid state and will attempt the following subsequent transactions, each with two retries. 
    -   The next subsequent payment will also be attempted, and if any payment becomes successful, the subscription will move into "Active." Else will stay with "Unpaid" status.
    -   The subscription status will move to "Expired" after all the retries have been made for the last transaction.
-   If the merchant disconnected the gateway account and there is an ongoing subscription, the transaction cannot be processed;  hence the subscription will move to unpaid. The retry attempts will continue according to the retry logic.

  

### **How do I Cancel/End a subscription created via Authorize.net? I am not able to do so in the merchant portal.**

Subscriptions created using Authorize.net can be canceled within the **Subscriptions** page using the  
'**Cancel Subscription**' Action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278812831/original/oNCJoq-nbfZtbm7bWPTcq0W76vqY2OQ_dA.png?1675177378)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278814793/original/SzIQaM8S3zpPx-44Zl2HltXRq_KMN3pTow.png?1675177713)

  

  

### **Will I be able to refund transactions as well within the application itself?**

Yes, we have the refund functionality within the application. You can refund any transaction under Payments - > Transactions

  

### **I am using FDS filters with Authorize.net to hold transactions for review if the address is not submitted, the card code is not submitted, etc. Is the system compatible with handling those cases?**

Yes, If you hold transactions submitted on order forms for review based on FDS filters. In that case, your transaction will be held for review (or declined as per the setting that you have configured) and will be visible in your merchant portal. Additionally, the corresponding status will be updated on the Transactions page. When you approve or decline the transaction.

  

Regarding recurring invoice payments/calendar appointment booking payments, we treat the transaction as declined and do not book the calendar appointment or schedule the auto payment, since it introduces complications regarding when the business owner will approve the payment.

  

### **Does Authorize.net work for membership checkouts?**

Yes, [Authorize.net](//Authorize.net) is available for membership checkouts

  

### **When will Authorize.net be available for SaaS?**

It is now available under SaaS v2 functionality