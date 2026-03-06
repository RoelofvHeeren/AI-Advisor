---
title: "Workflow Trigger - Form Submitted"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002550-workflow-trigger-form-submitted"
category: "Uncategorized"
---

# Workflow Trigger - Form Submitted

This article provides a comprehensive overview of the **"Form Submitted"** workflow trigger, a powerful tool that automates actions when a form is submitted in your CRM. You’ll learn what this trigger does, its key benefits, how to configure it step-by-step, and real-world use cases. Finally, we’ll address common questions to help you optimize this feature in your workflows.

* * *

**TABLE OF CONTENTS**

-   [What is Form Submitted Workflow Trigger](#What-is-Form-Submitted-Workflow-Trigger)
-   [Key Benefits of Form Submitted Workflow Trigger](#Key-Benefits-of-Form-Submitted-Workflow-Trigger)
-   [Configuring the Form Submitted Workflow Trigger](#Configuring-the-Form-Submitted-Workflow-Trigger%C2%A0) 
    -   [Name Your Trigger](#Name-Your-Trigger)
    -   [Set Filters](#Set-Filters)
-   [Use Cases](#Use-Cases)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is Form Submitted Workflow Trigger**

  
The Form Submitted workflow trigger activates when a specified form is submitted, initiating a series of automated actions. This trigger helps streamline tasks such as collecting data, sending notifications, updating records, and creating follow-up tasks. It ensures timely responses and efficient processing of form submissions, making it an essential tool for managing customer interactions and internal processes.

* * *

## **Key Benefits of Form Submitted Workflow Trigger**

  

-   **Improved Efficiency:** Automates routine tasks triggered by form submissions, saving time and reducing manual effort.  
      
    
-   **Enhanced Communication:** Sends automatic responses to customers and internal notifications to team members for follow-ups.  
      
    
-   **Data Accuracy:** Directly integrates submitted form data into the CRM, ensuring accurate and up-to-date records.  
      
    
-   **Customizable Workflows:** Allows users to set filters to target specific forms or submission criteria for tailored actions.  
      
    
-   **Scalability:** Supports multiple workflows, enabling businesses to handle high volumes of form submissions effortlessly.

* * *

## **Configuring the Form Submitted Workflow Trigger** 

  
Follow these steps to implement form submitted trigger in your workflows:  
  

### **Access Workflow Settings**

  
Navigate to the workflow automation section. Create a new workflow from scratch or select the existing workflow where you want to implement the "Form Submitted" trigger.

  

  

### **Add a New Trigger**

  
Click **“Add New Trigger”** and select **"Form Submitted"** from the dropdown menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039463070/original/9PRqjo-q1aQp-Hf1yPsWxa_kivz5xiU4JQ.png?1736332197)

  

### **Name Your Trigger**

  
Provide a descriptive name, such as “Customer Feedback Form Submitted.”

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039463134/original/Qe9odJyYHDOjHhnmsv93-PJjT0loq3HJMg.png?1736332229)

  

### **Set Filters**

  
Refine workflow activation criteria by configuring filters:

  

**Form Is :**

  
Specify the form that will activate the workflow. For example, select “Customer Feedback Form” from your list of forms.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039463171/original/ApmXW_y7okXwmzDDI-6eFI23BASDiiU5DQ.png?1736332250)

* * *

### **Save the Trigger**

  
Click the save button to confirm your setup.

  

### **Test and Publish**

  
Test the workflow using sample data to ensure functionality. Once verified, enable the Publish toggle to activate the workflow.

* * *

## **Use Cases**

  

### **Customer Information Collection**

  

**Scenario:** A business wants to automate the process of collecting and managing customer information through an online form.

**Trigger Setup:**

-   **Trigger:** Form Submitted.  
      
    
-   **Filter:** Form is “Customer Information Form.”

  

**Outcome:** Submitted data is entered into the CRM, a notification is sent to the sales team, and a follow-up task is created.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039463388/original/51-7JIAcJBNjvbAtjO7MENaaSjvietsngw.png?1736332327)

* * *

### **Lead Qualification Workflow**

  

**Scenario:** A marketing team collects leads from a form submission and wants to qualify them automatically.

  

**Trigger Setup:**

  

-   **Trigger:** Form Submitted.  
      
    
-   **Filter:** Form is “Lead Capture Form.”

  

**Outcome:** The workflow assigns a lead score, updates the CRM with lead details, and notifies the sales team for further action.

* * *

### **Event Registration Management**

  

**Scenario:** An event organizer uses a form to register attendees and needs to automate the communication process.

  

**Trigger Setup:**

  

-   **Trigger:** Form Submitted.  
      
    
-   **Filter:** Form is “Event Registration Form.”

  

**Outcome:** An email confirmation is sent to the registrant, and their details are added to the attendee list in the CRM.

* * *

### **Customer Feedback Collection**

  

**Scenario:** A business collects customer feedback using an online form and wants to analyze the responses.

  

**Trigger Setup:**

  

-   **Trigger:** Form Submitted.  
      
    
-   **Filter:** Form is “Customer Feedback Form.”

  

**Outcome:** The workflow sends a thank-you email to the customer and adds their responses to a feedback database for analysis.

* * *

### **Appointment Booking Notifications**

  

**Scenario:** A healthcare provider collects appointment bookings through a form and wants to notify the relevant team.

  

**Trigger Setup:**

  

-   **Trigger:** Form Submitted.  
      
    
-   **Filter:** Form is “Appointment Booking Form.”

  

**Outcome:** The workflow notifies the scheduling team, updates the appointment calendar, and sends a confirmation email to the patient.

* * *

## **Frequently Asked Questions**

  

**Q. Can this trigger handle multiple forms in a single workflow?**

Yes, you can configure the workflow to activate for multiple forms by adding more filters or setting broader criteria.

  

**Q. What happens if the form is submitted multiple times by the same user?**

The trigger activates each time the form is submitted. Use conditions or cooldown periods in workflows to manage duplicate submissions effectively.

  

**Q. How can I include form submission data in the response email?**

You can use contact and custom field merge tags in your email step to pull in the submitted form data. For example, if your form collects Name, Email, and Feedback, you can insert these fields into your email body using merge fields like {{contact.name}}, {{contact.email}}, or custom fields linked to your form. When the email is sent, these placeholders are automatically replaced with the actual data submitted in the form.  
  

**Q. How do I handle form submissions with incomplete data?**

You can add conditions within the workflow to validate required fields and take specific actions, such as sending an alert or skipping incomplete submissions.

  

**Q. Is this trigger compatible with external form tools?**

The Form Submitted trigger works with forms created within your CRM. For external tools, you may need to use an integration or ebhook to capture submissions.