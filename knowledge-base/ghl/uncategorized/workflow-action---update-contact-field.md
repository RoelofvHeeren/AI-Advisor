---
title: "Workflow Action - Update Contact Field"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field"
category: "Uncategorized"
---

# Workflow Action - Update Contact Field

This article introduces the **“Update Contact Field”** action, a powerful tool for keeping your contact database accurate and up-to-date. You’ll learn what this action does, its key benefits, and how to configure it step-by-step. Real-world use cases and FAQs are also included to help you get the most out of this feature.

* * *

**TABLE OF CONTENTS**

1.  [What is Update Contact Field Action?](#What-is-Updating-Contact-Field-Action?)
2.  [Key Benefits of Using This Action](#Key-Benefits-of-Using-This-Action)
3.  [Configuring Update Contact Field Action: Step-by-Step Process](#Configuring-Update-Contact-Field-Action%3A-Step-by-Step-Process-for-Using)
4.  [Use Cases](#Use-Cases)
5.  [FAQs](#FAQs)

* * *

# **What is Update Contact Field Action?**

  

The **“Update Contact Field”** action allows you to modify specific fields in a contact’s record automatically. It ensures that changes to contact details—like address updates, email changes, or Do Not Disturb (DND) status—are instantly reflected in your system. This action keeps your contact data current, accurate, and aligned with customer interactions.

* * *

## **Key Benefits of Using This Action**

  

1.  **Accurate Contact Data:** Ensure your contact database is always up to date, reducing the risk of outdated or incorrect information.  
      
    
2.  **Enhanced Personalization:** Use updated contact details to deliver more personalized and targeted communication.  
      
    
3.  **Improved Workflow Efficiency:** Automatically update contact records without manual intervention, saving time and effort.  
      
    
4.  **Streamlined Customer Experience:** Provide relevant, timely communication by maintaining accurate contact information.

* * *

## **Configuring Update Contact Field Action: Step-by-Step Process**

  

Go to the **"Automation"** section of your CRM. Click **"Workflows"** menu located at the top.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038202189/original/yBmOc0UE7LlMJuFPwspRPSRxnznpty2Erg.png?1733994774)

  

Open the workflow editor and select the workflow where you want to add the “Update Contact Field” action. Else, you can simply start building your own workflow from scratch. Just click **"+ Create Workflow"** button and select **"+ Start from scratch"** option from the dropdown menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038202228/original/Ynsn0vA1vlsO2t5dPicDrR7WQwHTPr2CiQ.png?1733994813)

  

Click **“+”** icon and choose **"Update Contact Field"** from the list of available actions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038222515/original/OC089a5ZRBwnfvMciICewJWGcYylqc9x5g.png?1734007769)

  
Give your action a clear, descriptive name (e.g., “Update Contact Address”). This makes it easier to identify in the workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224174/original/BbSBZ3BEifxBP3I1f6lAv-IKwU_ns-fwXw.png?1734008745)

  

Action types give you the ability to 1. Clear the existing information and 2. Update the information. In real world, you can set the workflow to first clear the existing information from the contact record and then replace it with the new information.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224330/original/et1pi77XvigbbIxBJubSMJwe8PhTzdpLiQ.png?1734008828)

  

Click **"Add field"** button to add additional filters.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224220/original/KgJcvLBHb5uIsHv9mk0C3e08IY2MS8mL9g.png?1734008758)  

Choose the fields you want to update, such as City, Country, Phone, or Custom Fields.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224236/original/d-Lz95CZuPiJSoo13ndNWTIpFDb7eHO6tQ.png?1734008768)  
Once you are done adding the filters, Save the action and test it using a sample contact to ensure it updates the fields as expected.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038221925/original/Fp0mLL8K0bifgIJ1XvPs4JORlJxdOcNZVQ.jpeg?1734007354)

  

In order to activate the workflow you will need to turn this toggle to **"Publish."**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038221952/original/kPcUBJ882lYdyBz1jRnP9M22AhrroZLI8Q.jpeg?1734007369)

* * *

## **Use Cases**

  

**1\. Updating Contact Location After a Customer Moves**  
  

-   **Scenario:** A customer moves to a new city and updates their address via a form or support interaction.  
      
    
-   **Solution:** Automatically update the City and Country fields in the contact’s record.  
      
    
-   **Steps:**
    -   **Trigger:** Customer updates their address through a form.  
          
        
    -   **Action:** Use the “Update Contact Field” action to change the City to “Paris” and the Country to “France.”  
          
        
    -   **Outcome:** The CRM reflects the updated location, and customer communications are tailored to their new location.

  

  

**2\. Updating Do Not Disturb (DND) Status**  
  

-   **Scenario:** A customer opts out of marketing communications.  
      
    
-   **Solution:** Update the DND field in the contact’s record to “Yes” to exclude them from future marketing emails.  
      
    
-   **Steps:**
    -   **Trigger:** Customer clicks “unsubscribe” in an email.
    -   **Action:** Use the “Update Contact Field” action to set DND = Yes.
    -   **Outcome:** The contact no longer receives marketing messages, ensuring compliance with email preferences.

**3\. Updating Contact Source for New Leads  
  
**

-   **Scenario: A lead is captured from a new marketing campaign, and you want to track its source.  
      
    **
-   **Solution: Update the Contact Source field to “Spring Sale Campaign” to track the lead source.  
      
    **
-   **Steps:**
    -   **Trigger: A lead submits a form for the Spring Sale.  
          
        **
    -   **Action: Use the “Update Contact Field” action to set Contact Source = Spring Sale Campaign.  
          
        **
    -   **Outcome: The system tracks where new leads are coming from, allowing for better reporting and campaign analysis.**

* * *

## **FAQs**

****1\. Can I update multiple fields at once with a single action?****

**Yes, you can select and update multiple fields simultaneously within the same action, saving time and reducing complexity.  
  
**

****2\. What happens if I try to update a field that doesn’t exist for a contact?****

**If the field doesn’t exist, the update may fail or be ignored. To avoid this, ensure the field is properly created in the contact’s record or CRM system.  
**

****3\. How do I know if the “Update Contact Field” action worked?****

**Test the workflow using a sample contact and check if the changes are reflected in the contact’s record. Some platforms also provide activity logs for tracking updates.  
  
**

****4\. Can I undo an update if it was done incorrectly?****

**No, once a field is updated, it cannot be automatically reverted. To correct it, you must update the field again with the correct information.**