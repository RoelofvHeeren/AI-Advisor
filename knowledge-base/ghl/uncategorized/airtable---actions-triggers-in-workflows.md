---
title: "Airtable - Actions & Triggers in Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005674-airtable-actions-triggers-in-workflows"
category: "Uncategorized"
---

# Airtable - Actions & Triggers in Workflows

Connect Airtable to HighLevel to automate data sync, lead capture, and project ops with native triggers and actions. This guide covers supported steps, setup, examples, FAQs, and links so your team can launch confidently without third‑party tools.

* * *

**TABLE OF CONTENTS**

-   [What is the Airtable Integration in Workflows?](#%E2%80%8B%E2%80%8BWhat-is-the-Airtable-Integration-in-Workflows?)
-   [Key Benefits of the Airtable Integration](#Key-Benefits-of-the-Airtable-Integration)
-   [Triggers & Actions](#Triggers-&-Actions)
-   [How To Set Up the Airtable Integration](#How-To-Set-Up-the-Airtable-Integration)
-   [Connect Airtable (two paths)](#Connect-Airtable-\(two-paths\))
-   [Build your first flow:](#Build-your-first-flow%3A)
-   [Use Cases](#Use-Cases)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Airtable Integration in Workflows?**

  

HighLevel’s native Airtable integration lets you react to Airtable record changes and perform Airtable tasks directly from a workflow. Use Airtable triggers to enroll runs when rows are created or updated, and add Airtable actions (Find/Create/Update/Delete) to keep CRM and boards in sync.

* * *

## **Key Benefits of the Airtable Integration**

  

These benefits highlight how HighLevel and Airtable work together to route data faster, reduce manual tasks, and centralize operations in one automation hub.  
  

-   **Effortless data consistency:** keep project trackers and CRM data aligned as records change.  
      
    
-   **Native automation:** replace external connectors by running Airtable steps directly in HighLevel.  
      
    
-   **Predictable billing:** Airtable steps are premium executions and can be rebilled to sub‑accounts.  
      
    
-   **Fast trigger detection:** polling checks Airtable about every 5 minutes for new or updated records.  
      
    
-   **Works on Airtable’s free plan:** get started without upgrading Airtable (Airtable’s own limits still apply).
    

* * *

## **Triggers & Actions**

  

This overview consolidates the Airtable trigger and actions in one place so you can quickly compare capabilities and what each step returns for downstream mapping.  
  

| Type | Name | Description |
| --- | --- | --- |
| Trigger | New Record | Fires when a new row is added to the selected Airtable table. Detected via polling (~5 minutes). |
| Trigger | Updated Record | Fires when an existing row changes in the selected table. Detected via polling (~5 minutes). |
| Action | Find Record | Looks up a record by Record ID or field criteria; returns values as **Custom Values** for downstream steps. |
| Action | Create Record | Creates a new row in the selected table with fields you map from the workflow. |
| Action | Update Record | Updates one or more fields in an identified row (e.g., via Record ID or a prior Find result). |
| Action | Delete Record | Permanently removes a row from the selected table. |

* * *

## **How To Set Up the Airtable Integration**

  

A clean connection and correct mapping ensure reliable enrollments and actions. Use the options below to connect quickly and verify with a live test.

  

### **Connect Airtable (two paths)**

  

1.  **From a Trigger/Action step**
    
    -   In **Automations → Workflows**, click **\+ Add Trigger** and search **Airtable** or click **\+ Add Action** and search **Airtable**.
        
    -   Choose **New Record**/**Updated Record** (trigger) or an Airtable action, then click **Connect Now**.
        
    -   Sign in to Airtable (OAuth) or add a Personal Access Token (if applicable) and authorize HighLevel.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714153/original/fHHeGQM4qi2T66Tqw7BqeyuK9nKPg05peQ.png?1762424279)  
        
2.  **From Settings → Integrations**
    
    -   Go to **Settings → Integrations**, locate **Airtable**, and complete the connection (connections are per sub‑account).  
          
        **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714208/original/hY2HNhxIyTf9RhSqQ-o2MffxcZ4KvZx_FQ.png?1762424308)**  
        

## **Build your first flow:**

  

1.  From the desired sub‑account, go to **Automations → Workflows** and click **Create Workflow** (or open an existing workflow).
    
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714378/original/KjhlQg02wPCdc_NE6KQhQIc8yzxvVKmSyg.png?1762424411)  
      
    
2.  Add **New Record** or **Updated Record** (Airtable) and select the **Base** and **Table**. Click **Test Trigger** to pull a sample.
    
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714557/original/gX_e92ZV1yEeSGg-8jcK6JHz7QHQNjCwbg.png?1762424472)**  
      
    
3.  Add Airtable Actions (e.g., **Find Record**, then **Update Record** or **Create Record**). Map email/phone/IDs from the trigger sample.
    
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714646/original/-a2l0jJcqEgLNIKAjAaULd9TnkyTZoIK-Q.png?1762424522)**  
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714655/original/EzO5Z2W1-MMyfB0jkdqKSBnKxSaCXpXSSQ.png?1762424539)**  
    
4.  Add follow‑ups (e.g., **Send Email**, **Notify User**, **Create Opportunity**), then **Publish** and test once to verify entries in **Execution Logs**.
    

* * *

## **Use Cases**

  

These real-world patterns show how to pair Airtable steps with workflow logic to notify teams, keep data synchronized across systems, and generate tasks with AI.

  

### **Use Case 1: Create Tasks and Notify Team from Airtable Records**

**Goal:** Notify teams when a new Airtable record is created or updated.

**Workflow Setup:**

-   **Trigger:** Airtable → **New Record** _(use_ **_Updated Record_** _if you prefer to notify on changes)_
    
-   **Actions:**
    
    -   **Find Record (Airtable)**
        
    -   **Internal Notification → Email**
        

**Example:**  
A new client project is added in Airtable → the HighLevel workflow finds the record → an internal email is sent to the project manager saying:  
“New Airtable record created. Project ID: {{record.id}}. Please review the details.”

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057712753/original/boyesHaGs99c2pZ8Sg_RuVqvnRJq2Yxohw.png?1762423706)  
  

### **Use Case 2: Conditional Updates and Notifications from Airtable**

**Goal:** Keep Airtable in sync with contacts or leads created in HighLevel and external tools.

**Workflow Setup:**

-   **Triggers:**
    
    -   **Contact Changed** _(with Tag = "New")_
        
    -   **Contact Created** _(Type = Lead)_
        
    -   **Facebook Lead Form Submitted** _(Form = "Form 1")_
        
-   **Actions:**
    
    -   **Find Record (Airtable)**
        
    -   **If found → Update Record**
        
    -   **If not found → Create Record**
        

**Example:**  
A Facebook lead form is submitted → HighLevel checks if the lead exists in Airtable → if found, the record is updated with the latest phone/email → if not found, a new Airtable record is created.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713549/original/ualwcW9wQzebY3T9PGnoODRv9sSujdkbww.png?1762424047)  
  

### **Use Case 3: Automate Content Production from Airtable Briefs**

**Goal:** Generate content and create downstream tasks based on new briefs added to Airtable.

**Workflow Setup:**

-   **Trigger:** Airtable → **New Record** (Table: “Content Briefs”)
    
-   **Actions:**
    
    -   **Find Record (Airtable)**
        
    -   **Generate Content with AI (workflows)**
        
    -   **Create Task (ClickUp)**
        
    -   **Send Internal Notification (workflows)**
        
    -   **Send Email (workflows)**
        

**Example:** When a new brief is added, the workflow generates draft copy, creates a ClickUp task populated with the content, and alerts your team and the client.

  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713569/original/ttdTf_RhEnpHwHEBMrx9obFQAyZIaId63w.png?1762424071)**

* * *

## **Frequently Asked Questions**

  

**Q: Do I need a paid Airtable plan?**  
The integration works with free and paid Airtable accounts. Airtable’s own plan limits (e.g., row caps, attachment storage) still apply.  
  

**Q: Is this integration available to all users?**  
Yes, it’s available to all accounts that have access to workflows and integrations in HighLevel.  
  

**Q: Are Airtable steps premium‑billed in HighLevel?**  
Yes. The Airtable trigger and actions are premium and billed per execution at your account’s standard rate. Agencies can optionally rebill sub‑accounts.  
  

**Q: Where do new or updated rows live?**  
All actions read/write in the Base and Table you select for that step, using the connected Airtable account.  
  

**Q: How do I troubleshoot failures?**  
Check **Execution Logs** for specific step errors (e.g., invalid table/field, missing permissions). If authorization expired, reconnect Airtable and re‑run a test.

* * *

## **Related Articles**

  

-   [Introduction to Workflows and Automations](https://help.gohighlevel.com/support/solutions/articles/155000002445-introduction-to-workflows-and-automations)   
      
    
-   [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)   
      
    
-   [Workflows Pro Plan – New Pricing Tiers](https://help.gohighlevel.com/support/solutions/articles/155000003971-workflows-pro-plan-new-pricing-tiers)   
      
    
-   [Installing Marketplace Apps Directly from the Workflow Builder](https://help.gohighlevel.com/support/solutions/articles/155000005791-installing-marketplace-apps-directly-from-the-workflow-builder)  
      
    
-   [Marketplace Apps - Managing External Connections](https://help.gohighlevel.com/support/solutions/articles/155000004585-marketplace-apps-managing-external-connections)