---
title: "Mailgun Setup - Namecheap Domain Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup"
category: "Uncategorized"
---

# Mailgun Setup - Namecheap Domain Setup

-   [Step-by-step Mailgun Setup - Namecheap Domain Setup](#Step-by-step-Mailgun-Setup---Namecheap-Domain-Setup)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the 1st MX records](#To-add-the-1st-MX-records)
    -   [To add the 2nd MX records](#To-add-the-2nd-MX-records)
    -   [To add the CNAME record](#To-add-the-CNAME-record)
-   [A video to recap:](#A-video-to-recap%3A)

# Step-by-step Mailgun Setup - Namecheap Domain Setup

  

  

1\. Sign up for [Mailgun.com](https://signup.mailgun.com/new/signup)

  

  

2\. Check your email inbox to verify the email address

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

  

3\. Login to Mailgun, Click on **Sending** > **Add New Domain**

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

  

  

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

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

  

  

  

5\. Now log in to your DNS records based on where you get the domain and add the 5 DNS records.

  

Log in to [](https://domains.google.com/)[Namecheap.com](https://www.namecheap.com/myaccount/login/)

Click on **Domain List** > **Manage** 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379162/original/ZFfDWZRqEj2vF1mZu2LLamthayVacfWNdQ.png?1677631852)

Click on **Advanced DNS**, we are going to add 5 DNS records

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379194/original/lbM_9qwxdQuZYJgoO8k_Bbs6207ECEULCA.png?1677631892)

  

  

  

  

## To add the 1st TXT record

  

  

Click on **Add New Record**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379255/original/z9t88DrLLsk_x-5McqcmUoQay6Rtpl-3JA.png?1677631962)

  

  

  

Select **TXT** **Re****cord** from the dropdown

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379274/original/XZhGADHABEyG3gpE2kfSb4glLSsGZ7X29g.png?1677631986)

  

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379750/original/afOhZ_mYDjiPnMtdsXB_BaUvpK7-fBAbEg.png?1677632454)

  

A. Host:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

  

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

B. Head back to Mailgun and Copy the first TXT record here **v=spf1 include:mailgun.org ~all**

Value: we will paste the first copied TXT record here v=spf1 include:mailgun.org ~all

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379641/original/OtndbakIxEwGec0uzyy6VhrQ9ahdwqWR4g.png?1677632355)**

  

C. Click on the green check

  

  

  

## To add the 2nd TXT record

  

Click on **Add New Record**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380045/original/p3EI2E6cXdPA44wNy1dlbvL9SeMlPsN_pg.png?1677632706)

  

  

Select **TXT** **Re****cord** from the dropdown

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380093/original/ymsCp1tf0vOpw8jh_ELv1eyAHoFR08klKA.png?1677632745)

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380135/original/h15o-HQi5ZlCUWfi23NsIp_ULoUljPMbDw.png?1677632789)

A. Host:

  

it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379962/original/S6JIQJ-twEQMWBwUw7Do7908kLEMK8w9gg.png?1677632628)

  

Examples: **copy the highlighted part**

<table style="width: 100%;"><tbody><tr><td style="width: 50.0000%;"><p dir="ltr">Example 1 using subdomain</p><br></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945" class="fr-fic fr-fil fr-dib" data-id="48284380215" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 469px;" data-attachment="[object Object]"></td></tr><tr><td style="width: 50.0000%;"><p dir="ltr">Example 2 using main domain:</p><br></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951" class="fr-fic fr-fil fr-dib" data-id="48284380223" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 196px;" data-attachment="[object Object]"></td></tr></tbody></table>

  

  

B. Value: we will paste the second long TXT record here 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380189/original/a5LTwyG6FV_Hp-L232_fAj2g1VUUDlSyPw.png?1677632888)

  

C. Click on the green check

  

  

## To add the 1st MX records

Scroll down to **MAIL SETTINGS**

  

Switch the dropdown to **Custom MX**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380651/original/s-vIse48Y60uv4ODRMU02N4qsPS5I5uYeg.png?1677633315)

  

This will affect your existing Gsuite account to capture incoming emails for the main domain if you have **Gmail** selected originally. Make sure you are using a subdomain for Mailgun. Check out [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

  

You will need to add back **5** [MX records for Google Gmail:](https://support.google.com/a/answer/140034?hl=en)

| Host | Time to Live (TTL\*) | Priority | Value |
| --- | --- | --- | --- |
| _@_ | 3600 | 1 | ASPMX.L.GOOGLE.COM |
| _@_ | 3600 | 5 | ALT1.ASPMX.L.GOOGLE.COM |
| _@_ | 3600 | 5 | ALT2.ASPMX.L.GOOGLE.COM |
| _@_ | 3600 | 10 | ALT3.ASPMX.L.GOOGLE.COM |
| _@_ | 3600 | 10 | ALT4.ASPMX.L.GOOGLE.COM |

  

Once you add back all **FIVE** MX records above, we can then add our MX records for Mailgun

  

Click on **Add New Record**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381008/original/Hvcyh4kYnFgfuL6SKPnyDNBFReckD-0qqg.png?1677633693)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380997/original/nSuGvsypPVy3uastd0-zS4Dpu71FC2figA.png?1677633659)

A. Host:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

B. Value: paste the following data **mxa.mailgun.org**

C. Priority is 10

D. Click the green check

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381240/original/2nrnlf9BwTPbv5cKXKZS8QStDqfFbqz-7w.png?1677633916)

  

  

## To add the 2nd MX records

  

A. Host:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

B. Value: paste the following data **mxb.mailgun.org**

C. Priority is **10**

D. Click the green check

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381184/original/wao3EJjnKT5qAO1wn_ZxZqBdEusgs_E8Qw.png?1677633856)

  

  

  

  

## To add the CNAME record

  

Scroll back up to the top section named HOST RECORDS

  

Click on Add New Record

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381639/original/UJxPcf-rUHX7AwbK1pwp4kMH-N9VjEx62w.png?1677634175)

Select **CNAME Record** from the dropdown

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381737/original/kaXoDz-tFmwEhnhJ-NOwZcvVlkk_b8I-bg.png?1677634268)

  

Head back to Mailgun to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382024/original/SKui5c_vVTAOKtN714Bl9mx8OdjgxebDSA.png?1677634552)

  

Go back to Namecheap:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381724/original/zDKUjwzlyWytyho6PuhbQEvKuqGiKzYypQ.png?1677634245)

A. Host:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

mg.companyname.com The host name will be **email****.****mg**

replies.companyname.com The host name will be **email****.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

  

B. Value: paste the following data [**mailgun.org**](https://mxa.mailgun.org/)

C. Click the green check

  

  

  

Now that you have added 5 records, Go back to Mailgun and click on **Verify DNS Settings**

  

Click the same button to **Verify DNS Settings** again if some records are still not showing the green checkmark

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

  

  

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

  

# A video to recap: