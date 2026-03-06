---
title: "Workflow Action - Voicemail"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003275-workflow-action-voicemail"
category: "Uncategorized"
---

# Workflow Action - Voicemail

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The Voicemail action allows you to send a pre-recorded voicemail directly to a contact. This can be useful for follow-ups, notifications, or delivering specific messages without engaging in a live call.

  

## Action Name

**Voicemail**

  

## Action Description

Sends a pre-recorded voicemail file to the selected contact.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032066704/original/S5yOIgMvdxybPNVPONEqVuXi7sUy1IQMiw.png?1725274416)

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Action Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">The name of the action, which is set as "Voicemail".</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Drop Your File</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Upload the pre-recorded voicemail file you wish to send. The file format should be compatible with voicemail playback.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

  

**How to Configure:**

1.  **Name the Action:** Under "Action Name," ensure it reads "Voicemail" to identify the action being taken.
2.  **Upload the File:** Click on the "Upload file" button to choose a pre-recorded voicemail message from your local system. Once uploaded, you can play the message to ensure it's the correct one.
3.  **Save:** After configuring, ensure to save the workflow to apply these changes.

  

**Some Triggers (But not limited to)**

To use the Voicemail action effectively, consider combining it with the following triggers:

1.  **Appointment No-Show:** If a contact misses a scheduled appointment, automatically send them a voicemail to reschedule.
2.  **Follow-Up Reminder:** Trigger a voicemail if a contact hasn’t responded to previous communications within a set time frame.

##   

## Example

-   **Trigger:** "Appointment Status Changes" changed to "No-Show"
-   **Action:** "Voicemail"
-   **Uploaded File:** "Reschedule.mp3" (a pre-recorded message encouraging the contact to reschedule their missed appointment)

In this example, the workflow will detect if a contact does not show up for an appointment and automatically send a voicemail to encourage them to reschedule, improving engagement without the need for manual follow-up.