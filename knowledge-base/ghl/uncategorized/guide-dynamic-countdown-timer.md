---
title: "Guide: Dynamic Countdown Timer"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004385-guide-dynamic-countdown-timer"
category: "Uncategorized"
---

# Guide: Dynamic Countdown Timer

  

  

We’ve introduced a **Dynamic Countdown Timer** that personalizes the countdown for each contact based on when they receive or open your email. You can now create unique timers for each recipient, making your campaigns feel more personal and time-sensitive.

  
**TABLE OF CONTENTS**

-   [What is a dynamic timer?](#%E2%80%8B%E2%80%8BWhat-is-a-dynamic-timer?)
-   [Popular Use Cases for Dynamic Countdown Timer](#Popular-Use-Cases-for-Dynamic-Countdown-Timer)
    
    -   [1\. Birthday Offer (Email Sent Trigger)](#1.-Birthday-Offer-\(Email-Sent-Trigger\))
    -   [2\. Black Friday Sale (Email Opened Trigger)](#2.-Black-Friday-Sale-\(Email-Opened-Trigger\))
    
-   [What is "Countdown Timer Ends at Time"?](#What-is-)
    -   [Why is it Useful?](#Why-is-it-Useful?)
-   [Benefits](#Benefits)
-   [How to Use It](#How-to-Use-It)

##   
**What is a dynamic timer?  
**

A **Dynamic Countdown Timer** is a personalized countdown that adjusts based on each contact's interaction with your email. Unlike static timers that show the same countdown for all recipients, a dynamic timer starts counting down from the moment a contact **opens** or **receives** the email, making it unique for each person.

For example:  
1\. If the duration is set to 2hours and trigger is "Email Opened" for a case with no end time - 

-   **Contact A** opens the email at 2 PM, and their timer counts down from 2 PM to 4 PM.
-   **Contact B** opens the email at 5 PM, and their timer counts down from 5 PM to 7 PM.  
      
      
    

2\. If the duration is set to 2hours and trigger is "Email Opened" for a case with end time as 12AM - 

-   **Contact A** opens the email at 2 PM, and their timer counts down from 2 PM to 12AM
-   **Contact B** opens the email at 5 PM, and their timer counts down from 5 PM to 12AM.

This feature allows you to set personalized, time-sensitive experiences for each recipient, increasing engagement and driving immediate action based on their specific interaction with your campaign.

  

  

## **Popular Use Cases for Dynamic Countdown Timer**

#### **1\. Birthday Offer (Email Sent Trigger)**

**Scenario**: Send a birthday discount to customers, valid until midnight on their birthday.

-   **How it works**:
    -   **Email Sent** at 11:59 PM the previous day.
    -   **Timer Duration**: 24 hours.
    -   **Timer Ends** at 12:00 AM (midnight)./ Not present
-   **Outcome**: Each recipient has a full day from receiving the email to redeem their offer.

#### **2\. Black Friday Sale (Email Opened Trigger)**

**Scenario**: Offer a minimum **2-hour** discount window after the email is opened.

-   **How it works**:
    -   **Email Opened** triggers the countdown.
    -   **Duration**: 2 hours minimum.
    -   **Timer Ends** at 11 PM the same day.
-   **Outcome**:
    -   **Contact A** opens at 6 PM—timer ends at 11 PM.
    -   **Contact B** opens at 10 PM—timer ends at 11 PM next day.
    -   Each user has a unique window to claim the offer.

  
  

## **What is "Countdown Timer Ends at Time"?**

The **"Countdown Timer Ends at Time"** feature ensures that the timer **ends at a fixed, specific time**, rather than ending after a set duration from when the email is opened. This creates a more **authentic** and **realistic** time-sensitive experience for your contacts.

### **Why is it Useful?**

The **"Ends at Time"** setting is important because it avoids situations where the timer seems unrealistic or like a marketing gimmick. For example:

-   **Scenario**: If a user opens an email at **11:07 PM** with a 2-hour duration, the timer would normally end at **1:07 AM**. However, this could feel like an **unrealistic extension** just for that contact, as the offer may seem tailored only for them.
    
-   **With "Ends at Time"**: Instead, you can set the timer to **end at a specific time**, like **12 AM**, making the timer consistent and **authentic** for all recipients, regardless of when they open the email. This ensures the urgency feels **real** and not artificially manipulated for each individual.
    

In short, **"Ends at Time"** helps keep the timer aligned with real-world timeframes, providing a more genuine, believable experience.

  

## **Benefits**

-   **Personalization**: Unique timers for each contact.
-   **Urgency**: Drives immediate action with time-sensitive offers.
-   **Flexibility**: Set custom durations and triggers.

  

  

## **How to Use It?**

1.  **Create a Timer**: Go to the **Timer** section and click **"Create New Timer"**.
2.  **Select Dynamic Timer**: Choose the **Dynamic Timer** option.
3.  **Set Duration & End Time**: Choose a duration (e.g., 2 hours) and an exact end time (e.g., 12 PM). Check the dynamic helper text to cross check the timer behaviour. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041974468/original/c7UMkRwhVQM_s7D8_F3WXrGOHr188NXQcg.png?1740068614)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039407439/original/4G1nAt36ba6zVFQW89c7oB1GxQ17bBdKQg.png?1736257747)
4.  **Customize Design**: Adjust the look of the timer to match your email style.
5.  **Add Active/Expired Links**: Define what happens when the timer is active and expired.
6.  **Save & Use**: Save your timer and use it in emails or funnels, or copy the code for custom templates.