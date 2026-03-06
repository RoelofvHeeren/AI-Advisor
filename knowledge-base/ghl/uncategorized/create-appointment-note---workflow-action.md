---
title: "Create Appointment Note - Workflow Action"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action"
category: "Uncategorized"
---

# Create Appointment Note - Workflow Action

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Inputs](#Inputs)
-   [How It Works](#How-It-Works)
-   [How to Set Up](#How-to-Set-Up)
-   [Important Considerations](#Important-Considerations)

* * *

## Overview

We have introduced a new action under the **Appointments** category called **Create Appointment Note**. This action allows you to add notes to an appointment through a workflow.

* * *

## Inputs

-   **appointmentId** (string) – Required when using inbound webhook trigger.
    
-   **body** (string, max length: 5000 characters) – The content of the appointment note.
    

* * *

## How It Works

-   If you are using any **appointment-based trigger** (e.g., Appointment Status, Customer Booked Appointment), **the appointment ID is not required**. The note will be added to the appointment enrolled in the workflow.
    

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041031684/original/eYU7rtJBrAfU-VyxQwoF7gfm3GvRZGPYrw.png?1738741881)

  

-   If you are using an **Inbound Webhook trigger**, you must **pass the appointment ID** to ensure the note is added to the correct appointment.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021416/original/--VuVUw7nr3ibUlOnp2uwplE_Ch5mbJ8rA.png?1738724824)

  

  

* * *

## How to Set Up

###   

### **Action Name: Create Appointment Note**

###   

### **Steps to Use This Action**

1.  **Navigate to:** `Automations > Create New Workflow > Start From Scratch`
    
2.  **Add a Trigger:**
    
    -   Choose a trigger such as **Inbound Webhook, Appointment Status, or Customer Booked Appointment**.
        
3.  **Add an Action:**
    
    -   Select **Add Action > Create Appointment Note**.
        
    -   Enter an action name.
        

* * *

### **Configuring Inputs**

####   

#### If using an **Inbound Webhook trigger**:

-   **Appointment ID:** Add the appointment ID using this custom value:
    
    ```
    {{inboundWebhookRequest.appointmentId}}
    ```
    
-   **Note Body:** Use the following custom value to add the note content:
    
    ```
    {{inboundWebhookRequest.body}}
    ```
    

#### 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021460/original/ZhNR2bzmR0UTPtSsgcdxbRzU9HcET3HrTw.png?1738724940)

  

#### If using an **Appointment-based trigger** (Appointment Status or Customer Booked Appointment):

-   **Appointment ID is not required**.
    
-   **Note Body:** You can manually enter a custom note of your choice.
    

* * *

## Important Considerations

-   If using **Inbound Webhooks**, ensure that the webhook payload includes both **appointmentId** and **body** for seamless functionality.
    
-   The **body field** has a maximum limit of **5000 characters**.
    

  

This feature allows businesses to efficiently log appointment-related notes directly through workflow automation, reducing manual effort and improving organization.