---
title: "Gamification/ Leaderboard triggers and actions for Community groups"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004080-gamification-leaderboard-triggers-and-actions-for-community-groups"
category: "Uncategorized"
---

# Gamification/ Leaderboard triggers and actions for Community groups

  
  
**Objective**: This guide helps you set up workflow triggers and actions based on community group membership, focusing on awarding gamification points and handling leaderboard level changes. Learn how to configure filters and ensure workflows behave correctly, even if a user isn't part of the required community group.

  

**TABLE OF CONTENTS**

-   [Community group member leaderboard Level Changed (Trigger)](#Community-group-member-leaderboard-Level-Changed-\(Trigger\))
-   [Grant community group leaderboard points - Action](#Grant-community-group-leaderboard-points---Action)

* * *

### **Community group member leaderboard Level Changed (Trigger)**

-   **Trigger**: This activates when a user’s leaderboard level changes.
-   **Filters**: You need to set filters to specify which groups and levels the trigger applies to. 
-   **Use Case**: Automatically send congratulatory emails or award points when a user reaches a new level.

  

**How to use:**

-   Navigate to the Workflow Setup Page.
-   Choose the Trigger:Select "User Group Gamification Level Changed" from the list of available triggers.
-   Configure Filters: Use filters to specify conditions, such as a particular group or level. This ensures the trigger activates only when these conditions are met.**  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035497574/original/C9pi23EJRV3yn534k69lkToj7u0e5msCRg.png?1730046272)**

### 

### **Grant community group leaderboard points - Action**

**1\. Gamification Points Allocation**

-   **Action:** Ability to grant leaderboard points for any specific triggers.
-   **Points to be Given:** Configurable via a dropdown in the workflow setup. You can specify the number of points and the group to which they apply.
-   **Use Case:** Encourage user engagement by awarding points for completing desired actions, helping them climb the leaderboard.

**2\. How to use:**

1.  Select the "Grant community group leaderboard points" Action:
    -   Choose this action to award points to users who complete specific actions within the group.
2.  Configure Points and Group:
    -   Points: Set the number of points to be awarded.
    -   Group: Use the dropdown to select which group this applies to. This ensures only users from the chosen group are awarded points.
3.  **Note: If member is not part of group, the workflow execution will fail**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035497553/original/7f6crdEbwMzNpdQDW_G6XgQnSJEr6Pju4Q.png?1730046207)**

* * *