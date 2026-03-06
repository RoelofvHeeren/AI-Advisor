---
title: "Workflow Trigger - Contact Created"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002486-workflow-trigger-contact-created"
category: "Uncategorized"
---

# Workflow Trigger - Contact Created

The "Contact Created" Workflow Trigger is designed to initiate workflows when a new contact is added to the system. This allows for automated actions, such as sending welcome emails, assigning leads to sales representatives, or updating CRM data in real time. This article will guide you through understanding this trigger, its benefits, configuration steps, real-world use cases, and frequently asked questions.

* * *

**TABLE OF CONTENTS**

-   [What is the "Contact Created" Workflow Trigger?](#%E2%80%8B%E2%80%8BWhat-is-the-)
-   [Key Benefits of the "Contact Created" Trigger](#Key-Benefits-of-the-)
-   [Configuring the "Contact Created" Workflow Trigger](#Configuring-the-)
-   [Related Articles](#Related-Articles)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the "Contact Created" Workflow Trigger?**

  

The Contact Created trigger activates a workflow whenever a new contact is added to the CRM. This ensures that businesses can automate follow-ups, engage new leads instantly, and streamline contact management. The trigger works regardless of how the contact is created—manually, via form submissions, or through integrations—making it a powerful tool for automation.

* * *

## **Key Benefits of the "Contact Created" Trigger**

  

-   **Automates New Contact Engagement:** Ensures that new contacts receive an immediate response without manual intervention.

  

-   **Streamlines Sales & Lead Assignment:** Assigns leads to sales reps based on predefined filters, reducing delays in follow-ups.

  

-   **Enhances CRM Data Management:** Automatically updates CRM fields, reducing manual data entry errors.

  

-   **Improves Customer Experience:** Sends welcome emails, onboarding messages, or relevant information instantly upon contact creation.

* * *

## **Configuring the "Contact Created" Workflow Trigger**

  

Setting up the ‘Contact Created’ Workflow Trigger’ ensures that your automation runs exactly when needed. Before adding actions, it’s important to configure the trigger properly to filter contacts and define when the workflow should activate. The following steps will guide you through the setup process.

  

  

### **Create a New Workflow**

  

Navigate to **Automations**. Click + Create Workflow and select Start from Scratch or edit an existing workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043021619/original/KClg8zGU0-l-yCN24tTR4cs5dz_r5_UErQ.png?1741683874)

  

  

### **Adding the Trigger**

  

Click Add New Workflow Trigger. Select "Contact Created" from the list.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043023262/original/tzX7wIoN8po8anxDXhAUx5LDfPEVVNozYA.png?1741684491)

  

  

### **Naming the Trigger**

  

Name the trigger for easy identification (e.g., "New Contact Welcome Sequence").

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043023252/original/P0-Lt6U1wrbgCOz--oL9DWmwnuJFRfSrXA.png?1741684479)

  

  

### **Applying Filters**

  

Filters help refine when the workflow should trigger, ensuring that only relevant contacts activate the automation. This allows businesses to control who enters the workflow, preventing unnecessary actions on all new contacts. Below are the available filter options and how they can be used:

  

**1\. Tag:** Use this filter to control which tagged contacts can enter the workflow.  
  

-   **Operators**(all support multi-select):  
      
    -   **Equals to** / **Not equals to**  
          
        
    -   **Any of** — fires when **any** selected tag is present  
          
        
    -   **None of** — fires when **none** of the selected tags are present  
          
        

**2\. Multiple Tag filters (AND logic):** Add more than one **Tag**filter in the same trigger to build advanced inclusion/exclusion rules.  
  

-   Example: **Tag Equals to** “Lead” **AND** **Tag Not equals to** “Low Quality”.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064968474/original/BCsNUXWTzMMtlUfZnZfei3v74v4hkgpXJw.png?1771224535)  
**3\. Custom Fields:** If your CRM includes custom fields such as "Industry Type," "Lead Score," or "Customer Category," you can use this filter to trigger the workflow only when certain criteria are met. This is useful when segmenting leads based on business type, engagement level, or other personalized attributes.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064338470/original/OEh_C0Lf568PF-zBCKVEk2rG_7Dy-P_hHg.png?1770373875)

* * *

## **Related Articles**

  

-   [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
-   Workflow Trigger - Contact Changed
-   A List of Workflow Triggers

* * *

## **Frequently Asked Questions**

  

**Q. Will this trigger activate for contacts imported in bulk?**

No, the Contact Created trigger only activates when a contact is manually added, submitted through a form, created via API, or added through an integration. Bulk imports do not trigger this workflow to prevent accidental automation overload. If you need to automate actions for imported contacts, consider using a separate workflow with manual enrollment.

  

**Q. Can I set conditions to trigger this workflow only for specific contacts?**

Yes, you can apply filters to ensure the workflow only runs for specific contacts. Filters allow you to target contacts based on tags, custom fields, or type. For example, you can configure the workflow to activate only when a contact is tagged as “New Lead”. This ensures that only relevant contacts trigger the workflow, preventing unnecessary automation.

  

**Q. What happens if a contact is added multiple times? Will the workflow trigger again?**

If a contact with the same email or phone number is added again, the system may recognize it as an existing contact, depending on the CRM’s duplicate detection settings. If the contact is merged with an existing record, the workflow will not trigger again. However, if the system treats it as a brand-new contact, the workflow will execute as expected.

  

**Q. Can I use this trigger to automatically assign new contacts to team members?**

Yes, you can configure the workflow to assign new contacts to a sales representative or team member based on specific criteria. This can be done using filters such as location, tags, or type. You can also implement a round-robin assignment to distribute leads evenly among your team.

  

**Q. How can I track the effectiveness of this workflow?**

You can monitor workflow execution logs to see how often the trigger fires and which contacts are processed. For email-based actions, tracking metrics such as open rates and response rates will provide insights into engagement. If the workflow assigns contacts to sales reps, reviewing follow-up completion rates can help assess its impact. Regularly analyzing workflow performance will help optimize automation for better efficiency.