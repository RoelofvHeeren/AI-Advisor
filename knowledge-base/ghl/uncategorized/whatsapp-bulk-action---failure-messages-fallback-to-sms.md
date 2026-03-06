---
title: "WhatsApp Bulk Action - Failure Messages Fallback to SMS"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005480-whatsapp-bulk-action-failure-messages-fallback-to-sms"
category: "Uncategorized"
---

# WhatsApp Bulk Action - Failure Messages Fallback to SMS

This article explains how to configure SMS fallback for bulk WhatsApp messages when delivery fails due to Meta’s marketing message restrictions in the US. This helps ensure your messages still reach customers despite platform-level rejections, keeping your campaigns running smoothly.

  

**TABLE OF CONTENTS**

-   [What is WhatsApp Bulk Message Fallback to SMS?](#What-is-WhatsApp-Bulk-Message-Fallback-to-SMS?)
-   [Key Benefits of WhatsApp Bulk Fallback](#Key-Benefits-of-WhatsApp-Bulk-Fallback)
-   [How To Configure SMS Fallback for WhatsApp Bulk Messages](#How-To-Configure-SMS-Fallback-for-WhatsApp-Bulk-Messages)
-   [Failure Conditions That Trigger Fallback](#Failure-Conditions-That-Trigger-Fallback)
-   [WhatsApp Template Rewriter (Optional Tool)](#WhatsApp-Template-Rewriter-\(Optional-Tool\))
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

  

* * *

# **What is WhatsApp Bulk Message Fallback to SMS?**

  

WhatsApp Bulk Message Fallback to SMS is a feature that automatically sends SMS messages if your bulk WhatsApp messages fail to deliver due to Meta-imposed restrictions (such as the US marketing message ban). This feature helps ensure that your outreach campaigns maintain their effectiveness, even when certain messages are blocked on WhatsApp.

  

Meta recently restricted marketing messages to US-based WhatsApp users, impacting businesses that rely on WhatsApp as a primary messaging channel. HighLevel’s fallback feature provides a seamless way to mitigate this restriction and deliver your messages via SMS instead.

  

## **Key Benefits of WhatsApp Bulk Fallback**

  

**Ensure your campaigns are resilient against delivery failures.** This feature helps maintain communication with your audience, especially in restricted regions like the US.

-   Prevent loss of outreach due to WhatsApp policy blocks
    
-   Automatically deliver messages via SMS when WhatsApp fails
    
-   Boost campaign reliability and open rates
    
-   No manual reconfiguration needed for each failed message
    
-   Applies to all bulk message actions across sub-accounts
    
-   Seamless transition handled at the backend
    

  

## **How To Configure SMS Fallback for WhatsApp Bulk Messages**

  

**Learn how to set up fallback logic for your bulk WhatsApp campaigns using HighLevel’s messaging system.** This ensures that your messages are still delivered even when Meta rejects them.

1.  Navigate to the **Bulk Messaging** area under the **Conversations** tab.
    
2.  Select **WhatsApp** as the primary channel for your message.
    
3.  Create or import your recipient list.
    
4.  In the **Fallback Settings** section, enable **Fallback to SMS**.
    
5.  Enter a fallback message that will be used in case of failure. This message should comply with SMS formatting and character limits.
    
6.  Review the fallback mapping to ensure it aligns with your intended campaign goals.
    
7.  Click **Send** to launch your campaign.
    

  

## **Failure Conditions That Trigger Fallback**

  

**Fallbacks only activate when specific delivery failure reasons are detected from Meta.** Understanding these conditions will help you interpret your message delivery analytics and campaign performance.

  

Fallback to SMS will be triggered when:

-   Meta explicitly returns a delivery failure (e.g., “Message not delivered due to policy”).
    
-   The recipient’s WhatsApp account is inactive or unreachable.
    
-   The WhatsApp template is rejected after submission due to marketing content violations.
    

  

Fallback is **not triggered** for:

-   Soft delivery failures (temporary network issues or retries).
    
-   Manual message cancellations.
    
-   Unreachable destinations where SMS is not supported.
    

  

## **WhatsApp Template Rewriter (Optional Tool)**

  

**Improve delivery success by converting marketing messages into utility messages.** The WhatsApp Template Rewriter helps you pre-optimize your messages to increase the likelihood of successful delivery, reducing reliance on fallback.

  

If you frequently send marketing content, use the **Template Rewriter** to adapt your templates to utility-compliant formats that Meta is more likely to approve.

  

* * *

# **Frequently Asked Questions**

  

**Q: Does fallback apply to individual messages too?**

No, fallback currently only applies to **bulk actions** (campaigns and mass messaging).

  

**Q: Will I be charged for both WhatsApp and SMS if fallback is triggered?**

Only the **successful message channel** (either WhatsApp or SMS) will be billed. If a WhatsApp message fails and SMS is sent instead, you are billed for the SMS.

  

**Q: Can I customize the SMS fallback message?**

Yes, during the setup process you can define a custom SMS message specific to the fallback case.

  

**Q: What happens if both WhatsApp and SMS fail?**

The system will report both failures in the message delivery log, and no further retries will be attempted.

  

**Q: Is fallback available globally?**

The fallback mechanism is primarily designed for **US-based WhatsApp failures** but can also apply in other countries if Meta reports a delivery failure.

  

**Q: Does fallback affect message sequencing or automation workflows?**

Fallback only affects message delivery for the specific bulk message action. It does not alter any automation sequences or follow-ups you may have configured separately.

  

**Q: Are there any limitations on fallback SMS content?**

Yes—SMS messages must comply with your carrier’s regulations, character limits, and opt-in/opt-out requirements.

  

**Q: How can I monitor fallback success rates?**

Use the **Message Delivery Reports** available in the Conversations or Reporting areas to track fallback triggers and SMS success rates.

###   

* * *

### **Next Steps**

-   Enable fallback in your bulk messaging campaigns to safeguard against WhatsApp delivery failures.
    
-   Use the **WhatsApp Template Rewriter** to improve your message approval rates on WhatsApp.
    
-   Monitor fallback performance via the message delivery reports.
    
-   Continue exploring **Bulk Messaging best practices** to optimize your outreach across multiple channels.