---
title: "Private Integrations: Everything you need to know"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know"
category: "Uncategorized"
---

# Private Integrations: Everything you need to know

## 

Private Integrations allow you to build secure, custom connections between your HighLevel account and any third-party application. This feature is ideal for internal tools, automated workflows, and custom systems that need API access without building a full public app.

  

**IMPORTANT**: For a full list of available endpoints and request/response details, visit our official API documentation: [https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/)[](https://marketplace.gohighlevel.com/docs/)[](https://marketplace.gohighlevel.com/docs/)

* * *

[](https://help.leadconnectorhq.com/support/solutions/articles/155000002774-private-integrations-everything-you-need-to-know#How-do-I-create-a-new-Private-Integration?)[](https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know#How-do-I-create-a-new-Private-Integration?)

* * *

**TABLE OF CONTENTS**

-   [What are Private Integrations?](#What-are-Private-Integrations?)
-   [What's the difference between Private Integrations and API Keys?](#What's-the-difference-between-Private-Integrations-and-API-Keys?)
-   [What's the difference between Private Integrations and OAuth2 Access Tokens?](#What's-the-difference-between-Private-Integrations-and-OAuth2-Access-Tokens?)
-   [How do I use Private Integrations?](#How-do-I-use-Private-Integrations?)
-   [Testing a Private Integration with API Calls](#Testing-a-Private-Integration-with-API-Calls)
-   [How do I manage Private Integrations?](#How-do-I-manage-Private-Integrations?)
-   [Where can I find Private Integrations?](#Where-can-I-find-Private-Integrations?)
-   [How do I create a new Private Integration?](#How-do-I-create-a-new-Private-Integration?)
-   [What are some best practices to maintain the security of my private integration token?](#What-are-some-best-practices-to-maintain-the-security-of-my-private-integration-token?)
-   [Token compromised?](#Token-compromised?)
-   [Can I edit the Private Integration permissions without updating the token?](#Can-I-edit-the-Private-Integration-permissions-without-updating-the-token?)
-   [How do I delete the Private Integration once I no longer need it?](#How-do-I-delete-the-Private-Integration-once-I-no-longer-need-it?)

* * *

## **What are Private Integrations?**

  

Private Integrations allows you to build powerful custom integrations between your HighLevel account and any other third-party app. 

  

If you are looking to integrate your HighLevel account with a third-party app, you have two options:

  

-   Find and install the relevant app from the App Marketplace  
      
    
-   Build your own private integration by yourself or with the help of a developer using APIs.

  

Private Integrations helps you achieve #2 securely.

  

  

The key advantages of using Private Integrations are:  
  

-   **Simple**: Generate Private Integration tokens from your account settings and manage them with ease.  
      
    
-   **Secure:** You get to restrict the scopes/permissions that a developer can access on your account

  

Private Integrations are available for both Agencies and Sub-Accounts. To know more about the sub-accounts' Private Integrations feature, [click here](https://help.leadconnectorhq.com/support/solutions/articles/155000002774-private-integrations-everything-you-need-to-know).

* * *

## **What's the difference between Private Integrations and API Keys?**

  

Private Integrations, to put it simply, is more powerful yet secure alternative to API Keys.

  

<table style="width: 100%;"><tbody><tr><td dir="ltr" style="width: 50%; background-color: rgb(65, 168, 95);"><div style="text-align: center;"><strong dir="ltr"><span dir="ltr" style="color: rgb(255, 255, 255);">Private Integrations</span></strong></div></td><td dir="ltr" style="width: 50%; background-color: rgb(209, 72, 65);"><div style="text-align: center;"><strong dir="ltr"><span dir="ltr" style="color: rgb(255, 255, 255);">API Keys</span></strong></div></td></tr><tr><td dir="ltr" style="width: 50.0000%;"><strong dir="ltr">More Secure</strong>: You get to restrict the scopes/permissions that a developer can access on your account&nbsp;</td><td dir="ltr" style="width: 50.0000%;"><strong dir="ltr">Less Secure</strong>: A developer gets unrestricted access to all your account data&nbsp;</td></tr><tr><td dir="ltr" style="width: 50.0000%;"><strong dir="ltr">State-of-the-art</strong>: <span dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">Private Integrations allows you to access API v2.0, which is state of the art.</span></td><td dir="ltr" style="width: 50.0000%;"><strong>Outdated</strong>: API Keys work on API v1.0, which has reached end-of-life and is no longer maintained.</td></tr><tr><td dir="ltr" style="width: 50.0000%;"><strong dir="ltr">More Features:&nbsp;</strong>API v2.0 has more powerful APIs</td><td dir="ltr" style="width: 50.0000%;"><strong dir="ltr">Fewer Features</strong>: API v1.0 has limited APIs</td></tr></tbody></table>

* * *

## **What's the difference between Private Integrations and OAuth2 Access Tokens?**

  

Private Integrations, to put it simply, is static/fixed OAuth2 Access Tokens.

  

<table style="box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; max-width: 100%; border: none; empty-cells: show; cursor: default; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; width: 718px;"><tbody style="box-sizing: border-box;"><tr style="box-sizing: border-box; user-select: none;"><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px; background-color: rgb(97, 189, 109);"><div style="box-sizing: border-box; word-break: normal; overflow-wrap: break-word; font-size: 13px; line-height: 1.4; text-align: center;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;"><span dir="ltr" style="box-sizing: border-box; color: rgb(255, 255, 255);">Private Integrations</span></strong></div></td><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px; background-color: rgb(226, 80, 65);"><div style="box-sizing: border-box; word-break: normal; overflow-wrap: break-word; font-size: 13px; line-height: 1.4; text-align: center;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;"><span dir="ltr" style="box-sizing: border-box; color: rgb(255, 255, 255);">Access Tokens</span></strong></div></td></tr><tr style="box-sizing: border-box; user-select: none;"><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;">Generated from the UI</strong>: The Private Integration token can be generated easily from the UI.</td><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;">Programmatic Generation</strong>: API Tokens are generated by exchanging an OAuth access code for the tokens using <a href="https://highlevel.stoplight.io/docs/integrations/00d0c0ecaa369-get-access-token" rel="noopener noreferrer" target="_blank">Get Access Token API</a>.</td></tr><tr style="box-sizing: border-box; user-select: none;"><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;">Static/Fixed</strong>: Private Integration Tokens are static/fixed and do not automatically refresh unless you rotate them from the UI.</td><td dir="ltr" style="box-sizing: border-box; padding: 4px; min-width: 5px; user-select: text; cursor: text; font-size: 13px; border: 1px solid rgb(175, 175, 175); width: 358.5px;"><strong dir="ltr" style="box-sizing: border-box; font-weight: 700;">Refreshed Daily</strong>: Access Tokens expire daily and need to be refreshed.</td></tr></tbody></table>

* * *

## **How do I use Private Integrations?**

  

Private Integration tokens are used in the Authorisation header, just like other Access Tokens.  
For example, to get a location's details, you can use [Get Sub-account API](https://highlevel.stoplight.io/docs/integrations/d777490312af4-get-sub-account-formerly-location) with the Agency's Private Integration Token in the Authorisation header.

  

curl --request GET \\
  --url https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT \\
  --header 'Accept: application/json' \\
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \\
  --header 'Version: 2021-07-28'

* * *

## **Testing a Private Integration with API Calls**

  

Once your Private Integration is created, you may want to test it by pushing data to an API endpoint. you will need the correct API endpoint URL to do this.

  

Here’s an example of how to test the integration by adding a new contact:

  

curl --request POST \\
  --url https://services.leadconnectorhq.com/contacts/ \\
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \\
  --header 'Content-Type: application/json' \\
  --header 'Version: 2021-07-28' \\
  --data '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "locationId": "LOCATION\_ID"
  }'

  

Make sure to:

  

-   Replace LOCATION\_ID with the actual sub-account ID.
-   Replace Authorization value with your generated Private Integration token.

  

For a full list of available endpoints and testing capabilities, visit our official developer documentation: [https://developers.gohighlevel.com](https://developers.gohighlevel.com)

* * *

## **How do I manage Private Integrations?**

  

### **Who can create Private Integrations?**

  

By default, all agency admins can create and manage Private Integrations. 

However, you can restrict this permission at a user level. To do this, Navigate to Settings > Team > Edit the specific agency admin > Roles & Permissions, and enable/disable Private Integrations for the agency admin.

  

You may apply the restrictions at two levels:

1.  Allow the agency admin to view and manage the agency's private integrations  
      
    
2.  Allow the agency admin to view and manage the sub-accounts' private integrations  
      
    

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030659842/original/6lOsxQuiq4N2bHX6ewlVrmDuEAnUy9QDpQ.png?1723109565)

* * *

## **Where can I find Private Integrations?**

  

You can find Private Integrations under agency settings. If you don't find it under settings, please make sure that you have enabled the feature on Labs.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660190/original/wGql6-BrqjOpzKCG65lxrkC9FH-3G8CjaQ.png?1723109743)

* * *

## **How do I create a new Private Integration?**

  

### **Step 1**: Click on "Create new Integration"

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029013962/original/yvAW6A_NW5gJMcSx395zGtXk6qkFXs3o5A.png?1720610156)

  

  

### **Step 2**: Give your Private Integration a name and description to help you and your team identify what it's for.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029014111/original/ZPgWRbFa4SBbD-MteF42NGBCtFc_Web7EA.png?1720610257)

  

  

### **Step 3**: Select the scopes/permissions that you want the private integration to have access to on your agency account. Ensure that you are selecting only the required scopes for better data security.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660243/original/EefivfaL6w17chXrSdbaMXTnd9oQs26hNg.png?1723109797)

  

  

### **Step 4**: Copy the token generated and share it with your third-party app developer. 

Please ensure that you are sharing the token with trusted parties only. Do not share it publicly.

  

**Note:** Don't forget to copy the token generated as you won't be able to do it again later.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056315/original/iDIuSpkuzyH_p2OdR30IDSvLE7CxS05gQQ.png?1720669606)

* * *

## **What are some best practices to maintain the security of my private integration token?**

  

We recommend that you rotate your Private Integration tokens every 90 days.

Here's how you can do it.

###   

### **Step 1**: Navigate to Private Integrations under settings, and click on the Private Integration you have created.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

  

### **Step 2**: Click on "Rotate and expire this token later".

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055790/original/jZAec5alCqx2g3Mz7J4HCW1gpw2dzTHFTQ.png?1720667388)

  

  

### **Step 3**: Click "Continue" in response to the warning message if you are sure that you want to proceed with rotation. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055827/original/M40HLVVe3lBbA0BQ5UX-27DLtKK4PbJOkw.png?1720667577)

  

  

### **Step 4**: Copy the new token and update it on your third-party app. 

You will have a 7-day window where both the old and the new tokens will continue to work. After 7 days, the old token will expire. In this 7-day window, you will have the option to:

  

-   "Cancel rotation" if, for example, your developer needs more time to update the token on the third-party app.  
      
    
-   "Expire Now", if, for example, the third-party app has been updated with the new token.

  

**Note:** Don't forget to copy the token generated as you won't be able to do it again later. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055978/original/cs7V4-owR-cA74RwmVmxGDPnAAoecXYpwg.png?1720667942)

* * *

## **Token compromised?**

  

### **Step 1**: Navigate to Private Integrations under settings, and click on the Private Integration you have created.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

  

### **Step 2**: Click on "Rotate and expire this token now".

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056233/original/1CO8ADONFx1V4l2rZnWDSVNrd5t8mM2NgQ.png?1720669161)

  

  

### **Step 3**: Click "Continue" in response to the warning message if you are sure that you want to proceed with rotation. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056251/original/OKlV-5OLCEpFvIO_Ku-xOShU5kLoOKQGRg.png?1720669252)

  

  

### **Step 4:** Copy the new token and update it on your third-party app.

  

**Note:** Don't forget to copy the token generated as you won't be able to do it again later.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056314/original/qTmiWdCADNy02lzHwiGrcrfcOs-HAQIL2w.png?1720669590)

* * *

## **Can I edit the Private Integration permissions without updating the token?**

  

Yes, you can edit the Private Integration name, description and scopes/permissions any time after you've created it.

Here's how you can do it.

  

### **Step 1**: Navigate to Private Integrations under settings, and select "Edit" from the three-dot menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056506/original/g5TVdfhF6e56Uj9eU3F-f8MDjhINdvwySQ.png?1720670453)

  

  

### **Step 2**: Update the Private Integration name and description if required. Click on "Next".

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056523/original/QUgMnaLVazAjL3yWgsZGd5ruujrP6WQgUg.png?1720670492)

  

  

### **Step 3**: If required, update the scopes/permissions that you want the private integration to have access to on your account. 

  

Ensure that you are selecting only the required scopes for better data security. Click on "Update" to save the updates made.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056555/original/-CYsioGb7fLRhBOW-4IaGpOmbrFmYWTp3Q.png?1720670598)

  

  

**Note**: Updating the Private Integration details does not generate a new token. The existing token will continue to work.

* * *

## **How do I delete the Private Integration once I no longer need it?**

  

You can delete the Private Integration once you no longer use the third-party app. To do so, navigate to Private Integrations under settings, and select "Delete" from the three-dot menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056627/original/_JO1Og2ifY43mlxGgIYT1HGFpwUtB445eA.png?1720670808)