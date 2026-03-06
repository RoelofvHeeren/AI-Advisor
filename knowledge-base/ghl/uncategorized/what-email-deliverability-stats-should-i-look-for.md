---
title: "What Email Deliverability Stats Should I Look For?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001198786-what-email-deliverability-stats-should-i-look-for-"
category: "Uncategorized"
---

# What Email Deliverability Stats Should I Look For?

  

A Guest-Tutorial From Krystin Ruschman of [Email-2-Inbox](https://www.facebook.com/groups/email2inboxhighlevelusers)

  

“How do I know if my stats are good?”

  

Great question!

  

Let’s drill down on the different types of email stats and their technical definitions.

  

Here’s a list of the most common stats: (available stats vary between Email Marketing Tools and SMTPs - for the sake of this article I’m using Mailgun terminology)

  

-   Processed
    
    -   The total number of message requests received by Mailgun (both outgoing and incoming, including posts via Routes like web-hooks)
        
-   Accepted
    
    -   The total number of outgoing message requests received by Mailgun (email you tried to send)
        
-   Delivered
    
    -   The total number of requested messages that actually got Delivered to the recipients mailserver (and presumably onto one of their account folders, but no guarantee)
        
-   Opened
    
    -   The total number of times a Delivered message triggered an Open (this does not necessarily mean a person literally opened the email…)
        
-   Clicked
    
    -   The total number of times a Delivered message triggered a Click 
        
-   Replied
    
    -   The total number of times a Delivered message triggered a Reply
        
-   Bounced (hard)
    
    -   The total number of Accepted messages that were not able to be Delivered due to bad addresses or bad/inactive accounts (The Bounced stat we want to monitor closely is often referred to as “Hard Bounced” or “Permanent Failure”, although a Permanent Failure does not always count as a “Hard Bounce”)
        
-   Complained
    
    -   The total number of Delivered messages that get marked as spam or junk by the recipient
        
-   Unsubscribed
    
    -   The total number of Delivered messages that trigger an Unsubscribe response by the recipient
        
-   Suppressions
    
    -   The total number of Accepted messages that were not Delivered due to having previously Bounced, Complained, or Unsubscribed
        

  

  

Now let’s break a few of these down, so you have some context for what to look for and what those numbers mean.

  

I’ll provide average numbers/ranges based on various sources. Keep in mind, every situation is different. Also, keep in mind average results are for average people doing average things… and who wants to be average?

  

#### DELIVERED

#### ⁠⁠✅⁠ At or above 98%

#### ⚠️⁠ Around 97-98%

#### ⁠❌⁠ Under 97% - this means 3% of your email did not get delivered, which should definitely be a red flag

Where to look: 

Delivered rate should be monitored at the domain level, as well as the individual email level

  

Considerations:

-   #### The opposite of Delivered is Undelivered...
    
-   Delivered just means it made it to the recipients mailserver - not the inbox. When you see delivered less than 97%, it usually means a majority of the email that is getting delivered is likely going to spam/promotions
    
-   #### Indicative of MULTIPLE problems
    
-   Delivered 97-98% can still indicate problems, especially in conjunction with other red flags
    

OPENED

#### ⁠✅⁠ When working with clients, we like to shoot for 40’s, 50’s, and 60’s - higher open rates are achievable, depending on various factors

#### ⚠️⁠ Average Open rates across all industries run 16-26%

#### ⁠❌⁠ Under 15%

Where to look: 

Opened rate should be monitored at the individual email level

  

Considerations:

-   Consider the things a recipient can see prior to opening your email and make sure you’re controlling those (From Name/Email address, Domain/Brand recognition, Subject Line, Preview or first couple lines of body copy)
    
-   The decision to Open an email is in part related to the level of comfort on the part of the recipient. Show up in a way that makes them feel comfortable with opening.
    
-   The average for Open rates will change as we move into Q4 2021 due to the new Apple iOS 15 Privacy changes, which will start to trigger Opens automatically - not specific to a real person opening the email (I wrote another article on this to help explain how this change works and ways you can respond). Expect the average Opens range to recalibrate to a higher range of normal as we near the end of the year.
    

CLICKED

#### ⁠✅⁠ Shoot for Click rates above 10%+

#### ⚠️⁠ Average Click rates across all industries run 7-9% (who wants to be average?)

#### ⁠❌⁠ Under 5%

Where to look: 

Clicked rate should be monitored at the individual email level, specifically where a “click” call-to-action (CTA) is the focus

  

Considerations:

-   The psychology of a Click is much different from that which encourages a Reply
    
-   Make your Click call-to-action clear to the recipient, and easy to take action on
    
-   Consider using a short message (3-5 lines of copy) with a clear Click CTA at the end
    
-   With longer email copy, consider placing the Click CTA within the copy multiple times
    
-   Ensure the recipient is clear on what will happen/what they’ll get when they Click, and that it’s something they’ll find of value (ie. what’s in it for them?)
    
-   Avoid muddying up the Click CTA with several different things to click on within the email body. Try to keep the ONE Click you want as the main focus of the email.
    

REPLIED

#### ⁠✅⁠ Shoot for reply rates of 30%+

#### ⚠️⁠ Average Reply rates across all industries run 15-25% (again, who wants to be average?)

#### ⁠❌⁠ Under 10%

Where to look: 

Replied rate should be monitored at the individual email level, specifically where a “reply” call-to-action (CTA) is the focus

  

Considerations:

-   The psychology of a Reply is much different from that which encourages a click
    
-   Make your Reply call-to-action clear to the recipient, and easy to take action on
    
-   For a boost in replies, consider asking simple, low/no-friction questions (ex: yes/no), or offering something of great value in exchange for a reply in order to sweeten the pot (ie. what’s in it for them?)
    
-   Avoid muddying up the Reply CTA by including links to click on within the email body. Try to keep the Reply CTA as the main focus of the email.
    

COMPLAINED

#### ✅⁠ Keep your Complaint rate as close to 0.00% as possible

#### ⚠️⁠ Mailgun’s Acceptable Use Policy (AUP) allows a threshold of 0.05%, which equates to 1 recipient out of 2000 emails marking your email as spam/junk

#### ⁠❌⁠ At or above 0.04%

Where to look: 

Complained rate should be monitored at the domain level, as well as the individual email level

  

Considerations:

-   Following best-practices should keep it well under 0.03%
    
-   Once it starts approaching the 0.04% range it may start affecting your domain/IP reputation.
    
-   High Complaint rates can lead to your SMTP taking action like disabling your domain and/or account, and it can land you on a Blacklist, as well.
    
-   Ensure the recipient has an easy way to opt-out of your email, such as an Unsubscribe or Update Your Email Preferences option. Unsubscribes don’t hurt your domain reputation, so are way more preferable to a Complaint, which does.
    

BOUNCED

#### ✅⁠ Bounce rate well under 1%

#### ⚠️⁠ Mailgun’s Acceptable Use Policy (AUP) allows a threshold of 5%

#### ⁠❌⁠ Over 2-2.5%

Where to look: 

Bounced rate should be monitored at the domain level, as well as the individual email level

  

Considerations:

-   Following best-practices related to list hygiene (initial and ongoing) should keep this well under 1%
    
-   Once it starts approaching the 2-2.5% range it can start to affect your domain/IP reputation
    
-   High Bounce rates can lead to your SMTP taking action like disabling your domain and/or account, and it can land you on a Blacklist, as well
    

SUMMARY

These numbers are a guideline and by no means meant to be applied literally to every situation. The individual email or campaign, the message, the audience, and the level of segmentation all weigh into the numbers. 

It’s important to monitor your deliverability stats on a regular basis - weekly is recommended. This is best-practice in order to stay on top of what’s working and what’s not working and gives you the opportunity to course-correct along the way, for the best possible results.

Take a look at your current numbers and set some goals for yourself, then make one small tweak at a time, and assess what effect it had on the big picture, then do another round and keep going.

The GOAL is not to achieve some specific number, but rather to IMPROVE from where you started, and ultimately to improve your bottom line.

Need Some Help?

  

-   This article gives a general idea of what stats to monitor and what to look for, but every situation is unique.
    

  

-   Not every email will perform the same, and what numbers you shoot for may vary depending on the type of campaign you’re sending, the audience you’re sending to, and the offer/CTA you’re focusing on.
    

  

-   It’s virtually impossible to troubleshoot email deliverability issues over a Facebook post, helpdesk chat, or ticket. Troubleshooting properly requires an understanding of all the factors and a thorough analysis.
    

  

-   If you’re struggling to get your emails to the inbox, or even if you just want to look at ways to turn your email marketing up a notch, please [](https://help.email-2-inbox.com/calendar-chat)[book a call with Krystin](https://help.email-2-inbox.com/calendar-chat) at Email2Inbox
    

  

  

  

References:

[https://sendgrid.com/blog/improve-email-deliverability-with-sendgrids-newly-released-email-validation-api/](https://sendgrid.com/blog/improve-email-deliverability-with-sendgrids-newly-released-email-validation-api/) 

[https://knowledgebase.constantcontact.com/articles/knowledgebase/5409-average-industry-rates](https://knowledgebase.constantcontact.com/articles/knowledgebase/5409-average-industry-rates) 

[https://www.mailgun.com/blog/email-bounce-rates-shifting-focus-away-failure/](https://www.mailgun.com/blog/email-bounce-rates-shifting-focus-away-failure/) 

[https://blog.hubspot.com/sales/average-email-open-rate-benchmark](https://blog.hubspot.com/sales/average-email-open-rate-benchmark) 

[https://neilpatel.com/blog/high-email-unsubscribe-rate/](https://neilpatel.com/blog/high-email-unsubscribe-rate/) 

[https://www.mailgun.com/blog/email-open-rates-decoded](https://www.mailgun.com/blog/email-open-rates-decoded) 

[https://www.campaignmonitor.com/resources/knowledge-base/what-is-a-good-or-average-email-response-rate-for-email-marketing/](https://www.campaignmonitor.com/resources/knowledge-base/what-is-a-good-or-average-email-response-rate-for-email-marketing/) 

[https://sendgrid.com/blog/unsubscribes-what-to-do-when-youre-getting-too-many/](https://sendgrid.com/blog/unsubscribes-what-to-do-when-youre-getting-too-many/)