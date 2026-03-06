---
title: "Setting Up SMTP Providers"
url: "https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers"
category: "Uncategorized"
---

# Setting Up SMTP Providers

  

[](https://help.gohighlevel.com/en/support/solutions/articles/48001184920)We have direct integrations with both Google and Outlook, if you're sending through these providers please use those integrations not SMTP.  
  
Gmail Sync Article -- [https://help.gohighlevel.com/support/solutions/articles/48001235216-how-to-set-up-two-way-email-sync-for-gmail](https://help.gohighlevel.com/support/solutions/articles/48001235216-how-to-set-up-two-way-email-sync-for-gmail)  
  
Outlook Article -- [https://help.gohighlevel.com/support/solutions/articles/48001229663-two-way-email-sync-for-outlook](https://help.gohighlevel.com/support/solutions/articles/48001229663-two-way-email-sync-for-outlook)  
  
We also have built in bulk sending using LC Email as well.  
  
LC Email Article -- [https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-i-want-to-know-more)  
  
If you choose to use SMTP you do so at your own discretion, while we offer support it will be done on a best effort basis. SMTP is considered an advanced use case for experts and not how most people should be sending email through HighLevel.  
  

## A List of SMTP and IMAP Server:

[https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html](https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html)

  

## **Sender Email Address Configuration Limitation** when Using Your Own SMTP Provider:

  

If you are using an SMTP provider, make sure the sender email you mask here matches the email you integrated with. [Learn more on how to configure the sender's email address here](https://help.gohighlevel.com/en/support/solutions/articles/48000979925). If the sender's email does not match with the SMTP integrated email, or if the sender's email is not verified with your SMTP provider, it will fail to deliver. 

  

## **To test if the integrated SMTP integration work:**

When sending an email, we will need to update the sender's email address so it matches the integrated SMTP email. 

In manual conversation, the sender email is set to be the user login email, we will need to set the email below to match with the SMTP integrated email. By default it will show your login email here: 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029827288/original/gnPwP2x5q8zEvsCuFGHt1QHIQlamElUaEA.jpg?1721840067)

  

## **Daily limits on how many emails can be sent:**

Your SMTP provider may have daily limits on how many emails can be sent. [Gmail, for example, has a limit of approximately 100-150 emails per day when connected to the server from a remote email client](https://support.google.com/a/answer/166852?hl=en).

  

Learn more about [Why Can't I use My Free Email Address As The SMTP?](https://help.gohighlevel.com/en/support/solutions/articles/48001063376)

  

  

## **Workflow/Email Statistics**

We will not be able to fetch delivered/bounced stats to display them. SMTP integration will show **opened and clicked only**. We highly recommend [setting up Mailgun or LC Email](https://help.gohighlevel.com/en/support/solutions/articles/48001219824) to show statistics. Learn more about [Troubleshooting Email Stats](https://help.gohighlevel.com/en/support/solutions/articles/48001208601).

## **Common issues when settings up SMTP providers:**

1\. Make sure[](%E2%80%8Bhttps%3A//help.gohighlevel.com/support/solutions/articles/48001188579-email-re-billing) [Email Re-Billing](https://help.gohighlevel.com/en/support/solutions/articles/48001188579) is disabled while we make changes to the default provider

2\. please try to use the gmass tool with the same input and see if that works: **[https://www.gmass.co/smtp-test](https://www.gmass.co/smtp-test)** 

  

## **Help docs on setting up SMTP providers:**

  

Google: [Using Google/Gmail/GSuite as your SMTP Provider](https://help.gohighlevel.com/en/support/solutions/articles/48001148427)

[](https://help.gohighlevel.com/en/support/solutions/articles/48001173743)    [Setting alias for Google smtp](https://help.gohighlevel.com/en/support/solutions/articles/48001184605)

  

Yahoo: Yahoo temporarily disabled their SMTP and there's no ETA on when it will be available again. 

Sendgrid: [Using SendGrid As The SMTP Provider](https://help.gohighlevel.com/en/support/solutions/articles/48001166110)

Zoho: [Using Zoho as your SMTP Provider](https://help.gohighlevel.com/en/support/solutions/articles/48001173743)

  

  

## **In regard to setting up Amazon SES:**

-   Use the correct server name listed on the SMTP Settings page
-   Use port 465
-   Use the IAM Username & Password you created ( and hopefully saved because you can't view it again )
-   Use the Amazon AWS Root User Email Address 

  

Amazon SES Quick Start

[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/quick-start.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/quick-start.html?fbclid=IwAR3h1k7nhVgILHICO0e2RRMZ5kqlh7WXXEtM1b-9InA_au2Is99hWQgUFCM)

  
Managing Your Amazon SES Sending Quotas  
[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html?fbclid=IwAR1Dd2k5LUYrCYBdCkMbVWX5OCeRnwWNsfKDUwpKMOniKu5jmTg2uBShrck)  
  
Moving Out of the Amazon SES Sandbox  
[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html?fbclid=IwAR3aLfFnZ8BBIil1bN8yhPOzDI5MOAYIaaWS-EmcACvq6xXThRdGr8FoAP0)[](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html?fbclid=IwAR3aLfFnZ8BBIil1bN8yhPOzDI5MOAYIaaWS-EmcACvq6xXThRdGr8FoAP0)**[](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html?fbclid=IwAR3aLfFnZ8BBIil1bN8yhPOzDI5MOAYIaaWS-EmcACvq6xXThRdGr8FoAP0)**

## **In regard to setting up Outlook / Microsoft Office 365:**

It is common to get the error Authentication unsuccessful even though the two-step verification is OFF. Microsoft changed its security. Now a third-party app requires SMTP Authentication to be enabled. Here is the guide to enabling SMTP > [https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)

  

If the above article is not helpful, please reach out to Outlook support to get the account authenticated.  
  
  
**Why SMTP email is stuck in sent status**  
  

In the case of SMTP, we currently receive only **sent**, **open**, and **click** events. A **delivered** event is not available from the SMTP provider.  
  
Because of this limitation, the system marks an email as **delivered only after an open event is received**.  
  

That’s why the email initially shows as **sent**. Once the recipient opens the email, the status updates accordingly.

  

  

## **FAQs:**

### **Q: The "Add Service" button is missing in the Email Services > SMTP services tab, how do I fix this?**

A: Switch to Agency View > Sub-accounts > Click on the three dots > **Manage Client**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990778/original/1NAK5QK9IlXxPlsN-xmBJpq5lMvM1QTfyA.png?1723595394)Click on **Advanced Settings** > **Make sure the "Disable the Add Email Service button in the sub-account Email Services Settings" is off**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990761/original/IQ70geRyZWV4bKSosx3qOb5Eni3qMnRH8g.png?1723595268)

  

  

### **Q: How many SMTP service providers can we have on a sub-account?**

A: A sub-account can have multiple SMTP service providers. However, the same SMTP credentials cannot be added more than once, so using the same email ID with different integrations is not allowed. Additionally, the same provider (e.g., Gmail) cannot be added twice.   
  

* * *

## **Related Articles:** 

**[](https://help.gohighlevel.com/support/solutions/articles/48001065654-hide-the-smtp-setup-help-doc-link)**[](https://help.gohighlevel.com/support/solutions/articles/48001065654-hide-the-smtp-setup-help-doc-link)[Hide The SMTP Setup Help Doc Link](https://help.gohighlevel.com/support/solutions/articles/48001065654-hide-the-smtp-setup-help-doc-link)

[Setting Alias for Google SMTP](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)[](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)[](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)**[](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)**