---
title: "Why a WhatsApp Message Was Not Delivered"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered"
category: "Uncategorized"
---

# Why a WhatsApp Message Was Not Delivered

**TABLE OF CONTENTS**

-   [Why a WhatsApp Message Was Not Delivered](#Why-a-WhatsApp-Message-Was-Not-Delivered)
-   [FAQ](#FAQ)

  

# **Why a WhatsApp Message Was Not Delivered**

  

When sending a message using the WhatsApp Business API, it may show as “sent” but not “delivered.” Below are the common reasons this can happen, along with guidance on how to identify and resolve the issue.

* * *

**Common Reasons for Undelivered Messages**

  

    1.    **User Was Offline for More Than 30 Days**

WhatsApp stores messages for offline users for up to 30 days. If the recipient does not come online within that window, the message will not be delivered.

    2.    **User Has Blocked Your Number**

If the recipient has blocked your business number (or another business number under your account), messages will not be delivered.

    3.    **Geographic Restrictions**

WhatsApp Business Platform is not available for users or businesses in:

    •    Cuba

    •    Iran

    •    North Korea

    •    Syria

    •    Crimea, Donetsk, and Luhansk (Ukraine)

Note: As of May 15, 2024, Türkiye is supported for Cloud API messaging.

    4.    **Outdated App Version or Terms Not Accepted**

Messages may fail if the customer:

    •    Is using an outdated WhatsApp version.

    •    Has not accepted the latest Terms of Service.

To resolve this, ask the user to update their app and accept the latest Terms via this link: [https://wa.me/tos/20210210](https://wa.me/tos/20210210)

    5.    **High-Quality Messaging Restrictions**

WhatsApp enforces limits on how many marketing messages a user can receive to maintain message quality. If a user receives too many marketing messages (typically 5–6 in a day), further marketing messages may be temporarily blocked.

    6.    **Invalid or Unregistered Phone Number**

If the phone number is not registered with WhatsApp or entered incorrectly, the message will not be delivered.

    7.    **API Errors or Invalid Parameters**

If your API request has missing or incorrect fields, such as improperly formatted variables, it may be rejected.

    8.    **Conflicting Delivery Status**

A message might show both “delivered” and “failed” statuses due to the user being logged into WhatsApp on multiple devices. If a message is delivered to at least one device, it is considered successfully delivered.

* * *

**What You Can Ask the Customer to Do**

  

If the reason for the failed delivery is unclear, the following steps can help identify or resolve the issue:

    •    Confirm that the customer has not blocked your WhatsApp number.

    •    Ask them to send a message to your business first (this reopens the 24-hour customer service window).

    •    Ensure they have accepted WhatsApp’s latest Terms of Service.

    •    Have them update to the latest version of WhatsApp based on their device.

    •    Verify that they are not using a restricted version or unsupported region.

* * *

**Technical Issues and How to Resolve Them**

  

**Authentication and Authorization Errors**

  

These errors occur when your access token is invalid or missing required permissions.

  

**Resolution:**

    •    Use the [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) to verify token permissions.

    •    Ensure the token has the following scopes:

    •    whatsapp\_business\_management

    •    whatsapp\_business\_messaging

    •    If not, regenerate the token with the correct permissions.

* * *

**Meta API Downtime (Error Code 2)**

  

When Meta updates its API, brief outages (up to 5 minutes) may occur.

  

**Resolution:**

    •    Wait five minutes and retry the API call.

* * *

# **FAQ**

  

**1\. Why was my WhatsApp message marked as sent but not delivered?**

  

There are several possible reasons:

    •    The recipient has been offline for over 30 days.

    •    The recipient has blocked your number.

    •    The recipient hasn’t accepted the latest WhatsApp Terms of Service.

    •    The recipient is using an outdated version of WhatsApp.

    •    The recipient’s number is invalid or not connected to WhatsApp.

    •    Your message was flagged due to quality limits on marketing messages.

    •    The recipient is located in a region where WhatsApp Business Platform is restricted.

* * *

**2\. What does “Message Undeliverable” mean?**

  

This typically means the message was sent from your system but could not be delivered to the recipient’s device. Reasons include the recipient blocking your number, being offline too long, or technical/policy restrictions on Meta’s end.

* * *

**3\. How can I check if the recipient blocked my number?**

  

You won’t be notified directly due to privacy policies. However, if other messages are delivered to the same recipient or they are unresponsive over a long period, they may have blocked you.

* * *

**4\. What is the 24-hour Customer Service Window?**

  

Once a user sends a message to your business, you have 24 hours to respond using free-form messages. After that, only pre-approved templates can be used to re-initiate the conversation.

* * *

**5\. What is the “High-Quality User Experience” error?**

  

If a user receives too many marketing messages (e.g., 5–6 per day), WhatsApp may restrict further marketing messages to maintain quality. Utility templates are not affected by this restriction.

* * *

**6\. How can I resolve the “High-Quality User Experience” delivery issue?**

  

Try these steps:

    •    Ask the customer to send you a message first (this opens the 24-hour window again).

    •    Use a **Utility Template** instead of a Marketing Template.

    •    Wait and retry the message after some time.

* * *

**7\. How do I know if a user’s WhatsApp version is outdated?**

  

Ask the user to update WhatsApp to the following or newer versions:

    •    Android: 2.21.15.15+

    •    iOS: 2.21.170.4+

    •    Web: 2.2132.6+

Older versions may not support newer API features and may block message delivery.

* * *

**8\. Can users in all countries receive WhatsApp Business messages?**

  

No. The WhatsApp Business Platform is restricted in certain countries, including:

    •    Cuba

    •    Iran

    •    North Korea

    •    Syria

    •    Crimea, Donetsk, and Luhansk (Ukraine)

* * *

**9\. What does it mean if I see both “delivered” and “failed” statuses for the same message?**

  

This can happen if the user is logged in on multiple devices. The message was delivered to at least one device but may have failed on another.

* * *

**10\. What should I do if I get authentication or permission errors when sending messages?**

    •    Use the [Meta Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) to validate your token.

    •    Ensure the token includes these permissions:

    •    whatsapp\_business\_management

    •    whatsapp\_business\_messaging

If not, regenerate your access token with the correct permissions.

* * *