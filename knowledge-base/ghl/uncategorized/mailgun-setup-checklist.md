---
title: "Mailgun Setup Checklist"
url: "https://help.gohighlevel.com/support/solutions/articles/48001175336-mailgun-setup-checklist"
category: "Uncategorized"
---

# Mailgun Setup Checklist

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090709611/original/uaJosVlH8fiE2DXTf5Iiw8nzsmhvPbfspg.jpg?1614896124)

  

# **Quick Setup/Troubleshooting Checklist For Mailgun + HighLevel**

A Guest-Tutorial From Krystin Ruschman of [](https://help.email-2-inbox.com/calendar-chat)[Email-2-Inbox](https://help.email-2-inbox.com/calendar-chat)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090705299/original/f-gBcDYyWzqNUi6WK3v-QFbdytgFC44JdQ.png?1614894400)

  

  

* * *

## **Are You Signed Up For The Right Mailgun Account?**

-   Foundation 50k is the minimum plan level necessary (Flex “Pay as you Grow” plan does not include Replies)
    
      
    

## **Have You Configured Your Sending Subdomain Correctly In Mailgun?**

-   Create a subdomain from your chosen root domain (ex: reply.yourdomain.com)
    
-   Add the DNS records provided by Mailgun into your domain settings
    
-   Verify the DNS records in Mailgun (give time for your DNS records to propagate)
    
-   Under Sending > Domains, verify “green checkmark” shows next to the subdomain 
    
-   Under Sending > Domain Settings, turn on Click Tracking and Open Tracking; Turn on Unsubscribes, if desired 
    
-   Update **Tracking Protocol** to HTTPS (this creates an SSL certificate for your subdomain, so if your root domain SSL is expired or compromised in some way, the links in your emails will still work)
    
-   Under Receiving, ensure a Catch-All Route is configured with the HighLevel webhook (Note: This route should auto-create once your Mailgun API key and subdomain are configured inside HighLevel)
    

  

  

## **Is Your Sending Subdomain Set Up In HighLevel Correctly?**  

-   Under Agency View > Settings > Mailgun, ensure the API key and subdomain are associated with the desired sub-account
    
-   Switch to a **Sub-Account** > Head in the **Sub-Account** Settings,> Click on the SMTP and Mailgun Service, ensure the desired subdomain is showing and defaulted as the Default Provider
    
-   BCC Emails field – only if you want ALL OUTGOING emails from HighLevel to also go to an outside account
    
-   Forwarding Address – only if you want ALL INCOMING replies to also go to an outside account
    
-   Forward to Assigned User – only if assigning Users to Contacts and/or Campaigns and want ALL INCOMING replies to also go to an outside account
    

  

**NOTE:** 

For BCC and Forwarding actions, please note that using an outside account to interact with HighLevel emails will break the Reply Route, so NO further email replies will show in HighLevel Conversations for that email chain. If you want all email communication to show in HighLevel make sure you/your clients are not interacting with them from an outside account.

  

  

## **Have You Configured Your "From Name" and "From Email"?**   

-   HighLevel needs to know the Name and Email Address of who your emails should be from. Below is the hierarchy of how HighLevel looks for that information. Once it finds a value, it will stop looking and use the value it found:
    

  

1.  Contacts > Bulk Request > “Send Email” icon > From Name and From Email (if applicable)
    
2.  Workflow > Individual Email (or Campaign Configuration if using Campaigns) > From Name and From Email
3.  Workflow > Settings > From Name and From Email
    
4.  Assigned User
    1.  If using Campaigns, HL looks to Campaign Configuration > Assigned User first (will use the Name and Email address associated with their user profile)
    2.  If not using Campaigns, HL looks to Contact > Assigned User (will use the Name and Email address associated with their user profile)
5.  Company Name and Company Email address
    

## **It's Still Not Fixed!**

-   Aside from the basic setup, there are countless factors that play into email deliverability, making it virtually impossible to troubleshoot from a checklist. 
    

-   If you’ve gone through each step above and are still experiencing issues, please book a call with Krystin at Email-2-Inbox [](https://help.email-2-inbox.com/calendar-chat)[by clicking here](https://help.email-2-inbox.com/calendar-chat).

  

\* This checklist may not be an inclusive list and is intended for educational purposes only 

\* Correct configuration of email setup in HighLevel, MailGun, and DNS is the sole responsibility of the account owner, and should be validated through thorough testing 

\* Setup according to this strategy is at the sole discretion of the account owner