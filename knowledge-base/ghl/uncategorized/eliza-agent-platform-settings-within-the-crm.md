---
title: "Eliza Agent Platform Settings within the CRM"
url: "https://help.gohighlevel.com/support/solutions/articles/48001236605-eliza-agent-platform-settings-within-the-crm"
category: "Uncategorized"
---

# Eliza Agent Platform Settings within the CRM

The Eliza Agent Platform can be used to some extent from within the CRM; some of its configurations allow users to access it from within the CRM. This Article covers details of those Eliza settings within the CRM.

  

  

#### **Covered in this Article**

#### [**Eliza Settings inside the CRM**](#Eliza-Settings-inside-the-CRM)

#### [User Permission setting for Eliza](#User-Permission-setting-for-Eliza)

#### [Eliza By-pass tag](#Eliza-By-pass-tag)

#### [Send to Eliza Tag](#Send-to-Eliza-Tag)

#### [Send to Eliza Agent Platform Action in HighLevel Workflow](#Send-to-Eliza-Agent-Platform-Action-in-HighLevel-Workflow)

  

**Related Articles**[](https://help.gohighlevel.com/support/solutions/articles/48001236605-eliza-agent-platform-settings-within-the-crm)[Eliza Agent Platform Introduction and FAQs](https://help.gohighlevel.com/support/solutions/articles/48001236572-eliza-agent-platform-introduction-and-faqs) 

[Eliza Agent Platform Settings](https://help.gohighlevel.com/support/solutions/articles/48001236575-eliza-agent-platform-settings)

[Eliza Agent Platform Search Tools](https://help.gohighlevel.com/support/solutions/articles/48001236599-eliza-agent-platform-search-tools)

[Eliza Agent Platform Dashboard](https://help.gohighlevel.com/support/solutions/articles/48001236604-eliza-agent-platform-dashboard)

[Eliza Agent Platform Conversations](https://help.gohighlevel.com/support/solutions/articles/48001236598-eliza-agent-platform-conversations)

  

* * *

## **Eliza Settings inside the CRM**

  

### **User Permission setting for Eliza**

  

Users who will edit FAQs and set up Eliza on the subaccount level need Eliza Service enabled in **Agency Settings> Team> Edit User> User permissions.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299174187/original/akJyJXWo9hMWQCjA4tKD_iuwlbwLiIkXGQ.png?1684954247)** 

  

**Please Note**

To add the Eliza Service tab in the sub-account settings, You need to go to the user permissions and toggle the Eliza Service tab to grant access to that user. Once the access is granted, the Eliza Service tab will show up in the sub-account settings for you.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299173791/original/-XccIaC1L4t7OpvDhfzwCB30eB2_BpimmA.png?1684954080)

  

  

  

  

  

### **Eliza By-pass tag**

In cases where you don't want to let some conversations come into the Eliza Agent Platform, use the Eliza bypass tag.

  

Create a tag in **Settings>Tag** and choose that on Sub-Account **Settings >> Eliza Service** as the **Eliza By-pass tag**. Once chosen, any new inbound conversation will be checked against this tag to see whether it has to bypass the Eliza Agent Platform. Any inbound message will NOT be forwarded to EAP if this tag is in the contact.

  

If this conversation is already present in Eliza, then it will be removed from the agent queue when the agent tries to navigate to that conversation. This closed conversation will have the disposition as **"Bypass tag assigned"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290432029/original/jT5NzbRFRVkKc8Fx6EEJmYU7uw5MbNLqpQ.png?1680264581)

  

### **Send to Eliza Tag**

  

In some situations where you don't want all the conversations to come into Eliza, but only a few. In such cases, create a tag and configure that tag as a "Send to Eliza tag on Location Settings >> Eliza Service. - Screenshot is attached below. 

  

Using workflows, assign this tag to those contacts whose conversations should come into Eliza. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290430423/original/94vKNYwKYicHIsLdeyVxj6m8keTBSwN7OQ.png?1680264124) Only the new incoming conversations with this tag will be sent to Eliza. If a contact is assigned the tag and you expect it appears in Eliza even without an inbound message, use the "Send to Eliza" workflow action. For details, navigate to "2. Conversations" on the left menu in this user guide and look for the "Send to Eliza setup " section on HL and Eliza Agent Platform.

  

  

**Please Note:**

By mistake, if you configure both Eliza By pass tag and the Send to Eliza tag, then the system will only honor the Send to Eliza tag just to be safe, so conversations don't get left behind.

  

  

### **Send to Eliza Agent Platform Action in HighLevel Workflow**

Contacts passing this workflow action are sent to the connected Eliza Account's Contacts.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290430435/original/EcTE4c2h9HWD7NzCOmpQijjaNRa1oMTAAA.png?1680264126)