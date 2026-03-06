---
title: "Email Notifications in Forms and Surveys"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001640-email-notifications-in-forms-and-surveys"
category: "Uncategorized"
---

# Email Notifications in Forms and Surveys

Email Notifications in Forms & Surveys offer a convenient way to stay updated on form submissions without the need for manual monitoring. With this feature, you can respond promptly, share submission details with team members, and ensure seamless form management. Additionally, Auto Responder allows you to automatically send a confirmation email back to the person who filled out the form.

* * *

# **What are Email Notifications in Forms & Surveys?**

  

Email Notifications are alerts sent whenever a form or survey is submitted. These notifications go directly to designated inboxes, keeping teams informed in real time. Auto Responder works alongside this feature, sending an automated reply to the person submitting the form, which may include a copy of their responses.

* * *

# **Key Benefits of Email Notifications in Forms & Surveys**

  

Email notifications and auto responders improve efficiency, speed, and collaboration for teams handling form and survey data.

  

-   **Instant alerts**: Receive an immediate email whenever someone submits a form or survey.

  

-   **Improved response time**: Ensure faster follow-up with leads and contacts.

  

-   **Collaboration**: Send notifications to multiple team members at once.

  

-   **Customization**: Personalize the subject, sender name, and reply-to email for better organization.

  

-   **Auto Responder**: Automatically acknowledge the person submitting the form, creating a professional touch.

* * *

## **Finding Notification Icon**

  

The notification option is found in the form editor's secondary bar. From here, you can enable email notification and auto responder.

  

  

### **Navigate to Forms or Surveys**

  

Go to Sites → Forms (or Sites → Surveys) from the top navigation bar. This is where all your forms or surveys are stored and managed.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054693559/original/grjS3_gBCCE79cDoTv7IQOAw3QRWGTr47Q.png?1758896344)

  

  

### **Select or Create a Form or Survey**

  

In the dashboard, you can either select an existing form or survey from the list or click the Add Form button in the top right to create a new one.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054693581/original/-AvTQAy2mn-ZUTtdDO_wex_D174Q6TyCPw.png?1758896368)

  

  

### **Open the Notification Sidebar**

  

Inside the form or survey editor, click the Bell icon in the secondary bar. This opens the Form Notification panel on the left side of the screen.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054693673/original/djiUT4bnc0JX_yWrRrp5xDImOb2uWwQR0A.png?1758896413)

* * *

# **Configure Email Notifications**

  

The Email Notifications sidebar allows you to configure who receives alerts and how the email appears.

  

Configuring email notifications properly ensures that the right team members are informed, and that your notifications appear consistent with your organization’s standards.

  

Click the **Bell icon** in the form editor. Toggle on **Email Notification**.

Fill out the configuration fields:

  

-   **Subject**: Enter a subject line. If left blank, the form or survey name will be used. You can also include a custom field.

  

-   **Email (To)**: Enter one or multiple email addresses. Each address will convert into a tag.

  

-   **Reply-to Email**: Add the email address you want replies directed to.

  

-   **Sender Name**: If left empty, the location or agency name will be used by default.

  

-   **Save** your changes.

  

**Note:** Email notifications use email credits. Ensure your account has credits available.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054693910/original/HPewSlXztrt9mIgJ-Jf5adgB7_kjf_k7YQ.png?1758896549)

* * *

# **Configure Auto Responder**

  

Auto Responder sends an automated email to the contact who submitted the form.

  

Auto Responder helps build trust with contacts by instantly acknowledging their submission and optionally sending them a copy of their responses.

  

Open the **Form Notification** sidebar. Toggle on **Auto Responder**.

  

Fill out the configuration fields:

  

-   **Subject**: Enter a subject line. Default is the form name.

  

-   **Reply-to Email**: Add an email for contact replies.

  

-   **Sender Name**: If blank, defaults to the sub-account name.

  

-   **Save** your changes.

  

**Note:** The Reply-To you set here applies only to the auto-responder email that goes to the submitter. It does not affect the team notification email.

Replies to this notification will go to the address set in the "Reply-to-email" field".

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054694119/original/4VHPEtW8lADxTHpSPlE2Q2qzoZ3dlteOtA.png?1758896677)

* * *

# **How to View Survey Responses After Receiving an Email Notification**

  

Email notifications serve as alerts only and do not include full survey responses. To view responses:

  

**Steps:**

1.  Navigate to **Sites** from the left-hand menu.
    
2.  Select the **Surveys** tab, then click **Submissions**.
    
3.  Review the list of submissions with timestamps and answers.
    
4.  Click an individual entry to see all responses.
    

* * *

# **Frequently Asked Questions**

  

**Q: Can I send email notifications conditionally, based on how someone answers a form or survey question?**

No, native email notifications in the Form Notification sidebar apply to all submissions equally. If you want conditional routing (for example, send to one team member if the answer is “Option A” and another if it’s “Option B”), you’ll need to use **Workflows**. The “Form Submitted” workflow trigger allows you to set conditions and route notifications accordingly.

  

**Q: Do Auto Responder emails count toward my email credit usage just like notifications?**

Yes. Both **Email Notifications** (sent to your team) and **Auto Responder emails** (sent to the submitter) consume email credits from your account. If your credits are exhausted, neither type of email will send until credits are added. You can monitor credit usage in your account’s email reporting or billing area.

  

**Q: What happens if I enter multiple emails in the “Email (To)” field and one of them is invalid? Will the others still receive the notification?**

Yes. Notifications will still be delivered to valid addresses. Invalid addresses will fail silently and not block delivery to other recipients. However, it’s recommended to regularly verify the addresses entered in the “Email (To)” field to avoid repeated delivery failures.

  

**Q: Can I use dynamic merge fields (like {{user.email}} or {{contact.email}}) in the “Email (To)” field for notifications?**

Currently, merge fields are not supported in the “Email (To)” field. You must enter static email addresses. If you need notifications to go to dynamic recipients, set up a **Workflow** triggered by the form submission and use workflow actions to send email to the appropriate contact or user.