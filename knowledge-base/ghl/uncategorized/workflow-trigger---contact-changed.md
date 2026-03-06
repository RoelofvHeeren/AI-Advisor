---
title: "Workflow Trigger - Contact Changed"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002477-workflow-trigger-contact-changed"
category: "Uncategorized"
---

# Workflow Trigger - Contact Changed

Imagine having a helper that automatically does important tasks whenever a contact’s information changes. That’s exactly what the “Contact Changed” Workflow Trigger does in your CRM! It keeps track of changes, like new tags being added, updates to custom fields, or when a contact is assigned to someone, and then performs actions based on those changes. Let’s learn why it’s useful and how you can set it up step by step.

* * *

**TABLE OF CONTENTS**

  

-   [What Is the “Contact Changed” Workflow Trigger?](#What-Is-the-%E2%80%9CContact-Changed%E2%80%9D-Workflow-Trigger?)
-   [Why Use the “Contact Changed” Workflow Trigger?](#Why-Use-the-%E2%80%9CContact-Changed%E2%80%9D-Workflow-Trigger?)
-   [How to Set Up the “Contact Changed” Workflow Trigger](#How-to-Set-Up-the-%E2%80%9CContact-Changed%E2%80%9D-Workflow-Trigger)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What Is the “Contact Changed” Workflow Trigger?**

  

The “Contact Changed” Workflow Trigger activates whenever a contact’s details are updated. For example: Tags Changed: If a tag like “Interested Customer” is added, the workflow can send a follow-up email. DND Status Changed: If a contact turns on “Do Not Disturb,” the workflow can stop sending messages. Assigned User Changed: If a contact is assigned to a new sales rep, the workflow can notify them. Custom Fields Updated: If a field like “Preferred Service” is updated, the workflow can send targeted offers. This trigger helps your business respond quickly and keeps everything organized by automating repetitive tasks.

* * *

## **Why Use the “Contact Changed” Workflow Trigger?**

  

The “Contact Changed” trigger is like having a smart assistant that keeps you on top of changes by tracking updates to contact details and reacting instantly. It saves time by handling tasks like sending emails or assigning follow-ups automatically. It improves customer service by ensuring contacts get faster, more relevant responses. Lastly, it creates opportunities by helping you act on new leads or changes, like following up on updated business information.

* * *

## **How to Set Up the “Contact Changed” Workflow Trigger**

  

Follow these easy steps to set up the workflow trigger:

  

### **Start a New Workflow**

  

Go to the Automations section in your CRM. Click Workflows.

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042857643/original/aRL66-fTn8CSScdpzCGdMFVjJ_uoaRHBYg.jpeg?1741354411)

  

  

### **Creating Workflow**

  

Click "+ Create Workflow" button at the top right and then " + Start from scratch"

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042857750/original/g2e_R3_MlcvEjT8ChgPyZuFiEIiNckEaOw.png?1741354485)

  

  

### **Adding Trigger**

  

Click Add New Trigger and search for "Contact Changed."

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042857798/original/JpmfNH6kkyomwS3TN5QT2EEbgtxBVfXkew.jpeg?1741354510)

###   

### **Name the Trigger:** 

  

Give it a descriptive name, like “Website Address Updated.”

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042857847/original/odFFgG3SRJRDtrEiXYFTCjj1HmrI1IJ1MA.jpeg?1741354529)

  

### **Set Filters**

  

Decide what kind of contact changes will activate the trigger. Select Custom Field if you want to track changes in a specific field like “Website.” Choose Tags if you want the workflow to react to added or removed tags. Use DND if the workflow should respond to changes in the “Do Not Disturb” setting.

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042857884/original/L5u60_mR5N1XoLwaT7YnnGeNujUD82UYNQ.jpeg?1741354554)

* * *

## **Frequently Asked Questions**

  

**Q. What types of contact changes can trigger the “Contact Changed” workflow?**

The “Contact Changed” trigger can activate based on various contact updates, including:

-   Tags Added or Removed – Example: If a contact is tagged as “Hot Lead”, trigger a sales follow-up.
-   Contact Type Changed – Example: If a contact goes from a "Lead" to a "Customer"
-   Custom Field Updates – Example: If a contact’s “Preferred Service” is updated, send targeted promotions.
-   Assigned User Change – Example: If a contact is reassigned to a new sales rep, notify the rep immediately.
-   DND Status Change – Example: If a contact enables “Do Not Disturb”, stop all outgoing messages.

  

**Q. Can I track multiple contact changes within a single workflow?**

Yes! You can add multiple filters under the “Contact Changed” trigger to track different types of changes simultaneously. For example, you can configure the workflow to trigger when either a tag is added OR a custom field is updated, ensuring the automation responds to multiple events.

  

**Q. What happens if a contact’s details change multiple times? Will the workflow trigger each time?**

Yes, the workflow will trigger each time a tracked change occurs. However, to prevent unnecessary actions (e.g., multiple emails being sent), you can:

-   Use workflow conditions to check whether the action has already been performed.
-   Apply filters to trigger only on specific changes.
-   Add time delays to avoid excessive automation.

  

**Q. Can I trigger actions based on a deleted tag or an old value being removed?**

No, the “Contact Changed” trigger detects new updates but does not track removed values. If you need to automate actions based on a tag being removed, consider:

-   Using an “If/Else” condition to check whether a contact still has a specific tag.
-   Manually monitoring tag removals and triggering a different workflow accordingly.