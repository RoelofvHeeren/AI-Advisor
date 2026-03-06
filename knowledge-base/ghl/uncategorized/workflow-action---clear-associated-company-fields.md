---
title: "Workflow Action - Clear Associated Company Fields"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006607-workflow-action-clear-associated-company-fields"
category: "Uncategorized"
---

# Workflow Action - Clear Associated Company Fields

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Clear Associated Company Fields** action allows you to automatically **remove or reset field values** from the **Company record associated with a Contact** in a workflow.

  

Use this action to clear outdated company information such as tags, addresses, or custom fields that no longer apply.

  

## Action Name

Clear Associated Company Fields

  

## Action Description

Use this action to:

-   Automatically clear or reset selected **Company fields** linked to a Contact.
    
-   Remove outdated or irrelevant information such as tags, locations, or custom statuses.
    
-   Maintain data accuracy when a contact changes companies or disengages.
    

This action clears existing values from the specified fields—it **does not delete the company record** or break the association.

  

For editing field values instead of clearing them, use the **Update Associated Company** action.

  

## Action Details

I. **Select Fields to Clear**

-   Choose one or more fields from the associated Company record that should be cleared.
    
-   You can select standard fields (e.g., _Industry_, _Domain_, _Address_) or custom fields created in your CRM.
    

II. **Multiple Field Selection**

-   You can clear multiple fields in a single action by adding them to the list.
    
-   Example: Clear _Tags_, _Address_, and _Website_ simultaneously.
    

III. **Clear Behavior**

-   The action clears the selected field values for the **Company associated with the Contact** that triggered the workflow.
    
-   If no associated company exists, the action will **be skipped automatically.**
    

IV. **Save Action**

-   After selecting fields, click **Save Action.**
    
-   When the workflow runs, the chosen fields in the linked company record will be reset (emptied).
    

V. **Edge Cases & Notes**

-   Available **only in Contact-based workflows.**
    
-   This action cannot clear contact fields — only company fields linked to the contact.
    
-   If the contact has multiple company associations, the action targets the **primary associated company**
    

  

## Example

#### **Clear Old Company Tags When a Contact Changes Company**

**Goal:** Remove irrelevant POC from the previous company when a contact switches organizations.

**Setup**

-   **Workflow Type:** Contact-based
    
-   **Trigger:** Contact Changed → Company Name field updated
    
-   **Action:** Clear Associated Company Fields
    
-   **Fields to Clear:** POC
    

**Flow**

1.  A contact updates their company name to a new organization.
    
2.  Workflow triggers this action.
    
3.  POC field is cleared from the old associated company record.