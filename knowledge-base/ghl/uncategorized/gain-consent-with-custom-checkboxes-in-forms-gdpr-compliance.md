---
title: "Gain Consent With Custom Checkboxes In Forms (GDPR Compliance)"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185523-gain-consent-with-custom-checkboxes-in-forms-gdpr-compliance-"
category: "Uncategorized"
---

# Gain Consent With Custom Checkboxes In Forms (GDPR Compliance)

The Custom Checkbox element in Form Builder will allow your visitors to confirm their consent to receive information from your/your client's business. This is useful for visitors in countries that require additional consent for GDPR compliance.

  

&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;#8203;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;#8203;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/span&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;"&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;#8203;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/span&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;

Step 1: Create Custom Field Inside Of Form Builder

  

  

1.  Navigate over to the Custom Fields on the top right.
    

  

2.  Below you will see an Orange Box, click on it to add a custom field.
    

  

3.  A menu will appear, Select “Checkbox” 
    

  

4.  Give the field a name, such as “GDPR Compliance Checkbox”
    

  

5.  The placeholder field will be the content that will appear on the form.
    

This is your GDPR Compliance Statement  
  
Disclaimer: The placeholder content in this video is \*\*NOT AN OFFICIAL GDPR COMPLIANCE STATEMENT\*\* This was only used as an example. 

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111555024/original/QqyijLMY6T-2iXwYvAsYu4Mkm_3Leh3URQ.gif?1623779470)

  

  

Step 2: Making The Checkbox Field Required

  

1.  Hover your mouse over and click on the GDPR Checkbox field On The Form.
    

  

2.  Once selected on the right-hand side a Required Box Will Appear.
    

  

3.  By clicking on the box a checkmark will appear and this will state that the GDPR Checkbox field in the form is a required action in order for the form to be submitted.  
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554986/original/sCtwBE8vAv_MzfBwd5OfI4_iqI17FmMrIA.gif?1623779455)

  

Step 3: Creating a GDPR Workflow 

  

1.  Navigate to the workflow panel and select “Start From Scratch” and click create a new workflow on the top right.
    

  

2.  Select the title at the top and name the workflow as desired.
    

  

Step 4: Setting up the workflow Trigger

  

  

1.  Click on “Add New Workflow Trigger” 
    

  

2.  A menu will appear, the third column will say “Choose a Workflow Trigger” Select and scroll down till you see “Form Submitted”
    
3.  Select the custom field and apply the Yes condition
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554876/original/o-IrgMQ5EWgkUiX24PuapW2reemTyXNzHg.gif?1623779420)

  

Step 5: Add your Workflow Action

  

1.  Click on the + sign to open up the actions menu.
    

  

2.  Scroll down to the Conditions and Workflow section and Select “If / Else” 
    

  

3.  Inside Segments on the left in “Select” click on Contact Details and scroll down to Custom fields where you will see your GDPR checkbox custom field.
    

  

4.  Next over in Select Operator, click on includes and another field will open and select yes.
    

  

5.  Hit Save on the bottom right.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554649/original/qDCRHVTdYviTgyBDzCucXMJjHHjys2Xg3A.gif?1623779389)

  

Step 6: Setting up your  Yes / No paths

  

1.  Under the Yes path click on the + sign to open up the actions. 
    

  

2.  Under the “CRM” section select Add Contact Tag 
    

  

3.  Once you click on “Select a Tag” your tags will pop up, and if you do not already have the tag made, you can enter in the name of the tag that you want it to be and create it right then and there.
    

  

4.  Hit Save on the bottom right.
    

  

5.  For the no path, you will follow the same steps, the only difference will be that the tag name will be non-compliant 
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554294/original/AAhHPfV1mTOCdQU4X6lRjY249XplF3i46w.gif?1623779251)

  

Step 7: Setting up your SmartLists

  

1.  Hop over to Contacts / Smartlists
    

  

2.  On the right-hand side, you will see Filters.
    

  

3.  Once selected, a “Add Filter” type box will appear, type in tag and in the select tag menu click on compliant.
    

  

4.  To Save this smart list hit the “+” button above on the right to save so you can quickly view all contacts who are compliant.
    

  

5.  You can repeat the same process to create the smart list with contacts that Do Not Comply.
    

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554176/original/KrIduE7N10ZVz0UzmX6M2WMStLK3SqBotQ.gif?1623779216)