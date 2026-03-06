---
title: "If/Else Workflow Action - Appointment Filter Options"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options"
category: "Uncategorized"
---

# If/Else Workflow Action - Appointment Filter Options

The Appointment option in If/Else conditions allows users to create more dynamic and customized workflow branches based on appointment-related events. This article will guide you through understanding this option, when to use it, its key benefits, and how to configure it.

* * *

**TABLE OF CONTENTS**

-   [What is the Appointment Option in If/Else Action?](#What-is-the-Appointment-Option-in-If/Else-Action?)
-   [Key Benefits of the Appointment Option in IF/ELSE Action](#Key-Benefits-of-the-Appointment-Option-in-IF/ELSE-Action)
-   [Configuring the Appointment Option in If/Else Action](#Configuring-the-Appointment-Option-in-If/Else-Action)
    -   [Select the Appointment Option](#Select-the-Appointment-Option)
    -   [Rescheduled Filter](#Rescheduled-Filter)
    -   [Start Date Filter](#Start-Date-Filter)
    -   [End Date Filter](#End-Date-Filter)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

  

* * *

# **What are Appointment Filter Options in If/Else Workflow Actions?**

  

The Appointment option in If/Else conditions is a filtering mechanism that allows users to customize workflow automation based on appointment-related events. It is part of the If/Else action, which enables conditional logic in workflows. Within this action, users can define conditions based on appointments, such as whether an appointment was rescheduled, its start date, or its end date.

  

This helps in automating follow-ups, segmenting customer interactions, and refining workflow actions based on appointment data.

  

The Appointment option inside If/Else action provides users with three filtering conditions:

  

-   **Rescheduled:** Determines whether the appointment was rescheduled for that execution.
-   **Start Date:** Filters actions based on the start date of the appointment.
-   **End Date:** Filters actions based on the end date of the appointment.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489099/original/Fnssi-jaN7eypapyCsjxAEcqJalojvkbkQ.gif?1740915955)

  

  

**Note:**  
  
The Appointment option is **only** available when your workflow is triggered by an appointment-related event. Specifically, it appears when the workflow uses one of the following triggers:   
  
**Customer Booked Appointment →** When a new appointment is scheduled.   
**Appointment Status →** When an appointment’s status changes (e.g. No show, Cancelled).

* * *

## **Key Benefits of the Appointment Option in If/Else Action**

  

-   **More Precise Automation:** Helps in creating workflow branches that respond accurately to changes in appointment status.

  

-   **Efficient Follow-ups:** Enables automated emails, SMS, or task assignments based on rescheduled appointments.

  

-   **Better Lead Management:** Businesses can filter users who scheduled but didn’t attend, allowing targeted re-engagement.

  

-   **Time-Sensitive Promotions:** Allows workflows to act based on appointment start or end dates, useful for limited-time campaigns.

* * *

## **Configuring the Appointment Option in If/Else Action**

  

### **Access the Workflow Builder**

  

Navigate to **Automation** and either create a new workflow or select an existing one.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042474955/original/xAI6p0HzgQ8wHZCtD7tPxdZa5Kje_iKHYg.png?1740841701)

  

### **Set Up the Trigger**

  

Choose either Customer Booked Appointment or Appointment Status as the workflow trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042475017/original/PDmXrL_4W6e21-3gnq17xIgh57-EtfQ08g.png?1740841959)

  

  

### **Add an If/Else Condition**

  

Click the **”+”** button to add an action, then select **If/Else** Condition.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042475485/original/LLAGvXVOvY9NCfzn_IbQejP7q9Hvh9-oQQ.png?1740843050)

  

  

### **Naming If/Else Condition (Optional but Recommended)**

  

When the If/Else condition panel opens, the first field you see is **“Action Name”** at the top. By default, this is set to “Condition”, but renaming it makes the workflow easier to understand, especially when dealing with multiple conditions.

  

Since the If/Else action works based on conditional logic, it’s best to name it in the form of a question that reflects what the condition is checking. This makes it easier to read and manage the workflow at a glance.

  

  

**Example Condition Names for different Appointment Filters:**

###   

<table data-identifyelement="627" style="width: 100%;"><tbody data-identifyelement="628"><tr data-identifyelement="629"><td data-identifyelement="630" dir="ltr" style="width: 50%; text-align: center; background-color: rgb(239, 239, 239);"><strong data-identifyelement="631">Filter&nbsp;</strong></td><td data-identifyelement="632" dir="ltr" style="width: 50%; text-align: center; background-color: rgb(239, 239, 239);"><strong data-identifyelement="633" dir="ltr">Example Condition Name</strong></td></tr><tr data-identifyelement="634"><td data-identifyelement="635" dir="ltr" style="width: 50%; text-align: center;">Rescheduled</td><td data-identifyelement="636" style="width: 50%; text-align: center;"><span data-identifyelement="637" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;“Did the Customer Reschedule?”</span></td></tr><tr data-identifyelement="638"><td data-identifyelement="639" dir="ltr" style="width: 50%; text-align: center;">Start Date</td><td data-identifyelement="640" style="width: 50%; text-align: center;"><span data-identifyelement="641" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;“Is the Appointment After Two Weeks From The Current Date ?”</span></td></tr><tr data-identifyelement="642"><td data-identifyelement="643" dir="ltr" style="width: 50%; text-align: center;">End Date</td><td data-identifyelement="644" dir="ltr" style="width: 50%; text-align: center;">"Has the Appointment Ended 4 Days Before the Current Date?"</td></tr></tbody></table>

###   

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042476073/original/0LMkixamQVcqIpQuO7Ozd6e8v0D6yLx6gg.png?1740845256)

  

  

### **Scenario Recipe**

  

In the Scenario Recipe dropdown, you will find pre-built condition templates that help automate common filtering scenarios. Since we want complete flexibility in defining conditions based on appointment-related events, we will go with **“Build Your Own”** option.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489060/original/EDymppXmFrBNfWrSeFAbXSWoAoAdnyxpFA.png?1740915731)

  

  

### **Naming the If/Else Branches**

  

When setting up an If/Else condition, each branch represents a possible outcome of the condition being evaluated. By default, these branches may not have meaningful names, but renaming them improves clarity and makes it easier to understand the workflow structure.

  

As shown in the screenshot, the branches in this example have been renamed to:

  

1.  **“Rescheduled”:** Corresponding to the condition where the appointment was rescheduled (True).  
      
    
2.  **“Not Rescheduled”:** Corresponding to the condition where the appointment was not rescheduled (False).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489063/original/NbBlcEb9o9FhqiOPy5FjEXYNvXeDiDjlig.png?1740915759)

  

  

### **Select the Appointment Option**

  

As shown in the GIF image below, you can select the **Appointment** option to reveal the three filtering options :

  

-   Rescheduled (True/False)
-   Start Date (Choose a specific date condition)
-   End Date (Choose a specific date condition)

  

After configuring the Rescheduled, Start Date, or End Date filter, Click **”+ Add Branch”** to create multiple conditions.

Ensure that each branch is clearly named (e.g., “Rescheduled,” “Not Rescheduled,” “Upcoming Appointments,” “Past Appointments”).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042500698/original/OS4JNZ9054IB0wg_EDKX9kKBJwwPG7sL6g.gif?1740966633)

  

  

### **Rescheduled Filter**

The Rescheduled filter determines whether an appointment has been rescheduled or not. Once selected, an operator dropdown appears with two options:

-   **True:** Selecting this option allows you to create workflow actions specifically for customers who have changed their appointment time.  
      
    
-   **False:** If this option is selected, the workflow can branch into actions that handle customers who have not made any changes to their original appointment.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042502419/original/Zp7PMC-EvET3oIY98liHPFu8b26Q0snafg.gif?1740970819)

  

  

### **Start Date Filter**

  

The Start Date filter allows you to refine workflows based on when an appointment is scheduled to begin. Once you select a Start Date condition, the workflow will evaluate each appointment based on the selected parameters and trigger corresponding actions. 

  

When you select this filter, two dropdown menus appear to define the condition:

  

-   **First Dropdown: Operators**
    -   **Is:** Matches an exact date. The workflow will trigger only if the appointment starts on the specified date.
    -   **Is Not:** Excludes a specific date. The workflow will trigger for all appointments except those that start on the selected date.
    -   **Is Empty:** Applies if the appointment has no start date set, which can be useful for identifying incomplete bookings.
    -   **Is Not Empty:** Applies if the appointment has a start date, ensuring the condition only applies to scheduled appointments.  
          
        
-   **Second Dropdown: Time-Based Operators**
    -   **Today:** Filters appointments scheduled for today.
    -   **Tomorrow:** Filters appointments set for the following day.
    -   **Yesterday:** Filters past appointments that took place the previous day.
    -   **After:** Filters appointments that start after a specific date.
    -   **Before:** Filters appointments that start before a specific date.
    -   **Date:** Allows users to manually select a specific date for filtering.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042502458/original/kgpUbPq-X8BVca8-d4QZ_SOfwxByOqZ5iA.png?1740970971)

  

  

### **End Date Filter**

  

The End Date filter works the same way as the Start Date filter but applies to when the appointment ends.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042493257/original/uzCZsI9Lu2U5rxrL4Eis5gV6H2xAGyUaDA.png?1740929932)

* * *

## **Frequently Asked Questions**

  

**Q. Why don’t I see the Appointment option inside If/Else conditions?**

The Appointment option appears only if your workflow uses an appointment-related trigger (Customer Booked Appointment or Appointment Status). If your workflow doesn’t have one of these triggers, the option won’t be available.

  

**Q. Can I use multiple appointment filters within the same If/Else condition?**

No, you can only select one appointment-based filter per If/Else condition. However, you can create multiple If/Else branches within a workflow to apply different filters separately.

  

**Q. How can I use the Start Date and End Date filters effectively?**

The Start Date filter can be used to trigger actions based on when an appointment begins, such as sending a pre-meeting reminder. The End Date filter can be used for post-appointment follow-ups or handling time-sensitive promotions.

  

**Q. What happens if a customer reschedules multiple times?**

The Appointment Rescheduled condition evaluates the most recent execution. If a customer reschedules multiple times, the condition will trigger based on the latest reschedule status.

  

**Q. Can I combine the Appointment option with other IF/ELSE filters?**

Yes! You can add other If/Else conditions (such as Contact Details or Date Time) alongside the Appointment option to create highly customized workflows.