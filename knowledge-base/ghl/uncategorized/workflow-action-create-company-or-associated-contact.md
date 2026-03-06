---
title: "Workflow Action – Create Company or Associated Contact"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact"
category: "Uncategorized"
---

# Workflow Action – Create Company or Associated Contact

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Examples](#Example)
    
      
    

## Overview

The **Create Company or Associated Contact** action allows you to automatically create a new **Company record** or an **Associated Contact** under an existing Company from within your workflow.

  

This action helps automate CRM enrichment by ensuring that when new data enters via forms, integrations, or webhooks, related Company and Contact records are created and linked without manual effort.

  

## Action Name

Create Company or Associated Contact

  

## Action Description

Use this action to:

-   Automatically create new **Company records** directly within a workflow.
    
-   Create **associated Contacts** linked to an existing Company record.
    
-   Map input fields dynamically using data from workflow triggers such as inbound webhooks or form submissions.
    
-   Maintain clean company-contact associations without requiring manual record creation.
    

This action helps reduce duplicate entries and ensures your CRM structure remains organized when handling company-based automations.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055485023/original/UJpZsTPA4UENuK2PODOvXmPr9SzRxdV04w.png?1759909866)  

  

I. **Object Record to Create**

-   Choose the record type you want to create:
    
    -   **Company** – to create a new Company record.
        
    -   **Associated Contact** – to create a new Contact linked to the current Company in the workflow.
        

II. **Field Mapping**

-   Map workflow data or fixed values to the Company or Contact fields you wish to populate.
    
-   Example mappings:
    
    -   _Company Name → {{inboundWebhookRequest.body.company}}_
        
    -   _Contact Email → {{inboundWebhookRequest.body.email}}_
        
    -   _First Name → {{inboundWebhookRequest.body.first\_name}}_
        

III. **Dynamic Value Sources**  
You can map values from:

-   **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.companyName}}`).
    
-   **Company fields** (when the workflow trigger is based on a company event).
    
-   **Fixed text values** (e.g., “HighLevel Partners”).
    
-   **Custom Values**
    

IV. **Association Behavior**

-   When selecting **Associated Contact**, the new contact will automatically be linked to the Company record that triggered the workflow.
    
-   The relationship will appear under the Company’s “Associated Contacts” section in the CRM.
    

V. **Add Field**

-   Use **\+ Add Field** to include additional field mappings.
    
-   Each row represents a single field-value mapping.
    

VI. **Save Action**

-   Once mappings are configured, click **Save Action.**
    
-   When the workflow runs, it will automatically create the defined record type (Company or Associated Contact) and populate all mapped fields.
    

  

## Example

####   

#### **Example 1: Create a New Company from a Webhook**

**Goal:** Automatically create a Company record when a new business lead is received.

**Setup**

-   **Workflow Type:** Company-based
    
-   **Trigger:** Inbound Webhook
    
-   **Object Record to Create:** Company
    
-   **Field Mappings:**
    
    -   Company Name → `{{inboundWebhookRequest.body.companyName}}`
        
    -   Domain → `{{inboundWebhookRequest.body.domain}}`
        
    -   Industry → `{{inboundWebhookRequest.body.industry}}`
        

**Flow**

1.  A new company lead is captured via webhook.
    
2.  The workflow triggers this action.
    
3.  A new Company record is created and added to the CRM with all mapped details.
    

* * *

#### **Example 2: Create an Associated Contact for an Existing Company**

**Goal:** Add a new employee Contact automatically under an existing Company record.

**Setup**

-   **Workflow Type:** Company-based
    
-   **Trigger:** Company Updated or Webhook → Employee added event
    
-   **Object Record to Create:** Associated Contact
    
-   **Field Mappings:**
    
    -   First Name → `{{inboundWebhookRequest.body.firstName}}`
        
    -   Last Name → `{{inboundWebhookRequest.body.lastName}}`
        
    -   Email → `{{inboundWebhookRequest.body.email}}`
        

**Flow**

1.  Employee data is received through webhook or integration.
    
2.  The workflow triggers under the relevant Company.
    
3.  A new Contact is created and automatically associated with that Company.
    

* * *

#### **Example 3: Enrich Company Data and Add New Contacts Automatically**

**Goal:** For every new Company created, automatically add a contact.

**Setup**

1.  **Step 1:** Use this action → _Object to Create = Company_
    
    -   Company Name → `{{inboundWebhookRequest.body.company}}`
        
    -   Domain → `{{inboundWebhookRequest.body.domain}}`
        
2.  **Step 2:** Use another action → _Object to Create = Associated Contact_
    
    -   Contact Name → `{{inboundWebhookRequest.body.contactName}}`
        
    -   Email → `{{inboundWebhookRequest.body.email}}`
        

**Flow**

1.  A new company record is created first.
    
2.  The second action runs immediately after to add the associated contact.
    
3.  The contact appears under the new company’s associated contact list automatically.