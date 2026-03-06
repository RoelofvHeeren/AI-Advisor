---
title: "Workflow Builder Walkthrough"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough"
category: "Uncategorized"
---

# Workflow Builder Walkthrough

Welcome to the Workflow Builder Walkthrough! This guide is designed to help you understand and navigate the Workflow Builder. Whether you're new to workflows or looking to refresh your knowledge, this article will guide you through key features, best practices, and tips for success.

* * *

**TABLE OF CONTENTS**

-   [What Is This Workflow Builder Walkthrough?](#What-Is-This-Workflow-Builder-Walkthrough?)
    -   [Infinite Canvas Layout](#Infinite-Canvas-Layout)
    -   [Adding New Triggers](#Adding-New-Triggers)
    -   [Adding New Actions](#Adding-New-Actions)
    -   [Stats View](#Stats-View)
    -   [Testing the Workflow](#Testing-the-Workflow)
    -   [Saving the Workflow](#Saving-the-Workflow)
    -   [Version History](#Version-History%E2%80%8B)
    -   [Draft/Publish Toggle](#Draft/Publish-Toggle)
    -   [Best Practices for Workflows](#Best-Practices-for-Workflows)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Further Reading](#Further-Reading)

* * *

# **What Is This Workflow Builder Walkthrough?**

  

This article provides a comprehensive overview of the Workflow Builder, including its layout, functionality, and best practices. If you're looking for more specific topics, such as advanced triggers or detailed action configurations, explore our related articles:

-   [Getting Started with Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000002288) 
-   [A List of Workflow Triggers](https://help.gohighlevel.com/en/support/solutions/articles/155000002292) 
-   [A List of Workflow Actions](https://help.gohighlevel.com/en/support/solutions/articles/155000002294) 

* * *

## **Infinite Canvas Layout**

  

The Workflow Builder’s Infinite Canvas allows for an expansive view of your workflows. You can:  
  

-   Use the **Fit to Screen** and **Zoom In/Zoom Out** buttons in the bottom-left corner to adjust the view.  
      
    
-   Utilize the **Minimap** in the bottom-right corner to navigate your current position within the workflow.  
      
    

**Best Practices:** Keep complex workflows organized by grouping related actions and using clear naming conventions. Try to keep workflows small enough to be seen in one screen. This aids understanding and troubleshooting.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914922/original/LAuW1K8geHJG9gutYFr7gF0cBgrcCkyx3Q.png?1737001655)

* * *

## **Adding New Triggers**

  

Triggers define the events that start your workflows. Follow these steps:

  

1.  Click the **Add New Trigger** button.  
      
    
2.  Select a trigger from the list (e.g., Contact Added, Appointment Booked).  
      
    
3.  Configure the trigger with relevant settings.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914975/original/yug6PgoUJWPBwFvOLAzhYhKBqRkRhuHksA.gif?1737001882)

  

**Important:** All triggers in the workflow will activate when their specific conditions are met. Ensure that your trigger setup aligns with your desired workflow initiation.

  

For a comprehensive list of triggers, visit [A List of Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000002292).

* * *

## **Adding New Actions**

  

Actions define what happens after a trigger is activated. To add an action:

  

1.  Click the **\+ button** in the workflow line(s).  
      
    
2.  Select an action from the list (e.g., Send Email, Assign to User).  
      
    
3.  Configure the action based on your workflow’s requirements.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915055/original/Yic1dO9HJdC289lCwscOFsa_SAE--k03iA.gif?1737002097)

  

Aside from normal actions, there are some other types of actions that are more advanced**:**

-   **Drip Actions:** Control the flow of contacts by slowing their progress through the workflow.  
      
    
-   **Conditional Actions:** Evaluate conditions and guide contacts based on specific criteria.  
      
    
-   **Goal Actions:** Allow contacts to skip ahead to a later point in the workflow bypassing the actions in between.  
      
    

**Tips:** Always give actions meaningful names for clarity in Canvas view. This makes workflows easier to understand and manage.  
  

Refer to [A List of Workflow Actions](https://help.gohighlevel.com/support/solutions/articles/155000002294) for detailed information on all available actions.

  

You can also use **Workflow AI** Assistant to help understand the workflow and add the right actions. Learn more in the [Workflow AI Assistant](https://help.gohighlevel.com/en/support/solutions/articles/155000003970) article.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915279/original/GdNuEeH9yq1qa5Vxs9RIDSffGKrW9FtfwQ.png?1737002721)

* * *

## **Stats View**

  

The Stats View helps monitor communication performance down to the individual action:

  

-   Turn on **Stats View** in the top-left corner.  
      
    
-   View communication statistics directly in the builder.  
      
    
-   Click on any stats data to access detailed reports.  
      
    

Note that if a communication action was in the workflow, and used, and then deleted, the stats will still be saved in the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915478/original/staaRVaGy46Vtr3qGLGzGTkKjgBU-f8xow.png?1737003253)

  

For tips on analyzing workflow performance, explore [How to Analyze Workflow Campaigns](https://help.gohighlevel.com/support/solutions/articles/155000003902). Stats are also available at the workflow level in the Workflow List Click the expand arrow under Stats.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915452/original/9rcKt_uTXnQ_WVrfXVHUnUyXksG_8oR64w.png?1737003186)

* * *

## **Testing the Workflow**

  

To ensure your workflow functions correctly:

1.  Click the **Test Workflow** button in the top-right corner.  
      
    
2.  Select a contact for testing.  
      
    
3.  Click **Run Test** to run the workflow.  
      
    

Note that the Test Workflow using a contact isn't 100% perfect, especially if you reuse the same contact for multiple tests. Ideally you should test the workflow by publishing it and using it live.

  

  

**Troubleshooting:** If tests fail, check your triggers and actions for incomplete configurations.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915593/original/mZbQqecJbDQkkH-WyjVAOOQxPmRjoWX2-A.png?1737003477)

* * *

## **Saving the Workflow**

  

Always save your changes:

-   Click the **Save** button in the top-right corner whenever there are unsaved changes (red dot).  
      
    
-   If you encounter errors while saving, ensure all required fields in triggers and actions are completed.  
      
    

Note that **Saved** and **Published** are not the same thing. The workflow can be saved or have unsaved changes and can be draft or publish, independent of each other.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915664/original/l8EFwQ6aZbDHqBLwfHM7vA5Ow0jXHl8vSg.png?1737003691)

* * *

## **Version History**

Track changes made to your workflow:

  

-   Click the **History** icon in the top-right corner.  
      
    
-   View previous versions.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915890/original/KVo2csPPq4w88OGCdYEd0Ul0o6E9umSVBg.png?1737004061)

  

Use the **Back to Builder** button to return to editing the workflow.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915878/original/QCDtwnx2S3YV6IbVI86fvVWxqNF-aXGDCA.png?1737004002)

* * *

## **Draft/Publish Toggle**

  

Control the status of your workflows:

  

-   Toggle between **Draft** and **Publish** modes in the top-right corner.  
      
    
-   Draft mode means the workflow will not trigger and take actions for real; Publish mode means it will.  
      
    

**Important:** Contacts in waiting steps (e.g., Wait, Manual Call) will remain at their current step when resuming a draft workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915996/original/DV1O6GQ5Siyr-EBN_O9RgmwZo0axMnLLsQ.png?1737004170)

* * *

## **Best Practices for Workflows  
**

-   **Avoid Loops:** The Workflow Builder prevents visual loops (arrows cannot return to a previous step), but it’s possible to create non-visible loops. Double-check your actions to avoid unintended looping behaviors.  
      
    
-   **Keep Workflows Small:** Aim to fit workflows into one screen whenever possible. Divide complex functions into separate workflows to simplify troubleshooting and management.  
      
    
-   **Meaningful Naming:** Use clear and descriptive names for triggers and actions to improve clarity, especially in collaborative environments.

* * *

## **Frequently Asked Questions  
**

**Q: What happens to contacts in my workflow if I set it to draft?**

A: Contacts in waiting steps (e.g., Wait, Manual Call, Manual SMS) will remain in the same step when the workflow is resumed.

  

**Q: How do goal events impact workflows?**

A: Goal events can dynamically adjust contact progress based on interactions. For more, see [Action - Goal Event](https://help.gohighlevel.com/en/support/solutions/articles/155000003328).

  

**Q: Can I add a contact to multiple workflows?**

A: Yes, use the "Add to Workflow" action to include a contact in multiple workflows. Learn more [Add To Workflow](https://help.gohighlevel.com/en/support/solutions/articles/155000002554).

  

**Q: How can I integrate external apps?**

A: Use the "Webhook" action to send data to external platforms. Check out [Actions - Webhook](https://help.gohighlevel.com/en/support/solutions/articles/155000003299) for details.

* * *

## **Further Reading**

-   **[](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)**[](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)[Getting Started with Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)
-   [A List of Workflow Triggers](https://help.gohighlevel.com/en/support/solutions/articles/155000002292) 
-   [A List of Workflow Actions](https://help.gohighlevel.com/en/support/solutions/articles/155000002294) 
-   [How to Analyze Workflow Campaigns](https://help.gohighlevel.com/en/support/solutions/articles/155000003902) 
-   [Introduction to Workflows and Automations](https://help.gohighlevel.com/en/support/solutions/articles/155000002445)[](https://help.gohighlevel.com/en/support/solutions/articles/155000002445) **[](https://help.gohighlevel.com/en/support/solutions/articles/155000002445)**

### 

###