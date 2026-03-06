---
title: "Workflow Action - Update an Associated Record for Contact"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004588-workflow-action-update-an-associated-record-for-contact"
category: "Uncategorized"
---

# Workflow Action - Update an Associated Record for Contact

**TABLE OF CONTENTS**

-   [Overview](#%E2%80%8B%E2%80%8BOverview)
-   [Action Name](#Action-Name)
-   [Action Description](#Action-Description)
-   [Action Details](#Action-Details)
-   [Example: Tracking Remaining Slots for a Trip](#Example%3A-Tracking-Remaining-Slots-for-a-Trip)

  

### **Overview**

The **Update an Associated Record** action allows users to modify specific fields of a custom object associated with a contact. This ensures that key information remains accurate and up-to-date without manual intervention.

* * *

### **Action Name**

**Update Associated Record for Contact**

* * *

### **Action Description**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041053104/original/i1jCeUn69LXyTgcgnRKn9rEdCkggGSm_tw.png?1738755088)**

This action enables users to update existing custom object records that are associated with a contact. The update can apply to one or multiple records, depending on the [association label selected](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315).

* * *

### **Action Details**

-   This action is possible only after creating custom objects in the subaccount and creating an association label between at least one of those objects and contacts.
-   Updates one or more fields within the selected records.
-   Uses **[association labels to determine which records should be updated](https://help.gohighlevel.com/a/solutions/articles/155000004033?portalId=48000045315)** - the user can also choose to update all associated records by selecting "All associated records".
-   Users can also use custom value and custom fields - merge fields to add the information to the object record

* * *

### **Example: Tracking Remaining Slots for a Trip**

A home appliance company sells products with warranties, and each product has a **Warranty** custom object to track:

-   **Warranty Start Date**
-   **Warranty Expiry Date**
-   **Service History**

When a product is purchased, the **Warranty Start Date** should be set automatically, and when a warranty claim is made, the **Service History** field should be updated.

#### **Example Setup** (For updating warranty information after a service request)

1.  **Object to Update** → Warranty
2.  **Association Label** → Purchased Product
3.  **Fields to Update:**
    -   **Service History** → Append service details
    -   **Last Service Date** → Set to today’s date

#### **How It Works**

-   When a product is purchased, the **Warranty Start Date** is set via the **Create an Associated Record** action.
-   If a customer submits a service request, the workflow triggers an **Update Associated Record**action:
    -   The **Service History** field is updated with details of the service performed.
    -   The **Last Service Date** is set to today’s date.

This helps the company maintain an updated service record for each product, ensuring smooth warranty tracking and claims processing.