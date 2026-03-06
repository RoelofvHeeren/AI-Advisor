---
title: "HighLevel vs Profitwell vs Stripe MRR"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006997-highlevel-vs-profitwell-vs-stripe-mrr"
category: "Uncategorized"
---

# HighLevel vs Profitwell vs Stripe MRR

**TABLE OF CONTENTS**

-   [Why MRR Can Differ Across Tools](#Why-MRR-Can-Differ-Across-Tools)
-   [Overview: What HighLevel Includes in MRR](#Overview%3A-What-HighLevel-Includes-in-MRR)
-   [Comparison: MRR Calculation Across Platforms](#Comparison%3A-MRR-Calculation-Across-Platforms)
-   [Currency Handling](#Currency-Handling)
-   [Tip: If Your MRR Looks Different](#Tip%3A-If-Your-MRR-Looks-Different)

* * *

## Why MRR Can Differ Across Tools

If you use tools like **ProfitWell** or **Stripe**, you might notice your **Monthly Recurring Revenue (MRR)** numbers differ slightly from what you see in **HighLevel**.

That’s perfectly normal — each platform uses its own interpretation of MRR and applies different timing rules for recognizing revenue events.

At HighLevel, our goal is to provide an **accurate, event-driven**, and **real-time representation** of your recurring revenue across **SaaS** and **Reselling** subscriptions.

  

**Tip:**
If you ever notice a case where MRR looks different from what you expected, please reach out to our **Support Team**.
Our team will be happy to review the subscription data with you and confirm how the calculation applies.

* * *

## Overview: What HighLevel Includes in MRR

| **Dashboard Tab** | **MRR Source** | **Includes** | **Excludes** |
| --- | --- | --- | --- |
| **Summary Tab** | Combined MRR | MRR from **both SaaS and Reselling subscriptions** created inside HighLevel | Subscriptions created outside HighLevel |
| **SaaS Tab** | SaaS MRR | Only MRR from **SaaS subscriptions** | Reselling and external subscriptions |
| **Reselling Tab**  
(Coming Soon)  
 | Reselling MRR | Only MRR from **Reselling subscriptions** | SaaS and external subscriptions |

  

**Important:**
MRR is calculated only from subscriptions **created and managed within HighLevel**.
Subscriptions originating **outside HighLevel** (for example, directly in Stripe) are not included.

* * *

## Comparison: MRR Calculation Across Platforms

| **Scenario** | **HighLevel (HL)** | **ProfitWell** | **Stripe** |
| --- | --- | --- | --- |
| **1️⃣ Cancellation / Churn Timing** | MRR is recognized **until the actual cancellation date** (i.e., the end of the billing cycle). If a subscription is scheduled for cancellation, it remains active until the cycle ends. | Recognizes MRR **until the end of the billing cycle** — i.e., MRR remains until the actual cancellation takes effect. | Cancelling immediately removes MRR **at the time of cancellation**, even if access continues until the end of the period. |
| **2️⃣ New Business and Churn in the Same Month** | Recognizes **both new and churn MRR** if both happen in the same month. | Excludes such customers entirely from that month’s calculation to avoid “double counting” (neither new nor churn recorded). | Recognizes **both** new and churn MRR in the same month, reflecting both transactions. |
| **3️⃣ Discounts and Credits** | Always subtracts discounts and credits **before calculating MRR**, regardless of duration or type. | Subtracts discounts/credits before MRR calculation. | Handles discounts differently: **permanent (forever) coupons** reduce MRR, while **limited-time or one-off coupons** may not. |
| **4️⃣ One-Off Refunds** | **Ignored** from MRR (not recurring). Only recurring price changes affect MRR. | **Ignored** from MRR unless refund permanently alters recurring value. | May reduce MRR if the refund cancels or modifies an active subscription in Stripe. |
| **5️⃣ Paused Subscriptions** | Considered as **contraction**. If resumed, it’s treated as expansion MRR. | Sets MRR to **$0 while paused**, then resumes MRR upon reactivation. | Also sets MRR to **$0 while paused**, with MRR returning when reactivated. |
| **6️⃣ Free Plans / Trials** | **Excluded** from MRR until upgraded to a paid plan. However, they **do count as active subscribers** in other metrics. | **Excluded** from MRR — only paid, recurring subscriptions count. | **Excluded** from MRR; trial revenue not included. |
| **7️⃣ Past-Due Subscriptions** | Treated as **active** until they move to “Cancelled” or “Unpaid” after the dunning process ends. | Same approach — remains active until marked as unpaid or cancelled. | Same — active and contributes to MRR until failure completes dunning and subscription cancels. |

* * *

## Currency Handling

All amounts are **converted into USD** before MRR is calculated.  
This ensures your agency’s dashboard presents comparable data across global customers.

  

**Coming soon:**
Multi-currency support for viewing MRR in your preferred local currency.

* * *

## Tip: If Your MRR Looks Different

If you spot any unexpected variations, for example:

-   A subscription’s MRR looks higher/lower than Stripe, or
    
-   An expansion or churn didn’t appear as expected
    

? **Contact our Support Team** via the in-app chat or submit a support request.  
Our team can trace the subscription events, discounts, and states to confirm how the value was derived.