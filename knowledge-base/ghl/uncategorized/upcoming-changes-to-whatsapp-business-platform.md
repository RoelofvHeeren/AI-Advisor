---
title: "Upcoming Changes to WhatsApp Business Platform"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004863-upcoming-changes-to-whatsapp-business-platform"
category: "Uncategorized"
---

# Upcoming Changes to WhatsApp Business Platform

# Upcoming Changes to WhatsApp Business Platform

  

**1\. New Pricing Model Starting July 1, 2025**  
    •    **WhatsApp is moving from per-conversation to per-message pricing.**  
    •    You’ll be charged for every template message sent, rather than for a full conversation.  
    •    **Utility templates** sent within a 24-hour service window will be **free**.  
    •    More frequent pricing updates may follow.  
    •    For details, refer to WhatsApp’s official [Pricing Update](https://developers.facebook.com/docs/whatsapp/pricing/).

  

**2\. Marketing Template Restrictions in the U.S. (From April 1, 2025)**  
    •    You **cannot send marketing template messages to U.S. phone numbers** (those with +1).  
    •    This is temporary and aims to improve the customer experience.  
    •    Utility and service messages are still allowed.

  

**3\. Template Types You Can Use**You can send different kinds of templates:  
    •    Text-only  
    •    Media (images, documents, etc.)  
    •    Interactive (buttons like Call or Visit Website)  
    •    Location-based  
    •    Authentication (One-Time Password)  
    •    Multi-product messagesAll messages must use an access token for authentication.

  

**4\. Template Engagement & Per-User Limits**Starting March 3, 2025:  
    •    WhatsApp will track how users engage with your marketing templates.  
    •    If a user is not engaging, **you’ll be allowed to send them fewer messages.** Starting April 1, 2025:  
    •    **No marketing messages will be delivered to U.S. numbers.**  
    •    Any attempt to send such messages will result in an error. If a user replies to a marketing message, a **24-hour service window** opens, during which you can send messages freely.

  

**5\. Message Errors & What They Mean**  
    •    **Code 131049**: Marketing limit reached for this user.  
    •    **Code 131050**: User opted out of marketing messages.  
    •    WhatsApp will return these errors in the message webhook.**Tip**: Don’t keep resending the message if you get an error. Wait and try again after some time.

  

**6\. Message Delivery Tips**If messages are not delivered:  
    •    Ensure the number is valid and on WhatsApp.  
    •    Ask the user to update their app and accept WhatsApp’s Terms.  
    •    Utility templates are more reliable when marketing limits apply.

  

**7\. Shared Account Model Migration**  
    •    By **September 30, 2025**, the older onboarding model (OBO) will be retired.  
    •    All partners must switch to the **Shared Account Model** using the new flow.Migration Timeline:  
    •    **March 24, 2025**: New onboarding available  
    •    **September 30, 2025**: Old method sunset  
    •    **October 1, 2025**: Meta will automatically migrate remaining accounts

  

**8\. Enhancements to Marketing Messages**  
    •    **Tappable image headers** are being rolled out to improve engagement.  
    •    Clicking the image works the same as the call-to-action button, improving click-through rates.

  

**9\. User Preferences for Marketing**WhatsApp is adding a **setting** where users can:  
    •    Stop or resume receiving marketing messages  
    •    Indicate whether they’re interested in receiving messagesYou’ll receive a webhook if a user opts out.For developers or technical teams: refer to the [official documentation](https://developers.facebook.com/docs/whatsapp) for all API methods and error codes.

  

# FAQs – WhatsApp Business Platform Updates (2025)

  

1\. What is changing with WhatsApp pricing from July 1, 2025?

WhatsApp is switching from per-conversation to per-message pricing. You will be charged for each template message sent, rather than for an entire conversation. However, utility templates sent within a 24-hour service window will be free.

* * *

2\. Can I still send marketing messages to U.S. numbers?

Starting April 1, 2025, marketing template messages cannot be sent to U.S. phone numbers (those starting with +1). This is a temporary restriction aimed at improving user experience. Utility and service messages are still allowed.

* * *

3\. What happens if I exceed per-user messaging limits?

WhatsApp tracks how users interact with your marketing messages. If a user is not engaging, you’ll be limited in how often you can message them. Attempting to send messages beyond this limit may result in:

    •    Error Code 131049: Marketing limit reached

    •    Error Code 131050: User opted out

* * *

4\. What types of message templates can I send?

You can send the following approved template types:

    •    Text-based

    •    Media-based (images, documents)

    •    Interactive (buttons like Call or Visit Website)

    •    Location-based

    •    Authentication (OTP)

    •    Multi-product messages

  

All templates must be pre-approved and sent using your access token.

* * *

5\. What should I do if messages aren’t being delivered?

Check the following:

    •    The recipient’s number is active on WhatsApp.

    •    The recipient has accepted the latest WhatsApp Terms of Service.

    •    The app is updated to the latest version.

    •    If marketing limits apply, try using a utility template instead.

* * *

6\. What is the Shared Account Model and when do I need to migrate?

Meta is phasing out the older On Behalf Of (OBO) onboarding model. You must migrate to the Shared Account Model by:

    •    March 24, 2025 – New onboarding available

    •    September 30, 2025 – OBO flow retired

    •    October 1, 2025 – Meta begins automatic migrations

* * *