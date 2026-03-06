---
title: "Workflow Trigger - Courses New Sign Up"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003098-workflow-trigger-courses-new-sign-up"
category: "Uncategorized"
---

# Workflow Trigger - Courses New Sign Up

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

## Overview

The **New Signup** trigger is designed to automatically initiate workflows when a new customer purchases or signs up for membership offers, services, or products such as Community Groups for the **first time**. This trigger is particularly useful for welcoming new members, delivering onboarding information, or providing incentives for signing up.  
  
**NOTE:** If the contact being run through the workflow with the **New Signup** trigger has already been granted access to a Membership Offer or Community Group through other means, this trigger will not work.

  

  

## Trigger Name

**New Signup**

  

## Trigger Description

The **New Signup** trigger activates a workflow when a new customer signs up for an offer, membership, or any service you are providing. You can use this trigger to automate welcome emails, provide access to resources, or apply specific tags to the new customer’s profile.

  

## How to Configure

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031250884/original/v4G0iHiP_bgAkWP9KjrgltVQ2btT3IfWRw.png?1724056828)

  

To configure the **New Signup** trigger, you need to define the workflow trigger name and set filters based on the offer or criteria you wish to monitor.

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Workflow Trigger Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Name given to the trigger for easy identification.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Offer</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Specify the offer that the new signup relates to (e.g., a discount or specific membership).</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">No</td></tr></tbody></table>

  

  

## Example

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031251169/original/0AZYu07Mbu7vKdg7ewxA-oD4Uk3HzgvgeA.png?1724056969)

  

In this example, the workflow is set up to trigger when a customer signs up for a membership and selects the "15% Early Bird Discount" offer:

1.  **Workflow Trigger Name:** Course `New Sign Up`
2.  **Offer:** `15% Early Bird Discount`

####   

#### **Example Workflow**

When a customer signs up for a membership using the "15% Early Bird Discount" offer, the following actions could be triggered:

-   **Send a Welcome Email:** Automatically send a personalized welcome email to the new member, outlining the next steps and providing relevant information.
-   **Tag Customer:** Apply a tag such as "Early Bird" to the customer's profile for easy segmentation in future campaigns.

  

This configuration ensures that the workflow is triggered only when a customer signs up using the specific "15% Early Bird Discount" offer, allowing for targeted and relevant automated actions.