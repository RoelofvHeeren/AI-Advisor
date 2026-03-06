---
title: "WhatsApp: Template Level Analytics"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003714-whatsapp-template-level-analytics"
category: "Uncategorized"
---

# WhatsApp: Template Level Analytics

  

  

* * *

**WhatsApp Template-Level Analytics**

  

**Gain Powerful Insights & Optimize Your Messaging Strategy**

  

The **Template-Level Analytics** feature in GoHighLevel’s WhatsApp integration empowers businesses with detailed performance insights for each messaging template. Previously, users had limited visibility into how well their messages were performing. Now, you can track essential engagement metrics like:

    •    Number of messages **sent**, **delivered**, and **read**

    •    **Button click** data for interactive templates (URL buttons, Quick Replies)

  

These insights help you fine-tune your messaging, improve engagement, and drive better customer experiences.

* * *

**TABLE OF CONTENTS**

-   [How to view WhatsApp Template Insights](#How-to-view-WhatsApp-Template-Insights)
-   [How to view WhatsApp Template Button Clicks](#How-to-view-WhatsApp-Template-Button-Clicks%C2%A0) 
-   [Statuses and their Meanings:](#Statuses-and-their-Meanings%3A)
-   [FAQs](#FAQs)

* * *

  

# How to view WhatsApp Template Insights

  

Template analytics describe the number of times a template has been sent, delivered, and read, and the number of times [URL buttons](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#url-buttons) or [Quick Reply buttons](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#quick-reply-buttons) in the template have been clicked.

**_Note:  The report option isn’t available for the Coex integration_**

  

  

Step 1: Go to **Settings** > **WhatsApp** > **Templates**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279043/original/XkJX_4JnB0qp4KzDt6adAdaqSaOF-0XFnw.png?1728371385)

  

Step 2: Search for the template and click on Reports

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279173/original/B79VtQLcqP2DTb2uCUBd7N6_fshManl3Gg.png?1728371494)

  

Step 3: Click on Deliverability tab

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279302/original/DjQBt07teasQrwzZCz8IlPCdw3SVxSfzPg.png?1728371578)

  

Step 4: Select **Start Date** and **End Date**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279992/original/iJmmR1tGFbcDss5w3JZhZJH5jsomWmw5dw.png?1728372099)

  

Metrics displayed:

    •    **Sent**: Message sent (1 gray tick)

    •    **Delivered**: Message delivered (2 gray ticks)

    •    **Read**: Message opened (blue ticks)

* * *

  

  

# How to view WhatsApp Template Button Clicks 

  

  

Button click analytics are only available for templates categorized as `MARKETING` or `UTILITY`

  

  

Step 1: Go to **Settings** > **WhatsApp** > **Templates**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279043/original/XkJX_4JnB0qp4KzDt6adAdaqSaOF-0XFnw.png?1728371385)

  

Step 2: Search for the template and click on Reports

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034279173/original/B79VtQLcqP2DTb2uCUBd7N6_fshManl3Gg.png?1728371494)

  

Step 3: Click on Button Clicks 

  

**URL Buttons**
URL buttons load the specified URL in the device's default web browser when tapped by the app user. Templates are limited to two URL buttons

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034280847/original/YeU3rRykCkczLkqTy79z6DM4D5aOt1oExw.png?1728372758)

  

WABAs owned by or shared with Meta Business Accounts in the European Union, United Kingdom, or Japan, or that have a business phone number with a country calling code from any of those countries or regions, are not supported

  

**About URL Buttons**

    •    Open a specified URL in the user’s web browser

    •    Max: **2 URL buttons** per template

* * *

  

# **FAQs**

  

## **What are Quick Reply Buttons**

  

Quick reply buttons are custom text-only buttons that immediately message you with the specified text string when tapped by the app user. A common use case-case is a button that allows your customer to easily opt-out of any marketing messages.

  

Templates are limited to 10 quick reply buttons. If using quick reply buttons with other buttons, buttons must be organized into two groups: quick reply buttons and non-quick reply buttons. If grouped incorrectly, the API will return an error indicating an invalid combination.

Examples of valid groupings:

1.  Quick Reply, Quick Reply
2.  Quick Reply, Quick Reply, URL, Phone
3.  URL, Phone, Quick Reply, Quick Reply

  

Examples of invalid groupings:

1.  Quick Reply, URL, Quick Reply
2.  URL, Quick Reply, URL

##   

## **What is the Template-Level Analytics feature?**  

  

The Template-Level Analytics feature provides detailed insights into the performance of individual WhatsApp templates. Businesses can monitor key metrics such as the number of messages sent, delivered, and read, as well as track button clicks for templates that include interactive elements like URL or quick reply buttons.

  

## **How can I view WhatsApp template insights?**  

  

You can view insights by navigating to **Settings > WhatsApp > Templates**, then searching for the desired template and clicking on **Reports**. Under the **Deliverability** section, you can view metrics like sent, delivered, and read counts for that template.

  

## **What type of button click data is available?**  

  

Button click analytics are available for templates categorized as either **MARKETING** or **UTILITY**. The system tracks how many times users click on interactive buttons like URL buttons or quick reply buttons, providing real-time data on user engagement.

  

## **What are Quick Reply buttons?**

  

Quick Reply buttons are custom text-only buttons that automatically send a specified message when clicked by the user. A typical use case is allowing customers to quickly respond, such as opting out of marketing messages. Each template can have up to 10 quick reply buttons, and buttons must be organized into valid groupings (e.g., quick replies must be grouped together).

  

## **How many buttons can be included in a template?**  

  

Templates are limited to two URL buttons and can have up to 10 quick reply buttons. The buttons need to be grouped correctly—quick reply buttons cannot be mixed in the same group with other button types like URL buttons.

  

## **Can I track button clicks for templates used in the European Union, United Kingdom, or Japan?**  

  

No, button click analytics are not supported for WhatsApp Business Accounts (WABAs) owned by or shared with Meta Business Accounts in the European Union, United Kingdom, or Japan, or if the business phone number is from one of these regions.

  

## **What kind of granularity is available for template analytics?**  

  

Template analytics are available with daily granularity. You can select a custom date range to view the performance data for a specific time period, such as daily or weekly, by setting the start and end dates.

  

## **Can I track URL button clicks in WhatsApp templates?**  

  

Yes, URL button clicks are tracked in the analytics for templates that contain URL buttons. When clicked, the URL button opens the specified link in the user’s default web browser. These templates can have up to two URL buttons.

  

## **What are the benefits of using template-level analytics?**  

  

Template-level analytics allow businesses to gain actionable insights into the performance of their messages, helping optimize communication strategies. It helps identify which templates are driving engagement, such as which buttons users are interacting with, and provides visibility into the delivery and read rates of messages. This data allows businesses to refine their templates and improve customer engagement and conversion rates.