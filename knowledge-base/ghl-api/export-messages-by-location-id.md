---
title: "Export messages by location ID"
url: "https://marketplace.gohighlevel.com/docs/ghl/conversations/export-messages-by-location"
category: ""
---

# Export messages by location ID

# Export messages by location ID

GET 

## /conversations/messages/export

Export messages for a specific location with cursor-based pagination support.

**Channel Filtering Behavior:**

-   **When channel is omitted:** Returns all non-email message types, including messages that don't belong to any specific channel.
-   **When channel=Email:** Returns email messages only.
-   **When channel is specified (SMS, Call, WhatsApp, etc.):** Returns messages for that specific channel.

**Limitations:**

-   Group Chat and SMS Review Request message types are not supported.
-   Cursor validity is 2 minutes from the last request made.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401

List of messages for the location with pagination details.

Bad Request

Unauthorized