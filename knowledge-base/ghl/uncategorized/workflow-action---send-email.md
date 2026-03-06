---
title: "Workflow Action - Send Email"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002472-workflow-action-send-email"
category: "Uncategorized"
---

# Workflow Action - Send Email

In this article, you’ll learn how to use the “Send Email” action in your workflow to automate and personalize email communication with your contacts. We’ll guide you through the key benefits of this action, provide a step-by-step process for setting it up, and share a practical example to help you get started. By the end of this article, you’ll be equipped to enhance your email automation and improve customer engagement.

* * *

**TABLE OF CONTENTS**

-   [What is the “Send Email” Workflow Action?](#What-is-the-%E2%80%9CSend-Email%E2%80%9D-Workflow-Action?)[](#Key-Benefits-of-Using-the-%E2%80%9CSend-Email%E2%80%9D-Action)
-   [Key Benefits of Using the “Send Email” Action](#Key-Benefits-of-Using-the-%E2%80%9CSend-Email%E2%80%9D-Action)[](#Step-by-Step-Process-for-Using-the-%E2%80%9CSend-Email%E2%80%9D-Workflow-Action)
-   [Step-by-Step Process for Using the “Send Email” Workflow Action](#Step-by-Step-Process-for-Using-the-%E2%80%9CSend-Email%E2%80%9D-Workflow-Action)[](#Example%3A-Booking-confirmation-email)
-   [Example: Booking confirmation email](#Example%3A-Booking-confirmation-email)[](#Troubleshooting)
-   [Troubleshooting](#Troubleshooting)[](#Tips-and-best-practices)
-   [Tips and best practices](#Tips-and-best-practices)[](#Related-actions)
-   [Related actions](#Related-actions)[](#FAQs)
-   [FAQs](#FAQs)[](#Related-articles)
-   [Related articles](#Related-articles)

* * *

# **What is the “Send Email” Workflow Action?**

  

The “Send Email” action in your automation workflow allows you to send personalized and automated emails to your contacts at the right time. This action is a vital component of marketing, customer service, and follow-up processes, ensuring that your communication is timely, effective, and personalized. Whether you’re confirming bookings, sending promotional offers, or notifying customers about updates, the “Send Email” action helps streamline your communication.

* * *

## **Key Benefits of Using the “Send Email” Action**

  

1.  **Timely Communication:** Automates the sending of emails, ensuring your contacts receive messages at the most appropriate moments without manual effort.  
      
    
2.  **Personalization:** You can customize the email’s content using dynamic fields, such as the recipient’s first name, appointment details, or purchase history, to make each message more engaging.  
      
    
3.  **Improved Customer Experience:** By automatically sending confirmation emails, reminders, or follow-ups, you improve customer satisfaction and reduce the chances of miscommunication.  
      
    
4.  **Time-Saving:** By setting up email templates and automated workflows, you reduce the need for manual email sending, saving time and ensuring consistency.  
      
    
5.  **Flexibility:** You can attach files, use custom templates, and modify email content to suit your business needs.

* * *

## **Step-by-Step Process for Using the “Send Email” Workflow Action**

  

**1\. Add the “Send Email” Action to Your Workflow**

  

Open your workflow editor and drag the “Send Email” action into your workflow at the appropriate point (e.g., after a trigger like a booking or form submission).  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736641/original/rSRvpKGC3aJWhSTfK9163dJ91T94-kN6dQ.png?1733315232)

  

**2.** **Configure the Action Name**

  

Assign a clear, descriptive name for the action (e.g., “Booking Confirmation Email”). This helps you easily identify the action in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736677/original/QoF_h9pWR9esYRh3Iu940B1CB4PPtZ93HA.png?1733315246)

  

**3\. Fill in Sender Details**

  

-   From Name: Enter the name that will appear as the sender (e.g., “My Company”).  
      
    
-   From Email: Input the email address from which the email will be sent (e.g., “mycompany@email.com”).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736717/original/44AB5dukboaRiyt2oXEn6KTnzqjoxicJKw.png?1733315267)

  

**4.Create the Subject Line**

  

-   Enter a relevant subject line that gives the recipient an idea of the email content (e.g., “Thank You for Booking with Us!”).

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037736764/original/QnROSypS1wnDp6DKT7WG1QDejTm-X7i2iA.png?1733315282)

**5\. Choose or Create the Email Body**

  

-   **Templates:** Select an email template from the dropdown (optional). If no template is available, you can write a custom message in the Email Body field.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738878/original/nkLAq44Occ8I3hXgt8Zm6hfDn_i2x5hXZw.png?1733316773)

  

**Email Body :** Create your email body here. Use custom values to personalize the message. For example:

Hi {{contact.first\_name}}, Thank you for booking with us! Your appointment is scheduled for {{appointment.start\_time}}.

  

If you select an existing template, you may see a \*\*Sync Edits to Template\*\* checkbox. When sync is ON, changes in the workflow email and the original template update each other. When sync is OFF, they stay independent.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738571/original/mp7rUi8BRDm0C-Nh-mnkAqd_N-HjSocj1A.png?1733316613)

  

**6\.    Add Attachments (Optional)**

  

If necessary, you can attach files to the email, such as booking confirmations, product details, or invoices. Attachments can be included via URLs.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738514/original/bAlI8GYnifiSE-txEgcsN0Jy1BpiszRCdQ.png?1733316597)

**7\. Test the Email**

  

Before finalizing, it’s a good idea to send a test email. Enter an email address in the Test Emails field and click Send Test Mail to ensure the content and formatting are correct.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738469/original/qpq4RxBV4SAhDKOQ6MiEsfATDqh_BTnghg.jpeg?1733316555)

  

**8\.    Save and Activate the Action**

  

Once you’re satisfied with the configuration, click Save Action. The email will now be sent automatically when the workflow reaches this step.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037738495/original/2qFY4tN4T9IcNYCHOzabMCRo_k1i3AD66Q.png?1733316579)

  

**9\. Cc/Bcc in Email Action**

  

-   Add cc/bcc fields in the email action by clicking on the cc/bcc buttons.  
      
    
-   When you click on the button the respective fields will populate.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818660/original/l2h_I4sEcgG37HOd1q8P6CVbkmo7uZAGKA.png?1742805133)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043818693/original/c8N1epW7-bCdigKhX9qWZdBARv5szZtS5g.png?1742805148)

* * *

## **Example: Booking confirmation email**

  

**Goal:** Send an email when a contact books an appointment.

  

**Workflow setup**

1.  **Trigger:** Appointment booked  
      
    
2.  **Action:** Send Email
    
    -   **Action Name:** Booking Confirmation Email
        
    -   **From Name:** My Company
        
    -   **From Email:** mycompany@email.com
        
    -   **Subject:** Thanks for booking with us!
        
    -   **Body:**
        

  
Hi {{contact.first\_name}},

  
Thank you for booking with us! Your appointment is scheduled for {{appointment.start\_time}} on {{appointment.only\_start\_date}}.

  
We look forward to seeing you soon!  
  

3.  (Optional) Add an attachment URL for an appointment details PDF.
    
4.  Send a test email.
    
5.  Save the action.
    

* * *

## **Troubleshooting**

  

-   **Email didn’t send:** Confirm the contact has a valid email address and that your sender email/domain is set up correctly.  
      
    
-   **Merge fields showing as blank:** Ensure the contact/trigger provides those values (e.g., appointment fields require an appointment-related trigger).  
      
    
-   **Formatting looks off:** Use a test email to validate spacing, links, and templates across email clients.
    

* * *

## **Tips and best practices**

-   Keep subject lines short and specific.  
      
    
-   Use templates for consistency across teams.  
      
    
-   Personalize with merge fields, but avoid relying on fields that may not exist for every trigger.  
      
    
-   If adding multiple CC/BCC emails, double-check comma separation.
    

* * *

## **Related actions**

-   Send SMS
    
-   Internal Notification
    
-   AI Powered Email Generation in Workflow Action
    

* * *

## **FAQs**

  

**Can I use templates with this action?**

Yes. You can select an existing email template, or write a custom email directly in the editor.

  

**Can I personalize the email?**

Yes. Use custom values (merge fields) like {{contact.first\_name}} to personalize the subject and body.

  

**Do CC/BCC recipients appear in workflow email stats?**

No. CC/BCC recipients do not appear in Email Stats. Workflow send success/failure is determined by the primary contact email.

  

**Does “Send Test Mail” validate CC/BCC delivery?**

No. Test emails are for validating formatting/content; they do not confirm CC/BCC delivery.

  

**What happens if a CC/BCC email address is invalid?**

Invalid CC/BCC addresses are skipped. Valid CC/BCC recipients (and the primary contact) can still receive the email.

  

**Can I add attachments?**

Yes, attachments are supported via URLs. Use this for PDFs, invoices, or other downloadable files.

  

**Why are merge fields blank in my test or live email?**

Merge fields can be blank if the workflow trigger/action context doesn’t provide that data (for example, appointment fields require an appointment-related trigger), or if the contact record is missing values.

  

**Why did my email land in spam or not deliver?**

Deliverability depends on proper sender setup and domain configuration. Verify your sending configuration and test with multiple inbox providers.

* * *

## **Related articles**

  

-   [Workflow Action: Internal Notification](https://help.gohighlevel.com/en/support/solutions/articles/155000003202)   
      
    
-   [AI Powered Email Generation in Workflow Action](https://help.gohighlevel.com/en/support/solutions/articles/155000005516)