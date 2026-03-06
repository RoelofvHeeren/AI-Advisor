---
title: "How to fetch product details purchased by customers in workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows"
category: "Uncategorized"
---

# How to fetch product details purchased by customers in workflows

### **TABLE OF CONTENTS**

-   Overview
-   Action Name
-   Action Description
-   Action Details
-   Example

* * *

### **Overview**

The "Pluck and Join" feature in workflows allows you to dynamically pull product details, such as titles, from order submissions and format them into a single string. This feature is especially useful for automating order management, syncing product information with external systems, or updating data logs like Google Sheets. Similar to any custom field, users can now use Pluck and Join to format the data.

###   

This article will talk about fetching product details such as items  from orders submitted and send this data to google sheets or any other platform.

* * *

### **Description**

This feature allows users to use helpers such as `pluck` and `join` in workflows. The `pluck` helper extracts specific fields (e.g., product titles) from an array of objects, while the `join` helper combines these values into a single string with a custom separator. These are helpful for automating data extraction and formatting across data.

* * *

### **Step-by-Step Guide**

####   

1.  **Choose the Trigger**:
    
    -   Start by setting up a workflow trigger, such as `Order Submitted or Inbound webhook`, or any trigger that have a list of data - to initiate the workflow when an order is placed.
2.  **Set Up an Action**:
    
    -   Example: Use the "Create Row in Google Sheets" action to log customer and product details.
        -   **Customer Name**: Use `{{ contact.first_name }}`.
        -   **Email**: Use `{{ contact.email }}`.
        -   **Products**: Use the combined string created in the next step.
3.  **Add Data Processing Logic**:
    
    -   Use the `pluck` helper to extract the product titles from the order’s `line_items` array.
        
          
        
        `{{ pluck order.line_items "title" }}   `
        
    -   Use the `join` helper to combine these titles into a single, formatted string.
        
        `{{ join (pluck order.line_items "title") ", " }}`
        
4.  **Test and Validate**:
    
    -   Before finalizing, run a test to ensure the workflow processes data as expected. Use tools like Postman or live order submissions to confirm correct output.  
          
        
5.  **List of fields available**:
    -   title,
    -   image,
    -   price,
    -   quantity,
    -   line\_subtotal,
    -   line\_discount,
    -   line\_price,
    -   meta
        -   product\_id,
        -   price\_id,
        -   order\_id / invoice\_id
        -     
            

Example pluck - {{pluck payment.line\_items “title”}} , {{pluck payment.line\_items “line\_subtotal”}} , {{pluck payment.line\_items “meta.product\_id”}}

  

To pluck any other value, replace the field in the above example pluck  
  

* * *

### **Example**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040013638/original/ArPTxHZKN6pAr_EZVTjXMnyzNroCaA8w4A.png?1737111986)**  

#### **Scenario**

You want to log order details into a Google Sheet whenever a customer submits an order form. This log should include the customer’s name, email, and a formatted list of purchased products.

#### **Steps**

1.  **Create Workflow Trigger**:
    
    -   Use the `Order Submitted` trigger to start the workflow.
2.   **Use Pluck and Join helpers**:
    
    -   Extract product titles using the `pluck`helper
        
        `{{ pluck order.line_items "title" }}`
        
    -   Format the titles using the `join`helper
        
        `{{ join (pluck order.line_items "title") ", " }}`
        
3.  **Add Google Sheets Action**:
    
    -   Select the "Create Row in Google Sheets" action.
    -   Map the fields:
        -   **Name**: `{{ contact.first_name }}`
        -   **Email**: `{{ contact.email }}`
        -   **Products**: `{{ join (pluck order.line_items "title") ", " }}`
4.  **Test and Activate the Workflow**:
    
    -   Submit a test order form and confirm that the order details appear correctly in the Google Sheet.

#### **Example Output**

**Google Sheet Example**:

| Name | Email | Products |
| --- | --- | --- |
| Alice | alice@test.com | TEST OFFER, ANOTHER PRODUCT |
| Bob | bob@test.com | SINGLE ITEM |

* * *

By using `pluck` and `join` helpers, you can efficiently extract and format product data for seamless workflow automation and integration. This feature saves time, reduces manual effort, and enhances the usability of your workflows.