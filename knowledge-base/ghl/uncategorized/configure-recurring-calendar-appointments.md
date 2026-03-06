---
title: "Configure Recurring Calendar Appointments"
url: "https://help.gohighlevel.com/support/solutions/articles/48001230991-configure-recurring-calendar-appointments"
category: "Uncategorized"
---

# Configure Recurring Calendar Appointments

  

  

Recurring appointments are appointments or meetings that occur at regular intervals, such as every day, every week, or every month. Recurring appointments can be used in calendars to help save time and effort when scheduling regular meetings or appointments. Instead of creating a new appointment for each occurrence, a single recurring appointment can be set up to cover multiple occurrences. This can be especially useful for appointments that happen on a regular schedule, such as weekly meetings or monthly check-ins.

* * *

#### **Covered in this Article:**

#### [**How can we set up a Recurring Appointments Calendar?**](#How-can-we-set-up-a-Recurring-Appointments-Calendar?)

####   
[**FAQ**](#FAQ)

#### [Will the already existing workflow trigger steps fire for Recurring appointments?](#Will-the-already-existing-workflow-trigger-steps-fire-for-Recurring-appointments?)

#### [Can users bulk update Appointments?](#Can-users-bulk-update-Appointments?)

#### [Can the same meeting location be used for all recurring appointments?](#Can-the-same-meeting-location-be-used-for-all-recurring-appointments?)

#### [How do the recurring events get synced over to integrated calendars?](#How-do-the-recurring-events-get-synced-over-to-integrated-calendars?)

#### [How can payments be charged for Recurring appointments?](#How-can-payments-be-charged-for-Recurring-appointments?)

  

* * *

## **How to Set Up a Recurring Appointments Calendar?**

  

Click on **Settings**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283839127/original/t0i-OYnO597cpGNvWtrjoflwNDgjkyIMKg.png?1677420392)

  

  

Click on **Calendars**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283839879/original/e_vUEn7psmwTExeGk4qmlUzUNpke3Gbh6g.png?1677421316)

  

  

Click on **Create Calendar**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283839913/original/0C63_wizc1h6sKV7vcNfpoI4X2oRN7bVkA.png?1677421372)

  

Click on **Select** Under **Round Robin Booking**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283839965/original/0KrW7PCc9NKKe0FEPyLkcKoavUMItTAPNQ.png?1677421443)

**Please Note**

All calendar types (other than Service Calendars) than support recurring appointments. The only difference is that if you picked Round-robin, there must be a maximum of 1 user or team member on the calendar.

  

In the **Availability** Tab, Toggle on **Recurring Appointments**:  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283840055/original/nlSAxjv8OpAI2C8zrfoytnYIQappD4S7SQ.png?1677421542)

Once you toggle on the Recurring Appointments, you can see the recurring appointments settings, and you can select the settings based on your use case.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283840128/original/88X8wjNcPWLFIiAF-8gZUpdcYlTmN-28Yg.png?1677421681)

**Please note:**

We have a limitation on the "times to repeat" field. An event can be repeat for a maximum of 24 times.

You have three options in the **If slots are not available** dropdown:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283840460/original/AOfeyq6Z6N0P8PpxZtbKhK4zpZbZl_fm_Q.png?1677422054)

  

This basically means that if there is another appointment or event already booked for the intended slot, then the user has the following options:

  

  

**Continue Booking**

In the dropdown for **"If slots are not available,"** if you choose **Continue Booking,** you will get an additional dropdown asking you what to do in cases where double bookings happen for that case:  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283840273/original/DHilYjLU6R1SX388AQrbu1ACjhRMO5u3PQ.png?1677421858)  

Choosing Continue Booking means you are allowing the calendar to double-book the slot.

  

**Skip booking Unavailable slot.**

That simply means book ONLY the available slots and ignore the rest.

  

**Book Next Available Slot**

That simply means to book the reoccurrences irrespective of how far out in the future the calendar needs to scout for the available slots.

**Please Note**

We check only until the next 3 slots for availability, if unavailable we drop the booking.If available we continue and complete all reoccurrences. User should be careful when selecting the recurring booking option (book next vs skip booking vs continue booking).

  

Recurring appointments can only be booked for standard slots (for custom slots, we do not display a recurring booking option). Users will not be able to book recurring appointments from the opportunities page. The recurring calendars will be available in the drop-down to book but only for a single time slot.

* * *

## **FAQ**

### **Will the already existing workflow trigger steps fire for Recurring appointments?**

No, they won't. We have added some new filters for the Appointment Trigger steps. So all your configured triggers will need a new filter to be added for your Workflow Trigger Steps. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283840827/original/5LJVNP4M4V1PcJdw4bhHXsd1U5LSVroS8Q.png?1677422413)

We added a new Event Type Filter in the appointment trigger step, so now you can control the workflow triggers that can fire for the type of your appointments. You would choose Recurring as the Event type if you want the Workflow Trigger to only fire off for Recurring Appointments.

  

For all the existing Appointment Status triggers in your account, we have added a new Filter by default, and the Filter is Event Type: Normal.  It does not fire off for Recurring Appointments.

  

**Event Type: Normal**

So if you select this filter, the normal appointments (which aren't recurring) and all your existing non-recurring appointments would be considered normal. If you select this, then it would work the same as how it is working now. 

  

**Event Type: Recurring**

If you select this filter, then the trigger would fire only for the appointments that got booked in Calendars that had the recurring appointment settings turned On. 

  

**Event Type: Any**

If you select this filter, then the trigger would fire for any type of appointment. 

  

**Please Note:**

We are deprecating Customer Booked Appointment Trigger.So now, if you select the Modified By Filter: 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283841067/original/oc4eOeQBCx4TbF0am_aA-sClJBhUgf1_3g.png?1677422783)
**Customer:** It would work the same as the Customer Booked Appointment, so if this filter is added, then appointments that are booked by customer i.e if the appointment is booked from the widget, then only this would fire.

**User:** All the appointments that are booked inside the system or any other source other than the appointments that booked from widget would fire the appointment. 

**API:** Works only for appointments created via API.

  

  

### **Can users bulk update Appointments?**

Users cannot bulk update Recurring appointments (cancel or reschedule).

  

### **Can the same meeting location be used for all recurring appointments?**

If the meeting location is zoom or google meet, All recurring appointments will have different meeting URLs as the system generates a dynamic meeting URL for each meeting by default.

  

### **How do the recurring events get synced over to integrated calendars?**

If sync is turned on - events are synced as individual events with the third-party calendars.

  

### **How can payments be charged for Recurring appointments?**

Payments are currently unavailable for calendars with recurring turned on.