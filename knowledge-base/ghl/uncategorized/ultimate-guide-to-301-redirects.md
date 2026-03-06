---
title: "Ultimate Guide to 301 Redirects"
url: "https://help.gohighlevel.com/support/solutions/articles/48001202713-ultimate-guide-to-301-redirects"
category: "Uncategorized"
---

# Ultimate Guide to 301 Redirects

This guide explains what 301 redirects are, why they are important for SEO and user experience, and how you can easily set them up in HighLevel. Follow the step-by-step instructions to ensure your website visitors and search engines are directed to the correct pages when URLs change.

* * *

**TABLE OF CONTENTS**

-   [What is a 301 Redirect?](#What-is-a-301-Redirect?)
-   [Why Use 301 Redirects?](#Why-Use-301-Redirects?)
-   [How to Set Up 301 Redirects in HighLevel](#How-to-Set-Up-301-Redirects-in-HighLevel)
    -   [Step 1: Navigate to URL Redirects](#Step-1%3A-Navigate-to-URL-Redirects)
    -   [Step 2: Choose the Redirect Type](#Step-2%3A-Choose-the-Redirect-Type)
        -   [1\. Redirect to Another URL](#1.-Redirect-to-Another-URL)
        -   [2\. Redirect to a Funnel Step](#2.-Redirect-to-a-Funnel-Step)
        -   [3\. Redirect to a Website Page](#3.-Redirect-to-a-Website-Page)
        -   [4\. Redirect All Paths (REGEX Redirects)](#4.-Redirect-All-Paths-\(REGEX-Redirects\))
    -   [Step 3: Save and Test Your Redirects](#Step-3%3A%C2%A0Save-and-Test-Your-Redirects)
-   [Best Practices for 301 Redirects](#Best-Practices-for-301-Redirects)
-   [Common Issues & Troubleshooting](#Common-Issues-&-Troubleshooting)
-   [Final Thoughts](#Final-Thoughts)

* * *

  

* * *

## **What is a 301 Redirect?**

  

A **301 redirect** is a permanent redirection from one URL to another. It helps ensure that users and search engines are directed to the correct webpage when URLs change.

* * *

## **Why Use 301 Redirects?**

  

-   **Preserve SEO rankings** – Prevents broken links and retains search engine authority.  
      
    
-   **Enhance user experience** – Redirects visitors seamlessly to the right page.  
      
    
-   **Consolidate domains** – Redirect multiple domain versions (e.g., `www.yoursite.com` to `yoursite.com`).  
      
    
-   **Fix outdated links** – Ensure old URLs still lead to relevant pages.

* * *

## **How to Set Up 301 Redirects in HighLevel**

  

Follow these steps to configure 301 redirects for your domains:

  

### **Step 1:** Navigate to URL Redirects

  

URL Redirects can be found under Subaccount/Location Settings.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046423137/original/zgC_ZlmZbqaewhk5pRPBUDEyxNAMDjS0RA.png?1746881207)

###   

### **Step 2:** Choose the Redirect Type

  

HighLevel offers four types of redirects:

  

#### **1\. Redirect to Another URL**

-   Use this to send visitors from one specific URL to another.  
      
    
-   Ensure the domain is added to your HighLevel sub-account.  
      
    
-   Format:
    -   **Path**: Include `/` followed by the page name (e.g., `/old-page`).  
          
        
    -   **Target URL**: Enter the full URL where visitors should be redirected.  
          
        

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046423287/original/wM0qlZiVit9GZzM-DqhdvKqIoyp8I7D1yg.gif?1746881733)

  

  

The domain you are redirecting from must already be added to your HighLevel sub-account.

  

####   

#### **2\. Redirect to a Funnel Step**  
  

-   Redirects traffic to a specific funnel step in HighLevel.  
      
    
-   The funnel must be associated with a domain in your sub-account.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043395223/original/8UraJujxBCgsPgem_vlsXKHvb0Xb482OoQ.png?1742204091)

  

####   

#### **3\. Redirect to a Website Page**

  

-   Redirects traffic to a specific page on your HighLevel website.  
      
    
-   Ensure the website is linked to a domain in your sub-account.  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043395315/original/6uOm35lhHVhKI1WnyLyD3nr1ephmFUgtSQ.png?1742204143)

####   

  

#### **4\. Redirect All Paths (REGEX Redirects)**

  

-   Redirect all paths from one domain to another.  
      
    
-   Useful for redirecting `www` versions to the root domain.  
      
    
-   Example: Redirect `www.mysite.com/*` to `mysite.com/*`.

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043395403/original/aVN2NxwMPEbVwxP-ZndJSlOO6EJYKNLJxg.png?1742204177)

  

  

### **Step 3:** Save and Test Your Redirects

  

1.  Click **Save** after setting up your redirect.  
      
    
2.  Open a browser and enter the original URL to ensure it redirects correctly.  
      
    
3.  Use online redirect checker tools for verification.

* * *

## **Best Practices for 301 Redirects**

  

-   **Use absolute URLs** (e.g., `https://newsite.com/page`) to prevent errors.  
      
    
-   **Avoid redirect chains** – Directly redirect old URLs to the final destination.   
      
    
-   **Check for broken redirects** regularly to ensure they work properly.   
      
    
-   **Use REGEX carefully** – Misuse can lead to incorrect redirects.

* * *

## **Common Issues & Troubleshooting**

  

❌ **Redirect loop** – Ensure you’re not redirecting a URL to itself.  
  
❌ **404 Errors** – Double-check that the target page exists.   
  
❌ **Slow load times** – Too many redirects can impact performance.

* * *

## **Final Thoughts**

  

Setting up 301 redirects correctly in HighLevel helps improve SEO, user experience, and website consistency. By following these best practices, you can ensure smooth transitions for both users and search engines.

To create 301 redirects, go to "Sites" > "URL Redirects" (in the top navigation menu)