---
title: "Facebook Multi Page Lead Ads Integration"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004537-facebook-multi-page-lead-ads-integration"
category: "Uncategorized"
---

# Facebook Multi Page Lead Ads Integration

The Facebook Lead Ads integration allows you to collect leads directly from Facebook Ads and have them automatically synced with your CRM. With this integration, you can easily capture contact information from potential customers interested in your products or services on Facebook and quickly follow up with them through your CRM. By automating the lead capture process, you can save time and improve the efficiency of your sales and marketing efforts.  
  

**TABLE OF CONTENTS**

-   [What is the Facebook Lead Ads Integration?](#What-is-the-Facebook-Lead-Ads-Integration?)
    
    -   [Who is this integration helpful for?](#Who-is-this-integration-helpful-for?)
    -   [What are the benefits of this integration?](#What-are-the-benefits-of-this-integration?)
    
-   [Pre-requisites for Facebook Lead Ads](#Pre-requisites-for-Facebook-Lead-Ads)
    
    -   [To create custom fields](#To-create-custom-fields%3A)
    
-   [How to integrate or manage Facebook Leads Ads with a Sub-Account](#How-to-integrate-or-manage-Facebook-Leads-Ads-with-a-Sub-Account)
    
    -   [To setup FB integration](#To-setup-FB-integration%3A)
    -   [To disconnect facebook integration](#To-disconnect-facebook-integration%3A)
    -   [To Manage Facebook pages](#To-Manage-Facebook-pages%3A)
    -   [To perform basic troubleshooting or Sync leads manually](#To-perform-basic-troubleshooting-or-Sync-leads-manually%3A)
    -   [To enable or disable facebook/instagram messages](#To-enable-or-disable-facebook/instagram-messages%3A)
    -   [To manage forms](#To-manage-forms%3A)
    
-   [Troubleshoot](#Troubleshoot%3A)

# What is the Facebook Lead Ads Integration?

Integrating Facebook Lead Ads with GHL (Go HighLevel) allows businesses to automatically capture leads and manage them in one platform. This streamlines lead management, eliminates manual errors, enhances lead quality, boosts conversions, and drives business growth.  
  

### Who is this integration helpful for?

Integrating Facebook Lead Ads with GHL (Go HighLevel) is ideal for businesses using Facebook Ads to generate leads and streamline their lead management. It’s especially beneficial  for small businesses or startups with limited sales teams, as it automates lead capture, saving time and resources while improving data accuracy. For businesses already using GHL, this  integration ensures seamless lead import into existing workflows, enhancing follow-ups and maximizing efficiency.  
  

### What are the benefits of this integration?

The benefits of integrating Facebook Lead Ads with the CRM include:

Automated lead capture: With this integration, businesses can automatically capture leads generated through Facebook Ads and import them into their CRM system, eliminating the need for manual data entry. 

Improved Lead Quality: By tracking and managing leads through CRM, businesses can better understand their audience, personalize their marketing efforts, and improve the overall quality of their leads. 

Enhanced lead management: The CRM system allows businesses to track and manage their leads in one place, providing a 360-degree view of their interactions with prospects and customers. This can help companies to streamline their sales and marketing efforts and improve customer retention.

Efficient follow-up: With lead data automatically captured and imported into the CRM system, businesses can quickly follow up with leads and prioritize their sales efforts based on lead quality and behavior.

Increased conversions: Businesses can increase their conversions and ROI from Facebook Ads by automating lead capture and improving lead management.

## 

* * *

# Pre-requisites for Facebook Lead Ads

-   Access: You must have access to the Facebook page for which you're creating lead ads. Refer to this FacebookHelp article on [how to give someone a role on your Page](https://www.facebook.com/help/187316341316631).
-   Ownership: Ensure the same user owns the page and the ad account. For business-level integrations, the owner of the page and the ad account must be the same—more on this in the Facebook help section on [Ad account roles](https://www.facebook.com/business/help/187316341316631?id=520795622598421).
    
-   Permissions: Verify that you have the page and ad account permissions. You should ideally have admin or manage permissions. To understand different levels of permissions, refer to [Facebook Pages roles](https://www.facebook.com/help/323502271070625) and [Ads permissions](https://www.facebook.com/business/help/187316341316631?id=520795622598421). The user trying to integrate the Facebook Page into the CRM will [need to be an admin of the Facebook Business page](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143) and have [Lead Access Permission](https://www.facebook.com/business/help/540596413257598?id=735435806665862) to access Lead data (A requirement set by Facebook).
    
-   Ad Account Check: Confirm your page is connected to the appropriate ad account. To do this, navigate to the Ad Account settings and verify the connected page—more on [how to navigate your ad account settings](https://www.facebook.com/business/help/337584869654348).
    
-   Visibility: Note that only individuals with relevant permissions can see the owners of ad accounts. For details, check Facebook's guide on [user permissions for ad accounts](https://www.facebook.com/business/help/187316341316631?id=520795622598421).
    
-   Leads Access: Check if you have lead access. If the lead connector isn't showing, you may need to manually search for it or enable it. For issues related to leads not syncing, refer to Facebook's [troubleshooting guide for lead ads](https://www.facebook.com/business/help/1667649039945425).
    
-   LeadConnector will need access to the Facebook Business Manager and Business Page from which you run the Facebook Lead Ad.
    
-   You can allow trusted people to manage some of your Facebook business pages. You can give some people [access](https://www.facebook.com/business/help/582754542592549?id=418112142508425) to certain parts of your Facebook page without giving them full access.
    
-   Open business manager > Left navigation > Users > People. If you have added the person, who will be integrating the FB page to the CRM, there already: they will appear at the centre of the page.  
    [How to add users to your business?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)
    
-   To know about type of pages and profiles available in facebook refer following [link](https://www.facebook.com/business/help/1034727950288693?ref=search_new_2)
    

  

### To create custom fields:

-   [When creating the custom fields for the Lead Ad in the CRM, please make sure to use the supported custom fields listed below:](https://www.facebook.com/help/135275340210354)
    
-   Supported custom fields when using Facebook Lead Ads:
    
-   TEXT
    
-   LARGE\_TEXT
    
-   NUMERICAL
    
-   PHONE
    
-   MONETARY
    
-   SINGLE\_OPTIONS
    
-   DATE
    
-   DROPDOWN (single)
    

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574166/original/fs6OMQibZRM7rOWRpqrDQ-2fB5RWv8N7-g.png?1738063961)

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574167/original/D59qNBDG_jFot6wWM6kgAg3XzoYtyIU1wA.png?1738063961)

We recommend not to update the field names in Facebook forms under settings in FB form creation, as they may impact mapping at GHL end:
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879836/original/_TprjhglwnAVff-g6iyYARMOwuE1_LCK8A.png?1738566799)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879799/original/kK2dUYMteP2LX9JP6z0SbW7eMdF9Rz49Kw.png?1738566756)

  

* * *

  

# How to integrate or manage Facebook Leads Ads with a Sub-Account

Please Note:

Only the User that integrated the FB page will be able to select the pages to connect. They need to have full access to the page in Facebook.  
  

### To setup FB integration:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574168/original/gbroxqoMxNrVqc51OTPEgJkeGA4QlCRAWQ.png?1738063962) 
2.  Click on “Connect” under facebook.
    
3.  Allow necessary permissions.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574164/original/Uk4ydDQ2GLoJGa2BRLU4nngfH6RnKDNvTQ.png?1738063960)
    
4.  Select the pages under the account that you want to connect with GHL.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513652/original/PO2ajSrU79tIB1GmyHY0SVG7ql_B8fzzGg.png?1739432666)
    
5.  Once pages are connected, the next step is to set up the form, map the required fields with GHL fields, and we are all set to go:   
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513779/original/O6EIw4LvuHVjqkZk9yHymjgduGTMhKUOFw.png?1739432757)
    

###   
To disconnect facebook integration:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration 
2.  Go to facebook, and click on 3 dots on the card.
3.  Click on disconnect.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514011/original/_4OkiQDqZbCbHFB5dm6ZtdV7cpFYhdk1pA.png?1739432831)  
    

###   

### To Manage Facebook pages:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration 
2.  Go to facebook, and click on manage pages
    
3.  Select the pages that you want to link and click on update.  
     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514148/original/J6xYTwKVt2I4X4v9dGG0mfr3uRD84VRb6Q.png?1739432912) ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574169/original/JXoe-pEfF5VbLQQbAv4FpbUA1cZgyrc88Q.png?1738063962)
    

###   

### To perform basic troubleshooting or Sync leads manually:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration 
2.  Go to facebook, and click on Troubleshoot
    
3.  In the next screen, the user can find out permissions missing and can manually sync leads.   
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514181/original/HnTqD-fJlm_EHiypwqQPTIZUBseTA7qh2w.png?1739432938)
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514318/original/li_HLAsKa5g32ZmF1NbvsmoquJoTbiYp5g.png?1739433012)

###   

### To enable or disable facebook/instagram messages:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration 
2.  Go to facebook, and click on settings from the hamburger menu.
    
3.  In the next screen, enable the fb and ig messenger for the connected page.  
     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514348/original/E-tcDuInxK5NjylZ73Gdb8utdrkjY0d38Q.png?1739433048) ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574180/original/EkTefRowYarZYOf8i2lBA8jzZ_S2_SKBsw.jpeg?1738063963)
    

###   

### To manage forms:

1.  Go to integrations under sub-account:  
    Subaccount >> Settings >> integration 
2.  Go to facebook form field mapping at top of screen.
    
3.  Find the form you want to edit, update mapping or deactivate. 
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574184/original/TSSzv_OPurgrR5FS8DCes5y0R_r3c9LjZQ.png?1738063964)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574171/original/WmTUb9xKcoXCwekJqwmXu7NJEgYy9vP9iQ.png?1738063962)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574176/original/-G9fc1UrDe6nU5YlQUYnIqekcIH2g5bL9A.png?1738063963)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575611/original/dil23RXiwEazudMemNzjuStjsmN8JIfDag.png?1738065044)  

#   
Troubleshoot:

In case you are having some issues, please refer to the [troubleshooting document for facebook.](https://help.gohighlevel.com/a/solutions/articles/155000004567)