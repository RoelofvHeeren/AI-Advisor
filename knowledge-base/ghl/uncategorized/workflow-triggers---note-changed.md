---
title: "Workflow Triggers - Note Changed"
url: "https://help.gohighlevel.com/support/solutions/articles/48001213879-workflow-triggers-note-changed"
category: "Uncategorized"
---

# Workflow Triggers - Note Changed

This article explains the Note Changed workflow trigger, a tool designed to automate actions whenever a note in a contact record is modified. You’ll learn what this trigger is, its benefits, how to configure it step by step, and examples of its practical applications.

* * *

# **What is Note Changed Workflow Trigger**

  

The Note Changed workflow trigger activates when a note in a contact record is updated or modified. This trigger helps to synchronize contact information and automate workflows based on changes made to notes, making it invaluable for keeping data up to date and initiating follow-ups or additional actions. By using filters like **“Has Tag”** or **“Doesn’t Have Tag,”** you can target specific types of contacts for greater precision in your workflows.

* * *

## **Key Benefits of Using This Trigger**

  
  

-   **Real-Time Synchronization:** Automatically tracks changes in contact notes, ensuring your system is always updated.

  
  

-   **Automated Follow-Ups:** Triggers workflows to respond to note changes, such as updating contact statuses or assigning tasks.

  
  

-   **Enhanced Data Management:** Helps organize and manage contact records by automating responses to note updates.

  
  

-   **Filter-Based Precision:** Allows workflows to target specific contacts based on tags, ensuring the right action is taken for the right contacts.

  
  

-   **Increased Productivity:** Reduces manual intervention by automating routine actions triggered by note modifications.

* * *

## **Configuring the Trigger: A Step-by-Step Process**

  
  

### **Navigate to Workflow Triggers**

  

Access the automation or workflow settings in your platform.

###   
**Select the Trigger**

  

From the available options, choose the Note Changed trigger under the Contact section.

###   

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038703243/original/oxf_ZSQ6GTM-WwtJrT_-1bFs1rbaELegUg.jpeg?1734704330)

###   
**Name Your Trigger** 

  

  
Give the trigger a descriptive name.  
  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038704176/original/wr-RX8Dtg372z6F31lF6urhmdlt3c9CibQ.png?1734705019)

  

  

**Set Filters** 

  

  
Set filters to specify conditions that refine when a workflow trigger activates, ensuring precise targeting.  
  
  

-   **Has Tag:** Configure the workflow to trigger only when the contact has the specified tag.  
      
    
-   **Doesn’t Have Tag:** Configure the workflow to trigger only when the contact lacks the specified tag.  
      
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038707107/original/sDlYPbAGVWWQON3EmxcKVQ-Umot26tiT3Q.jpeg?1734706748)  
  

  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038704383/original/C6qZ7mfUzObJhThLnmJ30yjoh9qU-8QPhw.png?1734705137)

* * *

  

### **Save the Trigger**

  

Ensure the configuration is saved and linked to the appropriate workflow actions.

  

  

### **Test and Publish**

  

Test the trigger using sample data, then enable the Publish toggle to activate the workflow.

* * *

## **Use Cases**

###   
**Customer Support Task Assignment**

  

  

**Scenario:** A support agent updates a note with details of an ongoing issue. The workflow should assign a task to the relevant specialist.

  
  

**Trigger Setup:**  
  

-   **Trigger:** Note Changed.  
      
      
    
-   **Filter:** Has Tag: “High Priority.”

  
  

**Outcome:** The workflow assigns the task to a senior support specialist and notifies them immediately.  
  

* * *

### **Membership Renewal Reminders**

  
  

**Scenario:** A note is updated to indicate that a member’s renewal date is approaching. This change should trigger a reminder email.

  
  

**Trigger Setup:**  
  

-   **Trigger:** Note Changed.  
      
      
    
-   **Filter:** Has Tag: “Member.”

  
  

**Outcome:** The workflow sends a personalized renewal reminder email to the member.  
  

* * *

## **Frequently Asked Questions**

  
**Can the trigger handle multiple note changes in quick succession?  
**

Yes, the trigger activates each time a note is updated. However, to prevent overlapping workflows, you can add conditions or cooldown periods in the workflow actions.

  

**How does the filter “Has Tag” affect the workflow?  
**

The “Has Tag” filter ensures that the workflow only activates for contacts with a specified tag, enabling precise targeting and reducing unnecessary workflow execution.

  

**Can I combine this trigger with other triggers in the same workflow?  
**

Yes, the Note Changed trigger can be combined with others, such as “Tag Added” or “Task Completed,” to create more complex workflows.

  

**What happens if a note is deleted instead of updated?  
**

This trigger activates only when a note is changed or updated. Deleting a note will not trigger the workflow.

  

**Is it possible to track changes made to specific types of notes?  
**

Currently, the trigger applies to all note changes in a contact record. You can use filters like “Has Tag” or “Doesn’t Have Tag” to refine the workflow’s scope based on the type of contact.