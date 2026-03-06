---
title: "Creating Custom Objects using Snapshots"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004922-creating-custom-objects-using-snapshots"
category: "Uncategorized"
---

# Creating Custom Objects using Snapshots

  

  

This support doc provides step-by-step instructions on using the **Custom Object Support in Snapshots** feature. Customers can copy custom object data, including all custom fields and associations, between sub-accounts. The doc highlights feature benefits, usage instructions, and important limitations, enabling users to easily replicate custom object data across multiple sub-accounts.

* * *

**In this article**

-   [Custom Object Support in Snapshots](#Custom-Object-Support-in-Snapshots)
-   [Custom Object Associations](#Custom-Object-Associations)
-   [How to Copy Custom Objects Between Sub-Accounts](#How-to-Copy-Custom-Objects-Between-Sub-Accounts)
-   [Important Limitations](#Important-Limitations)

* * *

### **Custom Object Support in Snapshots**

You can now include custom objects and **all** their associated custom fields (not limited to primary fields) within snapshots. This enables you to effortlessly copy custom object data across multiple sub-accounts.

  

Custom Objects can **only** be copied between sub-accounts. Direct export of custom objects is not supported

  

* * *

### **Custom Object Associations**

Custom objects are automatically associated with other custom objects or contacts within the snapshot process. Associations are included by default and **cannot** be modified or deselected during snapshot creation.

  

Associations between custom objects and other objects (including contacts) will be automatically created or updated. You cannot manually edit these associations during the snapshot process. 

* * *

### **How to Copy Custom Objects Between Sub-Accounts**

Follow these steps to copy custom object data:

1.  Navigate to **Agency > Account Snapshots > Create Snapshot**.
    
2.  Select the **custom object** you want to include in the snapshot.  
      
    
    ![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044030767/original/n7iRDBYfiTyYb3DoXpfDSxrIyGPW_4o0ZA.jpeg?1743003209)  
      
    
3.  The selected custom object’s fields and associations (to other custom objects or contacts) will automatically be included.
    
4.  Choose the **source and target sub-accounts** to complete the snapshot transfer.
    

* * *

### **Important Limitations**

-   **Custom Object Limit per Snapshot:**  
    A snapshot can contain a maximum of **10 custom objects** per sub-account. If importing the snapshot would exceed this limit, **no custom objects will be created** in the target sub-account.
    
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055149731/original/axSlH5U9mEucSAV8qY5uHSwlQJRt-u8XkQ.png?1759477372)
    

#