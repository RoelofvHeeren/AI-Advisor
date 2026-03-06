---
title: "Workflow Action - Clear Fields of Associated Record for Contact"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004589-workflow-action-clear-fields-of-associated-record-for-contact"
category: "Uncategorized"
---

# Workflow Action - Clear Fields of Associated Record for Contact

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)
    
      
    

## Overview

The **Clear Fields of an Associated Record** action allows users to reset specific fields within a custom object associated with a contact. This is useful for clearing outdated information, resetting form entries, or handling special conditions in workflows.

  

## Action Name

**Clear Fields of Associated Record for Contact**

  

## Action Description  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041054690/original/EJDSgBhbWPet8kBhbbJeTCWWriARecUORQ.jpeg?1738756190)

This action lets users select specific fields within a custom object and clear their values while keeping the record intact. The [associated label](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315) determines which records should have their fields cleared.

  

## Action Details

-   This action is possible only after creating custom objects in the subaccount and creating an association label between at least one of those objects and contacts.
-   Needs at least [one association](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315) between the custom object and the contact for the action to work
-   Users can select multiple fields to be reset.
-   The action does **not delete** the record, only the selected fields.

  

## Example

  

A retail business tracks **customer loyalty points** using a **Loyalty Program** custom object. When a customer redeems their points for rewards, the **Loyalty Points** field should be cleared to reflect the redemption.

Since workflows cannot trigger on specific dates, this action will be executed when a related **event occurs**, such as when a **redemption request is processed**.

#### **Example Setup**

1.  **Object to Update** → Loyalty Program
2.  **Association Label** → Customer Rewards
3.  **Fields to Clear:**
    -   **Loyalty Points**
    -   **Last Redemption Date**

#### **How It Works**

-   When a **customer redeems their points**, a workflow is triggered to **clear the Loyalty Points** field.
-   The **Last Redemption Date** is also reset, ensuring accurate tracking of future redemptions.
-   This prevents redeemed points from being mistakenly available for reuse while keeping the customer’s loyalty record intact.

This helps businesses **accurately track loyalty redemptions** and ensure that customers cannot reuse points after redemption.