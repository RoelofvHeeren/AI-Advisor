---
title: "Cold Email Inbound Setup Mailgun"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup-mailgun"
category: "Uncategorized"
---

# Cold Email Inbound Setup Mailgun

## By Default

  

If I mask the sender email like testing@gmail.com, the reply-to address will show as testing@**[replies.subdomain.com](https://replies.subdomain.com/)** and there's no way to change this, replies.subdomain.com is the Mailgun subdomain you set up for the sub-account in agency Settings-> Email Services. **Only when** the contact replies to the email sent from Highlevel, the replies will show up in the Conversation tab.  If the contact initiates an email to testing@**[replies.subdomain.com](https://replies.subdomain.com/), replies won't show up in the Conversation if the domain is set up for more than one sub-account.** 

  

  

  

## Cold Email Inbound Setup

  

## **1\. Set up Mailgun** 

**[](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)**[](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)[Check out how to set up Mailgun](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)[](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)**[](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)**

  

We will set up agency.com / mg.agency.com with Mailgun

  

\- You can use the same Mailgun account for all sub-accounts

E.g. If you have a domain like [agency.com](//agency.com), you can set up a unique subdomain for each sub-account like [subaccountname.agency.com](//locationname.agency.com) so each Sub-Account will have its own Mailgun subdomain set up to capture all email replies.

  

If your clients have their own domain, you can also set up a unique domain/subdomain for them. But if their main domain is already used for another email service, we will need to use a subdomain in this case.

  

That way we will know which accounts to route the email to.

  

  

  

## **2\. Make sure the Mailgun domain is configured for ONE sub-account only**

As long as there is **only ONE sub-account** mapped to that mailgun domain you just set up, it will route all inbound emails to that sub-account.

  

Check Agency View > **Settings** > **Email Services** > **Location Settings**

![](https://i.ibb.co/6JH9FQt/2023-1-24-13-19-46.gif)

  

If you are using the same subdomain/domain for multiple Highlevel sub-accounts, we will not know which sub-account to route the email replies to when the lead is emailing the reply-to email address **directly** instead of replying to the email sent from Highlevel.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283740098/original/Zue4Uf00NfAud08L8JCeWNm0MGIaRlKI1A.png?1677273783)

  

  

If you only configure the domain/subdomain for one sub-account but it's still not working, check if the same domain is configured in the **Domain Services** tab as well

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283740146/original/KAfskERKjY83NkqUwNV9r9VrZyi8dy8mZQ.png?1677273819)

Please reach out to support if you recall that there might be a deleted sub-account with the same Mailgun domain selected.

  

  

## 3\. Test

  

If you set up [domain.com](//domain.com), We can then use testing@domain.com to capture incoming emails. So if the contact initiates the Conversation by sending an email to anything@domain.com, it will show up in the Conversation tab. 

  

If you set up a subdomain like mg.domain.com, We can then use anything@mg.domain.com to capture incoming emails. 

  

  

  

# FAQs

  

## Does cold inbound email work with LC email?

Yes

  

  

##