---
title: "AI Conversational Appointment Booking Workflow and Setup"
url: "https://help.gohighlevel.com/support/solutions/articles/48001216782-ai-conversational-appointment-booking-workflow-and-setup"
category: "Uncategorized"
---

# AI Conversational Appointment Booking Workflow and Setup

### The following is a step-by-step guide on how to set up your own AI Conversational Appointment booking bot within a workflow.

  

* * *

## 1\. Create Workflow

Add a trigger with customer Replied (or any other trigger)

  

![Create Workflow](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359047/original/9_O9O-lOgVZzMFPEhKvgEiajAtnaS18yhw.png?1655208406)

  

  

  

  

  

## 2\. Select the AI appointment bot in the workflow options

Create action for the appointment bot with the desired calendar  
  
Set the "Total bot processing duration" -This is how long before the bot will time out if there are no replies from the contact.

  

![AI appointment bot](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359049/original/pr8zGFvRVV-AiELuKGmg8rgJOyAzi19VpQ.png?1655208407)

  

  

  

  

  

## 3\. The AI conversation will end in one of the three ways.

**1\. The bot successfully books the appointment**

**2\. Bot timed out:** The appointment was not booked as the lead didn't respond to the prompts by the bot.

**3.** **Appointment could not be booked for other reasons,** - no suitable slot, the bot could not understand the query or other technical issues.

  

  

  

  

## 4\. Create a condition if the bot booked an appointment. 

![Create condition if the bot booked an appointment.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359046/original/hJxKhMj9Kpsm64xjTF7gE24n8eRgzgs72g.png?1655208406)

  

  

  

  

  

## 5\. Create a message or any action for the appointment booked condition

![Create message for appointment booked](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359048/original/KKvlxmWPb4Du_Qzq0o7_HgVBmsxWMJ2a3A.png?1655208406)

  

  

  

  

  

## 6\. Secondary condition if the appointment is not booked due to bot timeout 

Here we want to know if the appointment was not booked because the bot timed out or for some other reason. 

Common reasons could be that no slots were available or the bot failed to understand the conversation. 

  

![Secondary condition if the appoitment is not booked](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359051/original/WYUwNv5-5grq9Jlo-YUcHXatsZbInn14ig.png?1655208407)

  

  

###   

###   

## 7\. Third Condition - Appointment not booked for any other reason.

Configure appropriate actions for bot failures for any other reason. If you have Eliza Agent Platform Subscription, you can send the lead over there to continue the lead nurture. 

  

  

![Human Rollover to Eliza agent platform ( if subscribed)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359050/original/lbIxgrDyMUfoe8A8bvOrTM4D7YWvX1h5Mw.png?1655208407)

  

  

[](https://app.tango.us/app/workflow/b9d308b3-1e9a-44f8-a259-7f23906a05aa?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links)