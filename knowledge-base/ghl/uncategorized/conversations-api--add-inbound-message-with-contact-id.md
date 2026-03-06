---
title: "Conversations API -Add Inbound Message (with Contact ID)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007340-conversations-api-add-inbound-message-with-contact-id-"
category: "Uncategorized"
---

# Conversations API -Add Inbound Message (with Contact ID)

The Add Inbound Message capability lets you post inbound messages to Conversations by supplying a Contact ID, without first resolving a Conversation ID. This reduces calls, simplifies logic, and ensures messages appear in the correct CRM thread with minimal overhead. Use this guide to understand the benefits, setup, payload structure, threading behavior, and best practices.

  

**IMPORTANT**: You can find the Complete REST API documentation for HighLevel CRM platform here. [HighLevel API Documentation - Send a new message](https://marketplace.gohighlevel.com/docs/ghl/conversations/send-a-new-message/index.html).

* * *

**TABLE OF CONTENTS**

-   [What is Add Inbound Message (Contact-Based)](#What-is-Add-Inbound-Message-\(Contact-Based\))
-   [Key Benefits of Add Inbound Message](#Key-Benefits-of-Add-Inbound-Message)
-   [Endpoint Overview & Payload (Conceptual)](#Endpoint-Overview-&-Payload-\(Conceptual\))
-   [Threading & Association Rules](#Threading-&-Association-Rules)
-   [Setup & Requirements](#Setup-&-Requirements)
-   [Channel Considerations & Attachments](#Channel-Considerations-&-Attachments)
-   [Idempotency, Retries & Rate Limits](#Idempotency,-Retries-&-Rate-Limits)
-   [Error Handling & Common Responses](#Error-Handling-&-Common-Responses)
-   [Testing & Verification](#Testing-&-Verification)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is Add Inbound Message (Contact-Based)**

  
Add Inbound Message accepts a **Contact ID** and posts a new **inbound** message into the appropriate conversation—either appending to an existing thread or creating a new one. This makes integrations faster and more reliable when ingesting messages from providers, webhooks, or imports where the contact is already known.

  

-   Provide Contact ID + channel + content; the system handles thread association.  
      
    
-   If a matching conversation exists, the message is appended; otherwise, one is created.  
      
    
-   Works across common channels (e.g., SMS/MMS, Email, WhatsApp, Messenger, Instagram, Web Chat).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064485147/original/wak6VQJHcXYmqMUzWxq_KbEj690GjHtGsQ.png?1770637957)

* * *

## **Key Benefits of Add Inbound Message**

  
These advantages map directly to fewer network round-trips, clearer developer flows, and a better agent experience in the CRM.

  

-   **Fewer API calls:** avoid conversation lookup/creation in common inbound flows  
      
    
-   **Simpler flow control:** reduce branching for “conversation exists vs not”  
      
    
-   **Cleaner CRM UX:** messages land in the right thread automatically  
      
    
-   **More resilient integrations:** fewer calls mean fewer transient failure points  
      
    
-   **Backward compatible:** existing “by Conversation ID” patterns continue to work
    

* * *

## **Endpoint Overview & Payload (Conceptual)**

  
The following shapes illustrate how to structure requests and consume responses. Field names are representative; align your implementation to the latest developer docs in your environment.

  

**HTTP**

`POST /conversations/inbound-messages Authorization: Bearer <token> Content-Type: application/json`

  

**Request (representative)**

`{   "contactId": "CONTACT_ID",   "channel": "sms | whatsapp | email | messenger | instagram | webchat",   "endpoint": {     "phone": "+15551234567",     "email": "user@example.com"   },   "content": {     "text": "Hello from our provider",     "attachments": [       {         "type": "image|file|video",         "url": "https://example.com/file.jpg",         "filename": "file.jpg",         "sizeBytes": 123456       }     ]   },   "metadata": {     "providerMessageId": "ext-abc-123",     "externalThreadKey": "optional-correlation",     "timestamp": "2026-02-04T10:15:30Z"   },   "idempotencyKey": "fd2d5f6f-5a9f-4b0a-8d68-0d5f6a1c9e5a" }`

  

**Response (representative)**

`{   "messageId": "MSG_123",   "conversationId": "CONV_987",   "contactId": "CONTACT_ID",   "channel": "sms",   "direction": "inbound",   "createdAt": "2026-02-04T10:15:31Z" }`

* * *

## **Threading & Association Rules**

  
Threading rules determine whether the system appends your message to an existing conversation or creates a new one. Understanding these rules prevents duplicate or fragmented threads.

  

-   **Existing thread (same channel):** If the contact has an **open** conversation on the **same channel**, the message is appended to that thread.  
      
    
-   **No suitable thread:** The system **creates** a new conversation and returns `conversationId` in the response.  
      
    
-   **Multiple endpoints per contact:** When a contact has multiple addresses for the same channel (e.g., two phone numbers or emails), include the **endpoint hint** (e.g., `endpoint.phone` or `endpoint.email`) to disambiguate.  
      
    
-   **Multi-location context:** Ensure your auth context or payload targets the correct **location/workspace** if the contact exists in multiple locations.  
      
    
-   **Archival/closed threads:** If only closed/archived threads exist, a **new** conversation is created.
    

* * *

## **Setup & Requirements**

  
Preparing credentials, scopes, and environment context ahead of time improves reliability and shortens integration time.

-   **Access & scopes:** Confirm API access and the required **Conversations/Contacts** scopes for your role.  
      
    
-   **Authentication:** Use OAuth or API key per your environment’s standards.  
      
    
-   **Contact resolution:** Have a reliable way to obtain/validate **Contact IDs** upstream (e.g., by phone/email match).  
      
    
-   **Location context:** Calls should resolve to the correct **location** that owns the contact and conversation data.
    

* * *

## **Channel Considerations & Attachments**

  
Each channel enforces unique rules. Validate payloads to avoid delivery failures or rejected uploads.

  

-   **SMS/MMS:** Observe character and media size/type limits; prefer media URLs reachable by the system.  
      
    
-   **WhatsApp:** Respect template/free-form constraints; ensure media types meet WhatsApp specs.  
      
    
-   **Email:** Provide proper MIME types; support for text/HTML bodies and attachments.  
      
    
-   **Messenger/Instagram:** API platform limits and rate caps may apply; validate media dimensions.  
      
    
-   **Web Chat:** Rich content support depends on widget capabilities; fall back to text if needed.
    

* * *

## **Idempotency, Retries & Rate Limits**

  
Network hiccups and provider timeouts are normal. Idempotency and disciplined retry logic prevent duplicate messages and improve user trust.

  

-   **Idempotency:** Always include an `idempotencyKey`. Retries with the same key should not create duplicates.  
      
    
-   **Retry policy:** Retry on `5xx`/timeouts with exponential backoff. Respect `429` responses and the `Retry-After` header when present.  
      
    
-   **Observability:** Log your request ID and `providerMessageId` to correlate with downstream systems.
    

* * *

## **Error Handling & Common Responses**

  
Standardising error handling reduces investigation time and avoids user-visible inconsistencies.

  

-   **400 Bad Request** — invalid contactId, missing channel, malformed content, unsupported attachment type/size  
      
    
-   **401/403** — auth failed or insufficient scope/role for the location  
      
    
-   **404 Not Found** — contactId not found or not visible in your location context  
      
    
-   **409 Conflict** — idempotency key collision or duplicate submission detected  
      
    
-   **413 Payload Too Large** — attachments exceed size limits  
      
    
-   **429 Too Many Requests** — rate limit exceeded; backoff and retry  
      
    
-   **5xx** — transient provider/system error; retry with the same idempotencyKey

* * *

## **Testing & Verification**

  
A repeatable test plan ensures messages thread correctly and appear in the CRM as expected before production rollout.

  

-   **Happy path:** Post an inbound with known `contactId` and confirm it appears in the correct conversation.  
      
    
-   **No thread case:** Post for a contact with no open conversation and verify a new `conversationId` is returned.  
      
    
-   **Endpoint ambiguity:** Test a contact with multiple numbers/emails; include endpoint hints and confirm correct threading.  
      
    
-   **Attachments:** Validate permitted media and confirm rendering in the CRM timeline.  
      
    
-   **Resilience:** Simulate timeouts and ensure your idempotent retries do not create duplicates.
    

* * *

## **Frequently Asked Questions**

  

**Q: Can I still post inbound using a Conversation ID?**  
Yes. Existing flows remain supported. Contact-based inbound is an additive shortcut.

  

  

**Q: What happens if I omit the channel?**  
The request is rejected. Provide `channel` and, when needed, a disambiguating `endpoint` field.

  

  

**Q: How is the conversation selected when multiple threads exist?**  
The system prefers an **open** thread on the **same channel**. If not found, it creates a new conversation.

  

  

**Q: How do I handle duplicates when retrying after a timeout?**  
Include an **`idempotencyKey`** with every request and reuse it on retries.

  

  

**Q: Can I backfill historical inbound messages?**  
Yes. Provide `metadata.timestamp` reflecting the original time, the message is ordered accordingly in the timeline.

  

  

**Q: How do I target the right location if a contact appears in more than one?**  
Use credentials or headers tied to the intended **location/workspace**. Calls should be scoped to the location that owns the contact.