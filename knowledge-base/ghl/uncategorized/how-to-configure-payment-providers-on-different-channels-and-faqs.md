---
title: "How to configure payment providers on different channels and FAQs"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007346-how-to-configure-payment-providers-on-different-channels-and-faqs"
category: "Uncategorized"
---

# How to configure payment providers on different channels and FAQs

##   

This article explains how payment providers work across different channels, what is supported today, what is planned, and how Default and Preferred provider settings affect checkout behavior.

##   
  
**FAQs**

### **1\. What channels are supported today**

Supported channels today are Funnels One Step Order Forms, Funnels Two Step Order Forms, Forms, Stores, Calendars, Invoices, Invoice Auto Payment, Payment Links, Courses, Communities, Surveys.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064545380/original/6lmlyR9Om2Zf3UJznwK10D8EFkBosDXIXg.png?1770708591)**2\. Which channels are upcoming**

Upcoming channels are driven by community demand and internal priority. You can reach out to the support team, product team, or submit a request on the idea board, and the team can plan expansions accordingly.

###   
**3\. Can I create deep configuration at the channel or asset level**

For example, one Store uses PayPal, another uses Stripe, and a third uses NMI.

Not immediately, but yes this is part of the future plan. The new framework is capable of supporting deeper configurations, and a UI layer can be built to enable provider selection per Store, Funnel, or other individual assets.

###   
**4\. If my Default provider is Stripe, what happens on the Configure Provider page**

The Configure Provider page will show details based on your Default provider configuration, for example Stripe.

This page is designed to override the Default configuration for a specific channel. If you explicitly set a provider at the channel level, checkout will load using that channel level setting instead of the Default provider.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064545379/original/UovX914kYd33PFJQAA3T4iThzRlQeyQEaw.jpeg?1770708592)

###   
**5\. How many payment providers can I set today**

You can select PayPal plus one other provider of your choice.

Multiple non PayPal providers on the same checkout are not supported today. For example, you cannot set PayPal, Stripe, and NMI all together on a single checkout page. This is expected to change in the future as the scope expands.

###   
**6\. What appears in the Provider Selection window**

When a location has a Default payment provider configuration, that provider appears in the Provider Selection window.

A location can have one Default provider plus PayPal.

In the Provider Selection window:  
• If both the Default provider and PayPal are configured, both options are shown  
• If PayPal is not configured, only the Default provider is shown  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064545421/original/7_hfaZqylfhYihMJe2Afk_SjJ_NKHg-ExQ.png?1770708616)

###   
**7\. Can users remove or replace providers in the Provider Selection window**

In the Provider Selection window, the user can remove either option.

Rules:  
• PayPal can be selected in combination with another provider  
• The user can remove PayPal and keep only the other provider  
• The user cannot replace PayPal with another provider, but they can remove PayPal

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064545570/original/3HGwCcnxGzeUA_Hf9Cjn6Lcc9E66nqDaeA.png?1770708752)

###   
**8\. What happens if a Preferred Provider is disconnected**

  
If a user sets a Preferred Provider on any channel and later disconnects that provider from the Integrations page, the system reverts to the Default configuration.

If the provider is reconnected later, the user must re select it as the Preferred Provider before it will be used again.  
  
  

### **9\. Can I remove all payment providers from a channel while keeping them connected, and hide the checkout or payment button on that channel**  
  

No, this is not possible today.

If you try to remove all providers from the Provider Selection for a channel, the system will automatically revert the channel back to the Default provider setting. This is designed to prevent accidental removal of payment options for active services.

If you do not connect or integrate any payment provider at all, then payment options will not show up.