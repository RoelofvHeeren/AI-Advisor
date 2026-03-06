---
title: "Agents"
url: "https://marketplace.gohighlevel.com/docs/ghl/agent-studio/agents"
category: ""
---

# Agents

# Agents

Documentation for Agent Studio APIs

[

## 📄️ List Agents

Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset.

](/docs/ghl/agent-studio/get-agents)

[

## 📄️ Get Agent

Gets a specific agent by its ID for the specified location. locationId is required parameter. The agent must have active status.

](/docs/ghl/agent-studio/get-agent-by-id)

[

## 📄️ Execute Agent

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.

](/docs/ghl/agent-studio/execute-agent)