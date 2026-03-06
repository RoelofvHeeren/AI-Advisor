---
title: "Troubleshooting SMS Delivery"
url: "https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery"
category: "Uncategorized"
---

# Troubleshooting SMS Delivery

It’s frustrating when a text never arrives—whether it’s an appointment reminder, a promotion, or a two-way chat. This guide walks you through each step of our delivery pipeline, shows you where things can go wrong, and gives you clear, actionable fixes so you can get back on track fast.

* * *

**TABLE OF CONTENTS**

-   [How Message Delivery Works](#How-Message-Delivery-Works)
-   [Where to Find Error Messages in HighLevel](#Where-to-Find-Error-Messages-in-HighLevel)
-   [Common Reasons Why Messages Fail (And How to Fix Them?)](#Common-Reasons-Why-Messages-Fail-\(And-How-to-Fix-Them?\))
    -   [1\. At the High-Level Layer](#1.-At-the-High-Level-Layer)
    -   [2\. At the Twilio/LC Phone Layer](#2.-At-the-Twilio/LC-Phone-Layer)
    -   [3\. At the Sender Carrier Network Layer](#3.-At-the-Sender-Carrier-Network-Layer)
-   [Super-Quick Checklist Before You Click “Send”](#Super-Quick-Checklist-Before-You-Click-%E2%80%9CSend%E2%80%9D)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **How Message Delivery Works**

  

When you send a message from HighLevel, it travels through multiple layers:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047990043/original/rtRKVPSokDhZTTns4Bqu6AbZhQHdt-PEfA.jpeg?1749549338)

  

  

If the message fails at any layer, it may not be delivered to the end user. Let's look at how to spot these issues and fix them.

* * *

## **Where to Find Error Messages in HighLevel**

  

If your message didn’t go through, check the Conversations View. In most cases, when a message fails to send or deliver, we display an error in the conversation view that appears like this:  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052685143/original/yYUXlUZ2Nin4ZumnCdX6gbB9zHgw972n0g.jpeg?1756470598)

  

  

The error message and error code will provide you with clues about what is going wrong and how to proceed from there.

* * *

## **Common Reasons Why Messages Fail (And How to Fix Them?)**

  

### **1\. At the High-Level Layer**

  

| 
Issue

 | 

Cause

 | 

Fix (Help docs)

 |
| --- | --- | --- |
| 

Contact has DND (Do Not Disturb) enabled

 | 

When DND is enabled for a contact on the message channel or overall, HighLevel doesn't send the message and displays an error in the conversation screen.

 | 

Remove DND status from the contact to resume message sending.

➡️ [DoNotDisturb DND](https://help.gohighlevel.com/support/solutions/articles/48001214849)

 |
| --- | --- | --- |
| 

The Number Is a Landline

 | 

When number validation is enabled, the system checks if a number is message-capable (i.e., not a landline). If not, it prevents the message from being sent.

 | 

Use a mobile number instead or disable number validation if necessary.

➡️ [Number Intelligence](https://help.gohighlevel.com/en/support/solutions/articles/48001153968)

 |
| --- | --- | --- |
| 

Sub-Account is New and Undergoing Ramped Sending

 | 

HighLevel restricts message volume for new sub-accounts to prevent spam, gradually increasing limits over time.

 | 

Wait for limits to increase automatically, or have the agency request a lift.

➡️ [LC Phone Messaging Policy (check Ramp-Up Model: section)](https://help.gohighlevel.com/en/support/solutions/articles/48001213941)

 |
| --- | --- | --- |
| 

Sub-Account Has Hit Its Daily Message Limit

 | 

Each sub-account has a daily message limit set by the agency. Bulk and automated messages stop sending once this limit is hit, but individual replies can still be sent.  
Agencies have control over these limits for each sub-account.

 | 

Adjust daily limits from the agency settings, or wait until the next day.

➡️ [LC Phone Messaging Policy](https://help.gohighlevel.com/en/support/solutions/articles/48001213941)

 |
| --- | --- | --- |
| 

Sub-Account Sending Suspended Due to High Errors, Opt-Outs, or Complaints

 | 

Sub-accounts exceeding spam, opt-out, or carrier complaint thresholds have message sending suspended. Attempts to send messages during suspension will be skipped and display an error.

  


 | 

Follow deliverability best practices and contact support if needed.

➡️ [Best Practices for Deliverability](https://help.gohighlevel.com/support/solutions/articles/155000000079)

 |

  

  

### **2\. At the Twilio/LC Phone Layer**

  

<table style="border: none; border-collapse: collapse; font-family: &quot;Helvetica Neue&quot;;"><colgroup style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"></colgroup><tbody style="font-family: &quot;Helvetica Neue&quot;;"><tr style="height: 15.75pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.731%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span dir="ltr" style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">? Error</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 41.0766%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Cause</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 28.0042%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Fix</span></span></span></p></td></tr><tr style="height: 50.25pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.731%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Number is on Twilio's DND list</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 41.0766%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">The number is on Twilio’s DND list due to a previous opt-out or carrier complaint. Messages will fail unless the contact opts back in.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 28.0042%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">The contact must text “START” to the same Twilio number to re-enable messaging.</span></span></span></p></td></tr><tr style="height: 50.25pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.731%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">30001: Queue Overflow</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 41.0766%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Messages are queued based on the sender’s or account’s rate. If they stay in the queue for over 4 hours, they fail.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 28.0042%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Reduce the Validity Period in Messaging Service settings or API requests to shorten queue time.</span></span></span></p></td></tr><tr style="height: 39pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.731%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">30002: Suspended Sub-Account</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 41.0766%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">The message fails if the Twilio sub-account is suspended between queuing and sending.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 28.0042%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span dir="ltr" style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Contact Twilio or HighLevel Support to resolve the suspension.</span></span></span></p></td></tr></tbody></table>

###   

  

### **3\. At the Sender Carrier Network Layer**  

  

<table style="border: none; border-collapse: collapse; font-family: &quot;Helvetica Neue&quot;;"><colgroup style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"><col width="208" style="font-family: &quot;Helvetica Neue&quot;;"></colgroup><tbody style="font-family: &quot;Helvetica Neue&quot;;"><tr style="height: 15.75pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Error</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Cause</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; background-color: rgb(239, 239, 239); font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Fix</span></span></span></p></td></tr><tr style="height: 50.25pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">30003: Unreachable Destination Handset</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">The recipient's phone may be off, have no signal, be a landline, or there may be a mobile carrier issue.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Retry later or verify the number is a mobile line and properly reachable.</span></span></span></p></td></tr><tr style="height: 167.213pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">30004: Message Blocked</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Possible reasons messages might not be sent or delivered to contacts include: The destination number is blocked, the device has insufficient signal or cannot receive message (e.g., landline), the number is on India's Do Not Call registry, there's a mobile carrier issue, or a US/CA toll-free number was sent to a handset that previously opted out.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Ensure the number is valid and opted in. Avoid sending to DND or blocked numbers.</span></span></span></p></td></tr><tr style="height: 50.25pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Attachment File Too Large</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">The file size exceeds carrier limits for MMS.</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">➡️&nbsp;</span><a href="https://help.gohighlevel.com/support/solutions/articles/48001208913" rel="noopener noreferrer" style="font-family: &quot;Helvetica Neue&quot;;" target="_blank"><span style="color: rgb(17, 85, 204); font-weight: 400; text-decoration-skip-ink: none; font-family: &quot;Helvetica Neue&quot;;">File Size Limits for Attachments in SMS.</span></a></span></span></p></td></tr><tr style="height: 39pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">International Geo Permissions</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Your account might not have permission to send international messages..</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Contact support.</span></span></span></p></td></tr><tr style="height: 170.963pt; font-family: &quot;Helvetica Neue&quot;;"><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 30.2947%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 700; font-family: &quot;Helvetica Neue&quot;;">Message Body Too Long</span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 42.1331%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">- If you are using a trigger to send a message. Check the body of the message. Also, check to see if there is a custom value of {{message.body}}</span></span></span></p><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">- For example, if someone replies via email and their email exceeds the limit of 1600 characters, the message will not send if you have the custom value {{message.body}}</span><br style="font-family: &quot;Helvetica Neue&quot;;"><br style="font-family: &quot;Helvetica Neue&quot;;"><span dir="ltr" style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047990631/original/PvnlWbqLsSDvP46SqUbwxdC7wgjSuYDhkQ.png?1749549640" width="393" class="fr-fic fr-dii" data-id="155047990631" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; display: inline-block; margin-left: 5px; color: rgb(24, 128, 56); font-family: &quot;Helvetica Neue&quot;; font-size: 14px; font-weight: 400; text-align: left; text-indent: 0px; width: 249px; height: 80.3946px;" data-attachment="[object Object]"></span></span></span></p></td><td style="border-width: 0.75pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 2pt; overflow: hidden; overflow-wrap: break-word; width: 27.5048%; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; font-family: &quot;Helvetica Neue&quot;; font-size: 14px;"><span style="font-size: 14px;"><span style="font-family: Helvetica Neue;"><span style="color: rgb(0, 0, 0); font-weight: 400; font-family: &quot;Helvetica Neue&quot;;">Trim the message manually or modify the trigger logic to exclude large custom values.</span></span></span></p></td></tr></tbody></table>

  

  

**Please Note**: To learn more about error codes and troubleshooting, refer to [Error and Warning Dictionary](https://www.twilio.com/docs/api/errors)

* * *

## **Super-Quick Checklist Before You Click “Send”**

  

-   **Check Conversations**: Note any red error badge.  
      
    
-   **Match Error Code**: Use the tables above to find the cause.  
      
    
-   **Apply Fix**: Follow the “Fix” column for that issue.  
      
    
-   **Retry**: Resend the message after adjustments.  
      
    
-   **Monitor**: Confirm delivery or note a new error code

* * *

## **Frequently Asked Questions**

  

**Q: Why am I getting charged for failed message messages?**Charges apply once a message is attempted—even if it fails later in the process.

**Q: How do I know exactly why a message failed?**You can check the message logs in Twilio.  
➡️ [How to check Twilio logs](https://help.gohighlevel.com/en/support/solutions/articles/48001222601)

* * *

## **Related Articles**

-   [](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)[Best Practices for SMS deliverability and Avoiding SMS Restrictions](https://help.gohighlevel.com/en/support/solutions/articles/155000000079)[](https://help.gohighlevel.com/en/support/solutions/articles/48001213941)
-   [LC - Phone Messaging Policy](https://help.gohighlevel.com/en/support/solutions/articles/48001213941)
-   [SMS / Phone number Validation](https://help.gohighlevel.com/en/support/solutions/articles/48001153968)