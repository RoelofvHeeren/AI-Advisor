---
title: "Twilio Error 21610 \"The message from/to pair violates a blacklist rule\" when sending SMS"
url: "https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms"
category: "Uncategorized"
---

# Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS

# **Overview**

When sending SMS/MMS through Twilio (or integrated platforms), you may encounter cases where your message cannot be delivered because the recipient has **opted out** or enabled **Do Not Disturb (DND)**. This is enforced to honor user preferences and maintain compliance with messaging regulations.

* * *

## **Description**

The person you are trying to message has opted out of receiving messages from:

-   Your phone number,
    
-   Your Channels sender, or
    
-   Your Messaging Service.
    

Alternatively, the contact may have **DND (Do Not Disturb)** status enabled in their contact profile.

If a recipient has previously replied with **“STOP”** to one of your messages, you will not be able to send to them again until they respond with **“START.”**

* * *

## **Possible Causes**

1.  The recipient’s handset replied with **STOP** or another opt-out keyword.
    
2.  The phone number may have been **reassigned** to a new user who never opted in.
    
3.  The contact has enabled **DND** for SMS, calls, or all communication types.
    
4.  The platform blocks outgoing messages to respect regulatory and compliance requirements.
    

* * *

## **Possible Solutions**

-   **Remove unsubscribed numbers** from your contact list.
    
-   **Ask the recipient to re-subscribe** by texting **“START”** (or another opt-in keyword) to your number.
    
-   **Verify consent** before sending — ensure recipients have explicitly opted in to receive your messages.
    

* * *

## **Twilio-Specific Opt-Out Behavior**

If you attempt to send a message to a recipient who has opted out, the **Twilio API** will return an error, and the message will not be sent. You will not be charged for the attempt.

### Opt-Out Keywords (unsubscribe)

Messages will be blocked if the recipient replied with any of these:

-   STOP
    
-   STOPALL
    
-   UNSUBSCRIBE
    
-   CANCEL
    
-   END
    
-   QUIT
    

### Opt-In Keywords (resubscribe)

To resume receiving your messages, recipients must reply with:

-   START
    
-   YES
    

* * *

## **Important Notice**

-   If a user opts out of a **Messaging Service number**, the opt-out applies to **all messages** sent from that service.
    
-   This ensures subscribers are fully protected from unwanted communication.
    

* * *

**Key Takeaway:** Always secure **proper opt-in consent**, and respect opt-out requests. If someone has opted out, they must **manually opt back in** before you can send them messages again.

  

  

  

Reference-  [https://support.twilio.com/hc/en-us/articles/223133627-Error-21610-The-message-From-To-pair-violates-when-sending-SMS](https://support.twilio.com/hc/en-us/articles/223133627-Error-21610-The-message-From-To-pair-violates-when-sending-SMS)