---
title: "How to send data to Google Analytics within a Workflow"
url: "https://help.gohighlevel.com/support/solutions/articles/48001223243-how-to-send-data-to-google-analytics-within-a-workflow"
category: "Uncategorized"
---

# How to send data to Google Analytics within a Workflow

It is easy to set up the workflow with Google Analytics triggers. The "Google Analytics" event trigger will require you to add the following parameters in a workflow. This technique is used when you want to track more than the page view/visit of the user, you would like to track specific events like submission of the form, user optin or support calls, etc.

  

  
[Difference between GA4 and UA property](https://support.google.com/analytics/answer/11986666?hl=en#zippy=%2Cin-this-article) 

  

  

* * *

## How to Find Tracking ID in Google Analytics

  

**For UA Property -** 

1.  Open Google Analytics
2.  Click the ‘**Admin**’ tab
3.  In the left-hand column, click '**Tracking Info**'
4.  Click ‘**Tracking Code**’
5.  Your code will be available here. For Universal Analytics users, the codes start with “**UA.**”

  

**For GA4 Property -** 

1.  Open Google Analytics
2.  Click the ‘**Admin**’ tab
3.  In the left-hand column, click '**Property Settings**'
4.  Click '**Property ID**'
5.  Your code will be available here. For Google Analytics 4 users, the codes will be a number.

  

##   

* * *

## How does it work?

  
When a user selects the option in trigger or action as add to google analytics. Here's the new set of fields that will visible. 

-   Tracking id/property id
-   Event Category 
-   Event Action
-   Event label
-   Event value

  

For example - Event Category is Form Submission, Action is Exit Form Opt in and Label is Back Friday form submission. These things can be set with dynamic values with small icon tags.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298205/original/JWpX4aSQucOUmvCdoyaTbe1uTLj9BAn9vw.jpeg?1665087756)

-     
    

We follow a set of rules to categorize traffic into a specific source, and check the full page URL and the referring domain, if available, against these rules. The details about rules and sources for tracking are given in the table below. 

  

  
**Please Note:**

If you have set both utm\_medium and utm\_source, we will use them and if any one of them is not available, we will categorize them according to the below-given table.

We pass gclid (Google Click Identifier) to recognize each unique click.

  

  

<table class="clickup-table" style="margin-right: calc(10%); width: 90%;"><colgroup><col width="150" style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"><col width="262" style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"><col width="161" style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"><col width="150" style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></colgroup><tbody><tr class="tdfocus-1665088633632" data-row="row-1qk4z1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p class="tdfocus-1665088645759" style="text-align: center;"><strong>Attribute</strong></p></td><td style="width: 30.5322%;"><p class="tdfocus-1665088643958" style="text-align: center;"><strong>Rules</strong></p></td><td style="width: 27.4574%;"><p class="tdfocus-1665088636172" dir="ltr" style="text-align: center;"><strong>utm_medium</strong></p></td><td style="width: 23.0786%;"><p class="tdfocus-1665088633873" style="text-align: center;"><strong>utm_source</strong></p></td></tr><tr class="tdfocus-1665088351694" data-row="row-on3lsn" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Google Organic</p></td><td style="width: 30.5322%;"><p style="text-align: center;">Referring domain is the Google search engine.</p></td><td style="width: 27.4574%;"><p style="text-align: center;">organic</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p></td><td style="width: 23.0786%;"><p style="text-align: center;">Google</p></td></tr><tr data-row="row-th1zo4" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Paid Search</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p></td><td style="width: 30.5322%;"><p style="text-align: center;">If the utm_source is google and the referring domain is google.com.</p></td><td style="width: 27.4574%;"><p style="text-align: center;">CPC</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p></td><td style="width: 23.0786%;"><p style="text-align: center;">Google</p></td></tr><tr data-row="row-hhcuyi" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Facebook</p></td><td style="width: 30.5322%;"><p style="text-align: center;">facebook.com</p></td><td style="width: 27.4574%;"><p style="text-align: center;">referral</p></td><td style="width: 23.0786%;"><p style="text-align: center;">Facebook</p></td></tr><tr data-row="row-7rko9a" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Paid Social</p></td><td style="width: 30.5322%;"><p style="text-align: center;">The "utm_medium" parameter contains "cpc" where utm_source is&nbsp;facebook.com</p></td><td style="width: 27.4574%;"><p style="text-align: center;">CPC</p></td><td style="width: 23.0786%;"><p style="text-align: center;">Facebook</p></td></tr><tr data-row="row-rs9dmr" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Direct Traffic or Bookmarked</p></td><td style="width: 30.5322%;"><p style="text-align: center;">When there are no referring domains or tracking URLs.</p></td><td style="width: 27.4574%;"><p style="text-align: center;">none</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p></td><td style="width: 23.0786%;"><p style="text-align: center;">direct</p></td></tr><tr data-row="row-ykh9p6" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Referral</p></td><td style="width: 30.5322%;"><p style="text-align: center;">example.com</p></td><td style="width: 27.4574%;"><p style="text-align: center;">referral</p></td><td style="width: 23.0786%;"><p style="text-align: center;">example.com</p></td></tr><tr data-row="row-chhudz" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 0px; border: 0px; font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0);"><td style="width: 18.9227%;"><p style="text-align: center;">Social Media</p></td><td style="width: 30.5322%;"><p style="text-align: center;">Referring domain is a social media site like&nbsp;</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p><p style="text-align: center;">Facebook, Instagram, Youtube, credit, Twitter, Naver, Pinterest</p></td><td style="width: 27.4574%;"><p style="text-align: center;">social</p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p><p style="text-align: center;"><br style="box-sizing: border-box; color: rgb(42, 46, 52); caret-color: rgba(0, 0, 0, 0);"></p></td><td style="width: 23.0786%;"><p style="text-align: center;">Social Referring Site</p></td></tr><tr data-row="row-c4kc0w"><td colspan="1" data-row="row-c4kc0w" rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 2px 5px; border: 1px solid rgb(124, 130, 141); font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0); outline: none; overflow: auto; width: 18.9227%;"><p style="text-align: center;">Display Traffic</p></td><td colspan="1" data-row="row-c4kc0w" rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 2px 5px; border: 1px solid rgb(124, 130, 141); font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0); outline: none; overflow: auto; width: 30.5322%;"><p style="text-align: center;">example.com</p></td><td colspan="1" data-row="row-c4kc0w" rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 2px 5px; border: 1px solid rgb(124, 130, 141); font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0); outline: none; overflow: auto; width: 27.4574%;"><p style="text-align: center;">cmp, banner, display</p></td><td colspan="1" data-row="row-c4kc0w" rowspan="1" style="box-sizing: border-box; color: rgb(42, 46, 52); margin: 0px; padding: 2px 5px; border: 1px solid rgb(124, 130, 141); font: inherit; vertical-align: baseline; caret-color: rgba(0, 0, 0, 0); outline: none; overflow: auto; width: 23.0786%;"><p class="qlbt-cell-line" data-cell="cell-yw24di" data-colspan="1" data-row="row-c4kc0w" data-rowspan="1" style="text-align: center;">example.com</p></td></tr></tbody></table>

  

  

  

  

  

  

  

* * *

# **FAQ**

  

1.  #### **What is the difference between Universal Analytics and Google Analytics 4?**
    

Please see this article for more info - [https://support.google.com/analytics/answer/9964640?hl=en#zippy=%2Cin-this-article](%20https%3A//support.google.com/analytics/answer/9964640?hl=en#zippy=,in-this-article)

  

####   
**How to find the Category, action, and label in GA4?**

A Universal Analytics event has a Category, Action, and Label and is its own hit type. In Google Analytics 4 properties, every "hit" is an event; there is no distinction between hit types. For example, when someone views one of your website pages, a page\_view event is triggered. 

  
Google Analytics 4 events have no notion of Category, Action, and Label and, unlike Universal Analytics reports, Google Analytics 4 reports do not display Category, Action, and Label. Therefore, it’s better to rethink your data collection in terms of the Google Analytics 4 model rather than port your existing event structure to Google Analytics 4.

####   
  
**How to find in GA4 if the setup is working or not?**

Please go to Google Analytics, and visit the GA4 property. In the navigation, please go to Reporting > Acquisition Reports.  If the setup is done correctly, it will show up here and we would say add filters of source and medium (marked in red).

                          ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255298206/original/x2CxeoFrIDUpxT_My_liS1jTU-k_yj5hnQ.jpeg?1665087756)