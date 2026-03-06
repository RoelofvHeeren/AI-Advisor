---
title: "URL Parameters in Websites and Funnels"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005722-url-parameters-in-websites-and-funnels"
category: "Uncategorized"
---

# URL Parameters in Websites and Funnels

HighLevel Websites and Funnel pages allow you to use {{keywords}} in the page which get replaced with custom content when the page is loaded. That way each individual viewer can see unique content relevant to them personally, like their name.

* * *

**TABLE OF CONTENTS**

-   [What Are URL Parameters?](#What-Are-URL-Parameters?)
    -   [Merge Fields in Pages](#Merge-Fields-in-Pages)
    -   [URL Parameters In Pages](#URL-Parameters-In-Pages)
    -   [URL Parameters in Links](#URL-Parameters-in-Links)

* * *

# **What Are URL Parameters?**

  

The URL is the address of a webpage like https://google.com or https://help.gohighlevel.com

  

Parameters are key=value pairs added to the end of the URL like https://google.com**?key=value&key2=value2**

  

The address is used to find the webpage and the parameters can then be passed into the webpage for it to do something with.

  

Let's explain URL parameters, UTM parameters, and merge fields.
  
**URL** parameters can be anything like **lorem=ipsum**. They are often used to navigate to a part of the page or **display** custom content.  
  
**UTM** parameters are a type of URL parameter that use industry-standard marketing keywords like **utm\_source=google** or **utm\_medium=email**. These provide valuable tracking information and are used to optimize SEO and marketing campaigns. They are **not displayed** on the page.

**Merge fields** are used throughout HighLevel to pull in **dynamic** data. The format inserted into an email or a website, for example, is **{{contact.email}}**. These are static tags that HighLevel searches for and replaces with the most current value of that tag. So the final version of the email, website, etc has the dynamic content instead of the static tag.

Merge fields and URL parameters are used the same way. In your website or funnel you use the format {{keyword}} and HighLevel finds the best match. If it matches a merge field, HighLevel will pull data from the database. If it matches a URL parameter, then the string in the URL will be pulled in.

  

* * *

## **Merge Fields in Pages**

  

Many templates already include merge fields like the below example:

  

-   {{location.full\_address}} will be replaced by the subaccount's business full address from the database (1234 Place St, State 56789).  
      
    
-   {{location.phone}} will be replaced by the subaccount's business phone from the database (987-654-3210).  
      
    
-   {{location.name}} will be replaced by the subaccount's business name from the database (YoYoYoga).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681440/original/41J7kP-cAy9uhKU2R7w4AhClYR-FIUNcrA.png?1752172549)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681565/original/a9C-HyCBgPdmQjc18gXGtD52-iwHtrcFTA.png?1752172841)

* * *

## **URL Parameters In Pages**

  

You can manually create URL parameters and use them the same way merge fields are used. It's easy to test URL parameters by loading the page preview and inserting them into the URL manually.

  

In this example we changed "Welcome to {{location.name}}" to "Hi {{first\_name}}, Welcome to {{location.name}}"

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681975/original/glc0GU7NRCZbO3LUAg4h2491fuvcLcjMIA.png?1752173728)

  

  

When we load the page preview (make sure to save the page) we see the "Hi ," part but not a name. That's because we haven't inserted the URL parameter into the URL yet.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682058/original/YgL0hkZGOywUk1fFTT9FtebP4YhJa-t4lA.png?1752173912)

  

  

After we manually edit the URL in the URL bar at the top of the browser by adding "?first\_name=Yolonda" and hit enter we see the page pick up that parameter and display it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682135/original/Q4NxkQP1-e8_nibhHi6HlPiMllOILh3Nhg.png?1752174041)

* * *

## **URL Parameters in Links**

  

After your page has URL parameters in it, you want to make sure to include URL parameters in the links to that page. For example, in an email, you can include the same URL you just edited manually and it will work the same way.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682248/original/5x8enCoIplmaIJXoisn3fXZBn-tq_uw4QQ.png?1752174324)

  

  

However, you don't want to hard code a value that is supposed to be dynamic. In the URL you can insert a merge field so that each contact's name is merged into the URL when the email is created.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682397/original/bJ7N1AtP_UjSTkYwapHo5TTTEf5SPH4HSg.png?1752174563)

  

  

If you want to use this same pattern in several different places you can make the URL itself dynamic by putting it into a custom value and then pulling the custom value into the email (or wherever).

  

When you nest dynamic content the details vary depending on where you put each piece of information.

  

-   If you put "https://app.gohighlevel.com/v2/preview/Gqzf1j5aVuAsZbEQEo79" into a custom value like "yoga\_page" then you need to build the URL in the email editor like this: {{ custom\_values.yoga\_page }}**?first\_name=**{{contact.first\_name}}  
      
    
-   If you put the entire URL with the parameter and the merge field into the custom value like this: "https://app.gohighlevel.com/v2/preview/Gqzf1j5aVuAsZbEQEo79?first\_name={{contact.first\_name}}" then you don't need to build the URL, just insert the name of that merge field like {{yoga\_page\_with\_params}}.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682472/original/Z235jPgWz9S4fxC1Sk18w7zce7FE0a6NRg.png?1752174749)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682499/original/LPLbRAJQTuod9wGJuYba4_G76tx9IyqRzQ.png?1752174843)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682543/original/zYX0Ip_W3--ciCbDxbDNH9FHTjEcSe7k1g.png?1752174949)