---
title: "Conversation AI: Multiple Messages in One Workflow Action"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003207-conversation-ai-multiple-messages-in-one-workflow-action"
category: "Uncategorized"
---

# Conversation AI: Multiple Messages in One Workflow Action

  

  

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Conversation AI Bot** action is designed to leverage AI-powered interactions within your workflows. This action can be used to ask specific questions, handle general queries, and route conversations based on user responses. This feature enhances customer interaction and automates common conversational tasks.

  

## Action Name

**Conversation AI Bot**

  

## Action Description

The **Conversation AI** action configures the question and conditions for the bot, enabling automated responses and interactions. It utilises AI to manage and respond to user queries, enhancing the efficiency of your customer support and engagement processes.

  

## Action Details

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032221831/original/5m9RJRXo_bWOtcj6_xvTOSJDtuvzLIQFwQ.png?1725443697)

  

The **Conversation AI** action configures the question and conditions for the bot, enabling automated responses and interactions. It utilises AI to manage and respond to user queries, enhancing the efficiency of your customer support and engagement processes.

  

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px; border-collapse: collapse; border: none;"><colgroup><col width="100"><col width="506"></colgroup><tbody><tr style="height: 21px;"><td style="border: 1px solid rgb(0, 0, 0); overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); text-align: center;">Field</td><td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(159, 197, 232); font-family: ui-sans-serif; font-weight: normal; text-align: center;">Description</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Advanced Bot Configurations</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Toggle this option to enable or disable advanced configurations for the AI bot. Additional fields will appear for customisation when enabled.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Personality</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Defines the tone and style of the bot's responses. For example, 'Friendly and Professional' or 'Determined'. This setting affects how the bot interacts with users.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Additional Instructions</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Provides extra guidelines or information for the bot to consider during interactions. This can include specific directions on handling sensitive topics or emphasising certain information.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Question</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">The primary question or prompt that the bot will ask. This field supports using custom values to tailor the question dynamically based on user or context.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Time Out</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Sets the duration (in minutes or hours) the bot will wait for a response before timing out. This ensures that the workflow does not stall indefinitely waiting for user input.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Channel</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Specifies the communication channel through which the bot will interact, such as SMS, Facebook, Instagram, or Live Chat. Selecting the correct channel ensures that the interaction reaches the user through the expected medium.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Skip If Answered</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Toggle this option to skip the action if the question has already been answered, preventing redundant queries and improving user experience.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Bot Responses Limit</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Sets a limit on the number of responses the bot can provide. This helps manage the flow of conversation and prevents the bot from overwhelming the user with too many messages.</td></tr><tr style="height: 21px;"><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Branches</td><td style="border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204); border-image: initial; overflow: hidden; padding: 2px 3px; vertical-align: bottom; background-color: rgb(255, 255, 255); white-space: normal; overflow-wrap: break-word;">Defines different paths based on conditions met or not met. For instance, a branch could be triggered if 'No Condition Met' or if the 'Bot times out'. Branching allows for more complex workflows and customized user experiences.</td></tr></tbody></table>

##   

### **How to Configure the Action**

1.  **Add the Action to Workflow**: Drag and drop the **Conversation AI** action into your desired workflow.
2.  **Enable Advanced Bot Configurations** (Optional): If you want to set custom personality traits or give additional instructions, toggle this option.
3.  **Set the Personality**: Define how the bot should interact with users (e.g., Friendly and Professional).
4.  **Provide Additional Instructions** (Optional): Input any specific instructions for the bot.
5.  **Define the Question**: Enter the main question the bot should ask. Use custom values if needed to tailor the message.
6.  **Configure the Time Out**: Set the time duration for how long the bot should wait for a response.
7.  **Select the Channel**: Choose the communication channel where this interaction will occur (e.g., SMS, Facebook).
8.  **Set Skip If Answered**: Decide if the bot should skip this action if the question is already answered.
9.  **Set Bot Responses Limit**: Limit the number of responses the bot can send.
10.  **Add Branches**: Define conditions under which different branches will be executed, providing customized responses or routing based on user interaction.

##   

## Example

-   **Trigger**: New Message Received
    -   **Condition**: Message received from Facebook
    -   **Action**: Conversation AI
        -   **Question**: "How can I assist you today?"
        -   **Personality**: Friendly and Professional
        -   **Channel**: Facebook
        -   **Branches**:
            -   **Branch Name**: No Condition Met
                -   **Condition**: User did not respond with relevant query.
                -   **Next Action**: Send an automated follow-up message.
            -   **Branch Name**: Time Out
                -   **Condition**: Bot times out after 1 hour.
                -   **Next Action**: Notify a human agent to follow up.

  

By following these configurations, you can effectively utilise the **Conversation AI Bot** action to streamline customer interactions and automate response handling within your workflow