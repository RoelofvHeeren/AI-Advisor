---
title: "Google Analytics 4 Tracking"
url: "https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking"
category: "Uncategorized"
---

# Google Analytics 4 Tracking

Google Analytics 4 (GA4) is the latest version of the Google Analytics platform that provides a more advanced and comprehensive view of user behavior across different platforms and devices. It offers cross-device tracking, machine learning-powered insights, and enhanced event-tracking capabilities.

  

Concerning our CRM, the recent enhancement to track GA4 events with the measurement-id and API secret means that users of our CRM can now easily use GA4 tracking with their CRM accounts. This will allow them to track and analyze user behavior and engagement across different channels, including their website, mobile app, and social media platforms.

  

#### **Covered in this Article:**

####   
[**Steps to set up Google Analytics 4 in Workflows**](#Steps-to-set-up-Google-Analytics-4-in-Workflows)

####   
[Create or use an existing Google Analytics Workflow](#Create-or-use-an-existing-Google-Analytics-Workflow)

####   
[Get a Measurement ID from your Google Analytics Data Stream](#Get-a-Measurement-ID-from-your-Google-Analytics-Data-Stream)

####   
[Create a Google Analytics event that you want to track](#Create-a-Google-Analytics-event-that-you-want-to-track)

####   
[Get an API Secret Value from your Data Stream](#Get-an-API-Secret-Value-from-your-Data-Stream)

  

**Please Note:**  
  

After the workflow execution is completed it will take 24 to 48hrs for the data to reflect in the Google Analytics platform

* * *

## **Steps to set up Google Analytics 4 in Workflows**

  
The existing workflow action for Google Analytics in the CRM includes both Google Analytics 4 and Universal Analytics, which means that users can choose to use either platform or both to track their marketing campaigns and website traffic. This provides a more flexible and integrated approach to tracking and analyzing user behavior, which can help businesses make data-driven decisions to improve their marketing strategies and user experience.

  

### **Create or use an existing Google Analytics Workflow**

  
In your Google Analytics Workflow, select the action 'Add to Google Analytics.'

A new dropdown value under 'Action Type' has been introduced by the name 'Google Analytics 4'; select this from the dropdown.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284543581/original/pSCnn00j0xET-5lNoI-oIuQK7DxHSPkhpA.png?1677682870)  

### **Get a Measurement ID from your Google Analytics Data Stream**

  
Go to your [Google Analytics account](https://analytics.google.com/analytics/web/provision/#/provision) and fetch the measurement-id from **Admin ➝ Account Settings ➝ Data Stream ➝ Select the Data Stream.** (Please refer to Google help documentation on [how to Set up Google Analytics](https://support.google.com/analytics/answer/9304153?hl=en) if you do not have it set up.)  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284545161/original/08UB2GMF7fnHHaSVr9VRErWGBJ-iQhLxDA.png?1677683155)  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284546818/original/qZwT3a5g1F-XxBJUp_06x55GF6qp13aTZw.png?1677683421)  
Copy the Measurement ID for your desired Data Stream:  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284547151/original/YLT7YvK3x0sL9v2IyoBSApaho0IP9X41qQ.png?1677683498)

  
Paste the Measurement ID in the Measurement ID field of your Google Analytics Action in your workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284556825/original/B3TyroHXE8UMwXdxdRAZiRxGvXI_atNKGw.png?1677685097)

  

  

### **Create a Google Analytics event that you want to track**

  
You can Add the event name that you wish to track. This event name will show up under the Google Analytics dashboard along with other standard events that are set up. [Refer here for the event naming rules by google](https://support.google.com/analytics/answer/13316687?hl=en)  
  

-   “The **Add to Google Analytics** workflow action supports an optional **Event Value** field.”  
      
    
-   “Use **Event Value** to send a numeric value with the event (for example, revenue, order total, or a score).”  
      
    
-   “In the action UI, this may appear as **`event.value`**. Populate it using a static number or a dynamic value from the workflow.” 
    

###   
**Get an API Secret Value from your Data Stream**

  
Add the API secret by navigating to your Google Analytics account **Admin ➝ Account Settings ➝ Data Stream ➝ Select the Data Stream ➝ Measurement Protocol API secrets.**  

**“Event Value is optional. If you don’t need to send a numeric value, you can leave it blank.”**

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551270/original/-kJ4WRBEGU3sSkAAzvvkLOz5da1zIV9hFg.png?1677684347)  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551356/original/eeK0BIZ9tHMSteAND_IiSV_-_RryKxsoZA.png?1677684372)

  

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551672/original/RlIdIXYuRah3mSzkcUirhp5v8yNAiKkydQ.png?1677684443)  
**Please Note:**  
  

Before an API Secret can be created you need to acknowledge that you have read and understood Google's privacy disclosures regarding the collection of user data.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552028/original/rxoC8VmUv0JkDm513OpemdU1n30sXB0YUA.png?1677684523)

  
Then click on Create if no API Secret has already been created.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552756/original/GCizmLZKJZvyE_dtxsvG9DPl0srgm95okw.png?1677684693)  
Name your API secret and then hit **Create,** and a Secret Value will be generated for it automatically.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552953/original/wQYzdtSU5MCvI9B01CmM0Y11ABmU91vmiw.png?1677684726)

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284553558/original/kZiSvw1Lr4RYkWZumT7ns-UxF-0bOEUdAg.png?1677684780)  
Copy the Secret Value from here and paste it into the API Secret field in the Google Analytics action in your Workflow.

  

**Please Note:**  
  

Make sure there is no space before or after when you paste your API Secret value into the workflow's field or your Google Analytics action will fail.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284555569/original/5Ia3Grxv11-cxX_Rb6BZniRX8wseLXOIIQ.png?1677684919)  
**Save Action** and then **Save the Workflow**. **Publish** if you are ready to use it.