---
title: "Fetch slot information for queue items"
url: "https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots"
category: ""
---

# Fetch slot information for queue items

# Fetch slot information for queue items

POST 

## /social-media-posting/category/queues/:queueId/slots

Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   201
-   400
-   401
-   422

Slots fetched successfully.

Bad Request

Unauthorized

Unprocessable Entity