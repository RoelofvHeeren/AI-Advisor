---
title: "MailGun Setup - HostGator Domain Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48000981679-mailgun-setup-hostgator-domain-setup"
category: "Uncategorized"
---

# MailGun Setup - HostGator Domain Setup

**TABLE OF CONTENTS**

-   [Step-by-step Mailgun Setup - HostGator Domain Setup](#Step-by-step-Mailgun-Setup---HostGator-Domain-Setup)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the 1st MX records](#To-add-the-1st-MX-records)
    -   [To add the 2nd MX records](#To-add-the-2nd-MX-records)
    -   [To add the CNAME record](#To-add-the-CNAME-record)

# Step-by-step Mailgun Setup - HostGator Domain Setup

  

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

  

The next screen that you're taken to will ask you to add DNS records to your domain. Leave this screen open for the next step.

  

![Screen Shot 2022-09-11 at 6.39.22 PM.png](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

  

5\. Now log in to your DNS records based on where you get the domain and add the 5 DNS records.

##   

## To add the 1st TXT record

1.  Log in to [cPanel](https://portal.hostgator.com/hosting/cPanel/sso-redirect?redirect=/frontend/paper_lantern/).
2.  Look for the **Domains** section, then click **Zone Editor**.
    
    ![cPanel - Zone Editor](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388376/original/0ObShEaAQ6GXG-G-sSlIwX_9uLXpFUjdCA.png?1677640303)
    
3.  On the next page, Locate your domain in the **Zone Editor** section, then click its **Manage** button.![Zone Editor - Manage](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388585/original/ZsKY3OvmFHtUBZWXElGKPG31Nl51EuXcFA.png?1677640464)
4.  Click **Manage** to view the domain's complete set of DNS records.
5.  Click the **+Add Record** button and select **Add "TXT" Record**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389218/original/uUNVP51P30hs2i_U9O701kVRlGP55HpdDw.png?1677641077)

  

  

A. Name: Different for everyone, **DO NOT INCLUDE THE ROOT DOMAIN**

  

-   Depending on the subdomain you are trying to set up, if you are trying to set up
    -   [mg.companyname.com](//mg.companyname.com) The host name will be **mg**
    -   [replies.companyname.com](//replies.companyname.com) The host name will be **replies**
-   If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

B. Record: Same for everyone

-   paste the following record **v=spf1 include:mailgun.org ~all**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389338/original/L_D8amxfS4rLqz8NkwMDjBWCqAuPnFqSiw.png?1677641215)**  
  

C. Click on **Add Record**

  

  

  

  

## To add the 2nd TXT record

  

Click the **+Add Record button** and select **Add "TXT" Record** again

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389413/original/bZ319PXDv8_TwakgxeWsjd6r5-6KFjcfAA.png?1677641278)

  

  

A. Name: it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT INCLUDE THE ROOT DOMAIN**

  

**\*\*Everyone's 2nd TXT record Host Name and record is different**

  

Examples: **copy the highlighted part ONLY**

<table data-identifyelement="702" style="width: 100%;"><tbody data-identifyelement="703"><tr data-identifyelement="704"><td data-identifyelement="705" style="width: 50.0000%;"><p data-identifyelement="706" dir="ltr">Example 1 using subdomain:</p><p data-identifyelement="706" dir="ltr"><br></p><p data-identifyelement="706" dir="ltr">Copy mx._domainkey.helpdesk as the host name</p></td><td data-identifyelement="707" style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945" class="fr-fic fr-fil fr-dib" data-id="48284380215" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 469px;" data-attachment="[object Object]" data-identifyelement="708"></td></tr><tr data-identifyelement="709"><td data-identifyelement="710" style="width: 50.0000%;"><p data-identifyelement="711" dir="ltr">Example 2 using main domain:</p><p data-identifyelement="711" dir="ltr"><br></p><p data-identifyelement="711" dir="ltr">Copy mailo._domainkey<span dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;as the host name</span></p></td><td data-identifyelement="712" style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951" class="fr-fic fr-fil fr-dib" data-id="48284380223" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 196px;" data-attachment="[object Object]" data-identifyelement="713"></td></tr></tbody></table>

  

  

B. Record: different for everyone

    Head back to Mailgun and Copy the 2nd TXT record here **highlighted in the screenshot below**

-   Record: paste the 2nd very long copied TXT record here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

  

C. Click on **Add Record**

  

## To add the 1st MX records

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)  

  

Click the **+Add Record button** and select **Add "MX" Record**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)

  

  

If you have a Gsuite account to capture incoming emails for the main domain. Make sure you are using a subdomain for Mailgun. Check out [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

  

A. Name: Different for everyone

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

B. Priority is **10** which is also same for everyone no matter what domain you are trying to set

  

C. Destination: Same for everyone

    paste the following data **mxa.mailgun.org** 

  

E. Click on **Save Record**

  

  

  

## To add the 2nd MX records

  

Click the **+Add Record button** and select **Add "MX" Record**

This time we need to add another record for mx**B**.mailgun.org 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

A. Name: Different for everyone

  

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

B. Priority is **10** which is also same for everyone no matter what domain you are trying to set

  

C. Destination: Same for everyone

    paste the following data **mxb.mailgun.org** 

  

E. Click on **Save Record**

  

  

  

  

## To add the CNAME record

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

Click the **+Add Record button** and select **Add "CNAME" Record**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390884/original/13yHoywGcgf3oSslLKzD03Sj9MAxoJQGfA.png?1677642360)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284391213/original/QLb8ArxkgSrQsXJzo63PddCcQRhylQBGHw.png?1677642643)

  

A. Name: Different for everyone

Head back to Mailgun to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   mg.companyname.com The host name will be **email****.****mg**
-   replies.companyname.com The host name will be **email****.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

  

B. Record: Same for everyone

        paste the following data **mailgun.org**

  

C. Click on **Save Record**

  

  

Now that you have added 5 records, Go back to Mailgun and click on **Verify DNS Settings**

  

  

Click the same button to **Verify DNS Settings** again if some records are still not showing the green checkmark

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

  

  

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)