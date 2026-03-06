---
title: "API Center of Excellence | Python and PHP SDKs"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007096-api-center-of-excellence-python-and-php-sdks"
category: "Uncategorized"
---

# API Center of Excellence | Python and PHP SDKs

Ship integrations faster—no more hand-rolling OAuth flows. The new HighLevel PHP and Python SDKs drop into your stack, handle all token work automatically, and expose every public API with type-safe helpers.

* * *

**TABLE OF CONTENTS**

-   [What is the HighLevel PHP & Python SDK?](#What-is-the-HighLevel-PHP-&-Python-SDK?)
-   [Key Benefits of HighLevel SDKs](#Key-Benefits-of-HighLevel-SDKs)
-   [Supported OAuth 2.0 Workflows](#Supported-OAuth-2.0-Workflows)
-   [Database-Agnostic Token Storage](#Database-Agnostic-Token-Storage)
-   [SDK Auto-Generation](#SDK-Auto-Generation)
-   [Resources](#Resources)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is the HighLevel PHP & Python SDK?**

  

HighLevel’s officially supported gohighlevel/api-client (PHP) and gohighlevel-api-client (Python) libraries wrap the entire v2 Public API. Each SDK automates OAuth 2.0 token exchange, rotation, uninstall cleanup, and even marketplace bulk-installs—letting you focus on features instead of authentication plumbing.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060321917/original/SzpLl2OJXC64EvQusMdtByD1i29VBVnhrA.png?1765373604)

* * *

## **Key Benefits of HighLevel SDKs**

  

-   One-line OAuth 2.0: exchange, store, and refresh tokens behind the scenes.  
      
    
-   Database-agnostic session storage adapters (Memory, MongoDB, Redis, MySQL, etc.).  
      
    
-   Webhook helpers validate signatures and process INSTALL / UNINSTALL events automatically.  
      
    
-   Typed service methods for every public endpoint, cutting boilerplate and runtime errors.  
      
    
-   Auto-generated with each API release—your client stays current without manual updates.

* * *

## **Supported OAuth 2.0 Workflows**

  

A flexible token engine covers every installation path developers meet.

  

-   Sub-account installs via the Marketplace “Connect” button  
      
    
-   Bulk agency installs (all locations at once)  
      
    
-   Future auto-installs when new sub-accounts are created  
      
    
-   Daily silent refresh before expiry and graceful uninstall cleanup

* * *

## **Database-Agnostic Token Storage**

  

Pluggable storage adapters keep tokens safe wherever you already persist data. Swap in:

  

-   In-memory cache for local dev  
      
    
-   MongoDB, Redis, MySQL, PostgreSQL, or your own class implementing the storage interface 

* * *

## **SDK Auto-Generation**

  

Both clients rebuild automatically from the OpenAPI spec each time HighLevel releases new endpoints or fields, so you can update with a simple composer update or pip install --upgrade. 

  

The SDK aims to abstract the complexity of implementing OAuth 2.0 away from developers, fully managing tokens for them across all scenarios.

* * *

## **Resources**

  

**1.** [](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK)**[SDK OVERVIEW](https://marketplace.gohighlevel.com/docs/oauth/GettingStartedSDK)**  
  

**2\. PYTHON:**

-   [HighLevel Python SDK](https://marketplace.gohighlevel.com/docs/sdk/python)  
      
    
-   [Example Python Project](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/python)  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322014/original/TzejHIopDTa4ll3p1SIwLtmuAUmWKlRXrA.png?1765373668)  
      
    

**3\. PHP:**

-   [HighLevel PHP SDK](https://marketplace.gohighlevel.com/docs/sdk/php)  
      
    
-   [Example PHP Project](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/php)  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060322062/original/IBTCyeuVMOGPPUsh4Pww4In7tumD5F6jGg.png?1765373697)

* * *

## **Frequently Asked Questions**

  

**Q: Do I still need to refresh tokens manually?**

No. Once session storage is configured, the SDK refreshes tokens silently before they expire.

  

  

**Q: Can I store tokens in MySQL instead of MongoDB?**

Yes. Extend the provided storage base class with your own create/read/update logic.

  

  

**Q: Does the SDK support Private Integration Tokens (PIT)?**

Absolutely—pass privateIntegrationToken when you don’t need OAuth flows.

  

  

**Q: How do I validate webhook signatures?**

Use client.webhooks.subscribe() in Python or getWebhookManager()->verifySignature() in PHP.

  

  

**Q: Is the SDK compatible with HighLevel’s v1 endpoints?**

No. The SDK targets Public API v2 only.

  

  

**Q: Will updates break my code?**

New releases are semver-tagged; breaking changes trigger a major version bump so you can pin and upgrade deliberately.