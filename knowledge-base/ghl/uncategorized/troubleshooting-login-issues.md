---
title: "Troubleshooting Login issues"
url: "https://help.gohighlevel.com/support/solutions/articles/48001207047-troubleshooting-login-issues"
category: "Uncategorized"
---

# Troubleshooting Login issues

#### 

If you're an agency struggling to receive the two-factor authentication (2fa) code, try logging in using your Google Account at [app.gohighlevel.com](//app.gohighlevel.com).  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293030587/original/QzSePcEb_f0it3b2HgnTqQYoNk3wW5gh0Q.gif?1681742080)

####   

**This Article Covers:**

  

-   [Error: Unable to log you in at this time](#Error%3A-Unable-to-log-you-in-at-this-time)
-   [Error: Not able to send the security code at this time](#Error%3A-Not-able-to-send-the-security-code-at-this-time)
-   [Error: User does not exist in this Agency](#Error%3A-User-does-not-exist-in-this-Agency)
-   [No Error but the page just doesn't redirect and got stuck](#No-Error-but-the-page-just-doesn't-redirect-and-got-stuck)
-   [Error: Web server is returning an Unknown Error](#Error%3A-Web-server-is-returning-an-Unknown-Error)
    -   [How to remove Site Data on Chrome](#How-to-remove-Site-Data-on-Chrome:1.-For-chrome,-Right-Click-on-the-browser-and-inspect-the-page's-elements.%C2%A0)
    -   [How to remove Site Data on Safari](#How-to-remove-Site-Data-on-Safari%3A)

* * *

## **Error: Unable to log you in at this time**

  

1\. Ask them which Internet service provider (ISP) they are using

  

If they have **Verizon Fios**, they may disable protection here:

[](https://www.verizon.com/.../essen.../home-network-protection)[](https://www.verizon.com/support/residential/internet/essentials/home-network-protection)[https://www.verizon.com/support/residential/internet/essentials/home-network-protection](https://www.verizon.com/support/residential/internet/essentials/home-network-protection)

  

If they have **CenturyLink**, they may disable secure wifi here: 

[https://kb.plu.edu/page.php?id=109248](https://kb.plu.edu/page.php?id=109248)

  

If they have had **Survey Junkie** before, they may uninstall to see if it will work as it will update all SSL certificates on your website.

  

If they have **McAfee** installed, they may turn off web protection here

[https://www.help.k12.com/s/article/McAfee-Web-Protection-Enable-Disable](https://www.help.k12.com/s/article/McAfee-Web-Protection-Enable-Disable)

  

If they have **xfinity**, please check

[https://www.xfinity.com/support/articles/online-security-with-xfi-faqs](https://www.xfinity.com/support/articles/online-security-with-xfi-faqs)

  

If they are using **Spectrum**, they may turn off Security Shield here:

[https://www.spectrum.net/support/internet/security-shield](https://www.spectrum.net/support/internet/security-shield)

  

We will be working on a long-term solution in the meantime. As long as the user is browsing secure websites on their device, turning off the protection feature should not bring any risks.

  

  

2\. If they are not using the ISP mentioned above:

  

When they are trying to log in, Inspect the page, Open the network tab and create a loom with the request being sent. Show the response for the API.

  

You can give us a call at [(888) 732-4197](tel:+18887324197) to open a ticket and send us a Loom video like the one below for us to take a look further.

  

  

* * *

## **Error: Not able to send the security code at this time**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48208336001/original/hd-njyZxcCzRRNN6-YVAEahHCLRPy52sUQ.png?1648508301)

  
  
Please reach out to the agency admin to add a **user phone number** for the user who tries to log in so they can send the 2FA code to the user's phone number. If you are the only agency admin, please reach out to us at [(888) 732-4197](tel:+18887324197) so we can update the user phone number for you.

  

  

To get email verification to work, please watch this video to check further:  
  

  

  

  

Article mentioned:  
[https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun)

  

  

1\. What is the user login email?

  

2\. Did the user check their spam folder for an email titled "Login Security Code"? 

  

3\. What is the company relationship number? (found in agency settings->company tab)

[https://app.gohighlevel.com/settings/company](https://app.gohighlevel.com/settings/company)

  

4\. Are you using your own SMTP or Mailgun? (check agency settings)

* * *

## **Error: User does not exist in this Agency**

If this error is showing up when the user is trying to log in through a whitelabel domain, that means the user is not associated with that agency within the whitelabel domain.

  

* * *

## **No Error but the page just doesn't redirect and got stuck**

  
1\. Make sure cookies are allowed for [app.gohighlevel.com](//app.gohighlevel.com)

  

2\. If it's still stuck, 

check If they have software (e.g. **NordVPN**) that might control browsing activity/web protection before, please **turn off / uninstall** to see if it will work as it will update all SSL certificates on your website.

  

Click on the lock icon on the top left > Click on **Connection is secure** to expand more information

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923808/original/-cxhH_s5-wD5i533clkajJDXXS-nWRfEJQ.png?1649784344)

  

  

Click on **Certificate is valid**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923894/original/Ie7DvglOBiQVnPX-4v84FPweKZMWaG33Rw.png?1649784361)

  

  

It might show **Issued by: NordVPN** here which means that it will block the page from loading

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243261263/original/iaR5OJAROGTw8h558Xa35v-A-F_51NqqKA.png?1659647486)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214924256/original/KrSfiqBXakxpAqeRFjXGNwbDJGBtmp5Kyg.png?1649784415)

  

  

* * *

## **Error: Web server is returning an Unknown Error**

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406517/original/CPkUVWpbRCE5CQKFm4BCm9BLdKkw0VV7UQ.png?1709769021)

  

To remove this error you will have to clear the site data.

###   
How to remove Site Data on Chrome:  
  
1\. For chrome, Right-Click on the browser and inspect the page's elements.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406701/original/AV0Fvm6rnoOYjuzJ5KTu0PmBf9A60QhTaA.png?1709769573) 

2\. Then click on Applications from the top - menu and access the Storage option on the left-hand navigation menu  
3\. You should then be able to see the "Clear Site Data" option on the middle of the screen:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406765/original/dVbD6_BoWBFbPRBvNHEZb8UEqddug13kOA.png?1709769796)

4\. Refresh the browser and attempt again. If still unable to login, please contact Support: [https://help.gohighlevel.com/support/solutions/articles/155000000969-live-24-7-highlevel-support-](https://help.gohighlevel.com/support/solutions/articles/155000000969-live-24-7-highlevel-support-)  
  

### How to remove Site Data on Safari:

   
1\. For Safari, you must first enable Developer tools by accessing the browsers settings, by clicking Safari and then settings  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407042/original/1OSg0GE1md89bgWQXUwH_xZ_PDlZ219rGA.png?1709770518)

  

2\. Then you have to click on Advanced from the top menu and turn on the box for "show features for web developers" 

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407093/original/HXh6bsHxuIta5cRAhMo2M8bK-D2oOsqkhA.png?1709770665)

  
3\. Once the features for web developers are enabled, right-click on the page and inspect the page's elements.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407103/original/U7On6mcbyLggi0jhoGTdO0wNAPQTUq-AOg.png?1709770736)  
4\. From this window, you must first select Storage at the top of the menu, then find the site listed under the Local Storage, and then select the trash icon to clear the clear it out.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407114/original/0vJPTlj6kLu2t92xPgEfgThlhYixP8FEqg.png?1709770754)  
5\. Refresh the browser and attempt again. If still unable to login, please contact Support: [https://help.gohighlevel.com/support/solutions/articles/155000000969-live-24-7-highlevel-support-](https://help.gohighlevel.com/support/solutions/articles/155000000969-live-24-7-highlevel-support-)