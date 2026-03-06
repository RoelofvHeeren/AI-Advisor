---
title: "Get Installer Details"
url: "https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details"
category: ""
---

# Get Installer Details

# Get Installer Details

GET 

## /marketplace/app/:appId/installations

Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   403

Successfully retrieved installer details. Returns company, location, user, and installation information.

Bad Request. Invalid request parameters or missing required data.

Forbidden. The client does not have necessary permissions to access installer details.