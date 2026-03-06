---
title: "Workflow Action - Add To Affiliate Manager"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003227-workflow-action-add-to-affiliate-manager"
category: "Uncategorized"
---

# Workflow Action - Add To Affiliate Manager

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Add To Affiliate Manager** adds a contact to the Affiliates list in the Affiliate Manager with status as active by default. This action is useful for enrolling existing contacts or customers as your Affiliates

  

## Action Name

**Add To Affiliate Manager**

  

## Action Description

The Add To Affiliate Manager action is designed to automate converting existing contacts as affiliats in the sub account affiliate manager. The status if the new affiliates is active by default.

  

## Action Details

**Step by Step Guide**

  

1.  **Choose the Action Type:** Select "**Add To Affiliate Manager**" from the list of available actions.
2.  **Name Your Action:** Enter a descriptive name for the action, such as "Convert contacts to affiliates"![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031799303/original/eupZ-f0OzJTEmPbY8YEgFDYLZzWNcZOh5w.png?1724837548)

  

  

## Example

Convert existing contacts to affiliates when a tag is added to the contact

Scenario: A business wants to recruit the customers that have replied on a post or shown interest in being part of the affiliate network. The user adds a tag to categorize such contacts and then convert them to active affiliates

  

  

  

**Action Setup:**

Action: Add To Affiliate Manager

Name: Convert contacts to affiliates

  

  

**Workflow Trigger:**

1.  Contact Changed:  The contact will enter the workflow when the selected filter is changed or added.
2.  Filters: Tags added "Affiliate"

  

**Workflow Actions:**

1.  Add To Affiliate Manager

  

  

**Outcome:**  
This ensures that whenever the tag will be added to a contact, the contact will be converted to an affiliate.