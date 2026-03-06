---
title: "How to migrate Shopify stores to Highlevel (including products, collections, orders, contacts, and transactions)?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004056-how-to-migrate-shopify-stores-to-highlevel-including-products-collections-orders-contacts-and-tr"
category: "Uncategorized"
---

# How to migrate Shopify stores to Highlevel (including products, collections, orders, contacts, and transactions)?

  

  

  

About: 

Store owners can now effortlessly import and sync their Products and Collections from Shopify to HighLevel (GHL). This enhancement enables store owners to migrate their entire Shopify store, including products, collections, contacts, orders, and transactions, into GHL. Additionally, Shopify store owners can leverage GHL’s marketing tools, including triggers like Order Submitted Trigger and Payment Received Trigger for better automation.

In the previous version of the Shopify integration, users could sync orders, contacts, and transactions from Shopify to HighLevel. The latest update expands this functionality, allowing store owners to seamlessly migrate and sync all their products and collections as well.

Order, Contacts & Transactions syncing from Shopify to Highlevel: [https://ideas.gohighlevel.com/changelog/shopify-order-syncing-inside-ghl](https://ideas.gohighlevel.com/changelog/shopify-order-syncing-inside-ghl)

How to use:

1.  Access the Integration: 
    
    Shopify integration can be found within a sub-account at: 
    
    Settings > Integration > Shopify
    
    .
2.  Connect the Shopify Store: 
    
    Users can click on "connect" button to begin the setup. A modal will appear where users must enter Admin API access Token and a valid Shopify store URL as the first step.
3.  Select Data to Import:
    
     In the second step, users will be directed to the Import Elements screen, where they can select which data to import from their Shopify store. The available options for import are: 
    
    Contacts, Orders, Transactions, Products, Collections
    
    .
4.  Configure Syncing Settings:
    
     The third and final step takes users to the Sync Settings screen, where users can choose which data to continuously sync from Shopify to GHL in future. The options for syncing include: 
    
    Contacts, Orders, Transactions, Order submitted trigger, Payment received trigger, Products, Collections
    
    .
5.  Completing the Setup:
    
     After selecting the desired elements to import and sync, click 
    
    Save
    
    . The import and sync process may take some time to complete.
6.  Manage Settings: 
    
    Once the Shopify integration is successfully connected, users can enable or disable the elements they want to sync for future orders from the Shopify store.
7.  Reimporting Data:
    
     If users wish to reimport data, they can disconnect and reconnect the integration, allowing them to reimport any data they may have missed during the initial import.

Notes:

-   Taxes are not mapped in Products while importing or syncing the Products.
-   For each order, only one transaction is created in Highlevel.
-   Order statuses are marked as "Completed" or "Cancelled" when synced with Shopify.
-   Merged contacts in Shopify will have the primary contact updated in HighLevel.
-   If there are no changes to the SEO details in Shopify (default SEO settings), the data will be received as null in HighLevel.

  

**Frequently Asked Questions**

**Q1: Why aren't my contacts syncing from Shopify?**
Ans: Due to a Shopify API update, the Basic plan no longer provides access to customer PII (customer names, emails, addresses, phone numbers). This data is required to create Contacts in the platform.
Note: To sync contacts, you must upgrade to Shopify Grow or Advanced or Plus plan.
Reference: https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/m-p/2496209

**Q2: What Shopify data can sync on the Basic plan?**
Ans: On the Basic plan, you can still Import and sync:
- Products
- Collections
But you cannot sync:
- Contacts
- Orders
- Transactions

**Q3: It used to work before. Why did it stop now?**
Reference: https://community.shopify.com/c/shopify-discussions/no-more-customer-pii-in-custom-app-integrations-for-shopify/td-p/2496209
Admin APIs have these restrictions, and even the webhook calls that we receive have stopped returning the customer data
We previously used an older Shopify API that allowed PII access on all plans. That API is now deprecated. As we migrate to the new API, these restrictions will apply across the board.

**Q4: Where can I check or manage app permissions?**
Manage your Shopify app configuration here: [Shopify App Configuration](https://admin.shopify.com/store/1phxbv-b1/settings/apps/development/195355017217/configuration)

**Q5: Where can I find my Shopify Store name?**
If you don't know your Shopify store name, you can find it by logging into your Shopify account. Once you login to Shopify, you can find your store name by looking at the URL at the top of the page - your store name is the name or combination of letters and numbers to the right of "store/". In this example, the store name would be ef760-ef.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784356/original/-7XMs4nO56tCJNcc1BE3TJ-V7pTVnPl9uA.png?1749110147)

  

Images:

-   Shopify Integraiton:
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202623/original/_Peo6N2BkjRgzno8NXIikkxO9_Pp-XT72A.jpeg?1729611657)

-   Adding store details:
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202622/original/K3atPqA7y9B2OSCipqOUFzWKeFvWnTgllg.jpeg?1729611657)

-   Import elements from Shopify:
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202627/original/WOUy98pf7goBaJoKUfX-ciAhZKk1Hw9QAw.jpeg?1729611657)

-   Future Sync permissions from Shopify to Highlevel
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202626/original/LobOcVmWloIpiGVBd6gmKJ_c1w2X67A4gA.jpeg?1729611657)

-   Product imported from Shopify to Highlevel:
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202624/original/UCQ4wUC6hfSgAlw35QsXeXSRr6HyXYz_RA.jpeg?1729611657)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202620/original/uxTIZordt6nnbIfw7H4bu0_slTI2KJD90Q.jpeg?1729611656)

-   Collections imported from Shopify to Highlevel
    

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202621/original/DiGYDz69HWne8acd9KPQfRsP3jy6pZmu5A.jpeg?1729611656)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035202618/original/-MvslTDBE6ltzoeNo6vIDUmzpDe8SSScZw.jpeg?1729611656)

  

  
  

# Setup on Shopify side- Create a Custom App in your Shopify Store

Before we setup integration we need to create a custom app in your Shopify store.

  

**1.1    Login to your Shopify store and click on "Apps" in your dashboard**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784725/original/48jM4RAy56_-sBkaUlY5DDsK4mgHHCv_fQ.png?1749110415)

  

  

  

**1.2 Then, click on "Develop apps" on the top of the screen highlighted in the below picture**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784724/original/0BvY0gyS-9onlw6PAc7ADjPmPaRTejVcFQ.png?1749110414)

  

  

**1.3 Then, click on "Allow custom app development" (if you have already enabled this permission then Shopify** 

**will take you to Step-1.5)**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784722/original/uqjEQ-vE6-fjFPJG208MCOdsEQjojfegYw.png?1749110414)

  

  

  

**1.4 In the next screen, click on "Allow custom app development"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784721/original/HJxczrplMIn22jZWS_BqhaRVnGOaGyx7kg.png?1749110414)

  

  

  

**1.5 Then, click on "Create an app"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784723/original/DcW9QkhF0ggm7n570OkhZrOEvnzF2IUnbg.png?1749110414)

  

  

  

**1.6 Enter a name for the app (for example "Marvel's App"), select your email under App developer** 

**and click on "Create app"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784726/original/ddGYr3YeACLOD94H5ESOyqtACESmRX-Elw.png?1749110415)

  

  

  

**1.7 Then, click on "Configure Admin API scopes" to configure Admin API integration**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784746/original/w0r0eiswks9H8A1X_qKumkJ3qSHfm8arOg.png?1749110419)

  

  

  

**1.8 Search/scroll down to the "Orders" and You will need to enable at the very** 

**least "read\_orders" access**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784741/original/9Bc1eUmcyLXOsxKzNizCtq8d9APkdzqD2g.jpeg?1749110417)

  

  

**1.9 Add the "read\_customers" scope. In configuration edit the "Admin API Integrations". In this section under**

**customers, select the "read\_customers" tick box.**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784728/original/pqsICkPgVz9CNI_N5LmuMCLQssabwqsMLA.jpeg?1749110416)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784743/original/u6N-k-MJycXEloF47EwwBoYGj4aYfFefkA.png?1749110418)

  

  

  

**1.10 Then, Search/scroll down to the "Products" and You will need to enable at the very** 

**least "read\_products" access**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784742/original/YBNaq-IKtORL3DZVRQUPVJzt5s-OqsTZ8Q.png?1749110417)

  

  

  

**1.11 Then, Search/scroll down to the "Inventory" and You will need to enable at the very** 

**least "read\_inventory" access**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784738/original/h4YEhN8Csqh7b-A3BSj-p66Fp6iSYI9vBA.jpeg?1749110417)**  

  

**1.12 Once you've enabled read access on "Orders, Product, Customer, and Inventory", save the app by clicking on the** 

**"Save" button on the top right**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784748/original/VQAIl4NMY7cGJhl1GTl5iMyGoelvYZxStg.jpeg?1749110420)**

  

  

**1.13 After saving click on the "Install app" as in the image below**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784749/original/B-4lEc_OiQX7KdgpwMM_Tw4ArYVFU7l0WQ.jpeg?1749110420)

  

  

  

**1.14 Then, click on "Install" from the pop up as in the image below**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784735/original/kSso3mH0uZq_7Ds5m5btTI_48nvZSiG4-g.png?1749110417)

and voilà your App is ready to be integrated now!

  

  

**1.15 After installing, the "Admin API access token" that you need for the Shopify integration can** 

**be found under the API credentials section, click on "Reveal token once" to get access to the token**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784747/original/HGC1H_rjsID1_LQngNWz9f9SD2DQwbwpWA.png?1749110419)

  

  

  

**1.16 Copy the "Admin API access token" by clicking on the clipboard icon**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047784745/original/O6BIAZWPpuNQOSjC74A6KipXCtlFGXsPBA.png?1749110418)