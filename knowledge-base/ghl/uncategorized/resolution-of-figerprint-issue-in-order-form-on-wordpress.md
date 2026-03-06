---
title: "Resolution of Figerprint Issue in Order form on Wordpress"
url: "https://help.gohighlevel.com/support/solutions/articles/155000001549-resolution-of-figerprint-issue-in-order-form-on-wordpress"
category: "Uncategorized"
---

# Resolution of Figerprint Issue in Order form on Wordpress

If you are facing the fingerprint issue in order form on wordpress. You should be seeing the below error in your order form

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402697/original/cP4v-wGDWhkB1EDZBzxOomxLCCr1SCjEVg.png?1701776525)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014402714/original/meJbprQnM-30iC7DGGjKuXAIcMMyHZ3K5w.png?1701776536)

  

**As of now, there can be two secnarios of fingerprint error.** 

-   [Scenario 1](#Scenario-1)
-   [Scenario 2](#Scenario-2)
-   [Steps to add domain in Funnel:](#Steps-to-add-domain-in-Funnel%3A)
-   [Steps to fix existing funnel in WordPress:](#Steps-to-fix-existing-funnel-in-WordPress%3A)

###   

### Scenario 1

-   If client faced this issue only on some of the customer's browser. It means due to some customer browser settings, we are not able to access cookies (storage).**Solution:** This is very rare chances of this issue. So for a quick fix, guide customer to update  browser settings & enable cookies access. For a long term fix, we will add warning from our side if we won't able to access cookies

  

### Scenario 2

-   If client faced this issue every time on every devices & browsers, it means funnel domain is not configured properly.**Solution:** If website is hosted on WordPress & they are using our order form funnel inside that as separate path, then WordPress website domain & funnel domain should be same but subdomain should be different. Suppose your WordPress website configured with www.example.com , example.com is your domain & www is subdomain. So now you should not use www.example.com  or example.com  as funnel domain. Use different subdomain (e.g. funnels.example.com ) in funnel. 

  

-   **Why need same domain?**
    

           As per our current implementation, we are using iFrame to render funnel page inside WordPress. For payment,               we need web browser cookies (storage) access & web browser doesn't allow access over cross domain.

  

### Steps to add domain in Funnel:

  

1\. Go to Settings -> Domains and add the same domain (as WordPress website) with different subdomain. (Make sure there should have not be hosted any other website on that subdomain) 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508607/original/DgJefUC8jkG6Dr_9J06vu_KDm1U5yBOJ8Q.png?1701857135)

2\. Go to Funnel Settings (which you want to use in WordPress). Configure the domain and save it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014508838/original/TmlC2p8wbnuOjS3cxrgBvf2DUz9cA348pg.png?1701857251)

  

3\. Verify that funnel is successfully connected & working with that subdomain.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509152/original/ycSfZp9GtFEXROsc8XQm8E-FiHHBS4YZGw.png?1701857392)

  

  

  

### **Steps to fix existing funnel in WordPress:**

  

1.  Goto your LeadConnector WP settings & hard refresh that page if it already opened. Click on API Key save button.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509549/original/irqYmKDulfmiS759GP4nAqUjEe3MJdNyeg.png?1701857523)
2.  Goto Click on edit button which funnel page you want to fix![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509862/original/kHIR3tNtMHyeyTQVpOhkaX3-3HY9XTWhxw.png?1701857636)
3.  Wait until it stops loading and step will get filled automatically![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014510155/original/qoiNCxQZO6Ac7OzvqVZaUGKNdTsTILXfFQ.png?1701857703)
4.  Now you will be able to see the same WordPress website domain (subdomain will be different) in the preview url. So just click on the save button  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014509982/original/w6uS76mPd-CZR2eNbjsYmX9TnyG7RTVFeQ.png?1701857677)