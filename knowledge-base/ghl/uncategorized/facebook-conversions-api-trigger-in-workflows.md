---
title: "Facebook Conversions API Trigger in Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows"
category: "Uncategorized"
---

# Facebook Conversions API Trigger in Workflows

  

With Workflows, you can add Facebook Conversion event actions in automation to send conversion data back to Facebook without anyone being cookied by a Facebook pixel!

##   

## **Frequently Asked Questions**

  

**Q: Which initial Workflow Triggers can I use the FB Conversions event with?**

  

1.  For **Funnel events** in Facebook conversion API action, you can use the following triggers; Form Submitted, Survey Submitted, Customer Booked Appointment, and Order Form Submission.  
    (For an appointment, it will only work with "Customer Booked appointment," not with "appointment," as appointments are the general triggers and "Customer Booked appointment" is the trigger for the widget; click" [here](https://help.gohighlevel.com/support/solutions/articles/48001081184) to learn more.)
2.  For **Lead events** in Facebook conversion API action, you can only use the trigger "Facebook Lead Form Submission" and "Pipeline Stage Change"(This will work if your contact is coming from a facebook lead form)

  

**Q: Which Event Details Parameters do we need to use?**

Event Source URL

  

**Q: Which Customer Information Parameters can we use?**

Client IP address - do not hash

Client user agent - do not hash

Email Address

First Name

Surname

Browser ID (fbp) cookie – do not hash

Click ID (fbc) cookie – do not hash

  

**Q: Can I use Custom Values for the Access Token and Pixel Id?**

Yes, Custom Values will work in those fields.

  

**Q: Why isn't the {{Order.Amount}} custom value working with the "Order Form Submission" trigger?**

The {{Order.Amount}} custom value **only works with the Order Submitted trigger** because it relies on a completed payment. It won't work with Order Form Submission, as that trigger fires before payment is processed, so the order amount isn’t finalized yet.

  

**Q: Why don't I see test events in Facebook Business Manager?**

If you don't see a test conversion, check the Diagnostics tab for any errors. A common issue we've seen is when FB has blocked the domain, so check Settings > Scroll to the bottom to "Domains In Your Allow List," where you can approve the domain

  

**Q: Does the 'Test Workflow' button work with testing FB conversions?**

Yes

  

**Q: Why is Facebook reporting the conversion as "Custom Event" when I selected "Lead"?**

This happens when you send test data (we're not sure why Facebook does this), but it will show "Lead" when you run a live conversion. 

  

**Q: Can I use the offline events with trigger names like 'Call', 'opportunity change status', 'tag', etc. with Facebook Conversion API action?**

  

Yes, it is possible to do so and we will be using the last possible pixel data to send this event. Basically, if the fbclid id is found, the data will be sent to conversion API. It can be best explained by the following examples:

  

**Example 1:**

Contact created Facebook form submission, thus first attribution source will be Paid Social (Facebook).  If you use workflow with Facebook form submitted trigger, the contact will have fbclid and workflow will send data to conversion API (CAPI).

  

Additional Behaviour -  
After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.

  

**Example 2:**

Contact created google ad, organic google search or direct traffic,, thus first attribution source will be Paid Search (Google) or Direct Traffic. If the contact after certain time interacted with Facebook form and they fill the form, the latest attribution will be Paid Social(Facebook) with contact having fbclid. Now, if the agency runs workflow with Facebook form submitted > Facebook conversion API, it will send the data to conversion API with fbclid.

Additional Behaviour - After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.