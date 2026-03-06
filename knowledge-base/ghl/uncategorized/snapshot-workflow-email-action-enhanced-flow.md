---
title: "Snapshot Workflow Email Action – Enhanced Flow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow"
category: "Uncategorized"
---

# Snapshot Workflow Email Action – Enhanced Flow

Template management just got simpler! Only original templates and workflows appear in the target location, with email actions handled automatically in the background.

Ask ChatGPT

####   
**Overview**  
The target location’s template list now only displays original templates and workflows, eliminating the clutter caused by email action templates. These email action templates are still imported and mapped in the background, but they remain hidden from users. This enhancement streamlines the template management process and improves the syncing of workflows and templates.

####   

  

**TABLE OF CONTENTS**

-   [Overview](#OverviewThe-target-location%E2%80%99s-template-list-now-only-displays-original-templates-and-workflows,-eliminating-the-clutter-caused-by-email-action-templates.-These-email-action-templates-are-still-imported-and-mapped-in-the-background,-but-they-remain-hidden-from-users.-This-enhancement-streamlines-the-template-management-process-and-improves-the-syncing-of-workflows-and-templates.)
-   [Benefits](#Benefits)
-   [What’s New](#What%E2%80%99s-New)
-   [How to Use](#How-to-Use)
-   [Note](#Note)
-   [Limitations](#Limitations)
-   [FAQs](#FAQs)

  

#### **Benefits**

-   #### **Clean Interface:** The target location now shows only original templates and workflows.
    
-   **Reduced Clutter:** Only core templates and workflows are visible, improving navigation.
    
-   **Reliable Syncing:** Email action templates are automatically mapped and synced with workflows.
    

#### **✅What’s New**

-   **Clean Target List View:** Only original templates are displayed in the target location’s template list, while email action templates are hidden but still imported in the background.
    
-   **Streamlined Snapshot Listing:** The snapshot modal now only shows original templates and workflows. Email action templates remain hidden but are imported and mapped in the background.
    
-   **Improved Sync Logic:** Syncing works as expected when both the workflow and template are pushed together, or if the template is pushed before the workflow.
    

####   
**⚒️How to Use**

1.  **Take a Snapshot:** From the source location, select the workflows and templates to snapshot.
    
2.  **View in Target Location:** In the target location, only original templates and workflows will appear in the template list.
    
3.  **Automatic Background Management:** Email action templates are automatically imported and mapped to the selected workflows, with no additional user action required.
    

####   

#### **NOTE :** 

#### To ensure expected behaviour, **existing workflows and email actions must be deleted and re-pushed after a snapshot refresh** with the snapshot to apply the latest changes.

  

  

#### **⏳Limitations**

-   **Email Action Availability:** Email actions won't be available, if only the workflow is pushed without its linked template. Mapping and sync will fail if the template is pushed after the workflow. (Known limitation from snapshot)
    
-   **Sync Failures:** Mapping and syncing will fail if the template is pushed after its corresponding workflow.
    
-   **Bulk Deletion Not Supported:** Email actions do not support bulk deletion. Developer help is required for mass deletes.

####   
**❓FAQs**

####   
**Q1: Will email action templates still be imported?**  
**A:** Yes, email action templates will still be imported in the background and mapped to the relevant workflows, but they will not appear in the template list.  
**Q2: What happens if I push only a workflow without its template?**  
**A:** If you push only a workflow without its associated template, email actions will not be available, and syncing will fail.  
**Q3: Can I bulk delete email action templates?**  
**A: ******Bulk deletion of email action templates is not currently supported. For mass deletes, development help is required.********  
**Q4: How do I apply the latest changes?**  
**A: ******To apply the latest changes, delete old workflows and email actions, and then re-push them using the updated snapshot.********  
****Q5: Is the syncing process affected if the template is pushed after the workflow?****  
****A: **Yes, syncing will fail if the template is pushed after the workflow. For proper syncing, ensure the template is pushed before the workflow or both are pushed together.******

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910394/original/FzGnQNGqbCsZG0jxRFErxNMkYETon4ZHkw.png?1754332069)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910424/original/HGMyr4Pb2sXIB0c4a2GGVS9u0_PBQG5U9w.jpeg?1754332109)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910434/original/hm-1E7frTuGBaKnIzLPfd3bvFw0NR2QiWw.png?1754332141)