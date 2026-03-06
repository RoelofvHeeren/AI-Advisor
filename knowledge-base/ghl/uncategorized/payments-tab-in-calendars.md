---
title: "Payments Tab in Calendars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006098-payments-tab-in-calendars"
category: "Uncategorized"
---

# Payments Tab in Calendars

The Payments tab in HighLevel’s appointment modal centralizes payment tracking and collection for any booking. Use it to view balances, attendee-level statuses, transactions, and to collect remaining amounts. This guide explains how it works, how to enable it, and how to reconcile common scenarios.

* * *

**TABLE OF CONTENTS**

-   [What is the Payments Tab in Calendars?](#%E2%80%8B%E2%80%8BWhat-is-the-Payments-Tab-in-Calendars?)
-   [Key Benefits of the Payments Tab](#Key-Benefits-of-the-Payments-Tab)
-   [Key Features](#Key-Features)
-   [How Payments Work Behind the Scenes](#How-Payments-Work-Behind-the-Scenes)
-   [Common Payment Scenarios (Quick Reference)](#Common-Payment-Scenarios-\(Quick-Reference\))
-   [How To Use the Payments Tab](#How-To-Use-the-Payments-Tab)
-   [Important Notes & Limitations](#Important-Notes-&-Limitations)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Payments Tab in Calendars?**

  

The **Payments Tab** in the Appointment Modal allows you to manage all payment-related details for an appointment in one place. You can track the amount paid, remaining balance, attendee-wise payment breakdown, transactions, and collect pending payments if needed.

* * *

## **Key Benefits of the Payments Tab**

  
Understanding the advantages helps teams decide when to adopt the feature and how to train staff for faster collections and fewer billing questions.

  

-   **Single source of truth:** All appointment‑level amounts, attendees, and transactions in one place.  
      
    
-   **Faster collections:** Trigger **Collect Payment** right from the modal to charge a card or record an offline payment.  
      
    
-   **Attendee clarity:** See who’s paid, partially paid, or still owes; ideal for **Add Guests** bookings.  
      
    
-   **Discount visibility:** Coupon use and adjusted totals are reflected directly in the summary and transactions.  
      
    
-   **Cleaner bookkeeping:** A related **Order** is created automatically when calendar payments are enabled, making downstream reporting easier.
    

* * *

## **Key Features**

  

#### 1\. Payment Summary

-   **Amount Paid**: Total amount already collected for the appointment.
    
-   **Remaining Balance**: Pending payment that still needs to be collected.
    
-   **Total Amount**: Overall cost of the appointment after discounts/coupons.  
      
    

#### 2\. Attendee-Wise Payment Details

-   See payments at the **individual attendee level** (Booker + Guests).
    
-   Each attendee’s status is shown clearly:
    
    -   **Paid**: Full payment received.
        
    -   **Partially Paid**: Some amount still pending.
        
    -   **Remaining**: Outstanding balance to be collected.  
          
        

#### 3\. Transaction History

-   View a list of all transactions associated with the appointment.  
      
    

#### 4\. Collecting Remaining Payments

-   If a balance is due, you’ll see a **Collect Payment** button.
    
-   Options include:
    
    -   **Charge a Card** – Process credit/debit card payments directly.
        
    -   **Record Manually** – Mark payments collected outside the system (cash, check, etc.).  
          
        

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062987573/original/QGlxzeZFfHUXFIL93UH_Reihh4q4ZuW6-w.png?1768835528)

* * *

## **How Payments Work Behind the Scenes**

  

-   When **payments are enabled for a calendar**, an **associated product** is automatically created (visible in the **Products Tab**) with a _Calendar_ tag.  
      
    
-   These **calendar-linked products cannot be deleted directly** from the Products Tab.  
      
    
-   When an appointment is booked, an **order is automatically created** (visible in the **Orders Tab**). You don’t need to manage orders separately; everything can be handled directly from the appointment modal.
    

* * *

## **Common Payment Scenarios (Quick Reference)**

  

Use this mini‑guide to anticipate how totals, statuses, and transactions will look based on typical flows.  
  

| Scenario | Setup/Action | What You’ll See in Payments Tab |
| --- | --- | --- |
| **Pay in Full at Booking** | Enable **Accept Payments** on the calendar; book normally | **Amount Paid** equals **Total Amount**; attendee statuses = **Paid**; transactions show charge(s) |
| **Deposit (Partial Payment)** | Enable **Partial Payment/Deposit**; collect deposit at booking | **Remaining Balance** shows due; after collecting later via **Collect Payment**, statuses update from **Partially Paid** to **Paid** |
| **Coupon Applied** | Enable **Coupon Codes** on the calendar; customer enters code on widget | Summary shows **Discount (Coupon)** line; **Total Amount** reflects discount; transactions include charge(s) against discounted total |
| **Add Guests Post‑Booking** | Edit appointment → add guests → collect per attendee | One order exists from initial booking; additional orders may be created on subsequent saves when **Collect Payment for Guest** is enabled |
| **Recurring – First Only** | Collect only for first occurrence on the widget | Initial appointment shows the payment; later occurrences require manual collection and will initially show balances due |
| **Recurring – All Occurrences** | Collect for all occurrences on the widget | The series total is collected upfront; the appointment record shows paid totals and transactions for the full amount |

* * *

## **How To Use the Payments Tab**

  

Correct setup ensures the tab appears and that totals, discounts, and attendee statuses behave as expected.

  

**Enable Accept Payments on a Calendar**

1.  Go to **Calendars → Settings → Edit the desired Calendar**  
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062985339/original/XQziwznjElOpgOikWRHAxoZQm1sFDife_g.png?1768834422)**  
      
    
2.  Toggle **Accept Payments**. HighLevel will auto‑create a **Product** tagged **Calendar**.  
      
    
3.  (Optional) Toggle **Enable Coupon Code** to add a coupon field on the widget.  
      
    
4.  (Optional) Configure **Partial Payment/Deposit** rules for deposits at booking.  
      
    
5.  (Optional) For recurring bookings, choose whether to charge for **First Appointment Only** or **All Appointments** on the booking widget.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062985462/original/_e7fqvSKj9iQK0l2C_PVZdHeTaTC6KZafA.png?1768834503)  
      
    

**Finding the Payments Tab**

1.  Go to **Calendars → Appointments**.  
      
    
2.  Open any appointment.  
      
    
3.  Click **Payments**.
    

  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062985754/original/koIViYbj2J2pg_upxtb1-UmYwl3lE16GeA.png?1768834663)_  
  

**Collect or Log a Payment from the Appointment**

  

1.  Open the appointment and go to **Payments**.  
      
    
2.  Click **Collect Payment** → choose **Charge a Card** or **Record Manually**.  
      
    
3.  Complete the required fields and save.  
      
    
4.  Verify that **Amount Paid**, **Remaining Balance**, and attendee statuses update accordingly.  
      
    

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062986121/original/ToVJc1vmsLBii11oz1hHlt1Zla3cymDu5Q.png?1768834816)_

* * *

## **Important Notes & Limitations**

  

These constraints help you avoid edge cases that lead to confusion or duplicate orders.

  

-   Not supported for bookings via older **Service Menu (v1)**.  
      
    
-   Not supported for **custom recurring appointments** created directly via the in‑app modal.  
      
    
-   Group bookings: one order is created for the full group at initial booking.  
      
    
-   Editing an appointment and adding guests with **Collect Payment for Guest** enabled can create a **new order each time you save**. Plan your edits and collections carefully to avoid unintended multiple orders.
    

* * *

## **Frequently Asked Questions**

  

**Q: Where do coupon discounts show after booking?**  
In the appointment’s **Payments** tab, the **Payment Summary** reflects **Discount (Coupon)** and the **Total Amount** after discount. The **Transaction History** shows charges recorded against the discounted total.  
  

**Q: Can I refund a charge from the Payments tab?**  
Refunds are managed in **Payments → Transactions** (or via your gateway, e.g., PayPal). Once refunded, the appointment’s **Transaction History** reflects the refund entry.  
  

**Q: Does PayPal work with the Payments tab?**  
Yes. PayPal transactions collected via the booking widget appear in **Transaction History** and are tied to the appointment’s order.  
  

**Q: How do recurring series charges display?**  
If you collect for the **first appointment only**, later instances will show balances due until collected. If you collect for **all appointments**, the total appears as paid upfront in the initial booking’s record.

* * *

### **Related Articles**

  

-   [Collecting Payments in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000000875-collecting-payments-in-calendars)  
      
    
-   [Coupon Codes in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000006097-coupon-codes-in-calendars)  
      
    
-   [PayPal in Calendars](https://help.gohighlevel.com/support/solutions/articles/155000006712-paypal-in-calendars)  
      
    
-   [Add Guests Features in Calendar Bookings](https://help.gohighlevel.com/support/solutions/articles/155000005180-add-guests-features-in-calendar-bookings)  
      
    
-   [Partial Payment: Collect Deposit Amount](https://help.gohighlevel.com/support/solutions/articles/155000002184-partial-payment-collect-deposit-amount)  
      
    
-   [Collect Payments with Recurring Appointments (Booking Widget)](https://help.gohighlevel.com/support/solutions/articles/155000003451-collect-payments-with-recurring-appointments-booking-widget-)