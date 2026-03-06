---
title: "Updated Messaging Guidelines for the U.S. & Canada"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada"
category: "Uncategorized"
---

# Updated Messaging Guidelines for the U.S. & Canada

**Good news!**  
We’ve simplified A2P (Application-to-Person) requirements to make messaging across the **United States and Canada** more consistent, reliable, and compliant — all while keeping things easy for you.  
  

**OVERVIEW**  
This guide explains the messaging requirements and error codes related to **A2P (Application-to-Person)** registration and Persona verification for both **domestic** and **international** routes. Understanding these rules helps ensure that messages are delivered successfully and that compliance issues are avoided.

###   

### **1\. Domestic Messaging (Within the US and Canada)**

When sending messages within the United States, Canada, or Puerto Rico, **A2P (Application-to-Person) registration is mandatory**.

**What This Means**  
Any messages sent between domestic numbers—such as **US → US**, **US → CA**, or **CA → US/PR**—must originate from a registered A2P number. This requirement ensures compliance with carrier regulations aimed at preventing spam and unauthorized messaging.

**If A2P Registration Is Missing**  
Messages sent without A2P registration will fail and return the following error:

> **Error 30034** – Number not A2P compliant. Please register for A2P.

**Example Scenarios**

-   A message from a U.S. business number to a U.S. customer → **A2P required**
    
-   A message from a U.S. number to a Canadian number (or vice versa) → **A2P required**
    

### Rule for CA → CA Messaging

#### For Numbers Purchased **Before March 26, 2025**

-   **A2P registration not required**
    
-   Messaging continues as usual
    

#### For Numbers Purchased **On or After March 26, 2025**

-   Messages can be sent **with or without A2P registration**
    
-   If A2P registration is not completed, you only need to complete persona verification.
    

**In summary:**  
All domestic messaging routes require an approved A2P registration for proper delivery—**except for CA → CA**, where older numbers are exempt and new numbers require either A2P registration or Persona verification.

###   

### **2\. International Messaging (From US or Canada to Other Countries)**

For messages sent from the **US or Canada** to international destinations, A2P registration is **not required**. Just Persona verification is needed for these messages to be delivered successfully.

-   **What This Means:**  
    International messaging relies on the sender’s verified identity rather than A2P registration. Persona verification confirms that the sender’s details have been authenticated and approved.
    
-   **Message Behavior:**
    
    -   If the sender’s persona is verified, the message will be delivered normally. A2p verification would not be required in this case.
        
    -   However if there is **no A2P registration** and **no persona verification**, the system will block the message and return the following error:  
        **Error 1002 – Message blocked. A2P or persona verification needed.**
        
-   **Example Scenarios:**
    
    -   Sending from a US number to a customer in France → Allowed (Just Persona verification required)
        
    -   Sending from a Canadian number to a customer in Australia → Allowed (Just Persona verification required)
        
    -   Sending without persona verification → Blocked with Error 1002
        

Essentially, **international messages from US/CA numbers only require Persona verification**, **not A2P.**

###   

### **3\. Exception: Messaging to the United Kingdom (UK)**

The **UK** is a special case in international routing rules.

-   **Messages from the US to the UK** are **not allowed** and will fail automatically.
    
-   The system returns the following error when this route is attempted:  
    **Error 21612 –** **Message cannot be sent with the current combination of "To" and/or "From" parameters.**
    

However, **UK-to-UK** messaging is permitted.

###   

**4\. Key Takeaways**

-   **Domestic (US/CA/PR):** Always requires A2P registration.
    
-   **International (US/CA → Other Countries):** Requires Persona verification only.
    
-   **No A2P or Persona:** Results in blocked messages with Error 1002.
    
-   **US → UK:** Not supported; Error 21612 returned.