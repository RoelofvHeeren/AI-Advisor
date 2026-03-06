---
title: "Add & Track Product Cost Price & Margin"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007434-add-track-product-cost-price-margin"
category: "Uncategorized"
---

# Add & Track Product Cost Price & Margin

  

Track your product profitability by adding cost price and margin details to any product price or variant. This gives you a built-in way to understand what you earn on every sale — without needing external spreadsheets or manual calculations.

  

**TABLE OF CONTENTS**

  

-   [What is Cost Price & Margin?](#What-is-Cost-Price-&-Margin?)
-   [Key Benefits](#Key-Benefits)
-   [Prerequisites](#Prerequisites)
-   [How to Add Cost Price & Margin to a Product](#How-to-Add-Cost-Price-&-Margin-to-a-Product)
-   [How Cost Price & Margin Sync](#How-Cost-Price-&-Margin-Sync)
-   [How Cost Price Appears in Invoices & Calendars](#How-Cost-Price-Appears-in-Invoices-&-Calendars)
-   [Transactions CSV: Line Item Cost Price](#Transactions-CSV%3A-Line-Item-Cost-Price)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

  

  

# What is Cost Price & Margin?

Cost Price and Margin are optional fields you can configure at the price or variant level for any product. They give your business a structured, accurate view of profitability — directly inside the Products module.

  

Cost Price is what the product costs your business — the amount you pay to deliver or acquire it.

Margin is the difference between your selling price and cost price (SP minus CP). 
It can be expressed as an amount or a percentage. When in percentage form, the difference is always divided by the cost price to arrive at the margin % (except when cost price = 0 in which case it would be a 100% margin).

While Cost Price is always >= 0, Margin (Amount) can be either positive or negative.

  

Once configured, this data flows into your Transactions CSV export as a dedicated Line Item Cost Price column, enabling profitability analysis at the transaction level.

  

  

# Key Benefits

-   Know your margin per product at a glance, without leaving the platform.
    
-   Enter either cost price or margin (Amount or Percentage) — the other calculates automatically.
    
-   Works for one-time and recurring products, across prices and variants.
    
-   Cost price stays accurate even when invoice or calendar prices are manually overridden.
    
-   Export transaction-level cost data in CSV for finance and reconciliation workflows.
    

  

  

# Prerequisites

-   Access to Payments → Products in your account.
    
-   At least one product created (new or existing).
    
-   Permissions: Users need product create/edit permissions to configure cost price and margin.
    

  

  

# How to Add Cost Price & Margin to a Product

Cost Price and Margin are configured at the price level (for standard products) or variant level (for products with variants). The fields appear inside the Pricing section when creating or editing a product.

  

## For Standard Products (No Variants)

### Step 1: Navigate to Products

In the left menu, click Payments. Then in the top ribbon, click Products to open the Products page.

  

### Step 2: Create a Product

Click the + Create Product button to create a new product, or click on an existing product to edit it.

  

### Step 3: Go to the Pricing Section

In the product creation or edit flow, scroll to the Pricing section. For existing products, click Edit next to the price you want to configure while for new products, configure this on individual prices.

  

### Step 4: Enable the Add Margin Checkbox

Inside the Pricing section, check the Add Margin checkbox. This reveals the Cost Price and Margin fields. The checkbox is unchecked by default — enabling it does not affect existing transactions.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214786/original/bKIZDNBmrOkQIEzafrMumuMJsJ8wvqdwmA.png?1772645150)

  

### Step 5: Enter Cost Price or Margin

Enter either value — the other calculates automatically based on your selling price:

-   Cost Price: The amount it costs your business to deliver this product. Cannot be a negative number.
    
-   Margin: The profit above cost. Toggle between Amount and Percentage mode using the toggle next to the field.
    

  

Note
If you check 'Add Margin' but leave both fields empty, the system treats Cost Price as equal to Selling Price and exports accordingly keeping the margin at 0.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214802/original/kwYtgZwbJozdOgdjRCyhRkSldGM4G-Utsg.png?1772645167)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214817/original/Y6VfTYQRw_nv2-3Q9GY_2j1acNd10d8rog.png?1772645180)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214844/original/mo1T8uHJyC8lT5NigyyuKw9FCPAvbiBYAA.png?1772645199)

  

<table style="border:none;border-collapse:collapse;"><colgroup><col width="624"></colgroup><tbody><tr style="height:0pt;"></tr></tbody></table>

### Step 6: Save the Product

Click Save. Cost price and margin are now stored at the price level for this product and will be reflected in exports going forward.

  

##   

## For Products with Variants

Cost Price and Margin are configured at the variant level, not the product level.

1.  In the product edit flow, go to the Variants section.
    
2.  Click Edit on the variant you want to configure.
    
3.  Inside the variant's Pricing section, check the Add Margin checkbox.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214870/original/29-e2-YoavjzC9Yidr25AIqQeOg0zxZfLA.png?1772645225)
    
4.  Enter Cost Price or Margin for that variant combination.
    
5.  Repeat for each variant and save.
    

Each price denomination and each variant combination has its own independent cost price and margin. 
This means you can track different margins per denomination (e.g., $25 vs $100 options) or per variant (e.g., Small vs Large).

  

  

# How Cost Price & Margin Sync

The two fields stay in sync automatically based on the selling price. Switching modes or changing the selling price recalculates the dependent field instantly.

  

## Amount Mode

-   Margin = Selling Price − Cost Price
    
-   Cost Price = Selling Price − Margin
    
-   **Cost Price >= 0**
    
-   **Margin - Can be Positive or Negative**
    

  

## Percentage Mode

-   Margin % = ((Selling Price − Cost Price) ÷ Cost Price) × 100
    

  

A Margin % above 100% is not valid unlike Markup which can be above 100. Since a margin is divided by cost price, it is restricted on the upper limit of 100% and a lower limit of -100%.

  

<table style="border:none;border-collapse:collapse;"><colgroup><col width="624"></colgroup><tbody><tr style="height:0pt;"></tr></tbody></table>

  

## When Selling Price Changes

If you update the selling price of a product, the system automatically recalculates margin based on the existing cost price. Similarly, switching between Amount and Percentage mode recalculates the fields without data loss.

  

  

# How Cost Price Appears in Invoices & Calendars

In Invoices and Calendars, selling prices can be manually overridden at the line item level. In these cases, cost price behavior works as follows:

-   Cost Price is always sourced from the original product price — currently it is not recalculated based on the overridden selling price.
    
-   Margin is not recalculated at the invoice or calendar level.
    
-   Setup fees on recurring products are excluded from margin logic.
    
-   For subscription products, only the recurring amount is used for margin — not the setup fee.
    

  

# Transactions CSV: Line Item Cost Price

A new Line Item Cost Price column is available in the Transactions CSV export. This makes it possible to analyze profitability at the transaction and line item level.

  

## How to Access the Export

1.  Go to Payments → Transactions.
2.  Click Export CSV.
3.  The Line Item Cost Price column appears automatically for all products in a transaction where cost price has been defined.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066214875/original/Y0KxlOGHp7_JMeTBru-vfwd8pwQJd4f-sw.png?1772645261)

  

## Column Behavior

-   If cost price is defined for a product → the cost amount is shown.
    
-   If cost price is not defined → the column is blank.
    
-   For overridden prices in invoices or calendars → cost price from the original product is used.
    
-   Applies to one-time payments, subscription payments, and partial payments.
    
-   Partial payments: The full product cost price is shown, not a prorated amount.
    

  

Cost price data is not applied retroactively. Only transactions created after cost price is configured for a product will have this column populated.

  

  

# Frequently Asked Questions

  

### Can I add cost price to existing products?

Yes. Open any existing product, edit the price or variant, and check the Add Margin checkbox. This does not affect past transactions — only future ones will carry the cost data.

  

### What happens if I leave the fields blank after checking Add Margin?

If the Add Margin checkbox is checked but no values are entered, the system treats Cost Price as equal to the Selling Price. This value is passed through to CSV exports.

  

### Is cost price visible to customers?

No. Cost price is an internal field and is not displayed to customers at checkout, on receipts, or on invoices.

  

### Can I set different cost prices per variant?

Yes. Each variant combination has its own independent cost price and margin fields, so you can track different profitability per variant.

  

### Does changing a product's selling price update the cost price automatically?

No. When the selling price changes, the margin is recalculated based on the existing cost price — the cost price itself does not change. This keeps your input intact while margin stays accurate.

  

### Can I bulk-edit cost prices across multiple products?

Not in this release. Bulk cost price editing is planned for a future phase as part of the bulk edit feature.

  

### Are setup fees included in margin calculations for recurring products?

No. Setup fees are excluded from margin logic. Only the recurring amount is used when calculating cost price and margin for subscription products.

  

### Are historical transactions updated when I add cost price to a product?

No. Cost price data is not applied retroactively. Only transactions created after you configure cost price for a product will include the Line Item Cost Price in exports.