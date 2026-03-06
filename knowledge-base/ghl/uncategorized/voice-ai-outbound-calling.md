---
title: "Voice AI Outbound Calling"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006598-voice-ai-outbound-calling"
category: "Uncategorized"
---

# Voice AI Outbound Calling

Voice AI Outbound Calling streamlines outbound call scheduling directly within your workflow actions. This enhancement enables automated call management, improved agent utilization, and robust scheduling thresholds for efficient customer outreach.

* * *

**TABLE OF CONTENTS**

-   [What is Voice AI Outbound Calling?](#What-is-Voice-AI-Outbound-Calling?)[](#Key-Benefits-of-Voice-AI-Outbound-Calling)
-   [Key Benefits of Voice AI Outbound Calling](#Key-Benefits-of-Voice-AI-Outbound-Calling)[](#Outbound-Call-Logic-&-Guidelines)
-   [Outbound Call Logic & Guidelines](#Outbound-Call-Logic-&-Guidelines)[](#How-To-Setup-Voice-AI-Outbound-Calling)
-   [How To Setup Voice AI Outbound Calling](#How-To-Setup-Voice-AI-Outbound-Calling)
    -   [Step 1: Create a Workflow for Outbound Calling](#Step-1%3A-Create-a-Workflow-for-Outbound-Calling)
    -   [Step 2: Add Outbound Voice AI to Workflow](#Step-2%3A%C2%A0Add-Outbound-Voice-AI-to-Workflow)
    -   [Step 3: Configure Outbound Voice AI Workflow Action](#Step-3%3A-Configure-Outbound-Voice-AI-Workflow-Action)
    -   [Step 4: Save, Publish, & Test](#Step-4%3A-Save,-Publish,-&-Test)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Voice AI Outbound Calling?**

  

Voice AI Outbound Calling is a feature that integrates automated outbound calling with advanced Voice AI capabilities into HighLevel’s workflow actions. It allows users to select an agent, choose a phone number, and seamlessly schedule outbound calls to contacts. This innovative feature leverages workflow triggers to manage call schedules while offering flexibility by using the same agent for both inbound and outbound calls.

  

  

**IMPORTANT:** Before you're able to use Outbound Voice AI, you MUST register and be approved for use. You can begin registration by navigating to **AI AGENTS > VOICE AI > CLICK "ENABLE OUTBOUND CALLS"**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055639251/original/nWrQZOqQbhmBVCXwp1YOETWLfKkxKt3oRw.png?1760024025)

* * *

## **Key Benefits of Voice AI Outbound Calling**

  

This feature transforms how outbound calling is managed by automating several manual processes, ensuring efficient and organized call outreach:

  

-   Streamlined call scheduling that reduces manual intervention  
      
    
-   Enhanced agent efficiency by allowing a single agent to handle multiple call directions  
      
    
-   Robust controls through built-in scheduling logic and frequency thresholds  
      
    
-   Scalability with per-location call limits and overflow management

* * *

## **Outbound Call Logic & Guidelines**

  

Voice AI outbound calling logic ensures a consistent outreach without overwhelming your contacts. 

This structured approach maintains balanced call distribution while respecting operational timeframes:

  

-   Calls are initiated at a rate of one per minute per location  
      
    
-   Each location can make up to 100 calls per day with any overflow deferred to the next day  
      
    
-   Each contact’s phone number is limited to one call per day, with a maximum of 4 calls over 2 weeks
    -   _(__calls exceeding this limit will fail)_  
          
        
-   Calls are scheduled only between 10:00 AM and 6:00 PM as per the contacts phone number timezone  
      
    
-   Calls can only be made to contacts who have opted in to receive AI calls, and who have not enabled DND  
      
    
-   Calls can only be made to United States numbers

* * *

## **How To Setup Voice AI Outbound Calling**

  

Proper setup ensures that outbound calls are efficiently integrated into your workflow processes. Follow these steps to implement the feature:

  

**IMPORTANT:** Before you're able to use Outbound Voice AI, you MUST register and be approved for use. You can begin registration by navigating to **AI AGENTS > VOICE AI > CLICK "ENABLE OUTBOUND CALLS"**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055639251/original/nWrQZOqQbhmBVCXwp1YOETWLfKkxKt3oRw.png?1760024025)

  

  

### **Step 1:** Create a Workflow for Outbound Calling

_\*Outbound Voice AI calling can **ONLY** occur from inside a workflow._

  

1.  Create a new workflow (or edit a current one) by navigating to **AUTOMATION** in your sub-account.  
      
    
2.  If you are creating a new workflow, create the "+ Create Workflow" button and follow the prompts to create your new workflow.  
    

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728778/original/JrnwtiecyuP4EsqWiI2n8OEjvyZrqsbh8A.png?1760105904)

  

  

### **Step 2:** Add Outbound Voice AI to Workflow

  

-   Once you've opened your workflow, click on the **"+"** icon to add a new workflow action.

  

-   Either scroll or use the search bar to look for the **"Voice AI Outbound Call"** action to add to your workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055727976/original/ZheFLpsCotY5ib0d3fDCVF2Vwa32S0qLhw.gif?1760105555)

  

  

### **Step 3:** Configure Outbound Voice AI Workflow Action

  

-   **Action Name:** Give your workflow action an appropriate name, or keep the default name. This action name serves as a description of what the action is doing or meant for.

  

-   **AI Agent:** Choose the agent who will handle the call; remember the same agent can manage both inbound and outbound interactions.
    -   If you haven't created a Voice AI agent, first go create an agent and then come back to this step. [Click here to learn more about creating Voice AI agents.](https://help.gohighlevel.com/en/support/solutions/articles/155000004107)

  

-   **From Phone Number:** Add the phone number that the Voice AI agent will be calling from.
    -   If you haven't added a phone number to your account, first go add a phone number and then come back to this step. [Click here to learn more about adding phone numbers to your account.](https://help.gohighlevel.com/en/support/solutions/articles/155000003226)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729753/original/L1Busj6NnRLdBYoFbqOn0iqR4Y3G_k3GUA.gif?1760106346)

  

  

### **Step 4:** Save, Publish, & Test

  

Save your workflow and monitor scheduled calls to ensure they comply with the built-in thresholds. You can also test the workflow and outbound calling by adding yourself to the workflow and having the Voice AI agent call your personal phone.

* * *

## **Frequently Asked Questions**

  

**Q: How is outbound call scheduling managed on the platform?**

Calls are placed via a workflow action—one call per minute per location, with daily limits and repetition controls ensuring balanced outreach.

  

**Q: Can the same agent be used for both inbound and outbound calls?**

Yes, the current beta design supports using the same agent for both call directions; ensure that you provide appropriate prompts to differentiate call types.

  

**Q: What happens if a contact’s phone number has already reached its daily or biweekly call limit?**

If a phone number exceeds the daily single-call limit or the maximum of 4 calls in 2 weeks, additional calls are deferred to the next day or will fail after the threshold is reached.

  

**Q: What does “deferred” vs “failed” mean in the context of scheduled calls?**  
“Deferred” generally means the system intends to call later (e.g., outside your allowed window or due to load). “Failed” indicates a condition that prevented calling (e.g., missing number, policy/consent block). Review call logs for the precise reason and next steps.

  

**Q: How can I safely test an outbound call flow without dialing real customers?**  
Create an internal test segment (tags like “QA – Voice AI”), point the workflow only to those records, and use your own numbers for live trials. Validate results in call logs/transcripts before expanding.

* * *

### **Related Articles**

  

-   [AI Voice Agents Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000003911)  
      
    
-   [Creating Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000004107)  
      
    
-   [Working Hours for AI Employee](https://help.gohighlevel.com/en/support/solutions/articles/155000004139)  
      
    
-   [Inbound Call Flow for Voice AI](https://help.gohighlevel.com/en/support/solutions/articles/155000003431)  
      
    
-   [Voice AI Custom Actions](https://help.gohighlevel.com/en/support/solutions/articles/155000005461)