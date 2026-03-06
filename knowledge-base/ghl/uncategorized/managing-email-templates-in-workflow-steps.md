---
title: "Managing Email Templates in Workflow Steps"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005553-managing-email-templates-in-workflow-steps"
category: "Uncategorized"
---

# Managing Email Templates in Workflow Steps

Learn how to use email templates inside workflows without accidentally changing the original template. This guide explains how template behavior works, how to safely customize email content within a workflow, and how to manage updates across multiple steps. By the end, you’ll be able to confidently manage email templates while minimizing risk and confusion.

* * *

**TABLE OF CONTENTS**

-   [What are Email Templates within Workflows](#What-are-Email-Templates-within-Workflows)
    -   [Key Benefits of Managing Email Templates in Workflow Steps](#Key-Benefits-of-Managing-Email-Templates-in-Workflow-Steps)
    -   [How to Use Email Actions for Workflows](#How-to-Use-Email-Actions-for-Workflows)
    -   [Email Template Editor within Send Email Action](#Email-Template-Editor-within-Send-Email-Action)
    -   [Sending a Test Email to Review Your Customizations](#Sending-a-Test-Email-to-Review-Your-Customizations)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What are Email Templates within Workflows**

  

In HighLevel workflows, the “Send Email” action lets you add a saved email template to automate communication. While templates help standardize messaging, each workflow often needs small tweaks—like a different subject line or call-to-action.

  

When you add a template to a Send Email action, HighLevel creates a copy for that workflow step. If you keep **Sync Edits to Template** turned OFF, edits stay local to the workflow step and do not change the original template. If you turn **Sync Edits to Template** ON, changes in the workflow email and the original template update each other (bi-directional sync).

* * *

## **Key Benefits of Managing Email Templates in Workflow Steps**

  

-   **Safe Customization:** Edit emails directly in workflows without impacting the original template or other workflows.  
      
    
-   **Flexible Reuse:** Use the same template across workflows and adjust it contextually as needed.  
      
    
-   **Global Sync (When Needed):** Push updates from a template to selected workflow steps using a manual sync process.  
      
    
-   **Template Library Growth:** Save any customized workflow email as a new template for future use.  
      
    
-   **Reduced Risk:** Prevent unintended global changes during team collaboration or campaign edits.

* * *

## **How to Use Email Actions for Workflows**

  

  

#### **Step 1:** Navigate to Workflow Campaigns

  

There are 2 ways to navigate to Workflow Campaigns:  
  

-   Go to **Marketing → Emails  → Campaigns → Workflow campaigns**  
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058569605/original/D0Vbh2T2VoCLhxSp24piFTyQX_0c6Tekbw.jpeg?1763394110)**  
      
    
-   Go to **Automation  →  Workflows**  
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058569614/original/iT9kO_eJ9A4bgczSLY29U7V5qK_zxXRj1Q.jpeg?1763394112)**  
    

#### **Step 2:** Add Send Email Action  
  

-   Open an existing Workflow or create a new one  
      
    
-   Add or edit a **Send** **Email** Action.

  

****Important:**** Before you move on to the next step, make sure to set up a trigger and define the basic structure of your workflow. This ensures your automation is ready for configuration.

 ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756159/original/H3gGkcmjhnMF_f2ORUFR0P7PrxLu2AD6zA.png?1760135495)

####   

####   

#### **Step 3:** Choose how to Start

  

Choose the path that matches your use case under **Create Email.** Choose from fast transactional notes, brand‑styled designs, or reusing proven templates.

  

-   **Quick Compose (default):** Simple editor for fast messages.  
      
    
-   **Smart Builder:** Select Design, Code, or Plain Text editor to build from zero.  
      
    
-   **Select Template:** Pick from My Templates or Templates Library.

  

**Note:** Before editing the email content, fill out the basic email settings like From Name, From Email, CC, and BCC as needed. These ensure proper sender details are applied when the email is sent.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756221/original/QRLeeH3g50IZro5tI78F--iSemNplf70_w.png?1760135614)

  

  

#### **Step 4:** Preview Template (Optional)

  

If using a template, use the **Templates** dropdown to select the email you want to use in this workflow step. Click the **3 dots icon** in the template preview’s menu to **Edit Design** or **Remove**. Clicking **Edit Design** opens the Email Template Editor.

  

Decide whether to **Sync Edits to Template** using the checkbox below.

  

[Click here for more information on the Email Template Editor](#Email-Template-Editor-within-Send-Email-Action)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570516/original/GfPYykLPV6LC4NnPr0-u9Bl5y5yLyCMuyA.png?1763394673)

  

  

#### **Step 5:** Advanced Settings

  

Expand **Advanced Settings** to enable:

  

-   **Link Tracking** → See clicks and CTR for each link.  
      
    
-   **UTM Parameters** → Add campaign tracking tags.  
      
    
-   **Tags on Actions** → Automatically tag contacts based on opens/clicks.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570781/original/gBKS4HL8bbvrvjxvSxKFIpFLQ-HEYyZKvw.png?1763394801)  
  

#### **Step 6:** Save and View Statistics

  

-   Click **Save Action**. Publish the workflow when ready.  
      
    
-   After sending, reopen the Email action to view **Statistics**. Click **View Details** or **Click Performance** for deeper insights.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756612/original/9r_BYtHVM9GR83eizIj4TOrGwIqywHVtJQ.jpeg?1760136764)

* * *

## **Email Template Editor within Send Email Action**

  

To open the **Email Template Editor** from the **Sent Email** action, click the 3 dots icon in the template preview and select **Edit Template.** This lets you customize the template specifically for this workflow step.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058570887/original/4P7XidCB962LaeXF8BkhYfVMOE68gax3Dg.png?1763394922)

  

  

### **Overview of Email Editor Tools and Layout Options**

  

The email editor includes several tools that help you customize the structure, design, and content of your template. Understanding these interface sections will make it easier to create professional, responsive emails.

  

-   **Template Title and Name Editing:** At the top-center, you can see the name of your email template. Click the pencil icon next to the title to rename the template. This helps you keep templates organized, especially when managing multiple versions or use cases.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058578999/original/mgsc6Y15EiDQMziQ_X4fG8QBoS2cDQ19ug.png?1763399825)  
      
    
-   **Top Action Toolbar (Layout Controls):** The row of icons below the title allows you to manage the layout and structure of your email. The **Add Elements** **icon** opens layout blocks, **Manage Element icon** manages layers, the **Appearance** **icon** sets global text styles, and the **Saved Item** icon handles template-level settings like width and padding. These tools give you foundational control over how your email is visually arranged.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579022/original/KCig9FJDo9lQk1_OrDUT0FmCabhltVlaIw.png?1763399859)  
      
    
-   **Element Library (Drag-and-Drop Blocks):** The vertical panel on the left displays all available drag-and-drop content blocks. You can add text, images, buttons, logos, dividers, social links, videos, footers, product grids, countdown timers, and more. These elements allow you to build rich, visual emails tailored to your message and goals.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579035/original/pG4hLWsyX5dSuC8W4qHOMMbj_cEXLRGUXA.png?1763399889)  
      
    
-   **View Mode and Editing Options:** The section at the top-center lets you switch between editing and preview modes. You can also toggle between desktop, tablet, and mobile views to see how your email will appear on different devices. This is essential for ensuring responsive design.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579247/original/d17em5az_g5_UVj-5wFurHEDHpaSdLHJxw.png?1763400073)  
      
    
-   **Settings and Version History:** Click the **3 dots** icon to open a dropdown with **See Version History** and **Settings**. Within Version History you are able to view previous drafts of the template. Within Settings, you are able to update the Subject and Preview Text.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579134/original/J_v_kBCWLHFyxbg9uMKC4ac2JXMAM8TbYA.png?1763399981)  
      
    
-   **Save, and Save as New Template:** After customizing your email, click **Save as new Template** in the top-right corner to store it for future use. This creates a new version in your template library without altering the original. After clicking **Save as new Template**, enter a name to identify your custom version. Click **Continue** to save it to your email template library for future use in other workflows.  
      
    Click **Save** in the top-right corner to update the email within this workflow step. This saves your changes locally to the step only and does **not** create a new template in your email template library.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579387/original/nOMSSiQaw53zax_R3tebJO5PTWKhcZtmIQ.png?1763400188)

* * *

## **Sending a Test Email to Review Your Customizations**

  

After editing your email template within the workflow, use the **Test Emails** field to enter one or more recipient addresses, then click **Send Test Mail**. This allows you to preview the customized email in an actual inbox and verify formatting, personalization, and design before saving the workflow action.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058579463/original/K_TNfSUysr3LvCI7CI3R_mvLm6lz-bhI4g.png?1763400271)

* * *

## **Frequently Asked Questions**

  

**Q: Can I link a workflow email back to the original template after editing it?**

Yes—if the email action uses an existing template, you can turn \*\*Sync Edits to Template\*\* ON or OFF later. HighLevel confirms the change in a modal. When sync is ON, edits in the workflow email and the template update each other.

  

**Q: Can I track which workflow steps are using a specific template?**

Yes. The Sync Changes tool in the Templates section shows a list of workflow steps that are currently linked to the selected template for syncing purposes. This helps with identifying where global updates will apply.

  

**Q: What happens if I edit a synced workflow email after applying a global update?**

Any manual changes you make after syncing will remain local to that workflow step. They will not affect the original template unless you save the edited version as a new template.

  

**Q: Is there a way to preview changes before syncing a template across multiple workflows?**

No. Syncing is a direct action that applies the current version of the template to the selected workflow steps. It’s recommended to review both the template and selected workflows before proceeding.

  

**Q: Can I prevent team members from editing certain workflow emails after inserting a template?**

There’s currently no lock or restriction on editing email actions within workflows. To manage this, consider documenting template usage policies or using role-based permissions to limit access.

* * *

## **Related Articles**

  

-   [Email Template Builder in Workflow Send Email Action](https://help.gohighlevel.com/en/support/solutions/articles/155000002652)  
      
    
-   [Sync Edits (Continuous Sync) for Email Actions in Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000006141)  
      
    
-   [Email Statistics](https://help.gohighlevel.com/en/support/solutions/articles/48001215386) [](https://help.gohighlevel.com/en/support/solutions/articles/155000003213)  
    [  
    ](https://help.gohighlevel.com/en/support/solutions/articles/155000003213)
-   [Click Tracking for Emails](https://help.gohighlevel.com/en/support/solutions/articles/155000003213)  
      
    
-   [Understanding UTM Parameters](https://help.gohighlevel.com/en/support/solutions/articles/155000002929)