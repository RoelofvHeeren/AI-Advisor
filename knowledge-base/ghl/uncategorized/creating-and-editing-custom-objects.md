---
title: "Creating and Editing Custom Objects"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects"
category: "Uncategorized"
---

# Creating and Editing Custom Objects

Create and manage Custom Objects in HighLevel to model data beyond Contacts and Opportunities—like Properties, Pets, Cases, or Vehicles. This guide shows where Custom Objects are supported across the app, how to set them up step-by-step, plus FAQs and links to related features such as SmartLists, Workflows, and Dashboards.

* * *

**TABLE OF CONTENTS**

-   [What is a Custom Object?](#What-is-a-Custom-Object?)
-   [Key Benefits of Custom Objects](#Key-Benefits-of-Custom-Objects)
-   [Field Types & Unique Fields](#Field-Types-&-Unique-Fields%C2%A0) 
-   [Associations & Labels](#Associations-&-Labels)
-   [Where You Can Use Custom Objects](#Where-You-Can-Use-Custom-Objects%C2%A0) 
-   [How To Set Up Custom Objects](#How-To-Set-Up-Custom-Objects)
-   [Using Custom Objects in Workflows (Automation)](#Using-Custom-Objects-in-Workflows-\(Automation\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles%C2%A0) 

* * *

# **What is a Custom Object?**

  

Custom Objects let you define brand-new record types—each with its own fields, associations, and automations—so your CRM mirrors your real-world processes. They’re ideal when standard objects aren’t enough (e.g., tracking a “Property” with MLS, Bedrooms, Status; or a “Pet” with Breed, Vaccinations). After you create an object, you can use it across views, filters, and automations.

* * *

## **Key Benefits of Custom Objects**

  

Understanding the practical upside helps you design data models that stay flexible and future-proof.

  

-   **Flexibility**: define any entity with custom fields, labels, and associations.  
      
    
-   **Automation**: trigger workflows on create/update and run object-specific actions.  
      
    
-   **Insights**: analyze object data via SmartLists and List View, then filter precisely with Advanced Filters.  
      
    
-   **Governance**: maintain integrity with clear ownership—admins manage object definitions.  
      
    
-   **Plan access & limits**: available on all plans; up to 10 Custom Objects per location.
    

* * *

## **Field Types & Unique Fields** 

  

Choosing the right field types and uniqueness rules keeps your data clean and merge-friendly.  
  

-   Supported **unique field types** today: Single Line Text, Multi Line Text, Number, Phone.  
      
    
-   **Limit:** up to **10 unique fields per object**.  
      
    
-   **Scope:** uniqueness is enforced across the sub-account and across all entry points (UI, Workflows, Forms, API).  
      
    
-   **Irreversible change:** if you **downgrade** a unique field to non-unique, you **cannot** make it unique again.
    

* * *

## **Associations & Labels**

  

Associations connect records (e.g., Opportunity ↔ Property) to reflect real-world relationships and power cross-object views.  
  

-   Define many-to-many or one-to-many links between objects.  
      
    
-   Use associations in SmartLists, filters, and automations.  
      
    
-   **Label limits:** up to **10 unique labels** between any two objects (for clarity like “Buyer Of,” “Listed On”).  
      
    
-   Opportunities now support flexible associations to Custom Objects for a unified pipeline context.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058408189/original/pnh73-mjY_rKd5y0fDNJ9M4E0Wevq4cRQg.gif?1763127609)

* * *

## **Where You Can Use Custom Objects** 

  

Choosing the right surfaces for Custom Objects ensures your build is both powerful and compatible. Use this matrix to see current availability and plan implementations confidently.

  

| Availability | Features |
| --- | --- |
| **Supported** | Contacts & Opportunities (associations), Workflows (triggers & actions), Forms, Surveys & Quizzes, SmartLists, List View, Advanced Filters, Reporting/Dashboards, APIs, Webhooks, Tasks |
| **Not supported** | Email Campaigns, Bulk Email, Bulk SMS, Conversations UI, Funnels & Websites (dynamic CO data), Calendars & Scheduling, Reputation/Reviews, Payments & Invoicing, Company object internals |
| **Coming soon** | Notes, Funnels & Websites (dynamic binding), AI Knowledgebase, Emails via Workflow to associated contacts |

* * *

## **How To Set Up Custom Objects**

  

A clean initial setup ensures stable automation and reporting as your model grows. The steps below are sourced from **Creating and Editing Custom Objects** and lightly clarified for readability.

  

### **Step 1 — Create the Object**

  

1.  Go to **Sub-account → Settings → Objects**.  
      
    
2.  Click **Add Custom Object**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058405899/original/19muD-f-IgODYh2yNQ--bLnKCPn89sP4Yg.png?1763126731)  
      
    

### **Step 2 — Add Details about the Object**

###   

1.  Enter the **Singular name** (e.g., Pet).
    
2.  Enter the **Plural name** (e.g., Pets).
    
3.  Review the **Internal Name** and **Primary field** (created by default). You can adjust the internal name **during creation** by clicking **</>**.
    
4.  Provide a label for the **Primary display field** (e.g., Pet Name, Pet Identification Number).
    
5.  Choose an **Icon** and add a **Description** to help your team understand the object’s purpose.
    
6.  Click **Create Custom Object**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406204/original/fgF0GrDpzjlp6BKbCr0R0F-t6lSOdYrBxA.png?1763126831)  
    

### **Step 3 — Edit Object Details**

  

1.  After creation, the object appears on the Objects page.
    
2.  Click the object to open and adjust its details.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406333/original/_BTexHTI5lwA1w4QfD8N8itV1YC4bALzAw.jpeg?1763126905)
    

###   
**Optional — Delete a Custom Object (Irreversible)**

  

1.  Click the **⋯ (three dots)** next to the object’s name.
    
2.  Choose **Delete**.
    
3.  Type **DELETE** to confirm.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058406564/original/DIem8kq3voYpJAFkfcf-oqn43QIQXi24Cg.gif?1763127036)  
    

Imp: Deletion removes the object and **all records, associations, workflows, and custom fields** linked to it; this cannot be recovered.

* * *

## **Using Custom Objects in Workflows (Automation)**

  

Once you’ve created a Custom Object (and its fields/associations), you can automate processes around that object using **object-based workflows -** meaning the workflow “runs on” the Custom Object record itself (not just the Contact). This lets you trigger automation when a Custom Object record is created/updated and then take actions like creating/updating related records, clearing fields, or sending object data out to other tools.

  

### **Available triggers for Custom Object workflows**

  

In object-based workflows, you can start automation using these trigger types:

  

| Trigger name | What it does |
| --- | --- |
| **\[Custom Object\] Created** (e.g., _Home Created_) | Starts the workflow when a Custom Object record is created. |
| **\[Custom Object\] Changed** (e.g., _Home Changed_) | Starts the workflow when a Custom Object record is updated/changed. |
| **Inbound Webhook** | Starts the workflow when an inbound webhook is received (useful for external system updates). |

###   

### **Available actions for Custom Object workflows**

  

After a trigger fires, you can automate next steps using actions like:

  

| Action name | What it does |
| --- | --- |
| **Create \[Custom Object\] or Associated Record** | Creates a new Custom Object record (or a record that’s associated to it). |
| **Update \[Custom Object\] or Associated Record** | Updates fields on the Custom Object record (or an associated record). |
| **Clear fields of \[Custom Object\] or Associated Record** | Clears selected fields on the Custom Object record (or an associated record). |
| **Custom Webhook** | Sends Custom Object data to an external endpoint. |
| **Google Sheets** | Sends/logs Custom Object data to a Google Sheet. |

  

You can also combine Custom Object automation with common workflow utilities like If/Else, Wait, Go To, Formatters, Update Custom Value, Add/Remove from Workflow, and more to build more advanced logic.

  

### **How to create a Custom Object workflow**

  

1.  Go to **Automation** and click on **\+ Create Workflow** **→ \[Custom Object\] based workflow** you want to build the workflow around (for example: _Home, Vehicle, Policy, Pet_, etc.).  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066166834/original/HB5GGuksdOUVBlyrYBY4q4jz9DuYfhyRWQ.png?1772619858)  
      
    
2.  Add a trigger, then configure conditions/filters as needed.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066168078/original/FR82hFpZeWDIIwH9O8WYI1M9VBGCi4jpUA.png?1772620562)  
      
    
3.  Add the workflow actions you want to run, then Publish.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066168103/original/E8Kzs88A-nFeOvxnWYhJfiRjA1cERDXcbg.gif?1772620578)

  

To learn more: [Using Custom Objects in workflow triggers and actions](%20https%3A//help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)

* * *

## **Frequently Asked Questions**

  

**Q. Who can create or edit Custom Objects?**  
Only **admins** at the location level. Regular users have read-only access.

  

**Q. How many Custom Objects can I create?**  
Up to **10 per location** across all plans.

  

**Q. Can I change the Internal Name or Primary Display Field later?**  
No—once the object is created, these fields are **not editable**.

  

**Q. Where are Custom Objects supported today?**  
See the **Support Matrix** table above for current availability and planned surfaces.

  

**Q. What happens if I delete a Custom Object?**  
Deletion is **permanent** and removes the object and **all** related records, associations, workflows, and custom fields.

  

**Q. How do I automate actions when a Custom Object is created or updated?**  
Use **Custom Object triggers and actions** in Workflows (e.g., create/update/clear, find record, webhooks).

* * *

## **Related Articles** 

  

-   [Custom Objects In All Plans + Higher Limit](https://help.gohighlevel.com/support/solutions/articles/155000006631-custom-objects-in-all-plans-higher-limit)   
      
    
-   [Using Custom Objects in Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)   
      
    
-   [SmartLists for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000005147-smartlists-for-custom-objects)   
      
    
-   [List View for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000004029-list-view-for-custom-objects)   
      
    
-   [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects?utm_source=chatgpt.com)