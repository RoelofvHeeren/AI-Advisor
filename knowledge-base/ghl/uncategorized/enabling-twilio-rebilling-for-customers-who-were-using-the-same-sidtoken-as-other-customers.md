---
title: "Enabling Twilio Rebilling For Customers Who Were Using The Same SID/Token As Other Customers"
url: "https://help.gohighlevel.com/support/solutions/articles/48001179177-enabling-twilio-rebilling-for-customers-who-were-using-the-same-sid-token-as-other-customers"
category: "Uncategorized"
---

# Enabling Twilio Rebilling For Customers Who Were Using The Same SID/Token As Other Customers

This help article provides detailed instructions for enabling Twilio rebilling for customers who were previously using the same SID and token as other customers. It addresses the process of separating and configuring individual Twilio accounts to ensure accurate and distinct billing for each customer. By following the outlined steps, you'll be able to successfully transition from a shared Twilio account setup to a rebilling system, improving billing accuracy and client account management. The article is designed to help you manage this transition smoothly and ensure each customer's Twilio usage is tracked and billed appropriately.

  

**TABLE OF CONTENTS**

-   [Step 1: Log into your Twilio account](#Step-1%3A-Log-into-your-Twilio-account-%3E-click-the-Gear-Icon-%3E-select-sub-accounts-%3E-click-the-red-+-icon-to-create-a-new-sub-account-and-name-it-to-match-the-client-you-want-to-activate-Twilio-Rebilling-for)
-   [Step 2: Log into your HighLevel account](#Step-2%3A-Log-into-your-HighLevel-account-%3E-go-to-Agency-Settings-%3E-Twilio-%3E-scroll-down-to-your-client-%3E-click-the-three-dots-icon-to-the-right-of-their-account-name-%3E-select-)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

  

* * *

  

In order for Twilio Rebilling to work, your customer's sub-account in HighLevel needs to be connected to a corresponding sub-account in your Twilio account.

  

**If the client you want to activate rebilling for was using the same SID/Token as another client**, you'll need to follow the following steps before activating Twilio Rebilling in SaaS mode:

  

## **Step 1:** Log into your Twilio account > click the Gear Icon > select sub-accounts > click the red + icon to create a new sub-account and name it to match the client you want to activate Twilio Rebilling for

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960554/original/nWDvCQNZrK642hnp_Q1X5d9yqGz3og9j-Q.jpg?1726507199)

 

## **Step 2:** Log into your HighLevel account > go to Agency Settings > Twilio > scroll down to your client > click the three dots icon to the right of their account name > select "Update Credentials" and replace the SID and Auth Token values with the new SID and Token values from the new sub-account in your Twilio account. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960573/original/8xoTXozHJbk99WD5h7bwGZ5MGxA-dT4qOQ.jpg?1726507231)

  

You can obtain the new SID and Token by logging into your Twilio account > click the gear icon at the top right > select Sub-accounts > Click the name of your client and you will see those two fields:

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032960592/original/rD-zcXx_yWF_Q7qNgq2IVHMjx9bYGY7Ykw.jpg?1726507259)

* * *

# **Frequently Asked Questions**

-   **How can I verify that each customer’s Twilio billing is accurately reflected after the transition?**  
      
    To verify that each customer’s Twilio billing is accurate after transitioning from a shared SID and token, review the billing reports and usage statistics in both HighLevel and Twilio dashboards. Compare these reports to ensure that charges are correctly allocated to each customer’s individual account. Regular monitoring and cross-checking of these details can help ensure that billing remains accurate.  
      
    
-   **Can I revert to the shared SID and token setup if I encounter issues with the new configuration?**  
      
    Reverting to the shared SID and token setup is possible but not recommended if it affects billing accuracy and account management. If you encounter issues with the new configuration, it’s advisable to troubleshoot and resolve the problems rather than reverting. If needed, consult HighLevel or Twilio support for guidance on resolving specific issues before considering a reversion.
    

* * *

# **Related Articles**

-   [](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)[Enabling Twilio Rebilling For Cu](https://help.gohighlevel.com/support/solutions/articles/48001178719-enabling-twilio-rebilling-for-customers-who-want-use-their-own-twilio-account)stomers Who Want Use Their Own Twilio Account