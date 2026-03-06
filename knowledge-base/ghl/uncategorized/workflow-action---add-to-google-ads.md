---
title: "Workflow Action - Add To Google Ads"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-ads"
category: "Uncategorized"
---

# Workflow Action - Add To Google Ads

Track real user actions—like form submissions or chat replies—as Google Ads conversions directly inside your workflows using Add to Google Ads workflow action. This article shows you exactly how to set it up, why it matters, and how to troubleshoot it for accuracy and better ROI.

* * *

**TABLE OF CONTENTS**

-   [What Is the Add to Google Ads Workflow Action?](#What-Is-the-Add-to-Google-Ads-Workflow-Action?)[](#Key-Benefits-of-Add-to-Google-Ads-Workflow-Action)
-   [Key Benefits of Add to Google Ads Workflow Action](#Key-Benefits-of-Add-to-Google-Ads-Workflow-Action)[](#How-to-Use-Add-to-Google-Ads%C2%A0Action%C2%A0Workflows%C2%A0)
-   [How to Use Add to Google Ads Action Workflows](#How-to-Use-Add-to-Google-Ads%C2%A0Action%C2%A0Workflows%C2%A0) [](#Popular-Use-Cases) 
-   [Popular Use Cases](#Popular-Use-Cases)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What Is the Add to Google Ads Workflow Action?**

  

The Add to Google Ads action allows you to send conversion events from HighLevel into your Google Ads account. This feature is ideal for tracking offline conversions, such as form submissions, chat replies, purchases, or appointment bookings that happen after a user clicks your ad. By tying those actions back to the original click, you gain deeper insight into your campaign performance and can feed that data into Google’s optimization engine.

  

To make this work, HighLevel uses unique identifiers like GCLID, GBRAID, or WBRAID that are passed during the ad click. These values must be present on the contact record in order for the conversion to be properly attributed.

  

**Note:** You must **set up the conversion event** in Google Ads first before using this workflow action.

Checkout our articles on **Setting Up Google Ads Conversion Actions**:

1. [How To Set Up Google Ads Conversion Actions (Google Platform Side Setup)](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ads-conversion-actions-google-platform-side-setup-)
2. [](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)[HighLevel Ad Manager - Create & Manage Google Ads Offline Conversions](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)

* * *

## **Key Benefits of Add to Google Ads Workflow Action**

  

-   **Offline Conversion Tracking:** Tracks offline events like form submissions, chat replies, or booked appointments for better attribution.

  

-   **Direct Event Syncing:** Sends conversion events straight to Google Ads—no need for Zapier or manual data uploads.

  

-   **Enhanced Campaign Optimization:** Improves ad performance by giving Google better data to optimize around.

  

-   **Click ID Support:** Compatible with GCLID, GBRAID, and WBRAID for comprehensive tracking coverage.

  

-   **Flexible Trigger Options:** Works with multiple workflow triggers including form submissions, link clicks, and page views.

  

-   **Lead Quality Attribution:** Helps you accurately measure the source and quality of your leads, improving ROI tracking.

* * *

## **How to Setup Add to Google Ads** **Action** **in Workflows**

  

Understanding how to properly set up the “Add to Google Ads” action ensures your Google Ads campaigns can accurately measure and attribute conversions. This step-by-step guide walks you through how to configure the action inside a workflow, including where to find it, how to set it up, and how to ensure it’s firing correctly.

  

**Connect Your Google Ads Account:** In order to use the “Add to Google Ads” workflow action, you must first connect your Google Ads account to HighLevel. This integration enables HighLevel to send conversion events directly to Google Ads via API. To set it up, navigate to **Settings > Integrations** in your HighLevel sub-account, select Google, and follow the prompts to authenticate your account. Be sure to link the correct Google Ads account, especially if you manage multiple. Without this connection, the action will not function, regardless of how well everything else is configured. 

**Important:** After connecting your Google Ads account to HighLevel, you must already **have at least one conversion action created inside your Google Ads account**. HighLevel fetches available conversion actions directly from Google Ads during setup. If no conversion actions exist yet, the dropdown menu for selecting a conversion event inside the workflow will be blank. 

  

### **Step 1:** Access the Workflow Builder

  

1.  Log in to your sub-account.  
      
    
2.  Go to **Automations > Workflows**.  
      
    ![](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png) 
    
3.  Create a **N****ew** **W****orkflow** or **O****pen** an **E****xisting** one.  
      
    ![](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)  
      
    

### **Step 2:** Add a Relevant Trigger

  

-   Click on the **Add New Trigger** button to add a relevant trigger that reflects the action or event you want to track - like a form submission or an appointment booking.  
      
    
-   **Examples of effective triggers include:** Form Submitted, Appointment Booked, Trigger Link Clicked, or Customer Replied. Workflows can be created for Form Submission, Order Purchases, Number Pool Calling, Survey Submission, and Chat Widget.  
      
    ![](https://jumpshare.com/share/MAFnHtvBfVl4S7D4VC12+/GIF+Recording+2026-02-05+at+7.50.55+PM.gif)  
      
    

### **Step 3:** Add the “Add to Google Ads” Action

  

1.  After your trigger is in place, click the **“+”** icon at the point in the workflow where you want the conversion to fire.  
      
    
2.  This opens the **action selection panel**. Scroll through the list and choose “**Add to Google Ads**.” This action allows you to send conversion data directly to your connected Google Ads account via API.  
      
    
3.  Once the action is added, you’ll see the configuration panel on the right-hand side.

  

![](https://jumpshare.com/share/EoFZFizWBeNYO7KKgFT5+/GIF+Recording+2026-02-05+at+8.04.29+PM.gif)

  
  

### **Step 4:** Configure the Action Details

  

**Preparing Google Ads Conversion Setup**

Before configuring the “Add to Google Ads” workflow action in HighLevel, there are three critical steps you must complete within Google Ads:

**1\.** Create the conversion action inside your Google Ads account—this defines the specific event you want to track, such as a form submission or appointment booking.

**2\.** Copy the exact conversion name from Google Ads and use it precisely as-is in your HighLevel workflow action. Any mismatch in the name, even due to capitalization or spacing, will prevent the action from working.

**3\.** Ensure that your ad URLs include proper click tracking parameters: use **GCLID** for Search campaigns, and **GBRAID** or **WBRAID** for iOS and Android app campaigns. HighLevel must capture these identifiers from incoming leads to pass accurate attribution data back to Google Ads. 

Without these prerequisites, conversion syncing will fail. Additionally, be aware of your conversion setting type—if your conversion is set to **“One Per Click,”** GCLID is required, as GBRAID and WBRAID only support **“Many Per Click”** tracking. This distinction is especially important when troubleshooting missed or skipped conversions.

  

1.  Setting up the conversion action correctly is essential for data to flow from HighLevel to Google Ads. This step involves linking your workflow to the proper conversion event and ensuring all tracking parameters are accurately in place. Missteps here—such as typos in the conversion name or missing click IDs—can prevent your conversion from syncing entirely.  
      
    
2.  **Action Name:** Give your action a clear and descriptive name—something like “Submit Lead Conversion” or “Book Appointment Conversion.” This name will appear in your workflow logs, so it should clearly reflect what the conversion is for.  
      
    ![](https://jumpshare.com/share/CDM31cfFgsxaGIeHU6u1+/Screen+Shot+2026-02-05+at+8.07.49+PM.png)  
      
    
3.  **Conversion:** In this dropdown, select or paste the exact name of the conversion event from your Google Ads account. The name must match exactly—including capitalization, spacing, and punctuation—or the action will be skipped. Your workflow action will not fire the conversion unless the names align perfectly.  
      
    
    **Please Note:** Every time you create a new campaign in Google, you will need to select the conversion action which you just created as your Google Adwords option in your new workflow action.  
      
    It will take **approximately 5 minutes** once we receive one contact with UTM source and gclid, wbraid or gbraid to get the list populated in workflow trigger as well as in Google Adwords Conversion.  
    
      
    ![](https://jumpshare.com/share/tQSwMoAGpZa2HEw6aADs+/Screen+Shot+2026-02-05+at+8.23.57+PM.png)  
      
    
4.  **Currency:** Choose the currency in which you want your conversion value to be attributed in.  
      
    ![](https://jumpshare.com/share/KQLZdRT1ATp51P7d6nHB+/Screen+Shot+2026-02-05+at+8.25.36+PM.png)  
    
5.  **Conversion Value:** Enter the amount or value of each conversion as per the Currency chosen in the previous step. E.g. a conversion for a dental checkup client is valued at $100.  
      
    ![](https://jumpshare.com/share/7BuIY5OXPzywVfjHQVfx+/Screen+Shot+2026-02-05+at+8.27.08+PM.png)  
    
6.  **Custom Mapping:** Toggle on the Custom Mapping switch if you want to manually map specific Google Ads conversion parameters (like GCLID, GBRAID, or WBRAID) to fields within your workflow. This is helpful when you’re working with custom fields or want more granular control over how the click ID is passed back to Google Ads.  
      
    ![](https://jumpshare.com/share/ikSiGaGH3PGjq97Y2K9v+/Screen+Shot+2026-02-05+at+9.05.28+PM.png)  
      
    

### **Step 5:** Save and Publish Workflow

  

1.  Click on the **Save Action** button.  
      
    
2.  **Publish** the workflow and **Save** it.  
      
    ![](https://jumpshare.com/share/2UEcwKdCdWAp8dCG3uvL+/Screen+Shot+2026-02-05+at+9.40.03+PM.png)  
      
    

### **Step 6:** Monitor Workflow Execution Logs

  

Once your workflow is active, it’s important to monitor its execution to ensure the action is firing properly.

Go to the Execution Logs tab within the workflow. Look for the “Add to Google Ads” action and its result:

  

**Executed:** The conversion was successfully sent to Google Ads.

  

**Skipped:** Something went wrong (e.g., missing GCLID or mismatched conversion name).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968547/original/aFenfQtgfTtqzwvum3qXSNWTGE49Friqhg.png?1742959494)

* * *

## **Popular Use Cases**

  

To make sure this action actually sends data to Google Ads, it must be paired with a meaningful conversion event. This is where selecting the right trigger becomes crucial. Popular Triggers Include:

  

### **1\. Form Submission/Order Purchases/Survey Submission**

  

1.  Create the Workflow.  
      
    
2.  Select the trigger - **Form Submission, Order Form Submission, or Survey Submission**.  
      
    
3.  Once the trigger is selected, add the **filters** with which the Form/ Order Form/ Survey and save the trigger details.  
      
    
4.  Click on the **+** **plus** icon to add an action and select the "Add to Google Ads" event and select the **conversion action** from the dropdown which was created on Google.  
      
    
5.  Define the **Currency** and **Conversion** Value for the conversion.  
      
    
6.  Click "**Save**" and "**Publish**" your workflow..

  

  
  

### **2\. Number Pool Calling**

  

1.  Create the Workflow.  
      
    
2.  Select the trigger - **Call Status**.  
      
    
3.  Once the trigger is selected, add the **filters** with **Call Direction > Incoming and Pool Number > Select Pool Number**.  
      
    
4.  **Please add the pool number script on the funnel/website in header settings.  
    **
5.  Click on the **\+ plus icon** to add an action and select the "**Add to Google Ads**" event and select the conversion action from the dropdown which was created on Google.  
      
    
6.  Define the **Currency** and **Conversion****Value** for the conversion.  
      
    
7.  Click "**Save**" and "**Publish**" your workflow.

  

  

###   
**3\. Chat Widget**

  

1.  Create the Workflow.  
      
    
2.  Select the trigger - **Customer Replied Trigger**.  
      
    
3.  Click on the **\+ plus icon** to add an action and select the "**Add to Google Ads**" event and select the conversion action from the dropdown which was created on Google.  
      
    
4.  Define the **Currency** and **Conversion** **Value** for the conversion.  
      
    
5.  Click "**Save**" and "**Publish**" your workflow.

  

* * *

## **Frequently Asked Questions**

  

**Q: I have set up my conversions now how do I know it's working?**

Currently, there is no way to test this event. You can always check your workflow action and check out the history tab⁣. It should show the execution for Google Adword Action.

⁣⁣

**Q:Where can I see my conversions?⁣**

It will take approximately 5 minutes to get the list populated in trigger/workflow as well as in Google AdWords Conversion. ⁣Within the 15 minutes window, you can check the workflow history.⁣  
  

**Q: Does this work with all triggers?⁣**

It **only works** for Form Submission, Order Purchase, Number Pool Calling, Survey Submission, and Chat Widget.

  

**Q: What should I do if the action says “Skipped” in logs?**

To ensure successful conversion tracking, two key conditions must be met: the contact in HighLevel must have a valid GCLID, GBRAID, or WBRAID—captured from a legitimate Google ad click—and the conversion name used in the workflow must exactly match the one created in your Google Ads account. Even a small mismatch in the conversion name will prevent the event from registering correctly in Google Ads.

  

**Q: What’s the difference between GCLID, GBRAID, and WBRAID?**

**GCLID:** Used for traditional web tracking.

**GBRAID/WBRAID:** Used in privacy-focused environments (mainly on iOS).

Only “multi-per-click” conversions accept GBRAID/WBRAID. If your conversion setting is “one per click,” GCLID is required.

  

**Q: Can I track leads that come through the chat widget?**

Yes. Use the Customer Replied trigger and add a filter: Reply Channel = Chat Widget. This ensures the event only fires when a user replies via the widget.

  

**Q: Do I need to configure anything in Google Ads before using this?**

Yes. Before using the “Add to Google Ads” action in HighLevel, you need to ensure your Google Ads account is properly configured. First, create the conversion action directly within your Google Ads account. Then, copy the exact name of that conversion—making sure it matches character-for-character—and paste it into the workflow action in HighLevel. Finally, confirm that your Google ad URLs are correctly passing tracking parameters like GCLID, GBRAID, or WBRAID to ensure conversions can be properly attributed back to the original ad click.

  

**Q: Is Google Tag Manager required for this to work?**

No. This action does not require Google Tag Manager. However, GTM can still be helpful if you’re tracking additional client-side events.

* * *

### **Related Articles**

  

-   [Ad Manager - Create & Manage Google Ads Offline Conversions](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)  
      
    
-   [How To Set Up Google Ads Conversion Actions (Google Platform Side Setup)](https://help.gohighlevel.com/en/support/solutions/articles/48001220947) 
-   [Overview of Ad Manager](https://help.gohighlevel.com/en/support/solutions/articles/155000002433)  
      
    
-   [Ad Manager - Create a Google Search Ad Campaign](https://help.gohighlevel.com/en/support/solutions/articles/155000004543)  
      
    
-   [How to view Google Ad Campaign Statistics in Ad Manager](https://help.gohighlevel.com/en/support/solutions/articles/155000005309)