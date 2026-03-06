---
title: "Domain Transfer-out to Cloudflare"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare"
category: "Uncategorized"
---

# Domain Transfer-out to Cloudflare

# **Overview**

This article outlines the steps required to transfer a domain to a different Cloudflare account. It consists of a pre-requisite, preparation steps, and the transfer process:

  

**TABLE OF CONTENTS**

-   [Overview](#Overview)
    -   [Pre-requisite](#Pre-requisite)
    -   [Prepare to Transfer](#Prepare-to-Transfer)
        -   [Step 1](#Step-1%3A-Add-the-Domain-as-a-Website-to-the-New-Account-and-Select-a-Plan)
        -   [Step 2](#Step-2%3A-Obtain-the-Account-ID-and-Share-with-Us)
    -   [Transfer](#Transfer)
-   [⚠️ Note: “Invalid Nameservers” Status](#%E2%9A%A0%EF%B8%8F-Note%3A-%E2%80%9CInvalid-Nameservers%E2%80%9D-Status)

* * *

## **Pre-requisite**

A Cloudflare account where domains has to be transferred should exist and you should have access to it.

* * *

## **Prepare to Transfer**

### **Step 1: Add the Domain as a Website to the New Account and Select a Plan**

-   Login to your Cloudflare account where you want to transfer your domain.
    
-   Click **'Connect a domain'** after clicking **'+ Add'**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811288/original/OcRROmlY2bMj43Pi1MqTbYbxCLU32QrH7g.png?1749127748)
    
-   Enter the domain name to be transferred and click **'Continue'**.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811300/original/vEht9_njEH4gcTeKiEJKw_GNo_-74pEN4w.png?1749127750)
    
-   Select the **'Free'** plan or a **'Paid'** plan.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811304/original/yYeQxBpkXITNzpEYw7ljebdWbujxIMOUog.jpeg?1749127750)
    
-   Cross-check your scanned DNS records with your current DNS records. You can find your current DNS records here:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811299/original/hJ7CF4vMJzOqGN6aXVXT5vomA6m_C_9sbA.jpeg?1749127749)
    
-   If the scanned records match with the existing records, then hit **'Continue to Activation'.If not, manually add/remove the scanned records to match existing records.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811303/original/M1T3hEv6_kKVQMlDCEyIdRrDmh5Zyk_inQ.jpeg?1749127750)  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811305/original/mL2XBDK5LByLMLYkvSwDOTAHXgn1RzBsxQ.jpeg?1749127750)**
    

  

> **⚠️** **Please ensure proxy is turned OFF for all records before clicking 'Continue to Activation'.**

-   There isn't a need a change nameservers at this step.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811302/original/yh-c3eIaMQNpANrfsaul2xBvxYLZp0TWwQ.jpeg?1749127750)

* * *

### **Step 2: Obtain the Account ID and Share with Us**

-   Once you have completed all above process, obtain the **account ID** of your Cloudflare account and share it with us.
    
-   To obtain the account ID, follow this process:  
    Extract the alphanumeric value from the URL.  
    **Example:** In this case, this is the account ID:  
    `0d2031c4bcda5980204101c44294740c![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811298/original/oMjuqfLL-RnS88Jn6KXRnqiizk-decNQEg.jpeg?1749127750)`
    

* * *

## **Transfer**

Once all 2 steps above are completed, we will initiate the transfer process from our end. You can expect the transfer to get completed within **24 hours** after we initiate it. Then you need to approve the transfer by following these steps:

  

-   Go to 'Manage Domains' under 'Domain Registration' in the left navigation menu and click on 'Manage' button for the given domain.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811301/original/MVf7yWRDJHpfzgtEVS06FY-hgt7whLtJ6g.jpeg?1749127750)
-   Accept the transfer request. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811290/original/E4iZUac4Kc_FnAc0E06Y16fetCbZQJ2C5w.png?1749127749)
-   You can expect the transfer to get completed within 24 hours after you accept it. Once transfer is successful, status will turn to 'Active' for that domain under 'Manage Domains'. If you find 'Invalid Nameserver' status in 'Account Home' for that domain, please wait for a few hours and then check again.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047811296/original/za0Cq3HD6jSmVEm7MaQFIXh3JLb-if94SA.jpeg?1749127749)

* * *

# ⚠️ Note: “Invalid Nameservers” Status

After the transfer has been accepted, the domain may temporarily show **“Invalid Nameservers”** in the **Account Home** section **Don’t worry** - this is expected behavior.

This warning typically resolves itself **automatically within 24 hours** post-transfer. No action is needed from your side.