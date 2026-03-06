---
title: "Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number."
url: "https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-"
category: "Uncategorized"
---

# Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.

**Overview**

HighLevel’s mobile and web apps are built to receive inbound SMS messages directly within the Conversations tab. However, by configuring a workflow with custom triggers and notifications, you can also forward these incoming messages notifications—though this will result in additional charges.

  

If you’d like incoming SMS messages to appear in the Conversations tab _and_ be automatically forwarded to a designated number as a notification, this guide will walk you through the process. By following the troubleshooting steps provided, you can ensure that every incoming message is successfully redirected to your chosen forwarding number.

  

  

**TABLE OF CONTENTS**

-   [Step 1: Create a Workflow](#Step-1%3A-Create-a-Workflow)
-   [Step 2: Start from Scratch](#Step-2%3A-Start-from-Scratch)
-   [Step 3: Add a Workflow Trigger](#Step-3%3A-Add-a-Workflow-Trigger)
-   [Step 4: Select “Customer Replied”](#Step-4%3A-Select-%E2%80%9CCustomer-Replied%E2%80%9D)
-   [Step 5: Add Filters](#Step-5%3A-Add-Filters)
-   [Step 6: Select Reply Channel](#Step-6%3A-Select-Reply-Channel)
-   [Step 7: Choose SMS](#Step-7%3A-Choose-SMS)
-   [Step 8: Click on Save Trigger](#Step-8%3A-Click-on-Save-Trigger)
-   [Step 9: Add an Action – Send Internal Notification](#Step-9%3A-Add-an-Action-%E2%80%93-Send-Internal-Notification)
-   [Step 10: Add Custom Values – Message Body](#Step-10%3A-Add-Custom-Values-%E2%80%93-Message-Body)
-   [Step 11: Add Custom Values – Contact First Name](#Step-11%3A-Add-Custom-Values-%E2%80%93-Contact-First-Name)

-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

  

* * *

  

  
We will only receive the inbound messages in the Conversation tab using Highlevel's mobile app and web app.

Incoming SMS will not be forwarded to the forwarding number

You set up a **Customer replied** workflow trigger like this with the Custom Value **{{message.body}}**  
  
**Steps to create a workflow-**

  

  

## **Step 1: Create a Workflow**

Navigate to **Automation > Workflows > Create Workflow**.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130737/original/95tUaOX4SPgqFWq8o42zKkLBOrb3tjWtdA.png?1758279172)

  

  

## **Step 2: Start from Scratch**

Click **Start from Scratch** and then select **Create New Workflow**.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130880/original/H-26rH1GF0MkZOOQL1iKd1V_1tzRhIcl5g.png?1758279262)

  

  

## **Step 3: Add a Workflow Trigger**

Click **Add New Workflow Trigger**.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131077/original/HOq864JsX-wWx1cruXGdObKDsvKSPJ05FA.png?1758279349)

  

## **Step 4: Select “Customer Replied”**

Choose **Customer Replied** as the workflow trigger.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131310/original/51XMxxiWX-u4o-Kl0w4oApwzqZDavHBnqw.png?1758279423)

  

## **Step 5: Add Filters**

Click **Add Filters**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131335/original/0fpNZPq7R2UlUM6JFbgvlu_PAdMnq6j2fQ.png?1758279461)

  

  

  

## **Step 6: Select Reply Channel**

In the filter options, select **Reply Channel**  
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131523/original/6qbjI1i223rfhQpNppjcwA_F6uARI6fPHw.png?1758279519)**

  

## **Step 7: Choose SMS**

From the reply channel dropdown, choose **SMS**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131571/original/g_oLzHXTS11l9bLBtjbxWzvvLXFKS_yKLw.png?1758279548)

  

  

  

## **Step 8: Click on Save Trigger**

  

Click on Please select action

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131595/original/o3pLYwY_EgdHXo0ZNMn7dVP5B-N8olGW_Q.png?1758279574)

  

## **Step 9: Add an Action – Send Internal Notification**

Choose **Send Internal Notification**.

⚠**Note:** SMS notifications will generate charges for each SMS sent.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131685/original/AUl9fAcdFRTqir3wrdvPRqlqpK14SQ55gg.png?1758279623)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131784/original/mK9gRU0NiByWvt9VPG3n_e-oUo4dLNKwFQ.png?1758279666)

## **Step 10: Add Custom Values – Message Body**

Navigate to **Custom Values > Message > Message Body**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131877/original/fUx-zzkaWf67vLqw4LGymFTCmAxkow8q8Q.png?1758279735)

  

  

## **Step 11: Add Custom Values – Contact First Name**

Navigate to **Contact > First Name** to include personalization.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054132059/original/CfQHim1rFFEmNoNrFnjOC4B78pxkyUJtrg.png?1758279821)

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**

-   [Workflow - Send SMS Actions](https://help.gohighlevel.com/a/solutions/articles/155000002474?portalId=48000045315)[](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)