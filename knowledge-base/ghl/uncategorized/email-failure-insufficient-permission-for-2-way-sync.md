---
title: "Email Failure: Insufficient Permission for 2-Way Sync"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006053-email-failure-insufficient-permission-for-2-way-sync"
category: "Uncategorized"
---

# Email Failure: Insufficient Permission for 2-Way Sync

If you are seeing an email error that says **insufficient permission**, it means Gmail is blocking email sending due to missing or revoked permissions.

This usually happens in the following scenarios:

1.  **Password Changed** – Your email password was changed after the integration was set up.
    
2.  **Access Revoked** – The LeadConnector app’s access was disconnected from your Gmail account settings.
    
3.  **Incomplete Permission Granted** – At the time of integration, all required permissions (scopes) were not selected when authorizing Gmail access.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051781890/original/JIAaHOUEO4V968R9oZ4xZoUEL6ILb6lB2g.png?1755505153)
    

* * *

## **How to Fix This**

### Step 1: Reconnect 2-Way Sync

-   Clear your browser **cache and cookies**.
    
-   Go to **Settings → Email → 2-Way Sync**.
    
-   Reconnect your Gmail account and make sure all permissions requested are granted.
    

### Step 2: Remove & Reconnect (if issue persists)

If the error still occurs:

1.  Go to your **Google Account → Security → Third-party apps with account access**.
    
2.  Remove the **LeadConnector app**.
    
3.  Return to your LeadConnector account and re-connect Gmail for 2-way sync.
    

This will refresh the connection and resolve insufficient permission issues.

* * *

## **Important Notes**

-   Always grant **all requested permissions** during integration.
    
-   If your password changes, you will need to reconnect the integration.
    
-   Ensure the connected Gmail account has the necessary sending/receiving permissions.