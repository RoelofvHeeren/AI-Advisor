---
title: "Automated Webhook Retries"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007071-automated-webhook-retries"
category: "Uncategorized"
---

# Automated Webhook Retries

Automated Webhook Retries for HighLevel Marketplace apps guarantee that critical events reach your servers—even when you hit temporary rate limits—by retrying only HTTP 429 responses and adding randomized jitter. This guide shows Marketplace developers how the new system works and how to prepare your endpoints for flawless delivery. 

This is the [Webhook Integration Guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/index.html).

* * *

**TABLE OF CONTENTS**

-   [What is Marketplace Automated Webhook Retries?](#What-is-Marketplace-Automated-Webhook-Retries?)
-   [Key Benefits of Marketplace Automated Webhook Retries](#Key-Benefits-of-Marketplace-Automated-Webhook-Retries)
-   [Retry Schedule](#Retry-Schedule)
-   [Retry Conditions](#Retry-Conditions)
-   [Jitter Protection](#Jitter-Protection)
-   [How to use it as a Developer?](#How-to-use-it-as-a-Developer?)
-   [Recommended HTTP Response Codes](#Recommended-HTTP-Response-Codes)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is Marketplace Automated Webhook Retries?**

  

HighLevel’s Marketplace now includes a built-in, intelligent retry mechanism for outbound webhooks. When your app’s endpoint responds with HTTP 429 (Too Many Requests), HighLevel will automatically re-send the same payload up to six times on a spaced-out schedule with randomized jitter. All other status codes (2xx success, 4xx/5xx errors) are treated as final, giving you predictable delivery behavior and preventing server overload.

  

-   **Retries only on HTTP 429s**: We now retry webhook deliveries only when your endpoint returns a 429 (rate limit) response.  
      
    
-   **Jitter protection**: Randomized retry timing prevents the “thundering herd” problem and spreads load evenly across servers.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059526523/original/D2rEyUeb2mzM7rJM8gksL_2qN-t-bce3XA.png?1764451665)

* * *

## **Key Benefits of Marketplace Automated Webhook Retries**

  

-   **Reliability** – transient rate-limit spikes no longer cause lost events.  
      
    
-   **Predictability** – a fixed 10-minute interval (plus jitter) and six-attempt cap lets you model worst-case latency (~1 hr 10 min).  
      
    
-   **Server Protection** – jitter prevents a “thundering herd” of simultaneous retries, spreading load evenly across your infrastructure.  
      
    
-   **Developer Control** – by returning any status other than 429 you can immediately stop further retries. 

* * *

## **Retry Schedule**

  

Every retry happens 10 minutes after the previous attempt, but each interval is randomized by a small, pseudo-random offset (jitter) to avoid synchronized traffic bursts. The system stops after six retries or any non-429 response, whichever comes first. Total possible retry window: approximately 1 hour 10 minutes.

  

-   **Interval**: 10 minutes between retries (with jitter)  
      
    
-   **Max attempts**: 6 retries  
      
    
-   **Total retry duration**: ~1 hour 10 minutes

* * *

## **Retry Conditions**

  

The retry logic is intentionally narrow so developers always know what to expect.

  

-   **Retried Status Code**: 429 only.  
      
    
-   **Stop Conditions**: any other status (200, 202, 204, 4xx, 5xx, etc.).  
      
    
-   No Retries on 5xx: server-side failures are treated as permanent to avoid hammering a downed endpoint.  
      
    
-   We do not retry on 5xx server errors – those are treated as permanent failures.

* * *

## **Jitter Protection**

  

Randomized jitter (± N seconds) is applied to each 10-minute interval. This tiny variation ensures that if multiple events were throttled at once, their retries won’t all fire in the same instant—dramatically reducing the risk of cascading rate-limit hits across your fleet. 

* * *

## **How to use it as a Developer?**

  

Here’s how you can make the most of this system:

  

✅ Return 200 OK for successful deliveries.  
  

✅ Even if processing fails internally, still return 200 OK to acknowledge receipt:  
  

❌ Only use error codes when absolutely necessary:

  

-   408 → Server too slow  
      
    
-   429 → Too many requests  
      
    
-   5xx → Server is down/broken (no retries will be attempted)

* * *

## **Recommended HTTP Response Codes**

  

Understanding when to acknowledge or throttle requests is critical:

  

-   **200 OK** – Always send for successful processing. If your downstream job queues the work asynchronously, still return 200 so HighLevel knows the event was received.  
      
    
-   **429 Too Many Requests** – Return only when you genuinely need HighLevel to slow down; triggers the retry flow outlined above.  
      
    
-   **408 Request Timeout** – Optional signal that your server could not process the call in time.  
      
    
-   **5xx Server Errors** – Indicate a hard failure on your side; no further retries will be made.  

* * *

## **Frequently Asked Questions**

  

**Q: Will HighLevel deduplicate events across retries?**

Yes. Each webhook attempt uses the same deliveryId header so you can safely ignore duplicates.

  

  

**Q: Can I customise the retry interval or number of attempts?**

Not at this time. The 10-minute / 6-attempt schedule is global.

  

  

**Q: Do retries respect my API’s existing rate limits?**

Yes—jitter plus the 10-minute delay minimizes bursts, but you should still budget for up to six additional calls per event.

  

  

**Q: What happens if my endpoint returns 404 or 400?**

HighLevel treats non-429 responses as final; no further retries occur.

  

  

**Q: How do I test this in a staging environment?**

Return a mock 429 response from your staging endpoint and confirm HighLevel re-sends the payload six times over ~70 minutes.

  

  

**Q: Does this affect Workflow “Inbound Webhook” triggers?**

No. Automated retries apply only to Marketplace app webhooks sent from HighLevel to your external server.

  

  

**Q: Where can I see historical delivery logs?**

The Webhook Dashboard (coming soon) will expose per-attempt logs; until then, rely on your own server logs.

  

  

**Q: Is there a size limit for payloads?**

Yes—Marketplace webhooks are capped at 256 KB. Larger payloads are truncated with a payloadTooLarge flag.

  

  

**Q: How do I opt-out?**

Retry logic is built-in and cannot be disabled per app. Design your endpoint to handle idempotency.

  

  

**Q: Will HighLevel ever retry 5xx errors?**

No—5xx responses represent an internal server error; HighLevel stops immediately so you can investigate without extra load.