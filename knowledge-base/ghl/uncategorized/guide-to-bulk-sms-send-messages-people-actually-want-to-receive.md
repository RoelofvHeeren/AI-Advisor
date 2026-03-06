---
title: "Guide To Bulk SMS: Send Messages People Actually Want To Receive"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive"
category: "Uncategorized"
---

# Guide To Bulk SMS: Send Messages People Actually Want To Receive

## This guide will:

-   Help you understand some of the rules that apply to SMS marketing (US and Canada).
    
-   Maximize the impact of SMS for:
    
    -   Client responses
        
    -   Marketing ppt Ins
        
    -   Appointment conversions
        
    -   Closing sales
        

  

## Composing Your Message

### Compliance in your SMS body

-   Seek consent from your text recipient before including them in your SMS campaign
    
-   Always identify yourself and your business by name.
    
-   If it’s the first time you’re messaging a contact, OR if it’s been 90 days or more since you last messaged them, be sure to add an unsubscribe clause at the very end of your message.
    
    -   “Reply STOP to opt out.”
        
    -   “If you’d like us to stop texting you, just reply STOP.”
        
    -   If someone opts out of receiving future texts, be sure to remove them from your future SMS campaigns!
        

  

### Strategic Best Practices

-   Greet each contact by using the first name custom value → {{contact.first\_name}}
    
-   Use sparingly, no more than once per month
    
    -   Respect people’s time and attention by only sending in specific time windows that are least likely to disturb personal time
        
-   For measurable results, use a strong offer
    
    -   Make your message clear and concise to avoid turning people off and increasing unsubscribes.
        
    -   Consider offering something for free to maximize interest or responses
        
        -   Minimal commitment now = maximum number of conversations that will build trust and belief throughout the sales process
            
-   Keep messages short and exciting
    
    -   Think about how your message will make the average contact feel
        
    -   Avoid needless punctuation, specifically overuse of exclamation points, to increase reading speed
        
    -   Avoid formal writing styles and match the casual tone of a typical text message conversation
        
-   Spark conversations
    
    -   Creating live conversations = a direct connection with a potential customer
        
        -   It builds trust
            
        -   Which leads to increased sales momentum
            
        -   Which builds your reputation
            
    -   Ask a direct question to prompt responses
        
    -   Do not ask more than one question, as this can cause confusion
        
    -   Do not overuse emojis
        
    -   Avoid sending links
        
        -   This can cause deliverability issues
            
        -   It also neglects all the great benefits of chat conversations
            
-   Only send out messages when you know you can respond in a timely manner
    
    -   Contacts who respond right away and then never hear back will think your message was sent in bulk or spam
        
    -   As such, contacts who get responses right away will be more likely to convert
        
-   Be prepared for unsubscribes
    
    -   You will always get some people responding STOP
        
    -   You will always get some people to ask not to be texted anymore
        
    -   Respect their wishes, mark them DND, and move on
        

  

### Bad Example

“Hello, this is Ashley from Bob’s Fitness ?? We’re the best gym in town! All our members are models! It’s ? $175/month ? to join and there’s an extra $150 new member fee ?… We have a lot of spots to fill so we hope you can afford it! We also have personal training, group classes, a 6 week challenge, nutrition plans, sauna, ice baths, an inner circle club, work-trade spots available, and many other add-ons!”

  

### Good Example

“Hi {{contact.first\_name}}, this is Ashley from Bob’s Fitness, we’re giving out a few 10-day passes and I wondered if you’d like one? If you’d like for us to stop texting you, reply STOP”

  

### Technical Setup and Execution

-   Select the contacts you’d like to message. Need help filtering a list? Check out "[Getting Started with Smart Lists](https://help.gohighlevel.com/en/support/solutions/articles/48001062094)"
    
-   Click the “Send SMS” button (picture of icon)
    
-   Click “Ok, Proceed”
    
-   Type your message
    
-   Title the action for internal reference
    
-   If you want to send the message to everyone at the same time immediately, leave the toggle on “Send all at once.”
    
    -   This is good for 1-way announcements you do not expect to turn into conversations and want to send right away.
        
-   If you want to send the message to everyone at the same time later, select “Send all at schedule time” and then set the send time in the “Start On” field.
    
    -   This is good for 1-way announcements you do not expect to turn into conversations and want to send automatically at a later time
        
-   If you want to slowly deliver the message to the list of contacts over time, select “Send in drip mode”
    
    -   This is good for messages you expect to generate responses and conversations
        
    -   Start On
        
        -   The day and time when messages should start sending
            
    -   Batch Quantity
        
        -   The number of messages that sends each time the Repeat After condition is met
            
    -   Repeat After
        
        -   The amount of time to wait until sending out the next Batch Quantity
            
    -   Send On
        
        -   The days of the week the system will allow messages to send
            
    -   Process Between Hours (optional)
        
        -   The window, or timeframe within each day in which the system will send messages..
            
-   Example of a Drip sending 100 messages per day spread out between 10:30am-11:00am each day.
    
    -   Action: “Database Reactivation: Black Friday Weekend Promo”
        
    -   Start On: November 29th
        
    -   Batch Quantity: 10
        
    -   Repeat After: 3 minutes
        
    -   Send On: Mon, Tue, Wed, Thr, Fri, Sat, Sun
        
    -   Process Between
        
        -   Start From:
            
            -   10:30AM
                
        -   End At
            
            -   11:00AM