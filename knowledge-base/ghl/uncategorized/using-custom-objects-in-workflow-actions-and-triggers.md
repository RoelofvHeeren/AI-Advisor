---
title: "Using Custom Objects in Workflow Actions and Triggers"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers"
category: "Uncategorized"
---

# Using Custom Objects in Workflow Actions and Triggers

Custom Objects are now live in workflows! This new feature empowers users to create object-specific workflows. Now seamlessly trigger workflows based on custom object-related triggers and define a series of actions to automate your processes.

* * *

**TABLE OF CONTENTS**

-   [What's New?](#What's-New?%C2%A0) 
-   [How it Works?](#How-it-Works?)
-   [Actions and Triggers](#%E2%80%8BActions-and-Triggers)
    -   [Triggers](#Triggers)
        -   [Custom Object](#Custom-Object)
        -   [Events](#Events)
    -   [Actions](#Actions)
        -   [Custom Objects](#Custom-Objects)
        -   [Send Data](#Send-Data)
        -   [Internal](#Internal)
        -   [Workflow AI](#Workflow-AI)
-   [Use Case](#Use-Case)

* * *

## **What's New?** 

  

-   Custom Object Workflows: Create workflows specific to your custom objects (e.g., Home, Cars, Pets, etc.).  
      
    
-   Trigger Workflows with Custom Object Events: Automate processes using powerful triggers specific to your custom objects.  
      
    
-   Perform Targeted Actions: Define object-specific actions, like creating, updating, or clearing custom object records, and integrate them with other tools.

* * *

## **How it Works?**

  

-   Go to the Workflow Landing Page and click Create Workflow.  
      
    
-   Select the Object-based Workflow you wish to configure.  
      
    
-   Customize your workflow with the following triggers and actions.

* * *

## **Actions and Triggers**

  

The below-mentioned actions and Triggers are present in the Custom Object Workflows:

  

### **Triggers**

  

#### **Custom Object**

  

-   Home Created  
      
    
-   Home Changed  
      
    

#### **Events**

-   Inbound Webhook  
      
    

### **Actions**

  

#### **Custom Objects**

  

-   Create Home or Associated Record  
      
    
-   Update Home or Associated Record  
      
    
-   Clear fields of Home or Associated Record  
      
    

#### **Send Data**

  

-   Custom Webhook  
      
    
-   Google Sheets  
      
    

#### **Internal**

  

-   If / Else  
      
    
-   Wait  
      
    
-   Update Custom Value  
      
    
-   Go To  
      
    
-   Date/Time Formatter  
      
    
-   Number Formatter  
      
    
-   Add To Workflow  
      
    
-   Remove From Workflow  
      
    
-   Array Functions  
      
    
-   Drip  
      
    
-   Text Formatter  
      
    
-   Custom Code  
      
    

#### **Workflow AI**

  

-   GPT powered by OpenAI

* * *

## **Use Case**

  

A real estate agency uses a custom object called "Home" to track home listings. When the Home Status field is marked as "Closed" (indicating the property is sold), they want to automate the next steps, including updating records and logging sales data.  
  

Trigger:  
  

-   Object Changed: Trigger the workflow when the Home Status field in the "Home" object changes to "Closed".  
      
    

Workflow Actions:

  

-   Update Associated Object: Update an associated object (e.g., "Agent") linked to the sold property.  
      
    
-   Add a Row to Google Sheets: Use the Google Sheets Integration to log the sale in a centralized document for tracking and reporting.  
      
    
-   Clear a Field in the Object or Associated Object: Clear the temporary Notes and Internal Comment custom fields that are no longer needed.

  

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143416/original/FYosh0xBXvwWJa4Rm8jPBWM8rW6xLW7bFw.jpeg?1733919867)

  

  

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143418/original/jc9sYbxjs6FjOh5oowlIJ3ZY5MKslMQDbA.jpeg?1733919867)

  

  

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143417/original/2vxYX2GNKd0aEHop-1NDAAxpafbrLklkmg.jpeg?1733919867)

* * *

## **Frequently Asked Questions**

  

**Q: Can I use a Custom Object workflow to send data to other platforms?**

Yes. You can use actions like Webhooks to push data from Custom Object records to third-party tools. This is especially helpful for reporting, syncing with inventory systems, or triggering external services based on Custom Object events.

  

**Q: Do I need to create a Custom Object before using it in a workflow?**

Yes. You must create the Custom Object and define its fields before it can be used in any workflow trigger or action.

  

* * *

## **Related Articles**

  

-   [Getting Started with Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000003896)  
      
    
-   [Creating and Updating Custom Object Records](https://help.gohighlevel.com/en/support/solutions/articles/155000004023)  
      
    
-   [Associations for Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000004033)  
      
    
-   [Creating and Editing Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000003897)