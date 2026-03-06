---
title: "Agency App Reselling Config API"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007194-agency-app-reselling-config-api"
category: "Uncategorized"
---

# Agency App Reselling Config API

Easily surface your agency’s marked-up app prices inside custom plan cards, paywalls, or checkout flows using the new Agency App Reselling Config API. By pulling the exact rebilling configuration HighLevel stores for each sub-account, you guarantee that clients always see the right, white-labeled price—no matter where you sell.

* * *

**TABLE OF CONTENTS**

-   [What is the Agency App Reselling Config API?](#What-is-the-Agency-App-Reselling-Config-API?)
-   [Key Benefits of the Agency App Reselling Config API](#Key-Benefits-of-the-Agency-App-Reselling-Config-API)
-   [Authentication Requirements](#Authentication-Requirements)
-   [Key points](#Key-points)
-   [Response Objects & Pricing Types](#Response-Objects-&-Pricing-Types)
-   [Best Practices for Displaying Prices](#Best-Practices-for-Displaying-Prices)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is the Agency App Reselling Config API?**

  

The Agency App Reselling Config API (technically the Get Rebilling Config for App endpoint) is a Marketplace‐developer REST endpoint that returns the final, client-facing prices an agency has set for a specific app. When called with a sub-account OAuth token, the API responds with every active subscription, one-time, and usage-based rate so you can render prices that match the Marketplace and the Agency’s internal billing rules. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060766936/original/X2hgGWeK5Y-K7B6RHJ5z1TLVbZO6FkL51Q.png?1765918492)

* * *

## **Key Benefits of the Agency App Reselling Config API**

  

-   Prevents price mismatches between your custom UI and HighLevel’s native Marketplace.  
      
    
-   Protects internal cost prices—only the agency’s upsell price is returned.  
      
    
-   Supports every billing model (subscription, one-time, usage-based) in a single call.  
      
    
-   Keeps checkout flows white-labeled; sub-accounts never see HighLevel branding.  
      
    
-   Simplifies maintenance—no more hard-coding plan IDs or mark-ups. 

* * *

## **Authentication Requirements**

  

A valid sub-account (location) access token is required because pricing can vary by agency and by client. Calling the endpoint with an agency or developer token will return 403 Forbidden. 

* * *

## **Key points**

  

-   OAuth-2.0 Authorization Code or Refresh-Token flow.  
      
    
-   The token scope must include [marketplace.app.read.](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app/index.html)  
      
    
-   Rate-limit: 60 requests/min per app (subject to change).

* * *

## **Response Objects & Pricing Types**

  

The JSON response is namespaced under subscriptionPlans, oneTimePlans, and usageMeters—each array containing planId, planName, currency, price, and billingInterval. These fields let you build dynamic UI elements such as:

  

-   Monthly/annual toggle buttons (use billingInterval).  
      
    
-   Usage tiers charts (use included units and overage rate).  
      
    
-   Limited-time offers (use planName or metadata tags).

* * *

## **Best Practices for Displaying Prices**

  

Build trust and reduce cart abandonment by:

  

-   Refreshing prices in real time when a user changes plan quantity or billing cycle.  
      
    
-   Caching the response for 5–10 minutes to minimise API calls without showing stale data.  
      
    
-   Clearly labelling currency and billing interval to avoid ambiguity.  
      
    
-   Using agency colours and typography to keep the experience fully white-labeled.  
      
    
-   Testing edge cases where the agency removes a plan or sets price to 0.

* * *

## **Frequently Asked Questions**

  

**Q: Does the API return prices in the agency’s default currency?**

Yes. Each object includes a currency field so you can display the correct symbol.

  

  

**Q: What happens if the agency has not enabled rebilling for a sub-account?**

The endpoint still responds, but price values equal the base Marketplace cost (no markup).

**Q: How often should I refresh prices?**

Best practice is on page load and whenever the client changes plan options, with server-side caching of 5–10 minutes to respect rate limits.

  

  

**Q: Can I call this API with an agency-level token?**

No. You must use a sub-account token; agency tokens will receive 403 Forbidden. ([marketplace.gohighlevel.com](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app/index.html))

  

  

**Q: Does the response include coupon or promotional discounts?**

Not at this time. You’ll need to compute and display discounts in your own logic.

  

  

**Q: Is the endpoint rate-limited?**

Yes—currently 60 requests per minute per app (subject to change). Return 429 means you exceeded the limit.