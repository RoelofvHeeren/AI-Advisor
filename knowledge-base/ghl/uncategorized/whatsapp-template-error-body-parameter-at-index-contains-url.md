---
title: "WhatsApp Template Error: “body: Parameter at index contains URL”"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-"
category: "Uncategorized"
---

# WhatsApp Template Error: “body: Parameter at index contains URL”

## **What this means**

Your message template was approved **without** a URL inside the body’s variable(s), but at send time you’re putting a **URL inside a body parameter** (e.g., `{{1}}`). For anti-phishing and quality reasons, **Meta does not allow full URLs inside body placeholders**. Links must be part of the template itself or placed in **buttons** (with optional dynamic suffixes).  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051772003/original/KEPgYVPEZhXjVxYEcMTTet1OnBTAXJDUHg.png?1755499219)

* * *

## **Why it happens**

-   You’re passing text like `https://example.com/deal/123` into a variable `{{1}}`.
    
-   The template’s body was approved as plain text (variables expected to be names, codes, dates—not links).
    
-   You used a URL shortener in a variable (many are blocked in parameters).
    
-   You need a **URL button** instead of a body variable.
    

* * *

## **How to fix it (choose one)**

### Option A — Make the link **static** in the body

Use a template where the **full URL** is written directly in the approved body (no variable).  
**Example body:**  
“Hi {{1}}, please review your offer: https://example.com/offers”

**When to use:** The link is the same for everyone.

* * *

### Option B — Use a **CTA Website Button** 

Create/modify the template to include a **Call-to-Action (CTA) Website button**:

-   **Button URL (base):** `https://example.com/order/`
    
-   **Button text:** “View Order”