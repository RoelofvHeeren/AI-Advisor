---
title: "Export or Download Subscriptions as CSV"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007159-export-or-download-subscriptions-as-csv"
category: "Uncategorized"
---

# Export or Download Subscriptions as CSV

This help document explains how to export **Subscriptions** into a detailed CSV file for compliance, revenue analytics, retention monitoring, and billing management.

* * *

## **Overview**

  
The **Subscriptions CSV Export** feature allows you to download subscription records from the **Payments → Subscriptions** dashboard.

  
You can export:  
  

-   Every subscription in the account, or  
      
    
-   Only subscriptions that match your **filters/search query**
    

  
The export is delivered via email as a **secure download link** that expires **after 7 days**.

  
If the link expires → just trigger another export.

* * *

**TABLE OF CONTENTS**  
  

-   [How to Export Subscriptions](#How-to-Export-Subscriptions)
-   [Understanding the Data Format](#Understanding-the-Data-Format)
-   [Column Reference Guide (with examples)](#Column-Reference-Guide-\(with-examples\))
-   [Example of Multi-Row Subscription Data](#Example-of-Multi-Row-Subscription-Data)
-   [FAQs](#FAQs)

* * *

## **How to Export Subscriptions**  
  

1.  Go to **Payments → Subscriptions**  
      
    
2.  (Optional) Apply search or filters:  
      
    
    -   Status (Active, Canceled, Past Due, etc.)  
          
        
    -   Product type  
          
        
    -   Customer details  
          
        
    -   Provider, currency, or date range  
          
        
3.  Click **Download**  
      
    
4.  Open the link sent to your email → CSV downloads instantly
    

* * *

## **Understanding the Data Format**

  
Subscriptions often include multiple:  
  

-   Products (line items)  
      
    
-   Taxes
    

  
Therefore, **one subscription may generate multiple rows** in the file —one row per **line item** and **tax** entry (if applicable).

This is required for accurate product-level and tax-level reporting.  
  

> **Tip: When summarizing totals in Sheets/Excel →  
> Group values by Subscription ID to avoid double counting.**

* * *

## **Data Consistency Guarantees (Exports Upgrade)  
**  

Subscriptions exports are formatted for stable billing analytics and audit-ready reporting.

**0 vs blank values**  
  

-   **0** appears only when the field applies and the value is truly zero.  
      
    
-   **Blank** appears only when the field does not apply (for example, trial fields when no trial exists).

**Stable structure for reporting**  
  

-   Column ordering is consistent to support pivots, imports, and BI pipelines.  
      
    
-   Multi-row subscription output is intentional for product-level and tax-level accuracy; group by **Subscription id** to avoid double-counting. 

* * *

  

## **Column Reference Guide (with examples)**  
  

| Column Name | Description | Example |
| --- | --- | --- |
| Subscription id | Internal system ID of subscription | `jfhbiabfoanfle13kj` |
| Location id | Sub-account identifier | `` `NyGCsdhgRZ8Ffa8Ssagfhd` `` |
| Customer id | System identifier for customer | `` `jbtyjkzMjvd8cLi9HUC` `` |
| Customer name | Customer display name | `Maria Russell` |
| Customer email | Email stored for subscriber | `maria@domain.com` |
| Customer phone | Phone stored for subscriber | `+1 480-555-7002` |
| Subscription start | Date subscription was created | `Jan 05, 2026` |
| Subscription end | End date if canceled or expired; Blank if subscription has not ended | `May 30, 2026` |
| Number of trial days | Applied trial length; Blank if no trial | `14` |
| Trial start | First day of trial; Blank if no trial | `Jan 05, 2026` |
| Trial end | Trial completion date; Blank if no trial | `Jan 19, 2026` |
| Cancelled at | Timestamp subscription was canceled; Blank if not cancelled | `Mar 15, 2026` |
| Payment method | Method used for latest successful charge | `Visa •1234` |
| Currency | Subscription currency | `USD` |
| Sub total | Total before discount & exclusive tax (Does not include Set Up Fees) | `200.00` |
| Discount | Discount applied (coupon etc.) | `-20.00` |
| Total tax amount (excluded in prices) | Taxes applied on top (Does not include anything on Setup Fees) | `14.40` |
| Total tax amount (included in prices) | Taxes baked into price (Does not include anything on Setup Fees) | `0.00` |
| Total amount | Final charge value (after discount + taxes; does not include processing charges) | `194.40` |
| Coupon code | Coupon applied (if applicable) | `WELCOME10` |
| Status | Subscription lifecycle state | `Active`, `Past Due, Cancelled` |
| Live mode | Whether subscription is test or live | `Yes, No` |
| Source type | Checkout origin like Funnel, Payment Link, Store | `Funnel` |
| Source sub type | More specific source classification | `One-Step Checkout` |
| Source id | Internal identifier of the checkout | `fnl_0188` |
| Source name | Display title of source | `Health Coaching Funnel` |
| Payment provider | Stripe, NMI, Authorize.net, PayPal, Square | `Stripe` |
| Connected account | Provider account used for billing | `acct_5520XX` |
| Transaction date | Date of last successful renewal transaction | `Mar 05, 2026` |
| Transaction time | Time of last charge | `2:10 PM` |
| Timezone | System timezone | `America/New_York` |
| Total products | Count of products tied to subscription | `1` |
| Line item name | Product title | `Monthly Yoga Plan` |
| Line item quantity | Product quantity | `1` |
| Line item price | Price per product unit | `200.00` |
| Line item discount | Discount applied to product | `20.00` |
| Line item subtotal | Product subtotal (before tax & fees) | `180.00` |
| Line item product id | Product reference ID | `prod_X7E12` |
| Tax name | Tax label for line | `NY Sales Tax` |
| Tax amount | Tax portion allocated to this line | `14.40` |
| Last paused on date | Most recent pause timestamp | `April 01, 2026` |
| Resumed on date | Date subscription resumed; It's the actual date when a subscription resumes from paused state. | `April 10, 2026` |
| Pause end date | Projected end date of most recent pause; It's the date a paused subscription is expected to end it's pause. | `April 10, 2026` |
| Processing charge name | Additional fees/charges name | `Platform Fee` |
| Processing charge amount | Value of charge | `2.50` |

* * *

## **Example of Multi-Row Subscription Data**

  

Example 1:  
  
A single subscription with:  
  

-   3 products  
      
    
-   2 taxes - both exclusive
    

  
The CSV could generate a total of **6 rows**:  
  

-   **2 rows for each products**  
      
    
-   **6 rows for taxes, where tax amount against each tax name for each product is a new row**  
    → All **share the same Subscription id**
    

  

Example 2:  
  
A single subscription with:  
  

-   3 products
    
-   2 taxes - both exclusive on product 1, both inclusive on product 2 and no tax on product 3.  
      
    

The CSV could generate a total of **5 rows**:  
  

-   **2 rows for 2 products and 1 row for the 3rd product**  
      
    
-   **4 rows for taxes i.e. first 2 taxes are in the format <Tax Name 1> and <Tax Name 2> and next 2 taxes are in the format <Tax Name 1 (Included in prices)> and <Tax Name 2 (Included in prices)>; 5th row doesn't have any values in the tax columns** → All **share the same Subscription id**
    

* * *

## **FAQs**

### **1\. Why do I see multiple rows per subscription?**

Because each product and/or tax is broken out individually for accurate reporting.

###   

### **2\. Will canceled subscriptions be included in exports?**

Yes — unless you filter by Status before exporting.

###   

### **3\. Does my export show latest updated values and details based on a subscription update action?**

Yes, the export shows latest data on the subscription irrespective of the starting data of the subscription i.e. if product, quantities, etc. change, then the latest would reflect on the export.

###   

### **4\. Can I export subscription billing history?**

For complete billing history → use **Transactions Export**.

###   

### **5\. Who can download subscription exports?**

Only users with permission to:  
✔ View Subscriptions  
✔ Export Subscriptions

###   

### **6\. Is customer address included?**

Only if collected via checkout — otherwise columns remain blank.

###   

### **7\. Why is Subscription End blank?**

That means the subscription is still active, unpaid, trialing, scheduled, etc. i.e. subscription has not ended yet.

* * *