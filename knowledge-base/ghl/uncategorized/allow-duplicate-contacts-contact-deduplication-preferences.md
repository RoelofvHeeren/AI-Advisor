---
title: "Allow Duplicate Contacts (Contact Deduplication Preferences)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001181714-allow-duplicate-contacts-contact-deduplication-preferences-"
category: "Uncategorized"
---

# Allow Duplicate Contacts (Contact Deduplication Preferences)

  

  

Contact Deduplication Preferences control how duplicate contacts are managed in HighLevel. This article explains to to configure these preferences to match your specific needs!

* * *

**TABLE OF CONTENTS**

-   [Overview of Contact Duplication Preferences](#Overview-of-Contact-Duplication-Preferences)
-   [Key Details To Know](#Key-Details-To-Know)
-   [Contact Deduplication Preferences (Settings)](#Contact-Deduplication-Preferences-\(Settings\))
    -   [Allow Duplicate Contact](#Allow-Duplicate-Contact)
    -   [Find Existing Contacts Based On](#Find-Existing-Contacts-Based-On)
    -   [Second Preferences for Search (Optional)](#Second-Preferences-for-Search-\(Optional\))
-   [Behavior Across Contact Sources](#Behavior-Across-Contact-Sources)
-   [How to Configure Contact Deduplication Preferences](#How-to-Configure-Contact-Deduplication-Preferences)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **Overview of Contact Duplication Preferences**

  

The "Allow Duplicate Contact" setting sets the rules for contact creation and matching. Turn duplicates off to use your chosen primary (and optional secondary) field to attach new submissions to an existing contact; otherwise a new contact is created. Turn duplicates on to allow new records even if an email/phone already exists, then merge later if needed.

  

This setting is particularly relevant for contacts submitted through Zapier or Forms. However, it does not apply to CSV contact uploads, where duplicates are automatically identified and managed based on phone numbers or email addresses.

* * *

## **Key Details To Know**

  

-    **Applies to Zapier, Forms,** **Facebook and Instagram**
    -   The **Allow Duplicate Contact** setting controls how new submissions from Forms, Zapier, Facebook and Instagram Messenger create or merge contacts.  
          
        
    -   When enabled, new records are allowed even if an email or phone already exists.  
          
        
    -   When disabled, matching email or phone details update an existing contact instead of creating a new one.  
          
        
-   **Does Not Apply to CSV Imports**
    
    -   For CSV imports, GoHighLevel automatically merges contacts based on **phone numbers** or **email addresses**, regardless of the setting  
          
        
    -   Duplicate contacts cannot be created via CSV uploads.  
          
        
-   **Default Behavior for Imports**
    
    -   When importing contacts via CSV, the system checks for existing records using the specified primary field (email or phone)  
          
        
    -   Contacts with matching information are merged automatically, ensuring a clean and organized database

  

When the "Allow Duplicate Contacts" setting is enabled, duplicate contacts are allowed. This can be useful in workflows where the same individual needs to exist as separate records (e.g., different departments).  
  
When disabled, duplicate contacts are prevented, ensuring a single record per phone or email and updates are made to existing records instead of creating new ones.

* * *

## **Contact Deduplication Preferences (Settings)**

  

There are three settings that can be changed in the Contact Duplication Preferences:

  

#### **Allow Duplicate Contact**

  

This setting allows you to control how your sub-account treats duplicate contacts. If you want to "Allow Duplicate Contacts", you would toggle this setting into the ON position. If you DO NOT want duplicate contacts, you would toggle this setting to the OFF position.

  

  

#### **Find Existing Contacts Based On**

  

This filter allows you to specify how HighLevel identifies and matches existing contacts in your database. Choose the primary field used to look up an existing contact before creation. Available options are Email (Default) or Phone. Pick the field you collect most consistently at intake.

  

  

#### **Second Preferences for Search (Optional)**

  

Use this field as a secondary criterion for duplicate detection. Leave blank if you want to match on one field only.

  

Example: If "Email" is selected as the primary field and "Phone" as the secondary, the system will first match by email and, if no match is found, check by phone number.

* * *

## **Behavior Across Contact Sources**

  

**Forms and Zapier:**  
  

-   **Enabled:** Allows duplicates, creating separate records for contacts with the same email or phone  
      
    
-   **Disabled:** Updates the existing contact with the new information instead of creating a duplicate  
      
      
    

**CSV Imports:**  
  

-   Duplicate records are merged automatically based on phone number or email  
      
    
-   Duplicate contacts cannot be created during CSV imports and always respects this setting.  
      
    

**Facebook and Instagram conversations:**

  

-   **Disabled:** If someone first appears as a Facebook or Instagram Messenger contact and later shares an email or phone number that matches an existing contact, HighLevel automatically merges the messenger contact into that existing record. Conversations and details are kept in a single, unified contact profile.

  

-   **Enabled:** Facebook and Instagram Messenger contacts can create separate records even if their email or phone matches an existing contact. The automatic merge for these conversations does not run, so duplicates may remain until you merge them manually.

  

[Click Here to learn more on Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv)

  

* * *

## **How to Configure Contact Deduplication Preferences**

  

This setting is located under **Settings → Business Profile → Contact Deduplication Preferences** and offers additional customization options, such as setting primary and secondary criteria for duplicate detection.

  

  

#### **Step 1**: Navigate to Business Profile Settings

  

-   From the dashboard, click **Settings** in the lower left corner  
      
    
-   This will open the **Business Profile Settings** (also show as the top option on the secondary left-side navigation bar)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052720496/original/YhbxIprLhrmIhlfBN2gDpyg9Z420P4msmQ.png?1756498017)

  

  

#### **Step 2**: Contact Duplication Preferences Panel

  

-   Scroll down until you see the **Contact Duplication Preferences** panel on the right side of the screen  
      
    
-   This panel is where all configurations will be made. [Click here for more information on each preference](#Contact-Deduplication-Preferences-\(Settings\))  
      
    
-   All changes to settings in this panel are automatically applied, no need to click a Save/Update Information button

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040612911/original/p9xvdNia1IYqmsbMrv3inMqwV1AJiqomXw.png?1738106845)**

* * *

## **Frequently Asked Questions**

  

**Q: Can duplicates be created during CSV imports?**

No, duplicate contacts cannot be created during CSV imports. The system automatically merges contacts based on email or phone.

  

**Q: What happens if I enable "Allow Duplicate Contact"?**

Contacts with the same phone number or email can be created via Forms or Zapier. Duplicate contacts cannot be created via CSV uploads.

  

**Q: Can I merge duplicate contacts after enabling this setting?**

Yes, duplicate contacts can be manually merged using the **Merge Contacts** feature.

  

**Q: How can I prevent duplicates from integrations?**

Disable the **"Allow Duplicate Contact"** setting in your account settings to ensure integrations update existing records instead of creating new ones.

* * *

## **Related Articles**

  

-   [How to Merge Duplicate Contacts in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48001202210)  
      
    
-   [Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/en/support/solutions/articles/155000003905)  
      
    

-   [Business Profile Settings](https://help.gohighlevel.com/en/support/solutions/articles/155000006223)  
      
    
-   [Business Profile Settings - General Information](https://help.gohighlevel.com/en/support/solutions/articles/155000006181)  
      
    
-   [Business Profile Settings - Business Information](https://help.gohighlevel.com/en/support/solutions/articles/155000006187)  
      
    
-   [Business Profile Settings - Authorized Representative](https://help.gohighlevel.com/en/support/solutions/articles/155000006219)  
      
    
-   [Business Profile Settings - General](https://help.gohighlevel.com/en/support/solutions/articles/155000006221)  
      
    
-   [Business Profile Settings - Enable / Disable Deprecated Features](https://help.gohighlevel.com/en/support/solutions/articles/155000006222)