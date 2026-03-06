---
title: "Import Products / Price From Stripe"
url: "https://help.gohighlevel.com/support/solutions/articles/48001202184-import-products-price-from-stripe"
category: "Uncategorized"
---

# Import Products / Price From Stripe

**Which pricing plans can be imported?**

-   **Applicable for Recurring / Subscription** plans only. One-Time prices cannot be imported, these need to be created in the system directly.
-   To import a plan/price from Stripe, it must be in Live mode (not Test mode).
-   "Metered" prices **can not be** imported when importing a recurring plan/price.
-   Stripe plans/prices that have already been imported into HighLevel will not show as options when using the "Import From Stripe" function, as they have already been imported.

  

**What are we doing while importing price from Stripe?**

-   Import stripe product (which is linked with price) & create in HighLevel if it doesn't already exist.
-   Create price under that product.
-   We will also create same product and price in Stripe TEST Mode and PayPal (if integration is connected).

  

**There will be 3 types of pricing plans in your Stripe account.**

  

1\. Price which was created from the Agency level via the SaaS configurator:

-   Prices created via the SaaS Configurator will have an "Agency Plan" tag with the product and price name in product listing and product details page.
-   Prices created with the SaaS Configurator cannot be edited in HighLevel Payments
-   If you update a price directly in Stripe, the change will not be reflected in the HighLevel Product/price. 
-   If you need to change the price of a product created via the SaaS Configurator, edit the price in Stripe and then use the "Import From Stripe" button to import the new price, which will create a new HighLevel Product with an "Agency Plan" tag, which you can then go select in your Funnel or Website page settings. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158655926/original/_4ysyT1_RvDXKVtRAtamCvGXle9eLywe-A.jpeg?1636734358)

  

2\. Prices which were created by creating a product in HighLevel:

-   When a product is created in HighLevel, a corresponding plan/price will be created in Stripe.
-   Any edits to HighLevel product pricing will automatically sync to Stripe by creating a new pricing on Stripe. This is due to limitation on Stripe's APIs to edit the existing prices.
-   Any edits to Stripe pricing **will not** auto-sync to HighLevel. Changed pricing in Stripe would need to imported into HighLevel as a new product.

  

3\. Prices which were created by you directly in Stripe:

-   If you've created plans/prices in Stripe, you can use the "Import From Stripe" button to import them into HighLevel as HighLevel Products. 
-   If you need to edit an imported product's price, make the edit in HighLevel and the change will sync to Stripe by creating a new pricing on Stripe.
-   If you edit an imported plan/price in Stripe, the change will not be reflected in the HighLevel product - you'd need to import the changed plan/price as a new HighLevel Product.