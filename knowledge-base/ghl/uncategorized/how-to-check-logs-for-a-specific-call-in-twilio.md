---
title: "How to check logs for a specific Call in Twilio"
url: "https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio"
category: "Uncategorized"
---

# How to check logs for a specific Call in Twilio

Twilio offers several tools for investigating the interaction between Twilio and your application. If a Call fails to go through, is delayed, or otherwise behaves unexpectedly, these tools should be your first stops for debugging.

  

* * *

## How to navigate to the Call Logs and how to use them?

  
You can view the error logs for your Twilio account by going to the Twilio Console. You can use this log to get an idea of which Twilio resources may be affected and who was responsible for them.

  
  
1\. Log on to Twilio [https://console.twilio.com/](https://console.twilio.com/)[](https://console.twilio.com/)[](https://console.twilio.com/)[](https://console.twilio.com/)

  

  

2\. Go to the top right -> Click **Account** -> Click **Subaccounts**  
  
  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331048/original/tKKQGCoc0KwVVECepLM-u6_le6WDb30LrA.jpeg?1673655495)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954716/original/xU1ASMn2bOtT6Y1BdbfgUAYu3F-UlqKoNQ.jpeg?1643126214)

  

  

3\. If there are too many subaccounts inside Twilio, you can go back to HL and copy the Account SIN for that location to search in Twilio:  
  
  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331050/original/F1w4q9sNHfd2rFix5SIbGIWkFrJG7CYyhA.png?1673655496)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243463531/original/HGHMrQLG8UVwaBtM03YuuaWZaffth7TEfg.png?1659711416)

  

  

4\. Now go back to Twilio with the copied Account SID

Search based on the Twilio Subaccount SID in agency level settings -> Twilio  
Paste the Account SID here and click on it:  
  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331045/original/3VBRH3JZhS8yXCHdp4JaSshLMhTpXUM8zA.png?1673655495)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954706/original/TaZM1HBRp-VAFwRC5VUjjoQfYNndbVXXeQ.png?1643126214)

  

  

  

  

5\. Click into the subaccount so you will see there's an orange text on the top left:

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48206739357/original/89Q8Rpsbb4Jw6U_0n-R2myOb5EKTcWU0Ew.png?1648158152)**

  

  

  

Once you are in the subaccount inside Twilio:

  

  

### 6\. First, let's make sure the Twilio number is voice-capable:

   

    [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056571/original/XA1mgNJH9hU_ISW_9uZwQKMxlemdO-pIqw.jpeg?1680624454)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954714/original/upUE1TjZVCDpol7AORlv2jGlHDK5qCPJRg.jpeg?1643126214)    

  

###     Click on **Phone numbers**:

  

           [  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291057314/original/kvs-zd_5XOXt5ABtGuKQ5uc94zyex7jVDg.jpeg?1680624625)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353637/original/UuPrOZYjpEbL77yl8Mf1o-wEwddnsT-x9g.png?1676661628)

  

  

###     Check if it is showing the phone icon for the Twilio number:

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056995/original/0BbgQN6wxDQGajmzMTWpzOo6u98R93KTXw.png?1680624553)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353849/original/XX7YyfGy4J3Gb7PbKgDidBzLeG-9eTNk-w.png?1676661731)

  

  

7\. Head to the Left panel, Click **Monitor** > **Logs** > **Calls**

  

Put the contact's phone number (remove all phone format) in the FROM / TO field:

  

**FROM** field: Plug Contact's phone in the to field to check for incoming calls

Paste the contact number who called your twilio number in the From field

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208691/original/GBzcBgBGw-9kH79nUBfnalpNgvMiuMWqVg.png?1677088149)

We can refer to the first record as that's when we route the call to the forwarding number

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283209009/original/3iL12ECP4ej4b3unl9kF6xEOp6ZdMa70Fg.png?1677088204)

  

  

  

TO field: Plug the Contact's phone in the TO field to check for outbound calls

  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208577/original/otx5gV4kidnMdARoACo39JxcwbD_IhKTxw.png?1677088138)

  

  

  

8\. From there, look for the Call where the problem happened. Click the hyperlinked dates to go deeper into the details for each call.

  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331233/original/xh0Wss_7g38SY0XN-_ylhUwS-046Btwueg.png?1673655790)

  

  
  
8\. Grab this Call SID and [Create a support ticket with Twilio support](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support) to learn further  
  
  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331221/original/U9T9uUAhi3o8Dudn_ZMBi5P_OoWIdxPh3w.png?1673655762)