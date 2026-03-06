---
title: "Client Portal App - Custom mobile app notifications"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications"
category: "Uncategorized"
---

# Client Portal App - Custom mobile app notifications

  

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)
-   [Additional Notes](#Additional-Notes)

* * *

### **Overview**

The **Smart Push Notification** action allows users to send personalized push notifications to their contacts via the Client Portal. These notifications can include customized titles and messages and redirect users to specific pages such as **Communities** or **Courses** to enhance engagement.

* * *

### **Action Name**

Smart Push Notification

* * *

### **Action Description**

This action enables users to send engaging push notifications through workflows. It allows customization of the notification's title and message, supports dynamic personalization using placeholders, and provides redirection options within the Client Portal for seamless user interaction.

* * *

### **Action Details**

| **Field Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | Pre-filled as "Smart Push Notification." | No |
| **Title** | Enter a catchy title for the notification (max: 100 characters). Supports placeholders like `{{contact.first_name}}`. | Yes |
| **Message Body** | The main content of the notification (max: 300 characters). Supports placeholders like `{{contact.last_name}}`. | Yes |
| **Redirection** | Select where the user will be redirected after clicking the notification. Options: Communities, Courses. | Yes |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041098978/original/kPjkNiM4x2hB9YkTlZwJ31hSykrDgnwSMQ.png?1738823772)

  

* * *

### **How to Configure**

1.  **Add the Action to a Workflow**
    
    -   Navigate to **Automation > Workflows**.
    -   Open an existing workflow or create a new one.
    -   Click **\+ Add Action**, type "Smart" in the search bar, and select **Smart Push Notification**.
2.  **Configure the Fields**
    
    -   **Title:** Enter a personalized title (e.g., "Welcome {{contact.first\_name}}!").
    -   **Message Body:** Add a detailed notification message.
    -   **Redirection:** Choose the destination page (Communities or Courses).
3.  **Save and Activate**
    
    -   Click **Save Action** to confirm the configuration.
    -   Test the workflow with a sample contact.
    -   Activate the workflow once satisfied.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041099029/original/-ZvLYGBHeIqY35ix-r-xV2YC-wsSz_nOiQ.png?1738823827)

* * *

### **Example**

Consider a scenario where a user wants to notify a contact about a new community post:

-   **Title:** "New Community Update!"
-   **Message Body:** "Hi {{contact.first\_name}}, check out the latest post in our community."
-   **Redirection:** Select **Communities**.

When the workflow is triggered, the contact receives a push notification that redirects them to the Community page.

* * *

### **Additional Notes**

-   This action will only send notifications to registered Client Portal users. Non-registered users will not receive notifications.
-   Use clear and concise language in titles and messages to maximize engagement.
-   Ensure all mandatory fields are filled before saving the workflow.