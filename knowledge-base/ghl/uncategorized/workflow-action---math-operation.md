---
title: "Workflow Action - Math Operation"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003356-workflow-action-math-operation"
category: "Uncategorized"
---

# Workflow Action - Math Operation

This article explains how to use the **Math Operation** action in workflows to perform simple calculations like addition, subtraction, multiplication, and division between numbers or custom fields. It also covers how to handle more complex calculations by breaking them into multiple steps.

  

**IMPORTANT**: Currently, complex expressions requiring order of operations (PEMDAS or BODMAS) are not supported in a single Math Operation action. Users must manually break down calculations using multiple steps."

* * *

**TABLE OF CONTENTS**

-   [What is Math Operation Workflow Action?](#What-is-Math-Operation-Workflow-Action?)
-   [Key Benefits of Math Operation Workflow Action](#Key-Benefits-of-Math-Operation-Workflow-Action)
-   [Configuring Math Operation Workflow Action](#Configuring-Math-Operation-Workflow-Action)
    -   [Navigate to Automation](#Navigate-to-Automation)
    -   [Adding the Math Operation Action](#Adding-the-Math-Operation-Action)
    -   [Naming the Action](#Naming-the-Action)
    -   [Selecting a Field](#Selecting-a-Field)
    -   [Operation Type](#Operation-Type)
    -   [Setting the Operation Value](#Setting-the-Operation-Value)
    -   [Tag Icon](#Tag-Icon)
    -   [Delete Icon](#Delete-Icon)
    -   [Adding Multiple Operations](#Adding-Multiple-Operations)
    -   [Update Field](#Update-Field)
    -   [Save and Publish](#Save-and-Publish)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **What is Math Operation Workflow Action?**

  

The Math Operation workflow action allows users to perform various calculations directly within a workflow. You can add, subtract, multiply, or divide numeric fields and update them automatically based on specific actions or triggers. For date fields, you can add or subtract days, months, or years, making it easy to automate time-sensitive processes like reminders or scheduling.

  

For example, a subscription-based service can use the Math Operation action to calculate renewal dates by adding a specific duration to the start date, ensuring customers receive timely reminders.

* * *

## **Key Benefits of Math Operation Workflow Action**

  

Here are some of the key advantages of using this feature in your workflows, helping you automate calculations, improve accuracy, and streamline processes effortlessly.

  

-   **Automation & Efficiency:** Eliminates manual calculations, reducing errors and saving time while streamlining repetitive tasks like lead scoring, commission calculations, and deadline management.

  

-   **Customization & Integration:** Supports custom fields and values, allowing flexible configurations while seamlessly working with other workflow actions, triggers, and If/Else conditions for advanced automation.

  

-   **Accuracy & Scalability:** Ensures precise updates to numeric, monetary, and date fields while handling large data volumes without additional manual effort, maintaining consistent performance.

* * *

## **Configuring Math Operation Workflow Action**

  

Now that you have understood the advantages of using this action, Let's learn how to set up the Math Operation action by choosing the right field, applying calculations, and updating values. Also, how to leverage dynamic fields, multiple operations, and custom values to keep your calculations accurate and automated.

  

### **Navigate to Automation**

  

Select or create a workflow by navigating to the **Automation** section. Create a new workflow or choose an existing one where you want to add the Math Operation action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699092/original/NToaC5zQG_CWDZ9waZNDP9ev6dPN9EZQ0A.png?1738225302)

  

### **Adding the Math Operation Action**

  

Before adding the Math Operation action, it’s important to set up a workflow trigger—this determines when the workflow will activate and execute the Math Operation. Once the trigger is in place, click on **“Add Action”** and select **“Math Operation”** from the list to configure the calculation within the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699125/original/3tpRQ11Rb27zCnrIPhlbXG_CKPygq6Riug.png?1738225328)

  

### **Naming the Action**

  

By default, the action is named “Math Operation,” but you can rename it for clarity. Use a descriptive name to make workflows easier to follow. A clear name helps quickly identify the action, especially in complex workflows.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699202/original/FCfvGnFRxkKEw-Lqwu48qGT-fowWcRBwkA.png?1738225368)

  

### **Selecting a Field**

  

After naming the action, the next step is selecting the field where the calculation will be applied. Clicking the **“Select Field”** dropdown presents three options:

  

-   **Date Fields:** With this option, you can perform date-based calculations for scheduling, reminders, or age verification using system-generated date fields like Current Date and Date of Birth. Lets understand each option:  
      
    -   **Current Date:** Represents the present date when the workflow runs. This is useful for operations like calculating deadlines, follow-up reminders, or scheduling future events based on today’s date.  
          
        
    -   **Date of Birth:** Refers to a contact’s recorded birth date. This option is often used for age verification, birthday reminders, or calculating anniversaries.  
          
        
-   **Custom Fields:** These are fields specific to your CRM setup, such as Policy Expiry Date or Contract Start Date. Selecting a custom field enables calculations based on data stored in the system, making it useful for setting up automated renewal reminders, contract extensions, or milestone tracking.  
      
    
-   **Custom Values:** This option allows you to manually input a static value instead of selecting a stored field. It’s useful for applying fixed calculations, such as adding a specific number of days to a date field or calculating a percentage increase for lead scores or pricing adjustments.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699271/original/w7SprVSTGgJKJt5Viv52QjPdR8j-q7PPCA.png?1738225424)

  

### **Operation Type**

  

Once you’ve selected a field—whether it’s a Date Field, Custom Field, or Custom Value—the next step is to define the type of calculation you want to apply.  
  
**Date fields :** In Date Fields you have the flexibility to add or subtract days, months, or years, making it easy to set up automated reminders, deadlines, or scheduling adjustments.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699781/original/kyZjAWaK4Mf5TolqKX4E_1XHg1oVTCbFig.png?1738225730)

  

**Numeric and monetary fields:** In numeric fields, you can perform operations like Addition, Subtraction, Multiplication, or Division to update values automatically.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699770/original/TaSK-vRWZJ1vL3tijr5EwKBDAteo2RWldw.png?1738225716)

  

### **Setting the Operation Value**

  

After selecting the operation type, you need to enter a numerical value for the calculation. You can either input a static number manually or use the **”+”** and **“-”** icons to quickly adjust the value as needed.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699925/original/OwhS6iIPfu8M76_VfbgwfwD4QPXANAwxYQ.gif?1738225829)

  

### **Tag Icon**

  

The Tag Icon allows you to select dynamic values from custom fields instead of entering static numbers manually. This ensures that calculations automatically adapt to real-time data changes, making workflows more flexible and efficient.

###   

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700033/original/MvgquKYjg7H11hMO6Ze4Xn8W3qWY4ziyhA.png?1738225929)

### **Delete Icon**

  

The delete icon (trash bin) lets you remove an operation if you no longer need it. This feature helps keep calculations clean and accurate by allowing quick adjustments without rebuilding the entire Math Operation action. If a mistake is made or an operation is no longer required, simply click the trash bin to delete it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700111/original/z5Jpt_QLsRQ8FcKsjUu9iiFPKFcTAh8gxA.png?1738225964)

  

### **Adding Multiple Operations**

  

In order to add multiple math operations within a single math operation action you will use the **Add Operator** option. This feature is useful when performing a sequence of calculations, such as first adding a value and then multiplying the result. By clicking Add Operator, you can continue refining the calculations without needing separate workflow actions, making complex automation setups more efficient.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700144/original/aj2JjzQ031NeRIPy6e1get9w2Nad09suyQ.png?1738226001)

  

### **Update Field**

  

The Update Field option determines where the result of the calculation will be stored. Users must ensure that the selected field matches the type of data being processed—numeric fields should be updated with numeric values, and date fields should store date-based calculations.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700168/original/I86tyUHLU3FGPqLSGNTw-o617v7HV9a7aw.png?1738226023)

###   
**Save and Publish**

  

Save and activate the action by clicking **“Save”** to apply the Math Operation action to the workflow. Once your workflow setup is complete, click **“Publish”** to activate the workflow.

* * *

## **Frequently Asked Questions**

  

**Q. Can I perform math operations on custom date fields?**

Yes, you can perform addition or subtraction on custom date fields to automate time-sensitive tasks, such as reminders or scheduling.

  

  

**Q. Are there any limitations on the range of values in math operations?**

Numeric fields can store both positive and negative values, while monetary fields only accept values greater than or equal to zero. Negative values are not supported for date fields.

  

  

**Q. Can I use Math Operation actions with If/Else conditions?**

Absolutely! You can use the result of a Math Operation action in an If/Else condition to create dynamic workflows. For example, use calculated lead scores to route leads through different sales paths based on their engagement level.

  

  

**Q. Can I perform multiple math operations at once (e.g., 1 + 2 × 3 - 4 ÷ 5)?**

At this time, the **Math Operation** workflow action in HighLevel supports **only one simple operation at a time** (addition, subtraction, multiplication, or division between two values).

**Important:**

-   The action **does not** automatically apply **order of operations (PEMDAS or BODMAS)**.
    
-   If you need to perform a complex calculation, you will need to **break it into multiple Math Operation steps**, following the correct math sequence, and **use custom fields** to store intermediate results.
    

* * *

## **Related Articles**

-   [List of Merge Fields](https://help.gohighlevel.com/support/solutions/articles/48001078171-list-of-merge-fields)
-   [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/support/solutions/articles/155000004390-overview-of-merge-fields-custom-variables)