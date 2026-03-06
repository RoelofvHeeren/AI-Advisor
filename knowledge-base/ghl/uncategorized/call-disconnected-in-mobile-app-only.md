---
title: "Call disconnected in mobile app only"
url: "https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only"
category: "Uncategorized"
---

# Call disconnected in mobile app only

**TABLE OF CONTENTS**

-   [1\. Check if the Twilio Account SID is a master account or a sub-account](#1.-Check-if-the-Twilio-Account-SID-is-a-master-account-or-a-sub-account)
    -   [For locations that will be using the agency's Twilio account](#For-locations-that-will-be-using-the-agency's-Twilio-account)
    -   [For locations that will be using your client's own Twilio account](#For-locations-that-will-be-using-your-client's-own-Twilio-account)
        -   [1st method: Create a subaccount in the client's Twilio account -> Move numbers -> Update in HighLevel](#1st-method%3A-Create-a-subaccount-in-the-client's-Twilio-account--%3E-Move-numbers--%3E-Update-in-HighLevel)
        -   [2nd method: Use Highlevel to create a subaccount based on the client's Twilio account SID](#2nd-method%3A-Use-Highlevel-to-create-a-subaccount-based-on-the-client's-Twilio-account-SID)
-   [2\. Check if the TwiML app's location ID is correct if the location is already using a Twilio subaccount SID](#2.-Check-if-the-TwiML-app's-location-ID-is-correct-if-the-location-is-already-using-a-Twilio-subaccount-SID)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193769029/original/qvN3uv1Qy6IphW_prHfWQ7gQ48LpcfWq9g.png?1645642281)

If calling works for desktop dialer here, but it failed using the mobile app only:

  

  

# 1\. Check if the Twilio Account SID is a master account or a sub-account

Once you are in the agency view, Click on Settings

Or simply go to [https://app.gohighlevel.com/settings/twilio](https://app.gohighlevel.com/settings/twilio)

  

![Click on Settings](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193766094/original/v8jRqFgJBH6dZndEelQjitEdOVZStDn0og.png?1645641856)

Click on Twilio

  

![Click on Twilio](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193743370/original/fr-YyReni5qJ3fMABhpRIFX38Sf9VMYD4g.png?1645638435)

  

Depending on which location you are having this issue, make sure the sub-account SID **is different from** the master Account SID on top.

  

We always need to use a Twilio sub-account SID to configure for the locations to call properly using the mobile app.

  

Another common case is that the location user would provide their own Twilio SID, which might be a Master Account SID that won't work with the mobile app.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193744893/original/9YvHbpL2nMCF0EZD2i6IsU1h2ovZUcVENw.png?1645638697)

  

  

## For locations that will be using the agency's Twilio account

  

Here are the steps to fix it if the location is currently using the Master Account SID:

  

click **Update Credentials** by clicking the three dots on the right to delete the connection

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193750196/original/RIr9cQe_EwSd8PVSJZviO6XiLoC5JrzzJg.png?1645639356)

  

  

  

  

Click **D****elete connection** here

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)  

  

  

  

  

Click **Create Sub-Account** so a Twilio sub-account will be created based on your **agency** Twilio master account configured on top

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193754153/original/mqtzEHrAKKYJeUBTFzX4P5yl15ZCHtVvzg.png?1645639793)

  

  

  

  

Once the sub-account is created, click Move numbers to move the numbers from the client's master account to its sub-account.

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193755160/original/pUMRKPR0sra_x4gteUL208R-2KzX8RLC4w.png?1645639828)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715891/original/zya6cg1qyaeT5Y3-Ev1vfFpf_yFjyyE-Mw.png?1644719954)

  

  

  

If the move number tool is showing an error, please reach out to Twilio support to help move the numbers:

[https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code](https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code)

  

  

  

## For locations that will be using **your client's own** Twilio account

There are two ways to fix it if the location is currently using your client's Master Account SID:

  

### 1st method: Create a subaccount in the client's Twilio account -> Move numbers -> Update in HighLevel

  

**[How to Create a new subaccount in Twilio from Console](https://support.twilio.com/hc/en-us/articles/360011348693-View-and-Create-New-Twilio-Subaccounts)**

1.  Access the [**Subaccounts** page in Console](https://www.twilio.com/console/project/subaccounts).
2.  Click **Create new Subaccount**, or the ![Icon_New.png](https://support.twilio.com/hc/article_attachments/360017865213/Icon_New.png) icon.
3.  Enter the desired subaccount name, and then click **Create**.  
    ![Sub_04.png](https://support.twilio.com/hc/article_attachments/360017137614/Sub_04.png)
4.  Once it is created, click into the subaccount and **copy the Account SID and auth token**

  

The client can open a ticket with Twilio to move the numbers from the master account to the subaccount by [following the instructions here](https://support.twilio.com/hc/en-us/articles/223135327-Moving-Twilio-Phone-Numbers-to-another-Twilio-project).

  

  

  

Click Update Credentials by clicking the three dots on the right

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

  

  

  

  

  

Paste the copied account SID and auth token here and click **Save**

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193761766/original/VO6G43kHENBRGI1uOezafSIZJiSf7eqjyw.png?1645641065)

  

  

  

  

### 2nd method: Use Highlevel to create a subaccount based on the client's Twilio account SID

  

  

Click **Update Credentials** by clicking the three dots on the right

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

  

  

  

  

Click **D****elete connection** here

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)

  

  

  

  

  

Once it's blank, scroll up and replace your master Account SID and auth token with your **client's own** Twilio master account SID and auth token.

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763658/original/YhjuNkYLzEfthQcuB5wyEByVq3ycqohmAA.jpeg?1645641433)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715751/original/dqXg7vzw4IvGxkx_suVdV10izjR9iex4XQ.png?1644719669)

  

  

  

Click **Create subaccount** so a Twilio subaccount will be created based on your **client's** Twilio master account.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763652/original/2kHzrthL5WyW2SmqztwqzCUAZx24GPebOA.png?1645641433)

  

  

Once the subaccount is created, click Move numbers to move the numbers from the client's master account to its subaccount.

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763653/original/TNDnfgwHJRYByOWF4yTqAw-diFgIB0MmrQ.png?1645641433)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715891/original/zya6cg1qyaeT5Y3-Ev1vfFpf_yFjyyE-Mw.png?1644719954)

If the move number tool is showing an error, please reach out to Twilio support to help move the numbers:

[https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code](https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code)

  

Once those numbers are showing up in the location, you can switch back to your master Account SID and auth token here

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193764669/original/dF0znroKFFPSS8BLBAQqnwBIMfcfphjS8Q.png?1645641529)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715934/original/VxJW8FheH1rqKFH05tpei6ITYaGBwLYTBw.jpeg?1644720020)

  

  

  

  

  

  

  

  

  

  

  

# **2\. Check if the TwiML app's location ID is correct** if the location is already using a Twilio subaccount SID

  

  

  

  

Link to enter:

  

[https://api.gohighlevel.com/twilio/create\_application/**<location\_id>**](https://api.gohighlevel.com/twilio/create_application/%3Clocation_id%3E)