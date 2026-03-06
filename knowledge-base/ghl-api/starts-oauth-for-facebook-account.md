---
title: "Starts OAuth For Facebook Account"
url: "https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-facebook-oauth"
category: ""
---

# Starts OAuth For Facebook Account

# Starts OAuth For Facebook Account

GET 

## /social-media-posting/oauth/facebook/start

Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.

### Sample code to listen to event data:[​](#sample-code-to-listen-to-event-data "Direct link to Sample code to listen to event data:")

window.addEventListener('message', function(e) { if (e.data && e.data.page === 'social\_media\_posting') { const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data } }, false)

### Event Data Response:[​](#event-data-response "Direct link to Event Data Response:")

{ actionType: string, Ex: "close" page: string, Ex: "social-media-posting" platform: string, Ex: "facebook" placement: string, Ex: "placement" accountId: string, Ex: "658a9b6833b91e0ecb8f3958" reconnectAccounts: string\[\]\] Ex: \["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"\] }

### The accountId retrieved from above data can be used to fetch Facebook account details using below API -[​](#the-accountid-retrieved-from-above-data-can-be-used-to-fetch-facebook-account-details-using-below-api-- "Direct link to The accountId retrieved from above data can be used to fetch Facebook account details using below API -")

API: '/social-media-posting/oauth/facebook/accounts/:accountId'

Method: GET

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   422

Successful Response

Bad Request

Unauthorized

Unprocessable Entity