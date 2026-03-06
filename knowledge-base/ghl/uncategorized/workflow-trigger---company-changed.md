---
title: "Workflow Trigger - Company Changed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006494-workflow-trigger-company-changed"
category: "Uncategorized"
---

# Workflow Trigger - Company Changed

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Examples](#Examples)
    
      
    

## Overview

The **Company Changed** trigger starts a workflow whenever selected fields in a **Company record** are updated. This trigger allows you to react instantly to changes in company details, ensuring that automations stay in sync with the most up-to-date data.

## Trigger Name

Company Changed

  

  

## Trigger Description

This trigger runs when:

-   A **Company record** is updated.
    
-   The update matches one or more field conditions you configure in the trigger.
    

You can choose **specific fields** to monitor (e.g., Industry, Status, Domain). When those fields change, the workflow automatically begins.

  

## How to Configure

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055005957/original/2jOQH3Y4U0-yFKxL8sniERm7idQUxcGW4A.png?1759320818)

-   **Add the Trigger**
    
    -   Choose **Company Changed** as your workflow trigger.
        
-   **Select Fields to Monitor**
    
    -   Pick one or more Company fields (standard or custom) to track for changes.
        
    -   Example: Industry, Domain, Status.
        
-   **Apply Operators**
    
    -   For each field, choose an operator:
        
        -   **Is not empty** – fires when the field has any value.
            
        -   **Contains Phrase** – fires when the field value contains a specified keyword/phrase.
            
-   **Add Multiple Filters (Optional)**
    
    -   Combine filters using **AND logic** (all conditions must be met for the trigger to fire).
        
-   **Save the Trigger**
    
    -   Once saved, the workflow will automatically enroll Companies whenever they meet your configured conditions.
        

  

## Examples

#### **Example 1: Track Industry Changes**

  

**Goal:** Trigger onboarding when a Company’s Industry contains “Healthcare.”

**Setup**

-   **Filter:** Industry → Contains Phrase → Healthcare
    
-   **Action:** Enroll in Healthcare Onboarding Workflow
    

**How It Works**

1.  Company Industry field is updated to “Healthcare Providers.”
    
2.  Workflow triggers.
    
3.  The Company is enrolled into the Healthcare-specific workflow.
    

* * *

#### **Example 2: Ensure Domain Is Captured**

  

**Goal:** Notify a team member whenever a Company record is created or updated without an empty domain.

**Setup**

-   **Filter:** Domain → Is not empty
    
-   **Action:** Send Internal Notification
    

**How It Works**

1.  Company Domain field is populated with a value.
    
2.  Workflow triggers.
    
3.  Internal notification is sent to the sales team.