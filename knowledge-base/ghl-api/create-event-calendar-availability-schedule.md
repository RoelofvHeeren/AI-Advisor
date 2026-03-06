---
title: "Create event calendar availability schedule"
url: "https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule"
category: ""
---

# Create event calendar availability schedule

# Create event calendar availability schedule

POST 

## /calendars/schedules/event-calendar/:calendarId

Create a new availability schedule specifically for an event calendar. The calendar ID is provided in the path, and schedule rules and timezone are provided in the request body.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   201
-   400
-   401
-   404
-   422

Schedule created successfully for the event calendar

Invalid request parameters

User not authenticated

Event calendar with the specified ID was not found

Validation errors in schedule rules or conflicting data