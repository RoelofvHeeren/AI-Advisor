---
title: "Bot Actions - Add Contact Info"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004097-bot-actions-add-contact-info"
category: "Uncategorized"
---

# Bot Actions - Add Contact Info

**TABLE OF CONTENTS**

-   [Introducing Add Contact Info Feature](#Introducing-Add-Contact-Info-Feature%C2%A0) 
-   [Step 1: Once you're in the Bot Goals tab, click on the Add Contact Info button to explore the details](#Step-1%3A-Once-you're-in-the-Bot-Goals-tab,-click-on-the-Add-Contact-Info-button-to-explore-the-details)
-   [Step 2: Click on Add Contact info button and update the required details i.e. the details that you wish to update](#Step-2%3A-Click-on-Add-Contact-info-button-and-update-the-required-details-i.e.-the-details-that-you-wish-to-update)
-   [Additional Information](#Additional-Information)
-   [Frequently Asked Question](#Frequently-Asked-Question)  
    

* * *

  

## **Introducing Add Contact Info Feature** 

The **Add Contact Info** feature allows users to easily add contact information, such as name, phone number, email, and more, directly from the AI conversation.

  

This feature is designed to streamline the process, making it more efficient to maintain accurate and up-to-date information about your leads. Here's how you can access and use this feature effectively:This feature allows users to add or update contact information of the leads through the AI 

  

This feature only updates the empty fields in a contact information

Contact's email and phone are automatically updated so this action is not required for adding or updating email or phone 

After saving contact info, explicitly ask the customer for their contact details in the bot’s prompt. If this instruction isn't included in the prompt, the bot will not ask for the required information, and the contact field won't be updated.

  

## **Step 1: Once you're in the Bot Goals tab, click on the Add Contact Info button to explore the details**

  

**If you are creating a new bot, you need to edit the Bot name or assign a new name before accessing the feature**

  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439264/original/MzxPs_7LeJ9O0VOB32HEMHTLbE2AWniYGA.png?1736312016)**  
  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439263/original/wX-Fap8BSB5rObZg61SskeEgEXwwjBM9XA.png?1736312016)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439265/original/XvsYt4c6Lc1H0dzqvgvcaV1Xy8Mqf1_B9g.png?1736312016)**

* * *

  

## **Step 2: Click on Add Contact info button and update the required details i.e. the details that you wish to update**

  

### **How to Set Up the Fields**  

To ensure the best experience, follow these steps to edit and update the contact details:  
  

-   **Action Name:** Assign an action name of your choice. This will help you recognize the action later. For example, "Update Contact's  Date of Birth".  
      
    
-   **Select Field:** Choose the field you want to update from the dropdown menu (e.g., name, phone, email, business name, etc.).  
      
    
-   **What to Update:**In the third field, write a short description of what you’re updating. For example:  
    -   If you choose **Date of Birth**, you could write: "This is the birth date of the contact"  
          
        
    -   If you select **Business Name**, you might write: "This the business name of the contact."  
          
        
    -   This information helps the AI generate more accurate and personalised responses.  
          
        
-   **Output Example (Optional):** If applicable, provide an example of the updated information. For instance, if you're updating the date of birth, you could enter " 5th Jan 1990 "  
      
    
-   Once you're done, click **Save** to finalise the new contact information settings.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439268/original/oplq_CyPsE7msPlsPvSTMByYIxKO7w83ZA.png?1736312017)  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439267/original/jm6s5ienO0Q8TtoAm8yEtfrnRmWaXvbGxg.png?1736312017)  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439269/original/QqgtZH3TTcb6vM0UYLOD_ceIYqIqMquHaQ.jpeg?1736312017)

##   
Additional Information  
  

-   After saving or updating the contact info, it's important to **explicitly ask the customer for their contact details** in the bot’s prompt., we have already mentioned this information in the tip   
      
    
-   For example, if you're creating a field to update the date of birth, make sure to include a clear instruction like:  
    **"Ask the customer for their date of birth.**  
      
    
-   If this instruction isn't included in the prompt, the bot will not ask for the required information, and the contact field won't be updated.  
      
    
-   Steps / best practices to add the details in the prompt   
      
    

Lets say you want to collect name , email , phone , business name , date of birth before booking an appointment 
Add this in the prompt to make sure the bot asks these questions 
Start the prompt from ### mandatory instruction 

_###mandatory instruction : before booking an appointment always start the conversation by asking these question one after another_
_1\. Ask the customer his name_ 
_2\. Ask the customer his email_
_3\. Ask the customer his phone_
_4\. Ask the customer his date of birthdate_
_5\. Ask the customer his business name_

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439266/original/J8JebrGpwZRXrrI28kHoTP0ktAPBb0Djsg.png?1736312017)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439270/original/r-fEes2O4-GvFdOI8IfnAPQVGG8PaX_rXA.jpeg?1736312017)

## **  
Frequently Asked Question**

  

**Q: Is there a limit to how many contact fields I can add using the Add Contact Info action?**  
  
A: The Add Contact Info action allows you to map a limited number of fields at one time. If you need to capture additional information, you can trigger a workflow from Conversation AI and use **Update Contact Field** actions inside the workflow to populate as many contact fields as needed based on the conversation.