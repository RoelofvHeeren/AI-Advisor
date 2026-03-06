---
title: "Workflow Action - Slack Message"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003273-workflow-action-slack-message"
category: "Uncategorized"
---

# Workflow Action - Slack Message

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The "**Slack Message**" action enables you to send notifications directly to Slack, whether it's to a specific user, a private channel, or a public channel. This action allows for seamless communication and notification management, ensuring that team members are promptly informed about relevant activities or updates. As a premium action, it will incur additional charges for each execution.

  

## Action Name

**Slack Message**

  

## Action Description

The "Slack Message" action sends a customized message to a designated Slack account. You can choose whether to send a direct message to a specific user, post in a private channel, or broadcast in a public channel. This integration helps streamline communication by automating notifications for various events, such as task completions, contact updates, or new lead assignments.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032062796/original/Vjk7HtsO6kWQ_NA8iL2v4xpUlr6s6wuCmw.png?1725272305)

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Choose an Account</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Select the Slack account you want to send notifications to.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Event</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Choose the type of message to send: direct message to a user, private channel, or public channel.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

##   

**How to Configure:**

1.  **Choose an Account:** Select the Slack account from the dropdown list where you want the message to be sent. This is required to ensure the message is delivered to the correct workspace.
2.  **Event:**Select the type of event you want to trigger the message. Options include:
    -   **Send Direct Message to a User:** Choose this option to send a private message to a specific Slack user.
    -   **Send Private Channel Message:** Select this option to send a notification to a designated private channel.
    -   **Send Public Channel Message:** Use this option to send a notification to a public channel where everyone in the workspace can see it.

  

**Suggested Triggers to Combine with This Action:**

-   **Task Added:** Notify a Slack channel when a new task is assigned to a user.
-   **Opportunity Status Changed:** Send a message to a sales channel when the status of an opportunity changes.
-   **Form Submitted:** Send a notification to a specific channel when a customer submits a form.

## Example

Suppose you want to send a Slack notification to the "Marketing Team" channel whenever a new lead is added to the system and tagged with "High Priority."

  

**Workflow Configuration Example:**

1.  **Trigger:** `Contact Added`
    -   **Filters:** Tag = `High Priority`
2.  **Action:** `Send notification to Slack`
    -   **Choose an Account:** `Your account`
    -   **Event:** `Send Private Channel message`
    -   **Channel:** `#Marketing Team`
    -   **Message:** `A new high-priority lead has been added. Please check the details.`