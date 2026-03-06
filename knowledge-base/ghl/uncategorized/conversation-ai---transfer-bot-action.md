---
title: "Conversation AI - Transfer Bot Action"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005371-conversation-ai-transfer-bot-action"
category: "Uncategorized"
---

# Conversation AI - Transfer Bot Action

This article explains how to use the Transfer Bot Action inside your chatbot configuration. This feature allows your chatbot to intelligently hand off the conversation to another destination, such as a live agent, another bot, or a workflow—creating a smooth customer experience.

  

**TABLE OF CONTENTS**

-   [What is the Transfer Bot Action?](#What-is-the-Transfer-Bot-Action?)
-   [Key Benefits of Transfer Bot Action](#Key-Benefits-of-Transfer-Bot-Action)
-   [How to Configure the Transfer Bot Action](#How-to-Configure-the-Transfer-Bot-Action)
-   [Transfer to Live Chat](#Transfer-to-Live-Chat)
-   [Transfer to Another Bot](#Transfer-to-Another-Bot)
-   [Transfer to Workflow](#Transfer-to-Workflow)
-   [Transfer to Agent](#Transfer-to-Agent)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Transfer Bot Action?**

  

The Transfer Bot Action is a powerful tool used in bot configuration to redirect a conversation based on logic or triggers. You can transfer chats to a human agent, a different bot, a workflow automation, or back to the conversation inbox. It ensures seamless handoffs between automation and live engagement, helping deliver faster resolutions and a better customer experience.

* * *

## **Key Benefits of Transfer Bot Action**

  

**The Transfer Bot Action improves bot flexibility, ensuring customers get the right help at the right time.**  
  

-   Enables real-time support escalation to live agents  
      
    
-   Allows switching to more specialized bots  
      
    
-   Triggers workflows based on user input or intent  
      
    
-   Reduces bot abandonment by offering human backup  
      
    
-   Improves CSAT by routing queries to the right department  
      
    
-   Enhances automation coverage with seamless fallbacks
    

* * *

## **How to Configure the Transfer Bot Action**

  

**Learn how to set up and use the Transfer Bot Action to streamline conversations and enhance customer service flow.**

  

Follow these steps to set up a Transfer Bot Action inside your bot:

  

1.  From your sub-account’s left sidebar, navigate to **AI Agents.** In the top navigation bar, select **Conversation AI > AI Agents** and choose the bot you want to edit.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058106768/original/6IFuUu_XaF5xMWvrPDcUHg4pp3xqZEiGoQ.png?1762872197)  
      
    
2.  Open Bot Goals and click Transfer Bot.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058106887/original/vtwIjZ6-1UowtKxdzDcavdc7tWkRFniwVQ.png?1762872262)  
      
    
3.  From the dropdown, select a transfer type: Live Chat, Workflow, Another Bot, or Agent.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058107760/original/kJzgt1Nby4xM46a9CFx_2T1TL1W7ILHUDg.png?1762872536)  
      
    
4.  (Optional) Customize settings such as adding tags before transfer or setting fallback actions if the transfer fails.  
      
    
5.  Click Save to apply your changes.

* * *

## **Transfer to Live Chat**

  

**Send the user to a human agent when automated help isn’t enough.**

  

Selecting this option moves the conversation from the bot to a human representative via the **Live Chat** interface. The chat appears in the **Conversations tab**, allowing the agent to respond manually in real-time.

  

**Use Case Example:** A user requests billing help, and the bot triggers a transfer to the billing team via live chat.

  

## **Transfer to Another Bot**

  

**Use this when you want to divide responsibilities between multiple bots.**

  

This allows you to direct the user to another bot—ideal for splitting up topics (sales vs. support) or handling multiple languages. Choose from any of your published bots.

  

**Pro Tip:** Make sure the destination bot is published and tested to prevent dead ends.

  

## **Transfer to Workflow**

  

**Trigger powerful automation flows when the bot needs to hand off tasks.**

  

When selected, this option initiates a **Workflow** tied to the user’s current context. This is perfect for automating post-chat actions like:

-   Booking appointments
    
-   Sending follow-up emails
    
-   Updating contact records
    
-   Triggering internal alerts
    

  

## **Transfer to Agent**

  

**Assign the conversation directly to a specific user or team.**

  

Choose a designated **agent or user group** so conversations are routed precisely. This is useful for tier-based support, regional teams, or individual reps.

  

You can optionally apply filters like “agent online only” or set fallback agents.

  

* * *

## **Frequently Asked Questions**

  

**Q: What happens if no one is available in live chat?**

If no agent is online, the transfer can be configured to fall back to another bot step, leave a message, or retry after a delay.

  

**Q: Can I delay the transfer?**

Yes. Insert a **Wait Step** before the transfer step to delay it for a set amount of time.

  

**Q: Will chat history be preserved after transfer?**

Yes, the full conversation transcript is retained and visible to both bots and agents.

  

**Q: Can I use conditions to control transfers?**

Absolutely. Use a **Condition Step** before the Transfer step to only trigger it based on tags, responses, or contact attributes.

  

**Q: Is the Transfer Bot Action available in all plans?**

Yes, but access to certain destinations like Workflows or Live Chat may depend on plan-level feature availability.

* * *

### **Related Articles**

-   [](#)[How to build conversation AI bots in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)
    

* * *

### **Next Steps**

-   Test your Transfer Bot Action using the **Preview** feature in the Bot Builder.
    
-   Check the **Conversations** inbox for transferred chats and agent handoffs.
    
-   Set up **automation tags or workflows** to track the success rate of transfers.
    
-   Continue configuring advanced routing using conditions, wait steps, and tags.