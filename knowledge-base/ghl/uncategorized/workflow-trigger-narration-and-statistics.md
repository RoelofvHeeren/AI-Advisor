---
title: "Workflow Trigger Narration and Statistics"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006636-workflow-trigger-narration-and-statistics"
category: "Uncategorized"
---

# Workflow Trigger Narration and Statistics

The Trigger Statistics & Narration view provides insights into how your workflow triggers perform, helping you monitor activity and identify optimization opportunities within your automations. This guide covers two visibility upgrades for triggers in workflows: **Trigger Narration** (human-readable filter summaries right on the trigger card) and **Trigger Stats** (Attempted / Matched / Unmatched, plus contact-level reasons).

* * *

**TABLE OF CONTENTS**

-   [Key Benefits of Trigger Narration and Statistics](#Key-Benefits-of-Trigger-Narration-and-Statistics)
-   [Trigger Narration](#Trigger-Narration)
-   [Trigger Stats (Attempted / Matched / Unmatched)](#Trigger-Stats-\(Attempted-/-Matched-/-Unmatched\))
-   [Best Practices](#Best-Practices)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **Key Benefits of Trigger Narration and Statistics**

  

-   **Visibility**: See exactly which triggers are driving the most activity.  
      
    
-   **Performance Analysis:** Quickly identify top-performing or underutilized triggers.  
      
    
-   **Error Detection:** Find and fix triggers that fail to execute as expected.  
      
    
-   **Optimization**: Improve workflow efficiency using real data instead of guesswork.

* * *

## **Trigger Narration**

  

  

  

See the “why” at a glance. Every trigger shows a human-readable narration of its filters/conditions on the trigger card.

  

Each trigger card shows a simple and readable summary of its filters/conditions. This makes it easy to scan logic without opening the trigger.

  

![Trigger card narration](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057213778/original/Qwb4nQVYnobWa9CGL4tdYR2kPw0rbMkUWA.png?1761828969)

  

  

**How it works**

  

-   The narration appears below the trigger name.  
      
    
-   For complex triggers, you’ll see a compact summary with a “+X more” link.  
      
    
-   Click **Details** to open a panel with the full filter list.

  

![Details panel with full filters](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057213970/original/IEMP6SCslDVcL8gjazchaYGqYpdOtFbj7g.png?1761829066)

  

  

Narration helps during audits, handoffs, and reviews, especially in large canvases, because you no longer need to open every trigger just to recall its purpose.

* * *

## **Trigger Stats (Attempted / Matched / Unmatched)**

  

  

  

Measure what’s working in Stats View; each trigger displays Attempted, Matched, Unmatched, and lets you drill into contact-level reasons (e.g., filter mismatch, missing data).  

  

For more, refer to [Trigger Statistics for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006809-trigger-statistics-for-workflows)

  

**IMPORTANT**: Workflows are not editable in Stats view. Also, the Stats are only available for the last 30 days.

  

  

**Stats View** shows per-trigger performance inside the workflow:

  

-   **Attempted** — total contacts evaluated by the trigger  
      
    
-   **Matched** — contacts that met all conditions  
      
    
-   **Unmatched** — contacts that didn’t qualify

  

![Stats View overview](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057214348/original/_T_pcifcZQDQB-R2XpVPjjkBPEUpYYlUwA.png?1761829355)

  

  

Click any stat to open the **Trigger Stats Panel** and see:

  

-   Contact names, emails, and timestamps  
      
    
-   Match status  
      
    
-   Reason for Unmatch (e.g., value mismatch, missing field)  
      
    
-   Filters: date range, search by contact

  

  

![Stats panel list](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756117/original/vbjaab5LdUBKiw9FjdW8CNnTovGKgY6tOA.jpeg?1760135211)

  

  

![Reasons and filtering](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756114/original/mz6vp2O1ag38rkxtpnFlbGnWTarUYnHtwA.jpeg?1760135209)

  

  

**Tip**: This complements the broader workflow-level reporting available elsewhere in the app (e.g., list-level stats and communication metrics).

* * *

## **Best Practices**

  

-   Review trigger stats weekly to catch performance issues early.  
      
    
-   Use success rate metrics to monitor workflow health.  
      
    
-   Compare triggers across similar workflows to find optimization opportunities.

* * *

## **Frequently Asked Questions**

  

**Q. I don’t see narration on my trigger card.**  
Make sure the feature is enabled in Settings → Labs. If the trigger has many filters, look for the “+X more” link and click Details.

  

  

**Q. My “Unmatched” count is high—what should I check first?**  
Open the Trigger Stats Panel and review Reason for Unmatch. Common causes: wrong value, missing field, or the wrong trigger selected. Review your trigger type and filters (compare against the trigger’s reference in the triggers catalog).

  

  

**Q. Can I filter or search inside Trigger Stats?**  
Yes, use date range and search (by contact) within the stats panel.

  

  

**Q. Does this change how triggers start workflows?**  
No. Triggers and actions still follow the standard workflow model: an event (trigger) starts the flow, then actions run in sequence. Narration and Stats only add visibility; they don’t change execution.