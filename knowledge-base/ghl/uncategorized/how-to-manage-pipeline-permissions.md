---
title: "How to Manage Pipeline Permissions"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006523-how-to-manage-pipeline-permissions"
category: "Uncategorized"
---

# How to Manage Pipeline Permissions

Control exactly who can see or change each sales pipeline, keep sensitive deals private, and give every team member a clutter-free view that matches their role. This article shows how to manage Pipeline Permissions in HighLevel.

  

* * *

**TABLE OF CONTENTS**

-   [What are Pipeline Permissions?](#What-are-Pipeline-Permissions?)
-   [Key Benefits of Pipeline Permissions](#Key-Benefits-of-Pipeline-Permissions)
-   [How To Manage Pipeline Permissions](#How-To-Manage-Pipeline-Permissions)
-   [Sharing Modes for Pipeline Permissions](#Sharing-Modes-for-Pipeline-Permissions)
-   [Access Levels for Pipeline Permissions](#Access-Levels%C2%A0for-Pipeline-Permissions)
-   [Audit Logs & Safeguards for Pipeline Permissions](#Audit-Logs-&-Safeguards-for-Pipeline-Permissions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

## **What are Pipeline Permissions?**

  

Pipeline Permissions define visibility and editing rights for individual pipelines inside Opportunities. Admins can grant access to everyone, target specific roles/users, or explicitly exclude users—without changing broader sub-account roles. This granular visibility keeps data secure and lets sales teams focus only on the deals that matter to them.

* * *

## **Key Benefits of Pipeline Permissions**

  

-   **Consistency:** preserve stage names/order while allowing reps to work deals.  
      
    
-   **Data privacy:** hide revenue/board data from contractors or new staff.  
      
    
-   **Granular control:** share with all, specific users, or exclude exceptions.  
      
    
-   **Auditability:** track who changed pipeline settings for compliance needs.  
      
    
-   **Cross-platform:** the same permissions apply on web and the HighLevel mobile app.  
      
    
-   **Dashboards parity:** widgets and metrics honor pipeline access and Assigned Data.

* * *

## **How To Manage Pipeline Permissions**

  

Follow these steps to configure who sees and edits each pipeline while protecting stage structure and sensitive revenue data.

  

1.  Go to **Opportunities → Pipelines**.  
      
    ![](https://jumpshare.com/share/Ios9ymH4r1c5gM8yvDxx+/Screen+Shot+2026-02-09+at+7.31.12+PM.png)  
      
    
2.  Click the **Key** icon next to the pipeline name to open **Manage permissions**.  
      
    ![](https://jumpshare.com/share/KIWixyBYGFKfP7dFSurB+/Screen+Shot+2026-02-09+at+7.34.08+PM.png)  
      
    
3.  Choose a **Sharing mode**: Share with all users, Share with selected users/roles, or Exclude specific users.  
      
    ![](https://jumpshare.com/share/uW4VpLaqpDTccl4woHI0+/Screen+Shot+2026-02-09+at+7.24.56+PM.png)  
      
    
4.  For each included user/role, set an **Access level**: **View Only,** **Edit**, or **No Access**.  
      
    ![](https://jumpshare.com/share/MefKbpikfyLgjuWSgt41+/Screenshot+2026-02-09+at+7.38.01%E2%80%AFPM.png)  
      
    
5.  Click **Copy link** to share direct access with teammates who already have permission. (Optional)  
      
    ![](https://jumpshare.com/share/PoctQ4SHFuobYR1mTpYa+/Screen+Shot+2026-02-09+at+7.40.13+PM.png)  
      
    
6.  Click **Save** to apply.  
      
    ![](https://jumpshare.com/share/XGgwPAFOvDpeK3bm2UsL+/Screen+Shot+2026-02-09+at+7.41.54+PM.png)
    

* * *

## **Sharing Modes for Pipeline Permissions**

  

Three flexible ways to share each pipeline let you mirror any org structure.  
  

-   **Share with All Users:** grant everyone View Only, Edit or No Access in one click.  
      
    
-   **Share with Selected Users:** pick individual users/roles and set View Only, Edit, or No Access for each.  
      
    
-   **Exclude specific users:** keep the pipeline global, then remove access for a few exceptions.

  
![](https://jumpshare.com/share/uW4VpLaqpDTccl4woHI0+/Screen+Shot+2026-02-09+at+7.24.56+PM.png)

* * *

## **Access Levels** **for Pipeline Permissions**

  

Clear labels make it obvious what each person can do.

  

**Note:** **Admin** user will always have **full** **access** to the pipeline.

  

-   **View Only:** move and update opportunities, but cannot add/edit/delete stages or pipelines.  
      
    
-   **Edit:** full control to add, edit, and delete pipeline stages (including the pipeline itself).  
      
    
-   **No Access:** the pipeline is completely hidden in web, mobile, and API responses.

  

![](https://jumpshare.com/share/MefKbpikfyLgjuWSgt41+/Screenshot+2026-02-09+at+7.38.01%E2%80%AFPM.png)

* * *

## **Audit Logs & Safeguards for Pipeline Permissions**

  

HighLevel **automatically logs** every create, update, or revoke action with user, pipeline, action, and timestamp for **60 days**. This audit trail simplifies troubleshooting and compliance reviews. 

  

1.  Navigate to **Settings → Audit Logs.**  
      
    **![](https://jumpshare.com/share/OZguNUBFCClOrApXHjfL+/GIF+Recording+2026-02-09+at+7.58.37+PM.gif)**  
      
    
2.  Filter by **User**, **Module** - **Pipeline Permissions, Actions, Date Range** to view who changed what, and when.  
      
    ![](https://jumpshare.com/share/yBJXEproMLpU1nwCIQuF+/Screen+Shot+2026-02-09+at+8.03.57+PM.png)  
      
    
3.  The system also **prevents you from revoking access from anyone who currently owns opportunities in that pipeline**. You’ll be prompted to reassign ownership first.   
      
    ![](https://jumpshare.com/share/yEBWJSWsfvOYhJoFDBjC+/sHUEjYNe0ST15mQhinHzyua2gUV8i1XCAA.jpeg) 

* * *

## **Frequently Asked Questions**

  

**Q: What’s the difference between “View Only” and “No Access”?**

View-only users can still move or update their assigned opportunities inside the pipeline. No Access hides the pipeline completely.

  

**Q: What if a user already owns opportunities and I set them to No Access?**

High-level blocks that change. Reassign or delete their opportunities first, then remove access.

  

**Q: Do permissions sync to the mobile app?**

Yes. The same rules apply across web, iOS, Android, and all API responses.

  

**Q: Can I bulk-assign permissions to a role instead of each user?**

Yes—roles appear in the selector. Everyone in that role inherits the chosen level.

  

**Q: Will permission changes break active automations or webhooks?**

No. Automations continue to run. However, API calls made with a user token that lacks access will return an empty pipeline list.

  

**Q: Is there an “Owner Only” option?**

Use “Share with selected users” **\>** choose the owner **\>** set others to No Access for a true owner-only pipeline.

  

**Q: How long are Audit Logs retained?**

60 days of history are available for download or review.

* * *

### **Related Articles**

  

-   [Understanding Pipelines](https://help.gohighlevel.com/en/support/solutions/articles/155000001982)  
      
    
-   [Step-by-Step Guide: Creating Pipelines](https://help.gohighlevel.com/en/support/solutions/articles/155000001985)  
      
    
-   [How to Color-Code Opportunity Pipelines (Smart Tags)](https://help.gohighlevel.com/en/support/solutions/articles/155000006642)  
      
    
-   [Deleting and Restoring Opportunities & Pipelines](https://help.gohighlevel.com/en/support/solutions/articles/155000002041)