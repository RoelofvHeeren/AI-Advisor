---
title: "Understanding LeadConnector Inbound Call Rate Limits"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits"
category: "Uncategorized"
---

# Understanding LeadConnector Inbound Call Rate Limits

To maintain the reliability and performance of our voice infrastructure, LeadConnector enforces inbound call rate limits across different types of phone numbers. These safeguards are essential to prevent spam, abuse, and system overloads, ensuring a high-quality experience for all users.  
  

This article outlines how rate limits work for **IVR-connected numbers**, **Voice AI-connected numbers**, and **regular numbers**.

##   

### 1\. **IVR-Connected Numbers**

-   **No restrictions apply.**
    
-   These numbers are designed to handle high volumes and are not subject to inbound call rate limiting.
    

* * *

### 2\. **Voice AI-Connected Numbers**

Voice AI numbers are designed for intelligent call handling through automation. Due to their potential for high concurrency, they are subject to stricter rate controls.

#### ? Violations and Limits:

| Condition | Threshold | Result |
| --- | --- | --- |
| **From a number:** | \>200 calls per minute | 1 violation (current call is blocked) |
| **To a number:** | \>200 calls per minute | 1 violation (current call is blocked) |
| **Violation cap:** | \>5 violations per hour | All inbound calls for the account are blocked |

* * *

### 3\. **Regular Numbers**

Standard phone numbers (not connected to IVR or Voice AI) have more conservative rate limits to avoid potential misuse or system degradation.

#### ? Violations and Limits:

| Condition | Threshold | Result |
| --- | --- | --- |
| **From a number:** | \>10 calls per minute | 1 violation (current call is blocked) |
| **To a number:** | \>15 calls per minute | 1 violation (current call is blocked) |
| **Violation cap:** | \>5 violations per hour | All inbound calls for the account are blocked |

  
  
  

## **What Happens When the Violation Cap is Reached?**

If your account incurs more than 5 violations within an hour, all inbound calls will be permanently blocked for both Voice AI and regular numbers. To restore access, P**lease contact GHL support for assistance**.  
  
  

## **Best Practices to Avoid Rate Limits**

-   **Use IVR for High Volume**: If you anticipate heavy inbound traffic, connect your numbers to an IVR system where possible.
    
-   **Distribute Call Volume**: Avoid routing excessive traffic through a single number. Use multiple numbers to balance load.