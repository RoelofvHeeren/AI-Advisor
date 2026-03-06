---
title: "HighLevel Custom Shipping Carrier Integration Guide"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide"
category: "Uncategorized"
---

# HighLevel Custom Shipping Carrier Integration Guide

**TABLE OF CONTENTS**

-   [Introduction](#Introduction)
-   [Table of Contents](#Table-of-Contents)
-   [Integration Flow Diagram](#Integration-Flow-Diagram)
-   [1\. Requirements](#1.-Requirements)
    -   [Technical Knowledge](#Technical-Knowledge)
    -   [Backend Service](#Backend-Service)
    -   [Database](#Database)
    -   [Frontend](#Frontend)
    -   [APIs](#APIs)
-   [2\. Initial Setup](#2.-Initial-Setup)
    -   [Create Marketplace App](#Create-Marketplace-App)
    -   [Configure App Settings](#Configure-App-Settings)
    -   [Required Scopes](#Required-Scopes)
    -   [Frontend UI (Custom Page)](#Frontend-UI-\(Custom-Page\))
    -   [Handling User Context](#Handling-User-Context)
    -   [Carrier Credential Handling](#Carrier-Credential-Handling)
-   [3\. Live Shipping Rates Implementation](#3.-Live-Shipping-Rates-Implementation)
    -   [Register Shipping Carrier in HighLevel](#Register-Shipping-Carrier-in-HighLevel)
    -   [Implement Live Rates Callback](#Implement-Live-Rates-Callback)
    -   [Configure Shipping Rates in HighLevel Zones](#Configure-Shipping-Rates-in-HighLevel-Zones)
-   [4\. Order Syncing and Fulfillment](#4.-Order-Syncing-and-Fulfillment)
    -   [Enable Order Webhooks](#Enable-Order-Webhooks)
    -   [Handling Order Creation Webhook](#Handling-Order-Creation-Webhook)
    -   [Handling Carrier Shipping Updates](#Handling-Carrier-Shipping-Updates)
-   [5\. Disconnection and Uninstallation](#5.-Disconnection-and-Uninstallation)
    -   [Deleting the Shipping Carrier](#Deleting-the-Shipping-Carrier)
-   [Conclusion](#Conclusion)

  

## Introduction

This guide provides a comprehensive walkthrough for developing a shipping carrier integration with HighLevel's marketplace. A custom shipping carrier integration allows businesses using HighLevel to connect their preferred shipping providers, offer real-time shipping rates during checkout, automate order fulfillment workflows, and provide accurate tracking information directly to customers. This enhances the native e-commerce capabilities within HighLevel.

Key benefits of implementing a custom shipping carrier integration include:

-   **Flexibility:** Connect with any shipping carrier that provides an API, beyond built-in options.
-   **Accurate Rates:** Display real-time, accurate shipping costs from your specific carrier accounts during checkout.
-   **Automated Fulfillment:** Reduce manual effort by automatically creating shipping labels and triggering shipments with your carrier.
-   **Seamless Tracking:** Keep customers informed by syncing tracking information from the carrier back into HighLevel orders.
-   **Integrated Experience:** Manage shipping aspects directly within the HighLevel ecosystem.

Building this integration involves backend development to handle API calls and webhooks, frontend development for user configuration (often via a Custom Page), and secure management of credentials and data flow between HighLevel, your service, and the carrier's API. By following this guide, you can build a robust integration that streamlines shipping operations for HighLevel users.

  

## Integration Flow Diagram

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044784099/original/KlH4zElvi21uzFzAciqiP3e3oxmP1F6ldQ.png?1744189412)

  

## 1\. Requirements

### Technical Knowledge

-   Basic backend development knowledge (e.g., Node.js, Python, etc.).
-   Understanding of REST APIs, webhooks, and OAuth 2.0 authorization flow.

### Backend Service

-   A backend service capable of:
    -   Handling OAuth redirection from HighLevel.
    -   Receiving and processing webhooks from both HighLevel (e.g., order events) and the custom shipping carrier (e.g., shipping updates).
    -   Making API calls to both HighLevel and the custom carrier's API.
    -   Serving the frontend UI (if not hosted separately).

### Database

-   A database to securely store:
    -   HighLevel OAuth tokens (access and refresh tokens) associated with location IDs.
    -   Custom shipping carrier credentials (e.g., API keys, secrets) provided by the user, linked to the HighLevel location.
    -   Mapping information between HighLevel entities (like orders) and carrier entities.

### Frontend

-   A simple frontend application (can be implemented as a HighLevel Custom Page) that allows users to:
    -   Initiate the connection process.
    -   Input and save their shipping carrier API credentials.
    -   Manage connection settings (e.g., enable/disable features).

### APIs

-   Your backend service will need to implement several API endpoints:
    -   **OAuth Redirect URI:** Handles the callback from HighLevel after app authorization.
    -   **HighLevel Webhook Listener:** Receives webhooks from HighLevel (e.g., `OrderCreate`, `OrderStatusUpdate`).
    -   **Carrier Credential Management:** APIs to save/update/delete carrier credentials entered via the frontend.
    -   **Carrier Webhook Listener:** Receives webhooks from the custom shipping carrier.
    -   **Live Rates Callback:** An endpoint HighLevel calls to fetch live shipping rates during checkout.

## 2\. Initial Setup

### Create Marketplace App

-   Follow the HighLevel documentation to create a new Marketplace application: [HighLevel Authorization Documentation](https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization)

### Configure App Settings

-   **App Type:** Set the application type to **Sub-Account**. This allows installation on specific location accounts.
-   **Redirect URI:** Set this to the URL of your backend service endpoint designated to handle the OAuth callback (e.g., `https://your-backend.com/oauth/callback`).
-   **Webhook URL:** Set this to the URL of your backend service endpoint designated to receive webhooks from HighLevel (e.g., `https://your-backend.com/webhooks/highlevel`). Ensure `OrderCreate` and `OrderStatusUpdate` webhooks are enabled in the app settings.

### Required Scopes

-   Your application will need the following scopes to manage shipping and orders. Refer to the scopes documentation for the exact scope names: [HighLevel Scopes Documentation](https://highlevel.stoplight.io/docs/integrations/6444956c5219f-scopes)
    -   `orders.readonly`
    -   `orders.write`
    -   `shipping.readonly`
    -   `shipping.write`

### Frontend UI (Custom Page)

-   Develop a frontend interface where users can enter their specific shipping carrier credentials (API Key, Secret, Account ID, etc.).
-   This UI should be embedded within HighLevel using a Custom Menu Link pointing to your hosted frontend page or an endpoint serving the UI.

### Handling User Context

-   Your frontend and backend need to identify the HighLevel location the user is currently interacting with. Use the context provided by HighLevel when loading your custom page/menu link.
-   Refer to the documentation on User Context: [User Context in Marketplace Apps](https://highlevel.stoplight.io/docs/integrations/adfc6ad89ffb8-user-context-in-marketplace-apps)
-   Typically, this involves parsing a token (like a JWT or an encrypted payload) passed as a query parameter when HighLevel redirects to your frontend/backend. Decrypt/validate this token using a shared secret provided during app setup to get the `locationId`.

**Backend Example (Node.js/Express):**

// Example using crypto-js for AES decryption
const CryptoJS = require('crypto-js')

function decryptGhlUserData(encryptedData, sharedSecret) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, sharedSecret)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedData)
  } catch (error) {
    console.error('Decryption failed:', error)
    throw new Error('Failed to decrypt or parse user data')
  }
}

// Example Express middleware/route handler
app.post('/your-context-endpoint', (req, res) => {
  try {
    // Assuming encrypted data is passed in the request body
    const { encryptedContextData } = req.body
    const sharedSecret = process.env.GHL\_APP\_SHARED\_SECRET // Load your shared secret securely

    if (!encryptedContextData || !sharedSecret) {
      return res.status(400).json({ error: 'Missing data or configuration' })
    }

    const userData = decryptGhlUserData(encryptedContextData, sharedSecret)
    console.log('Decrypted User Context:', userData)
    // Now you have access to userData.locationId, userData.userId, etc.
    // Proceed with your logic...
    res.json({ success: true, locationId: userData.locationId })
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
})

**Frontend Example (Custom Page JavaScript):**

// Function to request and potentially decrypt user context data
async function getUserContext() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timeout waiting for user context response'))
      window.removeEventListener('message', messageHandler)
    }, 5000) // 5-second timeout

    const messageHandler = (event) => {
      // Optional: Add origin check for security
      // if (event.origin !== 'expected\_highlevel\_origin') return;

      if (event.data && event.data.message === 'REQUEST\_USER\_DATA\_RESPONSE') {
        clearTimeout(timeout)
        window.removeEventListener('message', messageHandler)
        console.log('Received encrypted context from HighLevel:', event.data.payload)
        // Send event.data.payload to your backend for decryption
        // fetch('/your-context-endpoint', { method: 'POST', ... body: { encryptedContextData: event.data.payload }})
        //   .then(response => response.json())
        //   .then(decryptedData => resolve(decryptedData))
        //   .catch(error => reject(error));

        // For demonstration, assuming payload is the decrypted context (or you handle decryption client-side IF safe)
        resolve(event.data.payload)
      }
    }

    window.addEventListener('message', messageHandler)
    // Request the data from the parent HighLevel window
    window.parent.postMessage({ message: 'REQUEST\_USER\_DATA' }, '\*') // Use a specific target origin in production
  })
}

// Example usage:
getUserContext()
  .then((context) => {
    console.log('User Context:', context)
    // Use context.locationId, context.userId etc.
  })
  .catch((error) => {
    console.error('Failed to get user context:', error)
  })

### Carrier Credential Handling

1.  **Receive Credentials:** Get the carrier API key, secret, etc., from the user via your frontend UI.
    
2.  **Associate with Location:** Store these credentials securely in your database, linking them to the `locationId` obtained from the user context.
    
3.  **Validate Credentials:** Make a test API call to the carrier's API using the provided credentials to ensure they are valid. Provide feedback to the user.
    
    **Frontend Example (Saving Credentials):**
    
    async function saveCarrierCredentials(locationId, apiKey, apiSecret) {
      try {
        const response = await fetch('/your-backend-api/carrier/credentials', {
          // Your backend endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // Include authentication if needed (e.g., JWT)
          },
          body: JSON.stringify({
            locationId: locationId, // Send context if needed by backend
            apiKey: apiKey,
            apiSecret: apiSecret
          })
        })
    
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || \`HTTP error! status: ${response.status}\`)
        }
    
        const result = await response.json()
        console.log('Credentials saved successfully:', result)
        // Update UI (e.g., show success message)
        return result
      } catch (error) {
        console.error('Failed to save carrier credentials:', error)
        // Update UI (e.g., show error message)
        throw error
      }
    }
    
    // Example form submission handler
    document.getElementById('credential-form').addEventListener('submit', async (event) => {
      event.preventDefault()
      const apiKey = document.getElementById('api-key').value
      const apiSecret = document.getElementById('api-secret').value
      const locationId = 'USER\_LOCATION\_ID' // Get this from user context
    
      try {
        await saveCarrierCredentials(locationId, apiKey, apiSecret)
        alert('Credentials Saved!')
      } catch (error) {
        alert(\`Error saving credentials: ${error.message}\`)
      }
    })
    
4.  **Setup Carrier Webhooks:** Use the validated carrier credentials to make API calls to the _carrier's_ system to register _your_ backend's carrier webhook listener URL (e.g., `https://your-backend.com/webhooks/carrier`). This allows the carrier to notify your service about shipping updates (like tracking number generation).
    

## 3\. Live Shipping Rates Implementation

To allow HighLevel checkout to display real-time shipping rates from your custom carrier, you need to register your service as a shipping carrier within HighLevel.

### Register Shipping Carrier in HighLevel

-   Your backend service needs to make a POST request to the HighLevel API endpoint responsible for creating shipping carriers. This endpoint is typically associated with the Store/Payments microservice. The endpoint is `POST /shipping-carrier`.
-   The request body should include the location context (`altId`, `altType`) and details about your carrier integration.

**Example Request:**

POST /shipping-carrier HTTP/1.1
Host: <highlevel-api-domain>
Authorization: Bearer <location\_access\_token>
Content-Type: application/json

{
  "altId": "LOCATION\_ID\_HERE", // The location ID obtained from user context
  "altType": "location",
  "name": "Your Custom Carrier Name", // e.g., "My Awesome Shipping"
  "callbackUrl": "https://your-backend.com/rates" // Your backend endpoint for live rates
}

  

-   **`name`**: The name displayed to the user in HighLevel shipping settings.
-   **`callbackUrl`**: The **base URL** where HighLevel will send POST requests to fetch live rates during checkout. HighLevel will append `/rates` to this URL. So, if you provide `https://your-backend.com/shipping`, HighLevel will call `https://your-backend.com/shipping/rates`. In the example above, the final URL called will be `https://your-backend.com/rates/rates`, so adjust your `callbackUrl` accordingly (e.g., just `https://your-backend.com` if your endpoint is `/rates`). _Correction based on user prompt: The prompt implies the _full_ URL including `/rates` should be provided in `callbackUrl`._ Let's assume the prompt is correct: Set `callbackUrl` to `https://your-backend.com/rates`.
-   **Response:** A successful response will contain the details of the created carrier, including a unique `_id` (let's call it `shippingCarrierId`). Store this `shippingCarrierId` in your database, associated with the location and carrier credentials.

{
  "data": {
    "\_id": "SHIPPING\_CARRIER\_ID\_HERE", // Store this ID
    "altId": "LOCATION\_ID\_HERE",
    "altType": "location",
    "name": "Your Custom Carrier Name",
    "callbackUrl": "https://your-backend.com/rates",
    "marketplaceAppId": "YOUR\_MARKETPLACE\_APP\_ID",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "status": true
}

  

### Implement Live Rates Callback

-   Your backend must implement the endpoint specified in the `callbackUrl` (e.g., `POST /rates`).
-   HighLevel will send a `POST` request to this endpoint during checkout with details of the cart contents and destination address.

**Example Request Body Received by Your Backend (`POST /rates`):**

{
  "rate": {
    "altId": "LOCATION\_ID\_HERE",
    "altType": "location",
    "origin": {
      "name": "Store Owner Name",
      "companyName": "Store Name",
      "address1": "123 Origin St",
      "address2": "Suite 100",
      "city": "Origin City",
      "state": "CA",
      "zip": "90210",
      "country": "US",
      "phone": "5551112222",
      "email": "store@example.com"
    },
    "destination": {
      "name": "Customer Name",
      "companyName": null,
      "address1": "456 Destination Ave",
      "address2": null,
      "city": "Destination City",
      "state": "NY",
      "zip": "10001",
      "country": "US",
      "phone": "5553334444",
      "email": "customer@example.com"
    },
    "items": \[
      {
        "name": "Product A",
        "sku": "SKU123",
        "quantity": 2,
        "grams": 500, // Weight per item
        "unitPrice": 25.0,
        "totalPrice": 50.0, // quantity \* unitPrice
        "productId": "HL\_PRODUCT\_ID\_1",
        "priceId": "HL\_PRICE\_ID\_1"
      },
      {
        "name": "Product B",
        "sku": "SKU456",
        "quantity": 1,
        "grams": 1200,
        "unitPrice": 100.0,
        "totalPrice": 100.0,
        "productId": "HL\_PRODUCT\_ID\_2",
        "priceId": "HL\_PRICE\_ID\_2"
      }
    \],
    "currency": "USD"
  }
}

  

-   **Your Backend Logic:**
    1.  Parse the request body.
    2.  Retrieve the carrier credentials associated with the `altId` (locationId) from your database.
    3.  Transform the HighLevel rate request payload into the format required by your custom carrier's API.
    4.  Call the carrier's API to get live shipping rates.
    5.  Transform the carrier's response into the format expected by HighLevel.
-   **Example Response Sent by Your Backend:**

{
  "rates": \[
    {
      "serviceName": "Standard Ground", // Name of the shipping service
      "amount": 15.5, // Cost of the service
      "currency": "USD", // Currency code
      "estimatedDays": 5 // Estimated delivery days (optional)
    },
    {
      "serviceName": "Express Overnight",
      "amount": 45.0,
      "currency": "USD",
      "estimatedDays": 1
    }
  \]
}

### Configure Shipping Rates in HighLevel Zones

-   After successfully registering the shipping carrier, your integration (or the user manually) needs to add shipping rates based on this carrier to the relevant Shipping Zones within HighLevel Store settings.
    
-   **Backend Automation:**
    
    1.  Use the HighLevel API to list existing Shipping Zones for the location. The endpoint is`GET /shipping-zone`.
        
        **Example Request (`GET /shipping-zone`):**
        
        GET /shipping-zone?altId=LOCATION\_ID\_HERE&altType=location HTTP/1.1
        Host: <highlevel-api-domain>
        Authorization: Bearer <location\_access\_token>
        
    2.  For each relevant zone returned by the above call, use the HighLevel API to create a new Shipping Rate (`POST /shipping-zones/{zoneId}/rates` - endpoint inferred).
        
        -   In the request body for creating the rate:
            -   Set `isCarrierRate` to `true`.
            -   Provide the `shippingCarrierId` obtained during carrier registration.
            -   Set a placeholder `amount` (e.g., 0) as the actual rate will be fetched live via the callback.
            -   Set `name` (e.g., "My Awesome Shipping - Live Rates").
            -   Specify `altId`, `altType`.

**Example Request Body (`POST /shipping-zones/{zoneId}/rates`):**

{
  "altId": "LOCATION\_ID\_HERE",
  "altType": "location",
  "name": "My Awesome Shipping - Live Rates", // Name shown to user
  "currency": "USD", // Or the location's currency
  "amount": 0, // Placeholder, actual rate fetched live
  "conditionType": "NONE", // Or based on weight/price if needed, though usually NONE for carrier rates
  "isCarrierRate": true,
  "shippingCarrierId": "SHIPPING\_CARRIER\_ID\_HERE" // The ID received when registering the carrier
}

## 4\. Order Syncing and Fulfillment

This section describes how to sync orders to your carrier and automate fulfillment updates back into HighLevel.

### Enable Order Webhooks

-   Ensure the `OrderCreate` and `OrderStatusUpdate` webhooks are enabled in your HighLevel Marketplace App configuration settings. Point them to your backend's HighLevel webhook listener endpoint.

### Handling Order Creation Webhook

1.  **Receive Webhook:** Your backend receives a POST request from HighLevel when an order is created or its status changes (specifically looking for newly completed orders relevant for shipping).
    
2.  **Validate:** Verify the webhook signature/authenticity if applicable.
    
3.  **Process:**
    
    -   Check if the order status is appropriate for shipping (e.g., `Completed`, `Paid`).
    -   Check if the order requires shipping (contains physical products).
    -   Retrieve the full order details using the HighLevel API (`GET /orders/{orderId}`).
    -   Retrieve the associated carrier credentials from your database using the `locationId`.
4.  **Backend Example (Node.js/Express):**
    
    // Example Express endpoint for HighLevel webhooks
    app.post('/webhooks/highlevel', async (req, res) => {
      try {
        // 1. TODO: Validate webhook signature (important for security)
        // const signature = req.headers\['webhook-signature'\]; // Example header
        // const isValid = validateSignature(req.rawBody, signature, GHL\_WEBHOOK\_SECRET);
        // if (!isValid) return res.status(401).send('Invalid signature');
    
        const { type, locationId, orderId, status } = req.body // Adjust based on actual webhook payload structure
    
        console.log(\`Received webhook: Type=${type}, LocationId=${locationId}, OrderId=${orderId}, Status=${status}\`)
    
        // 2. Process only relevant events (e.g., completed orders)
        if ((type === 'OrderCreate' || type === 'OrderStatusUpdate') && orderId && status === 'completed') {
          console.log(\`Processing order ${orderId} for location ${locationId}\`)
          await processOrderForShipping(locationId, orderId)
        } else {
          console.log(\`Skipping webhook type: ${type} or status: ${status}\`)
        }
    
        res.status(200).send('Webhook received successfully')
      } catch (error) {
        console.error('Error processing HighLevel webhook:', error)
        // Respond with 5xx error but don't reveal internal details
        res.status(500).send('Internal Server Error')
      }
    })
    
    async function processOrderForShipping(locationId, orderId) {
      try {
        // 3. Retrieve full order details from HighLevel API
        // const orderDetails = await highlevelApiClient.getOrder(locationId, orderId);
        // Example: const orderDetails = { requiresShipping: true, items: \[...\] }; // Mock
    
        // Check if order actually needs shipping
        // if (!orderDetails || !orderDetails.requiresShipping) {
        //   console.log(\`Order ${orderId} does not require shipping.\`);
        //   return;
        // }
    
        // 4. Retrieve carrier credentials for the location from your DB
        // const credentials = await database.getCarrierCredentials(locationId);
        // if (!credentials) throw new Error(\`Credentials not found for location ${locationId}\`);
    
        // 5. Transform HighLevel order data to carrier's API format
        // const carrierPayload = transformOrderForCarrier(orderDetails);
    
        // 6. Call carrier API to create shipment/order
        // const carrierResponse = await carrierApiClient.createShipment(credentials, carrierPayload);
        // const carrierOrderId = carrierResponse.id;
    
        // 7. Store mapping in your DB
        // await database.storeOrderMapping(locationId, orderId, carrierOrderId);
    
        console.log(\`Successfully created shipment with carrier for order ${orderId}. Carrier ID: ${carrierOrderId}\`)
      } catch (error) {
        console.error(\`Failed to process order ${orderId} for shipping:\`, error)
        // TODO: Implement retry logic or error notification system
      }
    }
    
5.  **Create Order with Carrier:**
    
    -   Transform the HighLevel order data into the format required by your carrier's "create order" or "create shipment" API endpoint.
    -   Call the carrier's API to create the order/shipment.
    -   Store the mapping between the HighLevel `orderId` and the carrier's order/shipment ID in your database.

### Handling Carrier Shipping Updates

1.  **Receive Webhook:** Your backend's _carrier_ webhook listener receives a notification from the shipping carrier when a shipment status changes (e.g., label printed, tracking number generated, shipped, delivered).
    
2.  **Validate:** Verify the webhook's authenticity based on the carrier's mechanism (e.g., signature).
    
3.  **Process:**
    
    -   Parse the webhook data to extract the carrier's order/shipment ID and the new shipping information (tracking number, tracking URL, status).
    -   Use the carrier ID to look up the corresponding HighLevel `orderId` and `locationId` from your database mapping.
4.  **Backend Example (Node.js/Express):**
    
    // Example Express endpoint for Carrier webhooks
    app.post('/webhooks/carrier', async (req, res) => {
      try {
        // 1. TODO: Validate webhook authenticity (specific to the carrier)
        // const isValid = validateCarrierSignature(req);
        // if (!isValid) return res.status(401).send('Invalid signature');
    
        const carrierWebhookData = req.body
        console.log('Received carrier webhook:', JSON.stringify(carrierWebhookData))
    
        // 2. Parse carrier data (adjust keys based on actual payload)
        const carrierOrderId = carrierWebhookData.orderReference // Or shipmentId, etc.
        const trackingNumber = carrierWebhookData.tracking?.number
        const trackingUrl = carrierWebhookData.tracking?.url
        const shippingStatus = carrierWebhookData.status // e.g., 'SHIPPED', 'LABEL\_CREATED'
    
        // 3. Check if we have necessary data (especially tracking number for fulfillment)
        if (!carrierOrderId || !trackingNumber) {
          console.log('Carrier webhook missing order reference or tracking number. Skipping.')
          return res.status(200).send('Webhook received, but no action needed yet.')
        }
    
        // 4. Find corresponding HighLevel order info from DB mapping
        // const mapping = await database.findMappingByCarrierId(carrierOrderId);
        // if (!mapping) {
        //   console.warn(\`Received carrier update for unknown order reference: ${carrierOrderId}\`);
        //   return res.status(404).send('Mapping not found'); // Or 200 to prevent carrier retries
        // }
        // const { highlevelOrderId, locationId } = mapping;
        // Mock:
        const highlevelOrderId = 'HL\_ORDER\_ID\_123'
        const locationId = 'LOCATION\_ID\_XYZ'
    
        // 5. Create fulfillment in HighLevel if applicable (e.g., status is SHIPPED)
        if (shippingStatus === 'SHIPPED' || shippingStatus === 'LABEL\_CREATED') {
          // Adjust condition as needed
          console.log(\`Triggering fulfillment for HighLevel Order ${highlevelOrderId}\`)
          await createHighLevelFulfillment(locationId, highlevelOrderId, trackingNumber, trackingUrl)
        } else {
          console.log(\`Carrier status ${shippingStatus} doesn't require fulfillment action yet.\`)
        }
    
        res.status(200).send('Carrier webhook processed successfully')
      } catch (error) {
        console.error('Error processing carrier webhook:', error)
        res.status(500).send('Internal Server Error')
      }
    })
    
    async function createHighLevelFulfillment(locationId, orderId, trackingNumber, trackingUrl) {
      try {
        // Fetch order details to get line items and price IDs if needed
        // const orderDetails = await highlevelApiClient.getOrder(locationId, orderId);
        // const itemsToFulfill = orderDetails.items.map(item => ({ priceId: item.price.\_id, qty: item.quantity })); // Adjust as needed
    
        const fulfillmentPayload = {
          altId: locationId,
          altType: 'location',
          items: \[
            /\* Populate with items being fulfilled, e.g., itemsToFulfill \*/
          \],
          trackings: \[
            {
              trackingNumber: trackingNumber,
              shippingCarrier: 'Your Custom Carrier Name', // Use the name registered earlier
              trackingUrl: trackingUrl || undefined // Include URL if available
            }
          \],
          notifyCustomer: true // Or based on user preference/setting
        }
    
        console.log('Creating HighLevel fulfillment with payload:', JSON.stringify(fulfillmentPayload))
        // await highlevelApiClient.createFulfillment(locationId, orderId, fulfillmentPayload);
        console.log(\`Successfully created fulfillment for order ${orderId}\`)
      } catch (error) {
        console.error(\`Failed to create fulfillment for order ${orderId}:\`, error)
        // TODO: Implement retry logic or error notification
      }
    }
    
      
    
5.  **Create Fulfillment in HighLevel:** If a tracking number is now available, trigger the fulfillment process in HighLevel.
    
    -   Use the HighLevel API to create an order fulfillment record. Refer to the official documentation: [Create Order Fulfillment API](https://highlevel.stoplight.io/docs/integrations/1e091099a92c6-create-order-fulfillment)
    -   This typically involves making a `POST` request to an endpoint like `/orders/{orderId}/fulfillments`, as demonstrated in the `createHighLevelFulfillment` function example above.

## 5\. Disconnection and Uninstallation

When a user disconnects or uninstalls your Marketplace App from their location, you need to clean up the integration settings within HighLevel.

### Deleting the Shipping Carrier

-   Your backend should listen for the App Uninstalled webhook from HighLevel (configure this in your Marketplace App settings).
-   When this webhook is received for a specific `locationId`:
    1.  Look up the `shippingCarrierId` associated with that `locationId` in your database.
    2.  If found, make a `DELETE` request to the HighLevel API to remove the shipping carrier registration. The endpoint is`DELETE /shipping-carrier/{shippingCarrierId}`.

**Example Request:**

DELETE /shipping-carrier/SHIPPING\_CARRIER\_ID\_HERE?altId=LOCATION\_ID\_HERE&altType=location HTTP/1.1
Host: <highlevel-api-domain>
Authorization: Bearer <location\_access\_token> // Need a valid token, potentially stored or obtained via app credentials

  

-   This removes the carrier from the location's shipping settings, preventing errors if the callback URL becomes invalid.
-   Also, perform cleanup on your side: delete stored credentials, webhook registrations with the carrier, etc.

## Conclusion

Successfully creating a custom shipping carrier integration for HighLevel can significantly enhance the platform's e-commerce capabilities for users, offering greater flexibility and automation in their shipping processes. This guide has outlined the essential steps, from setting up the Marketplace App and handling authentication to implementing live rates, order syncing, and fulfillment.

The core components involve:

1.  **Secure Authentication:** Managing OAuth tokens for HighLevel and API credentials for the carrier.
2.  **API Integration:** Interacting with both HighLevel and carrier APIs for registration, rates, orders, and fulfillment.
3.  **Webhook Handling:** Reliably processing asynchronous events from both platforms.
4.  **Data Management:** Storing credentials and mapping IDs between systems.
5.  **User Interface:** Providing a clear way for users to configure the integration.

When building your integration, remember to prioritize robust error handling, security best practices (especially around credentials), and clear logging for easier debugging. Consider the scalability of your backend service and database as usage grows. Keep abreast of API changes from both HighLevel and your target shipping carrier to ensure long-term compatibility.

By following these principles and adapting the examples provided, you can build a valuable and reliable shipping carrier integration for the HighLevel marketplace.