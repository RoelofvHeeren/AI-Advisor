---
title: "How to make my form submissions secure from spammers?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004650-how-to-make-my-form-submissions-secure-from-spammers-"
category: "Uncategorized"
---

# How to make my form submissions secure from spammers?

  

  

**TABLE OF CONTENTS**

-   [How to secure your forms?](#How-to-secure-your-forms?)
    -   [1\. Use CAPTCHA to Prevent Spam](#1.-Use-CAPTCHA-to-Prevent-Spam)
    -   [2\. Validate Email and Phone Numbers](#2.-Validate-Email-and-Phone-Numbers)
    -   [3\. Restrict SMS Permissions Based on Geography](#3.-Restrict-SMS-Permissions-Based-on-Geography)
-   [Key Takeaways](#Key-Takeaways)

#   

# How to secure your forms?

  

Our forms product includes built-in protections against fake submissions, leveraging multiple security signals like IP addresses, geographic data, and other advanced parameters. Additionally, we use Cloudflare's DDoS protection to safeguard your forms and submissions.

  

However, for enhanced security, consider implementing the following best practices while designing your forms.

  

## 1\. Use CAPTCHA to Prevent Spam

  

Adding a CAPTCHA is one of the most effective ways to block scammers and spammers from submitting large volumes of fake entries. This helps prevent:

-   The creation of fake contacts that can clutter your CRM.
-   Excessive automated form submissions that overload your infrastructure.
-   Increased costs from automated SMS, email, or other communication updates triggered by fake entries.

  

To add captcha to you form navigate to forms > custom fields > captcha.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041768238/original/_r_VrmcXzeX2mfzbdslR0ndgFPXjtRF5dQ.png?1739859204)

  

  

This is especially useful when you have automations setup to send SMS, email or other form of communication updates. Else you may experience increased costs due to fake contacts being created in your CRM by bad actors. 

  

## 2\. Validate Email and Phone Numbers

  

Ensure only legitimate users submit forms by enabling **email and phone number validation**. This helps:

-   Block temporary, invalid, or fake contact details.
-   Prevent fraudulent entries from affecting your marketing and sales data.
-   Reduce unnecessary outreach costs.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041769324/original/zLOg_0YZJSruNrnU3lQ_bg-VYuC_wMXf8w.png?1739860781)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041769311/original/szwopcLJMfjzLG1FMynactg44ww3bxKVLw.png?1739860756)

  

## 3\. Restrict SMS Permissions Based on Geography

If your form triggers SMS communications, configure **SMS geo-permissions** to prevent messages from being sent to high-risk regions. Full Article - [Geo Permissions Issues with Twilio](https://help.gohighlevel.com/en/support/solutions/articles/48000981435)

  

**Managing Geo-Permissions in LC Phone -** **HighLevel's LC Phone system** manages SMS permissions at the sub-account level. By default, most countries are enabled except for high-risk regions. If you need to modify geo-permissions, contact **HighLevel Support** with your **Location ID** and the list of countries to enable or disable texting and calling.

  

Certain high risk countries are mentioned below that we keep turned off by default

1.  Somalia (+252)
2.  North Korea (+850)
3.  Cuba (+53)
4.  Syria (+963)
5.  Iran (+98)
6.  Sudan (+249)
7.  Liberia (+231)
8.  Zimbabwe (+263)
9.  Afghanistan (+93)
10.  Yemen (+967)

  

Best Practice - For optimal security it is a good idea to ONLY ENABLE SMS permission for regions where your actual customers are located. Be cautious when activating SMS in high-risk areas to prevent fraudulent activities.

# Key Takeaways

  

Enhancing form security protects your business from spam, fake contacts, and unnecessary costs. While built-in protections help, adding **CAPTCHA, email/phone validation, and geo-restricted SMS permissions** further strengthens security. Implement these best practices to ensure only genuine submissions reach your system.