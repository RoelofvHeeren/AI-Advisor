---
title: "Highlighting & Resolving Errors in a Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004872-highlighting-resolving-errors-in-a-workflow"
category: "Uncategorized"
---

# Highlighting & Resolving Errors in a Workflow

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Why This Feature Matters](#Why-This-Feature-Matters)
-   [Key Features](#Key-Features)[](#Save-time-validation-for-If/Else-and-Wait-actions)
-   [Using Error Resolution AI (Step-by-Step Guide)](#Using-Error-Resolution-AI-\(Step-by-Step-Guide\))[](#Error-Resolution-Types%E2%80%8B)
-   [Error Resolution Types](#Error-Resolution-Types%E2%80%8B)
-   [FAQs](#FAQs)

* * *

  

## **Overview**  

-   The Error Highlight and Error Resolution using AI feature helps you quickly identify, understand, and resolve errors within your workflows using AI.  
      
    
-   This feature provides visual cues, actionable insights, and clear guidance for troubleshooting errors directly from the Error Tab in the side panel.  
      
    
-   Error Highlighting coverage has expanded to detect more misconfigurations before they impact execution. Validation also runs when you click Save, so issues in actions like If/Else and Wait are flagged at the moment you commit changes—not later during live runs.

* * *

  

## **Why This Feature Matters**  

-   **Improves Workflow Reliability:** Quickly highlights and helps resolve errors, ensuring your workflows run smoothly.  
      
    
-   **Saves Time:** Eliminates guesswork by providing direct explanations and suggested fixes for errors.  
      
    
-   **Increases User Confidence:** Makes it easier for users to troubleshoot complex workflows without requiring external support.

* * *

## **Key Features**  
  

Error Highlighting now covers more workflow configurations across actions and triggers, reducing the chance of publishing workflows with incomplete setup.

  

  

**1\. Error Button in Side Panel:**  

-   Located on the left side panel within the Workflow Builder.  
      
    
-   On clicking the button Error panel will open which clearly displays a list of all errors detected.  
      
    
-   Divided into two categories:  
      
    -   **Integration Issues:** Errors related to integrations  
          
        
    -   **Missing Mandatory Fields:** Errors caused by missing critical data in any action or trigger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043843603/original/mutkR7LITuWYwV8PaSfMBD5JiOGlze-4Tg.png?1742819719)

  

**2\. Visual Error Highlighting:**  
  

-   Error icons appear next to actions and triggers (bottom right corner).  
      
    
-   Errors are highlighted for easy identification within the workflow builder.

###   
**Save-time validation for If/Else and Wait actions**

  

HighLevel runs additional validation checks when you click Save. If an If/Else or Wait action is misconfigured, the builder highlights the step and lists the issue in the Errors panel so you can fix it before publishing.

  

Tip: If you’re unsure what an error means, use Resolve through AI in the Errors panel to get guided steps and jump directly to the right configuration area.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043843758/original/CIBlNwX4eJDjal6n3Dug-DrwRmcjJDg8Ng.png?1742819829)

  

**3\.  Error Panel**  
  

-   A new side panel is introduced  
      
    
-   You can check all the errors related a workflow in a single panel  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043843850/original/uKn_iA1gY8cL6R3T5_tazD7qsVxGQ1kopQ.png?1742819881)

  

  

**4\. AI-Powered Error Resolution:**  
  

-   The AI Assistant provides detailed explanations of errors and suggests actionable steps to resolve them.  
      
    
-   Users can view recommendations and apply fixes directly from the AI Assistant.  
      
    
-   Provides a dedicated “Resolve through AI” button for immediate troubleshooting.  
      
    
-   When clicked on the button the AI Assistant will share the resolution steps and the action/trigger side bar will open for configuration.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043843991/original/0L7EI_fqK6WTaTTKzCCN5BLZCMN_TsW-8A.jpeg?1742819949)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043844063/original/9VISRPn3TvHSO25lToLra0lp15-tRFN0zg.jpeg?1742819970)

  

**5\. Disabling Error Tab Visibility:**  
  

-   Users can hide the Error Tab if they don’t want it visible at all times.  
      
    
-   A toggle button is available in the side panel settings allowing users to disable or re-enable the tab as per their preference.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043844132/original/ptfgK4QqE7o4CPQBdqoX9N5lpED10HH7QA.png?1742820020)

* * *

## **Using Error Resolution AI (Step-by-Step Guide)**

  

**Step 1: Identifying Errors**  
  

-   Errors are highlighted in the Workflow Builder with a ⚠️ Error Icon.  
      
    
-   Click on the Error Tab in the side panel to view a complete list of errors.

  

**Step 2: Using the AI Assistant to Resolve Errors**  
  

-   Click on the “Resolve through AI” button next to the relevant error.  
      
    
-   The AI Assistant will open in the left panel and provide:  
      
    Error Explanation: What caused the error.  
      
    Suggested Fixes: Actionable steps to resolve the issue.

  

**Step 3: Applying Fixes**  
  

-   Users can apply the suggested fixes in the action/trigger sidebar.  
      
    
-   If the fix involves external integrations, the AI will guide users to the appropriate configuration settings.

  

**Step 4: Confirmation and Continuation**  
  

-   Once the error is resolved, the Error Icon (⚠️) will disappear, confirming the issue has been fixed.  
      
    
-   Errors are automatically cleared from the side panel list once addressed.

* * *

  

### **Error Resolution Types**  

**1: Integration Issues**  
  

-   **Error:** Integration with Facebook failed due to incorrect authentication.  
      
    
-   **Resolution:**  
    -   The AI Assistant prompts you to reconnect or re-authenticate the integration.

  

**2: Missing Mandatory Fields**  
  

-   **Error:** Snapshot import is missing required fields (e.g., Appointment Date, Custom Fields, etc.).  
      
    
-   **Resolution:**
    -   The AI Assistant lists the missing fields and provides options to either map them or create new ones.

* * *

## **FAQs**

  

**Q. Can I hide the Error Icons permanently?**

A. Yes, you can toggle it off from the side panel settings.

  

**Q. Will my Published workflow move to Draft stage if an error is found?**

A. No, the workflow will not move to Draft stage