---
title: "Monday.com - Actions and Triggers in Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007216-monday-com-actions-and-triggers-in-workflows"
category: "Uncategorized"
---

# Monday.com - Actions and Triggers in Workflows

Connect Monday.com to HighLevel Workflows to automate project execution and keep CRM, tasks, and statuses aligned without Zapier, Make, or custom webhooks. Use native actions today to create, update, and find board items. Triggers are coming soon to let Monday events start or branch workflows in real time.

* * *

**TABLE OF CONTENTS**

-   [What is the Monday.com Integration?](#What-is-the-Monday.com-Integration?)
-   [Key Benefits of the Monday.com Integration](#Key-Benefits-of-the-Monday.com-Integration)
-   [Prerequisites](#Prerequisites)
-   [Connecting Your Account](#Connecting-Your-Account)
-   [Monday.com Triggers (Coming Soon)](#Monday.com-Triggers-\(Coming-Soon\))
-   [Monday.com Actions (Available Now)](#Monday.com-Actions-\(Available-Now\))
-   [Test Action](#Test-Action)
-   [How to Set Up a Workflow with Monday.com](#How-to-Set-Up-a-Workflow-with-Monday.com)
-   [Use Cases & Patterns](#Use-Cases-&-Patterns)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Monday.com Integration?**

  

The Monday.com integration connects HighLevel Workflows directly to your Monday boards. Workflows can create and update Monday records or look them up by ID or column values. As triggers roll out, Monday events will be able to start or branch workflows automatically for true, event-driven automation.

* * *

## **Key Benefits of the Monday.com Integration**

  

These benefits help you decide when to use the native integration versus external bridges. Each point addresses a common agency operations need—speed, accuracy, and cost.

  

-   **Two-platform visibility:** changes in one tool can be reflected in the other via workflows.  
      
    
-   **Lower integration cost:** replace third-party bridges like Zapier/Make with native steps.  
      
    
-   **Faster handoffs:** launch delivery tasks as soon as CRM stages change.  
      
    
-   **Fewer errors:** avoid manual copy/paste between CRM and project boards.  
      
    
-   **Reusable IDs:** capture **Item ID** once with **Test Action** and reuse it later.  
      
    
-   **Scalable patterns:** standardize project templates across sub-accounts.
    

* * *

## **Prerequisites**

  

Verifying access and permissions up front prevents most setup errors and speeds up testing. Use this checklist before building your first workflow.

  

-   A HighLevel sub-account with **Workflows** access.  
      
    
-   A Monday.com account with permission to **view and edit** the target **workspace, boards, groups, and items**.  
      
    
-   Your **Monday.com API key** available for authentication.  
      
    
-   Clarity on **which columns** you’ll read/write (e.g., Status, People/Owner, Date, Text, Number).
    

* * *

## **Connecting Your Account**

  

Connecting from either the workflow step or the Integrations page ensures HighLevel can securely access your Monday workspace and boards. Choose the path that best matches your role and process.  
  

1.  In HighLevel, open **Automation → Workflows** and add any ClickUp action or trigger.  
      
    → If not connected, click Connect Now and sign in to ClickUp to approve access.  
      
    → If already connected, fields load instantly in the step.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065156523/original/mm80WrujjgmF72gGCBzytc9zSes0mggiiQ.png?1771407450)  
      
    
2.  Alternate path: Sub-Account settings → Integrations → ClickUp → Connect.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065156149/original/JmACc65iauX7lVeFSbovwk2s-44OP9H-vg.png?1771407219)

* * *

## **Monday.com Triggers (Coming Soon)**

  

Triggers let Workflows start or branch automatically from Monday events. Plan your logic now and switch to triggers once they’re live to remove manual starts or polling workarounds.  
  

| **Trigger** | **What it does** |
| --- | --- |
| Any Column Value Changed in Board | Fires when a specified column (Status, People, Date, etc.) changes on an item. |
| Any Item Moved to a Group | Fires when an item is moved from one group to another on a board. |
| New Board | Fires when a new board is created in the connected workspace. |
| New Item in a Board | Fires when a new item is added to a selected board. |
| New Subitem in Board | Fires when a subitem is created under an item on the board. |
| New Update in Board | Fires when a new update/comment is added to an item. |
| New User | Fires when a new user joins the Monday workspace. |

* * *

## **Monday.com Actions (Available Now)**

  

Actions enable Workflows to create, modify, or locate Monday data. Use **Test Action** to validate your connection, preview live schema, and capture returned fields (like **Item ID**) for downstream steps.

  

| **Action** | **Purpose** |
| --- | --- |
| Create New Board | Create a new board and return its Board ID for later steps. |
| Create New Group | Create a group within a board and return the Group ID. |
| Create New Column | Add a column (Status, Date, People, etc.) to a board. |
| Create New Item | Create an item in a group and return the Item ID for reuse. |
| Create New Subitem | Create a subitem under an item and return the Subitem ID. |
| Update Item | Update an item’s mapped columns (Status, People, Date, Text, etc.). |
| Update Subitem | Update a subitem’s mapped columns. |
| Archive Board | Archive a completed board to keep workspaces tidy. |
| Archive Group | Archive a completed group on a board. |
| Delete Item | Permanently delete an item (irreversible). |
| Delete Group | Permanently delete a group (irreversible). |
| Get Board Items | Retrieve items from a board (may paginate on large boards). |
| Find Items by Column Value | Locate items using specific column values (Status, People, custom). |
| Find Items by ID | Fetch a specific item when you already have its Item ID. |

* * *

## **Test Action**

  

Use **Test Action** in any Monday.com step to validate your connection, preview live schema, and capture returned fields (like **Item ID**) for downstream steps—reducing mapping errors.

  

-   Validates your Monday authentication and selected Board/Group/Item.  
      
    
-   Pulls a live response and **auto-saves the schema** (e.g., `item.id`, `column_values.status.label`).  
      
    
-   Reuse returned fields as **custom values** in later steps (no re-mapping needed).  
      
    
-   Surfaces common errors early (invalid key, permission denied, column mismatch).
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065225631/original/xPW1QPdqPerrwnNS7N_wFqaqvQ3T2-FjaA.png?1771484368)

* * *

## **How to Set Up a Workflow with [Monday.com](http://Monday.com)**

  

Follow these streamlined steps to connect Monday.com, add it to your workflow, and map fields so your boards, groups, and items update reliably—mirroring the ClickUp article’s setup pattern while keeping the flow concise.  
  

#### **Step 1:** Create or open a workflow

  

Go to **Automation → Workflows**, create a new workflow or open an existing one, then name it and select a folder if needed.  
  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065157499/original/neb9ys-zzVi7KodKomQMOR-ymbbZVqCTmA.png?1771407968)_  
  

#### **Step 2:** Choose a trigger

  

Monday.com triggers are **Coming Soon**. Start with another trigger (e.g., **Opportunity Status Changed**, **Form Submitted**, or **Schedule**) and configure any filters you require; you can switch to a Monday.com trigger later without rebuilding downstream steps.

  

  

#### **Step 3:** Add a Monday.com action step

  

Click the **+** icon to add a step, search for **Monday.com**, and select the needed action such as **Create New Item**, **Update Item**, or **Find Items by Column Value**. If prompted, click **Connect Now** and authenticate your Monday.com account.  
  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065157995/original/H0p1ZSOc31LWg1x2aL8V0lWBK6yiWQlasA.png?1771408203)_

  

  

#### **Step 4:** Select your Workspace, Board, and Group

  

In the action configuration, choose the **Workspace**, select the target **Board**, and, if applicable, pick the **Group** where the action should apply.

  

  

**Step 5:** Map fields to Monday columns

  

Provide the required values such as **Item name**, then map any additional columns you want to write—like **Status**, **People/Owner**, **Date**, or **Text**—ensuring each value matches the corresponding Monday **column type**. For update or delete actions, include the relevant **Item ID**, **Subitem ID**, **Group ID**, or **Board ID**.  
  
_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065225584/original/ECDb0YN54JnTGoMeoB67wv3vkMVNCwmSfw.png?1771484291)_

  

  

#### **Step 6:** Add follow-up steps (optional)

  

Build conditions or branches to handle different outcomes, chain additional Monday.com actions when necessary, and include internal tasks or CRM updates to keep stakeholders informed.

  

  

#### **Step 7:** Save and publish

  

Click **Save**, then **Publish** to activate the workflow, run a controlled live test such as moving a deal to the target stage, and verify the expected updates appear on the correct Monday board and group.

* * *

## **Use Cases & Patterns**

  

These patterns mirror common agency processes. Start with the core flow, then add branches, filters, or schedules as your needs grow.

  

  

### **Use Case 1:** Client Onboarding Automation

  

**Goal:** Automatically sync new onboarding items with CRM and team notifications.

  

**Workflow Setup**  
  

-   **Trigger:** New Item in Board (“Client Onboarding”)  
      
    
-   **Actions:**
    
    -   Create or update contact in HighLevel CRM
        
    -   Send Slack message to account manager
        
    -   Add row to Google Sheets for tracking
        
    -   Update Monday item status to “CRM Synced”
        

  

**Result:** Every new onboarding item instantly updates CRM and notifies the team.

  

  

### **Use Case 2:** Project Status → Client Communication

  

**Goal:** Notify clients when a project is completed.

  

**Workflow Setup**

  

-   **Trigger:** Column Value Changed (Status → Completed)  
      
    
-   **Actions:**
    
    -   Send Gmail message to client
        
    -   Create CRM note
        
    -   Archive item in Monday.com
        
    -   Send Slack update to #client-updates
        

  

**R****esult:** Clients and teams are informed automatically—no manual follow-ups.

  

  

### **Use Case 3:** Internal Task Sync (Monday → ClickUp)

  

**Goal:** Keep Monday and ClickUp tasks aligned across teams.

  

**Workflow Setup**

  

-   **Trigger:** New Item in Board (“Design Tasks”)  
      
    
-   **Actions:**
    
    -   Create task in ClickUp
        
    -   Store Monday item ID in ClickUp custom field
        
    -   Send Slack notification
        
    -   Update Monday item with ClickUp task link
        

  

**Result:** Teams work in their preferred tools without losing visibility.

* * *

## **Frequently Asked Questions**

  

**Q: Can I build a bi-directional sync?**  
Yes, use two workflows (one Monday→HighLevel and one HighLevel→Monday) and pass IDs to avoid conflicts.  
  

**Q: Do I need a specific Monday plan?**  
Most actions work with standard access. Advanced board features may require Monday plan tiers configured for your workspace.  
  

**Q: How does billing work?**  
Monday.com steps count toward **premium workflow features**. Agencies can enable and re-bill premium features to sub-accounts.  
  

**Q: Can I update multiple columns at once?**  
Yes. **Update Item** and **Update Subitem** support mapping multiple compatible columns in a single step.

* * *

## **Related Articles**

  

-   ## 
    
    [](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)[](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)[](https://help.gohighlevel.com/support/solutions/articles/155000005671-clickup-actions-triggers-in-workflows)
    
    [ClickUp - Actions & Triggers in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005671-clickup-actions-triggers-in-workflows)  
      
    
-   [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)  
      
    
-   [A List of Workflow Actions (Complete)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)   
      
    
-   [A List of Workflow Triggers](https://help.gohighlevel.com/support/solutions/articles/155000002292-a-list-of-workflow-triggers)   
      
    
-   [How to enable and rebill Premium Features for Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005678-how-to-enable-and-rebill-premium-features-for-workflows)