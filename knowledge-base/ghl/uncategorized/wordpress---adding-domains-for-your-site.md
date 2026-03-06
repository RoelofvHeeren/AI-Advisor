---
title: "WordPress - Adding Domains for your site"
url: "https://help.gohighlevel.com/support/solutions/articles/48001237041-wordpress-adding-domains-for-your-site"
category: "Uncategorized"
---

# WordPress - Adding Domains for your site

This article provides instructions for adding and configuring domains for a WordPress website. 

  

#### **Covered in this Article**

#### [**How to add Domains to your WordPress website?**](#How-to-add-Domains-to-your-WordPress-website?)

#### [a) Adding new Root Domain as your primary Domain](#a\)-%C2%A0Adding-a-domain-for-your-site%3A)

#### [b) Adding WWW domain as Primary for your WordPress site](#b\)-Adding-additional-domains-for-your-WordPress-site)

#### [c) Adding Sub-Domain to WP site:](#c\)-Adding-Root-Domain-to-WP-site%3A)

* * *

## **How to add Domains to your WordPress website?**

  

Adding a domain to a WordPress site is necessary to make the website accessible to the public through that Domain. A domain serves as the website's address, and visitors can use it to access the site.

  

The article provides step-by-step instructions for adding a primary domain, additional domains, and a root domain (also known as an apex domain or naked Domain) to a WordPress site.

  

It also highlights that users may need a staging domain before adding domains to their WordPress website to see how their Website looks before they attach their domain to it. It also provides specific instructions for users with a domain in GoDaddy.

  

  
**Check out this Loom Video to Know more on Adding WWW/Sub-Domain**

* * *

  

### **a)  Adding new Root domain as your Primary Domain:**

  

To add your first Root Domain _(example: theparag.com)_, click the 'Add Domain' button. Here you can configure your domain in 3 simple steps:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026878441/original/dF8L7f86mmFDIy3Dh3K2zWEC5fmy8bvnZA.png?1717133790)  
**Step 1: Add Domain Name**  
Enter your Domain name and click on the 'Add Domain' Button. If your domain is not added in any other sub-accounts, you will be proceeded to the next step for SSL Validation.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026878504/original/Ww7-d2mm5gRrMiF0T4_ZMhgu8PRdejrjzw.png?1717133966)  
**Step 2: Configure SSL Certificate**  
Here you will get **two TXT records.** Add your TXT records to your DNS Provider and make sure to set the TTL Value to the lowest value possible.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026878537/original/-ZHRv4Cuuai2vNOR3Jp2KtCT64zvZ_SaUw.png?1717134084)

  

  

**Step 2: Update DNS**  
2) Once you add your txt records with your domain provider, click on the confirmation box and proceed to verify records. You will now get one **A Record and CNAME value.** Additionally add the CNAME, if you want to add the WWW subdomain to the website _(Ex: www.theparag.com)_ . 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026878610/original/Vj4OyV2dt3ENLS91G_VTRkIt99VPEbI8CA.jpeg?1717134265)

  

2) Copy the Key and Value of the A-record. Configure the A-record for your Domain in your DNS provider.  
  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292526432/original/8PObbVrcNDXynAJWvbtts8DamUGQQiqelg.gif?1681397514)

  

**Please Note:**

If you are using CLoudflare, please make sure to disable Cloudflare Proxy and switch the Proxy status to DNS only.

  
  

3) To mark this domain as Primary, go to Dashboard and click on your Domain and Mark it as Primary.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026878651/original/ox2WLqwrySVTqzK4VRYo_GOoW1uNNz1IXA.png?1717134344)

  

  

### **b) Adding WWW domain as Primary for your WordPress site**

  

1) While adding www version of root domain (www.theparag.com) when (theparag.com) is already added, you will get the below instruction. Configure the **CNAME Key and Value** generated with your DNS provider and the domain should work as expected.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293451643/original/6mV1Ucwwcj_SaXFoeMs5_0vVXUpfGGYmdg.png?1681907964)**  

2) In an alternative scenario when a user tries to add a root domain namely - _theparag.com_, when there already is a domain existing as _www.theparag.com_, the user will get an A-Record which they can configure in their DNS Provider

### **c) Adding Sub-Domain to WP site:**

  

1) When a user tries to add a Sub-Domain, Configure the **2 TXT records** generated with your DNS Provider.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293452323/original/xRL6UjcYeB9FdjTYYttv3b-XW6UKzxQ5pQ.png?1681908200)

  

2) After configuring the TXT Records, click on **I have added the above domain records in my domain provider's DNS settings** checkbox, and then click on **Verify Records.**   
  
3) You will now get a **CNAME Record. Copy the Key and Value of the CNAME. Configure the CNAME for your Domain in your DNS provider.**

  

3) You will see an unverified tag near the Domain for any added domain, but the DNS Verification is not yet done.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292527850/original/9ykTXd3V8V5A-aIKRDWkP1_GWDUk6XBDdg.png?1681397851)

  

  

4\. Click on DNS Settings to add your credentials to your domain hosting platform  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292528688/original/2nT4JEPZumUQjRs2HVkG-cIRyM1VCDs6cA.png?1681398068)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292528917/original/rkjRkaJDqDoPR9ZpXMLfSRhK46bCtb1zcQ.png?1681398122)