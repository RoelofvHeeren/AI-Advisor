---
title: "Using SendGrid As The SMTP Provider"
url: "https://help.gohighlevel.com/support/solutions/articles/48001166110-using-sendgrid-as-the-smtp-provider"
category: "Uncategorized"
---

# Using SendGrid As The SMTP Provider

This help article provides a guide for integrating SendGrid as your SMTP provider within the HighLevel platform. It details the necessary configurations and settings to enable seamless email delivery through SendGrid. The article covers the technical steps required to properly configure SendGrid, ensuring optimal performance and reliability of your email communications. For any advanced troubleshooting or specific queries, please refer to the detailed instructions provided within the article.

  

**TABLE OF CONTENTS**

-   [Step 1. Sign up for SendGrid](#Step-1.-Sign-up-for-SendGrid)
-   [Step 2. Go to Location Settings in your sub-account](#Step-2.-Go-to-Location-Settings-in-your-sub-account)
-   [Step 3. Get your SendGrip API](#Step-3.-Get-your-SendGrip-API)
    -   [Type an API Key Name](#Type-an-API-Key-Name)
    -   [Copy the highlighted API Key Created](#Copy-the-highlighted-API-Key-Created)
-   [Step 4. Add your API key to HighLevel](#Step-4.-Add-your-API-key-to-HighLevel)
-   [Step 5. Setup 2FA with SendGrid](#Step-5.-Setup-2FA-with-SendGrid)
-   [Step 6: Verify SendGrid email account as a single sender](#Step-6%3A-Verify-SendGrid-email-account-as-a-single-sender)
-   [Step 7: Integrate again by clicking Save again in HighLevel:](#Step-7%3A-Integrate-again-by-clicking-Save-again-in-HighLevel%3A)

-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

  

## **Step 1. Sign up for SendGrid**

[https://signup.sendgrid.com/](https://signup.sendgrid.com/)

  

## **Step 2. Go to Location Settings in your sub-account**

Click on Email Services > Add Service > Select Sendgrid from the dropdown

  

If you want to integrate Sendgrid for all locations, you can set this up in the agency view:

[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846783/original/VVFsJCextfR1_d_11XTHga9oeNKatWS0hQ.jpg?1724881299)

##   
**Step 3. Get your SendGrid API**

Click on Settings > API keys > create API Key

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846792/original/eUL7EU_-EOzGchxYPWL0EMk5sjACZxHEPw.jpg?1724881326)

  

  

### Type an API Key Name

Make sure API Key Permissions is **Full Access**

Click **Create & View**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846796/original/a9MrgUej0WqHziz31i8UjSTQwtbDIFmj4A.jpg?1724881352)

  

  

### Copy the highlighted API Key Created

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846806/original/vmo403We5u7Gp8bKNAXeV7jlxNY_I1Ysag.jpg?1724881381)

  

  

## **Step 4. Add your API key to HighLevel**

  

Username: **apikey**

Email: **Your Sendgrid Login Email**

Password: **Paste the highlighted copied API Key here**

  

Click **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846811/original/kq58-V-iDLVwKZwNQXw_UXO2lwUUiMcY9Q.jpg?1724881409)

##   

  

## **Step 5. Setup 2FA with SendGrid**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846832/original/HYY2tHoxAB-4qW-jO_raEIIxKBf7lj2QWA.jpg?1724881430)

  

  

  

## **Step 6: Verify SendGrid email account as a single sender**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846845/original/9ipTCXKk0sEKBCLdPOYf1kDUFCiCjpvzAw.jpg?1724881455)

  

  

Create a sender here with your **Sendgrid Login Email**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846859/original/zBMxS2C0LUORdKKq5EvXd_eDtR6jhzybiQ.jpg?1724881476)

  

  

  

## **Step 7: Integrate again by clicking Save again in HighLevel:**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846872/original/XR8nHLqvALSgWinGBq6BV3WYFk9rfKfzPA.jpg?1724881510)

  

  

Now you will see SendGrid as your SMTP Provider in HighLevel

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846879/original/wL9FUvg9EHRVoljO3xNEpr5RS0vzxaYFdA.jpg?1724881532)

  

  

  

  

If you are getting an error when you [send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

  

click the **⚠️(red triangle) icon** to view more details about the error in the conversation

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846886/original/q9lMrW_IBu8lblpact0WJarWC8nimrXzTw.jpg?1724881564)

  

550 The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved. Visit [https://sendgrid.com/docs/for-developers/sending-email/sender-identity/](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/) to see the Sender Identity requirements

  

  

When you [mask the sender email](https://help.gohighlevel.com/en/support/solutions/articles/48000979925), make sure the sender email matches with the SMTP integrated email, or make sure th sender email is verified with Sendgrid:

[https://docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)

  

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**