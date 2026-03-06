---
title: "Siteground Dedicated Sending Domain Setup (LC Email)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-"
category: "Uncategorized"
---

# Siteground Dedicated Sending Domain Setup (LC Email)

  

**TABLE OF CONTENTS**

-   [Step-by-step LC Email Dedicated Domain Setup - Siteground](#Step-by-step-LC-Email-Dedicated-Domain-Setup---Siteground)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the 1st MX records](#To-add-the-1st-MX-records)
    -   [To add the 2nd MX records](#To-add-the-2nd-MX-records)
    -   [To add the CNAME record](#To-add-the-CNAME-record)

* * *

#   
Step-by-step LC Email Dedicated Domain Setup - Siteground

  

1\. Once you are in the sub-account > Click on **Settings** > **Email Services** > **Dedicated Domain** \> **+ Add Domain**

  

Check out [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001222501)  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

  

  

  

2\. If your Domain is companyname.com, you can set up a main Domain or sub-domain. 

  

Check out [How to move a sending domain from Mailgun to LeadConnector?](https://help.gohighlevel.com/support/solutions/articles/48001226115-how-to-set-up-a-dedicated-sending-domain-lc-email-#How-to-move-sending-domain-from-Mailgun-to-LeadConnector?)

Main Domain:

-   If you are adding the main Domain, [it should not be used with Gsuite or any other email provider](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 

  
Sub-domain:

-   To set up the subdomain, you can type **ANYTHING\_HERE**.companyname.com
    -   Examples:
        -   ****replies**.**companyname.com
        -   **support**.companyname.com

  

  

  

3\. Click on **Add & Verify**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769485/original/Q46amTmsqcDKAnWZRyL8QCC1l7hdpWCLCg.jpg?1723215212)

  

  

  

The next screen that you're taken to will ask you to add DNS records to your Domain. Leave this screen open for the next step.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769518/original/u0y6nwg71SG7K_cEFAXEO8VhBAzeldaGQA.jpg?1723215260)

  

  

4\. Now log in to your DNS records based on where you get the Domain and add the 5 DNS records.

  

## To add the 1st TXT record

  

To [Add your first TXT record](https://world.siteground.com/kb/manage-dns-records/#TXT_record_settings), Log in to [](https://dash.cloudflare.com/login)[Siteground](https://login.siteground.com/login?lang=en)

Go to **Site Tools** > **Domain** > **DNS Zone Editor**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769548/original/VsNojWfnrB6J31RPe6Kf-eYmW7DBngqqlQ.jpg?1723215298)

  

  

In the Create New Record section

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780106/original/bHbrF0bUz804hradJsT9OgCLJPXR8Qxiag.jpg?1723224477)  

  

A. click on the **TXT** tab

  

B. Name: different for everyone, **DO NOT INCLUDE THE ROOT DOMAIN**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780154/original/LirZym0_7wm9fj29hWQHDt2TXRZOmWAQUQ.jpg?1723224534)  

-   Depending on the subdomain you are trying to set up, if you are trying to set up
    -   **lc**.companyname.com - The host name will be **lc**[](https://replies.companyname.com/)
    -   **replies**.companyname.com - The host name will be **replies**
-   If you are setting up a **main** domain like companyname.com, the host name will be **@ or leave empty**

  

C. Value: Same for everyone

-   paste the following record **v=spf1 include:mailgun.org ~all**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780181/original/_hL8idOQ87Q9OiHkGuFyrBAmALbUCfdtAg.jpg?1723224576)  

  

D. Click on Create

  

* * *

  

## **To add the 2nd TXT record**

  

Click on **\+ Add Record** again

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780286/original/-_m54mJDcyCoz2qwiphfIQjUELRRPGy2TQ.jpg?1723224707)  

  

  

  

A. click on the **TXT** tab

  

B. Name: it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT INCLUDE THE ROOT DOMAIN**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780352/original/y-S6ROHWlFNZIPWbWP35TLikz7DU-x5SBg.jpg?1723224751)  

**\*\*Everyone's 2nd TXT record hostname and value is different**

  

Examples: **copy the highlighted part ONLY**

<table data-identifyelement="702" style="width: 100%; font-size: 16px;"><tbody data-identifyelement="703"><tr data-identifyelement="704"><td data-identifyelement="705" style="width: 50%; font-size: 16px;"><p data-identifyelement="706" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;">Example 1 using subdomain:</span></p><p data-identifyelement="706" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;"><br data-identifyelement="542"></span></p><p data-identifyelement="706" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;">Copy <strong data-identifyelement="585">mx._domainkey.helpdesk</strong> as the hostname</span></p></td><td data-identifyelement="707" style="width: 50%; font-size: 16px;"><span style="font-size: 14px;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513" style="width: auto;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="48292768867" data-identifyelement="586"></span></td></tr><tr data-identifyelement="709"><td data-identifyelement="710" style="width: 50%; font-size: 16px;"><p data-identifyelement="711" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;">Example 2 using main Domain:</span></p><p data-identifyelement="711" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;"><br data-identifyelement="543"></span></p><p data-identifyelement="711" dir="ltr" style="font-size: 16px;"><span style="font-size: 14px;">Copy <strong data-identifyelement="587">mailo._domainkey</strong><span data-identifyelement="544" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;as the hostname</span></span></p></td><td data-identifyelement="712" style="width: 50%; font-size: 16px;"><span style="font-size: 14px;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537" style="width: 235px;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="48292768954" data-identifyelement="588"></span></td></tr></tbody></table>

  

  

C. Value: Head back to HighLevel and Copy and paste the 2nd TXT record here **highlighted in the screenshot below**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780383/original/HdqP4IVZly9D-b8XMoSreStXhxpKOBhmvg.jpg?1723224827)  

  

D. Click on **Create**

* * *

  

## To add the 1st MX records

  

  

  

Click on the **MX** tab > Select **Add your own MX records**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780422/original/rNjjKaWuMefXrQn3wNTgUYDpvKK7OsQibA.jpg?1723224862)  

  

If you have a Gsuite account to capture incoming emails for the main domain. Make sure you are using a subdomain. Check out [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030781114/original/Wr1IYksYWNCM4dmafAALzCOKd5u-UHIIRg.jpg?1723225787)  

  

A. Name: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782341/original/EoVTlF-5tjzN0euBbaIAnTPzyOadJO6xnw.jpg?1723228044)  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   **lc**.companyname.com - The host name will be **lc**[](https://replies.companyname.com/)
-   **replies**.companyname.com - The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

B. Priority is **10** which is also same for everyone no matter what domain you are trying to set

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782362/original/S3zPWDAvVfLvcHd18dzny8F2chlD-k-McA.jpg?1723228108)  

C. Destination: Same for everyone

    paste the following data **mxa.mailgun.org** 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782390/original/dCrujp8-torR3KCkqHj9RCUxV9T4IpP4fw.jpg?1723228150)  

D. Click on **Create**

  

* * *

  

## To add the 2nd MX records

  

Add another MX record again, this time Destination will be mx**_b_**.mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782407/original/STd7r76SSYxjjEueEZ71PlcaGBOkTHo5Jw.jpg?1723228189)  

  

A. Name: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782413/original/HGLSaAWGMgGCvPBFzdZi2p5c6a2196-KMQ.jpg?1723228228)  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   **lc**.companyname.com - The host name will be **lc**[](https://replies.companyname.com/)
-   **replies**.companyname.com - The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

B. Priority is **10** which is also same for everyone no matter what domain you are trying to set

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783105/original/TBBrnlPpoLpeqs517AvUL65F5TN5oV6qbQ.jpg?1723229730)  

C. Destination: Same for everyone

    paste the following data **mxb.mailgun.org**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783114/original/gmZ3PYwnHX5SoqOoa1c3TPV-FvlUOwQM6A.jpg?1723229761)  

D. Click on **Create**

  

* * *

  

## To add the CNAME record

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783142/original/PpLAFvnX8fpVSkGYfge-jqVsPe-05bhTMA.jpg?1723229788)  

  

A. Click on the **CNAME** tab

  

B. Name: Different for everyone

Head back to HighLevel to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783146/original/NzlqSBBFNxO15QArOp7-b2YQT2e5HoEqmg.jpg?1723229819)  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   lc.companyname.com The host name will be **email****.****lc**
-   replies.companyname.com The host name will be **email****.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

  

C. Resolves to: Same for everyone

        paste the following data **mailgun.org**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783164/original/pajiIQ0wDsE7fPob2fz6xdduz_LfP-iKMg.jpg?1723229856)  

D. Click on **Create**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783184/original/F1CbuTsrXYX_Jc1kpb5rRqS82VtyueNFiQ.jpg?1723229890)  

Now that you have added 5 records, Go back to HighLevel and click on **Verify DNS Settings**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783203/original/X-TDph4fv6CxTwGhAoTVFfFqut48mxYVKQ.jpg?1723229933)  

  

Click the same button to **Verify Domain** again if some records are still not showing the green checkmark

  

Once you add all the DNS records and verify, you can make sure the [SSL Certificate for Dedicated Sending Domain (LC - Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001227438) is all set.

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

  

* * *

  

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**

-   [Siteground Domain Setup for Mailgun](https://help.gohighlevel.com/a/solutions/articles/48000981685?portalId=48000045315)

#