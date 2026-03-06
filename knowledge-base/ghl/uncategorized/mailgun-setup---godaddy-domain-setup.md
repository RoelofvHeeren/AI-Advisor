---
title: "Mailgun Setup - GoDaddy Domain Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup"
category: "Uncategorized"
---

# Mailgun Setup - GoDaddy Domain Setup

-   [Step-by-step Mailgun Setup - GoDaddy Domain Setup](#Step-by-step-Mailgun-Setup---GoDaddy-Domain-Setup)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the 1st MX records](#To-add-the-1st-MX-records)
    -   [To add the 2nd MX records](#To-add-the-2nd-MX-records)
    -   [To add the CNAME record](#To-add-the-CNAME-record)
-   [A video to recap](#A-video-to-recap%3A)

  

  

  

  

  

  

# Step-by-step Mailgun Setup - GoDaddy Domain Setup

  

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

  

  

  

  

## To add the 1st TXT record

  
To [Add your first TXT record](https://ca.godaddy.com/help/add-a-txt-record-19232), Sign in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio). 

  

Click on the three dots for the Domain Edit Options next to your domain

  

Select **Edit DNS**. You may need to scroll down to see the Edit DNS option.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

  

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

  

  

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

  

  

A. Type: Select **TXT** from the Type menu options.

  

B. Host: **DO NOT INCLUDE THE ROOT DOMAIN**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292759996/original/0Cj6mdSJlEYwYG4Qt4KqNjenCcUdx500Tw.png?1681494292)

  

  

-   Depending on the subdomain you are trying to set up, if you are trying to set up
    -   [mg.companyname.com](//mg.companyname.com) The host name will be **mg**
    -   [replies.companyname.com](//replies.companyname.com) The host name will be **replies**
-   If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

  

C. TXT Value: Same for everyone

-   paste the following record **v=spf1 include:mailgun.org ~all**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760093/original/5Gl9rXwkPu648V7b7A73EVcYsiwQjSX3fQ.png?1681494342)

  

D. Click on **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)**

  

  

  

  

  

  

## To add the 2nd TXT record

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

  

  

A. Type:

    Select **TXT** from the Type menu options.

  

B. Host:

    it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT INCLUDE THE ROOT DOMAIN**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760457/original/uKwd7XSYgsN0abFfq-uLghjMc4gYBKFShw.png?1681494446)**  

  

  

**\*\*Everyone's 2nd TXT record host name and value is different**

  

Examples: **copy the highlighted part ONLY**

<table data-identifyelement="702" style="width: 100%;"><tbody data-identifyelement="703"><tr data-identifyelement="704"><td data-identifyelement="705" style="width: 50.0000%;"><p data-identifyelement="706" dir="ltr">Example 1 using subdomain:</p><p data-identifyelement="706" dir="ltr"><br data-identifyelement="542"></p><p data-identifyelement="706" dir="ltr">Copy mx._domainkey.helpdesk as the host name</p></td><td data-identifyelement="707" style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945" class="fr-fic fr-fil fr-dib" data-id="48284380215" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 469px;" data-attachment="[object Object]" data-identifyelement="708"></td></tr><tr data-identifyelement="709"><td data-identifyelement="710" style="width: 50.0000%;"><p data-identifyelement="711" dir="ltr">Example 2 using main domain:</p><p data-identifyelement="711" dir="ltr"><br data-identifyelement="543"></p><p data-identifyelement="711" dir="ltr">Copy mailo._domainkey<span data-identifyelement="544" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;as the host name</span></p></td><td data-identifyelement="712" style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951" class="fr-fic fr-fil fr-dib" data-id="48284380223" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 196px;" data-attachment="[object Object]" data-identifyelement="713"></td></tr></tbody></table>

  

  

C. TXT Value: Head back to Mailgun and Copy the 2nd TXT record here **highlighted in the screenshot below**

-   Value: paste the 2nd very long copied TXT record here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

  

  

  

D. Click on **Save**

  

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)**

  

  

  

  

  

## To add the 1st MX records

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)  

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

  

If you have a Gsuite account to capture incoming emails for the main domain. Make sure you are using a subdomain for Mailgun. Check out [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

  

A. Type: Select **MX** from the Type menu options.

  

  

B. Host: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761281/original/ilff0N0hrTpB9rOZOLtKWFcpd_pFm1FAAg.png?1681494876)

Depending on the subdomain you are trying to set up, if you are trying to set up

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

C. Points to: Same for everyone

    paste the following data **[mxa.mailgun.org](//mxa.mailgun.org)** 

  

D. Priority is **10** which is also same for everyone no matter what domain you are trying to set

  

E. Click on **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

  

  

  

  

## To add the 2nd MX records

  

Click on **Add** to add a new record.

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

  

A. Type: Select **MX** from the Type menu options.

  

  

B. Host: Different for everyone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761375/original/qVuzSSON9aWqKQCpGlKX89woV1txgzea3g.png?1681494908)  

Depending on the subdomain you are trying to set up, if you are trying to set up

  

[mg.companyname.com](//mg.companyname.com) The host name will be **mg**

  

[replies.companyname.com](//replies.companyname.com) The host name will be **replies**

  

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

C. Points to: Same for everyone

  

    paste the following data **mxb.mailgun.org** 

  

D. Priority is **10** which is also same for everyone no matter what domain you are trying to set

  

E. Click on **Save**

  

  

  

  

  

  

## To add the CNAME record

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

A. Type: Select **CNAME** from the Type menu options.

  

B. Host: Different for everyone

  

Head back to Mailgun to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main domain**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761488/original/yTenM0KsBABRkiuopqOQIzy7E_TjKkeVDw.png?1681494956)

Depending on the subdomain you are trying to set up, if you are trying to set up

-   mg.companyname.com The host name will be **email****.****mg**
-   replies.companyname.com The host name will be **email****.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

  

  

C. Points to: Same for everyone

        paste the following data **mailgun.org**

  

D. Click on **Save**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

  

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

Now that you have added 5 records, Go back to Mailgun and click on **Verify DNS Settings**

  

  

Click the same button to **Verify DNS Settings** again if some records are still not showing the green checkmark

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

  

  

Once you add all the DNS records and verify, you can grab the [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

  

# A video to recap: