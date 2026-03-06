---
title: "Quick Filters on Dashboards"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004503-quick-filters-on-dashboards"
category: "Uncategorized"
---

# Quick Filters on Dashboards

  

  

Quick Filters empower users to analyze dashboard widgets without requiring edit permissions. This feature ensures that users can apply filters individually, reducing the need for manual adjustments and protecting dashboard integrity. Quick Filters are saved at the user level, meaning each user can have their personalized filtering experience.

**Important:** Quick Filters currently only work with custom widgets (those you’ve created). They do not apply to the default General Widgets.

  

**TABLE OF CONTENTS**

-   [Adding Quick Filters to a Dashboard](#Adding-Quick-Filters-to-a-Dashboard)
    
    -   [Step 1: Navigate to the Dashboard](#Step-1%3A-Navigate-to-the-Dashboard)
    -   [Step 2: Access the Quick Filters Menu](#Step-2%3A-Access-the-Quick-Filters-Menu)
    -   [Step 3: Add Filters](#Step-3%3A-Add-Filters)
    -   [Step 4: Select Filters](#Step-4%3A-Select-Filters)
    -   [Step 5: Review and Apply](#Step-5%3A-Review-and-Apply)
    
-   [Using Quick Filters](#Using-Quick-Filters)
    
    -   [Step 1: Navigate to the Dashboard](#Step-1%3A-Navigate-to-the-Dashboard-1)
    -   [Step 2: Apply a Filter](#Step-2%3A-Apply-a-Filter)
    -   [Step 3: View Filtered Results](#Step-3%3A-View-Filtered-Results)
    
-   [How do Quick Filters work with existing widget level filters](#How-do-Quick-Filters-work-with-existing-widget-level-filters)

* * *

  

# **Adding Quick Filters to a Dashboard**

### **Step 1: Navigate to the Dashboard**

-   Open the dashboard where you want to add Quick Filters.
    

### **Step 2: Access the Quick Filters Menu**

-   Click on the "Quick Filters" button at the top of the dashboard.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040114997/original/T0suHQk2dCQpgAc8UIf4qC9T34ZpayF4hw.png?1737371785)
    

### **Step 3: Add Filters**

-   Click on the "+ Add Quick Filters" button.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115064/original/tDwpX6ApzJjmkYzNb2ZoWSoAN8iNukRJ0w.png?1737371824)
    
-   A sidebar will appear with available filters categorized by data source.
    
-   Use the search bar to find specific filters or browse categories.
    

  

### **Step 4: Select Filters**

-   Check the boxes next to the filters you want to add.
    
-   Click "Add" to proceed.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115095/original/YcUMzjaWVnlaVI82og2WERYk9c5_dk9R3Q.png?1737371849)
    

  

### **Step 5: Review and Apply**

-   Review the selected filters and add descriptions if needed.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115115/original/oI-ZetIP6_0wzfe1a5x7FiUDx4T6kmX5pA.png?1737371866)
    
-   Descriptions are visible to all users and help them understand the purpose of each filter.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115130/original/yWVGZqpNCy3h_jVkv14yrpd_-ZpmVtYhmw.png?1737371884)
    
-   Click "Apply" to finalize the setup.
    

  

**Important Note:**

1. Quick Filters are specific to each dashboard. You’ll need to configure them separately for every dashboard.
2. Only users with full or edit access to the dashboard can add Quick Filters.
3. Users with view access can use the filters but cannot modify them.

  

  

  

# **Using Quick Filters**

### **Step 1: Navigate to the Dashboard**

-   Open the dashboard where Quick Filters are configured.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115168/original/LkPIK_jpc9dtbo9uMk3KzGw4GmiPQJveQA.png?1737371919)
    

### **Step 2: Apply a Filter**

-   Use the Quick Filter bar to select and apply a filter.
    
-   Adjust filter properties to refine your view.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115200/original/iRGkULrbFMewxJyMi2JdJCFb1JlH7TjavA.png?1737371939)
    

### **Step 3: View Filtered Results**

-   The widgets will update based on the applied filters.
    

**Important Note:**

Filters apply only to widgets that use the same data source as the filter property.

Example: A filter for the Tags property under the Contact data source will affect only widgets using the Contact data source.

**Important Note:**

**Filters only apply to the user who set them** — they don’t affect other users.

**Filters are saved within your current browser session.** If you revisit the dashboard in the same session, your last-selected filters will remain applied.

* * *

# **How do Quick Filters work with existing widget level filters**

-   **Quick filters and widget filters work together using AND logic.** This means a quick filter **does not override** a widget-level filter—it adds to it.
-   To avoid incorrect or missing data, use **widget filters for widget-specific needs** and **quick filters for broader, team-wide filtering.**  
      
    **Example:**  
    If you set:
    -   **Widget filter:** Appointment status = Confirmed
    -   **Quick filter:** Appointment status = Cancelled  
          
        The system will try to show appointments where the status is both **Confirmed AND Cancelled**—which is not possible, resulting in **no data**.  
        ✅ **Best Practice:** Use quick filters for flexible filtering across the team and avoid duplicating similar filters at the widget level