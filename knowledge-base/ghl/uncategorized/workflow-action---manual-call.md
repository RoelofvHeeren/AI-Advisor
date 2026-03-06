---
title: "Workflow Action - Manual Call"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003376-workflow-action-manual-call"
category: "Uncategorized"
---

# Workflow Action - Manual Call

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)

##   

## Overview

The **Manual Call** action allows you to create a call task for a user to manually send an call the contact. This is useful when you want a manual intervention for the call. This action is useful for ensuring timely follow-ups, reaching out to leads, or conducting scheduled calls manually. The task created will appear in the Conversations > Manual Actions tab.

  

  

## Action Name

Manual Call

  

## Action Description

The Manual Call Action creates a task in Conversations > Manual Actions tab for a call to a contact manually. The task requires user intervention to call the contact. Once the task is deleted from the actions tab, the contact will move to the next action in the workflow. You can also assign the task to a specific user instead of the default contact owner using the Assign To field in Advanced Settings.

  

  

## Action Details

### **Step-by-Step Guide**

1.  **Choose the Action Type:**
    
    1.  Navigate to your workflow and select "Manual Call" from the list of available actions.
        
2.  **Name Your Action:**
    
    -   Enter a descriptive name for the action, such as "Follow-Up Call."
3.  **Assign To (Advanced Settings):**Optionally select a specific user to assign the task to. This overrides the default contact owner assignment.
    
      
    
      
    
4.  **Go to Converastions > Manual actions tab**
    -   View your task
    -   Delete the task once completed.

###   
**Assign To Behavior**

  

The Assign To field in Advanced Settings allows you to assign the manual call task to a specific user instead of the default contact owner. This is useful when you want a particular team member to handle certain calls regardless of who owns the contact.  
  

**Assignment logic:**

-   If a user is selected and has contact access, the task is assigned to that user.
-   If a user is selected but does not have contact access, the task falls back to the contact owner.
-   If no user is selected, the task defaults to the contact owner.
-   If neither the selected user nor contact owner is available, the task is marked as Unassigned.

  

##### ****Execution Logs:****

-   The action logs will show a manual call action with a message "Manual Call added to the manual queue". This helps in tracking the of your call.

  

**Important:** 
The Manual Call action only progresses the workflow when the task is explicitly deleted from the Manual Actions tab. Simply calling the contact from the Contacts page or any other area will not complete the task or move the workflow forward.

  

  

## **Example**

**Scenario:** A business wants to ensure that a sales representative follows up with every new lead within 24 hours of their initial inquiry. Once the call is complated, delete the task to move to next step in workflow.

**Workflow Setup:**

-   **Trigger:** New Contact Created
-   **Action:**Manual Call
    -   **Name:** "Lead Follow-Up Call"

**Outcome:** The sales team member receives a task to call the new lead, ensuring a timely follow-up, which can significantly increase the chances of conversion.

* * *

## **Frequently Asked Questions**

  

**Q: Can I manually delete the Manual Call task?**

Yes! You must manually delete the task in the **Conversations > Manual Actions** tab after completing the call. This step tells the system to move the contact to the next action in the workflow.

  

**Q: Can I assign the manual call task to someone other than the contact owner?**

Yes! Use the Assign To field in Advanced Settings to select a specific user. The task will be assigned to that user if they have contact access. Otherwise, it falls back to the contact owner or is marked as Unassigned.

  

**Q: What happens if the assigned user doesn't have access to the contact?**

If the selected user does not have contact access, the task automatically falls back to the contact owner. If the contact owner is also unavailable, the task is marked as Unassigned.