---
title: "Workflow Action - GMB"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003290-workflow-action-gmb"
category: "Uncategorized"
---

# Workflow Action - GMB

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Google My Business (GMB)** action allows you to send messages to contacts via Google My Business messaging, providing a direct way to engage with your customers. This action can be configured to send personalized messages using custom values and trigger links.

  

## Action Name

**GMB (Google My Business)**

  

## Action Description

This action sends a message to a contact through Google My Business, enabling you to communicate directly via GMB's messaging platform. It supports custom values and clickable trigger links, making your messages interactive and personalized.

  

## Action Details

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Action Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">The name of the action. Default is "GMB".</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Message</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">The body of the message to be sent. Supports text, custom values, and trigger links.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr></tbody></table>

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032220684/original/e6QsYubg5riT1O2kKxk4rt-CrOsVQ4myeA.png?1725443079)

  

### **How to configure**

-   **Action Name**: Enter a name for the action. By default, it's set to "GMB".
-   **Message**: Write your message in the text box. You can use:
    -   **Custom Values**: Click on the `{}` icon to insert custom values such as contact details, appointment information, or other dynamic data points.
    -   **Trigger Links**: Use the link icon to add predefined links, which can be selected from the list. These links will be clickable in the GMB message.

  

## Example

  

To use the GMB action effectively, consider the following workflow configuration:

1.  **Trigger**: Choose a relevant trigger such as "Appointment Reminder".
2.  **Action**: Set the GMB action with a message like:
    -   **Message**: "Hello {{contact.name}}, this is a reminder for your upcoming appointment on {{appointment.date}}. If you have any questions, please let us know!"
    -   Use the `{}` icon to insert custom values like contact name and appointment date.

  

By setting up the action this way, you ensure that each contact receives a personalized reminder through Google My Business, making your interactions more meaningful and engaging.