---
title: "Enabling Twilio Rebilling For Customers Who Want Use Their Own Twilio Account"
url: "https://help.gohighlevel.com/support/solutions/articles/48001178719-enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account"
category: "Uncategorized"
---

# Enabling Twilio Rebilling For Customers Who Want Use Their Own Twilio Account

In this help article, you'll find a comprehensive guide on how to enable Twilio rebilling for customers who prefer to use their own Twilio account within the HighLevel platform. It covers the steps necessary to set up and configure the rebilling process, ensuring that your customers can seamlessly integrate their Twilio accounts while maintaining efficient billing management. Whether you're managing a single account or multiple clients, this article provides clear instructions to streamline the setup and keep everything running smoothly.

  

**TABLE OF CONTENTS**

-   [Step 1: Log into your Twilio account](#Step-1%3A-Log-into-your-Twilio-account-Click-the-Gear-Icon-%3E-select-sub-accounts-%3E-click-the-red-+-icon-to-create-a-new-sub-account-and-name-it-to-match-the-client-you-want-to-activate-Twilio-Rebilling-for)
-   [Step 2: Copy the text template](#Step-2%3A%C2%A0Copy-the-text-template-below-and-add-in-the-missing-info)
-   [Step 3: Open a support ticket from within your Twilio account](#Step-3%3A%C2%A0Open-a-support-ticket-from-within-your-Twilio-account-by-clicking-the-question-mark-icon-and-selecting-)
-   [Step 4: Change the first paragraph of the text template](#Step-4%3A-Change-the-first-paragraph-of-the-text-template-to-read-) 
-   [Step 5: Confirm from Twilio that the transfer has been completed](#Step-5%3A-Once-you-receive-confirmation-from-Twilio-that-the-transfer-has-been-completed,-you-should-see-the-number\(s\)-in-the-new-sub-account-you-created-in-your-Twilio-account.)
-   [Step 6: Log into your HighLevel account](#Step-6%3A-Log-into-your-HighLevel-account-%3E-go-to-Agency-Settings-%3E-Twilio-%3E-scroll-down-to-your-client-%3E-click-the-three-dots-icon-to-the-right-of-their-account-name-%3E-select-) 
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

  

In order for Twilio Rebilling to work, your customer's sub-account in HighLevel needs to be connected to a corresponding sub-account in your Twilio account. 

  

If your client's sub-account in HighLevel is currently connected to a Twilio account of their own, you'll need to follow the following steps before activating Twilio Rebilling in SaaS mode:

  

## **Step 1: Log into your Twilio account  
**Click the Gear Icon > select sub-accounts > click the red + icon to create a new sub-account and name it to match the client you want to activate Twilio Rebilling for

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956311/original/FqqemNrQTtoXA_bHrFYVNJQ3YVDGu-2xRQ.jpg?1726501850)

## **Step 2:** Copy the text template below and add in the missing info

  

> Hi Twilio,

> My client \[client name\] whose Twilio account is registered under \[client's Twilio account email\] would like to move the following numbers from their account to a sub-account in my account:

> \[list of phone numbers\]

> The Losing Account SID is: \[the SID of the sub-account that is giving up the phone number (you can find this in your HighLevel account > Agency Settings > Twilio tab next to your client's name in the list)\]

> The Gaining Account SID is: \[the SID for the new sub-account that you created in Step 1\]

> We would like the number(s) above transferred as soon as possible. Thanks in advance!

  

## **Step 3:** Open a support ticket from within your Twilio account by clicking the question mark icon and selecting "Submit a Ticket". Paste the completed text from the template above into the ticket and submit.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956374/original/LJi9ZAUoLbrQ5dCXpAlwdQtGzfHH5KLjYw.jpg?1726501892)

  

## **Step 4:** Change the first paragraph of the text template to read "I would like to transfer the following number(s) from my Twilio account to another account:" Send the updated text template to your client and request that they open a ticket from within their Twilio account using the text template. Twilio will need tickets from both you and your client in order to approve the transfer.

  

## **Step 5:** Once you receive confirmation from Twilio that the transfer has been completed, you should see the number(s) in the new sub-account you created in your Twilio account.

  

## **Step 6:** Log into your HighLevel account > go to Agency Settings > Twilio > scroll down to your client > click the three dots icon to the right of their account name > select "Update Credentials" and replace the SID and Auth Token values with the new SID and Token values from the new sub-account in your Twilio account.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956414/original/5j-RlazVj5ZqQ4CAAVCJdgumM4uJppqXag.jpg?1726501927)

  

You can obtain the new SID and Token by logging into your Twilio account > click the gear icon at the top right > select Sub-accounts > Click the name of your client and you will see those two fields:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032956464/original/iMgyUlLUA-JWWQImVop5LEBiCboj8XGnpg.jpg?1726501961)

  

* * *

# **Frequently Asked Questions**

  

-   **What should I do if my customer encounters issues with Twilio integration after enabling rebilling?**
    
    -   If your customer encounters issues with Twilio integration after enabling rebilling, start by verifying that all configurations and settings have been correctly applied as per the guide. If the problem persists, consider reaching out to Twilio support for assistance or consult HighLevel support for help with platform-specific issues. Additionally, checking for any updates or changes in Twilio's API or billing settings might provide further insights.
-   **Are there any limitations or restrictions when using Twilio rebilling with a customer's own account?**
    
    -   While using a customer’s own Twilio account for rebilling offers flexibility, there may be limitations such as differences in Twilio's pricing tiers, feature availability, or regional restrictions that could affect billing or service functionality. It's important to review Twilio’s documentation and HighLevel’s integration capabilities to ensure compatibility and understand any potential constraints.

* * *

# **Related Articles**

  

-   [SaaS wallet credit management in SaaS Mode](https://help.gohighlevel.com/support/solutions/articles/48001207115-saas-wallet-credit-management-sub-account-level)
-   [Activate SaaS Mode and configure phone rebilling](https://help.gohighlevel.com/support/solutions/articles/48001177740-activate-saas-mode-request-payment-and-configure-phone-rebilling)
-   [Enabling Twilio Rebilling For Customers Who Were Using The Same SID/Token](https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers)