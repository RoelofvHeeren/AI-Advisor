---
title: "Dedicated Email Sending Domains Overview & Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup"
category: "Uncategorized"
---

# Dedicated Email Sending Domains Overview & Setup

Email marketing is a great way to reach customers and increase sales. But if you're not careful, you could end up in trouble. A dedicated sending domain gives you control over what appears to be coming from your business. That means you can avoid spam filters and other issues that might get your messages caught by unwanted mail servers.  
  
Don't let your email marketing efforts go unnoticed! Get started right away with a dedicated sending domain.

  

**IMPORTANT:** Dedicated sending domains are **only applicable** to the users in the **[LC Email system](https://help.gohighlevel.com/en/support/solutions/articles/48001222501).**  
  
If you are using a new domain that has never been used for email **please make sure to warm up your domain before emailing to a large list.** Failure to do so will results in poor deliverability results.

  

  

**IMPORTANT**: If you wish Set Up other SMTP Providers, refer to  [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)

* * *

**TABLE OF CONTENTS**

-   [What is a Dedicated Sending Domain?](#What-is-a-Dedicated-Sending-Domain?)[](#Configuring-Dedicated-Sending-Domains)
-   [Configuring Dedicated Sending Domains](#Configuring-Dedicated-Sending-Domains)
-   [Shared Domain Email Refactoring](#Shared-Domain-Email-Refactoring)
-   [Troubleshooting Dedicated Sending Domains](#Troubleshooting-Dedicated-Sending-Domains)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is a Dedicated Sending Domain?**

  

A dedicated sending domain allows you to send emails that appear to be coming from your brand, which can help you maintain a better reputation with email services. Any sub-account or agency can create a dedicated sending domain, and it's quick and easy.

  

By default, all emails sent from our platform will show the name of our email-sending servers in the "**sent on behalf of**" or "**sent via**" email headers:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48265938968/original/spw7PyvCIf6DlxRXiukwE1KRAbxsW5nK9w.png?1669638686)

* * *

## **Configuring Dedicated Sending Domains**

  

You can create multiple sending domains under your account and use different domains for different email-sending actions such as 1-to-1 emailing, emails sent from workflows, marketing campaign emails, and Payment and Invoices emails.

  

  

  

### **Step 1:** Navigate to Email Services

  

-   Navigate to Settings >  Email Services  
      
    
-   Click the "Dedicated Domain and IP" button.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039358860/original/SDAmMz_uAVt2ybizJ-_9H4TdvCGO9uG8bw.png?1736193889)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359007/original/fPkMuNjtNulufDsHraKqi_RhiT7kVj6i7g.png?1736194222)

  

  

### **Step 2:** Add Domain Information

  

-   Click the "Add Domain" button to begin configuring your sending domain.  
      
    
-   Enter the sub-domain you want to use for your dedicated sending domain.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359484/original/eF1kHVNdn9F8E4LQc47YnPLKxFqETCQFag.gif?1736195532)

  

**What is a Sub-Domain?**  
  
Sub-domains are variants of your root domain.  
  
**For Example:** If you wanted to use the root domain "agency123.com" to send emails, you an create sub-domains such as "emails.agency123.com" or "no-reply.agency123.com", and use these sub-domains in different communication or marketing campaigns.  
  
You can create as many sub-domains as you like by adding unique words in front of the root domain and then configuring the DNS records in your hosting provider settings.

  

  

### **Step 3:** Verify DNS Records

  

Once you've added your sub-domain, you will need to verify your DNS records. You will have the option to either allow HighLevel to auto-configure your DNS records, or enter your DNS records manually.

  

If HighLevel is unable to automatically configure your DNS records, you will need to add them manually.

  

**REMEMBER:** The propagation process can take up to 24 hours. If it has been longer than 24 hours, please double-check your DNS settings by following the process above.

**NOTE: We dont support multiple DKIM for a domain**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360349/original/P-zGHtE40RWBS1c78K9-QxTVmAZcGYspOA.gif?1736198292)

  

  

#### **Manually Adding DNS Records**

  

To add your DNS records manually, you will need to create the DNS records in your hosting provider's dashboard where you manage your domains. You will be given specific information from HighLevel, like the information you see in the screenshot below, that you will use to create your DNS records.

  

To learn more about manually adding your DNS records, click here to read a more detailed help article.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360663/original/HzBGtABLJsce2UkbD9t9VMG5rxqjnhBPfg.png?1736199195)  

  

**Click any of the links below for instructions for some common DNS providers:**

  

<table data-identifyelement="673" style="width: 100%; font-family: Helvetica, sans-serif;"><tbody data-identifyelement="674"><tr data-identifyelement="675"><td class="tdfocus-1669652621677" data-identifyelement="676" style="width: 50.0000%;"><ul class="tdfocus-1669652577978" data-identifyelement="677"><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="678" style="font-size: 14px;"><a data-identifyelement="550" href="https://www.godaddy.com/help/manage-dns-zone-files-680" rel="noopener" style="box-sizing: border-box; color: rgb(52, 152, 219);" target="_blank"><span data-identifyelement="551" dir="ltr" style="color: rgb(41, 105, 176);">GoDaddy</span></a><span data-identifyelement="553" style="color: rgb(41, 105, 176);"><a data-identifyelement="554" href="https://support.google.com/a/answer/48090?hl=en" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" class="tdfocus-1669652549324" dir="ltr"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="679" style="font-size: 14px;"><span data-identifyelement="553" style="color: rgb(41, 105, 176);"><a class="tdfocus-1669652549324" data-identifyelement="554" dir="ltr" href="https://support.google.com/a/answer/48090?hl=en" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Google Domains</a></span><span data-identifyelement="556" style="color: rgb(41, 105, 176);"><a data-identifyelement="557" href="https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" class="tdfocus-1669652551979" dir="ltr"></a><a class="tdfocus-1669652551979" data-identifyelement="557" dir="ltr" href="https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="680" style="font-size: 14px;"><span data-identifyelement="556" style="color: rgb(41, 105, 176);"><a class="tdfocus-1669652551979" data-identifyelement="557" dir="ltr" href="https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Hostgator</a></span><span data-identifyelement="559" style="color: rgb(41, 105, 176);"><a data-identifyelement="560" href="https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" dir="ltr"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="681" style="font-size: 14px;"><span data-identifyelement="559" style="color: rgb(41, 105, 176);"><a data-identifyelement="560" dir="ltr" href="https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Hover</a></span><span data-identifyelement="562" style="color: rgb(41, 105, 176);"><a data-identifyelement="563" href="https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" dir="ltr"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="682" style="font-size: 14px;"><span data-identifyelement="562" style="color: rgb(41, 105, 176);"><a data-identifyelement="563" dir="ltr" href="https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Namecheap</a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="683" style="font-size: 14px;"><span data-identifyelement="565" style="color: rgb(41, 105, 176);"><a class="tdfocus-1669652657790" data-identifyelement="566" dir="ltr" href="https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Squarespace</a></span><span data-identifyelement="568" style="color: rgb(41, 105, 176);"><a data-identifyelement="569" href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html" rel="undefined" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_self" dir="ltr"></a></span><span data-identifyelement="565" style="color: rgb(41, 105, 176);"><a data-identifyelement="566" href="https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" dir="ltr"></a></span></span></span></li></ul></td><td class="tdfocus-1669652595295" data-identifyelement="684" style="width: 50.0000%;"><ul class="tdfocus-1669652660297" data-identifyelement="685"><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="686" style="font-size: 14px;"><span data-identifyelement="568" style="color: rgb(41, 105, 176);"><a data-identifyelement="569" dir="ltr" href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html" rel="undefined" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_self">AWS</a></span><span data-identifyelement="571" style="color: rgb(41, 105, 176);"><a data-identifyelement="572" href="https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" dir="ltr"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="687" style="font-size: 14px;"><span data-identifyelement="571" style="color: rgb(41, 105, 176);"><a data-identifyelement="572" dir="ltr" href="https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Cloudflare</a></span><span data-identifyelement="574" style="color: rgb(41, 105, 176);"><a data-identifyelement="575" href="https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank" dir="ltr"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="688" style="font-size: 14px;"><span data-identifyelement="574" style="color: rgb(41, 105, 176);"><a data-identifyelement="575" dir="ltr" href="https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Bluehost</a></span><span data-identifyelement="577" style="color: rgb(41, 105, 176);"><a data-identifyelement="578" dir="ltr" href="https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="689" style="font-size: 14px;"><span data-identifyelement="577" style="color: rgb(41, 105, 176);"><a data-identifyelement="578" dir="ltr" href="https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">Hostinger</a></span><span data-identifyelement="580" style="color: rgb(41, 105, 176);"><a data-identifyelement="581" dir="ltr" href="https://www.inmotionhosting.com/support/domain-names/create-cname-record/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank"></a></span></span></span></li><li class="tdfocus-1669652491052" data-identifyelement="533" dir="ltr" style="text-align: justify;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="690" style="font-size: 14px;"><span data-identifyelement="580" style="color: rgb(41, 105, 176);"><a data-identifyelement="581" dir="ltr" href="https://www.inmotionhosting.com/support/domain-names/create-cname-record/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176);" target="_blank">InMotion</a></span><span data-identifyelement="583" style="color: rgb(41, 105, 176);"><a data-identifyelement="584" dir="ltr" href="https://www.hostwinds.com/guide/how-to-change-cname-record/" rel="noopener" style="box-sizing: border-box; color: rgb(41, 105, 176) !important;" target="_blank">Hostwinds</a></span></span></span></li></ul></td></tr></tbody></table>

  

#### **Dedicated sending domains for Calendar emails (sub-accounts)**

You can assign dedicated sending domains specifically for Calendar emails to protect deliverability for appointment communications.

  

1\. Select **Settings → Email Service → SMTP Service** → proceed to 2.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125555/original/Dy-QEZM3XvMs3u8XmtdQ29qdiEk6YH7vMw.png?1770150834)

2\. Select **Dedicated Domain and IP** → proceed to 3.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125509/original/617xc1HLrTXNE-33RpoYWkoBCPkU6T-nZw.png?1770150765)

  

3\. Select **Domain Configuration:** 

-   In the Calendar category, select drop down and add your domains, up to 5 domains.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125759/original/T6e4IJkNkOpE5WWg4LVsxbIJt0zqHwPX-w.png?1770151371)**  

4\. Once Calendar Domain is selected, set percentage-based distribution across your Calendar domains. (Applicable with multiple domains)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125862/original/PJo--R5OwIcyYgi5iiKypuhjotEyGck1PA.png?1770151576)

  

Only Sub-account created domains are available for selection.
This feature is available for LC Email Users.

  

* * *

## **Set Up Google Postmaster Tools for Your Dedicated Domain**

  

Google Postmaster Tools (GPT) helps you monitor Gmail-specific deliverability for your HighLevel dedicated sending domain. By verifying your domain in GPT, you can track domain/IP reputation, spam rate, authentication alignment, and delivery errors—so you can diagnose inboxing issues and improve performance over time.

  

**Step-by-step** 

1.  Sign in to **[Google Postmaster Tools](https://gmail.com/postmaster/)** with a Google account.  
      
    
2.  Include **domain**(e.g., `yourbrand.com` or `mail.yourbrand.com`).  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064881962/original/qmIt0mt7eOEjspzPldDL1WuWoDHfmqav5Q.jpeg?1770994245)  
    
3.  Choose **Verify** and copy the **TXT record** value provided by Google.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064882021/original/0t5JorwG7N5BNjfTtJP0EcRwEQaQvrCT8g.png?1770994314)  
      
    
4.  In your DNS host, **add the TXT record** exactly as shown, then save/apply.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064888368/original/zt-XcQXZF4ZbVfVswWouRQGDDnWwyqCQZQ.png?1770996887)  
    
5.  Return to GPT and **complete verification** (Google may take some time to detect the record).  
      
    
6.  Send email from HighLevel using your **verified dedicated domain**.  
      
    
7.  After Google receives sufficient volume, review **Domain Reputation**, **IP Reputation**, **Spam Rate**, **Authentication**, and **Delivery Errors** dashboards.
    

* * *

## Shared Domain Email Refactoring

When you use a shared domain (GHL-owned or Agency Shared Domain), GoHighLevel automatically refactors your email addresses, which may affect your branding and email appearance.

**How it works:**  
Your from addresses are automatically formatted to work with the shared domain infrastructure.

**Example:**

-   Your from address: `support@yourbusiness.com`
-   Your shared domain: `mg.msgsndr.com`
-   **Actual sending address:**`support+yourbusiness.com@mg.msgsndr.com`

**Applies to:**

-   All agency sub-accounts created after August 26th
-   All locations under these agencies using shared domains
-   Refactoring will be automatically applied to all existing agencies within the next 2 weeks.

**To avoid email refactoring and maintain your brand identity:**  

Set up a dedicated sending domain following the instructions in this article. With a dedicated domain, your emails will send exactly as configured without any address modifications.

* * *

## **Troubleshooting Dedicated Sending Domains**

  

While setting up your dedicated sending domains, you may run into some issues that can be resolved without reaching out to the HighLevel support team. Below are some common issues that you may be experiencing when setting up your dedicated sending domains.

  

-   **Error Message Reading: 'Domain already pointing to email server!'**  
      
    You may see an error message that is claiming your domain is already pointing to an email server. This means that your email domain already has DNS records connected to a different service, and you will need to disconnect the domain before you can connect it to your HighLevel account.  
      
    Any MX or SPF records, even if they are HighLevel records, will cause the system to reject the domain, so we will need to remove them.  
      
    You can look up the domain MX and SPF records using various tools across the internet. The following link is a free tool that can help you with MX and SPF lookup: [https://mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx)

  

* * *

## **Frequently Asked Questions**

  

**Q: How Do I Choose a Sending Domain Name for My Account?**

It would be best if you used a unique subdomain that is not used for any other purpose. A subdomain is a secondary part of your root domain. For example, if your dedicated sending domain is **hello@mg.yourbrand.com**, your subdomain would be the **“mg”** portion of that domain.

  

  

**Q: How Do I Set Up a Dedicated IP Address?**

Setting up a dedicated IP Address is an entirely different process. [Click here to learn more about setting up dedicated IP Addresses.](https://help.gohighlevel.com/en/support/solutions/articles/155000001152)

  

  

**Q: What do I do if some of my domain's DNS records are not verified yet?**

You will need to force the verification process manually. If after doing this, the DNS records still are not verified, you may have to resolve the issue by contacting your hosting provider.

  

  

**Q: How do I generate an SSL Certificate for dedicated sending domains?**

When your domain is verified, the SSL Certificate should be automatically generated.

  

If the domain is showing as verified, but there is no SSL certificate, you may need to re-verify it by going through the entire verification process again. If that doesn't work, contact your hosting provider to see if there is an issue with your domain or if they can help generate the SSL certificate for you.

  

**Q: What if my domain has a wildcard DNS record?**

If your domain has a wildcard record (e.g., \*.yourdomain.com), you'll see a "pre-existing record" error when trying to set up a subdomain like mail.yourdomain.com.

Because wildcard records act as catch-alls, so any subdomain already "exists" by default.

  

To resolve this, you can remove the wildcard record temporarily and add it back after the dedicated domain is verified. You can also manually add DNS records for each subdomain to override the wildcard.

  

**Q: Will my recipients see the refactored email address?**  
Yes, recipients will see the refactored sending address (e.g., support+yourbusiness.com@mg.msgsndr.com) in their email client.

  

**Q: How can I prevent my email addresses from being refactored?**  
Set up a dedicated sending domain. With a dedicated domain, your emails will send with your exact from address without any modifications.

  

**Q: Does this affect my reply-to address?**  
A: The refactoring only affects the sending address. Your reply-to address remains as configured.

* * *

## **Related Articles**

  

-   [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/en/support/solutions/articles/155000001021)