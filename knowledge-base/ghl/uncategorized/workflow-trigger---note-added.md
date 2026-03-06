---
title: "Workflow Trigger - Note Added"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003248-workflow-trigger-note-added"
category: "Uncategorized"
---

# Workflow Trigger - Note Added

This article explains the **"Note Added"** workflow trigger, a tool designed to automate actions whenever a new note is added to a contact’s record. You’ll learn what this trigger is, the key benefits of using it, step-by-step configuration instructions, and real-world use cases. Finally, we’ll address common questions to help you optimize this feature in your workflows.

* * *

**TABLE OF CONTENTS**

-   [What is Note Added Workflow Trigger](#What-is-Note-Added-Workflow-Trigger)[](#Key-Benefits-of-Using-the-Trigger)
-   [Key Benefits of Using the Trigger](#Key-Benefits-of-Using-the-Trigger)[](#Configuring-the-Trigger%3A-A-Step-by-Step-Process)
-   [Configuring the Trigger: A Step-by-Step Process](#Configuring-the-Trigger%3A-A-Step-by-Step-Process)
    -   [Add a New Workflow Trigger](#Add-a-New-Workflow-Trigger)
    -   [Name Your Trigger](#Name-Your-Trigger)
    -   [Set Filters](#Set-Filters)[](#Use-Cases)[](#Use-Cases) 
-   [](#Use-Cases)[](#Use-Cases)[Use Cases](#Use-Cases)
    -   [Customer Support Issue Escalation](#Customer-Support-Issue-Escalation)
    -   [Event Follow-Up for Attendees](#Event-Follow-Up-for-Attendees%C2%A0) 
    -   [Upsell Opportunities in E-Commerce](#Upsell-Opportunities-in-E-Commerce)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Note Added Workflow Trigger**

  
The Note Added workflow trigger activates whenever a new note is attached to a contact’s profile. This trigger allows you to automate actions such as notifying team members, updating contact statuses, or tagging contacts based on the note’s content. It is especially useful for ensuring timely responses and enhancing collaboration within your team.

* * *

## **Key Benefits of Note Added Trigger**

  

-   **Automated Notifications:** Ensures team members are informed in real time when notes are added to important contact records.  
      
    
-   **Improved Collaboration:** Enhances teamwork by sharing relevant updates immediately with stakeholders.  
      
    
-   **Streamlined Follow-Ups:** Automates the creation of tasks or reminders based on the context of the added note.  
      
    
-   **Data Categorization:** Automatically adds relevant tags to contacts based on note content, improving contact organization.  
      
    
-   **Precision with Filters:** Use “Has Tag” or “Doesn’t Have Tag” filters to target specific contacts and ensure actions are relevant.

* * *

## **Configuring the Trigger: A Step-by-Step Process**

  

### **Access Workflow Settings**

  
Navigate to the workflow automation section of your platform. Create a new workflow from scratch or select the existing workflow where you want to use **"Note Added"** trigger.

  

  

### **Add a New Workflow Trigger**

  
Click **“+ Add New Trigger”** and select **"Note Added"** from the dropdown menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038765514/original/zCbu1Uce6nr0kXEpixVVEBd7GB1He0zybw.png?1734934232)

  

### **Name Your Trigger**

  
Provide a descriptive name, such as “VIP Note Added Trigger.”

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038765555/original/bgx4nm1Gc_CNObNi1wjolMvi0hWum-3kdQ.png?1734934294)  

###   

### **Set Filters**

-   **Has Tag:** Configure the trigger to activate only when the contact has a specific tag.  
      
    
-   **Doesn’t Have Tag:** Configure the trigger to activate only when the contact lacks a specific tag.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038766249/original/FVxnh-3Fe5HwGmJTFhFDQMQcnAuMZkh4OQ.png?1734935715)  

* * *

### **Save the Configuration**

  

Ensure all changes are saved before proceeding.  
  

###   

### **Test and Publish**

  

Test the workflow to confirm its functionality, then enable the Publish toggle to activate it.

* * *

## **Use Cases**

### **Customer Support Issue Escalation**

  

**Scenario:** Support agents add notes describing unresolved issues. The workflow escalates the issue to a senior agent.

  

**Trigger Setup:**

  

-   **Trigger:** Note Added.  
      
    
-   **Filter**: Has Tag: “High Priority.”

  

**Outcome:** The workflow assigns the issue to a senior agent and sends an immediate notification for review.

* * *

### **Event Follow-Up for Attendees** 

  
**Scenario:** After a networking event, notes added to attendee profiles should trigger personalized follow-up emails.

  
  
**Trigger Setup:**

  

-   **Trigger:** Note Added.  
      
    
-   **Filter:** Has Tag: “Event Attendee.”

  
  
**Outcome:** The workflow sends follow-up emails and updates attendee profiles with relevant tags.

* * *

### **Upsell Opportunities in E-Commerce**

  

**Scenario:** Notes added to customer profiles about product preferences should trigger recommendations for related products.  
  

**Trigger Setup**

  

-   **Trigger:** Note Added.  
      
    
-   **Filter:** Has Tag: “Frequent Buyer.”  
      
    

**Outcome:** The workflow generates a personalized email recommending products based on their preferences.

* * *

## **Frequently Asked Questions**

  

**Can the trigger handle multiple notes added in quick succession?**

Yes, the trigger activates each time a note is added. However, you can configure workflow conditions or cooldown periods to avoid redundant actions.

  

**How do the filters “Has Tag” and “Doesn’t Have Tag” work?**

These filters allow you to target specific contacts. “Has Tag” activates the trigger only for contacts with the specified tag, while “Doesn’t Have Tag” activates it for contacts without the specified tag.

  

**Can I use this trigger with other triggers in a single workflow?**

Yes, the Note Added trigger can be combined with other triggers, such as “Task Completed” or “Opportunity Stage Changed,” for advanced workflows.

  

**What happens if a note is deleted instead of added?**

This trigger activates only when a note is added. Deleting a note does not initiate the workflow.

  

**Is it possible to customize actions based on the note’s content?**

Yes, you can use workflow actions to analyze the note’s content (e.g., keywords) and perform specific actions, such as tagging or assigning tasks, based on predefined criteria.