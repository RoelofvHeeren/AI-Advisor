---
title: "Workflow Trigger - Coupon Redemption Limit Reached"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005660-workflow-trigger-coupon-redemption-limit-reached"
category: "Uncategorized"
---

# Workflow Trigger - Coupon Redemption Limit Reached

Easily automate actions when a coupon code reaches its maximum allowed number of redemptions. This guide walks you through everything you need to know, from setup to key benefits, so you can seamlessly trigger workflows the moment a coupon’s redemption limit is hit. Perfect for campaign management, internal alerts, and promotional control.

* * *

**TABLE OF CONTENTS**

-   [What is the Coupon Redemption Limit Reached Workflow Trigger](#What-is-the-Coupon-Redemption-Limit-Reached-Workflow-Trigger)
-   [Key Benefits of Coupon Redemption Limit Reached Workflow Trigger](#Key-Benefits-of-Coupon-Redemption-Limit-Reached-Workflow-Trigger)
-   [Configuring Coupon Redemption Limit Reached Workflow Trigger](#Configuring-Coupon-Redemption-Limit-Reached-Workflow-Trigger)
-   [Available Filters](#Available-Filters)
-   [Recommended Workflow Actions for Coupon Limit Alerts](#Recommended-Workflow-Actions-for-Coupon-Limit-Alerts)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Coupon Redemption Limit Reached Workflow Trigger**

  

The Coupon Redemption Limit Reached trigger fires when a coupon code reaches its maximum allowed number of redemptions. This trigger activates after the last transaction using that coupon is successfully completed.

It’s a valuable tool for marketing and operations teams who need to manage limited-time or limited-quantity promotions, automatically pause overused coupons, or notify teams to replace or retire specific offers.

* * *

## **Key Benefits of Coupon Redemption Limit Reached Workflow Trigger**

  

-   **Prevent Overuse of Limited-Quantity Coupons:** Get notified immediately when redemption limits are reached  
      
    
-   **Maintain Operational Control over Live Promotions:** Automatically deactivate or replace coupons at the right moment  
      
    
-   **Trigger Alerts or Follow-ups without Manual Tracking:** Stay on top of high-demand campaigns without needing to monitor usage manually  
      
    
-   **Improve Customer Experience:** Replace expired coupons with alternative offers through automated actions  
      
    
-   **Close promotional loops effectively:** Ensure sales and marketing teams are informed when a campaign’s redemption target is hit
    

* * *

## **Configuring Coupon Redemption Limit Reached Workflow Trigger**

  
To set up this trigger, follow these steps in your workflow builder:

  

####   
**Step 1:** Add the Trigger to Your Workflow

  

-   Navigate to **Automation > Workflows**  
      
    
-   Either create a new workflow or edit an existing one  
      
    
-   In the workflow builder, click **\+ Add New Trigger** to get started

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401471/original/2ENHmA9VN1KwSs6oNQkcFlNrULOlDUsKJA.png?1753388951)

  

  

#### **Step 2:** Choose the Trigger Type

  

From the list of available triggers, scroll to the **Payments** section and select **Coupon Redemption Limit Reached**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401529/original/tu7X7T-ItOhrgrqmHv6I_2m5W8JxY0K37w.png?1753389059)

  

  

#### **Step 3:** Name Your Trigger

  

-   Provide a descriptive name in the **Workflow Trigger Name** field to keep your workflow organized.  
      
    
-   Example: _"FlashSaleCouponLimitreached"_  
      
    

`![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401090/original/3tY5oaN8xXbcEI5fzzosu7Rn6Idd08XIhw.png?1753388014)`

  

  

#### **Step 4:** Apply Filters to Target Specific Scenarios

  

-   After naming the trigger, you can apply filters to narrow down exactly when this workflow should fire  
      
    
-   To add filters, click **+ Add Filters**  
      
    
-   Each filter comes with specific operators (like Is, Contains, Greater Than, Before/After) to precisely target the conditions you care about. [Click Here to See List of Available Filters](#Available-Filters)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401224/original/zuviGWg5T8OsLb4htEOJP-G84HYbv1eBDg.png?1753388345)

  

  

#### **Step 5:** Save and Build the Workflow

  

-   Once your trigger and filters are configured, click **Save Trigger** and start adding your desired actions to the workflow  
      
    
-   When finished, use **Test Workflow** to confirm everything’s working as expected, then **Publish** the workflow to activate it

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049300913/original/xIU1T3gXpIxVA2z8z3tjWi6HdCKKyQMCJg.png?1751551021)

* * *

## **Available Filters**

  

  

<table style="border: none; border-collapse: collapse; width: 100%;"><colgroup><col width="158"><col width="246"><col width="220"></colgroup><tbody><tr style="height:25.75pt;"><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.0209%;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Filter</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 40.6761%;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Operator(s)</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 39.2682%;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Input Type</span></p></td></tr><tr><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.0209%;">Coupon Code<br></td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 40.6761%;">Is Any Of / Is Empty / Is None Of / Is Not Empty</td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 39.2682%;">Multi-Select Dropdown of Active Coupon Codes</td></tr><tr><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.0209%;">Coupon Name</td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 40.6761%;">Is Any Of / Is Empty / Is None Of / Is Not Empty</td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 39.2682%;">Multi-Select Dropdown of Active Coupon Names</td></tr><tr><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.0209%;">Coupon Type</td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 40.6761%;">Is / Is Empty / Is Not / Is Not Empty</td><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 39.2682%;">Single-Select Dropdown (Amount vs Percentage)</td></tr><tr><td dir="ltr" style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.0209%;">Redemption Limit</td><td>Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To</td><td dir="ltr">Numeric Input Box</td></tr></tbody></table>

* * *

## **Recommended Workflow Actions for Coupon Limit Alerts**

  

Once your **Coupon Redemption Limit Reached** trigger is active, you can automate actions like:  
  

-   **Internal Notification:** Instantly alert your marketing or sales team when a coupon hits its redemption cap  
      
    
-   **Send Email:** Notify the admin or campaign manager so they can take appropriate action  
      
    
-   **Add Tag:** Apply a tag to the coupon or related campaign for reporting and segmentation  
      
    
-   **Pause or Deactivate Coupon:** Automatically disable the coupon via API if connected to coupon management logic  
      
    
-   **Send SMS:** Inform internal staff via text when high-demand coupons expire
    

* * *

## **Frequently Asked Questions**

  
**Q: Does this trigger fire when the redemption limit is close or only when it’s reached?**  
This trigger fires only when the coupon’s maximum allowed redemptions have been reached after a completed transaction.

  
**Q: Can I track which coupon types are reaching their limits faster?**  
Yes, use the Coupon Type filter to narrow down activity for Percentage vs. Fixed Amount coupons.

  
**Q: What happens if I don’t apply any filters?**  
The workflow will trigger for any coupon hitting its redemption limit. To monitor specific campaigns, use filters like Coupon Code Is or Coupon Name Contains.

  
**Q: Can I trigger based on different redemption limits?**  
Yes, use the Redemption Limit filter with operators like Greater Than or Is to create conditional workflows based on various cap levels.

* * *

## **Related Articles**

  

-   [Workflow Trigger - Coupon Code Redeemed](https://help.gohighlevel.com/en/support/solutions/articles/155000005658)  
      
    
-   [Workflow Trigger - Coupon Code Applied](https://help.gohighlevel.com/en/support/solutions/articles/155000005641)  
      
    
-   [Workflow Trigger - Coupon Code Expired](https://help.gohighlevel.com/en/support/solutions/articles/155000005661)  
      
    
-   [How to Create Coupons for Products](https://help.gohighlevel.com/en/support/solutions/articles/48001224172)  
      
    
-   [Coupon Application on Subscription Products](https://help.gohighlevel.com/en/support/solutions/articles/155000004886)