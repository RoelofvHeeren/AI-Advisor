---
title: "Get Custom Menu Links"
url: "https://marketplace.gohighlevel.com/docs/ghl/custom-menus/get-custom-menus"
category: ""
---

# Get Custom Menu Links

# Get Custom Menu Links

GET 

## /custom-menus/

Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   403
-   422

Successfully retrieved custom menus. Returns an array of custom menu objects, potentially including their structure, items, and relevant metadata.

Bad Request. Invalid query parameters provided.

Unauthorized

Forbidden. The client does not have necessary permissions to access custom menus.

Unprocessable Entity