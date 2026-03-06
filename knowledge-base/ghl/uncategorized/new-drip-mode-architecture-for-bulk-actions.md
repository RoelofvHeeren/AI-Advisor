---
title: "New Drip Mode Architecture for Bulk Actions"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006472-new-drip-mode-architecture-for-bulk-actions"
category: "Uncategorized"
---

# New Drip Mode Architecture for Bulk Actions

Easily pace your high-volume outreach with HighLevel’s improved Drip Mode for Bulk Actions. The new architecture delivers rock-solid reliability, supports schedules longer than 30 days, and works consistently across every bulk action type so you can engage contacts at scale without fear of stalls or overload.

* * *

# **What is Drip Mode for Bulk Actions?**

  

Drip Mode lets you send messages or apply updates to large contact lists in timed batches rather than all at once. By spacing execution into repeatable intervals (minutes, hours, or days), you avoid carrier throttling, protect sender reputation, and ensure servers stay responsive.

  

HighLevel’s September 2025 release replaces the legacy engine with a modular, configuration-driven architecture that powers every Drip Mode bulk action—from bulk SMS and email to workflow steps—with the same reliable core.

* * *

## **Key Benefits of the New Architecture**

The latest release introduces several user-requested improvements:

  

-   Handles long sequences efficiently, even hundreds of thousands of contacts.

  

-   Improved checkpointing prevents actions from getting “stuck” mid-send.

  

-   Supports schedules well beyond the previous 30-day cap.

  

-   Reusable, config-driven engine delivers identical behavior for all Drip Mode use cases (SMS, email, contact updates, workflow steps, etc.).

  

-   Reduced duplication in code means faster future enhancements and fewer bugs.

* * *

## **Checkpointing & Automatic Recovery**

  

Robust checkpoint logic now records progress after every batch. If your sub-account disconnects, a phone pool rotates, or the app restarts, the engine resumes exactly where it left off—eliminating manual restarts and lost sends. This protects deliverability metrics and saves valuable time.

* * *

## **Beyond 30 Days Scheduling**

Need to drip messages for an eight-week course or a 12-week challenge? Previously, Bulk Actions could not be scheduled more than 720 hours (≈30 days) ahead.

  

With the new engine, you can specify any future date—ideal for semester-long nurture series, recurring donation drives, or extended retention campaigns.

* * *

## **Configuration Parameters**

  

The same simple form you already use now feeds a universal engine:

-   Start On – first batch date/time
    

  

-   Batch Quantity – contacts per run (1–10,000)
    

  

-   Repeat After – interval (minutes, hours, days)
    

  

-   Send On – select days of week
    

  

-   Process Between – allowable send hours (respects account time-zone)  
      
    
-   End At – daily cutoff time
    

* * *

## **Supported Bulk Action Types**

The modular design means every bulk action that offered Drip Mode now shares the same scheduler:

  

-   Bulk SMS & MMS
    

  

-   Bulk Email
    

  

-   Add/Remove Contact Tags
    

  

-   Add to Workflow / Campaign
    

  

-   Opportunity updates (status, pipeline, owner)
    

  

-   Custom ‘Action – Drip’ steps inside Workflows
    

* * *

## **How To Set Up Drip Mode in Bulk Actions**

  

  

Setting up Drip Mode is straightforward, but taking a few extra minutes to configure it correctly ensures your outreach runs smoothly.

  

1.  **Navigate to Contacts**
    
    -   Go to **Contacts.** This opens the setup screen where you’ll define what action to perform and how it should be paced.
        
2.  **Choose the Action Type**
    
    -   Select what you want to do in bulk for example, **Send SMS**, **Send Email**, or **Add Tag**. The action type determines the outcome of your campaign.
        
3.  **Select Your Audience**
    
    -   Pick the group of contacts you want to target. You can use an existing **SmartList** or manually select contacts. The size of this audience will determine how many batches Drip Mode needs to run.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055003744/original/DRon1ceL6n-c2OZ1z2g9rQD8mTxSL0y1aA.png?1759318989)  
          
        
4.  **Set the Delivery Method**
    
    -   Under **Delivery Method**, choose **Send in Drip Mode**. This tells the system to deliver your action gradually in batches, rather than all at once.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055003797/original/PVkJyNwbUSbAqgyeE1bo40UHnta5sIJAOQ.png?1759319029)  
          
          
        
5.  **Configure Your Drip Settings**  
    Here’s where you control the pacing and schedule:
    
    -   **Start On**: Pick the date and time you want the first batch to begin.
        
    -   **Batch Quantity**: Decide how many contacts should be processed in each run (anywhere from 1 to 10,000).
        
    -   **Repeat After**: Choose how long the system should wait before sending the next batch (minutes, hours, or days).
        
    -   **Optional – Send On**: Restrict delivery to certain weekdays if needed (e.g., only Monday–Friday).
        
    -   **Process Between**: Set business hours or quiet hours so messages only go out at appropriate times.
        
    -   **End At**: Define a daily cutoff time, ensuring drips stop at the end of the workday and resume the next valid window.
        
6.  **Add an Action Description**
    
    -   Enter a short label (e.g., _“Drip SMS – July Webinar Invite”_) so you and your team can quickly recognize the campaign in reports later.
        
7.  **Review Estimated Duration**
    
    -   Based on your audience size, batch size, and intervals, the system will calculate how long the action will take to complete. Double-check this estimate to confirm the timing fits your campaign goals.
        

* * *

## **Frequently Asked Questions** 

**Q: Will existing drip actions automatically use the new engine?**

Yes. All queued or paused actions migrate seamlessly; no manual changes required.

  

**Q: What happens if I change the batch size after a drip has started?**

Edits are supported. The next unprocessed batch will honor your new quantity while preserving already-sent batches.

  

**Q: Is there a maximum total duration?**

No hard limit. Campaigns can drip for months or even years thanks to the upgraded scheduler.

  

**Q: Can I pause and resume a drip campaign?**

Absolutely. Use Contacts ➜ Bulk Actions ➜ ⋯ menu ➜ Pause. When resumed, the system continues from the last completed checkpoint.

  

**Q: Do rate limits still apply?**

Carrier-level and platform safety limits remain (e.g., 1,000 SMS/min at 1-min frequency). The engine now enforces them more consistently.

  

**Q: Is Workflow “Action – Drip” different from Bulk Action Drip Mode?**

Both now leverage the same backend logic, so behavior (batch size, interval, recovery) is identical—only the UI context differs.

  

**Q: Will my workflow histories show each batch?**

Yes. Each processed batch appears as a distinct execution in Workflow History for easy auditing.

**Q: Does Drip Mode respect quiet hours and DND settings?**

Messages scheduled outside the allowed “process between” window or to DND contacts are automatically deferred to the next valid batch.

* * *

## **Related Articles**

-   Bulk Actions for Contacts & SmartLists
    
-   Sending Bulk SMS via Contacts
    
-   Workflow Action – Drip
    
-   Action – Drip
    
-   How to Manage SaaS Sub-Accounts in Bulk