---
title: "Sending Priority - From Name & Address"
url: "https://help.gohighlevel.com/support/solutions/articles/48000979925-sending-priority-from-name-address"
category: "Uncategorized"
---

# Sending Priority - From Name & Address

Note: Now that Workflows are live in all accounts, you can do everything that Triggers and Campaigns do (and more!), all in one builder! [Click to learn more about Workflows](https://help.gohighlevel.com/support/solutions/articles/48001179678-workflow-builder-overview).

**Covered in this article:**

  

[**Which sender email should the leads be getting the emails from?**](#Which-configured-sender-email-will-the-leads-be-getting-the-emails-from?)

**[How to check if the contacts are assigned or unassigned](#How-to-check-if-the-contacts-are-assigned-or-unassigned)**

[**Places you can configure the sender email - Manual email**](#Places-you-can-configure-the-sender-email---Manual-email)

-   [Conversation tab](#Conversation-tab)

[**Places you can configure the sender email - Automated emai**l](#Places-you-can-configure-the-sender-email---Automated-email)

-   [Email template](#Email-template)
-   [Bulk action - Send Email](#Bulk-action---Send-Email)
-   [Workflow Send Email Action](#Workflow-Send-Email-Action)
-   [Campaign configuration](#Campaign-configuration)
-   [Triggers - Send email action](#Triggers---Send-email-action)

  

  

## **Which sender email should the leads be getting the emails from?**

  

<table data-identifyelement="605" style="width: 100%;"><tbody data-identifyelement="606"><tr data-identifyelement="607"><td data-identifyelement="608" dir="ltr" style="width: 21.9359%;"><br data-identifyelement="609"></td><td data-identifyelement="610" dir="ltr" style="width: 33.7744%;">Cases</td><td data-identifyelement="611" dir="ltr" style="width: 24.7911%;">Unassigned Contact</td><td data-identifyelement="612" dir="ltr" style="width: 19.4986%;">Assigned Contact</td></tr><tr data-identifyelement="613"><td data-identifyelement="614" style="width: 21.9359%;">Manual Emails</td><td data-identifyelement="616" dir="ltr" style="width: 33.7744%;">Logged in user email</td><td data-identifyelement="617" dir="ltr" style="width: 24.7911%; background-color: rgb(0, 0, 0);"><span data-identifyelement="618" style="color: rgb(255, 255, 255);">1st priority</span></td><td data-identifyelement="619" dir="ltr" style="width: 19.4986%; background-color: rgb(0, 0, 0);"><span data-identifyelement="620" style="color: rgb(255, 255, 255);">1st priority</span></td></tr><tr data-identifyelement="621"><td data-identifyelement="622" style="width: 21.9359%;"><br data-identifyelement="623"></td><td data-identifyelement="624" dir="ltr" style="width: 33.7744%;">Location Email</td><td data-identifyelement="625" style="width: 24.7911%;"><span data-identifyelement="626" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td><td data-identifyelement="628" style="width: 19.4986%;"><span data-identifyelement="629" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td></tr><tr data-identifyelement="631"><td data-identifyelement="632" style="width: 21.9359%;"><br data-identifyelement="633"></td><td data-identifyelement="634" dir="ltr" style="width: 33.7744%;">Assigned User Email</td><td data-identifyelement="635" style="width: 24.7911%;"><span data-identifyelement="636" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td><td data-identifyelement="638" style="width: 19.4986%;"><span data-identifyelement="639" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td></tr><tr data-identifyelement="641"><td data-identifyelement="642" style="width: 21.9359%;"><br data-identifyelement="643"></td><td data-identifyelement="644" dir="ltr" style="width: 33.7744%;">Agency Email</td><td data-identifyelement="645" style="width: 24.7911%;"><span data-identifyelement="646" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td><td data-identifyelement="648" style="width: 19.4986%;"><span data-identifyelement="649" dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">N/A</span></td></tr><tr data-identifyelement="651"><td data-identifyelement="652" dir="ltr" style="width: 21.9359%;">Automated Emails</td><td data-identifyelement="654" dir="ltr" style="width: 33.7744%;">Campaign/workflow settings</td><td class="tdfocus-1666120871901" data-identifyelement="655" dir="ltr" style="width: 24.7911%; background-color: rgb(0, 0, 0);"><span data-identifyelement="656" style="color: rgb(255, 255, 255);">1st priority</span></td><td data-identifyelement="658" dir="ltr" style="width: 19.4986%; background-color: rgb(0, 0, 0);"><span data-identifyelement="659" style="color: rgb(255, 255, 255);">1st priority</span></td></tr><tr data-identifyelement="661"><td data-identifyelement="662" style="width: 21.9359%;"><br data-identifyelement="663"></td><td data-identifyelement="664" dir="ltr" style="width: 33.7744%;">Assigned User Email</td><td data-identifyelement="666" dir="ltr" style="width: 24.7911%;">N/A</td><td data-identifyelement="668" dir="ltr" style="width: 19.4986%; background-color: rgb(124, 112, 107);"><span data-identifyelement="669" style="color: rgb(255, 255, 255);">2nd priority</span></td></tr><tr data-identifyelement="671"><td data-identifyelement="672" style="width: 21.9359%;"><br data-identifyelement="673"></td><td data-identifyelement="674" dir="ltr" style="width: 33.7744%;">Location Email</td><td data-identifyelement="676" dir="ltr" style="width: 24.7911%; background-color: rgb(124, 112, 107);"><span data-identifyelement="677" style="color: rgb(255, 255, 255);">2nd priority</span></td><td data-identifyelement="678" dir="ltr" style="width: 19.4986%; background-color: rgb(209, 213, 216);">3rd priority</td></tr><tr data-identifyelement="680"><td data-identifyelement="681" style="width: 21.9359%;"><br data-identifyelement="682"></td><td data-identifyelement="683" dir="ltr" style="width: 33.7744%;">Agency Email</td><td data-identifyelement="685" dir="ltr" style="width: 24.7911%; background-color: rgb(209, 213, 216);">3rd priority</td><td data-identifyelement="686" dir="ltr" style="width: 19.4986%; background-color: rgb(239, 239, 239);">4th priority</td></tr><tr data-identifyelement="687"><td data-identifyelement="688" dir="ltr" style="width: 21.9359%;">Review Request Emails</td><td colspan="3" data-identifyelement="689" dir="ltr" style="width: 77.9944%;">We will always use the <strong data-identifyelement="690">Logged in user email</strong> as the sender email</td></tr><tr data-identifyelement="692"><td data-identifyelement="693" dir="ltr" style="width: 21.9359%;">Appointment request emails<br>(calendar settings-&gt;3. Confirmation)</td><td colspan="3" data-identifyelement="695" dir="ltr" style="width: 81.6156%;">We will use <a data-fr-linked="true" data-identifyelement="696" href="mailto:do-not-reply@replies.domain.com">do-not-reply@replies.domain.com</a> depending on the Mailgun subdomain you set up for the location, or the SMTP integrated email</td></tr></tbody></table>

  

_Not sure how to connect your SMTP pro_vider? [Follow these steps to set it up.](https://help.gohighlevel.com/en/support/solutions/articles/48001059689)

  

  

If you are using Mailgun/LC Email, we will use the Business email here if the lead is not assigned:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230234/original/LukUd53t-tjwMn_dHkUbmkoiyMFs0MVgSg.png?1758468487)

* * *

## **How to check if the contacts are assigned or unassigned**

Search for the contact in the Smart Lists tab

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230430/original/xV9ahg5895S7bEOtO_x3vpeQJchyHcPkRw.png?1758468592)

  

  

Search Conversations -> Click on the icon on the right to view the Contact Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230574/original/xeWmQjJoK1c1CDvcp3ouxStrSEb9_oFCPw.png?1758469037)

  

  

Check who is assigned to the contact here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230590/original/WHLGxGLu_lgUbp8VMrPX7Qdu0N2sZvL4ng.png?1758469109)

* * *

## **Places you can configure the sender's email - Manual email**

## **Conversation tab**

The From email will be the user logged in email by default:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230663/original/iOGx-LWFQvZQbd1jviS60WE9MGKlCVQPew.png?1758469162)

  

However, if you have 2-way email sync set up, the email will show the integrated email:[](https://help.gohighlevel.com/en/support/solutions/articles/48001235216)

[How to Set Up Two Way Email Sync for Gmail](https://help.gohighlevel.com/en/support/solutions/articles/48001235216)[](https://help.gohighlevel.com/en/support/solutions/articles/48001229663)

[Two Way Email Sync for Outlook](https://help.gohighlevel.com/en/support/solutions/articles/48001229663)

* * *

## **Places you can configure the sender's email - Automated email**

## **Email template**

Click on **Marketing** > **Emails** > **Templates** > **+New**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230722/original/mhcvjez4vv9dDOSLWqm1Mze-o6roXtuMnA.png?1758469252)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230755/original/WfELc367egeqKtFKSioPk9xJheyU7_k2cw.png?1758469342)

* * *

### **Bulk action - Send Email**

Click Contacts ->Smart Lists -> Select Contacts -> Click Send Email![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230958/original/ChQW9qc8NCaqCoYr44PpauJrgatMH9al2Q.png?1758469438)

  

Add the **From Name** and **From Email**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054230965/original/xc9hiF8uAXelg45ZHErj1zHTKZwQtNzbZg.png?1758469471)

* * *

### **Workflow settings**

Click Automation -> Workflows -> Create Workflow  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231022/original/nIi7qExg8bVqI6mUWWXejs12Dp5xBLFmGQ.png?1758469549)

  

Select **Start from scratch** and click **Create new workflow**:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231079/original/yf8J13CKvWamnZ9W9o7HBUKnHzBk-fXmEA.png?1758469619)

  

Click Settings -> Configure Sender Address![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231085/original/Et08a1v65mJKmkImQ3wZ9dD1byc63SKmcQ.png?1758469667)

* * *

## **Workflow Send Email Action**

Click on the **\+ button** > Select the "**Send Email**" option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231139/original/wV8WhjpkvQj_C9WDKCRPclPpO91043Halg.png?1758469707)

  

Enter the **From Name** and **From Email**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054231144/original/PaXSJLcjoxA2QdrjoDIiKown142mVkbcYQ.png?1758469725)

* * *

## **FAQs**

### **1\. Why is the From email for outlook always look long and strange?**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301042/original/spc9PucOJ-wT0rT3Sf4IBvjR6JcaJn-1QQ.png?1666018222)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48257301207/original/D6asla-m-OdXThoGwKQTtT1P_GnYyRIpsg.png?1666018251)

  

This is an issue with how Outlook displays the sender's information. If you send this email to gmail.com, it will show the sender's information correctly in Gsuite.  

Learn more about how to [Hide "sent by" information in Outlook](https://stackoverflow.com/questions/35148098/hide-sent-by-information-in-outlook/35149628)

### **2\. How to remove send via information in Gmail?**

  

Make sure to use the same sender email domain that matches the Mailgun domain you set up. Learn more about [the Extra info next to sender’s name](https://support.google.com/mail/answer/1311182)

* * *

  

## **Related Articles**

  

-   [Setting Up SMTP Providers](https://help.gohighlevel.com/en/support/solutions/articles/48001059689)  
      
    
-    [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/en/support/solutions/articles/155000001021)  
      
    
-   [How to Set Up Two Way Email Sync for Gmail](https://help.gohighlevel.com/en/support/solutions/articles/48001235216)  
      
    
-   [How to Set Up Two Way Email Sync for Outlook](https://help.gohighlevel.com/en/support/solutions/articles/48001229663)  
      
    
-   [Using Custom Email Domains with Mailgun](https://help.gohighlevel.com/en/support/solutions/articles/155000002561)  
      
    
-   [Limitation of using SMTP when emails are not sending](https://help.gohighlevel.com/en/support/solutions/articles/48001203144)