---
title: "Guide to Date/Time Formatter Workflow Action"
url: "https://help.gohighlevel.com/support/solutions/articles/48001238249-guide-to-date-time-formatter-workflow-action"
category: "Uncategorized"
---

# Guide to Date/Time Formatter Workflow Action

The Date/Time Formatter action is a versatile tool that allows users to reformat and compare dates or date-times within workflows. This feature enables easy conversion of date formats for compatibility with different applications, database storage, or communication channels like email, SMS, or Slack. It also facilitates the comparison of dates to calculate the difference in days, simplifying date-related calculations and decision-making.

* * *

**TABLE OF CONTENTS**

-   [What is the Date/Time Formatter Workflow Action?](#What-is-the-Date/Time-Formatter-Workflow-Action?)
-   [Key Benefits of Date/Time Formatter Action](#Key-Benefits-of-Date/Time-Formatter-Action)
-   [How To Setup Date/Time Formatter Action](#How-To-Setup-Date/Time-Formatter-Action)
-   [Use Cases](#Use-Cases)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Date/Time Formatter Workflow Action?**

  

The Date/Time Formatter action is a simple tool that helps you work with dates and times in your automated tasks. Here are the three main features and their steps:

  

-   Changing the format of dates (ex: 2024-12-09)  
      
    
-   Changing the format of date-times (ex: 2024-12-09 15:48)  
      
    
-   Comparing two dates to see their difference (ex: 2024-12-09 vs 2024-12-08)

  

With these features, you can easily change how dates and times look or compare two dates, making it simple to share or save information in the correct format.

* * *

## **Key Benefits of Date/Time Formatter Action**

  

The Date/Time Formatter action offers several benefits for users who need to work with date and time data in their workflows:

  

-   **Consistency:** Ensures date and time data is formatted uniformly across different platforms and applications, improving readability and reducing confusion.  
      
    
-   **Compatibility:** Facilitates seamless data exchange and integration between various tools and systems by converting date and time formats as needed.  
      
    
-   **Decision-making:** Simplifies date comparisons and calculations, supporting informed decision-making in time-sensitive operations.  
      
    
-   **Flexibility:** Offers a wide range of format options to cater to specific requirements or preferences, making it adaptable to various use cases.

* * *

## **How To Setup Date/Time Formatter Action**

  

### **Access Workflow Builder**

  

Go to Automation > Create Workflow> + Start from Scratch. Alternatively, you can choose any of your existing workflow to use the Date/Time Formatter workflow action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086464/original/AOYu8H9yQ2VumEc63huR39VmAM2B67tTkg.png?1741750190)

  

  

### **Select Date/Time Formatter Action**

  

Click the "+" icon to view the list of workflow actions, seect "Date/Time Formatter" from the list.

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064433/original/J_svPbNFzFiE7Yn5d75y8ylD2RYTPJiiJA.png?1741706969)

  

  

### **Understanding Different Action Types**  
  

The Date/Time Formatter action ensures workflows can properly format, store, and compare date values for automation. Once configured, it stores the reformatted or calculated values as dynamic variables, which can be used in later workflow actions like sending emails, updating CRM fields, or triggering conditional workflows. With the Date/Time Formatter action, you can also compare dates using the action.

  

There are three primary ways to use this action:

  

-   **Format Date:** Convert a date into a different format.
-   **Format Date-Time:** Change both date and time formatting.
-   **Compare Dates:** Calculate the difference between two dates.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064532/original/kzSdz_vTyGk9OgGFsjIW428Egk6ctG5MDQ.png?1741707004)

  

  

### **Format DATE**

  

The Format Date function is a crucial feature of the Date/Time Formatter action, specifically designed to convert date structures from one format to another. Here's a more detailed breakdown of the Format Date function:

  

#### **Field Selection**

  

Choose the date field you want to reformat. You can select various sources such as a Specific Date, Current Date, Contact's date fields, date type custom fields, Appointment start/end date, Custom values, or even from an Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064633/original/c5y6pWoRV_BXXuqz3_pmcPpw1HnIn7VR1w.png?1741707067)

  

Currently, Contact Custom fields do not support the Date Time structure.

  

  

#### **From Format**

  

If you select a system field like Specific Date, Current Date, Contact's date type standard or custom fields, or Appointment start/end date, the tool will auto-detect the format and preselect it. You must manually select the matching format if you choose a Custom Value or an Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064837/original/N-gVpbSNXEkJ76O_cwyNdPCFjSXEJoHDzA.png?1741707112)

  

  

#### **To Format**

  

Select the desired format for the output date from the list of available formats. This is the format the original date will be converted to.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064972/original/gFsbZ2hBbNaXC7fvOwh7VVl2eQ9g1s8fRA.png?1741707182)

* * *

### **Format DATE-TIME**

  

The Format date-time function is an essential feature of the Date/Time Formatter action, designed to convert structures that include both date and time information to a different format. Here's a more detailed explanation of the Format Date and Time function:

  

#### **Field Selection**

  

Choose the date and time field you want to reformat. You can select various sources such as a Specific Date and Time, Current Date and Time, Appointment start/end date and time, Custom values, or even from an Inbound Webhook Trigger. Note that Contact Custom fields do not currently support Date Time structures.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085210/original/QfBq7h_U-0-ox4hOdBfaF4iUoi9xZwkalA.png?1741746520)

  

Currently, Contact Custom fields do not support the Date Time structure.

  

  

#### **From Format:**

  

The tool will auto-detect the format and preselect if you select a system field like Specific Date and Time, Current Date and Time, or Appointment start/end date and time. You must manually select the matching format if you choose a Custom Value or an Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085235/original/dDk15VGid2gSm1zfTK51IeJuowR3s8b5PQ.png?1741746552)

  

  

#### **To Format**

  

Select the desired output date and time format from the list of available formats. This is the format the original date and time will be converted to.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085239/original/iViu4OjOa6H_kHgDvM65p2ljHgoJg0-Y2g.png?1741746584)

* * *

### **Compare Dates**

  

The Compare Dates function is a valuable feature of the Date/Time Formatter action that allows users to compare two dates and obtain the difference in days. Here's a detailed overview of the Compare Dates function:

  

#### **Start Date Selection**

  

Choose the start date from various sources such as a Specific Date, Current Date, Contact's date fields, date type custom fields, Appointment start/end date, Custom values, or an Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086393/original/BMpIxErNiu7p2RxN-ivzSHrYTopTp4Vxbg.png?1741749979)

  

  

#### **Start Date Format**

  

If you select a system field like Specific Date, Current Date, Contact's date type standard or custom fields, or Appointment start/end date, the tool will auto-detect the format and preselect it. You must manually select the matching format if you choose a Custom Value or an Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086414/original/AJn---_UmwDK3ATEaKwKTjjqcAYrBn1sLw.png?1741750010)

  

  

#### **End Date Selection**

  

Choose the end date from the same sources as the start date (Specific Date, Current Date, Contact's date fields, date type custom fields, Appointment start/end date, Custom values, or from an Inbound Webhook Trigger).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086424/original/oiwhL5F9dkcNN19ynLAhYESOb1LkLlL3tw.png?1741750049)

  

  

#### **End Date Format**

  

Like the start date format, the tool will auto-detect the format and preselect it if you choose a system field. You must manually select the matching format for Custom Value or Inbound Webhook Trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086433/original/GQhQqrwdeT1M47-jKsb41yZRm9ErtQ9xsg.png?1741750074)

  

The difference is calculated as End Date - Start Date. You will get a negative value if the Start Date exceeds the End Date.  
  
The Compare Dates function is beneficial for users who need to perform date comparisons for various purposes, such as calculating due dates, determining the duration between events, or making decisions based on the time difference between two dates.

* * *

## **Use Cases**

  

The Date/Time Formatter action is helpful in various scenarios and for users who need to manage and manipulate date and time data. Here are some usage cases:

  

-   **Event organizers:** Format event start and end dates and times received from different sources to maintain consistency and make the data more readable.  
      
    
-   **Marketing teams:** Use formatted date and time information in email campaigns, SMS, or Slack messages for personalized and time-sensitive communication.  
      
    
-   **Sales teams:** Compare the current date with invoice due dates to send automated reminders to clients with upcoming or overdue payments.  
      
    
-   **Customer support teams:** Reformat date and time data received via inbound webhook triggers to create support tickets or update CRM systems.  
      
    
-   **Project managers:** Compare project start dates and deadlines to calculate the time remaining and send notifications to team members.  
      
    
-   **Data analysts:** Store consistently formatted date and time data in spreadsheets or databases, making analyzing and generating reports easier.  
      
    
-   **Software developers:** Integrate formatted date and time data from various sources in their applications, ensuring compatibility and smooth data processing.  
      
    
-   **E-commerce businesses:** Reformat order and delivery date information for better tracking and customer communication.

* * *

## **Frequently Asked Questions**

  

**Q. How do I use the formatted date or time in other workflow actions?**

Once the Date/Time Formatter action processes a date or time, it stores the reformatted value in a dynamic variable (e.g., {{datetime\_formatter.1.date}}, {{datetime\_formatter.1.datetime}}). You can reference this variable in subsequent workflow actions, such as sending emails, updating CRM fields, or triggering conditional logic based on the date value.

  

**Q. What happens if I select the wrong format in the “From Format” field?**

If the selected From Format does not match the actual format of the input date, the workflow may fail to process the date correctly. This can result in missing or incorrect date values. Always ensure that the From Format accurately represents the original date structure before converting it.

  

**Q. Can I compare a date field from a contact’s record with the current date?**

Yes, the Compare Dates function allows you to compare a stored contact date (e.g., “Signup Date” or “Last Purchase Date”) with the Current Date. This can be useful for triggering reminders, follow-ups, or automated actions when a certain number of days have passed. The difference in days will be stored in {{datetime\_formatter.1.days}} for further use in workflows.

  

**Q. Can the Date/Time Formatter action handle time zone differences?**

The Date/Time Formatter action processes dates and times based on the system’s default time zone settings. If your workflow involves users across different time zones, ensure that you standardize all date/time values or convert them accordingly before applying formatting.