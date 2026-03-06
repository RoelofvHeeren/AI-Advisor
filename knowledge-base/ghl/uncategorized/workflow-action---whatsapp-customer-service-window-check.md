---
title: "Workflow Action - WhatsApp Customer Service Window Check"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check"
category: "Uncategorized"
---

# Workflow Action - WhatsApp Customer Service Window Check

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

  

The WhatsApp Customer Service Window Check action allows you to check if a customer service window is open before sending free-form messages. When the window is open, businesses can send unlimited free-form messages for the first 1,000 service conversations each month at no additional cost. This feature ensures that you're utilizing the open window to communicate with customers effectively, avoiding additional costs.

  

## Action Name

  

WhatsApp Customer Service Window Check

  

## Action Description

The **WhatsApp Customer Service Window Check** action determines whether an active customer service window exists between your business and a customer. A customer service window is triggered when a customer sends a message to your business, lasting 24 hours. During this time, you can send unlimited free-form messages. If the window is closed, only pre-approved WhatsApp templates can be used to initiate a new conversation.

**Key Features:**

-   Automatically checks if the 24-hour customer service window is open.
-   Allows sending free-form messages when the window is open.
-   Uses pre-approved templates to initiate conversations if the window is closed.
-   Saves messaging costs by leveraging the 1,000 free service conversations per month.

  

## Action Details

##### **Step-by-Step Guide**

1.  **Prerequisites:**
    
    -   Ensure WhatsApp is enabled on your HighLevel subaccount. If you want to send business-initiated messages, you must have an approved WhatsApp template. Follow the [WhatsApp Subaccount Setup](https://help.gohighlevel.com/a/solutions/articles/155000001980) and [How to Create a WhatsApp Template](https://help.gohighlevel.com/support/solutions/articles/155000000861-how-to-create-a-whatsapp-template) guides.
2.  **Add the WhatsApp Customer Service Window Check:**
    
    -   Navigate to **Automations > Workflows > Create Workflow > Start from Scratch**.
    -   Add the **WhatsApp: Customer Service Window Check** action. This will create two branches: "Open" and "Closed."
3.  **Configure the Open Branch:**
    
    -   Under the **Open** branch, select the **WhatsApp Send Message** action and choose **None - Free Form Message**.
    -   If the window is open, you can send free-form messages without any restrictions, taking advantage of the free tier of 1,000 conversations per month.
4.  **Configure the Closed Branch:**
    
    -   Under the **Closed** branch, select the **WhatsApp Send Message** action and choose an approved **Marketing/Utility Template**.
    -   If the customer service window is closed (i.e., no customer response in the last 24 hours), you can only send pre-approved template messages to initiate a new conversation.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033163427/original/YyPked92VwzcTG2sEIAJF121V1XIj0zMTg.png?1726743482)

  

## Example

  

**Scenario:** A business wants to follow up with a customer 24 hours after an appointment to check if they need further assistance.

**Workflow Setup:**

-   **Trigger:** Customer Appointment booked
-   **Action:**WhatsApp Customer Service Window Check.
    -   **Open Branch:** Send a free-form follow-up message asking the customer if they need any help.
    -   **Closed Branch:** Send a pre-approved WhatsApp template message to re-initiate the conversation.

**Outcome:** If the customer service window is open, the customer will receive a personalized message at no additional cost. If the window is closed, a template message will be sent to re-engage the customer.

  

#### **FAQs**

**1\. What is the difference between "None - Free Form Message" and selecting a template?**  
"None - Free Form Message" allows you to send messages within the 24-hour customer service window. Templates are used outside of the window for specific purposes like marketing or utility messages.

**2\. How can I check my free tier conversation count?**  
You can view your free tier conversation count in Facebook Business Manager under **Account Tools > Insights**.

**3\. Can I use WhatsApp automation outside the 24-hour window?**  
Yes, you can use pre-approved WhatsApp templates to send messages once the customer service window closes.

**4\. What is a Free Entry Point Conversation?**  
Triggered when a customer engages through a "Click to WhatsApp" ad or CTA button, lasting 72 hours, allowing both free-form and template messages.