---
title: "Smart Send: Email Marketing Campaigns"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006628-smart-send-email-marketing-campaigns"
category: "Uncategorized"
---

# Smart Send: Email Marketing Campaigns

Smart Send takes the guesswork out of “When should I hit Send?” by automatically recommending the optimal delivery time for every regular email campaign. The result is higher open- and click-through rates with zero extra setup—perfect for busy marketers who want data-driven results.

* * *

**TABLE OF CONTENTS**

-   [What is Smart Send?](#What-is-Smart-Send?)
-   [Key Benefits of Smart Send](#Key-Benefits-of-Smart-Send)
-   [Eligibility Requirements](#Eligibility-Requirements)
-   [Best Time Recommendation Logic](#Best-Time-Recommendation-Logic)
-   [Analytics Dashboard Enhancements](#Analytics-Dashboard-Enhancements)
-   [How To Set Up Smart Send](#How-To-Set-Up-Smart-Send)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is Smart Send?**

  

Smart Send is a new delivery option inside HighLevel’s Send & Schedule screen that analyzes the last 60 days of recipient engagement (opens, clicks, and other events) to identify the single best send time for your campaign. To ensure the recommendation is statistically sound, the location must have delivered at least 1,000 emails over the past 60 days. When you request a recommendation, Smart Send instantly crunches the numbers and schedules your email for the time-slot with the highest predicted engagement.

* * *

## **Key Benefits of Smart Send**

  

-   **Automatic lift in open and click rates** — no manual analysis needed.  
      
    
-   **Seamless workflow** — the option appears alongside Send Now, Simple Schedule, Batch, and RSS Schedule in the existing Send & Schedule flow.  
      
    
-   **Flexibility** — you can accept the recommendation or override it with any custom date and time.  
      
    
-   **Transparent ROI** — post-send analytics display the percentage engagement lift compared with your location’s historical average. 

* * *

## **Eligibility Requirements**

  

Smart Send works only when HighLevel has enough recent data to make an accurate prediction.

  

-   Minimum 1,000 emails delivered from the same location in the last 60 days.  
      
    
-   The campaign must be created in Email Builder → Campaigns.  
      
    
-   Currently supported for regular email campaigns (A/B and batch support coming soon).

* * *

## **Best Time Recommendation Logic**

  

Smart Send builds a 60-day engagement model that weighs:

  

-   Open events by hour of day (local to the sub-account).  
      
    
-   Click events and other interactions to fine-tune predictions for revenue-driving engagement.  
      
    
-   Relative performance against location averages to avoid recommending historically low-performing windows.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728760/original/0lEyq3ktSKx2taYt-z0Qb6z4hX1_CT71nw.png?1760105895)

  

  

If insufficient data exists for a particular hour, Smart Send automatically widens the window until the model meets confidence thresholds.

* * *

## **Analytics Dashboard Enhancements**

  

After a Smart Send campaign goes out, the Email Statistics dashboard highlights:

  

-   Engagement Lift (%) versus the location’s 60-day baseline.  
      
    
-   A breakdown of opens and clicks by the recommended hour.  
      
    
-   A comparison chart of Smart Send vs. manually scheduled campaigns, helping you quantify the feature’s impact. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728695/original/TtJ08zhPpQvow9YHa2Bne8pcILhUCODc4Q.png?1760105836)

* * *

## **How To Set Up Smart Send**

  

Launching a campaign with Smart Send is as simple as choosing a template:

  

1\. Navigate to Marketing → Emails.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729100/original/NDepPiX80L8Yqfl6DnhhYMJNi7Q2ZGA59w.png?1760106038)

  

  

2\. Click Campaigns → Create New Campaign.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729212/original/qZh1TIvr0aynC6TjYxpxyOR70M1CIgWEcw.png?1760106080)

  

  

3\. Design your email, then click Send or Schedule.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729304/original/s5t7KdwxY_PmaHcNEyxQfrF81JlAWcC27w.png?1760106152)

  

  

4\. Choose Smart Send (the 5th delivery option). 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729345/original/KRdhrRarp_D3PYjbhjmWvZWEGFj1H0ao7w.png?1760106176)

  

  

5\. Complete the required fields and click Get Recommendation. HighLevel will display the best send time.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055730199/original/UttAfKi8QbBOrAQij5x5FcqPwL7hcIYvRw.png?1760106484)

  

  

**Tip**: You can now schedule the campaign. Once sent, review performance in Marketing → Emails → Statistics to view engagement lift. 

* * *

## **Frequently Asked Questions**

  

**Q: What if my location hasn’t sent 1,000 emails in the last 60 days?**

The Smart Send option will be greyed out. Use Simple Schedule until you meet the threshold; HighLevel will automatically enable Smart Send once enough data is available.

  

  

**Q: Can I see which contacts received the email at which time?**

Yes. The campaign’s Recipient tab shows the scheduled timestamp for each send, so you can audit delivery timing or export the data for deeper analysis.

  

  

**Q: Does Smart Send respect individual contact time-zones?**

Smart Send currently optimizes at the location level. For per-contact time-zone sending, use Workflows with Wait → Date/Time actions.

  

  

**Q: Can I override the recommendation after I click Schedule?**

Absolutely. Simply click Reschedule within the campaign before the scheduled hour, choose a new time, and save.

  

  

**Q: Will Smart Send work with A/B tests?**

Support for A/B campaigns is on the roadmap; for now, use Simple Schedule for A/B tests.

  

  

**Q: Is Smart Send available via the API?**

Not yet. API access will be announced in a future release.