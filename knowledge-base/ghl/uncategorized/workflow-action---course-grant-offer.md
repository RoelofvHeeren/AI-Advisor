---
title: "Workflow Action - Course Grant Offer"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003378-workflow-action-course-grant-offer"
category: "Uncategorized"
---

# Workflow Action - Course Grant Offer

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

  

The **Course Grant Offer** action allows you to automate the process of granting access to specific courses for your contacts with or without a payment gateway. This action is particularly useful for managing educational content, onboarding clients, or providing exclusive training programs, ensuring that the right users gain access based on their actions or conditions within a workflow.

  

## Action Name

Course Grant Offer

  

## Action Description

The **Course Grant Offer** action is designed to streamline the process of providing course access to contacts. It automatically enrolls users in a designated course, removing the need for manual intervention. This can be triggered by specific events or conditions, such as contact created.

  

**Key Features:**

-   Automate course enrollment for contacts based on workflow triggers.
-   Customize course offerings based on user actions or predefined conditions.
-   Simplify the onboarding process by ensuring timely access to educational content.

  

## Action Details

##### Step-by-Step Guide

1.  **Choose the Action Type:**
    
    -   In your workflow, select "Course Grant Offer" from the list of available actions.
2.  **Name Your Action:**
    
    -   Enter a descriptive name for the action, such as "Grant Access to Beginner's Course."
3.  **Select the Offer:**
    
    -   Choose the specific offer that you want to grant access to. This offer should could contain a discount or a free access to a course that is created. This could be a behind a payment gateway as well.
4.  **Configure Access Settings:**
    
    -   Customize the course under Memberships>products where the course can be created along with the details, theme, offers etc.
    -   Create an offer either behind a paywall or not to allow access to the course.
5.  **Set Triggers and Conditions:**
    
    -   Determine the conditions that will trigger this action. This could include actions like completing a registration form, achieving a specific milestone, or creating a new contact.
6.  **Additional Options:**
    
    -   Optionally, set up additional parameters such as sending a notification email to the contact upon enrollment with the details of the course and a CTA button to the course. 

#####   

## **Example**

  

**Scenario:** You want to automatically enroll a user in an "Advanced Marketing Strategies" course after a new contact is created. You also want to send an email to the contact with the course details.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497378/original/fr1fIP9kTZ8fAkKv5wL7hvpUISQg1ZxxOw.png?1725875621)  

  

**Workflow Setup:**

-   **Trigger:** Contact created
-   **Action:**Course Grant Offer
    -   **Name:** "Course Grant Offer"
    -   **Offer:** "Monthly subscription![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497068/original/29bqofi9_iCCNmSR7FNZ8_UQYudxVaVwFQ.png?1725875459)

**Note** : This offer will have to be created seperately under Memberships>offers.

-   **Action:**Send email
    -   **Subject:** "Elevate your Brand with strategic marketing"
    -   **Template:** "Advanced Marketing Strategies"
    -   **From email and Name:** Location's email and Name by default

  

**Note** : This email template will have to be created separately in the email builder.

  

**Outcome:** When a new contact is created, a new course offer is created for the contact and same is sent over email.

  

* * *

## **Frequently Asked Questions**

  

  

**Q: What happens if access is granted again to a contact who already has it?**

If a contact is granted access to the same course offer more than once, HighLevel won’t duplicate the enrollment or reset their progress. The contact will retain their existing access without any disruption. However, any follow-up actions in the workflow—like sending an email—will still run unless conditions are added to prevent that.

  

**Q: Can I grant access to a course without a payment gateway?**

Yes, you can grant access to a course without requiring payment by creating an offer with no paywall under **Memberships > Offers**. This is useful for free training, onboarding, or internal educational content.

  

**Q: Do I need to create the offer before using the Course Grant Offer action?**

Yes, the offer must be created in advance under **Memberships > Offers**. The Course Grant Offer action references existing offers—you cannot create a new offer directly from the workflow.

  

**Q: Will contacts receive login details automatically after access is granted?**

Not automatically. If you want contacts to receive login instructions or course access links, you’ll need to add an email step in the workflow after the Course Grant Offer action using a prebuilt email template.