---
title: "How to fix links in the email that do not open?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001151622-how-to-fix-links-in-the-email-that-do-not-open-"
category: "Uncategorized"
---

# How to fix links in the email that do not open?

When we open the links sent from HighLevel, it's going to email.mg.yourdomain.com, which is the Mailgun subdomain you set up for the location [here](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892). It is because we need to change the links in the email for tracking statistics.

  

The Cname record you added when you set up in the domain provider is essential for Mailgun to track the open and click tracking, and unsubscribed.

  

The record for [email.mg.yourdomain.com](//email.mg.yourdomain.com) should be pointing to Mailgun.org, that's how they are able to fetch data and show the email stats.

  

If you are seeing this error when clicking the link: This site can't be reached /  says [email.mg.yourdomain.com](//email.mg.yourdomain.com) refused to connect when you have your own Mailgun domain/subdomain set up

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195453693/original/oBuzYgtIiHU_qb8FPQDQgmjvB5mrR1_4cg.png?1646072280)

##   

That means the CNAME record might not be set up properly.

  

  

  

1\. To verify that, copy the **red highlighted** in the image above ---> [**email.mg.yourdomain.com**](//email.mg.yourdomain.com)

  

Depending on the subdomain you set up with Mailgun, 

  

For example:

If you set up **mg.companyname.com**,

You will look up the cname record for email.**[mg.companyname.com](//mg.companyname.com)**

  

If you set up **replies.companyname.com**,

You will look up the cname record for email.**[replies.companyname.com](//replies.companyname.com)**

  

If you set up **support.companyname.com**,

You will look up the cname record for email.**support.companyname.com**

  

  

  

**2\. Go to [MX toolbox](https://mxtoolbox.com/CnameLookup.aspx) or [Whatsmydns](https://www.whatsmydns.net/) to look up the Cname record:**

        **[](https://mxtoolbox.com/CnameLookup.aspx)**

[MX toolbox](https://mxtoolbox.com/CnameLookup.aspx):  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050724642/original/BTn6nQUwsXyVfr5LdrKHoDRoKXvOHBwaQg.png?1595545184)**

****[Whatsmydns](https://www.whatsmydns.net/):****

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004442481/original/AGGXVPiBkACoy2fODeEdIQcQseLuSJDmyA.png?1691095424)**  

  

  

3\. If it says DNS records not found:

  

    a. login to your domain provider 

    b. Go to DNS records and check the CNAME record

  

  

  

4\. If it is already pointing to **mailgun.org:**

  

    a. Go to [Mailgun](https://login.mailgun.com/login/) -> Click the **Sending** tab on the left -> **Domain Settings**

  

    b. **Edit the Tracking Protocol**

  

    c. Send the email test again from HighLevel

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504991/original/fM2lh_VngLqDySJf3Pv2JeBpGz8Bc4IPag.png?1660162191)  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504976/original/J_f2ahU2CatRF9MNJEdOIugKxjpIBfvYYg.png?1660162175)

  

Here's [How to Enable HTTPS Tracking Links](https://help.mailgun.com/hc/en-us/articles/360011566033-How-to-Enable-HTTPS-Tracking-Links)

  

  

  

  

  

  

  

5\. If the info above does not help, please get in touch with the support team of your domain provider for assistance. You can show them we need to add these records here: 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004540974/original/s0puwTTcRlben7UZfFvZrWTBtd9wUhOz9w.png?1691198730)

  

  

6\. If the domain provider verified all DNS records are good to go, please [reach out to HL support](https://help.gohighlevel.com/en/support/solutions/articles/48001204857).

  

  

  

  

  

  

## **Common issues:**

  

  

1\. If The CNAME record includes the root domain, it will not work here:

  

  

If you are using GoDaddy or Namecheap, be sure to omit the root domain from the record so it is **email.mg** only

  

Host name:

  

Depending on the subdomain you are trying to set up, if you are trying to set up

mg.companyname.com The host name will be **email.mg**

replies.companyname.com The host name will be **email.replies**

support.companyname.com The host name will be **email.support**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48201410168/original/ovadh-goMeGpiYqisajhrsT40lnNsl-IPA.png?1647278164)