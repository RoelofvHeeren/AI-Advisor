---
title: "Workflow Trigger - Customer Booked Appointment"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002675-workflow-trigger-customer-booked-appointment"
category: "Uncategorized"
---

# Workflow Trigger - Customer Booked Appointment

This article provides an in-depth guide on using the **"Customer Booked Appointment"** workflow trigger, a powerful tool for automating actions when a customer books an appointment independently. By the end of this article, you’ll understand how this trigger works, its key benefits, the setup process, and real-world use cases.

* * *

**TABLE OF CONTENTS**

-   [What is Customer Booked Appointment Workflow Trigger?](#What-is-Customer-Booked-Appointment-Workflow-Trigger?)
-   [Key Benefits of Customer Booked Appointment Trigger](#Key-Benefits-of-Customer-Booked-Appointment-Trigger)
-   [Configuring the Customer Booked Appointment Trigger](#Configuring-the-Customer-Booked-Appointment-Trigger)
    -   [Name Your Trigger](#Name-Your-Trigger)
    -   [Set Up Filters](#Set-Up-Filters)
    -   [Has Tag](#Has-Tag)
    -   [In Calendar](#In-Calendar)
    -   [In Calendar Group](#In-Calendar-Group)
-   [Use Cases](#Use-Cases)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Customer Booked Appointment Workflow Trigger?**

  

The Customer Booked Appointment workflow trigger activates whenever a customer books an appointment using a booking link or online scheduling system without intervention from your team. This trigger is essential for businesses that want to automate follow-up actions, reminders, and notifications based on scheduled appointments. It works only for regular appointments and does not support recurring appointments.

* * *

## **Key Benefits of Customer Booked Appointment Trigger  
**

  
Automating appointment-based workflows can significantly improve operational efficiency and enhance the customer experience. Here are some key benefits:  
  

-   **Automated Reminders:** Reduce no-show rates by sending timely appointment reminders via email or SMS.  
      
    
-   **Improved Customer Experience:** Keep customers informed and engaged with automated confirmation messages and follow-ups.  
      
    
-   **Efficient Team Notifications:** Ensure that the relevant team members are automatically notified whenever an appointment is booked.  
      
    
-   **Flexible Customization:** Use filters to trigger workflows for specific calendars, calendar groups, or customers with particular tags.  
      
    
-   **Better Resource Management:** By automating reminders and follow-ups, your team can focus on delivering services rather than manually managing schedules.

* * *

## **Configuring the Customer Booked Appointment Trigger  
**

  
Follow these steps to set up the Customer Booked Appointment trigger in your workflow:  
  

### **Access Workflow Builder**

  

Go to the **"Automation"** section. Create a new workflow from scratch or select the existing workflow where you want to use the "Customer Booked Appointment" trigger.

  

  

### **Add a New Trigger**

  

Click **“Add New Trigger”** and type in **"Customer Booked Appointment."** Select it from the list.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039511639/original/QEwrxU5nNDDAWa5ooiHjxx9uGsDQpXDLhg.png?1736393761)

  

### **Name Your Trigger**

  

Enter a descriptive name that helps you identify the trigger, such as “New Appointment Booking Trigger.”

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039511684/original/kO0JcQKPX5fY6yXgpegvCOJQpksW5snexA.png?1736393890)

  

### **Set Up Filters**

  

You can refine the trigger using the following filters:  
  

-   **Has Tag :** Select this filter if you want the trigger to activate only when a customer with a specific tag books an appointment.  
      
    
-   **In Calendar:** Use this filter to target specific calendars. The workflow will trigger only when an appointment is booked in the selected calendar.  
      
    
-   **In Calendar Group:** Choose this filter to target calendar groups. The workflow will trigger when an appointment is booked in any calendar within the selected group.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039511687/original/n4_hvmC9gRzuiDr8BmhogC3uwBodFFTN8A.png?1736393909)

* * *

### **Save the Trigger**

  

Once the filters are set, click the "**S****ave"** button. Ensure that you save the entire workflow by clicking the blue save button in the top-right corner. 

* * *

## **Use Cases**

  

Lets look at some examples where you can use this trigger:

  

### **Use Case #1 Appointment Reminder**

  

**Scenario:** A dental clinic wants to send automated reminders to patients 24 hours before their scheduled appointment to reduce no-shows.

  
**Outcome:** The workflow sends an email and SMS reminder to the patient 24 hours before the appointment, improving attendance rates.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039511748/original/9Kilbs6sq3qCI1HuzyoO18UEqIcNUHQB-A.png?1736394204)

* * *

### **Use case #2 Follow-Up After Appointment Booking**

  

**Scenario:** A real estate agency wants to send follow-up emails to clients who book property viewings to confirm the details and provide necessary instructions.

  

**Outcome:** The workflow sends a confirmation email with the appointment details, directions to the property, and a checklist of required documents.

* * *

### **Use Case #3 Internal Notification for High-Priority Clients**

  

**Scenario:** A financial advisory firm wants to notify senior advisors whenever a VIP client books an appointment.

  
**Outcome:** The workflow sends an internal email notification to the senior advisor, ensuring they are prepared for the upcoming appointment.

* * *

### **Use Case #4 Group Appointment Management**

  

**Scenario:** A fitness center wants to manage group training sessions by automating notifications whenever a customer books a session in a group calendar.

  

**Outcome:** The workflow sends an email confirmation to the customer and an internal notification to the assigned trainer.

* * *

## **Frequently Asked Questions  
**

  

**Q. Can this trigger be used for recurring appointments?**

No, the Customer Booked Appointment trigger only works for normal (one-time) appointments. Recurring appointments are not supported.  
  
  

**Q. How can I trigger different workflows for different types of appointments?**

You can use filters such as **“In Calendar”** or **“In Calendar Group”** to target specific appointment types and set up separate workflows for each.  
  
  

**Q. What happens if a team member manually books the appointment on behalf of the customer?**

This trigger only activates when the customer independently books an appointment through a booking link. Manually booked appointments will not trigger the workflow.  
  
  

**Q. Can I send reminders at multiple intervals, like 48 hours and 24 hours before the appointment?**

Yes, you can add multiple reminder actions within the same workflow and set different wait times for each (e.g., wait for 48 hours, then send the first reminder; wait for another 24 hours, then send the second reminder).  
  
  

**Q. How can I track appointments booked by high-priority clients?**

You can use the **“Has Tag”** filter to create a workflow that triggers only when clients with a specific tag (e.g., “VIP Client”) book an appointment. This way, you can ensure timely follow-ups and special handling for important clients.