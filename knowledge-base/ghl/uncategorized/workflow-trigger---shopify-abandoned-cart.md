---
title: "Workflow Trigger - Shopify Abandoned Cart"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002618-workflow-trigger-shopify-abandoned-cart"
category: "Uncategorized"
---

# Workflow Trigger - Shopify Abandoned Cart

Recovering abandoned carts is a critical strategy for increasing conversions and maximizing sales. The Abandoned Checkout Trigger in workflows allows businesses to automatically follow up with potential customers who left their cart without completing their purchase. This guide explains what this trigger does, its benefits, step-by-step setup, and frequently asked questions.

  

This trigger is for **Shopify** integrations. For **HighLevel Ecommerce Stores** abandoned cart emails and shareable links, see [Recover Lost Sales with Automatic Abandoned Checkout Emails](https://help.gohighlevel.com/en/support/solutions/articles/155000001718).

* * *

**TABLE OF CONTENTS**

-   [What is the Abandoned Checkout Trigger?](#What-is-the-Abandoned-Checkout-Trigger?)
-   [Key Benefits of the Abandoned Checkout Trigger](#Key-Benefits-of-the-Abandoned-Checkout-Trigger)
-   [Configuring the Abandoned Checkout Trigger](#Configuring-the-Abandoned-Checkout-Trigger)
    -   [Step 1: Adding the Abandoned Checkout Trigger](#Step-1%3A-Adding-the-Abandoned-Checkout-Trigger)
    -   [Step 2: Applying Filters](#Step-2%3A-Applying-Filters)
    -   [Step 3: Saving the Trigger and Adding Workflow Actions](#Step-3%3A-Saving-the-Trigger-and-Adding-Workflow-Actions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Abandoned Checkout Trigger?**

  

The Abandoned Checkout Trigger activates a workflow whenever a customer adds items to their cart but does not complete the purchase within a specified timeframe. This feature helps businesses re-engage potential buyers by sending personalized reminders, offering incentives, or triggering internal notifications for follow-up.

  

With this trigger, you can:

-   Automate abandoned cart recovery emails and SMS reminders.
-   Apply filters based on checkout duration and cart value for precise targeting.
-   Improve conversion rates by reaching out to interested shoppers at the right moment.

* * *

## **Key Benefits of the Abandoned Checkout Trigger**

  

Using the Abandoned Checkout Trigger in workflows provides several advantages:

  

-   **Automated Follow-Ups :** Set up emails, SMS, or internal notifications to remind customers about their abandoned carts without manual intervention.

  

-   **Higher Conversion Rates :** Reduce lost sales by reaching out to potential buyers at the right time with relevant offers or incentives.

  

-   **Targeted Engagement :** Use filters like Cart Value and Duration to tailor follow-up messages based on customer behavior.

  

-   **Revenue Recovery & Growth :** Bring back potential buyers who showed intent to purchase but did not complete the checkout process.

* * *

## **Configuring the Abandoned Checkout Trigger**

  

### **Step 1: Adding the Abandoned Checkout Trigger**

  

#### **Access Workflow Builder**

  

Navigate to the Workflow Builder inside **Automation** section. Create a new workflow from scratch or select the existing workflow where you wish you add Abandoned checkout trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041114997/original/u4ceHvuBdOwXZi3OVZUIW71XBrT8mT0FpA.png?1738835005)

  

#### **Selecting Abandoned Checkout Trigger**

  

Click **Add New Trigger** and search for **Abandoned Checkout** from the available trigger options. Click the Abandoned Checkout Trigger to begin the configuration.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115012/original/M0t_QZm7waMwEXt7408RXfdFic9fvXvQ1A.png?1738835026)

  

### **Step 2: Applying Filters**

  

Filters help define when and for whom the abandoned checkout trigger should activate. You can refine the workflow using the following filters:

  

#### **Duration Filter**

  

This filter allows you to set the waiting time before considering a checkout abandoned. Choose the duration in minutes (e.g., 10 minutes means the checkout is marked as abandoned if the customer doesn’t complete the purchase within 10 minutes). The trigger activates once the set duration passes, sending automated follow-ups.

  

**Example:** If a customer leaves the checkout page for 30 minutes, the trigger can initiate a reminder email.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115098/original/d1fBN9QA3G5zH7NmHjDxuq_cHiHO4rKzRA.png?1738835060)

  

#### **Cart Value Filter**

  

The Cart Value filter lets you apply conditions based on the total value of items in the cart. This ensures follow-ups target only relevant customers based on their cart amount.

  

Operators Available for Cart Value Filtering:

  

You can use the following operators to set conditions:

-   **Equals to :** Targets customers whose cart total matches a specific value.
-   **Greater than :** Applies the trigger if the cart value exceeds a certain amount.
-   **Greater than or Equal to :** Triggers the workflow when the cart total meets or surpasses a defined value.
-   **Is Empty :** Activates the trigger when the cart contains no items.
-   **Is Not Empty :** Ensures only customers with items in their cart receive follow-ups.
-   **Is Not Equal to :** Excludes a specific cart value from triggering the workflow.
-   **Less than :** Applies when the cart total is below a defined threshold.
-   **Less than or Equal to :** Triggers the workflow if the cart total is at or below a set amount.

  

**Example:**

-   If you set “Cart Value Greater than $100”, only customers with a cart total exceeding $100 will receive follow-ups.
-   If you set “Cart Value Less than or Equal to $50”, only customers with carts of $50 or lower will trigger the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115149/original/zF9SLMjvEJEZnqqERN4wf5RJR1MkFpYRXg.png?1738835105)

  

### **Step 3: Saving the Trigger and Adding Workflow Actions**

  

After setting up filters, Save the Trigger to apply the conditions.

  

Proceed with adding workflow actions such as:

-   **Send Email :** A reminder email with abandoned items and a checkout link.
-   **Send SMS :** A short text encouraging customers to complete their purchase.
-   **Add Tag :** Assign a tag for better segmentation and reporting.
-   **Internal Notification :** Alert the sales team about high-value abandoned carts.

  

#### **Publish and Test**

  

Once all actions are configured, click Save to ensure all settings are stored. Then, toggle the Publish option to activate the workflow. This ensures that the automation is live and will trigger when the specified conditions are met.

  

To verify that everything is working correctly, perform a test by simulating an abandoned checkout scenario in your Shopify store. You can then check the Workflow History to confirm that the trigger fired correctly and any follow-up actions (such as emails or SMS reminders) were executed as expected. Testing helps identify any potential issues before the workflow goes live for real customers.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115220/original/U2uLrODNnihPlSTVTM1gnA0CeiYnKfV3-Q.png?1738835132)

* * *

## **Frequently Asked Questions**

  

**Q: Can I trigger abandoned checkout workflows based on specific products?**

Currently, the Abandoned Checkout Trigger operates based on cart value and duration but does not support product-specific conditions. However, you can apply additional segmentation through HighLevel’s automation rules.

  

  

**Q: What’s the best practice for setting the duration filter?**

The recommended duration depends on your industry and customer behavior. 15-30 minutes is ideal for fast-moving purchases, while high-value items may require longer durations (e.g., 24 hours).

  

  

**Q: Can I use the Abandoned Checkout Trigger for multiple abandoned carts per customer?**

Yes, the trigger activates each time a customer abandons their cart within the defined duration. However, consider adding logic to prevent excessive follow-ups and ensure a positive customer experience.

  

  

**Q: How do I track abandoned checkout recovery performance?**

Use workflow analytics to monitor engagement rates, cart recovery success, and conversions. Reviewing email/SMS open rates and customer actions can help optimize messaging strategies.

  

  

**Q: Can I combine abandoned checkout workflows with discount offers?**

Absolutely! You can add conditional logic to include a discount code after a set number of follow-ups. For example, send a 10% off coupon after 24 hours if the customer hasn’t completed the checkout.