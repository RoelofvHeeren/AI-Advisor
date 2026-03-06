---
title: "Show seats per slot for Class booking on the booking widget"
url: "https://help.gohighlevel.com/support/solutions/articles/155000000956-show-seats-per-slot-for-class-booking-on-the-booking-widget"
category: "Uncategorized"
---

# Show seats per slot for Class booking on the booking widget

The “Show seats per slot” setting allows you to display the total remaining seat availability for each time slot on Class Booking calendars. With the updated slot capacity logic, availability now reflects true remaining capacity even when appointments overlap multiple slots.

* * *

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [How to Enable “Show Seats Per Slot”](#How-to-Enable-%E2%80%9CShow-Seats-Per-Slot%E2%80%9D)
-   [This toggle enables seat display on the public booking widget.](#This-toggle-enables-seat-display-on-the-public-booking-widget.)[](#How-Seat-Availability-Is-Calculated-\(Updated-Logic\))
-   [How Seat Availability Is Calculated (Updated Logic)](#How-Seat-Availability-Is-Calculated-\(Updated-Logic\))[](#How-Seats-Appear-on-the-Booking-Widget)
-   [How Seats Appear on the Booking Widget](#How-Seats-Appear-on-the-Booking-Widget)[](#Important-Information)
-   [Important Information](#Important-Information)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

## **Overview**

  

Class Booking calendars allow multiple attendees to book the same time slot. The **Show seats per slot** option lets you display how many seats remain available for each time slot directly on the booking widget.

  

This provides:  
  

-   Clear visibility of remaining capacity  
      
    
-   Better booking transparency for customers  
      
    
-   Improved scheduling efficiency for high-capacity events
    

* * *

## **How to Enable “Show Seats Per Slot”**

  

To enable seat visibility on your booking widget:  
  

1.  Open your Class Booking calendar.  
      
    
2.  Click **Edit**.  
      
    
3.  Navigate to **Customizations**.  
      
    
4.  Under **Calendar Widget Style**, toggle **Show seats per slot**.  
      
    
5.  Click **Save**.  
      
    

### **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064723882/original/6EbYHBwQ9dB0zVnk3t7ABMt4XwSTaUJBGA.png?1770838784)**  
This toggle enables seat display on the public booking widget.

* * *

## **How Seat Availability Is Calculated (Updated Logic)**

  

Seat availability is determined by the **Seats per class** value configured in your calendar settings.  
  

With the updated scheduling logic:  
  

-   Each confirmed appointment reduces seat availability by 1.  
      
    
-   If an appointment overlaps multiple slots, only 1 seat is deducted from each affected slot.  
      
    
-   A slot is blocked only when its total seat capacity is fully reached.  
      
    
-   Overlapping appointments no longer fully block all affected slots prematurely.
    

  

This ensures more accurate availability and better utilization of high-capacity calendars.

* * *

## **How Seats Appear on the Booking Widget**

  

When enabled, the total remaining seats per time slot are displayed directly on the booking widget.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064723901/original/qzsAhmvJsnn32x8qma5F8_AyCB1Vc8h5Ww.png?1770838825)  
  

Customers can view remaining seats before selecting a time slot.

* * *

## **Important Information**  
  

-   This feature is available only for **Class Booking calendars**.  
      
    
-   It requires the **Seats per class** setting to be greater than 1.  
      
    
-   It works with Neo widgets.  
      
    
-   Updated capacity logic applies across:  
      
    
    -   Public booking widget  
          
        
    -   In-app appointment modal  
          
        
    -   Personal calendars  
          
        
    -   Round Robin calendars  
          
        
    -   Event calendars
        

  

Slots remain available until their defined capacity limit is reached.

* * *

## **Frequently Asked Questions**

  

**Q: What does “Show seats per slot” do?**

It displays the remaining seat availability for each time slot on Class Booking calendars.

  

**Q: How is seat availability calculated?**

Each confirmed appointment reduces the slot’s capacity by 1. A slot is blocked only when its defined capacity limit is reached.

  

**Q: Do overlapping appointments block the entire slot?**

No. Overlapping appointments reduce capacity by 1 per affected slot instead of blocking the slot completely.

  

  
**Q: Does this work with recurring class bookings?**

Yes.

* * *

## **Related Articles**

-   [Creating Class Booking Calendars](https://help.gohighlevel.com/en/support/solutions/articles/155000003554)  
      
    
-   [Why Appointment Time Slots Are Missing on Your Calendar](https://help.gohighlevel.com/en/support/solutions/articles/48001181711)  
      
    
-   [Configuring Calendar Widget Style (Classic & Neo)](https://help.gohighlevel.com/en/support/solutions/articles/155000003552)
    

##