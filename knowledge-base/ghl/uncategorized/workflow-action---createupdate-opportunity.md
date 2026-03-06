---
title: "Workflow Action - Create/Update Opportunity"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity"
category: "Uncategorized"
---

# Workflow Action - Create/Update Opportunity

**TABLE OF CONTENTS**

  

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The "Create or Update Opportunity" action in your automation workflow is designed to manage opportunities within your sales pipeline. This feature allows you to automatically create or update opportunities based on predefined criteria, ensuring that your sales process is organised and efficient.

  

## Action Name

Create Opportunity

  

## Action Description

The "Create or Update Opportunity" action creates a new opportunity or updates an existing one within the selected pipeline and pipeline stage. This action helps in tracking leads and managing potential sales through different stages of your sales process.

However, **this action does not leverage**:

-   **Opportunities that trigger the workflow** (i.e., it does not automatically update the opportunity that caused the workflow to start).
-   **Any “Find Opportunity” step** (i.e., it does not use the opportunity found by a prior “Find Opportunity” action).

  

## Action Details

The details for configuring the "Create or Update Opportunity" action are as follows:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038428191/original/FL0knisuSnMYjK8PkXZ3pLdWt054jH15jQ.png?1734370334)

  

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="100"></colgroup><tbody><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Value Name&quot;}" style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Arial; font-weight: normal; text-align: center;">Value Name</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Description&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Arial; font-weight: normal; text-align: center;">Description</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Mandatory&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Arial; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Action Name&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Action Name</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The name you assign to this action for easy identification in your workflow.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The name you assign to this action for easy identification in your workflow.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;In Pipeline&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">In Pipeline</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The specific sales pipeline where the opportunity will be created or updated.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The specific sales pipeline where the opportunity will be created or updated.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;In Pipeline Stage&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">In Pipeline Stage</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The stage within the selected pipeline where the opportunity will be placed.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The stage within the selected pipeline where the opportunity will be placed.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Opportunity Name&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Opportunity Name</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The name assigned to the opportunity for easy identification.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The name assigned to the opportunity for easy identification.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Opportunity Source&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Opportunity Source</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The source of the opportunity, indicating where the lead came from.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The source of the opportunity, indicating where the lead came from.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Lead Value&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Lead Value</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The estimated value of the lead (optional).&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The estimated value of the lead (optional).</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;No&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">No</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Status&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Status</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;The current status of the opportunity (e.g., open, closed).&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">The current status of the opportunity (e.g., open, closed).</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Yes</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Allow Opportunity to Move to Any Previous Stage in Pipeline&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Allow Opportunity to Move to Any Previous Stage in Pipeline</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Allows the opportunity to be moved to any previous stage in the pipeline if needed.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Allows the opportunity to be moved to any previous stage in the pipeline if needed.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;No&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">No</td></tr><tr style="height: 21px;"><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Allow Duplicate Opportunities&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Allow Duplicate Opportunities</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Allows the creation of duplicate opportunities if a similar opportunity already exists.&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">Allows the creation of duplicate opportunities if a similar opportunity already exists.</td><td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;No&quot;}" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Arial; font-weight: normal;">No</td></tr></tbody></table>

  

### Important Note

-   **Deprecation**: The **"Create or Update Opportunity"** action is being phased out. It is recommended to use **Create Opportunity** or **Update Opportunity** actions instead, which offer more granular control and support additional features (e.g., leveraging a “Find Opportunity” step or updating the triggering opportunity). 
    
    We’re gradually deprecating the combined action—but only for new workflows. Existing workflows using the combined action will continue to work as is.
    
-   **No “Find Opportunity” or Triggered Opportunity Support**: This action does not update the opportunity that triggered the workflow nor does it use any opportunity found via a **Find Opportunity** action. It operates solely on its own logic to either locate an existing opportunity or create a new one.

## Example: Managing New Leads from a Calendar Appointment Funnel

  

**Scenario:** Your business wants to create an opportunity in the sales pipeline whenever a new lead comes in from the calendar appointment funnel. This ensures that every lead is tracked and managed properly through your sales process.

  

**Solution using the "Create or Update Opportunity" action:**

  

**Trigger:** The workflow starts when a new lead is generated from the calendar appointment funnel.

**Action 1:** Create Opportunity action to create a new opportunity in the pipeline.

  

**Steps to Implement:**

-   Add the Create Opportunity action to your workflow to be triggered when a new lead is generated.
-   Set the Action Name to "Create Opportunity".
-   Select the appropriate sales pipeline from the In Pipeline dropdown (e.g., "YOUR PROMOTION Pipeline").
-   Choose the initial stage for the opportunity from the In Pipeline Stage dropdown (e.g., "New Leads").
-   Set the Opportunity Name to something descriptive, such as "Deal 251 Opportunity".
-   Define the Opportunity Source to indicate where the lead came from, e.g., "Lead from Calendar Appointment Funnel".
-   Optionally, you can fill in the Lead Value if you have an estimated value for the lead.
-   Set the Status to "open".
-   Configure additional settings as needed:
-   Enable Allow Opportunity to Move to Any Previous Stage in Pipeline if you want the flexibility to move opportunities backward in the pipeline.
-   Enable Allow Duplicate Opportunities if your process allows for creating duplicate opportunities for similar leads.

  

**Outcome:** This automation ensures that every new lead from the calendar appointment funnel is automatically tracked as an opportunity in your sales pipeline. This helps in organising and managing your sales process effectively, ensuring no lead is overlooked.