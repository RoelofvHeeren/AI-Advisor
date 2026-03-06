---
title: "Collect Visitor Details Before Live Chat Starts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005415-collect-visitor-details-before-live-chat-starts"
category: "Uncategorized"
---

# Collect Visitor Details Before Live Chat Starts

This article explains how to collect contact information (like name, email, or phone number) from visitors before they can start chatting in your Live Chat widget. Capturing this information upfront improves contact data quality, reduces anonymous chats, and enables automation and follow-ups.

* * *

**TABLE OF CONTENTS**

-   [What is the Contact Form in Chat Widget?](#What-is-the-Contact-Form-in-Chat-Widget?)
-   [Key Benefits of Contact Form in Chat Widget](#Key-Benefits-of-Contact-Form-in-Chat-Widget)
-   [How to Enable or Disable the Contact Form](#How-to-Enable-or-Disable-the-Contact-Form)
-   [Customize Contact Form Messages](#Customize-Contact-Form-Messages)
    -   [Contact Form Intro Message (Auto Prompt)](#Contact-Form-Intro-Message-\(Auto-Prompt\))
    -   [Contact Form System Message (Agent-Triggered)](#Contact-Form-System-Message-\(Agent-Triggered\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is the Contact Form in Chat Widget?**

  

The Contact Form is a pre-chat prompt that appears inside the Live Chat widget. When the “Contact Form” option is enabled, visitors **must** submit the form to provide their **contact details** before the message box unlocks. This ensures you always know who you’re talking to and can follow up after the conversation ends.

* * *

## **Key Benefits of Contact Form in Chat Widget**

  

-   **Guaranteed Lead Capture**: Every conversation is associated with a contact record—no more anonymous chats.  
      
    
-   **Streamlined Follow-Up**: Contact details collected up front let your team (or automations) follow up without delay.  
      
    
-   **Smart Re-entry for Return Visitors**: Returning visitors with an active chat skip the form and resume instantly; if the prior chat was deleted or ended, the form re-appears.  
      
    
-   **Reliable Session Continuity**: Auto-reconnect preserves message history even after a refresh  
      
    
-   **Cleaner CRM Data**: Standardized intake reduces incomplete threads and improves reporting integrity.
    

* * *

## **How to Enable or Disable the Contact Form**

  

Setting up the Contact Form is quick and gives you full control over what information is collected before chat begins.

  

1.  Navigate to **Sites > Chat Widget** in your sub-account.  
      
    Select the Chat Widget you want to configure.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052322845/original/igS2WIw7f0gHGx7-zXEQV8Ha1St1krq_CA.gif?1756139281)  
      
    
2.  Go to the **Chat Window** tab and open the **Live Chat Assigned** drop-down.  
      
    Toggle ON the **Enable Contact Form** option.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052323082/original/CWICw4jTrOLySuLP4GUiDk28OEcniCYsyg.png?1756139368)  
      
    
3.  Click **Save** to publish the changes.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052364828/original/NOE6MAboLd1IjlMpdKWvSURLRUl6iC1_tg.png?1756199779)  
      
    

**Note:** To disable the form, simply toggle OFF the Enable Contact Form  
  
When contact form is disabled, chat widget will not ask for these details upfront, and directly start the chat

* * *

## **Customize Contact Form Messages**

  

You can customize the “Please share your contact details” prompt shown in the Chat Widget. There are two editable message fields, giving you full control over how and when contact details are requested. This customization applies only to Live and All-in-One (Live) Chats.

  

  

### **Contact Form Intro Message (Auto Prompt)**

  

When **Enable Contact Form** is **ON**, this message appears automatically just before the contact form. The default copy is “Please share your contact details.” If you leave the field blank, the widget skips the prompt and shows the form immediately.

  

To edit this message, go to the **Chat Window** tab. Update the copy in the **Contact Form Intro Message** field**.** 

  

**Note:** This field is only visible in the builder when the **Enable Contact Form** toggle is ON.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063194537/original/Sxv7wpge8cPd4bTY_DPmTePb55nrBn_kvA.png?1769021670)

  

  

### **Contact Form System Message (Agent-Triggered)**

  

When an agent clicks **Request Contact Details** in **Conversations**, this message displays. Agents can trigger it even if the Intro Message has already appeared.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063195294/original/m-R2DxtIkhj8mEqWNqHBAbneN5vhiflH5Q.png?1769022987)

  

  

To edit this message, go to the **Chat Window** tab and update the copy in the **Contact Form System Message** field**.**

  

The default copy is “Please share your contact details.” If you leave the field blank, the widget skips the prompt and opens the form directly.

  

**Note:** This field is visible in the builder regardless of the Enable Contact Form toggle being ON of OFF.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063195342/original/7pZ-nnXSrZJ05Ib1ONHH7uYRHbcvvvWbBg.png?1769023036)

  

**Note:** If Notification Sound is enabled for the widget, visitors may hear a sound when the contact details request message appears (when the contact form is displayed).

* * *

## **Frequently Asked Questions**

  

**Q: Which fields can I mark as required in the contact form?**  
Name is mandatory; Phone or Email is required to create a contact (at least one). You can also add supported custom contact fields within the five-field total. If you mark any custom contact fields as required in the widget builder, visitors must complete them before they can submit the form.

  

**Q: What exactly counts as an “active chat” for smart re-entry?**  
An active chat is a session that hasn’t been manually ended and hasn’t expired due to inactivity. If it’s still active, visitors resume without filling the form again.

  

**Q: What happens if a visitor refreshes the page during a chat?**  
The widget **auto-reconnects** and preserves the conversation; no messages are lost.

  

**Q: Does the contact form requirement apply to all widgets or just one?**  
It applies to the **specific widget** you configure. Be sure you’ve selected the correct widget before enabling the toggle.

  

**Q: How does this interact with Business Office Hours?**  
During off hours, the widget sends the contact details form. After submission, the chat is **automatically closed**.

  

**Q: Can I trigger workflows based on Contact Form submissions?**

Yes. You can use triggers like “Customer Replied to start automated follow-ups or task assignments.

  

**Q: Do I need to add a privacy policy link when collecting personal data?**  
It’s recommended. You can link your **Privacy Policy** from the chat window text/description for compliance transparency.

  

**Q: I have multiple chat widgets on my site. Will each follow its own form rules?**  
Yes. Each widget has its own configuration, so you can enforce the form on some widgets/pages and not others. 

* * *

## **Related Articles**

  

-   **[](https://help.gohighlevel.com/support/solutions/articles/155000004356-adding-custom-fields-in-the-chat-widget-contact-form)**[](https://help.gohighlevel.com/support/solutions/articles/155000004356-adding-custom-fields-in-the-chat-widget-contact-form)[Adding Custom Fields in the Chat Widget Contact Form](https://help.gohighlevel.com/support/solutions/articles/155000004356-adding-custom-fields-in-the-chat-widget-contact-form)  
    [](https://help.gohighlevel.com/support/solutions/articles/155000004356-adding-custom-fields-in-the-chat-widget-contact-form)  
    
-   [Getting Started with Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000004102-getting-started-with-chat-widget)  
      
    [](https://help.gohighlevel.com/support/solutions/articles/155000004102-getting-started-with-chat-widget)
    
-   [Overview of Chat Widget Customizations](https://help.gohighlevel.com/support/solutions/articles/155000002960-overview-of-chat-widget-customizations)  
      
    [](https://help.gohighlevel.com/support/solutions/articles/155000002960-overview-of-chat-widget-customizations)
    
-   [How to Install HighLevel’s Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)  
      
    
-   [Track Chat Widget Activity Using Google Analytics 4 (GA4)](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-)  
      
    
-   [How to Add Multiple Chat Widgets to the Same Website](https://help.gohighlevel.com/support/solutions/articles/155000003194-how-to-add-multiple-chat-widgets-to-the-same-website)[](https://help.gohighlevel.com/support/solutions/articles/155000003194-how-to-add-multiple-chat-widgets-to-the-same-website)**[](https://help.gohighlevel.com/support/solutions/articles/155000003194-how-to-add-multiple-chat-widgets-to-the-same-website)**