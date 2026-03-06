---
title: "Workflow Action - Find Contact"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact"
category: "Uncategorized"
---

# Workflow Action - Find Contact

The workflow action Find Contact allows you to pull a contact into a workflow based on search criteria like email. It also handles the case where no matching contact is found.

* * *

**TABLE OF CONTENTS**

-   [What is Find Contact Workflow Action](#What-is-Find-Contact-Workflow-Action)
-   [Key Benefits of Find Contact Workflow Action](#Key-Benefits-of-Find-Contact-Workflow-Action)
-   [Supported Match Fields](#Supported-Match-Fields)
-   [Matching Logic & Branching Behavior](#Matching-Logic-&-Branching-Behavior%C2%A0) 
-   [Configuring the "Find Contact" Workflow Action](#Configuring-the-)
-   [Include additional emails or phone numbers (optional)](#Include-additional-emails-or-phone-numbers-\(optional\))
-   [Use Cases](#Use-Cases)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles%C2%A0)

* * *

# **What is Find Contact Workflow Action**

  
The Find Contact workflow action enables you to **identify a contact** in your database using specified criteria, such as standard or custom fields. This action is perfect for workflows that are **triggered without a contact already specified**, but do have other **identifying information** such as an email.

  

Normally, this action is used when the workflow is triggered by a trigger that does not already have a contact attached to it. For example, when the trigger is Inbound Webhook it will have a payload of one or more query parameters. If the queryParams do not include a user ID, but do include an email, or other identifying information, then the Find Contact action can be used to turn the email into a user ID so that actions can be run on that contact.

* * *

## **Key Benefits of Find Contact Workflow Action**

  

-   **Enhanced Workflow Efficiency:** Automates the contact search process, saving time and reducing manual errors.  
      
    
-   **Flexible Search Capabilities:** Supports standard and custom fields, allowing precise and tailored contact searches.  
      
    
-   **Contactless Integration:** Specifically designed for workflows triggered by a contactless triggers such as **Inbound Webhoo****k**  
      
    
-   **Advanced Matching:** Includes external reference matching, enabling searches based on custom identifiers like “Stripe Customer ID.”  
      
    
-   **Improved Customer Engagement:** Ensures accurate targeting for communications and follow-ups, enhancing customer interactions.  
      
    
-   **Branching Support:** Automatically creates distinct paths in your workflow based on whether a contact is found or not, enabling tailored actions for each scenario.

* * *

## **Supported Match Fields**

  

Choosing reliable fields improves match accuracy. Use unique identifiers when possible and ensure incoming data is formatted consistently before matching.

  

-   **Standard fields**: Email, Phone, First/Last Name, etc. (select from the picker).  
      
    
-   **Custom fields**: Use your own fields (e.g., _Customer ID_, _Subscription Tier_). Ensure the custom field exists and is populated on the contact.  
      
    
-   **External references**: Map webhook/app data like **Stripe Customer ID** to a custom field and match on it.
    

* * *

## **Matching Logic & Branching Behavior** 

  

Predictable matching rules help you design safer automations and plan “Contact Found vs. Contact Not Found ” outcomes.

  

-   **AND logic across fields**: If you specify multiple fields, **all** must match to return a contact (e.g., _email AND phone AND custom field_).  
      
    
-   **Branching**: The action exposes two paths - **Contact Found** and **Contact Not Found** \- so you can follow up accordingly (e.g., update fields vs. create contact).  
      
    
-   **If multiple contacts could match**: Tighten criteria with more specific fields (e.g., add email or an external ID). Pair with **Contact Deduplication Preferences** and **Merge Duplicates** guidance when needed.
    

* * *

## **Configuring the "Find Contact" Workflow Action**

  
Follow these steps to configure the "Find Contact" action in your workflow.  
  
  

### **Access Workflow Settings**

  
Navigate to the workflow builder inside **"Automation"** section in your CRM. Create a new workflow from scratch or select the existing workflow where you want to implement the **"Find Contact"** workflow action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054568172/original/frx13mRCX3L_q-7wBWOZyZLO6ig9t7zUgw.png?1758795446)

  

### 

### **Add a New Action**

  
Click **“+”** icon and select **"Find Contact"** action from the dropdown menu.

  

### **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249538/original/QeM8v2EHcsAv9Pjb6KYgMm5jB1HlsXax2Q.png?1735920178)**  

### **Name Your Action**

  
Provide a descriptive name, such as **“Find Contact by Email.”**

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249578/original/F7sI1DcqMK1NL5qk-dvd3J0ozCIbDQBbvw.png?1735920212)

###   

  

### **Selecting Standard Fields**

  

Options include First Name, Last Name, Email, Phone, and more.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249673/original/gK9muzOm9tJ3EK88Yjkl3w_y2OPGHe9Qxg.png?1735920304)

  

  

### **Selecting Custom Fields (optional)**

  

If you haven't already created the custom field, Add unique fields such as “Customer ID” or “Subscription Tier.” If you have them already, Just scroll down to find the Custom Fields you have created within the system.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039249651/original/6ihylo4OdVHg-gBuJXxczL-wmQr2jSGGeg.png?1735920282)

  

  

### **Configure Triggers**

  

Pair the action with triggers like **"Inbound Webhook"** to activate it dynamically.

###   

### **Plan branches**

  

Build actions under Contact Found (e.g., Update Contact Field, Send Email) and under Contact Not Found (e.g., Create Contact).

  

###   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054565262/original/oxBKfAodT0DEOIu6uGMOBbElnooOdL7WEw.png?1758794233)

  

  

### **Test and Save**

  
Validate the configuration using test data to ensure accuracy. **Save** the action once the setup is complete.

  
  

### **Publish the Workflow**

  

Enable the workflow to automate the contact search process effectively.

* * *

## **Include additional emails or phone numbers (optional)**

  

By default, Find Contact matches only the contact’s primary **Email or Phone** field.

  

If your contacts store Additional email addresses or phone numbers, you can include those values in the match:

  

1\. In Selecting Standard Fields, choose Email or Phone  
.

2\. Enable the checkbox under the selected field to **include additional emails/phone numbers** in the search.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064651745/original/Q5PCi-SWsi47qnF8AtWh-bKKLVUEKcuObA.png?1770798534)

* * *

## **Use Cases**

  

These real-life examples show when to use **Find Contact**, which field to rely on first, and what to do if a match isn’t found

  

**1\. New lead coming from another tool (match by Email)**

  
When a form, ad, or integration sends you someone’s email, use **Find Contact** with **Email**.

  
**If Contact found:** continue your workflow—add a tag, update details, send a message.  
**If Contact not found:** create the contact, then keep going.

  

**2\. Purchase or subscription update (match by a Customer ID)**

  
Payment systems often send a stable customer number (like a _customer ID_). Store that in a custom field and find by that value.

  
**If Contact found:** update plan, status, or lifetime value.  
**If Contact not found:** create the contact, save the customer ID, and proceed.

  

**3\. Calendar booking (match by Email)**

  
Scheduling apps usually require email. Use it to connect the booking to the right person.

  
**If Contact found:** attach the appointment and send confirmations.  
**If Contact not found:** create the contact from the booking details and notify the team.

  

**4\. Partner referral (match by Referral Code)**

  
Partners pass a unique code so you can credit them. Save that code in a custom field and find by it.

  
**If Contact found:** add/update the referral info and tag the contact.  
**If Contact not found:** create the contact with the referral code and start the right nurture.

  

**5\. Online order without a customer ID (match by Email, optionally Last Name)**

  
Stores sometimes send only email and name. Start with **Email**; add **Last Name** if many contacts share similar emails.

  
**If Contact found:** update order history and totals.  
**If Contact not found:** create the contact and tag as “Customer.”

* * *

## **Frequently Asked Questions**

**Q. What happens if the contact is not found?**

Once the Find Contact action is configured it creates a branch, one for "contact found" and one for "contact not found". You can create whichever actions are appropriate on the "contact not found" branch.

  

**Q. How does external reference matching work?**

You can store external identifiers, such as a **“Stripe Customer ID,”** in a custom field. The Find Contact action uses this field to locate the corresponding contact in the CRM.

  

**Q. Can I combine this action with other workflow actions?**

Absolutely. The Find Contact action can be paired with other actions like **“Send Email”** or **“Update Contact”** to create complex workflows.

  

**Q. Can I use multiple fields for the search?**

Yes, you can configure multiple fields to refine the search criteria. All specified field values must match for the action to locate the contact (ex: this AND this AND this).

  

**Q. Can I use other triggers?**

In addition to the Inbound Webhook trigger you can pass the necessary merge fields in through a custom App Marketplace trigger (these are Premium triggers created by 3rd party developers to support their App Marketplace apps).

* * *

## **Related Articles** 

  

-   **[](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)**[](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)[Workflow Action — Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)  
      
    
-   [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)  
      
    
-   [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)  
      
    
-   [Contact Deduplication Preferences (Allow Duplicate Contacts)](https://help.gohighlevel.com/support/solutions/articles/48001181714-allow-duplicate-contacts-contact-deduplication-preferences-)  
      
    
-   [How to Merge Duplicate Contacts in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001202210-how-to-merge-duplicate-contacts-in-highlevel)[](https://help.gohighlevel.com/support/solutions/articles/48001202210-how-to-merge-duplicate-contacts-in-highlevel)**[](https://help.gohighlevel.com/support/solutions/articles/48001202210-how-to-merge-duplicate-contacts-in-highlevel)**