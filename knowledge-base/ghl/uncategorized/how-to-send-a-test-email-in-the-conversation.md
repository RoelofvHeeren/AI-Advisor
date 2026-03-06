---
title: "How to send a test email in the Conversation"
url: "https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation"
category: "Uncategorized"
---

# How to send a test email in the Conversation

**TABLE OF CONTENTS**

-   [Creating a test contact](#Creating-a-test-contact)
-   [Sending the test email](#Sending-the-test-email)
-   [Configuring the sender email](#Configuring-the-sender-email)
    -   [If you are using Mailgun](#If-you-are-using-Mailgun)
    -   [If you are using SMTP integration](#If-you-are-using-SMTP-integration)
-   [Troubleshooting email delivery](#Troubleshooting-email-delivery)
-   [If email replies are not coming back](#If-email-replies-are-not-coming-back)

  

  

## **Creating a test contact**

  

-   Click on **Click here to switch** on the top left once you are in the agency view
-   Click the subaccount you want to test in
-   Click on **Contacts**

  

![](https://i.ibb.co/zNV0S4V/2023-1-24-11-50-37.gif)

  

  

Click on **Add Contact**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821714/original/3CoAFhjjyHDlYZmB19SN0T_TqAK1e37VWA.jpg?1721834838)

  

  
  

**Fill out the First name and email and click Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821818/original/I96Iz9MiMb85t_HZYfAbvYtTFXY5aptZcw.jpg?1721834890)

  

## **Sending the test email**

  

  

It should automatically redirect you to the conversation page, click **Send Email** below

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821920/original/mO1ZsfTekzCkLub_fVoTZq3HSilwgaU1Rg.jpg?1721834939)

  

## **Configuring the sender's email**

  

  

The highlighted part is where we can configure the sender's email address. [Check here to see how to configure the sender email address when sending bulk emails.](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000979925-masking-campaign-emails-from-name-address) By default, it will show the user logged in as the sender's email address.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822266/original/ooUl9-PlqUjmPxfLAtVJujfPR5tACZMRDg.jpg?1721835184)

  

### **If you are using Mailgun**

  

  

If I mask the sender email like testing@gmail.com, the reply-to address will show as testing@replies.subdomain.com, which is the Mailgun subdomain we set up for the sub-account in agency Settings-> Email Services > Location Settings. Replies will still appear correctly in the HighLevel sub-account's Conversation tab. 

  

e.g. my Mailgun subdomain is [subdomain.gohighlevel.com](//subdomain.gohighlevel.com) so the reply-to email address will show kate@subdomain.gohighlevel.com

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822829/original/sIHHts5GEbn1g0b-ruhREN619Is0x-QMkA.jpg?1721835508)  

  

  

We can set [testing@subdomain.com](mailto:testing@subdomain.com) as the sender's email address to enhance email deliverability as the reply-to address domain will match the sender's email address.

  

You can also set up [cold inbound email](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup) to capture any emails going to emails ending with @replies.subdomain.com

  

  

  

### [](https://app.gohighlevel.com/v2/location/RNTEDRA9ap9xSh2MyTYS/settings/smtp_service)**If you are using SMTP integration:**

  

Go to Sub-account **Settings** -> Email Services

  

Copy the highlighted email that's integrated as the SMTP and use that as the sender email in the conversation tab

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029823782/original/2kuSUuG1Pr11ztYDcKVm960c_D1TdBV7PQ.jpg?1721836209)

  

  

Depending on what is the SMTP integration you are using, you could set up an alias/verify sender to send from other emails 

\- [Setting up an alias for Google SMTP](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)

\- [Setting up an alias for Zoho SMTP](https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider)

\- [Verifying sender email with Sendgrid](https://docs.sendgrid.com/ui/sending-email/senders)

  

  

  

## **Troubleshooting email delivery:**

  

Once you send the email and if you are not able to receive it, be sure to check the spam folder.

  

For the error that we display in the Conversation view, we will fetch the error we got from the Mailgun API/ SMTP server and display it. If you click on the error icon to view the full error message, it should provide detail on why the email is not able to send.

  

If the error is not helpful, please open a support ticket with the SMTP provider so they can provide the delivery status on that email.

  

If you are using Mailgun, you can [check the Mailgun logs](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun) and check out our [email not sending help doc](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000981687-emails-not-sending).

  

  

  

## **If email replies are not coming back**

  

Once you receive the email, you can reply to the email and see if the reply will show up in the Conversation tab. If not, please check what you could do [When email replies are not coming back to the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-coming-back-to-the-conversation).

  

* * *