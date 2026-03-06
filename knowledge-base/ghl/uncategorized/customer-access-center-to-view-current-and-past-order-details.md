---
title: "Customer Access Center to View Current and Past Order Details"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004100-customer-access-center-to-view-current-and-past-order-details"
category: "Uncategorized"
---

# Customer Access Center to View Current and Past Order Details

The Customer Access Center (CAC) allows customers to securely view their current and past orders after purchase. Customers receive an Order Confirmation Email with a “View Order” button and can log in via OTP verification. System-generated emails and portal content now automatically display in the customer’s preferred platform language.

* * *

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [Enable Order Confirmation Email](#Enable-Order-Confirmation-Email)
-   [Accessing the Customer Access Center](#Accessing-the-Customer-Access-Center)
-   [What Customers Can View](#What-Customers-Can-View)
-   [Current Order Details](#Current-Order-Details)
-   [Fulfillment Status](#Fulfillment-Status)
-   [Past Orders](#Past-Orders)
-   [Direct Access URL](#Direct-Access-URL)
-   [Digital Download Visibility (Updated Logic)](#Digital-Download-Visibility-\(Updated-Logic\))
-   [Late File Uploads](#Late-File-Uploads)
-   [File Removal](#File-Removal)
-   [Mixed Orders (Digital + Physical)](#Mixed-Orders-\(Digital-+-Physical\)%E2%80%8B)[](#Language-Support-\(i18n-Update\))
-   [Language Support (i18n Update)](#Language-Support-\(i18n-Update\))[](#Notes%E2%80%8B)
-   [Notes](#Notes%E2%80%8B)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles%E2%80%8B)
-   [Related Articles](#Related-Articles%E2%80%8B)

* * *

## **Overview**

  

The Customer Access Center (CAC) gives customers secure access to:

-   Current order details
    
-   Past orders
    
-   Fulfillment updates
    
-   Tracking information
    
-   Digital downloads (if applicable)
    

  

Customers access the CAC through an Order Confirmation Email sent after purchase.

  

All system-generated emails and Customer Access Center messaging automatically adapt to the customer’s preferred platform language.

* * *

## **Enable Order Confirmation Email**

  

To allow customers to access their orders via email:  
  

1.  Navigate to **Payments → Settings → Notifications**
    
2.  Locate **Order Confirmation Email for Stores**
    
3.  Toggle **Enable Order Confirmation Email**
    
4.  Click **Save**
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064812474/original/zWSoV6fpxLsuWjRd0cIdGLEyGiX1BXZvUg.png?1770918106)

  
(Shows Enable Order Confirmation Email under Payments → Settings → Notifications)

  

If this setting is disabled, customers will not receive access emails.

* * *

## **Accessing the Customer Access Center**

  

After completing a purchase:  
  

1.  The customer receives an Order Confirmation Email.  
      
    
2.  The email includes a **“View Order”** button.  
      
    
3.  Clicking the button opens the Customer Access Center.  
      
    
4.  The customer logs in using an OTP sent to their checkout email.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064812510/original/S2_Ym5yvxVnbZGLcFi-ACgv6AD299DKevw.png?1770918156)

  

Customers must use the same email address used during checkout.

* * *

## **What Customers Can View**

  

### **Current Order Details**

  

Customers can view:  
  

-   Order items  
      
    
-   Pricing breakdown  
      
    
-   Order status  
      
    
-   Tax and shipping details
    

  

### **Fulfillment Status**

  

If fulfillment is updated by the store owner, customers can see:  
  

-   Partial or complete fulfillment status  
      
    
-   Tracking number  
      
    
-   Tracking URL  
      
    
-   Carrier name
    

  

### **Past Orders**

  

Customers can access previous purchases by selecting **“Orders”** in the navigation menu.

  

### **Direct Access URL**

  

The Customer Access Center can also be accessed directly via:

```
<storeurl>/store/account/orders
```

Example:

```
myawesomestore.com/store/account/orders
```

* * *

## **Digital Download Visibility (Updated Logic)**

  

For digital products:  
  

-   The Download button appears only if at least one valid digital file has been uploaded.  
      
    
-   If no files are uploaded, the Download CTA remains hidden.  
      
    
-   The Customer Access Center displays: **“No downloads available yet.”**
    

  

### **Late File Uploads**

  

If digital files are uploaded after a purchase:  
  

-   The Customer Access Center updates automatically.  
      
    
-   Download access becomes available immediately.
    

  

### **File Removal**

  

If all digital files are removed:  
  

-   The Download button disappears instantly.
    

  

### **Mixed Orders (Digital + Physical)**

-   Digital products with files → show Download CTA  
      
    
-   Digital products without files → show “No downloads available yet”  
      
    
-   Physical products → never show Download CTA
    

* * *

## **Language Support (i18n Update)**

  

All system-generated communications now automatically use the customer’s preferred platform language.

  

This includes:  
  

-   Order Confirmation Emails  
      
    
-   “View Order” button labels  
      
    
-   Customer Access Center system messages  
      
    
-   Download messages  
      
    
-   OTP prompts
    

  

No additional configuration is required.

  

Language is determined by the user’s platform language preference.

* * *

## **Notes**

-   If multiple contacts share the same email, the first created contact is used for login.  
      
    
-   With sticky contact enabled, all orders are consolidated per browser session.  
      
    
-   Ensure your domain is connected and properly configured.  
      
    
-   Digital downloads are available only for products marked as Digital with uploaded assets.
    

* * *

## **Frequently Asked Questions**

  

**Q: Why didn’t my customer receive an Order Confirmation Email?**

Ensure the **Enable Order Confirmation Email** toggle is turned on under Payments → Settings → Notifications.

  

**Q: Why is the Download button not visible?**

The Download button appears only when at least one valid digital file has been uploaded to the product or variant.

  

**Q: Why does the Customer Access Center show “No downloads available yet”?**

This message appears when the purchased digital product does not have uploaded assets.

  

**Q: Are order confirmation emails sent in different languages?**

Yes. Emails and Customer Access Center messages are automatically displayed in the customer’s preferred platform language.

  

**Q: What happens if files are uploaded after purchase?**

The Customer Access Center updates automatically and makes the download available.

* * *

## **Related Articles**

-   ## 
    
    [How to Deliver Digital Products for E-commerce Stores?](https://help.gohighlevel.com/en/support/solutions/articles/155000004054)  
      
    
-    [Getting Started – Create & Sell Products](https://help.gohighlevel.com/en/support/solutions/articles/155000005071)
    

#