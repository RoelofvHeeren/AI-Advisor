---
title: "How to Restore a Deleted Phone Number"
url: "https://help.gohighlevel.com/support/solutions/articles/48001232056-how-to-restore-a-deleted-phone-number"
category: "Uncategorized"
---

# How to Restore a Deleted Phone Number

If you've accidentally deleted a Twilio number, there's still a chance to restore it within a specific time frame. The process varies depending on whether you're using LC Phone (LeadConnector-hosted) or your own Twilio account. This guide outlines the steps and considerations for restoring a deleted phone number.

* * *

**TABLE OF CONTENTS**

-   [Key Benefits of Restoring a Deleted Phone Number](#Key-Benefits-of-Restoring-a-Deleted-Phone-Number)
-   [Phone Number Restoration Rules and Reminders](#Phone-Number-Restoration-Rules-and-Reminders%C2%A0) 
-   [If You're Using LC Phone (LeadConnector)](#If-You're-Using-LC-Phone-\(LeadConnector\))
-   [If You're Using Your Own Twilio Account](#If-You're-Using-Your-Own-Twilio-Account)
    -   [Step 1: Log in to the Twilio Console](#Step-1%3A%C2%A0Log-in-to-the%C2%A0Twilio-Console)
    -   [Step 2: Find the Twilio SID](#Step-2%3A%C2%A0Find-the-Twilio-SID)
    -   [Step 3: Copy the Account SID](#Step-3%3A%C2%A0Copy-the-Account-SID)
    -   [Step 4: Navigate to Released Numbers in Twilio Console](#Step-4%3A%C2%A0Navigate-to-Released-Numbers-in-Twilio-Console)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **Key Benefits of Restoring a Deleted Phone Number**

-   **Preserve Customer Trust** – Avoid confusing customers who still have the number saved.  
      
    
-   **Maintain Marketing Consistency** – Reuse numbers already featured in ads, landing pages, and printed materials.  
      
    
-   **Prevent Missed Leads** – Ensure ongoing calls and texts continue without interruption.  
      
    
-   **Avoid Costly Transitions** – Save time and effort versus setting up a new number and reconfiguring workflows.  
      
    
-   **Retain Caller ID History** – Keep your reputation intact with your existing contact and SMS history.
    

* * *

## **Phone Number Restoration Rules and Reminders** 

  

-   **10-Day Window**: You have **10 days** from the deletion date to restore a number. After that, the number is no longer available.  
      
    
-   **Immediate Billing**: Twilio may charge you immediately upon restoring the number.  
      
    
-   If the number is no longer available, **restoration may not be possible.**  
      
    
-   Restoring a number **won’t automatically restore** any webhook or call routing configurations.  
      
    

-   **Twilio holds deleted numbers for 10 days.** After that period, you must contact **Twilio Support** directly to request restoration.  
      
    
-   **Restoration charges may apply** once the number is recovered.
    

* * *

## **If You're Using LC Phone (LeadConnector)**

  

If your number was deleted from a **HighLevel sub-account using LC Phone (LeadConnector-hosted numbers)**, our support team may be able to restore it, **but only within 10 days** of deletion. LC Phone numbers are managed by HighLevel, so you must reach out to our support team with the correct **Location ID** where the number was assigned. Our team will check if the number is still available and attempt restoration on your behalf.

  

-   **Contact HighLevel Support** directly via the support chat and include the **Location ID** of the sub-account where the number should be restored.  
      
    
-   Our support team will assist you in restoring the number internally.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046032623/original/kGK3w-QWsllxiXq5FY0OAowiJZQedg3F7Q.gif?1746194333)

* * *

## **If You're Using Your Own Twilio Account**

  

If you're using your **own Twilio account** (not LC Phone), you can attempt to restore the number directly from the Twilio Console, within 10 days of deletion. Twilio temporarily holds released numbers in your account under the “Released Numbers” section. You’ll need to locate the correct sub-account where the number was originally assigned and then manually repurchase it. If the number no longer appears, you’ll need to contact Twilio Support for assistance with recovery.

  

### **Step 1:** Log in to the Twilio Console

  

 Navigate to your Sub-Account, click on your account name.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046033472/original/OsAMVfdE3xoi71alM_CNhIt0fUWuWqmKAg.gif?1746195040)

  

  

### **Step 2:** Find the Twilio SID

  

If there are too many subaccounts inside Twilio, you can go back to HL and copy the Account SID for that location to search in Twilio. Go to your **Agency View** in GoHighLevel, navigate to **Settings → Phone Integration → Subaccount Settings** to find the Subaccount.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046320248/original/4h3AjdxYFQn_GxLNAcylGYWvFSXlUrnEEA.png?1746704591)

  

  

### **Step 3:** Copy the Account SID

  

Click on the 3 dots and Update Credentials and copy the **Account SID** for the sub-account. Use the SID to filter sub-accounts in Twilio.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046320445/original/NmMPnkB0lOJLNpQnHzb0z7wp6qPs3U7nCQ.png?1746704753)

  

  

### **Step 4:** Navigate to Released Numbers in Twilio Console

  

In the left navigation menu, expand the **Phone Numbers** tab to get the **Manage** section. Here, click on the **Released Numbers Tab** to find the previously deleted phone number.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046321066/original/6yUlpWUmc_8nsSz6r7XWBqpTaJC__HX4TA.gif?1746705250)

  

  

**Please Note:** To **Restore the Number,** click Repurchase next to the number (if it’s still available).Twilio will begin charging the monthly fee upon repurchase.  
If you **Can’t Find the Phone Number**, contact Twilio Support with your Account SID and number details.

* * *

## **Frequently Asked Questions**

  

**Q: How long do I have to restore a deleted Twilio number?**

You have up to 10 days from the deletion date to restore the number. After that, Twilio may permanently release it.

  

  

**Q: What happens if someone else claims my old number?**

Unfortunately, if the number has been reassigned, it cannot be restored.

  

  

**Q: Will I be billed again after restoring the number?**

Yes, Twilio will start charging the standard monthly fee upon repurchase.

  

  

**Q: Can I restore a number if I'm using LC Phone (LeadConnector)?**

Yes, but you'll need to contact GoHighLevel support with the Location ID to initiate the restoration.

  

  

**Q: Are old workflows or call settings automatically restored?**

No. You’ll need to reconfigure call routing, webhooks, and automations after restoring the number.

* * *

## **Related Articles**

-   [Moving US Numbers from Twilio to LeadConnector (LC)](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48001240108-moving-us-numbers-from-twilio-to-leadconnector-lc-)
-   [Overview of Phone Number Configuration Options](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48001229976-overview-of-phone-number-configuration-options)