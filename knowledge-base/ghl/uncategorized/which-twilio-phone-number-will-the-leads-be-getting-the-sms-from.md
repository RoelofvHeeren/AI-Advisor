---
title: "Which Twilio phone number will the leads be getting the SMS from?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-"
category: "Uncategorized"
---

# Which Twilio phone number will the leads be getting the SMS from?

**Overview**  
  
When sending SMS through HighLevel, the system follows a set of rules to determine which Twilio phone number is used as the sender. This ensures messages are sent from the most appropriate number, maintaining consistency and compliance.

  

* * *

**TABLE OF CONTENTS**

-   [Workflow Settings Option](#Workflow-Settings-Option)
-   [Fallback Rules (When No User Number Exists)](#Fallback-Rules-\(When-No-User-Number-Exists\))
-   [Checking Which Number Was Used](#Checking-Which-Number-Was-Used)

  

* * *

  

**Primary Rule**  
  
1.If the staff member sending the SMS is listed under the sub-account’s **My Staff** tab **and** has a **dedicated Twilio number assigned**:  
➝ The lead will receive the SMS from that assigned Twilio number.(It can be changed manually)  
2.**Exception:** If the assigned Twilio number is SMS-incompatible, the system will fall back to the **default outbound number**.  
3.If user is selecting the number from which he wants to send the messages manually,the system will display the **last used number next time.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053960857/original/fAxL4sKwzS_4yVbv2xvI4Ern0QSl-kiZuA.png?1758116362)**  
  

* * *

  
  
**How to Assign Twilio Numbers to Users**

  

1\. Go to **Sub-Account Settings > My Staff**.

  

2\. **Edit** the User.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959012/original/47E8wtytoJnuER0WSD4SpA2bNZ_p10Zfsw.png?1758115345)

  

3\. Expand the **Call & Voicemail Settings**.  
4\. Assign a Twilio phone number to the User.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959210/original/ep5Tz931DpRQ7_j_Y5rXUwa9HDFnMJE8Bw.png?1758115465)

  

Learn more about [Phone numbers for users / Assign Twilio Numbers to Users](https://help.gohighlevel.com/en/support/solutions/articles/48001152124)

* * *

  
  

## **Workflow Settings Option**

Inside the **Workflow builder**, you can also **manually choose which number to send SMS from**.

-   When configuring a **“Send SMS” step**, you’ll see a dropdown for **“From Number.”**
    

 This is useful when you want workflows to always send from a particular number, regardless of staff assignment or channel number.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959845/original/qlUVFLyfTCV5zYbFAhz3SS187jq-AOvDzg.png?1758115796)  

  
  

* * *

## **Fallback Rules (When No User Number Exists)**

If the User logged into HighLevel is **not listed in the sub-account**, or **doesn’t have a LC number assigned**, the system will try the following in order:

1.  **Channel Number** – the **first LC number ever used with that contact**.
    
    -   This maintains conversation continuity.  
          
        
2.  **Default Outbound Number** – if the channel number has been removed, the system will use the **default Twilio number** set at the account level.
    

* * *

## **Checking Which Number Was Used**

To confirm the exact Twilio number used in a conversation:

-   Hover over the **SMS message** in the conversation view.
    
-   Click the **three dots (…) > Details**.
    
-   This will show the **Twilio number** used to send that SMS.
    

  

  

![](https://i.ibb.co/YjHc479/chrome-capture-2023-1-20.gif)

* * *

**Related article**  
  
[SMS still coming from old Twilio number when I got a new one?](https://help.gohighlevel.com/en/support/solutions/articles/48001152123)