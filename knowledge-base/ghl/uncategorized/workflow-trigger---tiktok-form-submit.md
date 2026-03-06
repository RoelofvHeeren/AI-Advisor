---
title: "Workflow Trigger - TikTok Form Submit"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003262-workflow-trigger-tiktok-form-submit"
category: "Uncategorized"
---

# Workflow Trigger - TikTok Form Submit

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The **TikTok Form Submitted** trigger is designed to start a workflow whenever a form is submitted via TikTok. This can be particularly useful for capturing leads, collecting feedback, or gathering information from TikTok users, and then automating subsequent actions.

  

## Trigger Name

**TikTok Form Submit**

  

## Trigger Description

This trigger activates a workflow when a specific form on TikTok is submitted. You can specify which form submissions should trigger the workflow using filters, ensuring that only relevant submissions start the workflow.

  

## How to Configure

-   **Choose a Workflow Trigger**: Select **TikTok Form Submitted** from the list of available triggers.
    
-   **Workflow Trigger Name**: Enter a descriptive name for your trigger, such as "TikTok Lead Capture" or "TikTok Feedback Form."
    
-   **Filters**: Use filters to specify which form submissions will activate the workflow. You can filter based on the form name to narrow down the trigger to specific forms.
    

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td dir="ltr" style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Value</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">In Form</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Selects the specific TikTok form that will trigger the workflow when submitted.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032022492/original/A426hQAmcPS1t1wwCkwPOXY0vI_wRDYPqw.png?1725189426)

  

## Example

You want to create a workflow that sends a thank-you email to users after they submit a feedback form on TikTok.

-   **Workflow Trigger Name**: "TikTok Feedback Thank You"
-   **Filters**:
    -   **In Form**: "TikTok Feedback Form" (Only submissions from this form will trigger the workflow)

  

**Workflow Steps**:

1.  **Trigger**: TikTok Form Submitted (as configured above)
2.  **Action**: Send Email - Thank the user for their feedback.
3.  **Action**: Update Contact - Tag the contact as "Feedback Provided" to keep track of users who have submitted feedback.