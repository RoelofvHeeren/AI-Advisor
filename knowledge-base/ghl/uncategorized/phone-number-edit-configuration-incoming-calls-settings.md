---
title: "Phone Number Edit Configuration (Incoming Calls Settings)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006881-phone-number-edit-configuration-incoming-calls-settings-"
category: "Uncategorized"
---

# Phone Number Edit Configuration (Incoming Calls Settings)

The **Incoming Call Settings** interface centralizes all routing, ringing, voicemail, and backup behaviors for inbound calls into a single configuration view. With the latest enhancement, HighLevel now provides **guidance for setting a healthy Incoming Call Timeout**, helping ensure calls reach your CRM voicemail instead of carrier voicemail and improving call status accuracy.

* * *

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [What Is Edit Configuration (Incoming Call Settings)?](#What-Is-Edit-Configuration-\(Incoming-Call-Settings\)?)
-   [Key Benefits of Incoming Call Settings](#Key-Benefits-of-Incoming-Call-Settings%E2%80%8B)
-   [Access Phone Number Edit Configuration](#Access-Phone-Number-Edit-Configuration)
-   [Basic Details](#Basic-Details)
-   [Call Forwarding Tab](#Call-Forwarding-Tab)
-   [Calls Go To (Priority Order)](#Calls-Go-To-\(Priority-Order\)%E2%80%8B)
-   [Ring More Team Members](#Ring-More-Team-Members%E2%80%8B)
-   [Incoming Call Timeout (New Guidance)](#Incoming-Call-Timeout-\(New-Guidance\))
-   [Recommended Timeout Range](#Recommended-Timeout-Range)[](#Backup-Behavior)
-   [Backup Behavior](#Backup-Behavior)[](#Understanding-Call-Flow-Priority%E2%80%8B)
-   [Understanding Call-Flow Priority](#Understanding-Call-Flow-Priority%E2%80%8B)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

## **Overview**

  

The Incoming Call Settings interface puts every factor that can route, intercept, or redirect an inbound call into one consolidated view. This includes call forwarding, team member ringing, IVR, Voice AI, voicemail, and timeout behavior.

  

By visualizing call-flow priority and surfacing best-practice guidance, this screen makes it easier to diagnose call-flow issues, avoid misconfiguration, and ensure calls are handled correctly.

* * *

## **What Is Edit Configuration (Incoming Call Settings)?**

  

This interface consolidates all inbound call routing logic into a single, easy-to-read window. Each section shows:  
  

-   Whether a routing option is enabled  
      
    
-   Which user, number, or system is responsible  
      
    
-   The priority order in which the system evaluates call destinations
    

  

This eliminates guesswork when calls do not ring or route as expected.

* * *

## **Key Benefits of Incoming Call Settings**  
  

-   **Full transparency** – See exactly which rule answers first, second, and third  
      
    
-   **Inline editing** – Update most settings without leaving the page  
      
    
-   **Clear priority order** – Understand how the system evaluates routes  
      
    
-   **Faster troubleshooting** – Quickly identify misconfigured timeouts or users  
      
    
-   **Improved call handling** – Reduce missed calls and routing errors
    

* * *

## **Access Phone Number Edit Configuration**

  

To open Incoming Call Settings:  
  

1.  Go to **Settings → Phone Numbers**  
      
    
2.  Open the **Phone Numbers** tab  
      
    
3.  Click the **three-dot menu** next to a phone number  
      
    
4.  Select **Edit Configuration**
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214866/original/gr_BcIaxLmpUKEs341FRACYL6lQM9VCwYw.jpeg?1770236884)

* * *

## **Basic Details**

  

On the **Basic Details** tab, you can configure:  
  

-   **Friendly Name** – Rename the phone number  
      
    
-   **Calls Go To** – Select the primary team member  
      
    
-   **Ring Options** – Choose where calls ring simultaneously:  
      
    
    -   Web App  
          
        
    -   Mobile App  
          
        
    -   Phone Number  
          
        
    -   VoIP Deskphone  
          
        
-   **Call Recording**
    
    -   Enable or disable recording  
          
        
    -   Play a recording disclosure message
        

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214874/original/ovnJ2z2iR_tB-wPOo_EWfO_uIJdePvX2yw.png?1770236898)

* * *

## **Call Forwarding Tab**

  

The **Call Forwarding** tab controls how calls route when they are not answered immediately.

  

### **Calls Go To (Priority Order)**  
  

-   **IVR** – Routes calls based on workflow or menu input  
      
    
-   **Team Member (1st Priority)**  
      
    
-   **External Phone Number (2nd Priority)**  
      
    
-   **Voice AI (3rd Priority)**
    

  

Only one destination rings at a time, based on priority.

  

### **Ring More Team Members**  
  

-   Enable to ring up to **6 additional users**  
      
    
-   Device icons indicate which devices each user has enabled
    

* * *

## **Incoming Call Timeout (New Guidance)**

  

Incoming Call Timeout controls **how long a call rings before moving to a backup destination** (Voice AI or Voicemail).

  

### **Recommended Timeout Range**

  

HighLevel now provides guidance when this value is outside a healthy range:  
  

-   **Too high (above ~20 seconds)**  
      
    
    -   Calls may go to the **carrier voicemail** instead of CRM voicemail  
          
          
        
    -   Call status may be marked as **“Completed”** instead of **“Voicemail”**  
          
        
-   **Too low (below ~15 seconds)**  
      
    
    -   Calls may ring too briefly or fail to connect  
          
          
        
    -   Callers may not have enough time to answer  
          
          
        
-   **Recommended:** **~20 seconds**
    

  

When a value outside the recommended range is entered, a **warning message** appears to help you choose a healthier duration.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214884/original/45JX6qVuEXUbp-EZxDcpm-1w3sSX8rWzgw.png?1770236921)

  

> **Note:** This is guidance only. You can still save values outside the range, but doing so may impact voicemail routing and call status accuracy.

* * *

## **Backup Behavior**

  

When the Incoming Call Timeout is reached, calls route to a backup destination:  
  

-   **Voice AI** – Sends the call to an AI agent  
      
    
-   **Voicemail** – Sends the call to CRM voicemail
    

  

Selecting a healthy timeout ensures calls reach CRM voicemail instead of a carrier voicemail system.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214892/original/S0QLDr-aqPrHzaLAl-v_59BiHisgBLg8gQ.jpeg?1770236939)

* * *

## **Understanding Call-Flow Priority**  
  

The system evaluates inbound call routing in a fixed order:  
  

1.  Workflow, IVR, or automation attached to the number  
      
    
2.  User assigned directly to the phone number  
      
    
3.  User assigned to the contact record  
      
    
4.  Ring Incoming Call to Multiple Users (Ring-All)  
      
    
5.  Forwarding number
    

  

Only the **highest available priority** rings. Lower priorities are skipped once a call is answered or routed.

* * *

## **Frequently Asked Questions**

  

**Q: Who can access Incoming Call Settings?**

Any user with permission to manage Phone Numbers.

  

**Q: Does the new timeout guidance change my call logic automatically?**

No. It only displays recommendations. Your configuration is not enforced or overridden.

  

**Q: Why were some calls previously marked “Completed” instead of “Voicemail”?**

If a timeout was too high, calls could reach a carrier voicemail instead of CRM voicemail, causing incorrect status.

  

**Q: Does this affect outgoing calls?**

No. Outgoing Call Timeout is configured separately and is not impacted by this guidance.

  

**Q: Can I still use very high or low timeout values?**

Yes, but it is not recommended due to routing and status accuracy issues.

* * *

## **Related Articles**  
  

-   [Ring Incoming Call to Multiple Users](https://help.gohighlevel.com/en/support/solutions/articles/155000002850)
    

##