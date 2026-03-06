---
title: "Workflow Trigger - Call Details"
url: "https://help.gohighlevel.com/support/solutions/articles/48001212511-workflow-trigger-call-details"
category: "Uncategorized"
---

# Workflow Trigger - Call Details

The **Call Details** workflow trigger allows workflows to start based on updates to call-related information. This trigger supports automation based on call outcomes, direction, phone numbers, and dispositions. It helps teams respond consistently to different call scenarios through automated actions.

* * *

**TABLE OF CONTENTS**

-   [What Is the Call Status Changed Workflow Trigger?](#%E2%80%8B%E2%80%8BWhat-Is-the-Call-Status-Changed-Workflow-Trigger?)
    -   [Key Benefits of Call Status Changed Workflow Trigger](#Key-Benefits-of-Call-Status-Changed-Workflow-Trigger)
    -   [How to Configure a Call Details Workflow Trigger?](#How-to-Configure-a-Call-Details-Workflow-Trigger?)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What Is the Call Status Changed Workflow Trigger?**

  

The **Call Details** workflow trigger starts a workflow when information related to a phone call is updated. This includes changes to call status, call direction, associated phone numbers, number pools, and custom dispositions.

  

This trigger supports additional filters like call direction, phone number, number pool, and custom dispositions, allowing workflows to respond only to specific call scenarios. It is commonly used to automate follow-ups, apply tags, or trigger internal actions based on how a call concludes or is classified.

* * *

## **Key Benefits of Call Status Changed Workflow Trigger**

  

-   **Automates follow-ups based on call outcomes:** Triggers workflows automatically when a call status changes, ensuring timely follow-up actions without manual intervention.

  

-   **Provides precise control using call-based filters:** Allows workflows to run only for specific call scenarios using filters such as call direction, call status, phone number, number pool, and custom dispositions.

  

-   **Improves response consistency across teams:** Ensures calls marked as missed, voicemail, or no answer are handled consistently with predefined actions like task creation, tagging, or notifications.

  

-   **Reduces manual tracking and errors:** Eliminates the need to manually monitor call logs by reacting instantly to call status updates as they occur.

* * *

## **How to Configure a Call Details Workflow Trigger?**

  

Below are the key elements involved in configuring the **Call Details** workflow trigger. Each setting determines **when** and **under what conditions** a contact is added to a workflow.

  

### **Open the Workflow Builder**

  

Start by navigating to **Automation → Workflows** and either create a new workflow or open an existing one. The Workflow Builder is where all triggers and actions are defined. This step establishes the automation context in which the call-based trigger will operate.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322826/original/877GivrHZahADR6mM0zROjLyVQyyQhs4yA.png?1766588556)

  

  

### **Add a Workflow Trigger**

  

Within the workflow canvas, select **Add Trigger** to choose what event should start the workflow. Triggers define the conditions under which contacts enter a workflow. Selecting the correct trigger type is essential for accessing call-related options.

  

### **Select the Call Details Trigger Type**

  

From the available trigger categories, choose **Call Details**. This enables triggers related to phone call activity, including call status, direction, phone number, and disposition-based conditions. Once selected, additional call-specific filters become available for configuration.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061323483/original/as6KeZpSKctZitA5odrFg8jaxIU_2t6I3A.png?1766589178)

###   

### **Workflow Trigger Name**

  

The trigger name helps identify the purpose of the trigger within the workflow. While it does not affect execution, a clear name improves readability and long-term maintenance. Descriptive names are especially helpful in workflows with multiple triggers.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061323562/original/i7UZfe5j9eEOqPTJdX8fx3qkI1n--9gKKQ.jpeg?1766589235)

###   

### **Add Filters**

  

The **Add Filters** option allows multiple conditions to be combined within a single trigger. All selected filters must be met for the workflow to run. This enables precise and highly targeted automation.

  

### **Call Direction**

  

Call Direction specifies whether the trigger should respond to incoming calls, outgoing calls, or both. This allows workflows to behave differently depending on how the call was initiated. It is useful for separating inbound lead handling from outbound call processes.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322639/original/Rks01lfEtsKumb9c9lFjMDS0yku7tfBm2g.png?1766588441)

###   

### **Call Status**

  

Call Status defines which call outcomes should activate the trigger, such as no answer, voicemail, or busy. The workflow runs only when a call updates to one of the selected statuses. This ensures automation is tied to meaningful call results.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322664/original/NUCgoi_uKg5tMJECgXEa2FtB4fN3Si8NOA.png?1766588459)

###   

### **In Number Pool**

  

This filter limits the trigger to calls associated with a specific number pool. It is helpful when different number pools are used for different campaigns or teams. Applying this filter ensures workflows respond only to calls from the intended sources.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322700/original/cBQQkoKgdB-FGl6WmpNDLkXWoMTpI89_NA.png?1766588476)

  

###   

### **Custom Disposition**

  

Custom Disposition allows the trigger to respond to call classifications applied after a call ends. This provides an additional layer of control beyond standard call statuses. It is useful when workflows need to react to internal call outcomes marked by users or systems.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322781/original/I_YpN2Dc9FHQqw8ylGEXM8DgeDueeic6Cw.png?1766588521)

###   

### **In Phone Number**

  

This filter restricts the trigger to calls associated with specific phone numbers. It is useful when individual phone numbers serve different business functions. Using this filter helps keep workflows targeted and relevant.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061322762/original/3si76Y7tgpyrbZ0mbYCpGNJPpKSOx66G8w.png?1766588498)

###   

### **Save Trigger**

  

Saving the trigger applies the configuration and activates it within the workflow. Once saved, contacts will be added to the workflow whenever the defined call detail conditions are met. This step ensures the trigger is ready for execution.

* * *

## **Frequently Asked Questions**

  

**Q: Does the Call Details trigger run every time a call is logged or only when specific details change?**

The trigger runs only when the selected call details—such as call status, direction, or disposition—match the configured conditions. It does not activate for every call by default. This ensures workflows respond only to relevant call events.

  

**Q: Can the Call Details trigger fire multiple times for the same contact?**

Yes, the trigger can run multiple times for the same contact if separate calls meet the trigger conditions. Each qualifying call event is evaluated independently. To control repeat enrollment, use workflow settings such as re-entry rules or additional filters.

  

**Q: How does Call Details differ from time-based or activity-based workflow triggers?**

Call Details reacts specifically to changes in call-related information, rather than scheduled times or general contact activity. This makes it suitable for real-time or near-real-time automation based on call outcomes. It is especially useful for handling missed calls, voicemails, or follow-ups after specific call results.

  
**Q: What happens if multiple Call Details triggers exist across different workflows?**

Each workflow evaluates call events independently based on its own trigger configuration. A single call can add a contact to multiple workflows if the trigger conditions are met. Careful filter design helps prevent overlapping or conflicting automation.