---
title: "Bulk Delete Social Planner Posts"
url: "https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts"
category: ""
---

# Bulk Delete Social Planner Posts

# Bulk Delete Social Planner Posts

POST 

## /social-media-posting/:locationId/posts/bulk-delete

Deletes multiple posts based on the provided list of post IDs. This operation is useful for clearing up large numbers of posts efficiently.

Note:

1.The maximum number of posts that can be deleted in a single request is '50'.

2.However, It will only get deleted in Highlevel database but still it is recommended to be cautious of this operation.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   201
-   400
-   401
-   404
-   422
-   500

Posts deleted successfully

Cannot delete more than 50 posts at a time.

Unauthorized

No posts found with the given IDs.

Unprocessable Entity

An error occurred while trying to delete the posts. Please try again later.