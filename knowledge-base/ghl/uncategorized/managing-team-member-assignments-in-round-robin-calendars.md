---
title: "Managing Team Member Assignments in Round Robin Calendars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002711-managing-team-member-assignments-in-round-robin-calendars"
category: "Uncategorized"
---

# Managing Team Member Assignments in Round Robin Calendars

Properly assigning team members in Round Robin Calendars ensures fair and efficient appointment distribution. This feature allows businesses to automate scheduling while maintaining the flexibility to assign appointments based on specific preferences.

* * *

**TABLE OF CONTENTS**

-   [Understanding Key Terms](#Understanding-Key-Terms)
-   [Configuring Reschedule Preferences](#Configuring-Reschedule-Preferences)
-   [Setting New Appointment Preferences](#Setting-New-Appointment-Preferences)
-   [Additional Settings](#Additional-Settings)
-   [Best Practices](#Best-Practices)
-   [Frequently Asked Questions](#Frequently-Asked-Questions%C2%A0) 
-   [Related Articles](#Related-Articles)

* * *

* * *

## **Understanding Key Terms**

  

To effectively manage Round Robin Calendars, it’s essential to understand key terms that influence team member assignment. These definitions will help you configure the settings correctly and ensure seamless appointment distribution.

-   **Appointment Owner:** The user assigned to a specific appointment when booked.  
      
    
-   **Assigned User:** The contact's designated user within the system, often used for managing ongoing interactions.

* * *

## **Configuring Reschedule Preferences**

  

Reschedule preferences determine how appointments are reassigned when clients modify their bookings. These settings ensure flexibility while maintaining efficiency in appointment allocation.

  

### **Step 1: Accessing Advanced Settings**

-   Navigate to **Settings > Calendars** and select your **Round Robin Calendar**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366100/original/3SMpQ7qa4lD6BLaFi9L_J3Rs8Ms2OQT8-Q.gif?1740665818)  
      
    
-   Click on **Meeting Details** and select **Team Members**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366339/original/4yDNu0cbLY-LpL3SA30kzN7xs7eBgkDZ3Q.png?1740665973)

  

  

### **Step2: Selecting Reschedule Options**

-   Locate **Advanced Settings** to configure reschedule preferences  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366610/original/i7gb-VZvA9RcbHWUT7iYA78uRTJf_FbDFQ.png?1740666133)  
      
    
-   **Reassign Through Round Robin:** If you choose to reassign through round-robin scheduling, the rescheduled appointment will be assigned to any team member based on the round-robin algorithm.  
      
    
-   **Keep Same Appointment Owner:** If you configure the setting to keep the same appointment owner, then when a contact reschedules an appointment using the reschedule link, only the original appointment owner's slots will be shown on the booking widget.  
      
    

**For example:** If User A was the original appointment owner and the contact reschedules the appointment, only User A's available slots will be displayed for rescheduling.  
  
**Please Note:** You can turn off 'Allow Staff Selection' to prevent bookers from changing the staff member on the booking widget. For more refer to [How to configure Staff Member selection in Round Robin Calendars?](https://help.gohighlevel.com/support/solutions/articles/48001239842-how-to-configure-staff-member-selection-in-round-robin-calendars-)

* * *

## **Setting New Appointment Preferences**

  

New appointment preferences allow businesses to automate staff assignments based on predefined conditions, ensuring that clients book with the appropriate team member when necessary.

  

### **Step 1: Enabling "Always Book with Assigned User"**

-   This feature lets you choose whether new appointments should always be booked with the contact's assigned user. If a contact has an assigned user, that user will be given preference; otherwise, it will be a round-robin assignment.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042369995/original/iZGxloCNkMhUwJkv9iYa-uRrYyDN8gBKfg.gif?1740668410)  
      
    **Tip**: Turn off 'Allow Staff Selection' to prevent bookers from changing the staff member on the booking widget.  
      
    

#### **Prerequisites:**

-   The lead or customer must already have an assigned user in the system.
-   The **F****orm** must be first in the booking widget order. You can reorder the widget from the **Forms & Payments** tab in order to use this feature.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042369584/original/V3BjcEKK8wTx6pFMirs-IQkV-4yFj2ld7w.png?1740668166)

  

  

### **Step 2: Configuration Steps**

-   Go to **Meeting Details > Team Members > Advanced Settings** and toggle **Always Book with Assigned User** to enable this feature.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042370312/original/AuuwGLM0GxC-YFZLIHj7rciymRCDL5LLcg.gif?1740668656)

  

  

#### **How** **New Appointment Preferences** **Works**

  

When the form is first, the contact fills out their information. Based on the contact's email or phone number, the system checks who the contact's assigned user is. There are three possible scenarios:

  

-   **No Assigned User**: If the contact has no assigned user, the appointment is assigned through round-robin scheduling.  
      
    
-   **Assigned User not part of the Calendar**: If the contact has an assigned user (e.g., User A) who is not part of the calendar, the appointment is assigned through round-robin scheduling among the calendar team members.  
      
    
-   **Assigned User part of the Calendar**: If the contact has an assigned user (e.g., User A) who is part of the calendar, User A's slots are shown in the booking widget, and the appointment is booked with User A.

  

**Please Note:** If this setting is turned off, every new appointment will be scheduled through round-robin scheduling.

* * *

## **Additional Settings**

  

To further refine the appointment booking experience, you can enable specific settings that impact how contacts are assigned to team members within the Round Robin Calendar. These settings can be found under **Notifications and Additional Options Tab**  
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042368798/original/LwPz6aAPrBUuXQxheGHIvsNOiQF2Qg6KFw.png?1740667622)**

  

#### **Setting 1: Assign Contacts to Their Respective Calendar Team Members**

-   This setting ensures that when an appointment is booked, the contact is automatically assigned to the team member they scheduled with.
    
-   It helps streamline client management by keeping appointments and communications consistent with a single team member.
    

  

#### **Setting 2: Automatically Assign a Contact’s Future Appointments to the Same Team Member**

-   Enabling this setting ensures that once a contact books an appointment with a specific team member, all future appointments for that contact will automatically be assigned to the same team member.
    
-   This helps maintain continuity and improves customer relationships by allowing clients to work with the same staff member over time.
    

* * *

## **Best Practices**

  

Following best practices ensures that your Round Robin Calendar remains effective and efficient. Implement these recommendations to avoid scheduling conflicts and improve operational flow.

-   Ensure team availability is up to date for accurate appointment distribution.  
      
    
-   Regularly check **Advanced Settings** to align with business needs.  
      
    
-   Maintain consistent settings across all calendars to prevent conflicts.

* * *

## **Frequently Asked Questions** 

  

**Q: What happens if a customer does not have an assigned user?**  
The Round Robin logic will automatically assign an available team member.

  

  

**Q: Can I manually assign an appointment to a specific team member?**  
Yes, appointments can be manually reassigned within the calendar settings.

  

  

**Q: How does rescheduling work with this feature?**  
Depending on the selected settings, the appointment can either remain with the original owner or be reassigned through Round Robin logic.

  

  

**Q:** **Why can’t I see all my team members in the dropdown when booking an appointment from the Contact record?**

When booking an appointment from the contact detail screen (CRM > Contacts > Contact > Appointments tab), the “Team Member” dropdown will only show users **who are assigned to the calendar** associated with that appointment.

To ensure multiple team members appear in the dropdown, go to **Calendars > Select the Calendar > Team Members tab**, and **add all relevant users** to that calendar. Only users added here will appear in the dropdown list during manual booking.

* * *

## **Related Articles**

-   [Round Robin Calendar Staff Selection](https://help.gohighlevel.com/support/solutions/articles/48001239842-round-robin-calendar-staff-selection)
-   [Round Robin Calendars Appointment Distribution Logic](https://help.gohighlevel.com/support/solutions/articles/155000001484-round-robin-calendars-appointment-distribution-logic)