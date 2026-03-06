---
title: "Xero Integration with HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006078-xero-integration-with-highlevel"
category: "Uncategorized"
---

# Xero Integration with HighLevel

This article explains the Payments - Xero Integration feature that streamlines financial workflows by automatically syncing contacts and invoices between HighLevel and Xero. With real-time updates and accurate tax mapping, this integration reduces manual work while ensuring data consistency across your systems.

* * *

**TABLE OF CONTENTS**

-   [Xero Integration with HighLevel](#Xero-Integration-with-HighLevel)
-   [Key Benefits of Payments - Xero Integration](#Key-Benefits-of-Payments---Xero-Integration)
-   [How to Set Up Xero Integration](#How-to-Set-Up-Xero-Integration)
-   [How it works](#How-it-works)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **Xero Integration with HighLevel**

  

The Xero integration lets you one‑way sync invoices from GHL to Xero. Contacts are first imported from Xero into GHL, so invoices created in GHL can map to the correct Xero contact when they’re synced. If a matching contact isn’t found, a new contact is created in Xero during the invoice sync.  
  

**What syncs today**

  

-   **Contacts:** Imported from Xero → GHL for mapping; new Xero contact is created on invoice sync if no match exists.  
      
    
-   **Invoices:** Any invoice created in GHL gets created in Xero automatically. Line items and discounts are included in the invoice created. **Products/Items are not created** in Xero; line items stay on the invoice only.  
      
    
-   **Taxes:** If the mapped tax already exists in Xero, it’s applied; if not, a **new tax rate is created and sent** with the invoice.  
      
    
-   **Currencies:** The invoice currency is passed to Xero; **new currencies are added to the org if they don’t already exist**. (Ensure your Xero plan supports multi‑currency.)  
      
    
-   **Status:** As and when the status of the Invoice changes -> the statuses are synced into Xero. Eg: Sent, Partially Paid, Void.  
      
      
    

**What does not sync**

-   **Receipts:** Receipt syncing is not included in this integration. It will be available soon.
    

  

### **Flow Diagram**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052075397/original/JBkgecCQkPnRuEeHkRTHVxGZqjTegX8jyw.png?1755774291)

* * *

## **Key Benefits of Payments - Xero Integration**

  

Leveraging this integration empowers you to enhance efficiency and accuracy across your financial operations. Key benefits include:

  

-   Automatically syncing new or updated contacts to maintain accurate records.  
      
    
-   Instantly transferring invoices from HighLevel to Xero with up-to-date payment statuses and tax details.  
      
    
-   Ensuring compliance through precise tax mapping, even with multi-component tax structures.  
      
    
-   Filtering accounts to display only those with payments enabled, keeping data relevant and organized.

* * *

## **How to Set Up Xero Integration**

  

Connecting your HighLevel sub-account to Xero is straightforward and ensures that all financial data flows seamlessly between platforms. Follow these steps to set up the integration:

  

  

### **Step 1:** Navigate to Xero under Integrations

In the left navigation, click **Settings → Integrations → Xero.**

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052070129/original/uzX2jg7WfM2yiVPnqkjVRQoGzHr2W1LUTQ.png?1755771800)

  

  

### **Step 2:** Choose Xero

In the Integrations list, click the Xero tile, then select Connect. This opens a secure Xero window for authorization.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907154/original/GBLAjHNNQejAbp4YrY-Jv0nGdybkIU65Xg.png?1761568772)

  

  

### **Step 3:** Sign in & Authorize

Sign in to Xero (if prompted), select the Xero organization you want to connect, and click Allow access. (GHL requests standard scopes to read contacts/settings and create invoicing transactions.)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907424/original/8VgcvzeiTBD-50UXRDzPwJg_wVeCAgjqQw.png?1761568913)

  

  

**Tip**: Once connected, confirm the connection in GHL  
Back in GHL, you’ll see the connected organization name and connection status in Integrations → Xero.
[](https://drive.google.com/open?id=1q1J8J1wB0FBAXdRxwZNYOIOhAc6UARFO)

  

  

### **Step 4:** Choose a default account for invoices

  
In the Xero settings pane inside GHL, select the account and organization you want to use when posting invoices to.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907699/original/NLtmmZwE-jGy0o-SBZJ8xhQgIb4Ll05NMQ.png?1761569114)

* * *

### How to view all "Chart of Accounts" in Xero Integration?

  

If you are unable to view your Chart of Accounts in your CRM after connecting with Xero, follow the steps below to enable it.

  

### **Step 1:** Go to Settings in Xero

From your Xero dashboard, select your organization. Click Settings from the dropdown menu.

  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650525/original/V5GhObE_hP5_jtSQfOGHz_Df4wQG6oq4kA.jpeg?1756455179)_

##   

### **Step 2:** Open Advanced Settings

In Organization settings, scroll down and click Looking for advanced settings?

  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650526/original/MhNDbxF8re4TyogB_DPkIF42Qmp7uGR6Vw.jpeg?1756455179)_

###   

### **Step 3:** Access Chart of Accounts

Under **Advanced Accounting**, click **Chart of accounts**.

  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650522/original/2UkCixPoVD7z-HbBP0KYMuNZaXTkh4uZHg.jpeg?1756455177)_

###   

### **Step 4:** Select the Relevant Account

From the list of accounts, choose the account you want to connect (e.g., Prepayments). Click to edit the details of this account.

  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650524/original/GIwnfvHXPPSP2RiQqNVc7zkEJj9MiX0REw.png?1756455179)_

###   

### **Step 5:** Enable Payments for the Account

In the edit popup:

-   Tick ✅ **Enable payments to this account**.
    
-   Click **Save**.
    

  

__![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056908925/original/Z6KxVG9-8cbq0f2T_cStKfqrLuBhjnEQmA.png?1761569654)_  
_

  

### **Step 6:** Connect to CRM

Go back to your CRM Xero integration. Under **Connected Account**, select the account you just enabled (e.g., _Prepayments_).  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650515/original/l3sp-IJO5kkUzVlecULoxkFCCguDQTI-yw.jpeg?1756455174)

  

  

Once done, your Chart of Accounts will now be visible and ready to use in your CRM.

* * *

## **How it works**

  

### **1\. Contacts import (Xero → GHL)**

  

-   On connection, GHL imports **active Xero contacts** (core profile details) so your upcoming invoices map to the right contact.  
      
    
-   If you later sync an invoice and **no imported contact matches**, GHL will **create the contact in Xero automatically** during the invoice sync.
    

  

### **2\. Invoice sync (GHL → Xero)**

  
When you create/send an invoice in GHL and choose Sync to Xero, GHL posts an invoice to your connected Xero org that includes:

  

1.  **Contact:** The imported/matched Xero contact, or a **new Xero contact** is created if none exists.  
      
    
2.  **Line items:** Names, quantities, amounts, and **discounts** are sent on the invoice. **Products/Items are not created** in Xero.  
      
    
3.  **Taxes:**
    
    -   If a **mapped tax** already exists in Xero, that **existing tax rate** is applied.  
          
        
    -   If not, GHL **creates the tax rate** on the fly and uses it for the invoice.  
          
        
4.  **Currencies:**
    
    -   The invoice currency is passed to Xero.  
          
        
    -   If that currency **isn’t enabled**, GHL **adds/enables it** in your Xero org before posting the invoice. _(Ensure your Xero plan supports multi‑currency.)_
        

  

### **3\. What’s intentionally out of scope**

  

-   **No receipt syncing:** Receipt/expense entries (or receipt PDFs) are not synced by this integration.  
      
    
-   **No item catalog sync:** GHL does not create or manage **Products/Items** in Xero; line items stay embedded in the invoice.
    

  

### **4\. Disconnections**

###   
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052070896/original/e32i-hdj1zBlLo94muGsFohu90_8DE5PGg.png?1755772154)**

  

**Best practice:** If you use accounting‑specific tracking categories or bespoke revenue accounts in Xero, set the **default account mapping** in GHL’s Xero settings carefully, and avoid mapping **Bank** accounts to line items to prevent Xero validation errors.

* * *

## **Frequently Asked Questions**

  

**Q. Is this a one‑way or two‑way sync?**  
**One‑way.** Contacts import from Xero to GHL for mapping, and **invoices sync from GHL to Xero**.

  

  

**Q. Will GHL create new contacts in Xero?**  
Yes—if the invoice’s customer doesn’t match any imported contact, **GHL will create the contact in Xero** at sync time.

  

  

**Q. Do products/items get created in Xero?**  
No. **Line items** are posted on the invoice only; **Products/Items are not created** or maintained in Xero.

  

  

**Q. How are taxes handled?**  
If the mapped tax rate already exists in Xero, it’s used. If it doesn’t exist, **GHL creates the tax rate** and applies it to the invoice.

  

  

**Q. How are currencies handled?**  
GHL passes the invoice currency to Xero and **adds it to the org if it isn’t already enabled**. Make sure your Xero org supports multi‑currency.

  

  

**Q. Are receipts synced?**  
No. **Receipt syncing is not included** in this integration.

  

  

**Q. Can I connect multiple Xero organizations to one GHL account?**  
Not in this version. **One GHL account/instance connects to one Xero organization** at a time. Agencies/whitelabels can connect each sub‑account to its own Xero org separately.

  

  

**Q. Where do I manage the connection?**  
Go to **Settings → Integrations → Xero** in GHL to view the **connected organization name**, check status, and **disconnect/reconnect** as needed.

  

  

**Q. I received “Organisation is not subscribed to currency XXX.” What should I do?**  
This occurs when the invoice currency isn’t enabled in your Xero org. Enable multi‑currency in Xero and retry, or ensure your org allows that currency; GHL will pass and create currencies as part of sync once available.

  

  

**Q. I disconnected—how do I reconnect?**  
Return to **Settings → Integrations → Xero** and click **Connect** to authenticate again and select your organization.

  

Q. Will invoices created before connecting Xero sync automatically?  
No. Typically, only invoices created after the Xero integration will sync automatically.