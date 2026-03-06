---
title: "Zoom Integration for Users' Calendar Bookings"
url: "https://help.gohighlevel.com/support/solutions/articles/48001179593-zoom-integration-for-users-calendar-bookings"
category: "Uncategorized"
---

# Zoom Integration for Users' Calendar Bookings

**Note**: Dynamic Zoom links are only available with Personal , Round Robin and Collective Calendars.  

  

Zoom is a communications platform that allows users to connect with video, audio, phone, and chat simultaneously! Integrating your Zoom account with group calendars is easy to set up and is a great way to take your productivity to the next level. By syncing your Zoom account with your calendar(s), you can quickly schedule appointments, send out reminders, and keep track of upcoming events - all in one place!

  

  

#### **Covered in this Article:**

#### [**What Is the Zoom Integration?**](#What-Is-the-Zoom-Integration?)

#### [Usage cases](#Usage-cases)

#### [Benefits of this feature:](#Benefits-of-this-feature%3A)

#### [**Integration Prerequisites**](#Integration-Prerequisites%C2%A0) 

#### [Integrating the same Zoom Account with Multiple Users](#Integrating-the-same-Zoom-Account-with-Multiple-Users)

####   
[**Step 1: Install the Zoom integration**](#Step-1%3A-Install-the-Zoom-integration)

####   
[**Configure Zoom for Other Users as an Admin**](#Configure-Zoom-for-Other-Users-as-an-Admin)

#### [**Step 2: Set up appointment reminder workflow with Zoom location**](#Step-2%3A-Set-up-appointment-reminder-workflow-with-Zoom-location)

####   
[**FAQs**](#FAQs)

-   [I don't have a Profile tab on my sidebar.](#I-don't-have-a-Profile-tab-on-my-sidebar.)
-   [Handling Meeting Links when Meetings are Edited](#Handling-Meeting-Links-when-Meetings-are-Edited)
-   [Handling Meeting Links when Meetings are Deleted](#Handling-Meeting-Links-when-Meetings-are-Deleted)
-   [Handling Meeting Links when Meetings are Rescheduled to a different time](#Handling-Meeting-Links-when-Meetings-are-Rescheduled-to-a-different-time)
-   [Handling Multiple Zoom Meetings at the Same Time Slot](#Handling-Multiple-Zoom-Meetings-at-the-Same-Time-Slot)
-   [Existing Zoom Events Not Reflecting in the Calendar](#Existing-Zoom-Events-Not-Reflecting-in-the-Calendar)
-   [Calendar Version Support](#Calendar-Version-Support)
-   [How do I integrate my Zoom account with an unassigned calendar](#How-do-I-integrate-my-Zoom-account-with-an-unassigned-calendar)

  

* * *

## **What Is the Zoom Integration?**

  

  

  

The Zoom integration with this CRM allows users to schedule, start, and manage Zoom meetings directly from within the platform. This provides a seamless experience for users, removing the need to switch between different applications and platforms.

  

Once the Zoom integration is set up within the CRM, it is capable of dynamically generating unique Zoom meeting links for each new meeting that is scheduled. This process is automatic when the meeting location in the user availability and calendar settings is set to Zoom.

  

This unique meeting link generation is a significant feature as it provides added security and reduces the chance of unwanted interruptions during your meetings. Each participant gets a different link, making it harder for unauthorized persons to gain access.

  

For instance, if you're scheduling a meeting with a client, once you select Zoom as the meeting location, the CRM will automatically create a new Zoom meeting and embed the unique meeting link within the calendar event. The client will receive an invitation to the meeting with the unique Zoom link. This link is for that single meeting, providing convenience and security for all parties involved.

  

In addition, the Zoom integration enables you to keep track of all these meetings within the CRM. All scheduled Zoom meetings are automatically documented within the platform, making managing your appointments and keeping track of your engagements easier.

  

  

### **Usage cases**  
  

**Team Meetings**: Make team collaboration easy with Zoom integration. A unique Zoom link is generated automatically each time a meeting is set, simplifying communication within your team.

  

**Client Consultations:** Streamline your client consultations with this integration. It automatically creates a unique Zoom link every time a client books a meeting, adding a layer of professionalism and ease to your interactions.

  

**Webinars:** Enhance your webinar experience with the Zoom integration. As a participant registers, a personalized Zoom link is automatically created, making webinar management seamless and efficient.

  

**Virtual Office Hours:** Teachers and professors can use the Zoom integration to manage office hours or extra help sessions efficiently. A unique Zoom meeting is created when students book a slot, eliminating scheduling hassles.

  

**Online Fitness Classes:** Fitness instructors can leverage this integration for effortless class management. Every time a client books a session, a unique Zoom link is sent out, providing a smooth virtual fitness experience.

  

**Virtual Real Estate Showings:** Transform your business with Zoom integration. As potential buyers schedule a showing, the system creates a unique Zoom meeting, bringing property viewing to their comfort zone.

  

**Telemedicine Appointments:** Make healthcare more accessible with Zoom integration. A unique Zoom meeting is created upon a patient booking an appointment, bringing healthcare services closer to home.

  

**Online Cooking Classes:** Start your cooking class experience with the Zoom integration. A personalized Zoom link is generated when a participant registers, bringing your culinary expertise to their kitchen.

  

### **Benefits of this feature:**  
  

Here are some technical advantages of the Zoom integration feature:

  

**Automated Meeting Scheduling:** A unique Zoom link is generated automatically for each meeting once the integration is set up. This saves significant time on manual setup and prevents errors.

  

**Centralized Management:** The integration allows users to manage all aspects of meetings, including scheduling, rescheduling, and cancellations, directly from the CRM. This centralization improves efficiency and reduces the likelihood of miscommunication.

  

**Multi-User Accessibility:** Regardless of the number of participants, a unique Zoom link is automatically generated for each participant. This ensures security and improves the overall meeting experience.

  

**Calendar Syncing:** The integration allows Zoom meeting scheduling to be directly synced with the CRM calendar. This feature eliminates double booking and enhances time management.

  

**Real-time Updates:** Changes made in the CRM, such as rescheduling or cancellations, are reflected in real-time in the Zoom platform, thus reducing discrepancies and improving overall coordination.

  

**Enhanced Security:** Each meeting has a unique link, reducing the risk of uninvited guests joining a meeting.

  

**Automated Notifications:** The integration automatically sends participants notifications with meeting details and changes. This reduces the manual effort of sending out messages and improves meeting attendance.

  

**Data Tracking:** The integration allows for comprehensive tracking of meeting data, including attendance, meeting duration, and more. This can help in analyzing patterns and improving business processes.

* * *

## **Integration Prerequisites** 

• Any User can start using Zoom Integration for Calendars

• Each User connects their own Zoom account to their Profile, and a unique link is generated with every booking on each Group Calendar(s) the User is assigned to

• Dynamic Zoom links are only available with Round Robin and Collective Calendars.  
  

### **Integrating the same Zoom Account with Multiple Users**

  
Zoom integration is tied to unique User IDs in the backend, not email addresses. Zoom connections now support using the same Zoom account across multiple users and across multiple locations. To manage shared connections, use Calendars → Settings → Connections → Video Conferencing.

  

This can cause issues for users with different email addresses within the same agency or users needing to connect their Zoom accounts across multiple agencies.

  

In specific scenarios, if a user account is deleted and restored with the help of Support, it could result in two User IDs associated with the same email address. This could lead to further complications as the restored account couldn't reconnect to the original Zoom account due to the new User ID.

  

It's crucial to remember that User IDs and email addresses are treated as distinct identifiers within the system, underpinning the integration with Zoom. It's essential to consider your User ID as the unique identifier for the integration, not your email address.

  

This might seem complex, but understanding this distinction will help avoid potential integration issues and alleviate frustrations.

  

Let's use some examples for a better understanding.

  

Consider an agency, "ABC Marketing." They have three users:

  

User A with User ID "A001" and email "a@abcmarketing.com"

  
User B with User ID "B002" and email "b@abcmarketing.com"

  
User C with User ID "C003" and email "c@abcmarketing.com"

  
Users want to integrate their Zoom accounts with their respective profiles on the agency's platform.

  

User A connects their Zoom account successfully with the User ID "A001". Suppose, for some reason, User A's Profile is deleted and restored by the client contacting Support. Upon restoration, User A is assigned a new User ID, let's say "A004", while their email remains "a@abcmarketing.com."

  

Here's where the confusion can start. User A tries to reconnect their Zoom account. However, their Zoom account is still tied to the old User ID "A001". Therefore, when they attempt to connect using the new User ID "A004", the system blocks it. This is because, from the system's perspective, the Zoom account is already connected to a different User ID.

  

This is why it's crucial to remember that Zoom integration is linked to the User ID, not the email address. The system treats the User ID as the unique identifier when connecting to Zoom, even if the email address remains the same.

  

On another note, User A cannot integrate their Zoom account into User B's Profile either because the Zoom account is still tied to User ID "A001". So, even though they are within the same agency, they cannot share a Zoom account due to these unique User IDs.

  

Understanding this underlying mechanism should help avoid confusion and ease the integration process.

  

**Please note:** It is not recommended to connect different Zoom accounts to the same User across multiple sub-accounts or to use the same Zoom account across multiple users. 

## 

* * *

## **Use one Zoom account across locations & users**

You can connect the same Zoom account in multiple locations and use it across multiple users.  
  

-   Same account across locations: You can connect the same Zoom account in multiple locations.  
      
    
-   Same account across users: Multiple users can connect and use the same Zoom account.  
      
    
-   Limit: A user can connect one Zoom account per location.
    

  

### **Dynamic links requirement  
**

  
Dynamic Zoom links are created only when the connected Zoom account is selected as the meeting location in the calendar.  
  

### **Remove or switch the connected Zoom account  
**

  
You can remove or switch the connected Zoom account from:  
  
Connections → Video Conferencing  
  

1.  Go to Calendars → Settings → Connections → Video Conferencing.  
      
    
2.  Remove the existing Zoom connection or connect a different Zoom account.  
      
    
3.  Confirm the meeting location setting on any calendars that should generate dynamic Zoom links.
    

* * *

## **Step 1: Install the Zoom integration**

  
You can configure Zoom for your scheduled meetings in the following ways:  
  

-   **User Integrations**  
    -   User Profile > Integrations > Zoom > Connect  
          
        
    -   In the dialog box, click **Connect to Zoom (If not already connected)**  
          
        
    -   Enter your Zoom login credentials, then click **Sign in**.  
          
        
    -   You'll be prompted to grant permission for _Zoom_ to access your Zoom account. Click **Allow**.  
          
        
    -   You'll be redirected to the platform, where Zoom appears under User Profile Integrations.  
          
        
-   **Default Meeting Location**  
    -   User Profile > Default Meeting Location > Zoom > Connect  
          
        
    -   In the dialog box, click **Connect to Zoom (If not already connected)**  
          
        
    -   Enter your Zoom login credentials, then click **Sign in**.  
          
        
    -   You'll be prompted to grant permission for _Zoom_ to access your Zoom account. Click **Allow**.  
          
        
    -   You'll be redirected to the platform, where Zoom appears under User Profile Integrations.  
          
        
    -   You can then select 'Zoom' from the dropdown and hit 'Save' to prompt a dialog ascertaining whether or not existing meeting locations across all other calendars need to default to Zoom.  
          
        
-   **Calendar Settings**  
    -   Settings > Calendar Settings > User \[x\] > Meeting Location  
          
        
    -   In the dialog box, click **Connect to Zoom (If not already connected)**  
          
        
    -   Enter your Zoom login credentials, then click **Sign in**.  
          
        
    -   You'll be prompted to grant permission for _Zoom_ to access your Zoom account. Click **Allow**.  
          
        
    -   You'll be redirected to the platform, where Zoom appears under User Profile Integrations.  
          
        
    -   You can then select 'Zoom' from the dropdown to have the meetings include Zoom links with every booking.

  

**Please note**: You must be logged in as the user to do the profile setting integration options. If you are unable to find the _Profile_ setting option within the sub account-level settings, you must edit the user's role from the agency-level _Team_ setting to assign the user to the specific location(s). 

  

  

* * *

## **Configure Zoom for Other Users as an Admin**

If the Zoom integration has already been installed in your account by the respective User, you can choose that as a Default Meeting Location for the User under Team Management.

  

  

**Please note:** Each User has to be currently log into their account to integrate Zoom. Agency admins can now use the "[Login As User" Feature](https://help.gohighlevel.com/support/solutions/articles/48001223053-login-as-user-agency-admin-only-) to complete this process for any user in the agency.

  

  

  

* * *

## **Step 2: Set up appointment reminder workflow with Zoom location**

  
[The Workflow Builder](https://help.gohighlevel.com/support/solutions/articles/48001179678-workflow-builder-overview) is a potent tool with many uses. Still, for this use case, it provides easy access to automate internal and external reminders of upcoming appointments, including the dynamic Zoom link. You can craft your workflow by combining the following triggers and actions or use one of the available templated Recipes.  by 

  

-   Click on "**Add New Workflow Trigger**"  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206660/original/S3Jj3DZ7tw5oVVrf675riHl1iYjyzSLZsA.png?1685555017)

  

  

-   Select "**Appointment Status**" as the trigger and add the following filters:  
      
    -   Event Type: Is this a one-time appointment, a recurring appointment, or would you like it to fire for either  
          
        
    -   Appointment Status: The calendar setting for auto-confirming appointments would ensure all appointments trigger this filter  
          
        
    -   In Calendar: Optional if narrowing down specific calendars and specific users.  
          
        

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206662/original/yPxrWPmscg8nb2ajniYeIIK41mZBuhgzNQ.png?1685555017)

  
  
  

-   Click on "**Add your first Action.**"  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206661/original/UKPzULnHxI0XGo-sHcaDI4wjAnTXDNAEFQ.png?1685555017)

  

  

  

  

-   The first action needed is a one-minute time delay "**Wait**" step to ensure the meeting location value is updated.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206664/original/iGbrgntY2P6mG-d7jRX-OOtWDozGO88BpQ.png?1685555018)

  

  

-   The following action steps would begin your appointment booked confirmation notifications: "**Send Email/SMS**" would notify the contact on their listed primary email and phone number. Be sure to include the custom value {{appointment.meeting\_location}} in your messages to provide them with the dynamic zoom link.Zoom  
      
    For a link to custom values/merge fields available, please [CLICK HERE](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48001078171-custom-values-merge-fields).  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206666/original/n3MremtNoREea-aDu7-xIMMGxJS8Pxlo3g.png?1685555020)

  

  

-   Optionally, you can include email, sms, and in-app appointment reminders to the assigned User or any external contact using the "**Internal Notification"** action. 

  

**Best Practice**: If sending internal notification email, use do-not-reply@agency.com or notifications@agency.com to ensure no confusion with contact initiated conversations.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206665/original/IzaXTOV1gVRvWBNGhf3wL1g1fRhL_0kHYw.png?1685555020)

  

  

  

-   The last step is defining the cadence of notifications using the "**Event/Appointment Time**" wait for action in unison with the previous **Send Email/SMS** and **Internal Notification actions**.  
      
    -   Specify how long you want to send the next reminder before the event. In this example, it will wait for 24 hours before the following action (send email/sms or internal notification) will fire.  
          
        
    -   meeting  
          
        -   Move to the next step: fire the next action and follow the workflow linearly.  
              
            
        -   Move to a specific step: this will move the lead to a particular action in the workflow.  
              
            
        -   Skip all outbound communication actions until the next wait step: Will not send any email/sms and moves the lead through the workflow linearly until the next wait step.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206669/original/HpmFx3C2NsvtOxSYnc1ydHloPe5Gyx_iIA.png?1685555020)

  

  

  

* * *

## **FAQs**  
  

### **I don't have a Profile tab on my sidebar.**  
  

If you do not see the "**Profile**" tab on your sidebar, you are not a user/employee within that respective sub-account/location. Please add yourself to that sub-account as a user by clicking **My Staff > + Add Employee > Add Employee >Save.**

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206667/original/Nzf6NA_NPQE2hJ4Tx1ZhVUIwnKewEeCvVg.png?1685555020)

  

If you want to add your agency user profile to this sub-account as an employee, please head back to your **Agency View > Agency Settings >** Click on the**"Team"** tab **>** Search for User **\>** Click on **"User Roles" >** Click **"Add to Sub-account" > Select which subaccount you want to add them to**.

  
**Tip:** To switch between an agency and sub-account Profile, you can use the "[login-as feature](https://help.gohighlevel.com/en/support/solutions/articles/48001223053)" available for agency admins.

  

  

### **Handling Meeting Links when Meetings are Edited**  
  

If your meeting date and time are the same, the Zoom meeting link generated prior continues to function as intended. 

  

### **Handling Meeting Links when Meetings are Deleted**  
  

If your meeting is canceled or deleted, the Zoom meeting link will be dropped permanently unless there is another meeting for the same time slot using the same meeting link.

  

### **Handling Meeting Links when Meetings are Rescheduled to a different time**  
  

If your meeting is rescheduled, a new meeting link will be generated unless there is another appointment in the same time slot, in which case, the link generated prior would be re-used.

  

### **Handling Multiple Zoom Meetings at the Same Time Slot**  
  

If the Calendar Settings allow for multiple appointments per slot, then the same meeting link would be re-used across all the meetings.

  

**Please note:** Currently, a single user may only use up to 100 requests per day (UTC) to create, update, or delete meetings. This 24-hour period resets at 00:00 UTC, not the user or account’s local timezone.

  

### **Existing Zoom Events Not Reflecting in the Calendar**  
  

Currently, Zoom Integration neither pulls in events from Zoom nor uses pre-generated meeting links on meetings created directly via Zoom.

  

### **Calendar Version Support**  
  

Currently, the dynamic Zoom Integration only works with Group Calendars.

  

### **How do I integrate my Zoom account with an unassigned calendar**  
  

Unassigned booking calendars can use static or pre-generated Zoom meeting links by manually adding the static link to the meeting location setting under Team and Event Setup. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000206668/original/-jTZ-dQlZq3LjkIa24xsFk24aelYjLVvYg.png?1685555020)