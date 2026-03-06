---
title: "Workflow Trigger - Order Fulfilled"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003254-workflow-trigger-order-fulfilled"
category: "Uncategorized"
---

# Workflow Trigger - Order Fulfilled

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Trigger Name](#Trigger-Name)
-   [Trigger Description](#Trigger-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The "**Order Fulfilled**" trigger automates processes when an order has been completed. It can be used to send thank-you messages, initiate customer feedback requests, or update inventory and accounting systems.

  

## Trigger Name

**Order Fulfilled**

  

## Trigger Description

This trigger is activated when an order status changes to fulfilled. It ensures timely follow-up actions are taken, enhancing customer satisfaction and streamlining backend processes.

  

## How to Configure

-   **Choose a Workflow Trigger:** Select "Order Fulfilled" from the trigger options.
-   **Workflow Trigger Name:** Name your trigger, such as "Order Fulfilled".
-   **Filters:** Utilize filters to specify conditions under which the workflow should run. For example, you can filter based on cart value, order type, etc.

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td dir="ltr" style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Value</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Cart Value</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Filter orders based on their cart value.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Optional</td></tr><tr style="height: 21px;"><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Select Operator</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Choose comparison operators like Equals to, Greater than, Less than, etc.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Optional</td></tr></tbody></table>

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032021676/original/SFfIE-n_CA6Edf4qZYKKWJhExZOqzfymHg.png?1725186602)

  

## Example

**Scenario:** A company wants to send a thank-you email to customers who make a purchase with a cart value greater than $100.

-   **Configuration:**
    -   **Trigger:** Order Fulfilled
    -   **Filters:**
        -   **Cart Value:** Greater than
        -   **Value:** $100
-   **Actions:**Once the trigger is activated:
    1.  Send an automated thank-you email to the customer.
    2.  Update the CRM to mark the customer as a "VIP Customer."
    3.  Add a follow-up task in the sales team's calendar to offer a special discount on the next purchase.

  

This configuration ensures that high-value customers receive personalized follow-ups, enhancing the relationship and encouraging repeat business.