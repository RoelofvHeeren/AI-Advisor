---
title: "How to add an Additional Domain for WordPress site"
url: "https://help.gohighlevel.com/support/solutions/articles/48001219237-how-to-add-an-additional-domain-for-wordpress-site"
category: "Uncategorized"
---

# How to add an Additional Domain for WordPress site

This article will help you add an additional domain for your WordPress site hosted through us.

  

# Instructions to add an additional domain  

-   [**Step 1: Click on the 'Add domain or sub-domain button**](#Step-1%3A-Click-on-the-'Add-domain-or-sub-domain-button)
-   **[Step 2: Add CNAME record for your domain](#Step-2%3A-Add-CNAME-record-for-your-domain%C2%A0)** 
-   **[Step 3: Create an A record for your domain now](#Step-3%3A-Create-an-A-record-for-your-domain-now)**

  

### **Step 1: Click on the 'Add domain or sub-domain button**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241451628/original/0pyp8k6UCxrx-a4r_Tv8BymxwJyg9w9dtA.png?1658945882)

  

### **Step 2: Add CNAME record for your domain** 

-   Enter the domain name which you want to use
-   Click the 'Generate CNAME' button
-   Copy the system generated Key and Value
-   Add a CNAME record based on these values

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453423/original/MB0cSKfLzkPl7jZebMd_P18yIL5E3xXUgA.jpeg?1658946532)

  

-   Check the box stating you've added a CNAME
-   Hit 'Verify and Create Certificate'

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241452662/original/koU5cVomDZ5NXPJYr2bE1wRO3cGN5LvrVg.png?1658946225)

  

**Please note:** The value of the CNAME and A record might be different (wp1.msgsndr.com, wp2.msgsndr.com, etc.) for you. Please ensure you check the value from your screen before adding the record.

  

  

### **Step 3: Create an A record for your domain now**

-   Copy the value from the popup and add an A record in the domain settings
-     
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453781/original/FnIWxx-fVO7jvAHMDHRYIz2HH3rSIiNPcg.png?1658946659)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453826/original/0DTFtugrrIC_xSnBs2lFA8X6gUtlX-q0ZQ.png?1658946682)

**Please note:** The value of the CNAME and A record might be different (wp1.msgsndr.com, wp2.msgsndr.com, etc.) for you. Please ensure you check the value from your screen before adding the record.

  

That's it. Now once the DNS records have propagated successfully, you can set your new domain as primary domain from the WordPress Dashboard.

  

### Linked Articles for some Domain Registrars

1.  [How to add a CNAME Record in CloudFlare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
2.  [How to add a CNAME Record in Domain.com](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
3.  [How to add a CNAME Record in BlueHost](https://my.bluehost.com/hosting/help/resource/714)
4.  [How to add a CNAME Record in HostGator](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
5.  [How to add a CNAME Record in GoDaddy](https://ca.godaddy.com/help/add-a-cname-record-19236)
6.  [How to add a CNAME Record in NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

  

Some domain providers take 24 - 48 hours to propagate DNS changes while others are instant. You can use tools like [https://dnschecker.org/](https://dnschecker.org/) to check if your DNS changes are propagated or not.

  

* * *

### Domain Not Adding Troubleshooting

  

This can happen due to a few reasons

1.  There is a typo in your domain name \[_like in the example above_\]  
    In this scenario fixing the typo will resolve your issue  
      
    
2.  Your DNS changes haven't propagated yet  
    In this case you need to wait longer and try again after a few hours or the next day to see if it works  
      
    
3.  Your DNS configuration is not setup correctly  
    Please reach out to your Domain Provider and discuss the errors with their support team  
      
    
4.  Maybe you have conflicting records for the same subdomain \[_for example if [blog.mydomain.com](//blog.mydomain.com) has a CNAME record pointing to [wp1.msgsndr.com](https://wp1.msgsndr.com) but it also has an A record pointing to some other provider_\]  
    In such cases removing the other duplicate record will fix your issue  
      
    

In most cases with your DNS setup, HighLevel support teams will not be able to assist you and you may need to reach out to your domain provider.