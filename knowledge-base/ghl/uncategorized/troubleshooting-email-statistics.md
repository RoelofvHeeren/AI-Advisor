---
title: "Troubleshooting Email Statistics"
url: "https://help.gohighlevel.com/support/solutions/articles/48001208601-troubleshooting-email-statistics"
category: "Uncategorized"
---

# Troubleshooting Email Statistics

**TABLE OF CONTENTS**

-   [Why Email statistics are not showing](#Why-Email-statistics-are-not-showing)
    -   [1\. Check how the user is sending the emails. Are they sending through email builder bulk action, or from smartlist, workflow or campaigns?](#1.-Check-how-the-user-is-sending-the-emails.-Are-they-sending-through-email-builder-bulk-action,-or-from-smartlist,-workflow-or-campaigns?)
    -   [2\. Using the SMTP provider, we will not be able to fetch delivered/bounced stats to display them. SMTP integration will show opened and clicked only. Only mailgun will be able to show full stats.](#2.-Using-the-SMTP-provider,-we-will-not-be-able-to-fetch-delivered/bounced-stats-to-display-them.-SMTP-integration-will-show-opened-and-clicked-only.-Only-mailgun-will-be-able-to-show-full-stats.-%C2%A0)  
-   [Try to reset Mailgun API key](#Try-to-reset-Mailgun-API-key)
-   [Double-check Cname record](#Double-check-Cname-record)
-   [Double-check Mailgun webhooks](#Double-check-Mailgun-webhooks)

  

## Why Email statistics are not showing

  

### 1\. Check how the user is sending the emails. Are they sending through email builder bulk action, or from smartlist, workflow or campaigns?

  

Each method will contain its own section of email statistics depending on how the user is sending that email. Check out [Where will email statistics show for every email activity?](https://help.gohighlevel.com/support/solutions/articles/48001215386-email-statistics#Where-will-email-statistics-show-for-every-email-activity?)

When email stats are missing here once we click on the email template

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969567/original/o7R9Zujq1hhYNwlXiBhBsGPczF6JdpTt5w.png?1644017728)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48105694228/original/us0Et6NNs0kmZQMBZxOu-cGdjfuzGDgnEw.png?1621978068)

Only when we send emails through here then it will show the stats in the Email builder

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969568/original/8Grr4aFjwLE_qLJVsbh9xC4OHu8gAFhbYw.jpeg?1644017728)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48105694180/original/tk4r8eC7gTwEJIr0hLLTbI8wv8-Hg8n3Ew.png?1621978034)

  

### 2\. Using the SMTP provider, we will not be able to fetch delivered/bounced stats to display them. SMTP integration will show opened and clicked only. Only mailgun will be able to show full stats.  

We highly recommend setting up Mailgun or LC Email for accurate statistics.  

If the sub-account uses SMTP provider before, and the workflow contains SMTP statistics from the smtp provider, it won’t show the statistics properly. Please duplicate the workflow and start sending emails again from there to see if the statistics will show up properly.

  

  

  

  

  

  

## **Try to reset Mailgun API key**

  

Agency view > **Settings** > **Email Services** > **Location Settings** > Edit the Mailgun API integration for the sub-account > type **Delete**

  

And then re-integrate again: **[Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)**

![](https://i.ibb.co/1TVG21t/2023-1-24-11-12-42.gif)

  

  

## **Double-check Cname record**

Because the Cname record is essential for Mailgun to track the open and click tracking, and unsubscribes. The fix will be the same with links do not open/track:

[Why are my email links changing and how to fix links in the email that do not open?](https://help.gohighlevel.com/en/support/solutions/articles/48001151622)

[](https://mxtoolbox.com/CnameLookup.aspx)

  

  

## **Double-check Mailgun webhooks**

1\. Click on **Sending**

2\. Click on **Webhooks**

3\. Make sure the right Domain is selected based on which domain/subdomain is configured for your sub-account

4\. All webhooks should be configured in the screenshot below

5\. If not, click on **Add Webhook** for every Event type

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283724301/original/XuGLhQDfmu5CAwRdHREf2Ak9-qX5s6R9gg.png?1677265427)**  

  

  

  

  

#