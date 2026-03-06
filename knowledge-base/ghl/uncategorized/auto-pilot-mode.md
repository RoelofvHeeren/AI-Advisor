---
title: "Auto-Pilot Mode"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001337-auto-pilot-mode"
category: "Uncategorized"
---

# Auto-Pilot Mode

The Conversation AI bot will respond to all inbound messages for the "Supported Channel" selected in the Preference settings.

  

**In This Article**

-   [1\. Wait time before responding](#1.-Wait-time-before-responding)
-   [2\. Maximum messages a bot can send to a contact](#2.-Maximum-messages-a-bot-can-send-to-a-contact)
-   [3\. Send Bot to sleep when I send a message manually or through workflow](#3.-Send-Bot-to-sleep-when-I-send-a-message-manually-or-through-workflow)

* * *

Customize the below settings for the Auto-pilot mode to have more control over the Bot's responses and behavior

## 1\. Wait time before responding

Field Type - Number field with a minimum of 1 sec and a maximum of 5 mins. 

The bot waits for this amount of time before it replies to the contact. This time gives the bot the ability to collect all messages together(if the contact sends multiple messages in a short period) and respond to them together.

  

  

## 2\. Maximum messages a bot can send to a contact

Field Type - Number input field with a maximum limit of 25

The bot will go to sleep for a contact if this limit is reached in that conversation on a specific channel. To activate the bot again, mark the conversation as "Read".

This is a safeguard added to the conversation AI to send it to sleep using an Upper Limit to its number of responses per contact per conversation channel.

  

  

## 3\. Send Bot to sleep when I send a message manually or through workflow

Field type - Toggle and control the time for which the bot goes to sleep if a manual/workflow message is sent from the subaccount to a contact

The bot will go to sleep for the amount of time if a message is sent by the GHL user or a workflow to a contact. The bot will automatically become active for the contact once the sleep time is passed.

#