---
title: "Understanding the Potential Delivery Issues of Text Messages with Shortened URLs"
url: "https://help.gohighlevel.com/support/solutions/articles/48001240115-understanding-the-potential-delivery-issues-of-text-messages-with-shortened-urls"
category: "Uncategorized"
---

# Understanding the Potential Delivery Issues of Text Messages with Shortened URLs

**Overview**  
  

Shortened URLs are often used in SMS campaigns for link tracking(helps measure the success of text message campaigns) and saving character space. However, they can also create **deliverability challenges**. Public shortened URLs often redirect multiple times and don't provide much information about the sender, which can lead to text messages being blocked.Carriers like T-Mobile and AT&T increasingly block or filter messages with public link shorteners (e.g., bit.ly, rb.gy) because they can mask fraudulent websites and redirect multiple times.

The solution: **use branded or custom domains** that align with your business. This not only improves deliverability but also builds trust with your customers.  
  

* * *

  

## **Why Shortened URLs Can Cause Issues**

1.  **Multiple Redirects**
    
    -   Public shorteners often redirect users several times before reaching the destination.
        
    -   Carriers treat this as suspicious behavior, since it can hide fraudulent sites.
        
2.  **Lack of Sender Transparency**
    
    -   Generic domains (e.g., bit.ly) provide no clear connection to your brand.
        
    -   This increases the chance of filtering or blocking by carriers.
        
3.  **Carrier Policies**
    
    -   **T-Mobile** (Code of Conduct since Sept 1, 2020):
        
        -   Prefers single, recognizable domains tied to the business.
            
        -   Branded short URLs are acceptable.
            
        -   Prohibits **URL cycling** (rotating domains to bypass filters).
            
        -   Discourages **multiple redirects**.
            
    -   **AT&T**: Fully blocks public link shorteners due to fraud and phishing risks.
        

  

Just to recap, **T-Mobile** introduced their Code of Conduct for Commercial Messaging on September 1st, 2020. This code lays out T-Mobile's guidelines and expectations for business-related messaging on their network. If you want to communicate with someone using a T-Mobile-connected device, it's important to follow these new rules.

  

**T-Mobile** has a preference for using a single, recognizable domain name. According to their Code of Conduct, messaging programs should be connected to a business's web domain. While using the complete domain is preferred, using a branded short URL is acceptable for delivering custom links. This helps maintain consistency with consumers, enhances brand awareness, and boosts confidence in the links.

  

  

**T-Mobile** has more to say about URLs. In their section on "Prohibited Messaging Practices," they have two rules related to URLs:

  

1.  They prohibit the use of URL cycling to bypass spam filters. This means that public URL shorteners like bit.ly or rb.gy are likely to be blocked, preventing messages containing those URLs from being delivered.  
    
2.  T-Mobile discourages the use of URLs that redirect multiple times. Such URLs can hide the actual website destination from consumers, potentially leading to fraudulent websites. T-Mobile's spam filters specifically check for URLs with multiple redirects, and messages containing them are likely to be blocked.

  

In fact, **AT&T** has decided to completely block public link shorteners due to their association with fraudulent activities and phishing scams. Although T-Mobile and others haven't taken the same stance yet, it would be wise to take steps to improve message deliverability now to prepare for the future.  
  

* * *

  
  

## **What This Means for Businesses**

-   The shift in carrier policies reflects industry-wide efforts to **reduce spam, fraud, and abuse**.
    
-   Unfortunately, this complicates link tracking — one of the primary ways businesses measure SMS/MMS campaign performance.
    
-   Companies must balance **delivery success** with **tracking needs** by adapting their URL practices.
    
    * * *
    
      
    

**3 ways to improve delivery of messages with links**

  

To enhance the deliverability of messages containing URLs and avoid accidental blocks, here are a few steps you can take:

  

**1\. Limit the number of redirects in your links.** When a link takes users through multiple jumps to reach a different landing page or domain address, it raises suspicion for both users and carriers. Optimize your link destination and consider using tracking methods like UTM parameters to avoid multiple redirects.

  

**2\. Using a full-length URL** is the carrier's first suggestion, but it can take up valuable space in an SMS where you also need to include your business identification and contextual information within the 160-character limit. If you have critical links, it might be best to use full-length URLs and accept the extra cost for additional message segments.

  

**3\. When space is limited, consider using a branded shortened URL** that is identifiable with your domain. This method is not limited to big brands like ESPN, Nike, or the New York Times. While it may seem cost-effective to use free public link shorteners like bit.ly or rb.gy, if your messages are not being delivered, the cost to your business can add up. Investing in a custom domain for shortened URLs is often more affordable than expected.

* * *

## **Key Takeaway**

You pay for every SMS you send, not just the ones that get delivered. Investing in branded domains and reducing risky practices (like public shorteners and redirect chains) helps maximize deliverability, protect your brand, and ensure customers actually receive your messages.  
  
  

* * *

**Related Articles**

-   **[Best Practices for SMS deliverability and Avoiding SMS Restrictions](https://help.gohighlevel.com/support/solutions/articles/155000000079-best-practices-for-sms-deliverability-and-avoiding-sms-restrictions)**
-   **[How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)**