---
title: "Workflow Action - Remove Owner from Opportunity"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004755-workflow-action-remove-owner-from-opportunity"
category: "Uncategorized"
---

# Workflow Action - Remove Owner from Opportunity

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

## Overview

The **Remove Owner from Opportunity** action allows you to clear the assigned owner of an existing opportunity, effectively leaving it unassigned. This can be useful in workflows where you need to temporarily remove ownership (e.g., when redistributing leads or resetting ownership after a deal is closed).

  

## Action Name

**Remove Owner from Opportunity**

  

## Action Description

When triggered, the **Remove Owner from Opportunity** action unassigns the current owner of the opportunity. As a result, the opportunity becomes ownerless unless a subsequent step reassigns ownership. If your system settings sync contact and opportunity owners, the contact owner may also be removed—depending on those sync settings.

> **Important:** This action depends on having an opportunity in context—either because the workflow was triggered by an opportunity or because a prior **Find Opportunity** step located one. If no opportunity is in context, this action does nothing.

  

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043054966/original/Gm7vpPUr_Y31Hs3MpU6hB463IdcUFKPLjA.png?1741702121)

  

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **Opportunity to Unassign** | The opportunity that triggered the workflow or the one found by a preceding **Find Opportunity** step. If both exist, the **Find Opportunity** result takes precedence. | — |

### Sync Settings

-   If **contact and opportunity owners are synced** (configured in **Opportunity Settings**), removing the opportunity owner may also remove the contact owner.
-   If **contact and opportunity owners are _not_ synced**, only the opportunity owner is removed.

### Edge Cases

-   **No Opportunity in Context**: If the workflow was not triggered by an opportunity and there is no preceding **Find Opportunity** step, this action is skipped.
-   **Multiple Opportunities**: Even if a **Find Opportunity** step could match multiple records, only **one** (earliest or latest) is ever updated, leaving the rest unchanged.
-   **Already Unassigned**: If the opportunity already has no owner, this action effectively makes no changes.

## Example

**Scenario**: A workflow detects that an opportunity is closed and needs to be reassigned or left unassigned for administrative processing.

1.  **Trigger**: Opportunity status changes to “Closed.”
2.  **Action**: _Remove Owner from Opportunity_
    -   **Action Name**: “Unassign Closed Deal”

If the workflow was triggered by a specific opportunity (or a **Find Opportunity** step identifies one), this action removes its owner, leaving the opportunity unassigned. If your system syncs contact ownership with the opportunity, the contact’s owner may also be cleared.