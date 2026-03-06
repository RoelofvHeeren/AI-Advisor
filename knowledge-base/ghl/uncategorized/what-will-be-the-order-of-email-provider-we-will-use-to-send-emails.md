---
title: "What will be the order of Email Provider we will use to send emails?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-"
category: "Uncategorized"
---

# What will be the order of Email Provider we will use to send emails?

# The order of Email Provider we will use to send emails:

  

# 1\. Sub-account Default Provider (Sub-account view)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982731/original/zbPvxMEXm3pq7JIa2cM_0D5R-KAY4xq9XQ.png?1675707794)

  

  

  

  

  

  

2\. Email Settings for Locations (Agency view)

  

If no default provider is selected at the location level, it will be using the provider configured in Agency View. 

  

[](https://app.gohighlevel.com/settings/email_services)[](https://app.gohighlevel.com/settings/email_services)[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)  

  

Setting up Mailgun for Locations:

  

-   You can configure each location with your client's own Mailgun or your mailgun
-   We can use the same Mailgun API and the same domain/subdomain for multiple locations
-   We can use the same Mailgun API and different domains/subdomains for multiple locations
-   We can use the different Mailgun API and domain/subdomain for multiple locations
-   You can also set up a unique domain/subdomain for each location to capture cold inbound emails. [Learn more about Cold Email Inbound Setup here](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup).

Setting up LC email for Locations:

-   If you add the custom domain at the agency level, it will be used for all sub-accounts until you set up a custom domain at the subaccount level. In that case, it will use the subaccount one as the priority.
-   [What is LC - Email? I want to know more](https://help.gohighlevel.com/en/support/solutions/articles/48001220605)
-   [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001222501)
-   [How to Set Up a Dedicated Sending Domain (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)
-   [How to set up a Dedicated Sending Domain using GoDaddy (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001237513)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982772/original/VaHl4lAMpUxjgcZsYcWwp920XsXHSheaUA.png?1675707822)

  

  

We have a new download feature for email service settings. This option is especially beneficial for users managing high volume accounts, providing an easier way to handle your email settings:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003776772/original/DCVsZICi-ulERP-6Euya18IckqdaGaEGBQ.png?1690410906)

  

  

  

3\. Agency Default provider in Email Services tab (Agency view)

  

[](https://app.gohighlevel.com/settings/email_services)[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279983260/original/wnB4delmXyXEl7HCwnIUbAzHqc7AHcj6gg.png?1675708045)

  

  

-   Each new location will inherit the settings based on this configured Mailgun API key.
-   We will also use it to send the **email verification code**

  

  

  

  

  

4\. LeadConnector Email

  

If nothing is set up, We will use something similar to this subdomain to send and receive emails.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48190650236/original/d1nUQfQzUpkJ6yrUxRHE-kMy5QxGulcFcQ.png?1644970144)