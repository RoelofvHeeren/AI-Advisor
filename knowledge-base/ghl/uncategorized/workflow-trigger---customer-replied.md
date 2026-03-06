---
title: "Workflow Trigger - Customer Replied"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002677-workflow-trigger-customer-replied"
category: "Uncategorized"
---

# Workflow Trigger - Customer Replied

The **“Customer Replied”** workflow trigger is a powerful tool designed to automate actions based on customer responses. This guide explains how to configure the trigger, the benefits it offers, and examples of practical use cases to streamline your business processes. By the end, you’ll have a clear understanding of how to utilize this trigger effectively.

* * *

**TABLE OF CONTENTS**

-   [What is the Customer Replied Workflow Trigger?](#What-is-the-Customer-Replied-Workflow-Trigger?)[](#Key-Benefits-of-Using-Customer-Replied-Trigger)
-   [Key Benefits of Using Customer Replied Trigger](#Key-Benefits-of-Using-Customer-Replied-Trigger)[](#How-to-Setup-the-Customer-Replied-Trigger-in-Workflows)
-   [How to Setup the Customer Replied Trigger in Workflows](#How-to-Setup-the-Customer-Replied-Trigger-in-Workflows)[](#Reply-Channel-filter-\(including-All-in-One-Chat\))
-   [Reply Channel filter (including All-in-One Chat)](#Reply-Channel-filter-\(including-All-in-One-Chat\))[](#Use-Cases-of-the-Customer-Replied-Trigger)
-   [Use Cases of the Customer Replied Trigger](#Use-Cases-of-the-Customer-Replied-Trigger)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Customer Replied Workflow Trigger?**

  

Customer replies are one of the strongest signals of intent. Using this trigger ensures your workflows react immediately and consistently whenever a contact responds, so you can follow up faster, route messages correctly, and keep your pipeline moving.

  

The **Customer Replied** workflow trigger starts a workflow when a contact replies to a message. You can optionally add filters (like phrases, tags, intent type, and reply channel) to ensure the workflow runs only for the replies that matter.

* * *

## **Key Benefits of Using Customer Replied Trigger**

  

-   **Faster follow-up:** launch actions instantly when a contact replies.  
      
    
-   **Better routing:** use filters to direct conversations to the right team or workflow.  
      
    
-   **Cleaner automation:** avoid duplicate workflows by narrowing conditions with phrases, tags, and channels.  
      
    
-   **Channel-level control:** trigger different workflows based on where the reply came from (including **All-in-One Chat**).

* * *

## **How to Setup the Customer Replied Trigger in Workflows**

  

A clean trigger setup prevents misfires and keeps your automation predictable. These steps walk through adding the trigger, naming it clearly, and applying the right filters for your use case.

  

1.  Log in to your sub-account.  
      
    
2.  Go to **Automations > Workflows**.  
      
    ![](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)  
      
    
3.  Create a **new** **workflow** or **open** an **existing** one.  
      
    ![](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)  
      
    
4.  Click on the **\+ Add New Trigger** button to add a **trigger.**  
      
    **![](https://jumpshare.com/share/UnzrNs9thHE0GfMD3vah+/Screen+Shot+2026-02-25+at+19.29.54.png)**  
      
    
5.  Select **Customer Replied**.  
      
    ![](https://jumpshare.com/share/F3l4CgUJxL9rOrkgp2rR+/Screen+Shot+2026-02-25+at+19.31.15.png)  
      
    
6.  Enter a clear **Trigger Name** so it’s easy to find later.  
      
    
7.  Click **\+ Add Filters** to narrow when the workflow should run.  
      
    ![](https://jumpshare.com/share/wzbncj5YS0ptAaBniCtg+/Screen+Shot+2026-02-25+at+19.37.13.png)  
      
    
8.  **Choose the right filters for your use case:** Using filters helps you control exactly which replies should activate your workflow. Filter options include:  
      
    1.  **Contains Phrase:** runs only when the reply includes specific words or phrases.  
          
        
    2.  **Exact Match Phrase:** runs only when the reply exactly matches what you specify.  
          
        
    3.  **Has Tag:** includes only contacts with selected tags.  
          
        
    4.  **Doesn’t Have Tag:** excludes contacts with selected tags.  
          
        
    5.  **Intent Type:** uses intent detection to categorize replies (for example, positive response, complaint, question).  
          
        
    6.  **Replied to Workflow:** runs only if the contact replied to a specific workflow’s messages.  
          
        
    7.  **Reply Channel:** runs only when the reply came from a selected channel.  
          
        ![](https://jumpshare.com/share/GU3ZcG2ZCLyoofKupX4b+/Screen+Shot+2026-02-25+at+19.40.14.png)  
          
        
    8.  Click **Save Trigger**.  
          
        ![](https://jumpshare.com/share/CesVmFfHLezy0jzFNZRX+/Screen+Shot+2026-02-25+at+19.47.39.png)  
          
        
    9.  Add your relevant workflow actions, then **Publish** the workflow.  
          
        ![](https://jumpshare.com/share/CtxVy1nNRoaAMgctqT4B+/Screen+Shot+2026-02-25+at+19.48.46.png)

* * *

## **Reply Channel filter (including All-in-One Chat)**

  

Reply Channel targeting makes it possible to build different automations for SMS, email, social messaging, and chat. This is especially useful when the same contact can reply across multiple channels, but you only want certain replies to trigger a workflow.

  

1.  In the trigger filters, open **Reply Channel**.  
      
    
2.  Select the channel you want to match (for example, Email, WhatsApp, etc.).  
      
    
3.  **All-in-One Chat support in Reply Channel:** When you select **Reply Channel = All-in-One Chat**, additional filters appear so you can narrow replies based on the type of All-in-One chat experience and the specific widget/configuration.  
      
    

8.  Set **Reply Channel** to **All-in-One Chat**.  
      
    
9.  Set **Chat Type is** (appears only after selecting All-in-One Chat):  
      
    
    -   **Chat Widget**  
          
        
    -   **Live Chat**  
          
        
10.  Select the specific option in the dynamic third-level filter (this changes based on Chat Type):  
       
     
     1.  If **Chat Type is = Chat Widget**  
           
         
         -   Select **Chat Widget is** (dropdown lists **only All-in-One Chat widgets**)  
               
             
     2.  If **Chat Type is = Live Chat**  
           
         
         -   Select **Live Chat is** (dropdown lists **only All-in-One Live Chat configurations**)  
               
             

![](https://jumpshare.com/share/YdY0xfjY6G2oEuZMj7v7+/GIF+Recording+2026-02-25+at+20.30.42.gif)

* * *

## **Use Cases of the Customer Replied Trigger**

  

Practical examples make it easier to choose the right filters and actions. Use these ideas as templates to build automation that matches real customer reply scenarios.

  

1.  **Notify a team when a customer replies via a specific All-in-One Chat widget**  
      
    
    -   **Trigger:** Customer Replied
        
    -   **Filters:** Reply Channel = All-in-One Chat → Chat Type is = Chat Widget → Chat Widget is = (select widget)
        
    -   **Actions:** Send internal notification, assign conversation, create task  
          
        

2.  **Route Live Chat replies to a support queue**  
      
    
    -   **Trigger:** Customer Replied
        
    -   **Filters:** Reply Channel = All-in-One Chat → Chat Type is = Live Chat → Live Chat is = (select configuration)
        
    -   **Actions:** Create ticket, notify support channel, apply tag, assign user  
          
        

3.  **Create an opportunity from high-intent replies**  
      
    
    -   **Trigger:** Customer Replied
        
    -   **Filters:** Contains Phrase (example: “interested”, “book”, “pricing”) + Reply Channel (choose the channel you want)
        
    -   **Actions:** Create opportunity, notify sales rep, send follow-up message
        

* * *

## **Frequently Asked Questions**

  

**Q: Can I trigger workflows for replies from specific customers only?**

Yes, you can use tags to narrow down workflows to specific customer segments.

  

**Q:** **How do intent types work with this trigger?**

Intent types use natural language processing (NLP) to categorize replies, such as “question,” “complaint,” or “positive response.” You can then configure workflows to handle each intent appropriately.

  

**Q: Can I trigger different workflows based on reply channels?**

Absolutely! You can configure workflows for specific channels like WhatsApp or email, and even narrow it down to particular numbers or addresses.

  

**Q: Does All-in-One Chat support apply to all workflow triggers?**

No. The **All-in-One Chat** option is available specifically in the **Customer Replied** trigger’s **Reply Channel** filter.

  

**Q: Will my existing Chat Widget workflows stop working?**

No. Existing **Chat Widget**\-based triggers and workflows continue working as before.

  

**Q: Can I run different workflows for Chat Widget vs Live Chat replies?**

Yes. Use separate triggers (or separate workflows) with **Chat Type is** set to **Chat Widget** or **Live Chat**

* * *

### **Related Articles**

  

-   [Getting Started with Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)  
      
    
-   [A List of Workflow Triggers](https://help.gohighlevel.com/en/support/solutions/articles/155000002292)  
      
    
-   [How to Use the All-in-One Chat Widget](https://help.gohighlevel.com/en/support/solutions/articles/155000004779)  
      
    
-   [Getting Started with Chat Widget](https://help.gohighlevel.com/en/support/solutions/articles/155000004102)