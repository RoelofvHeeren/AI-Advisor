---
title: "Workflow Action - Remove From Affiliate Campaign"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003230-workflow-action-remove-from-affiliate-campaign"
category: "Uncategorized"
---

# Workflow Action - Remove From Affiliate Campaign

## Overview

The **Remove From Affiliate Campaign**  can be used to removes an affiliate from a affiliate campaign. It lets you choose which campaign to remove them from using a dropdown.

  

## Action Name

**Remove From Affiliate Campaign** 

  

## Action Description

The **Remove From Affiliate Campaign**  action is designed to remove an existing affiliate from a selected affiliate campaign

  

## Action Details

**Step by Step Guide**

  

1.  **Choose the Action Type:** Select "**Remove From Affiliate Campaign** " from the list of available actions.
2.  **Name Your Action:** Enter a descriptive name for the action, such as "Remove from Black Friday Campaign"
3.  **Select the Campaign:** Choose if you want to change to status to either active or inactive.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031803920/original/e3yW-8xW5U04OAqqRLcPaMXpnEkHEuZyDg.png?1724840106)

  

  

## Example

Remove Affiliates from the Black Friday Campaign when they opt out or fill an exit form

Scenario: A business wants maintain their list of active affiliates. They have a form which is filled by current affiliates who want to leave the Black Friday Affiliate Campaign.

  

  

  

**Action Setup:**

Action: Remove From Affiliate Campaign

Name: Remove from Black Friday Campaign

  

  

**Workflow Trigger:**

1.  Form Submitted: The entry point to the workflow will be when the selected form is submitted by an existing affiliate
2.  Filters: Forms is "Affiliate Exit Form"

  

**Workflow Actions:**

1.  Remove From Affiliate Campaign
2.  Select "Black Friday Campaign" in Affiliate Campaign filter

  

  

**Outcome:**  
This ensures that whenever an existing affiliate fills up the "Affiliate Exit Form" the affiliate's profile will be removed fro the Black Friday Affiliate Campaign and they will no longer be able to use their referral link to push sales and generate commissions.