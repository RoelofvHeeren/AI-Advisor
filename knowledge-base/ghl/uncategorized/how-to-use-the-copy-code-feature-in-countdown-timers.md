---
title: "How to Use the \"Copy Code\" Feature in Countdown Timers"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003103-how-to-use-the-copy-code-feature-in-countdown-timers"
category: "Uncategorized"
---

# How to Use the "Copy Code" Feature in Countdown Timers

Countdown timers are a powerful tool for adding urgency to your website or email campaigns. They can help you drive conversions by showing customers how much time is left for a special offer, event, or product launch. One useful feature is the "Copy Code" function, which allows you to quickly integrate countdown timers into your content.

  
This guide will walk you through how to use the "Copy Code" feature in countdown timers, including steps to create a timer, copy the code for your website or email, and customize the alignment and dynamic timer functionality.

* * *

**TABLE OF CONTENTS**

-   [What Is Countdown Timer Copy Code?](#What-Is-Countdown-Timer-Copy-Code?)
-   [Countdown Timer Types](#Countdown-Timer-Types)
-   [Do I Need To Edit The Code?](#Do-I-Need-To-Edit-The-Code?)
-   [How To Use Countdown Timer Copy Code](#How-To-Use-Countdown-Timer-Copy-Code)
-   [Troubleshooting Checklist](#Troubleshooting-Checklist)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What Is Countdown Timer Copy Code?**

  

The **"Copy Code"** feature is for when you want to **embed** your countdown timer into **different** platforms, such as your website, email, or other builders. Here's when to use it:

1.  **On non-GHL Websites**:
    
    -   When you want to display a countdown timer on your webpage, the "Copy Code" option gives you the code snippet that you can paste directly into your website’s HTML.  
          
        
    -   This is useful for showing time-sensitive offers, event countdowns, or product launches.  
          
        
2.  **In non-GHL Emails**:
    
    -   If you're sending an email campaign, you can use the "Copy Code" feature to get the timer code that can be inserted into your email's HTML.  
          
        
    -   This allows you to create urgency within your email content, so recipients can see the countdown right within the email.

* * *

## **Countdown Timer Types**

  

There are three different types of Countdown Timers:

-   **Fixed**: This timer always ends at the same time, which requires an endDate.  
      
    
-   **Recurring**: This timer will count down and then refresh to a new time and count down again, which requires a startDate, a duration, and a loop count.  
      
    
-   **Dynamic**: This timer can have a different deadline for each person who sees it, which requires the uniqeID and a duration (the startDate will depend on when that individual activates it).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049014588/original/4hxDN3L7isOpxTU2Glnt5Zb-F7rMIJJWOQ.png?1751074115)

* * *

## **Do I Need To Edit The Code?**

  

| Where will the timer live? | Do you need to edit startDate=…? | Do you need to edit uniqueID=…?     | Rationale |
| --- | --- | --- | --- |
| Website or landing page (any builder) | No. Paste the snippet as‑is.     | Optional. Leave the default unless you want page‑level analytics.     | 
All visitors see the same “wall‑clock” deadline.

  
 |
| Static email (same deadline for everyone)         | Yes. Replace the placeholder with the moment the email is sent (e.g., 2025‑01‑01T15:30:00Z). | Delete or ignore. Everyone shares the same deadline, so uniqueness is irrelevant. |   
 |
| Dynamic email in GHL (deadline relative to each contact)     | Yes. Replace with the merge field {{right\_now.date\_time\_iso}}.     | Leave default {{contact.id}} OR swap for another contact field if you prefer.     | GHL fills these merge tags at send‑time, giving every contact a personal clock. |
| Dynamic email in another platform (e.g., Mailchimp, HubSpot)     | Yes. Use that platform’s “current‑datetime” merge tag (e.g., \`\*NOW\*\`). |   
 |   
 |

  

  

**Key concept:  
****Static** timer = one deadline shared by everyone.  
**Dynamic** timer = a deadline calculated separately for each recipient; therefore it needs both a personal **startDate** and a personal **uniqueID**.

**startDate** is the stopwatch trigger. If the builder can’t calculate “now” automatically, you must tell the timer when “now” is.

**uniqueID** is the stopwatch serial number. It prevents the caching that would otherwise make every recipient see the same image.

  

* * *

## **How To Use Countdown Timer Copy Code**

  

**1\. Create a Countdown Timer**

Set up your countdown by selecting the **end date and time**, **appearance**, and **format** (days, hours, minutes, seconds). Once done, move to the next step.

  
**2\. Copy the Code for Website or Email**

Click the **“Copy Code”** button to get the code.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040310426/original/jQZNKBE9RpsBO8KGrAzA4SllK8zaigfI_g.png?1737618751)

  

  

**3\. Choose where to use and the Timer Alignment**

Select email or website based on where the code would be used and the alignment for your timer. Choose the one that fits your page or email design.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040310385/original/9B7_0J5oMU3GIokzZzMvdWQv8qmRVGlq6g.png?1737618709)

  

  

**4\. Enter Unique ID for Dynamic Timers (Optional)**

For **dynamic timers**, replace the **contact.id** within the curly braces with relevant **Unique ID** to personalize the countdown for each user (e.g., contactID, userID etc.). This ensures each person sees a tailored timer. 

  
**Example**: The highlighted text needs to be changed. If the Unique ID is contact.no, then use  
  
...............uniqueID={{contact.no}}&.......

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040310604/original/jdn8K4NCeUFaHi2oCYxo5mKTIMp8rEHN3A.png?1737618875)  
  

**5\. Replace with correct sender time  
**The start date field is required when the timer is used in a code snippet block of a builder. 

  

For copy code in emails outside GHL builder, we should put the date the email was sent irrespective if the trigger was open or clicked. For a case where the email was sent on 1st january, 2025 on 3:30PM, `startDate=YYYY-MM-DDTHH:mm:ss.sssZ` can be replaced with `startDate=2025-01-01T15:30:00:00` For dynamic timer copy code in emails within GHL email builder startDate `startDate=YYYY-MM-DDTHH:mm:ss.sssZ` can be replaced with `startDate={{right_now.date_time_iso}}`

  

* * *

## **Troubleshooting Checklist**

  

**Timer never starts** → Check that **startDate** is filled with a real ISO date or a valid merge tag like this {{merge.tag}}.

  

**Everyone sees the same time** → Make sure **uniqueID** is different per recipient (merge tag, not hard‑coded).

  

**Wrong timezone** → Verify that the date you inserted ends with Z (UTC) or includes a timezone offset, e.g., ‑05:00.

* * *

## **Frequently Asked Questions**

  

**Do I ever need to swap code when embedding in a GHL _website_?**

No. The default snippet already works because the deadline is shared by all visitors.

  

**Is the unique ID really “optional”?**

Only for static timers. For dynamic timers you need it; otherwise all recipients share the same cached image.

  

**Can I test a dynamic email timer before sending?**

Yes. Send a test to yourself—the merge tags populate with your own contact data, so you’ll see exactly what real recipients see.

  

**Does Copy Code work inside GHL’s email/site builders?**

You don't need Copy Code inside GHL's builders because you can just embed the countdown timer directly, but you can use it in a code snippet element.