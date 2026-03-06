---
title: "Map Quiz Results Directly to CRM Custom Fields"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields"
category: "Uncategorized"
---

# Map Quiz Results Directly to CRM Custom Fields

**Quiz Result → CRM Field Mapping** allows quiz results to automatically populate into contact-level custom fields in your CRM. This gives you direct, structured access to quiz performance data for each contact which you can use for segmentation, personalization, and automation.

* * *

**TABLE OF CONTENTS**

-   [What is Quiz Result → CRM Field Mapping?](#What-is-Quiz-Result%C2%A0%E2%86%92%C2%A0CRM-Field-Mapping?)
    -   [Key Benefits of Quiz Result → CRM Field Mapping](#Key-Benefits-of-Quiz-Result-%E2%86%92-CRM-Field-Mapping)
    -   [Auto-Generated Quiz Result Fields](#Auto-Generated-Quiz-Result-Fields)
    -   [Default Data Types](#Default-Data-Types)
    -   [Real-Time Field Updates on Resubmission](#Real-Time-Field-Updates-on-Resubmission)
    -   [Using Quiz Result Fields in Workflows & Automations](#Using-Quiz-Result-Fields-in-Workflows-&-Automations)
    -   [How To Setup Quiz Result → CRM Field Mapping](#How-To-Setup-Quiz-Result-%E2%86%92-CRM-Field-Mapping)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What is Quiz Result** **→** **CRM Field Mapping?**

  

**Quiz Result → CRM Field** **Mapping** writes a contact’s quiz outcomes, such as overall score and tier, per‑category scores and tiers, and highest/lowest category details, into contact custom fields in HighLevel. Mapping turns one‑off quiz answers into durable CRM attributes.

  

This eliminates the need for manual tagging or external tracking tools. It turns every quiz submission into structured CRM data that you can use to create personalized experiences, trigger specific workflows, and segment contacts with precision.

* * *

## **Key Benefits of Quiz Result → CRM Field Mapping**

  

-   **Auto-Generated fields:** Fields for overall score/tier, category scores/tiers, and highest/lowest category details are created for you.  
      
    
-   **Real‑Time Updates:** The latest submission for the same quiz overwrites the same contact’s fields (no duplicates).  
      
    
-   **Automation-Ready:** Use the mapped fields in workflows, branching, and conditional content.  
      
    
-   **Cleaner segmentation:** Build smart lists based on scores, tiers, or winning categories.  
      
    
-   **Personalized Follow‑Ups:** Tailor emails/SMS/pages based on outcome tiers or categories.
    

* * *

## **Auto-Generated Quiz Result Fields**

  

HighLevel scans the quiz on first submission and builds contact fields that follow a predictable naming pattern. This structure keeps data tidy and searchable. View the examples below:

  

-   {{quiz\_name}} – Overall Score  
      
    
-   {{quiz\_name}} – Overall Score – Tier  
      
    
-   {{quiz\_name}} – {{category\_name}} – Score

* * *

## **Default Data Types**

  

-   **Scores** are stored as Number fields.  
      
    
-   **Tiers and Category Names** are stored as Text fields.  
      
    

This makes the data compatible with all standard CRM filters, workflow conditions, and personalization tools.

* * *

## **Real-Time Field Updates on Resubmission**

  

Every time a contact retakes the same quiz, HighLevel overwrites the existing values instead of creating duplicates. This ensures that automations always reference the latest scores without extra cleanup rules.

* * *

## **Using Quiz Result Fields in Workflows & Automations**

  

Once quiz data is mapped into the CRM, you can use it in multiple ways:

  

  

#### **1\. Segment Contacts**

  

Filter or group contacts based on their quiz performance.

  
Example:

  

-   Create a Smart List of users with “Overall Score ≥ 80.”  
      
    
-   Group users by “Fitness Tier = Beginner” for targeted messages.

  

  

#### **2\. Personalize Automations**

  

Use quiz results to tailor follow-up workflows.

  
Example:

  

-   Send different nurture emails depending on the highest or lowest category.  
      
    
-   Trigger actions when a category score crosses a threshold.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341887/original/PswBIWbnf60aCPzvqQ3xot-yhuO_-B4-2A.png?1763067422)

  

  

#### **3\. Power Conditional Logic**

  

In workflows or campaigns, use mapped fields to create dynamic paths.

  
Example:

  

-   If “{{quiz\_name}} - Diet Tier = Advanced,” send an advanced guide.  
      
    
-   If “{{quiz\_name}} - Fitness Score < 50,” enroll the contact in a beginner plan.

* * *

## **How To Setup Quiz Result → CRM Field Mapping**

  

#### **Step 1:** Open a Quiz

  

-   Navigate to **Sites**  **→** **Quizzes**.  
      
    
-   Select an existing Quiz or click the blue **\+ Add Quiz** button to Create a new one.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341494/original/Ry15_2kbZ9LMUiXqzjR04JqIgapH2PblHA.png?1763066854)  
  

#### **Step 2:** Open Results Page 

  

Scroll to the end of the quiz to the **Re****sults Template**. Click on **Edit Template**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341529/original/AbH7W8JzdprSbSVkSOHkDlS38aZDNb6PKg.png?1763066893)  
  

#### **Step 3:** Enable Custom Fields

  

-   Click the **Settings** button in the upper right corner and expand the **Custom Fields** dropdown to see the automatically created custom fields.  
      
    
-   Under **Custom Fields**, turn on the toggles for the fields you want to sync, such as:  
      
    
    -   Overall Score  
          
        
    -   Overall Score Tier  
          
        
    -   Category-wise Scores and Tiers  
          
        
    -   Highest and Lowest Scoring Categories  
          
        
-   The system will automatically assign a **Custom Field Name** and **Unique Key** for each enabled field.  
      
    
-   Click **Save** once you’ve enabled the fields.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341562/original/qmEabdjiJeLEIy7jy6CProFIqLq2V9WQsw.png?1763066973)  
  

#### **Step 4:** Contact Submits a Quiz

  

When a user completes a quiz, their scores and tiers are automatically captured.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341621/original/zePgg7fj2FGHmtt2M2lngOhSHYq8aXd5Mw.png?1763067123)

  

  

#### **Step 5:** Data is Written to CRM Fields

  

After a quiz is submitted, the selected fields are created and updated in the contact record.

  

Example field names:

  

-   {{quiz\_name}} - Overall Score  
      
    
-   {{quiz\_name}} - {{category\_name}} - Tier  
      
    
-   {{quiz\_name}} - Highest Category - Score

  

If a contact retakes the same quiz, the existing data is overwritten — not duplicated. This keeps contact records clean and accurate.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341782/original/ojRojOGaIAx4WaTqpV5WK0ZE4Qk7cbyiGQ.png?1763067237)

* * *

## **Frequently Asked Questions**

  

**Q: Can I rename or delete the auto-generated fields?**

You can rename or move them into groups, but deleting a field removes historical quiz data from all contacts.

  

**Q: Does the feature work with existing quizzes?**

Yes, as long as the custom fields are toggled on within the quiz settings. Once a contact submits any quiz (new or old), HighLevel creates the fields on the fly.

  

**Q: Are these contact or opportunity fields?**

They are Contact Custom Fields, making them usable in forms, Smart Lists, and contact workflows.

  

**Q: Can I export quiz fields to CSV?**

Absolutely! Exporting contacts includes every custom field, including quiz scores and tiers.

* * *

## **Related Articles**

  

-   [Quiz Builder Guide](https://help.gohighlevel.com/en/support/solutions/articles/155000004126)  
      
    
-   [Customizing Quiz Result Pages](https://help.gohighlevel.com/en/support/solutions/articles/155000006615)  
      
    
-   [How to Use Custom Fields](https://help.gohighlevel.com/en/support/solutions/articles/48001161579)  
      
    
-   [How to Create & Manage Smart Lists](https://help.gohighlevel.com/en/support/solutions/articles/48001062094)  
      
    
-   [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)