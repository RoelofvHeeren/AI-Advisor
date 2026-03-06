---
title: "Workflow Action - Add Follower(s) to Opportunity"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity"
category: "Uncategorized"
---

# Workflow Action - Add Follower(s) to Opportunity

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Add Follower(s) to Opportunity** action allows you to assign one or more users as followers to an existing opportunity. By doing so, these users can access updates and information about any changes to the opportunity. Typically, this action follows a **Find Opportunity** step (or is triggered by an opportunity) so there’s a specific opportunity in context.

  

## Action Name

**Add Follower(s) to Opportunity**

  

## Action Description

When triggered, the **Add Follower(s) to Opportunity** action adds each selected user to the opportunity’s list of followers. If a user is already following the opportunity, the system prevents duplication—meaning the same user will not be added twice. If no opportunity is found or triggered, the action is skipped.

  

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043055771/original/tySi1AmkMiOH6ceFWWSrymOKQqU2xqYJzw.png?1741702613)

  

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **Followers** | One or more users to be added as followers. Typically displayed as a dropdown or multi-select list of users (e.g., “pallavi kothari,” “akshay sarma”). | Yes |

### Edge Cases

-   **No Opportunity in Context**: If the workflow was not triggered by an opportunity and there is no preceding **Find Opportunity** step, this action does nothing.
-   **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest as defined in the Find Opportunity action) is ever updated.
-   **Existing Followers**: The system prevents adding a user who is already following or is assigned to the opportunity, so duplicates are not created. 

## Example

**Scenario**: You want to keep both a sales manager and a product specialist informed about a high-value opportunity as soon as it’s created or updated.

1.  **Trigger**: An opportunity is created or updated and meets certain criteria (e.g., value > 10,000).
2.  **Action**: _Find Opportunity_
    -   **Filters**:
        -   _Opportunity Value_ is greater than `10000`
        -   _Status_ is “Open”
3.  **Action**: _Add Follower(s) to Opportunity_
    -   **Action Name**: “Notify Key Stakeholders”
    -   **Followers**: “Sales Manager,” “Product Specialist”

If the **Find Opportunity** step locates a matching opportunity, the “Sales Manager” and “Product Specialist” will be added as followers (unless they already are followers), ensuring they have access to the opportunity’s details and updates.