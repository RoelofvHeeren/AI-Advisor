---
title: "How to Find Group Calendar ID in HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/48001207671-how-to-find-group-calendar-id-in-highlevel"
category: "Uncategorized"
---

# How to Find Group Calendar ID in HighLevel

This article shows you how to **locate the ID for any Group Calendar** in HighLevel, a key step for integrations, automation, and API use.

* * *

**TABLE OF CONTENTS**

-   [What is a Group Calendar ID in HighLevel?](#What-is-a-Group-Calendar-ID-in-HighLevel?)
-   [When Is a Calendar ID Required?](#When-Is-a-Calendar-ID-Required?)[](#Steps-to-Locate-the-ID-of-a-Particular-Group-Calendar%C2%A0)
-   [Steps to Locate the ID of a Particular Group Calendar](#Steps-to-Locate-the-ID-of-a-Particular-Group-Calendar%C2%A0) [](#Step-1%3A%C2%A0Navigate-to-Calendar-Groups)[](#Frequently-Asked-Questions) 
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is a Group Calendar ID in HighLevel?**

  

A Group Calendar ID in HighLevel is a **unique identifier assigned to each group calendar you create**. It’s used in **integrations, workflows, and API calls** to reference that specific calendar. This ID ensures that events, automation, and bookings are **linked to the correct group calendar**, especially when working with multiple team members or services.

* * *

## **When Is a Calendar ID Required?**

  

You may need the Calendar ID for the following use cases:  
  

-   **Triggering workflows** based on calendar bookings.  
      
    
-   **Sending data** via Webhooks or API calls.  
      
    
-   **Integrating with external tools** (e.g., Zapier, Pabbly, Make).  
      
    
-   Advanced **troubleshooting** and **support** scenarios.

* * *

## **Steps to Locate the ID of a Particular Group Calendar** 

  

### **Step 1:** Navigate to Calendar Groups

  

1.  Go to your **HighLevel sub-account** and click on **Settings** in the left menu.  
      
    ![](https://jumpshare.com/v/5l54qyjUarKvLAtkbEHr+/Screen+Shot+2025-04-14+at+10.15.49+PM.png)  
      
    
2.  Click on **Calendars** and select **Groups** under **Calendar Settings**.  
      
    ![](https://jumpshare.com/v/nk1KrZRbZ27eaeLblxAg+/Screen+Shot+2025-04-14+at+10.18.06+PM.png)

  

  

### **Step 2:** Locating and Copying the Group Calendar ID

  

1.  From the list of Group Calendars, click on the **Share Group icon** of your desired group.  
      
    ![](https://jumpshare.com/v/SVF0JPHv5INPlDAdWkAQ+/Screen+Shot+2025-04-14+at+10.04.05+PM.png)  
      
    
2.  Click on **Scheduling Link** then **select** and **copy** the **last slug** of the **Permanent Link**.  
      
    ![](https://jumpshare.com/v/hqLSq896QOKSjIiiNkJL+/Screen+Shot+2025-04-14+at+9.55.32+PM.png)  
      
    
3.  Or you can click on **Embed Code** then **select** and **copy** the part of the ID before the underscore.  
      
    ![](https://jumpshare.com/v/oZ1axMWQ5U30fH2C8QAw+/Screen+Shot+2025-04-14+at+9.59.43+PM.png)

* * *

## **Frequently Asked Questions**

  

**Q: Can I use the same Calendar ID in multiple workflows?**  
Yes! As long as the workflows are connected to the same Group Calendar, the Calendar ID can be reused in different workflows and integrations.

  

**Q: Are Calendar IDs the same for all users in the sub-account?  
**Yes. The Calendar ID is tied to the calendar itself and remains the same regardless of the user accessing it, as long as they have permission.

  

**Q: Will the Calendar ID change if I rename the calendar?**  
No, renaming the calendar will not affect the Calendar ID. The ID remains constant regardless of the calendar’s display name.

  

**Q: What if the Calendar ID format changes?  
**HighLevel will notify users of any changes to calendar structures or URL formats. Bookmark this article to stay updated.

  

**Q: What if I deleted a calendar? Will the ID still work?**  
No, once a calendar is deleted, its ID becomes invalid. Any references to that ID in workflows or integrations will stop functioning.

  

**Q: Can I use Calendar IDs to filter bookings in the API?  
**Yes, if you're pulling data from the API, you can use the Calendar ID to filter bookings or appointment data for a specific calendar.

* * *

## **Related Articles**

  

-   [HighLevel Group Calendar Overview and Setup Guide](https://help.gohighlevel.com/en/support/solutions/articles/48001161037)  
      
    
-   [Adding Unassigned Calendars to Groups](https://help.gohighlevel.com/en/support/solutions/articles/155000003550)  
      
    
-   [Deactivating Calendar Groups](https://help.gohighlevel.com/en/support/solutions/articles/155000003551)[](https://help.gohighlevel.com/support/solutions/articles/155000003551-deactivating-calendar-groups)