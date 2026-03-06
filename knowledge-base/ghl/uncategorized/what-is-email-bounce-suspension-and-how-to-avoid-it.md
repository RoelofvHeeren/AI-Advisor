---
title: "What is email Bounce Suspension, and How to avoid it"
url: "https://help.gohighlevel.com/support/solutions/articles/48001214786-what-is-email-bounce-suspension-and-how-to-avoid-it"
category: "Uncategorized"
---

# What is email Bounce Suspension, and How to avoid it

Email sending will be suspended for having a high hard bounce rate. Email providers and anti-spam networks monitor bounce rates for every email you send and use that information to suspend email sending for your accounts with high bounce rates. High bounce rates will impact your email deliverability.

  
In this article, you will learn about

1.  Bounce
    
2.  Causes an account suspension
    
3.  Fix the hard bounce and activate the account
    

* * *

**TABLE OF CONTENTS**

-   [What are bounces?](#What-are-bounces?)
-   [What causes an account suspension](#What-causes-an-account-suspension)
    
    -   [How long will email sending be blocked?](#How-long-will-email-sending-be-blocked?)
    
-   [What should you do now?](#What-should-you-do-now?)
-   [How to prevent future account suspension:](#How-to-prevent-future-account-suspension%3A)
    -   [Email Best Practices:](#Email-Best-Practices%3A-%C2%A0)  
        -   [1\. Email Verification](#1.-Email-Verification)
        -   [3. Configure the sender email that matches the dedicated domain you set up](#3.%C2%A0Configure-the-sender-email-that-matches-the-dedicated-domain-you-set-up)
        -   [4\. Schedule the emails in little batches](#4.-Schedule-the-emails-in-little-batches)
        -   [5\. Set up double opt-in](#5.-Set-up-double-opt-in)
        -   [6\. Set up Unsubscribe Links](#6.-Set-up%C2%A0Unsubscribe-Links)

  

* * *

# **What are bounces?**

A bounce occurs when an email is not delivered or rejected by the recipient's email provider.

  

There are two types of bounces.

1.  **A hard** bounce occurs when an email address does not exist.
2.  **A soft** bounce is a temporary failure, and some more reasons, like the recipient servers being down or the mailbox being full.

  

  

# **What causes an account suspension**

We have thresholds in place to monitor bounce rates, and if a Bounce rate exceeds the industry threshold (below 5%), we temporarily suspend the email sending for the account. 

  

A high bounce rate indicates that the account is sending emails to contacts that are invalid emails. This may also mean that external spam filters are refusing to deliver emails due to bad sending behavior in the past. A good bounce rate is typically in the range of 0 - 3%.

  

During the email-sending suspension, only email-sending will be disabled. All other features will be working.

  

### **How long will email sending be blocked?**

A temporary block of 12 hours will be enforced. Users can quickly resume sending by enabling email verification. If this happens for the third time in seven days, email sending will be blocked permanently until the **email verification feature is enabled.**

* * *

# **Our Bounce Block System**

<table border="1" cellpadding="0" cellspacing="0" data-sheets-baot="1" data-sheets-root="1" dir="ltr" style="table-layout: fixed; font-size: 10pt; font-family: Arial; width: 0px;"><colgroup><col width="177"><col width="195"><col width="160"><col width="207"></colgroup><tbody><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-weight: bold; text-align: center;">Bounce Block Rate</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: -apple-system; font-weight: bold; overflow-wrap: break-word; text-align: center;">Action</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: -apple-system; font-weight: bold; text-align: center;">Duration</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: bottom; font-family: -apple-system; font-weight: bold; text-align: center;">Block Level</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system; font-weight: bold;">3%</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Warning Email Sent</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Immediate notification</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Pre-Block Warning</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system; font-weight: bold;">5%</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system;">Email sending suspended</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system;">12 hours</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system; font-weight: bold;">1st block</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system; font-weight: bold;">3% (after 1st block)</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Critical Warning Email Sent</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Immediate notification</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Pre-2nd Block Warning</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system; font-weight: bold;">5% (after 1st block)</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system;">Email sending suspended</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218);">12 hours</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(248, 215, 218); font-family: -apple-system; font-weight: bold;">2nd block</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system; font-weight: bold;">3% (after 2nd block)</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Final Warning Email Sent</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Immediate notification</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(255, 243, 205); font-family: -apple-system;">Pre-3rd Block Final Warning</td></tr><tr style="height: 21px;"><td style="border-top-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(209, 236, 241); font-family: -apple-system; font-weight: bold;">5% (after 2nd block)</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(209, 236, 241); font-family: -apple-system; font-weight: bold;">PERMANENT SUSPENSION</td><td style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(209, 236, 241); font-family: -apple-system;">Permanent</td><td dir="ltr" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); overflow: hidden; padding: 2px 3px; vertical-align: top; background-color: rgb(209, 236, 241); font-family: -apple-system; font-weight: bold;">3rd block - FINAL</td></tr></tbody></table>

  
  
If a **permanent bounce block** is applied, you will see the following error:

> **“Email sending is blocked due to a high bounce rate.  
>  Unblock email sending by enabling the Email Verification Service.”**

**Recommended Practice:**  
Enable the **Email Verification Service** to reduce bounce rates and lift the block.  
If the issue persists, you must contact **GHL Support** for further assistance.

#   

### **How to Request a Permanent Email Unblock**

Permanent unblocking **cannot be automated**. It requires a **manual review** by the **GHL Support team**.

###   
Steps to Raise a Support Request

1.  **Contact GHL Support**
    
2.  In your request, clearly share the following details:
    
    -   **Subaccount ID**
        
    -   **Screenshot or confirmation of the error message**, for example:
        
        > _“Email sending is blocked due to a high number of spam blocks from email providers.”_
        
3.  **Submit the ticket** for review.
    

###   
**What Happens Next**

The GHL Support team will review your subaccount, including:

-   Email sending history
    
-   Bounce rate and spam complaint rate
    
-   List acquisition methods and sending practices  
    

### **Review Outcome**

Based on the findings:

-   ✅ **Email sending may be unblocked**, or
    
-   ❌ **Additional remediation steps** may be required before reinstatement
    

> **Note:** Approval is **not guaranteed** and depends entirely on compliance with email best practices.

  
  
**What should you do now?**

When a sub-account/ location is suspended, you will receive an email to the sub-account/ location accounts email address to do the below step:

  

1.  Cleanse your contacts with [Email Verification Service](https://help.gohighlevel.com/support/solutions/articles/48001235221-how-to-enable-and-rebill-lc-email-validation) to eliminate addresses that are not verifiable/non-existent and ultimately bounce.
2.  If the sub-account is a client, please discuss this with your client and advise them not to send bulk communication or cold email campaigns until this issue is resolved.

  

Not following the recommended remediation measures may result in restrictions on email capabilities for this location. Please note if your Complaint, Unsubscribe, and/or Hard Bounce rates continue to deteriorate this sub-account may get blocked.

  

* * *

# **How to prevent future account suspension:**

The location should be able to send emails 24 hours after you receive the non-compliant email notification. 

Right now, we don't have any way to easily locate the remaining people that didn’t get the email before it was blocked. 

The only workaround would be to export the email statistics and then reupload to tag the leads, then use smart list to filter to the leads without that tag to re-send again: 

Learn more about [Email Statistics](https://help.gohighlevel.com/en/support/solutions/articles/48001215386)

  

  

If you don't want to receive these emails, please change the user role to a **user** instead of an **agency admin**. 

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064154898/original/OWRaO0vse6971fTV8LMg_NF0E-H1OsaMkg.png?1770198230)](https://i.ibb.co/TckmLt0/2023-2-2-11-38-11.gif)

 

* * *

## **Email B****est Practices:**  

### **1\. Email Verification**

Since we are not showing any reporting on which contacts are bounced. If those contacts were uploaded from previous options, we highly recommend **verifying all existing contacts** before sending them.  

  

Once you are in the agency view > Sub-accounts > Click on the sub-account name > Scroll down to **Enable Re-verification for 90 days.** 

The bounce emails will be marked as invalid emails, so you don't need to tag them as invalid emails will not be picked in the campaign/bulk/workflow.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064154899/original/2-2zggGwLsxYbSNzY58uI0cR0Xl92ymZFg.png?1770198231)](https://i.ibb.co/yqmqcQH/2023-2-2-9-36-15.gif)

 **2\. Set up your dedicated domain**

[How to Set Up a Dedicated Sending Domain (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)

###   
**3.** **Configure the sender email that matches the dedicated domain you set up**

[Masking Sender Emails - From Name & Address](https://help.gohighlevel.com/en/support/solutions/articles/48000979925)

[Email Authentication - DMARC](https://help.gohighlevel.com/en/support/solutions/articles/48001224630)

  

So if you set up replies.yourcompany.com, you can send from sender\_name@company.com  

###   
**4\. Schedule the emails in little batches**

[Bulk Actions For Contacts & SmartLists](https://help.gohighlevel.com/en/support/solutions/articles/48001167703)

###   
**5\. Set up** **double opt-in**

To set up double opt-in for future setup, please include a checkbox to ensure the lead gives consent when filling out the form if that's where the leads opt-in:   

You can set up a checkbox like this:

By providing your name and contact information, you are expressly consenting to receive communications from COMPANY\_NAME or one of their licensed agents, which may include phone calls (including to any wireless number that you provide), including automatic telephone dialing systems or by artificial/pre-recorded messages text message and/or emails for marketing insurance products and services including health, medicare, and life insurance plans. By providing your information, you understand that your consent is not a condition of the purchase of any product or services, and carrier messaging and data rates may apply. You may revoke this consent at any time by calling us at 1-800-000-000 or emailing us at EMAIL\_HERE to be placed on our do-not-call list.    

   
**6\. Set up** **Unsubscribe Links**

        [How to Set Up Unsubscribe Links for LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001225534)

* * *