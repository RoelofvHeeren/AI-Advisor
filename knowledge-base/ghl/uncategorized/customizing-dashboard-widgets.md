---
title: "Customizing Dashboard Widgets"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001207-customizing-dashboard-widgets"
category: "Uncategorized"
---

# Customizing Dashboard Widgets

Widgets are powerful tools for visualizing data, and customizing them ensures they deliver the insights you need. This guide explains how to modify widget settings, add filters, experiment with chart types, and fine-tune the display to suit your goals. Transform your dashboard into an effective and visually compelling data center with these simple steps.

  

**TABLE OF CONTENTS**

-   [What Are Dashboard Widgets?](#%E2%80%8B%E2%80%8BWhat-Are-Dashboard-Widgets?)
-   [Why Should You Customize Dashboard Widgets?](#Why-Should-You-Customize-Dashboard-Widgets?)
-   [Where to Find the Widget Customization Options](#Where-to-Find-the-Widget-Customization-Options)
-   [How to Customize Dashboard Widgets](#How-to-Customize-Dashboard-Widgets)
    -   [Step 1: Choose the Widget](#Step-1%3A-Choose-the-Widget)
    -   [Step 2: Configure the Widget Settings](#Step-2%3A-Configure-the-Widget-Settings)
    -   [Step 3: Add Conditions](#Step-3%3A-Add-Conditions)
    -   [Step 4: Save Changes](#Step-4%3A-Save-Changes)

##   
What Are Dashboard Widgets?

Dashboard widgets are small, interactive tools that present key data points in visual formats like charts, graphs, and tables. These widgets are essential for summarizing complex information into easy-to-read formats. Customizing them allows you to tailor their appearance and functionality, ensuring they align perfectly with your reporting needs.  

  

  

  

## Why Should You Customize Dashboard Widgets?

Customizing widgets offers several benefits:

  

    **•    Personalized Insights:** Highlight the metrics most relevant to your business goals.

    **•    Enhanced Clarity:** Adjust titles, filters, and layouts to make data interpretation straightforward.

    **•    Improved Comparisons:** Add filters and conditions to compare different metrics or time periods easily.

    **•    Efficiency:** Quickly access the data you need without navigating through irrelevant information.

  

## Where to Find the Widget Customization Options

    1.    Navigate to your dashboard within the platform.

    2.    Choose the widget you want to modify from the list.

    3.    Click on the widget to access the configuration and customization options.

  

  

  

## How to Customize Dashboard Widgets

  

### **Step 1: Choose the Widget**

Select the widget you want to modify from the widget list. By default, each widget comes with a pre-selected chart type under the “ALL” filter. To change the chart type, click on the chart icon and choose the one that best fits your data.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036973584/original/-sbUU1m-Iag_gKL5qr_6w-rKjrpdWbc5yg.png?1732194078)

  

### **Step 2: Configure the Widget Settings**

Go to the “Configure” tab to adjust the widget:

  

   **Title:** **Rename the widget to make its purpose clear.**  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036971813/original/q47ytBo1FNk_2lYiOY8NXjr2d_ylcfADuQ.png?1732193192)  
  

**Metrics: Update the data points displayed in the widget. Multiple metrics can be added for Line, Bar and Horizontal bar charts**

  

  

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041049991/original/UKczdpHmNcfdoCiQvuBbme_d917ysh220A.png?1738753060)  
  

  **Group: Define grouping options for charts like Donut charts.**  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036971934/original/1OqFcV4ReLAS_i46TNZxVPqGfpy7v5ZwtA.jpeg?1732193250)  
  

 **View By: Select the secondary dimension for visualizations like line or bar charts.**  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036971986/original/hamS3uRkGn5V9-pvAANAWfAV9HTl1KT-3Q.jpeg?1732193278)  
  

**Breakdown: Adjust the time period frequency.**  
  
**Date Property: Choose the date type (e.g., Created Date, Updated Date) for fetching results.**

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036972033/original/eT0TdHBymUtrOe0dXxjYKlACBRj8UsFJ8Q.jpeg?1732193312)  
  

**Date Range Override:** **Override the dashboard’s global date range for this widget.**  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036972116/original/2xC-KBovFoHDFfRoHENRqqZX2tSay5WWNQ.jpeg?1732193350)

  
**Order: Sort the results in ascending or descending order.**

  
****Limit:** Set a maximum number of results displayed.**  
  
**Comparison Date Property: Add a comparison percentage for better context.**

  

Advanced settings are available for further personalization, but they’re optional.

  

### **Chart Type Picker in Widget Settings**

  

Choosing the right visualization improves readability and decision-making. Select your \*\*chart type\*\* directly in the widget settings without leaving the flow.

  

**How to Pick a Chart**

1\. Open **Settings** → **Configure**.  

2\. Choose the desired **Chart Type** (e.g., bar, line, pie) and review the live preview.  

3\. Continue to **Conditions** or **Save** your widget.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064044294/original/1nOQf-WnqgcRL_P1MbmUz2DaOWy8DeDAcQ.png?1770103110)

* * *

### **Step 3: Add Conditions**

  

### **Nested Filter Groups (OR Logic)**

Grouping filters enables advanced logic to match real-world segments. Use multiple groups to evaluate **OR** conditions, while **AND** within each group narrows results precisely.

  

**How to Build Groups**

  

1.  Open the widget → **Conditions**.  
      
    
2.  Click Add Filter to create Group 1.  
      
    
3.  Use +AND to add more filters inside the same group.  
      
    
4.  Click +Add Filter again to start Group 2 (adds an **OR** condition).  
      
    
5.  Repeat as needed; then **Save**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064046099/original/X5zNRmy7_jo_vKJEoncmM3hyZFPwV02TwA.gif?1770104178)

  

Note: **Visitor Data Widgets** support only **one** filter group.

* * *

### **Duplicate Filters via Groups**

Sometimes you need the **same field** twice (e.g., Source = google **OR** Source = facebook). Duplicates are now supported through separate groups, enabling broader matching without workarounds.

  

**Example**

-   **Group 1**: Source = google  
      
    
-   **Group 2**: Source = facebook

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064046556/original/mXTCbGDLdExJSiN4VA0nmpjmmwxhWr8fpw.png?1770104518)

  

### **Linked Filter Warnings**

Certain filters depend on each other (e.g., **Pipeline** and **Stage**). When combinations conflict, you’ll see **clear warnings** to help adjust conditions for accurate data.

  

**Behavior**

1.  Warnings appear inline within **Conditions** to highlight linked fields.  
      
    
2.  Adjust either filter to resolve the message, then **Save**.

  

    **1.    Click Add Condition under the “Conditions” tab.**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036977930/original/USh6mlxHkJysmVvjp6zLSh5cW2Ufqoe-AA.png?1732196531)

  

    **2.    Choose the filter, operator, and parameters.**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036978025/original/Ri6GHKn2rVzbIVVl3rAOn3uLr2LzS3W2yA.png?1732196593)  

    **3\.    Add multiple filters using AND/OR conditions or delete any unnecessary ones.**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036978054/original/gfiSlqWNmM6YRjnQt0DprzmBFsHWQGB49w.png?1732196603)  

**Note:** If no data matches a filter, the widget cannot be saved unless the filter is adjusted or removed.

  

### **Step 4: Save Changes**

Once all changes are made:

  

    **1\.    Click Save to update the widget.**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036982621/original/adkGcYPXFyL5cPLE7ePgI3-PezATv-jJgg.png?1732199201)  

    **2.    Adjust the widget’s size or position on the dashboard if needed.**  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036982751/original/5LcLFoqfEqONlVqoeDiyB3oDHBY1nGaR_A.gif?1732199269)  

    **3.    Save your dashboard layout to finalize the changes.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036982786/original/4S5WaP-sd44FUXWWicvQ3ucnyt6ZJtfMKw.png?1732199304)

  

  

**Pro Tip:** Multiple custom dashboards, widgets, and reports are available on the $297 and $497+ plans, offering advanced tools for enhanced data management.

  

###