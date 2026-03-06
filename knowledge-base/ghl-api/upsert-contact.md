---
title: "Upsert Contact"
url: "https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact"
category: ""
---

# Upsert Contact

# Upsert Contact

POST 

## /contacts/upsert

Please find the list of acceptable values for the `country` field [here](https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list)  
  
The Upsert API will adhere to the configuration defined under the “Allow Duplicate Contact” setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.  
  
If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401
-   422

Successful response

Bad Request

Unauthorized

Unprocessable Entity