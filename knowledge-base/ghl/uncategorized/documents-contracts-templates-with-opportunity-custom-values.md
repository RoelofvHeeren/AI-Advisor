---
title: "Documents & Contracts Templates with Opportunity Custom Values"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values"
category: "Uncategorized"
---

# Documents & Contracts Templates with Opportunity Custom Values

In Document & Contract Templates you can include Opportunity Custom Values using merge fields.

* * *

**TABLE OF CONTENTS**

-   [What Are Opportunity Custom Values in Documents & Contracts Templates?](#What-Are-Opportunity-Custom-Values-in-Documents-&-Contracts-Templates?)
-   [Use Opportunity Custom Values in Documents & Contracts Templates](#Use-Opportunity-Custom-Values-in-Documents-&-Contracts-Templates)
-   [Use Documents & Contracts Template with Opportunity Custom Values in Workflow](#Use-Documents-&-Contracts-Template-with-Opportunity-Custom-Values-in-Workflow)
-   [Automate Documents & Contracts Sending In Opportunity Pipeline](#Automate-Documents-&-Contracts-Sending-In-Opportunity-Pipeline)

* * *

## **What Are Opportunity Custom Values in Documents & Contracts Templates?**

  

Documents & Contracts are like emails or websites, except they produce a document/contract which lays out the particulars of a deal and can be signed to seal the deal. 

  

Documents & Contracts Templates are reusable files with "fill in the blanks" sections which can even be filled automatically in workflows.

  

NOTE: This article is about **_Templates_**, not individual Documents & Contracts. To view and edit **Templates** use the Payments > Documents & Contracts dropdown and select **Templates**. Make sure the title of the page includes **Templates** and you're on the **Templates** tab.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551741/original/2us6irbQsjrlEFwLOkwPKxtRoLy42pA4lQ.png?1753726809)  
In the Documents & Contracts editor, look for the word "**templates**" in the URL bar. That will confirm that you are **editing a Template**, not an individual Document/Contract.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551819/original/6Svu2dkQ5Pe3wLuRFnGJls1S-8kt-5WFsw.png?1753727000)

  

* * *

## **Use Opportunity Custom Values in Documents & Contracts Templates**

  

1.  Navigate to **Payments -> Documents & Contracts Templates -> New template  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198849/original/kEJEEXCPOJiuSNCC7lr_K3BZRbbq5Di4TQ.png?1737467636)**
    
2.  Drag a text box or table where you wish to populate opportunity custom values/fields. Either directly type the exact merge field into the text area ex: {{opportunity.xyz}} OR use the merge fields menu.**  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040198929/original/6HozCmIyeocMbl1ahr4ZMlIMm1gjpbtDSg.png?1737467697)  
      
    **
    
3.  In the **Merge Fields menu**: Go to Contact -> Custom fields -> Opportunity Details -> Select a field name that is dynamic  
      
    
    <table style="width: 100%; margin-right: calc(0%);"><tbody><tr><td style="width: 25.0000%;"><strong><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199078/original/V0wYrL-eUekZf_gQ_NHvQPwyNwup_W50tg.png?1737467786" style="width: auto; max-width: 100%;" class="fr-fil fr-dib" data-attachment="[object Object]" data-id="155040199078"></strong></td><td style="width: 25.0000%;"><strong><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199106/original/-aCciUWXyiHx3XnbJlcYt9f-r-T_751YZw.png?1737467799" style="width: auto; max-width: 100%;" class="fr-fil fr-dib" data-attachment="[object Object]" data-id="155040199106"></strong></td><td style="width: 25.0000%;"><strong><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199134/original/KEGOo2JKmEq9vr6fiaOQANLre5WWNaIkgA.png?1737467810" style="width: auto; max-width: 100%;" class="fr-fil fr-dib" data-attachment="[object Object]" data-id="155040199134"></strong></td><td style="width: 25.0000%;"><strong><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199153/original/5E4j-Mir_ZMv1Yml3wKsyzY3pmP-nd5vzA.png?1737467824" style="width: auto; max-width: 100%;" class="fr-fil fr-dib" data-attachment="[object Object]" data-id="155040199153"></strong></td></tr></tbody></table>
    
4.  **Review**: In the text area, double check that the merge field displays in the correct location. The merge field will be automatically replaced with the personalized data when the automation is run. Make sure to **save**.  
    **  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199289/original/RITNDKTg1I2uEd3OVJQaeDqYIy6s-oNgwQ.png?1737467923)**

  

* * *

## **Use Documents & Contracts Template with Opportunity Custom Values in Workflow**

  

1.  Navigate to **Automation > Workflows > create or edit a Workflow**. Within the Workflow editor use the **Send Documents & Contracts Action**. Within the action, choose the Template you want to populate and save as draft or send.  
    **  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199882/original/5sa4KEqttINY-2v28dLzboXFdd4TdiJVfg.png?1737468347)
    
      
    
    
    **

* * *

## **Automate Documents & Contracts Sending In Opportunity Pipeline**

  

If you want to automatically send a Template Document/Contract at a certain Opportunity Pipeline stage, you can do that with a few Triggers and Actions in a Workflow.

  

**Step 1: Create Workflow**

Navigate to Automation > Workflow > create or edit a workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199677/original/OfyRxM02UTuWPY2uxxqdwvrNpW-dUPKGDQ.png?1737468195)

  

  

**Step 2: Add Trigger**

A couple good options for Opportunity/Pipeline triggers are: Pipeline Stage Changed or Opportunity Status Changed. Set the Trigger's filters to the relevant Pipeline, Stage, Opportunity, etc.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199505/original/Orf2J4JrEQskwivAp85qZj342ciV81msNw.png?1737468099)  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040199807/original/y30822cRiC0OU_xRZixkGgLs4iZ9aL7S2A.png?1737468289)  

**Step 3: Add Action**

Next add the Send Documents & Contracts Action to the workflow and choose the appropriate Template (given the previous instructions). The merge fields in the Template will automatically pull the Opportunity Custom Values into the file before sending it. Remember to **Save**.