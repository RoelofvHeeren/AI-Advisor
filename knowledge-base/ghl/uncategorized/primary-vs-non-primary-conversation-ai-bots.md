---
title: "Primary vs Non-Primary Conversation AI Bots"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004414-primary-vs-non-primary-conversation-ai-bots"
category: "Uncategorized"
---

# Primary vs Non-Primary Conversation AI Bots

Primary bots handle all general inbound conversations and serve as the cornerstone of your communication strategy. Non-primary bots, meanwhile, enhance workflows by responding to specific tasks based on assigned channels when added to a specific workflow. Properly assigning communication channels to both types of bots is essential for seamless operation and optimal customer interaction.

* * *

**TABLE OF CONTENTS**

-   [Primary Conversation AI Bots](#Primary-Conversation-AI-Bots)
    -   [How Primary Bots Function](#How-Primary-Bots-Function)[](#How-to-Assign-)
    -   [How to Assign "Primary Status" to a Bot](#How-to-Assign-)[](#Adding-Conversation-Channels-to-Primary-Bots)
    -   [Adding Conversation Channels to Primary Bots](#Adding-Conversation-Channels-to-Primary-Bots)
-   [Non-Primary Conversation AI Bots](#Non-Primary-Conversation-AI-Bots)
    -   [How Non-Primary Bots Function](#How-Non-Primary-Bots-Function)
    -   [Matching Non-Primary Bot Channels to Workflow](#Matching-Non-Primary-Bot-Channels-to-Workflow)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **Primary Conversation AI Bots**

  

The **primary bot** is responsible for managing all conversations that are **not assigned to a different bot from within a workflow**. It serves as the main AI bot for general inbound communication, depending on the communication channels assigned to it.

  

  

**PLEASE NOTE:** You can change primary bots at any time. Changing which bot is the primary bot will not affect any of the configurations, but you will need to make sure that you assign any missing communication channels to your new primary bot if needed.

  

  

### **How Primary Bots Function**

  

Primary bots handle conversations originating from any assigned communication channels, such as SMS, Facebook, or live chat, as long as those conversations are not already being handled by conversation AI bots inside a workflow. They act as the default responder for your business's communication channels and ensure seamless interaction with customers.

  

-   **General Conversations**: Primary bots respond automatically to messages received outside of workflow automation.  
      
    
-   **Channel Dependence**: Their ability to respond is determined by the channels you assign to them.

  

  

### **How to Assign "Primary Status" to a Bot**

  

1.  Navigate to the **Conversation AI dashboard** in your sub-account settings (Settings > Conversation AI)  
      
    
2.  Create a new bot or select the bot you want to set as the primary bot.  
      
    
3.  Click the **“Set as Primary”** button to set the bot as the primary bot.  
      
    
4.  Click the **"Save"** button to save your changes.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039420214/original/K25U_EdiAL6YrgJTBdg83U6tRsZrMWl9ww.gif?1736265736)

  

  

### **Adding Conversation Channels to Primary Bots**

  

Assigning channels ensures that bots can communicate through specific conversation channels like SMS, Facebook, or live chat. The primary bot handles general inbound messages from the assigned channels, as long as that conversation was not initiated in a workflow that was being handled by another Conversation AI bot.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039194192/original/qqmuHlda5hIl6Xg-bw1Dxztqz2qqGYGo9w.gif?1735844677)**

* * *

## **Non-Primary Conversation AI Bots**

  

Non-primary bots are designed to support workflows by responding to conversations initiated through workflow automation. They operate based on the communication channels within the workflow to which they are assigned.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039429474/original/s5iydmMyeFUtAV4Lbcj73vt5BPLk75-S5w.png?1736277810)

  

  

### **How Non-Primary Bots Function**

  

Non-primary bots are not involved in general inbound communication. Instead, they work exclusively within the workflows they are assigned to:

  

-   **Workflow Triggered**: These bots respond only when a workflow step activates them. You can transfer the conversation to different bots at different steps of the workflow, but only a single bot can be present at any given time in a conversation.  
      
    
-   **Channel-Dependent**: Their ability to respond depends on the channels they are configured for in the bot’s settings, which match the communication channels in the workflow from which they are triggered.  
      
    
-   **Specialization**: Non-primary bots are ideal for tasks such as appointment booking, follow-ups, or providing specific support for conversations managed within workflows.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039424453/original/U4hJFMpWwFKrZMb9sBhJlgKwc7mXS46CUA.gif?1736269774)

  

  

### **Matching Non-Primary Bot Channels to Workflow**

  

Assigning channels ensures that non-primary bots can communicate through specific channels to based on their intended use within workflows.

  

**For Example:**

  

If you are setting up a non-primary bot that is trained to respond to leads coming from Facebook and Instagram, you will need the following things to be **TRUE**:

  

✅ Non-Primary Bot has Facebook and Instagram as assigned communication channels

  

✅ Create a lead nurture workflow that triggers from Facebook and Instagram messages

  

✅ Non-Primary Bot added to the same lead nurture workflow as an action

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039424383/original/AzSQ89OiR_jzSUByfFuyqG7nfOtaDUVUdA.png?1736269677)

  

**IMPORTANT:** Ensure that the channels used in a workflow match the channels assigned to the bot.  
  
If a workflow includes Facebook and SMS steps, ensure the bot assigned can handle both platforms or designate separate bots for each channel.  
  
Click Here to learn How to Setup Non-Primary Conversation AI Bots in Workflows.

* * *

## **Frequently Asked Questions**

  

**Q: What’s the difference between a primary bot and non-primary bots?**

The primary bot handles all general inbound messages unless they are assigned to a different bot in a workflow. Non-primary bots, on the other hand, are used exclusively within workflows to handle specific tasks.

  

  

**Q: What happens if I don’t assign all necessary channels to my primary bot?**

If channels are missing from the primary bot's configuration, it won’t be able to respond to messages on those platforms. Make sure all relevant communication channels are assigned to the primary bot to avoid interruptions in customer interactions.

  

  

**Q: Can I have more than one primary bot?**

No, only one bot can be designated as the primary bot at a time. If you need to switch primary bots, you can do so, but ensure that all required channels are reassigned to the new primary bot.

  

  

**Q: Can non-primary bots respond to general inbound messages?**

No, non-primary bots are designed to respond only within workflows. General inbound messages are exclusively managed by the primary bot.

  

  

**Q: How do I ensure a non-primary bot responds to a specific workflow step?**

Assign the non-primary bot to the appropriate step in the workflow and verify that the workflow uses channels that match the bot’s assigned channels. For example, an SMS bot will not respond to Facebook messages within the same workflow.

  

  

**Q: Can I assign multiple non-primary bots to a single workflow?**

Yes, you can assign multiple non-primary bots to a workflow, each configured for different tasks or channels. For example, you could use one bot for appointment booking and another for customer support within the same workflow.

  

  

**Q: What happens if a workflow includes a channel not assigned to the non-primary bot?**

The bot will not respond to messages on channels it isn’t configured for. To avoid this, ensure the channels in the workflow match the channels assigned to the bot.

  

  

**Q: Can I switch a non-primary bot’s channel assignments after it has been added to a workflow?**

Yes, you can modify a non-primary bot’s channel assignments at any time. However, you’ll need to review the workflows using that bot to ensure its new channel configuration aligns with the workflow steps.