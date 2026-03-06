---
title: "Workflow Action - Remove Contact Tag"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag"
category: "Uncategorized"
---

# Workflow Action - Remove Contact Tag

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Remove Contact Tag** action is used to remove specific tags from a contact's profile within your CRM. This action is useful for managing contact segments, updating contact status, and ensuring accurate tracking of interactions and behaviors.

  

## Action Name

**Remove Contact Tag**

  

## Action Description

This action removes the selected or all tag(s) from a contact's record. Tags are often used to categorize contacts based on their interactions, interests, or status. By removing a tag, you can alter a contact's segmentation and the workflows they may be a part of.

  

## Action Details

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057116/original/wQImrBPmuP4sN3SmiwE4HK1tW8oOoC6biw.png?1726642708)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057217/original/GPaLbK2PrsfWH0vtgOFzs6f1h_rpmZEkcQ.png?1726642832)

  

  

  

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td dir="ltr" style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center; width: 15.7713%;">Field Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center; width: 67.6998%;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word; width: 15.7713%;">Tags</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word; width: 67.6998%;">Select the tag(s) you wish to remove from the contact's profile. You can choose multiple tags.</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Yes</td></tr><tr><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word; width: 15.7713%;">Remove All Tags</td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word; width: 67.6998%;">Switch on the toggle if you want to remove all the tags</td><td dir="ltr" style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">No</td></tr></tbody></table>

  

**How to Configure the Remove Contact Tag Action**:

1.  **Action Name**: Enter a meaningful name for the action. This name will help you identify the purpose of this action in the workflow.
2.  **Tags**: Click on the "Select a tag" dropdown and choose the tag(s) you want to remove from the contact. You can select multiple tags if needed.
3.  **Remove All Tags:** Switch on the toggle if you want all the tags to removed. When the toggle is switched on they user will not be able to access the "Tags" field.

  

**Suggested Triggers to Combine with This Action (But not limited to)**

1.  **Customer Replied**: Use this trigger to remove a tag based on specific keywords or phrases in a customer's reply. For example, if a customer responds with "unsubscribe" or "not interested," you might remove tags like "Interested" or "Potential Lead."
    
2.  **Appointment Status Changed**: This trigger can initiate the tag removal action if an appointment is canceled or rescheduled. You could remove tags like "Appointment Booked" to accurately reflect the contact's current status.
    
3.  **Survey Submitted**: If a survey response indicates that a contact is no longer interested in a service or product, use this trigger to remove tags that categorize them as a potential customer.
    

##   

## Example

**Configuration Example**:

You are running a campaign where contacts are tagged as "Interested" when they sign up for a webinar. If they do not attend the webinar, you want to remove this tag to avoid sending them follow-up emails intended for engaged participants.

-   **Action Name**: "Remove Webinar Interested Tag"
-   **Tags**: "Interested"

  

**Workflow Steps**:

1.  **Trigger**: Webinar Not Attended - Triggers if a contact does not attend the scheduled webinar.
2.  **Action**: Remove Contact Tag - Configured to remove the "Interested" tag from these contacts.
3.  **Action**: Update Contact Field - Optionally, add a new tag like "Missed Webinar" to accurately segment these contacts for future follow-ups or different workflows.