---
title: "How to Restore Deleted Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002639-how-to-restore-deleted-workflow"
category: "Uncategorized"
---

# How to Restore Deleted Workflow

  

  

**TABLE OF CONTENTS**

-   [What is this feature?](#What-is-this-feature?)
-   [How to restore deleted workflows?](#How-to-restore-deleted-workflows?)
-   [Permissions?](#Permissions?)
-   [FAQs](#FAQs)

  

### **What is this feature?**

  

This feature gives the ability to the user to restore the workflows that are deleted. 

  

### **How to restore deleted workflows?**

  

-   A new tab named "Deleted" is added in the workflow list page.
-   User can go to the tab and all the workflows that are deleted will populate here.
-   User can click on the "Restore" button for the workflow they want to restore.
-   To delete the workflow user has to type in the workflow name.

  

  

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027375983/original/YCrdKoZiAzOKTfCFLkf1zEpOixNX7y2yOQ.jpeg?1718012597)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027376022/original/95nUTMi604NR3kbUz-beus1GqsiUCeiGTQ.png?1718012617)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027936492/original/PbLj1rf4P0x6fhUXtqNSPxUy0luRl9twtQ.png?1718884397)

###   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027376102/original/oEQzixeHxY0uq9txOqlff8_iFQzDHNNMHw.png?1718012648)

###   

### **Permissions?**

  

Only the Location and Agency Admins will have the functionality to use this feature.

-   The restored workflow will not restore the permission it had before getting deleted, it will move to the root level.

  

### **FAQs**

  

**Q: For how long will the deleted workflows be present in the "Deleted" tab?**

A: The workflows will be removed from the "Deleted" tab after 30 days.

  

**Q: Can I delete the workflow I just restored?**

A: No, the restored workflows can't be deleted for the next 48 hours.

  

**Q: Can I restore the workflow I just deleted?**

A: You will be able to restore the workflow post 30 minutes of deleting the workflow as the deleting process will be WIP.

  

**Q: Will my workflow be in published state post restoring?**

A: No, upon successful restoration, the workflow will be placed in Draft stage.

  

**Q: What will happen to deleted workflow in case of location transfer?**

A: For the new location, deleted workflows from the old location will no longer be shown. Instead, only the deleted workflows from the new location will be displayed.

**Q: Will all the information be available in the workflow after restoring it?**

A: Below mentioned are the features related to the workflow that is being restored - 

-   On restoring a workflow the contacts information in enrolment history and execution logs will stay intact.
-   If there are any contacts which are in wait step, those will get removed from that particular execution
-   The restored workflow will retain its original triggers and actions with the same configuration.
-   If there were any contacts in the workflow when it was deleted, those wont be restored.