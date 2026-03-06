---
title: "Workflow Trigger - Courses User Login ( Legacy Portal )"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003099-workflow-trigger-courses-user-login-legacy-portal-"
category: "Uncategorized"
---

# Workflow Trigger - Courses User Login ( Legacy Portal )

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The **User Login** trigger is designed to initiate specific actions within a workflow when a user logs into their account in the Legacy Portal. This trigger is particularly useful for tracking user activity, sending login notifications, or triggering personalized actions based on login events.

  

## Trigger Name

**User Login**

  

##   

## Trigger Description

The **User Login** trigger activates a workflow whenever a user logs into their account. This can be used to automate actions such as sending a welcome back email, tracking login frequency, or triggering reminders or offers upon login.

  

## How to Configure

  

To configure the **User Login** trigger, you simply need to set the workflow trigger name. Additional filters can be added if you want to further refine the conditions under which this workflow is triggered.

####   

#### **Fields and Their Properties**

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Workflow Trigger Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Name given to the trigger for easy identification.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031251632/original/caSPZI063-zc7YWrb8937TLsXnYbJbO1CQ.png?1724057255)

##   

## Example

In this example, the workflow is set up to trigger when a user logs into their account:

1.  **Workflow Trigger Name:** Courses `User Login`

####   

#### **Example Workflow**

When a user logs into their account, the following actions could be triggered:

-   **Send a Welcome Back Email:** Automatically send a personalized email welcoming the user back to their account.
-   **Trigger a Personalized Offer:** If the user hasn’t logged in for a certain period, automatically trigger a special offer or reminder.

  

This configuration ensures that the workflow activates every time a user logs in, allowing for real-time engagement and personalized communication.