---
title: "Workflow Action - Update Associated Company"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company"
category: "Uncategorized"
---

# Workflow Action - Update Associated Company

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)
    
      
    

## Overview

The **Update Associated Company** action allows you to automatically update the details of the **Company linked to a Contact** in a Contact-based workflow.

  

It’s available **only in Contact-based workflows** and helps you keep company data synchronized whenever related contact information changes, or when new data is received through webhooks or forms.

  

If no company is associated with the Contact, the action will be skipped automatically.

* * *

  

## Action Name

Update Associated Company

  

## Action Description

Use this action to:

-   Automatically update fields in the **Company** associated with the Contact triggering the workflow.
    
-   Map workflow variables, contact fields, or webhook data to company fields (e.g., Company Name, Domain, Industry).
    
-   Keep both contact and company data up to date without manual editing.
    

This action updates existing company records — it **does not create new companies**.  
For creating a new associated company, use the **Create Associated Company** action instead.

  

## Action Details

I. **Field Mapping**

-   Map the company fields you want to update using workflow data or static values.
    
-   Example mappings:
    
    -   Company Name → `{{contact.company_name}}`
        
    -   Industry → `{{inboundWebhookRequest.body.industry}}`
        
    -   Domain → `{{contact.email}}` (to extract domain automatically)
        

II. **Dynamic Value Sources**  
You can use values from:

-   **Contact fields** (e.g., company\_name, email, city).
    
-   **Inbound Webhook payloads** (e.g., `{{inboundWebhookRequest.body.domain}}`).
    
-   **Fixed text values** (e.g., “Active Client”).
    

III. **Add Field**

-   Use **\+ Add Field** to update multiple company properties at once.
    
-   Each field-value pair represents one update operation.
    

IV. **Update Behavior**

-   The action updates the **primary company associated** with the Contact.
    
-   If the Contact is not linked to any Company, the action will **be skipped automatically**.
    

V. **Save Action**

-   After mapping fields, click **Save Action**.
    
-   When the workflow runs, it updates the associated company record with the configured values.
    

VI. **Edge Cases & Notes**

-   Available **only in Contact-based workflows.**
    
-   The action cannot create new companies — use _Create Associated Company_ for that.
    
-   The workflow will skip execution if the contact has no associated company.
    

  

## Example

#### **Update Company Address When Contact Moves**

**Goal:** Automatically reflect address changes at the company level.

**Setup**

-   **Trigger:** Contact Changed → Address field updated
    
-   **Action:** Update Associated Company
    
-   **Field Mappings:**
    
    -   Address → `{{contact.address}}`
        
    -   City → `{{contact.city}}`
        
    -   State → `{{contact.state}}`
        

**Flow**

1.  A contact updates their address.
    
2.  Workflow triggers the update.
    
3.  The associated company’s address fields are automatically updated.