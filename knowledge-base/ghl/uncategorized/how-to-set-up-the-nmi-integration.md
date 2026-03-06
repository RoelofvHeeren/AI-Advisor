---
title: "How to set up the NMI integration?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-"
category: "Uncategorized"
---

# How to set up the NMI integration?

NMI (Network Merchants Inc.) is a well-known payment gateway service provider that offers a variety of solutions for businesses to process online transactions securely and efficiently. NMI's payment gateway allows merchants to accept credit card and eCheck payments from their customers through multiple channels, including websites, mobile apps, and in-person point-of-sale systems.

  

  

#### **Covered in this Article:**

#### [**What does NMI have to offer?**](#What-does-NMI-have-to-offer?)

#### **  
[How can I enable payments via NMI?](#How-can-I-enable-payments-via-NMI?)**

#### [Enter the required Gateway Id and API keys with NMI:](#Enter-the-required-Gateway-Id-and-API-keys-with-NMI%3A)

####   
[**FAQs**](#FAQs)

-   #### [Where can I use the NMI integration to accept payments?](#Where-can-I-use-the-NMI-integration-to-accept-payments?)
    
-   #### [Will I be required to create new products for using the integration? How should I sync the products with my payment provider?](#Will-I-be-required-to-create-new-products-for-using-the-integration?-How-should-I-sync-the-products-with-my-payment-provider?)
    
-   #### [What payment methods are supported using NMI? Are Apple Pay, Google Pay, and e-check payment methods supported?](#What-payment-methods-are-supported-using-NMI?-Are-Apple-Pay,-Google-Pay,-and-e-check-payment-methods-supported?)
    
-   #### [Is 3DS supported with the NMI integration?](#Is-3DS-supported-with-the-NMI-integration?%C2%A0) 
    
-   #### [Can I use Stripe to offer Google Pay and Apple Pay and process credit card payments using NMI/Authorize.net?](#Can-I-use-Stripe-to-offer-Google-Pay-and-Apple-Pay-and-process-credit-card-payments-using-NMI/Authorize.net?%C2%A0) 
    
-   #### [Will recurring purchases be supported with NMI? Where can I find the track of subscriptions and orders placed?](#Will-recurring-purchases-be-supported-with-NMI?-Where-can-I-find-the-track-of-subscriptions-and-orders-placed?)
    
-   #### [I am already using Stripe. Do I need to disconnect Stripe to connect to NMI?](#I-am-already-using-Stripe.-Do-I-need-to-disconnect-Stripe-to-connect-to-NMI?)
    
-   #### [What is the meaning of the Default gateway at the top of the Integrations page?](#What-is-the-meaning-of-the-Default-gateway-at-the-top-of-the-Integrations-page?)
    
-   #### [Why don't I see Paypal among the default gateway options?](#Why-don't-I-see-Paypal-among-the-default-gateway-options?)
    
-   #### [I have connected to NMI and have selected it as the default gateway. Will transactions across the application be processed through NMI now?](#I-have-connected-to-NMI-and-have-selected-it-as-the-default-gateway.-Will-transactions-across-the-application-be-processed-through-NMI-now?)
    
-   #### [What will change in the reporting of transactions done with Authorize.net? Where will I be able to keep track of all payments?](#What-will-change-in-the-reporting-of-transactions-done-with-Authorize.net?-Where-will-I-be-able-to-keep-track-of-all-payments?)
    
-   #### [How do I Cancel/End a subscription created via NMI/Authorize.net? I am not able to do so in the merchant portal.](#How-do-I-Cancel/End-a-subscription-created-via-NMI/Authorize.net?-I-am-not-able-to-do-so-in-the-merchant-portal.)
    
-   #### [Will I be able to refund transactions as well within the application itself?](#Will-I-be-able-to-refund-transactions-as-well-within-the-application-itself?)
    
-   #### [Where will I be able to find the subscriptions created via NMI? I cannot relate to the subscription status defined on the Subscriptions page.](#Where-will-I-be-able-to-find-the-subscriptions-created-via-NMI?-I-cannot-relate-to-the-subscription-status-defined-on-the-Subscriptions-page.)
    
-   #### [When will the NMI integration be available for Calendar payments/memberships and other areas?](#When-will-the-NMI-integration-be-available-for-Calendar-payments/memberships-and-other-areas?)
    

####   
[**Additional resources for reference**](#Additional-resources-for-reference-) 

  

  

* * *

## **What does NMI have to offer?**

  

Some of the features offered by the NMI payment gateway include the following:

  

1.  Support for multiple currencies and payment methods: NMI supports various currencies and payment methods, allowing businesses to cater to a global audience.
2.  Tokenization and encryption: NMI's platform uses tokenization and encryption technologies to ensure that sensitive cardholder information is securely transmitted and stored, minimizing the risk of fraud and data breaches.
3.  Fraud prevention tools: NMI offers various fraud prevention tools, such as Address Verification System (AVS) and Card Verification Value (CVV), to help merchants identify and block potentially fraudulent transactions.
4.  Customizable checkout experience: Merchants can customize the look and feel of their checkout process to match their branding, ensuring a seamless customer experience.
5.  Recurring billing and subscription management: NMI supports recurring billing and subscription management, making it easy for businesses to offer subscription-based products or services.
6.  Integration options: NMI offers a range of integration options, including APIs and pre-built plugins, making it easy to connect the payment gateway to various e-commerce platforms, shopping carts, and other third-party software.
7.  Reporting and analytics: NMI's platform provides comprehensive reporting and analytics tools that allow merchants to track and analyze transaction data, helping them make informed business decisions.
8.  Customer vault: Merchants can securely store their customers' payment information in NMI's customer vault, simplifying the checkout process for returning customers and making it easy to manage recurring payments.

  

* * *

## **How can I enable payments via NMI?**

NMI integration is currently supported for order forms, invoices, and Text2Pay link payments. These steps can enable the integration: 

  

### **Enter the required Gateway ID and API keys with NMI:**

Three keys are required to be entered to connect to NMI: 

1.  Gateway Id
2.  Security key
3.  Public key

  

     To get the gateway ID for your account, navigate to your merchant account. Head over to Settings -> Account Information and you will be able to find the Gateway ID for your account.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009301743/original/rAL5-NYa4qQf3QBMONTERfueR0uwXpP_NQ.png?1696491980)

  

Please follow [**these instructions**](https://support.nmi.com/hc/en-gb/articles/360002575497-Security-Keys-) to obtain the keys if you do not already have them.

  

  
Once you have acquired the keys, please head to **Payments> Integrations** in your subaccount.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055145880/original/E3MNPQeKENQ1_TkBc3olzeqtm4wy7NERTA.png?1759474834)

  

  

  

Then **fill out the respective fields with their keys** and then hit **Save:**  
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055145862/original/GEsjIJ5Cnj4ZF7U-KcExrvXVvn1xHowX-Q.png?1759474803)**

  

  

**Please Note:**

Please upgrade to funnels version 2 to make use of this feature. 

  
  

* * *

## **FAQs**

### **Where can I use the NMI integration to accept payments?**

The NMI integration can process **order form payments in funnels version 2**. This includes **one-step and two-step order forms and** **one-click upsells**; **invoice** **payments** can be processed using the NMI integration, and **Tex2Pay link payments** can be processed using the NMI integration.

  

  

  

### **Will I be required to create new products for using the integration? How should I sync the products with my payment provider?**

Syncing the products is not required at all for using NMI/Authorize.net integration. You are only required to create a product(one-time/recurring) under Payments ➝ Products, and it will work according to the price defined while creating/editing the product.

  

If existing products are being used with Stripe/Paypal, they will work with Authorize.net or NMI by switching the default provider under Payments ➝ Integrations. No additional sync is required to be done in that case.

  

  

  

### **What payment methods are supported using NMI? Are Apple Pay, Google Pay, and e-check payment methods supported?**

Only credit/debit card payments can be accepted using NMI integration. Currently, you cannot accept Apple Pay, Google Pay, or check payment methods,

  

  

  

### **Is 3DS supported with the NMI integration?** 

Yes, we added 3DS support in Sept 2025 and all cards where 3DS is needed must work seamlessly with NMI. A quick one-time setup is required to enable 3DS:

1.  Enroll **Payer Authentication 2.0** in your NMI account
    
2.  Confirm the service status is **Active**
    
3.  Generate a **Checkout Public Key** for 3DS in your NMI Merchant Portal, and add it to your HighLevel integration (see screenshot)  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055146064/original/lnR5pkHGs_XvDknDgiOtDSo0tDxYIsMACA.png?1759474978)
    

  

  

  

### **Can I use Stripe to offer Google Pay and Apple Pay and process credit card payments using NMI/Authorize.net?** 

  

Unfortunately, this cannot be the case. Google Pay and Apple Pay can be provided using Stripe only for now, and only one gateway has to have defaulted for order form payments among Stripe, Authorize.net, or NMI. So using both simultaneously is not possible.

  

  

  

### **Will recurring purchases be supported with NMI? Where can I find the track of subscriptions and orders placed?**

Yes, recurring product purchases are supported using NMI/Authorize.net integration. You can track the subscriptions under Payments ➝ Subscriptions and orders details under the Orders and Transactions table.

  

**Please Note:**

Purchase only one recurring product at a time in an order form checkout is supported.

  

  

  

### **I am already using Stripe. Do I need to disconnect Stripe to connect to NMI?**

No, You are not required to disconnect Stripe to connect to NMI. You can connect to both gateways on the integrations page. However, since you have connected two gateways for processing payments, you must define a default gateway for processing order form payments.

  

  

  

### **What is the meaning of the Default gateway at the top of the Integrations page?  
**

mustWhen you connect to more than one gateway on the Integrations page, you will be required to define a default gateway for processing payments. This is necessary since more than one gateway is eligible to process payments and would require a default choice. One default choice must be made.

  

**Please Note:**

PayPal will continue to function alongside Authorize.net/Stripe, whichever is set as the default

  

  

### **Why don't I see Paypal among the default gateway options?**

You can connect to Paypal and use it as a payment method alongside a credit card payment method using Stripe/Authorize.net/NMI. This means that the default must be chosen among Stripe/Authorize.net/NMI when connected. PayPal can be used independently and alongside credit card payment methods on order forms.

  

  

  

### **I have connected to NMI and have selected it as the default gateway. Will transactions across the application be processed through NMI now?**

The NMI integration is available only for invoices, text2pay links, and order form payments. This means that if NMI is connected and is set as the default gateway, only these payments will be processed through NMI. Other payment areas like calendars, SaaS, or memberships will continue to process payments using Stripe. 

  

**Please Note**

If there are any recurring subscriptions/pending transactions with Stripe, they will continue to run as is till the time the Stripe connection is in place. We encourage you to keep the connections in place and not disconnect any gateway, defining the default gateway will run new transactions through the desired choice and will keep in place the existing subscriptions running through Stripe and/or PayPal.

  

  

  

  

### **What will change in the reporting of transactions done with Authorize.net? Where will I be able to keep track of all payments?**

There will be no change in the Orders/Subscriptions/Transactions reporting. All the payments done via NMI/Authorize.net will be available under Payments ➝ Transactions. 

Also, there will be no change in the functioning of triggers/attribution associated with order forms. All the functionalities will work the same.

  

  

  

### **How do I Cancel/End a subscription created via NMI/Authorize.net? I am not able to do so in the merchant portal.**

Subscriptions created using NMI/Authorize.net can be canceled within the Subscriptions page using the 'Cancel Subscription' action.

We do not create subscriptions using the Automatic Recurring Billing of NMI/Authorize.net; hence, only charges corresponding to a subscription transaction will be visible in the merchant portal. 

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288347406/original/YtFY83ed7ZtWjAFLD3E8ygzDbZSVTGi21A.jpeg?1679385093)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288347404/original/x56TQ8bObLZcmOHAAoV47f2txbSH9Rah5g.jpeg?1679385092)

  

  

  

  

### **Will I be able to refund transactions as well within the application itself?**

No, as of now, we do not have the refund functionality within the application. It would be best if you used the merchant portal for refunding transactions for now.

  

  

  

### **Where will I be able to find the subscriptions created via NMI? I cannot relate to the subscription status defined on the Subscriptions page.**

All subscriptions created on the order forms can be tracked under Payments ➝ Subscriptions. The following represents subscription statuses and their inferences: 

  

**Pending** \- When the first transaction for the subscription could not be completed, or the transaction is held for review

**Trial** \- Subscription is in trial mode

**Active** - Last payment was made, and there is an upcoming payment as well

**Expired** - All the subscription payments have been completed, and the subscription no longer exists

**Canceled** - The business canceled the subscription using the Cancel action, and no further payments will be processed.

**Unpaid** - The last payment for the subscription was not paid successfully. The subscription is ongoing, but the final payment was unsuccessful.

  

  

The following actions will be provided for the subscriptions according to the status: 

<table data-identifyelement="856" style="width: 100%;"><tbody data-identifyelement="857"><tr class="tdfocus-1679385619591" data-identifyelement="858"><td data-identifyelement="859" style="width: 14.2061%; background-color: rgb(247, 218, 100);"><p class="tdfocus-1679385488685" data-identifyelement="860" dir="ltr" style="margin-left: 20px;">Actions / Status</p></td><td class="tdfocus-1679385504894" data-identifyelement="861" dir="ltr" style="width: 14.2062%; background-color: rgb(247, 218, 100);"><div data-identifyelement="862" style="margin-left: 20px;">Pending</div></td><td class="tdfocus-1679385521580" data-identifyelement="863" style="width: 14.2857%; background-color: rgb(247, 218, 100);"><div data-identifyelement="864" style="margin-left: 20px;">Trial</div></td><td class="tdfocus-1679385528012" data-identifyelement="865" style="width: 14.2857%; background-color: rgb(247, 218, 100);"><div data-identifyelement="866" style="margin-left: 20px;">Active</div></td><td class="tdfocus-1679385536670" data-identifyelement="867" style="width: 14.2857%; background-color: rgb(247, 218, 100);"><div data-identifyelement="868" style="margin-left: 20px;">Expired</div></td><td class="tdfocus-1679385548620" data-identifyelement="869" style="width: 14.2857%; background-color: rgb(247, 218, 100);"><div data-identifyelement="870" style="margin-left: 20px;">Canceled</div></td><td class="tdfocus-1679385557068" data-identifyelement="871" style="width: 14.2857%; background-color: rgb(247, 218, 100);"><div data-identifyelement="872" style="margin-left: 20px;">Unpaid</div></td></tr><tr data-identifyelement="873"><td class="tdfocus-1679385497841" data-identifyelement="874" style="width: 14.2061%;"><div data-identifyelement="875" style="margin-left: 20px;">Cancel</div></td><td class="tdfocus-1679385568148" data-identifyelement="876" style="width: 14.2062%;"><div data-identifyelement="877" style="margin-left: 20px;">No</div></td><td class="tdfocus-1679385572816" data-identifyelement="878" style="width: 14.2857%;"><div data-identifyelement="879" style="margin-left: 20px;">Yes</div></td><td class="tdfocus-1679385578376" data-identifyelement="880" style="width: 14.2857%;"><div data-identifyelement="881" style="margin-left: 20px;">Yes</div></td><td class="tdfocus-1679385583895" data-identifyelement="882" style="width: 14.2857%;"><div data-identifyelement="883" style="margin-left: 20px;">No</div></td><td class="tdfocus-1679385592048" data-identifyelement="884" style="width: 14.2857%;"><div data-identifyelement="885" style="margin-left: 20px;">No</div></td><td class=" tdfocus-1679385597647" data-identifyelement="886" style="width: 14.2857%;"><div data-identifyelement="887" style="margin-left: 20px;">Yes</div></td></tr></tbody></table>

  

  

  

  

**The following flow describes the handling of subscription statuses and payment retry logics in case of a subsequent payment failure :**

  

If the first subscription payment is successful while purchasing the subscription on the order form, the subscription will move into the active state. It can also move into the trial status if a trial period is attached to the recurring product. The subscription will remain active until every recurring payment is made successfully for the subscription and will move to "Expired" after the completion of payments.  
  

The payment will be attempted two more times after 24 hrs each. The status will remain "Unpaid."

The subscription will remain in the Unpaid state and attempt the following subsequent transactions, each with two retries. The next subsequent payment will also be attempted, and if any payment becomes successful, the subscription will move into "Active." Else will stay with "Unpaid" status.  
  

The subscription status will move to "Expired" after all the retries are made for the last transaction.

If the business disconnected the gateway account and there is an ongoing subscription, the transaction cannot be processed, and hence the subscription will move to unpaid. The retry attempts will continue according to the retry logic.

  

  

### **Additional resources for reference  
**

[Testing cards with NMI](https://support.nmi.com/hc/en-gb/articles/115002375583-Test-Cards)

[Available currencies for NMI](https://support.nmi.com/hc/en-gb/articles/360005072012-Available-Currencies-Currency-Selection#Querying%20Available%20Currencies)