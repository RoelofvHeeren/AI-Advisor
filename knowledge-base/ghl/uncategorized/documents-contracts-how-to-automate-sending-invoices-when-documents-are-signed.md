---
title: "Documents & Contracts: How to automate sending invoices when documents are signed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004504-documents-contracts-how-to-automate-sending-invoices-when-documents-are-signed"
category: "Uncategorized"
---

# Documents & Contracts: How to automate sending invoices when documents are signed

## What's New?

We are excited to introduce **Recurring Invoice Generation** integrated directly into our 2-in-1 Documents & Contracts feature. This enhancement allows users to automate the creation and management of recurring invoices seamlessly at the time of document signing. Key updates include:

-   **Automated Settings Drawer:** When adding a product list to a new template or document, clicking the product list automatically opens the settings drawer for easy configuration.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192610/original/m32qF971fhQ6W0aWKAm1haQRa96V4I8eJw.png?1737463687)
-   **Automatic Recurring Type Assignment:** Adding a recurring product changes its type to recurring automatically.
-   **Price Type Tags:** Visual tags indicate whether a product is one-time or recurring, helping users differentiate between pricing types.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192575/original/BvTl1r-opmC8DgoyB8z7wzUbyuTU5E24HQ.png?1737463645)
-   **Flexible Invoice Scheduling:** Users can now choose to generate invoices immediately upon signing or based on a fixed schedule relative to the signing date.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192590/original/PphDdpE_JVjTz8UCOdPTjOjDc__V-bCtcA.png?1737463657)

  

## How to Use

### For Templates

1.  **Create a New Template:**
    
    -   Navigate to **Payments** > **Documents & Contracts** > **Templates** > **New Template**.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192695/original/_2f8RiHPRq3Ck-IfTr1HmJdOpvMFgpdAOQ.png?1737463746)
2.  **Add a Product List and Signature:**
    
    -   Add a product list to your template.
    -   Insert a signature element where required.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192790/original/18VAl-uoP2MKbCWRUUOqI6zYkIFvSCQ4Bg.png?1737463789)
3.  **Configure Recurring Products:**
    
    -   Add a recurring product to the product list.
    -   The settings drawer will automatically open for configuration.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192818/original/XWkZ94CHm5lsYqgW7teiPASepCzdpa3rMA.png?1737463823)  
          
        
4.  **Distinguish Product Types:**
    
    -   The product list will display distinctions between one-time and recurring products.
    -   **Note:**
        -   **One-Time Products:** Always treated as one-time payments.
        -   **Recurring Products with Setup Fee:** Displayed as two line items—one for the recurring payment and another for the one-time setup fee.
        -   Only recurring products will be billed in subsequent invoices sent

### Configuring Recurring Invoice settings within the product list

1.  **Generate Invoice at Signing:**
    
    -   **Toggle On:**Creates a recurring invoice schedule with the first invoice generated at the time of signing. Subsequent invoices follow the defined frequency (e.g., monthly).
        -   _Example:_ If a document is signed on January 25th with a monthly schedule, the next invoice is sent on February 25th.
    -   **Toggle Off:** Allows users to set a specific date for the invoice to be sent, regardless of the signing date.
2.  **Enable Direct Payment:**
    
    -   **Toggle On:** Redirects the primary signer directly to the invoice page after signing and sends an email with the invoice.
    -   **Toggle Off:** The invoice is saved as a draft and can be sent manually later.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192852/original/53u9d00rt6mIJJRGbNWgOoALYyEREYHhfA.png?1737463853)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192883/original/9VWaDF-ImEVjKlK_pm_qLC-ASsWa7Mxllg.png?1737463880)

###   
Workflow Configuration

1.  **Save the Template:**
    
    -   After configuring, save your template.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192893/original/-3UIQsdRELaPte1YEzcXcntWdBZGqKdhxg.png?1737463897)
2.  **Configure Workflow:**
    
    -   Go to **Workflows** and set up a new workflow using the saved template.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192926/original/trhoweVKEWsarS92L9_mLcX6oECFxCQrFg.png?1737463916)
3.  **Send and Complete:**
    
    -   Once the workflow is triggered, the signer receives the document with the attached invoice.
    -   After signing, the primary signer is redirected to the invoice for immediate payment. An email with the invoice is also sent as a backup.  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192963/original/-5DIX_m1N7lwK76TblG97tZr_a23Zw9K3Q.png?1737463928)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192971/original/1VXEFDVxboVsHLyRxvqLUGI9qf5ZIczQNQ.png?1737463939)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192978/original/62cCnKuHvRplJjDhOVXsERda4Hl4lYskiQ.png?1737463953)  
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040193092/original/Dq1GC8aTbjw7fxaRsQaIYV35IbibaoibJQ.png?1737464042)
4.  **Track Payments:**
    
    -   Monitor payments through the **Documents** section or the **Invoices** section.

  

**FAQs**

### **\- I had a payment schedule in my document, but the invoice was not generated**

This usually happens when one of the payment schedule dates goes **past** the invoice due date. This often occurs if the first payment was set using a **Custom date**. To avoid this, set the first payment to **“Upon primary signature”** so the schedule aligns correctly and the invoice can be generated.