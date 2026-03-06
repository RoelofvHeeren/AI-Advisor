---
title: "Workflow Action - Course Revoke Offer"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003382-workflow-action-course-revoke-offer"
category: "Uncategorized"
---

# Workflow Action - Course Revoke Offer

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Course Revoke Offer** action enables you to automate the process of revoking access to specific courses from your contacts. This action is particularly useful for managing course subscriptions, expiring access, or removing access to educational content based on specific conditions or triggers within a workflow.

  

## Action Name

Course Revoke Offer

  

## Action Description

The **Course Revoke Offer** action is designed to automatically remove course access for contacts when certain conditions are met. This could include scenarios such as expired subscriptions, failed payments, or course completions. 

  

## Action Details

##### **Step-by-Step Guide**

1.  **Choose the Action Type:**
    
    -   In your workflow, select "Course Revoke Offer" from the list of available actions.
2.  **Name Your Action:**
    
    -   Enter a descriptive name for the action, such as "Revoke Access to Advanced Marketing Strategies"
3.  **Select the offer:**
    
    -   Choose the specific offer from which you want to revoke access. Such as "Monthly subscription"
4.  **Set Triggers and Conditions:**
    
    -   Determine the triggers that will activate this action. For instance, this could be a failed payment, subscription cancellation, or reaching a certain date.
5.  **Additional Options:**
    
    -   Optionally, set up additional parameters such as sending a notification email to the contact upon access revocation or tagging the contact for future follow-up actions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032509897/original/Vn6Zf6Ejp43W-v8lEygpDpVBEjmZM_jzzg.png?1725882220)

  

## **Example**

  

**Scenario:** You want to automatically revoke access to the "Advanced Marketing Strategies" course when a user's contact tag changes to 'expired'.

**Workflow Setup:**

-   **Trigger:** Contact tag changed with a filter of tag=expired.
-   **Action:**Course Revoke Offer
    -   **Name:** "Revoke Access to Advanced Marketing Strategies"
    -   **Course:** "Advanced Marketing Strategies"
    -   **Revocation Condition:** Subscription Expiry
-   **Action:**Send email
    -   **Subject:** "Remove access to Advanced Marketing Strategies"
    -   **Template:** "Advanced Marketing Strategies"
    -   **From email and Name:** Location's email and Name by default

  

**Outcome:** Upon the a contact tag addition of "expired", the user's access to the "Advanced Marketing Strategies" course is automatically revoked, ensuring that only active subscribers can access the content.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032510100/original/GKe4-YNtAcomnYQlGmub-ILFPrOSQ4aZuQ.png?1725882358)