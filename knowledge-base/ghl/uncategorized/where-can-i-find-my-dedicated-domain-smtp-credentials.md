---
title: "Where Can I Find My Dedicated Domain SMTP Credentials?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002132-where-can-i-find-my-dedicated-domain-smtp-credentials-"
category: "Uncategorized"
---

# Where Can I Find My Dedicated Domain SMTP Credentials?

Learn where to create and find SMTP credentials for your LC Email dedicated domain, including smtp.mailgun.org settings and ports, plus steps to reset/delete credentials, limits, and IMAP notes.

* * *

**TABLE OF CONTENTS**

-   [How to Create SMTP Credentials](#How-to-Create-SMTP-Credentials)
-   [What Ports Does Mailgun Support?](#What-Ports-Does-Mailgun-Support?)
-   [How to Reset SMTP Password](#How-to-Reset-SMTP-Password)
-   [How to Delete SMTP Credential](#How-to-Delete-SMTP-Credential)
-   [Limits for SMTP and Emails](#Limits-for-SMTP-and-Emails)
-   [LC - Email Pricing](#LC---Email-Pricing)
-   [Where can I find my IMAP settings?](#Where-can-I-find-my-IMAP-settings?)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

  

### 

  

### **More Tutorials from the Community**

[https://youtu.be/B7KnqDLcxho](https://youtu.be/B7KnqDLcxho)

[https://youtu.be/m57kladVncA](https://youtu.be/m57kladVncA)

[https://youtu.be/QIChDtF10ZA](https://youtu.be/QIChDtF10ZA)

[https://youtu.be/E6OpiGGjcTs](https://youtu.be/E6OpiGGjcTs)

  

In order to use our SMTP server, you need to use the SMTP credentials associated with your domain. Please note that the SMTP credentials are unique for each domain you add. If you want to check the list of currently added users or add more users, you can easily do so by accessing your domain settings.

  

**Note**: Since we does not host mailboxes, We do not offer support for POP or IMAP protocols

* * *

## **How to Create SMTP Credentials**

  

SMTP credentials can be created in sub-account level(not the agency-assigned domain), not at the agency level.

  

### **Step 1:** Navigate to Sub-account Settings

Email Service -> SMTP Service -> Dedicated Domain and IP -> SMTP Settings under the dedicated domain.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337421/original/nMyZojgr2ZYUAZSkyYnJ6GXwk_Eyr_1HGw.png?1711087651)

  

  

### **Step 2:** "Create New SMTP User" and add a username and password

  

Note: HighLevel uses an automated approval system for SMTP access. Eligible sub-accounts can create SMTP credentials immediately. If your account is not approved, the Create New SMTP User option may be disabled or you may see a warning message.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337477/original/3gfn3HeigPBnj1KhpAJrkIlpaoOzAJ0ONw.png?1711087786)

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337530/original/utUNsl_XodI8FsMRFgE8TrwwQdmfgvu_uA.png?1711087862)

###   

  

**SMTP Settings:** **SMTP Server Address:** smtp.mailgun.org  
**Secure Connection:** TLS/SSL based on your mail client/website SMTP plugin SMTP 
**Username:** \[YourGivenName@DomainName.com\]  
**SMTP Password**: \[YourGivenPassword\]  
**SMTP port:** 25, 465 (SSL/TLS), 587 (STARTTLS), and 2525.

* * *

## **What Ports Does Mailgun Support?**

   
Our servers listen on ports 25, 465 (SSL/TLS), 587 (STARTTLS), and 2525.

* * *

## **How to Reset SMTP Password**

  

To finalize the password reset process, kindly click on the "Reset Password" button located in the pop-up modal.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337656/original/22ZqznlGSww3OYVk2ULdCYph_uhwvbBG9A.png?1711088188)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337668/original/NsTvuvM2YMJRI2xkQypolDdneD_Yn8-tJw.png?1711088202)

* * *

## **How to Delete SMTP Credential**

  

To Delete the SMTP credential, kindly click on the "Delete" button located in the pop-up modal.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337727/original/f7oeVWxByu7aA60MK7YoTBAA7c-citPWbg.png?1711088371)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337732/original/-c2VpTSwanpwk3Nc_sLI3fi87590WKS2TA.png?1711088383)

* * *

## **Limits for SMTP and Emails**

  

**1\. SMTP Limit:**

  

-   A maximum of **five SMTP credentials** can be created for each dedicated domain.

  

**2\. Daily Email Limit:**

  

-   Each account has a limit of **1,500 emails per day**.  
      
    
-   If the daily limit is exceeded, **SMTP credentials will be automatically deleted** from all dedicated domains.

* * *

## **LC - Email Pricing**

  

We charge **$0.675/1000 emails** for all the plans at a lower cost than most major SMTP providers compared to $0.80/1000 with MailGun.

  

Agency view > Billing > Credits: [All incoming and outgoing emails (To, CC, and BCC) will be charged.](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more#LC---Email-Pricing)[](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more#LC---Email-Pricing)

* * *

## **Where can I find my IMAP settings?**

  

IMAP is used to retrieve messages, and SMTP is for sending data.

  

**Note**: Since we does not host mailboxes, We do not offer support for POP or IMAP protocols. In IMAP settings you cannot use the SMTP credentials.

You can find your IMAP in your email provider settings.

**Example:** If you are using **Google**, you need to generate an app password in Google.

  

**Username**: Your Email address

**Password**: Your app password  
**IMAP host:** imap.gmail.com  
**IMAP port:** 993

  
Here are the support pages of some of the email providers that will guide you on obtaining the IMAP hostnames:

  

-   [Amazon AWS](https://docs.aws.amazon.com/workmail/latest/userguide/using_IMAP.html)
-   [Hostgator](https://www.hostgator.com/help/article/email-connection-settings)
-   [Ionos](https://www.ionos.com/help/email/general-topics/settings-for-your-email-programs-imap-pop3/)
-   [Kinghost](https://king.host/wiki/artigo/como-configurar-seu-e-mail-no-pipedrive/)
-   [Rackspace](https://docs.rackspace.com/support/how-to/rackspace-email-and-hosted-exchange-settings/)
-   [TransIP](https://www.transip.eu/knowledgebase/entry/309-the-email-settings-at-transip/)
-   [Bluehost](https://www.bluehost.com/help/article/email-application-setup)
-   [Titan](https://support.titan.email/hc/en-us/articles/900000215446-Configure-Titan-on-other-apps-using-IMAP-POP)
-   [Dreamhost](https://help.dreamhost.com/hc/en-us/articles/215612887-Email-client-protocols-and-port-numbers)
-   [InMotion](https://www.inmotionhosting.com/support/email/getting-started-guide-email/)

**Verizon  
IMAP host:** imap.verizon.net  
**IMAP port:** 995

  
**AOL  
IMAP host:** imap.aol.com  
**IMAP port:** 993

If your provider is not listed here, we recommend reaching out to your email service provider for the IMAP

* * *

## **Troubleshooting**

  

SMTP approval and “Unable to Create SMTP User”

  

If you see a banner that says **Unable to Create SMTP User** (or the Create New SMTP User button is disabled), SMTP credentials cannot be created for that domain at this time.

  

What to do:

-   Contact HighLevel Support for help enabling SMTP credentials for your sub-account.
-   Include the sub-account ID, the sending domain/subdomain, and a screenshot of the warning message.

  

* * *

## **Frequently Asked Questions**

  

**Q: Why am I seeing the error “SMTP Credential creation is blocked. Please contact support…”?**

This message appears when your account has hit usage thresholds or restrictions on SMTP credential creation. This could be due to exceeding the daily email limit (e.g., 1,500 emails/day) or internal controls to prevent abuse. Please contact support to review your account status and request increased limits or to resolve any compliance flags.