---
title: "How to inject User/Sub account Properties in Iframes on Sub Account Dashboards"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001977-how-to-inject-user-sub-account-properties-in-iframes-on-sub-account-dashboards"
category: "Uncategorized"
---

# How to inject User/Sub account Properties in Iframes on Sub Account Dashboards

You can now inject dynamic user or sub account properties/parameters in embedded content using iframes. Follow these step-by-step instructions to get started:

  

**TABLE OF CONTENTS**

-   [Step 1: Enter Edit Mode](#Step-1%3A-Enter-Edit-Mode)
-   [Step 2: Navigate to Objects tab](#Step-2%3A-Navigate-to-Objects-tab)
-   [Step 3: Choose Embed](#Step-3%3A-Choose-Embed)
-   [Step 4: Enter the URL](#Step-4%3A-Enter-the-URL)
-   [Step 5: Add Parameters](#Step-5%3A-Add-Parameters)
-   [Step 6: Utilize Dynamic User Properties](#Step-6%3A-Utilize-Dynamic-User-Properties)

-   [Supported User Properties](#Supported-User-Properties)

* * *

### **Step 1: Enter Edit Mode**

-   Open your Sub Account Dashboard and enter Edit mode.
    

  

### **Step 2: Navigate to Objects tab**

-   Once in Edit mode, navigate to the Objects section.
    

### **Step 3: Choose Embed**

-   Select the Embed option from the Objects menu.
    

  

### **Step 4: Enter the URL**

-   Enter the URL of the content you want to embed into the dashboard.
    
      
    

### **Step 5: Add Parameters**

-   After entering the URL, add the required parameters to customize the content.
    

  

### **Step 6: Utilize Dynamic User Properties**

-   You can dynamically inject the sub-account or user identifier into the iframe source. You can use placeholders like {{location.id}} or {{location.name}} in the URL to make it more versatile.
    
-   As an example, you can use {{location.id}} to create a dynamic URL like this: [https://app.gohighlevel.com/v2/location/{{location.id}}/conversations](https://app.gohighlevel.com/v2/location/{{location.id}}/conversations).
    
-   You can embed the above link as an iFrame URL on your dashboard.
    

  

* * *

# Supported User Properties

1.  We support various user properties that can be passed in the URL. Replace the **property** in {{user.**userpropertyhere**}} with any of the following supported user properties:
    -   companyId
    -   email
    -   phone
    -   role
    -   type
    -   firstName
    -   lastName
    -   name
    -   fullName
2.  For example, you can use https://yourwebsiteurlhere.com/?user={{user.firstName}} to pass the user's first name in the URL.

#   

  

#   

###