---
title: "How to Integrate Woocommerce with E-commerce Stores"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004052-how-to-integrate-woocommerce-with-e-commerce-stores"
category: "Uncategorized"
---

# How to Integrate Woocommerce with E-commerce Stores

Store owners can now seamlessly import and sync their WooCommerce store data with HighLevel. This feature allows store owners to easily migrate and manage their WooCommerce store by importing contacts, orders, and transactions into HighLevel. This article explains how to connect your WooCommerce store to HighLevel and control which data syncs into your sub-account.

* * *

* * *

**TABLE OF CONTENTS**

-   [What is the WooCommerce Integration?](#What-is-the-WooCommerce-Integration?)[](#Key-Benefits-of-the-WooCommerce-Integration)
-   [Key Benefits of the WooCommerce Integration](#Key-Benefits-of-the-WooCommerce-Integration)[](#How-To-Setup-the-WooCommerce-Integration)
-   [How To Setup the WooCommerce Integration](#How-To-Setup-the-WooCommerce-Integration)[](#How-to-Setup-Triggers-&-Automations-for-WooCommerce1.-Order-Received-Trigger)[](#How-to-Setup-Triggers-&-Automations-for-WooCommerce1.-Order-Received-Trigger)
-   [How to Setup Triggers & Automations for WooCommerce](#How-to-Setup-Triggers-&-Automations-for-WooCommerce1.-Order-Received-Trigger)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the WooCommerce Integration?**

  

The WooCommerce integration connects a WooCommerce store to a HighLevel sub-account so you can import historical records and keep new purchases in sync. Once connected, HighLevel can bring in contacts, orders, and transactions from WooCommerce and let you use order-related events in your automations. 

  

Additionally, WooCommerce store owners can leverage GHL’s marketing tools, including triggers like Order Submitted Trigger and Payment Received Trigger for better automation.

* * *

## **Key Benefits of the WooCommerce Integration**

  

-   **Centralized order visibility**: view WooCommerce orders inside HighLevel once syncing is enabled.  
      
    
-   **Contact enrichment**: create or update HighLevel contacts from WooCommerce purchases, including guest checkouts.  
      
    
-   **Targeted automations**: trigger workflows from order-related events such as order submission or payment receipt.  
      
    
-   **Selective control**: choose which data types to import initially and which to keep in ongoing sync (contacts, orders, transactions).  
      
    
-   **Reimport option**: reimport historical data by disconnecting and reconnecting when needed.
    

* * *

## **How To Setup the WooCommerce Integration**

  

Proper setup ensures historical data imports correctly and new orders continue to sync to your sub-account.

  

**Note:** To **reimport** data later, **disconnect** and **reconnect**, then select what to import again.

  

1.  Login to your sub-account.  
      
    
2.  Click on **Settings.**  
      
    **![](https://jumpshare.com/share/kUE8x0oaKW32yQzD1Rzz+/Screen+Shot+2025-12-04+at+3.36.46+PM.png)**  
      
    
3.  Go to **Integrations** > **WooCommerce** and click on **Connect**.  
      
    ![](https://jumpshare.com/share/iNPwWwctR9NNTHhYbGnM+/Screen+Shot+2025-12-04+at+3.38.35+PM.png)  
      
    
4.  Enter your **WooCommerce store URL** (do **not** include a trailing slash, (e.g, https://yourstore.com), then approve the connection.  
      
    ![](https://jumpshare.com/share/qS6VghlQySGEvyAgsbVJ+/Screen+Shot+2025-12-04+at+3.42.30+PM.png)  
      
    
5.  Choose the elements to **Import**:  
      
    
    -   **Contact Import:** Only customer contacts who have placed an order in the past will be imported.
        
          
        
    -   **Order Import:** Enable order import to allow transaction import and to allow triggers for order received and payment received events
        
          
        
    -   **Transaction Import:** Import all your Woocommerce order transactions
        
          
        
    -   **Product Import:** All published products imported from WooCommerce will be automatically included in your online store by default  
          
        
6.  Click on **Next**.  
      
    ![](https://jumpshare.com/share/R2lLdmxLgNKm0G5D8aSI+/Screen+Shot+2025-12-04+at+3.46.11+PM.png)
    
      
      
    
7.  Choose the elements to **Sync:**  
      
    
    -   **Contact Sync:** Only customer contacts who place an order in the future will be synced.
        
          
        
    -   **Order Sync:** Sync all your future Woocommerce orders in one single place.
        
        Enable order sync to allow transaction sync and to allow triggers for order received and payment received events.  
          
        
        -   **Order Received Trigger:** This allows setting up automations in HighLevel using the Order Received Trigger when an order is received in WooCommerce.
            
              
            
        -   **Transaction Sync:** Sync all your Woocommerce order transactions.  
              
            
        -   **Payment Received Trigger:** This allows setting up automations in HighLevel using the Payment Received Trigger when a payment is received in WooCommerce.
            
              
            
    -   **Product Sync:** Sync all published products and categories, including their attributes, directly from WooCommerce. Any updates made in WooCommerce will reflect here, but changes made here will not sync back to WooCommerce.
        
          
        
8.  Click **Save**.  
      
    ![](https://jumpshare.com/share/hH4eVfRWFyKyMF8axPW8+/Screen+Shot+2025-12-04+at+3.54.24+PM.png)
    

### 

* * *

## **How to Setup Triggers & Automations for WooCommerce**

  

**1\. Order Received Trigger  
**

  

1.  Login to your sub-account.  
      
    
2.  Go to **Automations** > **Workflows**.  
      
    
3.  Create a **new Workflow** or **edit an existing one**.  
      
    
4.  Click on **\+ Add New Trigger**.  
      
    
5.  Search and select the **Order Submitted** trigger.  
      
    
6.  Click on **\+ Add Filter** and then select **Order** **Source** > **is** > **External**.  
      
    
7.  Add **second** **filter**: **Sub-****Source** > **is** > **WooCommerce**.  
      
    
8.  Click **Save**.  
      
    ![](https://jumpshare.com/share/6J2KJQygxCJwo0doquQ0+/GIF+Recording+2025-12-04+at+4.46.41+PM.gif)  
      
    
9.  Add any **Action** like send SMS/Email/Invoice, etc after the trigger as per your workflow.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039790362/original/THMQ5QyLgNppx7hwllkozMytCCWcUrc7uA.png?1736850239)  
      
    

### **2\. Payment Received Trigger**

  

1.  Login to your sub-account.  
      
    
2.  Go to **Automations** > **Workflows**.  
      
    
3.  Create a **new Workflow** or **edit an existing one**.  
      
    
4.  Click on **\+ Add New Trigger**.  
      
    
5.  Search and select the **Payment Received** trigger.  
      
    
6.  Click on **\+ Add Filter** and then select **Source** > **is** > **External**.  
      
    
7.  Add **second** **filter**: **Sub-****Source** > **is** > **WooCommerce**.  
      
    
8.  Click **Save**.  
      
    
9.  Add any **Action** like send SMS/Email/Invoice, etc after the trigger as per your workflow.  
      
    ![](https://jumpshare.com/share/8i0O3lydsvuyUqexokIc+/GIF+Recording+2025-12-04+at+4.55.21+PM.gif)

* * *

## **Frequently Asked Questions**

  

**Q: Can sub-accounts or agencies share the same WooCommerce connection?**

Sub-accounts within the same agency can connect to the same **domain**. An **agency** can link to only **one** WooCommerce account. If that WooCommerce account is already connected to another agency, the current agency cannot connect.

  

**Q: Which WooCommerce customer types are imported as contacts?**

Customers with roles **Customers** and **Subscribers** are imported.

  

**Q: Will contacts be created if Contact Sync is disabled?**

Yes. If **Order Sync** is enabled, contacts are created from orders even when **Contact Sync** is off.

  

**Q: How are guest checkout orders handled?**

Guest checkout buyers are created as **contacts**, but no updates or future syncs occur for these guest accounts.

  

**Q: How do WooCommerce order statuses map to HighLevel?**

**Completed** or **Refunded** in WooCommerce → **Completed** in HighLevel. **Cancelled** or **Failed** in WooCommerce → **Cancelled** in HighLevel. **All other statuses** in WooCommerce → **Pending** in HighLevel.

  

**Q: How can I reimport data if something was missed?**

**Disconnect** and **reconnect** the integration, then select the elements you want to reimport.

  

**Q: Do I need to include a trailing slash in my store URL?**

No. Enter the store URL **without** a trailing slash.

* * *

### **Related Articles**

  

-   [WooCommerce: Import and Sync Products and Collections for E-commerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000004714)  
      
    
-   [Printify Integration for Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000006595)  
      
    
-   [How to Set Up ShipStation Integration for Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000006094)