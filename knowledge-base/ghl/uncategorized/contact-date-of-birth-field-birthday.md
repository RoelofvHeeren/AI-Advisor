---
title: "Contact Date Of Birth Field (Birthday)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001077108-contact-date-of-birth-field-birthday-"
category: "Uncategorized"
---

# Contact Date Of Birth Field (Birthday)

The Birthday field in HighLevel allows you to personalize communications, build automation campaigns based on contact birthdays, and filter contacts by age within Smart Lists. This article explains how to utilize the Birthday field effectively.

* * *

**TABLE OF CONTENTS**

-   [What is the Birthday Field?](#What-is-the-Birthday-Field?)
-   [How to Build Birthday Reminder Campaigns](#How-to-Build-Birthday-Reminder-Campaigns)
-   [How to Filter Contacts by Age in Smart Lists](#How-to-Filter-Contacts-by-Age-in-Smart-Lists)
-   [Best Practices](#Best-Practices)
-   [Common Issues and Troubleshooting](#Common-Issues-and-Troubleshooting)
-   [Related Articles](#Related-Articles)

* * *

## **What is the Birthday Field?**

  

The Birthday field is a standard system field that captures a contact's birth date (Month/Day/Year).  
It can be populated through:

  

-   Manual entry  
      
    
-   Form submissions  
      
    
-   CSV Imports  
      
    
-   API integrations
    

  

This field enables automation triggers based on birthdays and helps segment contacts by age.

* * *

## **How to Build Birthday Reminder Campaigns**

  

You can automate birthday reminders or offers by setting up birthday workflows.

  

### **Step 1:** Configure the Birthday Trigger

  

-   Navigate to **Workflows** > **Create New Workflow**.  
      
    
-   Set the **Trigger** to **Birthday**.  
      
    
-   Choose the trigger condition:  
      
    
    -   On the birthday  
          
        
    -   Before the birthday (e.g., 7 days before)  
          
        
    -   After the birthday (e.g., 1 day later)
        

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948330/original/A-EJmS-eU8slwJQO8xWd4wXGOcnUm1t4yg.gif?1749477876)

  

  

### **Step 2:** Define Actions

###   

-   **Send Email**: Personalized birthday greetings or offers.  
      
    
-   **Send SMS**: Short birthday wishes or coupon codes.  
      
    
-   **Assign Task**: Alert internal teams to follow up manually if needed.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948420/original/dY-FvszUwlOsrnpiCsrWVS72Ety5D6TVsw.gif?1749478000)

  

  

### **Example Workflow Structure**

  

| Step | Action |
| --- | --- |
| 1 | Trigger on Birthday |
| 2 | Send Birthday SMS |
| 3 | Send Birthday Email |
| 4 | (Optional) Notify the internal team |

* * *

## **How to Filter Contacts by Age in Smart Lists**

  

Using the Birthday field, you can segment your contacts based on their age for targeted communication.

  

### **Steps to Filter by Age**

1.  Go to **Contacts** > **Smart Lists**.  
      
    
2.  Apply a **Filter** using the Birthday field's **Age** condition.  
      
    
3.  Select the appropriate comparison:  
      
    

| Filter Condition | Use Case Example |
| --- | --- |
| Age is greater than X | Target seniors aged 50+ |
| Age is less than X | Promotions for young audiences under 25 |
| Age is between X and Y | Target specific age groups, e.g., 30–40 years |

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047948100/original/rQKJ6HKR4-6qSRJEDZATqZb2GlEdLXwR6A.gif?1749477612)

  

The system calculates age dynamically based on the current date and the stored birthday.

* * *

## **Best Practices**

  

-   **Capture Birthdays Early**: Include a Birthday field in lead capture forms to gather the information upfront.  
      
    
-   **Validate Date Formats**: Use MM/DD/YYYY format to ensure automation triggers work correctly.  
      
    
-   **Test Automation**: Always test birthday workflows with sample contacts before making them live.  
      
    
-   **Consider Time Zones**: Be aware that workflows may use contact-specific time zones if configured.
    

* * *

## **Common Issues and Troubleshooting**

  

| Issue | Solution |
| --- | --- |
| Birthday automation is not triggering | Ensure the Birthday field is populated with a complete and correctly formatted date. |
| Incorrect age calculation | Confirm that the birth year is correctly entered. Missing or incorrect years can cause errors. |
| SMS or email was not sent on the birthday | Double-check workflow timing, trigger configuration, and contact timezone settings. |

* * *

## **Related Articles**

-   [Workflow Trigger - Birthday Reminder](https://help.gohighlevel.com/support/solutions/articles/155000002670-workflow-trigger-birthday-reminder)
-   [Workflow Trigger - Custom Date Reminder](https://help.gohighlevel.com/support/solutions/articles/155000002674-workflow-trigger-custom-date-remimder)