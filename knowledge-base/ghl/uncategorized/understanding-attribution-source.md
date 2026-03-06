---
title: "Understanding Attribution Source"
url: "https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source"
category: "Uncategorized"
---

# Understanding Attribution Source

# **What is Attribution?**

Attribution provides a breakdown of which channels or sources a contact came from. With this information, we will be able to identify growth opportunities and determine which channels offer the most potential. For example, if we are running Facebook and Google Ads, we would like to know which is more effective at generating leads into HighLevel. Attribution can make this happen.

  

In the article below, we will walk through attribution in HighLevel and even where to go to set up your ad reporting. Let's hop in!

  

  

* * *

**TABLE OF CONTENTS**

-   [What is Attribution?](#What-is-Attribution?)
-   [What is "First" or "Latest" Attribution?](#What-is-)
-   [Where to Locate Contact Attribution Data?](#Where-to-Locate-Contact-Attribution-Data?)
-   [Types of Attribution Sources](#Types-of-Attribution-Sources)
    -   [Paid Search (Google Ads)](#Paid-Search-\(Google-Ads\))
    -   [Paid Social (Facebook & Instagram Ads)](#Paid-Social-\(Facebook-&-Instagram-Ads\))
    -   [Direct Traffic](#Direct-Traffic)
    -   [Organic Search](#Organic-Search)
    -   [Social Media](#Social-Media)
    -   [Referrals](#Referrals)
    -   [Others](#Others)
    -   [CRM UI](#CRM-UI)
    -   [Third-Party](#Third-Party)
-   [What Events Record Attribution?](#What-Events-Record-Attribution?)
-   [How is Attribution Source Determined?](#How-is-Attribution-Source-Determined?)
-   [Ad Reporting Setup](#Ad-Reporting-Setup)
    -   [Facebook and Instagram Ads Reporting Setup](#Facebook-and-Instagram-Ads-Reporting-Setup)
    -   [Google Ads Reporting Setup](#Google-Ads-Reporting-Setup)
-   [Troubleshooting Ad Reporting Issues](#Troubleshooting-Ad-Reporting-Issues)

* * *

# **What is "First" or "Latest" Attribution?**

When attributing a contact to a specific source it is common to consider the first and lastest attribution. Both are always stored on every single contact.

  

**First Attribution** - is the first time a contact interacts with our system, when this happens we record attribution data for that session. For example: Someone fills out a Contact Us Form.

  

**Latest Attribution** - is the most recent recorded interaction with us, when this happens we record attribution data for this most recent session as well. For example: After filling out a Contact Us form they then decide to purchase our product via a HighLevel Two-Step Order Form. When this happens, the latest attribution data will be recorded.

_\*The latest attribution will always change based on the last recorded interaction. However, the first attribution will not._

  

Now that we know what First and Latest Attribution is, we need to know where it is stored.

  

* * *

# **Where to Locate Contact Attribution Data?**

Rather it is the first or latest attribution data, you can locate this information in the bottom right of all contacts from the contact record.

  

Within the Sub-Account, go to Contacts > select a **contact record** > then locate the attribution data at the bottom right column under the **activity** tab.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247964170/original/VSgXZHb-pBWW3cGC7emsU4xKKLFyaKQJ3g.gif?1661800754)

###   

**For contact creation, the first and latest attribution is defined as:**

  

**\- First attribution:** The contact's first interaction is recorded in the system. This is usually their first visit to your website or an interaction with any of the sources listed above.  
  
**\- Latest attribution:** The contact's last interaction before they were converted to a contact in the system

  

* * *

  

#### [](#Where-to-find-the-first-and-latest-attribution-for-a-contact)

# **Types of Attribution Sources**

Below we will walk through each of the Attribution Sources you will see on the contact’s **_First_** _**Attribution**_ or _**Latest Attribution**_ value will be one of the following:

-   [Paid Search](#Paid-Search)
-   [Paid Social](#Paid-Social)
-   [Direct Traffic](#Direct-Traffic)
-   [Organic Search](#Organic-Search)
-   [Social Media](#Social-Media)
-   [Referrals](#Referrals)
-   [Others](#Others)
-   [CRM UI](#CRM-UI)
-   [Third-Party](#Third-Party)[](#Where-to-find-the-first-and-latest-attribution-for-a-contact)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155015178854/original/LaAFs5bfFxyo0Su56GWkBEkyyD7o2l6oQA.png?1702496706)

  

## **Paid Search (Google Ads)**

Traffic categorized under _Paid search_ comes from paid search campaigns (e.g., Google AdWords). This will help in analyzing the Google Ad Reporting.

  

**It needs to have the UTM parameters matching (It is case-sensitive)**

{YourLandingPageUrl.com}?utm\_source=adwords&utm\_medium={adname}&utm\_campaign={campaignname}&utm\_content={adgroupname}&utm\_keyword={keyword}&utm\_matchtype={matchtype}&campaign\_id={campaignid}&ad\_group\_id={adgroupid}&ad\_id={creative}

  

Google Ads UTM Parameters

<table data-identifyelement="611" style="width: 94%; margin-right: calc(6%);"><tbody class="tdfocus-1702421931616" data-identifyelement="612"><tr class="tdfocus-1702407719767" data-identifyelement="613"><td class="tdfocus-1702407105006" data-identifyelement="614" dir="ltr" style="width: 16.7698%;"><strong data-identifyelement="615">Name</strong></td><td class="tdfocus-1702407113771" data-identifyelement="616" dir="ltr" style="width: 16.9072%;"><strong data-identifyelement="617">Key</strong></td><td class="tdfocus-1702407120123" data-identifyelement="618" dir="ltr" style="width: 18.5567%;"><strong class="tdfocus-1702408136291" data-identifyelement="619" dir="ltr">Value</strong></td><td dir="ltr" style="width: 27.4914%;"><strong>Type</strong></td><td dir="ltr" style="width: 20.0000%;"><strong>Example</strong></td></tr><tr data-identifyelement="620"><td class="tdfocus-1702407128172" data-identifyelement="621" dir="ltr" style="width: 16.7698%;">UTM Source</td><td class="tdfocus-1702407156547" data-identifyelement="622" dir="ltr" style="width: 16.9072%;">utm_source</td><td class="tdfocus-1702407166909" data-del-cell="true" data-identifyelement="623" dir="ltr" style="width: 18.5567%;">adwords</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr><tr data-identifyelement="624"><td class="tdfocus-1702407436532" data-del-cell="true" data-identifyelement="625" dir="ltr" style="width: 16.7698%;">UTM Medium</td><td class="tdfocus-1702407175851" data-identifyelement="626" dir="ltr" style="width: 16.9072%;">utm_medium</td><td class="tdfocus-1702407472981" data-identifyelement="627" dir="ltr" style="width: 18.5567%;">{adname}</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr><tr data-identifyelement="628"><td class="tdfocus-1702407444656" data-identifyelement="629" dir="ltr" style="width: 16.7698%;">UTM Campaign</td><td class="tdfocus-1702407177954" data-identifyelement="630" dir="ltr" style="width: 16.9072%;">utm_campaign</td><td class="tdfocus-1702407495305" data-identifyelement="631" dir="ltr" style="width: 18.5567%;">{campaignname}</td><td dir="ltr" style="width: 27.4914%;">manual, changeable</td><td dir="ltr" style="width: 20.0000%;">summer_sale</td></tr><tr data-identifyelement="632"><td class="tdfocus-1702407451286" data-identifyelement="633" dir="ltr" style="width: 16.7698%;">UTM Content</td><td class="tdfocus-1702407248890" data-identifyelement="634" style="width: 16.9072%;">utm_content</td><td class="tdfocus-1702407665456" data-identifyelement="635" dir="ltr" style="width: 18.5567%;">{adgroupname}</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr><tr data-identifyelement="636"><td class="tdfocus-1702407462633" data-identifyelement="637" dir="ltr" style="width: 16.7698%;">Match Type</td><td class="tdfocus-1702407257617" data-identifyelement="638" dir="ltr" style="width: 16.9072%;">utm_matchtype</td><td class="tdfocus-1702407673432" data-identifyelement="639" dir="ltr" style="width: 18.5567%;">{matchtype}</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr><tr data-identifyelement="640"><td class="tdfocus-1702407519011" data-identifyelement="641" dir="ltr" style="width: 16.7698%;">Campaign ID</td><td class="tdfocus-1702407311739" data-identifyelement="642" dir="ltr" style="width: 16.9072%;">campaign_id</td><td class="tdfocus-1702407674789" data-identifyelement="643" dir="ltr" style="width: 18.5567%;">{adgroupid}</td><td dir="ltr" style="width: 27.4914%;">set by Google Ads, constant</td><td dir="ltr" style="width: 20.0000%;">123456789</td></tr><tr class="tdfocus-1702407360388" data-identifyelement="644"><td class="tdfocus-1702407357624" data-identifyelement="645" dir="ltr" style="width: 16.7698%;">Ad Group ID</td><td class="tdfocus-1702407352402" data-identifyelement="646" dir="ltr" style="width: 16.9072%;">ad_group_id</td><td class="tdfocus-1702407359137" data-identifyelement="647" dir="ltr" style="width: 18.5567%;">{adgroupid}</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr><tr data-identifyelement="648"><td class="tdfocus-1702407392814" data-identifyelement="649" dir="ltr" style="width: 16.7698%;">Ad ID</td><td class="tdfocus-1702407393300" data-identifyelement="650" dir="ltr" style="width: 16.9072%;">ad_id</td><td class="tdfocus-1702408146130" data-identifyelement="651" dir="ltr" style="width: 18.5567%;">{creative}</td><td style="width: 27.4914%;"><br></td><td style="width: 20.0000%;"><br></td></tr></tbody></table>

  

For more information, see [](#Google-Ads-Attribution-Setup)[How to Set Up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting).

  

  

## **Paid Social** 

Traffic categorized under _Paid social_ comes from a paid social campaign. This will help in analyzing the Facebook Ad Reporting if the leads are coming from Facebook

  

**It needs to have the UTM parameters matching (It is case-sensitive)**

{YourLandingPageUrl.com}?utm\_source=fb\_ad&utm\_medium={{adset.name}}&utm\_campaign={{campaign.name}}&utm\_content={{ad.name}}&campaign\_id={{campaign.id}}

  

Facebook and Instagram Ads UTM Parameters

<table data-identifyelement="611" style="width: 89%; margin-right: calc(11%);"><tbody class="tdfocus-1702421931616" data-identifyelement="612"><tr class="tdfocus-1702407719767" data-identifyelement="613"><td class="tdfocus-1702407105006" data-identifyelement="614" dir="ltr" style="width: 16.6957%;"><strong data-identifyelement="615">Name</strong></td><td class="tdfocus-1702407113771" data-identifyelement="616" dir="ltr" style="width: 17.2174%;"><strong data-identifyelement="617">Key</strong></td><td class="tdfocus-1702407120123" data-identifyelement="618" dir="ltr" style="width: 20.2208%;"><strong class="tdfocus-1702408136291" data-identifyelement="619" dir="ltr">Value</strong></td><td dir="ltr" style="width: 31.1559%;"><strong>Type</strong></td><td dir="ltr" style="width: 14.697%;"><strong>Example</strong></td></tr><tr data-identifyelement="620"><td class="tdfocus-1702407128172" data-identifyelement="621" dir="ltr" style="width: 16.6957%;">UTM Source</td><td class="tdfocus-1702407156547" data-identifyelement="622" dir="ltr" style="width: 17.2174%;">utm_source</td><td class="tdfocus-1702407166909" data-del-cell="true" data-identifyelement="623" dir="ltr" style="width: 20.2208%;">fb_ad</td><td style="width: 31.1559%;"><br></td><td style="width: 14.697%;"><br></td></tr><tr data-identifyelement="624"><td class="tdfocus-1702407436532" data-del-cell="true" data-identifyelement="625" dir="ltr" style="width: 16.6957%;">UTM Medium</td><td class="tdfocus-1702407175851" data-identifyelement="626" dir="ltr" style="width: 17.2174%;">utm_medium</td><td class="tdfocus-1702407472981" data-identifyelement="627" dir="ltr" style="width: 20.2208%;">{{adset.name}}</td><td style="width: 31.1559%;"><br></td><td style="width: 14.697%;"><br></td></tr><tr data-identifyelement="628"><td class="tdfocus-1702407444656" data-identifyelement="629" dir="ltr" style="width: 16.6957%;">UTM Campaign</td><td class="tdfocus-1702407177954" data-identifyelement="630" dir="ltr" style="width: 17.2174%;">utm_campaign</td><td class="tdfocus-1702407495305" data-identifyelement="631" dir="ltr" style="width: 20.2208%;">{{campaign.name}}</td><td dir="ltr" style="width: 31.1559%;">manual, changeable<br></td><td dir="ltr" style="width: 14.697%;">summer_sale<br></td></tr><tr data-identifyelement="632"><td class="tdfocus-1702407451286" data-identifyelement="633" dir="ltr" style="width: 16.6957%;">UTM Content</td><td class="tdfocus-1702407248890" data-identifyelement="634" style="width: 17.2174%;">utm_content</td><td class="tdfocus-1702407665456" data-identifyelement="635" dir="ltr" style="width: 20.2208%;">{{ad.name}}</td><td style="width: 31.1559%;"><br></td><td style="width: 14.697%;"><br></td></tr><tr data-identifyelement="640"><td class="tdfocus-1702407519011" data-identifyelement="641" dir="ltr" style="width: 16.6957%;">Campaign ID</td><td class="tdfocus-1702407311739" data-identifyelement="642" dir="ltr" style="width: 17.2174%;">campaign_id</td><td class="tdfocus-1702407674789" data-identifyelement="643" dir="ltr" style="width: 20.2208%;">{{campaign.id}}</td><td dir="ltr" style="width: 31.1559%;">set by Facebook Ads, constant<br></td><td dir="ltr" style="width: 14.697%;">123456789</td></tr></tbody></table>

  

For more information see, [](https://help.gohighlevel.com/a/solutions/articles/48001219997/edit?portalId=48000045315#Facebook-\(and-Instagram\)-Ads-Attribution-Setup)[How to Setup Facebook Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting).

  

## **Direct Traffic**

Traffic categorized under _Direct traffic_ does not have an indication of its source (See row 8 above). Typically, these people typed the URL directly in their browser or removed all query parameters before entering a site. 

  

To view the source URLs for these visitors, click the Direct traffic source.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48247964541/original/eIy9MeT34UCvxRzk02GYCS7qwWMvBizWbQ.gif?1661800923)

  

  

## **Organic Search**

Traffic categorized under _Organic Search_ comes from non-paid search results in known search engines, such as Google, Bing, Yahoo, and Duckduckgo. 

  

To view the keywords used in the search engine, click the Organic search source in the Sources table. 

When there are Unknown keywords (SSL), it is likely due to the search engine encrypting user data. For example, Google encrypts all the search terms entered by their users.

  

  

## **Social Media**

Traffic categorized under Organic social comes from social media websites or apps. An example is when a visitor shares your content or website on their social media account, and their followers visit your content or visit the links inside your messages on social media.

  

  

## **Referrals**

Traffic categorized under Referrals comes from external sites that link to your website. It should not be a search engine or social media site. A referring domain may have multiple pages that link to your site.

  

  

## **Others**

When a lead is generated through various channels such as incoming calls, SMS, emails, WhatsApp messages, or Facebook messages, it is important to display all the information in one place. This helps keep track of all the leads and ensures that none fall through the cracks. By having a centralized system to manage all the leads, businesses can ensure they are not missing out on potential customers.

  

  

## **CRM UI**

When a lead is created manually through the HighLevel App CRM, its source is defined as this. This categorization helps in identifying leads that were created manually within the HighLevel App CRM only.

  

  

## **Third-Party**

When a lead is created by a third-party tool like Zap, its source is defined as this. This categorization helps identify leads created through third-party integration.

  

* * *

# **What Events Record Attribution?**

Within the same session, a contact must do one or more of the following actions:

1.  Form/Survey Submission
2.  Calendar Booking Submission
3.  Chat Widget (After Submitting Contact Info)
4.  Order Form Submission (One or Two-Step)

  

**This action must be a** **HighLevel Form, Survey, Calendar, Chat Widget and Order Form in order for all attribution data to be captured**. Non-HighLevel events will not capture attribution data -- this includes UTM Parameter data.

  

* * *

# **How is Attribution Source Determined?**

When you want to understand why a contact attribution source was added by HighLevel to the contact, you need to understand what we look for when determining attribution data.

  

All attribution events follow a set of rules to categorize traffic into a specific source, and we check the full page URL and the referring domain, if available, against these rules.

They are applied in this order:

  

<table class="clickup-table tdfocus-1702398402196" data-identifyelement="621" style="width: 94%; margin-left: calc(6%);"><tbody data-identifyelement="622"><tr data-identifyelement="623" data-row="row-qu1rux"><td colspan="1" data-cell="cell-ohbigd" data-identifyelement="624" data-row="row-qu1rux" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-09665225-8dda-4013-a74a-1536dee4f6bf" data-cell="cell-ohbigd" data-colspan="1" data-identifyelement="625" data-row="row-qu1rux" data-rowspan="1">Order</div></td><td colspan="1" data-cell="cell-l6pzzx" data-identifyelement="626" data-row="row-qu1rux" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-71e4f8b7-6ca5-41c8-960f-21cff6bf831b" data-cell="cell-l6pzzx" data-colspan="1" data-identifyelement="627" data-row="row-qu1rux" data-rowspan="1">Rule</div></td><td colspan="1" data-cell="cell-6onx7c" data-identifyelement="628" data-row="row-qu1rux" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-6dc39579-734d-4cde-ac2a-3c3defceb366" data-cell="cell-6onx7c" data-colspan="1" data-identifyelement="629" data-row="row-qu1rux" data-rowspan="1">Source</div></td></tr><tr data-identifyelement="630" data-row="row-waiyyy"><td colspan="1" data-cell="cell-iz28b7" data-identifyelement="631" data-row="row-waiyyy" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-f5b9a205-c489-4344-98b4-7ddfaa379d7f" data-cell="cell-iz28b7" data-colspan="1" data-identifyelement="632" data-row="row-waiyyy" data-rowspan="1">1</div></td><td colspan="1" data-cell="cell-bzkoab" data-identifyelement="633" data-row="row-waiyyy" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-57a8f46b-3434-4b76-9c96-9ffc424b54a6" data-cell="cell-bzkoab" data-colspan="1" data-identifyelement="634" data-row="row-waiyyy" data-rowspan="1" dir="ltr">The "utm_source" parameter contains the word “adwords” for Google Ad.&nbsp;</div></td><td colspan="1" data-cell="cell-x4o607" data-identifyelement="636" data-row="row-waiyyy" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-d1fc8750-bea7-4620-8dc3-cc27f4f48aaa" data-cell="cell-x4o607" data-colspan="1" data-identifyelement="637" data-row="row-waiyyy" data-rowspan="1">Paid Search</div></td></tr><tr data-identifyelement="638" data-row="row-8yzcm2"><td colspan="1" data-cell="cell-qs628g" data-identifyelement="639" data-row="row-8yzcm2" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-eb3e96a4-275c-4169-a14a-248900bdfc03" data-cell="cell-qs628g" data-colspan="1" data-identifyelement="640" data-row="row-8yzcm2" data-rowspan="1">2</div></td><td colspan="1" data-cell="cell-pq9d6m" data-identifyelement="641" data-row="row-8yzcm2" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-5cef45ad-7930-43ff-8482-a769698dc94f" data-cell="cell-pq9d6m" data-colspan="1" data-identifyelement="642" data-row="row-8yzcm2" data-rowspan="1" dir="ltr">The "gclid", "wbraid" or "gbraid" parameter is present, as they are Google click IDs.</div><div class="qlbt-cell-line tdfocus-1687201985558" data-block-id="block-e8172723-cc2e-417a-a973-78b38bbf36ff" data-cell="cell-pq9d6m" data-colspan="1" data-identifyelement="643" data-row="row-8yzcm2" data-rowspan="1">The "msclkid" parameter is present, it is the Microsoft click ID for Bing/Yahoo</div></td><td colspan="1" data-cell="cell-4spevr" data-identifyelement="644" data-row="row-8yzcm2" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-3251794e-12e0-4239-b077-84f8209a2d0f" data-cell="cell-4spevr" data-colspan="1" data-identifyelement="645" data-row="row-8yzcm2" data-rowspan="1">Paid Search</div></td></tr><tr data-identifyelement="620"><td data-identifyelement="621" dir="ltr" style="width: 6.6551%;"><div data-identifyelement="728">3</div></td><td data-identifyelement="622" style="width: 75.8634%;"><div data-identifyelement="729">The "utm_source", "utm_medium", or "utm_campaign" parameter is present and the referring domain is google.com.</div></td><td data-identifyelement="626"><div class="qlbt-cell-line" data-block-id="block-7a85a42d-acee-49ca-8a9e-3502793bfaac" data-cell="cell-pdmipj" data-colspan="1" data-identifyelement="668" data-row="row-gv5hva" data-rowspan="1" dir="ltr">Paid Search</div></td></tr><tr data-identifyelement="628"><td data-identifyelement="629" dir="ltr" style="width: 6.6551%;"><div data-identifyelement="730">4</div></td><td data-identifyelement="630" style="width: 75.8634%;"><div data-identifyelement="731" dir="ltr">The "utm_source" parameter contains the word “fb_ad” for Facebook Ad.</div><div data-identifyelement="732">We have deprecated utm_source=facebook, <strong data-identifyelement="573" dir="ltr">please use "fb_ad". <span dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">The "utm_source" parameter contains the word “linkedin_ad” for Linkedin Ads, "twitter_ad" for Twitter Ads and "reddit_ad" for Reddit.&nbsp;</span></strong><br><strong data-identifyelement="573" dir="ltr"><span dir="ltr" style="color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: left; text-indent: 0px; display: inline !important;">The "ctwa_clid" is present for whatsapp conversations&nbsp;</span></strong></div></td><td data-identifyelement="636"><div class="qlbt-cell-line" data-block-id="block-e4263cc3-bda2-49b4-b985-28a9b1b4ef8f" data-cell="cell-vzuj1y" data-colspan="1" data-identifyelement="653" data-row="row-7b1ki4" data-rowspan="1" dir="ltr">Paid Social</div></td></tr><tr data-identifyelement="654" data-row="row-p3sumx"><td colspan="1" data-cell="cell-rsenh4" data-identifyelement="655" data-row="row-p3sumx" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-80d04aef-188d-48db-b32a-509a2503eeb6" data-cell="cell-rsenh4" data-colspan="1" data-identifyelement="656" data-row="row-p3sumx" data-rowspan="1" dir="ltr">5</div></td><td colspan="1" data-cell="cell-80wn5w" data-identifyelement="657" data-row="row-p3sumx" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-637ca8cb-03b1-4c4d-97db-58601c896310" data-cell="cell-80wn5w" data-colspan="1" data-identifyelement="658" data-row="row-p3sumx" data-rowspan="1" dir="ltr">The referring domain is a social media site.&nbsp;</div></td><td colspan="1" data-cell="cell-k0zlkv" data-identifyelement="659" data-row="row-p3sumx" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-1f597418-6ab4-492b-b2a5-3acdbe45da06" data-cell="cell-k0zlkv" data-colspan="1" data-identifyelement="660" data-row="row-p3sumx" data-rowspan="1">Social Media</div></td></tr><tr data-identifyelement="669" data-row="row-spiw6f"><td colspan="1" data-cell="cell-esfg9j" data-identifyelement="670" data-row="row-spiw6f" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-5e5823f9-2493-4cb5-8b86-48605257b645" data-cell="cell-esfg9j" data-colspan="1" data-identifyelement="671" data-row="row-spiw6f" data-rowspan="1" dir="ltr">6</div></td><td colspan="1" data-cell="cell-nd4835" data-identifyelement="672" data-row="row-spiw6f" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-8602024b-ab3c-4793-8d86-f26a652efd3d" data-cell="cell-nd4835" data-colspan="1" data-identifyelement="673" data-row="row-spiw6f" data-rowspan="1" dir="ltr">Referring domain is a search engine. (Google, Yahoo, Bing, Duckduckgo)</div></td><td colspan="1" data-cell="cell-4vojzg" data-identifyelement="674" data-row="row-spiw6f" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-e9defdd4-92a3-461c-ac38-5683f8a5fbc4" data-cell="cell-4vojzg" data-colspan="1" data-identifyelement="675" data-row="row-spiw6f" data-rowspan="1">Organic Search</div></td></tr><tr data-identifyelement="676" data-row="row-9fa7k1"><td colspan="1" data-cell="cell-qbovy8" data-identifyelement="677" data-row="row-9fa7k1" rowspan="1" style="width: 6.6551%;"><div class="qlbt-cell-line" data-block-id="block-277245bc-e8d6-4d7f-942f-fd07f723dfd6" data-cell="cell-qbovy8" data-colspan="1" data-identifyelement="678" data-row="row-9fa7k1" data-rowspan="1">7</div></td><td colspan="1" data-cell="cell-xp8aty" data-identifyelement="679" data-row="row-9fa7k1" rowspan="1" style="width: 75.8634%;"><div class="qlbt-cell-line" data-block-id="block-9ab4fadd-fcaa-44e9-949d-3e0b4b973cdc" data-cell="cell-xp8aty" data-colspan="1" data-identifyelement="680" data-row="row-9fa7k1" data-rowspan="1">Referring domain is&nbsp;not a social media site&nbsp;or&nbsp;search engine.</div></td><td colspan="1" data-cell="cell-knxbrt" data-identifyelement="681" data-row="row-9fa7k1" rowspan="1"><div class="qlbt-cell-line" data-block-id="block-15bb19a9-3f6a-4444-93ef-d0d0ecbf41c2" data-cell="cell-knxbrt" data-colspan="1" data-identifyelement="682" data-row="row-9fa7k1" data-rowspan="1">Referral</div></td></tr><tr data-identifyelement="683" data-row="row-hs64qx"><td class="tdfocus-1684769403866" colspan="1" data-cell="cell-cto0ng" data-identifyelement="684" data-row="row-hs64qx" style="width: 6.6551%;"><div class="qlbt-cell-line tdfocus-1684769413967" data-block-id="block-ff457d52-8a66-4966-8d62-315e965309b5" data-cell="cell-cto0ng" data-colspan="1" data-identifyelement="685" data-row="row-hs64qx" data-rowspan="1">8</div></td><td class="tdfocus-1684769401797" colspan="1" data-cell="cell-ipmekt" data-identifyelement="686" data-row="row-hs64qx" rowspan="1" style="width: 75.8634%;"><div data-identifyelement="733">No referring domain or tracking URL.</div></td><td colspan="1" data-cell="cell-96yx42" data-identifyelement="688" data-row="row-hs64qx"><div class="qlbt-cell-line tdfocus-1684769417593" data-block-id="block-8801c49b-08ff-4027-90f7-79f267ae2874" data-cell="cell-96yx42" data-colspan="1" data-identifyelement="689" data-row="row-hs64qx" data-rowspan="1" dir="ltr">Direct Traffic</div></td></tr><tr data-identifyelement="1037"><td class="tdfocus-1684769403866" colspan="1" data-cell="cell-cto0ng" data-identifyelement="684" data-row="row-hs64qx" dir="ltr" style="width: 6.6551%;"><div data-identifyelement="734">9</div></td><td class="tdfocus-1684769401797" colspan="1" data-cell="cell-ipmekt" data-identifyelement="686" data-row="row-hs64qx" dir="ltr" style="width: 75.8634%;"><div data-identifyelement="735">This shows up if the lead came from an Incoming Call/SMS/Email/WhatsApp/Facebook message or any other source not covered above.</div></td><td class="tdfocus-1684769425529" colspan="1" data-cell="cell-96yx42" data-identifyelement="688" data-row="row-hs64qx" dir="ltr"><div data-identifyelement="736">Others</div></td></tr><tr class="tdfocus-1687201728470" data-identifyelement="737"><td class="tdfocus-1684769403866" colspan="1" data-cell="cell-cto0ng" data-identifyelement="684" data-row="row-hs64qx" dir="ltr" style="width: 6.6551%;"><div data-identifyelement="738">10</div></td><td class="tdfocus-1684769401797" colspan="1" data-cell="cell-ipmekt" data-identifyelement="686" data-row="row-hs64qx" dir="ltr" style="width: 75.8634%;"><div data-identifyelement="739">Lead is manually created within the CRM system<span data-identifyelement="740" dir="ltr">&nbsp; &nbsp;&nbsp;</span></div></td><td class="tdfocus-1684769425529" colspan="1" data-cell="cell-96yx42" data-identifyelement="688" data-row="row-hs64qx" dir="ltr"><div data-identifyelement="741">CRM UI</div><div data-empty="true" data-identifyelement="742"><br data-identifyelement="743"></div></td></tr><tr data-identifyelement="744"><td class="tdfocus-1684769403866" colspan="1" data-cell="cell-cto0ng" data-identifyelement="684" data-row="row-hs64qx" dir="ltr" style="width: 6.6551%;"><div data-identifyelement="745">11</div></td><td class="tdfocus-1684769401797" colspan="1" data-cell="cell-ipmekt" data-identifyelement="686" data-row="row-hs64qx" dir="ltr" style="width: 75.8634%;"><div data-identifyelement="746">Lead is generated from a third-party integration tool like Zap<span data-identifyelement="747" dir="ltr">&nbsp; &nbsp;&nbsp;</span></div></td><td class="tdfocus-1684769425529" colspan="1" data-cell="cell-96yx42" data-identifyelement="688" data-row="row-hs64qx" dir="ltr"><div data-identifyelement="748">Third-Party</div><div data-empty="true" data-identifyelement="749" style="margin-left: 40px;"><br data-identifyelement="750"></div></td></tr></tbody></table>

  

Now that we can see how HighLevel chooses to apply a specific attribution source, let's walk through each attribution source together.

  

* * *

# **Ad Reporting Setup**

When you need to set up your Paid Ads attribution tracking, please see the following documentation for Facebook, Instagram, and Google Ads Set Up.

  

## Facebook and Instagram Ads Reporting Setup

To set up Facebook and Instagram ads attribution, please visit [](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting)[Facebook Ad Reporting Setup](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting).

  

Additional Facebook Ads Resources

[How to set up a Funnel Event Pixel for Facebook Conversion API](https://help.gohighlevel.com/support/solutions/articles/48001236281-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-) 

[How to set up and install a Meta Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) 

[Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough) 

[Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)

[](https://www.facebook.com/business/help/2360940870872492)

  

  

## Google Ads Reporting Setup

To set up Google Ads Attribution, please visit [Google Ad Reporting Setup](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting).[](https://support.google.com/google-ads/answer/6305348?hl=en-GB&sjid=16240213768626225606-NC#zippy=%2Cfinal-url-tracking-template-or-custom-parameter)

  

Additional Google Ads Resources

[Google Analytics 4 Tracking](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking) 

[Understanding Google Ad Reporting Terminology](https://help.gohighlevel.com/support/solutions/articles/48001219241-understanding-google-ad-reporting-terminology) 

[Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)

  

For any additional assistance, you can contact us 24/7. In addition, please note you may need to consult an ad specialist for more advanced reporting and attribution setup for external reporting and attribution tracking.

  

* * *

# **Troubleshooting Ad Reporting Issues**

If your attribution data is not being recorded in HighLevel after you have set up your [Facebook or Instagram Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting) or your [Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting), we can try the following troubleshooting steps to fix this...

  

1.  **Check for Spaces or Misspellings in the Final URL**
    
    When creating your UTM parameters, be sure to check for any misspellings, extra spaces from copying, or case sensitivity. The examples provided should be used, it is best to copy and paste them. Take a moment to confirm it was done correctly. Also, the examples are case sensitive, meaning an upper case or lower case being present where it shouldn't be will cause errors in attribution.  
      
    
    Final URL = The URL a contact clicks on from their ad, which takes them to where they take the next action on your site or form.  
      
    
2.  **Confirm that Submissions Happen on the Final URL  
    **For the UTM parameters to be recorded, when a user lands from an ad they cannot move from this page. For example, if someone lands on a page and then clicks a button that moves them to another page to submit a form, no attribution data from URMs can be added. So we need to keep them on this page when they fill out the form.  
      
    A workaround would be to add a pop-up or a section with the submission form to ensure the data is captured.  
      
    
3.  **Do NOT add any custom UTM parameters to Facebook, Instagram, or Google Ads. Please be sure to use our HighLevel UTM templates as instructed in the setup directions.**  
    Please do not add custom UTM parameters to the templated examples provided in the setup guides. This could cause issues and may result in missing data or failure to record any data.