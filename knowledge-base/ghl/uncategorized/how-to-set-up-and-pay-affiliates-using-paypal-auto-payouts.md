---
title: "How to Set Up and Pay Affiliates Using PayPal Auto Payouts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003658-how-to-set-up-and-pay-affiliates-using-paypal-auto-payouts"
category: "Uncategorized"
---

# How to Set Up and Pay Affiliates Using PayPal Auto Payouts

  

## **How to Set Up and Pay Affiliates Using PayPal Auto Payouts**

This guide will help you configure PayPal Payouts API with GHL for paying your affiliates directly from the platform. Currently, PayPal is the only supported payment method for Auto Payouts, and this article will walk you through the setup process and how to pay affiliates.

* * *

## **Requirements:**

-   A PayPal Business Account
-   Payouts must be enabled on your PayPal account. Follow the steps below to enable it.

* * *

## **1\. Setting Up PayPal for Auto Payouts**

Before you can start paying affiliates, you need to configure PayPal Payouts for seamless integration with GHL.  
  

  

  

### **Step 1: Access PayPal Developers Page**

-   Go to the PayPal Developers page.
-   Log in to the developer dashboard by clicking the **"Log into dashboard"** link at the top-right corner.  
      
    

### **Step 2: Enable Payouts**

-   In the dashboard, click on **My Account** from the top-right corner.
-   Scroll down to the **Permissions** table and check if "Payouts" has a green checkmark under the Live column.
-   If not, click **Enable** and follow the prompts. You may need to contact PayPal to enable the Payouts API.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810844/original/M0FUGYqV_uHTNxz7mYFUIx-WSXCl0HklOA.jpeg?1727706478)  
      
    

### **Step 3: Create App on PayPal**

-   In the left-hand menu, click on **Apps and Credentials**.
-   Click **Live**, then proceed to **Create App**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810841/original/NSoegoc40tjXesKnIpetO1w650hVCA4n0A.jpeg?1727706478)  
      
    
-   Enter "GHL Payouts" as the app name and click **Create App**.
-   If you already have an app created, you can skip this step.

**Please note:** If you see "Live/Sandbox" at the top-right after creating the app, ensure "Live" is selected.

### **Step 4: Obtain App Details**

-   After creating the app, you'll be provided with the **Client ID** and **Secret Key**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810831/original/iyCmqdpvQr0Po9cIE2PEy3XnYzAdeNfX7A.jpeg?1727706478)
-   Keep these details handy as they will be required to connect GHL with PayPal.  
      
    

### **Step 5: Connect GHL and PayPal**

-   Navigate to the **Payment Integration** page in GHL.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810837/original/1cRVuJLXOqaIcSDV-kHzH4jJ16Jv90C-xA.jpeg?1727706478)  
      
    
-   Scroll down to PayPal and click **Manage**.
-   Enter your Live **Client ID** and **Secret Key** from Step 4.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810833/original/2w5UqQ6Z-a96ulgfVBx3i5xuOpQpIoC0Tw.jpeg?1727706478)  
      
    
-   If testing in the sandbox, repeat the process with sandbox credentials, ensuring "Sandbox" is selected on PayPal's Apps and Credentials page.

* * *

## **2\. Using PayPal for Affiliate Payouts**

Once PayPal is configured, you can now pay your affiliates using GHL’s Auto Payouts feature.  
  

### **Step 1: Navigate to the Payouts Page**

-   In the GHL Affiliate Manager, go to the **Payouts** page.

### **Step 2: View Approved Payouts**

-   Switch to the **Approved for Payouts** tab to see the list of approved payments awaiting disbursement.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810832/original/dVZ30ePq70b82bEEZmQdPLgqfQY5bo5SHQ.jpeg?1727706478)  
      
    

### **Step 3: Select Affiliates for Payouts**

-   Check the box next to the payouts or affiliate names you wish to pay.

### **Step 4: Initiate Payout**

-   Once affiliates are selected, click the **Pay** button to pay multiple affiliates together.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810834/original/oRxnWIS4e36B_hYucBxsEhnFj0mLn7CoNA.jpeg?1727706478)  
      
    
-   Alternatively, click the blue **Pay** icon next to an affiliate’s name to pay them individually.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810839/original/wfhn3fMEF1MCCfPHgG2P6G2sKQLD7J-2nw.jpeg?1727706478)  
      
    

### **Step 5: Review and Confirm**

-   Review the selected payouts and confirm the details.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810835/original/2evoYu3FtiYxTDnw0yGN41Gr34CZ9wzW2A.jpeg?1727706478)  
      
    
-   Click **Pay Now** to initiate the transfer.

**Important:** 
If your PayPal Business account is not linked, an error message will prompt you to link the account.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810843/original/NsDNIWym5yNCrCmJRCc0bJ8moQXIQb-W9A.jpeg?1727706478)

### **What happens after a payout?**

-   After clicking **Pay Now**, successful payouts will appear under the **Paid** tab.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810836/original/z7D8OJHJo_IhkUFdoZeCwvkdBnA868XC7Q.jpeg?1727706478)
-   PayPal may take some time to process payments, during which the status might show as "Pending." Refresh the page to check updates.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810840/original/8uZSr5yeQwokBZryI6uBibEOPzgwYlW1GA.jpeg?1727706478)  
      
    
-   After a successful payout, both the admin (sender) and the affiliate (receiver) will receive a confirmation email.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810838/original/7I68WjZN_QiyXmlorBKoXKvXx7DyFZNuRQ.jpeg?1727706478)

* * *

## **3\. How to Add an Affiliate’s PayPal Account for Payouts**

Before paying affiliates, ensure their PayPal details are linked. To learn how to add or link an affiliate’s PayPal account, [click here.](https://help.gohighlevel.com/en/support/solutions/articles/155000002341)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810842/original/Ie3iDrFMfWrXLJci_SE9_0LVg6wWPN-G_A.jpeg?1727706478)

  

* * *

## **What's Next:**

-   [What Payment Gateways supported in Affiliate manager for Product Sales?](https://help.gohighlevel.com/en/support/solutions/articles/155000003656-what-payment-gateways-supported-in-affiliate-manager-for-product-sales-)
-   [FAQs for Affiliate Payouts](https://help.gohighlevel.com/en/support/solutions/articles/155000003661-faqs-for-affiliate-payouts)
-   [How to add/link Affiliate's Paypal Account for Payouts](https://help.gohighlevel.com/en/support/solutions/articles/155000002341-how-to-add-link-affiliate-s-paypal-account-for-payouts)