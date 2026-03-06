---
title: "Automate Lead Assignment & Notifications in Affiliate Manager Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003665-automate-lead-assignment-notifications-in-affiliate-manager-workflows"
category: "Uncategorized"
---

# Automate Lead Assignment & Notifications in Affiliate Manager Workflows

  

  
Work smarter and keep affiliates motivated by automating lead-related actions in your workflows. With the powerful combination of the "Lead Created" trigger and the "Add Leads under an Affiliate" action, you can track, assign, and respond to affiliate-generated leads — all without lifting a finger.

* * *

  

## **Trigger: Lead Created**

### **What it does**

The "Lead Created" trigger starts a workflow when a new lead is referred by an affiliate — giving you instant automation opportunities.

You can apply it across all campaigns or filter to trigger for a specific campaign only.

  

### **How to Use It**

1.  Go to Workflows and click + Create Workflow
2.  Set the Trigger as **Lead Created** 
3.  (**Optional**) Use the Campaign Filter to narrow it to a specific campaign![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919716/original/9rsHc5Z5_Sx71eszGZk8KJbQiXGFuci22Q.png?1747737828)
4.  Add actions like:
    1.  Send email to affiliate
    2.  Notify internal team
5.  Use custom values from the Lead Created  section in emails/messages![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046919760/original/XaZPVUfJB0b4WuoOJkd_o9uYMyuMWuZ-Fg.png?1747737844)
6.  Save and publish your workflow

  

### **Use Cases**

1.  Send a “Congrats!” email to affiliates when they generate a lead
2.  Alert your sales or support team about new affiliate leads
3.  Automatically track and tag affiliate leads for nurturing

* * *

## **Action: Add Leads under an Affiliate**

### **What it does**

The "Add Leads under an Affiliate" action assigns a contact (lead) to an affiliate and their associated campaign, making sure affiliates are correctly credited.

  

You can now choose from three assignment methods for total flexibility.

  

### **How to Use It**

1.  In your workflow, add the action: `**Add Leads under an Affiliate**`
    
2.  Choose your assignment method:
    
    -   **Manual**
        
    -   **Auto (Attribution)**
        
    -   **Custom Mapping**
        
3.  Configure additional fields based on the method
    
4.  Save and publish the workflow
    

  

### **Assignment Methods**

1\. Manual : Manually assign a lead to a known affiliate in a specific campaign.  
**Best for:** Form submissions, internal routing, admin decisions.

**Steps:**

-   Select campaign
-   Select affiliate (from affiliates in that campaign)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514809/original/CcKuxYwq4yOIQ_cx6E4yJDvAb3NnJEwUdA.png?1747119576)

2\. Auto (Attribution via URL) : Automatically assign leads using `am_id` passed in the **URL parameters**.  
Supports **first** or **last click** attribution.

**Steps:**

-   Choose Attribution Method: First / Last
-   Make sure `am_id` is passed earlier in the funnel (e.g., form/page URL)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514824/original/COmOzfhsvwzF7jK5RHBib1SjxVAI-szQpA.png?1747119591)

3\. Custom Mapping : Use if `am_id` is stored in a **custom field** or passed as a workflow value.  
**Best for:** API pushes, third-party systems, hidden fields on forms.

**Steps:**

-   Choose mapping source: custom field or workflow value
-   System reads value and assigns the lead to the matching affiliate![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046514851/original/cYBBMy6l6rRl8DKAaM8P4WCbLdraHVPOFw.png?1747119602)

  

### **Use Cases**

-   Reward Lead Generation  
    **Example:** A lead fills a form → system assigns them to the affiliate who shared the link → sends a “Congrats!” email.
-   Custom Lead Nurturing  
    **Example:** Leads from a funnel are assigned to specific affiliates for 1-on-1 follow-up — boosting conversion rates.
-   Simplify Administrative Tasks  
    **Example:** Replace manual lead assignments with automation — perfect for busy teams managing many affiliates.

  

* * *

##