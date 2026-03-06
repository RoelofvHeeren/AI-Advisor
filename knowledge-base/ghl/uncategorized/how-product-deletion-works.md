---
title: "How Product Deletion Works"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006063-how-product-deletion-works"
category: "Uncategorized"
---

# How Product Deletion Works

This help document walks you through how to delete products in your account. You’ll learn the different ways you can delete a product, how bulk deletion works, and which types of products are protected from deletion to ensure ongoing processes aren’t disrupted.

  

## What does this feature do?

-   [What does this feature do?](#What-does-this-feature-do?)
-   [What do I need to use this feature?](#What-do-I-need-to-use-this-feature?)
-   [How to delete a product](#How-to-delete-a-product)
    -   [Option 1: From the Products List](#Option-1%3A-From-the-Products-List)
    -   [Option 2: From the Product Details page](#Option-2%3A-From-the-Product-Details-page)
-   [How to bulk delete products](#How-to-bulk-delete-products)
-   [Restrictions: what you cannot delete (and why)](#Restrictions%3A-what-you-cannot-delete-\(and-why\))
    -   [SaaS products (SaaS Plans & Agency Plans)](#SaaS-products-\(SaaS-Plans-&-Agency-Plans\))
    -   [Calendars products](#Calendars-products)
    -   [Memberships/Communities products](#Memberships/Communities-products)
    -   [Prices & variants (SaaS, Calendars, Memberships/Communities)](#Prices-&-variants-\(SaaS,-Calendars,-Memberships/Communities\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

  

  

## What does this feature do?

Product deletion lets you permanently remove products you no longer need. To protect billing and customer access, the system blocks deletion for certain product types or when active/past\_due subscriptions exist. In bulk actions, only eligible products are removed; protected items are skipped with clear messaging.

  

Please note that deleting products doesn't necessarily delete the products that are already sold i.e. transactions, orders, invoices, subscriptions, etc. that already have this product, will continue to do so. It would only block future purchases of or actions on the product.

##   

## What do I need to use this feature?

-   **Permissions:** Role with **Products → Delete** (and **Products → View**).
    
-   **Navigation:** **Payments → Products** (list and details pages).
    
-   **Awareness:** Deletion is **permanent** and cannot be undone. Ensure the product isn’t required in active checkouts or by Calendars/Memberships or active SaaS subscription.
    

##   

## How to delete a product

### Option 1: From the Products List

1.  Go to **Payments → Products**.
    
2.  Locate the product.
    
3.  Click the **Delete (trash)** icon.
    
4.  Confirm in the dialog.
    

### Option 2: From the Product Details page (Price / Variant deletion)

1.  Go to **Payments → Products → Edit**
    
2.  Click **Delete Price**. Note - This would only work if there is more than 1 price / variant available of the product, the last price / variant cannot be deleted.
    

  

> **Note:** If the delete control is disabled or you see a message about eligibility, review the “Restrictions” section below.

##   

## How to bulk delete products

1.  Go to **Payments → Products**.
    
2.  Select multiple products with the checkboxes (or **Select All**).
    
3.  Click **Delete** under **Bulk Actions**.
    
4.  Review the confirmation message and confirm.
    

**Confirmation messages (what you’ll see):**

-   _“Are you sure you want to delete these products? This action cannot be undone. Only products eligible for deletion will be deleted.”_
    
-   If a fixed count is shown (e.g., 10 selected):  
    _“Are you sure you want to delete these 10 products? This action cannot be undone. Only products eligible for deletion will be deleted.”_
    

Only eligible products are deleted; protected products remain.

##   

## Restrictions: what you cannot delete (and why)

  

To safeguard billing and feature integrity, the following rules apply:

### SaaS products (SaaS Plans & Agency Plans)

-   **Blocked if any active or past\_due subscriptions exist** on the product.
    
-   **Allowed** only when **no** active/past\_due subscriptions exist.
    
-   If blocked, the delete control is disabled and the product remains.
    

### Calendars products

-   Products created by **Calendars** cannot be deleted.
    
-   The **Delete** CTA is hidden.
    

### Memberships/Communities products

-   Products created by **Memberships/Communities** cannot be deleted.
    
-   The **Delete** CTA is hidden.
    

### Prices & variants (SaaS, Calendars, Memberships/Communities)

-   **Saved** prices/variants: **cannot** be deleted; the delete icon is disabled.
    
-   **Unsaved** (just added, not saved yet) prices/variants: **can** be removed.
    

##   

## Frequently Asked Questions

**Q: Why is the delete button not visible against my product?**  
A: It’s either a Calendars or Memberships/Communities product (never deletable), or it’s a SaaS product with active/past\_due subscriptions.

  

**Q: How do I delete a SaaS product that’s blocked?**  
A: First resolve or cancel all **active/past\_due** subscriptions tied to that product. Once none remain, the product can be deleted.

  

**Q: What happens in bulk delete if my selection includes protected products?**  
A: Only eligible products are deleted. Protected items are skipped, and the confirmation dialog clarifies this behavior.

  

**Q: Can I delete a price/variant on a protected product?**  
A: You can remove it only if it has **not** been saved yet. Saved prices/variants on SaaS, Calendars, or Memberships/Communities products cannot be deleted.

  

**Q: Is deletion reversible?**  
A: No. Deletion is permanent. Confirm dependencies before proceeding.

  

**Q: I deleted a product from the CRM's Payments tab, but why is it still appearing in my account?**

A: Products linked to an external payment gateway (like Stripe) require dual deletion. When you delete the product in the platform, it removes the local record but often fails to remove the corresponding product or plan stored in your payment gateway.

To completely and permanently remove the product:

1.  Delete from the Platform: Delete the item from Payments $\\rightarrow$ Products.
    
2.  Delete from the Gateway: Log directly into your external payment processor's dashboard (e.g., Stripe, PayPal) and manually delete or archive the corresponding product/plan from their inventory.
    

* * *