---
title: "Get rebilling config for an app subscription and usage plans"
url: "https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app"
category: ""
---

# Get rebilling config for an app subscription and usage plans

# Get rebilling config for an app subscription and usage plans

GET 

## /marketplace/app/:appId/rebilling-config/location/:locationId

Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   403

Successfully retrieved rebilling config for the app

Bad Request. Invalid request parameters or missing required data.

Forbidden. The client does not have necessary permissions to access installer details.