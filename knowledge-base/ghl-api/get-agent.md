---
title: "Get Agent"
url: "https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id"
category: ""
---

# Get Agent

# Get Agent

GET 

## /agent-studio/public-api/agents/:agentId

Gets a specific agent by its ID for the specified location. locationId is required parameter. The agent must have active status.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   404
-   422
-   500

Agent retrieved successfully

Bad Request - locationId is required

Unauthorized

Agent not found or not available

Unprocessable Entity

Internal Server Error