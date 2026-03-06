---
title: "A basic guide of RSS Campaign"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004928-a-basic-guide-of-rss-campaign"
category: "Uncategorized"
---

# A basic guide of RSS Campaign

In HighLevel, you can include an RSS feed (Item and Header) in your direct and automated campaigns using the RSS content block. This allows your subscribers to automatically receive and read updates from online content sources, like blog posts and news articles

##   
**How does an RSS Campaign work?**

  

You can insert an RSS item or header element and add your RSS feed URL in the send or schedule section. All feed updates published between the time you schedule the campaign and when the email is sent will be included. You can customise the feed layout by selecting the tags you want to display from the feed.  
  
**Usual RSS Items**  
When you add an RSS Element, depending on what all details are present in your feed, you can use the respective custom values in the builder and it would automatically get the relevant data.  
For Example, if you wish to add blog title and content only,  
  
Step 1: Add a RSS header to your template

Step 2: Ensure we have {{rss\_item.title}} and {{rss\_item.content}}. Depending on what field is needed, add the respective custom values  
Step 3: In your send or schedule section add your RSS URL

Step 4: Schedule your campaign  
  
**Behaviour:** When the campaign is sent, in the template the contact can see all blog titles and content from the day it was scheduled

  

##   
  
**Details about the RSS header and item block**  
  
**What is RSS header?**

This will dynamically populate <channel> tags from your RSS Feed . The RSS Header Element supports the following RSS channel tags - use their respective Custom Value to populate the email with the corresponding tag value:

<table border="1" data-identifyelement="529" style="box-sizing: border-box; caption-side: bottom; border-collapse: collapse; cursor: default; border: none; width: 705.594px;"><tbody data-identifyelement="530" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><tr data-identifyelement="531" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><td data-identifyelement="532" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;"><strong data-identifyelement="533" style="box-sizing: border-box; font-weight: bolder;">RSS Tags</strong></td><td data-identifyelement="534" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;"><strong data-identifyelement="535" style="box-sizing: border-box; font-weight: bolder;">Custom Value For HL</strong></td></tr><tr data-identifyelement="536" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><td data-identifyelement="537" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">&lt;title&gt;</td><td data-identifyelement="538" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">{{rss_feed.title}}</td></tr><tr data-identifyelement="539" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><td data-identifyelement="540" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">&lt;description&gt;</td><td data-identifyelement="541" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">{{rss_feed.description}}</td></tr><tr data-identifyelement="542" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><td data-identifyelement="543" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">&lt;link&gt;</td><td data-identifyelement="544" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">{{rss_feed.url}}</td></tr><tr data-identifyelement="545" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><td data-identifyelement="546" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">&lt;lastBuildDate&gt;</td><td data-identifyelement="547" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 352.297px;">{{<span data-identifyelement="548" dir="ltr" style="box-sizing: border-box;">rss_feed.date}}</span></td></tr></tbody></table>

  

  
**What is RSS Items Block?**

The RSS Items block accepts the following Custom Values and will dynamically insert their corresponding RSS Tags:

  

<table border="1" data-identifyelement="588" style="box-sizing: border-box; caption-side: bottom; border-collapse: collapse; cursor: default; border: none; width: 705.594px; height: 220px;"><tbody data-identifyelement="589" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit;"><tr data-identifyelement="590" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="591" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;"><strong data-identifyelement="592" style="box-sizing: border-box; font-weight: bolder;">RSS Tags&nbsp;</strong></td><td data-identifyelement="593" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;"><strong data-identifyelement="594" style="box-sizing: border-box; font-weight: bolder;">Custom Values</strong></td><td data-identifyelement="595" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><strong data-identifyelement="596" style="box-sizing: border-box; font-weight: bolder;">Description</strong></td></tr><tr data-identifyelement="597" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="598" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;title/&gt;</td><td data-identifyelement="599" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.title}}</td><td data-identifyelement="600" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="601" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">The title of the RSS item, usually a blog post.</div><div class="qlbt-cell-line" data-identifyelement="602" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">title</div><div class="qlbt-cell-line" data-identifyelement="603" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">&nbsp;</div></td></tr><tr data-identifyelement="604" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="605" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;description/&gt;</td><td data-identifyelement="606" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.content}}</td><td data-identifyelement="607" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;">A summary of the RSS item in HTML format, which includes information inside the &lt;description&gt; tag. If there is no &lt;description&gt; tag in your feed, it will display the information in the &lt;content:encoded&gt; tag</td></tr><tr data-identifyelement="608" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="609" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;link/&gt;</td><td data-identifyelement="610" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.url}}</td><td data-identifyelement="611" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="612" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">The text link to the RSS item online, which can be displayed as text or used in a hyperlink.</div><div class="qlbt-cell-line" data-identifyelement="613" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">content:encoded</div></td></tr><tr data-identifyelement="614" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="615" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;content:encoded/&gt;</td><td data-identifyelement="616" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.content_full}</td><td data-identifyelement="617" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;">The full content of the information inside the &lt;content:encoded&gt; tag for an RSS item, in HTML format. If there is no &lt;content:encoded&gt; tag, it will display the information in the &lt;description&gt; tag.</td></tr><tr data-identifyelement="618" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="619" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">pubDate</td><td data-identifyelement="620" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.date}}</td><td data-identifyelement="621" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="622" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">The date the RSS item was published, in format `MMM DD, YYYY hh:mm A`. We will provide support for custom formatting in the future.</div></td></tr><tr data-identifyelement="623" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="624" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;dc:creator&gt;</td><td data-identifyelement="625" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.author}}</td><td data-identifyelement="626" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="627" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">The author of the RSS item</div><div class="qlbt-cell-line" data-identifyelement="628" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">media:content</div></td></tr><tr data-identifyelement="629" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="630" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;media:content&gt;</td><td data-identifyelement="631" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{rss_item.imageUrl }}</td><td data-identifyelement="632" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;"><div class="qlbt-cell-line" data-identifyelement="633" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">This will provide the src URL of image as text in order to render it as image, use {{rss_img}}</div><div class="qlbt-cell-line" data-identifyelement="634" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">&nbsp;</div><div class="qlbt-cell-line" data-identifyelement="635" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">&nbsp;</div><div class="qlbt-cell-line" data-identifyelement="636" style="box-sizing: border-box; font-size: 13px; line-height: 1.4; margin-bottom: 0px; margin-left: 0px; word-break: normal; overflow-wrap: break-word;">{{rss_img alt="alt_text" src=rss_item.imageUrl height="200" width="200"}}</div></td></tr><tr data-identifyelement="637" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="638" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;item&gt;</td><td data-identifyelement="639" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{#rss_items rss_items}}</td><td data-identifyelement="640" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;">This tag doesn't display anything. It's used to open the customized formatting for individual RSS items.</td></tr><tr data-identifyelement="641" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-image: initial; border-color: inherit; height: 22px;"><td data-identifyelement="642" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">&lt;/item&gt;</td><td data-identifyelement="643" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.859px; height: 22px;">{{/rss_items}}</td><td data-identifyelement="644" style="box-sizing: border-box; border: 1px solid rgb(175, 175, 175); font-size: inherit; cursor: text; padding: 4px; width: 234.875px; height: 22px;">This tag doesn't display anything. It's used to close the customized formatting for individual RSS items.</td></tr></tbody></table>

##   
**How to send a RSS Campaign?**  
  
**1\.**  **Find Your RSS Feed URL**

-   Look for the RSS icon in the site’s footer or sidebar.
    
-   View the page source and search for `rss` or `xml`.
    
-   Try common endings like `/feed`, `/rss`, or `/rss.xml`.
    
-   Use a browser extension or tools like Feedbucket or CtrlQ to detect the feed.
    

  

### **2.** **Enter the RSS URL**

     Go to **Send or Schedule → RSS Campaign** and paste your feed URL.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064262/original/ZNtVQGvrlt2DDSMYM4nOzSPPEODXe1wULg.png?1743061150)

### **3\.**  **Add RSS Content**

      In the email builder, insert an **RSS header** or **RSS item** element.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064296/original/X-oJsYjlONXwwYwFFetlJ5SWeFMk97eHeA.png?1743061209)**4\.  Set Custom Values**

      Add the necessary custom fields for your RSS tags.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064334/original/jZdjc8KmvvvMg9RV-Xh1BQNg-qv4NKx1oA.png?1743061238)**5\.  Configure Schedule**

-   In **Send or Schedule → RSS Schedule**, set the send time and number of items to include.
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064446/original/CrG6AVKZHoYeLkyUHPKZoFR9UeeM_I6sJw.png?1743061302)

### **6\.**  **Schedule Your Campaign**

-   Review and schedule your RSS campaign.
    

  
  
**FAQs**  
**1\. How to handle a scenario where description is an HTML content?**

The values returned by the RSS-based custom variable `{{rss_item.title}}` are HTML-escaped. For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;` or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-stash", `{{{`:

Eg: if your RSS feed source is something like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064498/original/053-vudl3uozwzP1Jenv_6x0A937_zBr-g.png?1743061362)

without "triple-stash" it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064499/original/0lJbkcnhpyV1FeCYL-L8f1VWUhGX7TQ5TA.png?1743061362)

once you will use "triple-stash" `{{{rss_item.content}}}` it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064500/original/pgFuMeYnJqPkP0UFa3vHK8k63GH3YNiQjA.png?1743061362)  
  

  

**2\. What content can I expect in the next month RSS Campaign?**  
  
If you have created the campaign on March 10th and scheduled it for March 25th, all blog posts after March 10 would be part of the campaign on March 25th.  
If you want to limit the number of posts, in the send or schedule give the maximum number of feeds. If a user specifies "5", we will show most recent 5 blogs in the campaign.  
  
**3\. What will happen if I have no blogs after the RSS campaign was scheduled.**   
In the next cycle, no campaign would be sent. You can review the same from audit log where you can find an entry of unsuccessful schedule due to no new feeds.