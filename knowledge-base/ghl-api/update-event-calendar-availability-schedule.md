---
title: "Update event calendar availability schedule"
url: "https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-schedule"
category: ""
---

# Update event calendar availability schedule

# Update event calendar availability schedule

PUT 

## /calendars/schedules/event-calendar/:calendarId

Update the availability schedule for a specific event calendar. Only provided fields will be updated. The calendar ID is provided in the path.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   404
-   422

Schedule updated successfully for the event calendar

Invalid request parameters

User not authenticated

Event calendar or schedule with the specified ID was not found

Validation errors in schedule rules or conflicting data