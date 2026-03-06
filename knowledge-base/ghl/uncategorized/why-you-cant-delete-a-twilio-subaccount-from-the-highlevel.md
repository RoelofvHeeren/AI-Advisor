---
title: "Why You Can't Delete a Twilio Subaccount from the Highlevel?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005822-why-you-can-t-delete-a-twilio-subaccount-from-the-highlevel-"
category: "Uncategorized"
---

# Why You Can't Delete a Twilio Subaccount from the Highlevel?

**Overview**

If you're attempting to delete a subaccount from your highlevel account and you're seeing a message that deletion is not possible, this article explains why and what you need to do next.

* * *

## **Account Deletion Not Managed by HighLevel for Non-LC Users**

HighLevel **does not** have the ability to delete Twilio accounts that were created **outside the LC/ISV (Independent Software Vendor)**. If you're using your **own Twilio account** (i.e., not a subaccount under LeadConnector’s Twilio ISV), the management and closure of that account remain entirely within your control via Twilio.  
  

* * *

## **What You Will See in HighLevel**

For non-LC Twilio accounts, you will only see a **banner notification** within the Twilio settings in your HighLevel account. This banner is meant to **inform** you that you are not using a LeadConnector's Twilio account. However, **no option to delete** the Twilio account is provided within the HighLevel platform for these accounts.

  

* * *

Why Am I Seeing a Warning Instead of a Delete Option?

Some accounts are connected to external Twilio accounts that are managed directly by you (i.e., not provisioned or controlled by the highlevel). In these cases:

-   The highlevel does not have permission to delete the subaccount.
    
-   The subaccount will remain active on your Twilio dashboard unless you manually delete it.
    

As a result, Twilio may continue to charge you for that subaccount unless action is taken on your end.

  

* * *

## How to Know If This Applies to You

  

**This applies if:**

-   You connected your own Twilio account to the subaccount.
    
-   Your account is not using the highlevel's built-in carrier or messaging service.
    
-   You see a banner that says **"Subaccount deletion is not supported."**
    

* * *

## What You Can Do Instead

To ensure you're no longer billed by Twilio, follow these steps to manually delete the subaccount from your Twilio dashboard:

### Step-by-Step Guide:

1.  Log in to your Twilio Console: [https://console.twilio.com](https://console.twilio.com/)
    
2.  Navigate to Subaccounts from the left-hand menu.
    
3.  Locate the subaccount you want to delete.  
      
    
4.  Click the "..." (More Options) icon next to the subaccount.
    
5.  Select “Close Subaccount”.  
      
    
6.  Confirm the closure in the dialog prompt.  
      
    

Once completed, the subaccount will be closed and you should no longer incur charges.

* * *

Need Help?  
  
**If you're unsure whether your account is externally managed or need help locating the correct subaccount in Twilio:**

-   Visit Twilio's official guide: _[How to close a sub account](https://help.twilio.com/articles/223135987-Closing-a-Twilio-subaccount)_
    

* * *

**Important Notes:**

-   Closing a subaccount is **permanent**. Make sure you no longer need the data before proceeding.
    
-   Highlevel side deletion only affects accounts **provisioned directly by highlevel** itself.
    
-   You remain responsible for **managing and monitoring charges** in your Twilio account.