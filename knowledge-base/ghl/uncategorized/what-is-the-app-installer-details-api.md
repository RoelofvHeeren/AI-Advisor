---
title: "What is the App Installer Details API?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007068-what-is-the-app-installer-details-api-"
category: "Uncategorized"
---

# What is the App Installer Details API?

The App Installer Details API helps Marketplace developers identify who installed their app and the exact agency/sub‑account context—plus agency white‑label data for branding. Use it to personalize onboarding, align UI with agency branding, and engage the agency owner without requesting broad company‑level OAuth scopes. This improves retention, accelerates setup, and preserves white‑label integrity.

* * *

  

**TABLE OF CONTENTS**  
  

-   [What is the App Installer Details API?](#What-is-the-App-Installer-Details-API?)[](#Key-Benefits-of-App-Installer-Details)
-   [Key Benefits of App Installer Details](#Key-Benefits-of-App-Installer-Details)[](#Authentication-Options)
-   [Authentication Options](#Authentication-Options)[](#Endpoint-&-Request-Examples)
-   [Endpoint & Request Examples](#Endpoint-&-Request-Examples)[](#Response-Schema-\(Field-Reference\))
-   [Response Schema (Field Reference)](#Response-Schema-\(Field-Reference\))[](#White%E2%80%91Label-Data-Usage-Guidelines)
-   [White‑Label Data Usage Guidelines](#White%E2%80%91Label-Data-Usage-Guidelines)[](#Rate-Limiting-&-Caching)
-   [Rate Limiting & Caching](#Rate-Limiting-&-Caching)[](#Error-Handling)
-   [Error Handling](#Error-Handling)[](#Versioning-&-Availability)
-   [Versioning & Availability](#Versioning-&-Availability)[](#How-To-Setup-App-Installer-Details-in-Your-App)
-   [How To Setup App Installer Details in Your App](#How-To-Setup-App-Installer-Details-in-Your-App)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the App Installer Details API?**

  

The App Installer Details API returns verified information about the user who installed your Marketplace app and the exact context where the app is installed (sub-account and agency). It also surfaces agency profile and white‑label data so you can personalize onboarding, branding, and communications—without requesting broad company‑level OAuth scopes.

  

The App Installer Details API returns verified information about the user who installed your Marketplace app and the exact context where the app is installed (sub-account and agency). It also surfaces agency profile and white‑label data so you can personalize onboarding, branding, and communications—without requesting broad company‑level OAuth scopes. The endpoint is designed for Marketplace developers who need to: identify the installer, respect white‑label boundaries, and tailor their app experience for agencies and sub‑accounts.

* * *

## **Key Benefits of App Installer Details**  
  

Use these benefits as a checklist for what to automate after you fetch installer context.  
  

-   **Identity & Context:** Identifies the installer and where the app lives (sub‑account and agency)  
      
    
-   **White‑label Awareness:** Provides agency white‑label fields to align your app’s branding  
      
    
-   **Scope Reduction:** Removes the need for broad company‑level OAuth scopes to read agency details  
      
    
-   **Personalized Onboarding:** Enables agency‑specific welcome flows, content, and pricing  
      
    
-   **Owner Outreach:** Includes agency owner details to build direct relationships that increase retention  
      
    
-   **Privacy by Design:** Supports white‑label integrity so sub‑accounts aren’t exposed to upstream agency branding

* * *

## **Authentication Options**

  
Choosing the right token determines what context the API resolves. This section explains which token to use and how it affects the response so you remain least‑privilege and consistent with Marketplace policies.  
  

-   **Supported Tokens:** Agency Token or Sub‑account Token.  
      
    
-   **Behavior Guidance:**  
    -   Calling with an Agency Token resolves installer + agency context and can indicate the sub‑account where the install occurred (when applicable).  
          
        
    -   Calling with a Sub‑account Token resolves installer + the current sub‑account’s agency context.  
          
        
-   **Headers (Example):  
    **
    -   **Authorisation:** Bearer {YOUR\_TOKEN}  
          
        
    -   **Content-Type:** application/json  
          
        
-   **Least‑privilege Tip:** Prefer the token for the current runtime context (e.g., a sub‑account workflow should use a Sub‑account Token).  
      
      
    

**Note:** Exact permission requirements follow Marketplace norms. Use the minimal token that can read install context; do not request broad agency scopes solely to obtain branding.

  

* * *

## **Endpoint & Request Examples**  

Concrete examples reduce integration time. Replace placeholders below with your actual base URL and endpoint path once confirmed in the official API reference.  
  

-   **HTTP Method:** GET  
      
    
-   **Endpoint Path:** /marketplace/app-installer/details (placeholder—confirm the exact path in the official API docs [here](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api).)

  

cURL
curl -X GET \\ "{BASE\_URL}/marketplace/app-installer/details" \\ -H "Authorization: Bearer {AGENCY\_OR\_SUB\_ACCOUNT\_TOKEN}" \\ -H "Content-Type: application/json"

  

* * *

## **Response Schema (Field Reference)**  
  

A clear, field‑by‑field reference enables developers to map data into their systems with confidence. Treat nullable fields and optional white‑label attributes defensively.

  

Key fields (representative; confirm names/types in official docs)  
  

-   **installer.userId (string)** — Unique ID of the user who performed the install  
      
    
-   **installer.name (string)** — Human‑readable name  
      
    
-   **installer.email (string)** — Contact for collaboration and account linking  
      
    
-   **installationContext.subAccountId (string|null)** — Sub‑account where the app is installed  
      
    
-   **installationContext.agencyId (string)** — Parent agency ID  
      
    
-   **agency.companyName (string)** — Agency legal/brand name  
      
    
-   **agency.companyEmail (string)** — General contact email  
      
    
-   **agency.ownerName (string)** — Primary owner/admin name  
      
    
-   **whiteLabel.brandName (string)** — White‑label brand  
      
    
-   **whiteLabel.supportEmail (string|null)** — Support mailbox for branded communications  
      
    
-   **whiteLabel.supportUrl (string|null)** — URL for help center or ticketing  
      
    
-   **whiteLabel.primaryDomain (string|null)** — Branded app/domain  
      
    
-   **whiteLabel.logoUrl (string|null)** — Brand logo for UI theming  
      
    
-   **whiteLabel.faviconUrl (string|null)** — Favicon for browser branding  
    

* * *

## **White‑Label Data Usage Guidelines**

  
White‑label integrity is a core expectation in HighLevel implementations. Use agency branding thoughtfully to enhance UX without exposing upstream identity to end clients.  
  

-   Use whiteLabel.brandName, logoUrl, and primaryDomain to theme your app UI for agency users.  
      
    
-   Avoid leaking agency identity to sub‑account end clients unless explicitly intended.  
      
    
-   Prefer server‑side caching of branding fields with a short TTL (e.g., 15–60 minutes) to reduce API calls and handle updates.  
      
    
-   If branding changes, invalidate your cache when a new logoUrl or brandName is detected.

* * *

## **Rate Limiting & Caching**

  
Proactive handling of limits and caching keeps your app resilient. Use exponential backoff on transient errors and reduce duplicate calls with strategic caching.  
  

-   **Recommended Caching:** Cache installer + white‑label result per token/context; refresh on login/session start.  
      
    
-   **Backoff Strategy:** On 429/5xx, backoff with jitter and retry a limited number of times.  
      
    
-   **Client Hygiene:** Avoid calling this endpoint on every page; fetch once per session or when context changes.

* * *

## **Error Handling**

  

Anticipating error states improves developer velocity and user trust. Map API errors to actionable guidance in your UI.

  

  

| HTTP  
 | Likely Cause  
 | Example Error Body  
 | Recommended Action  
 |
| --- | --- | --- | --- |
| 401  
 | Missing/invalid token  
 | { "error": "unauthorized" }  
 | Refresh token; confirm header format  
 |
| 403  
 | Token lacks privileges for context  
 | { "error": "forbidden" }  
 | Use appropriate Agency/Sub‑account token  
 |
| 404  
 | App not installed for context  
 | { "error": "not\_found" }  
 | Prompt install or switch to valid account  
 |
| 429  
 | Rate limit exceeded  
 | { "error": "rate\_limited" }  
 | Apply backoff + caching  
 |
| 5xx  
 | Temporary service issue  
 | { "error": "server\_error" }  
 | Retry with exponential backoff |

  

* * *

## **Versioning & Availability**

  

Knowing the maturity and rollout status helps teams plan rollouts and avoid surprises during upgrades.  
  

-   **Status:** New Marketplace API endpoint.  
      
    
-   **Compatibility:** Intended for Marketplace apps calling with Agency or Sub‑account tokens.  
      
    
-   **Versioning:** Follow your organization’s API version headers or URL segment once published (e.g., Accept-Version, /v{n} path). Replace placeholders with the official values from the API reference.

* * *

## **How To Setup App Installer Details in Your App**

  
A simple, repeatable setup sequence ensures teams integrate the endpoint quickly and safely. Complete these steps in development before moving to production.

  

**Step 1: Confirm Tokens  
**  

-   Generate an Agency Token and a Sub‑account Token for testing.  
      
    
-   Store securely (vault or secrets manager); never commit to source control.  
      
    

**Step 2: Add the Request  
**  

-   Implement a GET call to {BASE\_URL}/marketplace/app-installer/details (placeholder path).  
      
    
-   Include Authorization: Bearer {TOKEN}.  
      
    

**Step 3: Map the Response  
**  

-   Persist installationContext and agency IDs; cache whiteLabel fields.  
      
    
-   Hydrate UI theme from whiteLabel and installer name for welcome copy.  
      
    
-   \[Add Screenshot: “Admin UI – preview of applied branding (logo + brand name)”\]  
      
    

**Step 4: Handle Errors + Retries  
**  

-   Implement 401/403/404/429 handlers and exponential backoff.  
      
    
-   Display actionable messages to internal users; avoid exposing raw JSON to end clients.  
      
    

**Step 5: Validate White‑Label Integrity  
**  

-   Confirm that agency branding is not exposed to unintended audiences in sub‑accounts.

  

**Step 6: Ship with Observability  
**  

-   Add metrics for call success rate, latency, and cache hit ratio.

* * *

## **Frequently Asked Questions**

  
**Q1. Which token should I use—Agency or Sub‑account?  
**Use the token that matches your current execution context. Agency tokens resolve agency + installer and can reference sub‑account installs; Sub‑account tokens resolve the current location’s agency context.

  
**Q2. Does this endpoint require company‑level OAuth scopes?  
**No. A key advantage is avoiding broad company‑level scopes just to read agency details.

  
**Q3. What white‑label fields are typically returned?  
**Brand name, support email/URL, branded domain, and optional assets such as logo and favicon. Treat fields as optional and cache with a short TTL.

  
**Q4. Can I cache the response?  
**Yes. Cache per token/context and refresh when sessions start or when you detect branding changes.

  
**Q5. What happens if the installer leaves the agency?  
**Expect stable agency/sub‑account context. The installer record may reflect the historical user; handle null/unknown gracefully.

  
**Q6. Is pagination involved?  
**No. This endpoint returns a single installer context payload for the current token.

  
**Q7. How should I handle rate limits?  
**Use exponential backoff with jitter on 429 responses and reduce call frequency via caching.

  
**Q8. Can I use this to message the agency owner directly?  
**Yes—owner details are returned for relationship‑building. Use thoughtfully and follow your privacy policy.

* * *

## **Related Articles**  
  

-   [HighLevel API](https://help.gohighlevel.com/en/support/solutions/articles/48001060529)  
      
    
-   [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/en/support/solutions/articles/155000000136) 
-   [Agency-Level Marketplace Apps Installation](https://help.gohighlevel.com/en/support/solutions/articles/155000001057)  
      
    
-   [Marketplace: App Uninstall API](https://help.gohighlevel.com/en/support/solutions/articles/155000006586)  
      
    
-   [Branding System-Generated Links (API Domain)](https://help.gohighlevel.com/en/support/solutions/articles/48001143244)  
      
    
-   [Private Integrations: Everything you need to know](https://help.gohighlevel.com/en/support/solutions/articles/155000003581)