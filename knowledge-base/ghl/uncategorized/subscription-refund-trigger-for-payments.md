---
title: "Subscription & Refund trigger for payments"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002213-subscription-refund-trigger-for-payments"
category: "Uncategorized"
---

# Subscription & Refund trigger for payments

With additional triggers around payments, business users have more control over automations built around lead conversion processes.  
  
Along with the current support for Payment Received, Order Submitted trigger and Invoice trigger, we have added the support for 2 new additional triggers

  
**1\. Subscription Trigger**

  

Allows to automate processes around the status changes for subscriptions

-   When a subscription is created for a customer
-   When the subscription moves over from trial to active
-   When a subscription is cancelled

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023959671/original/Um9xxbDbdOh3_6DL7wkqyY9voUUKnNJqwA.png?1712223286)

  

  

Businesses can also use subscription status filters to create IF conditions based on status changes or the product associated with the subscription and can also make use of the custom values inside Payments custom values.  
  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023960152/original/leLhKdSRr1m71UNylLWYcjpZIc6WMwJmtA.png?1712223613)

  

  

  

  

#### **2\. Refund Trigger**

  

Allows automations to be built around payments that are processed as refunds by you or your sales agents. Users will be able to trigger a workflow based on a refund attempt and then branch conditions based on: 

  

-   Whether the refund was success or failed
-   Whether the refund was for full amount or partial amount
-   OR based on the amount or source of the refund

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961501/original/a-24CCX_0JlZO9TAA350GUj2c79hnlG5mA.png?1712224412)

  

  

Refund custom values are also available inside the Payments section in custom values to allow businesses to send customised notifications based on different scenarios

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961659/original/boJMFD6t8CXJPrCAN54Y-Qu_c_IAMLhXCA.png?1712224503)

  

  

**These triggers work with Stripe, Authorize.net and NMI integrations available under Payments -> Integrations**  
  
**For Paypal, the trigger only works when a subscription is created and not on any further actions. All functionalities will be available soon for PayPal**

  

#### **Related Articles**

  

-   [How Subscriptions work with NMI/Authorize.net](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)
-   [How Subscriptions work with Stripe](https://docs.stripe.com/billing/subscriptions/overview)