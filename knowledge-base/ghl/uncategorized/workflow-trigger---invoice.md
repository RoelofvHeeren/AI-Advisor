---
title: "Workflow Trigger - Invoice"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002835-workflow-trigger-invoice"
category: "Uncategorized"
---

# Workflow Trigger - Invoice

The “Invoice” workflow trigger automates actions based on changes in invoice status. Whether an invoice is sent or paid, this trigger can help streamline follow-ups, reminders, notifications, and record updates. This article provides a comprehensive guide on setting up this trigger, its benefits, and real-world use cases to enhance your invoicing and payment processes.

* * *

**TABLE OF CONTENTS**

-   [What is Invoice Workflow Trigger](#What-is-Invoice-Workflow-Trigger)
-   [Key Benefits of Invoice Workflow Trigger](#Key-Benefits-of-Invoice-Workflow-Trigger)
-   [Configuring Invoice Workflow Trigger](#Configuring-Invoice-Workflow-Trigger)
    -   [Name Your Trigger](#Name-Your-Trigger)
    -   [Set Up Filters](#Set-Up-Filters)
        -   [Invoice Status](#Invoice-Status)
        -   [Additional Filters](#Additional-Filters)
    -   [Configure Workflow Actions](#Configure-Workflow-Actions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Invoice Workflow Trigger**

  

The “Invoice” workflow trigger activates whenever there is a change in the status of an invoice. You can configure this trigger to respond to different statuses, such as sent, paid, or overdue, and initiate a series of automated actions. This is particularly useful for businesses that want to ensure timely follow-ups, confirmations, or notifications without manual intervention.

* * *

## **Key Benefits of Invoice Workflow Trigger**

  

Discover how this trigger can transform your invoicing process:  
  

-   **Improves Cash Flow Management:** Automatically reminding customers about upcoming payments helps reduce overdue invoices.  
      
    
-   **Enhances Customer Experience:** Sending timely thank-you emails and confirmations upon payment reflects professionalism and builds trust.  
      
    
-   **Reduces Manual Effort:** Automating routine actions like sending reminders or updating records saves time and ensures consistency.  
      
    
-   **Enables Better Tracking:** Real-time notifications about invoice status changes keep your team informed and ready for further action.

* * *

## **Configuring Invoice Workflow Trigger**

  

Let’s walk through setting up the Invoice trigger in your workflow :

  

### **Navigate to Workflows**

  
Access the **"Automation"** section of your platform and create a new workflow or select the existing workflow where you wish to apply the Invoice trigger.

  

### **Choose a Workflow Trigger**

  

Click the **"+ Add New Trigger"** button and Select the **“Invoice”** trigger from the list of available options.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039727599/original/HrHofPvGo4q9ggzF8gOrWyRHqjlVT3jIew.png?1736768991)

  

### **Name Your Trigger**

  

Give the trigger a descriptive name for easy identification, such as “Post Workshop Invoice Sent”

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039727628/original/xznkhCbsphODUm-dekG6q60raPRqM3DC2g.png?1736769009)

* * *

### **Set Up Filters**

  

Use filters to define specific conditions for the trigger.

  

#### **Invoice Status**

  

The Invoice Status Filter allows you to define the specific status change that activates your workflow. This ensures that only relevant invoices trigger automated actions. Below is a detailed explanation of each status option:

  

-   **Paid:** Triggers the workflow when an invoice is fully paid. This is useful for sending thank-you emails, updating CRM records, or notifying the finance team about completed payments.  
      
    
-   **Partially Paid:** Triggers the workflow when a partial payment is made on an invoice. This is helpful for businesses that allow installment payments and want to track partial settlements.  
      
    
-   **Sent:** Activates the workflow when an invoice is sent to a customer. This is useful for automating reminders, ensuring timely follow-ups, or logging the sent status in the CRM.  
      
    
-   **Viewed:** Triggers the workflow when the customer views the invoice. This is useful for tracking customer engagement and planning timely follow-ups.  
      
    
-   **Void:** Activates the workflow when an invoice is voided. This is particularly helpful for maintaining accurate financial records and ensuring no further reminders or actions are taken on canceled invoices.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039727676/original/dqmg9wj1OY794z7JJaguBfgWeKaB1q1-8g.png?1736769031)

* * *

#### **Additional Filters**

  
**Tag (formerly “Has Tag”)**  
  
In addition to Invoice Status, you can refine the trigger using Tag filters and Custom Fields. In addition to the Invoice Status Filter, you can further refine your workflows using **“Tag”** filter and Custom Fields. These filters allow you to create more precise automation by narrowing down the trigger conditions based on specific criteria.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763526/original/H5KCBEBBtKfkW8ysdqTihS5LaYnr-fwQhw.png?1772101155)

  

**Custom Fields** 

  

The Custom Fields option allow you to trigger workflows based on unique data points stored in custom fields. This is especially useful for businesses with specific invoicing requirements, such as differentiating between payment terms or customer types.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763640/original/QZOtxDK0buj1wvbz8Du44XVDMmSGgJ94LA.png?1772101196)

* * *

### **Configure Workflow Actions**

  

Add actions that should be triggered when the workflow is activated. Common actions include:

-   Sending an email or SMS notification.
-   Updating CRM fields.
-   Assigning follow-up tasks.

  
**Save and Activate**

  

Once all steps are configured, **"Save"** the workflow and activate it to start automating your invoice processes.

* * *

## **Frequently Asked Questions**

  

**Q. Can I set up different actions for different invoice statuses?**

Yes, you can configure separate workflows for various statuses like Sent, Paid, Partially Paid, and Overdue. This allows you to tailor specific actions for each status.

  

  

**Q. How can I prevent duplicate reminders from being sent after payment?**

To avoid duplicate reminders, set up a secondary workflow triggered by the **“Paid”** status. This workflow should include an action to remove the contact from the initial reminder workflow.

  

  

**Q. Can I add multiple filters to a single trigger?**

Yes, you can add multiple filters, such as invoice status, tags, or custom fields, to refine the trigger conditions further.

  

  

**Q. Is it possible to notify different teams based on the invoice amount?**

Absolutely. By using filters and conditions, you can create workflows that send notifications to specific teams based on criteria like invoice amount or customer type.

  

  

**Q. How do I ensure that the workflow doesn’t send unnecessary reminders after the payment is made?**

Enable the **“Stop on Response”** option in the settings. This ensures that once the payment is made, the contact is removed from the workflow, preventing unnecessary follow-ups.