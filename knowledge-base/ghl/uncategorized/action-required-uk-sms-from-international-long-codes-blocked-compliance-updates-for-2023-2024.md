---
title: "Action Required: UK SMS from International Long Codes Blocked — Compliance Updates for 2023 & 2024"
url: "https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024"
category: "Uncategorized"
---

# Action Required: UK SMS from International Long Codes Blocked — Compliance Updates for 2023 & 2024

### **Overview**

  

If you send SMS messages to UK mobile numbers, your deliverability and compliance are at risk unless you update your sender types. Starting **June 1, 2023**, UK carriers began **blocking international long codes** for Application-to-Person (A2P) traffic. In **2024**, further regulatory requirements have been introduced for **UK long codes themselves**.

  

* * *

  
  

## **What Changed in 2023**

-   **Carrier Blocking of International Long Codes**  
    From June 1, 2023, UK network operators started blocking SMS from **non-UK long codes**. These numbers were originally designed for Person-to-Person (P2P) use, but many businesses were using them for A2P traffic, which carriers now classify as **abuse of P2P routes**.
    
-   **Impact**: Any SMS sent to UK recipients from an international long code is likely to fail.  
      
    

* * *

## **What’s Changing in 2024**

Twilio and UK regulators have layered on stricter compliance requirements:

1.  **Regulatory Compliance Bundles (RC bundles)**
    
    -   From **May 27, 2024**, all new UK long codes require an **approved RC bundle** before they can send SMS or make calls.
        
    -   From **September 30, 2024**, _all_ UK long codes (new or old) must have an approved RC bundle.
        
2.  **Know Your Customer (KYC)**  
    Businesses must provide documentation to verify their identity and intended use case before using UK long codes.
    
3.  **Full Enforcement of Blocking**  
    By mid-2024, all UK carriers had aligned to enforce these rules. Traffic from international long codes is universally blocked, and unregistered UK long codes will also fail.
    

* * *

## **What You Need to Do**

### Step 1. Stop Using International Long Codes

-   If you are still sending SMS from non-UK numbers to UK recipients, switch immediately.
    

### Step 2. Use Approved Sender Types

-   **UK Long Code (Local Number)** — Requires KYC and regulatory approval.
    
-   **Alphanumeric Sender ID** — For one-way traffic, brand your sender name (e.g., _YourCompany_).
    
-   **Short Code** — For higher-volume or two-way messaging, apply for a UK short code (12–16 weeks provisioning).
    

### Step 3. Register Your Numbers

-   Submit your **Regulatory Compliance (RC) bundle** in Twilio Console.
    
-   Provide the necessary KYC documents (business name, address, use case, etc.).
    

### Step 4. Monitor Message Logs

-   In Twilio Console, use **Messaging Insights** to filter:
    
    -   “From Country ≠ UK” and “To Country = UK” → find non-compliant traffic.
        
-   Look for blocked or undelivered messages and update routing.
    

  

  

* * *

## **How to Buy a UK Number in Twilio**

1.  Go to: **Console → Develop → Phone Numbers → Buy a number**
    
2.  Set **Country = UK**
    
3.  Un-check **Voice** (if you want SMS-only)
    
4.  Select an SMS-capable number and complete RC bundle submission
    

  
  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299015946/original/61Ie-dgMkMb4zuvGSYnz5jXrUZU-xe2wRw.png?1684910844)  

  

  

* * *

## **Timeline Recap**

-   **June 1, 2023** → UK carriers begin blocking international long codes.
    
-   **May 27, 2024** → New UK long codes require RC approval.
    
-   **July 30, 2024** → Full carrier enforcement across all networks.
    
-   **September 30, 2024** → All UK long codes (new + existing) must have RC approval.  
      
      
    

* * *

## **Key Takeaways**

-   International long codes **cannot** be used for UK SMS.
    
-   All UK long codes now require **KYC and regulatory compliance**.
    
-   Alphanumeric Sender IDs and short codes remain valid alternatives.
    
-   Act now to avoid message failures and regulatory issues.