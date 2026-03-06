---
title: "Configure your Stripe account for Nacha compliance"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007398-configure-your-stripe-account-for-nacha-compliance"
category: "Uncategorized"
---

# Configure your Stripe account for Nacha compliance

### **Overview**

Stripe is tightening requirements for ACH Direct Debit to align with Nacha operating rules. If you accept US bank account payments through HighLevel using Stripe, you may need to update your Stripe account details so customers can clearly identify your business on bank statements and have a way to contact you. ([Stripe](https://stripe.com/gb/resources/more/nacha-rules-explained "Nacha Rules and Compliance: A Guide for Businesses - Stripe")) \[[Nacha compliance](https://support.stripe.com/questions/configure-your-account-for-nacha-compliance)\]  
  
_**NOTE - effective 20 March 2026**_  
  
**Who needs to take action?**

1.  You have a Stripe account connected to HighLevel and accept ACH Direct Debit or plan to accept US bank account payments
    
2.  Your subaccount/client who has a Stripe account connected to HighLevel and accepts ACH Direct Debit or plan to accept US bank account payments
    

###   

### **What you need to do in Stripe**

You must choose how Stripe should classify your bank payment transactions. Stripe provides three options:

1.  Automatically classify transactions  
    Stripe determines whether each transaction represents a purchase of goods based on available signals such as merchant information and transaction details. This works for most businesses and requires no code changes.
    
2.  Classify all ACH transactions as goods  
    Choose this if you exclusively sell physical or digital products. All ACH transactions are classified as purchases of goods.
    
3.  Do not classify any transactions as goods  
    Choose this if you provide services, accept donations, or collect bill payments rather than selling goods.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543710/original/P7nTO5m7e6C8uPSkMaZ2eVwNSBJ6_kKY-g.png?1771909883)

###   

### **Configure transaction classification in Stripe**

1.  Open your Stripe Dashboard 
    
2.  Go to Settings, then Payment, then look for Link  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543867/original/5AQRago7_AZme6oKFt1l-YMqt_Toe43kQQ.png?1771910281)  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543874/original/arW0y6_1iBXVm_NADOfhFRFeetfaU2fMQA.png?1771910307)  
    
3.  Locate the Nacha compliance section  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543918/original/12x260ybt1sQkCQGuYdU5-2nHvATc9c-ww.png?1771910380)  
    
4.  Select one of the three classification options
    
5.  Save your changes
    

###   
**FAQ**

####   
**Does HighLevel make these updates for me**

No. These are settings on your Stripe account, so you must update them in Stripe Dashboard.

####   
**What should I use as my statement descriptor**

Use a name customers will recognize as your business, since that is what appears on bank statements for ACH Direct Debit. ([Stripe Docs](https://docs.stripe.com/payments/ach-direct-debit?utm_source=chatgpt.com "ACH Direct Debit | Stripe Documentation"))