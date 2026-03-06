---
title: "GoDaddy Dedicated Sending Domain Setu (LC Email)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-"
category: "Uncategorized"
---

# GoDaddy Dedicated Sending Domain Setu (LC Email)

**Covered in this article**

-   [Step-by-step LC Email Dedicated Domain Setup - GoDaddy](#Step-by-step-LC-Email-Dedicated-Domain-Setup---GoDaddy)
    -   [To add the 1st TXT record](#To-add-the-1st-TXT-record)
    -   [To add the 2nd TXT record](#To-add-the-2nd-TXT-record)
    -   [To add the 1st MX records](#To-add-the-1st-MX-records)
    -   [To add the 2nd MX records](#To-add-the-2nd-MX-records)
    -   [To add the CNAME record](#To-add-the-CNAME-record)

* * *

# **Step-by-step LC Email Dedicated Domain Setup - GoDaddy**

  

1\. Once you are in the sub-account > Click on Settings > Email Services > Dedicated Domain > + Add Domain

  

Check out [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001222501)  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

  

  

  

2\. If your Domain is companyname.com, you can set up the main Domain or sub-domain with. 

  

Check out [How to move a sending domain from Mailgun to LeadConnector?](https://help.gohighlevel.com/support/solutions/articles/48001226115-how-to-set-up-a-dedicated-sending-domain-lc-email-#How-to-move-sending-domain-from-Mailgun-to-LeadConnector?)

Main Domain:

-   If you are adding the main Domain, [it should not be used with Gsuite or any other email provider](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 

  
Sub-domain:

-   To set up the subdomain, you can type ANYTHING\_HERE.companyname.com
    -   Examples:
        -   replies.companyname.com
        -   support.companyname.com

  

  

3\. Click on Add & Verify

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png?1681497266)

  

  

The next screen that you're taken to will ask you to add DNS records to your Domain. Leave this screen open for the next step.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png?1681838621)

  

4\. Now log in to your DNS records based on where you get the Domain and add the 5 DNS records.

  

## To add the 1st TXT record

Sign in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio) to add your [first TXT record](https://ca.godaddy.com/help/add-a-txt-record-19232). 

  

Click on the three dots for the Domain Edit Options next to your Domain

  

Select **Edit DNS**. You may need to scroll down to see the Edit DNS option.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

  

  

  
  
Click on Add to add a new record.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

  

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

  

  

A. Type: Select TXT from the Type menu options.

  

B. Host: DO NOT INCLUDE THE ROOT DOMAIN

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767095/original/U0Uh3wPJ901NXe3E0tAj8DzwIys4kzuXFA.png?1681497560)

  

  

-   Depending on the subdomain you are trying to set up, if you are trying to set up
    -   **lc**.companyname.com - The host name will be **lc** 
    -   [replies.companyname.com](//replies.companyname.com) - The host name will be **replies**
-   If you are setting up a **main** domain like companyname.com, the hostname will be **@**

  

  

  

C. TXT Value: Same for everyone

-   paste the following record **v=spf1 include:mailgun.org ~all**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png?1681497695)

  

  

  
D. Click on **Save**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)**

  

  

  

  

  

  

## **To add the 2nd TXT record**

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

  

  

A. Type:

  

    Select **TXT** from the Type menu options.

  

B. Host:

  

    It's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT INCLUDE THE ROOT DOMAIN**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768165/original/xN_6s9kcDwkztqKLFUlRtJJJlE7M_GD54w.png?1681498178)

  

  

**\*\*Everyone's 2nd TXT record hostname and value is different**

  

Examples: **copy the highlighted part ONLY**

<table data-identifyelement="702" style="width: 100%; font-size: 16px;"><tbody data-identifyelement="703"><tr data-identifyelement="704"><td data-identifyelement="705" style="width: 50%; font-size: 16px;"><p data-identifyelement="706" dir="ltr" style="font-size: 16px;">Example 1 using subdomain:</p><p data-identifyelement="706" dir="ltr" style="font-size: 16px;"><br data-identifyelement="542"></p><p data-identifyelement="706" dir="ltr" style="font-size: 16px;">Copy <strong data-identifyelement="585">mx._domainkey.helpdesk</strong> as the hostname</p></td><td data-identifyelement="707" style="width: 50%; font-size: 16px;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513" style="width: auto;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="48292768867" data-identifyelement="586"></td></tr><tr data-identifyelement="709"><td data-identifyelement="710" style="width: 50%; font-size: 16px;"><p data-identifyelement="711" dir="ltr" style="font-size: 16px;">Example 2 using main Domain:</p><p data-identifyelement="711" dir="ltr" style="font-size: 16px;"><br data-identifyelement="543"></p><p data-identifyelement="711" dir="ltr" style="font-size: 16px;">Copy <strong data-identifyelement="587">mailo._domainkey</strong><span data-identifyelement="544" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">&nbsp;as the hostname</span></p></td><td data-identifyelement="712" style="width: 50%; font-size: 16px;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537" style="width: 235px;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="48292768954" data-identifyelement="588"></td></tr></tbody></table>

  

  

C. TXT Value:

Copy the 2nd TXT record here, **highlighted in the screenshot below**

  

-   Value: paste the 2nd very long copied TXT record here

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png?1681498466)

  

  

  

D. Click on **Save**

  

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)**

  

  

  

  

  

## To add the 1st MX records

  

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

  

Suppose you have a Gsuite account to capture incoming emails for the main Domain. Make sure you are using a subdomain. Check out primary[Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

  

A. Type: Select **MX** from the Type menu options.

  

  

B. Host: Different for everyone

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769400/original/UKCDaverUyyLQpklJb1Jxf15cmXUamb0VQ.png?1681498752)

  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   **lc**.companyname.com - The host name will be **lc**
-   [replies.companyname.com](https://replies.companyname.com/) - The host name will be **replies**

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

C. Points to: Same for everyone

    paste the following data **[mxa.mailgun.org](//mxa.mailgun.org)** 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769476/original/xvdURibcJ1cBG-y1bc5ngzqpnSNCdRALmA.png?1681498784)

  

  

  

D. Priority is **10** which is also same for everyone no matter what Domain you are trying to set

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769807/original/1wmkWSsWNVmgj5fdec3hG0a9KbuWBxPhnA.png?1681498971)

  

E. Click on **Save**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

  

  

  

  

## To add the 2nd MX records

  

Click on **Add** to add a new record.

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

  

A. Type: Select **MX** from the Type menu options.

  

  

B. Host: Different for everyone

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770778/original/1YS3yCM8yCVGkdwvDlET1DiZvGimSLDnCA.png?1681499489)

  

Depending on the subdomain you are trying to set up, if you are trying to set up

  

-   **lc**.companyname.com - The host name will be **lc**
-   [replies.companyname.com](https://replies.companyname.com/) - The host name will be **replies**

  

If you are setting up a **main** domain like companyname.com, the host name will be **@**

  

  

C. Points to: Same for everyone

  

    paste the following data **mxb.mailgun.org** 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770829/original/lo34kUcHgQ_jNcW7DaT0x3DUPiEu1AubLw.png?1681499515)  

  

D. Priority is **10** which is also same for everyone no matter what Domain you are trying to set

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770920/original/Fw8uyagc8TOy9xxMDsHe3atzfkyEu3QnKw.png?1681499551)

  

E. Click on **Save**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770952/original/JOROtyvxFT7kuhgJS6UKxsSCMfE6_5IS8A.png?1681499569)

  

  

  

## To add the CNAME record

  

  

Click on **Add** to add a new record.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

A. Type: Select **CNAME** from the Type menu options.

  

B. Host: Different for everyone

  

Head back to HighLevel to copy the host name, it's a bit tricky but the key here is to copy everything from the beginning until the subdomain part, **DO NOT copy the main Domain**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771034/original/ey4vFuccg-PcVOVNEqKhNZR24VOtPxjuCA.png?1681499620)

  

Depending on the subdomain you are trying to set up, if you are trying to set up

-   **lc**.companyname.com - The host name will be **email.****lc**
-   [replies.companyname.com](https://replies.companyname.com/) - The host name will be **email.****replies**

If you are setting up a **main** domain like companyname.com, the host name will be **email**

  

  

  

C. Points to: Same for everyone

        paste the following data **[mailgun.org](//mailgun.org)**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771083/original/z9S5z7FviH8eq6xc6sXjhiBRLNZCCKQ5LA.png?1681499652)**  

  

D. Click on **Save**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

  

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

  

Now that you have added 5 records, click on **Verify Domain**

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png?1681499820)

  

Click the same button to **Verify Domain** again if some records are still not showing the green checkmark

  

Once you add all the DNS records and verify, you can make sure the [SSL Certificate for Dedicated Sending Domain (LC - Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001227438) is all set.

  

Then we could send a test email to see if everything works! Click here to learn [How to send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

#