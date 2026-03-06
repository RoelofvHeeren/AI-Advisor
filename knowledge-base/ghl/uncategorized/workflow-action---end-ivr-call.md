---
title: "Workflow Action - End IVR call"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002285-workflow-action-end-ivr-call"
category: "Uncategorized"
---

# Workflow Action - End IVR call

### **More Tutorials from the Community**

[https://youtu.be/rGDIYVSOKHY](https://youtu.be/rGDIYVSOKHY)

In this Article  

-   #### What is End IVR call?
    
-   #### How does End IVR call work?
    
-   How to setup end IVR call?
    
-   FAQs
    

#   

#### **What is End IVR call?**

  

End IVR call allows you to terminate the IVR call from your end. 

Presently, workflow owners lack the option to terminate calls from their end. This means that after IVR actions are done, the contact waits with elevator music until the subsequent non-IVR actions finish, and the call ends only at the workflow's conclusion. This leaves contact either listening to endless elevator music till the workflow reaches the end or hanging up themselves.

  

  

  

#### **How does End IVR call work?**

  

End IVR call action works as a new action in the workflows. Users can choose to end the call with a text message, custom voice message or abruptly.

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985223/original/X5bTks2dmARo0BMeCY2-x-Ff9ZMpOy5U_Q.png?1713951346)

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985282/original/Tv8g88ELCeuoSmKp_GeOClhgpTKQ0q_9fA.png?1713951382)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985304/original/vF3RDo7yj2jeVC5CxOdpph-SVSyCqwvkWA.png?1713951393)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985338/original/b-fvpgxcC9kQndQqHGiLOU3F6JC0H_l-_Q.png?1713951403)

  

#### **How to setup end IVR call?**

  

1.  Select the workflow with IVR action you want to end.
2.  Click the + button after any of the IVR actions - Gather, say/play a message, record etc.
3.  Search for the action "End IVR call"
4.  Choose from a range of custom option - End abruptly(Default), play a text message or add a custom voice along with the number of loops.
5.  Click "Save".

  

  

  

#### **FAQs**

#### **1\. How will this impact the current flow?**

  

This would enhance the user experience during IVR calling, preventing users from being indefinitely subjected to elevator music. Moreover, it would directly decrease IVR call durations for users once IVR actions are completed giving the workflow owners the optionality to end from their end which was earlier not available.

####   

#### **2\. Is this a premium action?**

  

No

  

#### **3\. What custom options are available for End IVR call?**

  

Users can choose three different custom types :

1.  End abruptly - By default IVR would be terminated instantly without any warning or a message.
2.  Text message - A part of custom settings where users can type a message along with the number of loops before the IVR call is terminated
3.  Custom music - Users can choose to upload a voice message or branded music or any other audio format to be played before the IVR call is terminated along with the loops

  

#### **4\. What happens to the IVR actions after End IVR call actions?**

  

#### All IVR actions after End IVR call action would be skipped. 

Note : Non IVR actions in the workflow would continue to happen irrespective.