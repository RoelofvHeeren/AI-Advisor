---
title: "Workflow Actions - Delete Contact"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003423-workflow-actions-delete-contact"
category: "Uncategorized"
---

# Workflow Actions - Delete Contact

This article provides an overview of the **Delete Contact** action within workflows, how to configure it, and important considerations before using it.

* * *

**TABLE OF CONTENTS**

-   [What is the Delete Contact Action?](#What-is-the-Delete-Contact-Action?)
-   [How to Use the Delete Contact Action](#How-to-Use-the-Delete-Contact-Action)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Delete Contact Action?**

  

The **Delete Contact** action is a powerful tool that allows users to automatically remove all records of a contact from their system. It can be used when contacts meet specific criteria and are no longer needed within the CRM. However, since deleting a contact is irreversible, it is important to configure this action carefully and understand its implications.

* * *

## **How to Use the Delete Contact Action**

  

To use the **Delete Contact** action within a workflow, follow these steps:

  

Remember to **triple check** the filter conditions that qualify a contact for automatic deletion and **test** the workflow before leaving it unattended. It is a good idea to **make your own backups** of contact data and **keep relevant team members informed** about use of the Delete Contact action.

  

  

**Step 1:** Open the Workflow Builder

Navigate to Subaccount > Automations and open the desired workflow or create a new one from scratch or from a recipe.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683086/original/u0cx1mRLK1gmXsIteDcxdqITxu9TJo-6Sw.png?1738188522)

  

  

**Step 2:** Add the action

In the workflow builder, click the plus (+) to open the actions menu. Search or scroll to find the Delete Contact action.

  

Put the Delete Contact action at the end of the workflow. Deleting the contact will be instantaneous so it will terminate the workflow anyway. Any actions after the Delete Contact action will not run.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683126/original/FClehbjOj1HSlOHtl_wxXgxLutnC-Aimqg.png?1738188646)

  

  

**Step 3**: "Configure" the action

The Delete Contact action cannot be configured; there are no settings. It just deletes the contact that is active in the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683193/original/Mu8ynRedaS6nVDdLjbGRwJgUhSsNWgAioA.png?1738188834)

  

  

**Step 4:** Save the action

Click "save action" to create the action in the workflow. You can also test the workflow and publish the workflow when ready.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683264/original/_LohJHHZoMXWc0iaw0pncXmvP4kmjBzjlQ.png?1738188970)

* * *

## **Frequently Asked Questions**

  

**Q: Can I restore a deleted contact?**

A: Contacts deleted through the Delete Contact option can be restored within two months of deletion. See this article for more information: [How To Delete Contacts And Their Data](https://help.gohighlevel.com/en/support/solutions/articles/155000000583-how-to-delete-contacts-and-their-data)

  

**Q: What is deleted along with the contact?**

A: The contact record is deleted and so are all associated data such as conversations, notes, tasks, and activity history is permanently lost. Restoring a deleted contact will not recover this associated data.

  

**Q: Are there alternatives to deletion?**

A: Yes, if you do not want to permanently delete a contact but still need to stop them from progressing through a workflow, consider using the **"Remove from Workflow"** action. This option removes the contact from the specific automation without affecting their data in the system.