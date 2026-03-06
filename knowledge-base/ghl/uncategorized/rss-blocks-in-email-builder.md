---
title: "RSS Blocks In Email Builder"
url: "https://help.gohighlevel.com/support/solutions/articles/48001201780-rss-blocks-in-email-builder"
category: "Uncategorized"
---

# RSS Blocks In Email Builder

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [Usage](#Usage)
    -   [RSS Header](#RSS-Header)
        -   [Basic Vs Custom in RSS Header](#Basic-Vs-Custom-in-RSS-Header%C2%A0) 
    -   [RSS Items](#RSS-Items)
        -   [Basic Vs Custom in RSS Items](#Basic-Vs-Custom-in-RSS-Items%C2%A0) 
    -   [HTML Based RSS Feed](#HTML-Based-RSS-Feed)
    -   [Scheduling:](#Scheduling%3A)
        -   [Sending Options:](#Sending-Options%3A)
    -   [Testing RSS Emails](#Testing-RSS-Emails)
    -   [View and Edit RSS Campaign](#View-and-Edit-RSS-Campaign%3A)

#   
**Overview**

The RSS Elements in the HighLevel Email Builder allow you to automatically send emails containing dynamically inserted content when a new RSS (Real Simple Syndication) item is published. 

# **Usage**

## RSS Header

  

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855351/original/vkt1WTZi4swPcywq_8ebw7FWUejefs3UTQ.png?1636131879)

**RSS Header Block**

  

This will dynamically populate <channel> tags from your RSS Feed ([learn more about the <channel> tag here](http://www.landofcode.com/rss-tutorials/rss-channels.php)). The RSS Header Element supports the following RSS channel tags - use their respective Custom Value to populate the email with the corresponding tag value:

  

<table border="1" data-identifyelement="529" style="box-sizing: border-box; border-collapse: collapse; width: 705.594px;"><tbody data-identifyelement="530" style="box-sizing: border-box;"><tr data-identifyelement="531" style="box-sizing: border-box;"><td data-identifyelement="532" style="box-sizing: border-box; width: 352.297px;"><strong data-identifyelement="533" style="box-sizing: border-box; font-weight: bolder;">RSS Tags</strong></td><td data-identifyelement="534" style="box-sizing: border-box; width: 352.297px;"><strong data-identifyelement="535" style="box-sizing: border-box; font-weight: bolder;">Custom Value For HL</strong></td></tr><tr data-identifyelement="536" style="box-sizing: border-box;"><td data-identifyelement="537" style="box-sizing: border-box; width: 352.297px;">&lt;title&gt;</td><td data-identifyelement="538" style="box-sizing: border-box; width: 352.297px;">{{rss_feed.title}}</td></tr><tr data-identifyelement="539" style="box-sizing: border-box;"><td data-identifyelement="540" style="box-sizing: border-box; width: 352.297px;">&lt;description&gt;</td><td data-identifyelement="541" style="box-sizing: border-box; width: 352.297px;">{{rss_feed.description}}</td></tr><tr data-identifyelement="542" style="box-sizing: border-box;"><td data-identifyelement="543" style="box-sizing: border-box; width: 352.297px;">&lt;link&gt;</td><td data-identifyelement="544" style="box-sizing: border-box; width: 352.297px;">{{rss_feed.url}}</td></tr><tr data-identifyelement="545" style="box-sizing: border-box;"><td data-identifyelement="546" style="box-sizing: border-box; width: 352.297px;">&lt;lastBuildDate&gt;</td><td data-identifyelement="547" style="box-sizing: border-box; width: 352.297px;">{{<span data-identifyelement="548" style="box-sizing: border-box;">rss_feed.date}}</span></td></tr></tbody></table>

### Basic Vs Custom in RSS Header 

  

When using the RSS Header block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855348/original/TXhqhCn_ybN6lz8F_4U1No7-vaLkA_Sj1w.png?1636131878)

  

  

-   **Basic**: adds the following non-editable text in Text Editor

    <h1 class="h1">{{rss\_feed.title}}</h1>    {{rss\_feed.description}}<br />    <br />

-     
    -   **Custom:** adds the following editable text in Text Editor

    Updates from {{rss\_feed.url}}    <h1>{{rss\_feed.title}}</h1>    <strong>{{rss\_feed.description}}</strong><br />    <br />    <strong>In the {{rss\_feed.date}} edition:</strong><br />

NOTE: The four custom RSS <channel> variables can also be used in the subject field like this: ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855344/original/c2Vi4rUtLOvx56OiuS-hfAmtJXBuLF2hng.png?1636131877)

## RSS Items

  

**RSS Items Block**

  

The RSS Items block accepts the following Custom Values and will dynamically insert their corresponding RSS Tags:

  

<table border="1" data-identifyelement="588" style="box-sizing: border-box; border-collapse: collapse; width: 705.594px; height: 220px;"><tbody data-identifyelement="589" style="box-sizing: border-box;"><tr data-identifyelement="590" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="591" style="box-sizing: border-box; width: 234.859px; height: 22px;"><strong data-identifyelement="592" style="box-sizing: border-box; font-weight: bolder;">RSS Tags&nbsp;</strong></td><td data-identifyelement="593" style="box-sizing: border-box; width: 234.859px; height: 22px;"><strong data-identifyelement="594" style="box-sizing: border-box; font-weight: bolder;">Custom Values</strong></td><td data-identifyelement="595" style="box-sizing: border-box; width: 234.875px; height: 22px;"><strong data-identifyelement="596" style="box-sizing: border-box; font-weight: bolder;">Description</strong></td></tr><tr data-identifyelement="597" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="598" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;title/&gt;</td><td data-identifyelement="599" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.title}}</td><td data-identifyelement="600" style="box-sizing: border-box; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="601" style="box-sizing: border-box;">The title of the RSS item, usually a blog post.</div><div class="qlbt-cell-line" data-identifyelement="602" style="box-sizing: border-box;">title</div><div class="qlbt-cell-line" data-identifyelement="603" style="box-sizing: border-box;">&nbsp;</div></td></tr><tr data-identifyelement="604" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="605" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;description/&gt;</td><td data-identifyelement="606" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.content}}</td><td data-identifyelement="607" style="box-sizing: border-box; width: 234.875px; height: 22px;">A summary of the RSS item in HTML format, which includes information inside the &lt;description&gt; tag. If there is no &lt;description&gt; tag in your feed, it will display the information in the &lt;content:encoded&gt; tag</td></tr><tr data-identifyelement="608" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="609" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;link/&gt;</td><td data-identifyelement="610" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.url}}</td><td data-identifyelement="611" style="box-sizing: border-box; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="612" style="box-sizing: border-box;">The text link to the RSS item online, which can be displayed as text or used in a hyperlink.</div><div class="qlbt-cell-line" data-identifyelement="613" style="box-sizing: border-box;">content:encoded</div></td></tr><tr data-identifyelement="614" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="615" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;content:encoded/&gt;</td><td data-identifyelement="616" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.content_full}</td><td data-identifyelement="617" style="box-sizing: border-box; width: 234.875px; height: 22px;">The full content of the information inside the &lt;content:encoded&gt; tag for an RSS item, in HTML format. If there is no &lt;content:encoded&gt; tag, it will display the information in the &lt;description&gt; tag.</td></tr><tr data-identifyelement="618" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="619" style="box-sizing: border-box; width: 234.859px; height: 22px;">pubDate</td><td data-identifyelement="620" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.date}}</td><td data-identifyelement="621" style="box-sizing: border-box; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="622" style="box-sizing: border-box;">The date the RSS item was published, in format `MMM DD, YYYY hh:mm A`. We will provide support for custom formatting in the future.</div></td></tr><tr data-identifyelement="623" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="624" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;dc:creator&gt;</td><td data-identifyelement="625" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.author}}</td><td data-identifyelement="626" style="box-sizing: border-box; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="627" style="box-sizing: border-box;">The author of the RSS item</div><div class="qlbt-cell-line" data-identifyelement="628" style="box-sizing: border-box;">media:content</div></td></tr><tr data-identifyelement="629" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="630" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;media:content&gt;</td><td data-identifyelement="631" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{rss_item.imageUrl }}</td><td data-identifyelement="632" style="box-sizing: border-box; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="633" style="box-sizing: border-box;">This will provide the src URL of image as text in order to render it as image, use {{rss_img}}</div><div class="qlbt-cell-line" data-identifyelement="634" style="box-sizing: border-box;">&nbsp;</div><div class="qlbt-cell-line" data-identifyelement="635" style="box-sizing: border-box;">&nbsp;</div><div class="qlbt-cell-line" data-identifyelement="636" style="box-sizing: border-box;">{{rss_img alt="alt_text" src=rss_item.imageUrl height="200" width="200"}}</div></td></tr><tr data-identifyelement="637" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="638" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;item&gt;</td><td data-identifyelement="639" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{#rss_items rss_items}}</td><td data-identifyelement="640" style="box-sizing: border-box; width: 234.875px; height: 22px;">This tag doesn't display anything. It's used to open the customized formatting for individual RSS items.</td></tr><tr data-identifyelement="641" style="box-sizing: border-box; height: 22px;"><td data-identifyelement="642" style="box-sizing: border-box; width: 234.859px; height: 22px;">&lt;/item&gt;</td><td data-identifyelement="643" style="box-sizing: border-box; width: 234.859px; height: 22px;">{{/rss_items}}</td><td data-identifyelement="644" style="box-sizing: border-box; width: 234.875px; height: 22px;">This tag doesn't display anything. It's used to close the customized formatting for individual RSS items.</td></tr></tbody></table>

### Basic Vs Custom in RSS Items 

  

When using the RSS Items block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855347/original/L0LyUj9IorHU0sZYjFppVorh01rAx3ll6A.png?1636131878)

-     
    -   **Basic** : adds the following non editable formatted text in Text Editor

          {{#rss\_items rss\_items}}      <h2 class="mc-toc-title"><a href="{{rss\_item.url}}" target="\_blank">   {{rss\_item.title}}      </a> </h2>      {{rss\_item.content}}      <br />      <a href="{{rss\_item.url}}" target="\_blank">Read on &raquo;</a><br />      <br />     {{/rss\_items}}

-     
    -   **Custom:** adds the following formatted text and Text editor will become editable 

    {{#rss\_items rss\_items}}    <h2 class="mc-toc-title"><a href="{{rss\_item.url}}" target="\_blank">{{rss\_item.title}}</a></h2>    <em>By {{rss\_item.author}} on {{rss\_item.date}}</em><br />    {{rss\_item.content\_full}}<br />    <a href="{{rss\_item.url}}" target="\_blank">Read in browser &raquo;</a><br />    <br />    {{/rss\_items}}<br />    <br />    <br />    <h3 class="h3">Recent Articles:</h3>   {{#rss\_items rss\_items}}

## HTML Based RSS Feed

The values returned by the RSS-based custom variable `{{rss_item.title}}` are HTML-escaped. For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;` or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-stash", `{{{`:

Eg: if your RSS feed source is something like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

without "triple-stash" it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855357/original/78KNj092LUO9cZRouzUlv84qXhEsZtHv3g.png?1636131879)

once you will use "triple-stash" `{{{rss_item.content}}}` it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855364/original/BojThSBQRv2EsNKXzmCAgxdVL1HDID98HA.png?1636131880)

## Scheduling:

  

To schedule RSS Feed based emails:

-   navigate to the "Send or Schedule" tab
-   select the "RSS Email Campaign" sending option
-   give your campaign a name in the "Campaign Name" field
-   paste your RSS feed url in the "RSS Feed URL" field. 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855359/original/SpMiwm3Uo4icKGEWl86NUztsGxQIVOojtg.png?1636131880)

### Sending Options:

  

-   **"When we should send":** Here you can determine whether RSS Emails should go out Daily, Weekly, or Monthly as well as at what time the emails should go out.
-   **Send on:** Here you can choose the Day(s) of the week on which you want to send the campaign

Once all inputs fields filled along with the recipient, in Review and Send side panel You will see following new information

-     
    -   Email type
    -   RSS Feed URL
    -   Repeat After
    
    -   ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855354/original/MU4iPH7O-wwTKti8UnJOm1i-OjBLL0oviw.png?1636131879)

## Testing RSS Emails

  

When using the "Send Test Email" functionality with an email that has RSS Elements, you will see a new "**RSS Feed URL"** field where you'll need to provide the RSS Feed URL from where you want to pull the content. Without this, all RSS tag based custom variables will replace by empty text.

-   ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855353/original/ngePuhb-X4mSVnHZA5POqiWBBo9VYF65NQ.png?1636131879)

NOTE: If you try to Schedule RSS Element based email template through normal scheduling options (send now, schedule for later, send in drip mode), all RSS tags based custom variable will replace by empty text.

## View and Edit RSS Campaign:

  

You can see your scheduled RSS Campaigns in the Scheduled Tab, where you'll see the type listed as RSS. For other scheduled emails (send now, schedule for later, send in drip mode), the type will be Normal.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855356/original/8LsOBEXvUvsrD9m6DAUbFnIGnga6WRbVDQ.png?1636131879)

The example above is an RSS email set to send Daily and we can see the Next Execution time will be at 2 pm. Once the 2 pm email has been sent, it will be marked as complete and a new scheduling/execution will be scheduled with the same configuration (RSS Feed URL, send Daily) with the following day's date.

### Actions:

  

With RSS type scheduling you can perform the following actions:

-   **Edit:** If you click the pencil icon to edit, you will see a confirmation modal asking you to confirm that you would like to cancel the currently scheduled email and re-schedule a new one.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855352/original/o--HIRT2KbBv-OrhGrqfaPrTLEZw1T2Wsw.png?1636131879)

  

-   Once you click Confirm, it will cancel the current scheduling and open up a Email Builder with RSS Scheduling options pre-filled with the current cancelled scheduling information![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855361/original/-VqGcwC_5HX3QI-gngmW-H9NmIDY_i7yWg.png?1636131880)

  

-   **Pause/Resume:** You can also pause and resume the execution through the Pause/Resume actions
-   **Delete:** You can also delete the RSS scheduling. Deleting will first cancel the scheduling then delete it permanently from the system