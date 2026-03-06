---
title: "Step-by-step guide to set up Mailgun"
url: "https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun"
category: "Uncategorized"
---

# Step-by-step guide to set up Mailgun

Mailgun Step-by-step guide:

  

**1\. Sign up for Mailgun here:**

  

[https://signup.mailgun.com/new/signup](https://signup.mailgun.com/new/signup)

  

**2\. Check your email inbox to verify the email address**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)  

  

**3\. Click Sending > Add New Domain**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

  

  

**4\. If your domain is companyname.com, you can either set up the main domain or subdomain with Mailgun.** 

  

-   Main domain:
    -   If you are adding the main domain, it should not be used with Gsuite, or any other email provider
-   Subdomain:
    -   To set up the subdomain with Mailgun, you can type **ANYTHING\_HERE**.companyname.com
        -   Examples:
            -   mg.companyname.com
            -   replies.companyname.com
            -   support.companyname.com
-   Please set up the domain or subdomain under US, **not EU**.
-   Click **Add domain**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

  

  

  

**5\. Now log in to your DNS records based on where you get the domain and add the 5 DNS records.**

  

-   If you are not sure where you should add the DNS records
-   Step 1: lookup domain that we are trying to set up in [mxtoolbox](https://mxtoolbox.com/SuperTool.aspx)
-   Only put the domain here, **do not add http:// in front**  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537503/original/VQuAatUlq58RsSVIlLqFfKJQsi1EtB2pjg.png?1659725181)

Once you look up the domain, it should show what your DNS hosting provider is.

  

  

-   ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537328/original/O4VqrFqJo6APt8Z_bhPobo_S50QD230bQg.png?1659725095)
-   Step 2: check the bottom note it will say reported by e.g. [wordpress.com](//wordpress.com)
    
      
    
-   Now we could add the DNS records to the domain provider. We can google **wordpress DNS records** if you are not sure where to locate the DNS records area.
    

  

  

  

Based on what your domain provider is, now we could add the DNS records according to the domain provider:

  

If you don't find the domain provider on this list, you can refer to one of the articles above, which should be similar.

  

[Mailgun Setup - GoDaddy Domain Setup](https://help.gohighlevel.com/en/support/solutions/articles/48000981678)

[Mailgun Setup - Namecheap Domain Setup](https://help.gohighlevel.com/en/support/solutions/articles/48000981680)

[Mailgun Setup - Siteground Domain Setup](https://help.gohighlevel.com/en/support/solutions/articles/48000981685)

[MailGun Setup - HostGator Domain Setup](https://help.gohighlevel.com/en/support/solutions/articles/48000981679)

[Mailgun Setup - Google Domains](https://help.gohighlevel.com/en/support/solutions/articles/48001155148)

[Mailgun Setup - CloudFlare](https://help.gohighlevel.com/en/support/solutions/articles/48001064413)

  

  

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)