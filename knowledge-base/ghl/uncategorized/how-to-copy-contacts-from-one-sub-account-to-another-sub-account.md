---
title: "How to copy contacts from one sub-account to another sub-account?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001034-how-to-copy-contacts-from-one-sub-account-to-another-sub-account-"
category: "Uncategorized"
---

# How to copy contacts from one sub-account to another sub-account?

Learn how to use HighLevel's 'Copy Contact' workflow action to duplicate contacts between sub-accounts, including tags and custom fields, while maintaining data integrity.

* * *

### Additional Tutorial Videos:

[https://www.youtube.com/watch?v=deI0HZ2HcAQ](https://www.youtube.com/watch?v=deI0HZ2HcAQ)

[https://www.youtube.com/watch?v=nqCFyLRiols](https://www.youtube.com/watch?v=nqCFyLRiols)

[https://www.youtube.com/watch?v=wZ85Ej6VnKc](https://www.youtube.com/watch?v=wZ85Ej6VnKc)

* * *

## **Prerequisites for Using 'Copy Contact'**

  

-   Agencies must be on any High-Level plan ($97, $297, $497, or their annual equivalents).
-   LC Premium Triggers & Actions must be enabled via Agency Settings.
-   Existing and new sub-accounts will have 100 free executions once Premium Actions & Triggers are enabled.
-   To avoid execution costs for existing sub-accounts, rebilling needs to be enabled manually for each sub-account within the Agency view.
-   If premium actions are enabled on the SaaS Configurator, new sub-accounts generated will automatically be enrolled in LC Premium Actions & Triggers, requiring no further action by the agency.

* * *

## **Steps for Copying a Contact**

  

1\. Navigate to the Workflow Builder in your HighLevel dashboard and create a new workflow or edit an existing one.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683643/original/eP2hToI_4TLeO8vY2qpceI0Gn2YqPIwScw.png?1752177408)  
  

2\. Add the 'Copy Contact to Sub-Account' workflow action.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683666/original/mqdIFP8q7BBzdMNkhD1J1-6OhAkuENLVYQ.png?1752177469)  

3\. Configure the action by selecting the target sub-account.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683973/original/dLRWwP6Caa7r6a2N_l09_5BMsc8beEhJ1Q.png?1752178137)  

  

4\. Optionally, enable the following settings:

  

-   **Copy Tags**: To duplicate tags from the source contact. Organize your contacts effectively by adding multiple tags to newly copied contacts in your selected sub-account. You can choose tags from the source contact information or even create new ones manually.
    
-   **Copy Custom Fields**: To duplicate custom fields, provided they exist in the target sub-account.
    
-   **Update Contact if it Already Exists**: To update existing contacts in the target sub-account.
    
-   **Skip Copy if Contact Lacks Email and Name**: To prevent copying incomplete contacrecords.
    

  

  

**Copy Custom Fields**

#### If enabled, contact custom fields will be copied to the selected account. The custom field value will be copied only if that field exists in the selected account.

  

#### **Toggle : Update contact if it already exists**

-   If this is enabled and if the contact already exists in the selected sub-account then the contact will be updated in the sub account. 
    
-   If the contact is not existing in the sub account then new contact will be created.
    

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018335574/original/NQ-ywFOUEi4ny-4WBP0pGjrX1S84B1-fwg.png?1705925986)  

  

  

#### Skip Copy Contact if Contact does not have Email and Name

If a contact does not have an Email or a Name then the contact won’t be copied and will be skipped. 

  

  

#### **What will be copied?**

  

Below fields will be copied when Copy Contact action is used -

  

-   Contact info
-   General info
-   Tags (Copy tags toggle must be turned on in the Copy contact action)
-   Custom fields **(Copy Custom fields toggle must be turned on in the Copy contact action and same custom field should be available in the sub account) (The custom field type should be same in both accounts)**

  

  

#### **What will  not be copied?**

  

Details such as Conversations, Activity, Notes, Tasks, Appointments, Documents and Payments will not be copied.