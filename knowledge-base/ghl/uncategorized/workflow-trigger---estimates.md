---
title: "Workflow Trigger - Estimates"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003704-workflow-trigger-estimates"
category: "Uncategorized"
---

# Workflow Trigger - Estimates

The “Estimates” trigger is a powerful tool for automating actions based on specific events related to estimates, such as when an estimate is sent, accepted, or declined. This article will guide you through understanding the Estimates trigger, its key benefits, how to configure it, and various use cases that can help streamline your workflow processes. By the end, you’ll be equipped to set up automated workflows using the Estimates trigger and enhance customer engagement.

* * *

  

* * *

**TABLE OF CONTENTS**

-   [What is the Estimates Trigger?](#What-is-the-Estimates-Trigger?)
-   [Key Benefits of the Estimates Trigger](#Key-Benefits-of-the-Estimates-Trigger)
-   [Understanding Filters and Operators in the Estimates Trigger](#Understanding-Filters-and-Operators-in-the-Estimates-Trigger)
    -   [Estimates Status Filter](#Estimates-Status-Filter)
    -   [Estimates Value Filter](#Estimates-Value-Filter)
    -   [Estimates Template Filter](#Estimates-Template-Filter)
-   [Configuring the Estimates Trigger](#Configuring-the-Estimates-Trigger)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Estimates Trigger?**

  

The Estimates trigger is designed to activate workflows when specific actions are taken on an estimate. Whether it’s being sent to a customer, accepted for a job, or declined after review, this trigger ensures timely follow-ups and appropriate actions are taken automatically. Businesses can use it to track estimate statuses, manage opportunities, and maintain clear communication with their customers.

* * *

## **Key Benefits of the Estimates Trigger**

  

-   **Automated Follow-Ups:** No need for manual reminders—send follow-up emails, thank-you messages, or next-step notifications automatically.

-   **Improved Customer Experience:** Respond promptly when an estimate is accepted, keeping your customers informed and engaged.

-   **Opportunity Management:** Turn accepted estimates into new opportunities automatically and assign them to the right team members for immediate action.

-   **Seamless Communication:** Notify internal teams about changes in estimate status, ensuring everyone stays on the same page.

* * *

## **Filters and Operators in the Estimates Trigger**

  

When setting up the Estimates Trigger, you can refine its activation by applying filters. Filters allow you to define specific conditions under which the trigger should execute, making automation more precise and effective. To refine filters, you will use **Operators** (a logical conditions) that determine how the filter evaluates estimate-related data.

  

The 3 filters options that are available when building an Estimates Workflow are:

1.  **Estimate Status:** This filters the trigger sldfjslkdflskdjflksdjflsf
2.  **Estimate Value:** sdkhfskdjfkjsdfkjshdfsdf
3.  **Estimate Template:** kshdkfjhsdkjfsdlkjfsdfsdf

  

Below is a breakdown of how different filters and operators function within the Estimates Trigger:

  

#### **Estimate Statuses**

| **Status** | **Description** |
| --- | --- |
| **Accepted** | The customer has approved the estimate, agreeing to the proposed terms and pricing. |
| **Declined** | The customer has reviewed the estimate but chose not to proceed with it. |
| **Invoiced** | The estimate has been converted into an invoice, meaning the customer has agreed to proceed, and payment is expected or has been processed. |
| **Sent** | The estimate has been created and sent to the customer but has not yet been opened, accepted, or declined. |
| **Viewed** | The customer has opened and viewed the estimate but has not yet accepted or declined it. |

  

  

#### **Status Filter Operators**

| **Operator** | **Description** |
| --- | --- |
| **Is** | Triggers only when the estimate status matches a specific value (e.g., “Accepted”). |
| **Is Empty** | Triggers when the estimate has no status assigned (useful for catching unprocessed estimates). |
| **Is Not** | Triggers when the estimate status does not match a specified value (e.g., “Is Not Declined” would trigger for any status except “Declined”). |
| **Is Not Empty** | Triggers only when the estimate has any status assigned (helps exclude incomplete or unprocessed estimates). |

###   

**Example:** If you want to trigger an action only when an estimate is declined, use **Estimate Status → Is → Declined.**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857388/original/Elsb6sKbJ8-F4OGTYGQvGfsmMCD-jOh6xQ.png?1738490635)

  

  

### **Filter - Estimate Value**

  

This filter refines the trigger based on the monetary value of an estimate. For example, if you want to send an alert for estimates over $1499, use the following filter values: **_Estimate Value > Greater Than > 1499._**

  

| **Operator** | **Description** |
| --- | --- |
| **Equals To** | Activates when the estimate value is exactly the specified amount. |
| **Greater Than** | Triggers when the estimate value exceeds a certain threshold. |
| **Greater Than or Equals To** | Triggers when the estimate value is equal to or higher than a set amount. |
| **Is Empty** | Activates if the estimate has no value assigned (useful for identifying incomplete estimates). |
| **Is Not Empty** | Activates when an estimate has any value assigned. |
| **Is Not Equal To** | Triggers when the estimate value does not match a specific amount. |
| **Less Than** | Triggers if the estimate value is lower than the defined amount. |
| **Less Than or Equal To** | Triggers if the estimate value is equal to or lower than a given amount. |

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857434/original/gcG-Bjk3naX5RuSifryTTLRZpZeboecmuA.png?1738490834)

  

  

### **Estimates Template Filter**

  

This filter ensures the trigger activates only for specific estimate templates. Operators available:

  

-   **Is:** Activates only if the estimate was created from a specific template.
-   **Is Empty:** Triggers when no template was used to create the estimate (useful for identifying manually created estimates).
-   **Is Not:** Triggers when the estimate was not created from a particular template.
-   **Is Not Empty:** Triggers only if an estimate was created using any template.

  

**Example:** If you want an automated email to be sent only for estimates based on the “Premium Package” template, use **Estimate Template → Is → Premium Package.**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857520/original/H_-YVWd4r_lcrnwU2_5tMp87V-fZFsCXUw.png?1738491100)

* * *

## **Configuring the Estimates Trigger**

  

Let's understand the process of setting up the estimates trigger in HighLevel:

  

### **Go to Automation**

  

Navigate to the **Automation** section and select **\+ Create Workflow** option. Either choose an existing workflow where you wish to use the Estimates trigger or simply create a new workflow from scratch.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856446/original/TB_vMRVJQMxaQ1GUT3yDHIJJvkzxQGsIlA.jpeg?1738487449)

  

  

### **Adding Estimates Trigger**

  

Select the option to add a new trigger, then choose **Estimates** from the list of available Workflow Triggers.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856456/original/4jIEmwnL7N_m4OE6qZS6AJ8kz6ezcWp2qA.png?1738487495)

###   

  

### **Naming your Trigger**

Update the Trigger Name to something descriptive, such as “Estimate Follow-Up Workflow,” so it reflects the trigger’s purpose clearly. We have named the trigger as "Estimate Declined."

  

 ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856471/original/BC8ynz3J7YqB1SZVqGjwtNhmUfK8Law92w.png?1738487534)

  

### **Setting Up Filters**

  

Once you’ve added the trigger, you can refine it using filters to ensure it only activates for specific criteria.

Click **\+ Add Filters** and choose one of the standard fields.

After selecting the field, choose an appropriate operator.  
Once you’ve configured the trigger and its filters, click **Save**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040810187/original/K1lyhNifbJOZaTRJ02EwsDf7FkH-jDWFLQ.gif?1738334712)

  

  

### **Estimates Trigger in Action** 

  

After you have configured the trigger, you will need to go ahead and set up the appropriate workflow action as per your requirements. A fully configured workflow trigger coupled with a workflow action will look like the example shown in the screenshot below:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040810971/original/rm2JqxZjc6o7P4cEGlrMGaDIQ-O6hroryA.png?1738335186)

* * *

  

## **Frequently Asked Questions**

  

**Q. How can I set up a workflow to trigger when an estimate is viewed by a customer?**

You can use the “Estimate Status” filter and set it to “Viewed” to trigger the workflow when a customer opens and views the estimate.

  

  

**Q. Can I trigger a workflow only for estimates with values above a certain amount?**

Yes, use the “Estimate Value” filter and set it to “Greater Than” with the desired amount. This ensures the workflow only activates for high-value estimates.

  

  

**Q. Is it possible to combine multiple filters in a single trigger?**

Absolutely! You can add multiple filters, such as combining “Estimate Status” and “Estimate Value,” to create more specific triggers tailored to your workflow needs.

  

  

**Q. How do I notify different teams based on the status of the estimate?**

You can set up separate workflows for each estimate status (e.g., Sent, Accepted, Declined) and add internal notifications as actions to inform the relevant teams.

  

  

**Q. Can I create opportunities automatically for accepted estimates?**

Yes, by adding the “Create Opportunity” action to the workflow, you can ensure that accepted estimates automatically generate new opportunities in your CRM.