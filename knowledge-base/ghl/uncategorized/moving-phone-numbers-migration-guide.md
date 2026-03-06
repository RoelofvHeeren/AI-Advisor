---
title: "Moving Phone Numbers: Migration Guide"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006369-moving-phone-numbers-migration-guide"
category: "Uncategorized"
---

# Moving Phone Numbers: Migration Guide

This article helps you move an existing phone number to the right place so calls and SMS keep working with HighLevel. Use the decision tree below to choose your path, then follow the steps.  Use this guide to:

  

-   Understand what you’ll need for **US** vs **International** numbers  
      
    
-   See how the **two-step** process works at a glance.  
      
    
-   Jump to the correct **case article** for concise, step-by-step instructions
    

  

**IMPORTANT**: You no longer need to open a Twilio Support ticket. HighLevel Support coordinates migrations end-to-end.

* * *

**TABLE OF CONTENTS**

-   [Moving phone numbers](#Moving-phone-numbers)
-   [Case 1:  LC → Twilio](#Case-1%3A-%C2%A0LC-%E2%86%92-Twilio)
-   [Case 2: Twilio → LC (LeadConnector)](#Case-2%3A-Twilio-%E2%86%92-LC-\(LeadConnector\))
-   [Case 3: LC → LC (sub-accounts in different agencies)](#Case-3%3A-LC-%E2%86%92-LC%C2%A0\(sub-accounts-in-different-agencies\))
-   [Case 4: LC → LC (sub-accounts in same agency)](#Case-4%3A-LC-%E2%86%92-LC-\(sub-accounts-in-same-agency\))
-   [Case 5: Port a non-Twilio phone number into HighLevel (LC)](#Case-5%3A-Port-a-non-Twilio-phone-number-into-HighLevel-\(LC\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **Moving phone numbers**

  

This guide covers all number-move possibilities in HighLevel—LC→Twilio, Twilio→LC, LC→LC (same agency), LC→LC (different agencies), and porting a non-Twilio carrier number into LC—and explains the essentials in one place: you’ll gather the right identifiers (US: Twilio Account SID, gaining for LC→Twilio, losing for Twilio→LC—plus the destination sub-account ID; International: Regulatory Bundle SID and Address SID), and open a HighLevel Support ticket; we manage coordination end-to-end, there may be a brief cutover interruption. 

  

Collect the required IDs and number(s), then open a HighLevel Support ticket with those details and your preferred cutover window. We coordinate the migration and confirm when traffic is live. After completion, place quick inbound/outbound call and SMS tests.  We cover five cases:

  

1.  LC (LeadConnector) → Twilio  
      
    
2.  Twilio → LC (LeadConnector)  
      
    
3.  LC → LC (both sub‑accounts in the different agencies)  
      
    
4.  LC → LC (sub‑accounts in same agency)  
      
    
5.  Porting a non‑Twilio phone number into HighLevel

  

  

**Before you start:**   
  
**US numbers:** Have the relevant Twilio Account SID (gaining for LC→Twilio, losing for Twilio→LC), the destination sub-account ID, and the phone number(s).  
  
**International numbers:** Have the Regulatory Bundle SID, Address SID, and the phone number(s) (include country).

* * *

## **Case 1:  LC → Twilio**

  

Use this when you’re moving a number from LeadConnector (LC) to your own Twilio. **For US numbers**, include the gaining Twilio Account SID, the destination subaccount (if used), and the phone number(s). 

  

For **International numbers**, provide the Regulatory Bundle SID and Address SID instead of the Account SID, plus the phone number(s). Open a HighLevel Support ticket with these details and your preferred cutover window; we’ll coordinate the migration and confirm once traffic is live on Twilio.

  

 For more, refer to [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

* * *

## **Case 2: Twilio → LC (LeadConnector)**

  

Use this when you’re moving a number from your Twilio into LeadConnector (LC). For **US numbers**, include the losing Twilio Account SID, the destination HighLevel sub-account ID, and the phone number(s). 

  

For **International numbers**, include the Regulatory Bundle SID and Address SID instead of the Account SID, plus the phone number(s). Open a HighLevel Support ticket with those details and your preferred cutover window; we’ll handle the move and let you know when it’s ready to test. 

  

For more, refer to  [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

* * *

## **Case 3: LC → LC** **(sub-accounts in different agencies)**

  

Use this when you’re moving a number between two different HighLevel agencies. Provide the relevant Twilio Account SID for US moves (or Regulatory Bundle SID + Address SID for International), the destination agency and sub-account ID, and the phone number(s). Open a HighLevel Support ticket with these details and your preferred cutover window; we’ll coordinate the inter-agency move and confirm when the number is live in the destination account. 

  

For more, refer to  [Moving Phone Numbers](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-phone-numbers-from-lc-phone-to-twilio-us-international-)

  

  

**IMPORTANT****:** Presently, Case 1 (LC→Twilio), Case 2 (Twilio→LC), and Case 3 (LC→LC — agency is different) **follow the same process.** Customers only need to provide the appropriate Twilio Account SID—the gaining SID when moving into Twilio or the losing SID when moving out of Twilio—plus the destination sub-account ID and the phone number(s). HighLevel Support will coordinate the migration end-to-end. For international numbers, provide the Regulatory Bundle SID and Address SID instead of the Account SID.

* * *

## **Case 4: LC → LC (sub-accounts in same agency)**

  

Use this when you’re transferring a number between two LC sub-accounts inside one HighLevel agency. Inside HighLevel, the Move Numbers tool (Settings → Phone Integration) lets you pick the source number(s), choose the destination sub-account, and complete the transfer. It supports LC Phone↔LC Phone and transfers involving Twilio-connected sub-accounts under the same Twilio master, with notes on common blockers like mismatched Twilio masters or missing regulatory bundles/addresses; if the built-in tool fails for LC Phone→LC Phone, contact HighLevel Support with the source and destination location IDs so we can assist. 

  

For more, refer to  [Moving Numbers across sub-accounts](https://help.gohighlevel.com/support/solutions/articles/48001203968-moving-numbers-across-sub-accounts)

* * *

## **Case 5: Port a non-Twilio phone number into HighLevel (LC)**

  

Use this when your number is with a non-Twilio carrier and you want it managed in LeadConnector (LC). Gather the number(s) and any carrier paperwork requested in the linked guide, then open a HighLevel Support ticket with your desired cutover window. We’ll manage the porting process and notify you when it’s ready to test.

  

For more, refer to [Porting your phone number (non-Twilio number) to a location/subaccount](https://help.gohighlevel.com/support/solutions/articles/48001211919-porting-your-phone-number-non-twilio-number-to-a-location-subaccount)

* * *

## **Frequently Asked Questions**

  

**Q. Will my contacts, conversations, or analytics move with the number?**  
No. The migration changes the number ownership/routing only. Export/download data you need to keep before cutover.

  

  

**Q. Do past call recordings and voicemails migrate?**  
No. Future recordings/voicemails follow the number after cutover. Download any historical assets you need to retain.

  

  

**Q. Do A2P/Toll-Free approvals transfer automatically?**  
Not always. After the move, confirm your numbers are attached to the correct **brand/campaign** or **Toll-Free verification**.

  

  

**Q. Can I move multiple numbers at once?**  
Yes. Include a single list (CSV or inline) in your ticket and validate each number after cutover.

  

  

**Q. What if I need to roll back?**  
Reply to the ticket immediately during the window; rollback options depend on the carrier and timing.