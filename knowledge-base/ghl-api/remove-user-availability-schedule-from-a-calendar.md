---
title: "Remove user availability schedule from a calendar"
url: "https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule"
category: ""
---

# Remove user availability schedule from a calendar

# Remove user availability schedule from a calendar

DELETE 

## /calendars/schedules/:id/associations/:calendarId

Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   404

Calendar successfully removed from schedule

Schedule and calendar must belong to the same location

User not authenticated

Schedule or calendar not found