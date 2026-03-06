---
title: "Two Way Email Sync for Outlook"
url: "https://help.gohighlevel.com/support/solutions/articles/48001229663-two-way-email-sync-for-outlook"
category: "Uncategorized"
---

# Two Way Email Sync for Outlook

Email Two Way Sync is a feature that allows the synchronization of emails between the CRM and an email client, in both directions. Any email sent, received, or updated in one platform is automatically synced with the other, ensuring that all relevant data is available in both places. Using 2-Way Sync for Outlook, Users can link their Outlook account with the CRM and sync emails to and from both platforms.

  

#### **Covered in this Article:**

#### [**How to Connect Outlook Two Way Email sync?**](#How-to-Connect-Outlook-Two-Way-Email-sync?)

#### **[Steps to connect](#Steps-to-connect)**

#### **[How does the 2-way sync work between the CRM and your email account?](#How-does-the-2-way-sync-work-between-the-CRM-and-your-email-account?)**

#### **[Other functionalities](#Other-functionalities)**

#### [**Does Two-way sync only work with individual emails or bulk emails and workflows?**](#Does-Two-way-sync-work-with-individual-emails-only-or-also-bulk-emails-and-workflows?)

  

* * *

## **How to Connect Outlook Two Way Email sync?**

  
  

* * *

# **Steps to connect**

  

In a sub-account, go to "Settings" > "My Profile" tab and scroll down to the section "Email (2-way sync)"  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274395767/original/Rby05oCkzbYHyRC0wVO5O4aOWB8Qxw08AQ.png?1673362633)  

  
  
Select **Outlook,** your email provider & click on **Connect.**  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274396289/original/mBVWnL8bflbaxM8Djfy_UHCxlhpa9aYGtQ.png?1673362734)**  
  
  

Complete the authorization by entering your Outlook email ID credentials.  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274396813/original/LD4N2tgQLSC-NRdaiZGUrm6eEE72i3r2YA.png?1673362821)  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286150045/original/2395BAOyhwzzqcDX-7ZUQXdm9mKz6fHR7w.png?1678347896)

  
  
Approve for permissions requested for **LeadConnector:**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286150199/original/kGgkCc6_lLVmhqnQD4rLEctTCF9xVtGiQQ.png?1678347934)**  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274401676/original/DNRjHYfFf17fEXfeXb-ypPjxirSlR7P5ZA.png?1673363630)  

  

  
In "Settings" > "My Profile" scroll down to the section "Email (2-way sync)" to view your email in the connection status.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274407469/original/36-6kdo8xbItgNvL7sH3sbtwUlOAnuTfbQ.png?1673364584)  
  
  

* * *

## **How does the 2-way sync work between the CRM and your email account?**

  

Once the 2-way sync is connected (Gmail or Outlook):

1.  When you initiate an email from the CRM, the email thread and its subsequent messages will be in sync between both platforms (CRM & Outlook).
    
2.  If you receive a new email in your inbox (Outlook) from an existing contact in the CRM, the email will automatically sync into the CRM along with the subsequent messages in the thread.
3.  If you are sending a new email from your inbox to a contact that doesn’t exist in the CRM and you would like the email to be in sync with the CRM, use the BCC address in the Cc or Bcc field in your composer and send the email. By doing so, a new contact will be created in the CRM, and the email will be in sync between both platforms.

Note:

1.  Emails from contacts who also happen to be sub-account users are not synced. Often, sub-account users are added as contacts for various purposes. Such emails are not synced as they may contain confidential information. If the email address doesn’t belong to a user, emails will sync as mentioned above.
    
2.  Please ensure you have enabled ‘Outlook 2-way Sync’ in Labs to make sure that the above-mentioned points work seamlessly. If the LABS is turned off, only the emails initiated from CRM will sync and Auto BCC will not sync the contact.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274409947/original/nfYhNJX6kd_mnmRKWkhoz3S44-iW8-pTiA.png?1673365013)  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274410786/original/O95R2YOy0ICNsr69vc64B2WeyxEaBLfNwQ.png?1673365182)

  
  
  
All subsequent messages in the email thread (initiated from the CRM) will be in sync. Outbound  
emails sent from your email will start reflecting in the CRM and vice versa.   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274411519/original/Qcf30hK4rYTieaYlqtiX7wPtH3YSk14exw.png?1673365274)  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274411984/original/iRhDXxDWcE5l-Tq60A1ApVfKpQYbnuowfw.png?1673365374)

  
  
  

**Please note**

Attachments of up to **3 MB** size work across this sync, any attachments larger than this size will cause the message to not sync over. 
**Supported file types:** JPG,JPEG,PNG,MP4,MPEG,ZIP,RAR,PDF,DOC,DOCX,TXT

  

  

* * *

## **Other functionalities**

  

**Update Email:** This helps users change their connected email ID to another one without disconnecting the previous connection.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274412595/original/K7lc8soEvt0eZrmsM_N1Bi4SkEDNDfhIsA.png?1673365506)

  

New outbound emails from the CRM will start syncing with the newly added email address. Upcoming messages in the previously connected email ID (same thread) will stop syncing between the CRM & personal email. 

  

**Disconnect Email:** This will disconnect their connection and stop the sync with the CRM. Once disconnected, emails or messages will not sync between both platforms.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274412884/original/-1hFYB1PHiPT0S6vhujtn2BPxSBXrHPIAA.png?1673365574)

  

  

* * *

## **Does Two-way sync only work with individual emails or bulk emails and workflows?**

  

How the sender domain mapping works for different types of emails:

  

**Individual Email:** On connecting a personal email account (Outlook), the outlook email ID will be considered as the sender domain for the emails sent by the user for individual emails.

  

**Bulk Email:** If the user enters their email ID (after setting up the two-way sync) under the “From Field,” the user email ID will be considered the sender domain for the bulk emails. If the field is blank, the sub-account level provider will be considered the sender domain.

  

**Bulk Email:** If the user enters an email ID different from their email ID connected (Outlook), it will consider the sub-account level provider as the sender domain.

  

**Workflow & Automation:** Emails will continue to go from sub-account level providers.These will not be in sync with your inbox.