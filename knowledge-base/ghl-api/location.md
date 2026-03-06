---
title: "Location"
url: "https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate"
category: ""
---

# Location

On this page

# Location

Called whenever a location is updated.

> Available to Agency Level Apps for all sub-accounts or to specific sub-accounts.

#### Schema[​](#schema "Direct link to Schema")

```
{  "type": "object",  "properties": {    "type": {      "type": "string"    },    "id": {      "type": "string"    },    "name": {      "type": "string"    },    "email": {      "type": "string"    },    "stripeProductId": {      "type": "string"    },    "companyId": {      "type": "string"    }  }}
```

#### Example[​](#example "Direct link to Example")

```
{  "type": "LocationUpdate",  "id": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "name": "Loram ipsum",  "email": "[email protected]",  "stripeProductId": "prod_xyz123abc"}
```