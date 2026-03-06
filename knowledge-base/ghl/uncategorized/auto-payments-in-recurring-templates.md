---
title: "Auto Payments in Recurring Templates"
url: "https://help.gohighlevel.com/support/solutions/articles/48001219625-auto-payments-in-recurring-templates"
category: "Uncategorized"
---

# Auto Payments in Recurring Templates

Recurring billing gets easier and more reliable with Auto Payments in HighLevel. This article explains how Auto Payments charge a customer’s card on each invoice due date, the card options you can use, what happens on failures, and how to manage settings in a recurring invoice template. Learn best practices, prerequisites, and where to customize notifications.

* * *

**TABLE OF CONTENTS**

-   [What is Auto Payments in Recurring Templates?](#What-is-Auto-Payments-in-Recurring-Templates?)[](#Key-Benefits-of-Auto-Payments)
-   [Key Benefits of Auto Payments](#Key-Benefits-of-Auto-Payments)[](#How-Auto-Pay-Works-\(New-vs.-Existing-Schedules\))
-   [How Auto-Pay Works (New vs. Existing Schedules)](#How-Auto-Pay-Works-\(New-vs.-Existing-Schedules\))[](#Enabling-Auto-Pay-on-an-Existing-Recurring-Schedule)
-   [Enabling Auto-Pay on an Existing Recurring Schedule](#Enabling-Auto-Pay-on-an-Existing-Recurring-Schedule)[](#Creating-a-New-Recurring-Schedule)
-   [Creating a New Recurring Schedule](#Creating-a-New-Recurring-Schedule)[](#Notifications-&-Reminders)
-   [Notifications & Reminders](#Notifications-&-Reminders)[](#Failed-Payments-&-Retry%C2%A0)
-   [Failed Payments & Retry](#Failed-Payments-&-Retry%C2%A0) [](#Editing-Schedules-&-When-Auto-Charge-Pauses)
-   [Editing Schedules & When Auto-Charge Pauses](#Editing-Schedules-&-When-Auto-Charge-Pauses)[](#How-To-Set-Up-Auto-Payments)
-   [How To Set Up Auto Payments](#How-To-Set-Up-Auto-Payments)[](#Enable-Auto-Pay-in-an-Ongoing-Schedule)
-   [Enable Auto-Pay in an Ongoing Schedule](#Enable-Auto-Pay-in-an-Ongoing-Schedule)[](#Choose%3A-Create-New-or-Open-Existing)
-   [Choose: Create New or Open Existing](#Choose%3A-Create-New-or-Open-Existing)[](#Manage-Auto-Payment)
-   [Manage Auto Payment](#Manage-Auto-Payment)[](#Turn-on-Auto-Pay-and-choose-the-card-source)
-   [Turn on Auto-Pay and choose the card source](#Turn-on-Auto-Pay-and-choose-the-card-source)[](#Disable-Auto-Pay-for-Future-Invoices)
-   [Disable Auto-Pay for Future Invoices](#Disable-Auto-Pay-for-Future-Invoices)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles%E2%80%8B)
-   [Related Articles](#Related-Articles%E2%80%8B)

* * *

# **What is Auto Payments in Recurring Templates?**

  

Auto Payments automatically charge your customer’s saved or provided card whenever a recurring invoice becomes due. Instead of waiting for a manual payment each cycle, HighLevel processes the charge on schedule using the card source you select.

  

Auto Payments can be set to use one of these card types. Each card choice affects when auto-charging begins and how future invoices are handled.

  

### **Customer Card**  
  

-   Uses the card the customer first uses to pay **any** invoice in the schedule.  
      
    
-   Auto-Pay begins on the **next** occurrence after that first successful payment.  
      
    
-   Example: If the first payment happens on the 4th invoice, auto-pay starts with the 5th (if scheduled).
    

  

### **Saved Card**  
  

-   Uses a card already on file in the customer’s profile.  
      
    
-   Auto-charging starts from the **first** occurrence in the schedule; no initial manual payment required.  
      
    
-   If a charge fails, both the location user and the customer receive a notification.
    

  

### **New Card**  
  

-   Add a new card while creating or editing the schedule; the card is saved for future use.  
      
    
-   Auto-Pay begins from the **first** occurrence after saving the card.  
      
    
-   A small authorization/verification may occur when the card is added.
    

  

**Where to Manage Cards on File:** 

Open the customer record → Payments → Cards on File. (Only the last digits and expiry are visible.)

* * *

## **Key Benefits of Auto Payments**

  

Understanding the advantages helps you decide when to enable Auto Payments and which card option to pick.

  

-   **Faster Collections:** Charges process automatically on the due date, reducing delays.

  

-   **Lower Admin Effort:** Fewer manual follow-ups and reconciliations per cycle.

  

-   **Predictable Cash Flow:** More consistent revenue timing across billing cycles.

  

-   **Flexible card control:** Choose Customer Card, Saved Card, or enter a New Card at setup.

  

-   **Improved customer experience:** Optional reminders and successful-payment confirmations keep customers informed.

* * *

## **How Auto-Pay Works (New vs. Existing Schedules)**

  

Auto-Pay timing depends on whether you add it to an existing recurring schedule or set it at creation.

  

### **Enabling Auto-Pay on an Existing Recurring Schedule**

  

-   The **next invoice** in the sequence must be paid **manually** once.

  

-   After that payment succeeds, **all future invoices** are charged automatically using the selected card option.

  

-   You cannot modify the date of invoices already created. Example, If an invoice was created on **December 1**, its date cannot be changed to **December 3**.

  

### **Creating a New Recurring Schedule**

  

-   **If a Saved Card exists:** The **first invoice** auto-charges, and all future invoices auto-charge.

  

-   **If no Saved Card exists:** The **first invoice** must be paid manually. After that payment, the card is saved (if applicable) and future invoices auto-charge.

  

Use this quick matrix to confirm whether the first invoice auto-charges or requires manual payment based on your setup.

  

| 
**Scenario**

 | 

**First Invoice**

 | 

**Future Invoices**

 | 

**Notes**

 |
| --- | --- | --- | --- |
| 

Auto-Pay turned ON for an **existing** recurring schedule

 | 

Manual

 | 

Auto

 | 

Manual payment captures the card (Customer Card) for future auto-charges.

 |
| 

**New** schedule + **Saved Card** on file

 | 

Auto

 | 

Auto

 | 

Starts charging immediately on the first occurrence.

 |
| 

**New** schedule + **No Saved Card**

 | 

Manual

 | 

Auto

 | 

Customer’s first successful payment stores the card for future auto-charges.

 |

* * *

## **Notifications & Reminders**

  

Keep teams and customers informed with reminders, success alerts, and failure alerts. You can also customize certain templates.

  

-   **Customer receives:**  
      
    
    -   Optional upcoming-charge reminders (based on your reminder settings)  
          
        
    -   Payment success notifications  
          
        
    -   Payment failure notifications
        

  

-   **Location user receives:**  
      
    
    -   Payment success alerts  
          
        
    -   Payment failure alerts  
          
        
    -   Notice if a **child invoice** was edited before its auto-charge (that invoice’s auto-pay is paused)
        

  

-   **Customize invoice notifications:** See **Customize Email and SMS notifications for invoicing** (link in Related Articles) to brand and tailor messages.
    

  

-   **Automated reminders:** You can configure multiple reminder touchpoints from invoice settings (link in Related Articles).
    

* * *

## **Failed Payments & Retry** 

  

Understand how HighLevel retries failed auto-payments for invoices and what actions you or the customer can take.

  

1.  If an auto-payment fails, both the customer and the location user are notified.  
      
    
2.  The customer can:  
      
    
    -   Pay manually with the same card, or  
          
        
    -   Pay with a new card (the new card becomes the default for future auto-pay in this schedule)  
          
        
3.  The system makes **two** additional retry attempts, **24 hours apart**.  
      
    
4.  If payment still fails:  
      
    
    -   No further automatic attempts occur for that invoice  
          
        
    -   The invoice must be paid manually
        

* * *

## **Editing Schedules & When Auto-Charge Pauses**

  

Certain edits to a queued/child invoice can pause its auto-charge to prevent unintended charges.

  

-   Editing a generated **child invoice** before its charge time will pause auto-payment **for that invoice only**.

  

-   When auto-pay is enabled on an edited recurring invoice, HighLevel also sends an email notification about the auto-payment change.

  

-   To resume charging, ensure details are correct and let the schedule proceed; future occurrences are unaffected unless edited.

* * *

## **How To Set Up Auto Payments**

  

Use these guided steps to turn Auto-Pay on or off from the recurring invoice builder. The callouts below reference the highlighted areas in each screenshot so you can click the correct controls with confidence.

  

### **Enable Auto-Pay in an Ongoing Schedule**

  

**Go to your recurring invoices list.**

  

Navigate to **Payments → Invoices & Estimates → Recurring Invoices** and open the schedule you want to update.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066021956/original/T4jXoElWy1lXP2-3zo4wtV8Slqex3E4rsw.gif?1772465470)

###   

### **Choose: Create New or Open Existing**

  

From here you can:

  

-   **Create a New Schedule:** Click **New → New Recurring Invoice**.  
      
    
-   **Open an Existing Schedule:** Click any row in the list to edit that schedule.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066022193/original/mIqhKhP_Ro6dOXVY6fBp7DD9s-FlQXC89A.png?1772465559)

  

  

### **Manage Auto Payment**

  

Open the Auto-Pay controls. In the editor, click the ⋮ (three dots) menu in the top-right corner, then choose Manage Auto Payment.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066021021/original/q7O6b9dTZILk4iRosVQLyj0YWaDQIJsK7A.png?1772465027)

  

  

### **Turn on Auto-Pay and choose the card source**

  

Toggle Enable autopayment ON, then select Customer Card, Saved Card, or New Card. Click Save.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066022283/original/ba9R-wBTm6CpVGA9HlHr7xYu6SwqgfSI5g.png?1772465612)

  

  

### **Disable Auto-Pay for Future Invoices**

  

1.  **Open the same schedule** and click the **⋮** menu → **Manage Auto Payment**.  
      
    
2.  **Turn Auto-Pay off** and save. In the modal, toggle **Enable autopayment** **OFF**, then click **Save**.  
      
    
3.  Auto-Pay will stop beginning with the **next** invoice occurrence.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060974618/original/0Q6CA1GUBLwOiIvf_N8H-qVE6Z1xog5WGQ.png?1766130297)

* * *

## **Frequently Asked Questions**

  

**Q: Where can I find the “Manage Auto Payment” option?**

Open a recurring invoice → click the **⋮** menu (top-right) → **Manage Auto Payment** to enable, disable, or choose the card source.

  

**Q: Does the first invoice always auto-charge?**

Not always. If no card is on file at schedule creation, the first invoice is paid manually; future invoices auto-charge after that successful payment. With a Saved Card, the first invoice auto-charges.

  

**Q: Which payment methods are supported for Auto-Pay?**

Card payments. Manual methods (cash, bank transfer, etc.) are not auto-charged.

  

**Q: What happens if a card is declined?**

HighLevel notifies the customer and location user, retries twice (24 hours apart), and then stops automatic attempts. You can collect a manual payment with a new card.

  

**Q: Can I change the card used for future auto-charges?**

Yes. Add or select a different card from the customer’s profile. The next auto-charge will use the updated card.

  

**Q: Do edits to a generated invoice affect auto-pay?**

Editing a child invoice before charge time pauses auto-pay for that invoice only. Future occurrences continue as scheduled.

  

**Q: Can I brand or customize the payment emails?**

Yes. Customize invoice notifications (subject, body, branding) from your invoice notification settings.

  

**Q: How can I automate follow-ups on failed payments?**

Use workflow triggers like **Invoice** and **Payment Received** to notify your team, tag the contact, or send recovery messages.

* * *

### **Related Articles**  
  

-   [How to Create and Manage Recurring Invoices in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001219440-how-to-create-and-manage-recurring-invoices-in-highlevel) 
    
-   [Send Recurring Invoice action — Setup guide](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide) 
    
-   [Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows) 
    
-   [Customize Email and SMS notifications for invoicing](https://help.gohighlevel.com/support/solutions/articles/48001236926-customize-email-and-sms-notifications-for-invoicing) 
    
-   [How to add and manage your customer’s cards on file](https://help.gohighlevel.com/support/solutions/articles/155000004506-how-to-add-and-manage-your-customer-s-cards-on-file) 
    
-   [How to Streamline Payments with Automated Invoice Reminders](https://help.gohighlevel.com/support/solutions/articles/155000002942-how-to-streamline-payments-with-automated-invoice-reminders) 
    
-   [Mobile: AutoPayment in Recurring Invoices](https://help.gohighlevel.com/support/solutions/articles/155000006095-mobile-autopayment-in-recurring-invoices) 
    
-   [Subscription failed payment retries (to compare with invoices)](https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-)