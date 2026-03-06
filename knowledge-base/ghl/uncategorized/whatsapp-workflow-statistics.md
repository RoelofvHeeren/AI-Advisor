---
title: "WhatsApp: Workflow Statistics"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003567-whatsapp-workflow-statistics"
category: "Uncategorized"
---

# WhatsApp: Workflow Statistics

  

  

The WhatsApp statistics feature in workflows provides users with comprehensive analytics for WhatsApp actions. It offers insights into:

1.  Total messages sent
2.  Pending messages
3.  Successfully sent messages
4.  Delivered messages
5.  Messages read by customers
6.  Failed WhatsApp messages

This detailed breakdown allows users to track the performance and effectiveness of their WhatsApp communication within the workflow.

  

[Change log](https://ideas.gohighlevel.com/changelog/whatsapp-workflow-statistics)

* * *

**TABLE OF CONTENTS**

-   [How to View WhatsApp Statistics in Workflows](#How-to-View-WhatsApp-Statistics-in-Workflows)
-   [How to export WhatsApp Statistics](#How-to-export-WhatsApp-Statistics)
-   [FAQs](#FAQs)

* * *

#   

# **How to View WhatsApp Statistics in Workflows**

  

**Step 1:**

Navigate to **Automations** > Select the **Workflow** that includes a WhatsApp action.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043820079/original/wFh8-bz9V3isFoJFameT8f2Tgy4gMlPYUg.png?1742806079)** 

Step 2: Click on the WhatsApp Action > Statistics

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043820113/original/jXMjzTc02Me4RI-4svj_dxVHTyWIH9c7Gg.png?1742806104)

  

**Step 3:**

Select the **“Statistics”** tab to view the performance metrics.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365328/original/gQwM9qlLbXNLbQwf9NVbPH5l4tqhStRAGQ.png?1727090787)

  

Customers who have turned off Read Receipts will be shown under the **Delivered** tab

  

You’ll now see a detailed breakdown of all WhatsApp messages triggered from that specific action.

* * *

  

**Status Definitions**

  

| 
**Status**

 | 

**Description**

 |
| --- | --- |
| 

**Total**

 | 

Total number of WhatsApp messages triggered through this action for the selected date range.

 |
| 

**Pending**

 | 

Messages that are queued but have not yet been triggered.

 |
| 

**Sent**

 | 

Messages that have been sent to WhatsApp but are awaiting delivery. Represented by a **single tick** in WhatsApp.

 |
| 

**Delivered**

 | 

Messages successfully delivered to the recipient’s device. Represented by **double ticks**. Includes users who have disabled read receipts.

 |
| 

**Read**

 | 

Messages that have been opened/read by the recipient. Represented by **blue ticks**.

 |
| 

**Failed**

 | 

Messages that could not be delivered due to various reasons such as: non-WhatsApp number, blacklisted template, blocked account, or marketing template limits or [Per-User Marketing Template Message Limits](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#per-user-marketing-template-message-limits)

 |

  

>   

**Messages to recipients with **read receipts turned off** will appear under the **Delivered** status, even if they were read.**

  

  

* * *

# How to export WhatsApp Statistics

  

Step 1: Go to **Automations > Workflow which has WhatsApp Action**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033361425/original/cd8rmqmotkOPgulgFy92GKB5Nyd8udpUOA.png?1727088301)** 

Step 2: Click on the WhatsApp Action > Statistics

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365164/original/uYqbiaJj_5U9WVNcaTRBT1EVmohPBHOUrA.png?1727090686)

  

Step 3: View **all Statistics**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033365328/original/gQwM9qlLbXNLbQwf9NVbPH5l4tqhStRAGQ.png?1727090787)

  

Step 4: Click on Export

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033372860/original/dqzJlBiGLlFi6Ln3FUXYgeBF--GjHDiPZQ.png?1727095136)

  

A file will be downloaded containing all relevant message details (recipient name, phone number, status, and timestamp).

* * *

# FAQs

  

* * *

Q1: What insights can I get from the WhatsApp Statistics feature?

A: The feature provides detailed analytics on message delivery and engagement including total, sent, delivered, read, pending, and failed statuses.

* * *

Q2: How do I access the WhatsApp message statistics in a workflow?

A: Go to Automations > Select the Workflow > Click on the WhatsApp Action > Click on Statistics.

* * *

Q3: What does the “Total” number indicate?

A: It reflects the total number of WhatsApp messages triggered through that action for the selected date range.

* * *

Q4: What’s the difference between “Sent” and “Delivered”?

A: “Sent” means the message was sent from the system to WhatsApp (one tick), while “Delivered” means the message reached the recipient’s device (double ticks).

* * *

Q5: What happens if the recipient has read receipts turned off?

A: The message will appear as Delivered even if it was read, due to WhatsApp’s privacy settings.

* * *

Q6: What causes a message to fail?

A: Failures may result from:

    •    Invalid or non-WhatsApp phone numbers

    •    Blacklisted templates

    •    Blocked WhatsApp accounts

    •    Per-user marketing message limits

* * *

Q7: Can I download the statistics for reporting?

A: Yes. Use the “Export” button within the Statistics view to download a CSV of message details.

* * *

Q8: Will the export include individual message logs?

A: Yes. Each row will contain details such as contact name, phone number, status, and timestamp.

* * *

##