---
title: "Documents & Contracts: Email Templates and Team Notifications Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001298-documents-contracts-email-templates-and-team-notifications-setup"
category: "Uncategorized"
---

# Documents & Contracts: Email Templates and Team Notifications Setup

Learn how to customize client-facing email templates and configure team notifications in Documents & Contracts. This article walks you through setting up personalized messages, inserting dynamic custom values, and ensuring your team stays informed about document activity. By the end, you’ll be able to deliver professional communication to clients while streamlining internal updates.

* * *

**TABLE OF CONTENTS**  
  

-   [What is Email Template Customization and Notifications in Documents & Contracts?](#What-is-Email-Template-Customization-and-Notifications-in-Documents-&-Contracts?)
-   [Key Benefits of Email Template Customization and Notifications](#Key-Benefits-of-Email-Template-Customization-and-Notifications)[](#Customizable-Email-Templates)
-   [Customizable Email Templates](#Customizable-Email-Templates)[](#Dynamic-Document-Customization)
-   [Dynamic Document Customization](#Dynamic-Document-Customization)[](#Team-Notifications)
-   [Team Notifications](#Team-Notifications)
-   [How To Setup Email Templates and Team Notifications](#How-To-Setup-Email-Templates-and-Team-Notifications)[](#Open-Payments-Section)
-   [Open Payments Section](#Open-Payments-Section)[](#Select-Documents-&-Contracts)
-   [Select Documents & Contracts](#Select-Documents-&-Contracts)[](#Access-Document-Settings)
-   [Access Document Settings](#Access-Document-Settings)[](#Customer-Notifications)
-   [Customer Notifications](#Customer-Notifications)[](#Configure-Email-Sender)[](#Configure-Email-Sender)
-   [Configure Email Sender](#Configure-Email-Sender)[](#Configure-CC-Recipients)
-   [Configure CC Recipients](#Configure-CC-Recipients)[](#Document-Received-Notification)
-   [Document Received Notification](#Document-Received-Notification)[](#Document-Signed-Notification)[](#Document-Signed-Notification)
-   [Document Signed Notification](#Document-Signed-Notification)[](#Document-Expiry-Warning-Email)
-   [Document Expiry Warning Email](#Document-Expiry-Warning-Email)[](#Team-Notifications-1)
-   [Team Notifications](#Team-Notifications-1)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)  
      
    

* * *

# **What is Email Template Customization and Notifications in Documents & Contracts?**

  

Email Template Customization and Notifications in Documents & Contracts allow businesses to personalize communication with clients and manage internal alerts more effectively. This feature gives you the ability to design professional client-facing emails with dynamic proposal data and ensures that your team members stay informed whenever important document activities occur.

* * *

### **Choose Template & Edit Email at Send Time**

Selecting the most appropriate email and making quick edits at the moment of sending increases clarity and reduces follow-up. These controls complement your default templates by letting you confirm or adjust messaging right before delivery.

  

**Key Benefits of Manual Send Enhancements**

  

-   **Visibility:** The Edit icon remains visible in the send modal, making pre-send adjustments obvious.  
      
    
-   **Control:** The Email Template dropdown enables choosing the best template for each situation.  
      
    
-   **Speed:** Fewer clicks and less guesswork when finalizing client-facing emails.

  

### **How it works**

  

1.  Open the document or contract and click **Send** to open the send modal.  
      
    
2.  Use the **Email Template** dropdown to pick the template you want to send.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063306093/original/q-6ArFMSeB0L1kqRsvZfGlCgCRZAOJE2Cg.png?1769153363)  
      
    
3.  Click the **Edit** icon to adjust the subject or body text if needed.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063305113/original/TU_OGD9IofElsLrsbpDClhewkChfpD8jdg.png?1769152393)  
      
    
4.  Review the preview and click **Send**.

  

* * *

## **Key Benefits of Email Template Customization and Notifications**

  

Well-structured email templates and notifications help you maintain professionalism, enhance client communication, and improve team coordination. Here are the key benefits:

  

-   **Customizable Templates**: Personalize client-facing emails for proposals and contracts.

  

-   **Dynamic Content**: Insert proposal details such as links, client names, totals, and due dates using custom values.

  

-   **Consistent Branding**: Deliver professional, branded communication across all client interactions.

  

-   **Default Team Notifications**: Keep the document sender informed by default, reducing miscommunication.

  

-   **Centralized Management**: Configure customer and team notifications from a single location in Settings.

* * *

## **Customizable Email Templates**

  

With customizable email templates, you can design client-facing messages that align with your business’s branding and tone. These templates replace generic system messages, ensuring clients receive personalized and professional communication.

  

-   Edit subject lines and message body text.

  

-   Add merge fields such as **Proposal URL, Client Name, and Proposal Total**.

  

-   Create different templates for proposals, contracts, and signed copy notifications.

* * *

## **Dynamic Document Customization**

  

Dynamic customization makes it possible to automatically pull in real-time data from proposals and contracts. This ensures that your clients always receive the correct details without manual edits.

  

-   Insert values like **{{proposal.url}}, {{contact.first\_name}}, {{proposal.total}}, and {{proposal.due\_date}}**.

  

-   Include links that give clients direct access to documents.

  

-   Save time by avoiding manual updates.

  

**Example:**

  

-   Generic: "Your proposal is ready."

  

-   Dynamic: "Hi {{contact.first\_name}}, your proposal is ready! View it here: {{proposal.url}}. The total amount is {{proposal.total}}."

* * *

## **Team Notifications**

  

Team notifications ensure internal visibility whenever documents are sent or signed. By default, internal notifications go to the document sender (owner). In Team Notifications you can change the _sender identity_ (From Name/Email). To notify additional team members, use a Workflow.

  

-   Access team notifications under **Settings → Team Notifications**.

  

-   Notifications keep sales reps, account managers, and other team members informed.

  

-   Ensures accountability and smoother workflows.  
      
    

## 

**Notify More Internal Users (Recommended Method)**
To add specific users, roles, teams, or extra email addresses to document alerts, create a Workflow:
**[Trigger:](https://help.gohighlevel.com/support/solutions/articles/155000001491-workflow-trigger-documents-contracts)** Documents & Contracts → choose event (Sent, Viewed, Signed, Completed).
**[Action:](https://help.gohighlevel.com/support/solutions/articles/155000003202-workflow-action-internal-notification)** Internal Notification → select Users / Roles / Teams or enter custom emails.
**(Optional) Add conditions** (e.g., template name, deal value) and additional actions (tag contact, move opportunity).

  

## **How To Setup Email Templates and Team Notifications**

  

Follow these steps to configure customer-facing emails and team notifications for Documents & Contracts:

  

  

### **Open Payments Section**

  

From the left-hand sidebar, click on **Payments** to access all payment-related tools. This is where you’ll find the **Documents & Contracts** area, which houses your proposals, estimates, and contracts for setup and customization.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242662/original/XuwTEKRyyEzbh0iuy5gKfwkgryIFs0wpXQ.png?1756055892)

  

  

### **Select Documents & Contracts**

  

From within the Payments section, click on **Documents & Contracts** in the top navigation bar. This will open the workspace where you can manage proposals, estimates, and contracts that are linked to your notifications and templates.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242663/original/1qW0K-ne3w4SznjMcfyeElsTAtdqQ0ssCA.png?1756055907)

  

  

### **Access Document Settings**

  

Click the **Settings** button in the top-right corner of the Documents & Contracts page. This opens configuration options where you can manage customer notifications, team notifications, and other document-related settings.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242666/original/T_8bopX10BuIIpCrqSdCIKpGSOs8FhA2Fw.png?1756055920)

* * *

## **Customer Notifications**

  

Customer Notifications control how your clients receive emails when documents are shared with them. Here you can configure the sender details, add CC recipients, and customize templates for different document events such as when a document is received, signed, or nearing expiry. Setting these options ensures clients always receive professional, branded, and timely updates.  
  

**CC here is client-facing.** Addresses added in Customer Notifications → CC receive the client email (e.g., “Document received,” “Signed copy”). Use only if you want teammates to get the same client message.

**For internal-only alerts** (different copy, different audience), use a Workflow → Internal Notification instead of CC.

  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242668/original/d-LW19T-OJjFR4igRYYEKCXu9DiiRO9uZw.png?1756055934)

  

  

### **Configure Email Sender**

  

Set the **From Name** and **From Email** fields to define who the client will see as the sender of document-related notifications. This ensures consistency and builds trust by displaying a recognizable business name and email address.

  

Use the toggle switch at the top right of this section to turn the feature on or off. When enabled, all customer notifications will be sent using the custom sender details you provide. If it’s turned off, emails will default to the system sender information.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242676/original/lNR0bZaSmG9hczWi-QS1H4ISv4x0cxkmAA.png?1756055966)

  

  

### **Configure CC Recipients**

  

Add default or document-specific **CC recipients** who should also receive notifications. These recipients will get the document alongside the primary signer and a signed copy once the process is complete. 

  

Use the toggle to activate this option and enter the email addresses.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242685/original/EwIzJkYorWuIQwXdCy_pxA7oU7DO-mKA9w.png?1756055995)

  

  

### **Document Received Notification**

  

Customize the email template sent when a client receives a document. You can edit the **email subject** and choose a template style, ensuring the notification looks professional and matches your brand. 

  

Use the **Preview option** to review the message before sending.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242688/original/D45_TvuTmiAacmV6n5NHjhFoTDTyVBptlQ.png?1756056013)

  

  

### **Document Signed Notification**

  

Set up the email template that is triggered once a client has successfully signed or accepted a document. You can customize the **subject line** and review the template using the **Preview option** to ensure the message is clear and professional.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242698/original/ZO2gKmi1zk4rxjfELMVKhZKuWaT_1GPmqA.png?1756056025)

  

  

### **Document Expiry Warning Email**

  

Set up an automatic reminder email that notifies clients one day before a document expires. Customize the **email subject** and template so recipients are prompted to act quickly, reducing the risk of missed deadlines. Use the toggle to enable or disable this feature.

  

After making changes to your templates and notification preferences, click the **Save** button at the bottom of the page. This ensures all configurations are applied and your customized notifications will be used going forward.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242709/original/oQmjrGPcXz-CUWleJNTY0dEBLAL9YG_k-Q.png?1756056070)

* * *

## **Team Notifications**

  

Team Notifications allow your internal users to stay informed about document activity. By customizing these settings, you can control who receives updates when a document is signed or updated. This ensures the right team members are always in the loop and helps maintain accountability across your workflows.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242715/original/Y1QmKpiBH9rXQxOt1kCZhGz9SDulB1h4YQ.png?1756056087)

  

  

### **Override Sender Details**

  

Use this option to customize the **From Name** and **From Email** for team notifications. Enabling the toggle ensures all internal alerts are sent from the specified details instead of the system default, making communication consistent and recognizable within your team.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242719/original/GE24Atu4rO6UTUYlKhObj8aJA_EVhlyS_w.png?1756056115)

  

  

### **Document Signed Alert**

  

This template notifies your internal team when a document has been successfully signed by a client. You can edit the **subject line** and select the template style, ensuring your team is immediately updated on completed agreements.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242725/original/E1Z4dDRvJo2YcGWm0_1I1Ix4CKeVs_b2cw.png?1756056137)

  

  

### **Document Viewed Alert**

  

Enable this option to notify the document owner when a client opens and views a document. Customizing the **subject line** and template ensures your team receives clear, timely updates on client engagement.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242740/original/AWWmWZNn_u0_uWZjAFf-fUKLFtaMh8W5Uw.png?1756056154)

  

  

### **Save Team Notification Settings**

  

After making changes to your templates and notification preferences, click the **Save** button at the bottom of the page. This ensures all configurations are applied and your customized notifications will be used going forward.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052242703/original/JdL5pJmGmlWCp4-A5bD6E7bNa1Ro8FqF5g.png?1756056048)

* * *

## **Frequently Asked Questions**

  

**Q: What happens if I include a custom value like {{proposal.url}} in a template, but that value is missing or not available for a specific document?**

If the custom value does not exist for that document, the field will remain blank in the email. To avoid confusion, it’s best practice to always test your templates with sample data and include fallback text where possible (e.g., “Your proposal is ready, please contact us if you haven’t received the link.”).

  

**Q: Can different team members receive different notifications for the same document activity (e.g., one gets a “Document Signed” alert, while another only gets “Document Viewed”)?**

No, team notifications are configured globally within the Team Notifications settings. All enabled alerts will apply consistently to the designated sender or overridden sender details. For role-specific notifications, you would need to set up additional Workflow automations outside of this settings area.

  

**Q: If I override the sender details in Team Notifications, will this affect Customer Notifications as well?**

No. The Override Sender Details setting only applies to team-facing notifications. Customer Notifications and Team Notifications are managed independently, meaning you can have one “From Email” for client emails and a different one for team alerts.

  

**Q: Can I create and assign different templates for each type of document (e.g., one for Proposals, another for Contracts, and another for Estimates)?**

Yes. Within Customer Notifications, each document event (Received, Signed, Expiry Warning) can have its own template. This allows you to use one template for proposals, another for contracts, and another for estimates. However, you must assign and configure these templates individually under each notification type.

* * *

### **Related Articles**

  

-   [Documents & Contracts in HighLevel – Setup and Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000000594)   
      
    
-   [Client Portal – Edit Default Email Templates](https://help.gohighlevel.com/en/support/solutions/articles/155000007151)