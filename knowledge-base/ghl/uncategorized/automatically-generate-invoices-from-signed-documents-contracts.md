---
title: "Automatically Generate Invoices from Signed Documents & Contracts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004063-automatically-generate-invoices-from-signed-documents-contracts"
category: "Uncategorized"
---

# Automatically Generate Invoices from Signed Documents & Contracts

[](https://ideas.gohighlevel.com/changelog/2-in-1-documents-direct-invoice-payments-after-signing)

  

# **How to get a Document signed and collect payment immediately?**

  

Make it easy for clients to **sign a document and pay in one flow**.  

  

1\. Add a product list -> Enable Direct Payments -> Send the document -> User signs and gets redirected to invoice immediately

* * *

## **Send from a New Document** 

1.  Go to **Payments › Documents & Contracts › New Document**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051365192/original/Vc1wvMN6oETE-ZfL0WmBUl5YOBBL-lyvyw.png?1754927243)  
    
2.  Add a the **Primary signer**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366150/original/yOa2RSTtVxoTgsulKr-slgKZelwoZszJ2g.png?1754927718)  
    
3.  **Add Product List**. Item types determine whether the list is **One‑time** or **Recurring**; **tags** appear automatically.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366166/original/JCxJUNJo-GPfNfUveyySJsp7N7q-NHoV3A.png?1754927734)  
    
    1.  If a One time product is added - The invoice type is set to One time.  
          
        \- You can select a product and change it to an optional item and make its quantities editable if needed from the properties section in the right.  
          
        \- From the Payments section in the left side - you can set the configurations as per your need.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366432/original/bhM_qquIzDeGHIaeNvYDXLWPjyCP0u23cQ.png?1754927827)
        
          
        
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366606/original/jTxRkj0ltdrXRljZlzTpKmYOovynXZ20xA.png?1754927890)  
          
        
    2.  If one or more recurring product is added in the product list -> the invoice type changes to Recurring. One document can only have one recurring frequency which can be chosen from the Invoice frequency settings in the left.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366786/original/3I3qx7U4b4K_DFgdFusKaZgxiZVMbtJN8A.png?1754928032)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366803/original/kYuN_Ssu2furPuvhpj6ug9l1pn1EcDxEtw.png?1754928047)  
        
4.  Pick configurations you need (see quick callouts; full details in **Configurations** below):  
      
    
    -   **Direct Payment — ON:** Redirect primary signer to pay **after signing** if an invoice exists at signing.  
          
        
    -   **Send Invoice — ON:** Email the invoice when it’s generated (at signing or on the schedule).  
          
        
    -   **Auto‑Payment — ON:** Autocharge future recurring invoices.  
          
        
    -   **Test vs. live payments are controlled by your payment setup (not a Documents & Contracts template setting)**.  
          
        
5.  **Send** the document.  
      
    
6.  **What happens at signing**  
      
    
    -   **One‑time:** Primary signer is **redirected to invoice** to pay immediately.  
          
        
    -   **Recurring (start = at signing):** Primary signer is **redirected** to pay the first invoice immediately.  
          
        
    -   **Recurring (start = later):** No redirect at signing; first invoice is created/sent on the schedule.  
          
        
    -   Only the **primary signer** is redirected. Others just sign. An invoice email is also sent when enabled.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377741/original/FhMDhzp-cjaHCYGpgeMe2J7kWShDM-7Kfw.png?1754936621)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377746/original/DMsUuq7mMmekdg22i3kkmQ0eY48hKef_cg.png?1754936635)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377750/original/sB6OGo-MXbkH1NKMODO-DsO_q2rRCSntPQ.png?1754936646)
        

* * *

## **Configurations** 

###   
**Direct Payment**  

-   **ON:** If an invoice exists at signing, the **primary signer** is redirected to the invoice page immediately after signing; invoice email also goes out.  
      
    
-   **OFF:** No redirect; payer uses the emailed invoice (or you send it later from drafts).
    

###   
**Send Invoice**  
  

-   **ON:** Automatically emails the invoice when generated (at signing or on schedule).  
      
    
-   **OFF:** Keeps the invoice as **draft** so you can review and send manually.
    

###   

### **Auto‑Payment**  

-   **ON:** Saves card (supported gateways) and **autocharges** subsequent invoices in the recurring schedule or ones with payment schedules.  
      
    
-   **OFF:** Payer pays each issued invoice manually.
    

> Auto‑Payment affects **recurring** schedules. One‑time is paid during the immediate checkout.

###   
**Live Mode (true/false)**  

-   Documents & Contracts templates do not include a Live Mode toggle. If you need to test, use a payment experience that supports Test/Live mode (for example, invoices or payment links) or your gateway’s test configuration.”
    

  

* * *

  

## **How to Automate 2 in 1 Documents: Save as a Template & Automate with Send Documents & Contracts Action**  

1.  Go to **Payments › Documents & Contracts › Templates › New Template**.  
      
    
2.  Insert **Signature** fields and **Add Product List** (types + tags auto).  
      
    
3.  For recurring, choose **when** the schedule starts: **at signing** or on a **future date/day**.  
      
    
4.  Configure **Direct Payment**, **Send Invoice**, and **Auto-Payment** as needed.  
      
    
5.  **Save** the template.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377851/original/8YcFgpdyieAbTCU_6H9pvaF3n-Ltf8qtmA.jpeg?1754936733)  
    
6.  Open **Workflows** → add **Action: Send Documents & Contracts** → select your template. Once the workflow is triggered, the signer receives the document. Once Primary user signs the document -> they are redirected to the invoice if direct payments were enabled.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377889/original/d5kwC0KoHoruWVoaZv12ywCt9yS0UcPzIQ.jpeg?1754936745)
    
      
    
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377931/original/IfaA7MfDcYDTmeQN6G5ejMZOkqkCUNNXVg.jpeg?1754936845)  
      
    
7.  **What happens at signing** (same rules):  
      
    
    -   One‑time or Recurring (start = at signing) → **redirect** primary signer to pay.  
          
        
    -   Recurring (start = later) → **no redirect**; first invoice arrives per schedule.
        

* * *

## **Tracking**  

-   **Payments › Documents & Contracts:** Document + signing + payment status in one place.  
      
    
-   **Payments › Invoices:** Each invoice record and payment status (including recurring schedule progress and auto‑payment results).
    

* * *

  

## **Tips & Edge Cases**  

-   **Weekly example:** If the schedule is **every Thursday** and signing completes on Thursday, the first invoice is generated **immediately** → redirect applies. Otherwise, the first invoice is sent on the **next Thursday**.  
      
    
-   **Multiple recipients:** Only the **primary signer** is redirected to pay.  
      
    
-   **Setup fees:** Show as a **one‑time** line on the first invoice; only the recurring line continues.  
      
    
-   **Mixing items:** One‑time items bill on the first invoice; recurring items follow the schedule.
    

* * *

## **Frequently Asked Questions**  

1.  **Why didn’t my client get redirected after signing?**  
    Either **Direct Payment** is OFF, or there wasn’t an invoice **at signing** (e.g., recurring starts later). Enable Direct Payment and, for recurring, set start = **at signing**.  
      
    
2.  **Where do I track progress?**  
    In **Documents & Contracts** (document-level status) and **Invoices** (invoice/payment status, schedules, auto‑payment results).  
      
    
3.  **Can I mix one‑time and recurring items?**  
    Yes. The product list tags show types. One‑time bills first; recurring continues as per the schedule.  
      
    
4.  **I had a payment schedule in my document, but the invoice was not generated**
    
    This usually happens when one of the payment schedule dates goes past the invoice due date. This often occurs if the first payment was set using a Custom date. To avoid this, set the first payment to “Upon primary signature” so the schedule aligns correctly and the invoice can be generated.  
      
    
5.  **Can I send invoices in “test mode” from a Documents & Contracts template?**  
    Documents & Contracts templates don’t include a “Live Mode” toggle. To run test payments, use a payment flow that supports **Test/Live mode** (such as Payment Links or invoice sending options) or your gateway’s test configuration.