---
title: "Call Tracking and Missed Call Text Back Through Google Business Profile"
url: "https://help.gohighlevel.com/support/solutions/articles/48001179764-call-tracking-and-missed-call-text-back-through-google-business-profile"
category: "Uncategorized"
---

# Call Tracking and Missed Call Text Back Through Google Business Profile

Google Business Profile (GBP) allows a business to register two phone numbers, which creates an excellent opportunity for Agencies to track calls generated from Google Business Profile listings while keeping with SEO best practices (i.e.moving the business' real phone number to the secondary slot has not been found to negatively affect rankings).

  

The HighLevel Google Business Profile integration enables you to automatically move your client's main business number to the secondary slot and add their LeadConnector number to the first slot.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48096339534/original/ipAbRDhAbv48wA5WpohY-8c_g29I1hLwEg.png?1617420303)

  

When you toggle on GBP Call Tracking, the following happens: 

  

-   If the phone number in GBP is already a LeadConnector number from the HighLevel sub-account, nothing will be changed as the business's calls are already being tracked in HighLevel.  
      
    
-   If the phone number in GBP is also the forwarding number for any of the LeadConnector numbers in the HighLevel sub-account, HighLevel will move the current number to the secondary slot and add the LeadConnector number in the primary slot.  
      
    
-   If the phone number in GBP is not the forwarding number for any of the Twilio numbers in the corresponding HighLevel sub-account, HighLevel will move the current number to the secondary slot, add the LeadConnector number in the primary slot, and set the current number as the forwarding number for the LeadConnector number in the HighLevel sub-account.

* * *

## **Which LeadConnector Number to Add to GBP**

  

When you connect a Google Business Profile (GBP) to a location in HighLevel, the platform automatically selects a LeadConnector number to push as the primary phone number in GBP. **Here’s how that number is selected:**

  

1.  **Primary Location Number** **(Assigned in Phone Numbers tab)**:  
      
    
    -   If your location has a dedicated phone number assigned under **Settings > Phone Numbers**, that number will be used as the default tracking number pushed to GBP.  
          
        
    -   This is often the number created during onboarding or manual setup.  
        
2.  **First Number in the Sub-Account with Call Forwarding Enabled:**  
      
    
    -   If no number is explicitly set as the primary, HighLevel selects the first available number that has call forwarding enabled.  
        
3.  **Fallback to Any Available Number in the Sub-Account:**  
      
    
    -   If no call forwarding is configured, HighLevel will pick any available LeadConnector number in the location.  
        
4.  **No Number? You’ll Need to Assign One First:**  
      
    
    -   If no number is found in the sub-account, the integration won't complete. You'll need to assign or create a number before GBP integration can function.
        

* * *

## **Real-Life Examples** 

  
These examples show exactly what changes in Google Business Profile (GBP), where calls go, how HighLevel tracks them, and when missed-call text back can fire.

###   
**Example 1: GBP Already Uses Your HighLevel (LeadConnector) number**

  
**Scenario:** The business’s GBP **primary** number is already a LeadConnector number from the connected HighLevel sub-account.

  
**What Happens When You Toggle GBP Call Tracking ON**  
  

-   **Nothing changes in GBP** (because calls are already going to a tracked number).
    

  
**What It Looks Like in Real Life**  
  

1.  A customer searches “ABC Dental” on Google and taps **Call**.  
      
    
2.  The call goes to the **LeadConnector number** (tracked in HighLevel).  
      
    
3.  If the team answers → call is logged in HighLevel.  
      
    
4.  If nobody answers → **Missed Call Text Back** can automatically text the caller (if enabled in the location settings).
    

###   
**Example 2: GBP primary number is the same as a forwarding number already used by a HighLevel number**

  
**Scenario:** GBP shows the business’s real number (like a landline), and that same number is already set as the **forwarding number** for one of the LeadConnector numbers in the HighLevel sub-account.

  
**What Happens When You Toggle GBP Call Tracking ON**  
  

-   HighLevel **moves the current GBP number to the secondary slot**  
      
    
-   HighLevel **puts the LeadConnector number in the primary slot**
    

  
**What It Looks Like in Real Life**  
  

1.  Before toggle: GBP primary = (555) 111-2222 (real number).  
      
    
2.  After toggle: GBP primary = LeadConnector tracking number; GBP secondary = (555) 111-2222.  
      
    
3.  Customer taps **Call** on Google → call hits the **LeadConnector number** (tracked).  
      
    
4.  HighLevel forwards the call to (555) 111-2222 (because it was already configured that way).  
      
    
5.  If missed, **Missed Call Text Back** (if enabled) texts the caller from the LeadConnector number.