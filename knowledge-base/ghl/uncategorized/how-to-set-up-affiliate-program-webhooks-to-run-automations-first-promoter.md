---
title: "How to Set Up Affiliate Program Webhooks to Run Automations (First Promoter)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001163126-how-to-set-up-affiliate-program-webhooks-to-run-automations-first-promoter-"
category: "Uncategorized"
---

# How to Set Up Affiliate Program Webhooks to Run Automations (First Promoter)

In this article, we will cover how to set up webhooks for your affiliate links so that you can run automation off sales when someone signs up using your affiliate link.

  

  

**NOTE:** 

This Article is for the [HighLevel Affiliate Program](https://help.gohighlevel.com/support/solutions/folders/48000666024), **NOT** [Affiliate Manager Feature](https://help.gohighlevel.com/en/support/solutions/articles/48001223169) found in your sub-accounts.

As an affiliate, you can enroll in any HighLevel Plan. If you want to track your referrals for HighLevel **Starter** **Plan** ($97/month) or HighLevel **Agency Unlimited** ($297/month) using webhooks, please contact the support team. 

Request to set up your "**HighLevel General Affiliate Campaign**" webhooks, as shown in the video below. 

If you want to track your referrals for HighLevel **Agency Pro** ($497/month) with webhooks, request to set up your "**Supercharged [SaaS Program](https://www.gohighlevel.com/ssp)**" webhooks, which are the same as the ones shown in the video below. 

Please follow the general process outlined below. Also, inform the support team if you want the webhooks you submitted to apply to referrals for the Supercharged SaaS Program ($497/month).

  

  

#### **M****entioned Documentation:**

[How to use the Inbound Webhook Workflow Premium Trigger?](https://help.gohighlevel.com/en/support/solutions/articles/48001237383)

[How to enable and rebill LC Premium Triggers & Actions for Workflows](https://help.gohighlevel.com/en/support/solutions/articles/48001231559)

You can sign up for Postman for free by [clicking on this link:](https://www.postman.com/)

  

Once you have setup and tested all 5 steps, add the corresponding Webhooks for each, then copy and paste this into a seperate doc to be shared with support (See example below).   
  
**Example of what to** **send to support:**  
  
I would like webhooks activated for my affiliate link: \[Insert Affiliate Link\]  
  
**Step 1:** lead\_subscribed on – \[Insert inbound Webhook URL\]  
**Step 2:** lead\_signup on – \[Insert inbound Webhook URL\]  
**Step 3:** lead\_becomes\_referral on – \[Insert inbound Webhook URL\]  
**Step 4:** reward\_created on – \[Insert inbound Webhook URL\]  
**Step 5:** lead\_cancelled on – \[Insert inbound Webhook URL\]  
\_\_\_

  

##   
Paste this webhook sample into [Postman:](https://www.postman.com/)

{
    "event": {
        "id": null,
        "type": "",
        "created\_at": ""
    },
    "data": {
        "id": null,
        "state": "",
        "email": "",
        "uid": null,
        "customer\_since": null,
        "cancelled\_at": null,
        "plan\_name": null,
        "suspicion": "",
        "username": null,
        "website": null,
        "created\_at": "",
        "split\_promotion\_id": null,
        "custom\_fields": {
            "name": "",
            "company\_name": "",
            "phone\_number": ""
        },
        "split\_percentage\_value": null,
        "promotion": {
            "id": null,
            "status": "",
            "ref\_id": "",
            "promo\_code": null,
            "customer\_promo\_code": null,
            "target\_reached\_at": null,
            "promoter\_id": null,
            "campaign\_id": null,
            "referral\_link": "",
            "current\_offer": null,
            "current\_referral\_reward": null,
            "current\_promotion\_reward": null,
            "current\_target\_reward": null,
            "campaign\_name": "HighLevel Affiliate Program",
            "hidden": false,
            "visitors\_count": null,
            "leads\_count": null,
            "customers\_count": null,
            "refunds\_count": null,
            "cancellations\_count": null,
            "sales\_count": null,
            "sales\_total": null,
            "refunds\_total": null,
            "active\_customers\_count": null
        },
        "promoter": {
            "id": null,
            "cust\_id": "",
            "email": "",
            "created\_at": "",
            "temp\_password": "",
            "default\_promotion\_id": null,
            "pref": "",
            "default\_ref\_id": "",
            "note": null,
            "w8\_form\_url": null,
            "w9\_form\_url": null,
            "parent\_promoter\_id": null,
            "earnings\_balance": {
                "cash": null
            },
            "current\_balance": {
                "cash": null
            },
            "paid\_balance": null,
            "auth\_token": "",
            "profile": {
                "id": null,
                "first\_name": "",
                "last\_name": "",
                "website": "",
                "company\_name": "",
                "phone\_number": "",
                "address": "",
                "vat\_id": "",
                "country": "US",
                "paypal\_email": "",
                "avatar\_url": "",
                "description": null,
                "social\_accounts": {
                    "twitter": {
                        "url": ""
                    },
                    "youtube": {
                        "url": ""
                    },
                    "facebook": {
                        "url": ""
                    },
                    "linkedin": {
                        "url": ""
                    },
                    "instagram": {
                        "url": ""
                    }
                }
            },
            "promotions": \[
                {
                    "id": null,
                    "status": "offer\_inactive",
                    "ref\_id": "",
                    "promo\_code": null,
                    "customer\_promo\_code": null,
                    "target\_reached\_at": null,
                    "promoter\_id": null,
                    "campaign\_id": null,
                    "referral\_link": "",
                    "current\_offer": null,
                    "current\_referral\_reward": null,
                    "current\_promotion\_reward": null,
                    "current\_target\_reward": null,
                    "campaign\_name": "HighLevel Affiliate Program",
                    "hidden": false,
                    "visitors\_count": null,
                    "leads\_count": null,
                    "customers\_count": null,
                    "refunds\_count": null,
                    "cancellations\_count": null,
                    "sales\_count": null,
                    "sales\_total": null,
                    "refunds\_total": null,
                    "active\_customers\_count": null
                },
                {
                    "id": null,
                    "status": "offer\_inactive",
                    "ref\_id": "",
                    "promo\_code": null,
                    "customer\_promo\_code": null,
                    "target\_reached\_at": null,
                    "promoter\_id": null,
                    "campaign\_id": null,
                    "referral\_link": "",
                    "current\_offer": null,
                    "current\_referral\_reward": null,
                    "current\_promotion\_reward": null,
                    "current\_target\_reward": null,
                    "campaign\_name": "Supercharged SaaS Program",
                    "hidden": false,
                    "visitors\_count": 0,
                    "leads\_count": 0,
                    "customers\_count": 0,
                    "refunds\_count": 0,
                    "cancellations\_count": 0,
                    "sales\_count": 0,
                    "sales\_total": 0,
                    "refunds\_total": 0,
                    "active\_customers\_count": 0
                }
            \]
        }
    }}

  

  

  

* * *

# **Step-by-step guide on setting up affiliate program webhooks.**

  
The Webhooks that we have on FirstPromoter are as follows:

-   Lead Subscribed - Step one of the two-step sign-up form (if you want to nurture leads that have not signed up for a trial)
-   Lead Signup -  Step two of the two-step Sign up form (Nurture leads that started a trial)
-   Lead Converted to Customer (they made their first payment)
-   Reward Generated (Anytime they make a qualifying payment)
-   Lead Canceled (lead or customer has no more active subscriptions on their account)

  
  

### **1\. Head into your Sub-account > Click on the Automation tab > Create New Workflow**

Proceed to create your first Workflow: "**Step 1:** lead\_subscribed on."

  
This will be the webhook that fires whenever someone fills out Step one of the two-step sign-up form (if you want to nurture leads that have not signed up for a trial)

  

  

### 2\. **Create an inbound webhook trigger > Copy the inbound webhook URL string**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472156/original/D8K4WoHieDpsboJJ6NiauGwe2UxCeiyF6A.gif?1692302700)

  

  

  

### 3\. Open up [Postman](https://www.postman.com/) and follow the steps below:

1.  Use HTTP Request Method
2.  Select "Post"
3.  Paste the webhook URL (The one you copied from the workflow in the step above) 
4.  Select "**Body**" then "**Raw**" & select "**JSON"** as the text file
5.  Copy the First Promoter Sample data given above into the Body (should be blue)
6.  Hit "Send"
7.  Please ensure that you receive a successful response, or kindly begin from the beginning.[](https://help.gohighlevel.com/support/solutions/articles/48001204857-ways-to-get-highlevel-support-24-)  
    [](https://help.gohighlevel.com/support/solutions/articles/48001204857-ways-to-get-highlevel-support-24-)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472107/original/fehetlVYShwoPGCqVMrbGJvw4IdADgr2ew.gif?1692302530)

  

  

### 4\. Return to your Workflow and hit the "**fetch sample**" button within the trigger.

Grab and select the sample, then proceed to map out the action fields:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471669/original/mXv0wktff8D09tbw0WMec1lBCSOw4JiPkQ.gif?1692301604)

  

  

### 5\. Map out the fields using the data from the inbound webhook

-   Full name
-   Email
-   Phone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471714/original/UnO476vTu9l0HV4IIy5LhnN4Ad9bZaJbNg.png?1692301737)

  

### 6\. Repeat this process four more times for the remaining webhooks

1.  Clone workflow
2.  Open and grab the webhook
3.  Head back into Postman
4.  Paste Code in Postman, and on the doc, you will be sent to support
5.  Hit "send" in Postman
6.  After success request, jump back into your workflow
7.  Hit "fetch samples" and select the new data
8.  Repeat until you have completed all 5 webhooks

###   
7. Open a live chat with support via the icon in the Agency View of your account

> ### 
> 
> I would like webhooks activated for my affiliate link: \[Insert Affiliate Link\]

> **My New Lead webhook is:**  
> **Step 1:** lead\_subscribed on – \[Insert inbound Webhook URL\]  
> **Step 2:** lead\_signup on – \[Insert inbound Webhook URL\]  
> **Step 3:** lead\_becomes\_referral on – \[Insert inbound Webhook URL\]  
> **Step 4:** reward\_created on – \[Insert inbound Webhook URL\]  
> **Step 5:** lead\_cancelled on – \[Insert inbound Webhook URL\]

  

  
**Note:** 

For the Pro 497 Plan. Webhooks can only be made for  
\- **Lead Converted** to Customer (they made their first payment)  
\- **Reward Generated** (Anytime they make a qualifying payment)  
\- **Lead Canceled** (lead or customer has no more active subscriptions on their account)
- 

  
For Lead sign-up and Lead Subscribed, you only need to create one webhook to catch all HighLevel Plans.