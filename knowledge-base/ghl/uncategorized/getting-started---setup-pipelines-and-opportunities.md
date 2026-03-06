---
title: "Getting Started - Setup Pipelines and Opportunities"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005062-getting-started-setup-pipelines-and-opportunities"
category: "Uncategorized"
---

# Getting Started - Setup Pipelines and Opportunities

Organizing your sales pipeline might sound intimidating, but think of it like setting up your workspace for success—everything has a place, and nothing gets lost. With a structured pipeline, you can track leads effortlessly, automate follow-ups, and close deals swiftly. Ready to get your sales organized? Let's dive in!

* * *

**TABLE OF CONTENTS**

-   [Create Sales Pipeline](#Create-Sales-Pipeline)
-   [Import Contacts as Opportunities](#Import-Contacts-as-Opportunities)
-   [Create Opportunity Manually](#Create-Opportunity-Manually)
-   [Create Opportunity by Automation](#Create-Opportunity-by-Automation)

* * *

## **Create Sales Pipeline**

  

Setting up a new sales pipeline is a breeze, and it helps you visualize exactly where every lead stands in your sales process. Here’s how easy it is to get started:  
  

1.  Navigate to **Opportunities**.  
      
    
2.  Click **Pipelines**.  
      
    
3.  Click **Create New Pipeline**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582275/original/juyyLUC63RVJOoO-VFRQU5DmXJPyR1KiCw.png?1747185927)  
      
    
4.  Fill in the details (name, stages, etc.) and click **Save**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582299/original/hosafNsbFiyMPIKTWvAwcYU_rpnev08erA.png?1747186085)  
      
    

Consider customizing your pipeline stages to match your team's workflow, such as:

-   New Lead
-   Hot Lead
-   Booked Call
-   No Show
-   Delayed
-   Closed
-   Non-responsive  
      
    

Want to dive deeper?

-   [Step‑by‑Step Guide: Creating Pipelines](https://help.gohighlevel.com/support/solutions/articles/155000001985-step-by-step-guide-creating-pipelines)  
      
    
-   [Understanding Pipelines](https://help.gohighlevel.com/support/solutions/articles/155000001982-understanding-pipelines)  
      
    

**Next,** you can import your existing contacts to fill your pipeline**.**

* * *

## **Import Contacts as Opportunities**

  

Got a list of contacts from an event or another platform? Great news—you can easily import them straight into your sales pipeline and turn those leads into opportunities with just a few clicks:  
  

1.  Navigate to **Opportunities**.  
      
    
2.  Click **Import**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582317/original/Zn1BtwdZenzYQukjv876FbzvC4VGCHqg5w.png?1747186171)  
      
    
3.  Select **Opportunities**.  
      
    
4.  Click **Next**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582328/original/oC696YzN-yA3Ea80HnPh88ol08orcSJ36w.png?1747186223)  
      
    
5.  Upload your file.  
      
    
6.  Click **Next**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582334/original/XPHcPeBRLndpPjjzXVsjVhpYlJ-h34zovw.png?1747186283)  
      
    
7.  Map file columns to Opportunity fields.  
      
    
8.  Click **Next**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582343/original/M1E8UukqUVBCGW6oEBKRK5Pdqo_2pQZLRQ.png?1747186348)  
      
    
9.  Verify all information and click **Start Bulk Import**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582368/original/c6Ym2ups1E_UPGWwvQ54c8q_cCgepErDug.png?1747186449)  
      
    

Want more details? Check out our [guide on importing contacts and opportunities via CSV](https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv).

  

**Next,** you might want to manually add opportunities to fine-tune your pipeline.

* * *

## **Create Opportunity Manually**

  

Sometimes, opportunities come in one by one, and adding them manually gives you precise control. Plus, it's quick and intuitive! Here’s how you do it:  
  

1.  Navigate to **Opportunities**.  
      
    
2.  Click **Add opportunity**.  
      
    
3.  Select an existing contact or enter details for a new contact.  
      
    
4.  Fill in the Opportunity details (pipeline name, stage, value, etc.).  
      
    
5.  Click **Create**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046582407/original/RcxPH_183Eo8JrU6o629m-oZD1Ug71KD8A.png?1747186618)  
      
    

Want a thorough walk-through? See our [Step-by-Step Guide to Creating Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000001999-step-by-step-guide-to-creating-opportunities).

* * *

## **Create Opportunity by Automation**

  

Automating opportunity creation keeps your pipeline tidy without the extra clicks. Below is a quick-start example that fires whenever someone submits a form—followed by a note on other triggers you can swap in.  
  

1.  **Open Workflows**  
      
    Go to **Automation → Workflows** in the left menu.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053481776/original/l1zU-0UMV4Uq7-LQOGr8pWzAQ3pNAdOWZw.png?1757510602)  
      
    
2.  **Start a New Workflow**  
      
    Click **\+ Create Workflow** → **Start from Scratch** (or pick a template you want to use).  
      
    
3.  **Add a Trigger – Form Submitted**  
      
    
    -   Click **\+ Add New Trigger** and choose **Form Submitted**.  
          
        
    -   Select the specific form that captures your lead info.  
          
        
    -   Hit **Save Trigger**.  
          
        
4.  **Add an Action – Create/Update Opportunity**  
      
    
    -   Click **+** (Add action button) below the trigger, choose **Opportunity → Create/Update Opportunity**.  
          
        
    -   Pick the **Pipeline** and **Stage** you want new form leads to appear in.  
          
        
    -   Set **Status** to _Open_ (or another status), enter a **Value** if known, and toggle **Allow Opportunity to Move** if you want the record to update when re-entered later.  
          
        
    -   Click **Save Action**  
          
        ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053482607/original/qohmxMv7OL6XTZvbXuPyKD1GpV389ALclA.gif?1757511004)  
          
        
5.  **Save & Publish**  
      
    **Toggle** the **Draft → Publish** button (top-right). Every future form submission now drops straight into the chosen pipeline stage—hands-free.
    

  

**Other Common Triggers & Quick Use Cases**

  

| Trigger | One-Line Use Case |
| --- | --- |
| **Customer Booked Appointment** | Auto-add prospects to “Consult Scheduled” when they book a call. |
| **Contact Tag**  | Move “Hot Lead” contacts into a closing stage the moment the tag is applied. |
| **Facebook Lead Form Submitted** | Pipe leads from FB ads into a “New Facebook Leads” stage for rapid follow-up. |
| **Payment Received** | Create an opportunity in a “Won – Awaiting Onboarding” stage once a purchase is made. |
| **Contact Created** | Start every brand-new contact in “New Lead” to ensure nothing slips through the cracks. |
| **Call Status** | Drop answered inbound calls into a follow-up stage for reps to nurture. |
| **Survey Submitted** | Route completed surveys into a qualification stage for scoring. |

  

**Note******:**** The action **Create/Update Opportunity** stays the same across workflows; only the **trigger** changes. Pick the trigger that best matches how (and when) a lead should appear in your pipeline.