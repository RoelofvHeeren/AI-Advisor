---
title: "How to set up Root Domain/Subdomain for your Funnels/Websites?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-"
category: "Uncategorized"
---

# How to set up Root Domain/Subdomain for your Funnels/Websites?

Adding a domain to your account enables website and funnel functionalities to be created and utilized. A domain refers to the web address, for example, a root domain like **mydomain.com** or a subdomain like **www.mydomain.com**. To begin, establish a domain with a registrar like Cloudflare, GoDaddy, or others. Afterward, you can integrate the Domain into the system for use.

  

**Please Note:**

  

This article covers how to manually configure a domain. To learn how to use the automated Domain Connect feature, [click here](https://help.gohighlevel.com/support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-). 

* * *

####   

**TABLE OF CONTENTS**

-   [Can I use the same Domain with more than one platform?](#Can-I-use-the-same-Domain-with-more-than-one-platform?)
-   [Can I add the same Domain to more than one account?](#Can-I-add-the-same-Domain-to-more-than-one-account?)
-   [How many domains can I add to one account?](#How-many-domains-can-I-add-to-one-account?)
-   [Do I have to purchase SSL for the Domain separately?](#Do-I-have-to-purchase-SSL-for-the-Domain-separately?)
-   [Can I buy a domain from you directly?](#Can-I-buy-a-domain-from-you-directly?)
-   [How many funnels/websites can I connect with one Domain?](#How-many-funnels/websites-can-I-connect-with-one-Domain?%E2%80%8B)
-   [How to configure Domains for Funnels and Websites?](#How-to-configure-Domains-for-Funnels-and-Websites?)
-   [How to check your DNS records (DNS Lookup Tool)](#How-to-check-your-DNS-records-\(DNS-Lookup-Tool\))
-   [Removing a Domain from the account](#Removing-a-Domain-from-the-account)
-   [Troubleshooting](#Troubleshooting)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **How to configure Domains for Funnels and Websites?**

  

To set up your new Domain, adhere to the following instructions:

  

### **Step 1:** (DNS Setup) Add an A record OR a CNAME record:

  

You must complete this step within your domain registrar, such as Cloudflare or GoDaddy. Based on your domain host, you can choose one of the following two methods:

  

**CNAME:**  
  
You can add a CNAME record for your subdomains using the value **sites.ludicrous.cloud**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261333/original/Cebw5DDhzZj8UIMgk3c4edx26VHIbmaVDw.png?1710970081)**

  

> **Important:  
>   
> **
> 
> -   In your DNS provider, the Host/Name should be only the subdomain part (for example, www for www.mydomain.com, or sub for sub.mydomain.com).  
>       
>     
> -   The Value/Target should be sites.ludicrous.cloud.  
>       
>     
> -   Do not create both a CNAME and an A record for the same host (for example, www). Choose either the CNAME method or the A record method below.  
>     

  

Instructions on Adding a CNAME record to various Domain Registrars:  
  
[Namecheap instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)  
[Godaddy instructions  
](https://godaddy.com/help/add-a-cname-record-19236)[Cloudflare instrucions](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/)  
[Wix instructions](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account)  
[Hostinger instructions](https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records-on-hpanel)  
[BlueHost instructions  
](https://www.bluehost.com/hosting/help/cname)

  

**Please Note:**

  

If you are using Cloudflare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261325/original/WqLp3FjD91M7f1lbXb5X4U5rhsoBk8bhGw.png?1710970030)

  

  

**A Record**

  
Alternatively, you can add an A record for your root domain or subdomain, directing it to **162.159.140.166**

  

[Namecheap instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)  
[Godaddy instructions](https://godaddy.com/help/add-an-a-record-19238)  
[Cloudflare instructions](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-a-record/)  
[Wix instructions](https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account)  
[Hostinger instructions](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records-in-hpanel)  
[Bluehost instructions](https://my.bluehost.com/hosting/help/713)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261352/original/zVAN7Kexv39pqBfSdapgoVA-q9oOMRblBA.png?1710970171)

  

**Please Note:**

  

If you are using Cloudflare, please make sure that the Proxy status is set to DNS only as we do not support Cloudflare Proxy. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047437419/original/F1N3N4qxFT2WWJfMKD8tULZUNR4Ghyv-FA.png?1748527429)

  

  

After adding your Domain to the Domain Registrar, it might take some time for the DNS settings to propagate, so if it doesn't work immediately, give it some time (up to 24 hours) and try again.

  

  

### **Step 2:** Add a Domain/Subdomain to your sub-account:

  

Go to **Settings** in the left navigation menu  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025447474/original/kwCso7zgEzLgmI9sNfrMcRnS3fU7UxgLcw.png?1714693641)

  

Next, go to **Domains** & **URL Redirects** > click the **\+ Connect a domain** button  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146928/original/Rr-LrDGD5yQGkJQyvXnSyNiJk2_zvX7JUA.png?1757042712)

  

  

Click on **Connect** for the Option **Funnel/Website/Store/Blog/Webinar.**  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146937/original/8GP-x7idWWh_vqjLNejiCYs9GE5sNHRDxg.png?1757042789)

  
  

Type in the **Domain or Subdomain** and click on **Continue**  
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147160/original/8fIohGOKHPn3q5xl3h90Qfd1GmNmh3NUPQ.png?1757043498)**

  

### For Root Domains (e.g mydomain.com):

  

**Enter your domain in the** **Domain URL** field **(use the root domain, not the subdomain) then click the** **Add record manually** link.

-   **By default, the system will enable adding the** **www** subdomain in addition to the root domain. 
-   This option will also enable a [301 redirect](https://help.gohighlevel.com/en/support/solutions/articles/48001202713) so that all traffic to the **www** subdomain will be sent to the root domain. 

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147097/original/bFAPLFMv-wHky3TCQPSV-MKqAWjagoeumA.png?1757043369)**  

  

**Note:** Clicking the **Continue** button will initiate the "Domain Connect" feature which will lookup where the domain is registered and attempt to authorize a connection to automatically add the necessary DNS records. If your registrar is not supported yet, you will be prompted to manually add the DNS records with your domain registrar. [click here](https://help.gohighlevel.com/support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-) for more information about that process. 

  

### For Subdomains (e.g sub.mydomain.com)

  

**Enter your subdomain in the** **Domain URL** field  ****then click the** **Add record manually** link.**  
  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147125/original/V44hZD23aoMqw3JydS9fsm8VvO7dfnHwiQ.png?1757043401)**  

  

**Note:** If you want a funnel step / website page to open without a path (domain.com instead of domain.com/home), you can select that page as the default page for that domain. A default page can be selected from Settings > Domains & URL Redirects > Manage Domain> Edit Domain  
**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147401/original/Tk8djoyiQGq46tvs48G7nSIMd7mMfA_9rw.png?1757044735)**  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025451415/original/Szbz_zsNHlvMP4XRIVU1oAVDDMfW4f13Gg.png?1714709918)**

### **Step 3:** Associate the Domain to a Funnel/Website:

  

Once the DNS records have been verified, you will be presented with a screen where you can choose which funnel or website you'd like to link.  
  

-   First, choose the **funnel or website**.  
      
    
-   Then, you'll be presented with an choice of which **funnel step or page of a website** you'd like to be the default landing page.  
      
    
-   Finally, click the **Link Domain** button. This will complete the process and add an SSL certificate automatically. Please note that it will take a few minutes to complete on the backend.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025452367/original/lClR_V1asFvnVRVhCCXuU87lJmoq_UwCyA.png?1714712472)

* * *

## **How to check your DNS records (DNS Lookup Tool)**

  

MXtoolbox is a popular online tool that can help you check your Domain's DNS records. Follow these steps to use MXtoolbox for checking DNS records:

  

Go to the MXtoolbox website at [https://mxtoolbox.com](https://mxtoolbox.com).

  

On the homepage, you will see a dropdown menu with options like MX Lookup, DNS Lookup, Blacklists, etc. Click on the dropdown menu and select the type of DNS record you want to check. Some common options include: standard.

  

-   **MX Lookup:** Check your Domain's mail exchange (MX) records.  
      
    
-   **DNS Lookup:** Check various DNS records like A, AAAA, CNAME, NS, etc.  
      
    
-   **TXT Lookup:** Check the text (TXT) records for your Domain, which often contain information like SPF, DKIM, and DMARC records.  
      
    
-   **CNAME Lookup:** Check your Domain's canonical name (CNAME) records.  
      
    

After selecting the appropriate option from the dropdown menu, enter your domain name (e.g., example.com) in the input field next to the dropdown menu.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935422/original/r72y28SyHztkt_csEjGTLTlBNqdYLMo5KQ.png?1679074391)  
  

Click the  **"DNS Lookup"** button to initiate the search.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935621/original/Jee5ALw6wFToCaVxUh33b6uN4_85Davtuw.png?1679074464)

  
  

The tool will then display the DNS records for the Domain you entered. You may need to scroll down to see all the results.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935711/original/5jh9-FmFM0N9r0A47VHncXsYKMskKnAz-Q.png?1679074511)

  
  

Remember that the DNS records might not be updated instantly if you've recently changed your Domain's configuration. The changes can take some time to propagate across the internet, typically up to 24-48 hours.

* * *

## **Removing a Domain from the account**

  

To remove a domain from your account, go to **Settings > Domains & URL Redirects > Manage**   
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147213/original/5iOelPRWyawebJengpt6NOhogujTD6vnMw.png?1757043821)**  
  
Click on the **three dots** > Delete > confirm your choice on the confirmation dialog box.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147479/original/bbTbTx4Vn2h0xpKaQdWR_Y5CV0XgIGjG_g.png?1757045182)

* * *

## **Troubleshooting**

  

### **What causes an SSL Error?**

  

An SSL (Secure Sockets Layer) error occurs when there is a problem with the SSL certificate or the SSL/TLS (Transport Layer Security) configuration on a website. SSL/TLS is a security protocol that provides encryption and secure communication between a user's browser and the web server. SSL errors can result from various issues, often indicating that the connection between the user's browser and the web server is insecure.

  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940333/original/HV9QUGCMKridl3Wqc_xjtsWJcRNBYYXMEA.png?1679076664)**  
  

If your Domain is showing a privacy/SSL error, it can be due to one of the following reasons:  
  

-   Multiple DNS (A or CNAME) records exist for the same domain/subdomain. One Domain or subdomain can only work with one platform/server at a time, and that's why you need to have only one DNS record set up for that domain/subdomain.so  
      
    
-   There is no DNS record added for the Domain  
      
    
-   The Domain has an AAAA added, other than the A/CNAME record

  

### **What causes the error "CNAME / A record not found."**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940786/original/TN2a5AUm6BajuKFNhh417MByzKsFzoVHng.png?1679076918)

  

  

When adding a domain manually in HighLevel, you may see an error such as:

  

**\> \*\*"Couldn't find a CNAME/A record pointing \`www\` to \`sites.ludicrous.cloud/162.159.140.166\`"\*\***

  

This does \*\*not\*\* mean you should enter the whole text \`sites.ludicrous.cloud/162.159.140.166\` into a single field. It means HighLevel could not find \*\*either\*\* of the following DNS records for the host \`www\`:

  

**\- A \*\*CNAME\*\* record with**  

  - \*\*Host/Name:\*\* \`www\`  

  - \*\*Value/Target:\*\* \`sites.ludicrous.cloud\`  

  

  \*\*OR\*\*

  

**\- An \*\*A\*\* record with**  

  - \*\*Host/Name:\*\* \`www\`  

  - \*\*Value/IP:\*\* \`162.159.140.166\`

  

If neither of those records exists (or they’re set up on the wrong DNS provider), HighLevel can’t verify the domain and shows the \*\*“CNAME / A record not found”\*\* error.

  

### **How to Fix This Error**

  

**1\. \*\*Confirm where your DNS is actually hosted\*\***  

   - Use a DNS lookup tool or your registrar dashboard to see which nameservers your domain is using.  

   - Make sure you’re editing DNS \*\*at the correct provider\*\* (for example, if your nameservers point to Cloudflare, you must add the records in Cloudflare, not GoDaddy).

  

**2\. \*\*Check for an existing \`www\` record\*\***  

   - Look for any existing \*\*A\*\* or \*\*CNAME\*\* records with \*\*Host/Name\*\* \`www\`.  

   - If \`www\` already points somewhere else (old website, another platform), you’ll need to remove or update that record. Only \*\*one\*\* record for \`www\` should be active.

  

**3\. \*\*Create the required DNS record for \`www\`\*\***  

   - Choose \*\*one\*\* of these methods (do not use both for \`www\`):

     - \*\*CNAME method (recommended for subdomains):\*\*  

       - Type: \`CNAME\`  

       - Host/Name: \`www\`  

       - Value/Target: \`sites.ludicrous.cloud\`

     - \*\*A record method:\*\*  

       - Type: \`A\`  

       - Host/Name: \`www\`  

       - Value/IP: \`162.159.140.166\`

   - Make sure you only enter \`www\` (or your subdomain, e.g. \`sub\`) in the \*\*Host/Name\*\* field — not \`www.mydomain.com\` and not \`https://www.mydomain.com\`.

  

**4\. \*\*If you’re also using the root domain\*\*  
**  

   - For a root domain like \`mydomain.com\`, add an \*\*A\*\* record with:  

     - Type: \`A\`  

     - Host/Name: \`@\`  

     - Value/IP: \`162.159.140.166\`  

   - In Step 2 of this article, the system can automatically enable \`www\` and a 301 redirect so visitors to \`www.mydomain.com\` are redirected to \`mydomain.com\`.

  

**5\. \*\*If you are using Cloudflare\*\*  
**  

   - Make sure the CNAME or A record for your domain/subdomain is set to \*\*“DNS only”\*\*, \*not\* “Proxied.”  

   - HighLevel does not support Cloudflare’s proxy on the records used to connect funnels/websites.

  

**6\. \*\*Allow time for DNS propagation\*\*  
**  

   - After making changes, DNS can take some time (up to 24 hours in some cases) to update globally.  

   - If the error persists immediately after updating DNS, wait a bit and then click \*\*Retry/Continue\*\* in the Domain connection screen inside HighLevel.

  

**7\. \*\*Re-check with a DNS lookup tool if needed\*\***  

   - Use a DNS lookup tool to confirm that:  

     - \`www.yourdomain.com\` has either a CNAME → \`sites.ludicrous.cloud\` \*\*or\*\* an A record → \`162.159.140.166\`.  

   - Once that record is visible, HighLevel should successfully verify the domain.

  

If your Domain shows a 404 error intermittently, then you might be using the www/root domain with your funnel/website. In that case, ensure you have [added a redirect from www to the non-www (root) domain or from the non-www Domain to www.](https://help.gohighlevel.com/support/solutions/articles/48001065407-how-to-redirect-highlevel-domains-www-to-non-www-)

  

### **Why do my Cloudflare domains not work with a Proxy?**

  

Suppose your DNS setup is accurate, but you're still getting a privacy error, your funnel/website is not showing images, or you cannot add the Domain. In that case, you need to make sure you've set the proxy status inside CloudFlare to "DNS Only."  
  

When the CNAME/A record has proxy status set to "proxied," it shows an error.

CloudFlare proxy status is only to be set to "proxied" when setting up a redirect (only use this by following the exact instruction mentioned in the steps to set up a redirect)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287943055/original/1zb6HOqouP5jryqoxYDQtxIEge6E0W6PiQ.png?1679077947)

* * *

## **Frequently Asked Questions**

  

**Q: Can I use the same Domain with more than one platform?**

No, one domain/subdomain can only be used with one platform/server at a time (WordPress, Wix, etc.)

If you already use mydomain.com with WordPress, use site.mydomain.com with our system or a different domain.

Also, if you're using a domain/subdomain with funnels/websites, it can't be used with memberships or some other feature hosted on a different server.

  

**Q: Can I add the same Domain to more than one account?**

Yes, you can add the same Domain to multiple sub-accounts within the same agency.

  

**Q: How many domains can I add to one account?**

You can add as many as needed. There is no limit.

**Q: Do I have to purchase SSL for the Domain separately?**

No, our system generates SSL automatically once you've added the Domain successfully. You don't need to purchase it separately.

  

**Q: Can I buy a domain from you directly?**

Yes! You can now purchase domains directly through HighLevel using our integrated Domain Marketplace. [Learn how to purchase a domain through HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000003610)

**Q: How many funnels/websites can I connect with one Domain?**

You can connect as many as needed within the same agency. There is no limit.

* * *

## **Related Articles**

  

-   [How to Add a Domain and Verify DNS Record](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)  
      
    
-   [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000005132)  
      
    
-   [Domains: Complete Overview and Centralized Management!](https://help.gohighlevel.com/en/support/solutions/articles/155000005134)[](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)**[](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)**