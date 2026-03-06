---
title: "Appointment scenarios in Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow"
category: "Uncategorized"
---

# Appointment scenarios in Workflow

There can be multiple scenarios when a customer is booking an appointment. This document outlines the scenarios, how the workflow will behave in each case and what will be the contact's journey.

* * *

**TABLE OF CONTENTS**

-   [Scenario 1 - Re-entry of a contact in workflows](#Scenario-1---Re-entry-of-a-contact-in-workflows)
-   [Scenario 2 - Appointment cancellation](#Scenario-2---Appointment-cancellation)
-   [Scenario 3 - Reschedule to a later date](#Scenario-3---Reschedule-to-a-later-date)
-   [Scenario 4 - Recurring appointments](#Scenario-4---Recurring-appointments)

* * *

### **Scenario 1 - Re-entry of a contact when appointment is booked**

  

A customer can book multiple appointments at once. For Appointment trigger, a contact can enter the workflow multiple times even if the contact is already present in the workflow.

A contact can book multiple appointments so the contact should be able to enter the workflow multiple times irrespective of Allow Re-entry or it being already present in the workflow.

  

For the remaining scenarios we will be using the below mentioned example

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028142590/original/NzSiC9Gn4xhkokwGJlPz1TcTvvoZXY2ziA.png?1719296925)

  

* * *

### **Scenario 2 - Appointment cancellation**

  

**Example:**

-   **Current Date:** June 20
-   **Appointment Date:** June 25
-   **Workflow Step:** The contact is at the "Wait for 5 days" step.

  

**Change:** The customer cancels the appointment.

  

**When the appointment is treated as "Cancelled"** \- If the appointment status is changed from New/Confirmed/Show to Cancel/Invalid/No Show then the appointment is treated as "Cancelled"

  

**Result:** The customer will be pulled out of the workflow, and no further actions will occur.

  

**Why -** As the contact has cancelled the appointment no further actions should be performed.

* * *

### **Scenario 3 - Reschedule to a later date**

  

**Example:**

-   **Current Date:** June 20
-   **Original Appointment Date:** June 25
-   **New Appointment Date:** June 30
-   **Workflow Step:** The contact is at the "Wait for 5 days" step.

  

**Change:** The customer reschedules the appointment to June 30.

  

**When the appointment is treated as "Rescheduled"** \- When there are changes in the "Start time" and "End time" of an appointment then it is treated as "Rescheduled"

  

**Result:** The contact will be pulled out of the workflow. If the workflow has a trigger set to fire on _Appointment Status = Rescheduled_, and the rescheduled appointment matches all trigger filter conditions (e.g., correct calendar, assigned user), the contact will re-enter the workflow — _but only if the “Allow Re-entry” setting is enabled in the workflow’s settings._

  

**Why** - When an appointment is rescheduled (i.e., start and/or end time changes), it updates the appointment status. If this updated status matches the criteria of a workflow trigger with “Allow Re-entry” enabled, the contact can re-enter and continue receiving communication relevant to the new appointment time. If the conditions aren't met, the contact will not re-enter the workflow.

* * *

### **Scenario 4 - Recurring appointments**

  

**Explanation:** Recurring appointments will not trigger entry through the "Customer Booked Appointment" trigger.