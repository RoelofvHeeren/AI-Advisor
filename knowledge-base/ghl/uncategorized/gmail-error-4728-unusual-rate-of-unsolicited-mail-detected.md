---
title: "Gmail Error: 4.7.28 – Unusual Rate of Unsolicited Mail Detected"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007275-gmail-error-4-7-28-unusual-rate-of-unsolicited-mail-detected"
category: "Uncategorized"
---

# Gmail Error: 4.7.28 – Unusual Rate of Unsolicited Mail Detected

## **What does this error mean?**

If you see the error below while sending emails to Gmail recipients, it means Gmail has **temporarily limited** emails from your sending IP due to unusual sending behavior:

> **4.7.28 Gmail has detected an unusual rate of unsolicited mail originating from your IP**

This is **not a permanent block or blacklist**. Gmail uses automated systems to protect its users from spam. When it detects a **sudden spike in email volume** or patterns that look unusual, it may temporarily slow down or defer emails from that IP to prevent potential abuse.  
  
  

## **Is my IP blocked?**

No.  
This error indicates a **temporary rate limit**, not a permanent IP block.

-   The `4.x.x` error code means Gmail is **deferring emails**, not rejecting them.
    
-   Once sending behavior improves, Gmail usually **automatically removes the restriction**.
    
-   No manual delisting request is required.
    

  
  

## **Why did this happen?**

This error commonly occurs due to one or more of the following reasons:

-   A **sudden increase in sending volume**, especially to Gmail addresses
    
-   Sending from a **new or recently warmed IP**
    
-   Campaigns sent to **inactive or unengaged contacts**
    
-   Workflow or automation sending emails too frequently
    
-   Higher-than-normal **spam complaints or low engagement**
    
-   Email authentication issues (SPF, DKIM, or DMARC misalignment)
    

Even legitimate senders can trigger this if email volume increases too quickly.  
  

## **How to fix this issue**

### 1\. Reduce sending volume to Gmail

-   Temporarily lower the number of emails sent to `@gmail.com` and `@googlemail.com` addresses
    
-   Gradually increase volume over time instead of sending large bursts
    

### 2\. Send only to engaged contacts

-   Focus on users who have recently opened or interacted with your emails
    
-   Avoid sending to old, inactive, or purchased lists
    

### 3\. Review automations and workflows

-   Check for workflows that may be sending emails repeatedly or too frequently
    
-   Pause or adjust any campaigns that caused a sudden spike
    

  
  

## **How long does recovery take?**

In most cases, Gmail lifts the rate limit **within 24–72 hours** once sending behavior stabilizes. Continued good sending practices help restore normal delivery faster.  
  
  
The `4.7.28` error is a **temporary Gmail protection mechanism**, not a permanent block. By slowing down email volume, sending to engaged users, and following Gmail’s bulk sender best practices, email delivery will recover naturally.