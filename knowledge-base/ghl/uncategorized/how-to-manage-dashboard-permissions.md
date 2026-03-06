---
title: "How To Manage Dashboard Permissions"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001532-how-to-manage-dashboard-permissions"
category: "Uncategorized"
---

# How To Manage Dashboard Permissions

Dashboards can be private to their creator, or they can be shared with different roles at different access levels.

* * *

**TABLE OF CONTENTS**

-   [What Are Dashboard Permissions?](#What-Are-Dashboard-Permissions?)
-   [Manage Dashboard Permissions](#Manage-Dashboard-Permissions)[](#Set-Permissions-On-A-New-Dashboard)
-   [Set Permissions On A New Dashboard](#Set-Permissions-On-A-New-Dashboard)
-   [Set Permissions On An Existing Dashboard](#Set-Permissions-On-An-Existing-Dashboard)
-   [Agency vs Account Views](#Agency-vs-Account-Views)[](#Agency-View-Of-Dashboard-Permissions)
-   [Agency View Of Dashboard Permissions](#Agency-View-Of-Dashboard-Permissions)[](#Account-View-Of-Dashboard-Permissions)
-   [Account View Of Dashboard Permissions](#Account-View-Of-Dashboard-Permissions)
-   [Roles and Permissions Hierarchy](#Roles-and-Permissions-Hierarchy)
-   [Export data](#Export-data)

* * *

## **What Are Dashboard Permissions?**

  
Dashboards offer the following levels of permissions:

  

<table data-identifyelement="516" style="width: 100%;"><tbody data-identifyelement="517"><tr data-identifyelement="518"><td data-identifyelement="519" dir="ltr" style="width: 17.0613%; background-color: rgb(209, 213, 216);">Level</td><td data-identifyelement="521" dir="ltr" style="width: 82.9387%; background-color: rgb(209, 213, 216);">Description</td></tr><tr data-identifyelement="523"><td data-identifyelement="524" dir="ltr" style="width: 17.0613%;">FULL</td><td data-identifyelement="525" dir="ltr" style="width: 82.9387%;">Gives the person the ability to create, edit, share, and delete Dashboards</td></tr><tr data-identifyelement="526"><td data-identifyelement="527" dir="ltr" style="width: 17.0613%;">EDIT</td><td data-identifyelement="528" dir="ltr" style="width: 82.9387%;">Gives the person the ability to edit a dashboard and the widgets. The person isn't able to delete the dashboard.</td></tr><tr data-identifyelement="529"><td data-identifyelement="530" dir="ltr" style="width: 17.0613%;">VIEW</td><td data-identifyelement="531" dir="ltr" style="width: 82.9387%;">Gives the person read-only access to a Dashboard</td></tr><tr><td dir="ltr" style="width: 17.0613%;">NO ACCESS</td><td dir="ltr" style="width: 82.9387%;">Restricts access to the dashboard entirely</td></tr></tbody></table>

  

Here are how different actions on dashboards work for different level of permissions

  

<table data-identifyelement="542" style="width: 100%;"><tbody data-identifyelement="543"><tr data-identifyelement="544"><td data-identifyelement="545" style="width: 18.0362%; background-color: rgb(209, 213, 216);"><br data-identifyelement="546"></td><td data-identifyelement="547" style="width: 11.2814%; background-color: rgb(209, 213, 216);">FULL</td><td data-identifyelement="549" dir="ltr" style="width: 11.8384%; background-color: rgb(209, 213, 216);">EDIT</td><td data-identifyelement="551" dir="ltr" style="width: 10.4468%; background-color: rgb(209, 213, 216);">VIEW</td><td data-identifyelement="553" dir="ltr" style="width: 15.6935%; background-color: rgb(209, 213, 216);">NO ACCESS</td><td data-identifyelement="555" dir="ltr" style="width: 21.6324%; background-color: rgb(209, 213, 216);">PRIVATE DASHBOARD</td><td data-identifyelement="557" dir="ltr" style="width: 10.8548%; background-color: rgb(209, 213, 216);">OWNER</td></tr><tr data-identifyelement="559"><td data-identifyelement="560" dir="ltr" style="width: 18.0362%;">Manage Permissions</td><td data-identifyelement="561" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="565" style="width: 11.8384%;">﻿❌</td><td data-identifyelement="568" style="width: 10.4468%;">﻿❌</td><td data-identifyelement="571" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="574" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="578" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="582"><td data-identifyelement="583" dir="ltr" style="width: 18.0362%;">Delete Dashboard</td><td data-identifyelement="584" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="588" style="width: 11.8384%;">﻿❌</td><td data-identifyelement="591" style="width: 10.4468%;">﻿❌</td><td data-identifyelement="594" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="597" style="width: 21.6324%;">❌﻿</td><td data-identifyelement="601" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="605"><td data-identifyelement="606" dir="ltr" style="width: 18.0362%;">Set as Default Dashboard</td><td data-identifyelement="607" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="611" style="width: 11.8384%;">﻿❌</td><td data-identifyelement="614" style="width: 10.4468%;">﻿❌</td><td data-identifyelement="617" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="620" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="624" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="628"><td data-identifyelement="629" dir="ltr" style="width: 18.0362%;">Edit Dashboard</td><td data-identifyelement="630" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="634" dir="ltr" style="width: 11.8384%;">✅</td><td data-identifyelement="637" style="width: 10.4468%;">﻿❌</td><td data-identifyelement="640" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="643" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="647" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="651"><td data-identifyelement="652" dir="ltr" style="width: 18.0362%;">Clone Dashboard</td><td data-identifyelement="653" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="657" dir="ltr" style="width: 11.8384%;">✅</td><td data-identifyelement="660" style="width: 10.4468%;">﻿❌</td><td data-identifyelement="663" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="666" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="670" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="674"><td data-identifyelement="675" dir="ltr" style="width: 18.0362%;">View Dashboard</td><td data-identifyelement="676" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="680" dir="ltr" style="width: 11.8384%;"><br data-identifyelement="681">✅﻿</td><td data-identifyelement="684" dir="ltr" style="width: 10.4468%;">✅</td><td data-identifyelement="687" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="690" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="694" style="width: 10.8548%;">﻿✅﻿</td></tr><tr data-identifyelement="698"><td data-identifyelement="699" dir="ltr" style="width: 18.0362%;">Duplicate to another Sub-Account (Only Agency Level)</td><td data-identifyelement="700" style="width: 11.2814%;">﻿✅﻿</td><td data-identifyelement="704" dir="ltr" style="width: 11.8384%;">✅</td><td data-identifyelement="707" dir="ltr" style="width: 10.4468%;">✅</td><td data-identifyelement="710" style="width: 15.6935%;">﻿❌</td><td data-identifyelement="713" style="width: 21.6324%;">﻿❌﻿</td><td data-identifyelement="717" style="width: 10.8548%;">﻿✅﻿</td></tr></tbody></table>

  

Only dashboard Owners or roles with Full permission are able to edit a dashboard's permissions.  
  
Agency Admins always have Full access to all non-private dashboards.  
  
Only Account Admin or Agency roles with full access to a dashboard are able to set it as a default dashboard.  
  
Only Agency roles are able to duplicate a dashboard to another subaccount.

* * *

## **Manage Dashboard Permissions**

### **Set Permissions On A New Dashboard**

  

**Step 1: Add A Dashboard**

  

Navigate to Dashboard, click on the Dashboard Selection menu (blue), then click on Add Dashboard.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433881/original/rQJh1RSrr244FcvqH8VsYlSNaL1_5L9_6A.png?1743641657)

  

  

**Step 2: Select Blank Dashboard**

  

Under Create a Blank Dashboard, click Select.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433890/original/lpbrI6m-ixLatlPsrrpGNDCwvkylimB_Fw.png?1743641724)

  

  

**Step 3: Set Permissions and Save**

  

On the New Dashboard modal, leave the dashboard private, or turn that off to access sharing permissions. When you are happy with the settings, click Confirm to create the new dashboard with those permissions.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433908/original/9V9Sr9PLG29YqUu0VXW1O2t2yRRyqmHvdQ.png?1743641801)

* * *

## **Set Permissions On An Existing Dashboard**

  

**Step 1: Action Manage Permissions**

  

On your existing dashboard, click the 3-dot "action menu", then click Manage Permissions.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433750/original/XBQjE4b9QWgmSCGpAV3ShVjvdPCuPizE5g.png?1743641029)

  

  

**Step 2: Set Permissions and Save**

  

Use the Private toggle to switch between private (only yourself) or sharing permissions.

  

When you are satisfied with your permissions changes, click Save to close the modal and return to the dashboard.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044433989/original/whua1cN1ou81Jrr3_UI7SGEnO-PPebUdng.png?1743642044)

* * *

## **Agency vs Account Views**

  

Permissions screen and options changes as per the role of the logged in user

  

### **Agency View Of Dashboard Permissions**

  

Agency Admins will always have full access to all dashboards except those marked private by their creator. In the Agency view, there are three roles with access settings: Agency User, Account Admin, and Account User.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044434191/original/ag_owqTRkCZiAF5mHoJ3MUHYMr0kLRkY-g.png?1743643164)  

  

### **Account View Of Dashboard Permissions**

  

In the Account view there are two roles with access settings: Account Admin and Account User. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023290478/original/LNohQGZJfVvUZVBvP4IWBFbbhDDct6fjHA.png?1711017852)

  

* * *

## **Roles and Permissions Hierarchy**

  

Dashboard Permissions follow a clear hierarchy to ensure smooth management of access levels:

  

Agency Admins > Agency Users > Account Admins > Account Users.

  

Permissions for higher-level roles will override permissions for lower-level roles. Lower-level roles cannot posess higher permissions than higher-level roles.

  

For example, if a dashboard is set to Account Admin:Edit and Account User:Edit is changed to Account Admin:View, then Account User will be automatically changed to View as well.

* * *

## **Export data**

  

The Export data permission controls whether a user can export data from dashboard widgets. This helps teams share reports while giving admins control over when dashboard data can be downloaded.

* * *

**Frequently Asked Questions**

  

**Q: What happens if no permissions are set?  
**By default, dashboards are visible to all users unless restricted.

  

**Q: What does "Only Assigned Data" restrict exactly?  
**It filters dashboard widgets to only show data related to the user's assigned records (contacts, opportunities, etc.).

  

**Q: How do I remove a user or role from a dashboard?  
**Re-open the permissions modal for the dashboard and uncheck the user or role.

* * *

**Related Articles**

  

-   [How to Edit a dashboard](https://help.gohighlevel.com/en/support/solutions/articles/155000001536)  
      
    
-   [How To Clone A Subaccount Dashboard](https://help.gohighlevel.com/en/support/solutions/articles/155000001534)  
      
    
-   [How To Pin Favorite Dashboards](https://help.gohighlevel.com/en/support/solutions/articles/155000001535)[](https://help.gohighlevel.com/en/support/solutions/articles/155000001535)