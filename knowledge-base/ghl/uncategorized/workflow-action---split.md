---
title: "Workflow Action - Split"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003304-workflow-action-split"
category: "Uncategorized"
---

# Workflow Action - Split

The **Split Action** is a powerful tool for optimizing workflows by dividing contacts into different paths. This feature is crucial for automating lead management, A/B testing, and improving engagement strategies.

* * *

* * *

**TABLE OF CONTENTS**

-   [What is the Split Action?](#What-is-the-Split-Action?)
-   [How to Use the Split Action](#How-to-Use-the-Split-Action)
-   [Use Cases](#Use-Cases)
-   [Related Resources](#Related-Resources)

* * *

## **What is the Split Action?**

  

The Split Action allows you to send contacts through different pathways in your workflow, distributing them based on specified percentages or even random distribution. This feature is often used to test different versions of a workflow or to distribute workload across different teams.

  

Note that the Split Action only has one criteria: **random**. You can adjust what percentage of contacts go down any number of paths. If you want to "split" contacts by a criteria (like order size) then use the **if/else action**.
[Action - If/Else](https://help.gohighlevel.com/en/support/solutions/articles/155000002471)

Additionally, keep in mind that once a contact is assigned to a path they remain assigned to that path. If the contact should **enter the same split again they will not be (re)assigned randomly**, they will go down the same path.

  

* * *

## **How to Use the Split Action**

  

**Step1:** Add the Split Action

Navigate the the workflow builder, click the "+" icon to add a new action, then browse or search for Internal > Split.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041011023/original/Oqm0oPX8-nbRZrZpXkr9R4Z5csUIZoTLdw.png?1738694052)**

  

**Step 2:** Configure the Split Action

Select "Random Split" from the Distribution Type dropdown (the only option).

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041011639/original/oRoM4PKgodN7Xe4q63VG19l-v_spnKif4Q.png?1738695053)**

  

  

**Step 3a:** Configure Paths

In the Paths section you can add or remove paths (up to 5), rename paths, and configure their percentage (%) split.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012043/original/dFwdSKaF0Tu6ufWyGtv9wYX3uA33YTX_EA.png?1738695770)**  

  

**Step 3b:** Configure Paths - 100% Total

The path weightages (percentages) must add up to 100%. If the total is too high, or too low, you will get an error and will be unable to save the action.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012097/original/dijSxVFuOOq01bjy1mTt1IzEHCRI3cTo0A.png?1738695901)**

  

**Step 3c:** Configure Paths - 0% Path

You can configure one or more paths to have a 0% weightage, meaning 0 contacts will be sent down that path, as long as the total is still 100%.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012164/original/inWHKJOZu5pNLLjIpj__VbMpj8rc_-tNCg.png?1738696047)**

  

  

**Step 4:** Statistics

On the Action's Statistics tab you can see how many contacts have entered each path and the total.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012238/original/rAB_jKXBhtg-L8qJ24emIMS_TLulEpN5Nw.png?1738696202)**

* * *

## **Use Cases**

  

-   **A/B Testing:** Test different versions of emails, SMS, or other communications. For example, 50% of contacts get an email with headline A and 50% with headline B.  
      
    
-   **Lead Routing:** Distribute leads to sales teams or marketing channels based on capacity or expertise. For example, 75% to more experienced sales person A an 25% to sales person in training B.  
      
    
-   **Campaign Optimization:** Identify the best-performing strategies and adjust future workflows accordingly.

* * *

## **Frequently Asked Questions**

  

**Q: What happens if I set the percentages incorrectly and they don’t add up to 100%?**

A: The system will prompt you to correct the percentages so that they total exactly 100% before you can proceed.

  

**Q: Can I change the split configuration after the workflow has started?**

A: Yes, you can modify the Split Action settings, but the changes will only apply to new contacts entering the workflow after the update.

  

**Q: How many paths can I create within a Split Action?**

A: You can create up to 5 separate paths within a single Split Action.

  

**Q: Are contacts locked into their assigned path once they enter it?**

A: Yes, once a contact is assigned to a path, they will remain on that path. Even if they re-enter the workflow, they will follow the same path.

  

**Q: Can I view performance metrics for each path in real-time?**

A: Yes, you can view real-time performance metrics using the "Statistics" icon or by enabling the Stats View within the workflow.

  

**Q: Can I use Split Actions for non-marketing workflows, like customer support routing?**

A: Absolutely! Split Actions can be used for any type of workflow, including routing customer support tickets to different teams or agents.

* * *

## **Related Resources**

  

-   **[Getting Started with Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000002288)** 
-   **[A List of Workflow Actions](https://help.gohighlevel.com/en/support/solutions/articles/155000002294)** 
-   **[Split Testing in Funnels](https://help.gohighlevel.com/en/support/solutions/articles/48001230918)** 
-   **[Action - If/Else](https://help.gohighlevel.com/en/support/solutions/articles/155000002471)**