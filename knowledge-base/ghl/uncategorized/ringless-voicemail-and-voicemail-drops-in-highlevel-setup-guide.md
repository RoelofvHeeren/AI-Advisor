---
title: "Ringless Voicemail and Voicemail Drops in HighLevel: Setup Guide"
url: "https://help.gohighlevel.com/support/solutions/articles/48000981430-ringless-voicemail-and-voicemail-drops-in-highlevel-setup-guide"
category: "Uncategorized"
---

# Ringless Voicemail and Voicemail Drops in HighLevel: Setup Guide

Voicemails are a great way to reach customers and let them know about your business. Voicemail drops are a quick and inexpensive way to determine if your messages are getting through. Your voicemail drop could be the first step towards increasing sales and customer satisfaction. Get started right away by ordering your free voicemail drop from our website.

* * *

**TABLE OF CONTENTS**  
  

-   [What are Voicemail drops?](#What-are-Voicemail-drops?)
-   [Key Benefits of Ringless Voicemail (Voicemail Drop)](#Key-Benefits-of-Ringless-Voicemail-\(Voicemail-Drop\))
-   [Prerequisites](#Prerequisites%3A)
-   [Set Up Ringless Voicemail (Voicemail Drops) Using Workflows](#Set-Up-Ringless-Voicemail-\(Voicemail-Drops\)-Using-Workflows)
-   [Example use Cases](#Example-use-Cases)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What are Voicemail drops?**

  

A Voicemail Drop (also called Ringless Voicemail) is a way to deliver a pre-recorded voicemail message to a contact without placing a live call or ringing their phone. It’s commonly used for quick, consistent follow-ups—like appointment updates, lead nurturing, and re-engagement—while keeping your outreach personal and efficient.

* * *

## **Key Benefits of Ringless Voicemail (Voicemail Drop)**

  

-   **Delivers your message without ringing the phone:** Contacts receive a voicemail message with minimal interruption.  
      
    
-   **Scale personal-sounding outreach:** Use pre-recorded voicemails to keep a human tone while handling higher volume.  
      
    
-   **Improve follow-up speed and responsiveness:** Immediate delivery helps you respond faster after key actions (lead updates, bookings, no-shows).  
      
    
-   **Support multiple real-world workflows:** Useful for appointment confirmation, no-show recovery, lead nurturing, and re-engagement sequences.

* * *

## **Prerequisites**

  

1.  Purchased a number in your subaccount ([LC Phone Guide](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-phone-system-)) or ([Twilio Guide](https://help.gohighlevel.com/en/support/solutions/articles/48000981420))
2.  Have pre-recorded Audio files that are **mp3/wav files** (**64kbps** ) as [outlined here](https://help.gohighlevel.com/support/solutions/articles/48000981433-voicemail-drop-file-conversion)
3.  Taken the user's consent for automated calls in order to drop Voicemails.

* * *

## **Set Up Ringless Voicemail (Voicemail Drops) Using Workflows**

  

Workflows let you automatically send a Ringless Voicemail (Voicemail Drop) when a contact meets certain conditions—like a status update or appointment change—so follow-ups happen instantly and consistently. Here’s how to set it up in a workflow.  
  

1.  ### **Open a Workflow**
    
    In your sub-account, click "**Automation"** from the left side navigation menu and open an existing workflow OR click on "+ **Create Workflow**.">"+ **Start from scratch."**  
      
    **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064864511/original/B_TKey_IwnM_Wci7egbX8TtW5jkGeNxfzQ.png?1770984750)**  
      
    
2.  ### **Choose a trigger**
    
    ###   
    
    Select a workflow trigger for your voicemail drop (ringless voicemail) action. In this example, we have used the Contact Changed trigger.  
    You can also use other relevant triggers depending on when you want the ringless voicemail / voicemail drop to be delivered (e.g., after a booking is confirmed, after a no-show, after a status update, etc.).  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064778674/original/PgjOYymo0ls79mvb1S-2KCdzdFZSIJ4jdA.gif?1770899845)  
      
    
3.  ### **(Optional) Assign the contact to a user**
    
    To add a workflow action, click the **+** button. Search for and select **Assign to User**.  
    **Choose a user** from the dropdown if you want these contacts routed to a dedicated team member. If no one is assigned, calls route to the company number saved in your Business Profile.  
      
    **Only Apply To Unassigned Contacts**: Enable this if you only want to assign contacts that don’t already have an owner. Click **Save Action** before returning to the workflow builder.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064778717/original/m8ZBXZCdN7g8gnX12wzl-SAV6ZHS1E834g.gif?1770899875)  
      
      
    
4.  ### **Add the Voicemail action (Ringless Voicemail / Voicemail Drop)**
    
      
    Click the + button again to add another action.Scroll or search for Voicemail and select it. Upload the File.  
    Upload your pre-recorded mp3/wav (64kbps) audio file. Be sure to click Save Action once the file is uploaded.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064778880/original/NggqqtMYKYxJC82hJtPTFDc8baIOTJi26g.png?1770899965)

* * *

## **Example use Cases**

  

Here are a few common workflow + trigger combinations you can use to send a Ringless Voicemail (Voicemail Drop)at the right moment—whether you’re confirming appointments, recovering no-shows, or nurturing new leads.  
  

| Use case / workflow | Recommended trigger | Suggested actions (example) | Goal |
| --- | --- | --- | --- |
| Appointment confirmation follow-up | **Appointment Status Changed → Confirmed** | (Optional) **Assign to User** → **Voicemail (Ringless Voicemail / Voicemail Drop)** with “What to expect + how to reschedule” | Reduce confusion and improve show rate |
| No-show recovery | **Appointment Status Changed → No Show** | **Voicemail (Ringless Voicemail / Voicemail Drop)**with a friendly rebook prompt + next steps | Recover missed appointments |
| New lead nurture (field/status change) | **Contact Changed** (e.g., Lead Status becomes _New Lead_ / _Qualified_) | **Assign to User** → **Voicemail (Ringless Voicemail / Voicemail Drop)** intro message from the assigned rep | Add a “human touch” fast |
| Post-form submission thank-you | **Form Submitted** | **Voicemail (Ringless Voicemail / Voicemail Drop)**thanking them + setting expectations on response time | Increase trust and engagement |
| Cold lead re-engagement | **Contact Tag Added** (e.g., _Cold Lead_, _Re-engage_) | **Voicemail (Ringless Voicemail / Voicemail Drop)**with a simple “still interested?” message + CTA | 
Reactivate dormant leads

 |

* * *

## **Frequently Asked Questions**

###   

### **My voicemail file is not working.**

1\. go to [https://online-audio-converter.com/](https://online-audio-converter.com/) and upload the voicemail file. Otherwise, you can create a new file here [https://www.rev.com/onlinevoicerecorder](https://www.rev.com/onlinevoicerecorder)

  
2\. Select **64kbps MP3**, the lower the better

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189712460/original/ZTtqkvqzGQ7rQJIEhac3liq96BLgoytlNQ.png?1644711271)

  

3\. Upload back to HighLevel voicemail campaign/workflow

  

### **Are voicemail drops legal?**

Voicemail drops are legal as long as you have the user's consent before dropping the voicemail. Else they are illegal. The TCPA applies to ringless voicemail drops because they are considered a form of communication that uses an automated dialing system and a prerecorded message. Therefore, you need to have prior express consent from the recipients before sending them ringless voicemail drops. Otherwise, you may face lawsuits and fines from the Federal Communications Commission (FCC) or private parties.

  

### **Why am I not able to drop more Voicemails?**

Voicemail drop limits ramp up as you spend more time with us.

Day 1: 100 drops per day

Day 2: 200 drops per day

Day 3: 300 drops per day ...

Day 7: 700 drops per day

Day 7 onwards: 2000 drops per day

  

If you would like to increase these limits, please reach out to our support team.

  

**Do I need any extra registration or verification before sending ringless voicemail drops?**

  

If you already have an LC phone number (or Twilio number) set up in your sub-account and have obtained prior express consent from your contacts, you can start sending ringless voicemail drops right away. No additional legal registration is required beyond compliance with the **TCPA** and other applicable laws in your region. However, always confirm that your business is following local telemarketing regulations, as requirements may vary.  
  

**TLDR; Voicemail drops rely on a carrier trick, this is how all voicemail drops work, and as a result they only work about 70% of the time.**