---
title: "Appointment Booking for Voice AI Agents in HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-for-voice-ai-agents-in-highlevel"
category: "Uncategorized"
---

# Appointment Booking for Voice AI Agents in HighLevel

Easily streamline your scheduling process with the new Appointment Booking feature for Voice AI Agents in HighLevel. This update empowers your AI to suggest and confirm meeting slots directly on calls—eliminating the need for manual workflows or external booking links.

* * *

**TABLE OF CONTENTS**

  

-   [What is Appointment Booking for Voice AI Agents?](#What-is-Appointment-Booking-for-Voice-AI-Agents?%C2%A0) [](#Key-Benefits-of-Appointment-Booking-for-Voice-AI-Agents) 
-   [Key Benefits of Appointment Booking for Voice AI Agents](#Key-Benefits-of-Appointment-Booking-for-Voice-AI-Agents)[](#What%E2%80%99s-New-in-This-Release)
-   [What’s New in This Release](#What%E2%80%99s-New-in-This-Release)[](#Calendar-Selection)
-   [How To Setup Appointment Booking for Voice AI Agents](#How-To-Setup-Appointment-Booking-for-Voice-AI-Agents%C2%A0) [](#Option-1%3A%C2%A0Create-a-New-Voice-AI-Agent-With-Appointment-Booking) 
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Appointment Booking for Voice AI Agents?** 

  

Appointment Booking for Voice AI Agents enables your AI-powered phone agents to manage scheduling in real time. When speaking with contacts, the AI can access your calendar, offer available slots, collect necessary details, and confirm appointments—all without human intervention or redirecting users to external booking pages. This feature is designed to make scheduling seamless, efficient, and fully integrated within your Voice AI experience.

* * *

## **Key Benefits of Appointment Booking for Voice AI Agents**

  
Unlock smarter, more efficient scheduling with these user-focused advantages:

-   **Frictionless Scheduling:** Contacts can book appointments directly during calls, reducing drop-off and manual follow-up.  
      
    
-   **Calendar Integration:** Choose which calendar the AI uses, ensuring bookings are always up to date.  
      
    
-   **Customizable Availability:** Configure how many days and slots are offered, tailoring the experience to your business needs.  
      
    
-   **Double-Booking Prevention:** Real-time calendar checks prevent overlapping appointments.  
      
    
-   **Automated Data Collection:** The AI prompts for missing information, such as email addresses, ensuring complete bookings.  
      
    
-   **Improved Customer Experience:** Fast, intelligent scheduling leads to higher satisfaction and fewer missed opportunities.

* * *

## **What’s New in This Release**

  

-   ### **Calendar Selection**
    
      
    Choosing the right calendar ensures all appointments are accurately tracked and prevents conflicts with other bookings.  
      
    -   Integrate with Google Calendar, Outlook, or other supported platforms.  
          
        
    -   Assign specific calendars to different AI agents for multi-department scheduling.  
          
        
    -   Learn more about connecting calendars in HighLevel.

  

-   ### **Offering Days Configuration**
    
      
    Tailor how many days of availability the AI presents, allowing you to control booking windows and manage your team's workload.  
      
    -   Offer a rolling window (e.g., next 3 days) or fixed dates.  
          
        
    -   Adjust based on staff availability or business hours.

  

-   ### **Slot Management**
    
      
    Fine-tune how many appointments can be booked each day and set minimum gaps between slots to avoid over-scheduling.  
      
    -   Limit daily bookings to prevent overload.  
          
        
    -   Ensure adequate time between appointments for preparation or travel.

  

-   ### **Email Prompt Automation**
    
      
    Collecting contact emails ensures every booking has the necessary information for reminders and follow-ups.  
      
    -   AI automatically asks for missing emails, reducing incomplete bookings.  
          
        
    -   Emails are added to contact records for future communication.

* * *

## **How To Setup Appointment Booking for Voice AI Agents** 

Setting up Appointment Booking ensures your Voice AI can efficiently handle scheduling and confirmations. Proper configuration is key to maximizing the benefits and preventing booking errors.

  

  

If you want the AI to ask qualifying questions (with simple IF/ELSE logic) before booking, build a short flow in **Conversation AI → Flow Builder** using **Capture Information**, **AI Splitter**, and **Book Appointment**. 

  

  

### **Option 1:** Create a New Voice AI Agent With Appointment Booking

  

1.  #### **Open the AI Agents Dashboard**  
      
    
    1.  From your HighLevel sub-account, click **AI Agents** in the main navigation.  
          
        
    2.  Then select the **Voice AI** tab.  
          
        
    3.  Click **\+ Create Agent** button.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753190/original/bMHLZJlXGoTe9IvMWJxw0jUBcQPbXPmM4A.png?1747394732)  
          
        
2.  #### **Fill in Agent Details**  
      
    
    1.  Enter the required information in the **Agent Details** step.  
          
        
    2.  Click **Next** to proceed.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753492/original/5ytfymPo5xbibzQrXGTZDNJRa15IN5Iljw.png?1747394910)  
          
        
3.  #### **Switch to Advanced Mode**  
      
    
    1.  In the Agent Goals step, click **Switch to Advanced Mode**.  
          
        
    2.  This unlocks the ability to **add custom actions** like **Appointment Booking**.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753686/original/fVi-1NV8074krs8nPv5FfDx3UjhJAjaBww.png?1747395051)  
          
        
4.  #### **Add Appointment Booking Action**  
      
    
    1.  Scroll to the **Set Up Your Actions** section.  
          
        
    2.  Click **\+ New Action** and select **Book Appointment** from the list.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046754117/original/hClUms-CAoXyU80V8G8Izbkr60w9oLbC7g.gif?1747395349)  
          
        
5.  #### **Configure Appointment Booking Options  
    **  
    
    1.  **Select Calendar:** Choose the calendar that the AI will use for booking appointments.  
          
        
    2.  **Set Offering Days:** Define how many future days (e.g., 2 or 3) the AI should offer as options to the caller.  
          
        
    3.  **Appointments slots per day**: Set how many slots to offer each day (e.g., 3).  
          
        
    4.  **Hours between slots**: Define the time gap between slots (e.g., 1 hour).  
          
        
    5.  Click **Save** to finalize your configuration.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046754899/original/kGzpZf98IyN4b9snUxjrUFar2eUKUkALBA.png?1747395858)  
        
    6.  Configured **Appointment Booking Action** and **Extract Email for Appointment Action** will show under Setup Your Actions tab.  
          
        
    7.  Click on **Next**.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046756332/original/lZPzRVudycuVYyCQXK5hS69V8MUkxcdjbQ.png?1747396956)  
          
        
6.  #### **Setup Phone and Availability options.**  
    
    1.  Select **Phone Number/Number Pool**.  
          
        
    2.  Enable or Disable AI Agent as **Backup number or number pool**.  
          
        
    3.  Set **Working Hours for AI Agent**.  
          
        
    4.  Click on **Save** to create a new Voice AI agent with Appointment Booking option.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046756660/original/XcDw-6OLDicG_uDhuIRkyIZhx9gnrjoJKQ.png?1747397268)  
          
        

### **Option 2:** Add Appointment Booking to an Existing Agent

  

1.  #### **Edit an Existing Voice AI Agent**  
      
    
    1.  On the Voice AI dashboard, locate your agent.  
          
        
    2.  Click the **three-dot menu** next to the agent name and choose **Edit**.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761216/original/UuVK4cMUgNNKWdiYnlAQPbbjLlWrEuhqJQ.png?1747400200)  
          
        
2.  #### **Switch to Advanced Mode** (If the agent is created in Basic mode)  
      
    
    1.  Navigate to the Agent Goals tab.  
          
        
    2.  Click **Switch to Advanced Mode** to enable action configuration.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761597/original/RB_76oZ2ANlxd61X4j94adupTlnXW_PD9A.png?1747400481)  
          
        
3.  #### **Add and Configure Booking Action**  
      
    
    1.  Under **Set Up Your Actions**, click **\+ New Action**.  
          
        
    2.  Select **Book Appointment**, then configure calendar, days, slots as described above.  
          
        
    3.  Click **Save** to apply the updated logic.  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761674/original/4UzEhhoz-j867FQiOcTiFqrv2G846OzrdA.gif?1747400560)
        

* * *

## **Quick Sales Question Flow**  
 

Use this simple logic so the AI qualifies the caller before booking.  
  

1.  **Are you the decision-maker?**  
    
    -   **IF Yes →** go to availability.  
          
        
    -   **IF No →** ask for decision-maker’s name + email (Capture Information), then offer to book with them.  
          
        
2.  **Basic fit check:**  
      
    Ask for **budget**, **location**, and **timeline** (Capture Information).  
      
    
    -   **Tip:** map each answer to a **Contact custom field**.  
          
        
3.  **Route by fit:**  
    
    -   **IF budget ≥ $X AND timeline ≤ Y weeks →** **Book Appointment** on the **AE calendar**.  
          
        
    -   **ELSE →** **Book Appointment** on the **SDR/Discovery calendar** or create a callback task.  
          
        
4.  **Confirm:**  
      
    Send the standard confirmation and reminders after booking.
    

  

### **Where the AI’s Answers Are Saved**  

-   **Call Log (recording + transcript + summary):** Voice AI → **Call Logs/Dashboard**.  
      
    
-   **Contact (reportable fields):** Map each answer to a **Contact custom field** in the flow.  
      
    
-   **Appointment (context for the rep):** Add key details to the **Appointment Note** ( via workflow).  
      
    
-   **Form fields (if you used a custom booking form):** Open the appointment and check the **Forms** tab.  
      
    

* * *

  

## **Frequently Asked Questions**

**Q: Can I use multiple calendars for different AI agents?**

Yes, you can assign specific calendars to each Voice AI agent for tailored scheduling.

  

**Q: What happens if a contact doesn’t provide an email?**

The AI will prompt the contact for their email before confirming the appointment, ensuring all bookings have complete information.

  

**Q: How does the AI prevent double-booking?**

The AI checks the selected calendar in real time and only offers available slots, preventing overlapping appointments.

  

**Q: Can I customize the number of days and slots offered?**

Yes, you can set how many days of availability and the maximum number of slots per day in the settings.

  

**Q: Is this feature available for all Voice AI plans?**

Appointment Booking is available to users with Voice AI enabled; check your plan details for eligibility.

  

**Q: Are reminders sent automatically for booked appointments?**

Reminders depend on your calendar and workflow settings; ensure reminders are configured in your HighLevel account.

  

**Q: Can the AI reschedule or cancel appointments?**

Currently, the feature focuses on booking; rescheduling or cancellations may require manual intervention or additional workflow setup.

  

**Q: What types of calendars are supported?**

HighLevel supports integration with popular calendar platforms such as Google Calendar and Outlook.

  

* * *

## **Related Articles**

  

-   [Voice AI Agents Dashboard](https://help.gohighlevel.com/en/support/solutions/articles/155000004693)  
      
    
-   [Creating Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000004107)  
      
    
-   [AI Voice Agents Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000003911)  
      
    
-   [Testing Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000004108)