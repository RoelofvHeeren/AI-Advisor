---
title: "Cancellation & Reschedule Policy (Booking Widget)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002738-cancellation-reschedule-policy-booking-widget-"
category: "Uncategorized"
---

# Cancellation & Reschedule Policy (Booking Widget)

  

  

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [How to use?](#How-to-use?)
-   [How do bookers receive the cancellation & reschedule link?](#How-do-bookers-receive-the-cancellation-&-reschedule-link?)

* * *

## **Overview**

  

The Cancellation & Reschedule Policy setting allows you to define the time frame during which bookers can access the cancellation or reschedule link on the booking widget.

  

This feature helps you set a window after which bookers cannot access the cancellation or reschedule link to make changes to their appointments. Instead, they will need to contact the business owner for any modifications. This primarily helps businesses avoid last-minute changes to their appointments.

* * *

## **How to use?**

  

-   Navigate to Calendar Settings and select the desired calendar.  
      
    
-   Head to the Notifications and Additional Options section.  
      
    
-   Under Cancellation and Reschedule Policy, turn on "Allow Cancellation of Meeting" and "Allow Rescheduling of Meeting".

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230340/original/MGArGrsEbh_tCpZA3xJKHLl8MT4AbFkWww.png?1726823029)

  
  

-   Specify the time range after which the links should be disabled. (Note: Keeping the value blank means the link will never expire and the booker can access it anytime.)  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230968/original/erSvM9kLoVd-ymDmepj8Q0ymFUa9TTZOvg.png?1726823494)

  

  

**When this setting is enabled:**

  

A cancellation and a rescheduling link will be added to the additional notes section and included in the calendar invite. These links will expire as configured, preventing the booker from cancelling or rescheduling the meeting.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028626656/original/zXnX_zWHfeFSujbXsJo_pLkf7ip-kwMigQ.png?1719999815)

* * *

## **How do bookers receive the cancellation & reschedule link?**

  

When you toggle on "Allow Cancellation" and "Allow Reschedule", these links are added to the additional notes section. The content in this section is then included in the calendar invite in the notes section. Bookers can use those links to cancel or reschedule their appointments accordingly.  
  

Alternatively, you can use the custom values {{appointment.reschedule\_link}} and {{appointment.cancellation\_link}} in your workflows to send out these links to the bookers. These values only work if your workflow is triggered by an appointment-based event, such as Appointment Status and Customer Booked Appointment. Workflows without an appointment trigger (like general form submissions or stage changes) will not pass appointment context, and the values will render blank.