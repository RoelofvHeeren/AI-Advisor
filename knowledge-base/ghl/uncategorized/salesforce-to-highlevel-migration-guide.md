---
title: "Salesforce to HighLevel (Migration Guide)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004305-salesforce-to-highlevel-migration-guide-"
category: "Uncategorized"
---

# Salesforce to HighLevel (Migration Guide)

This article outlines the steps necessary to migrate data, operations, and workflows from Salesforce to HighLevel. The objective is to ensure a seamless transition while leveraging HighLevel’s comprehensive features to streamline business processes, enhance customer engagement, and optimize marketing efforts.

* * *

**TABLE OF CONTENTS**

-   [Preparation for Migration](#Preparation-for-Migration)
-   [Export & Migrate Data](#Export-&-Migrate-Data)
-   [Rebuild Opportunities, Websites, and Automations](#Rebuild-Opportunities,-Websites,-and-Automations)
-   [Document, Contract, and Form Management](#Document,-Contract,-and-Form-Management)
-   [Testing and Validation](#Testing-and-Validation)
-   [Team Training and Transition](#Team-Training-and-Transition)
-   [Decommissioning Salesforce](#Decommissioning-Salesforce)

* * *

# **Preparation for Migration**

  

  

### **Step 1:** Review Current Salesforce Setup

-   **Identify Key Assets:** Catalog all essential elements such as leads, contacts, accounts, opportunities, and automation workflows currently in use within Salesforce.  
      
    
-   **Assess Data Volume:** Evaluate the size and complexity of the data to be migrated, including the number of records, custom fields, and automation rules.

  

  

### **Step 2:** Define Migration Objectives

-   **Set Clear Goals:** Determine the primary reasons for migrating to HighLevel, such as cost efficiency, enhanced automation, or unified marketing and CRM tools.  
      
    
-   **Prioritize Features:** Identify critical components for migration, focusing on CRM data, key opportunities, and essential automation workflows.

  

  

### **Step 3:** Prepare Backup

-   **Export Data from Salesforce:** Export all relevant data (contacts, accounts, leads, opportunities, etc.) from Salesforce as CSV or Excel files.  
      
    
-   **Backup Documentation:** Securely store all exported files and related documentation to ensure data safety before starting the migration process.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037342176/original/gxY_tX7eLM5HFwuKM8Gh2grYNLRHiSJ2wQ.png?1732740361)

* * *

# **Export & Migrate Data**

  

  

### **Step 1:** Export Data from Salesforce

-   **Export Contacts:** Go to the Contacts tab in Salesforce and use the export function to download all contacts as CSV or Excel files, ensuring to include all necessary fields such as names, emails, phone numbers, and custom fields.  
      
    
-   **Export Accounts and Opportunities:** Navigate to Accounts and Opportunities tabs, exporting all records including associated details like deal stages, values, and key contacts.  
      
    
-   **Export Leads:** Use the Leads tab to export all active and closed leads, ensuring proper mapping of lead fields and statuses.

  

  

### **Step 2:** Import Data into HighLevel

-   **Import Contacts:** In HighLevel, go to Contacts > Import Contacts and upload the CSV files exported from Salesforce. Map fields correctly to ensure accurate data import.  
      
    
-   **Import Accounts and Opportunities:** Recreate your Salesforce account structure in HighLevel by importing accounts and linking them with the corresponding contacts and opportunities.  
      
    
-   **Import Leads:** Import lead data into HighLevel, ensuring to maintain the integrity of lead statuses and related data during the migration process.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037343992/original/kGtE3M-BdfWoeIQ16l7nDsUe9k84DIVssg.png?1732746583)

* * *

# **Rebuild Opportunities, Websites, and Automations**

  

  

### **Step 1:** Recreate Opportunities in HighLevel

-   **Set Up Pipelines:** In HighLevel, create sales pipelines that reflect the stages used in Salesforce, ensuring all stages are accurately represented.  
      
    
-   **Transfer Opportunities:** Assign opportunities to the appropriate stages within the new HighLevel pipelines, maintaining continuity in sales tracking.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037344025/original/1XqAkuliqatF0bZkichkR2xeN5fFzbGeBg.png?1732746720)

  

  

### **Step 2:** Recreate Landing Pages in HighLevel

-   **Set Up Websites:** Rebuild Salesforce websites in HighLevel by navigating to Sites > Websites or Funnels. Recreate the landing pages and any funnel steps.  
      
    
-   **Set up E-commerce:** Ensure to create products in HighLevel by navigating to Sites > Stores. Recreate the products under Payments > Products.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037344027/original/lBGYeMYWhV0Aa2MhqdsOrD5B3daqcpTiaQ.png?1732746732)

  

  

### **Step 3:** Recreate Automations in HighLevel

-   **Set Up Automation Workflows:** Rebuild Salesforce automation workflows in HighLevel by navigating to Automations > Workflows. Recreate triggers _(e.g., lead conversions, opportunity updates)_ and corresponding actions _(e.g., sending emails, updating statuses)_.  
      
    
-   **Integrate Communication Channels:** Ensure email and SMS automation are correctly set up in HighLevel, utilizing its integrated communication tools to maintain engagement with leads and clients.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037344033/original/95xApxoXaMHB6x8qK7B2oI4PW_sPTa5UtA.png?1732746768)

* * *

# **Document, Contract, and Form Management**

  

  

### **Step 1:** Transfer Document Templates

-   **Export Templates from Salesforce:** Download any existing document or contract templates from Salesforce’s document management system.  
      
    
-   **Import and Rebuild in HighLevel:** Recreate these templates in HighLevel by navigating to Documents and using the editor to set up contracts, proposals, and quotes.

  

  

### **Step 2:** Set Up E-signature and Document Tracking

-   **Enable E-signature:** Configure HighLevel’s document features to include e-signature capabilities for contracts and agreements.  
      
    
-   **Track Document Engagement:** Set up tracking features to monitor when documents are opened, viewed, or signed, similar to document tracking in Salesforce.

  

  

### **Step 3:** Set Up Forms

-   **Create and Publish Forms:** Set up forms on HighLevel by navigating to Sites > Forms. Use the templates or create a form from blank. 

* * *

# **Testing and Validation**

  

  

### **Step 1:** Test Opportunities

-   **Perform End-to-End Testing:** Simulate sales processes in HighLevel by moving opportunities through the pipeline stages to ensure proper functionality.  
      
    
-   **Validate Data Integrity:** Cross-check imported data to confirm that contacts, accounts, leads, and opportunities are accurately represented.

  

  

### **Step 2:** Validate Automation Workflows

-   **Run Test Scenarios:** Test each automation workflow in HighLevel to ensure triggers and actions function as intended.  
      
    
-   **Verify Communication Channels:** Ensure that emails, SMS, and other communication actions execute correctly within the workflows.

* * *

# **Team Training and Transition**

  

  

### **Step 1:** Train Team Members

-   **HighLevel Training:** Conduct training sessions to familiarize team members with HighLevel’s interface and features.  
      
    
-   **Provide Documentation:** Distribute user guides and SOPs tailored to HighLevel’s functionalities to support team members during the transition.

  

  

### **Step 2:** Monitor and Optimize

-   **Monitor System Performance:** Regularly review the performance of sales pipelines and automations post-migration.  
      
    
-   **Optimize Workflows:** Adjust workflows as needed based on team feedback and operational requirements.

* * *

# **Decommissioning Salesforce**

  

  

### **Step 1:** Transition Period

-   **Run Systems in Parallel:** Consider running Salesforce and HighLevel in parallel for a short period to ensure a smooth transition.  
      
    
-   **Phase Out Salesforce:** Gradually reduce reliance on Salesforce as confidence in HighLevel grows.

  

  

### **Step 2:** Cancel Salesforce Subscription

-   **Final Backup:** Ensure all necessary data is backed up before canceling the Salesforce subscription.  
      
    
-   **Official Cancellation:** Follow Salesforce’s process to cancel your subscription and terminate any associated services.

  

  

### **Step 3:** Post-Migration Review

-   **Review Success:** Assess the success of the migration, documenting any challenges and resolutions.  
      
    
-   **Ongoing Monitoring:** Continue to monitor HighLevel’s performance, making necessary adjustments to optimize business processes.