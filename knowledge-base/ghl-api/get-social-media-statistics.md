---
title: "Get Social Media Statistics"
url: "https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics"
category: ""
---

# Get Social Media Statistics

# Get Social Media Statistics

POST 

## /social-media-posting/statistics

Retrieve analytics data for multiple social media accounts. Provides metrics for the last 7 days with comparison to the previous 7 days. Supports filtering by platforms and specific connected accounts.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   201
-   400
-   401
-   422

Successfully retrieved analytics data

Bad Request - Occurs when more than 100 accounts are requested or invalid parameters are provided

Unauthorized - Invalid or missing authentication credentials

Unprocessable Entity - Invalid request body format