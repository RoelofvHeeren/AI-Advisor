---
title: "Workflow Action - Remove Followers from Opportunity"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity"
category: "Uncategorized"
---

# Workflow Action - Remove Followers from Opportunity

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Remove Follower(s) From Opportunity** action allows you to remove specific user(s) from an opportunity’s follower list or remove **all** followers at once. This action typically follows a **Find Opportunity** step (or an opportunity-triggered workflow) so there’s a specific opportunity in context. If no opportunity is in context, the action will be skipped.

  

## Action Name

**Remove Follower(s) From Opportunity**

  

## Action Description

When triggered, the **Remove Follower(s) From Opportunity** action takes the user(s) you specify and removes them from the opportunity’s list of followers. If **Remove All Followers** is enabled, every follower on the opportunity is removed, regardless of the user list. This is useful for cleaning up follower lists or ensuring only relevant team members remain assigned to an opportunity.

  

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043056240/original/tsf8_kOR2lhxJQfLXWtjXf7695S2uBoNkg.png?1741702837)

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label to help you identify this step in your workflow. | Yes |
| **Users** | One or more users to be removed from the opportunity’s follower list (e.g., “Account User”). If a user is not currently a follower, no change is made for that user. | No (unless “Remove All Followers” is disabled) |
| **Remove All Followers** | A toggle that, when enabled, removes **all** followers from the opportunity, regardless of which users are specified in the **Users** field. | No |

### Edge Cases

-   **No Opportunity in Context**: If there is no opportunity in the workflow context (neither triggered nor found via **Find Opportunity**), this action is skipped.
-   **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest) is ever affected.
-   **Non-Followers**: If a specified user is not currently following the opportunity, no change is made for that user.
-   **Remove All vs. Specific Users**: If **Remove All Followers** is enabled, the system ignores the specific user list and removes everyone.

  

## Example

  

**Scenario**: A workflow unassigns a group of users from a completed opportunity so that only the record owner remains as a follower.

1.  **Trigger**: An opportunity moves to the “Closed” stage.
2.  **Action**: _Find Opportunity_
    -   **Filters**:
        -   _Status_ is “Closed”
3.  **Action**: _Remove Follower(s) From Opportunity_
    -   **Action Name**: “Clear Followers from Closed Deal”
    -   **Users**: “Sales Team A,” “Sales Team B”
    -   **Remove All Followers**: Disabled (so only the specified users are removed)

In this example, once the **Find Opportunity** step locates the closed opportunity, the **Remove Follower(s) From Opportunity** action removes the specified users from the follower list. If you needed to remove everyone, you would enable **Remove All Followers**.