---
title: "Enable Tap to Pay on your Whitelabelled Mobile App"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app"
category: "Uncategorized"
---

# Enable Tap to Pay on your Whitelabelled Mobile App

## **Overview**

This guide provides a comprehensive step-by-step walkthrough for enabling **Tap to Pay on iPhone** or on your **Android** **whitelabelled mobile app**.

  

Tap to Pay allows merchants to accept **contactless payments directly through their iPhone**, eliminating the need for additional payment hardware and creating a seamless checkout experience for both businesses and customers

* * *

## **Please Note**

-   You **must have an organization-level Apple Developer account** with Account Holder access.
    
-   Tap to Pay on iPhone is available only for **supported payment service providers (PSPs)**. HighLevel’s whitelabelled apps use **Stripe** or **Square** as the PSP.
    
-   Apple individually reviews entitlement & distribution requests before granting approval.
    
-   Tap to Pay on Android follows a **different, simpler process** — no prior approval is required.
    

* * *

## **Covered in this Article**

-   What is Tap to Pay on iPhone?
    
-   Enabling Tap to Pay: Process Overview
    
-   Step by Step process for Tap to pay on iPhone approval
    
-   Enabling Tap to Pay on Android
    
-   Support and Timeline
    
-   FAQs
    

* * *

## **What is Tap to Pay on iPhone?**

**Tap to Pay on iPhone** enables merchants to **accept contactless debit and credit cards, Apple Pay, and other digital wallets** using just their iPhone. This feature integrates directly with your HighLevel whitelabelled app, letting sub-accounts receive payments through their **connected Stripe** or **Square account**.

  

Apple requires each app to have an **entitlement** & **distribution** to use this feature, which is granted upon approval through the **Tap to Pay on iPhone Entitlement Request Form**.

* * *

## **Enabling Tap to Pay: Process Overview**

The setup process consists of **three main steps**:  
  

**1\. Request Tap to Pay on iPhone Entitlemen**

**2\. Await Apple’s Review and Entitlement Addition**  
**3.** **Submitting requirements for Tap to pay distribution approval**  
**4\. Await Apple’s Review and Distribution Addition**

**5\. Pushing update with Tap to pay distribution permission**

  

Once approved, you can **request an update** for your white labelled app through Mobile app customiser to enable Tap to Pay functionality.

* * *

## **Step 1: Request Tap to Pay Entitlement**

### **Prerequisite**

-   You must be logged in as the **Account Holder** of your **organization-level Apple Developer account**.
    
-   Go to Apple’s official request page - [Tap to Pay on iPhone Entitlement Request Form](https://developer.apple.com/contact/request/tap-to-pay-on-iphone/)
    

  

### **Action**

-   Complete and submit the request form.
    
-   Select your PSP as **Stripe** or **Square**.
    

  

Refer to the  **sample document table** for a guide on how to accurately complete each field.

  

Below are key entries based on the sample form:

| 
**Field**

 | 

**Response Example**

 |
| --- | --- |
| 

PSP

 | 

Stripe

 |
| 

Organization

 | 

Your organization name

 |
| 

Name

 | 

Organization's owner name

 |
| 

Email

 | 

Your organization's primary email

 |
| 

Distribution

 | 

App Store and Apple Business Manager

 |
| 

Onboarding Description

 | 

Merchants are onboarded via the web app as sub-accounts. Once connected to Stripe, they can sign in on mobile to process payments.

 |
| 

Countries/Regions

 | 

List all the countries or regions where your clients will use Tap to Pay, in order of release.

 |

Ensure that all responses **match the provided sample document** for a successful approval process .

* * *

## **Merchant Onboarding Process**

Merchant onboarding primarily occurs through the **HighLevel web app**:

1.  The main account owner adds merchants as **sub-accounts**.
    
2.  Each merchant connects their **Stripe** or **Square account** via the web interface.
    
3.  Merchants then sign in to the **mobile app using sub-account credentials** to start accepting payments directly into their Stripe accounts.
    

  

This structure ensures a smooth and independent onboarding process for each merchant.

  

### **Review Process**

  

Apple reviews each request based on the provided details and eligibility.

Once approved, the **Tap to Pay entitlement** will appear under your account’s **Managed Capabilities**.

  

## **Step 2: Entitlement Addition by Apple**

  

Once Apple approves your application:

-   The **Tap to Pay entitlement** will be added to your developer account.
    
-   Notify your HighLevel account representative to proceed with next step.
    

  

  

## **Step 3: Submitting requirements for Tap to pay distribution approval**

  

**Once the entitlement addition by Apple was granted need to proceed with requirements shared by Apple team which includes Demo video and requirement checklist.**

  

## **Step 4: Await Apple’s Review and Distribution Addition**

  

Will wait to get approval on the Distribution addition upon submitted assets.

  

## **Step 5: Pushing update with Tap to pay distribution permission**

  

Once the distribution access was granted, need to push app update to get the feature Tap to Pay on iPhone live for all the apps.

  

## **Enabling Tap to Pay on Android**

Unlike iOS, **Tap to Pay on Android** does **not require Google's approval** or entitlement requests.

To enable Tap to Pay on Android:

-   Request a **whitelabel app update** following the standard HighLevel update request process.
    
-   Once updated, your Android app will automatically support Tap to Pay payments.
    

* * *

## **Support and Timeline**

### **Support Channels**

-   **Apple Developer Support:** For issues related to the entitlement process.
    
-   **HighLevel Support Team:** For app updates or integration-related concerns.
    

  

### **Expected Timeline**

Apple’s review time can vary — typically ranging from **a few days to several weeks**.

Plan your app release timelines accordingly to account for review delays.

* * *

## **FAQs**

  

**Q1: Do I need to pay extra for the Tap to Pay entitlement?**

No. The entitlement itself is free, but Apple must approve it before it becomes active.

  

**Q2: Can I use Tap to Pay without Stripe integration?**

No. HighLevel’s Tap to Pay implementation currently supports **Stripe** and **Square only** as the payment service provider.

  

**Q3: How long does the approval process take?**

While Apple doesn’t specify an exact timeframe, approvals typically take **1–6 weeks** depending on account eligibility.

  

**Q4: What happens if my entitlement request is rejected?**

You can resubmit with corrected information or contact Apple Developer Support for clarification.

  

**Q5: Is Tap to Pay available globally?**

Availability depends on **Apple’s regional rollout** and **Stripe’s country support**. Ensure you list all intended countries in your request form.

* * *