---
title: "Workflow Action - Edit Conversation"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003269-workflow-action-edit-conversation"
category: "Uncategorized"
---

# Workflow Action - Edit Conversation

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The "**Edit Conversation**" action allows you to modify the state of a conversation by marking it as read or unread, as well as by archiving or unarchiving it. This can be useful for managing conversations effectively and keeping track of which messages have been addressed.

  

## Action Name

**Edit Conversation**

  

## Action Description

The "Edit Conversation" action lets you:

1.  Mark a conversation as read or unread.
2.  Archive a conversation, moving it out of the active conversation list.
3.  Unarchive a conversation, moving it back into the recents tab.

This action helps streamline conversation management by enabling quick status updates and organization.

  

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032056538/original/lmhpQmBv5nAr2vTAa551pSfX8rizwVFRpQ.png?1725268913)

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field Name</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Mark as Read or Unread</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">Choose to mark the conversation as either read or unread. Options include: &lt;ul&gt;&lt;li&gt;None&lt;/li&gt;&lt;li&gt;Mark as Read&lt;/li&gt;&lt;li&gt;Mark as Unread&lt;/li&gt;&lt;/ul&gt;</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); font-family: ui-sans-serif; font-weight: normal; white-space: normal; overflow-wrap: break-word;">No</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Archive or Unarchive</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Choose to archive or unarchive the conversation. Options include: &lt;ul&gt;&lt;li&gt;None&lt;/li&gt;&lt;li&gt;Archive&lt;/li&gt;&lt;li&gt;Unarchive -&gt; Move to Recents tab&lt;/li&gt;&lt;/ul&gt;</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">No</td></tr></tbody></table>

##   

#### **How to Configure**

1.  **Action Name:** Enter a descriptive name for the action, such as "Mark as Read and Archive."
2.  **Mark as Read or Unread:** Select an option to change the read status of the conversation.
3.  **Archive or Unarchive:** Choose whether to archive the conversation or move it back to the recents tab.

####   

#### **Suggested Triggers**

1.  **Contact Replied:** Use this action to automatically mark a conversation as read when a contact replies.
2.  **Appointment Status Changed:** Use this action to archive a conversation after an appointment is marked as completed.

##   

## Example

**Scenario:** You want to ensure that conversations are archived and marked as read once a customer service issue is resolved.

1.  Set up a workflow trigger for when a contact replies.
2.  Add the "Edit Conversation" action.
3.  Configure it to mark the conversation as read and archive it.
4.  This way, all resolved conversations are automatically moved out of the active conversation list, helping your team stay organised and focused on unresolved issues.

  

This setup helps maintain a clean and organised communication channel, ensuring that only active and unresolved conversations are immediately visible to the support team.