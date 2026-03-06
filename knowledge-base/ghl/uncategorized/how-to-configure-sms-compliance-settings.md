---
title: "How to Configure SMS Compliance Settings"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004684-how-to-configure-sms-compliance-settings"
category: "Uncategorized"
---

# How to Configure SMS Compliance Settings

Learn how to configure **SMS Compliance Settings** in HighLevel so every initial SMS includes clear **sender identification** and **opt‑out instructions**, and so these compliance elements are automatically re‑inserted on a regular cadence. This guide translates the UI walkthrough into precise, numbered steps—ideal for both new and experienced users.

* * *

**TABLE OF CONTENTS**

-   [What is SMS Compliance Settings?](#What-is-SMS-Compliance-Settings?)[](#Key-Benefits-of-SMS-Compliance-Settings)
-   [Key Benefits of SMS Compliance Settings](#Key-Benefits-of-SMS-Compliance-Settings)[](#How-To-Configure-SMS-Compliance-Settings)
-   [How To Configure SMS Compliance Settings](#How-To-Configure-SMS-Compliance-Settings)[](#Tips,-Guidelines-&-Rules)
-   [Tips, Guidelines & Rules](#Tips,-Guidelines-&-Rules)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is SMS Compliance Settings?**

  

SMS Compliance Settings ensure that outbound SMS messages meet carrier and policy expectations by automatically appending **opt‑out language** (e.g., “Reply STOP to unsubscribe”) and **sender identification** (e.g., “Thanks, Alex at Main Street Dental”) when those elements are missing. Enabling these controls protects deliverability, reduces filtering risk, and supports a consistent, compliant experience.

* * *

## **Key Benefits of SMS Compliance Settings**

  

Understanding the value makes adoption easy. These benefits map directly to carrier guidelines and practical day‑to‑day messaging needs.  
  

-   **Compliance-by-default**: Automatically appends sender ID and opt‑out language to the first message when missing.  
      
    
-   **Reduced carrier filtering**: Adds the elements carriers expect, lowering the chance of messages being blocked.  
      
    
-   **Brand clarity**: **Sender identification** helps recipients recognize who is texting them, improving trust and reply rates.  
      
    
-   **Automated cadence**: Every‑X‑days control re‑inserts sender ID + opt‑out on a schedule (e.g., every 30 days) to maintain ongoing compliance.  
      
    
-   **De‑duplication**: Prevents duplicate opt‑out text when you already include it in your message template.
    

* * *

## **How To Configure SMS Compliance Settings**

  

Follow these steps to configure opt‑out language, sender identification, and the recurring cadence so your messages stay compliant and deliver reliably.

  

1.  Login to your sub‑account. 
    
2.  From the left menu, click on the **Settings** button.  
      
    ![](https://jumpshare.com/share/K3fdA2BT8KlKgJ2EzeWX+/Screen+Shot+2025-09-23+at+7.31.34+PM.png)  
    
      
    
3.  Click on the **Phone Numbers** tab.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802556/original/sqNO1OzR2Ek3kFKJHsoPV7XpgGN-AptK_Q.png?1767377093)
    
      
      
    
4.  Click on **Messaging** from the top menu-bar.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802599/original/RyT_cLfF57VpybC6IAjZQZ6a1iqSkdyoyQ.png?1767377159)  
      
    
5.  Toggle **Make SMS compliant by adding an opt‑out message** to **ON**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802606/original/01V3P84leq1DWtPdeiZ0VdYuF3Hd3eysAg.png?1767377209)  
      
    
6.  Click on the **Customize** button to edit the opt-out text.  
      
    ![](https://jumpshare.com/share/HuXKcWb6RjGGRUgdo2w0+/GIF+Recording+2025-09-23+at+7.43.16+PM.gif)  
      
    
7.  Toggle **Make SMS compliant by adding sender information** to **ON**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802644/original/b7WWvEmaaSWsKFMrXQIZz9GRYacyWrmyNw.png?1767377277)  
      
    
8.  Toggle **Enable periodic opt-out & sender info** to ON. This controls whether the system re-inserts sender info and opt-out language in ongoing conversations on a recurring schedule.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063989629/original/gvxLjON4-y9V-ZJ8gZNtLFvk_Np7LMDguQ.jpeg?1770037661)
9.  In **Include sender ID and opt-out message every \[1–60\] days**, enter a value between **1 and 60**. On or after the interval, the next outbound message to a contact gets the compliance lines re-inserted if missing.  
      
    
10.  Click on the **Customize** button to edit the sender information.
11.  Click Save.  
       
     **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063989771/original/comzp7Vtr5_iPzp-RcaKAUKzNzXXfHerkA.jpeg?1770037718)**

* * *

## **Tips, Guidelines & Rules**

  

-   The first message in any SMS conversation (including **Missed Call Text Back** and **review requests**) will always include both of the following. Example: _“Reply STOP to unsubscribe.”_  
      
    
-   The **Opt Out** message will only be added if it is not already included in the message.  
      
    
-   **Agencies in Trial Mode** cannot disable these checkboxes.  
      
    
-   **Locations/sub-accounts** created within the last **15 days** cannot disable these checkboxes.  
      
    
-   **Account Users and Admins** cannot disable these checkboxes.  
      
    
-   Strong, simple wording improves deliverability and avoids content that may be flagged by carriers.\*  
      
    
-   Sender ID examples: _“Thanks, Jamie at Oak & Co.”_ or _“—Team Acme Fitness.”_  
      
    
-   Avoid spammy formatting, excessive emojis, URL shorteners, and vague brand references.
    

###   
**Defaults & Behavior**  

-   **New sub-accounts:** Enabled by default.  
      
    
-   **Existing sub-accounts:** Disabled by default.  
      
    
-   **First outbound message:** Sender info and opt-out language are always included on the first outbound message in a conversation, even if periodic insertion is disabled.
    

###   
**Smart detection (opt-out suppression)**  
  

-   The system suppresses re-insertion only when it detects a **full opt-out phrase** in your message (for example, an unsubscribe instruction), not when it sees a single keyword in normal context.  
      
    
-   Single words like “stop” inside regular sentences do **not** prevent sender info/opt-out insertion.  
    Examples of phrases that should suppress insertion (if already present):  
      
    
-   “Reply STOP to unsubscribe.”  
      
    
-   “Text STOP to opt out.”  
      
    
-   “Reply STOP to end.”  
      
    Non-suppression example: “If this time doesn’t work, stop by tomorrow.”
    

* * *

## **Frequently Asked Questions**

  

**Q: Can I disable sender ID or opt‑out language?**  
If you’re in trial mode, managing a location less than 15 days old, or have restricted user permissions, you may not be able to disable these options. HighLevel recommends keeping them enabled to maintain compliance.

  

**Q: What happens if my message already has opt‑out language?**  
A: HighLevel won’t add duplicate opt‑out text; it only appends the required line if it’s missing.

  

**Q: How do I customize the opt‑out or sender text?**  
A: Edit the text fields next to each control (or click **Customize**, if shown) in the SMS Compliance tab. Use clear, concise wording (e.g., “Reply STOP to unsubscribe.”).

  

**Q: What words are carrier compliant for out-out message?**

STOP, STOPALL, CANCEL, UNSUBSCRIBE, END, or QUIT.

* * *

## **Related Articles**

  

-   [How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)  
      
    
-   [Best Practices for SMS deliverability and Avoiding SMS Restrictions](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions)  
      
    
-   [LC – Phone Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941-lc-phone-messaging-policy)  
      
    
-   [Phone System Messaging Analytics Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000002625) 
    
-   [Troubleshooting SMS Delivery](https://help.gohighlevel.com/en/support/solutions/articles/48000981696) 
    
-   [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/en/support/solutions/articles/48001208912)