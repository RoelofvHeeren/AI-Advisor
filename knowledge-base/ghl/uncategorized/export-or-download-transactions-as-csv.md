---
title: "Export or Download Transactions as CSV"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007157-export-or-download-transactions-as-csv"
category: "Uncategorized"
---

# Export or Download Transactions as CSV

This document explains how to export transaction records, how the export file is delivered, and how to interpret the CSV format — including multiple line items per transaction.

* * *

## **Overview**

  
The **Transactions CSV Export** allows you to download detailed payment records for reporting, reconciliation, accounting, and compliance purposes.

  
Exports include:  
  

-   All transactions **or**  
    
-   Only transactions based on applied **filters or search**
    

  
Exports are delivered via **email download link** and can be opened in any spreadsheet tool.

  

* * *

**TABLE OF CONTENTS**  

-   [Overview](#Overview)
-   [How to Export Transactions](#How-to-Export-Transactions%E2%80%8B)[](#Email-Delivery-Behavior%E2%80%8B)
-   [Email Delivery Behavior](#Email-Delivery-Behavior%E2%80%8B)[](#CSV-Structure-&-Formatting-Rules)
-   [CSV Structure & Formatting Rules](#CSV-Structure-&-Formatting-Rules)[](#Data-Consistency-Guarantees-\(Exports-Upgrade\))
-   [Data Consistency Guarantees (Exports Upgrade)](#Data-Consistency-Guarantees-\(Exports-Upgrade\))[](#Column-Reference-Guide-\(with-examples\)%E2%80%8B)
-   [Column Reference Guide (with examples)](#Column-Reference-Guide-\(with-examples\)%E2%80%8B)[](#Special-Formatting-Notes%E2%80%8B)
-   [Special Formatting Notes](#Special-Formatting-Notes%E2%80%8B)[](#FAQs)
-   [FAQs](#FAQs)

* * *

## **How to Export Transactions**  

1.  Go to **Payments → Transactions**  
    
2.  Apply filters/search if needed  
    _(e.g., date range, payment status, source type)_  
    
3.  Click **Download** Icon  
      
    
4.  A secure download link will be emailed to the logged-in user  
      
    

> **Security Note:** The email link is valid for 7 days and is unique to the requesting user.

* * *

## **Email Delivery Behavior**  

-   Export link arrives within minutes  
      
    
-   File is downloaded **via the emailed link**, not directly in-app  
      
    
-   If the link expires → simply generate a new export
    

* * *

## **CSV Structure & Formatting Rules**

  
Each **row may not always equal one transaction**.

  
A single transaction can include multiple:  
  

-   Products → creates **multiple line rows**  
    
-   Taxes → creates **one row per unique tax name per product**  
    
-   Miscellaneous charges (processing charges, late fees, tips)
    

  
This ensures each financial component is separately identifiable. To ensure clarity, if the same transaction has multiple rows, not all columns are populated in each row, mostly unique product or tax related data is populated in each row and full data is available only on 1 row per transaction.

* * *

  

## **Data Consistency Guarantees (Exports Upgrade)**

These exports are designed for reconciliation, accounting, and BI workflows with stable formatting and predictable values.

**0 vs Blank Values**  
  

-   **0** appears only when the field applies and the value is truly zero.  
      
    
-   **Blank** appears only when the field does not apply to that row/record.

**Stable Structure For Reporting**  
  

-   Column ordering is consistent to support pivots, imports, and BI pipelines.  
      
    
-   Multi-row formatting is intentional for product-level and tax-level allocation (do not assume “one row = one transaction”). 

* * *

## **Column Reference Guide (with examples)**  
  

| Column name | Description | Example |
| --- | --- | --- |
| Internal transaction id | Unique transaction identifier inside HighLevel | `69369a9968f735180bfeb6ed` |
| Location id | Sub-account identifier | `NyGCsdhgRZ8Ffa8Ssagfhd` |
| Customer id | GHL Customer identifier | `jbtyjkzMjvd8cLi9HUC` |
| Customer name | Display name from transaction | `Alex Ray` |
| Customer email | Email used for receipt delivery | `alex@example.com` |
| Customer phone | Phone number used at checkout | `+1 555-012-2345` |
| Payment method | Method used for payment | `Credit Card, Cash, Instant Transfer` |
| Currency | Currency of transaction | `USD` |
| Sub total | Product total before discounts and exclusive taxes | `100.00` |
| Discount | Total discounts applied on the subtotal | `-15.00` |
| Total tax amount (excluded in prices) | Tax added on top of subtotal after subtracting discounts | `8.40` |
| Total tax amount (included in prices) | Tax included within product prices i.e. already part of the subtotal | `0.00` |
| Tip amount | Tip added voluntarily by customer; not included in the amount due | `5.00` |
| Late fees | Late fee added beyond product price | `10.00` |
| Total amount due | Original total for order/invoice (Includes subtotal, discount, taxes, late fees);  
Doesn't consider partial payments and always shows the initial order or invoice amount due | `103.40` |
| Total amount paid | Actual amount paid in this transaction (Includes amount due plus any tips and processing charges) | `110.40` |
| Coupon code | Applied coupon, if any | `WELCOME15` |
| Status | Status of transaction | `Success`, `Refunded` |
| Live mode | Whether it occurred in Live mode or Test mode (No) | `Yes` |
| Source type | Checkout where purchase occurred | `Invoice`, `Funnel Page`, `Form` |
| Source id | Internal ID of the source entity i.e. checkout | `inv_8281` |
| Source name | Display name of source as defined by the business | `Q4 Billing Invoice` |
| Internal order id | Order reference within GHL (if applicable) | `jfnkwbgfwbegiu234` |
| Payment provider | The gateway used for executing the transaction | `Stripe`, `NMI`, `Authorize.net` |
| Subscription id | Subscription reference within GHL, if applicable | `sub_7A91F` |
| Charge id | Provider charge identifier | `ch_1NHXYZ` |
| Connected account | Connected payment provider merchant/client account id | `acct_1sagewg732Hko` |
| Transaction date | Date of charge | `Dec 8, 2025` |
| Transaction time | Time of charge | `03:00 PM` |
| Timezone | Timezone of record | `America/New_York` |
| Is refunded | Refund status reference; NA if not refunded | `Yes/No` |
| Amount refunded | Total refunded amount (Sums up all refunds in case of multiple refunds) | `25.00` |
| Refund date | Date when refund occurred (Last refund date incase of multiple refunds) | `Dec 9, 2025` |
| Line item name | Product name | `Annual Pro Plan` |
| Line item quantity | Quantity purchased of the product mentioned in 'Product name' column | `1` |
| Line item price | Price _per line item_of the product mentioned in 'Product name' column | `100.00` |
| Line item coupon discount | Coupon portion for the product mentioned in 'Product name' column | `15.00` |
| Line item subtotal | Subtotal specific to the product mentioned in 'Product name' column | `85.00` |
| Line item product id | GHL Product identifier of the 'Product name' column | `prod_5449` |
| Tax name | Unique Tax label irrespective of the line item data i.e. multiple products or line items can have the same tax name but it would be shown only once per transaction | `Sales Tax` |
| Tax amount | Tax value for this tax line irrespective of the line item data i.e. taxes for all products with this tax name will be summed up and shown here | `8.40` |
| Processing charge name | Name of misc fee - Can be maximum 1 per transaction; Blank if no charges | `Platform Fee` |
| Processing charge amount | Misc fees amount; Blank if no charges | `2.00` |
| Gift card order number | If gift card used; Blank if gift card is not used to pay for the transaction | `GC-ORD-19202` |
| Gift card amount used | Amount redeemed in the transaction using the gift card; Blank if gift card is not used to pay for the transaction | `20.00` |

* * *

## **Special Formatting Notes**

-   Multiple products → **creates multiple rows** under same Transaction ID
    
-   Multiple taxes → **each tax appears on a separate row and belongs to the product line items i.e. each tax will have a unique row against a product.**  
      
    So if 2 products have the same tax rates (2), the total line items for the transaction would be 4 i.e. line item 1 with tax 1 and tax 2 would make 2 rows and then line item 2 with tax 1 and tax 2 would be 2 more rows.
    
-   Combined payments (e.g., Card + Gift Card) → shown distinctly in value columns  
    If filtering by totals, always aggregate carefully in spreadsheets.
    
-   **Tax rate precision**  
    Tax rate (percentage) values export with \*\*4 decimal places\*\* (for example, \*\*7.1250%\*\*) to support fractional tax rates and consistent reporting. Tax amount values remain \*\*rounded to 2 decimals\*\* based on currency standards.
    

* * *

## **FAQs**

###   
**1\. Why does a single transaction show multiple rows in the CSV?**

Because products are tracked per line item and tax details are tracked per unique tax name. This is standard for accounting-grade reporting.

###   

### **2\. Why does Total Amount Due differ from Total Amount Paid?**

-   Processing charges
    
-   Tips
    
-   Partial payments  
    … impact the **final payment**, not the **original due amount**.
    

###   

### **3\. Why don't I see some transactions in My Export?**

Check that:

-   Filters are cleared
    
-   Correct date range is applied
    

###   

### **4\. Will exporting include failed transactions?**

Yes — unless you filter to include only Successful or Refunded.

###   

### **5\. Does the export include partial refunds?**

Yes — **Amount Refunded** reflects the full cumulative refunded amount.

###   

### **6\. Can I regenerate a previously exported file?**

Yes — the export can be repeated anytime.

###   

### **7\. Who can export transactions?**

Only users with permissions to **view transactions** and **export records**.