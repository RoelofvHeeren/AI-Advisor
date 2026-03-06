---
title: "How to Let Users Choose a Webinar Slot with a Form and Send a Confirmation Email"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006106-how-to-let-users-choose-a-webinar-slot-with-a-form-and-send-a-confirmation-email"
category: "Uncategorized"
---

# How to Let Users Choose a Webinar Slot with a Form and Send a Confirmation Email

This guide explains how to set up a form in HighLevel where users can select a preferred webinar time slot and automatically receive a confirmation email with their choice.

This method is best if you want a single registration form, multiple time options, and an instant confirmation message.

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Step 1: Create a Custom Field for Webinar Slots](#Step-1%3A-Create-a-Custom-Field-for-Webinar-Slots)
-   [Step 2: Add the Field to a Form](#Step-2%3A-Add-the-Field-to-a-Form)
-   [Step 3: Set Up the Confirmation Email](#Step-3%3A-Set-Up-the-Confirmation-Email)
-   [Step 4: Optional Reminder Emails or SMS](#Step-4%3A-Optional-Reminder-Emails-or-SMS)
-   [FAQs](#FAQs)

* * *

## Overview

-   Create a custom field to store the webinar time slot.
    
-   Add the field to a registration form.
    
-   Use a workflow to send a confirmation email when the form is submitted.
    
-   Optionally, add reminders before the webinar.
    

* * *

## Step 1: Create a Custom Field for Webinar Slots

1.  Navigate to **Settings → Custom Fields**.
    
2.  Click **\+ Add Field**.
    
3.  Select **Dropdown** or **Radio Select**.
    
4.  Name the field: **Choose Your Webinar Time**.
    
5.  Set the **Object** to **Contact**.
    
6.  Add your slot options, such as:
    
    -   Tuesday 7PM
        
    -   Thursday 2PM
        
    -   Saturday 11AM
        
7.  Leave **Allow Custom Values** unchecked. This ensures users can only choose one of your preset times.
    
8.  Save the field.
    

* * *

## Step 2: Add the Field to a Form

1.  Go to **Sites → Forms → Create (or Edit)**.
    
2.  From the **Custom Fields** tab, drag the new **Choose Your Webinar Time** field onto your form.
    
3.  Add other required fields (First Name, Last Name, Email, etc.).
    
4.  Save the form.
    

At this point, users can select their webinar slot when registering.

* * *

## Step 3: Set Up the Confirmation Email

Form settings only control on-page behavior after submission (thank-you message, redirect, pixels). To send an email, you need a workflow.

1.  Go to **Automation → Workflows → Create Workflow**.
    
2.  Add a **Trigger: Form Submitted → Select your webinar form**.
    
3.  Add a **Send Email** action.
    
    -   Subject: Webinar Registration Confirmed
        
    -   Body:
        
        `Hi {{contact.first_name}},    Thank you for registering. You selected: {{custom_values.choose_your_webinar_time}}    Here’s your webinar link: [Insert Zoom/Meeting Link]    See you there.`  
        
4.  Save and publish the workflow.
    

Now, every registrant will immediately get a personalized confirmation email with the correct slot.

* * *

## Step 4: Optional Reminder Emails or SMS

If you want to send reminders before the webinar:

1.  In the same workflow, add **Wait Until** actions relative to the webinar time.
    
2.  Send reminders, for example:
    
    -   24 hours before
        
    -   1 hour before
        
    -   10 minutes before
        

If you run multiple sessions, you can add **If/Else conditions** in the workflow based on the chosen time slot.

* * *

## FAQs

**Q1. Should I allow custom values in the dropdown/radio field?**  
No. Keep it unchecked so registrants can only choose from your listed webinar times.

  

**Q2. Can I do this without a workflow?**  
Only if you want a thank-you message on the page. Sending confirmation emails always requires automation.

  

**Q3. Can I branch reminders by time slot?**  
Yes. Add an **If/Else** step in the workflow based on the field value “Choose Your Webinar Time.”