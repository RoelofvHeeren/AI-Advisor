---
title: "FAQs for Affiliate Payouts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003661-faqs-for-affiliate-payouts"
category: "Uncategorized"
---

# FAQs for Affiliate Payouts

**TABLE OF CONTENTS**

-   [What steps are mandatory to use the Auto Payout feature?](#What-steps-are-mandatory-to-use-the-Auto-Payout-feature?)
-   [How do I hide the PayPal button from my Funnel/Website's order forms after integrating PayPal for affiliate payouts?](#How-do-I-hide-the-PayPal-button-from-my-Funnel/Website's-order-forms-after-integrating-PayPal-for-affiliate-payouts?)
-   [Who has permission to pay affiliates using PayPal auto-payouts?](#Who-has-permission-to-pay-affiliates-using-PayPal-auto-payouts?)
-   [How are payouts for recurring products handled when using PayPal?](#How-are-payouts-for-recurring-products-handled-when-using-PayPal?)
-   [Why can't I process payouts for some affiliates using PayPal?](#Why-can't-I-process-payouts-for-some-affiliates-using-PayPal?)

  

* * *

## **What steps are mandatory to use the Auto Payout feature?**

There are two mandatory requirements to enable and use this feature:

1.  Paypal Business Account Integration ([Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000002339))
2.  Paypal of Affiliates added under Payout Methods ([Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000002341))

* * *

## **How do I hide the PayPal button from my Funnel/Website's order forms after integrating PayPal for affiliate payouts?**

To hide the PayPal button from your order forms but still use PayPal for affiliate payouts, follow these steps:

1.  Open the Funnel or Website where you want to hide the PayPal button.
2.  Go to the **Settings** tab.
3.  Paste the following code in the **Head Tracking Code**section:
    
    <style>.paypal-content {
      display: none;
    }
    .order-form-v2 > div > .divider {
      display: none;
    }
    </style>
    
4.  Click **Save**

This will hide the PayPal option from appearing on your order forms while retaining the PayPal integration for affiliate payouts.

* * *

## **Who has permission to pay affiliates using PayPal auto-payouts?**

Only **Agency Admins** and **Account Admins** have permission to pay affiliates using the PayPal auto-payout method.

* * *

## **How are payouts for recurring products handled when using PayPal?**

Payouts for recurring products are automatically generated, but you will still need to manually click the **"Pay Now"** button to complete the payment via PayPal. GHL does not process payouts automatically due to security and authentication concerns.

* * *

## **Why can't I process payouts for some affiliates using PayPal?**

Payouts can only be processed for affiliates who have a PayPal account added as their payout method. If an affiliate doesn't have a linked PayPal account, you'll see an error icon and the option to **"Add Account."**

* * *