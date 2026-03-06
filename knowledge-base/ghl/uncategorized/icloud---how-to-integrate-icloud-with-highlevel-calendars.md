---
title: "iCloud - How to Integrate iCloud with HighLevel Calendars"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002370-icloud-how-to-integrate-icloud-with-highlevel-calendars"
category: "Uncategorized"
---

# iCloud - How to Integrate iCloud with HighLevel Calendars

**In This Article**

-   [Overview](#Overview)
-   [Prerequisites](#Prerequisites)
-   [Getting Started](#Getting-Started)
-   [Step 1: Obtain your unique app-specific password from Apple](#Step-1%3A-Obtain-your-unique-app-specific-password-from-Apple)
-   [Step 2: How to Connect iCloud Calendar?](#Step-2%3A%C2%A0How-to-Connect-iCloud-Calendar?)
-   [Step 3: Calendar Configuration](#Step-3%3A-Calendar-Configuration)
-   [What is Calendar Configuration?](#What-is-Calendar-Configuration?)
-   [Limitations with iCloud Integration](#Limitations-with-iCloud-Integration)
-   [Related Articles](#Related-Articles)

* * *

### **Overview**

  

Connecting your iCloud Calendar helps you sync your bookings from iCloud Calendar to the system and vice versa. This ensures correct availability, prevents double bookings, and facilitates seamless scheduling and booking management.

* * *

### **Prerequisites**

  

1.  You need access to your apple account associated with the iCloud Calendar you want to connect.
2.  You need to obtain your unique app-specific password from Apple.
3.  Check if writer's access is required:
    -   If you want to add events created in the system to your iCloud Calendar, writer's access is necessary for the calendar.
    -   If you simply want to fetch all your events from your iCloud Calendar to the system, read-only access will suffice.

* * *

  

### **Getting Started**

### **Step 1: Obtain your unique app-specific password from Apple**

  

Before connecting your iCloud calendar, you'll need to obtain your app-specific password from Apple. This unique password is distinct from your regular Apple account password. Apple mandates the use of an app-specific password, in addition to enabling two-factor authentication, when connecting to third-party applications.

  

To obtain your app-specific password, follow these steps:

  

1\. Sign in to [https://appleid.apple.com/](https://appleid.apple.com/)

2\. Enable two-factor authentication under the Security section if you haven't already done so.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516865/original/f2bbnxc8oyxGkCNb2S3Sv22_ChA--iH-xg.png?1714812585)

  

3\. In the App-Specific Passwords section, choose 'Generate Password.'

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516885/original/QaYdYsN0EwumOSDMxo8s-c6045xdtMTU9w.png?1714812667)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516910/original/GGZoaQaGb2jsDA9mmsJZjy9n7rRdh4jw4Q.png?1714812735)

  

4\. Enter a label for the password (for instance, 'CRM iCloud Integration') and click 'Create.'

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516933/original/H1vMJKs_IZtmAQ-G31Y51CGWAAgBwK_WHQ.png?1714812817)

  

5\. Copy and safely keep the generated app-specific password. This will be used when connecting your iCloud calendar in the next step.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516958/original/ECkYfy6yS6NOcIr2uwN22CkTcMP4dUQQ7Q.png?1714812917)

  

* * *

  

### **Step 2:** **How to Connect iCloud Calendar?**

  

To connect to iCloud Calendar, follow these steps:

  

1\. Navigate to 'Calendars' > 'Calendar Settings' > 'Connections.'

2\. Click on 'Add New.'

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025517243/original/uUkcCj3MQ96zq7lUxbQtpppnrHvmbNvvlw.png?1714813769)

  

3\. Choose 'iCloud Calendar' and click 'Connect.'

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809273/original/Ry1HrulkRkv3ZC4-6lLtIOX6ZSoDGBdIWA.png?1717043873)

  

4\. Enter your Apple ID and the app-specific password generated earlier.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809290/original/yKrHemmmqeKcugBqUlin-Lg51hqPUKZksw.png?1717043908)

  

5\. Click 'Connect.

  

### **Step 3: Calendar Configuration**

Once your iCloud Calendar is successfully connected, you need to complete your calendar configuration by selecting your linked calendar and conflict calendar.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102293/original/hIcQcFMhAJZvSIzrcd_mxcMpDnPFUjtjHw.png?1715836644)

  

### **What is Calendar Configuration?**

Calendar configuration involves two settings: Linked Calendar & Conflict Calendar.

  

**Linked Calendar:**

All new events created in the system will be added to your linked calendar. For example, any new event created in the system will sync to your linked calendar, allowing you to view it directly on this third-party calendar (e.g., iCloud).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102373/original/dHPGl03N8ARTgVoMp9fac5qwZ1_nVh9ztQ.png?1715836894)

  

**Note:** 

  

-   Writer's access is required for the user to select a calendar as a linked calendar. 
-   The linked calendar is by default added to the conflict calendar. This means any event created on the third-party linked calendar will be fetched in the system, and any event created in the system will be pushed to the third-party linked calendar.

  

  

**Conflict Calendar:**

Events from third-party calendars added as conflict calendars are synced to the system, blocking your availability for the event's duration. 

  

The availability is blocked only if the event is marked as 'BUSY' in the third party calendar. For events marked as 'FREE', the events are fetched in the system but the availability remains open. 

  

This ensures accurate availability and avoids double bookings. You can add multiple calendars to be checked to prevent double bookings. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102433/original/-KV8WtwOkRk9HebmhKrUHaLDraa_MVxlog.png?1715836977)

  

* * *

### **Limitations with iCloud Integration**

  

-   While Google and Outlook Connections offer an option to configure their [Sync Preferences](https://gohighlevelassist.freshdesk.com/a/solutions/articles/155000002374?portalId=48000045315) from the Advanced Settings, iCloud only supports Default Sync (One-Way Sync).
-   This means that all events coming in from iCloud would be treated as Blocked Slots, and no contacts would be created for the guests found in these events.
-   Another limitation is that if a Blocked Slot is created in the system for a user, it would not sync to the iCloud Calendar.
-   With the latest enhancements, each user can now connect multiple iCloud integration per subaccount, and the same iCloud integration can be connected across multiple subaccounts.
-   Integration with a subscription calendar is not possible. This means that Highlevel cannot connect to iCloud calendars that you have subscribed to via URL (usually public calendars). 

* * *

### **Related Articles**

**[\[NEW\] Calendar Configuration - Linked Calendar & Conflicts Calendar](https://help.gohighlevel.com/en/support/solutions/articles/155000002374)**

**[\[NEW\] How to Connect Your Outlook Calendar?](https://help.gohighlevel.com/en/support/solutions/articles/155000002371)**

**[\[NEW\] How to Connect Your Google Calendar?](https://help.gohighlevel.com/en/support/solutions/articles/155000002369)**

**[\[NEW\] How to Connect Zoom?](https://help.gohighlevel.com/en/support/solutions/articles/155000002372)**