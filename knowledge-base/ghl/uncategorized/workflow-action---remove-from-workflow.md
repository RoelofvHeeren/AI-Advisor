---
title: "Workflow Action - Remove from Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow"
category: "Uncategorized"
---

# Workflow Action - Remove from Workflow

In this article, you’ll discover how to use the **“Remove from Workflow”** action to efficiently manage contacts across your automation workflows. We’ll explain what this action does, highlight its key benefits, and provide a step-by-step guide to setting it up. Additionally, you’ll find a real-world example to help you see how this action can streamline your processes and improve customer communication.

* * *

**TABLE OF CONTENTS**

1.  [What is the “Remove from Workflow” Action?](#What-is-the-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action?)[](#Key-Benefits-of-Using-the-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action)
2.  [Key Benefits of Using the “Remove from Workflow” Action](#Key-Benefits-of-Using-the-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action)[](#Step-by-Step-Process-for-Using-the-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action)[](#Configuring-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action-%3A-Step-by-Step-Process)
3.  [Configuring “Remove from Workflow” Action : Step by Step Process](#Configuring-%E2%80%9CRemove-from-Workflow%E2%80%9D-Action-%3A-Step-by-Step-Process)
4.  [](#Example%3A-Marketing-Campaign-Cleanup)[Use Cases](#Use-Cases)
5.  [FAQ](#FAQ)

* * *

# **What is the “Remove from Workflow” Action?**

  

The **“Remove from Workflow”** action is a powerful tool for automating contact management in your workflows. It allows you to automatically remove contacts from one or multiple workflows based on specific triggers or conditions. By keeping your workflows clean and relevant, this action ensures that contacts receive the right communication at the right time, without being overwhelmed by redundant or irrelevant interactions.

* * *

## **Key Benefits of Using the “Remove from Workflow” Action**

  

1.  **Streamlined Contact Management:** Automatically removes contacts from workflows they no longer need to be part of, saving time and effort.
2.  **Improved Communication Relevance:** Prevents contacts from receiving redundant or irrelevant messages by ensuring they’re only in workflows applicable to their current status.
3.  **Efficiency in Automation:** Reduces manual intervention by automating the process of removing contacts, allowing you to focus on more strategic tasks.
4.  **Enhanced Customer Experience:** Ensures customers receive appropriate communication without being overwhelmed by unnecessary emails or notifications.

* * *

## **Configuring “Remove from Workflow” Action : Step by Step Process**

  

  

Head over to the **"Automation"** section of your CRM. Once you get there, click the **"Workflows"** menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037743577/original/LducBGjpOhjDCyAciTCMv6xmHWntNsT0eQ.png?1733319807)

  

Click **" + Create Workflow"** button. Next, Click **" + Start from Scratch"** option from the dropdown menu. It will take you to the workflow editor menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038188859/original/bSWlYHJGZWprpe5cfNxNfeUQjg8BIywZEw.png?1733983194)  
**Add the “Remove from Workflow” Action**

To view the list of all the workflow actions, Click **"+"** icon. When you see the list, scroll down to find **"Remove from Workflow"** action. Click there to configure the settings.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749735/original/cDMwvUsu4s0n_nF2gN1fXpMumVR63h1wVA.png?1733323255)

  
**Name Your Action**

Provide a descriptive name for the action (e.g., “Remove from Marketing Campaign Workflow”) so it’s easy to identify in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749730/original/K6R-lpptNAiWwmR5mZaPcoHG-Tu1OZgUMg.png?1733323246)

  
**Choose the Workflow Removal Option**

-   **Current Workflow:** Removes the contact from the workflow they are currently in.  
      
    
-   **Another Workflow:** Specify a different workflow from which to remove the contact.  
      
    
-   **All Except Current Workflow:** Removes the contact from all workflows except the one they are currently in.  
      
    
-   **All Workflows:** Removes the contact from all active workflows.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038191746/original/GZ0jPomXVuNWGsyullicEeQ7U01QHyYBaQ.png?1733986911)  
**

From the dropdown, Select the workflow from which you want the contact to be removed

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749816/original/UmFTlc2p8-Du7R-MX4Ys2EiWR3KKBCwmxw.png?1733323294)

  

**Save and Test the Workflow**

Save the action and test it by triggering the workflow to ensure it behaves as expected.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749910/original/pbv1OpZB9EuPSuEcSL8d3GKtKHv7f5n4Kg.png?1733323331)

  

When you are ready to activate the workflow to start doing its magic, just turn on the toggle to **"Publish".**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038191955/original/M1cMZ4bRqUlwkjOmdUxlP3-fZF_fdpjHjA.png?1733987133)

* * *

## **Use Cases**

  

**Scenario:** A business wants to ensure that once a contact completes a specific action (e.g., making a purchase), they are removed from an ongoing marketing campaign workflow to avoid redundant communication.

  

**Steps to Implement:**  
  

    1.    **Trigger:** Set the trigger for the workflow to activate when the contact completes a purchase or subscribes to a service.  
  

    2.    Add the “Remove from Workflow” Action:  
  

    •    **Action Name:** Remove from Marketing Campaign Workflow.  
  

    •    **Workflow Selection:** Choose Another Workflow.  
  

    •    **Specified Workflow:** Select the relevant marketing campaign workflow to remove the contact from.  
  

    3.    **Outcome:**

    •    The contact is automatically removed from the specified marketing campaign workflow.  
  

    •    They stop receiving promotional emails, ensuring relevant and non-redundant communication.

  

**Result:** This automation maintains a clean and relevant communication strategy, improving customer satisfaction and engagement by avoiding unnecessary messages.

  

* * *

## **FAQ**

  

**1\. What happens if a contact is in multiple workflows?**

You can remove the contact from:

    •    The current workflow only.

    •    Another specific workflow of your choice.

    •    All workflows except the current one.

    •    All active workflows.

  

**2\. Can I remove a contact from a workflow automatically after they complete a specific action?**

Yes, you can set triggers (like “purchase completed”) to automatically remove contacts from specific workflows, ensuring they no longer receive irrelevant messages.

  

**3\. How do I know if the “Remove from Workflow” action is working?**

Test the workflow using a sample contact to ensure they’re removed as expected. You can also check activity logs to verify successful removal.

  

**4\. Can I undo the “Remove from Workflow” action once it’s triggered?**

No, once a contact is removed, it can’t be undone automatically. You’ll need to manually re-enroll them if necessary.

  

**5\. Will contacts be notified when they are removed from a workflow?**

No, contacts are not notified. The action only affects internal workflow status and does not alert the contact.