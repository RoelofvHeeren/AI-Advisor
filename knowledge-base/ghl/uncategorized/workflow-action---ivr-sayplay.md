---
title: "Workflow Action - IVR Say/Play"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003369-workflow-action-ivr-say-play"
category: "Uncategorized"
---

# Workflow Action - IVR Say/Play

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Say/Play** action allows you to provide instructions or information to callers via either text-to-speech or pre-recorded audio. This action is part of an IVR (Interactive Voice Response) system, which helps guide callers through options or deliver important messages.

  

## Action Name

**Say/Play**

  

## Action Description

This action lets you configure whether to play a text-to-speech message or a pre-recorded audio message to the caller. It can be used for greetings, instructions, or any other information to be conveyed in a phone call.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467835/original/NB9MGkUup5hqPvn782YDAT8EHar4UBS8-A.png?1725822187)

  

### How to Configure

1.  **Say or Play Message**: Choose whether you want to say a message (text-to-speech) or play a message (pre-recorded audio).
    
    -   **Say a message**: Input the text you want to convert to speech.
    -   **Play a message**: Upload an audio file to be played to the caller.
2.  **Text to Say**: If you selected "Say a message," type the text that the system will read aloud.
    
3.  **Language**: Select the language in which the message should be spoken. Only English is supported for this
    
4.  **Message Voice**: Choose whether the voice will be male or female.
    
5.  **Number of Loops**: Set the number of times you want the message to be played. Default is 1.
    

  

  

## 

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px;"><colgroup><col width="100"><col width="506"><col width="119"></colgroup><tbody><tr style="height: 21px;"><td style="border-color: rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field Name</td><td style="border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; text-align: center;">Description</td><td style="border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; text-align: center;">Mandatory</td></tr><tr style="height: 21px;"><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Say or Play Message</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Choose between text-to-speech or playing a pre-recorded audio message</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: ui-sans-serif; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Text to Say</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">The text that will be converted to speech (if text-to-speech is selected)</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: ui-sans-serif; overflow-wrap: break-word;">No (only for text-to-speech option)</td></tr><tr style="height: 21px;"><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Language</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">The language in which the text will be spoken</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: ui-sans-serif; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Message Voice</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Select the type of voice (e.g., male or female) for the text-to-speech</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: ui-sans-serif; overflow-wrap: break-word;">Yes</td></tr><tr style="height: 21px;"><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Number of Loops</td><td style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; overflow-wrap: break-word;">Number of times the message should be repeated</td><td dir="ltr" style="border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: ui-sans-serif; overflow-wrap: break-word;">No</td></tr></tbody></table>

  

## Example

If you're setting up a welcome message for a customer service IVR, you might configure it like this:

-   **Action Name**: Welcome Message to the Caller
-   **Say or Play Message**: Say a message
-   **Text to Say**: "Hello, welcome to ABC Services. Please press 1 for Sales, 2 for Support."
-   **Language**: English (US)
-   **Message Voice**: Woman
-   **Number of Loops**: 1

  

## Additional Notes

-   For pre-recorded audio, ensure the file is in a compatible format (e.g., MP3).
-   Adjust the number of loops depending on the type of message and its importance.