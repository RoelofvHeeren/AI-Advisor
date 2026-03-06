---
title: "How To Fix - Phone Call Redirect Loop"
url: "https://help.gohighlevel.com/support/solutions/articles/48001076653-how-to-fix-phone-call-redirect-loop"
category: "Uncategorized"
---

# How To Fix - Phone Call Redirect Loop

If you're hearing phone calls that loop, playing the same message over and over again, or you're seeing phone calls stack up one after another in Conversations, that is a "redirect" loop. Let's fix it.

* * *

**TABLE OF CONTENTS**

-   [What Is A Phone Call (Redirect) Loop?](#What-Is-A-Phone-Call-\(Redirect\)-Loop?)
    -   [Evidence of a Phone Call (Redirect) Loop](#Evidence-of-a-Phone-Call-\(Redirect\)-Loop)
    -   [Fix a Phone Call (Redirect) Loop](#Fix-a-Phone-Call-\(Redirect\)-Loop)
        -   [Check User Phone Number](#Check-User-Phone-Number)
        -   [Check Forwarding Number](#Check-Forwarding-Number)
        -   [Check Business Profile Phone](#Check-Business-Profile-Phone)

* * *

# **What Is A Phone Call (Redirect) Loop?**

  

A phone call loop, or a redirect loop, is when a call to number A gets routed/redirected/forwarded to number B, and then number B routes it to number A. 

* * *

## **Evidence of a Phone Call (Redirect) Loop**

  

Evidence that you have a phone call redirect loop:

-   You hear the call repeat the same sounds over and over again.
-   You see inbound calls stack up quickly (less than a minute).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045943702/original/5BrixR67mRMjAhZNr1HV-GZa-09KCyyAog.png?1746043671)

  

* * *

## **Fix a Phone Call (Redirect) Loop**

  

  

### **Check User Phone Number**

  

Navigate to Subaccount > Settings > My Staff > edit specific user. Make sure the user's phone number (the number you call to talk to them) is not the same as a HighLevel number (the number you got from HighLevel). 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045943891/original/wpugk__jahwGb-WtfgO5KW-e4tdVzhWYjg.png?1746044098)

  

  

This would create a forwarding loop where the call calls itself. You might see an error like this:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045940256/original/rvt4vtGqaOK3K54D8Ul5nCs_2IpjwRpRfg.png?1746036512)

  

  

### **Check Forwarding Number**

  

Also check Subaccount > Settings > Phone Numbers > Forwarding Number. The forwarding number needs to be different from the phone number.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045944295/original/umLo08lZ0J8jtwlTOY3rr9QqFTvIuczLqw.png?1746045174)

  

  

### **Check Business Profile Phone**

  

Also check Subaccount > Settings > Business Profile > Business Phone. This is the fallback number to route the inbound call to. Check this but also call this number to see if it ends up routing to the HighLevel number anyway. It might look like a different number that is still setup to route to the HighLevel number, so test it manually.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045944689/original/2xTHdQNtxxWlR2aJRfPWf6pp1xiAKgMXeQ.png?1746045949)