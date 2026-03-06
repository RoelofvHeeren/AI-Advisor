---
title: "How to Disable LC Phone System for Subaccount/Location (LC to Twilio)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001231698-how-to-disable-lc-phone-system-for-subaccount-location-lc-to-twilio-"
category: "Uncategorized"
---

# How to Disable LC Phone System for Subaccount/Location (LC to Twilio)

This article outlines the process for disabling the LeadConnector (LC) Phone System for a specific subaccount or multiple subaccounts in HighLevel and transitioning to Twilio. It is crucial to follow these steps to prevent losing phone numbers during the transition.

* * *

**TABLE OF CONTENTS**

-   [Key Considerations Before Disabling LC Phone](#Key-Considerations-Before-Disabling-LC-Phone)
-   [What is the LC Phone System?](#What-is-the-LC-Phone-System?)
-   [Getting Started with Disabling LC Phone](#Getting-Started-with-Disabling-LC-Phone)
    -   [Step 1: Release Phone Numbers (If Needed)](#Step-1%3A-Release-Phone-Numbers-\(If-Needed\))
    -   [Step 2: Locate Your Sub-Account (Location ID)](#Step-2%3A%C2%A0Locate-Your-Sub-Account-\(Location-ID\))
    -   [Step 3: Obtain Twilio Credentials](#Step-3%3A-Obtain-Twilio-Credentials)
    -   [Step 4: Submit the Disable LC Phone Form](#Step-4%3A-Submit-the-Disable-LC-Phone-Form)
-   [What  Next?](#What-%C2%A0Next?)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **Key Considerations Before Disabling LC Phone**

  

### **1\. Releasing Existing Phone Numbers (If Retaining Them)**

  

Before **disabling LC Phone** for a sub-account, customers must **contact Twilio Support** to release their phone numbers from LC Phone.

-   If customers want to retain their existing phone numbers, they must follow the process outlined in this guide before switching from LC Phone to Twilio.  
      
    
-   If customers do not need to retain their existing phone numbers, they can proceed directly to step 2 and submit the disable request form.

  

**IMPORTANT**: Failure to release phone numbers before disabling LC Phone will result in permanent loss of those numbers.

  

### **2\. Ensure the Twilio Account is Ready**

  

Before initiating the switch, ensure that you have an active Twilio account with the necessary credentials (Account SID and Auth Token) to integrate with HighLevel.

* * *

## **What is the LC Phone System?**

  

The LC Phone System is HighLevel’s built-in telephony service that provides call and messaging capabilities directly within the platform. While it offers convenience, some agencies may prefer to switch to their own Twilio account for direct control over phone services.

  

For a detailed overview of the LC Phone System, refer to [](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-phone-system-)[What is LC - Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-phone-system-)

* * *

## **Getting Started with Disabling LC Phone**

  

Disabling the LC Phone System for a sub-account allows you to transition to Twilio for managing your phone services. This process requires careful preparation to avoid losing phone numbers. If you want to keep your existing phone numbers, you must release them first by contacting Twilio Support. Otherwise, you can proceed directly to the disable request form.

  

### **Step 1: Release Phone Numbers (If Needed)**

  

Before disabling LC Phone, you must ensure that any existing phone numbers you wish to retain are released from LC Phone. This is a **mandatory step** if you want to keep the numbers, as they will be permanently lost otherwise. To complete this step:

  

1.  **Contact Twilio Support** and request the release of phone numbers from LC Phone.  
      
    
2.  Follow the steps outlined in [this guide](https://help.gohighlevel.com/support/solutions/articles/48001240108-moving-numbers-to-an-lc-phone-sub-account-from-the-client-s-own-twilio-account) to complete the number release process.  
      
    
3.  Verify that the numbers have been successfully released before moving forward.
    

  

**IMPORTANT :** If you do not need to retain old numbers, you can skip this step and proceed directly to Step 2.

  

### **Step 2:** Locate Your Sub-Account (Location ID)

  

Before proceeding, you must identify the **Location ID** of the sub-account you want to disable LC Phone. Navigate to **Settings** → **Business Profile** and locate the **Location ID** (copy this for later).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043047417/original/JXVARFyN3dAGT8mPq6TtipqbDehtF6bxvA.png?1741697994)

  

  

### **Step 3: Obtain Twilio Credentials**

  

Since Twilio will be the default phone provider after disabling LC Phone, you need to gather your **Twilio Account SID** and **Auth Token**. **Log in** to your Twilio account (Twilio Console). In the **Twilio Dashboard**, on the homepage itself,  locate the Account Info i.e. the **Account SID** and the **Auth Token.** 

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043047852/original/dG7VuQOylrHPS2m5NEO8s-iG-mxIPKjuWA.png?1741698310)**

  

  

### **Step 4: Submit the Disable LC Phone Form**

  

Now that you have your **Location ID**, **Twilio Account SID**, and **Auth Token**, you can submit the request to disable LC Phone. **Open the [Disable LC Phone Form](https://link.gohighlevel.com/widget/form/ItLl5XOY2IQcSI8iDkiR)** and fill in the following details: **Sub-Account ID (Location ID),** **Twilio Account SID,** and the **Twilio Auth Token,** and now submit the form.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043048303/original/FZGwYgkOf7QQ4A_mc2hJsg5Y0Y6SUM4zFQ.png?1741698536)

* * *

## **What  Next?**

  

Once you submit the **Disable LC Phone Form**, our high-level support team will **review your request** and proceed with the necessary steps to disable LC Phone for your agency. If any additional information is required or there are updates regarding your request, we will contact you via the **email address provided in the form**.

  

If you have any questions or need further assistance during this process, feel free to reach out to **[HighLevel Support](https://help.gohighlevel.com)** for guidance.

* * *

## **Frequently Asked Questions**

  

**Q: What happens if I don’t release my phone numbers before disabling LC Phone?**

The numbers will be lost permanently. It is critical to follow [Moving numbers to an LC Phone Sub-account](https://help.gohighlevel.com/support/solutions/articles/48001240108-moving-numbers-to-an-lc-phone-sub-account-from-the-client-s-own-twilio-account) from the client's own Twilio account and contact Twilio Support before proceeding.

  

  

**Q: Can I disable LC Phone for multiple sub-accounts at once?**

No, each sub-account must be processed separately by submitting individual requests.

  

  

**Q: How long does it take for the disablement to be processed?**

Processing time varies, but you will receive confirmation once completed.

  

  

**Q: Can I revert back to LC Phone after switching to Twilio?**

Yes, but you will need to submit a request to HighLevel support to re-enable LC Phone for the sub-account.

* * *

## **Related Articles**

-   [Moving Numbers from LC Phone to Twilio](https://help.gohighlevel.com/support/solutions/articles/48001240107-moving-numbers-out-of-an-lc-phone-sub-account-to-the-client-s-own-twilio-account)
-   [What is the LC Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-phone-system-)