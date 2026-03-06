---
title: "Partial Payment: Collect Deposit Amount"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002184-partial-payment-collect-deposit-amount"
category: "Uncategorized"
---

# Partial Payment: Collect Deposit Amount

  

  

**In This Article**

-   [What is Partial Payment?](#What-is-Partial-Payment?)
-   [Impact of Partial Payment on Transactions & Invoices](#Impact-of-Partial-Payment-on-Transactions-&-Invoices)
-   [How to Use Partial Payment?](#How-to-Use-Partial-Payment?)
-   [How to collect the remaining balance?](#How-to-collect-the-remaining-balance?)
-   [Key Benefits](#Key-Benefits)
-   [FAQs](#FAQs)

* * *

#### **What is Partial Payment?**

  

Partial payment offers bookers the opportunity to secure bookings by paying a deposit upfront, with the remaining balance settled at a later time. Alongside collecting full payments, businesses now have the capability to collect deposit amounts from bookers. This feature has been seamlessly implemented across all calendar types and aids in reserving seats.

  

With this new feature, users have the flexibility to determine either a flat amount or a percentage of the total amount to be charged to the booker at the time of booking.

* * *

#### **Impact of Partial Payment on Transactions & Invoices  
**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874265/original/c5hsV31Rg8FUfyqrVrCgQQNFYMGoDAKZHA.png?1712122099)

When partial payments are enabled, two entries appear in payments:

-   **Transaction:** The amount charged during booking (Deposit Amount).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874407/original/yKYCL_xx8aiCufzAFCIQifEpOMLWxqLDhQ.png?1712122324)

  

-   **Invoices**: The pending amount to be collected from the booker (Total Amount - Deposit Amount). The invoice status remains in draft, and users are required to manually collect the pending amount.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874513/original/06Srji6PwP8roOciFt6BYRb4Lkk0Aq55TQ.png?1712122591)

  

* * *

#### **How to Use Partial Payment?**

  

**1\. Integrate Payment Gateway:** Ensure that you have integrated a payment gateway such as Stripe or Authorize.net. (Payments Module > Integrations)

  

**2\. Enable Payment:** Enable the "Accept Payments" toggle for the calendar from Calendar Settings > Forms & Payments section.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023873723/original/qh84sI5jK74C15QtJDvFjkxIVY73lfCypw.png?1712120969)

  

**3\. Enter Total Amount and Currency:** Specify the total amount for your service or appointment and select the desired currency.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875315/original/jDPTb95KbCiV_Z1bNFkGFXoBJAWYnoDQQg.png?1712123868)

  

4\. **Activate Partial Payment Option:** Check the "Accept Partial Payment" box.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875330/original/nUChXVtlfLyUPYLTHT-bcLVTmTXbbghDqg.png?1712123912)

  

5\. **Select Amount Type:** Choose whether to add a **Flat Amount or a percentage.** The percentage is calculated based on the total amount.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875412/original/EJ0SZ3ZGIUD92bWFq9JrXo90BjB_R_5vsA.png?1712123958)

  

6\. **Enter Deposit Amount / Percentage:** Specify the deposit amount / deposit percentage for your service or appointment. The percentage is calculated based on the total amount entered.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875759/original/h6KWVxtgbVYQ-g0CLA4_P_43_NxR-nuE_w.png?1712124477)

  

7\. **Add** **Description:** Provide additional context by entering a description if needed.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874940/original/dkS82BeTBEBKpH74CNQ06h_tQXfNxLxUEQ.png?1712123347)

  

8\. **Save Settings:** Click on save to apply the changes.

* * *

#### **How to collect the remaining balance?**

  

To collect the remaining payment, users must manually send the DRAFTED invoice that was created when partial payment was collected at booking. Simply head over to Payments > Invoices.

  

Note: Further improvements to the feature will automate this process in the future.

  

* * *

#### **Key Benefits**

  

This feature facilitates businesses in collecting deposit amounts, leading to a reduction in no-shows. By displaying the total cost of the appointment/service while offering the flexibility to pay only a deposit, businesses enhance the user experience without mandating upfront payments.

* * *

#### **FAQs**

  

Q: Which calendar type supports partial payments?

A: Partial payments can be enabled for all calendar types - Event, Round Robin, Collective, Class, Service Calendar and Service Menu.

  

Q: How do I manage pending payments?

A: Pending payments can be managed manually through the Payments > Invoices tab. Users can view the pending amount and collect it from the booker accordingly.

  

Q: Will bookers receive a notification about pending payments?

A: No, bookers will not be notified about pending payments. However, the staff members can check the pending amount under Payments > Invoices.  
  

Q: Which payment gateways are supported for calendar payments?

A: Currently, the supported payment gateways for calendar payments are Stripe, NMI and Authorize.net.