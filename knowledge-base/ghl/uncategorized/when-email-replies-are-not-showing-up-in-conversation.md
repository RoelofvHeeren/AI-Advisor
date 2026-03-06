---
title: "When email replies are not showing up in Conversation"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation"
category: "Uncategorized"
---

# When email replies are not showing up in Conversation

This guide troubleshoots issues with email replies not appearing in conversations. This could be due to several factors like incorrect Mailgun setup, faulty MX records, or issues with domain providers like WIX. Follow these steps to diagnose and resolve the issues efficiently.

  

  

**TABLE OF CONTENTS**

[**Troubleshooting When email replies are not coming back to the Conversation**](#Troubleshooting-When-email-replies-are-not-coming-back-to-the-Conversation)

[1\. Check if Mailgun Receiving Route is set up. If you are on LC Email, move on to Step 2](#1.-Check-if-Mailgun-Receiving-Route-is-set-up.-If-you-are-on-LC-Email,-move-on-to-Step-2)

[2\. How to check MX records](#2.-How-to-check-MX-records)

[3\. Check if you are using the Root domain with Google Workspace and Mailgun](#3.-Check-if-you-are-using-the%C2%A0Root-domain-with-Google-Workspace-and-Mailgun)

[4\. Double-check DNS records](#%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B4.-Double-check-DNS-records)

[5\. If you are using an SMTP provider instead of Mailgun/LC Email](#5.-If-you-are-using-an-SMTP-provider-instead-of-Mailgun/LC-Email)

[6\. If you are using WIX as your Domain DNS provider](#6.-If-you-are-using-WIX-as-your-Domain-DNS-provider)

-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **Troubleshooting When email replies are not coming back to the Conversation**

  

### **1\. Check if Mailgun Receiving Route is set up. If you are on LC Email, move on to Step 2**

[How to setup Replies in MailGun](https://help.gohighlevel.com/en/support/solutions/articles/48000987293)

  

### **2\. How to check MX records**

  

The MX record is essential for Mailgun to track the replies tracking.  

  

1\. Switch to agency view > **Settings** > **Email Services** > **Location Settings** > Copy the domain/subdomain set up for the sub-account 

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710730/original/336fiUo3ihzu_yI4uP56rIgrHdF3mahwKA.jpg?1727465017)

  

2\. Go to [Mxtoolbox](https://mxtoolbox.com/) to look up the MX record for the subdomain/domain you copied

  

Depending on the subdomain you set up with Mailgun, 

For example:

-   If you set up companyname.com,
    
    You will look up the MX record for [companyname.com](//companyname.com)  
    

-   If you set up replies.companyname.com,
    
    You will look up the MX record for [replies.companyname.com](//replies.companyname.com)
    
-   to see if two records point to mxa.mailgun.org and mxb.mailgun.org.
-   If they are missing, We must add **mxa.mailgun.org** and **mxb.mailgun.org** and set priority 10 for both MX records.

-   Suppose other records point to other email servers like (e.g., Google Workspace). We can only choose one here, so you must either set up a subdomain for Mailgun or not use the domain for other email servers like (e.g., Google Workspace).    
      
    More information:  
      
    [Can I Use the Same Domain Name for Mailgun and Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)  
      
    

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710796/original/FM2Sxy9BQzzbC3CnquDFbcq0gzPPlYBQZw.jpg?1727465126)**  

  

If it's still not working, please share a screenshot of all the DNS records in your domain provider and [reach out to our support here](https://help.gohighlevel.com/en/support/solutions/articles/48001204857) (GoDaddy, Namecheap, etc.). You can also check with your domain provider's support and see what is missing.

  

### **3\. Check if you are using the** **Root domain with Google Workspace and Mailgun**

If you are setting up a root domain to use with Mailgun, Ensure it is not pointing to somewhere else like Google Workspace, as it might contradict Google Workspace or Outlook, where you use the same domain for work emails. More information on [Can I Use the Same Domain Name for Mailgun and Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 

If you use the Mxtoolbox to look up the MX record for the root domain, it is pointing to Mailgun, as shown in the screenshot below, **and other email servers** (e.g., Google Workspace). We can only choose either one here, so you will need to either set up a **subdomain** for Mailgun or don't use the domain for other email servers like (e.g., Google Workspace)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710845/original/rGC1BTGGbHk5MNi82nlWRVyA9Di8s7ocRA.jpg?1727465286)

  

### **4\. Double-check DNS records**

  

Log in to [Mailgun](https://login.mailgun.com/login/) - 

1\. Expand **Sending** tab

2\. Click the last menu item, **Domain Settings**

3\. Make sure you select the correct domain/subdomain for the location on top

4\. Click **DNS records** on the top middle

5\. Click **Verify DNS settings** and see if all 5 DNS records, especially the MX record, have a green checkmark?

Sometimes it might show if they have all green checkmarks, but it might not be the case; you will need to click the Verify DNS Settings button again to refresh the record: 

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710882/original/n5TrO-ghOMdCcUoKy1eLVCyu09YJz5OnAA.jpg?1727465373)**  

### **5\. If you are using an SMTP provider instead of Mailgun/LC Email**

**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283738240/original/iuhABh85E9KeBQj_tREvrShtALdHnMmXAA.png?1677272715)**

### **6\. If you are using WIX as your Domain DNS provider**

Check out [Mailgun replies not working when using WIX as the domain provider](https://help.gohighlevel.com/support/solutions/articles/48001188738-mailgun-replies-not-working-when-using-wix-as-the-domain-provider).

  

* * *

# **Frequently Asked Questions**

-   **Can I customize the email address from which replies are sent?** Yes, you can usually customize the "reply-to" email address in your settings. This allows you to ensure that replies go to a specific address, which can help manage communications more effectively.
    
-   **How can I integrate other email providers with HighLevel to improve reply visibility?** Integration with other email providers can often enhance functionality. Check the platform’s integration options to connect services like Gmail or Outlook, which may provide better tracking and visibility for email replies.
    
-   **What should I do if the issue persists despite troubleshooting?** If troubleshooting does not resolve the issue, consider reaching out to HighLevel’s support team for further assistance. They can provide insights specific to your account and help identify any underlying issues.
    

* * *

# **Related Articles**

-   [](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)[How to send a test email in conversations](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
-   [Troubleshooting when conversations are glitching](https://help.gohighlevel.com/support/solutions/articles/48001184861-troubleshooting-when-conversations-are-glitching)