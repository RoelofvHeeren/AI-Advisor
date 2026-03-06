---
title: "Facebook Multi page Troubleshoot"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004567-facebook-multi-page-troubleshoot"
category: "Uncategorized"
---

# Facebook Multi page Troubleshoot

  

  

**TABLE OF CONTENTS**

-   [Setup facebook integration](#Setup-facebook-integration%3A)
-   [Troubleshoot:](#Troubleshoot%3A)
    -   [Why are my Lead Ads not making it into my Sub-Account?](#Why-are-my-Lead-Ads-not-making-it-into-my-Sub-Account?)
    -   [How do I integrate Facebook Leads using a 3rd party service like Pabbly Connect or Zapier?](#How-do-I-integrate-Facebook-Leads-using-a-3rd-party-service-like-Pabbly-Connect-or-Zapier?)
    -   [A Facebook Token Has Expired In a Sub-Account; why does this happen, and How to Fix This?](#A-Facebook-Token-Has-Expired-In-a-Sub-Account;-why-does-this-happen,-and-How-to-Fix-This?)
        -   [Why Did This Connection Break?](#Why-Did-This-Connection-Break?)
        -   [To reconnect](#To-reconnect%3A)
-   [Common Errors](#Common-Errors)
    -   [Permission Issue](#Permission-Issue%3A)
        -   [To find missing permissions](#To-find-missing-permissions%3A)
        -   [To enable the missing permissions](#To-enable-the-missing-permissions%3A)
    -   [Instagram Connection/messages](#Instagram-Connection/messages-%3A) 
    -   [Leads are not syncing](#Leads-are-not-syncing%3A)

# Setup facebook integration:

To setup FB integration, please follow the following document: [Facebook Lead Ads integration](https://help.gohighlevel.com/a/solutions/articles/155000004537)

  

# Troubleshoot:

## Why are my Lead Ads not making it into my Sub-Account?

1.  **Do you have full access control of the Facebook page - [](https://www.facebook.com/business/help/2169003770027706)** [](https://www.facebook.com/business/help/2169003770027706)[Add people to a business portfolio and assign a business asset](https://www.facebook.com/business/help/2169003770027706)[](https://www.facebook.com/business/help/2169003770027706)**[](https://www.facebook.com/business/help/2169003770027706)[](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)**
2.  **Now in your Sub-Account, check in settings> integrations > Facebook form fields mapping check if the form you have selected in ads manager is enabled in status  
      
    **
3.  **Can you try this to confirm if Lead Connector is accessible and has access to your page? - [https://www.facebook.com/settings?tab=business\_tools&ref=settings](https://www.facebook.com/settings?tab=business_tools&ref=settings)** 
    1.  **Check if lead connector is connected with FB account![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040883734/original/P0axfyxcTqGU5Hic3LDPc5lmny61Ren4Zg.png?1738570041)  
          
        **
    2.  **Check if all the permissions are available with lead connector in terms of page access and lead access![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040884114/original/tP84DHRfB-6M45HJ7N5C9PFFxviFOteboQ.jpg?1738570108)  
          
        **
4.  **Once you have completed the steps above, please use the **[Facebook leads ads testing tool](https://developers.facebook.com/tools/lead-ads-testing)** to see if leads are now being added to your Sub-Account.**
    1.  **Select Page from where lead is to be fetched**
    2.  **Select form to be tested.**
    3.  **Check if App ID: 390181264778064 is present, if not then go to step 6.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040887202/original/JOUUNggg81s9fRcmAOPlcn0B0rBkNgWrpA.jpg?1738571755)  
        **
5.  If you see that LeadConnector access to your page has been revoked or the App ID is not coming up, you will manually need to assign Lead access permissions to LeadConnector on Facebook:  
    i. Go to Business Suite.  
    ii. If you don't have access to Business Suite, go to Business Settings and select your business, skip to step (v)  
    iii. Click the dropdown in the top-left corner and choose your business account.  
    iv. Click Settings in the bottom-left corner.  
    v. Click More Business Settings.  
    vi. Click Integrations in the left menu, then click Leads Access.  
    vii. Click Assign CRMs. You'll see a list of CRM systems integrated with your Facebook Page.  
    viii. Check the circle next to LeadConnector, then click Assign.

## How do I integrate Facebook Leads using a 3rd party service like Pabbly Connect or Zapier?

****You can use a 3rd parties integration tool like Zapier or Pabbly Connect. Here is** **[more info](https://help.gohighlevel.com/en/support/solutions/articles/48001223700)****

## A Facebook Token Has Expired In a Sub-Account; why does this happen, and How to Fix This?

**If** you received an email with a subject that says "Important: Facebook connection has expired.", this means that the Facebook integration for one of your Sub-accounts has become disconnected.

### Why Did This Connection Break?

Several reasons could cause the integration to break. The most common are: 

-   A user changes their password
-   The Facebook token naturally expires after some time
-   A user de-authorizes your app
-   A user logs out of Facebook
-   A user changes page permission or adds/removes a user
-   A virtual assistant in another country logs in without using a VPN

### To reconnect:

1\. Select the account indicated in the email you received from the "Switch To An Account" dropdown

2\. In the left-hand sidebar, click "Settings."

3\. From the sidebar, click "Integrations."

4\. Click the "Connected" button to disconnect the broken integration under the Facebook icon. Click on Connect again to reconnect

5\. In the window that pops up, continue as yourself, select the Facebook page that you want to connect, then click the "Connect Page" button

* * *

#   
Common Errors

## Permission Issue:

### To find missing permissions:

1.  Goto Sub-account >> Settings >> Integration >> Troubleshoot in FB card >> Missing permission
2.  This would display all the missing permissions along with the features impacted. 

### To enable the missing permissions:

1.  Go to following [link](https://www.facebook.com/settings?tab=business_tools&ref=settings).
2.  Enable the missing permissions.**  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040889448/original/CVt9KLXDa8EwOORsS19c_Mv0Yc0agmoxpA.jpeg?1738573445)**

  

## Instagram Connection/messages :

Step 1: Check if instagram account is connected to FB page: [https://business.facebook.com/latest/settings](https://business.facebook.com/latest/settings)

If instagram account is not connected, connect the account, and proceed to step 2  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040975476/original/3g746MlCF6hZnTEOy-5Fa--9yhQAgUz3KQ.png?1738666567)  

Step 2: Check if message access is enabled: The user is added in people with full control access.

  

Step 3: In pages, under connected assets, Instagram account is present.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046611086/original/ev47qghhU-n-p_caT5eMAHFcZKVaLnqubg.png?1747219962)Step 4: Confirm if connected tools have access over instagram messages. The below setting needs to be checked over instagram app:

-   Login to Instagram App
-   Go to settings and activity. 
-   Under Messages and Story reply, go to messages request. 
-   Allow access to connected tools

# 

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055401728/original/CJZYxt33vBHBhsSbtTaqwZY8TDD3seCTHQ.jpeg?1759833021)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055401480/original/IPf2dRiFxB_MuBgAJPE9_WJ0DiK2QkbpzQ.png?1759832858)

Step 5: In Sub-account >> Settings >> Integration >> settings in FB card, make sure Instagram and FB messaging is enabled.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040976262/original/HQYRihlJ3uWVpwE1WLjQo24mOosdY5lDSA.png?1738667129)

  

  

## Leads are not syncing:

To ensure all settings are enabled, please verify by accessing link: [https://business.facebook.com/latest/settings,](https://business.facebook.com/latest/settings,)

Step 1: Under Users >> people, the user is added and has full control in business portfolio access.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024108/original/XMorT9S1GCKBD6ueFcoYDcJhrLE3Pg2FFQ.png?1738733903)

  

Step 2: Select Accounts >> pages section under side navigation, Confirm if the user is added in people and has access of full control.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024250/original/Jc1ZZMMzWVPP_doCesHfvnjKVJMT6HzyLQ.png?1738734180)

 Step 3: Go to integrations >> Lead access from side navigation, verify if lead connector is connected under CRM

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041024278/original/PBfANlNMAIo3BfkP9k4zlc8lzRTnc8nh6Q.png?1738734268)