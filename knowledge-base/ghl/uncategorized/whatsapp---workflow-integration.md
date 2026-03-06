---
title: "WhatsApp - Workflow Integration"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001624-whatsapp-workflow-integration"
category: "Uncategorized"
---

# WhatsApp - Workflow Integration

**In this article, we will discuss how WhatsApp can be integrated to create automated workflows on GoHighLevel**

* * *

**TABLE OF CONTENTS**

-   [How to Create a Automation Workflow](#How-to-Create-a-Automation-Workflow%C2%A0) 
-   [Automating WhatsApp Responses with Workflow Automation](#Automating-WhatsApp-Responses-with-Workflow-Automation)
-   [How to select the From Phone Number for Sending WhatsApp Messages](#How-to-select-the-From-Phone-Number-for-Sending-WhatsApp-Messages)
-   [How to configure wait for WhatsApp contact Reply](#How-to-configure-wait-for-WhatsApp-contact-Reply)
-   [How to configure Do Not Disturb (DND) for WhatsApp](#How-to-configure-Do-Not-Disturb-\(DND\)-for-WhatsApp)
-   [FAQs](#FAQs)

  

  

# How to Create a Automation Workflow 

#   

# Automating WhatsApp Responses with Workflow Automation

## Step 1: Create a New Workflow

-   Navigate to **Automations** → **Create Workflow**.
-   Select **"Start from Scratch"** to build a custom automation

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514048/original/HwQ3rYz6g05-6BZMg047Hhg9VnccwIxwwg.png?1743746351)

  

  

### **Step 2: Set Up a Trigger**

-   Click **Add New Trigger** and search for **"Customer Replied"**.

    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022183226/original/sUSMWm5-yNH4-0hOudq2E0OXOjwBnvx5UA.png?1709552281)**

  

### **Step 3: Apply WhatsApp-Specific Filters**

-   Add a filter: **Reply Channel** → Select **WhatsApp** to ensure this automation applies only to WhatsApp responses. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041857757/original/J9U3yH8vF3xbOT_-KX7iRU09yESPJboE_Q.png?1739954737)

  

### **Step 4: Define an Automated Action**

-   Click the **\+ (plus) button** to add an action.
-   Choose **WhatsApp** as the action type.     

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)**  

**Step 5: Enable Smart Branching (Optional)**

  

When using **WhatsApp flows or templates with buttons**, enabling branches provides powerful logic:

    •    **Flow Completed** – Fires when a user completes the WhatsApp flow

    •    **Undelivered** – Triggers if the message fails (e.g., user is unreachable)

    •    **Timeout** – Activates when the user doesn’t respond in time

  

Use this to send fallback messages, alerts, or next steps based on the customer’s behavior.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044476683/original/GcTMT6BtWryKXzdjpFX5RDuy_PRq2oD6Hg.png?1743684856)

  

### **Step 6: Save & Activate the Workflow**

-   Click **Save Action** → **Publish** → **Save** to activate your workflow.

# **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044514160/original/xRxAiLILrTTKgSBSNi3dblxDU04cR4uGXg.png?1743746562)**

#   

 **Note:** You can also send pre-approved WhatsApp message templates instead of manual text for standardized messaging.

  

By automating responses, you can ensure timely and professional communication with your customers while optimizing your business operations.

#   

# How to select the From Phone Number for Sending WhatsApp Messages

Note: Only Phone Number which have connected status will be available for Selection under the dropdown

  

  

  

### **Step 1: Add an Action in the Workflow**

-   Tap the **“+”** icon in the workflow to add a new action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041864330/original/TfD_Iq8lduSr-5v-BheZhkxazpCSV1Ohpg.png?1739958604)

#   

### **Step 2: Select WhatsApp as the Action Type**

-   In the **Action** section, search for **"WhatsApp"**.
-   Click on **WhatsApp** to proceed.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866017/original/Pz8rOOnMRkoheKL9H6XsxEnG2UbGTt0fkw.png?1739959605)

### **Step 3: Choose the Sending Phone Number**

-   From the dropdown menu, select the **phone number** you want to use for sending WhatsApp messages.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041866265/original/RpoAgk7Zq_9b16e8HSA1Y6-Ih16E9028MQ.png?1739959769)

  

  

#   

#   

# How to configure wait for WhatsApp contact Reply

You can send an initial WhatsApp message and then wait for the contact's reply before triggering the next step in your workflow. This enables more natural and responsive interactions within your automated workflows.

  

**Step 1:** Go to **Automations > Workflows > Create Workflow > Start from Scratch**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)Step 2:** Select **Add new Trigger** and search **Contact Created**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251284/original/MY0_6AfevQBjYRp3AihgmpaTD7ECVY_ImQ.png?1709620624)**  

**Step 4: Click on the plus button to add an action > Select WhatsApp**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022192979/original/F6hqIxCIJQQo2S5Sx3nSzM26LFMTqkA-Dg.png?1709556390)**  

**Step 5:** **SELECT WHATSAPP TEMPLATE > Select the template that you wish to send**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251430/original/sLmHezU-aVwrod0cV6ddCiseq2rmDVHHlA.png?1709620865)

**Step 6:** Click on **+** button > Select **Wait**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251482/original/zPzS8XjleFNVBe5m0NKvTccYC_WLMqd2SA.png?1709620935)**

  

**Step 7:** WAIT FOR > **Contact Reply** > REPLY TO > **WhatsApp** and **Save Action**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022251584/original/TGUQ-M9QRj-f6SH4hkF5FSuzE9PauZsyNQ.png?1709621069)

  

**Step 8:** Select the + button > **ACTION NAME**: WhatsApp > **SELECT WHATSAPP TEMPLATE** : **None - Manual Text**

Note: You can send free text messages at **NO ADDITIONAL COST** since the [**Free Entry Point Conversations**](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-and-billing-full-guide#Free-Entry-Point-Conversations) is opened since the customer replied to you.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252040/original/3Z38eC0Lhwi99VfQI-axw40FNEgjjjQPWQ.png?1709621441)

  

**Step 9: Save Action** and **Publish** the Automation and click **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022252156/original/IOhI_LbETpeZ_tRlaIFjVdd-sYvZVOMvdA.png?1709621521)**

  

  

# How to configure Do Not Disturb (DND) for WhatsApp

Based on specific customer actions (e.g., sending "STOP"), set DND status for all channels or specifically for WhatsApp. This empowers you to respect customer preferences and manage communication channels more effectively.

**Step 1:** Go to **Automations > Workflows > Create Workflow > Start from Scratch**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022182863/original/ipATIuH1_hqUQWQY6aDtbcEpe9Pcqrf54g.png?1709552111)**

**Step 2:** Select **Add New Trigger >  Customer Replied**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254082/original/XK2tm4XPWdAXLU4TvHQK0q4usOOzQmYVFA.png?1709623321)**

  

**Step 3:** Select **Add filters >** Reply channel **> WhatsApp** and Contains phase **> STOP** and **Save Trigger**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254303/original/QqCo2BKrJy4KoiuRr2SfLdGN74ytvZ34GA.png?1709623563)**  

**Step 4:** Select **+ button > Search DND > Select Enable/Disable DND**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254401/original/J0moMQBtGQ4fZ-c9R_fEJhKadp43dFR9mQ.png?1709623651)**  
**Step 5:** Select **Enable DND for specific channels** > Channels: **WhatsApp > Save Action**

  
Note: You can enable DND for all Channels by selecting **Enable DND for all channels**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022254564/original/tylJrrI3xHY5Z2eWRl4OgE_2C6cqZetXkw.png?1709623796)**

  

* * *

# FAQs

  

## **Does the Do Not Disturb (DND) setting affect other communication channels or just WhatsApp?**

You can configure DND to apply to all channels or just WhatsApp. This gives you control over whether you want to prevent the customer from receiving communications across all methods or just on the particular channel where they requested to be left alone.

  

## **What's the difference between "None - Manual Text" and selecting a template when sending WhatsApp messages in workflows?**

"None - Manual Text" lets you write a free-form message within the 24-hour window. Selecting a template is for sending pre-approved messages, which is useful for starting conversations outside of the 24-hour window or for specific marketing or support purposes.

  

## **Can I create workflows that combine WhatsApp with other channels like SMS or Email?**

  

Yes! GoHighLevel workflows are flexible, allowing you to combine WhatsApp with other communication channels to create comprehensive automation sequences.

  

## **Can I use WhatsApp workflow automation to send messages outside the 24-hour window?**

  

Yes, you can use approved WhatsApp templates after the initial 24-hour window for outreach or follow-up messages. Keep in mind that these template-based messages will incur additional charges.

  

## **What's a 'Free Entry Point Conversation' and how is it different from a regular conversation?**

-   Triggered when a customer clicks a "Click to WhatsApp" ad or a Facebook Call-to-Action button.
-   Lasts for 72 hours, compared to the standard 24-hour window.
-   During this extended window, you can send both free-form and template messages.

  

## **What happens if a customer replies with something other than what I've configured for the 'Wait for WhatsApp Reply' step?**

The workflow will continue to wait until they send a reply that matches what you've set up. If you want to handle unexpected responses, consider adding additional branches to your workflow with alternative conditions.

  

##  **How do I select the contact number for sending WhatsApp messages?**

You can select the contact number by following these steps:

1.  Tap the **“+”** icon in the workflow to add a new action.
2.  In the **Action** section, search for **"WhatsApp"** and select it.
3.  Choose the phone number from the dropdown list.

##  **Why don’t I see my phone number in the dropdown list?**

Only phone numbers connected under the **Phone Number** tab will appear in the dropdown. Ensure that your WhatsApp number is correctly linked in this section.

  

## **Can I add multiple phone numbers for WhatsApp messaging?**

Yes, if you have multiple WhatsApp numbers connected, you can select the preferred number from the dropdown list when setting up the workflow.

  

## **What happens if I select the wrong phone number?**

If you select an incorrect number, the messages will be sent from that number. To fix this, edit the workflow and choose the correct phone number.

  

## **Do I need to configure this setting for every workflow?**

  

Yes, each workflow requires you to manually select the sending phone number to ensure messages are sent from the correct source.