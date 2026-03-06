---
title: "SaaS Mode - Full Setup Guide + FAQ"
url: "https://help.gohighlevel.com/support/solutions/articles/48001184920-saas-mode-full-setup-guide-faq"
category: "Uncategorized"
---

# SaaS Mode - Full Setup Guide + FAQ

With HighLevel's SaaS mode, agencies can offer their clients a personalized and fully integrated experience using a platform that can be resold under their brand. The white labeling feature ensures that all traces of HighLevel branding are removed from the platform, providing agencies with a simple and cost-effective way to expand their services and generate more recurring revenue.

  

#### **Covered in this Article**

  

-   [What is SAAS?](#What-is-SAAS?)[](#Why-use-Highlevel's-SaaS-Mode?)
    
-   [Why use Highlevel's SaaS Mode?](#Why-use-Highlevel's-SaaS-Mode?)
    
-   [A Step-by-step Setup Guide to SaaS Mode](#A-Step-by-step-Setup-Guide-to-SaaS-Mode)[](#Agency-Account-Setup)
-   [Agency Account Setup](#Agency-Account-Setup)[](#Sub-Account-Setup)
-   [Sub-Account Setup](#Sub-Account-Setup)
-   [Troubleshooting](#Troubleshooting)

* * *

## **What is SAAS?**

  
SaaS stands for "Software-as-a-Service." It is a delivery model for software applications where the software is hosted in the cloud and provided to users over the Internet on a subscription basis. With SaaS, users can access the software and its features through a web browser without installing or maintaining any software locally on their computer or device. SaaS has become a popular model for software delivery as it offers benefits such as easy scalability, automatic updates, lower upfront costs, and greater accessibility. Many popular software solutions, including email marketing platforms, customer relationship management (CRM) systems, and project management tools, are provided as SaaS offerings.

  

* * *

## **Why use Highlevel's SaaS Mode?  
**

  

  

HighLevel's SaaS mode is an exceptional feature that enables agencies to utilize the software and rebrand it as their own. This functionality empowers agencies to create a personalized version of the HighLevel platform for their clients while still benefiting from the robust features and functionalities of the original HighLevel platform.

  

Moreover, HighLevel's SaaS mode offers white labeling, which allows agencies to fully customize the software as their own, without any visible traces of HighLevel's branding. This feature provides clients with a seamless and integrated experience, making it simpler for agencies to offer their services. Additionally, HighLevel's SaaS mode is effortless to set up, convenient, and cost-effective, making it an attractive option for agencies that want to expand their service offerings and generate more recurring revenue.

  

* * *

# **A Step-by-step Setup Guide to SaaS Mode**

  
**Please Note:** 

  

Stripe is the default payment processor for SaaS products. Other payments gateways are not currently supported. If you would like to build your own custom SaaS plans using zapier please see - [Creating Sub-Accounts using Zapier](https://help.gohighlevel.com/en/support/solutions/articles/48001207048)

##   

## **Agency Account Setup**  
  

### **Step 1: Create an Agency Sub-Account** - (Skip if you have already completed this step)

  

  

### **St****ep 2: Activating Telephony System** \- (Skip if you have already completed this step)

  
[**How do I migrate my agency and sub-account over to LC Phone?**](https://help.gohighlevel.com/en/support/solutions/articles/48001204027)

  
**[What is LC - Phone System?](https://help.gohighlevel.com/en/support/solutions/articles/48001223546)**

  
**[LC - Phone Pricing Structure](https://help.gohighlevel.com/en/support/solutions/articles/48001223556)**

  
**[LC - Phone System Trust Center](https://help.gohighlevel.com/en/support/solutions/articles/48001225526)**

  
**[All LC - Phone Help Docs](https://help.gohighlevel.com/support/solutions/folders/48000682872)**

  

### **Step 3: Setup White-labeled Login Domain** \- (Skip if you have already completed this step)

[](https://help.gohighlevel.com/en/support/solutions/articles/48000982207)

  
[**White Label the Desktop App**](https://help.gohighlevel.com/en/support/solutions/articles/48000982207)

  

  

### **Step 4: Setup API Domain URL** \- (Skip if you have already completed this step)

[](https://help.gohighlevel.com/en/support/solutions/articles/48001143244)

  
[**How to Brand System-Generated Links (API Domain)**](https://help.gohighlevel.com/en/support/solutions/articles/48001143244)

  

##   

### **Step 5: Upload Logo & Activate Premium features** \- (Skip if you have already completed this step)

[](https://help.gohighlevel.com/support/solutions/48000456107)[](https://help.gohighlevel.com/support/solutions/48000456107)  
[**Content AI**](https://help.gohighlevel.com/support/solutions/48000456107)[](https://help.gohighlevel.com/support/solutions/48000456107)

  
[**How to enable and rebill LC Premium Triggers & Actions for Workflows**](https://help.gohighlevel.com/en/support/solutions/articles/48001231559) 

  
**[How to Enable and Rebill Workflow AI?](https://help.gohighlevel.com/en/support/solutions/articles/155000000169)** 

  
**[How does the Template Library work?](https://help.gohighlevel.com/en/support/solutions/articles/48001236650)**

  
**[Optimize Experience Features](https://help.gohighlevel.com/en/support/solutions/articles/48001191827)** 

##   

### **Step 6: Connect Stripe Account on the (Agency Level)** \- (Skip if you have already completed this step)

###   

### Connect your agency Stripe account to enable SaaS billing and other agency-level payment flows that depend on Stripe Connect.

###   

### **Who can access this page**

###   

### Only **Agency Owners** and **Agency Admins** can access Stripe Connect settings in Agency view. 

###   

### **How to connect**

  

1.  In **Agency view**, go to **Settings → Stripe Connect**.  
      
    
2.  Click **Connect to Stripe** and complete the prompts in Stripe.  
      
    
3.  Return to HighLevel and confirm the status shows as connected.

**_If you see an error (revoked access):_** _If Stripe access is revoked from the Stripe side, HighLevel shows a clear error with a **Reconnect** call-to-action so you can restore the connection._

  

  

### **Step 7: SaaS Configurator Setup - Configuring Your Plans & Features**  
  

-   Agency account > Plan Configurator  
      
    
-   Build your plans, set your pricing, select your trial, add Twilio credits, attach snapshots, and choose Twilio rebilling profit.   
      
    
-   Click "Show Stripe Product Details" to copy the Stripe plan ID under each price.

  

  

**Note:**
1. You may create only up to 20 SaaS plans per agency account.
_2\. These plans are created in the Agency's Stripe account and Must NOT be deleted from there._

* * *

## **Sub-Account Setup**  
  

### **Step 8: General Business Settings** \- (Skip if you have already completed this step)

  

### **Step 9: Website Domain Setup** \- (Skip if you have already completed this step)

  

### **Step 10: Purchasing a Phone Number** \- (Skip if you have already completed this step)

  

### **Step 11:** **Calendar Configuration** \- (Optional)

  
In case you plan to conduct any in-person demos or intend to make use of the calendar feature, kindly go ahead and set it up. Once you have finished setting it up, when setting up your sales page (Step 14) you can add an additional booking page to your website/funnel for the calendar you have created.

  

  

### **Step 12: Integrating Stripe on the Sub-Account Level (Where you will sell your SaaS)** \- (Skip if you have already completed this step)

  

### **Step 14: Import SaaS Config Plans & Setting up your Sales Page** 

  

**Note:** Only Stripe works for SaaS products; PayPal will not work.

  
**Step 3.1:** Copy Stripe ID from SaaS Configurator

  
**Step 3.2:** Head into your SaaS Selling Location **\>** Payments tab

  
**Step 3.3:** Click on "**\+ Import from Stripe**" button

  
**Step 3.4:** Paste Stripe ID from Step 1: You will see (agency plan) when selecting your price

  
**Step 3.5:** Add Setup fee (optional)

  
**Step 3.6:** Hit "**Import Product & Price**"

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48203039338/original/6FhY8gXcy9Jxf9d0DDvmhxn0wIErDxIDyg.gif?1647530281)**

###   

### **Setting up your Funnel/ Website**

  
**Step** **3.7:** After importing all prices for your SaaS Funnel, go to Sites > Funnels > Add a new funnel or website

  
**Step 3.8: Add your imported products to the sales page** 

  
**Step 3.9:** Add 1-Step or 2-Step Order Form to the page

  

You're ready to go!  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48203102531/original/NsPhGbZi4ZhZGvtS98QHEmdAYjUFi9fvSA.gif?1647536892)

  

  

### **Step 15: Workflow Setup to notify you of 'New Sign-ups'**

  

### **Step 16:** **Build A Notification Workflow & Testing Your SaaS Flow**

  
You'll most likely want to build a Workflow to notify yourself when a new SaaS Customer signs up so that you can kick off whatever onboarding you have planned and [purchase a white-labeled DFY setup](https://speakwith.us/saas-setup).  
  

-   Create a new Workflow.  
      
    
-   Click "Add New Workflow Trigger," search & select "Order Form Submission," add a filter for "In Funnel/Website," then specify the funnel that contains your sales page.   
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291173333/original/5Ur4r6hJI-WqTkvKMELsJ6wWvXK7SyPUNw.png?1680684849)

  

  

* * *

# **Troubleshooting**

  

### **What happens when someone signs up?**

  
When a SaaS Subscription is sold (meaning someone signs up for one of your plans that was created via the SaaS Configurator via a 2-Step order form), the following occurs:  
  

-   A location/sub-account is created using the First & Last Name entered into the 2-Step Order Form as the Location Name  
      
    
-   A User is created using the First Name, Last Name, and Email entered into the 2-Step Order Form, and a password is generated.  
      
    
-   Location permissions are applied to the sub-account based on the feature set of the purchased plan in the SaaS Configurator.  
      
    
-   SaaS Mode is enabled for the sub-account  
      
    
-   Twilio Rebilling is enabled for the sub-account according to the Rebilling settings in the SaaS Configurator.  
      
    
-   An email is sent from your default Mailgun sending subdomain to the user that was created containing the username & password (if you don't have your own Mailgun configured, the Email is sent from replies.leadconnectorhq.com)

  

### **Can clients control their rebilling settings?**

  
Yes, clients can view their current credit balance and all usage/charges and configure their re-charge settings by going to Settings > Company Billing.

  

### **Can I sell SaaS Mode in a different currency?**

  
Yes, you need to create your SaaS plans like usual, go into Stripe, edit the Product price, change the currency, then manually edit the Product settings in your funnel/website sales page. and

  

**Please Note:**  
  

This edit cannot be made after the product has an active subscription. 
  
The Twilio rebilling will still function in US dollars.

  

### **Why is my subaccount not created when purchasing on the SaaS funnel?**

  
SaaS subaccount will not be created in the following cases:  
  

-   The price purchased is not a SaaS price (the price must be located inside the SaaS product made in Stripe)  
      
    
-   Purchase is in Test mode  
      
    
-   Purchase is not in Stripe (using PayPal instead)  
      
    
-   The Email used for purchase already has an account associated with it (use a different email for purchasing a new subaccount)

  

### **Can I use SaaS Mode just for Twilio Rebilling (no plans)?** 

  
Yes, you can manually activate SaaS Mode for any existing sub-account by going to your Agency Account > Sub-Accounts tab, scrolling to the sub-account, clicking the three-dot icon to the right of the sub-account, and selecting "Switch To SaaS."

  

### **What about Tax?**

  
If you have customers who have already purchased, log into Stripe and go to Products > Tax Rates, where you can add Tax ("inclusive" means your agency will cover the Tax - "exclusive" means the Customer will pay Tax on top of the plan price). After you create the Tax rate, copy the Tax Rate ID, go to the Customer> edit subscription, Add Tax, and select the rate you made. ([Use Stripe Checkout Pages](https://help.gohighlevel.com/en/support/solutions/articles/48001187056))

  

For new customers moving forward, you can dynamically calculate and apply accurate taxes in real-time by using a third-party Stripe integration, which you can find here: https://stripe.com/partners/apps-and-extensions/tax-calculation

  

### **How can I add my products/services to SaaS Products?**

  
Your customers only ever see what's on the sales page, so add the corresponding sales copy to your sales page, include whatever is needed for the product/service in your snapshot, and configure your price.

  

### **How can I change the price of SaaS Mode for a specific client?**

  
Log into Stripe, find the Customer, and edit their subscription.

  

### **Can I change the permissions of an existing SaaS Mode sub-account?**

  
Yes, to do so:  
  

1.  Go to your Agency Account > Sub-Accounts tab   
      
    
2.  Click the "Manage Client" link on the right side of the sub-account/location you want to adjust permissions for  
      
    
3.  Scroll to the "Enable/Disable Products" section to toggle on/off features.