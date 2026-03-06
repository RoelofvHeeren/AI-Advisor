---
title: "How Calendly Syncs With HighLevel Calendars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005050-how-calendly-syncs-with-highlevel-calendars"
category: "Uncategorized"
---

# How Calendly Syncs With HighLevel Calendars

This article explains how syncing works between HighLevel and Calendly after the integration is connected. You’ll learn what gets synced, how appointments are handled, how contacts are created, and what limitations exist. This helps ensure you’re getting the most out of your Calendly integration inside HighLevel.

* * *

**TABLE OF CONTENTS**

-   [Understanding Syncing and Why It Matters](#Understanding-Syncing-and-Why-It-Matters)[](#What-Gets-Synced-From-Calendly?)
-   [What Gets Synced From Calendly?](#What-Gets-Synced-From-Calendly?)[](#How-Does-the-Calendly-Integration-Work?)
-   [How Does the Calendly Integration Work?](#How-Does-the-Calendly-Integration-Work?)[](#Calendly-Event-Syncing)
-   [Managing Calendars After Setup](#Managing-Calendars-After-Setup)[](#Known-Limitations-of-the-Calendly-Integration)
-   [Known Limitations of the Calendly Integration](#Known-Limitations-of-the-Calendly-Integration)[](#Phone-number-capture-rules-\(Calendly-%E2%86%92-Contact\))
-   [Phone number capture rules (Calendly → Contact)](#Phone-number-capture-rules-\(Calendly-%E2%86%92-Contact\))[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **Understanding Syncing and Why It Matters**

  

Syncing your HighLevel calendar with Calendly means that new events booked through your selected Calendly calendars will automatically appear as appointments inside HighLevel. This enables seamless contact creation and automation triggers based on real-time bookings—eliminating the need for manual data entry. The integration works as a **one-way sync**, meaning events are pulled from Calendly into HighLevel, but not the other way around. Syncing begins only after the integration is connected via **Calendar Settings > Connections**, and it applies exclusively to the calendars you select during setup. If you later deselect a calendar, syncing stops for that calendar, and re-selecting it will not bring in missed events—only new ones going forward will sync. Sync occurs in real-time or near real-time after each Calendly booking. 

  

To ensure a smooth and reliable experience, use a supported Calendly plan, select only relevant calendars, and ensure your event types collect essential guest details like name and email. Understanding how sync behavior is tied to calendar selections helps prevent data conflicts and ensures your workflows operate as intended.

* * *

## **What Gets Synced From Calendly?**

  

The integration focuses on the core data needed to run CRM workflows and manage appointments effectively.

  

  

<table data-identifyelement="555" style="width: 100%; font-family: Helvetica, sans-serif;"><tbody data-identifyelement="556"><tr data-identifyelement="557"><td data-identifyelement="558" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="559" dir="ltr" style="color: rgb(0, 0, 0); font-size: 13px; text-align: left; text-indent: 0px; display: inline !important;"><strong data-identifyelement="560">Synced</strong></span><strong data-identifyelement="561"><br data-identifyelement="562"></strong></span></td><td data-identifyelement="563" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;"><span data-identifyelement="564" dir="ltr" style="color: rgb(0, 0, 0); font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;"><strong data-identifyelement="565">Not Synced</strong></span><strong data-identifyelement="566"><br data-identifyelement="567"></strong></span></td></tr><tr data-identifyelement="568"><td data-identifyelement="569" dir="ltr" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Event Date &amp; Time<strong data-identifyelement="570" dir="ltr"><br data-identifyelement="571"></strong></span></td><td data-identifyelement="572" style="width: 50%; text-align: center;"><p data-identifyelement="579" dir="ltr"><span style="font-family: Helvetica,sans-serif;">Cancelled or rescheduled events are not updated in HighLevel</span></p></td></tr><tr data-identifyelement="574"><td data-identifyelement="575" dir="ltr" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Guest Name &amp; Email<strong data-identifyelement="576"><br data-identifyelement="577"></strong></span></td><td data-identifyelement="578" style="width: 50%; text-align: center;"><p data-identifyelement="585" dir="ltr"><span style="font-family: Helvetica,sans-serif;">Historical events (created before setup)</span></p></td></tr><tr data-identifyelement="580"><td data-identifyelement="581" dir="ltr" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Appointment Title<strong data-identifyelement="582"><br data-identifyelement="583"></strong></span></td><td data-identifyelement="584" style="width: 50%; text-align: center;"><p data-identifyelement="593" dir="ltr"><span style="font-family: Helvetica,sans-serif;">Attachments or notes</span></p></td></tr><tr data-identifyelement="588"><td data-identifyelement="589" dir="ltr" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Source (marked as “Calendly”)<strong data-identifyelement="590"><br data-identifyelement="591"></strong></span></td><td data-identifyelement="592" style="width: 50%; text-align: center;"><p data-identifyelement="593" dir="ltr"><span style="font-family: Helvetica,sans-serif;"><br></span></p></td></tr><tr data-identifyelement="594"><td data-identifyelement="595" dir="ltr" style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;">Calendar the event belongs to<strong data-identifyelement="596"><br data-identifyelement="597"></strong></span></td><td data-identifyelement="598" dir="ltr" style="width: 50.0000%;"><span style="font-family: Helvetica,sans-serif;"><strong data-identifyelement="599"><br data-identifyelement="600"></strong></span></td></tr><tr><td style="width: 50%; text-align: center;"><span style="font-family: Helvetica,sans-serif;"><span dir="ltr" style="color: rgb(0, 0, 0); font-size: 13px; font-weight: 400; text-align: center; text-indent: 0px; display: inline !important;">Phone number from location or Q&amp;A fields</span></span></td><td style="width: 50.0000%;"><span style="font-family: Helvetica,sans-serif;"><br></span></td></tr></tbody></table>

* * *

## **How Does the Calendly Integration Work?**

  

The Calendly integration works a bit differently from other calendar platforms like Google, Outlook, or iCloud. It’s designed to import events from Calendly into HighLevel, not the other way around, and understanding how this sync operates can help you make the most of it.

  

  

### **Calendly Event Syncing**

  

Once your Calendly account is connected and at least one calendar is selected, HighLevel will begin pulling in new events automatically. Only events created after the integration is set up will sync into your calendar.

  

If you later remove a calendar from the connection, new events from that calendar will no longer sync into HighLevel. And if you reconnect that calendar in the future, then both upcoming events and past events created within the last 180 days at the time of connecting your Calendly account will be synced. Any appointments made while the calendar was disconnected won’t be imported retroactively.

  

  

### **One-Way Syncing**

  

The Calendly integration is one-way—HighLevel fetches events from Calendly, but not the other way around. That means:

  

-   Events created in HighLevel won’t show up in Calendly.  
      
    
-   Events that come from Calendly can’t be edited within HighLevel—you’ll need to make those changes directly in Calendly to ensure everything stays accurate.

  

  

### **Contact Creation from Bookings**

  

Every new Calendly event that syncs into HighLevel is treated as an appointment (not just a placeholder or blocked time). If the event includes a guest, a contact is automatically created in your system using their name and email. From there, you can trigger automations, add them to workflows, and manage them just like any other contact in your CRM.

  

  

### **Who Owns the Appointment?**

  

Ownership depends on the type of calendar:

  

-   For personal Calendly links, the user who connected their Calendly account will be assigned as the appointment owner.  
      
    
-   For shared calendars (like round-robin or team links), the system will randomly assign the appointment owner from among the connected Calendly users.

  

  

### **Contact Assignment**

  

The contact’s Assigned User field will be automatically updated to match the owner of their most recent appointment. This ensures the right team member is connected to the contact and any follow-up automations go to the correct user.

* * *

## **Contact Creation and Management**

  

### **When a Calendly booking is synced:**

  

-   A contact is automatically created in HighLevel using the guest’s name and email.  
      
    
-   If the contact already exists, the appointment is added to their record.  
      
    
-   These contacts are eligible for automations triggered by appointment status.

  

### **Appointment Ownership and User Assignment**

  

Appointments in HighLevel need an “owner” to properly route tasks, notifications, and automations.

  

**Appointment Owner**

  

-   **Personal Calendars:** The user who connected Calendly is the owner.
-   **Shared Calendars (e.g., round robin):** One user from the connected team is assigned randomly.

  

**Contact Assigned User**

  

The Assigned User of a contact is updated to match the owner of their latest appointment. This ensures the contact is properly routed to the user who should follow up.

* * *

## **Managing Calendars After Setup**

  

You can make changes to your calendar selection anytime:

  

To update your Calendly calendar selections in HighLevel, start by navigating to **Calendar Settings**, then click on the **Connections** tab. From the list of connected calendars, locate your **Calendly integration**. Click the **Edit icon** next to it to open the calendar selection panel. Here, you can add new calendars that you’d like to sync or remove any that are no longer needed. Once you’ve made your changes, be sure to click **Save** to apply the updates. Keep in mind that only events from the calendars currently selected will sync moving forward.

  

**Reminder:** Events from newly added calendars will only sync from the time of selection. No historical data will be imported.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045368810/original/Sd3IVLmF7Og57lah3t9HycoVY45KWVqBpA.png?1745157447)

  

**Deleting Synced Calendly Events**

  

When disconnecting a calendar or removing Calendly, you’ll be prompted to choose whether to delete the synced events.

  

**Deleting Events From One Calendar**

  

You can choose to delete all events synced from a specific calendar.

Deleted events cannot be restored later.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045368934/original/n9wsbf8nBBDNQQVrVGudhhC-fl4wqAOO6A.png?1745157796)

  

**Shared Calendars**

  

If multiple users have connected Calendly to the same shared calendar, all of them must choose to delete the events for them to be removed.

If one user keeps the calendar, the shared events will remain visible.

  

**Disconnecting Calendly Completely**

  

You’ll be given the option to delete all synced events from all calendars. Deletion is permanent. If Calendly is reconnected, we automatically import both upcoming events and past events created within the last 180 days at the time of connecting your Calendly account.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045201240/original/Ehvdkhx6NDqrwojH_sBDEhs3hMxQJNcvwQ.png?1744807503)

* * *

## **Known Limitations of the Calendly Integration**

  

Here are the key limitations to be aware of when using the Calendly integration:

  

-   One Calendly account per user per subaccount  
      
    
-   You can connect the same Calendly account in multiple subaccounts you belong to  
      
    
-   Supported only for Standard, Teams, and Enterprise plans on Calendly  
      
    
-   Free or Essentials Calendly plans are not supported  
      
    
-   Events cannot be edited in HighLevel  
      
    
-   Only name and email of the guest are synced (no Q&A or custom fields)  
      
    

* * *

  

## **Phone number capture rules (Calendly → Contact)  
**

HighLevel captures phone numbers from Calendly using clear source rules to reduce manual cleanup.  
  

-   If the guest phone number is provided in the **meeting location** and the Calendly form has **no phone fields**, HighLevel syncs the location phone number to the contact automatically.  
      
    
-   If the Calendly form includes a **phone field**, HighLevel shows a mapping screen so you can choose the source (form phone, location phone if present, or **do not sync**).  
      
    
-   If there is **no phone source** (no location phone and no form phone), phone sync is skipped.
    

**Shared calendars: Updating the phone sync option affects all users linked to that calendar.** 

* * *

## **Frequently Asked Questions**

  

**Q: Why don’t older Calendly events appear in HighLevel?**

Only events created after the integration was set up and the calendar selected are imported.

  

**Q: Can I edit or reschedule a Calendly event in HighLevel?**

No. Events must be edited directly inside Calendly.

  

**Q: What happens if I reconnect a calendar or re-add Calendly?**

Only new events going forward will be synced. Previously missed or disconnected events will not appear.

  

**Q: Who owns appointments synced from a shared calendar?**

One of the Calendly-connected users will be randomly assigned as the owner for shared calendars.

  

**Q: Can I connect my Calendly account to multiple HighLevel users or subaccounts?**

Yes. A single Calendly account can be connected to multiple users across different subaccounts.