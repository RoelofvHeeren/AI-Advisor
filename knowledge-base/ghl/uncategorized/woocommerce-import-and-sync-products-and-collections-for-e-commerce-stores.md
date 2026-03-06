---
title: "WooCommerce: Import and Sync Products and Collections for E-commerce Stores"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004714-woocommerce-import-and-sync-products-and-collections-for-e-commerce-stores"
category: "Uncategorized"
---

# WooCommerce: Import and Sync Products and Collections for E-commerce Stores

**TABLE OF CONTENTS**

-   [What is WooCommerce Import & Sync?](#What-is-WooCommerce-Import-&-Sync?)[](#Key-Benefits-of-WooCommerce-Import-&-Sync)
-   [Key Benefits of WooCommerce Import & Sync](#Key-Benefits-of-WooCommerce-Import-&-Sync)[](#How-to-Use-WooCommerce-Import-&-Sync)
-   [How to Use WooCommerce Import & Sync](#How-to-Use-WooCommerce-Import-&-Sync)[](#Product-&-Categories-Import-Guidelines)
-   [Product & Categories Import Guidelines](#Product-&-Categories-Import-Guidelines)
-   [Additional Improvements: More Power & Stability](#Additional-Improvements%3A-More-Power-&-Stability)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

#   

# **What is WooCommerce Import & Sync?**

This feature allows store owners to seamlessly import and sync their Products and Collections from WooCommerce into HighLevel (GHL). Previously limited to importing orders, contacts, and transactions, this update expands the capabilities to include full product and collection migration, making it easier than ever to manage your WooCommerce store within GHL.  
  

## **Key Benefits of WooCommerce Import & Sync**

**Effortlessly manage and sync your WooCommerce store with HighLevel.**

-   **Full Store Migration:** Import and sync all products, collections, contacts, orders, and transactions.
    
-   **Automated Syncing:** Keep product and collection data updated in real time.
    
-   **Seamless Store Management:** Control all store-related data directly from GHL.
    
-   **Improved Data Integrity:** WooCommerce remains the source of truth, ensuring accurate and consistent data.
    
-   **Efficient Error Handling:** Automatic reconnection support in case of authentication errors.
    

##   
**How to Use WooCommerce Import & Sync**

**Follow these steps to connect your WooCommerce store and start syncing data.**

1.  **Access the Integration Settings**
    
    -   Navigate to **Settings > Integration > WooCommerce** inside your GHL sub-account.
        
2.  **Connect Your WooCommerce Store**
    
    -   Click **“Connect”** and enter your WooCommerce store URL (e.g., https://yourstore.com – no trailing slash).
        
    -   Follow the prompts to complete the setup.
        
3.  **Select Data to Import**
    
    -   Choose what to import, including:
        
        -   Contacts
            
        -   Orders
            
        -   Transactions
            
        -   Products
            
        -   Collections
            
4.  **Configure Sync Settings**
    
    -   Set up continuous syncing for:
        
        -   Contacts
            
        -   Orders
            
        -   Transactions
            
        -   Order Submitted Trigger
            
        -   Payment Received Trigger
            
        -   Products
            
        -   Collections
            
5.  **Complete Setup & Manage Settings**
    
    -   Click **Save** to start the import and sync process.
        
    -   Enable or disable specific sync options anytime from the integration settings.
        
6.  **Reimport Data Anytime**
    
    -   Need to reimport data? Disconnect and reconnect the integration to pull fresh data.
        

##   
**Product & Categories Import Guidelines**

**Understand the criteria for product and category imports.**

-   Only **Simple & Variable** products will be imported; other product types are excluded.
    
-   Products with a **$0 price or no variants** will **not** be imported.
    
-   The **“Include in Online Store”** toggle is enabled only for **published** products.
    
-   WooCommerce remains the **source of truth** for product information.
    
-   Only **categories linked to products** will be imported; unlinked categories are ignored.
    
-   **Product/category deletions** won’t sync to HighLevel.
    

##   
**Additional Improvements: More Power & Stability**

**Enhancements for a smoother and more efficient integration experience.**

-   **Complete Order Imports:** Orders with linked products and images are now fully imported.
    
-   **Better Error Handling & Reconnection Support:**
    
    -   If authentication errors like **401 (Unauthorized), 403 (Forbidden), or 404 (Not Found)** occur, the integration will switch to reconnect mode.
        
    -   Sub-account admins will receive an email with clear steps to restore the connection.
        
-   **Enhanced Syncing Efficiency:** Faster and more reliable data imports and syncing.
    
-   **Stronger Data Integrity:** Ensures WooCommerce remains the single source of truth, reducing mismatches.
    

* * *

## **Frequently Asked Questions  
**

**Q: Can I import all types of WooCommerce products?**  
A: No, only **Simple & Variable** products will be imported. Other product types are not supported.  
  

**Q: Will product deletions sync to HighLevel?**  
A: No, product and category deletions in WooCommerce will not be reflected in HighLevel.  
  

**Q: How often does data sync between WooCommerce and HighLevel?**  
A: The sync process runs continuously based on the settings configured in the integration panel.  
  

**Q: What should I do if my WooCommerce connection fails?**  
A: If you encounter authentication errors, the integration will switch to reconnect mode, and an admin email will provide steps to restore the connection.  
  

## **Related Articles**

-   How to Set Up WooCommerce Integration
    
-   Managing Products in HighLevel
    
-   Understanding Syncing and Data Integrity
    

##   
**Next Steps**

Start using WooCommerce Import & Sync today to streamline your e-commerce management! Connect your store and take advantage of this powerful integration to keep your store data up to date.