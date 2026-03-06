---
title: "How to Use Webhook.site to Troubleshoot your API Requests"
url: "https://help.gohighlevel.com/support/solutions/articles/48001212085-how-to-use-webhook-site-to-troubleshoot-your-api-requests"
category: "Uncategorized"
---

# How to Use Webhook.site to Troubleshoot your API Requests

Webhook.site is a free third-party tool that lets you inspect and capture the raw HTTP requests sent from integrations, workflows, or custom API calls. Using Webhook.site makes it easy to debug webhook payloads, verify configuration, and troubleshoot issues before sending payloads to HighLevel or your production endpoints.

* * *

* * *

**TABLE OF CONTENTS**

-   [What is Webhook.site](#What-is-Webhook.site)
-   [How It Works](#How-It-Works)
    -   [Step 1: Visit Webhook.site](#Step-1%3A%C2%A0Visit-Webhook.site)
    -   [Step2. Click on "Copy to clipboard" next to your unique Testing Webhook on the homepage](#Step2.%C2%A0Click-on-)
    -   [Step 3. Go to Your Custom Integration, like Zapier or other third-party solution](#Step-3.%C2%A0Go-to-Your-Custom-Integration,-like-Zapier-or-other-third-party-solution)
    -   [Step4. Replace the HighLevel API URL with the Webhook.site testing URL](#Step4.%C2%A0Replace-the-HighLevel-API-URL-with-the-Webhook.site-testing-URL)
    -   [Step5. Save your updates](#Step5.%C2%A0Save-your-updates)
    -   [Step 6. Review Payload Data](#Step-6.%C2%A0Review-Payload-Data)
    -   [Step 7. Click Copy](#Step-7.%C2%A0Click-Copy)

* * *

## **What is Webhook.site**

  

Webhook.site instantly generates a **unique test URL** that collects all incoming webhook requests and displays them in real time. This makes it ideal for:

  

-   Capturing raw webhook payloads (headers, body, method)  
      
    
-   Validating the structure of requests before sending them to your live endpoint  
      
    
-   Troubleshooting integrations from Zapier, Make (Integromat), custom apps, or other automation tools 
    

  

**IMPORTANT**: The steps in this article are for Advanced Integration and for informational purposes only. While we do not currently support or service either the Basic or Advanced API due to their complexity, we have many tools and groups to help you get started and connected! For assistance with APIs, you can join our Developer Council Slack Community here: [**https://www.gohighlevel.com/dev-slack**](https://www.gohighlevel.com/dev-slack)  
  
We also hold a Developer Council Zoom Call once a month (second to last Friday) which you can find on the Events calendar here: [**https://www.gohighlevel.com/events**](https://www.gohighlevel.com/events)  
[](https://developers.gohighlevel/)For more information and links to our API documentation, visit our developer's website: **[https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/)**

* * *

## **How It Works**

  

### **Step 1:** Visit Webhook.site

  
Open [https://webhook.site](https://webhook.site) in your browser. A unique test URL will be generated automatically.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064186797/original/78EqPHmlHxnXgPeQwPPVXkY78oq_19psgw.png?1770213973)

  

  

### **Step2.** Click on "Copy to clipboard" next to your unique Testing Webhook on the homepage

  

![Click on "Copy to clipboard" next to your unique Testing Webhook on the homepage](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558661/original/AMwU34bm7Qtr34Kv-qg5tlrcbmjHLwVPEg.png?1647882452)  
  

  

### **Step 3.** Go to Your Custom Integration, like Zapier or other third-party solution

For this example, we are using Zapier, and to use Webook.site to test you will need to click "Set Up Action." 

  

  

![Go to Your Custom Integration like Zapier, or other third-party solution](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558665/original/y413VeWzjcuvSTcRG3D7Qr0i-WG1OsdbRg.png?1647882452)  
  

  

### **Step4.** Replace the HighLevel API URL with the Webhook.site testing URL

Temporarily swap out the HighLevel API URL for the Webhook.site URL for testing purposes. You'll follow a similar process for any other custom integration that is POSTING data into HighLevel. 

  

  

![Replace the HighLevel API URL with the Webhook.site testing URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558659/original/u3eeM4pSIkQSw2ivNF_WpkezIC7Rrd2j4Q.png?1647882452)  
  

  

### **Step5.** Save your updates

  

Make sure to save your changes, then run whatever flow you have in place that would normally execute the webhook. If your tool or integration (like Zapier, Integromat, etc.) has a built-in testing tool, don't utilize this. Instead, use a real-world example. If the webhook is triggered when a form is submitted, go to the form and submit a test. If the automation fires when an action is performed in an external system, perform said action.  
  
This will provide you and your developers with the most accurate information, and will be incredibly valuable when troubleshooting advanced API-related issues.  
  
  

### **Step 6.** Review Payload Data

Next, you'll be presented with the raw data being received by HighLevel anytime the webhook is executed. You can compare this with the information available on our API documentation websites to test your configuration. 

  

  

![Review Payload Data](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626853/original/rZKm85AvhyACSqZ3wxKtgoFf4Zkh8lDLMQ.png?1647895301)  
  
  

### **Step 7.** Click Copy

Click Copy in the Upper Right of the Raw Data input box to copy the entire Payload. Save this for troubleshooting with your developers, or with the HighLevel team.

![Click Copy](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626854/original/KfqMVOZpTrJV0t0LHq6GHcGcIK1t1AR3oQ.png?1647895301)

[](https://app.tango.us/app/workflow/3219af23-e023-4d83-8a49-c05eadbd7aa9?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=referral%20link%20tracking)

[](https://app.tango.us/app/workflow/3219af23-e023-4d83-8a49-c05eadbd7aa9?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=referral%20link%20tracking)