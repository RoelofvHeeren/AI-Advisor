---
title: "Understanding Workflow Behaviour with SMS and Customer Replies"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002475-understanding-workflow-behaviour-with-sms-and-customer-replies"
category: "Uncategorized"
---

# Understanding Workflow Behaviour with SMS and Customer Replies

## Scenario:

A contact is in a workflow and an automated SMS is sent to them. The workflow includes a wait step that pauses until the "Customer Reply" is received. However, what happens if a user manually sends an SMS to the contact after the automated SMS?

  

## Explanation:

If a user manually sends an SMS to the contact while the contact is still in the workflow, this action can disrupt the workflow's ability to correctly attribute the customer's reply. Here's why:

-   **Attribution Challenge**: The workflow system does not have a way to associate the customer's reply with a specific SMS when multiple SMS messages are involved. Unlike email, which operates in threads allowing replies to be easily linked to specific messages, SMS messages do not have this threading capability.
-   **Breaking the Chain**: When a manual SMS is sent after the automated SMS, any reply from the contact may not be correctly attributed to the automated SMS. As a result, the workflow's wait step will not recognize the reply, causing the contact to be stuck at the wait step.
-   **Stuck at Wait Step**: Because the system cannot attribute the reply to the specific automated SMS, the contact will remain at the wait step, even if they have replied.

  

## Recommendations:

-   ## **Avoid Manual SMS**: Do not send manual SMS to contacts who are currently in a workflow with a "Wait for Customer Reply" step for SMS.