---
title: "Workflow Action – Create and Associate Company"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006580-workflow-action-create-and-associate-company"
category: "Uncategorized"
---

# Workflow Action – Create and Associate Company

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Create and Associate Company** action allows you to automatically create a new **Company record** and associate it with the trigger **Contact** in your workflow.

  

This action helps eliminate manual data entry by linking Contacts and Companies automatically, keeping your CRM structured and up-to-date.

  

## Action Name

Create and Associate Company

  

## Action Description

Use this action to:

-   Automatically create a **new Company record** from a Contact workflow.
    
-   Link the newly created Company to the **trigger Contact** through an association.
    
-   Map fields dynamically using data from the contact record, workflow variables, or inbound webhooks.
    
-   Maintain organized company-contact relationships without manual creation.
    

This action ensures that each contact is linked to a relevant company, making it especially useful for B2B onboarding, form submissions, or enrichment workflows.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055523318/original/AqE8q-f_AeqTkh_iP73zxthxtgiktxGC5w.png?1759928801)

  

I. **Field Mapping**

-   Map workflow variables or fixed values to populate the new Company’s fields.
    
-   Example mappings:
    
    -   Company Name → `{{contact.company_name}}`
        
    -   Domain → `{{inboundWebhookRequest.body.domain}}`
        
    -   Industry → `{{contact.industry}}`
        

II. **Dynamic Value Sources**  
You can map values from:

-   **Contact fields** (e.g., First Name, Company Name, Email).
    
-   **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.company}}`).
    
-   **Fixed text values** (e.g., “New Lead Company”).
    

III. **Association Behavior**

-   The new Company record created by this action will automatically be **associated with the Contact** that triggered the workflow.
    
-   The relationship will appear under both the **Contact’s “Associated Companies”** section and the **Company’s “Associated Contacts”** section in the CRM.
    

IV. **Add Field**

-   Use **\+ Add Field** to map additional Company fields.
    
-   Each row represents a field–value pair that defines how the Company record is created.
    

V. **Save Action**

-   Once all required mappings are set, click **Save Action**.
    
-   When the workflow runs, it will create the new Company record and associate it with the Contact automatically.
    

VI. **Edge Cases & Notes**

-   This action is **only available in Contact-based workflows.**
    
-   If the Contact already has a linked Company, this will create an additional Company but will not be associated with the contact
    

  

## Example

**Goal:** Automatically create a new Company record when a new Contact is added to the CRM.

**Setup**

-   **Workflow Type:** Contact-based
    
-   **Trigger:** Contact Created
    
-   **Action:** Create Associated Company
    
-   **Field Mappings:**
    
    -   Company Name → `{{contact.company_name}}`
        
    -   Domain → `{{contact.email}}` (parsed domain if applicable)
        
    -   Industry → “Lead Company”
        

**Flow**

1.  A new Contact is created in the CRM.
    
2.  Workflow triggers the action.
    
3.  A Company record is created with the mapped fields.
    
4.  The new Company is automatically associated with that Contact.