---
title: "Managing Default Unsubscribe Links in LC Email"
url: "https://help.gohighlevel.com/support/solutions/articles/48001225534-managing-default-unsubscribe-links-in-lc-email"
category: "Uncategorized"
---

# Managing Default Unsubscribe Links in LC Email

This article will show you how to manage the default unsubscribe links in LC Email to stay compliant with email regulations and ensure a better experience for your contacts. You'll learn how to use **HighLevel's default unsubscribe link** settings and how to place the default link manually using a tag.

  

**IMPORTANT**: This article focuses specifically on **default unsubscribe links** in LC Email. If you'd like to create a **custom unsubscribe experience or link**, please refer to: [Creating and Managing Custom Unsubscribe Links](https://help.gohighlevel.com/support/solutions/articles/155000004799-creating-and-managing-custom-unsubscribe-links)

* * *

**TABLE OF CONTENTS**

-   [What is an Unsubscribe Link?](#What-is-an-Unsubscribe-Link?)
-   [Why Include an Unsubscribe Link (Legal Compliance)](#Why-Include-an-Unsubscribe-Link-\(Legal-Compliance\))
-   [How to Enable/ Disable the Default Unsubscribe Link](#How-to-Enable/-Disable-the-Default-Unsubscribe-Link)
-   [How to Manually Add the Unsubscribe Link](#How-to-Manually-Add-the-Unsubscribe-Link)
-   [What Happens If You Use Both Default and Manual Unsubscribe Links?](#What-Happens-If-You-Use-Both-Default-and-Manual-Unsubscribe-Links?)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **What is an Unsubscribe Link?**

  

An unsubscribe link allows your contacts to opt out of receiving future emails from your business. This is a legal requirement under email compliance laws like the CAN-SPAM Act and GDPR. HighLevel's LC Email system helps you meet these regulations by automatically including an unsubscribe link in your email footers unless you choose to disable it.

* * *

## **Why Include an Unsubscribe Link (Legal Compliance)**

  

Beyond best practices, unsubscribe links are a legal requirement under multiple international regulations. Failing to include them can lead to serious financial penalties.

  

Digital laws vary globally, but most countries mandate that marketing emails must include an opt-out (unsubscribe) option.

-   In the U.S., the **CAN-SPAM Act** (Controlling the Assault of Non-Solicited Pornography And Marketing), enforced by the **Federal Trade Commission (FTC)**, requires all commercial emails to include a clear way for recipients to unsubscribe.  
      
    
-   In the European Union, the **General Data Protection Regulation (GDPR)** became mandatory in **May 2018**. According to **Article 17**, also known as the **Right to Erasure**, subscribers (data subjects) can request that their personal data be deleted.
    

  

**IMPORTANT**: If a contact unsubscribes from an email list, they are exercising their right to erasure. As the data controller (the email sender), you are legally required to honor that request and stop processing or retaining their data.

  

Non-compliance with GDPR can lead to a fine of €20 million or 4% of your company’s annual global turnover, whichever is higher. **Adding an unsubscribe link ensures that you:**

  

-   Respect user consent  
      
    
-   Stay compliant with local and international laws  
      
    
-   Protect your business from costly legal repercussions  
      
    
-   Builds trust by giving recipients control over communications  
      
    
-   Helps maintain a clean, engaged contact list  
      
    
-   Prevents account suspension due to non-compliant practices

* * *

## **How to Enable/Disable the Default Unsubscribe Link**

HighLevel includes an unsubscribe link in all emails by default, but you can turn it off if you prefer to manually add your own link. To enable or disable the default link:

### **Step 1:** Navigate to Subaccount Settings → Business Profile.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044100029/original/jPgWkvjShX9JZwTacRfVwdZi-Fl8mwG30Q.png?1743083285)**

### **Step 2:** Scroll down to the  General Tab.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044100189/original/CfTkTKvr4DtFzTfisOmVp9OTuVUC_bhSqw.png?1743083377)**

### **Step 3:** Customize the Unsubscribe Link

**You can personalize the unsubscribe experience by customizing the text or destination of the unsubscribe link. Toggle “Include Unsubscribe Link” ON.** Please note that the content of this message will automatically be added to all emails.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044100498/original/_RCWSNzTAdH2audMXJAVTC7oNhavLjklWQ.gif?1743083598)**

**IMPORTANT:** If you turn off the default unsubscribe link, you must manually include the unsubscribe tag `{{unsubscribe}}` in each email to remain compliant.

**

* * *

## **How to Manually Add the Unsubscribe Link**

  

You can manually insert an unsubscribe link using a built-in tag if you prefer full control over placement or format.

  


**

Open the LC Email Builder (either in conversations or campaign or email template under Marketing Tab).  Place your cursor where you want the link to appear and type or paste: **{{unsubscribe}}**. OR you can also use our default custom value called **UNSUBSCRIBE LINK under EMAIL.** 

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044102505/original/4ten5iXcnoVcQ3IAmA-JQWkblQdKsg-H0g.gif?1743084767)**

  

  

**Please Note:** When the email is sent, the {{unsubscribe}} tag will be automatically converted into a clickable link that lets the contact opt out.

* * *

## **What Happens If You Use Both Default and Manual Unsubscribe Links?**

Including more than one unsubscribe link in an email may confuse recipients and impact your branding. This section explains how HighLevel handles multiple unsubscribe links and best practices to avoid duplicate opt-out options.

  

**HighLevel provides two ways to include an unsubscribe link in your emails:**

  

-   The default unsubscribe link which is automatically added to the footer when enabled in your Business Profile settings.  
      
    
-   The manual unsubscribe tag ({{unsubscribe}}), which you can insert directly into your email templates wherever you'd like the link to appear.  
      
    

**What Happens If You Use Both?**  
  

If both are enabled in the same email:

  

-   Two unsubscribe links will appear—one from the manual tag and one automatically in the footer.  
      
    
-   This can lead to a cluttered email design, which may reduce click-through or conversion rates.  
      
    
-   It may also confuse contacts, making them unsure which link to click, especially if one looks different from the other or goes to a different destination.  
      
    

**Best Practice**  
  

To maintain a clean, professional appearance and avoid confusion use only one method per email.

  

-   If you want precise control over placement and appearance, insert the {{unsubscribe}} tag manually and disable the default footer link.  
      
    
-   If you're okay with the link appearing in the footer, you can rely on the default setting and skip the manual tag.

* * *

## **Frequently Asked Questions**

**Q: Is an unsubscribe link required in every email?  
**Yes. It is legally required. Either the default footer or the {{unsubscribe}} tag must be present in all LC Email messages.

**Q: Can I change what the unsubscribe link says?  
**You can’t edit the default label from the {{unsubscribe}} tag, but you can customize the message around it or build a branded unsubscribe page.

**Q: What if I remove the default and forget to add a manual tag?  
**Your email will send without an unsubscribe link, which is a violation of email compliance policies. This can result in the suspension of your sending ability.

**Q: Can I track who unsubscribed?  
**Yes. You can view unsubscribed contacts in your contact list by filtering for the "Unsubscribed" status.

* * *

## **Related Articles**

-   **[](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)**[](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)[What is LC Email?](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)  
      
    
-   [Creating and Managing Custom Unsubscribe Links](https://help.gohighlevel.com/support/solutions/articles/155000004799-creating-and-managing-custom-unsubscribe-links)  
      
    
-   [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)[](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)**[](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)**