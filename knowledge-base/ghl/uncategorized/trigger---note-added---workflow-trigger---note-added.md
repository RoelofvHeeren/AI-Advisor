---
title: "Trigger - Note Added -> Workflow Trigger - Note Added"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003205-trigger-note-added-workflow-trigger-note-added"
category: "Uncategorized"
---

# Trigger - Note Added -> Workflow Trigger - Note Added

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

  

The "Note Added" trigger is used to initiate specific actions within a workflow whenever a note is added to a contact’s record. 

  

## Trigger Name

Note Added

  

## Trigger Description

This trigger can be used to automate a variety of tasks, such as sending internal notifications, updating contact information, or triggering subsequent actions in your automation processes.

  

## How to Configure

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031735352/original/3DZrIODcvvb3FnjC51E91xPf76V7HM_h0w.png?1724759304)

  

  

<table border="1" cellpadding="0" cellspacing="0" data-identifyelement="247" data-sheets-root="1" dir="ltr" style="box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; max-width: 100%; border: none; empty-cells: show; cursor: default; color: rgb(24, 50, 71); font-weight: 400; text-align: start; table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px;"><colgroup data-identifyelement="248" style="box-sizing: border-box;"><col width="100" data-identifyelement="249" style="box-sizing: border-box;"><col width="506" data-identifyelement="250" style="box-sizing: border-box;"><col width="100" data-identifyelement="251" style="box-sizing: border-box;"></colgroup><tbody data-identifyelement="252" style="box-sizing: border-box;"><tr data-identifyelement="253" style="box-sizing: border-box; height: 21px;"><td data-identifyelement="254" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Value&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border: 1px solid rgb(0, 0, 0); overflow: hidden; font-family: ui-sans-serif; font-weight: normal; text-align: center; background-color: rgb(232, 240, 253);">Value</td><td data-identifyelement="255" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Description&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; text-align: center; background-color: rgb(232, 240, 253);">Description</td><td data-identifyelement="256" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Mandatory&quot;}" dir="ltr" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; text-align: center; background-color: rgb(232, 240, 253);">Mandatory</td></tr><tr data-identifyelement="257" style="box-sizing: border-box; height: 21px;"><td data-identifyelement="258" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Choose a Workflow Trigger&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Choose a Workflow Trigger</td><td data-identifyelement="259" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Select \&quot;Call Status\&quot; from the dropdown.&quot;}" dir="ltr" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Select "Note Added" from the dropdown.</td><td data-identifyelement="260" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal;">Yes</td></tr><tr data-identifyelement="261" style="box-sizing: border-box; height: 21px;"><td data-identifyelement="262" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Workflow Trigger Name&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Workflow Trigger Name</td><td data-identifyelement="263" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Enter a name for your trigger, e.g., \&quot;Call Status.\&quot;&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Enter a name for your trigger, e.g., "<span dir="ltr" style="color: rgb(24, 50, 71); font-family: ui-sans-serif; font-size: 13px; font-weight: 400; text-align: start; text-indent: 0px; display: inline !important;">Note Added</span>"</td><td data-identifyelement="264" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Yes&quot;}" dir="ltr" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal;">Yes<br></td></tr><tr data-identifyelement="265" style="box-sizing: border-box; height: 21px;"><td data-identifyelement="266" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Filters&quot;}" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Filters</td><td data-identifyelement="267" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Specify conditions to narrow down the trigger, such as call status.&quot;}" dir="ltr" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal; overflow-wrap: break-word;">Specify conditions to narrow down the trigger, such as Has Tag/ Doesn't Have tag</td><td data-identifyelement="268" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;No&quot;}" dir="ltr" style="box-sizing: border-box; padding: 2px 3px; min-width: 5px; cursor: text; font-size: 13px; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; font-family: ui-sans-serif; font-weight: normal;">No</td></tr></tbody></table>

  

**Step-by-Step Guide**

-   Navigate to Workflow Triggers
-   Choose a Workflow Trigger: Select "Note Added" from the list of available triggers.
-   Name Your Trigger: Enter a descriptive name for the trigger, such as "Note Added."
-   Set Up Filters (Optional): Add filters to specify which filters it should trigger the workflow. For example, you can filter by standard fields such as Has tag/ Doesn't have tag or custom fields if present. 

##   

  

## Example : Haircut Note Notification

  

**Scenario:** A Saloon wants to ensure that any note labeled "Haircut" triggers an immediate internal notification to the saloon manager.

#### **Trigger Setup:**

-   **Trigger:** Note Added
-   **Name:** Haircut Note Alert
-   **Filter:** Note contains the tag "Haircut"

#### **Workflow Actions:**

1.  **Notification:** Send an internal notification to the saloon manager with the content of the note.
2.  **Task Creation:** Automatically create a task for the saloon manager to review the note.

**Outcome:** This automation ensures that any note mark![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031736934/original/bKUxyiduXUe2DVglxJlbSFVAoBDXO8blGA.png?1724760287)ed as "Haircut" is immediately flagged for the saloon manager’s attention, enabling prompt action and improving response times for critical issues.