---
title: "Export or Download Orders as CSV"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007158-export-or-download-orders-as-csv"
category: "Uncategorized"
---

# Export or Download Orders as CSV

This help guide explains how to export **Orders** records into a CSV file for reporting, reconciliation, financial analysis, fulfillment, and product performance tracking.

* * *

## **Overview**

  
The **Orders CSV Export** feature allows you to download detailed order records from your **Payments → Orders** dashboard.

  
You can export:  
  

-   **All Orders**, or  
      
    
-   Only Orders that match **filters/search selection**
    

  
Exports are sent via email as a **secure download link**.

* * *

**TABLE OF CONTENTS**

-   [How to Export Orders](#How-to-Export-Orders)
-   [Understanding the CSV Format](#Understanding-the-CSV-Format)
-   [Column Reference Guide (with examples)](#Column-Reference-Guide-\(with-examples\))
-   [How Multi-Row Orders Work (Important)](#How-Multi-Row-Orders-Work-\(Important\))
-   [FAQs](#FAQs)

* * *

## **How to Export Orders**  

1.  Go to **Payments → Orders**  
    
2.  (Optional) Apply filters such as:  
      
    
    -   Order status  
          
        
    -   Date range  
          
        
    -   Source type (Funnel, Payment Link, Store Checkout, etc.)  
          
        
    -   Product type (one-time vs recurring)  
          
        
3.  Click **Download**  
    
4.  Check your email for the download link
    

> **Security Reminder:** The export link expires **after 7 days**.  
> If expired, simply start a new export.

* * *

## **Understanding the CSV Format**

  
Orders may include multiple:  
  

-   Products  
      
    
-   Taxes
    

  
Therefore, **a single order can spread across multiple rows** in the file.  
  

This helps display product-level pricing and tax clarity needed for bookkeeping and analytics.

* * *

## **Data Consistency Guarantees (Exports Upgrade)  
**  

Orders exports are formatted for reliable reconciliation and reporting across product, tax, and payment fields.

**0 vs blank values**  

-   **0** appears only when the field applies and the value is truly zero.  
      
    
-   **Blank** appears only when the field does not apply (for example, a payment method on an unpaid order).

**Stable structure for reporting**  

-   Column ordering is consistent to support pivots, imports, and BI pipelines.  
      
    
-   Multi-row orders are expected when products and tax entries exist; use **Internal order id** when grouping totals. 

* * *

## **Column Reference Guide (with examples)**

| Column Name | Description | Example |
| --- | --- | --- |
| Internal order id | HighLevel internal identifier for the order | `69369a9968f735180bfeb6ed` |
| Location id | Sub-account identifier | `NyGCsdhgRZ8Ffa8Ssagfhd` |
| Customer id | ID of the customer who placed the order | `jbtyjkzMjvd8cLi9HUC` |
| Customer name | Customer display name | `Jordan Lane` |
| Customer email | Email collected via checkout | `jordan@example.com` |
| Customer phone | Phone collected via checkout | `+44 7700 900111` |
| Payment method | Method collected during checkout; blank if unpaid order | `Credit Card, Cash, Instant Transfer` |
| Currency | Currency of product pricing | `USD` |
| Sub total | Total value of items before discount & exclusive taxes | `120.00` |
| Discount | Discounts applied to the order | `-20.00` |
| Total tax amount (excluded in prices) | Tax added on top of subtotal | `8.40` |
| Total tax amount (included in prices) | Tax already part of item prices | `0.00` |
| Total amount | Total payable after discounts + taxes + misc charges | `108.40` |
| Coupon code | Code used at checkout (if any) | `SPRING20` |
| Status | Order's Payment status | `Completed`, `Pending` |
| Live mode | Confirms Test vs Live environment | `Yes, No` |
| Total products | Total number of products in the order | `3` |
| One-time products | Number of one-time products in order | `2` |
| Recurring products | Number of subscription products in order | `1` |
| Source type | Entry point where order was created | `Store Checkout`, `Form`, `Funnel` |
| Source id | Internal ID of the source | `afalfgn4ag12neogho` |
| Source name | Display name of the source | `Gift Card Store` |
| Order date | Date the order was finalized | `Dec 10, 2025` |
| Order time | Time the order was finalized | `10:45 AM` |
| Timezone | Timezone of the order record | `America/Chicago` |
| Line item name | Product name | `Premium Coaching Plan` |
| Line item quantity | Quantity purchased of this product | `1` |
| Line item price | Price per unit of product | `100.00` |
| Line item discount | Discount allocated to this line | `20.00` |
| Line item subtotal | Subtotal for the product line | `80.00` |
| Line item product id | System identifier for product | `prod_52ZS` |
| Line item price id | Identifier for price or variant | `price_00382` |
| Tax name | Tax type applied | `Sales Tax` |
| Tax amount | Amount of tax for this line | `5.60` |
| Address line 1 | Shipping/billing street (if captured) | `123 Main St` |
| City | City | `Austin` |
| State | State/Region | `TX` |
| Country | Country | `US` |
| Postal code | Zip or postal code | `73301` |
| Processing charge name | Any miscellaneous charge name | `Handling Fee` |
| Processing charge amount | Value of misc charge | `2.80` |

* * *

## **How Multi-Row Orders Work (Important)**

  
Example 1:  
  
A single order with:  
  

-   3 products  
      
    
-   2 taxes - both exclusive
    

  
The CSV could generate a total of **6 rows**:  
  

-   **2 rows for each products**
    
-   **6 rows for taxes, where tax amount against each tax name for each product is a new row**  
    → All **share the same Order id**
    

  

Example 2:  
  
A single order with:  
  

-   3 products  
      
    
-   2 taxes - both exclusive on product 1, both inclusive on product 2 and no tax on product 3.
    

  
The CSV could generate a total of **5 rows**:  
  

-   **2 rows for 2 products and 1 row for the 3rd product**
    
-   **4 rows for taxes i.e. first 2 taxes are in the format <Tax Name 1> and <Tax Name 2> and next 2 taxes are in the format <Tax Name 1 (Included in prices)> and <Tax Name 2 (Included in prices)>; 5th row doesn't have any values in the tax columns**  
    → All **share the same Order id**
    

* * *

## **FAQs**

###   
**1\. Why am I seeing multiple rows for the same order?**

Because each product and product tax requires a separate accounting line for accurate reporting.

###   

### **2\. Why is Payment Method empty on some orders?**

Orders only show a payment method if a transaction occurred.

###   

### **3\. Will unpaid or abandoned orders be included?**

Yes — unless filtered out.

###   

### **4\. Can I check subscription billing details from this export?**

This export shows **order-level** subscription presence (count), not subscription billing history.  
Use **Subscriptions CSV Export** for that.

###   

### **5.** **Can I re-export past orders?**

Yes — exports are always generated fresh.

###   

### **6\. Who can download order exports?**

Users with permissions to:  
✔ View Orders  
✔ Export Orders