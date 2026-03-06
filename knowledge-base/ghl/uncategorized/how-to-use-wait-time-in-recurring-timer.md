---
title: "How to Use Wait Time in Recurring Timer"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005838-how-to-use-wait-time-in-recurring-timer"
category: "Uncategorized"
---

# How to Use Wait Time in Recurring Timer

This article shows you how to add a custom wait time between cycles of a recurring countdown timer. Use the feature to run “Every Friday” flash sales, weekly webinar countdowns, or monthly product drops—without rebuilding timers each time they reset.

**TABLE OF CONTENTS**

-   [What Is Custom Wait Time for Recurring Timers?](#What-Is-Custom-Wait-Time-for-Recurring-Timers?)
-   [Key Benefits of Custom Wait Time](#Key-Benefits-of-Custom-Wait-Time)
-   [How to Configure a Recurring Timer with Wait Time](#How-to-Configure-a-Recurring-Timer-with-Wait-Time)
-   [Timer Lifecycle Explained](#Timer-Lifecycle-Explained)
-   [Use-Case Templates](#Use-Case-Templates)
-   [Known Behaviours & Tips](#Known-Behaviours-&-Tips)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Next Steps](#Next-Steps)

* * *

# What Is Custom Wait Time for Recurring Timers?

Custom wait time lets a recurring timer pause for a set duration after it reaches 00 : 00 : 00, then start the next cycle automatically. During the pause (the Wait state) you can decide whether the timer stays visible at zero or disappears entirely in funnels, while emails show a zero-state banner that links to your expiry page.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050757246/original/Zvnf4TGlWMr5O3hF3Tu93wuF8-EY-GqO5A.jpeg?1753986890)

## Key Benefits of Custom Wait Time

Adding a pause between cycles unlocks new campaign ideas and slashes repetitive setup work.

-   Automate recurring promos such as “Every Friday Sale” or weekly challenges.  
      
    
-   Run evergreen webinars by counting down to the next session each week.  
      
    
-   Control visibility—hide timers in funnels during off-hours to keep pages tidy.  
      
    
-   Reuse a single asset across emails and funnels instead of cloning timers.  
      
    
-   Align email & page logic with consistent zero-state and redirect behaviour.  
      
    

## How to Configure a Recurring Timer with Wait Time

Follow these steps once; the timer will self-manage every cycle.

1.  Navigate to Marketing ▸ Countdown Timer ▸ New Timer.  
      
    
2.  Choose Recurring and set your Start and End offsets.  
      
    
3.  Toggle Custom Wait Time and enter a duration (e.g., 5 days 12 hours).  
      
    
4.  (Optional) Enable Hide Timer in Wait State to remove the timer from funnels during the pause.  
      
    
5.  Select the Expiry Page / URL visitors should see when they click the timer or refresh a funnel during Wait.  
      
    
6.  Save and embed the timer block in funnels and/or emails.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050757247/original/b9EMLlR4QylG8gEY_P4V8ww3-4L5dyefSg.jpeg?1753986890)

## Timer Lifecycle Explained

Knowing what contacts see at each stage helps you design seamless journeys.

vbnet

CopyEdit

Active Cycle ─┐

               │ hits 00:00

               ▼

          Wait State (custom duration)

               │ auto-restart

               ▼

        Next Active Cycle → … (repeats)

  

<table style="border:none;border-collapse:collapse;"><colgroup><col width="58"><col width="255"><col width="311"></colgroup><tbody><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">State</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Email Behaviour</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Funnel Behaviour</span></p></td></tr><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Active</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Live ticking countdown</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Live ticking countdown</span></p></td></tr><tr style="height:67pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Wait</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Timer shows&nbsp;</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">00 : 00 : 00</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">; clicking it redirects to Expiry Page</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">• Timer hidden&nbsp;</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">or</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;shows 00 : 00 : 00 (based on your toggle)</span></p><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">• If the page is refreshed while Wait is active, user is redirected to Expiry Page</span></p></td></tr><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Reset</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">New cycle begins automatically</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">New cycle begins automatically</span></p></td></tr></tbody></table>

  

## Use-Case Templates

Plug-and-play numbers to hit the ground running.

<table style="border:none;border-collapse:collapse;"><colgroup><col width="120"><col width="150"><col width="89"><col width="254"></colgroup><tbody><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Scenario</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Start → End</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Wait Time</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Result</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Every Friday Sale</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Fri 00:00 → Fri 23:59</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">6 days 1 min</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Timer re-arms for the next Friday at midnight</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Weekly Webinar</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Mon 09:00 → Thu 17:00</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">3 days 16 hrs</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Countdown resumes each Monday morning</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Monthly Drop</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">1st 00:00 → 3rd 23:59</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">27 days</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Runs on the first three days of every month</span></p></td></tr></tbody></table>

  

## Known Behaviours & Tips

Avoid surprises by understanding edge-case logic.

-   Email zero-state is unstyled “00 : 00 : 00”. Custom CSS/styling isn’t applied during Wait.  
      
    
-   Hide-Timer toggle affects funnels only; emails always show zero-state.  
      
    
-   If a visitor’s session spans Active → Wait without page refresh, they stay on the funnel page (no auto-redirect).  
      
    
-   Max wait duration: 365 days; Min: 1 minute.  
      
    
-   Analytics log a “Timer Expired” event the moment Wait starts—use it to trigger post-promo automations.  
      
    

* * *

## Frequently Asked Questions

Q1. Can a wait period cross Daylight-Saving-Time changes?  
 Yes—timers store durations, not fixed dates. The engine recalculates offsets when DST shifts.

Q2. What happens if I edit the wait time later?  
 New duration applies the next time the timer enters Wait; the current cycle is unaffected.

Q3. Can I style the zero-state in emails?  
 Not yet. Zero-state uses the default timer font and color for deliverability consistency.

Q4. Does the redirect fire in funnels if I disable Hide-Timer?  
 Yes—refreshing the page during Wait always redirects, regardless of visibility.

Q5. How many cycles can one timer run?  
 Unlimited—cycles continue until you archive or delete the timer.

Q6. Will contacts see different times in cached emails?  
 Email timers refresh with real-time data when opened; cached images are replaced server-side.

Q7. Can I add a wait period to non-recurring timers?  
 No—wait time is exclusive to the Recurring timer type.

* * *

### Next Steps

1.  Build a pilot “Every Friday Sale” timer with a 7-day wait period.  
      
    
2.  Embed the timer block in a funnel landing page and preview the Wait-state behaviour.  
      
    
3.  Schedule an email blast using the same timer block.  
      
    
4.  Review analytics after two promo cycles and fine-tune your start/end offsets.