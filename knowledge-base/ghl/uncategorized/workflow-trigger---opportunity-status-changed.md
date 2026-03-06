---
title: "Workflow Trigger - Opportunity status changed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003252-workflow-trigger-opportunity-status-changed"
category: "Uncategorized"
---

# Workflow Trigger - Opportunity status changed

This article provides a detailed explanation of the **"Opportunity Status Changed"** workflow trigger, a tool that automates processes when the status of an opportunity is updated. You will learn what this trigger does, its key benefits, how to configure it step-by-step, and examples of real-world applications. Finally, we will address common questions to help you maximize its potential.

* * *

**TABLE OF CONTENTS**  
  

-   [What is Opportunity Status Changed Workflow Trigger](#What-is-Opportunity-Status-Changed-Workflow-Trigger)[](#Key-Benefits-of-Opportunity-Status-Changed-Trigger)
-   [Key Benefits of Opportunity Status Changed Trigger](#Key-Benefits-of-Opportunity-Status-Changed-Trigger)[](#Configuring-the-Trigger%3A-A-Step-by-Step-Process)
-   [Configuring the Trigger: A Step-by-Step Process](#Configuring-the-Trigger%3A-A-Step-by-Step-Process)
    -   [Name Your Trigger](#Name-Your-Trigger)
    -   [Configure Filters](#Configure-Filters)
    -   [Assigned To](#Assigned-To)
-   [Use Cases](#Use-Cases)
    -   [Sales Milestone Notifications](#Sales-Milestone-Notifications)
    -   [Lost Opportunity Follow-Up](#Lost-Opportunity-Follow-Up)
    -   [Pipeline Transition Alerts](#Pipeline-Transition-Alerts)
    -   [Lead Requalification Workflow](#Lead-Requalification-Workflow)
    -   [Marketing Campaign Success Tracking](#Marketing-Campaign-Success-Tracking)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Opportunity Status Changed Workflow Trigger**

  

The Opportunity Status Changed workflow trigger activates when the status of an opportunity in the CRM changes, such as moving from “Open” to “Won” or “Lost.” This trigger helps automate processes like notifying team members, updating CRM records, or initiating follow-up actions. By leveraging this trigger, businesses can streamline workflows, reduce manual tasks, and ensure timely communication across teams.

* * *

## **Key Benefits of Opportunity Status Changed Trigger**

  
  

-   **Automated Notifications:** Instantly alert relevant team members about opportunity status updates, improving internal communication.  
      
      
    
-   **Improved Workflow Efficiency:** Reduce manual intervention by automating routine actions triggered by status changes.  
      
      
    
-   **Enhanced CRM Data Accuracy:** Automatically update CRM records to ensure consistent and up-to-date tracking of opportunities.  
      
      
    
-   **Customizable Filters:** Use filters like **“Moved From Status”** or **“In Pipeline”** to create highly targeted workflows tailored to your business needs.  
      
      
    
-   **Streamlined Sales Processes:** Enable faster transitions between opportunity stages, ensuring timely invoicing, follow-ups, or handoffs.  
      
    

* * *

## **Configuring the Trigger: A Step-by-Step Process**

  

###   
**Access Workflow Settings**

  
Navigate to the automation or workflow settings in your CRM. Create a new workflow from scratch or select the existing workflow where you want to implement **"Note Added"** trigger.

###   
**Add New Trigger**

  
Click **“ + Add New Trigger”** and select Opportunity Status Changed from the dropdown menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038815320/original/FnODhDk0EWJh7BgT4boRrNjs4FrjF1Eamw.png?1734975099)

  

### **Name Your Trigger**

  
Provide a descriptive name, such as “Opportunity Won Notification.”

###   

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038815346/original/QeUKYjchgeZ9z1hgH1k_VVxSnJk0qUmnTQ.png?1734975136)

###   
**Configure Filters**

  
Refine when the trigger activates by setting filters:  
  

-   **Assigned To:** Specify a user or team responsible for the opportunity.  
      
    
-   **Tag (formerly Has Tag):** Filter opportunities by tags using advanced operators and multi-select (Equals to / Not equals to / Any of / None of). You can also add multiple Tag filters for advanced inclusion/exclusion.  
      
    
-   **In Pipeline:** Limit the trigger to opportunities in a specific pipeline.  
      
    
-   **Lead Value:** Set a minimum or maximum lead value to activate the workflow.  
      
    
-   **Moved From Status:** Define the original status before the change.  
      
    
-   **Moved To Status:** Specify the new status after the change.  
      
    
-   **Pipeline Stage:** Narrow the trigger to a specific stage within a pipeline.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065764060/original/iNktmpy_LDTWGShWExjlrjPe5Ntp6-p8Qg.png?1772101354)  

* * *

### **Save and Test**

  
Save your configuration and test the workflow using sample data to confirm it functions as expected.  
  

### **Publish the Workflow**

  
Enable the Publish toggle to activate the workflow and begin automation.

* * *

## **Use Cases  
**

###   
**Sales Milestone Notifications  
**

  
**Scenario****:** A sales opportunity moves from “Negotiation” to “Closed Won.”

  
  
**Trigger Setup:**

  
  

**Trigger:** Opportunity Status Changed.

  
  

**Filters:**   

  

-   **Assigned To:** John Doe.  
      
    
-   **Moved From Status:** Negotiation.  
      
    
-   **Moved To Status:** Closed Won.

  

**Outcome****:** The workflow sends a congratulatory email to the salesperson, notifies the finance team to initiate invoicing, and updates the CRM with the closed status.  
  

* * *

### **Lost Opportunity Follow-Up**

  
**Scenario:** An opportunity moves from “Open” to “Lost.”

  
  
**Trigger Setup:**

  

  

**Trigger:** Opportunity Status Changed.

  
  

**Filters:**

  

-   **Tag:** “High Priority.”  
      
    
-   **Moved To Status:** Lost.

  
**Outcome:** The workflow sends a follow-up email to the prospect, seeking feedback, and notifies the account manager for further evaluation.

* * *

### **Pipeline Transition Alerts**

  

**Scenario:** An opportunity moves to the “In Review” stage in the “Enterprise Deals” pipeline.

  
  
**Trigger Setup:**  
  

  

**Trigger:** Opportunity Status Changed.

  
  

**Filters:**

  

-   **In Pipeline:** Enterprise Deals.  
      
    
-   **Pipeline Stage:** In Review.

  
**Outcome:** The workflow notifies the sales manager and assigns a task to the review team to assess the opportunity.  
  

* * *

### **Lead Requalification Workflow**

  
**Scenario:** A dormant lead is re-engaged and moves from “Lost” to “Reopened.”

  

  

**Trigger Setup:**

  

  

**Trigger:** Opportunity Status Changed.

  
  
**Filters:**

-   **Moved From Status:** Lost.  
      
    
-   **Moved To Status:** Reopened.

  
**Outcome:** The workflow assigns the lead to a salesperson and updates their priority status.

  

* * *

### **Marketing Campaign Success Tracking**

  
**Scenario:** Opportunities in a specific campaign move from “Open” to “Closed Won.”

  
  
**Trigger Setup:**

  
  

**Trigger:** Opportunity Status Changed.

  
  
**Filters:**  
  

-   **Tag:** Campaign-X.  
      
    
-   **Moved To Status:** Closed Won.  
      
    

**Outcome:** The workflow generates a report on campaign performance and notifies the marketing team.  
  

* * *

## **Frequently Asked Questions**

  
**Can I use multiple filters for the same trigger?**

  
Yes, you can combine filters like **“Tag”** and **“In Pipeline”** to create precise workflows that activate only under specific conditions.

  

**What happens if the opportunity status changes multiple times in quick succession?**

  
The trigger activates each time the status changes, so it’s essential to use conditions or cooldown periods in workflows to avoid redundant actions.

  

**Can I trigger actions across multiple pipelines?**

  
Yes, you can set up separate workflows for different pipelines or use filters to apply the trigger to specific pipelines as needed.

  

**How do I handle opportunities with no tags?**

  
Use the **“Doesn’t Have Tag”** filter to target opportunities without specific tags, ensuring workflows activate only for untagged opportunities.

  

**Is it possible to track why an opportunity was lost?**

  
Yes, use the **“Lost Reason”** filter to identify why an opportunity was lost and trigger workflows to address those reasons, such as sending feedback surveys or updating lead profiles.