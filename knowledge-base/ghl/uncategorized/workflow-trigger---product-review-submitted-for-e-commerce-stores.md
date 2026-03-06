---
title: "Workflow Trigger - Product Review Submitted (for E-commerce Stores)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007386-workflow-trigger-product-review-submitted-for-e-commerce-stores-"
category: "Uncategorized"
---

# Workflow Trigger - Product Review Submitted (for E-commerce Stores)

Automate your review-management workflows in seconds. The new Product Review Submitted trigger for HighLevel Ecommerce Stores fires the instant a customer leaves a review, allowing you to thank buyers, request additional feedback, or flag low-star submissions without lifting a finger.

* * *

**TABLE OF CONTENTS**

-   [What is the Product Review Submitted Trigger?](#What-is-the-Product-Review-Submitted-Trigger?)
-   [Key Benefits of the Product Review Submitted Trigger](#Key-Benefits-of-the-Product-Review-Submitted-Trigger)
-   [How To Set Up the Product Review Submitted Trigger](#How-To-Set-Up-the-Product-Review-Submitted-Trigger)
    -   [Create Workflow](#Create-Workflow)
    -   [Add Trigger](#Add-Trigger)
    -   [Locate Trigger](#Locate-Trigger)
    -   [Name Trigger](#Name-Trigger)
    -   [Add Filters](#Add-Filters)
    -   [Global Product Filter](#Global-Product-Filter)
    -   [Review Comment Filter](#Review-Comment-Filter)
    -   [Review Headline Filter](#Review-Headline-Filter)
    -   [Review Rating Filter (Star)](#Review-Rating-Filter-\(Star\))
    -   [Store Filter](#Store-Filter)
    -   [User Email & User Name Filters](#User-Email-&-User-Name-Filters)
    -   [Save Trigger](#Save-Trigger)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What is the Product Review Submitted Trigger?**

When a shopper clicks “Submit review” on any HighLevel store product, this workflow trigger captures the event, pulls in the review details (rating, headline, comment, reviewer info, store, and product), and immediately launches the automation you define. 

  

It lives under Automations → Workflows → Add Trigger → Ecommerce Stores.

* * *

## **Key Benefits of the Product Review Submitted Trigger**

  

-   **Instant engagement:** Email or SMS customers the moment feedback is received, boosting post-purchase loyalty.
    

  

-   **Hands-free moderation:** Auto-route 1- or 2-star reviews to your support inbox for priority handling.
    

  

-   **Social proof amplification:** Push 5-star reviews to Slack or Google Sheets for quick repurposing on ads and landing pages.
    

  

-   **Granular targeting:** Combine rating, headline, and product filters to build highly specific follow-ups.
    

  

-   **Cross-store flexibility:** Isolate automations by Store Name when you manage multiple storefronts.
    

* * *

## **How To Set Up the Product Review Submitted Trigger**

  

A properly configured trigger ensures every review lands in the right automation. Follow these steps:

  

### **Create Workflow**

  

On **Automation → Workflows**, review your existing workflows you can edit one or duplicate it to implement this trigger or click **\+ Create Workflow** to start a new one. 

  

From the menu, choose **Start from Scratch**, or pick **Build Using AI**, **Select from Template**, **Import from a campaign**, or any account-specific beta options.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258309/original/hDLtci6TltZxyyooAPdryLvc9HAPr1L48w.png?1771503515)

  

  

### **Add Trigger**

  

While inside the **Workflow Builder** tab, click **Add Trigger** to choose the event that will start this automation. The trigger drawer opens within the builder (beside the **Settings**, **Enrollment History**, and **Execution Logs** tabs), letting you keep building as you select **Ecommerce Stores** options.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258401/original/USXWCzOt7CDL2hOgxYYIJJ75LJPVT3H32w.png?1771503547)

  

  

### **Locate Trigger**

  

In the **Add Trigger** drawer, **scroll down** to find **Product Review Submitted** under **Ecommerce Stores.** Click **Product Review Submitted** to select it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258227/original/kNZ79q5wrGciw_zF80u-6hh2id0JeHupUA.png?1771503494)

  

  

### **Name Trigger**

  

Enter a clear **Workflow Trigger Name** (e.g., “1-Star Review Rescue” or “5-Star UGC Push”) to reflect the purpose of this automation. A descriptive name makes it easy to recognize in the workflow list and execution logs when troubleshooting or scaling.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258479/original/EJhrveauiM_kqsmBmaaYv2huF6U0bR8gUg.png?1771503576)

  

### **Add Filters**

  

Use **Add filters** to define the conditions a review must meet to enroll in this workflow. Add one or more criteria product, rating, store, comment keywords, or reviewer email/name and use **Require All** vs **Require Any** to narrow or broaden targeting; leave filters off to capture every review.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065266224/original/Rq4eRW0Mq9OfkTU6qizJqxmBB3BmhynNuw.png?1771507370)

  

  

### **Global Product Filter**

  

Under **Filters**, select **Global Product** with the operator **Is**, then pick the single catalog item this workflow should watch. This limits the trigger to reviews submitted for that exact product useful for launches, VIP items, or product-specific follow-ups.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258510/original/MEzlpaZ58BOWny_ucUKTsJBnTd2y0QoOeg.png?1771503595)

  

  

### **Review Comment Filter**

  

Add a **Review Comment** filter and choose **Contains Phrase** to target reviews that mention specific terms (e.g., “shipping,” “refund,” “size”). You can add multiple phrases to route sentiment-specific feedback, or use **Is Not Empty** to include any review that contains a written comment.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258550/original/LMf_wnyBjgBhqOik0nPMpczmdjaahTsNVg.png?1771503615)

  

  

### **Review Headline Filter**

Fire workflows based on the headline field perfect for spotting empty or vague titles you’d like customers to clarify. Operators include Contains a phrase and Is Not Empty.

  

### **Review Rating Filter (Star)**

  

The **Review Rating (star)** filter lets you control which review star ratings (1–5) are allowed to trigger your workflow. It’s used to separate automations by sentiment for example, routing low ratings to support for fast resolution and sending 5-star reviewers into advocacy, referral, or social proof workflows.

  

The **Review Rating (star)** filter supports multiple operators to control exactly which reviews can enroll in your workflow. Use **Is any of** to trigger on selected star ratings, or **Is none of** to exclude specific ratings while allowing everything else. For edge cases, **Is empty** targets missing ratings, and **Is not empty** ensures only reviews with a star rating are included.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258615/original/DDUId7ZK9Xf9yKa_AQXs3CYzlAmCN7EzmA.png?1771503661)

  

  

### **Store Filter**

  

Add a **Store Name** filter to limit which storefront(s) can fire this workflow ideal when your sub-account manages multiple Ecommerce Stores. Choose an operator such as **Is any of** (include selected stores), **Is none of** (exclude), or **Is empty/Is not empty** for edge-case handling.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258604/original/qqjifN8NNCGq1Nc25PH-IcT7jnI2WKNbYg.png?1771503646)

###   

###   

### **User Email & User Name Filters**

  

Use the **User Email & User Name** filters to prioritize or exclude specific reviewers (VIPs, affiliates, internal testers, suspected spammers). They compare the reviewer’s submitted email or name with operators like equals, contains, is empty/not empty and can be combined with rating, product, or keyword filters for precision. 

  

Apply them to escalate low-star VIP reviews, route influencer feedback to marketing, or suppress automated replies to disposable/test accounts.

  

  

### **Save Trigger**

  

Saving commits your conditions and returns you to the builder to add actions or branches. Use this moment to test with a sample review and then publish once behavior matches your intent. Test by submitting a dummy review in your store

  

Add downstream actions such as Send Email, Create Task, Slack Notification, etc.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258657/original/UIE1grp_yZEgD2pNrzI2LKhrArF1UJ4bdg.png?1771503680)

* * *

## **Frequently Asked Questions**

  

**Q: Does the trigger fire before or after I approve the review?**

It fires immediately on customer submission approval status does not affect it.

  

**Q: Are contact records required for the workflow to run?**

No. Like other Ecommerce triggers, it can run contact-less, but you can create or update a contact inside the workflow if needed.

  

**Q: Can I use multiple products in the Global Product filter?**

Not at this time only one product per trigger. Create additional triggers for other products.

  

**Q: Will disabling store reviews stop the trigger?** 

Yes. If reviews are globally disabled in the store settings, no review events are emitted and the trigger won’t fire.

**Q: How can I prevent accidental replies to 5-star reviews?**

Add a Review Rating “Less than 4” filter so only lower-rated reviews enter the workflow.

  

**Q: Does editing a review re-trigger the workflow?**

No, only the initial submission event triggers it.

* * *

### **Related Articles**

  

-   [How to Add Reviews & Ratings for Products for E-commerce Stores](https://help.gohighlevel.com/a/solutions/articles/155000004053?portalId=48000045315)
    
-   [Workflow Trigger – Abandoned Checkout](https://help.gohighlevel.com/a/solutions/articles/155000007380?portalId=48000045315)
    
-   [Workflow Trigger – Order Submitted](https://help.gohighlevel.com/a/solutions/articles/155000003535?portalId=48000045315)
    
-   [Google Forms Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000007217-google-forms-actions-and-triggers-in-workflows)