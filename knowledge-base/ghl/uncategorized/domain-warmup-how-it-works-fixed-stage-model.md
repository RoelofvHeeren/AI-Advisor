---
title: "Domain Warmup: How It Works (Fixed-Stage Model)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-"
category: "Uncategorized"
---

# Domain Warmup: How It Works (Fixed-Stage Model)

This guide explains how HighLevel's domain warmup works using a fixed-stage model—helping you build sender reputation and improve email deliverability safely.

* * *

**TABLE OF CONTENTS**

-   [What is Domain Warmup?](#What-is-Domain-Warmup?)
    -   [What Warmup Model Is Used?](#What-Warmup-Model-Is-Used?)
    -   [Warmup Stage Breakdown](#Warmup-Stage-Breakdown)
    -   [When Does Warmup Start?](#When-Does-Warmup-Start?)
    -   [Who Can Use Email Warmup and How to Enable It](#Who-Can-Use-Email-Warmup-and-How-to-Enable-It)
        -   [To enable warmup for an agency domain:](#To-enable-warmup-for-an-agency-domain%3A)
        -   [To enable warmup for a sub-account domain:](#To-enable-warmup-for-a-sub-account-domain%3A)
    -   [Google Postmaster Integration (Recommended)](#Google-Postmaster-Integration-\(Recommended\))
    -   [Best Practices for a Successful Warmup](#Best-Practices-for-a-Successful-Warmup)
    -   [When Is Warmup Complete?](#When-Is-Warmup-Complete?)
    -   [Related Articles](#Related-Articles)

* * *

# **What is Domain Warmup?**

  

Domain warmup is the process of gradually increasing your daily email volume to build a trusted sender reputation with inbox providers like Gmail, Outlook, and Yahoo.

  

Without proper warmup, new domains are more likely to:

  

-   Be flagged as spam  
      
    
-   Experience high bounce or complaint rates  
      
    
-   Face email delivery blocks or delays

  

HighLevel automates this process to help you build trust and maximize email deliverability.

* * *

## **What Warmup Model Is Used?**

  

This system uses a fixed-stage, gradual warmup model, which means:  
  

-   Each stage has a predefined daily sending limit  
      
    
-   Progression only occurs when the full daily limit for the current stage is reached  
      
    
-   If the daily limit is not met, the domain remains in the same stage  
      
    
-   There are no hourly sending limits  
      
    
-   You must send emails through the warming domain for progress to be tracked

* * *

## **Warmup Stage Breakdown**

  

| Stage  
 | Daily Limit  
 |
| --- | --- |
| 1  
 | 1,000  
 |
| 2  
 | 2,500  
 |
| 3  
 | 5,000  
 |
| 4  
 | 6,500  
 |
| 5  
 | 8,000  
 |
| 6  
 | 10,000  
 |
| 7  
 | 14,000  
 |
| 8  
 | 20,000  
 |
| 9  
 | 25,000  
 |
| 10  
 | 35,000  
 |
| 11  
 | 50,000  
 |
| 12  
 | 80,000  
 |
| 13  
 | 125,000  
 |
| 14  
 | 175,000  
 |
| 15  
 | 250,000  
 |

  

Once the daily limit is reached, We will still allow email sending

* * *

## **When Does Warmup Start?**

  

-   **For newly created domains:** Warmup is automatically enabled when the domain is created and verified. No manual action is needed.  
      
    
-   **For existing domains:** Warmup must be enabled manually. When you enable warmup on an existing domain, the system will automatically analyze:  
      
    -   Past email activity  
          
        
    -   Google Postmaster reputation data (if integrated)

  
Based on this, it will recommend the most suitable starting stage to ensure smooth warmup progression.

* * *

## **Who Can Use Email Warmup and How to Enable It**

  

Email warmup is available for both agencies and sub-accounts using dedicated domains.

###   
**To enable warmup for an agency domain:**

  

1.  Go to **Agency Settings**  
      
    ![](https://jumpshare.com/v/GtgLT0vlkO7SMjOvvRYy+/Screen+Shot+2025-06-04+at+9.14.57+PM.png)  
      
    
2.  Click **Email Services**  
      
    
3.  Select **SMTP Service**  
      
    ![](https://jumpshare.com/v/xQYgGpfk242TigRljVHz+/Screen+Shot+2025-06-04+at+9.16.10+PM.png)  
      
    
4.  Go to the **Dedicated Domain and IP** tab  
      
    ![](https://jumpshare.com/v/xwz98y4gphYG34N5pdkK+/Screen+Shot+2025-06-04+at+9.17.17+PM.png)  
      
    
5.  Choose your domain and click **Start Warmup.**

###   
**To enable warmup for a sub-account domain:**

  

1.  Go to the **Sub-Account Settings**  
      
    ![](https://jumpshare.com/v/4ZLaiss1CirfZ2DuEKX1+/Screen+Shot+2025-06-05+at+12.18.10+AM.png)  
      
    
2.  Click **Email Services**  
      
    
3.  Select **SMTP Service**  
      
    ![](https://jumpshare.com/v/XGWQq0s9hK0ZqcF2vs0v+/Screen+Shot+2025-06-05+at+12.19.40+AM.png)  
      
    
4.  Go to the **Dedicated Domain and IP** tab  
      
    ![](https://jumpshare.com/v/Ugpw2Wc5L460rKeL2ZEp+/Screen+Shot+2025-06-05+at+12.21.03+AM.png)  
      
    
5.  Choose your domain and click **Start Warmup**

* * *

## **Google Postmaster Integration (Recommended)**

  

Integrating your domain with Google Postmaster Tools gives you access to key deliverability data, including:

  

-   Domain reputation (High, Medium, Low, Bad)  
      
    
-   Spam complaint rates  
      
    
-   Authentication status  
      
    
-   Delivery and error metrics

  

If Google Postmaster is not yet connected or no data is available, the domain dashboard will notify you and guide you through setup.

* * *

## **Best Practices for a Successful Warmup**

  

-   Send emails consistently every day  
      
    
-   Use verified, opt-in contact lists  
      
    
-   Avoid sudden spikes in volume  
      
    
-   Avoid switching sender domains mid-campaign  
      
    
-   Respect daily warmup limits to avoid future enforcement blocks

* * *

## **When Is Warmup Complete?**

  

Your domain completes warmup when it reaches Stage 15 (250,000 emails/day). At that point, you will see a "Warmup Complete" label in the domain dashboard, and full-scale sending will be supported.

* * *

## **Related Articles**

  

-   [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)  
      
    
-   [What is a dedicated IP in LC email?](https://help.gohighlevel.com/en/support/solutions/articles/155000001152)  
      
    
-   [What is LC Email?](https://help.gohighlevel.com/en/support/solutions/articles/48001220605)  
      
    
-   [How to Add a Domain and Verify DNS Record](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)