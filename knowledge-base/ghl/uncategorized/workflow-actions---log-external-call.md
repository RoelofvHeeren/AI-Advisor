---
title: "Workflow Actions - Log External Call"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call"
category: "Uncategorized"
---

# Workflow Actions - Log External Call

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [How to Configure](#How-to-Configure)

##   

## Overview

Using this workflow action, you can post your external calls, that take place from third-party calling tools, to the CRM. This ensures that all your communication details are centralized within the CRM for better tracking and management. You can also pass the call recordings using this action and this will be visible on the Conversations section of contact.

  

## Action Name

Log External Call

  

## Action Description

This action is essential for maintaining accurate records of communication, tracking interactions, and ensuring that all team members are informed about the status of customer relationships. By using this action, businesses can enhance their customer relationship management (CRM) efforts and improve overall communication strategies.

  

## How to Configure

**You can effectively use this action with the Inbound Webhook Trigger. This trigger provides you with a webhook URL that you can call to share the call details, whenever a call takes place in your calling system.**

  

**Configuring the Inbound Webhook Trigger: [Help Document](https://help.gohighlevel.com/a/solutions/articles/48001237383?portalId=48000045315)**

  

**Once the trigger is configured, add the If/Else brach with direction field to separate inbound and outbound flows.**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991613/original/24LrQDtH5ygw9I_ZcbbhTvV06Dx1LMXJrQ.jpeg?1726563970)**  

**Note: direction field can be accessed from Inbound Webhook Trigger option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991607/original/9993xT0LYviYnfBNoc19VQhWgDIbcBec5A.png?1726563969)**

  

**After creating two branches for Inbound calls and Outbound calls, Add "Create Contact Action. This will identify the contact on which the call should be posted using the phone numbers that you pass in the webhook.** 

  

**In Create Contact Action, map the Phone field to "From Number" in Inbound call flow and "To Number" in the Outbound call flow. This will create/identify the contact associated with the given phone number.** 

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991610/original/RZWcAM1IHNjcp_ZQUg7ePzD7zzINYFUSZA.png?1726563970)**

**Post this, Add the Log External Call action.** 

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991614/original/U0E3hTX1vSzhRyybhI8Ch4MQIRxYiVZXwQ.jpeg?1726563970)**

  

**For each field, Direction, Date, To, From, Call Status and Attachment, update the related values by clicking on custom values icon > Inbound Webhook Trigger.**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991609/original/qPGcACU6zpiSZjFADSXRRLWRHWyOn12x-A.png?1726563970)**

  

**Once the workflow is published, external calls will be logged in the CRM and visible in Conversation section of the contact.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991611/original/3rKb5m94uSvBK4htvBkU8CSlfk8w7hRMUw.jpeg?1726563970)**

  

##