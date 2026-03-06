---
title: "Web URLs and Links"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001338-web-urls-and-links"
category: "Uncategorized"
---

# Web URLs and Links

### 

  

This article will provide a deeper view into bot training via Web URLs and points to keep in mind.

  

### **More Tutorials from the Community**

[https://youtu.be/y4E2xP0rdP4](https://youtu.be/y4E2xP0rdP4)

[https://youtu.be/ZHFejfhBf0E](https://youtu.be/ZHFejfhBf0E)

[https://youtu.be/ypI60Z80K9c](https://youtu.be/ypI60Z80K9c)

[https://youtu.be/BDYSJsB8QrU](https://youtu.be/BDYSJsB8QrU)

* * *

**TABLE OF CONTENTS**

-   [Steps to training your bot using Web URLs](#Steps-to-training-your-bot-using-Web-URLs)
-   [URL Crawling Modes](#URL-Crawling-Modes)
    -   [Exact URL](#Exact-URL)
    -   [All URLs in this Domain](#All-URLs-in-this-Domain)
    -   [All URLs with this Path](#All-URLs-with-this-Path)
-   [Uploaded Links Table](#Uploaded-Links-Table)

* * *

## **Steps to training your bot using Web URLs**

  

1.  Go to "Bot Training"  
      
    
2.  Enter an entire URL (along with Https://) and choose one of the three web crawling mode (explained below)  
      
    
3.  Wait for the URLs to be fetched and crawled  
      
    
4.  Select the URLs and hit "Train Bot"  
      
    
5.  Each URL is trained and added to the table below with its status. (Wait for all URLs to be trained before using the bot)

  

**URL Limit (per Knowledge Base):** You can train up to 4,000 web URLs in a single Knowledge Base.

* * *

## **URL Crawling Modes**

  

### **Exact URL**

  

This is the recommended option for precise training. With the Exact URL method, the bot will crawl the exact URL provided and train itself.  
  

Steps:  
  

1.  Choose the option "Exact URL."  
      
    
2.  Enter the URL you want to crawl and hit "Get Data."  
      
    
3.  The URL is crawled and the bot is trained on it and added to the Uploaded Links Table

  

  

### **All URLs in this Domain**

  

Train your bot with a broader range of information from a specific domain. The bot will crawl all the pages and links on the specified domain and provide you with the option to select which URLs to train from.  
  

Steps:  
  

1.  Choose the option "All URLs in this domain."  
      
    
2.  Enter the URL and hit "Get Data."  
      
    
3.  Wait for the pages to load, and then you'll be presented with a list of available URLs.  
      
    
4.  Choose the pages that will be relevant to training the bot and hit "Train Bot."

  
During page selection (Step 4 above), you'll encounter two lists:  
  

1.  **New Pages -** Fresh URLs not part of the bot's current training data. Selecting them will add them to the "Uploaded Links" table once the training is completed.  
      
    
2.  **Existing Pages -** URLs already part of the bot's current training dataset and visible in the "Uploaded Links" table below. Selecting them will refresh all the URLs selected.

            ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011615831/original/RtzexZT_ROI8mnKWv5ijfP78o8KQ1Ydjfw.jpeg?1698850471)

  

  

### **All URLs with this Path**

  

The bot will crawl all pages on the provided URL and allow you to select which pages to train from, based on the existence of the specified path in the page URL. The further steps are the same as "All URLs in this Domain"

* * *

## **Uploaded Links Table**

  

All the links/URLs that the bot has been trained on are visible in the Uploaded link table. Trained URLs can be refreshed (retrains the bot on the latest information) or deleted (information will be removed from the bot's knowledge base)  
  

Each URL will have one of these 3 statuses:  
  

-   **Getting Data -** The bot is training again on this URL ie the URL's information is being refreshed  
      
    
-   **Trained** - The bot successfully learned from this URL. The "Last data refreshed at" is also visible which can be used to identify if a data refresh is required  
      
    
-   **Failed** - The bot failed to train for this URL. You can either refresh and try again or delete the URL  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018185343/original/0Ezttsmj0wxLUwmhLRERaaQtIXKU-Uyc_Q.png?1705664441)

  

URLs are not instantly added to the Uploaded Links table. Wait for all URLs to appear in the table before using the bot

  

Maintaining concise & relevant data significantly boosts the bot's performance. Regularly review & remove old URLs from Uploaded Links table for better responses