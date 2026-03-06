---
title: "Execute Agent"
url: "https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent"
category: ""
---

# Execute Agent

# Execute Agent

POST 

## /agent-studio/public-api/agents/:agentId/execute

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.

**Session Management:**

-   For the first message in a new session, do not include the `executionId` in the request payload.
-   The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
-   To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests. This allows the agent to maintain conversation context and history across multiple interactions.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   403
-   404
-   422
-   500

Agent executed successfully

Agent is not active or invalid request - locationId is required

Unauthorized

User does not have required scopes to execute this agent

Agent not found

Unprocessable Entity

Internal Server Error