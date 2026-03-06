---
title: "How To Integrate Shopify With HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/48001203620-how-to-integrate-shopify-with-highlevel"
category: "Uncategorized"
---

# How To Integrate Shopify With HighLevel

Integrating Shopify with HighLevel lets you automate marketing, sync customer data, and drive more sales. This guide shows you the integration process step by step.

* * *

Integrating Shopify with a HighLevel sub-account is a 2 step process:  
  

1\. Create a Custom App in your Shopify Store

2\. Connect Shopify to your Account

  

### Step-1: Create a Custom App in your Shopify Store

Before we setup integration we need to create a custom app in your Shopify store.

  

**1.1    Login to your Shopify store and click on "Apps" in your dashboard**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229210/original/rH-o_3qLAeuUQs7ktCeDSFiGCAwZJaq4QQ.png?1644221818)

  

  

  

**1.2 Then, click on "Develop apps" on the top of the screen highlighted in the below picture**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187228956/original/Pyqt6fMw5ktq5tQQeAt0CVOhvmfT7MTIUA.png?1644221795)

  

  

  

**1.3 Then, click on "Allow custom app development" (if you have already enabled this permission then Shopify** 

**will take you to Step-1.5)**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229198/original/p8vrOG1a27K50uudrq5oqHP-ekqSYaCNwA.png?1644221815)

  

  

  

**1.4 In the next screen, click on "Allow custom app development"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229192/original/jic-aV_3DKmiJOr0mL5pO_P2lB1fu4K3OA.png?1644221813)

  

  

  

**1.5 Then, click on "Create an app"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229194/original/Pv1_E-8_4Vbga0KoVa_7PF1oFQOQRJMj0Q.png?1644221815)

  

  

  

**1.6 Enter a name for the app (for example "Marvel's App"), select your email under App developer** 

**and click on "Create app"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229199/original/y7YPMVGF8DZQ6xkYvHik6Jck0QvGxDIz1g.png?1644221816)

  

  

  

**1.7 Then, click on "Configure Admin API scopes" to configure Admin API integration**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229195/original/UkKUPiP3fo-8Ffj1vABpVf-baRBv2hUvlw.png?1644221815)

  

  

  

**1.8 Search/scroll down to the "Orders" and You will need to enable at the very** 

**least "read\_orders" access**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229211/original/2GXcUiFIWEF1TZmsGGccec1xioo_UWpnrQ.jpeg?1644221817)

  

  

**1.9 Add the "read\_customers" scope. In configuration edit the "Admin API Integrations". In this section under**

**customers, select the "read\_customers" tick box.**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030067383/original/aVjGA-pp1P6TFeFQ_gs0ifQEOjVg0thLRA.png?1722266305)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030067467/original/ZgYyWI1Q70ztfYX5wZ052m6f9oHnEm_FHA.png?1722266327)

  

  

  

**1.10 Then, Search/scroll down to the "Products" and You will need to enable at the very** 

**least "read\_products" access**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229209/original/KOGPMRP7AVyQLqt86WYuHArUkNw-z6ZuZQ.png?1644221817)

  

  

  

**1.11 Once you've enabled read access on "Orders and Product", save the app by clicking on the** 

**"Save" button on the top right**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229208/original/bWtT7WuetqwvWbfp8IT5y0AKPTRVxmf97w.png?1644221817)

  

  

  

**1.12 After saving click on the "Install app" as in the image below**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229197/original/kTfMYPmtBBvuDLeK1c6k5Fl9gmd1toSOeg.png?1644221815)

  

  

  

**1.13 Then, click on "Install" from the pop up as in the image below**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229201/original/UayP0x4wZAwMUT5KVSUsY62lOfkDih3b1Q.png?1644221816)

and voilà your App is ready to be integrated now!

  

  

**1.14 After installing, the "Admin API access token" that you need for the Shopify integration can** 

**be found under the API credentials section, click on "Reveal token once" to get access to the token**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229204/original/AN7cbMtIt-wIZ7A5T4fQh9yt3j5_VUfB2A.png?1644221816)

  

  

  

**1.14 Copy the "Admin API access token" by clicking on the clipboard icon**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229200/original/iu6Bvf4sq-9cIc_Uu5SWn3cN35f0vFITsA.png?1644221816)

  

  

### Step-2: Connect Shopify to your Account

  

**2.1 In your Account go to** **Settings > Integrations** **and click on "Connect" under Shopify**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229207/original/qP0WcWS2pboiwsFOqwX6NW7Zt-rFLMIFYw.png?1644221817)

  

  

  

**2.2 Paste the "Admin API access token" you copied in Step-1.14, enter "Name of your Shopify store" and click "Connect"**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229202/original/ppeTu-iMn0QdMja4G6PvqLafNSeMn8pEvw.png?1644221816)

  

  

  

**2.3 Your Shopify integration is done! ?**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229205/original/qIfabMfkeYYRSWXoeiANWyRXB_s_SAlQWw.png?1644221817)

* * *

## **Related Articles**

  

-   [](https://help.gohighlevel.com/en/support/solutions/articles/48001203897)[Automatic abandoned cart checkout emails for online store](https://help.gohighlevel.com/en/support/solutions/articles/155000001718)  
      
    
-   [Shopify Elements in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48001203897)  
      
    [](https://help.gohighlevel.com/en/support/solutions/articles/48001203898)
-   [How To Use Shopify Variables](https://help.gohighlevel.com/en/support/solutions/articles/48001203898)  
      
    
-   [Shopify to HighLevel (Migration Guide)](https://help.gohighlevel.com/en/support/solutions/articles/155000004302)