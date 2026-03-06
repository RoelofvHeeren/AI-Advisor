---
title: "Get Custom Menu Link"
url: "https://marketplace.gohighlevel.com/docs/ghl/custom-menus/get-custom-menu-by-id"
category: ""
---

# Get Custom Menu Link

# Get Custom Menu Link

GET 

## /custom-menus/:customMenuId

Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   403
-   422

Successfully retrieved custom menu. Returns a single custom menu object, potentially including its structure, items, and relevant metadata.

Bad Request. Invalid query parameters provided.

Unauthorized

Forbidden. The client does not have necessary permissions to access custom menu.

Unprocessable Entity