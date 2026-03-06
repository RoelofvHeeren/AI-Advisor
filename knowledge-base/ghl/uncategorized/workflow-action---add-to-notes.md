---
title: "Workflow Action - Add to Notes"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes"
category: "Uncategorized"
---

# Workflow Action - Add to Notes

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

  

## Overview

The "Add to Notes" action allows you to insert specific notes directly into a contact's record. This is essential for keeping track of important details about a contact or any custom information that might be relevant for future reference.

  

## Action Name

**Add to Notes**

  

## Action Description

-   This action enables the addition of custom notes to a contact's record. These notes can include any information that may help in future interactions, such as specific requests, follow-up actions, or personal details shared by the contact.
-   Custom values can also be added in the notes using the custom value picker.
-   The added notes will be visible in the contact details under the "Notes" Field.

  

## Action Details

Step by Step Guide

-   **Choose the Action Type:** Select "**Add to Notes**" from the list of available actions.
-   **Name Your Action:** Enter a descriptive name for the action, such as "**Add Notes**."
-   **Add the Note:** Type the note in the text editor that you want to add to the Contact.
-   **Custom Values:** You can use any custom values using the custom value picker.
-   **Trigger links:** Trigger links can also be added in the notes using the "Trigger Links" icon.

  

### Rich Text formatting in Add to Notes

Add to Notes uses the same Rich Text editor experience available for Notes. Rich Text supports common formatting such as bold, italics, underline, strikethrough, bulleted and numbered lists, and hyperlinks.

For enablement, supported formatting, and limitations, see: [Rich Text for Notes and Task Descriptions](https://help.gohighlevel.com/support/solutions/articles/155000006459-rich-text-for-notes-and-task-descriptions)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063159298/original/ACydKlXkajP5WS7sTSMAiaQ9vC9VcdO7ew.gif?1769001860)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419720/original/tJo-tkY61gpy8hzGAWXBdA6oBv2XHjUTig.png?1724242023)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419736/original/yXtmo0O9JQWMTQt55PSqpQMSNOUDW7pvBA.png?1724242043)

  

  

  

## Example

  

### Add a note when customer books an appointment

**Scenario:** A business wants to add a note with the contact and appointment details when an appointment is booked.

  

**Workflow Setup:**

-   **Trigger:** Appointment Booked
-   **Action:** Add to Notes
-   **Fields:** Text Editor

  

**Workflow Trigger:**

1.  ****Appointment Booked:**** The contact will enter the workflow when they have booked an appointment.

  

**Workflow Actions:**

1.  **Add to Notes:** Add the details in the text editor using the details from the custom value picker.
2.  **Send Internal Notification:** Send an internal notification to the team.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422021/original/NzScCWJCMV7RIc_U1F46yu-yKxLoQk7low.png?1724243445)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422035/original/xLLLqaKCCXc99fGWlw-3fI8GE67FOjejMg.png?1724243457)

  

**Outcome:** This ensures that the Note is added and can be viewed under the "Notes" section for each contact.