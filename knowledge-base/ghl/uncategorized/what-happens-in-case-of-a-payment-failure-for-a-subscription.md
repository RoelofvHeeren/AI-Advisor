---
title: "What happens in case of a payment failure for a Subscription?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-"
category: "Uncategorized"
---

# What happens in case of a payment failure for a Subscription?

When a subscription payment fails, an invoice is generated and sent to the customer. The customer can pay the invoice using an existing or new payment method using the link in the Invoice. Additionally, the system automatically retries payments based on configurable retry settings and also provides an option to cancel the subscription if all retries fail.

* * *

**TABLE OF CONTENTS**

-   [Process](#Process)
-   [Additional Points](#Additional-Points)
-   [Related Articles](#Related-Articles)

* * *

## **Process**

  

1.  **Invoice Generation:** When a subscription payment fails, an invoice is automatically created and sent to the customer.  
      
    
2.  **Payment Options:** The customer can pay the invoice using an existing payment method or add a new one. If a new card is used, it will become the default payment method for future subscription payments.  
      
    
3.  **Automatic Payment Retries:** The system will attempt to process the subscription payment again at fixed intervals based on the retry settings.  
      
    
4.  **Retry Settings:** By default, the system will attempt to retry the payment three times, with each retry occurring one day apart.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328252/original/iy9OggNgYeejUe57XZHL6haL9l583V6n-w.png?1753289535)  
      
    
5.  **Customizable Retry Settings:** Businesses can configure the number of retries (1, 2, or 3) and adjust the retry intervals to 1, 3, 5, or 7 days between each attempt.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328308/original/TdtIopuILG1fkjVoQS8jBpfk9_Qp6THpTQ.png?1753289619)  
      
    
6.  **Impact of Changes to Retry Settings:** Any modifications to the retry settings will apply to both new and existing subscriptions, including those currently undergoing retries.  
      
    
7.  **Subscription Status:** Irrespective of whether the payment is successful using retries or paid by the invoice, the subscription status changes to an Active status, provided no other invoice is pending against the subscription.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328678/original/3gjTdwgoukcjUINpCghL5POK8MvLTBYNCw.png?1753290116)
    
      
    
      
    If all retries of a subscription fail, the subscription remains in the unpaid state.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328896/original/aQgD_mI6GHDDAtNXHRDbIn7mTa90VDqMjg.png?1753290450)  
      
    
8.  **All Retries Fail:** Using the settings on 'Payments > Settings > Subscriptions', the subscriptions can also be automatically marked as cancelled in case all payments fail.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328366/original/Bt3EP0IZPgv8HEbBQglUVy4Isb5iDmhBIA.png?1753289725)
    

* * *

## **Additional Points**

  

-   Customers receive notifications about the failed payment and the generated invoice.  
      
    
-   Payment retries occur in parallel with the invoice payment option, ensuring multiple avenues for successful payment collection.  
      
    
-   If a customer completes payment via the invoice before a retry attempt, the retry process will automatically stop.  
      
    
-   Businesses can update retry settings at any time, and these changes will immediately affect all applicable subscriptions.  
      
    
-   The system ensures seamless updates to payment methods, reducing friction for customers while maintaining subscription continuity.
    

  

  

* * *

## **Related Articles**

  

-   [Pause and Resume Subscriptions](https://help.gohighlevel.com/en/support/solutions/articles/155000004138)  
      
    
-   [Subscription Settings - Failed Payment Retries](https://help.gohighlevel.com/en/support/solutions/articles/155000004691)  
      
    
-   [Payments - What is listed on the Subscriptions page?](https://help.gohighlevel.com/en/support/solutions/articles/48001225935)  
      
    
-   [Create Subscriptions & Invoices in Contact Profile](https://help.gohighlevel.com/en/support/solutions/articles/155000004163)