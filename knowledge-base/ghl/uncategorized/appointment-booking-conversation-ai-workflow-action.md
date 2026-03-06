---
title: "Appointment Booking Conversation AI Workflow Action"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action"
category: "Uncategorized"
---

# Appointment Booking Conversation AI Workflow Action

Utilize the new "Appointment Booking Conversation AI" workflow action to harness the power of AI and book appointments for you and your clients

  

**TABLE OF CONTENTS**

-   [Components of the Workflow Action](#Components-of-the-Workflow-Action)
    -   [Calendar](#Calendar)
    -   [Personality and Additional Instructions](#Personality-and-Additional-Instructions)
    -   [Maximum Messages Limit before it goes to "APPOINTMENT NOT BOOKED"](#Maximum-Messages-Limit-before-it-goes-to-)
    -   [Time Out Value and Unit](#Time-Out-Value-and-Unit)
    -   [Channel](#Channel)
    -   [Don't let the bot send confirmation message](#Don't-let-the-bot-send-confirmation-message)

* * *

Understand the components of the Workflow Action to configure the AI bot as per your needs

# Components of the Workflow Action

## Calendar

This Calendar will be used to fetch available slots and suggest them to the contact and once selected by the contact, the appointment will be booked on this calendar.

Recurring calendars are not supported

  

## Personality and Additional Instructions

Use these prompt boxes to add personality and instructions to the AI to best suit your brand voice and increase the probability of getting the appointment booked

  

  

## Maximum Messages Limit before it goes to "APPOINTMENT NOT BOOKED"

This is the maximum number of messages within which the AI bot will try to book an appointment and it it fails, it will send the contact down the "Appointment not Booked" branch.

Maximum limit is 25 and minimum is 5. Recomended value for this field is 15

  

## Time Out Value and Unit

The time for which the AI bot waits for the contact to respond back to its answer. If the contact doesn't respond in the specified time, the contact is sent down the "Time Out" branch. 

Use "GoTo" action in the Time Out branch and send the contact back to the same action to make the AI bot followup with the contact

  

## Channel

The conversation channel on which the AI bot will respond to the contact. Current support Channels are SMS, FB and IG

  

## Don't let the bot send confirmation message

By default, the AI bot sends the booking confirmation message (Example: Great, you are booked for 12th August at 6pm) once an appointment is booked. Checking this box will stop the AI bot from sending the confirmation message and the contact will directly be sent down the "Appointment Booked" branch as soon as appointment is booked

If enabled, Dont forget to add a confirmation message in the "Appointment Booked" branch to inform the contact of the progress and keep the conversation going