---
title: "Shipping: How to Connect a Shippo Integration?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-"
category: "Uncategorized"
---

# Shipping: How to Connect a Shippo Integration?

#   

# Step 1: Create Live token in Shippo

Generate live Token in Shippo can be accessed at: _Settings > Advanced > API > Live Token_

1.  Click on generate live token:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306280/original/UKPUtVdnqBnQjuDbRZy1wth6ne_LYu_MJg.jpeg?1724107619)  
      
    
2.  Copy the live token:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306276/original/2OS13zRiHnVR2fBi_mDa9wb6JChQy3ZDVQ.jpeg?1724107619)  
      
    

# Step 2: Setting up Package template & Shipping options in Shippo

### **Setting up Package Template in Shippo:** 

1.  Package Template can be accessed at : _Settings > Shipping > Packages > Add New Template_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306273/original/3lndX_6sYWU_Mci25DAI9z1ASDTRCW0cbg.jpeg?1724107618)  
      
    
2.  Store owners can either add a custom dimensions or choose a standard carrier provided parcel dimension:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306269/original/GnAEz-kElmkEQFjwplZrRgViuuoAGksgyw.jpeg?1724107619)  
      
    
3.  If standard carrier provided parcel is chosen:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306267/original/2CZ9p0FvLXVrxjLNy_N2ZCDI0y7xhSBfKQ.jpeg?1724107618)  
      
    
4.  For the carrier provided parcel, package weights need to be set here. If the current template needs to be set as default, checkbox needs to be ticked here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306268/original/sOZEggUzbaXXhBbR4lm_shySudr5nB3ppQ.jpeg?1724107618)  
      
    

### **Setting up Shipping origin in Shippo:** 

1.  Sender & Return address can be setup at: _Settings > Address book > Sender & return > Add New address_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306279/original/sE5aOkSa7IZ6g5CPsjwJm1asqTwn-qpJiw.jpeg?1724107619)  
      
    
2.  Add the complete address and select default sender and return address(if needed):![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306271/original/vjMu6fhsoCrfObjv3jUs_qynO-oX96TQ7w.jpeg?1724107619)  
      
    

### **Setting up Shipping options in Shippo:** 

1.  Setup shipping options at : _Settings > Shipping > Rates at Checkout > Add Shipping option_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306278/original/elDXW9yMYmLOfH1u-81W6DGMmfPW8bMMMw.jpeg?1724107619)  
      
    
2.  Choose the Live rate option and select the preferred carrier services: ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306277/original/7Rexr6I7sE3LZL8ncKHqzkdh8HsDrAXPbg.jpeg?1724107619)  
      
    
3.  **Store owners can earn by charging markup fees on delivery**. This will be add on charges on top of live rates. Store owners can either choose a percentage based or fixed markup. A fallback delivery fees value can be defined if live rates aren't fetched.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306272/original/_qH9MKX51RmtcfVo6JA_LbsimHZIBoTVxA.jpeg?1724107619)  
      
    
4.  Live rates on checkout page will have the name mentioned under Shipping options![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031306275/original/sc_M8Y0k7W4AJWniNHUSI61ZgrqOcSDCxg.jpeg?1724107619)  
      
    

# Step 3: Setup Shipping Origin in Shipping Settings

In your Ecommerce store payment section, setup the shipping origin which will be considered as Sender's address while creating order in Shippo. This can be accessed at : _Payments > Settings > Shipping Origin_. Add details and save.

  
**Note:** _It should be a valid address else there will be error in Shippo prohibiting from purchasing Shipping labels._

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510354/original/-25uLIJxsSXvea0cnPc_QlFPX2wEwxIs0A.png?1724336225)

# Step 4: Install Shippo app from marketplace

In the marketplace app or Integrations page (in Settings), search for Shippo and Install the application. Once installed, add the Live token to continue.

  

# Step 5: Enter the Shippo live token & continue

1.  Enter the live token that was generated in Step 1:  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510646/original/4Kl-igCq0UwIEBwq1GhTWb_sHo1zy7EVCg.png?1724336377)
2.  Enable live rates in shipping after setting up the package template, Shipping origin and Shipping options in Shippo:  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031510736/original/EzX9WcJFUNgZHEmbPpkhdWKGFmKGLd0Weg.png?1724336425)  
    
3.  If something is missing while setting up package template, Shipping origin and Shipping options in Shippo, following error will popup:  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031511338/original/zRJYAv6iFSCaJ5-B_yGraZql-U_OlOcHEw.png?1724336766)

##   

# Step 6: Enable/ Disable live shipping rates

Shipping rates can be enabled and disabled by ticking and unticking the checkbox respectively. Post enable/ disable of  live shipping rates, click Save.