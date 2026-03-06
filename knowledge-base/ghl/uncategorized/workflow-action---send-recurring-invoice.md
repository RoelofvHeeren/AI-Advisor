---
title: "Workflow Action - Send Recurring Invoice"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005627-workflow-action-send-recurring-invoice"
category: "Uncategorized"
---

# Workflow Action - Send Recurring Invoice

Easily automate your recurring billing cycles in HighLevel by using the Send Recurring Invoice action in a workflow. Whether you manage memberships, agency retainers, or SaaS subscriptions, this native automation eliminates manual invoicing, keeps payments on schedule, and reduces the need for third‑party tools.

* * *

**TABLE OF CONTENTS**

-   [What is Recurring Invoices in Workflows?](#What-is-Recurring-Invoices-in-Workflows?)
-   [Key Benefits of Recurring Invoices in Workflows](#Key-Benefits-of-Recurring-Invoices-in-Workflows)
-   [Prerequisites](#Prerequisites)
-   [Recurring Invoice Configuration Settings](#Recurring-Invoice-Configuration-Settings)
-   [How to Set Up Recurring Invoices in Workflows](#How-to-Set-Up-Recurring-Invoices-in-Workflows)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)[](#Related-Articles)

* * *

# **What is Send Recurring Invoice Action in Workflows?**

  

Recurring Invoices in Workflows automates scheduled billing inside your workflows, allowing invoices to send automatically while you focus on customers. In the visual Workflow Builder you can set start dates, stop rules, frequencies, and Auto‑Pay— keeping cash flow predictable without manual effort. 

* * *

## **Key Benefits of Send Recurring Invoice Action**

  

-   **Time Savings:** save time by cutting out manual invoice creation and follow‑up  
      
    
-   **Flexible Cadence:** daily, weekly, monthly, or yearly schedules to fit any plan  
      
    
-   **Start‑Date Control:** begin at the contact’s trigger date or a fixed calendar date  
      
    
-   **Stop Rules:** choose never‑ending or end after X occurrences  
      
    
-   **Auto‑Pay:** charge a stored card automatically after the first successful payment  
      
    
-   **Error Reduction:** eliminates missed or duplicate invoices  
      
    
-   **Workflow Integration:** billing events stay in sync with tags, emails, and follow‑ups
    

* * *

## **Prerequisites**

  

Having the essentials in place ensures your recurring invoices run without a hitch.  
  

-   **Invoice Template:** Create at least one template in **Payments → Invoices**  
      
    
-   **Payment Gateway:** Connect Stripe (or another supported gateway) in **Payments → Integrations**
    

* * *

## **Recurring Invoice Action Configuration Settings**

  

The Send Recurring Invoice action is highly customizable. This section breaks down each option so you can tailor billing to fit any plan before you click Publish.

  

  

#### **Start Date Options**

  

The **Start Date** dropdown lets you choose when the schedule begins, ensuring invoices reach customers at the right moment.

  

-   **Action Date:** begins the schedule as soon as the contact hits the workflow trigger (e.g., tag added or contact changed)  
      
    
-   **Fixed Date:** aligns billing with a specific calendar day (e.g., 1 July, 2025)
    

  

  

#### **End Criteria and Stop Rules**

  

The **Stop** dropdown controls when the schedule ends, preventing over‑billing or unintended charges.

  

-   **Never:** continues until manually stopped  
      
    
-   **After X Occurrences:** perfect for installment plans (e.g., 12 monthly payments).
    

  

  

#### **Recurrence Frequencies**

  

The **Frequency** dropdown determines how often invoices repeat and displays extra selectors (e.g., weekday, month) based on your choice.

  

-   Daily: every _N_ days—ideal for high‑frequency payments  
      
    
-   Weekly: send on a specific weekday or on the action date—great for weekly coaching  
      
    
-   Monthly: by date or by week (e.g., 2nd Wednesday)—common for memberships and retainers  
      
    
-   Yearly: choose month and day, every _N_ years—ideal for annual renewals
    

  

  

#### **Auto‑Pay**

  

Toggle **Enable Auto‑Payment** to charge it automatically after the first successful payment, streamlining collection.  
  

-   Gateway Requirement: currently supported with Stripe‑connected sub‑accounts  
      
    
-   First Invoice Must Succeed: card details are stored only after a successful manual payment
    

* * *

## **How to Set Up Send Recurring Invoice Action in Workflows**

  

Properly configuring the Send Recurring Invoice action takes only a few clicks. Follow the numbered steps below to automate billing without errors.  
  

### **Step 1:** Navigate to Workflow Builder

  

1.  From your HighLevel dashboard, navigate to **Automation → Workflows.**  
      
    
2.  Click the blue **+ Create Workflow** button in the top‑right corner to create a new workflow.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049011373/original/yFXCqMLZ1da5zLCe_gmAJVo9tSo_FkKRlA.png?1751055820)

  

  

### **Step 2:** Add Your Workflow Trigger

  

1.  Within the Workflow Builder, click **\+ Add Trigger**.  
      
    
2.  **Choose** a **trigger**. For example: **Contract Signed/Form Submitted/Opportunity Status Changed.**  
      
    
3.  Then click **Save Trigger**.
    

  
![](https://jumpshare.com/share/IiK5F1gz15xPHD5ZpVP4+/GIF+Recording+2026-02-12+at+12.22.44+AM.gif)

  
  

### **Step 3:** Insert the **Send Recurring Invoice** Action

  

1.  Click the **➕** directly beneath the trigger to add an action.  
      
    
2.  In the Action **search** **bar**, type **Invoice** and select **Send** **Recurring** **Invoice** under Payments.
    

  
![](https://jumpshare.com/share/rJQ9lshtXeJqB7LC4FVX+/GIF+Recording+2026-02-12+at+12.24.33+AM.gif)

  
  

### **Step 4:** Configure Action Settings

  

1.  Name the action so it’s easy to identify (e.g., “Monthly Retainer – Silver”).  
      
    
2.  Select **From User** to choose the sender.  
      
    
3.  Pick an **Invoice Template.**  
      
    
4.  Toggle **Mode** to **Test** for **trial** runs or **Live** for **real** **billing**.  
      
    
5.  Under **Start Date**, choose **Action Date** (begins the schedule as soon as the contact hits the workflow trigger) or **Fixed Date** (aligns billing with a specific calendar day).  
      
    
6.  Under **Stop**, select **Never** (continues until manually stopped)  
    or **After X Occurrences** (perfect for installment plans (e.g., 12 monthly payments).  
      
    
7.  Open the **Frequency** dropdown to pick Daily, Weekly, Monthly, or Yearly and adjust the interval options that appear.  
      
    
8.  Enter **Days in Advance** to send the invoice _N_ days before the due date.  
      
    
9.  Toggle **Enable Auto‑Payment** on to store the customer’s card after the first payment and charge subsequent invoices automatically.  
      
    
10.  Select **Channel:** Choose how the invoice is delivered **Email**, **Text**, or Email & Text. **Default:** Email & Text.  
       
     
11.  Click on **Save Action**.  
       
     

![](https://jumpshare.com/share/TkbmYE9Irf9hrvZisxIw+/GIF+Recording+2026-02-12+at+12.19.36+AM.gif)  
  

### **Step 5:** Test and Publish

  

**Tip:** For a deeper dive into workflow navigation, see [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)

  

-   Once the workflow has been setup, click the blue **Save** button in upper right corner.  
      
    
-   At the top of the workflow, click **Test Workflow** to test the workflow.  
      
    
-   When everything looks correct, toggle to **Publish** to activate the workflow.
    

  

![](https://jumpshare.com/share/BjgHfxHLA7ZNYwlhXFqO+/Screen+Shot+2026-02-12+at+12.25.53+AM.png)

* * *

## **Frequently Asked Questions**

  

**Q: Do I need a payment gateway to send recurring invoices?**  
Yes. Connect Stripe (or another supported gateway) before activating Auto‑Pay or sending invoices.  
  

**Q: What happens if a customer’s card fails during Auto‑Pay?**  
The invoice remains unpaid. Set up a workflow with a Payment Failed trigger to retry and notify the customer.

**Q: Will recurring invoices appear in the customer’s invoice history?**  
Yes—all generated invoices are logged under the contact’s record.

  

**Q: Does the Live/Test toggle affect existing schedules?**  
No. It only controls invoices created after the toggle change.  
  

**Q: Can I send different templates based on contact attributes?**  
Use conditional branches to add multiple Send Recurring Invoice actions with different templates.

* * *

## **Related Articles**

  

-   [How to Create and Use Invoice Templates in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000001297)  
      
    
-   [Stripe Integration with HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)  
      
    
-   [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)  
      
    
-   [Triggers - Overview](https://help.gohighlevel.com/en/support/solutions/articles/48000982202)