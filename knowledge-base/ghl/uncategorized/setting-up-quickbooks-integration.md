---
title: "Setting up QuickBooks Integration"
url: "https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration"
category: "Uncategorized"
---

# Setting up QuickBooks Integration

### 

Learn how to use the 2-way integration between HighLevel and QuickBooks. 

* * *

**TABLE OF CONTENTS**

-   [More Tutorials From the Community](#More-Tutorials-From-the-Community)
    
-   [What does the QuickBooks integration do?](#What-does-the-QuickBooks-integration-do?)
    -   [HighLevel -> QuickBooks](#HighLevel--%3E-QuickBooks)
    -   [QuickBooks -> HighLevel](#QuickBooks--%3E-HighLevel)
-   [Integrate QuickBooks](#Integrate-QuickBooks)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

  

## 

  

**More Tutorials From the Community**

[https://www.youtube.com/watch?v=\_\_c0gDVBLs0](https://www.youtube.com/watch?v=__c0gDVBLs0)

[https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be](https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be)

[https://www.youtube.com/watch?v=QKgJcLx5Q-A](https://www.youtube.com/watch?v=QKgJcLx5Q-A)

[https://www.youtube.com/watch?v=d1eLzPdUlYo](https://www.youtube.com/watch?v=d1eLzPdUlYo)

##   

* * *

## **What does the QuickBooks integration do?**

  

### **HighLevel -> QuickBooks**

-   Create customers in QB if they have activity in HL.  
      
    
-   When a payment is made inside HL (order form, subscriptions, membership checkouts, calendar payments), register sales receipts in QB (matches on contact email).  
      
    
-   When an invoice is marked as sent in HL, create an invoice in QB, also continue to sync updates from HL to QB
    -   Invoice Number
    -   Status (paid, voided, etc)
    -   Issue Date
    -   Due date
    -   Contact (created in QBO if it's not already there)
    -   Billing Email
    -   Invoice Total Value
    -   Invoice Amount Paid
    -   Line item name
    -   Discount and Taxes are adjusted against item price if its a US subaccount. For rest of regions, the get synced too.  
          
        
-   WILL NOT sync existing invoices, only new invoices created after the integration.

  

### **QuickBooks -> HighLevel**

-   Brings existing contacts from QB to HL and continues to sync new contacts from QB to HL (can take up to 5 min).  
      
    
-   When QB shows a contact's 1st invoice paid in full (balance = $0), Send Review Request from HL ([this can be turned on/off on the integration card](https://help.gohighlevel.com/en/support/solutions/articles/155000004140)).  
      
    
-   Import old invoices from QB to HL (if enabled during the initial connection). NOTE that changes made to those invoices in HL will NOT sync back into QB, also this WILL NOT create a loop where invoices imported from HL to QB get reimported back from QB to HL. No worries!

* * *

## **Integrate QuickBooks**

  

Navigate into your **settings > integrations >** Click on the **"QB Connect"** button > **Toggle** Import invoices to import previously created invoices -> Enable review automation if needed -> Connect & Login with your Quickbooks credentials. Make sure to accept all permissions.

  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205794/original/t-NSCN24iTBAxJtKp7bdSiPhYPuTGz2IUw.png?1740486845)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205847/original/kgVEp9J2EMkYJdBXGUnpPBrxCEzQbg4j0w.png?1740486899)  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205863/original/69qmHXoZhm-QwkeZEWRWXswkurKTYuoI5w.png?1740486917)**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246309641/original/infKtXR42wNzjuuWi9H6fKN-cv9wk2pqEw.gif?1660914333)

  

  

### [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053002807/original/5gWi-uatnXtrTwN_fTNrkaY3qZdIFwiSfA.png?1596831109)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48051767771/original/AjUCbIiZ8jyTm8yzWMSAh4PuJo6LzEPgnA.png?1596153551)

* * *

## **Frequently Asked Questions**

  

****Q: What does the QuickBooks integration do?**  
**

The integration syncs all existing and new contacts created in QuickBooks into your CRM. It automatically sends a review request when a contact's first invoice is fully paid in QuickBooks (optional and can be toggled off). It registers sales receipts in QuickBooks for payments made in your CRM (e.g., order forms, subscriptions, membership checkouts, and calendar payments). Additionally, it creates and updates invoices in QuickBooks whenever an invoice is sent or updated in your CRM, ensuring seamless synchronization.

  

****Q: Will the integration sync existing QuickBooks invoices to my CRM?**  
**

Yes—if you enable the “Import Invoices” toggle during the initial connection, all previously created QuickBooks invoices will be imported into your CRM. Please note: Any changes made to these imported invoices from Quickbooks within your CRM do not sync back to QuickBooks and vice versa.  
If you do not enable it, the system only syncs new invoices created in your CRM to Quickbooks after the integration.

  

****Q: How does the integration handle customers that already exist in QuickBooks?**  
**

If a customer already exists in QuickBooks with the same email address as used in the transaction, the integration updates the existing customer’s record. For sales receipts, it associates the transaction with the corresponding customer. If no matching email exists, a new customer record will be created in QuickBooks.

  

****Q: Are taxes and discounts included in synced invoices?**  
**

Yes, the integration ensures that all synced invoices include total amounts, taxes, and discounts, providing seamless accounting synchronization.

  

Q: Why isn’t my GoHighLevel invoice syncing to QuickBooks? Invoices created in GoHighLevel will not sync to QuickBooks while they are in Draft status. Only Sent, Pending, or Paid invoices are pushed to QuickBooks.

Key Points to Check:

-   Draft invoices do not sync. You must send the invoice for it to appear in QuickBooks.
    
-   Customers must exist in both systems. If the contact does not already exist in QuickBooks, you may need to create them there first.
    
-   Estimates don’t auto-create customers in QuickBooks. Accepting an estimate in GoHighLevel does not automatically sync the customer to QuickBooks.
    

Fix:

1.  Open the invoice in GoHighLevel.
    
2.  Click Send (do not leave it as Draft).
    
3.  Confirm the customer exists in QuickBooks.
    
4.  Once sent, the invoice should sync automatically.
    

If it still doesn’t appear after these steps, recheck the QuickBooks integration connection.