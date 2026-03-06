---
title: "Workflow Trigger - Pipeline Stage Changed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002493-workflow-trigger-pipeline-stage-changed"
category: "Uncategorized"
---

# Workflow Trigger - Pipeline Stage Changed

Tracking and managing opportunities efficiently is key to maintaining a streamlined sales process. The Pipeline Stage Changed Workflow Trigger automates actions when an opportunity moves from one stage to another, ensuring timely follow-ups, notifications, and updates. This guide will walk you through what this trigger does, its benefits, and how to configure it for optimized pipeline management.

* * *

**TABLE OF CONTENTS**

-   [What is the Pipeline Stage Changed Workflow Trigger?](#What-is-the-Pipeline-Stage-Changed-Workflow-Trigger?)
-   [Key Benefits of the Pipeline Stage Changed Workflow Trigger](#Key-Benefits-of-the-Pipeline-Stage-Changed-Workflow-Trigger)
-   [Configuring the Pipeline Stage Changed Workflow Trigger](#Configuring-the-Pipeline-Stage-Changed-Workflow-Trigger)
    -   [Access Workflow Builder](#Access-Workflow-Builder%C2%A0) 
    -   [Choosing the Workflow Trigger](#Choosing-the-Workflow-Trigger)
    -   [Name your Trigger](#Name-your-Trigger)
    -   [Setting Up Filters](#Setting-Up-Filters)
-   [Frequently Asked Questions](#Frequently-Asked-Questions%C2%A0) 

* * *

# **What is the Pipeline Stage Changed Workflow Trigger?**

  

The Pipeline Stage Changed Workflow Trigger activates when an opportunity moves from one stage to another within a sales pipeline. It helps businesses automate workflows based on stage transitions, ensuring that no lead falls through the cracks. This trigger allows users to define actions that should occur when an opportunity progresses, regresses, or is reassigned to a new pipeline stage.

* * *

## **Key Benefits of the Pipeline Stage Changed Workflow Trigger**

  

-   **Automates Follow-Ups:** Ensures that each stage change prompts timely notifications, keeping sales reps engaged with prospects.

  

-   **Reduces Manual Work:** Eliminates the need for manually tracking pipeline movements, freeing up time for strategic sales activities.

  

-   **Enhances Pipeline Visibility:** Provides real-time insights into opportunity progress, allowing better forecasting and decision-making.

  

-   **Customizable Filtering:** Allows users to set up workflows based on specific conditions such as pipeline, stage, assigned user, or lead value.

  

-   **Improves Response Time:** Automates outreach and internal communication, ensuring quick action at crucial sales stages.

* * *

## **Configuring the Pipeline Stage Changed Workflow Trigger**

  

### **Access Workflow Builder** 

  

Navigate to Automation > Workflows in your CRM dashboard. Click Create New Workflow or edit an existing one.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042344919/original/Z7YdmZWW7YgF69trLKngBYbP9khNZlzM7Q.jpeg?1740653065)

  

### **Choosing the Workflow Trigger**

  

Click + Add New Trigger and search for Pipeline Stage Changed in the list. Select Pipeline Stage Changed as the trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042344941/original/kfZD3Kxp2NTZ21LG1l8qVDolI6EWELeE-Q.jpeg?1740653081)

  

### **Name your Trigger**

  

Give your workflow trigger a clear and descriptive name that reflects its purpose. This helps you quickly identify the trigger’s function when managing multiple workflows.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042345055/original/dXHpPUsrNAiJDuS17dtyEYvBnHSGw1O1DA.jpeg?1740653162)

  

  

### **Setting Up Filters**

  

Filters help you control when and how a workflow is triggered by setting specific conditions that must be met. Instead of triggering the workflow for every opportunity change, filters allow you to target only the ones that matter most to your business. Whether you want to automate actions for opportunities in a specific pipeline, those assigned to a certain team member, or only when a deal is marked as lost for a particular reason, filters give you the flexibility to refine and customize your automation. This ensures that workflows are more precise, relevant, and aligned with your sales process.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763970/original/xa_HvOOR8vPFm_8fQBtF4lMuOsVb_tAy5g.png?1772101325)

  

  

#### **Assigned To Filter**

  

The Assigned To filter ensures that workflows are triggered based on the user assigned to an opportunity. This filter is particularly useful for directing follow-ups, assigning tasks, or notifying specific team members when an opportunity moves through the pipeline.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363650/original/j4BOkGGKQ7xDL_xBkrZXtqgtrryqMg8biQ.png?1740664257)

  

  

#### **Tag filter (formerly “Has Tag”)**

  
Use Tag filters to trigger workflows only for opportunities that match specific tag conditions. The Tag filter allows you to trigger workflows only when an opportunity contains a specific tag, making it particularly useful for segmenting opportunities, prioritizing leads, and automating targeted actions. Tags serve as labels to categorize opportunities based on attributes such as lead type, priority, source, or other relevant classifications. When setting up the Tag filter, you can specify which tag(s) must be present for the workflow to activate, ensuring automation is applied to the right opportunities.

  

**Example:** If an opportunity is tagged as “High Priority,” the workflow activates when it moves to the next stage.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763802/original/vDBNog5lhciogk9I3LPoOK0x7CzN_XOshg.png?1772101275)

  

  

#### **In Pipeline Filter**

The In Pipeline filter limits the workflow trigger to a specific pipeline, ensuring that automation is only activated for opportunities within the selected pipeline. This filter is particularly useful for businesses managing multiple pipelines for different sales processes, client types, or service offerings. By specifying a pipeline, users can ensure that workflows are applied only to relevant opportunities, preventing unnecessary automation across unrelated pipelines.

  

**Example:** The workflow only activates when an opportunity moves within the “Enterprise Sales” pipeline.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363876/original/oAKEstTXufxn_LLmvtnYhsr8_NdH6YWYfA.png?1740664390)

  

  

#### **Lead Value Filter** 

  

The Lead Value filter triggers workflows based on the monetary value assigned to an opportunity. This allows businesses to automate actions depending on the financial significance of a lead, ensuring that high-value deals receive appropriate follow-ups while lower-value opportunities are handled differently.

  

**Example:** If an opportunity’s value exceeds $10,000, notify the sales manager.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363981/original/ih30kq-4ZMDpZHus1Oh3AXUEyk7BrYyQtw.png?1740664432)

  

  

#### **Lost Reason Filter**

  

The Lost Reason filter triggers workflows when an opportunity is marked as Lost and a specific reason is assigned, allowing businesses to track why deals are being lost, automate follow-up actions, and implement strategies to recover potential customers or prevent similar losses in the future. When an opportunity moves to the Lost stage in the pipeline, users can assign a reason (e.g., “Price Too High,” “Competitor Chosen,” “No Response”), ensuring that workflows activate only when a particular lost reason is selected.

  

**Example:** If the lost reason is “Budget Constraints,” send an automated follow-up email offering a flexible pricing plan.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364228/original/kki_iWGEv2YLSlewo_PlI4yixV68EY5vVQ.png?1740664590)

  

  

#### **Pipeline Stage Filter**

  

The Pipeline Stage filter triggers workflows when an opportunity moves to a specific stage within a pipeline. This allows businesses to automate actions based on stage transitions, ensuring timely follow-ups, task assignments, or notifications as opportunities progress. Users can define which stage transition should activate the workflow, making it easier to manage leads and track sales pipeline movements efficiently.

  

**Example:** When an opportunity moves from “Negotiation” to “Closed Won,” notify the finance team.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364328/original/JHzyQQFJyOxBYMLPCT2PKB8tlFggH5aVCQ.png?1740664628)

  

  

#### **Status Filter**  
  

The Status filter triggers workflows based on the current status of an opportunity. This ensures that automation is executed when an opportunity reaches a specific stage in the sales process, helping teams track and manage their pipeline effectively. Users can select from the following status options:

  

-   **Open:** The opportunity is still active and in progress.  
      
    
-   **Won:** The deal has been successfully closed.  
      
    
-   **Lost:** The opportunity was not converted into a sale.  
      
    
-   **Abandoned:** The opportunity is no longer being pursued.

  

**Example:** If an opportunity is marked as “Won,” trigger a welcome email sequence.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364875/original/g0iRsRHN_JARCYsJozticR4tVJUgZ-7hIQ.png?1740664959)

  

  

### **Defining Workflow Actions**

  

Once the trigger is set, define the actions that should follow when an opportunity changes stages.  
  

-   **Send a Notification:** Notify the assigned sales rep about the stage change.  
      
    
-   **Update Opportunity Details:** Modify fields such as status, priority, or tags automatically.  
      
    
-   **Create a Follow-Up Task:** Assign a task to the sales team to reach out to the prospect.  
      
    
-   **Trigger Another Workflow:** Activate additional workflows based on opportunity progression.  
      
    
-   **Send an Email to the Contact:** Automate customer communication based on pipeline movement.

  

### **Saving and Publishing the Workflow**  
  

1.  After configuring filters and actions, click **Save Trigger** to apply changes.  
      
    
2.  Ensure all necessary workflow steps are in place, then click **Publish** to activate automation.  
      
    
3.  **Test** the workflow by manually moving an opportunity through stages to confirm expected behavior.

* * *

## **Frequently Asked Questions** 

  

**Q1: What happens if an opportunity is moved manually?**

If an opportunity is manually moved to another stage, the workflow still triggers, provided it meets the configured filter conditions.

  

  

**Q2: Can I use multiple filters within the same workflow?**

Yes, you can combine multiple filters to create highly specific automation rules, such as triggering actions only when an opportunity in a particular pipeline and stage is assigned to a specific user.

  

  

**Q3: How does this trigger interact with other opportunity-based triggers?**

The Pipeline Stage Changed trigger is independent of other triggers like Opportunity Status Changed or Opportunity Created. If needed, you can configure workflows using multiple triggers to cover different automation needs.

  

  

**Q4: What if an opportunity moves back to a previous stage?**

If an opportunity regresses to a prior stage, the workflow will trigger again, provided the conditions match.

  

  

**Q5: Can I track historical stage movements using this trigger?**

No, this trigger only activates upon real-time stage transitions. However, you can review historical changes in the opportunity’s activity log.