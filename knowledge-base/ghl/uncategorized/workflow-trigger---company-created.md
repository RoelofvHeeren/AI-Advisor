---
title: "Workflow Trigger - Company Created"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006609-workflow-trigger-company-created"
category: "Uncategorized"
---

# Workflow Trigger - Company Created

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The **Company Created** trigger starts a workflow whenever a **new Company record** is added to your CRM — whether it’s created manually, imported, or automatically added through forms, webhooks, or integrations.

  

## Trigger Name

Company Created

  

## Trigger Description

This trigger runs when:

-   A new **Company record** is created in your account.
    
-   The creation occurs through any supported method (manual entry, form submission, import, API, or webhook).
    

You can use this trigger to automatically start workflows that onboard new companies, associate contacts, or sync data to other systems.

  

## How to Configure

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055609900/original/Wbj5hmmod2uxr-2peomD6ly_OMWJym8AfQ.png?1760010716)**

-   **Add the Trigger**
    
    -   Open your workflow editor and choose **Company Created** as the starting trigger.
        
    -   This trigger is available only when the workflow type is **Company-based.**
        
-   **Add Filters (Optional)**
    
    -   You can optionally add filters to target specific types of company creations, for example:
        
        -   _Industry contains “Real Estate”_
            
        -   _Company Name contains “LLC”_
            
        -   _Owner is not empty_
            
-   **Save the Trigger**
    
    -   Once configured, click **Save Trigger**.
        
    -   The workflow will now automatically start whenever a new company record is created that meets your filter criteria (if any).
        

  

## Example

#### **Onboard New Companies Automatically**

**Goal:** Start a workflow whenever a new company is added to send a welcome email 

**Setup**

-   **Trigger:** Company Created
    
-   **Actions:**
    
    1.  **Send Email** – Welcome the new company to your CRM.
        

**Flow**

1.  A new company is created in your CRM (via form or import).
    
2.  Workflow starts automatically.
    
3.  The system sends a welcome email