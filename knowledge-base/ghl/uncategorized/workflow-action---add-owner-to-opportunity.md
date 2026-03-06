---
title: "Workflow Action - Add Owner to Opportunity"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity"
category: "Uncategorized"
---

# Workflow Action - Add Owner to Opportunity

## **Overview**

  

The **Add Owner to Opportunity** action in workflows allows you to automatically assign the owner of an existing opportunity. This ensures that opportunity ownership stays aligned with contact ownership as the contact progresses through your pipeline. This action is useful for ensuring that each opportunity has a designated owner who can manage the opportunity’s progress through the sales pipeline.

* * *

**TABLE OF CONTENTS**

-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example](#Example)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **Action Name**

  

**"Add Owner to Opportunity"**

This is the label that appears in the workflow builder when you add this action.

* * *

## **Action Description**

When triggered, **the Add Owner to Opportunity** action sets the **User** you select as the new owner of the opportunity. If your platform settings are configured to sync the contact owner with the opportunity owner, then the contact’s ownership is also updated automatically. You can optionally choose to apply this assignment only to opportunities that are currently unassigned; otherwise, any existing owner will be overridden.  
  

**Important:** This action depends on having an opportunity in context—either because the workflow was triggered by an opportunity or because a prior **Find Opportunity** step located one. If no opportunity is in context, this action does nothing.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046648790/original/EzP31RPCOyWA5XC4K_kOLRXnM9Bmm2YdQA.jpeg?1747259450)**

* * *

## **Action Details**

  

| **Value Name** | **Description** | **Mandatory** |
| --- | --- | --- |
| **Action Name** | A unique label for identifying this step in your workflow. | Yes |
| **User** | The user to be assigned as the opportunity’s owner. Typically a dropdown listing your account’s users. | Yes |
| **Only Apply to Unassigned Opportunities** | A toggle that, when enabled, restricts the ownership assignment to opportunities that currently have **no owner**. If the opportunity already has an owner, it remains unchanged. When disabled, any existing owner is overridden. | No |

###   

### **Sync Settings**

  

-   If **contact and opportunity owners are synced** (configured in **Opportunity Settings**), changing the opportunity owner here will also change the contact’s owner.  
      
    
-   If **contact and opportunity owners are _not_ synced**, only the opportunity owner is changed.  
      
    

### **Edge Cases**

  

-   **Multiple Opportunities**: Even if a **Find Opportunity** step finds multiple potential matches, only **one** (earliest or latest as selected in the Find Opportunity) is ever updated.  
      
    
-   **No Opportunity in Context**: If no opportunity is found or triggered, the action is skipped.

* * *

## **Example**

  

**Scenario**: A workflow identifies high-value leads (via a **Find Opportunity** action) and assigns them to a specific user for priority follow-up.  
  

1.  **Trigger**: A lead qualifies as high-value based on form submission data.  
      
    
2.  **Action**: _Find Opportunity_
    -   **Filters**: _Opportunity Value_ is greater than `5000`
3.  **Action**: _Add Owner to Opportunity_
    -   **Action Name**: “Assign High-Value Lead to Senior Sales Rep”  
          
        
    -   **User**: “Senior Sales Rep”  
          
        
    -   **Only Apply to Unassigned Opportunities**: **Disabled** (to override any existing owner)  
          
        

With this configuration, all opportunities matching the “high-value” criteria found by the **Find Opportunity** step will be assigned to the “Senior Sales Rep,” ensuring immediate attention and follow-up. If the system is set to sync contact and opportunity owners, the contact owner will also be updated accordingly.

* * *

## **Frequently Asked Questions**

  

**Q: Does this action overwrite the current opportunity owner?**

Yes. If the contact has an assigned user, this action will replace the current opportunity owner with that user — even if someone else is already assigned.

  

**Q: What if I want to assign a different user to the opportunity manually?**

Use the Update Opportunity workflow action instead. That action lets you manually select a specific user to assign to the opportunity.  
  

**Q: Will users see the opportunity after being assigned?**

Only if their permissions allow it. If your account enforces "Only Assigned Data" rules, users will need permission to access the opportunity’s pipeline to view or manage the record.

* * *

## **Related Articles**

  

-   [Workflow Action - Update Opportunity](https://help.gohighlevel.com/en/support/solutions/articles/155000004753)  
      
    
-   [Workflow Action - Remove Owner from Opportunity](https://help.gohighlevel.com/en/support/solutions/articles/155000004755)  
      
    
-   [How to Decouple Owners for Contacts and Opportunities](https://help.gohighlevel.com/en/support/solutions/articles/155000002273)  
      
    
-   [User Permissions, Assigned Data, and Owners](https://help.gohighlevel.com/en/support/solutions/articles/48000982601)