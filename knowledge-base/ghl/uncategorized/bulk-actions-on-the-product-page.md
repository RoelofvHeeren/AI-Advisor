---
title: "Bulk Actions on the Product Page"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005209-bulk-actions-on-the-product-page"
category: "Uncategorized"
---

# Bulk Actions on the Product Page

  

  

Bulk Actions on the Product Page let you update many products or variants at once, cutting down repetitive edits and improving inventory accuracy. This article covers bulk edits on the Products page including visibility, pricing, collections, delete, available quantity and inventory status.

* * *

**TABLE OF CONTENTS**

-   [What are Bulk Actions on the Product Page?](#What-are-Bulk-Actions-on-the-Product-Page?)
    -   [Key Benefits of Bulk Actions](#Key-Benefits-of-Bulk-Actions)
    -   [Available Bulk Actions](#Available-Bulk-Actions)
    -   [How to Access Bulk Actions](#How-to-Access-Bulk-Actions)
    -   [Filtering Products for Bulk Actions](#Filtering-Products-for-Bulk-Actions)
    -   [Edge Cases & Important Notes](#Edge-Cases-&-Important-Notes)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What are Bulk Actions on the Product Page?**

  

The _Bulk Actions_ feature allows store owners to efficiently manage large sets of products from a single interface. You can now select multiple products and apply key updates across store visibility, pricing, collections, and more in a only few clicks! This is ideal for large catalogs or frequent price/stock updates. 

* * *

## **Key Benefits of Bulk Actions**

  

-   **Save Time:** Apply one change to hundreds of items in a few clicks.  
      
    
-   **Consistency:** Ensure pricing or inventory policies are uniform across variants and products.  
      
    
-   **Error Reduction:** Preview and validation reduce mistakes compared to manual edits.  
      
    
-   **Scalability:** Filters and pagination help you manage large catalogs confidently.  
      
    
-   **Operational Accuracy:** Keep stock levels and selling rules aligned with real-world inventory.
    

* * *

## **Available Bulk Actions**

  

| Action | Description |
| --- | --- |
| **Include in Online Store** | Include selected products from appearing in the online store. |
| **Exclude in Online Store** | Exclude selected products from appearing in the online store. |
| **Change Price** | Increase, decrease, or set new prices across products using fixed values or percentages. |
| **Change Compare-at Price** | Same pricing options as above, applied to the 'Compare-at Price' field. |
| **Add to Collections** | Add products to one or more collections, or create new collections on the fly. |
| **Delete** | Remove selected products in bulk, with a safety confirmation modal. |

  

⚠️ **Caution:** Price updates affect all variants of the selected product.

* * *

## **How to Access Bulk Actions**

  

  

#### **Step 1:** Go to Products

  

Navigate to **Payments > Products** inside your Ecommerce Store.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055466197/original/7NAAYMAc3rYuLeYkOWxrWsPfvamlpcMuzA.png?1759872698)  

  

#### **Step 2:** Select Products

  

-   Use the checkbox on each row to select individual products, or click the top checkbox to select all on the current page.  
      
    
-   To select all products in the sub-account, use the **“Select All”** prompt that appears after selecting all on one page.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055466250/original/Y2EO20iN9hCW1XbweBE41dVqrMNAb1tnag.png?1759872811)  

  

#### **Step 3:** Select Bulk Action

  

Open the **Bulk Actions** dropdown to apply your desired change.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055466285/original/UXVSspDqorr4JLDr0CfZdocpX6GXBImwRQ.png?1759872908)

* * *

## **Filtering Products for Bulk Actions**

  

Use the filtering panel to narrow down product selection before applying bulk actions. You can combine filters with Select All for more targeted bulk operations. Using filters to isolate a group before performing actions can reduce the risk of editing the wrong products.  
  

Available filters include:  
  

-   **Store Visibility:** Included / Hidden  
      
    
-   **Collections:** By name  
      
    
-   **Source:** All Products, Woocommerce
    

  

To apply a filter, click the **Filters** button in the upper right corner then choose your filters from the drop down.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055466377/original/FdMysgt6m5pE_GfWYSUxcDnYtNroW-CVoA.png?1759873120)

* * *

## **Edge Cases & Important Notes**

  

### **Behavior & Limitations:**

  

-   **Negative Value Protection**: Price changes that would lead to a negative value will be skipped for those products. Others will still update.  
      
    
-   **One Action at a Time**: You must wait for the current bulk operation to complete before starting a new one.  
      
    
-   **Global Store Visibility**: Visibility changes apply across all connected stores. To exclude a specific store, use the **Sites** section instead _(Sites > Stores > Select a Store > Products)_.  
      
    
-   **Value Required for Price Updates**: ‘Increase’ or ‘Decrease’ actions require an existing value for Price or Compare-at Price. Products without a base value remain unaffected.  
      
    
-   **Deletion Confirmation for Large Sets**: Deleting more than 50 products requires typing **“Delete”** in the confirmation prompt. Deleted products cannot be recovered.  
      
    
-   **Bulk Delete and Restricted Products:** Bulk delete does not fail if restricted products are selected. HighLevel automatically skips restricted products, and only eligible products are deleted. Restricted products include:  
      
    
    -   Calendar-created products  
          
        
    -   Memberships/Communities-created products  
          
        
    -   SaaS products with active or past\_due subscriptions  
          
        For details, see [How Product Deletion Works](https://help.gohighlevel.com/en/support/solutions/articles/155000006063)  
        
    
      
    
-   **Bulk Performance Warning**: Changes on over 300 products may take a few moments to reflect.
    

  

### **Selection Behaviour:**

  

| Action | What Happens |
| --- | --- |
| Click top checkbox | Selects all products on the current page. |
| Navigate away and return | Selection is retained (for current page selection only). |
| Use “Select All” for entire list | If you navigate away, the selection will **not** be retained. |

* * *

## **Frequently Asked Questions**

  

**Q: Can I apply bulk actions to digital and physical products together?**  
Yes, the action applies regardless of delivery type.

  

**Q: Will bulk updates affect variants?**  
Yes. All pricing-related changes will reflect at the variant level as well.

  

**Q: Can I undo a bulk delete?**  
No. Deleted products are **permanently removed**. Use with caution.

* * *

## **Related Articles**

  

-   [How to Suggest Related Product(s) in Your Product Details Page](https://help.gohighlevel.com/en/support/solutions/articles/155000002834)  
      
    
-   [Shipping and Delivery rates for Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000002842)  
      
    
-   [Customizing the Checkout Page in Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000004467)  
      
    
-   [How to Add Recurring Products to Your Products List in Documents and Contracts](https://help.gohighlevel.com/en/support/solutions/articles/155000002963)