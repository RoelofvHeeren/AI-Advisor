---
title: "Action - Add to Workflow -> Workflow Action - Add to Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow"
category: "Uncategorized"
---

# Action - Add to Workflow -> Workflow Action - Add to Workflow

The **“Add to Workflow”** action enables you to automatically move contacts into specific workflows, ensuring smooth transitions between stages of engagement. In this article, you’ll learn what the **“Add to Workflow”** action is, its key benefits, a step-by-step setup guide, and real-world use cases. We’ll also address common user questions in the FAQ section.

* * *

**TABLE OF CONTENTS**

1.  [What is the “Add to Workflow” Action?](#What-is-the-%E2%80%9CAdd-to-Workflow%E2%80%9D-Action?)[](#Key-Benefits-of-Using-the-%E2%80%9CAdd-to-Workflow%E2%80%9D-Action)
2.  [Key Benefits of Using the “Add to Workflow” Action](#Key-Benefits-of-Using-the-%E2%80%9CAdd-to-Workflow%E2%80%9D-Action)[](#Step-by-Step-Process-for-Using-the-Workflow-Action)
3.  [Step-by-Step Process for Using the Workflow Action](#Step-by-Step-Process-for-Using-the-Workflow-Action)[](#Use-Cases)
4.  [Use Cases](#Use-Cases)[](#FAQs)
5.  [FAQs](#FAQs)

* * *

# **What is the “Add to Workflow” Action?**

  
The **“Add to Workflow”** action is an automation tool that allows you to automatically add contacts to another specified workflow. This action is often used to move contacts between different stages of a customer journey or process, ensuring they are guided through the appropriate steps at the right time. Additionally, the Pass Input Trigger Parameters option allows you to carry data from the original workflow trigger into the new workflow, allowing for more personalized automation.

  

For example, after a customer books an appointment, you may want to automatically add them to an “Appointment Follow-Up” workflow that provides confirmation details and reminders before their appointment.

* * *

## **Key Benefits of Using the “Add to Workflow” Action**  
  

-   **Seamless Contact Transitions:** Automatically move contacts between workflows to ensure a smooth handoff from one stage to the next.  
      
    
-   **Data Consistency:** Carry important trigger data from one workflow to another, ensuring no key information is lost.  
      
    
-   **Time-Saving Automation:** Eliminate the need for manual intervention in managing customer transitions, saving time and resources.  
      
    
-   **Enhanced Customer Experience:** Ensure timely follow-ups, confirmations, and reminders for customers to keep them engaged and informed.  
      
    
-   **Scalability:** Easily scale your automation processes as business needs grow, without the need for manual adjustments.

* * *

## **Step-by-Step Process for Using the Workflow Action**

  

Here’s how to configure and set up the **“Add to Workflow”** action:

  

Go to **"Workflows"** menu inside **"Automation"** section.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038114650/original/tRXiDgUdX_4fI8YqkdCz_A9hIUQ6EHf2ow.png?1733903018)

  

Click **" + Create Workflow"** button at the top right corner.  Select **" + Start from Scratch"** option from the dropdown menu. It will take you inside the workflow builder.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038132428/original/zWd3p4FdFP0hYyIRAO5JVwCDYvDvw66MLQ.png?1733913709)

  

Click the **"+"** button to view the list of all the workflow actions. Scroll down to find **“Add to Workflow”** option and click there to configure the settings.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115145/original/pNuCen1d6iXBNwiSLuY9sEKNrGIvKsuklA.png?1733903456)  

**Name the Action**

  
Provide a descriptive name for your action to identify it easily. In this example, We have named the action as **“Add to AI Appointment Booking Workflow.”** 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115198/original/gr39JSt3FZrwEd59VtOK2D52GLTqCrh7cw.png?1733903483)  

**Select the Target Workflow  
**  
Choose the workflow to which the contact will be added. In this example, we have selected the existing workflow named **“AI Appointment Booking.”**  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115668/original/Kc_sYyQmb_EfASQ6ZlIb2lJqVNHBSFY1Cw.png?1733903724)

  

**Enable “Pass Input Trigger Parameters” (Optional)**

  
If you want to carry data from the initial trigger into the new workflow, enable this option. For example, you might want to pass contact details, booking dates, or other key information.  
  

This option passes only the original trigger event data into the receiving workflow. It does not pass outputs generated later in the workflow (for example, data returned by a Custom Code API call).

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115803/original/9xzDXbG9XT_zf8sIhDxRhaxJZINMpnQgyA.png?1733903816)  

Be sure to click the **"Save Action"** button at the bottom before you go back to the workflow builder  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115871/original/aTc1vxLiW5WhluFw4lWVhcCtVRetLnc5WA.png?1733903843)

  

**Test and Save**

  
Run a test to ensure the action works as expected.  
  

**Note: Be sure to **"Save"** your Draft whenever you are leaving the workflow builder so whenever you come back, you can continue to build your workflow from where you have left.**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038116576/original/WdUuFt-1pM9V-4cUMjnWvbW9v_brVnvozQ.png?1733904323)  

**Publish the Workflow**

  
Once everything is verified, activate the workflow by using the toggle option.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038132785/original/oxz5feoW5CHFb-2FwvvHMiNYhF52uDGl1Q.png?1733913938)

* * *

## **Frequently Asked Questions**

  

**Q: Can I add a contact to multiple workflows simultaneously?**

No, the “Add to Workflow” action adds a contact to one workflow at a time. However, you can configure multiple “Add to Workflow” actions in your automation to achieve this.

  

**Q: What happens if I enable “Pass Input Trigger Parameters”?**

When enabled, this option transfers data from the initial trigger (like contact details, date of booking, etc.) into the new workflow. This allows you to personalize subsequent actions in the new workflow.

  

**Q: What fields are available when I enable “Pass Input Trigger Parameters”?**

When you enable this option, the system passes all data from the **original workflow trigger event** into the new workflow. The exact fields depend on the type of trigger:

  

-   **Appointment Trigger:** Contact Name, Email, Phone, Appointment Date/Time, Assigned Calendar, Status (booked/canceled), Appointment ID.  
      
    
-   **Form Submission Trigger:** Form Name, Submission Date/Time, Submitted Fields (all mapped values), Contact Details.  
      
    
-   **Survey Trigger:** Survey Name, Submitted Answers, Contact Details.  
      
    
-   **Inbound Call/Conversation Trigger:** Contact Details, Source (call/chat), Timestamp, Assigned User (if any).  
      
    
-   **Custom Event Trigger:** Any custom fields or values defined in that event.
    

  

You can view and map these fields inside the receiving workflow actions (e.g., “Send Email” or “Update Custom Value”). This helps ensure that personalization carries over correctly.

  

**Q:** **How do I know if “Pass Input Trigger Parameters” is working correctly?**

You can test your workflow before activating it. Run a test to ensure the data is being transferred as expected.

  

**Q: When using the “Add to Workflow” action, what trigger should I use to start the next workflow?**

You don’t need to manually set a trigger for the workflow that receives contacts via the “Add to Workflow” action. The system automatically enrolls the contact into the next workflow at the point where the workflow begins—no additional trigger is required. Simply design the new workflow with the assumption that contacts will be added by automation, and start the workflow with your desired first action (e.g., Send Email, Wait, Create/Update Opportunity, etc.). If you enable “Pass Input Trigger Parameters,” you can also personalize those next steps using data from the original workflow.

  

**Q: Can I pass data returned by a Custom Code action (like an API response) into the next workflow using ‘Pass Input Trigger Parameters’?**  
No. “Pass Input Trigger Parameters” passes the **trigger event payload** from the workflow’s start. It does not pass **outputs from actions** that run later (including Custom Code responses). To use API response data in another workflow, first **store the response** in a place the next workflow can read—such as a **Contact field** or a **Custom Value**—then add the contact to the next workflow.