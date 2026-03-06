---
title: "How to Automatically Assign Users to Leads In Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002044-how-to-automatically-assign-users-to-leads-in-workflows"
category: "Uncategorized"
---

# How to Automatically Assign Users to Leads In Workflows

  

This article will guide you through setting up a Workflow to assign new contacts to specific users in a round-robin style and then notify those users about their new leads.

  

## Step 1: Create a New Workflow

-   Go to "Automations" > "Workflows" > click the "Create Workflow" button
-   Select the "Start from Scratch" option

  

## Step 2: Add a Trigger

-   **Define a trigger** based on your lead source. For simplicity, you can use "contact created" as the trigger. This means the workflow will be activated every time a new contact is created.

  

## Step 3: Assign Users

-   **Add the Workflow Action** **"Assign to User"**: This action enables you to assign new contacts to users in a round-robin manner.
-   **Customize Distribution**: Select users from the sub-location to add to the round-robin. For an even distribution, keep the "split traffic" field set to "equally".

  

## Step 4: Notify Assigned Users

-   **Add the Workflow Action "Internal Notification"**: This action allows you to notify assigned users about new leads that enter the Workflow.
-   **Choose Notification Channel**: Select the notification channel (in-app notifications, SMS, or email) or use multiple channels if required.
-   **Select User Type**: Ensure that under the "user type", you select "assigned user" to ensure notifications are sent only to the assigned user and not to others.

**Note**: Make sure the Internal Notification Action comes after the assign user action in the workflow. This ensures that notifications are sent to the correct users.

  

## Step 5: Publish and Save

**Publish the Workflow**: Once you have configured the workflow with the trigger, assign user action, and notification action(s), enable the "Publish" toggle at the top right of the screen and then click "Save" to activate the workflow.

  

## Conclusion

Congratulations! You have successfully set up a workflow to assign new contacts to users in a round-robin and notify them about new leads. If you have any further questions, feel free to reach out for assistance.