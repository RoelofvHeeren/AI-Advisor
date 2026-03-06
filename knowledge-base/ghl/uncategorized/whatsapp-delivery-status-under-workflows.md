---
title: "WhatsApp Delivery Status under Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002491-whatsapp-delivery-status-under-workflows"
category: "Uncategorized"
---

# WhatsApp Delivery Status under Workflows

  

  

In this article, we will discuss how to use WhatsApp delivery status inside workflows

* * *

**TABLE OF CONTENTS**

-   [Prerequisite for using WhatsApp under Workflows](#Prerequisite-for-using-WhatsApp-under-Workflows)
-   [Recipe for WhatsApp Delivery Status](#Recipe-for-WhatsApp-Delivery-Status)
-   [How to use WhatsApp delivery status inside workflows](#How-to-use-WhatsApp-delivery-status-inside-workflows)
-   [FAQs](#FAQs)

* * *

# Prerequisite for using WhatsApp under Workflows

WhatsApp needs to be subscribed and enabled on a the location account. You can refer to the below article for setting up WhatsApp on your sub account. [WhatsApp Subaccount Setup](https://help.gohighlevel.com/a/solutions/articles/155000001980?portalId=48000045315#Subaccount-Setup). 

  

Additionally if you want to send business initiated conversations then please ensure that you have an approved template in place. [How to create a WhatsApp Template](https://help.gohighlevel.com/support/solutions/articles/155000000861-how-to-create-a-whatsapp-template-)

  

# Recipe for WhatsApp Delivery Status

You can use the pre built WhatsApp Delivery Status recipe under Automations 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026559813/original/ZM-GKrgtuPHvnIQs2Hf9h5Ha4pN9Dw-ZPQ.png?1716560015)

  

# How to use WhatsApp delivery status inside workflows

  

**Step 1:** Go to Automation > **Create Workflow** > **Start from Scratch**

 **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487798/original/z68RVmgwwDv2YtzvBuVA-wo_E-KciAficw.png?1716466176)**

**Step 2****:** Add Trigger > **WhatsApp Action** > Select **WhatsApp template**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488035/original/hoDiVPGKoAsE_pckEFA48JDT2al-Wra58A.png?1716466391)**  

**Step 3:** Enable toggle WAIT FOR WHATSAPP MESSAGE DELIVERY STATUS > Save Action

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488147/original/LW8bIaKeBl2uhQONwMLuXWnlKAm3lkm5Kg.png?1716466458)

  

**Step 4:** Add Action > **If/Else** 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026488215/original/IJ34vqlnZ-VHR7aR7JEV2TWNiduHXY8RzA.png?1716466538)

  

**Step 5:** Select **Contact Details** > Valid WhatsApp > Add conditions for **True and False**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026492804/original/HRodQYCR8yD7hbpwb9-03RiNm5UOJdoD-w.png?1716469670)

  

**Step 6:** Add failover to SMS/Email for False and None Branch

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026493561/original/CnwlstxlE20N-ywEH1GHMiuf3IBYEkrQyQ.png?1716470151)

  

  

  

#   

# FAQs

  

## Q. What is the new WhatsApp delivery status support feature?

We are excited to introduce WhatsApp delivery status support in workflows! This feature enhances your communication strategies by allowing you to incorporate conditional logic based on the delivery status of WhatsApp messages.

  

## Q. How can I use the WhatsApp delivery status in my workflows?

You can use if/else conditions based on Valid WhatsApp status to determine the next steps in your workflow. This enables more dynamic and responsive communication strategies.

  

## Q. What is the purpose of the toggle for holding contacts in the workflow?

We’ve added a toggle to hold the contact in the workflow until we receive the delivery status from Meta. This ensures that the workflow waits for the delivery status before proceeding to the next step.