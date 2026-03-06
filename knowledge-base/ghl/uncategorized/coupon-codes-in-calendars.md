---
title: "Coupon Codes in Calendars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006097-coupon-codes-in-calendars"
category: "Uncategorized"
---

# Coupon Codes in Calendars

Coupon Codes allow you to offer discounts on calendar bookings made via the booking widget. Customers can enter a valid coupon at checkout to receive a discount, which is then tracked inside the **Payments Tab** of the Appointment Modal.

* * *

**TABLE OF CONTENTS**

-   [Overview of Using Coupon Codes in Calendars](#Overview-of-Using-Coupon-Codes-in-Calendars)
-   [Key Benefits of Using Coupon Codes in Calendars](#Key-Benefits-of-Using-Coupon-Codes-in-Calendars)
-   [Supported Calendars & Limitations](#Supported-Calendars-&-Limitations)
-   [How to Use Coupon Codes in Calendars](#How-to-Use-Coupon-Codes-in-Calendars)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **Overview of Using Coupon Codes in Calendars**

  

Coupon Codes in Calendars let customers enter a discount code during booking on the booking widget. When a valid code is applied, the widget recalculates the price in real time and the appointment record shows an itemized Discount (Coupon) line in the Payments Tab. You control coupon rules with controls including percentage or fixed amount, validity windows, usage limits, and eligibility by product or calendar.

* * *

## **Key Benefits of Using Coupon Codes in Calendars**

  

Coupons help you smoothly and easily run targeted promotions:

  

-   **Higher Conversion:** Timely discounts reduce checkout friction and cart abandonment.  
      
    
-   **Flexible promotions:** Use percentage-based or fixed-amount discounts for seasonal or limited campaigns.  
      
    
-   **Control & Targeting:** Limit redemptions per contact or overall ensuring a coupon is not over-used  
      
    
-   **Better Customer Experience:** Customers can apply/remove a code directly in the booking widget with immediate price updates.
    

* * *

## **Supported Calendars & Limitations**

  

-   Coupon codes are **fully supported across all calendars** for both the Neo and Classic booking widgets, as well as for **Services (v2).**
    
-   Coupon codes are **not supported** with the older **Service Menu (v1)**. We strongly recommend moving to Services (v2) for a more modern booking flow, ongoing support, and access to features such as coupon codes.
    
-   Coupon codes are **only available through the booking widget** and cannot be applied to appointments created manually via the in-app modal. Support for this functionality is planned for a future release.
    

* * *

## **How to Use Coupon Codes in Calendars**

  

#### **Step 1:** Enable 'Accept Payments' and 'Coupon Codes' in Calendar

  

Before creating coupons, make sure payments are enabled on your calendar.  
  

-   Go to **Calendar Settings** \> **Forms & Payments**.  
      
    
-   Enable **Accept Payments**.  
      
    
    -   Once enabled, a **Product** is automatically created in your **Products** Tab with a _Calendar_ tag (this product cannot be deleted).  
          
        
-   Scroll further down and enable **Enable** **Coupon Code** option.  
      
    
    -   This will add a coupon input field to your booking widget.  
          
        

**Note**: You must enable coupons individually for each calendar where you want them active.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053042348/original/2BmUcD2W08bw34s9w76leLfpB334HvfghQ.png?1756923074)

###   

  

#### **Step 2:** Create a Coupon

  

Navigate to **Payments Module > Coupons** and click **New Coupon**.

  

You’ll see the following options:

  

-   **Coupon Code**: Enter a custom code (e.g., `10OFF`) or click **Generate** to auto-create one.  
      
    
-   **Coupon Type**: Choose between:  
      
    
    -   _Percentage Coupon_ (e.g., 10% off).  
          
        
    -   _Fixed Amount Coupon_ (e.g., $50 off).  
          
        
-   **Discount Offered**: Enter the percentage or fixed discount value.  
      
    
-   **Start & End Date/Time**: Define the coupon validity window.  
      
    
-   **Limit Redemptions**: (Optional) Restrict how many times the coupon can be used overall.  
      
    
-   **Limit to Products/Offers**: Select specific calendars or products where the coupon will apply.  
      
    
-   **Limit to One Use Per Customer**: Prevents multiple uses by the same customer.
    

  

Once saved, the coupon is ready to share with your customers.  
  

For more information on creating coupons, see: [How to Create Coupons for Products](https://help.gohighlevel.com/en/support/solutions/articles/48001224172)

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053042418/original/w6kgwOtoYOhG_9Kz9DHcjiCAh__kzqBt8g.png?1756923179)

  

  

#### **Step 3:** Customer Experience

  

-   When booking via the calendar widget, customers will see a **Coupon Code input box**.  
      
    
-   If the code is valid:  
      
    
    -   The discount is applied instantly.  
          
        
    -   The adjusted total shows before checkout.  
          
        
-   If invalid:  
      
    
    -   An error message appears.
        

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053042475/original/22Nepc6ubOIoY2QkZJ9V__078Aw5h90NfA.png?1756923322)

  

  

#### **Step 4:** Tracking Coupon Usage

  

All coupon and payment details are visible in the **Payments Tab** of the Appointment Modal:  
  

-   Coupon applied.  
      
    
-   Discount amount.  
      
    
-   Adjusted total.  
      
    
-   Attendee-level breakdown of payments.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053042516/original/FurzP0dgxoQDfjPqmhjQ3YDQoQX9kbxrgQ.png?1756923392)

* * *

## **Important Update: Order Creation & $0 Transactions**

  

Following the release on **22nd December 2025**, there have been changes to how orders, invoices, and transactions behave when coupon codes and calendar payments are involved. This section clarifies the new behavior and addresses common questions around **$0 transactions** and **missing invoices**.

  

### **1\. Change in Invoice Creation Behavior**

Earlier, when a booking involved partial payments, a **partially paid invoice** was created automatically.  
**Post this release**, an **invoice will no longer be created** in such cases. Instead, an **order is created**.

-   Payments (if required) can still be collected **against the order**
    
-   This change helps standardize order-based payment tracking across the platform
    

###   

### **2\. Why You See a $0 Transaction**

Anytime an **order is created via the in-app booking flow**, a **$0 transaction** will be recorded against that order.

-   This transaction represents **order creation**, not an actual payment
    
-   It does **not** indicate a charge or successful payment
    

###   

### **3\. When an Order Is Created**

-   An **order will always be created** if your **calendar has payments enabled**
    
-   If **no payment is enabled** on the calendar, **no order will be created**
    

This behavior applies even when:

-   A coupon code brings the payable amount down to $0
    
-   No immediate payment is collected at the time of booking
    

###   

### **4\. Impact on Existing Workflows (Invoice Triggers)**

If you have workflows configured using the **“Invoice Created”** trigger, you’ll need to update them.

  

**Action required:** Replace **Invoice Created** triggers with **Order Created** triggers to ensure workflows continue to run as expected

###   

### **5\. Handling $0 Transactions in Workflows**

If you’re using workflows that rely on payment-related triggers, we recommend updating them as follows:

-   Use the **Payment Received** trigger
    
-   Add an **If/Else** condition
    
-   In the **If** branch, set the condition: **Amount is greater than 0**
    
-   Trigger your workflow actions only in this branch
    

  

This ensures that workflows are executed **only for actual payments** and are not triggered for **$0 system-generated transactions** created during order creation.

  

* * *

## **Frequently Asked Questions**

  

**Q: How do I see the discount after booking?**  
Open the appointment and check the Payments tab. You’ll see Discount (Coupon), Amount Paid, and Remaining Balance totals.

  

**Q: Can I edit or disable a coupon after it goes live?**  
Yes. Open the coupon in **Payments > Coupons** to update limits/dates or disable it. Changes affect future bookings.

  

**Q: How can I test a coupon without charging a real card?**  
Set the calendar’s **Payment Mode** to **Test**, complete a test booking using your gateway’s test credentials (e.g., Stripe test cards), then switch back to **Live** when you’re done.

  

**Q: Can customers stack more than one coupon on a single booking?**  
 No. Only one active code per checkout is supported. Customers can remove a code and apply a different one before paying.

  

**Q: Are coupon codes case-sensitive?**  
Codes are not case-sensitive. For example; if a coupon code is 'SUMMER25' and a customer enters in 'Summer25', the coupon will apply.

* * *

## **Related Articles**

  

-   [Payments Tab in Calendars](https://help.gohighlevel.com/en/support/solutions/articles/155000006098)  
      
    
-   [Create Coupons in Payments](https://help.gohighlevel.com/en/support/solutions/articles/48001224172)  
      
    
-   [Collecting Payments in Calendars](https://help.gohighlevel.com/en/support/solutions/articles/155000000875)  
      
    
-   [Recurring Appointments](https://help.gohighlevel.com/en/support/solutions/articles/155000003450)  
      
    
-   [Add Guests Features in Calendar Bookings](https://help.gohighlevel.com/en/support/solutions/articles/155000005180)  
      
    
-   [Workflow Trigger - Coupon Redemption Limit Reached](https://help.gohighlevel.com/en/support/solutions/articles/155000005660)  
      
    
-   [Workflow Trigger - Coupon Code Expired](https://help.gohighlevel.com/en/support/solutions/articles/155000005661)  
      
    
-   [Workflow Trigger - Coupon Code Redeemed](https://help.gohighlevel.com/en/support/solutions/articles/155000005658)  
      
    
-   [Workflow Trigger - Coupon Code Applied](https://help.gohighlevel.com/en/support/solutions/articles/155000005641)