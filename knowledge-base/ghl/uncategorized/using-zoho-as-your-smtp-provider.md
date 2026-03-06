---
title: "Using Zoho as your SMTP Provider"
url: "https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider"
category: "Uncategorized"
---

# Using Zoho as your SMTP Provider

**Configuring Zoho as Your SMTP Provider in HighLevel**

This article provides a step-by-step guide for integrating Zoho Mail as your SMTP provider within HighLevel. SMTP (Simple Mail Transfer Protocol) is essential for sending emails reliably from your HighLevel account, and using Zoho's SMTP server can help ensure smooth email delivery. In this guide, you'll find detailed instructions on setting up Zoho as your SMTP provider, including configuration settings and troubleshooting tips. Whether you're setting up Zoho for the first time or need to adjust your current settings, this guide will help you achieve seamless email communication through HighLevel.

  

**TABLE OF CONTENTS**

-   [Outgoing Server Settings for Personal Email Users](#Outgoing-Server-Settings-for-Personal-Email-Users%3A%C2%A0\(Personal-users-with-an-email-address,%C2%A0username@zoho.com\)%3A)
-   [Outgoing Server Settings for Organizations with domain-based email](#Outgoing-Server-Settings-for-Organizations-with-domain-based-email%3A%C2%A0\(Organization-users-with-a-domain-based-email-address,%C2%A0you@yourdomain.com\)%3A)

-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

  

  

[Zoho Mail IMAP Server Details](https://www.zoho.com/mail/help/imap-access.html)

  

  

## **Outgoing Server Settings for Personal Email Users:** (Personal users with an email address, _username_**@zoho.com):**

Outgoing Server Name: **smtp.zoho.com**  
Port: **465** with **SSL** _or_  
Port: **587** with **TLS**  
Require Authentication: **Yes**

Learn more about [Why Can't I use My Free Email Address As The SMTP?](https://help.gohighlevel.com/en/support/solutions/articles/48001063376)

  

## **Outgoing Server Settings for Organizations with domain-based email:** (Organization users with a domain-based email address, **you**@**yourdomain.com):**

Outgoing Server Name: **smtppro.zoho.com**  
Port: **465** with **SSL** _or_  
Port: **587** with **TLS**  
Require Authentication: **Yes**

**User Name:**  Enter your Zoho username or your complete Zoho Mail address. If your domain is hosted with Zoho, then your email address will be in the format **you@yourdomain.com**.  
  
**Email Address:** Enter Your Zoho Mail address. If your domain is hosted with Zoho, then your email address will be in the format **you@yourdomain.com**.  
  
**Password:** Enter your Zoho account password.  (You might require an [Application-specific Password](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html#alink5) if Two-factor Authentication is enabled).

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**

-   [](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)[How to setup other SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)