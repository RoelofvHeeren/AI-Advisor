---
title: "Custom Webhook Action – Secure Credential Management"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005047-custom-webhook-action-secure-credential-management"
category: "Uncategorized"
---

# Custom Webhook Action – Secure Credential Management

This guide walks you through the latest improvements to the Custom Webhook action, focusing on enhanced security measures and streamlined credential management.

* * *

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Key Improvements](#Key-Improvements)
    -   [Masked Secret Keys](#Masked-Secret-Keys)
    -   [User-Friendly Credential Management](#User-Friendly-Credential-Management)
-   [Why These Updates Matter](#Why-These-Updates-Matter)
-   [Getting Started](#Getting-Started)
-   [Important Notes](#Important-Notes)

* * *

## Overview

The Custom Webhook action now supports masked secret keys for Basic auth, Bearer token, and API key authentication methods. This update helps prevent the accidental exposure of sensitive information and provides an easier way to manage and store credentials.

* * *

## Key Improvements

### Masked Secret Keys

-   **Secure Storage**: All secret keys are securely stored and masked in the interface.
    
-   **Supported Auth Methods**: Basic auth, Bearer token, or API key.
    
-   **Reduced Exposure**: Keys are never displayed in plain text, minimizing the risk of leaks.
    

### User-Friendly Credential Management

-   **Key Management**: Select from existing keys or create a new key from a dropdown menu.
    
-   **Restricted Removal**: Only **agency admins** or **the creator of the key** can delete it.
    
-   **Location-Level Security**: Keys are accessible only within the location where they were created.
    

* * *

## Why These Updates Matter

1.  **Enhanced Security**
    
    -   Secret keys are masked to drastically lower the chances of accidental leaks.
        
    -   Keys are identified by name instead of their actual value, reducing risk.
        
2.  **Better Access Control**
    
    -   Sensitive credentials are editable only by users that have created and admins at the location level.
        

* * *

## Getting Started

Follow these steps to add and configure a new Custom Webhook action in your Automations builder.

1.  **Add a Custom Webhook Action**
    
    -   In your Automations builder, select **Custom Webhook** as the action step.
        
2.  **Select Authentication Type**
    
    -   Choose one of the following methods: **Basic auth**, **Bearer token**, or **API key**.
        
3.  **Configure Credentials**
    
    -   Choose **Create New Key**.
        
    -   Enter a **key name** (for identification) and the **key value** (the actual credential).
        
    -   Once saved, the key will be masked, so it won’t appear in plain text.
        
4.  **Monitor & Manage**
    
    -   Use the dropdown menu to select or delete keys as needed.
        

* * *

## Important Notes

-   **Deletion Permissions**: Only agency admins or the key’s creator can delete it.
    
-   **Existing Keys**: Once you update to a new key, old key will be automatically removed.
    

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064373/original/d90fEX1tr4sa9wyPSUWh0U8BQVvguDAx3A.png?1744643159)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064380/original/OzCNzq-qJdDKgQDDKd2d7-XQZtv-6ZU2tw.png?1744643171)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064383/original/BPZy4-09gQZDgA5rETgzBp5cfL2uF-a4MQ.png?1744643181)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064392/original/1SUoBaiQVlKf3CIzrZSPHUG_dZ41O4DkHg.png?1744643191)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045064424/original/0OvsqZI1JfmGPxEE5Nnz7WX1ACOuw0Mf3A.png?1744643209)