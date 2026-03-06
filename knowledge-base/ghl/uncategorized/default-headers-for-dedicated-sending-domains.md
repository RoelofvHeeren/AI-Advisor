---
title: "Default Headers for Dedicated Sending Domains"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004428-default-headers-for-dedicated-sending-domains"
category: "Uncategorized"
---

# Default Headers for Dedicated Sending Domains

A “default header” provides a fallback From Name and From Email for outbound messages sent via a dedicated sending domain for all emails. This ensures deliverability and brand consistency.

* * *

**TABLE OF CONTENTS**

-   [When to Use Default Headers](#When-to-Use-Default-Headers)
-   [Prerequisites](#Prerequisites)
-   [Setting Default Headers (From Name & From Email)](#Setting-Default-Headers-\(From-Name-&-From-Email\))
-   [How Default Headers Work in Practice](#How-Default-Headers-Work-in-Practice)
-   [Best Practices & Considerations](#Best-Practices-&-Considerations)
-   [Common Troubleshooting Scenarios](#Common-Troubleshooting-Scenarios)

* * *

## **When to Use Default Headers**

-   **Fallback for DMARC Failures**: If a campaign’s “From” address does not align with your dedicated sending domain’s DKIM/SPF records, HighLevel will use default header so that the message is still authenticated.  
      
    
-   **Maintain Consistent Branding**: Even if a typo or misconfiguration causes a non-aligned “From,” recipients will see your brand’s domain in the From field rather than a rejected address.  
      
    
-   **Regulatory/Compliance Requirements**: Industries requiring strict email authentication (finance, healthcare, etc.) should configure default headers to avoid DMARC rejections or quarantines.
    

* * *

## **Prerequisites**

  

Before you can configure default headers, ensure that:

  

1.  **You’re in a Sub-Account**
    
    -   Only sub-accounts can add and manage dedicated sending domains and set default headers. Agency-level domains do not support per-sub-account default headers.  
          
        
2.  **Dedicated Sending Domain Is Added and Validated**
    
    -   You have completed DNS setup (CNAME, DKIM, and SPF) for your custom sending domain (e.g., `email.yourbrand.com`).  
          
        
    -   HighLevel displays a green checkmark indicating your domain is validated under **Settings → Email Service → SMTP Service → Dedicated Domain and IP**
        

* * *

## **Setting Default Headers (From Name & From Email)**

  

You can set up default "From address and Email" for dedicated domains under your account only for the Sub-account created domains.

  

Navigate to **Sub-account Settings - Email Service -> SMTP Service -> Dedicated Domain and IP -> Set headers under dedicated domain.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044882641/original/l67IXG1nmKTdfTeM8aYyho5Bi4sdRCZDsw.png?1744290467)**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044882742/original/u4kpWwg9k_Mdzc7Ts-PGYh3_0vTOcvXr5w.png?1744290526)

  

  

The designated header will be applied to emails sent through the dedicated domain when DMARC alignment fails.

  

## **How Default Headers Work in Practice**

1.  **Campaign Configuration**
    
    -   When creating a broadcast or workflow email, you can set a campaign-level “From Name” and “From Email.”
        
    -   If you intentionally use a different “From Email” (e.g., `sales@differentdomain.com`) that does not align with your dedicated domain (`email.yourbrand.com`), DMARC will fail.
        
2.  **DMARC Check & Fallback**
    
    -   At send time, HighLevel checks DMARC alignment between the campaign’s “From” address and the sending domain’s DKIM/SPF records.
        
    -   **If alignment passes**: The email goes out with the campaign’s chosen “From.”
        
    -   **If alignment fails**: HighLevel use the default header you configured under that dedicated domain.
        
3.  **Recipient Experience**
    
    -   Recipients see a valid “From Name” and “From Email” that matches your authenticated sending domain.
        
    -   The email remains DMARC-compliant and is less likely to be rejected or flagged as spam.
        

* * *

## **Best Practices & Considerations**

  

1.  **Configure Default Headers Before Sending:** Always set up your fallback header prior to launching major campaigns. If DNS or DMARC misconfiguration occurs, your default header will kick in automatically.  
      
    
2.  **Monitor Replies:** The default “From Email” can be any address at your sending domain, but ensure mailboxes or aliases are monitored (e.g., `support@yourbrand.com` forwarding to the correct team).  
      
    
3.  **Test Before Scaling:** Send a small internal test using a non-aligned “From” address to confirm HighLevel defaults properly. Check both inbox placement and DMARC status.  
      
    
4.  **Understand Propagation Delays:** Changing DNS (especially DKIM/SPF/TXT records) can take up to 48 hours to fully propagate. Without default headers, messages sent during propagation may be rejected.  
      
    
5.  **Segregate by Sub-Account:** If you manage multiple brands or departments, create separate sub-accounts—each with its own dedicated domain and default headers—for isolated control.
    

* * *

## **Common Troubleshooting Scenarios**

  

| Issue | Possible Cause | Resolution |
| --- | --- | --- |
| **“Set headers” option is not visible** | You’re in an agency-level view or the domain is not validated under a sub-account. | Switch to the correct sub-account. Add/validate a dedicated domain in Settings → Email Service → SMTP Service → Dedicated Domain and IP. |
| **Emails still failing to send after fallback** | DNS records (DKIM/SPF) are incomplete or incorrectly formatted. | Double-check DNS entries for your sending domain. Use online DKIM/SPF validators. Wait for propagation. |
| **Fallback header not applied when expected** | Campaign “From” address aligns with the sending domain (even if unintended). | Verify the campaign’s “From Email” is genuinely non-aligned (e.g., domain mismatch). Check DMARC reports to confirm failures. |
| **Recipients see the wrong “From Name” or “From Email”** | The campaign or workflow may hard-code a display name that overrides expectations. | Edit the campaign/workflow “From Name” and “From Email.” Ensure fallback is correctly spelled and free of stray spaces. |
| **SSL certificate not issued for the sending domain** | Missing or incorrect CNAME/DNS records for domain validation. | In Settings → Dedicated Domain, click “Edit DNS Info” and follow the instructions exactly. Wait for propagation before retrying. |