---
title: "Workflow Trigger - Task Added"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003260-workflow-trigger-task-added"
category: "Uncategorized"
---

# Workflow Trigger - Task Added

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The **Task Added** trigger allows you to initiate a workflow whenever a new task is added to a contact's record. This is useful for automating actions based on task creation, such as notifying the assigned user, updating task-related fields, or sending follow-up messages.

  

## Trigger Name

**Task Added**

  

## Trigger Description

This trigger is activated when a new task is added to a contact's record. You can use filters to specify which tasks should start the workflow, such as tasks assigned to a particular user or tasks containing specific keywords.

  

## How to Configure

-   **Choose a Workflow Trigger**: Select **Task Added** from the list of available triggers.
    
-   **Workflow Trigger Name**: Enter a descriptive name for your trigger, such as "Task Added."
    
-   **Filters**: Use filters to refine when the trigger should activate. This allows you to specify which tasks should start the workflow based on the assigned user.
    

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Value</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Assigned User</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Selects specific users to trigger the workflow when a task is assigned to them. You can choose one or multiple users.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">No</td></tr></tbody></table>

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022402/original/Vh7b5KrWl2eg-_B1rIeaz9LrdvNns6Okxw.png?1725189092)

  

## Example

You want to create a workflow that triggers when a new task is added and is assigned to a specific user. The workflow will then send an email to notify the user about the new task.

-   **Workflow Trigger Name**: "New Task Assigned"
-   **Filters**:
    -   **Assigned User**: "John Doe" (Only trigger if the task is assigned to John Doe)

**Workflow Steps**:

1.  **Trigger**: Task Added (as configured above)
2.  **Action**: Send Email - Notify the assigned user about the new task.
3.  **Action**: Update Task Status - Mark the task as "Notified."