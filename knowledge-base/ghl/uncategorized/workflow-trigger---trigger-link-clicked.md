---
title: "Workflow Trigger - Trigger Link Clicked"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003263-workflow-trigger-trigger-link-clicked"
category: "Uncategorized"
---

# Workflow Trigger - Trigger Link Clicked

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The **Trigger Link Clicked** trigger initiates a workflow whenever a specific trigger link is clicked by a contact. This feature is ideal for tracking link engagement and automating subsequent actions based on user interactions with predefined links.

##   

## Trigger Name

**Trigger Link Clicked**

  

## Trigger Description

This trigger starts a workflow when a contact clicks on a specified trigger link. Trigger links can be used in emails, SMS, or other communication channels. The workflow is activated only for the contacts who click the specified link, making it a powerful tool for targeted engagement.

  

## How to Configure

-   **Choose a Workflow Trigger**: Select **Trigger Link Clicked** from the list of available triggers.
    
-   **Workflow Trigger Name**: Enter a descriptive name for your trigger, such as "Promo Link Clicked" or "Survey Link Engagement."
    
-   **Filters**: Use filters to specify which trigger link will activate the workflow. You can select the exact trigger link from the dropdown menu to narrow down the workflow activation.
    

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Value</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Trigger link</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Selects the specific link that will trigger the workflow when clicked by a contact.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022796/original/adyMBJMBawzl9q8hI8Z0yrOjvWQf4tAEQQ.png?1725190224)

##   

## Example

You want to create a workflow that sends a follow-up email to contacts who click on a promotional link sent via email.

-   **Workflow Trigger Name**: "Promo Link Engagement Follow-up"
-   **Filters**:
    -   **Trigger link**: "Spring Sale Promo" (Only clicks on this specific link will trigger the workflow)

  

**Workflow Steps**:

1.  **Trigger**: Trigger Link Clicked (as configured above)
2.  **Action**: Send Email - Send a follow-up email thanking the contact for their interest and offering a special discount.
3.  **Action**: Update Contact - Tag the contact as "Interested in Promo" to segment these users for future promotional campaigns.