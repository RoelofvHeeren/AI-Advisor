---
title: "How to check logs for a specific email in Mailgun"
url: "https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun"
category: "Uncategorized"
---

# How to check logs for a specific email in Mailgun

**TABLE OF CONTENTS**

-   [Mailgun Sending Logs](#Mailgun-Sending-Logs)
    -   [Analyzing the results](#Analyzing-the-results)
    -   [Common errors](#Common-errors)
        -   [Not Delivering to Previously Bounced Address](#Not-Delivering-to-Previously-Bounced-Address)
        -   [If the recipient unsubscribes accidentally](#If-the-recipient-unsubscribes-accidentally)
        -   [Unauthenticated email from xxxxxxxxxxxx.com](#Unauthenticated-email-from%C2%A0xxxxxxxxxxxx.com)
        -   [Unauthenticated email from yahoo.com / hotmail.com / aol.com / outlook.com](#Unauthenticated-email-from-yahoo.com-/-hotmail.com-/-aol.com-/-outlook.com)

  

  

  

  

# Mailgun Sending Logs

1\. Log in to [https://app.mailgun.com/app/dashboard](https://app.mailgun.com/app/dashboard)

  

  

  

  

2\. Click **Sending**

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160535/original/JVr72sqsbd8goiu1yWyP9X8LxzQIFiymnA.png?1625007552)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522532/original/r4hpkoE_IuaSf5q6VLc8d4dmkiNqM6eZwQ.png?1597181005)

  

  

  

  

3\. Click **Logs**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160533/original/jMWfS1lnuChsOsRrZdbYVxkKEj_FwXl5Ww.png?1625007551)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522561/original/kA-lpxxJ5iMh8wS7dR20-Gu61SKFZP-hUw.png?1597181031)

  

  

  

  

  

  

4\. Make sure the correct domain is selected 

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160536/original/4gc_ywO8KMIJ2gmt_r41V-pqblZouLsulA.png?1625007552)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522629/original/oy-58G570I2gA2z2qCM-UD0zKoISnvSgAA.png?1597181069)

  

  

  

  

  

5\. Click on Add Filter

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695181/original/_cN2JqLI_-4mgq52yjw5XkN8wD6j70j-fw.png?1644453931)

  

  

  

  

6\. Select Recipient from the dropdown list and paste the email you are trying to get the delivery status for:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695195/original/4e5JP7AlzSsBZYZOUHSn2mk7YQ0gtx0EAA.png?1644453944)

  

  

  

7\. Click on Filter

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695270/original/5B1sUhnEpr9-WLqcHMifkVuz0WUuxtyCsQ.png?1644454025)

  

  

  

  

## Analyzing the results

  

Click the gear ⚙️ icon on the right once you locate the email

  

Select **Quick view**

  

It will show you a preview of the email

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695369/original/C19SliRpd7Pl_5q67zgT2hTAWFXDSR3jrg.png?1644454139)

  

  

If it says delivered, please check the spam folder or reach out to Mailgun support to see if the email provider is blocking the email on their end.

  

  

  

  

  

## Common errors

  

### **Not Delivering to Previously Bounced Address**

  

Solution:

  

1\. Click Sending -> Suppressions

  

2\. Choose the domain on top

  

3\. Search for the recipient's email

  

4\. Select the recipient and click the trash icon on the right to remove the contact email from the Bounces tab.

  

  

  

### **If the recipient unsubscribes accidentally**

  

Switch to the **Unsubscribes** tab and remove the email from there.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695886/original/EgH5LxHkk9DeQiKIUhWyFYFOyklyac8D7Q.png?1644454582)

  

  

  

### **Unauthenticated email from** [**xxxxxxxxxxxx.com**](//xxxxxxxxxxxx.com)

  

Solution: Set DMARC to none for the custom domain. 

  

If you are using Gsuite email, you can [configure set DMARC to none here](https://support.google.com/a/answer/10032169?hl=en).

###   

  

  

### **Unauthenticated email from [yahoo.com](//yahoo.com) / [hotmail.com](//hotmail.com) / [aol.com](//aol.com) / [outlook.com](//outlook.com)**

  

  

Quick workaround: switch the sender email from yahoo.com / aol.com / any other domain to your own domain/gmail.com

  

e.g. switch [name@yahoo.com](mailto:name@yahoo.com) to [name@gmail.com](mailto:name@gmail.com) or name@your\_domain.com

  

[Learn where to configure the sender's email address here](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000979925-masking-campaign-emails-from-name-address).