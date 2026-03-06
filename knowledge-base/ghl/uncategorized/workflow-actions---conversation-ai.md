---
title: "Workflow Actions - Conversation AI"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001358-workflow-actions-conversation-ai"
category: "Uncategorized"
---

# Workflow Actions - Conversation AI

Use the Conversation AI Workflow Action to send AI-generated message, wait for the contact’s reply, and route the workflow using branches and conditions. This article shows how to use the Conversation AI Workflow Action in HighLevel.

* * *

**TABLE OF CONTENTS**

-   [What is the Conversation AI Workflow Action?](#What-is-the-Conversation-AI-Workflow-Action?)[](#Key-Benefits-of-Conversation-AI-Workflow-Action)
-   [Key Benefits of Conversation AI Workflow Action](#Key-Benefits-of-Conversation-AI-Workflow-Action)[](#How-To-Setup-Conversation-AI-Workflow-Action)
-   [How To Setup Conversation AI Workflow Action](#How-To-Setup-Conversation-AI-Workflow-Action)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Conversation AI Workflow Action?**

  

The Conversation AI Workflow Action sends a single AI-generated message to a contact, waits for a reply, and routes the workflow based on the contact’s response. It uses your bot’s prompt settings and training to craft the reply and supports branching for different outcomes.

* * *

## **Key Benefits of Conversation AI Workflow Action**

  

-   **Targeted outreach:** Ask a specific question and wait for a direct reply from the contact.  
      
    
-   **Smart routing:** Evaluate the contact’s response against branches and conditions to guide next steps.  
      
    
-   **Prompt-aware replies:** Combine Personality, Additional Instructions, the Question, training data, and conversation history for context.  
      
    
-   **Channel choice:** Send on a selected channel (SMS, Facebook, WhatsApp, Live Chat, Instagram).
    

* * *

## **How To Setup Conversation AI Workflow Action**

  

Follow these steps to add the action to a workflow and configure it for consistent, predictable outcomes.

  

1.  Log in to your sub-account.  
      
    
2.  Go to **Automations > Workflows**.  
     ![](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)
    
3.  Create a **new** **workflow** or **open** an **existing** one.  
      
    ![](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)  
      
    
4.  Click on the **\+ Add New Trigger** button to add a **trigger** (e.g., _Customer Replied_). If needed, set the **Reply Channel** (e.g., SMS).  
      
    ![](https://jumpshare.com/share/bfCBKfEABQ5tgCPZfvmk+/GIF+Recording+2026-01-05+at+6.09.00+PM.gif)  
      
    
5.  Click **+** to **add** an **Action** and search for **Conversation AI**. Select **Conversation AI** action and **name** the action.  
      
    ![](https://jumpshare.com/share/bF6jf5XN5BBWxB30m7Tv+/GIF+Recording+2026-01-05+at+6.10.58+PM.gif)  
      
    
6.  You can Toggle **Advanced Bot Configuration** to override the bot’s defaults:  
      
    
    -   **Personality** — define tone.  
          
        
    -   **Additional Instructions** — goals/intents and guidance. If left off, the action uses the bot’s existing configuration.  
          
        ![](https://jumpshare.com/share/Qm7f7HSl3RIU1Y2DOOXN+/Screen+Shot+2026-01-05+at+6.13.16+PM.png)  
          
        
7.  In **Question**, enter the message the bot should send. You can use **custom values**.  
      
    ![](https://jumpshare.com/share/LJfRkkxyunVJWekHEvjX+/Screen+Shot+2026-01-05+at+6.18.07+PM.png)  
      
    
8.  Set **Timeout** (how long to wait for a reply) in minutes, hours, or days.  
      
    ![](https://jumpshare.com/share/Iyf2Vr0lac1J5m629Iv7+/Screen+Shot+2026-01-05+at+6.40.18+PM.png)  
      
    
9.  Choose **Channel** (one per action): SMS, Facebook, Instagram, WhatsApp, or Live Chat.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061913669/original/elqM3Z7dxdMtcPTx0vnTsHFZbE_K-o6c-g.png?1767618785)  
      
    
10.  Turn on **Skip if answered** to bypass this action when an answer is given manually.  
       
     ![](https://jumpshare.com/share/rKvHTow1Nfkccibd9KcA+/Screen+Shot+2026-01-05+at+6.44.27+PM.png)  
       
     
11.  Set **Bot responses limit** (max AI messages before routing to **No Condition Met** if nothing matches).  
       
     ![](https://jumpshare.com/share/YmfxFtvIE2KRlj0HiMHV+/Screen+Shot+2026-01-05+at+6.49.19+PM.png)  
       
     
12.  Set **Wait time in seconds** (delay before the bot replies so it can collect incoming messages).  
       
     ![](https://jumpshare.com/share/FkWSQGuVTg0AFyp9gJmC+/Screen+Shot+2026-01-05+at+6.56.30+PM.png)  
       
     
13.  Configure **Branches & Conditions**:  
       
     
     -   **Time Out** and **No Condition Met** are always present and cannot be removed.  
           
         
     -   Add additional branches and define clear matching conditions.  
           
         ![](https://jumpshare.com/share/AjykLyHb5QowrR8oGyr2+/Screen+Shot+2026-01-05+at+7.00.05+PM.png)  
           
         
14.  Click **Save Action**.  
       
     ![](https://jumpshare.com/share/Fu4hWxk9goP3Uelzlt3C+/Screen+Shot+2026-01-05+at+7.01.26+PM.png)  
       
     
15.  Use **Test Workflow** to validate before going live. (Optional but recommended)  
       
     
16.  **Publish** the workflow and **Save**.  
       
     ![](https://jumpshare.com/share/IvN5fTCvGjB0oqXcl0oz+/Screen+Shot+2026-01-05+at+7.04.38+PM.png)
     

* * *

## **Frequently Asked Questions**

  

**Q: What happens if the contact doesn’t reply?**

The workflow follows the **Time Out** branch.

  

**Q: What if no condition matches the contact’s reply?**  
The workflow follows the **No Condition Met** branch.

  

**Q: Can I add more branches?**  
Yes. Create additional branches and add conditions to match more outcomes.

  

**Q: What information does the AI use to craft its message?**  
The AI uses **Personality**, **Additional Instructions**, the **Question**, **Training**, and **Conversation history**.

  

**Q: Which channels are supported?**  
**SMS, Facebook, WhatsApp, Live Chat, and Instagram** can be selected.

* * *

### **Related Articles**

  

-   [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)  
    [  
    ](https://help.gohighlevel.com/en/support/solutions/articles/155000000209)
    
-   [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/en/support/solutions/articles/155000000209)  
      
    
-   [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/en/support/solutions/articles/155000005649)  
      
    
-   [Workflow Action - Custom Code AI](https://help.gohighlevel.com/en/support/solutions/articles/155000004709)  
      
    
-   [AI Powered Email Generation in Workflow Action](https://help.gohighlevel.com/en/support/solutions/articles/155000005516)