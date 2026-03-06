---
title: "Workflow Action - Add Manual Sales For An Affiliate"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate"
category: "Uncategorized"
---

# Workflow Action - Add Manual Sales For An Affiliate

**TABLE OF CONTENTS**

-   [Overview](#Overview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [How to Configure](#How-to-Configure)
-   [Example](#Example)

##   

## Overview

The "Add Manual Sales For An Affiliate" action in workflows empowers you to efficiently manage and assign manual sales for specific affiliates within selected campaigns. By automating this process, commissions are calculated according to the campaign's default settings, ensuring accurate and timely rewards for your affiliates. This feature is designed to streamline your workflow, enhance commission tracking, and provide greater flexibility in managing affiliate-driven sales.

  

## Action Name

Add Manual Sales For An Affiliate

  

## Action Description

The Add Manual Sales For An Affiliate action in workflows allows you to assign manual sales for specific affiliate in the selected affiliate campaigns. After the action the commissions will be calculated accroding to the campaign's default commission settings and get assigned to the affiliate accordingly

  

## How to Configure

**1\. Select "Add Manual Sales For An Affiliate" action**

**2\. Toggle On AUTO-TRACK AFFILIATE VIA ATTRIBUTION**

Enable this option to automatically assign revenue to the appropriate affiliate based on the affiliate ID in the passed URL, eliminating the need to create separate branches for each affiliate.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745487/original/i_95Hk3VXsfVVYJpIHO8C8GJQPl9XR3hbg.jpeg?1726138633)

  

Select if you want to consider first or latest attribution  
  

**Please Note:**

What is "First" or "Latest" Attribution?  
When attributing a contact to a specific source it is common to consider the first and latest attribution. Both are always stored on every single contact.  
  
First Attribution - is the first time a contact interacts with our system, when this happens we record attribution data for that session. For example: Someone fills out a form.  
  
  
Latest Attribution - is the most recent recorded interaction with us, when this happens we record attribution data for this most recent session as well. For example: After filling out a form they then decide to purchase our product via a Two-Step Order Form. When this happens, the latest attribution data will be recorded.  
  
  
\*The latest attribution will always change based on the last recorded interaction. However, the first attribution will not.

  

**3\. Choose the Affiliate Campaign** 

Select the affiliate campaign from the dropdown. 

  

**4\. Enter the Revenue and other details**

Enter the amount of sales/revenue of the transaction for the affiliate.

Optionally add the Event date for the sale (the date when the sale happened) and Event ID (referenceID, transaction ID)

  

**5\. Save Action**

**How to use this action without using attribution tracking?**

**1\. Select "Add Manual Sales For An Affiliate" action**

**2\. Choose the Affiliate Campaign and Affiliate**

Select the affiliate campaign from the dropdown. Post this the affiliate dropdown will only show the affiliates that are added in the selected campaign.

**3\. Enter the Revenue and other details**

Enter the amount of sales/revenue of the transaction for the affiliate.

Optionally add the Event date for the sale (the date when the sale happened) and Event ID (referenceID, transaction ID)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745486/original/wBbV2Bxu6KQh0mdbhvaOkvcYkx8tmaPmUw.jpeg?1726138633)

  

**4\. Save Action**

  

## Example

**Automatically Add commission to the Affiliate when a form is submitted**

  

**Trigger**

-   **Form Submitted** - Affiliates have shared the links for the form to the potential leads. The form selected is added to the affiliate campaign.

  

**Action**

-   **Add Manual Sales for an Affiliate** \- Add the action and toggle on the "Auto Track Affiliate via Attibution" and information to rest of the fields.

  

  

**Outcome**

When the form is filled by the lead and the form has a valid link. The action will automatically map the lead to the affiliate and the commission will be paid to the relevant affiliate. With this action there is no need to create multiple branches.