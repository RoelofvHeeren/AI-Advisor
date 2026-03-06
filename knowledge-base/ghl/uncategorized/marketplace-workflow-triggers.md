---
title: "Marketplace Workflow Triggers"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001024-marketplace-workflow-triggers"
category: "Uncategorized"
---

# Marketplace Workflow Triggers

Marketplace Workflow Triggers are the customizable workflow triggers managed in [Marketplace](https://marketplace.gohighlevel.com/). You will be able to create custom triggers to push data from your application/API to a workflow.

  

Sign up/ Sign in to [Marketplace](https://marketplace.gohighlevel.com/) to manage Marketplace Workflow Triggers.  
  
Marketplace Workflow Triggers are part of LC Premium Triggers & Actions and are chargeable per execution.  
  
[How to enable and rebill LC Premium Triggers & Actions for Workflows?](https://help.gohighlevel.com/en/support/solutions/articles/48001231559)  
  
You should enable Workflow LC Premium Triggers & Actions for the sub-account to access the Triggers created in the Marketplace App.  
  
The marketplace workflow triggers created in an APP will be listed in the workflow triggers only if the sub-account has the APP installed/integrated from the Marketplace.  
  

  

**TABLE OF CONTENTS**

-   [Prerequisites](#Prerequisites)
-   [Create Trigger](#Create-Trigger)
-   [](#Trigger-Information)[Trigger Information](#Trigger-Information)
-   [](#Trigger-Configuration)[Trigger Configuration](#Trigger-Configuration)[](#Trigger-Data)
-   [Trigger Data](#Trigger-Data)[](#Manage-Filters)
-   [Manage Filters](#Manage-Filters)
-   [Manage Custom Variables](#Manage-Custom-Variables)
-   [Subscription URL](#Subscription-URL)
-   [Submit for Review](#Submit-for-Review)
-   [Create New Version](#Create-New-Version)
-   [Delete Trigger](#Delete-Trigger)
-   [Can workflow execute without contact?](#Can-workflow-execute-without-contact?)

  

## **Prerequisites**

**_Note : workflows.readyonly scope should be turned on to enable actions and triggers._**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

  

## **Create Trigger**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571402/original/-akI1I0dRCxxnUB-vS_AXBRwM2lDmLY9zQ.png?1695707381)

### **Name**

Enter Trigger Name

  
**Key**

A unique identifier for this trigger, used to reference the trigger inside the workflow. This value cannot be changed later. Example: {{mycustomtrigger.data.name}}

  

# **Trigger Information**

Add trigger details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571484/original/upXNQ8ldHATTzVMFsJA6SDjKyyyXW8Md0A.png?1695707448)

  

### **Icon**

Choose an Icon for this Trigger. Shown in workflow for this trigger.  
  

### **Name**

Custom Trigger Name  
  

### **Key**

A unique identifier for this trigger, used to reference the trigger inside the workflow, Ex: {{trigger\_a.custom\_variable}}. This value cannot be changed later.  
  

### **Short description**

A short description explaining what your trigger does to help users understand. Shown in workflow as sub-title for this trigger.  
  

### **Summary**

A detailed information on what your trigger does to help users understand why they should use this trigger.

  

# **Trigger Configuration**

## **Trigger Data**

Add sample trigger payload data to configure filters and custom variables.

  

**Add sample trigger payload data  
**

Enter a valid sample payload JSON structure that will be sent to the trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572394/original/dDTnUzyorTuAP9fwktAjyt8XWSZoNy0ysQ.png?1695708653)

  
  

## **Manage Filters**

Add filters using sample trigger data, for users to use in workflows trigger configuration.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008573989/original/dUCSEOtTj74A2fotCwqyRB5157kJjHfxXA.png?1695710480)

  

### **Create New Filter**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575005/original/Eno_UsYIGBv7NPyT-TDujscxHAjDgMwM8w.png?1695711462)

  

**Name**

Enter Filter Name

  

**Type**

Select one of the following field types:

-   String
-   Select
-   Multiple Select
-   Dynamic

  

**Required**

Enable if this is a required filter in workflow.  
  

**Reference**

Select reference key from the sample Trigger Data. The value of this field will be bind to the provided key. Example: trigger\_a\_name  
  

**Alters Dynamic Filter**

If enabled, any changes made to this filter value will trigger/ re-trigger loading the dynamic filters to the workflow trigger configuration UI.

  

### **Type: Select / Multi Select  
**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575097/original/esi5jPJrs8bzkVEwcMvNP2P6JGgF_ZMHvg.png?1695711617)

Option Type is applicable only for Select and Multi Select field types.  
  

Select one of the following option types:

-   Constants
-   Internal Reference
-   External API

  

#### **Constants**

Load options by adding custom Label-Value constants

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

  

  

#### **Internal Reference**

Load options from HighLevel Internal Modules. Select one of the HighLevel Modules to load options list.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)**Supported HighLevel Modules**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

  

  

#### **External API**

Load option from external API endpoint

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

  

**URL (GET)**

Provide a URL to support GET method and send a valid response as per the sample response structure shared below.

  

**Headers**

Add headers as per your requirement

  

**Sample Response Data**

{  
   "options": \[  
      {  
         "label": "Afghanistan",  
         "value": "AF"  
      },  
      {  
         "label": "Åland Islands",  
         "value": "AX"  
      },  
      {  
         "label": "Albania",  
         "value": "AL"  
      },  
      {  
         "label": "Algeria",  
         "value": "DZ"  
      },  
      {  
         "label": "American Samoa",  
         "value": "AS"  
      }  
   \]  
}

  

### **Type: Dynamic**

Dynamic filters are used to build custom filters from an API call. The API call should return the below response structure to construct the filters in the Workflow trigger configuration form UI. Only one Dynamic type can be created per trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575252/original/ifNAt13wYheupSXn2LhgyT0zOp4wql5YtQ.png?1695711754)

  

**URL (POST)**

Enter your API endpoint URL. When executed data is sent to this API endpoint via POST method in the below mentioned payload format and a valid response is expected as per the sample response structure shared below.

  

**Headers**

Add headers as per your requirement

  

**Sample Payload:**The form data is sent as payload to the dynamic field API

{  
   "data": {  
        "name": "John Doe",  
        "age": "29",  
        "gender": "male",  
        "hobbies": \["sports", "music"\],  
        "address": "My Address",  
        "country": "US",  
        "profileType": "public",  
   },  
   "extras": {  
        "locationId": "xyz",  
        "contactId": "abc",  
        "workflowId": "def"  
   },  
   "meta": {  
        "key": "custom\_trigger\_key",  
        "version": "1.0",  
   }  
}

  

**Sample Response Structure:**   

{  
  "filters": \[  
    {  
      "field": "name",  
      "title": "Name",  
      "fieldType": "string",  
      "required": true  
    },  
    {  
      "field": "gender",  
      "title": "Gender",  
      "fieldType": "select",  
      "required": true,  
      "options": \[  
        {  
          "label": "Male",  
          "value": "male"  
        },  
        {  
          "label": "Female",  
          "value": "female"  
        }  
      \]  
    }  
  \]  
}

  

**Sample structure for each Filter Types**

String

{  
   "field": "name",  
   "title": "Name",  
   "fieldType": "string",  
   "required": true  
}

  

Select

{  
   "field": "gender",  
   "title": "Gender",  
   "fieldType": "select",  
   "required": true,  
   "options": \[  
      {  
         "label": "Male",  
         "value": "male"  
      },  
      {  
         "label": "Female",  
         "value": "female"  
      }  
   \]  
}

Multiple Select

{  
   "field": "hobbies",  
   "title": "Hobbies",  
   "fieldType": "multiselect",  
   "required": true,  
   "options": \[  
      {  
         "label": "Sport",  
         "value": "sport"  
      },  
      {  
         "label": "Music",  
         "value": "music"  
      }  
   \]  
}

  

## **Manage Custom Variables**

Add Custom variables using trigger data, for users to use in workflows.

## **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572016/original/JkQMjhsCodCIJQU-BA-KjP9rH3aEn7fZYA.png?1695708297)**

### **Add Custom Variable**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572039/original/JQry9o7DFN62Ce_h2X0zvVE1zShpmMNqKg.png?1695708327)

**Name**

Enter label name  
  

**Reference**

Select a reference key from the sample trigger data.

  

## **Subscription URL**

Collect trigger configuration details through API endpoint.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572516/original/NxuZK11tEgoiGhlnW0FUCrPpaQu5iM88FA.png?1695708842)

  

**URL (POST)  
**

Enter your API endpoint URL. When a trigger is configured (CREATED/UPDATED/DELETED) in workflow the trigger configuration data is sent to this API endpoint via POST method in the below mentioned payload format.  
  

**Headers**

Add required header data that has to be included while sending data to the API endpoint

  

**Payload format:**  
  
**Trigger "CREATED" in workflow  
**

{  
   "triggerData": {  
      "id": "def",  
      "key": "trigger\_a",  
      "filters": \[\],  
      "eventType": "CREATED",  
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"  
   },  
   "meta": {  
      "key": "trigger\_a",  
      "version": "2.4"  
   },  
   "extras": {  
      "locationId": "ghj",  
      "workflowId": "qwe",  
      "companyId": "asd"  
   }  
}

  
**Trigger "UPDATED" in workflow**

{  
   "triggerData": {  
      "id": "def",  
      "key": "trigger\_a",  
      "filters": \[  
         {  
            "field": "country",  
            "id": "country",  
            "operator": "==",  
            "title": "Country",  
            "type": "select",  
            "value": "USA"  
         }  
      \],  
      "eventType": "UPDATED",  
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"  
   },  
   "meta": {  
      "key": "trigger\_a",  
      "version": "2.4"  
   },  
   "extras": {  
      "locationId": "ghj",  
      "workflowId": "qwe",  
      "companyId": "asd"  
   }  
}

  
**Trigger "UPDATED" in workflow**

{  
   "triggerData": {  
      "id": "def",  
      "key": "trigger\_a",  
      "filters": \[  
         {  
            "field": "country",  
            "id": "country",  
            "operator": "==",  
            "title": "Country",  
            "type": "select",  
            "value": "USA"  
         }  
      \],  
      "eventType": "DELETED",  
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"  
   },  
   "meta": {  
      "key": "trigger\_a",  
      "version": "2.4"  
   },  
   "extras": {  
      "locationId": "ghj",  
      "workflowId": "qwe",  
      "companyId": "asd"  
   }  
}

  
  

## **Submit for Review**

The trigger version will be in draft state by default. After updating the trigger information and configuration the trigger version should be submitted for review.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

  

Click on **Submit for review** and add required **changelog** information for the submitted version.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572191/original/IGXs2a9XcQ-ybuxHr4VjcY8_JSnDq-VNOg.png?1695708444)

Once approved the version submitted for review will be published live to all Sub-accounts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

##   

## **Create New Version**

Click on  **\+ New Version** to create a new version for the trigger

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

  

On clicking **\+ New Version** It will create a new draft version with all the previously published data prefilled.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

##   

  

## **Delete Trigger**

Once a Trigger is deleted, it will be deleted permanently and cannot be restored. The deleted trigger will be removed from Marketplace App and Workflow Trigger list. If a deleted trigger is part of any workflow the trigger execution will be skipped.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522319/original/iILsc-HqjeJcvaYLyzPS1DLyWTp-E8ls2w.png?1701862634)

  

  

**Enter trigger name to confirm delete**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522368/original/6eQ0DnkP561wluUc9BZkj3VbytT196rMSQ.png?1701862664)

  

  

  

## **Can workflow execute without contact?**

-   Workflow can run contactless without any Contact data dependency so you can send any payload data via Marketplace Triggers and use it in workflow.
-   You can proceed without contact and use actions that are not dependent on contact information. Custom Webhook, Google Sheet, Slack, ChatGPT and all Internal Tools can be executed without contact.
-   If necessary, you can use the Create/Update or Find Contact actions to retrieve the contact data to the workflow.  
      
    **Example:**
-   Send order data to trigger and add the order information to google sheet, use if/else to categorize based on order value and send a slack notification.
-   Retrieve the contact with Contact ID using Find contact action