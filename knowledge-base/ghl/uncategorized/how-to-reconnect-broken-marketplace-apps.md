---
title: "How to reconnect broken Marketplace Apps?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003717-how-to-reconnect-broken-marketplace-apps-"
category: "Uncategorized"
---

# How to reconnect broken Marketplace Apps?

  

In case developers lose access to access token or refresh token due to any reason - either due to an incident from HighLevel or due to an error on the developer's end - we have provided a solution. 

  

You can now use the **Reconnect API** to get back the authorisation code that can be used in [Get Access Token API](https://highlevel.stoplight.io/docs/integrations/00d0c0ecaa369-get-access-token) (OAuth - Authorisation grant flow) to get back a new set of access and refresh tokens. 

This enables you to reinstate the connection without having to trouble your users.

  
For Sub-Account App connections:

curl --location 'https://services.leadconnectorhq.com/oauth/reconnect' \\
--header 'Content-Type: application/json' \\
--data '{
    "clientKey": "<client\_id>",
    "clientSecret": "<client\_secret>",
    "locationId": "<locationID where the app was installed>"
}'

  

For Agency connections:

curl --location 'https://services.leadconnectorhq.com/oauth/reconnect' \\
--header 'Content-Type: application/json' \\
--data '{
    "clientKey": "<client\_id>",
    "clientSecret": "<client\_secret>",
    "companyId": "<company where the app was installed>"
}'

  

Response of the API:

{
    "authorizationCode": "<auth\_code>",
    "expiresAt": "2024-10-08T13:35:43.887Z",
    "traceId": "trace-ID-ref"
}

  

  

**IMPORTANT**: If you are concerned on how do I receive Official Support for HighLevel API-Related Issues or Broken Marketplace Apps? Please visit [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/) for API documentations and support.