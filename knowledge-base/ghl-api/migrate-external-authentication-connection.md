---
title: "Migrate external authentication connection"
url: "https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection"
category: ""
---

# Migrate external authentication connection

# Migrate external authentication connection

POST 

## /marketplace/external-auth/migration

Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in Highlevel's native encrypted storage. With this the lifecycle of the token is managed by Highlevel.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   201
-   400
-   401
-   404
-   500

Connection migrated successfully

Bad request - invalid input or auth type mismatch

Unauthorized - invalid or missing token

App not found

Internal server error