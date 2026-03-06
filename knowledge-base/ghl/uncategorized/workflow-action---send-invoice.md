---
title: "Workflow Action - Send Invoice"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003494-workflow-action-send-invoice"
category: "Uncategorized"
---

# Workflow Action - Send Invoice

Automate invoice delivery directly from your HighLevel workflows. This action sends a one‑time invoice via email, SMS, or both using your selected invoice template and payment mode. This article shows how to setup and use the Send Invoice Action in HighLevel workflows

* * *

**TABLE OF CONTENTS**

-   [What is the Send Invoice workflow action?](#What-is-the-Send-Invoice-workflow-action?)[](#Key-Benefits-of-Send-Invoice-Action)
-   [Key Benefits of Send Invoice Action](#Key-Benefits-of-Send-Invoice-Action)[](#Prerequisites)
-   [Prerequisites](#Prerequisites)[](#How-to-Setup-the-Send-Invoice-Action-in-Workflows)
-   [How to Setup the Send Invoice Action in Workflows](#How-to-Setup-the-Send-Invoice-Action-in-Workflows)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Send Invoice workflow action?**

  

The Send Invoice action creates and delivers a one‑time invoice to the contact when a workflow reaches this step. This action connects your invoice templates with workflow automation so billing happens consistently and on time. Choose which template to send, who it comes from, and which channel(s) to use. Use Live mode for real payments and Test mode for non‑chargeable, sandbox validation.

* * *

## **Key Benefits of Send Invoice Action**

  

-   **Faster collections**: trigger invoices at the exact stage (won deal, form submit, onboarding step) without manual work.  
      
    
-   **Consistency**: ensure every invoice uses the correct template, branding, and taxes.  
      
    
-   **Flexibility**: choose Email, SMS, or both, and select a specific template for each scenario.  
      
    
-   **Observability**: monitor workflow execution and payment status to keep teams aligned.  
      
    
-   **Testing safely**: validate flows using **Test** mode before charging customers.
    

* * *

## **Prerequisites**

  

Preparing the account avoids common setup errors and ensures invoices send successfully from day one.

  

-   **Permissions**: Users configuring workflows should have sufficient sub‑account permissions to edit workflows and access Payments/Invoices. See **User Roles & Permissions (Sub‑Account)**.  
      
    
-   **At least one invoice template**: Create or confirm templates are available. See **Create Invoice Templates & Automatically Send via Workflow**.  
      
    
-   **Payments gateway connected**: Ensure your gateway is connected and ready for **Live** transactions (or supports **Test** if you are validating flows).  
      
    
-   **Contact data**: The contact must have the required delivery channel(s): a valid **Email** and/or **Phone** number depending on your selection.
    

* * *

## **How to Setup the Send Invoice Action in Workflows**

  

Follow these steps to add the action to a workflow and configure it for consistent, predictable outcomes.

  

1.  Log in to your sub-account.  
      
    
2.  Go to **Automations > Workflows**.  
      
    ![](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png) 
    
3.  Create a **new** **workflow** or **open** an **existing** one.  
      
    ![](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)  
      
    
4.  Click on the **\+ Add New Trigger** button to add a **trigger** that correlates to the Send Invoice Action (e.g., _Pipeline Stage Changed, Opportunity Status Changed etc._)  
      
    ![](https://jumpshare.com/share/PtwtGdOv9hNooZgtS8dh+/GIF+Recording+2026-02-11+at+9.11.24+PM.gif)  
      
    
5.  Click **+** to **add** an **Action** and search for **Send Invoice**.  
      
    ![](https://jumpshare.com/share/WKwaE4BxXc1Kw72d0esU+/GIF+Recording+2026-02-11+at+9.14.35+PM.gif)  
      
    
6.  Select **From** **User** and **Invoice** **Template**.  
      
    
7.  Select **Payment** **Mode** - Use **Live** mode for real payments and **Test** mode for non‑chargeable, sandbox validation.  
      
    
8.  Select **Channel:** Choose how the invoice is delivered **Email**, **Text**, or Email & Text. **Default:** Email & Text. 
    
9.  Click on **Save Action**.  
      
    ![](https://jumpshare.com/share/x0GWesk6cx2zpf7kJlf2+/Screenshot+2026-02-11+at+9.16.50%E2%80%AFPM.png)  
      
    
10.  **Test** the **workflow** to make sure everything is setup correctly. **Publish** and **Save** the workflow.  
       
     ![](https://jumpshare.com/share/acrY52YGL0xqo8pDiF3Z+/Screen+Shot+2026-02-11+at+9.24.32+PM.png)
     

* * *

## **Frequently Asked Questions**

  

**Q: What’s the difference between Live and Test modes?**

Live creates a payable invoice using your connected gateway. Test is intended for dry‑runs and link validation without charging. Gateway test behavior can vary—validate before relying on results.

  

**Q: What happens if I choose Email & SMS but the contact only has email?**  
Only Email will be sent in this scenario. The message can only be delivered via available channels. Ensure the contact record has the needed fields (email and/or phone) before enabling both. 

  

**Q: Do I need to pick a template every time?**  
It’s best practice to explicitly select a template in the action. If you rely on a default, verify which template is set as default in the Invoices module to avoid surprises.

  

**Q: Where do I track whether the invoice was sent or paid?**  
Check the **Execution Logs** for the Send Invoice step and **Payments → Invoices** for invoice status (e.g., Sent, Viewed, Paid).

  

**Q: Can I trigger different templates based on conditions?**

Yes. Branch your workflow with conditions and add separate **Send Invoice** actions, each pointing to the appropriate template.

* * *

### **Related Articles**

  

-   [Getting Started — Create & Send Invoices](https://help.gohighlevel.com/en/support/solutions/articles/155000005075) 
-   [How to Create Invoices in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48001208702) 
    
-   [Customizing Invoice Layouts](https://help.gohighlevel.com/en/support/solutions/articles/155000006789)  
      
    
-   [How to Send Recurring Invoices Using Workflows](https://help.gohighlevel.com/en/support/solutions/articles/155000005627)