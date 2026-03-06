---
title: "SaaS Mode FAQs"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002129-saas-mode-faqs"
category: "Uncategorized"
---

# SaaS Mode FAQs

**TABLE OF CONTENTS**

-   [Billing and Wallet](#Billing-and-Wallet)
    -   [How do I delete the last card from the Sub-account settings > Company billing page?](#How-do-I-delete-the-last-card-from-the-Sub-account-settings-%3E-Company-billing-page?)
    -   [When I add or remove a card from one sub-account, why is it reflected in other sub-accounts as well?](#When-I-add-or-remove-a-card-from-one-sub-account,-why-is-it-reflected-in-other-sub-accounts-as-well?)
    -   [Why is the client unable to add payment details on the sub-account's company billing page?](#Why-is-the-client-unable-to-add-payment-details-on-the-sub-account's-company-billing-page?%C2%A0) 
    -   [Why are Indian clients unable to add payment details or manually recharge on the sub-account's company billing page?](#Why-are-Indian-clients-unable-to-add-payment-details-or-manually-recharge-on-the-sub-account's-company-billing-page?)
    -   [Why are auto recharges failing for 3DS cards?](#Why-are-auto-recharges-failing-for-3DS-cards?)
-   [Welcome Email](#Welcome-Email)
    -   [Why are custom values not populated in the welcome email?](#Why-are-custom-values-not-populated-in-the-welcome-email?)
    -   [What is the subject line of the welcome email?](#What-is-the-subject-line-of-the-welcome-email?)
    -   [Why did the customer receive the default "Activate your account" welcome email instead of the custom welcome email, even though the customized email is present in the SaaS configurator?](#Why-did-the-customer-receive-the-default-)
    -   [Who will receive the welcome email?](#Who-will-receive-the-welcome-email?)
    -   [How to change the welcome email's agency sub-account if the customer chose the wrong sub-account?](#How-to-change-the-welcome-email's-agency-sub-account-if-the-customer-chose-the-wrong-sub-account?)
-   [Sub-Accounts and Subscriptions](#Sub-Accounts-and-Subscriptions)
    -   [Why were duplicate sub-accounts created instead of attaching the subscription to the existing sub-account?](#Why-were-duplicate-sub-accounts-created-instead-of-attaching-the-subscription-to-the-existing-sub-account?)
    -   [Why aren't the sub-accounts getting created when the client purchases the subscription via funnels?](#Why-aren't-the-sub-accounts-getting-created-when-the-client-purchases-the-subscription-via-funnels?)
    -   [How do I move the subscription from one sub-account to another sub-account that has no subscription?](#How-do-I-move-the-subscription-from-one-sub-account-to-another-sub-account-that-has-no-subscription?)
    -   [Why aren't the agency or sub-account admins getting an option to upgrade the plan?](#Why-aren't-the-agency-or-sub-account-admins-getting-an-option-to-upgrade-the-plan?)
    -   [How to seamlessly transfer SaaS accounts to another agency?](#How-to-seamlessly-transfer-SaaS-accounts-to-another-agency?)
-   [SaaS Configurator](#SaaS-Configurator)
    -   [Why is the "Invalid price currency" banner shown on the SaaS configurator list page?](#Why-is-the-)
    -   [How to disconnect the agency Stripe Connect? Why is the "Can't disconnect because SaaS clients are using this Stripe account!" warning shown for $97 and $297 agencies as well? Why is there no option to disable SaaS on the Manage Client page?](#How-to-disconnect-the-agency-Stripe-Connect?-Why-is-the-)
-   [Security](#Security)
    -   [Even though 2-Factor Authentication is turned off in SaaS Configurator > Security, why does it still require 2FA to be completed?](#Even-though-2-Factor-Authentication-is-turned-off-in-SaaS-Configurator-%3E-Security,-why-does-it-still-require-2FA-to-be-completed?)

* * *

## **Billing and Wallet**  
  

### **How do I delete the last card from the Sub-account settings > Company billing page?**

  
If only 1 card is added to a sub-account, then that cannot be deleted from the company billing page inside HighLevel. If required, the agency can delete the card directly from Stripe by updating the corresponding customer.

  

### **When I add or remove a card from one sub-account, why is it reflected in other sub-accounts as well?**

  
From the Manage Client page, retrieve the Stripe customer ID of each sub-account and verify if they are the same.

If they are the same, then the Stripe customer is shared between the sub-accounts, and this behavior is expected.

  
If you do not want this to happen, the only solution is to assign different Stripe customers to each sub-account. To do this:

  
Keep the SaaS mode active for only one sub-account and disable SaaS for the other account

  
Re-enable using the "Share a link or Request via SMS or Request via email" option. This will create a new customer in Stripe and link it to that sub-account.

  

### **Why is the client unable to add payment details on the sub-account's company billing page?** 

  
If they received the error message 'No such customer' or 'stripe.confirmPayment(): expected either elements  or \`clientSecret\`, but got neither.'

  
The reasons could be that the Stripe customer associated with that sub-account has been permanently deleted, or the agency's Stripe account might have been changed. There are two ways the agency's Stripe account might have been changed: either directly in the agency settings > Stripe, or the sub-account might have been transferred from another agency.

  
The only solution to fix this is to disable and re-enable SaaS for that sub-account.

  

### **Why are Indian clients unable to add payment details or manually recharge on the sub-account's company billing page?**

  
If they received the error message saying "As per Indian regulations, export transactions require a customer name and address. You can find more information here https://stripe.com/docs/india-exports", this means that billing address is not added for that customer, hence are not compliant with RBI mandate.

To solve this, you need to update the billing address for that customer on Stripe.

  

### **Why are auto recharges failing for 3DS cards?**

  
For auto recharge, we do not support 3DS-only cards. The auto recharge might be failing because the customer is using a 

3DS-only card. Please request them to add a new payment method that supports 3DS but is not a 3DS-only cards.

Alternatively, they can still do manual recharges for their wallet.

  

### **What happens when SaaS is disabled for any of the sub-accounts?**

  
Upon disabling SaaS, the **wallet will be permanently deleted**, and the agency must handle any refunds if necessary.  

Following the disabling of the SaaS mode, the agency will receive an email with the existing wallet balance. The agency can then choose to either refund it or add them as credits manually on the Manage Client page.

* * *

## **Welcome Email**

### **  
Why are custom values not populated in the welcome email?**

  
The agency might have directly updated the custom values inside the sub-account. We only support a few custom values, so the agency must update the custom values only in the SaaS Configurator. To know all the custom fields supported for welcome email, go to SaaS Configurator > Advanced Settings > Customize Welcome Email > Custom Values.

  

### **What is the subject line of the welcome email?**

  
"Activate your Account"

  

### **Why did the customer receive the default "Activate your account" welcome email instead of the custom** **welcome email, even though the customized email is present in the SaaS configurator?**

  
Switch to the sub-account on which the customer stored the custom welcome email and verify whether the "template" is present in the "\[Do Not Edit\] SaaS Configurator Templates" folder. If the template is deleted, the customer will receive the default "Activate your account" welcome email. To fix this, please raise a support ticket for reset your agency welcome email.

  

### **Who will receive the welcome email?**

  
All new users that are created in any sub-account will receive that email.

  

### **How to change the welcome email's agency sub-account if the customer chose the wrong sub-account?**

  
Please raise a support ticket for reset your agency welcome email.

* * *

## **Sub-Accounts and Subscriptions**

###   
**Why were duplicate sub-accounts created instead of attaching the subscription to the existing sub-account?**

  
Whenever the client purchases a SaaS subscription directly on Stripe or via funnels or a sale link, we create a new sub-account. If the sub-account already exists, in that case, you need to add a subscription only via the Manage Client page to avoid a new sub-account being created.

  

### **Why aren't the sub-accounts getting created when the client purchases the subscription via funnels?**

  
Verify whether the product added in the funnels is tagged as an agency plan under Payments > Products.

Sub-accounts are only created if the product is tagged as an agency plan.

  
If the product is tagged as an agency plan and sub-accounts still aren't created, please share the order ID or subscription ID and the date when the subscription was purchased with our support team for further investigation.

  

Importing SaaS plans to your sub-account:  
  

1.  Create plan in SaaS configurator  
      
    
2.  Switch to your sub-account > Payments > Products  
      
    
3.  Select 'Import from Stripe'  
      
    
4.  Select the product that you just created (or that already existed), proceed  
      
    
5.  Check for the 'Agency\_Plan' label in products list, and start selling.

  

### **How do I move the subscription from one sub-account to another sub-account that has no subscription?**

  
Let's say sub-account 'B' has no subscription, and you want to move the subscription from sub-account 'A' to 'B'.  
  

1\. Verify that both of the sub-accounts are associated with the same Stripe customer.  
  

2\. From the Manage Client page, for sub-account 'A', disable SaaS without canceling the subscription.  
  

3\. Do a hard reload on the sub-account 'B's Manage Client page. The subscription will be automatically attached.

### **Why aren't the agency or sub-account admins getting an option to upgrade the plan?**

  
Navigate to the SaaS configurator and filter the SaaS plans by category. If the plan associated with the sub-account is already a higher plan, then we will not show an option to upgrade the subscription.

  

### **How to seamlessly transfer SaaS accounts to another agency?**

  
The ideal way to move the SaaS accounts to another agency is to disable SaaS for all the sub-accounts and then transfer them to another agency. Once the SaaS mode is disabled, you will receive an email with the existing wallet balance. You can then choose to either refund it or add them as credits manually in the Manage client page.     
  

Learn how to transfer sub-accounts to other agencies [here](https://help.gohighlevel.com/a/solutions/articles/155000002031?portalId=48000045315).

* * *

## **SaaS Configurator**

### **  
Why is the "Invalid price currency" banner shown on the SaaS configurator list page?**

  
Verify the currency of the category from SaaS Configurator > Advance Settings. If the price currency is not the same as the category currency, then the "Invalid price currency" banner is shown. To fix this, you need to revert the currency of the price to the category currency from Stripe.

  

If a sale link has been previously generated for the price or it has any active subscriptions, then Stripe will not allow changing the currency. To solve this, please update the price amount from the SaaS configurator, and then update the currency for the new price created inside Stripe.

  

### **How do I disconnect the agency Stripe Connect?**

  
HighLevel prevents disconnecting Stripe Connect when active client billing depends on it (for example, sub-accounts with active subscriptions using the connected Stripe account).  
  

1.  In **Agency view**, go to **Settings → Stripe Connect**.  
    
2.  Click **Disconnect**.  
      
    
3.  If HighLevel detects conflicts, the page lists the **affected sub-accounts** (for example, those with **active subscriptions**) so you can see exactly what is blocking the disconnect.  
      
    
4.  Use the provided CTAs to **disconnect payments** for impacted sub-accounts, then retry the disconnect.  
      
    

**Tip:** This workflow is designed to help you resolve conflicts without contacting Support by showing which clients are impacted and where to fix them.

* * *

## **Security**

### **Even though 2-Factor Authentication is turned off in SaaS Configurator > Security, why does it still require 2FA to be completed?**

  
Whenever a new sub-account is created, email verification is mandatory. Only the phone verification settings can be configured under "SaaS Configurator > Security".

  
It's important to note that 2FA will not block client's access to the sub-account. They only need to complete email verification during the first phone number purchase. If the you want to bypass this for any sub-account, then on the Manage Client page, select the "Verify Account" button.

  

### **Why is rebilling not enabled for sub-accounts, and why has the sub-account not been moved to LC?**

  
On the sub-account list, please verify if a banner with the following message is displayed:

"This sub-account is paused due to pending email and phone verification from the sub-account admin. Click here to review and resume this sub-account."

  
If yes, then it means that the sub-account is in a **"verification pending"** state, in other words, **2FA is pending** for the sub-account(s).

  
This is why the sub-account was not moved to "LC," and rebilling is not enabled. Once the 2FA is verified, the sub-account will be automatically moved to LC, a Twilio account will be created, and rebilling will also be automatically enabled if it is enabled on the SaaS Plan.

  
It's important to note that 2FA will NOT block client's access to the sub-account. They only need to complete email verification during the first phone number purchase.