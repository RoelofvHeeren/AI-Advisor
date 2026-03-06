---
title: "Workflow Action - Facebook Interactive Messenger"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004661-workflow-action-facebook-interactive-messenger"
category: "Uncategorized"
---

# Workflow Action - Facebook Interactive Messenger

The Facebook Interactive Messenger action in workflows enables automatic replies through Facebook Messenger.

* * *

**TABLE OF CONTENTS**

-   [What is Facebook Interactive Messenger?](#What-is-Facebook-Interactive-Messenger?)
-   [Where To Find Facebook Interactive Messenger](#Where-To-Find-Facebook-Interactive-Messenger)
-   [Components](#Components)
-   [Components - Buttons & Quick Replies](#Components---Buttons-&-Quick-Replies)

* * *

## **What is Facebook Interactive Messenger?**

  

The workflow action Facebook Interactive Messenger allows you to automate Messenger conversations and also include interactive elements like buttons and quick replies. Use this in combination with Facebook comment and/or message triggers.

* * *

## **Where To Find Facebook Interactive Messenger**

  

Navigate to Automation > Workflows > Workflow Builder > Actions > Communication > Facebook Interactive Messenger.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049966/original/ForSlQcQLfG3nqjQ56LOm8xKoQzkkEu8YA.png?1740171969)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049998/original/0X2-Um9xjynf-LTDcSkU0iC3L2c9dkanXg.png?1740172057)

* * *

## **Components**

  

There are several Facebook Interactive Messenger components:

1.  Reply Type: 
    1.  Reply to Comment via DM: use this option when the trigger was a new comment and you want to create a DM conversation.
    2.  Reply to DM: use this option when you are responding to a DM.
2.  Templates: these are [Snippets](https://help.gohighlevel.com/en/support/solutions/articles/155000000890) from Marketing > Snippets.
3.  Message: 
    1.  Body: the message builder.
    2.  Custom Values: this allows you to insert the [Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/48001161575) created in Settings > Custom Values.
    3.  Trigger Links: this allows you to insert the [Trigger Links](https://help.gohighlevel.com/en/support/solutions/articles/48000981404) created in Marketing > Trigger Links.
4.  Add Attachment: upload a file from your computer to attach it to the message.
5.  Add file through URL: insert the URL to a file to attach it to the message.
6.  Add New Button: add an interactive button to guide the conversation.
7.  Add Quick Reply: add an interactive Quick Reply to guide the conversation.
8.  Wait Step: set the time between sending the Message-Button-File-Quick-Reply combo and moving on to the default branch.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050059/original/WDUSNTgmom1svtAY3mjyX-MavOIC4GQZcw.png?1740172170)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050085/original/pY4KEZFyyT1n31Vzhz2EINhDW5HnEtcqFg.png?1740172256)

* * *

## **Components - Buttons & Quick Replies**

##   

 The Buttons and Quick Replies are a big part of what makes this action "interactive". You can guide the conversation down pre-defined paths.Buttons and quick replies both create the same branches in a workflow. However, they serve slightly different purposes. 

  

**Buttons** are typically used for **persistent** actions and can perform tasks like redirecting to a link, opening a dialer, or triggering specific workflow branches. **They remain visible** even after the user interacts with them. You can add 3 buttons.

  

**Quick replies**, on the other hand, are designed to **guide** conversations by offering one-tap response options. They **disappear** after the user selects one, keeping the conversation focused and streamlined. You can add up to 13 quick replies.

  

In this Facebook Interactive Messenger action you can add Buttons, Quick Replies, and Files alongside each other in one action. In the Instagram Interactive Messenger you can either add buttons or Quick Replies in a message. Quick Replies can only be added when no attachments are included in the same message.

  

  

Components:

1.  Button: text displayed in the conversation and the label in the workflow.  
      
    
2.  Button: action.  
      
    1.  Open Website: add a url and when the user clicks it will open the url for them in a new tab, leaving the conversation unaffected, and the buttons stays active if they scroll back to it.  
          
        
    2.  Call Number: add a phone number and when the user clicks it will open their dialer for them, leaving the conversation unaffected, and the button stays active if they scroll back to it.  
          
        
    3.  Perform Action: no specific event, it just creates a workflow branch and goes to the next workflow action in that branch.  
          
        
3.  Quick Reply: label in the workflow.  
      
    
4.  Quick Reply: text displayed in the conversation.  
      
    
5.  Example Button branch.  
      
    
6.  Example Button branch with another Interactive Messenger action to deliver the checklist.  
      
    
7.  Another Interactive Messenger action to deliver the checklist.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050446/original/cy30U_AmVK8i8NErz_IXGLxisClF59X_sw.png?1740173446)