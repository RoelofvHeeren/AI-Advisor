---
title: "Workflow Trigger - Opportunity Created"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003499-workflow-trigger-opportunity-created"
category: "Uncategorized"
---

# Workflow Trigger - Opportunity Created

The **Opportunity Created trigger** allows users to automate workflows when a new opportunity is created in the system. This trigger is valuable for automating actions like notifications, follow-ups, and task assignments based on the creation of a new sales opportunity in your pipeline.

* * *

**TABLE OF CONTENTS**

-   [Trigger Name: Opportunity Created Trigger](#Trigger-Name%3A%C2%A0Opportunity-Created-Trigger)[](#Trigger-Description)
-   [Trigger Description](#Trigger-Description)[](#Trigger-Details)
-   [Trigger Details](#Trigger-Details)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

* * *

## **Trigger Name:** **Opportunity Created Trigger**

  

### **Trigger Description**

  
The Opportunity Created trigger is activated when a new opportunity is created in the system. This allows you to automate processes such as assigning tasks, notifying team members, or updating the status based on opportunity characteristics such as pipeline stage, lead value, or the assigned user.

  

### **Trigger Details**

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Helvetica, sans-serif; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;"><span style="font-family: Helvetica,sans-serif;">Field Name</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Helvetica, sans-serif; font-weight: normal; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Description</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Helvetica, sans-serif; font-weight: normal; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Mandatory</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Assigned To</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The user assigned to the opportunity</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Has Tag</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Filter opportunities based on specific tags</span></td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">In Pipeline</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Select the pipeline to track the opportunity</span></td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Lead Value</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The monetary value associated with the lead</span></td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Lost Reason</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The reason provided for marking an opportunity as lost</span></td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Status</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The current status of the opportunity (New, Open, etc.)</span></td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: Helvetica, sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">No</span></td></tr></tbody></table>

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033069568/original/_veN8lgt5BolbVsdYDxR3sw3dRYxUnbLWg.png?1726650717)

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Helvetica, sans-serif; width: 100%; border-collapse: collapse; border: none; margin-right: calc(0%);"><colgroup><col width="152"><col width="390"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;"><span style="font-family: Helvetica,sans-serif;">Operator</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: Helvetica, sans-serif; font-weight: normal; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Description</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Equals to</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Matches the exact value</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Greater than</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Value should be greater than the input</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Less than</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Value should be less than the input</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Contains</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Value contains the given string</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Is Empty</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The field is empty</span></td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">Is Not Empty</span></td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;"><span style="font-family: Helvetica,sans-serif;">The field is not empty</span></td></tr></tbody></table>

* * *

## **How to Configure**  

-   **Select Trigger**: In the workflow builder, choose _Opportunity Created_ as your trigger.  
      
    
-   **Assign a Trigger Name**: Give the trigger a meaningful name, such as “High Value Lead Opportunity Created.”  
      
    
-   **Filters**:  
      
    
    -   **Assigned To**: Filter opportunities based on which user it’s assigned to.  
          
        
    -   **Pipeline**: Filter opportunities in specific pipelines.  
          
        
    -   **Lead Value**: Set criteria based on the opportunity’s monetary value.  
          
        
-   **Tag:** Use Tag filters to include/exclude opportunities by tags. Tag supports multi-select operators (Equals to / Not equals to / Any of / None of) and you can add multiple Tag filters for advanced rules.  
    
-   **Add Multiple Filters**: If necessary, apply additional filters by clicking **Add filters** and selecting the desired fields and conditions.
    

* * *

## **Example**

  
**Scenario**: You want to notify the sales manager when a new opportunity with a lead value greater than $10,000 is created in the pipeline.  
  

-   **Trigger**: Opportunity Created  
      
    
-   **Filter**: Lead Value greater than $10,000  
      
    
-   **Action**: Notify the sales manager

  
This setup ensures that significant opportunities are flagged and acted upon promptly by notifying key stakeholders.