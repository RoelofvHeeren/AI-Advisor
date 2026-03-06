---
title: "Manychat to HighLevel Integration"
url: "https://help.gohighlevel.com/support/solutions/articles/48001158874-manychat-to-highlevel-integration"
category: "Uncategorized"
---

# Manychat to HighLevel Integration

  

**The steps in this article are for Advanced Integration and for informational purposes only.   
  
While **our support team does not currently service or support either our API or ManyChat Integration** due to their complexities, we have many tools and groups to help you get started and connected! For assistance with **APIs only**, you can join our Developer Council Slack Community here: [](https://www.gohighlevel.com/dev-slack)[developers.gohighlevel.com](//developers.gohighlevel.com)  
  
We also hold a Developer Council Zoom Call once a month (second to last Friday) which you can find on the Events calendar here: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)  
  
**For more information and links to our API documentation, visit our developer's website:** **[https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)****

  

**Please Note:**

**The API URL endpoints:** **\- Create Contact**: [https://api.gohighlevel.com/zapier/contact/add\_update](https://api.gohighlevel.com/zapier/contact/add_update)  
**\- Add/Update Opportunity:** [https://api.gohighlevel.com/zapier/contact/add\_update](https://api.gohighlevel.com/zapier/contact/add_update)\_opportunity

  

### **Data Fields**

{  
“email”: “[john@deo.com](mailto:john@deo.com)”,  
“phone”: “[+18887324197](tel:+18887324197)”,  
“firstName”: “John”,  
“lastName”: “Deo”,  
“tags”: \[  
“commodo sed aliquip”,  
“ut exercitation sunt”  
\]  
}

  

  

# **Troubleshooting**

#### **Q1) I'm seeing duplicate contacts coming in from Manychat ? How do I sync HighLevel with Manychat**

To avoid Manychat duplicate contacts in HighLevel, please watch the video below

**Using External Request to update contact instead of duplicating contact**

 [https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d](https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d)

  

**Headers:**  

AUTHORIZATION = Bearer APIKEY

Content-Type = application/json

  

**body:**

{  
"first\_name": {{first\_name|fallback:""|to\_json:true}},  
"last\_name": {{last\_name|fallback:""|to\_json:true}},  
"email": {{email|fallback:""|to\_json:true}},  
"phone": {{phone|fallback:""|to\_json:true}}  
}

  

  

###   

  

  

;[3:39](https://gohighlevel.slack.com/archives/D01M8JWS3UZ/p1619735977002200)