---
title: "Conversations Glitching? Here's What’s Going On?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-"
category: "Uncategorized"
---

# Conversations Glitching? Here's What’s Going On?

Are your calls and messages acting weird in HighLevel? Maybe you're seeing different people showing up under the same number—or replies scattered across separate conversations?  
Don’t worry—you’re not alone, and this quick guide will help you pinpoint what's happening.

  

* * *

### **TABLE OF CONTENTS**

-   [Common Glitch Scenarios (And What They Actually Mean)](#Common-Glitch-Scenarios-\(And-What-They-Actually-Mean\))[](#1\)-What-you%E2%80%99ll-see--Incoming-Calls-From-Different-People-All-Showing-the-Same-Number-\(e.g.,-+266696687\)?)  
    [1) What you’ll see- Incoming Calls From Different People All Showing the Same Number (e.g., +266696687)?](#1\)-What-you%E2%80%99ll-see--Incoming-Calls-From-Different-People-All-Showing-the-Same-Number-\(e.g.,-+266696687\)?)
    
-   [2)What you’ll see- Replies in Separate Conversations?](#2\)What-you%E2%80%99ll-see--Replies-in-Separate-Conversations?)

* * *

### Common Glitch Scenarios (And What They Actually Mean)

  
1)What you’ll see:  
Incoming Calls From Different People All Showing the Same Number (e.g., +266696687)?

###   

### What’s happening:

1.  Leads sometimes call anonymously, meaning their caller ID is hidden or not traceable.  
      
    
2.  Instead of showing their actual phone number, the system logs these calls under a generic or placeholder number (e.g., +266696687).  
      
    
3.  As a result, all anonymous calls using this placeholder number get grouped together.  
      
    
4.  This causes multiple leads' calls to merge into a single contact or conversation in the system, making it difficult to distinguish between them.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048047118/original/um1zeDCwO3GujkVLnoEOQMKoguUdqWlnvw.png?1749621896)

Why this matters:  
Because HighLevel identifies contacts based on phone number, all anonymous calls get grouped under the same contact. That’s why conversations are merging or stacking incorrectly.

  
What can we do to retrieve actual number or caller id?  
You cannot “unmask” an anonymous call. If the caller’s carrier/VoIP provider does not send a caller ID, ghl cannot retrieve or display it.

Support doc-  [Why-am-i-getting-calls-from-strange-numbers](https://help.twilio.com/articles/223179988-Why-am-I-getting-calls-from-these-strange-numbers-)

### 2)What you’ll see:

Replies in Separate Conversations?

##   

What’s happening:  
  
_“We now support Group Texting, but it's important to note that this feature is only available for +1 (US/Canada) long code numbers. Toll-free numbers and short codes can't participate in group texts through Twilio.”_

1.  This issue usually happens when your Twilio number is included in a group text or conversation involving contacts outside the US or Canada.  
      
    
2.  Currently, the system does not support Group Texting or Group SMS for international numbers.
3.  Because of this limitation, replies from each participant in the group are routed into separate, individual conversation threads instead of staying within one group thread.
4.  Although it may look like a system error, this is actually expected behavior based on the current functionality restrictions for group messaging outside of the US and Canada.
    
    * * *
    

## **Frequently Asked Questions**

Q: Why are replies showing up in separate conversations?  
A: Our system doesn't yet support Group Texting or Group SMS for countries outside of the US/Canada. Because of this limitation, replies from each participant get routed into separate, individual conversation threads.

Q: Why are incoming calls from different people all showing the same number (e.g., +266696687)?  
A: This issue occurs when leads call anonymously, meaning their carrier or VoIP provider doesn't send a traceable caller ID. Instead, all these anonymous calls get grouped under a placeholder number like +266696687. Multiple leads calling anonymously will merge into the same conversation.

* * *

Wrap-Up  
Conversation glitches—such as calls from multiple people showing under the same number or replies splitting into separate threads—are usually caused by anonymized caller IDs, formatting inconsistencies, or multi-channel interactions.  
If issues continue, don’t hesitate to contact support with detailed examples—our team is here to help resolve these edge cases quickly.

* * *

  

##