---
title: "Mailgun Setup - Google Domain Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48001155148-mailgun-setup-google-domain-setup"
category: "Uncategorized"
---

# Mailgun Setup - Google Domain Setup

**TABLE OF CONTENTS**

-   [Step-by-step Mailgun Setup - Google Domains](#Step-by-step-Mailgun-Setup---Google-Domains)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the MX records, click Create new record](#To-add-the-MX-records,-click-Create-new-record)
    -   [To add the CNAME record, click Create new record](#To-add-the-CNAME-record,-click-Create-new-record)

  

# Step-by-step Mailgun Setup - Google Domains

  

  

1\. Sign up for [Mailgun.com](https://signup.mailgun.com/new/signup)

  

  

2\. Check your email inbox to verify the email address

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382834/original/93q62at2bi41NnpFtGv2FEPRQFFSRfxR7w.png?1677635327)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382837/original/cRlyZ3AGCLES6EuDfYfGZsvx1meXvGsPdg.png?1677635328)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

  

3\. Login to Mailgun, Click on **Sending** > **Add New Domain**

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382836/original/dX85fHXCrcdjQS7AUBN05K-nzvcunlx1CQ.png?1677635327)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

  

  

4\. If your domain is companyname.com, you can either set up the main domain or subdomain with Mailgun. 

  

A. Main domain:

-   If you are adding the main domain, [it should not be used with Gsuite, or any other email provider](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 

    Subdomain:

-   To set up the subdomain with Mailgun, you can type **ANYTHING\_HERE**.companyname.com
    -   Examples:
        -   mg.companyname.com
        -   replies.companyname.com
        -   support.companyname.com

B. Please set up the domain or subdomain under US, **not EU. not EU. not EU.** 

C. Click on **Add domain**

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382833/original/orhf_0AVhwlQvuxlv2cPV72PZBV30Ec4gw.png?1677635326)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

  

  

  

5\. Now log in to your DNS records based on where you get the domain and add the 5 DNS records

  

-   Log in to [domains.google.com](//domains.google.com)
-   Click into the domain you are trying to set up
-   Click DNS on the left panel, we are going to add 5 DNS records

  

  

Copy the first TXT record here **v=spf1 include:mailgun.org ~all**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542584/original/jduaWZZKo0s-PYGnVfTYxkAaGSceLswDuQ.png?1659727406)

  

## To add the 1st TXT record

  

Host name:

  

-   Depending on the subdomain you are trying to set up, if you are trying to set up
    -   [mg.companyname.com](//mg.companyname.com) The host name will be **mg**
    -   [replies.companyname.com](//replies.companyname.com) The host name will be **replies**
-   If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

Type: Select **TXT** from the dropdown

  

Data: we will paste the first copied TXT record here **v=spf1 include:mailgun.org ~all**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542124/original/92-SiILtsZ5kfbsAEFFhKKjKEM8sGjIWEQ.png?1659727285)

  

  

Don't click save yet, 4 more new records to add

Once you are done with the 1st record, click **Create new record**

  

  

## To add the 2nd TXT record

  

Host name:

  

it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **do not copy the main domain**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542908/original/5vSFtNLEoaRQt2aK8L4rniJCWjLDJy6Vmg.png?1659727560)

  

Examples: **copy the highlighted part**

  

Example 1 using subdomain

* * *

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543383/original/LybPtPP4joO7bl9IEDJ1fwxnIvEiXCedvA.png?1659727679)

* * *

  

Example 2 using main domain:

* * *

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378839/original/6xJR3U2ek0CgVESacXXEwkHcgsLaOXbjhQ.png?1677631543)

* * *

  

  

  

  

Type: Select **TXT** from the dropdown

  

Data: we will paste the second long TXT record here 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543480/original/SA3H2iuimeXJJUdD5n5KAwd7ZwCI3qt5gA.png?1659727710)

  

  

## To add the MX records, click **Create new record**

  

Host name:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

Type: Select **MX** from the dropdown

  

Data: paste the following data

  

-   Copy and paste **10** [**mxa.mailgun.org**](//mxa.mailgun.org)
-   Click **+Add more to this record**
    -   Copy and paste **10 mxb.mailgun.org**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544215/original/laPv0qzJMIw-tvzuWSaNoZUh1BosRw4EOg.png?1659728081)

  

  

  

## To add the CNAME record, click **Create new record**

Host name:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **email.****mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **email.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

Type: Select **CNAME** from the dropdown

  

Data: copy and paste **mailgun.org**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543931/original/4TQk2kmsk4suUaSdEwDrhVPLhdT8fYRTiw.png?1659727913)

  

  

Now that you have added 5 DNS records, click SAVE!

  

  

Go back to Mailgun and click **Verify DNS Settings**

  

Click the same button to **Verify DNS Settings** again if some records are still not showing the green checkmark

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544863/original/fZ4MWAp_hBYkuUM9L9YEuCRqwG5FLmD8Yw.png?1659728463)

  

  

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)