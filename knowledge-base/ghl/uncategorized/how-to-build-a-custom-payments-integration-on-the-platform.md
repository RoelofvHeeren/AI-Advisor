---
title: "How to build a custom payments integration on the platform"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform"
category: "Uncategorized"
---

# How to build a custom payments integration on the platform

This guide walks you through building a custom payment provider that plugs into all HighLevel payment use cases including checkouts, subscriptions, saved payment methods, and more. By using HighLevel’s Marketplace and Payments APIs, you can connect your own gateway or a third-party processor and make it available across HighLevel locations (sub-accounts).

  
**TABLE OF CONTENTS**

-   [Table of Contents](#Table-of-Contents)
-   [1\. Overview](#1.-Overview)
-   [2\. Key Concepts](#2.-Key-Concepts)
-   [3\. Prerequisites](#3.-Prerequisites)
-   [4\. High-Level Integration Flow](#4.-High-Level-Integration-Flow)
-   [5\. Step 1 – Create Your Marketplace App](#5.-Step-1-%E2%80%93-Create-Your-Marketplace-App)
    -   [5.1 Access Marketplace Dashboard](#5.1-Access-Marketplace-Dashboard)
    -   [5.2 Settings Configuration](#5.2-Settings-Configuration)
        -   [5.2.1 Required scopes](#5.2.1-Required-scopes)
        -   [5.2.2 Redirect URL](#5.2.2-Redirect-URL)
        -   [5.2.3 Client Keys](#5.2.3-Client-Keys)
        -   [5.2.4 Webhook URL (App install/uninstall)](#5.2.4-Webhook-URL-\(App-install/uninstall\))
        -   [5.2.5 SSO Key](#5.2.5-SSO-Key)
    -   [5.3 Payment Provider Configuration](#5.3-Payment-Provider-Configuration)
    -   [5.4 Profile](#5.4-Profile)
    -   [5.5 Custom Pages](#5.5-Custom-Pages)
-   [6\. Step 2 – Implement Authentication & Installation Flow](#6.-Step-2-%E2%80%93-Implement-Authentication-&-Installation-Flow)
    -   [6.1 Installation sequence](#6.1-Installation-sequence)
    -   [6.2 Create Public Provider Config](#6.2-Create-Public-Provider-Config)
-   [7\. Step 3 – Connect Test & Live Configuration](#7.-Step-3-%E2%80%93-Connect-Test-&-Live-Configuration)
-   [8\. Step 4 – Implement the Checkout iFrame Integration](#8.-Step-4-%E2%80%93-Implement-the-Checkout-iFrame-Integration)
    -   [8.1 Ready Event: custom\_provider\_ready](#8.1-Ready-Event%3A%C2%A0custom_provider_ready)
    -   [8.2 Payment Initiation Event: payment\_initiate\_props](#8.2-Payment-Initiation-Event%3A%C2%A0payment_initiate_props)
    -   [8.3 Outcome Events](#8.3-Outcome-Events)
        -   [8.3.1 Payment succeeded](#8.3.1-Payment-succeeded)
        -   [8.3.2 Payment failed](#8.3.2-Payment-failed)
        -   [8.3.3 Payment canceled](#8.3.3-Payment-canceled)
    -   [8.4 Verification Call: type: "verify"](#8.4-Verification-Call%3A%C2%A0type%3A-)
-   [9\. Step 5 – Saved Payment Methods & Manual Subscriptions](#9.-Step-5-%E2%80%93-Saved-Payment-Methods-&-Manual-Subscriptions)
    -   [9.1 Add Payment Method (Card on File)](#9.1-Add-Payment-Method-\(Card-on-File\))
    -   [9.2 List Payment Methods – type: "list\_payment\_methods"](#9.2-List-Payment-Methods-%E2%80%93%C2%A0type%3A-)
    -   [9.3 Charge Payment Method – type: "charge\_payment"](#9.3-Charge-Payment-Method-%E2%80%93%C2%A0type%3A-)
    -   [9.4 Manual Subscriptions (Subscription Schedules) with Saved Methods](#9.4-Manual-Subscriptions-\(Subscription-Schedules\)-with-Saved-Methods)
        -   [9.4.1 Declare your capability](#9.4.1-Declare-your-capability)
        -   [9.4.2 Runtime flow: type: "create\_subscription"](#9.4.2-Runtime-flow%3A%C2%A0type%3A-)
        -   [9.4.3 Runtime flow: type: "cancel\_subscription"](#9.4.3-Runtime-flow%3A%C2%A0type%3A-)
    -   [9.4.3 Cancel subscription: type: "cancel\_subscription"](#9.4.3-Cancel-subscription%3A%C2%A0type%3A-)
-   [10\. Step 6 – Refunds & Other Actions](#10.-Step-6-%E2%80%93-Refunds-&-Other-Actions)
    -   [10.1 Refund Event – type: "refund"](#10.1-Refund-Event-%E2%80%93%C2%A0type%3A-)
-   [11\. Step 7 – Webhooks from HighLevel](#11.-Step-7-%E2%80%93-Webhooks-from-HighLevel)
    -   [11.1 Webhook Endpoint](#11.1-Webhook-Endpoint)
    -   [11.2 Supported Events](#11.2-Supported-Events)
    -   [11.3 General Payload Structure](#11.3-General-Payload-Structure)
    -   [11.4 Mandatory Fields by Event](#11.4-Mandatory-Fields-by-Event)
    -   [11.5 subscriptionSnapshot Schema](#11.5%C2%A0subscriptionSnapshot%C2%A0Schema)
    -   [11.6 chargeSnapshot Schema](#11.6%C2%A0chargeSnapshot%C2%A0Schema)
-   [13\. Frequently Asked Questions](#13.-Frequently-Asked-Questions)

  

##   
1\. Overview

HighLevel’s custom payment provider framework lets you integrate any payment gateway with the platform and use it wherever HighLevel processes payments.

Once integrated, your payment provider can:

-   Appear in the App Marketplace and Payments > Integrations
    
-   Power one-time and recurring payments
    
-   Handle off-session charges (with stored payment methods)
    
-   Support manual subscriptions and subscription schedules
    
-   Sync updates to HighLevel via webhooks  
      
    

## 2\. Key Concepts

Marketplace App  
The container for your integration in HighLevel’s Marketplace. It defines OAuth, scopes, category, and custom pages. 

Custom Payment Provider  
The payments configuration that tells HighLevel your app is a payment provider and what payment types you support (one-time, recurring, off-session).

queryUrl  
A backend endpoint (your server) that HighLevel calls for all server-side payment operations, such as:

-   Verifying payments (type: "verify")
    
-   Listing payment methods (type: "list\_payment\_methods")
    
-   Charging a saved method (type: "charge\_payment")
    
-   Creating manual subscriptions (type: "create\_subscription")  
    
-   Cancelling subscription (type: "cancel\_subscription") 
    
-   Create refund (type: "refund")
    

paymentsUrl  
A public URL that HighLevel loads inside an iframe to collect payments from customers via your provider.

Custom Page  
A public URL that HighLevel loads inside an iframe in the Marketplace UI. Used for configuring your integration (API keys, merchant IDs, test/live mode, etc.).  

Test vs Live Mode

-   Test mode – Used for sandboxing and simulating payments with no real money.
    
-   Live mode – Used for real-world payments.
    

Each location can have both a test and live configuration for your provider.  

  

## 3\. Prerequisites

You’ll need:

-   A HighLevel account with access to the Marketplace Dashboard
    
-   A backend service (Node.js, Python, Ruby, etc.) hosted on any cloud provider
    
-   A public domain for:
    
    -   OAuth redirect URL
        
    -   Custom configuration page
        
    -   queryUrl and webhooks
        
    -   paymentsUrl (checkout iframe)
        
-   Familiarity with:
    
    -   OAuth 2.0
        
    -   JSON and HTTP APIs
        
    -   Handling webhooks
        

Also see the public Payments API docs for integration endpoints.  

  

## 4\. High-Level Integration Flow

There are four major steps to integrating a payment gateway:  

1.  Create a Marketplace App in the custom payment provider category.
    
2.  Create a backend service that handles OAuth, webhooks, and queryUrl requests.
    
3.  Create public pages for:
    
    -   Configuring the integration (custom page)
        
    -   Collecting payments via iframe (paymentsUrl)
        
4.  Configure test and live payment modes and test the flow end-to-end.
    

  

Introduction video for reference - [https://www.loom.com/share/f524dbd7858a47dea08f8a27c688ed46](https://www.loom.com/share/f524dbd7858a47dea08f8a27c688ed46)

  

## 5\. Step 1 – Create Your Marketplace App

### 5.1 Access Marketplace Dashboard

1.  Go to: https://marketplace.gohighlevel.com  
    
2.  Create a new app and configure:
    

-   Settings
    
-   Payment Provider
    
-   Profile
    
-   Custom Pages
    

  

### 5.2 Settings Configuration

#### 5.2.1 Required scopes

Add the following scopes to allow your app to interact with payments and products: 

payments/orders.readonly

payments/orders.write

payments/subscriptions.readonly

payments/transactions.readonly

payments/custom-provider.readonly

payments/custom-provider.write

products.readonly

products/prices.readonly

  
Scope reference

-   payments/orders.\* – Read and manage payment orders.
    
-   payments/subscriptions.readonly – Read subscription details.
    
-   payments/transactions.readonly – Read payment transaction details.
    
-   payments/custom-provider.\* – Read and manage custom provider configuration.
    
-   products.\* – Read products and prices associated with payments.
    

  

#### 5.2.2 Redirect URL

Used to complete the OAuth flow when your app is installed at a location. HighLevel redirects users here with a code query parameter.  

Example

https://your-domain.com/installed?code=0834cbd778dacf89c

Use the code to obtain an OAuth access token via the OAuth Access Token API and store it securely for future API calls.  

Field reference

-   code (string) – Short-lived authorization code. Exchange it for an access token.
    

  

#### 5.2.3 Client Keys

HighLevel provides client keys for OAuth.

-   Store them on your backend only.
    
-   Use them when exchanging the OAuth code for an access token.  
    

  

#### 5.2.4 Webhook URL (App install/uninstall)

Configure a Webhook URL that HighLevel calls whenever your app is:  

-   Installed at a location
    
-   Uninstalled from a location
    

Use this to:

-   Initialize any config for that location on your side
    
-   Clean up data when the app is removed
    

A sample uninstall webhook request is linked in the original docs.  

  

#### 5.2.5 SSO Key

HighLevel gives you an SSO key.  

-   Store this securely on your backend.
    
-   Use it to decrypt the auth token passed to your Custom Pages inside the iframe, so you can identify the HighLevel user and location.
    

  

### 5.3 Payment Provider Configuration

Once the Settings tab is done, configure the Payment Provider section. This is what makes your app a “payments app” in HighLevel.  

Fields

-   Name – The display name for your payment provider.
    
-   App description – Short description that appears in the Payments > Integrations UI.
    
-   Payment provider type – What kinds of payments your provider supports:
    
    -   OneTime – Single fixed payment, no future charges.  
        
    -   Recurring – Fixed recurring charges and subscriptions. You must create/manage subscriptions on your side and send updates (new payment, canceled, unpaid, etc.) back via webhooks.  
        
    -   Off Session – Off-session payments: charge a customer without direct interaction (e.g., stored cards). Typically requires you to store an authorized payment method on file.  
        
-   Logo – Public URL to your provider’s logo, shown in UI.  
    

  

### 5.4 Profile

In the Profile section, set:  

-   Category = Third Party Provider
    

This ensures your app:

-   Appears correctly in the App Marketplace
    
-   Appears in Payments > Integrations for easy discovery
    

  

### 5.5 Custom Pages

Configure a Custom Page to collect gateway credentials (public keys, merchant IDs, etc.).  

-   It’s a public URL that HighLevel loads in an iframe after installation.
    
-   It is also used when a user clicks Manage Integration under Payments > Integrations.
    

Use this page to:

-   Let users connect / disconnect your gateway
    
-   Collect test/live credentials
    
-   Trigger backend calls to HighLevel’s integration APIs
    

  

## 6\. Step 2 – Implement Authentication & Installation Flow

### 6.1 Installation sequence

When a user installs your app in a location:  

1.  HighLevel opens your redirect URL with an OAuth code.
    
2.  Your backend exchanges code for an access token (OAuth Access Token API).
    
3.  HighLevel loads your Custom Page for configuration.
    
4.  HighLevel expects an API call to create a public provider config, which:
    
    -   Registers your provider in HighLevel Payments
        
    -   Makes your app appear as a payment option in Payments > Integrations
        

* * *

### 6.2 Create Public Provider Config

Call the Create Public Provider Config API with a payload like:  [API Reference](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration/index.html)

{

  "name": "My Payment Provider",

  "description": "Tagline or short description",

  "imageUrl": "https://your-domain.com/logo.png",

  "locationId": "GHL\_SUB\_ACCOUNT\_ID",

  "queryUrl": "https://your-backend.com/payments/query",

  "paymentsUrl": "https://your-frontend.com/payments/checkout"

}

Field reference

-   name (string) – Integration name shown across HighLevel (Marketplace, Integrations, etc.).
    
-   description (string) – Short description/tagline shown in Payments > Integrations.
    
-   imageUrl (string, URL) – Public URL of your payment provider logo.
    
-   locationId (string) – HighLevel sub-account ID where the app is installed.
    
-   queryUrl (string, URL) – Backend endpoint that HighLevel calls for payment-related operations: verify, refund, list/charge payment methods, create subscriptions, etc.
    
-   paymentsUrl (string, URL) – Public checkout page URL that HighLevel loads inside an iframe for customer-facing payments.
    

* * *

## 7\. Step 3 – Connect Test & Live Configuration

After installation, users need to configure test and live credentials.  

HighLevel expects a test and live configuration update via the Connect Config API:

Key fields:

-   apiKey – Secret key used in backend calls from HighLevel to your queryUrl.
    
-   publishableKey – Safe-to-expose key used by your frontend (iframe) to initialize payments.
    

You’ll typically:

1.  Let the user paste their test keys on your Custom Page.
    
2.  Your backend calls Connect config API (test mode).  
    
3.  Repeat for live keys.
    
4.  User sets your provider as default in:Payments > Integrations > \[Your App\] > Set as Default.
    

Once keys for a mode (test or live) are added, that mode becomes usable for payments.  

  
How the payment flow works -

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060818947/original/zT0aWDcBndJJsZw2E8uoHbbgkYhef9WovQ.png?1765972400)  

  

## 8\. Step 4 – Implement the Checkout iFrame Integration

All payments via your provider occur inside an iframe that loads paymentsUrl.  

### 8.1 Ready Event: custom\_provider\_ready

When your iframe is loaded and ready to receive data, send a ready event:

{

  "type": "custom\_provider\_ready",

  "loaded": true

}

Field reference

-   type = "custom\_provider\_ready" – Identifies this as the ready event.
    
-   loaded (boolean) – Set to true when the iframe is fully loaded and ready.
    

* * *

### 8.2 Payment Initiation Event: payment\_initiate\_props

After HighLevel receives your ready event, it sends a payment data event:  

  
{

  "type": "payment\_initiate\_props",

  "publishableKey": "PUBLIC\_KEY",

  "amount": 100,

  "currency": "USD",

  "mode": "payment",

  "productDetails": \[

    {

      "\_id": "507f1f77bcf86cd799439011",

      "isTaxesEnabled": true,

      "taxes": \[

        {

          "rate": 0.08,

          "name": "Sales Tax"

        }

      \],

      "name": "Premium T Shirt",

      "qty": 2,

      "productId": "PRODUCT\_ID",

      "priceId": "PRICE\_ID",

      "prices": \[

        {

          "\_id": "507f1f77bcf86cd799439012",

          "name": "Premium T Shirt",

          "type": "onetime",

          "currency": "usd",

          "amount": 2999,

          "compareAtPrice": 3999,

          "setupFee": 0,

          "shippingOptions": {

            "weight": {

              "value": 0.5,

              "unit": "kg"

            },

            "dimensions": {

              "length": 30,

              "width": 25,

              "height": 5,

              "unit": "cm"

            }

          }

        }

      \]

    }

  \],

  "contact": {

    "id": "CONTACT\_ID",

    "name": "Customer Name",

    "email": "customer@example.com",

    "contact": "+1XXXXXXXXXX",

    "shippingAddress": {

      "city": "New York",

      "country": "United States",

      "line1": "123 Main St",

      "zipCode": "10001",

      "state": "NY"

    }

  },

  "orderId": "ORDER\_ID",

  "transactionId": "TRANSACTION\_ID",

  "subscriptionId": "SUBSCRIPTION\_ID",

  "locationId": "LOCATION\_ID"

}

  
  

Field reference

• type (string) "payment\_initiate\_props" event type.  
 • publishableKey (string) Publishable key from Connect Config used to initialize your gateway JavaScript SDK.  
 • amount (number) Amount to charge in decimal currency.  
 • currency (string) ISO three letter currency code such as USD or INR.  
 • mode (string) "payment" for one time payments or "subscription" for subscription flow.

• productDetails (array) List of product line items included in this payment.  
 • productDetails\[\].\_id (string) Internal identifier for the product line item.  
 • productDetails\[\].isTaxesEnabled (boolean) Indicates whether taxes are applied to this line item.  
 • productDetails\[\].taxes (array) Tax definitions applied to this line item.  
 • productDetails\[\].taxes\[\].rate (number) Tax rate as a decimal fraction for example 0.08 for eight percent.  
 • productDetails\[\].taxes\[\].name (string) Tax display name such as Sales Tax.  
 • productDetails\[\].name (string) Product name such as Premium T Shirt.  
 • productDetails\[\].qty (number) Quantity of this product.  
 • productDetails\[\].productId (string) HighLevel product identifier.  
 • productDetails\[\].priceId (string) HighLevel price identifier for the chosen price.  
 • productDetails\[\].prices (array) Price definitions for this product.

• productDetails\[\].prices\[\].\_id (string) Internal identifier for this price record.  
 • productDetails\[\].prices\[\].name (string) Price label often same as product name.  
 • productDetails\[\].prices\[\].type (string) Price type such as onetime or recurring.  
 • productDetails\[\].prices\[\].currency (string) Currency code in lower case such as usd.  
 • productDetails\[\].prices\[\].amount (number) Price amount in the smallest currency unit such as cents.  
 • productDetails\[\].prices\[\].compareAtPrice (number) Optional original or reference price in the smallest currency unit.  
 • productDetails\[\].prices\[\].setupFee (number) Optional one time setup fee in the smallest currency unit.  
 • productDetails\[\].prices\[\].shippingOptions (object) Shipping information for this product.  
 • productDetails\[\].prices\[\].shippingOptions.weight.value (number) Product weight value.  
 • productDetails\[\].prices\[\].shippingOptions.weight.unit (string) Weight unit such as kg.  
 • productDetails\[\].prices\[\].shippingOptions.dimensions.length (number) Product length.  
 • productDetails\[\].prices\[\].shippingOptions.dimensions.width (number) Product width.  
 • productDetails\[\].prices\[\].shippingOptions.dimensions.height (number) Product height.  
 • productDetails\[\].prices\[\].shippingOptions.dimensions.unit (string) Dimension unit such as cm.

• contact (object) Customer details for this payment.  
 • contact.id (string) Customer identifier in HighLevel.  
 • contact.name (string) Full customer name.  
 • contact.email (string) Customer email address.  
 • contact.contact (string) Customer phone number with country code.  
 • contact.shippingAddress (object) Shipping destination for this payment.  
 • contact.shippingAddress.city (string) Shipping city.  
 • contact.shippingAddress.country (string) Shipping country such as United States.  
 • contact.shippingAddress.line1 (string) Street address line.  
 • contact.shippingAddress.zipCode (string) Postal or zip code.  
 • contact.shippingAddress.state (string) State or region code such as NY.

• orderId (string) HighLevel internal order identifier.  
 • transactionId (string) HighLevel internal transaction identifier.  
 • subscriptionId (string) HighLevel internal subscription identifier when the payment is part of a subscription.  
 • locationId (string) Sub account identifier where the order was created.

Your iframe should start the payment flow when this event is received.  
  
  

* * *

### 8.3 Outcome Events

After processing the payment, you must emit one of the following events back to HighLevel.  

#### 8.3.1 Payment succeeded

{

  "type": "custom\_element\_success\_response",

  "chargeId": "GATEWAY\_CHARGE\_ID"

}

Field reference

-   type = "custom\_element\_success\_response" – Indicates a successful payment.
    
-   chargeId (string) – Your gateway’s charge/payment ID; shown in HighLevel order/transaction/subscription details.
    

* * *

#### 8.3.2 Payment failed

{

  "type": "custom\_element\_error\_response",

  "error": {

    "description": "Card was declined"

  }

}

Field reference

-   type = "custom\_element\_error\_response" – Indicates a failed payment.
    
-   error (object) – Error details:
    
    -   description (string) – User-visible error message.
        

* * *

#### 8.3.3 Payment canceled

{

  "type": "custom\_element\_close\_response"

}

Field reference

-   type = "custom\_element\_close\_response" – Indicates the user canceled the payment flow.
    

* * *

### 8.4 Verification Call: type: "verify"

When you report success, HighLevel performs a backend verification via queryUrl:  

curl \--location '${queryUrl}' \\

  \--header 'Content-Type: application/json' \\

  \--data '{

    "type": "verify",

    "transactionId": "ghl\_transaction\_id",

    "apiKey": "YOUR\_API\_KEY",

    "chargeId": "gateway\_charge\_id",

    "subscriptionId": "ghl\_subscription\_id"

  }'

Field reference (request)

-   type = "verify" – Identifies a verification request.
    
-   transactionId (string) – HighLevel transaction ID being verified.
    
-   apiKey (string) – The apiKey you provided via Connect Config (used for authentication).
    
-   chargeId (string) – Your gateway’s charge ID.
    
-   subscriptionId (string, optional) – HighLevel subscription ID if relevant.
    

Expected responses

{ "success": true }

-   Marks order and transaction as successful in HighLevel.  
    

{ "failed": true }

-   Marks the transaction as failed.
    

{ "success": false }

-   Leaves the transaction in pending state; you can later mark it success via webhooks (for delayed payments).
    

  

## 9\. Step 5 – Saved Payment Methods & Manual Subscriptions

### 9.1 Add Payment Method (Card on File)

To support saving cards/payment methods, extend your ready event:  

{

  "type": "custom\_provider\_ready",

  "loaded": true,

  "addCardOnFileSupported": true

}

Field reference

-   addCardOnFileSupported (boolean) – Set to true only if:
    
    -   Your provider supports storing payment methods, and
        
    -   You’ve implemented the expected flows (save, list, charge).
        

Once HighLevel sees this flag, it sends a setup initiation event:

{

  "type": "setup\_initiate\_props",

  "publishableKey": "PUBLIC\_KEY",

  "currency": "USD",

  "mode": "setup",

  "contact": {    "id": "CONTACT\_ID",

"name": "Customer Name",    "email": "[customer@example.com](mailto:customer@example.com)",

"contact": "+1XXXXXXXXXX"

  },

  "locationId": "LOCATION\_ID"

}

Field reference

-   type = "setup\_initiate\_props" – Event type for adding a card/payment method.
    
-   publishableKey (string) – Frontend key from your config.
    
-   currency (string) – 3-letter currency code.
    
-   mode = "setup" – Indicates this is a setup (no immediate charge).
    
-   contact.id (string) – HighLevel contact ID.
    
-   locationId (string) – Sub-account ID where the method is being added.
    

After you complete adding the payment method with your provider:

Success

{

  "type": "custom\_element\_success\_response"

}

Failure

{

  "type": "custom\_element\_error\_response",

  "error": {

    "description": "Unable to save card"

  }

}

The newly added payment method must appear later in the List Payment Methods response for that contact.  

* * *

### 9.2 List Payment Methods – type: "list\_payment\_methods"

HighLevel calls your queryUrl to retrieve saved methods:  

{

  "locationId": "Ktkq45jCf1R15Z1D6Q3t",

  "contactId": "W1nPA7y2Dv8oL1MEvs2A",

  "apiKey": "API\_KEY\_XXXXXXX",

  "type": "list\_payment\_methods"

}

Field reference (request)

-   locationId (string) – HighLevel sub-account ID.
    
-   contactId (string) – HighLevel contact ID whose methods you should list.
    
-   apiKey (string) – Backend API key you provided.
    
-   type = "list\_payment\_methods" – Request type.
    

Expected response

\[

  {

    "id": "payment\_method\_id",

    "type": "card",

    "title": "Visa",

    "subTitle": "\*\*\*\* \*\*\*\* \*\*\*\* 1111",

    "expiry": "02/29",

    "customerId": "453bu44112q112",

    "imageUrl": "https://your-domain.com/assets/visa.png"

  }

\]

Field reference (response)

-   id (string) – Internal payment method ID; used later to charge this method.
    
-   type (string) – Payment method type, e.g. "card", "us\_bank\_account".
    
-   title (string) – Short label displayed in the UI (max ~20 chars).
    
-   subTitle (string) – Secondary label (e.g., last 4 digits) shown below title.
    
-   expiry (string) – Expiration date in MM/YY.
    
-   customerId (string) – Customer ID on your gateway.
    
-   imageUrl (string, URL) – Icon URL (e.g., card brand logo).
    

You must maintain mapping between contactId, locationId, apiKey, and customerId in your system to list correct methods.  

* * *

### 9.3 Charge Payment Method – type: "charge\_payment"

For off-session charges or invoices using a saved method, HighLevel calls your queryUrl:  

{

  "paymentMethodId": "payment\_method\_id",

  "contactId": "W1nPA7y2Dv8oL1MEvs2A",

  "transactionId": "680a923d54b81c699b845e47",

  "chargeDescription": "Invoice \- 1",

  "amount": 100.00,

  "currency": "USD",

  "apiKey": "API\_KEY\_XXXXXXX",

  "type": "charge\_payment"

}

Field reference (request)

-   paymentMethodId (string) – ID returned earlier in list\_payment\_methods.
    
-   contactId (string) – HighLevel contact ID.
    
-   transactionId (string) – HighLevel transaction ID for this charge.
    
-   chargeDescription (string) – Description for the charge (e.g., invoice label).
    
-   amount (number) – Charge amount, decimal format.
    
-   currency (string) – 3-letter currency code.
    
-   apiKey (string) – Backend API key.
    
-   type = "charge\_payment" – Request type.
    

Expected response

{

  "success": true,

  "failed": false,

  "chargeId": "pay\_r8167s62b",

  "message": "Success or Failure message",

  "chargeSnapshot": {

    "id": "payment-id",

    "status": "succeeded",

    "amount": 100.00,

    "chargeId": "pay\_r8167s62b",

    "chargedAt": 1724217600

  }

}

Field reference (response)

-   success (boolean) – true if the charge succeeded.
    
-   failed (boolean) – true if the charge failed.
    
-   chargeId (string) – Gateway payment/charge ID.
    
-   message (string) – Human-readable status or error message.
    
-   chargeSnapshot (object) – Charge details:
    
    -   id (string) – Charge ID in your system (may match chargeId).
        
    -   status (string) – One of: succeeded, failed, pending,processing.
        
    -   amount (number) – Charged amount (unit: follow your gateway convention).
        
    -   chargeId (string) – Charge identifier.
        
    -   chargedAt (number) – Unix timestamp (seconds) of when the payment was completed.
        

* * *

### 9.4 Manual Subscriptions (Subscription Schedules) with Saved Methods

Providers that support saved methods can accept manual subscription creation requests. This lets users create a subscription schedule (e.g., “start on date X, bill monthly”) without a checkout session.  

#### 9.4.1 Declare your capability

Use the Update Capabilities API to tell HighLevel that your provider supports subscription schedules.  

Key notes:

-   Provide either companyId or locationId.
    
-   Use an OAuth token with the corresponding scope.
    
-   This config is at agency level and applies to relevant sub-account installs.
    

Once enabled, HighLevel allows manual subscriptions (SaaS) and subscription schedules (Payments) for your provider.  

#### 9.4.2 Runtime flow: type: "create\_subscription"

When a manual subscription is created, HighLevel sends a POST to your queryUrl with:  

{

  "type": "create\_subscription",

  "apiKey": "API\_KEY\_XXXXXXX",

  "locationId": "8snsnbsydbwBY",

  "contactId": "W1nPA7y2Dv8oL1MEvs2A",

  "paymentMethodId": "payment\_method\_id",

  "subscriptionId": "680a923d54b81c699b845e47",

  "transactionId": "680a923d54b81c699b2123",

  "startDate": "2025-09-22",

  "currency": "USD",

  "amount": 100.0,

  "recurringAmount": "80.00",

  "isSchedule": false,

  "productDetails": \[

    {

      "\_id": "621239912930123998",

      "name": "Product Name",

      "qty": 1,

      "productId": "621239912930123998",

      "priceId": "62123991293012371289",

      "prices": \[

        {

          "\_id": "62123991293012371289",

          "name": "Price Name",

          "type": "recurring",

          "currency": "USD",

          "amount": 100.0,

          "compareAtPrice": 120.0,

          "setupFee": 0,

          "recurring": {

            "interval": "month",

            "intervalCount": 1

          },

          "trialPeriod": 0,

          "totalCycles": 12

        }

      \]

    }

  \]

}

Field reference (request)

-   type = "create\_subscription" – Request type.
    
-   apiKey (string) – Backend API key.
    
-   locationId (string) – HighLevel sub-account ID.
    
-   contactId (string) – HighLevel contact ID.
    
-   paymentMethodId (string) – ID returned by list\_payment\_methods.
    
-   subscriptionId (string) – HighLevel subscription ID.
    
-   transactionId (string) – HighLevel transaction ID for any initial charge.
    
-   startDate (string, YYYY-MM-DD) – Date the subscription should begin.
    
-   currency (string) – Currency code.
    
-   amount (number) – Initial charge amount (if any).
    
-   recurringAmount (string/number) – Recurring charge amount.
    
-   productDetails (array) – Product and pricing info for this subscription:
    
    -   \_id (string) – Internal product record ID.
        
    -   name (string) – Product name.
        
    -   qty (number) – Quantity.
        
    -   productId (string) – HighLevel product ID.
        
    -   priceId (string) – HighLevel price ID.
        
    -   prices (array) – Price details:
        
        -   \_id (string) – Price ID.
            
        -   name (string) – Price name.
            
        -   type (string) – Billing type (e.g., recurring,onetime).
            
        -   currency (string) – Currency code.
            
        -   amount (number) – Billing amount.
            
        -   recurring.interval (string) – Interval unit (e.g., month).
            
        -   recurring.intervalCount (number) – Interval count (e.g., 1 month).
            
        -   trialPeriod (number) – Trial period length.
            
        -   totalCycles (number) – How many cycles before the subscription ends.
            

Expected response

{

  "success": true,

  "failed": false,

  "message": "Subscription created",

  "transaction": {

    "chargeId": "1234567890",

    "chargeSnapshot": {

      "status": "succeeded",

      "id": "1234567890",

      "amount": 100.0,

      "chargeId": "1234567890",

      "currency": "USD",

      "createdAt": 1724217600,

      "chargedAt": 1724217600

    }

  },

  "subscription": {

    "subscriptionId": "1234567890",

    "subscriptionSnapshot": {

      "status": "active",

      "id": "1234567890",

      "trialEnd": 1724217600,

      "createdAt": 1724217600,

      "nextCharge": 1726896000

    }

  }

}

  
  

Field reference (response)

-   success (boolean) – true if creation succeeded.
    
-   failed (boolean) – true if creation failed.
    
-   message (string) – Status or error description.
    
-   transaction (object, optional) – Details of any initial charge:
    
    -   chargeId (string) – Payment ID.
        
    -   chargeSnapshot (object):
        
        -   id (string) – Charge ID in your system.
            
        -   status (string) – succeeded | failed | pending.
            
        -   amount (number) – Charged amount (often in minor units).
            
        -   chargeId (string) – Payment identifier.
            
        -   chargedAt (number) – Unix timestamp (seconds).
            
-   subscription (object, required):
    
    -   subscriptionId (string) – Your subscription ID.
        
    -   subscriptionSnapshot (object):
        
        -   id (string) – Subscription ID.
            
        -   status (string) – scheduled, trialing, active, expired, canceled, unpaid, incomplete.  
            
        -   trialEnd (number) – Unix timestamp when trial ends.
            
        -   createdAt (number) – Unix timestamp when subscription was created.
            
        -   nextCharge (number) – Unix timestamp of next scheduled charge.
            

If the subscription begins in the future with no initial charge, the transaction object may be omitted.  

  

#### 9.4.3 Runtime flow: type: "cancel\_subscription"

Here is the new section 9.4 point 3 that you can drop in after 9.4.2.

* * *

### 9.4.3 Cancel subscription: type: "cancel\_subscription"

Use this request when HighLevel asks your provider to cancel an existing subscription.

Request payload

{

  "type": "cancel\_subscription",

  "subscriptionId": "SUBSCRIPTION\_ID",

  "apiKey": "API\_KEY"

}

Field reference

• type (string) "cancel\_subscription" request type.  
 • subscriptionId (string) HighLevel subscription identifier that should be canceled.  
 • apiKey (string) Backend key that HighLevel includes so you can authenticate the request.

Expected response

{

  "status": "canceled"

}

Field reference

• status (string) Resulting status of the subscription on your side. For a successful cancel operation this should be "canceled".

  

* * *

## 10\. Step 6 – Refunds & Other Actions

### 10.1 Refund Event – type: "refund"

For refunds, HighLevel calls your queryUrl with:  

{

  "type": "refund",

  "amount": 50.00,

  "transactionId": "TRANSACTION\_ID"  
  "chargeId": "CHARGE\_ID",

  "apiKey": "API\_KEY"

}

Field reference

-   type = "refund" – Indicates a refund request.
    
-   amount (number) – Amount to refund (can be partial).
    
-   transactionId (string) – HighLevel internal transaction ID to refund.
    
-   chargeId (string) Identifier of the original charge in your payment system.
    
-   apiKey (string) Backend key that HighLevel includes so you can authenticate the request.
    

Refunds:

-   Can be partial.
    
-   A transaction can receive multiple refunds, as long as the total refunded amount ≤ original amount.  
    

  
Expected response

{

  "success": true,

  "message": "Refund successful",

  "id": "REFUND\_ID",

  "amount": 50.0,

  "currency": "USD"

}

Field reference

• success (boolean) true if the refund was successful, false if the refund failed.  
 • message (string) Human readable status text for the refund, for example a failure reason when success is false.  
 • id (string) Identifier of the refund in your payment system.  
 • amount (number) Refunded amount in decimal currency.  
 • currency (string) Currency code of the refund such as USD.

* * *

## 11\. Step 7 – Webhooks from HighLevel

HighLevel supports webhooks for updates to subscriptions, orders, transactions, refunds, and other actions.  

### 11.1 Webhook Endpoint

-   Endpoint:  
    https://backend.leadconnectorhq.com/payments/custom-provider/webhook  
    
-   Method: POST
    
-   Body: JSON, based on event type.
    

This endpoint is HighLevel’s webhook endpoint; your system will be the sender. Use this structure when you send webhooks to HighLevel.

### 11.2 Supported Events

Subscriptions

1.  subscription.trialing
    
2.  subscription.active
    
3.  subscription.updated
    
4.  subscription.charged
    

Payments

1.  payment.captured  
    

* * *

### 11.3 General Payload Structure

{

  "event": "subscription.charged",

  "chargeId": "CHARGE\_ID",

  "ghlSubscriptionId": "GHL\_SUBSCRIPTION\_ID",

  "subscriptionSnapshot": { },

  "chargeSnapshot": { },

  "ghlTransactionId": "GHL\_TRANSACTION\_ID",

  "marketplaceAppId": "MARKETPLACE\_APP\_ID",

  "locationId": "LOCATION\_ID",

  "apiKey": "API\_KEY\_XXXXXXX"

}

Field reference

-   event (string) – Event type (subscription.charged, subscription.trialing, subscription.active, subscription.updated, payment.captured).
    
-   chargeId (string) – Payment charge ID in your system.
    
-   ghlSubscriptionId (string) – Subscription ID in HighLevel.
    
-   subscriptionSnapshot (object) – Current subscription state (see below).
    
-   chargeSnapshot (object) – Current charge state (see below).
    
-   ghlTransactionId (string) – Transaction ID in HighLevel.
    
-   marketplaceAppId (string) – Your Marketplace app ID.
    
-   locationId (string) – HighLevel location (sub-account) ID.
    
-   apiKey (string) – Payment provider API key.
    

* * *

### 11.4 Mandatory Fields by Event

1. payment.captured  

{

  "event": "payment.captured",

  "chargeId": "CHARGE\_ID",

  "ghlTransactionId": "GHL\_TRANSACTION\_ID",

  "chargeSnapshot": { },

  "locationId": "LOCATION\_ID",

  "apiKey": "API\_KEY\_XXXXXXX"

}

2. subscription.updated

{

  "event": "subscription.updated",

  "ghlSubscriptionId": "GHL\_SUBSCRIPTION\_ID",

  "subscriptionSnapshot": { },

  "locationId": "LOCATION\_ID",

  "apiKey": "API\_KEY\_XXXXXXX"

}

3. subscription.trialing, subscription.active

{

  "event": "subscription.trialing",

  "chargeId": "CHARGE\_ID",

  "ghlTransactionId": "GHL\_TRANSACTION\_ID",

  "ghlSubscriptionId": "GHL\_SUBSCRIPTION\_ID",

  "marketplaceAppId": "MARKETPLACE\_APP\_ID",

  "locationId": "LOCATION\_ID",

  "apiKey": "API\_KEY\_XXXXXXX"

}

4. subscription.charged

{

  "event": "subscription.charged",

  "chargeId": "CHARGE\_ID",

  "ghlSubscriptionId": "GHL\_SUBSCRIPTION\_ID",

  "subscriptionSnapshot": { },

  "chargeSnapshot": { },

  "locationId": "LOCATION\_ID",

  "apiKey": "API\_KEY\_XXXXXXX"

}

* * *

### 11.5 subscriptionSnapshot Schema

{

  "id": "SUBSCRIPTION\_ID",

  "status": "trialing",

  "trialEnd": 1724217600,

  "createdAt": 1724217600,

  "nextCharge": 1726896000

}

Field reference  

-   id (string) – Subscription ID in your system.
    
-   status (string) – One of: trialing, active, expired, canceled, unpaid, pending.
    
-   trialEnd (number) – Unix timestamp (seconds) when the trial ends.
    
-   createdAt (number) – Unix timestamp when the subscription was created.
    
-   nextCharge (number) – Unix timestamp of the next scheduled charge.
    

* * *

### 11.6 chargeSnapshot Schema

{

  "status": "succeeded",

  "amount": 10000,

  "chargeId": "CHARGE\_ID",

  "chargedAt": 1724217600

}

Field reference  

-   status (string) – succeeded, failed, or pending.
    
-   amount (number) – Charge amount (often minor units: actual amount × 100).
    
-   chargeId (string) – Charge/Payment ID in your system.
    
-   chargedAt (number) – Unix timestamp (seconds) when the charge was completed.
    

  
12\. Testing & Go-Live Checklist

Use this checklist to validate your integration:

1.  Marketplace App
    
    -   App created in Marketplace with correct scopes.
        
    -   Settings, Payment Provider, Profile, and Custom Page configured.
        
2.  OAuth & Installation
    
    -   Redirect URL receives code.
        
    -   Backend exchanges code for access token.
        
    -   App install/uninstall webhooks are handled.
        
3.  Provider Config
    
    -   Create Public Provider Config called on install.
        
    -   queryUrl and paymentsUrl correctly set.
        
4.  Test/Live Config
    
    -   Test credentials collected on Custom Page.
        
    -   Connect Config API called for test and live modes.
        
    -   Provider set as default in Payments > Integrations.
        
5.  Checkout iFrame
    
    -   Emits custom\_provider\_ready.
        
    -   Handles payment\_initiate\_props.
        
    -   Emits success/error/close responses.
        
    -   Backend handles verify correctly (success/failed/pending).
        
6.  Saved Payment Methods
    
    -   Supports addCardOnFileSupported.
        
    -   Handles setup\_initiate\_props.
        
    -   Implements list\_payment\_methods and charge\_payment.
        
7.  Manual Subscriptions
    
    -   Capabilities updated to enable subscription schedules.
        
    -   Handles create\_subscription and returns proper snapshots.
        
8.  Refunds
    
    -   Supports type: "refund" requests.
        
9.  Webhooks
    
    -   Webhooks sent to HighLevel with correct event types and payloads.
        
10.  Final Testing
     

-   End-to-end flows validated in test mode.
    
-   Critical paths re-tested in live mode before launch.
    

  

##   
13\. Frequently Asked Questions

Q: What languages or frameworks can I use to build a custom payment integration?  
HighLevel’s APIs are language-agnostic. You can use any language that can make HTTP requests and handle JSON, such as Node.js, Python, Ruby, PHP, or Java.  

* * *

Q: Can I test my custom payment integration before going live?  
Yes, use the test mode configuration and sandbox details from your payment provider to simulate payments without charging real cards or bank accounts.  

* * *

Q: How should I handle logging and error monitoring?  
Implement your own logging for:

-   Requests to/from queryUrl
    
-   Webhooks you send to HighLevel
    
-   Responses from HighLevel APIs
    

This will help you debug and monitor production issues.

* * *

Q: Can I integrate multiple payment gateways?  
Yes. You can:

-   Create distinct configurations per gateway on your backend
    
-   Use logic to route requests to different gateways based on location, currency, or business rules  
    

  

* * *

Q: My subscription stays “Incomplete” even after I send a subscription.active webhook. What am I missing?

The verify response, not the webhook, is what actually updates the subscription status inside HighLevel.

When HighLevel calls your queryUrl with type: "verify", your response should include both the charge and subscription state. For example:

{

  "success": true,

  "failed": false,

  "message": "",

  "chargeSnapshot": {

    "id": "payment-id",

    "status": "succeeded",

    "amount": 10000,

    "chargeId": "your\_charge\_id",

    "chargedAt": 1724217600

  },

  "subscriptionStatus": "active",

  "subscriptionSnapshot": {

    "id": "your\_subscription\_id",

    "status": "active",

    "trialEnd": 0,

    "createdAt": 1724217600,

    "nextCharge": 1726896000

  }

}

Key points:

-   success: true + a valid chargeSnapshot marks the transaction/order as successful.
    
-   subscriptionStatus and subscriptionSnapshot tell HighLevel what the subscription state should be.
    
-   If these subscription fields are missing or incorrect, the subscription may remain Incomplete even if you sent a subscription.active webhook.
    

* * *

Q: When exactly should I send subscription.trialing, subscription.active, and subscription.charged webhooks?

Use the webhooks to reflect the real subscription state in your system at that moment:

-   subscription.trialing  
    Send right after you create a trial subscription with no initial charge.
    
-   subscription.active  
    Send after the first successful charge that moves the subscription from trial/pending into an active billing state.
    
-   subscription.charged  
    Send after every recurring charge, including the first one if you want a complete charge timeline inside HighLevel.
    

Think of webhooks as asynchronous “state notifications”. The verify response is still the primary signal HighLevel uses to set the initial subscription state.

* * *

Q: Should I send subscription webhooks before or after the verify step?

The recommended flow for a checkout-based subscription is:

1.  Customer completes checkout in your iframe.
    
2.  Your iframe posts a success event back to HighLevel (with your chargeId, and optionally your subscription id).
    
3.  HighLevel calls your queryUrl with type: "verify".
    
4.  You return a verify response with success/failed, chargeSnapshot, and optional subscriptionStatus/subscriptionSnapshot.
    
5.  Your system can also send the relevant webhook (subscription.trialing, subscription.active, or subscription.charged) based on its own internal events.
    

The exact ordering between webhooks and verify is not critical; HighLevel always trusts the verify response as the source of truth for the initial subscription state. Webhooks are there to keep HighLevel in sync for later changes (future charges, status transitions, etc.) and as a fallback if verify fails.

* * *

Q: How do I handle subscriptions that start in “trialing” with no initial payment?

For trial-only starts (no upfront charge):

1.  In your system, create the subscription with status trialing and a future nextCharge date.
    
2.  In the iframe flow, still send a success event back to HighLevel so it can call verify (even though no money was charged).
    
3.  In your verify response, include at least:
    

{

  "success": true,

  "failed": false,

  "subscriptionStatus": "trialing",

  "subscriptionSnapshot": {

    "id": "your\_subscription\_id",

    "status": "trialing",

    "trialEnd": 1724217600,

    "createdAt": 1724217600,

    "nextCharge": 1726896000

  }

}

This moves the subscription inside HighLevel from Incomplete → Trialing without any initial payment. A subscription.trialing webhook is optional but can be sent as an async confirmation.

* * *

Q: Who is responsible for running recurring billing cycles for custom payment providers?

HighLevel does not run recurring billing for custom payment providers.

Your integration must:

-   Store the subscription schedule (start date, interval, trial, total cycles, etc.)
    
-   Charge the customer on each billing date using your payment gateway
    
-   Stop charging when the subscription is canceled, expired, or completes its cycles
    
-   Send a subscription.charged webhook to HighLevel after every successful recurring charge
    

HighLevel uses these webhooks (plus any future verify calls) to keep its subscription timeline and status in sync with your system.

* * *

Q: What’s the difference between checkout-based subscriptions and admin-created subscription schedules?

There are two main flows:

1.  Checkout (iframe) flow
    
    -   A customer checks out from a HighLevel funnel/page with mode: "subscription".
        
    -   HighLevel creates an Incomplete subscription and a Pending transaction.
        
    -   HighLevel loads your paymentsUrl iframe and later calls verify.
        
    -   Your verify response (and optional webhooks) sets the initial subscription status and first charge.
        
2.  Manual / admin-created subscription schedule (API-only) flow
    
    -   An admin creates a subscription or schedule directly in HighLevel (for now, powered by your custom provider).
        
    -   HighLevel calls your queryUrl with type: "create\_subscription".
        
    -   You respond immediately with:
        
        -   A subscriptionSnapshot (required)
            
        -   Optional transaction/chargeSnapshot if there is an initial charge
            
    -   Your response directly updates the subscription status in HighLevel; there is no iframe or verify step in this flow.
        
    -   You then run the schedule over time and send subscription.charged webhooks for each billing event.
        

* * *

Q: What if the transactionId in the verify request doesn’t match the transaction I see in my system?

In some edge cases (multiple attempts, cancels, retries), the transactionId HighLevel sends might not line up 1:1 with a single gateway record on your side.

Best practices:

-   Use all identifiers in the request for lookup, not just transactionId:
    
    -   transactionId (HighLevel)
        
    -   chargeId (your gateway’s payment identifier)
        
    -   subscriptionId (HighLevel subscription id)
        
    -   Any contact/location context you track
        
-   Prefer chargeId when querying your gateway, since this is usually the primary payment identifier in your system.
    
-   If you truly can’t reconcile a transactionId:
    
    -   Log the entire verify payload and how you handled it.
        
    -   Ensure you’re returning a consistent chargeSnapshot and subscriptionSnapshot for the payment that actually succeeded.
        

Your goal is to make sure that, for each HighLevel transaction, you can return a truthful snapshot of the real payment and subscription in your system.

* * *

Q: Why do cards saved via my custom provider show up when creating a subscription, but not under Contact → Payments → Manage Cards?

Right now, cards saved via custom payment providers work like this:

-   They are available when creating subscriptions and choosing a saved card for that contact (using your list\_payment\_methods and charge\_payment logic).
    
-   They do not currently appear in the Contact → Payments → Manage Cards screen in the HighLevel UI.
    

This is expected behavior with the current implementation and not an error in your integration. Full visibility/management of custom-provider cards in the “Manage Cards” section is planned as a future enhancement.

  

* * *

Q: Is there a API only doc for custom provider with sample packages?  
  
Right now Yes you may refer this -, [https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider/index.html](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider/index.html)