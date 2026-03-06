---
title: "Creating and Managing Custom Unsubscribe Links"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004799-creating-and-managing-custom-unsubscribe-links"
category: "Uncategorized"
---

# Creating and Managing Custom Unsubscribe Links

  

  

Ensuring that your email recipients have a clear and easy way to unsubscribe is not only a best practice but also essential for maintaining trust and improving engagement with your audience. HighLevel allows you to create custom unsubscribe links, providing a seamless experience for your contacts and maintaining your compliance with email regulations.

* * *

**TABLE OF CONTENTS**

-   [What Are Custom Unsubscribe Links?](#What-Are-Custom-Unsubscribe-Links?)[](#Key-Benefits-of-Custom-Unsubscribe-Links)
-   [Key Benefits of Custom Unsubscribe Links](#Key-Benefits-of-Custom-Unsubscribe-Links)[](#Creating-Custom-Unsubscribe-Links)
-   [Creating Custom Unsubscribe Links](#Creating-Custom-Unsubscribe-Links)[](#Set-Up-the-Trigger)[](#Set-Up-the-Trigger)
-   [Set Up the Trigger](#Set-Up-the-Trigger)[](#Add-the-DND-Action)[](#Add-the-DND-Action)
-   [Add the DND Action](#Add-the-DND-Action)[](#Step-4%3A-Insert-the-Unsubscribe-Link-into-Your-Emails)[](#Step-4%3A-Insert-the-Unsubscribe-Link-into-Your-Emails)
-   [Insert the Unsubscribe Link into Your Emails](#Step-4%3A-Insert-the-Unsubscribe-Link-into-Your-Emails)[](#Frequently-Asked-Questions)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What Are Custom Unsubscribe Links?**

  

Custom unsubscribe links are personalized opt-out links embedded in marketing emails, allowing recipients to unsubscribe from future communications in a way that aligns with your brand. Unlike default unsubscribe links, which often redirect users to a generic confirmation page, **custom unsubscribe links give you full control** over the user experience.

* * *

## **Key Benefits of Custom Unsubscribe Links**

  

-   **Enhance User Experience:** Direct users to a branded landing page that confirms their opt-out decision.  
      
    
-   **Provide Subscription Preferences:** Allow users the option to opt out of specific types of emails instead of all communications.  
      
    
-   **Maintain Compliance:** Ensure compliance with email marketing regulations like the CAN-SPAM Act and GDPR.  
      
    
-   **Improve Deliverability:** Reduce spam complaints by offering a clear and easy way for recipients to unsubscribe.

  

**Note:** Custom unsubscribe links in HighLevel use **trigger links** and **workflows** to automatically mark contacts as **"Do Not Disturb" (DND)**, preventing them from receiving further emails.

* * *

## **Creating Custom Unsubscribe Links**

  

Follow these steps to set up a custom unsubscribe link in HighLevel:

  

### **Step 1:** Create an Unsubscribe Landing Page

  

Design a landing page that confirms the unsubscribe action. This page should inform users that they have successfully unsubscribed and if desired, offer options to manage their subscription preferences.  
  

1.  Navigate to **Sites** and then **Funnels** from your HighLevel sub.  
      
    
2.  Click on **\+ New Funnel** and name it **Email Unsubscribe**.  
      
    
3.  Within this funnel, add a new step named "**Email Unsubscribe Page**" with a path like **/unsubscribe**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045847538/original/vOI_BRnT7Sh8Uhga2X-Qd0bqTKKOvFHLfg.gif?1745934146)

  

  

Design the page content to **reflect the unsubscribe confirmation message.** We have added a demo page below for your reference. Check out our [Funnel Styling guide](https://help.gohighlevel.com/en/support/solutions/articles/48000980309) (\*needs to be updated) for more information.  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043604358/original/xXa1SJ8bT9_EqeMuuG4TvFyq5KyGinchmg.png?1742397563)

  

  

### **Step 2:** Set Up a Trigger Link  

  
A trigger link in HighLevel allows you to perform specific actions when a contact clicks on a particular link. In this case, clicking the unsubscribe link will update their preferences.

  

1.  Go to **Marketing** then **Trigger****Links** from your HighLevel sub-account.  
      
    
2.  Select **Links** from the dropdown and click on the **Add Link** button.  
      
    
3.  Add the **name** of the link.  
      
    
4.  Paste the **URL of the unsubscribe landing page** you created earlier into the **Link URL field**.  
      
    
5.  Click on **Save**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045848397/original/AZ0q9hJiQmrl8OIkTRxZTnztuHaXuiMRww.gif?1745934719)

  

  

### **Step 3:** Create a Workflow to Manage Unsubscribes

  

Set up a workflow that automatically updates the contact's status when they click the unsubscribe link.

#### 

1.  Navigate to **Automation** from your HighLevel sub-account and select **Workflows**.  
      
    
2.  Click on **\+ Create Workflow** and select **\+ Start from Scratch**.  
      
    
3.  **Name** the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045848742/original/Ls0E4Ede8T3Q2-0MbmOOyRk2HBijnI0PXQ.gif?1745934914)

  

  

#### **Set Up the Trigger**

  

1.  Click on **Add New Trigger** and select **Trigger Link Clicked** from events.  
      
    1.  Add the **Workflow Trigger Name**.  
          
        
    2.  Click on **Add Filter** and select **Trigger Link** from the drop-down.  
          
        
    3.  Select your **previously saved Email Unsubscribe Trigger link** from the drop-down.  
          
        
    4.  Click on **Save Trigger** button.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045849525/original/CAMcn27a9ODqVarW-57audU1K3FsJHKteA.gif?1745935497)

  
  

#### **Add the DND Action**  
  

1.  Click on the **+** button to add an Action.  
      
    
2.  Select **Enable/Disable DND** action.  
      
    
3.  Select **Enable DND for Specific Channels** and **Email** from the Channels drop-down.  
      
    
4.  **Save** and **Publish** the workflow.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043621730/original/PyVtFQ7iZvk_ukmK_jOYctNSuWPOiZgCCg.gif?1742416222)

  

  

### **Step 4:** Insert the Unsubscribe Link into Your Emails  

  

1.  In your **email template editor**, add text like **Unsubscribe** or **Unsubscribe from this list**.  
      
    
2.  **Highlight** this text and click the **link** icon.  
      
    
3.  Click on **Trigger Links** from the Link URL dropdown and select the saved **Unsubscribe Link**.  
      
    
4.  **Save** the template.

  

  

**Note:** 

Emails sent via workflows do not automatically include unsubscribe links. To stay compliant, you must manually add the unsubscribe trigger link to each email template used in a workflow. 

To do this, highlight text such as **“Unsubscribe”** or **“Click here to unsubscribe”** in your email template, click the link icon, and select your custom unsubscribe trigger link from the dropdown. This ensures recipients can opt out no matter where the email originates.

  

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045850376/original/5srUB4Cs32XWlbEL-Z3X3K9R3WzbrG_bMA.gif?1745936008)

* * *

## **Frequently Asked Questions**

  

**Q: Why should I create a custom unsubscribe link instead of using the default one?**

A custom unsubscribe link allows you to maintain brand consistency and control the unsubscribe process, providing a better user experience.

  

**Q: Can I customize the unsubscribe confirmation page?**

Yes, you can design the unsubscribe landing page to match your branding and include messages or options for users to manage their preferences.

  

**Q: How does the "Set Contact DND" action work?**

The "Set Contact DND" action marks the contact as Do Not Disturb, preventing them from receiving future communications.

  

**Q: Is it necessary to include an unsubscribe link in all emails?**

Yes, including an unsubscribe link in all marketing emails is a legal requirement in many countries and helps maintain good email deliverability.

  

**Q: Can I track who has unsubscribed from my emails?**

Yes, HighLevel allows you to monitor contacts who have clicked the unsubscribe link through the trigger link analytics.

* * *

## **Related Articles**

  

-   [](https://help.gohighlevel.com/en/support/solutions/articles/48001225534)[](https://help.gohighlevel.com/en/support/solutions/articles/48001225534)[How to Set Up Unsubscribe Links for LC Email](https://help.gohighlevel.com/en/support/solutions/articles/48001225534)   
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/48001234940) 
-   [How List-Unsubscribe Helps Email Deliverability](https://help.gohighlevel.com/en/support/solutions/articles/48001234940)[](https://help.gohighlevel.com/en/support/solutions/articles/48001234940)[](https://help.gohighlevel.com/en/support/solutions/articles/48001234940)