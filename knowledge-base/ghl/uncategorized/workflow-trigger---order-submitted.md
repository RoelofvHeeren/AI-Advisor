---
title: "Workflow Trigger - Order Submitted"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted"
category: "Uncategorized"
---

# Workflow Trigger - Order Submitted

  

  

## **What is the Order Submitted Trigger for Payment Links?**

  

The **Order Submitted Trigger** is enabled for payment links, allowing businesses to automate post-purchase workflows when a customer completes a purchase.

  

**TABLE OF CONTENTS**

-   [What is the Order Submitted Trigger for Payment Links?](#What-is-the-Order-Submitted-Trigger-for-Payment-Links?)
-   [PayPal Support for Recurring Invoices](#PayPal-Support-for-Recurring-Invoices)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **Key Benefits**:

-   **Automation**: Streamline post-purchase actions such as confirmation emails and notifications.
    
-   **Improved Customer Experience**: Ensure timely follow-ups after a payment is completed.
    
-   **Data Management**: Automatically update records when an order is submitted.
    

  

**How to Use the Order Submitted Trigger**:

1.  Go to **Automation Settings**.
    
2.  Select **Payment Links Workflow**.
    
3.  Enable the **Order Submitted Trigger**.
    
4.  Configure actions such as:
    
    -   Sending confirmation emails.
        
    -   Updating customer data.
        
    -   Notifying relevant teams.
        
5.  Save and activate the workflow.  
      
    

## **PayPal Support for Recurring Invoices**

  

Businesses can offer **PayPal as a payment method for recurring invoices**, provided autopayment is not enabled.

  

**Key Benefits**:

-   **More Payment Options**: Customers can choose PayPal for recurring invoices.
-   **Improved Usability**: Supports businesses relying on subscription-based or repeat billing models.
    
-   **Enhanced Customer Satisfaction**: Provides flexibility in payment methods.
    

  

**How to Enable PayPal for Recurring Invoices**:

1.  Ensure that **PayPal integration** is active in your system.
    
2.  Paypal does not work with auto-payments right now so make sure you are not setting a recurring invoice which as auto-payment enabled. No additional step needs to be done to enable PayPal
    

  

Your customers will now be able to choose PayPal as a payment method while paying their invoices

  

* * *

## **Frequently Asked Questions**

  

**Q: What is the “Order Submitted” trigger used for?**

The “Order Submitted” trigger is used in Workflows to initiate automated actions when a customer completes a purchase. This includes one-time product orders and recurring invoice subscriptions. It helps streamline post-purchase processes like confirmation emails, internal notifications, or upsell flows.

  

**Q: Does the “Order Submitted” trigger work with PayPal?**

Yes, the trigger now fully supports PayPal transactions, including those involving recurring invoices. Once a user completes a PayPal checkout, the trigger will activate just like it does for Stripe transactions.

  

**Q: Can I use the trigger for both one-time and recurring purchases?**

Absolutely. The “Order Submitted” trigger works with both one-time product purchases and recurring invoice setups. You can differentiate between the two using filters in your workflow configuration.

  

**Q: How can I identify if the order was paid via PayPal or Stripe?**

You can use the “Payment Mode” filter within the workflow trigger to distinguish between PayPal and Stripe payments. This allows you to create customized automations based on the payment method used.

  

**Q: Will the trigger activate for failed PayPal payments or only successful ones?**

The “Order Submitted” trigger only fires after a **successful** order submission and payment confirmation—whether it’s via Stripe or PayPal. Failed or incomplete payments will not activate the trigger.

  

**Q: Can I send an automated email after a PayPal recurring payment is made?**

Yes. Using the “Order Submitted” trigger in combination with a “Send Email” action in your workflow, you can automatically send confirmation or onboarding emails after any PayPal recurring payment is submitted. OR simply use sales receipts under Payments -> Settings