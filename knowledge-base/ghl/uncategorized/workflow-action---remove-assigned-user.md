---
title: "Workflow Action - Remove Assigned User"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003268-workflow-action-remove-assigned-user"
category: "Uncategorized"
---

# Workflow Action - Remove Assigned User

This article explains the **"Remove Assigned User"** workflow action, highlighting its purpose, benefits, and configuration process. You’ll also discover practical use cases and answers to complex questions to help you make the most of this feature in your workflows.

* * *

**TABLE OF CONTENTS**

-   [What is Remove Assigned User](#What-is-Remove%C2%A0Assigned-User)
    -   [Key Benefits of Using This Workflow Action](#Key-Benefits-of-Using-This-Workflow-Action)
    -   [Configuring the Action: A Step-by-Step Process](#Configuring-the-Action%3A-A-Step-by-Step-Process)
        -   [Add the Action](#Add-the-Action)
        -   [Select Action](#Select-Action)
        -   [Name the Action](#Name-the-Action%C2%A0) 
        -   [Save the Action](#Save-the-Action)
        -   [Test and Publish](#Test-and-Publish)
    -   [Use Cases](#Use-Cases)
        -   [Sales Pipeline Cleanup](#Sales-Pipeline-Cleanup)
        -   [Task Completion in Customer Support](#Task-Completion-in-Customer-Support)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Remove** **Assigned User**

  

The Remove Assigned User action is designed to unassign a CRM user from a contact, effectively leaving the contact unassigned. This action is particularly useful when a contact’s status or workflow criteria change, and they no longer need direct user assignment. By removing the assigned user, the contact can re-enter other workflows or remain unallocated for future processing.

* * *

## **Key Benefits of Using This Workflow Action**

  

-   **Reset Contact Assignment:** Clears user assignments to reset the contact for re-engagement or reassignment.  
      
    
-   **Automated Workflow Management:** Seamlessly removes user assignments when specific triggers (like task completion or status changes) occur, eliminating manual intervention.  
      
    
-   **Improved User Availability:** Frees up users by removing contacts that no longer require their direct attention.  
      
    
-   **Enhanced Workflow Flexibility:** Allows contacts to move between workflows without conflicting or outdated assignments.

* * *

## **Configuring the Action: A Step-by-Step Process**

  

### **Add the Action**

  
In your workflow builder, click the **“+”** icon to add a new action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038521773/original/TL9e4deaHxFp0XhEBAZLgY2KpHyqc1kRuQ.png?1734504421)

  

### **Select Action**

  
Choose the **“Remove Assigned User”** action from the available options.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038521354/original/nPGAcmAlHVvuDCLwpW49olfUUYCX2AjH-w.jpeg?1734503829)

  

### **Name the Action** 

  
Provide a descriptive name, such as “Reset User Assignment” or “Clear Assigned User,” to keep your workflow organized.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038521793/original/la0nMoZj9cn8Bc-oDlyggFkZIs951sm1og.png?1734504467)

  

### **Save the Action**

  
There are no additional fields to configure, so once the name is set, **"Save"** the action.

  
  

### **Test and Publish**

  
Test your workflow to ensure it removes assignments as intended, and enable the **"Publish"** toggle to activate it.  
  

* * *

## **Use Cases**

  

### **Sales Pipeline Cleanup**

  

**Scenario:** A contact’s opportunity status changes to “Closed Won” or “Closed Lost.” The sales team no longer needs to follow up, and the contact should be reset for other workflows.  
  

**Solution:**

  

-   **Trigger:** Opportunity Status Changed  
      
    
-   **Action:** Remove Assigned User.  
      
    
-   **Outcome:** The contact is unassigned from the salesperson, freeing them to focus on active opportunities.

  

### **Task Completion in Customer Support**

  
**Scenario:** A support agent completes a task related to a contact, such as resolving a ticket. Once the task is done, the contact no longer requires direct assignment.  
  

**Solution:**

  

-   **Trigger:** Task Completed.  
      
    
-   **Action**: Remove Assigned User.  
      
    
-   **Outcome:** The agent is unassigned, allowing them to handle new support tickets efficiently.

* * *

## **Frequently Asked Questions**

  

**What happens to a contact after the assigned user is removed?**

Once the assigned user is removed, the contact becomes unassigned and remains in the system without an active user assignment. It can then be reassigned through other workflows or triggers.

  

**Can this action be combined with multiple triggers in a single workflow?**

Yes, you can combine the Remove Assigned User action with multiple triggers, such as “Task Completed” and “Opportunity Status Changed,” to create complex workflows that dynamically manage contact assignments.

  

**Will this action remove the assignment history?**

No, removing an assigned user does not erase the contact’s assignment history. You can still track previous user assignments through activity logs or reporting tools.

  

**How do I ensure this action doesn’t interrupt other workflows?**

To prevent conflicts, test the workflow before publishing it and review conditions for all triggers carefully. Ensure the Remove Assigned User action is only applied where necessary.

  

**Can I reassign a contact immediately after using the Remove Assigned User action?**

Yes, after removing the current assignment, you can add a follow-up action in the workflow to reassign the contact to a new user using the “Assign to User” action.