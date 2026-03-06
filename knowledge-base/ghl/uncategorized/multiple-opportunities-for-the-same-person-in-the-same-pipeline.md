---
title: "Multiple Opportunities For The Same Person In The Same Pipeline"
url: "https://help.gohighlevel.com/support/solutions/articles/48001066144-multiple-opportunities-for-the-same-person-in-the-same-pipeline"
category: "Uncategorized"
---

# Multiple Opportunities For The Same Person In The Same Pipeline

**Allow Multiple Opportunities per Contact** lets your team track more than one active deal for the same person in the same pipeline. This improves accuracy for renewals, upsells, and multi-offer journeys while keeping automation and reporting aligned. Learn how to enable the setting, avoid workflow conflicts, and apply best practices.

* * *

**TABLE OF CONTENTS**

-   [What is “Allow Multiple Opportunities per Contact”?](#What-is-%E2%80%9CAllow-Multiple-Opportunities-per-Contact%E2%80%9D?)
-   [Key Benefits of Allow Multiple Opportunities per Contact](#Key-Benefits-of-Allow-Multiple-Opportunities-per-Contact)
-   [How To Setup “Allow Multiple Opportunities per Contact”](#%E2%80%8B%E2%80%8BHow-To-Setup-%E2%80%9CAllow-Multiple-Opportunities-per-Contact%E2%80%9D)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is “Allow Multiple Opportunities per Contact”?**

  
Allow Multiple Opportunities per Contact is a sub-account setting in HighLevel that **Allows more Than One Opportunity per contact in the same pipeline.** This unlocks use cases like renewals, add-ons, parallel product lines, and multi-location services while preserving a clean CRM record for each person.

* * *

## **Key Benefits of Allow Multiple Opportunities per Contact**

  
Enabling this feature changes how contacts move through your pipeline and automations. The list below clarifies the practical wins so teams can decide when to apply it and how to minimize duplicate communications.  
  

-   **Renewals & upsells**: Track new revenue events for the same customer without overwriting a prior deal.  
      
    
-   **Parallel offers:** Run separate opportunities for different products or services at the same time.  
      
    
-   **Cleaner automation logic:** Target the correct opportunity via workflow actions when several exist.  
      
    
-   **More accurate forecasting:** See total pipeline value when customers have multiple deals open.  
      
    
-   **Operational flexibility:** Support multi-location or franchise scenarios where the same contact engages more than once.

* * *

## **How To Setup “Allow Multiple Opportunities per Contact”**

  

Correct setup ensures the CRM accepts multiple cards for a contact and your automations behave predictably. Follow the steps below and then test with a sample record.  
  

1.  Go to **Sub-Account Settings → Objects → Opportunities**  
    Toggle Allow Multiple Opportunities per Contact ON.  
    Click on **Save changes**  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052690324/original/VTTWy0o29_3ZX1Ffbpm53K21G8osCaIoSQ.gif?1756473412)  
      
    
2.  Test by creating two opportunities for the same contact in the same pipeline; confirm both appear and automations run as expected.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052691214/original/jyR-HEBDl3Si9wxxpwy7_jbDHnivNNHTGg.gif?1756473954)

* * *

## **Frequently Asked Questions**

  

**Q: Does turning this setting ON change existing opportunities?**  
Existing opportunity cards remain as they are. Enabling simply allows additional cards for the same contact (including in the same pipeline).  
  

**Q: What happens if I turn the setting OFF later?**  
Existing opportunity cards are not deleted. The system will restrict new duplicate opportunities for the same contact in the same pipeline; review automations to avoid create/update errors.  
  

**Q:** **Can a contact have multiple opportunities across different pipelines even if the setting is OFF?**  
The setting governs **same-contact duplicates within the same pipeline**. Your pipeline model and creation rules determine cross-pipeline behavior; test your workflow logic to confirm.  
  

**Q: How do I make sure automations act on the right card?**  
Use **Find Opportunity** to select earliest/latest or condition-based matches, and set entry filters to prevent unintended re-entry.  
  

**Q:** **Will forecasts double-count revenue?**  
Forecasts and pipeline totals reflect **all** open opportunities; ensure your dashboards and reports are designed for that reality.  
  

**Q: Is this the same as the “Duplicate Opportunity” option inside a workflow step?**  
No. Workflow duplicates control **that action’s** behavior. The global setting controls whether the CRM **allows** multiple cards per contact.  
  

**Q: Do I need to update user permissions?**  
Confirm users can access pipelines and create/update opportunities; adjust roles as needed.  
  

**Q: How do I avoid duplicate messaging when multiples exist?**  
Add guardrails: use **Find Opportunity**, tighten triggers, and apply re-entry rules or suppression conditions.

* * *

## **Related Articles**

  

-   [Understanding Opportunities in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000001983-understanding-opportunities-in-highlevel)  
      
    
-   [Automating Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002048-automating-opportunities)  
      
    
-   [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)  
      
    
-   [Step-by-Step Guide to Creating Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000001999-step-by-step-guide-to-creating-opportunities)