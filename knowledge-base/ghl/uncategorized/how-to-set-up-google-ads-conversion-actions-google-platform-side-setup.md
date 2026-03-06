---
title: "How To Set Up Google Ads Conversion Actions (Google Platform Side Setup)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ads-conversion-actions-google-platform-side-setup-"
category: "Uncategorized"
---

# How To Set Up Google Ads Conversion Actions (Google Platform Side Setup)

This guide explains how to configure **Google Ads conversion actions** directly in the Google Ads interface. It is a **standalone platform-side setup** and does not include HighLevel configuration steps. After completing this setup, use the links in **Next Steps** to connect conversions from HighLevel via Ad Manager or Workflows. 

* * *

**TABLE OF CONTENTS**

-   [What is Google Ads Conversion Actions?](#What-is-Google-Ads-Conversion-Actions?)[](#Key-Benefits-of-Google-Ads-Conversion-Actions)
-   [Key Benefits of Google Ads Conversion Actions](#Key-Benefits-of-Google-Ads-Conversion-Actions)[](#Prerequisites-on-the-Google-Side)
-   [Prerequisites on the Google Side](#Prerequisites-on-the-Google-Side)[](#How-To-Set-Up-Google-Ads-Conversion-Actions-\(Google-Platform-Side\))
-   [How To Set Up Google Ads Conversion Actions (Google Platform-Side)](#How-To-Set-Up-Google-Ads-Conversion-Actions-\(Google-Platform-Side\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Google Ads Conversion Actions?**

  
Google Ads conversion actions define the events you want to track and optimize for—such as leads, calls, form submissions, or offline sales. Creating a clear, well-scoped conversion action ensures Google Ads can attribute performance correctly and helps your campaigns bid toward meaningful outcomes.

  
A **conversion action** is a rule in Google Ads that records when a desired action occurs. For offline conversions (e.g., a deal marked won in your CRM), Google Ads matches identifiers like **GCLID/GBRAID/WBRAID** to attribute results back to ads and keywords.

* * *

## **Key Benefits of Google Ads Conversion Actions**

  
Benefits focus on data quality, optimization, and reporting. Establishing the right conversion actions improves bidding signals, clarifies measurement, and prevents noisy or duplicated data.  
  

-   **Accurate Optimization**: Feeds Google Ads with clean signals for Smart Bidding.  
      
    
-   **Clear Reporting**: Separates primary outcomes (e.g., qualified leads) from secondary events.  
      
    
-   **Control Over Counting**: Decide whether to count **Every** or **One** conversion per ad interaction.  
      
    
-   **Flexible Attribution**: Choose a model that fits your funnel and data volume.  
      
    
-   **Offline Compatibility**: Supports uploading server-side/CRM events using IDs like GCLID/GBRAID/WBRAID.
    

* * *

## **Prerequisites on the Google Side**

  
Preparing your Google Ads account prevents rework later. Confirm access, account structure, and goal taxonomy before creating actions.  
  

-   Admin or standard access to the correct **Google Ads** account.  
      
    
-   Agreement on goal taxonomy (e.g., **Lead** vs **Submit lead form** vs **Qualified lead**).  
      
    
-   Decision on whether this action should be marked as a **Primary** action used for bidding.  
      
    
-   Clarity on identifiers you’ll send later (e.g., **GCLID/GBRAID/WBRAID**) when posting offline conversions from HighLevel.
    

* * *

## **How To Set Up Google Ads Conversion Actions (Google Platform-Side)**

  
Follow these steps in **Google Ads** to create the conversion action you’ll later send data to from HighLevel. Proper setup ensures clean attribution and reliable bidding signals.

  

**Note:** This is a **Google platform-side** guide only. To **setup offline conversions in HighLevel Ad Manager**, checkout our article on [HighLevel Ad Manager - Create & Manage Google Ads Offline Conversions.](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)
[](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)
**T****o setup and track Google Ads Conversion Actions like form submissions, number pool calling, chat widget replies etc, directly inside HighLevel Workflows**, checkout our article on [Workflow Action - Add To Google Ads.](https://help.gohighlevel.com/en/support/solutions/articles/155000003368)

  

1.  **Open Google Ads** and select the correct account.  
      
    
2.  Go to **Goals** **→  Summary → Create** **conversion action**.  
      
    _![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064263133/original/b5p6E_gumUVoFxu2FGAicQGV3s1R14Dybw.png?1770294857)_  
      
    
3.  Choose data sources to measure conversions depending on your current Google Ads UI prompt. Click on **" Save and Continue".**  
      
    _![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064263277/original/eRTgL5gUVBiMRLoHbPDo7-ibZ6QGMornxA.png?1770294949)_  
      
    
4.  Select the most relevant **Category** (e.g., _Lead_, _Submit lead form_, _Qualified lead_).  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064263513/original/zhcCP1GocgLX3YnumskqbZvO2xw9cOccGw.png?1770295129)  
      
    
5.  Configure **Conversion** once you selected the category of conversion. Click on "Create Conversion" and navigate to select data resources. Click on Save and continue.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064263785/original/HJ7gzwHuFkmYOWcxqc8fvmcLzOYVaSJTBQ.png?1770295256)  
      
    
6.  Create a conversion by either adding it manually with code or automatically without code.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064264031/original/PT_qc_IgIxFa7YHsA0Hha6ZrwHxlbXmHzA.png?1770295416)  
      
    
7.  Click on **Conversion Settings** and configure **Conversion name**, **Value**, and **Count**. 
    
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064265152/original/cDtdI2yPN9vHNkPGB5n3OsxFQ06AOOk4Qg.png?1770296089)  
      
    
8.  Set the **click-through conversion window to "90 days"**. Set the Engaged-view conversion window to google recommended, '**3 days**'. Next, set the Attribution model as "**Last Click**" or "**Data Driven**" (recommended).  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064273133/original/6uV_Bof0hh49hCsJFmEdweIQjKi2MbObbg.jpeg?1770299750)  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064273155/original/qAgsdy7W7GqkXmyPbHHeILa-4Zyjp7qS7Q.jpeg?1770299761)  
      
    
9.  Click on **"Agree and finish".**   
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064266089/original/8LCGbtHeNxQiKIt7QrHU3Gon7w5roHwGsw.png?1770296461) 
    

* * *

## **Frequently Asked Questions**

  
**Q: What should I set for Count—Every or One?**  
Use **One** for lead generation to avoid inflating conversions when a contact repeats the same event. Use **Every** for revenue events like purchases.

  
**Q: How long until I see conversions in Google Ads?  
**Processing can take from a few hours up to 24–48 hours depending on volume and method. Reporting latency is normal; use absolute dates when checking reports.

  
**Q: Do I need GCLID, GBRAID, or WBRAID to upload offline conversions?**

Yes—at least one identifier is needed for reliable matching. Capture and store whichever is available on first touch, then include it when sending the conversion from HighLevel.

  
**Q: Where do I verify that conversions are being recorded?  
**In Google Ads: Tools & Settings → Conversions and in campaign reports using Conversion columns. In HighLevel, use Ad Manager reporting for visibility once HL-side sending is configured (see Related Articles).

  
**Q: Should I use HighLevel Ad Manager or Workflows to send conversions?  
**Use Ad Manager if you prefer a centralized ads workspace and built-in mapping. Use Workflows if you need granular automation or custom logic. Both can send to the same Google conversion action.

  
**Q: Why don’t my uploads match or show results?  
**Common issues include missing identifiers, incorrect timezones, currency/value mismatches, or sending to the wrong conversion action. Confirm the conversion ID/name, identifier presence, and event timestamps.

* * *

## **Related Articles**

  

-   **[](https://help.gohighlevel.com/en/support/solutions/articles/155000003051)[](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)**[](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)[Ad Manager - Create & Manage Google Ads Offline Conversions](https://help.gohighlevel.com/en/support/solutions/articles/155000005431)  
      
    
-   [Workflow Action – Add to Google AdWords.](https://help.gohighlevel.com/en/support/solutions/articles/155000003368)  
      
    
-   [Overview of Ad Manager Settings](https://help.gohighlevel.com/en/support/solutions/articles/155000003051) 
    
-   [Overview of Ad Manager](https://help.gohighlevel.com/en/support/solutions/articles/155000002433) 
    
-   [How to Set Up Google Ad Reporting](https://help.gohighlevel.com/en/support/solutions/articles/48001219312) 
    
-   [Understanding Attribution Source](https://help.gohighlevel.com/en/support/solutions/articles/48001219997)