---
title: "Troubleshooting Workflow Executions - Race Conditions"
url: "https://help.gohighlevel.com/support/solutions/articles/48001218068-troubleshooting-workflow-executions-race-conditions"
category: "Uncategorized"
---

# Troubleshooting Workflow Executions - Race Conditions

A Race Condition is when two (or more) updates happen at the same time (in the same second). The two changes "race" and they might execute in a different order than they should, or one might signal that it executed but it really didn't.

* * *

**TABLE OF CONTENTS**  
  

-   [Open the exact execution via the message deep link](#Open-the-exact-execution-via-the-message-deep-link)[](#Example-Race-Condition%3A-Add-Tag-Executed-But-Not-Added)
-   [Example Race Condition: Add Tag Executed But Not Added](#Example-Race-Condition%3A-Add-Tag-Executed-But-Not-Added)[](#How-To-Prevent-a-Race-Condition)
-   [How To Prevent a Race Condition](#How-To-Prevent-a-Race-Condition)

* * *

## **Open the exact execution via the message deep link  
**  

Opening the execution directly from the impacted message ensures you’re reviewing the correct run, contact, and timestamp before diagnosing timing issues.

  
**Steps:**  
  

1.  Go to **Conversations** and open the conversation with the impacted message.  
      
    
2.  Open **message details** for the message.  
      
    
3.  Click **Workflow** (deep link) to open **Execution Details** with context loaded.  
      
    
4.  Review the **timestamps** and **action order** to confirm whether multiple actions fired in the same second.  
      
    

**Fallback:**  
  
If the Workflow link is not available in message details, open the execution from logs:  
  

-   **Workflows → open workflow → Logs**, then filter/search by **contact** and the **time window** around the message.  
    

* * *

## **Example Race Condition: Add Tag Executed But Not Added**

  

In this example, we can see that the tag was added successfully to this contact in the workflow execution logs.

  

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237097817/original/pPEyoJgImK3T2gGbzJKB67cfk97rECsmrQ.png?1657131948)

  

However, when we check the contact record, there is no sign of the tag.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237098616/original/QV-c-v9lQ1vmsqrWFtQJxnTd9FnvBUttZQ.png?1657132211)

  

Lets go back to the execution log and pay attention to the time. The "Add to workflow" and "Add Tag" action fired at the same time within the exact same second, which is a race condition.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48237097905/original/PtKVYprrQGKLzBww-ZXcYyVETqRuSFn5pg.png?1657131977)

* * *

* * *

## **How To Prevent a Race Condition**

  

To fix the race condition, just add a Wait action of 1 minute.   
  

[https://www.loom.com/share/f4adf9e14dab429da0cc2fedbb7e5e36](https://www.loom.com/share/f4adf9e14dab429da0cc2fedbb7e5e36)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771738/original/aZsqCC0OAIfQkSQqUbLor31c9DWXbFaYeg.png?1733350591)

  

With a Wait 1 minute action, there is no chance of the race condition occurring.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037771768/original/dfxKTUGbzhTGDHHNdPEUqtvKhpVqmyF86A.png?1733350650)