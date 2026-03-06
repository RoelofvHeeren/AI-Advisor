---
title: "Update user availability schedule"
url: "https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule"
category: ""
---

# Update user availability schedule

# Update user availability schedule

PUT 

## /calendars/schedules/:id

Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   404
-   422

Schedule updated successfully

Invalid request parameters

User not authenticated

Schedule with the specified ID was not found

Validation errors in schedule rules or conflicting data