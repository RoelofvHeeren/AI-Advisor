---
title: "Workflow Trigger - Order Submitted vs Order Form Submission"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission"
category: "Uncategorized"
---

# Workflow Trigger - Order Submitted vs Order Form Submission

The difference between triggers for a submitted order form and a submitted order comes down to payment. If there is an order form submission, then there is one trigger. If there is order payment, then there is another trigger. If there is an order form and also payment then both can be triggered.

  

Each of these triggers is useful for different stages of the sales and marketing funnel in. The order submitted trigger would typically be used after a customer completes a purchase, while the order form submission trigger would be used earlier in the process, like capturing potential leads or gathering details for follow-up.

* * *

**TABLE OF CONTENTS**

-   [Where To Find These Triggers](#Where-To-Find-These-Triggers)
-   [Trigger - Order Submitted](#Trigger---Order-Submitted)
-   [Trigger - Order Form Submission](#Trigger---Order-Form-Submission)
-   [Key Differences Between Order and Order Form Triggers](#Key-Differences-Between-Order-and-Order-Form-Triggers)

* * *

## **Where To Find These Triggers**

The Order Form Submission and Order Submitted triggers are in the Workflow Builder under Payments.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037341103/original/rMToiDblKmlcDM7EI6xuAAcNtIpFZ8pt2g.png?1732737641)

  

* * *

## **Trigger - Order Submitted**

[View the Trigger - Order Submitted article for more details.](https://help.gohighlevel.com/en/support/solutions/articles/48001228664) 

  

This trigger is fired when an _actual order payment/transaction_ is placed in your system (such as when someone purchases a product).

  

-   **Use Case:** It is generally tied to a payment transaction. When a customer completes a purchase, this trigger can be used to automate follow-up actions like sending order confirmation emails, updating CRM records, triggering SMS notifications, initiating delivery workflows, etc.  
      
    
-   **Example Workflow Actions:**
    -   Send a "Thank you for your purchase" email.
    -   Create an invoice or process payment.
    -   Trigger a shipping process or notify the fulfillment team.

* * *

## **Trigger - Order Form Submission**

[View the Trigger - Order Form Submission for more details.](https://help.gohighlevel.com/en/support/solutions/articles/155000003253) 

  

This trigger is fired when a customer submits a form that contains order information (but may not necessarily indicate a completed transaction). It’s more about the form submission itself rather than a finalized order.

  

-   **Use Case:** Typically, this is used for lead capture or request-for-quote (RFQ) forms, where a person fills out order-related information, but no payment is made yet. This could also include "pre-order" forms or inquiries where the user is expressing interest or providing their details before they officially make a purchase.  
      
    
-   **Example Workflow Actions:**
    -   Send an acknowledgment email or thank you for inquiry.
    -   Notify a sales rep that a lead has filled out an order form.
    -   Trigger a follow-up sequence to help close the sale.

* * *

## **Key Differences Between Order and Order Form Triggers**

  

-   **Order Submitted**: Tied to an actual purchase or completed transaction, often with a payment component. This trigger doesn't care if there was an order form or not.  
      
    
-   **Order Form Submission**: Triggered by submitting a form that contains order details but does not necessarily mean a transaction has been completed (e.g., lead form or quote request). This trigger doesn't care if there was payment or not.  
      
    
-   **Available Values:**There are values related to the Order that are only available in the workflow if the Order Submitted trigger is present.
    
    <table style="width: 100%;"><tbody><tr><td dir="ltr" style="width: 32.8171%;">Order Form Submission</td><td style="width: 67.1829%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688583/original/35KfRaIJNLEbYoWRlOQ1Hbqp1ZJUMbtgJw.png?1733246873" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="155037688583"></td></tr><tr><td dir="ltr" style="width: 32.8171%;">Order Submitted</td><td style="width: 67.1829%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688607/original/i35Aij96u0RTH-k5jfvfu83fUfeBT79IoQ.png?1733246930" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="155037688607"></td></tr></tbody></table>
    

  

-   **Shopping Cart:** When the Order Submitted values are available, the Shopping Cart element added in the Email Template builder will automatically populate that templatewith the item details from the order.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688926/original/JQLNpZGa7HKoBRgFL1iBOJyhAhS2wRxoog.png?1733247406)