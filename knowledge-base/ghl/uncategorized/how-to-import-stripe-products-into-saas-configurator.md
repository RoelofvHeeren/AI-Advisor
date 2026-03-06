---
title: "How to Import Stripe Products into SaaS Configurator"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006287-how-to-import-stripe-products-into-saas-configurator"
category: "Uncategorized"
---

# How to Import Stripe Products into SaaS Configurator

This guide explains how to import existing Stripe products into SaaS Configurator and link subscriptions to SaaS sub-accounts. This helps agencies migrating to SaaS Mode in HighLevel align their existing Stripe billing with SaaS onboarding.

**Note:** This is a beta feature. To enable, go to **_Agency Setting > Labs_**, and enable _Import Stripe Products into SaaS Configurator_.

  

**TABLE OF CONTENTS**

-   [Step 1: Import Products from Stripe](#Step-1%3A-Import-Products-from-Stripe)
-   [Step 2: Link Existing Stripe Subscriptions to Sub-Accounts](#Step-2%3A-Link-Existing-Stripe-Subscriptions-to-Sub-Accounts)
-   [Notes](#Notes)

* * *

### **Step 1: Import Products from Stripe**

1.  Go to **SaaS Configurator** → **Create Plan**.
    
2.  Click **Import from Stripe** (top-right).  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458795/original/Fenl3xpjcPU-ePO0tVS8NNpMwVGK84czoA.png?1757499819)
    
3.  Search for the product by name.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458832/original/xunaDiqug2fXm0Ncr-fqPcpmYkvTbI6mAQ.png?1757499852)
    
4.  Select the product and confirm.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458863/original/x6iQJ60mCGRGP8uUXS9WiPv0zHkpHb-yOg.png?1757499890)
    
5.  The product details will import into the Configurator.
    
6.  Complete the remaining setup:
    
    1.  **Category and hierarchy** (for upgrade paths)
        
    2.  **Pricing** (new price IDs will be created)
        
    3.  **Features, snapshots, trials, and rebilling****![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053459070/original/eoLzrqYbq9DMb3Sy8kZI6MMM1-EAkgN0WQ.png?1757500019)**
        
7.  Save the plan.
    

* * *

### **Step 2: Link Existing Stripe Subscriptions to Sub-Accounts**

1.  From **Agency View**, go to **Sub-Accounts → Manage Client**.
    
2.  Open the **SaaS tab**.
    
3.  Click **Add a SaaS Subscription**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053464674/original/YoIw0sOeUufzFl-H1qXTKwhhebh_A1Xy6g.png?1757503319)
    
4.  Choose **Stripe** as the payment provider.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053464776/original/Uyglytv-oyhuuzMEbRdTt6hJc6B6NJ1dfg.png?1757503368)
    
5.  In the _Request Client Payment Details_ modal, select **Link Existing Customer in Stripe**.
    
6.  Choose the customer profile with an active subscription.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053465251/original/jWILCBoeA3fA5D8ojDbLAWB8_W4KwnFqoA.png?1757503640)
    
7.  Select the subscription from the right-hand panel.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053465504/original/tCEwBmRQDUYJjLoktghkYM7-4dx8XxmA_Q.png?1757503705)
    
8.  Confirm to enable SaaS on the sub-account.
    

* * *

### **Notes**

-   Importing a product does not carry over existing Stripe price IDs. New IDs are created.
    
-   Existing clients will not be disrupted; their subscriptions can be mapped seamlessly.
    
-   Available for **Legacy/V1 SaaS system** only.
    

  

  

  

###