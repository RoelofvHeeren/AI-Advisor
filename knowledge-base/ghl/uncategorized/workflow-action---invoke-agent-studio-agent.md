---
title: "Workflow Action - Invoke Agent Studio Agent"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007402-workflow-action-invoke-agent-studio-agent"
category: "Uncategorized"
---

# Workflow Action - Invoke Agent Studio Agent

Bring the full power of AI to any automation. The new Invoke Agent Studio Agent workflow action lets you run a Production Agent Studio agent mid-flow, pass it real-time data, and route the result to the next step, no code required.

* * *

**TABLE OF CONTENTS**

-   [What is Invoke Agent Studio Agent?](#%E2%80%8B%E2%80%8BWhat-is-Invoke-Agent-Studio-Agent?)
-   [Key Benefits of Invoke Agent Studio Agent](#Key-Benefits-of-Invoke-Agent-Studio-Agent)
-   [Prerequisites & Permissions](#Prerequisites-&-Permissions)
-   [Workflow Action Settings](#Workflow-Action-Settings)
-   [Using Agent Output Downstream](#Using-Agent-Output-Downstream)
-   [Best Practices & Example Use Cases](#Best-Practices-&-Example-Use-Cases)
-   [How To Setup Invoke Agent Studio Agent](#How-To-Setup-Invoke-Agent-Studio-Agent)
    -   [Build the Agent in Agent Studio](#Build-the-Agent-in-Agent-Studio)[](#Add-the-Workflow-Action)
    -   [Add the Workflow Action](#Add-the-Workflow-Action)
    -   [Configure the Workflow Action](#Configure-the-Workflow-Action)
    -   [Action Name](#Action-Name)
    -   [Select Agent (Required)](#Select-Agent-\(Required\))
    -   [Message Field (Optional but Recommended)](#Message-Field-\(Optional-but-Recommended\))
    -   [Important Configuration Notes](#Important-Configuration-Notes)
    -   [Configure Inputs and Save](#Configure-Inputs-and-Save)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What is Invoke Agent Studio Agent?**

  

Invoke Agent Studio Agent is a workflow action that calls any Agent Studio agent you have published to Production and configured with a Chat Trigger. When the action runs, the selected agent executes in the background, returns its output to the workflow, and hands control back so the automation can continue. 

  

This bridges visual automations and no-code AI agents, enabling sophisticated reasoning, content generation, and external actions inside the same workflow canvas.

* * *

## **Key Benefits of Invoke Agent Studio Agent**

Harnessing agents inside Workflows unlocks outcomes that previously required multiple tools or complex custom code.

  

-   **AI anywhere:** Drop the action before, after, or between any other step for context-aware branching.
    

  

-   **Real-time insights:** Summarise conversations, predict next steps, or score leads instantly.
    

  

-   **Multi-channel output:** Pipe the agent’s response into Email, SMS, WhatsApp, internal notifications, or custom values.
    

  

-   **Unified data:** Update contacts, opportunities, custom objects, or Google Sheets with the agent’s structured JSON output.
    

  

-   **Scalable creativity:** Generate copy, images, proposals, or tasks on demand—cut production time and costs.
    

  

-   **No limits on logic:** Chain agents, Webhooks, API calls, or If/Else conditions to create end-to-end automations.
    

* * *

## **Prerequisites & Permissions**

  

Running an agent inside a workflow requires:

  

-   An active AI Employee add-on (Agent Studio access).
    

  

-   An Agent Studio agent published to Production. Draft or Staging versions will not appear in the dropdown.
    

  

-   A Chat Trigger enabled on the agent so it can start from a message payload.
    

  

-   Location permissions to edit workflows and AI agents.
    

* * *

## **Workflow Action Settings**

  

Invoke Agent Studio Agent appears in the action selector. Open the sidebar to configure:

  

-   **Agent:** Choose any Production agent in the current sub-account.
    

  

-   **Message (optional):** Free-text string that will be sent as the agent’s chat message. Use merge fields for dynamic values.
    

  

-   **Input Variables:** Map workflow custom values or static text to the agent’s named input variables. Unmapped required variables will halt the action.
    

  

-   **Store Output As:** Pick (or create) a custom value to capture the agent’s full JSON response for downstream steps.
    

* * *

## **Using Agent Output Downstream**

  

The action returns the agent’s response object, including top-level text, JSON payloads, and all variables set inside the agent. Common patterns:

  

-   Update Contact » Set a custom field to the agent’s summary.
    

  

-   If/Else » Branch when agent.result.score ≥ 80.
    

  

-   Send Email » Insert into the body.
    

  

-   Webhook » POST the entire JSON to a third-party service for fulfilment.
    

* * *

## **Best Practices & Example Use Cases**

  

Thoughtful design prevents loops and keeps runs fast:

  

-   Keep prompts short and supply structured context via variables.
    

  

-   Return machine-readable JSON from the agent for reliable branching.
    

  

-   Wrap long-running external calls inside the agent (API node) instead of after the action.
    

  

-   **Example 1:** “Lead Enrichment” Trigger on Form Submitted → Invoke agent to research company → Update Opportunity & Notify rep.
    

  

-   **Example 2:** “Conversation Summary” - After Conversation Closed → Invoke agent to summarise chat → Save note & Send recap email.
    

* * *

## **How To Setup Invoke Agent Studio Agent**

  

Proper setup begins inside Agent Studio before configuring the Workflow action. The agent must be correctly built and published before it becomes available inside Workflows.

  

### **Build the Agent in Agent Studio**

  

-   Navigate to **Agent Studio**.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065743727/original/bqiF-IheOO0xhspMWoE8hcHNv8zY0xmsXQ.png?1772092135)

  

  

-   Create a new agent.

  

-   Select **Chat Message** as the trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065744012/original/84px9jKZP3RSJMQ4TnS7SGZg5cqFs6s0dg.png?1772092262)

  

-   Configure the agent’s instructions and input variables.
-   Click **Publish to Production**.

  

Only published agents will appear inside the Workflow action dropdown.

* * *

  

### **Add the Workflow Action**

  

-   Navigate to **Automation → Workflows**.
    
-   Open or create a workflow.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065744136/original/qkI69KSSd1krHNCw-vrSkp5Hhfx0cuj-bQ.png?1772092370)

  

  

-   Click **\+ Add Action**.
    
-   Under **Agent Studio**, select **Invoke Agent Studio Agent**.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065744322/original/L67Qtm5sYBNzafFUD2RjIZ5GSrAv4tVyRw.png?1772092442)

  

* * *

### **Configure the Workflow Action**

  

Once you add the **Invoke Agent Studio Agent** action to your workflow, the configuration panel determines which agent runs and what data is passed to it. Proper configuration ensures the agent executes successfully and returns meaningful output.

  

### **Action Name**

  

The **Action Name** field allows you to rename this workflow step for clarity. This is especially useful if you plan to use multiple agents within the same workflow.

  

Example:

-   Lead Message Analyzer
    
-   AI Summary Step
    
-   Sales Insight Generator
    

  

Renaming this field does not affect how the agent runs — it only helps organize your workflow visually.

###   

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065744902/original/RIkuylxRRSy5Jr14TnYbmL9oV9cYwWPD1w.png?1772092941)

  

  

### **Select Agent (Required)**

  

In the **Select Agent** dropdown:

  

-   You will see all agents that:
    
    -   Are published to Production
        
    -   Use the Chat Message trigger
        

  

Select the specific agent you want to execute in this workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065744919/original/b1ck2XFDxI4GG6FPWKxmD3CZ61j_EC1szw.png?1772092960)

  

  

If your agent does not appear:

  

-   Confirm it is published to Production
    
-   Confirm it uses the Chat Message trigger
    

* * *

### **Message Field (Optional but Recommended)**

  

The **Message** field allows you to define what the agent should do when the workflow reaches this step. You can provide instructions and include workflow custom values to pass dynamic data to the agent.

  

**Example:**  Analyze the contact’s last inbound message and provide a short summary along with recommended next actions for the sales team.

  

**Example with personalization:** Analyze the most recent message from {{contact.name}} and provide a short summary along with recommended next actions for the sales team.g

  

Custom values (such as {{contact.name}}) are resolved before the agent executes, meaning the agent receives fully rendered content specific to that contact.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065745226/original/WIWcthT9xDIJ3f3o0v2bMKbkuhSKVWTjng.png?1772093215)

###   

### **Important Configuration Notes**

  

-   Any required input variables defined inside the agent must be mapped correctly.
    
-   If required inputs are missing, the agent may fail to execute.
    
-   The agent runs immediately when the workflow reaches this step.
    
-   The response becomes available for downstream use as {{agent\_studio\_execution.response}}
    

* * *

### **Configure Inputs and Save**

  

-   Map required input variables.
    
-   Enter optional instructions in the Message field.
    
-   Click **Save Action**.
    

* * *

## **Frequently Asked Questions**

**Q: Why doesn’t my agent appear in the dropdown?**

Only agents published to Production and owned by the current sub-account are listed. Promote the Staging version, refresh the builder, and try again.

  

**Q: Can one workflow call multiple agents?**

Yes. add as many Invoke Agent Studio Agent actions as you like. Chain them sequentially or in separate branches.

  

**Q: What happens if the agent errors out?**

The action will fail and surface an error message in the workflow log. Use an On Failure path or a Try/Catch If/Else branch to handle gracefully.

  

**Q: Are additional AI credits consumed?**

Agent runs use the same metering as when you run the agent from Agent Studio. There is no extra workflow surcharge.

  

**Q: Is there a timeout?**

Yes. Agents must respond within 60 seconds. Flows will pause if the limit is exceeded, then retry according to your workflow error settings.

  

**Q: Can I trigger a workflow from inside an agent?**

Sure, use the HTTP or Webhook node inside the agent to call the Workflow API, but avoid circular loops.

  

**Q: Does the action work in Draft workflows?**

Absolutely. You can test the action in Draft mode; contacts will process once the workflow is Published.

  

**Q: How do I debug variable mapping issues?**

Turn on Run Logs in Agent Studio to view received inputs and returned outputs, then compare with the workflow’s Execution Log.

* * *

### **Related Articles**

-   [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/a/solutions/articles/155000006058?portalId=48000045315) 
    
-   [Ask AI + Agent Studio Integration](https://help.gohighlevel.com/a/solutions/articles/155000006677?portalId=48000045315)
    
-   [How to Set Up Agent Studio Triggers for Real-Time Starts](https://help.gohighlevel.com/a/solutions/articles/155000007310?portalId=48000045315)