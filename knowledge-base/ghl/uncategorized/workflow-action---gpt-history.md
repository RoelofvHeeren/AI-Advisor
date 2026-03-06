---
title: "Workflow Action - GPT History"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history"
category: "Uncategorized"
---

# Workflow Action - GPT History

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Details](#Action-Details)
-   [Type of History](#Type-of-History)
-   [How to use?](#How-to-use?)
-   [Advanced options](#Advanced-options)
-   [Points to be Noted](#Points-to-be-Noted)
-   [Example](#Example)

##   

## Overview

Using this feature in the GPT action user can save the history of the GPT actions. The GPT actions will be able to produce more relevant and personlized responses based on the past interactions with GPT actions.

  

## Action Name

GPT Powered by OpenAI

  

## Action Details

  

## **Type of History**

  

There are 5 types of History that can be stored

  

-   This Sub Account - Remembers all GPT conversation across all workflows in the sub account where the History type is "This Sub Account"
-   This Workflow - Remembers all GPT conversation within the workflow where the History type is "This Workflow"
-   Per Execution - Remembers all GPT conversation within the workflow for a single execution where the History type is "Per Execution"
-   This Step - Remembers all GPT conversation for the specific action across multiple executions where the History type is "This Step"
-   Custom - Let's the user create a custom History type that can be used within the same workflow or multiple workflows

  

## **How to use?**

  

-   Enable the option in Labs
-   Select the "GPT Powered By OpenAI" action
-   Switch on "Enable history"

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497467/original/5xEmqYPpkG34-uQFcJPMPoJ36su16U_17A.png?1725875666)

-   Select the "History for" from the dropdown

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497464/original/THDiOtWyK24H_G32R-emMvKlIxGdqDFJZg.jpeg?1725875666)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497463/original/7fsuxw5cXSfQ0CMPkfFT5xdMO8jOq77IUA.jpeg?1725875666)

-   Add system instructions

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497468/original/w_5xFjUniSYzXVGtEilPCFXewbZ5LamE0w.png?1725875666)

## Advanced options

  

-   System Instructions - User can add Instructions if required to give more information to GPT action to get more specific and desired output. These are the rules that can be added which will be followed by all the GPT actions.
-   Exclude instructions from history - This toggle can be used when user wants to exclude the System Instructions from the "history"
-   Exclude responses from history - If this is turned on then responses of this action will not be stored in the history. This is useful when the responses are sentiment (positive or negative) or any analytics that were received as output.

  

##   

  

## Points to be Noted

  

-   If Enable History is switched on then by default GPT 4 models will be selected.
-   History will only work for "Custom" action type
-   History will be independent for each contact

##   

## Example

  

**Sending recommendations to Current customers**

  

**Scenario:** Have a conversation with the customers based on their previous purchase, recommend them new items and check if they are interested in any other products.

  

**Trigger Setup:**

-   **Trigger:** Order Placed
-   **Name:** Order Placed

  

**Workflow Actions:**

1.  **GPT Powered by OpenAI: Add the GPT actions. All the actions will have History enabled and will have context of each others prompts and outputs. The action will be used to prepare the email and check the sentiment of the customer reply.**
2.  **Email: The email action will be used to send the output of GPT actions to the customers**
3.  **Wait: Wait will be added to check if the customer has replied to the email or not.**
4.  **If/Else: The branches will be based on the sentiment of reply of the customer. If the sentiment is positive then we will continue the conversation and if not then contact will exit the workflow.**

  

**Outcome:** This automation helps recover potentially engaging the customer in the email, sending personlized responses to the customer to increase the chance of a Sale.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504268/original/nxs8BHRW_3fTg5FNFftUkWaVwfg5m2iXkw.png?1725879284)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504331/original/SnVn5ecddD4vCtdub3CQScWQusVu7I-y0g.png?1725879318)