---
title: "Workflow Action - Array Functions (Premium)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001466-workflow-action-array-functions-premium-"
category: "Uncategorized"
---

# Workflow Action - Array Functions (Premium)

The premium action Array Functions allow users to performing operations on arrays (lists of data). With these powerful premium actions, users can manipulate, filter, and extract information from data arrays to automate tasks more efficiently.

* * *

**TABLE OF CONTENTS**

-   [What are Array Functions?](#What-are-Array-Functions?)
-   [Key Benefits of Array Functions](#Key-Benefits-of-Array-Functions)
-   [How to Set Up Array Functions](#How-to-Set-Up-Array-Functions)
    -   [Detailed Explanation of Array Functions](#Detailed-Explanation-of-Array-Functions)
    -   [Find](#Find)
    -   [Find by Index](#Find-by-Index)
    -   [Filter](#Filter)
    -   [Line Items](#Line-Items)
    -   [Math](#Math)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)
-   [Next Steps](#Next-Steps)

* * *

# **What are Array Functions?**

Array Functions are a set of premium workflow actions in HighLevel designed to manage and manipulate arrays (lists of data) within automation workflows. Arrays appear in workflows when dealing with lists of objects, such as order line items or customer attributes, and Array Functions enable users to extract, filter, or calculate data efficiently. These functions are particularly valuable for businesses that want to handle basic data processing exclusively in Workflows, rather than having to export data to a 3rd party service more manipulation or analysis.

* * *

## **Key Benefits of Array Functions**

  

Using Array Functions in HighLevel workflows provides numerous advantages for automation, data processing, and task efficiency. Below are the primary benefits:

  

-   **Enhanced Workflow Automation:** Automate tasks that require filtering, sorting, or calculating data without sending the data to an external 3rd party service.  
      
    
-   **Improved Decision Making:** Extract meaningful insights from datasets in real-time.  
      
    
-   **Reduced Manual Errors:** Automate complex calculations and data manipulations.  
      
    
-   **Customizable Actions:** Tailor workflows to unique business needs with flexible array operations.

* * *

## **How to Set Up Array Functions**

  

Follow these steps to set up and use Array Functions in a workflow:

  

**Step 1****: Access Workflow Builder**. Open the HighLevel application, navigate to the Automation tab, and create or select a workflow. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473379/original/BNeYKRSqIiAKoO2etWq1iFcGanZGh-DEXg.png?1737942844)

  

**Step 2****: Add Array Function Action**. Click “Add Action” and select “Array Function” under the Premium Actions section. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473375/original/0jHYbd1q6WtZWX1mZca3xyn9BEJEUgoo7Q.png?1737942775)

  

**Step 3****: Choose Function Type**. Select the desired array function from the options: Find, Filter, Find by Index, Line Items, or Math.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473392/original/-VA72O-j_YI5szbXcqDpIRm8jtKJCz_ALA.png?1737942929)

  

  

**Step 4: Configure Inputs**. Specify the input array. Define keys, values, or criteria based on the selected function type.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473413/original/mgFN2ZZM68q4RzHXmgQlO5j5xOhCdWh-og.png?1737943149)

  

**Step 5: Save and Test.** Save the workflow and test the action to ensure it’s working as intended.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473426/original/ESwsr1PF1dntsi5CpxqRcBRH0JK1u4j79w.png?1737943285)

  

**Step 6: Use The Value.** When the action is working it will create a variable that you can reference in other actions.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480458/original/1eTghHjhNXhJv7nQaSMqii0CKYI8rUpswg.png?1737961504)

* * *

## **Detailed Explanation of Array Functions**

  

Each Array Function type is tailored to perform specific operations on array data. The list of available array data is collected from Shopify Triggers, Inbound Webhook Trigger and Custom Webhook action response data.

  

Below is a breakdown of the available functions:

  

### **Find**

  

The Find action will locate a specific object in an array by matching a key-value pair. For example, Finding whether a specific product, such as "Laptop," exists in a list of purchased items. If a match exists, it will be returned. Find will return only one object, the first object that matches.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479747/original/37cstWkFwrxGERq67agrZA-Q6Cb5R_LRJw.png?1737960666)

  

<table style="width: 100%;"><tbody><tr><td dir="ltr" style="width: 50.0000%;">For example, using Shopify Order Placed Trigger and checking if a product with product id "zGhad23wfadfa" is part of the Shopify line items.<br><br><u dir="ltr"><strong>Step 1</strong>: Select Action Type Find</u></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480609/original/X7iUYaj_SehCrghF7dD29q57bQqW8WEG9g.png?1737961681" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib fr-bordered" data-attachment="[object Object]" data-id="155040480609"></td></tr><tr><td dir="ltr" style="width: 50.0000%;"><u dir="ltr"><strong>Step 2</strong>: Select Shopify &gt; Line Items</u></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480684/original/Stb1nbdogQM3wJV8nZqN59nBDPERRs1mxQ.png?1737961772" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib fr-bordered" data-attachment="[object Object]" data-id="155040480684"></td></tr><tr><td dir="ltr" style="width: 50.0000%;"><u><strong>Step 3</strong>: Pick the Key and input the Value to match.</u></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480731/original/bUhLbJ5DBfQ2J2DMuUc1I8DALkZVO_zqXA.png?1737961804" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib fr-bordered" data-attachment="[object Object]" data-id="155040480731"></td></tr><tr><td dir="ltr" style="width: 50.0000%;"><u><strong>Step 4</strong>: Review the available Line Item Keys.</u></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481092/original/3CZd4JMwZhu0p4W88wigwYey4s7gGkatag.png?1737961870" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="155040481092"></td></tr><tr><td dir="ltr" style="width: 50.0000%;"><u><strong>Step 5</strong>: In this example, select the "id" Key and paste in the specific product id as the Value.</u></td><td style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481121/original/MRD8SA6WoV3VoYgFExIJcG6_nIl4Y-ufVg.png?1737961915" style="width: auto; max-width: 100%;" class="fr-fic fr-fil fr-dib fr-bordered" data-attachment="[object Object]" data-id="155040481121"></td></tr></tbody></table>

  

###   

### **Find by Index**

  

The Find by Index Action will return one item based on it's array position. The array always starts at zero (0). So if there are three (3) items in the array they will be numbered like this: (0) Apple, (1) Banana, (2) Cherry. A request for the item at index position two (2) will return the third item in the list, in this case Cherry.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479871/original/B5KIJaU-pso0h87O8wcSVDS9iOfpNOorWg.png?1737960844)

###   

### **Filter**

  

The Filter Action will return an array of all the objects that match a given filter (or set of filters). For example, all of the objects that have the color "blue" or all of the objects in the category "home".

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479946/original/7FpotjptUCNI2FoGye1pl0iO-aoe-2azng.png?1737960944)

  

  

For example, you can filter an array down to only a certain person. By setting the Key to "id" and the Value to the dynamic {{user.name}} you could get all of their orders.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481226/original/OdnHyvfid1bBaAzNfMsSMi0xAhI1e2rUyQ.png?1737962042)

###   

###   

### **Line Items**

  

The Line Items action type allows you to rebuild/reconstruct arrays to fit a target action, such as a custom webook, storing in Google Sheets, or matching Email Builder shopping cart structure. You can customize the key-value pairs in each item. This takes in one array and outputs the same data in a different array you specified.

###   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479996/original/GGHxWVTGin31P72-wosdPcgYqAGOCioVGA.png?1737961025)

  

###   

### **Math**

  

The Math Functions Action has several options like Sum or Avg to be performed on the numbers in an array. For example, all of the prices can be Summed together to get the total order value. The result of the math will be returned. The Math operations are:

  

-   Sum: add all of the values, return the total.
-   Min: find the smallest value, return it.
-   Max: find the largest value, return it.
-   Average: add all of the values and divide by the number of values, return the mean.
-   Count: count the total number of values, return it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480098/original/JZemO149ziEtzyYNP9OH3279OQ7mJ3LpCw.png?1737961192)

* * *

## **Frequently Asked Questions**

  

**Q: What type of data can be used with Array Functions?** 

A: Array Functions work with arrays (lists) of objects or numbers. Arrays often come from triggers like form submissions, order line items, or API responses.

  

**Q: Are Array Functions a premium feature?** 

A: Yes, Array Functions are part of HighLevel’s premium workflow actions and will incur a small fee every time they run.

  

**Q: Can Array Functions handle nested arrays?** 

A: No, Array Functions are currently designed to handle one-dimensional (flat) arrays. Additional processing for nested data requires custom solutions.

  

**Q: Can I use multiple Array Functions in the same workflow?** 

A: Absolutely. You can chain Array Functions together to perform complex operations.

  

**Q: How do I debug issues with Array Functions?** 

A: Use the “Test Workflow” feature in the builder to view outputs and ensure proper configuration.

* * *

## **Related Articles**

-   [Custom Code in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002253-custom-code)  
      
    
-   [Math Operations in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001216182-action-math-operation)  
      
    
-   [How to Use If/Else Conditions in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002847-if-else-conditions)

* * *

## **Next Steps**

-   Review your workflows to identify areas where Array Functions can automate processes.  
      
    
-   Explore additional premium actions, such as Custom Code, for advanced automation needs.  
      
    
-   Ensure all users managing workflows are trained on Array Functions for optimal utilization.