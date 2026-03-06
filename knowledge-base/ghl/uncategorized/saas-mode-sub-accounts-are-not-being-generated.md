---
title: "SaaS Mode Sub-Accounts Are Not Being Generated"
url: "https://help.gohighlevel.com/support/solutions/articles/48001183981-saas-mode-sub-accounts-are-not-being-generated"
category: "Uncategorized"
---

# SaaS Mode Sub-Accounts Are Not Being Generated

If you are testing the 2-step order form tied to a SaaS Mode plan and the sale is not generating a new sub-account, the issue is likely that your sub-account is using "Test Mode" API keys from Stripe.

  

Note: For SaaS Mode to work:

  

1) The sub-account where you'll be building the sales page with a 2-step order form tied to your SaaS Mode plans must be integrated with the same Stripe account that the agency account is integrated with.

  

2) Both the sub-account and the agency account need to be integrated with live Stripe API keys. To find your Stripe API keys, please refer to this [Stripe Help Article on locating API keys](https://support.stripe.com/questions/locate-api-keys-in-the-dashboard). Also, be sure to use a valid credit card when testing, which you can then refund within Stripe when testing is complete.