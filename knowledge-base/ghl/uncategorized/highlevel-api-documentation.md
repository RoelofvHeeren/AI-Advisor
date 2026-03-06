---
title: "HighLevel API Documentation"
url: "https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api-documentation"
category: "Uncategorized"
---

# HighLevel API Documentation

HighLevel provides a comprehensive API platform that enables developers to build **integrations, automations, and custom applications** with the HighLevel CRM and Marketplace. Our API includes REST endpoints for contacts, messaging, workflows, calendars, payments, webhooks, and more.

  

**IMPORTANT:** V1 APIs has reached end-of-support. 

Existing connections/integrations will continue to work, however no support will be provided for V1 APIs. 

Want to migrate from V1 to V2? (with a ton of new functionalities and security features)
[](https://help.gohighlevel.com/a/solutions/articles/155000003054?portalId=48000045315)Check out - [Private Integrations](https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know)

  

**Please Note:** Going forward, the ability to generate new API keys will be removed from both Agency and Sub-account settings.This change applies to accounts that have not yet generated or are not currently using a API key.

* * *

**TABLE OF CONTENTS**

-   [High-Level API Documentation](#High-Level-API-Documentation)
-   [How to Get Help or Support for the HighLevel API](#How-to-Get-Help-or-Support-for-the-HighLevel-API)
-   [How to Submit a New API-Related Idea to HighLevel](#How-to-Submit-a-New-API-Related-Idea-to-HighLevel)
-   [Differences Between API Access Across Plan Levels](#Differences-Between-API-Access-Across-Plan-Levels)
-   [What are the Rate Limits for API 1.0 & API 2.0?](#What-are-the-Rate-Limits-for-API-1.0-&-API-2.0?)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Help & Support](#Help-&-Support)

* * *

## **High-Level API Documentation**

  

HighLevel API documentation is now available at **[https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/).** If you previously used the legacy Stoplight documentation, update your bookmarks. Stoplight documentation will be deprecated in the coming months.

[](https://marketplace.gohighlevel.com/docs/)

* * *

## **How to Get Help or Support for the HighLevel API**

**IMPORTANT:** At this time, HighLevel Support does NOT provide setup code auditing or developer consultative services on API-Related topics. However, if your setup is complete and correct - yet an error persists, you may have encountered an API Bug we need to fix.   
  
You can report this bug by filling out this form: **[](https://speakwith.us/dev-ticket)[https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)**

For any questions relating to the HighLevel API, join the developer Slack group to ask our community of talented customers here: [](https://join.slack.com/t/ghl-developer-council/shared_invite/zt-puqvvhdu-lpgk5YaijZfe9XT_b1LEpg)[](https://www.gohighlevel.com/dev-slack)[https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)[](https://developers.gohighlevel.com/join-dev-community)**[](https://developers.gohighlevel.com/join-dev-community)**

**HighLevel Devs host a monthly Developer Council Call on the second to last Friday, which you can find on the events calendar here: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)**

  

Check out our [Developers Landing Page](https://developers.gohighlevel.com/), where you can find the Developer Marketplace, Documentation, Slack Channel, and more! -->  [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)[](https://developers.gohighlevel.com/)[](https://developers.gohighlevel.com/)**[](https://developers.gohighlevel.com/)**[](https://developers.gohighlevel.com/)****

* * *

## **How to Submit a New API-Related Idea to HighLevel**

  

**Please Note**: Our API Docs list all available endpoints that are publicly available. If you don’t see an endpoint on either of the API developer sites listed below, we recommend visiting our [GitHub Issues page](https://github.com/GoHighLevel/highlevel-api-docs) to submit your request.

* * *

## **Differences Between API Access Across Plan Levels**

Basic API access is included with our Starter and Unlimited plans, while Advanced API access is available on our Agency Pro plan. 

  

In addition to the future endpoints that will be released in our OAuth 2.0 API (which is only available in our Advanced API access), this tier unlocks the use of Agency API Keys, where lower plan levels only access Location API Keys. 

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48227025193/original/qVjiLkUumrEo5aDB8Cjz8gbaVT_Y2E8mFg.jpg?1652973498)**

* * *

## **What are the Rate Limits for API 1.0 & API 2.0?**

  

GHL has implemented rate limits on our public V2 APIs using OAuth to ensure optimal performance and stability. These limits have been adjusted to:

  

**Burst limit**: A maximum of 100 API requests per 10 seconds for each Marketplace app (i.e., client) per resource (i.e., Location or Company).

  

**Daily limit**: 200,000 API requests per day for each Marketplace app (i.e., client) per resource (i.e., Location or Company).

  

These new limits contribute to better overall performance and stability of our system.

  

  

To monitor your limited usage, refer to the following API response headers:

  

-   **'X-RateLimit-Limit-Daily':** Your daily limit  
      
    
-   **'X-RateLimit-Daily-Remaining':** The remaining number of requests for the day  
      
    
-   **'X-RateLimit-Interval-Milliseconds'**: The time interval for burst requests  
      
    
-   **'X-RateLimit-Max':** The maximum request limit in the specified time interval  
      
    
-   **'X-RateLimit-Remaining':** The remaining number of requests in the current time interval.

* * *

## **Frequently Asked Questions**

  

**Q. What is the HighLevel API used for?**

The HighLevel API allows developers to build custom integrations, automate workflows, and connect external applications with the HighLevel platform. It provides REST endpoints for contacts, conversations, calendars, workflows, payments, and more.

###   

**Q. Does HighLevel still support API V1?**

No. HighLevel API V1 has reached end-of-support. While existing integrations may continue to function, no updates or technical support are provided. Developers should migrate to API V2 for ongoing support and new features.

  

  

**Q. What authentication methods does the HighLevel API support?**

HighLevel supports:

  

-   Private Integration Tokens for internal or single-location integrations  
      
    
-   OAuth 2.0 for public integrations and Marketplace apps requiring user authorization

  

  

**Q. When should I use OAuth 2.0 instead of a Private Integration Token?**

Use OAuth 2.0 when:

  

-   Building a public or Marketplace app  
      
    
-   Accessing multiple locations or accounts  
      
    
-   Requiring secure, user-approved access  
      
    

Private Integration Tokens are best for internal tools or single-account use cases.

  

  

**Q. What are the API rate limits in HighLevel?**

HighLevel enforces:

  

-   100 requests per 10 seconds (per resource)  
      
    
-   200,000 requests per day (per resource)  
      
    

Rate limit headers are included in API responses to help track usage.

###   

**Q. Can HighLevel Support help me build or debug my API integration?**

No. HighLevel Support does not provide hands-on API development or debugging assistance. For help, developers should:

-   Review the official API documentation  
      
    
-   Join the HighLevel Developer Community  
      
    
-   Report bugs via the Developer Support portal

  

  

**Q. Where can I find the official HighLevel API documentation?**

The official API documentation is available on the HighLevel Developer Marketplace: [https://marketplace.gohighlevel.com/docs/](https://marketplace.gohighlevel.com/docs/?utm_source=chatgpt.com)

  

  

**Q. Is API access available on all HighLevel plans?**

API access varies by plan:  
  

-   Starter & Unlimited: Basic API access  
      
    
-   Agency Pro: Advanced API access, including OAuth and agency-level tokens  
      
    

Some endpoints may only be available on higher plans.

  

  

**Q. How do I request a new API feature or endpoint?**

You can submit API feature requests or report documentation issues by creating an issue in the official GitHub repository for HighLevel API docs.

  

  

  

**Q. Does HighLevel provide SDKs or webhooks?**

Yes. HighLevel offers webhooks for real-time event updates, and SDKs are available or supported for certain integrations. Refer to the API documentation for supported webhook events and SDK details.

* * *

## **Help & Support**

  

HighLevel Support does not provide hands-on API coding help or setup auditing. If you encounter issues:

  

**1\. For API Bugs**

Report a bug directly here: [https://developers.gohighlevel.com/support](https://developers.gohighlevel.com/support)

  

**2\. Developer Community**

Join the HighLevel Dev Slack to collaborate with other developers: [https://developers.gohighlevel.com/join-dev-community](https://developers.gohighlevel.com/join-dev-community)