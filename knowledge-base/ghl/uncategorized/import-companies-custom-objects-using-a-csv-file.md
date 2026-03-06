---
title: "Import Companies & Custom Objects Using a CSV File"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007403-import-companies-custom-objects-using-a-csv-file"
category: "Uncategorized"
---

# Import Companies & Custom Objects Using a CSV File

This article explains how to bulk import **Companies** and **Custom Object records** using a CSV file. You can create new records, update existing ones, or perform both actions in a single import.

  

This feature is useful when migrating data from another CRM, onboarding new clients, or maintaining structured records at scale.

* * *

## **IMPORTANT**

  

Import supports **only CSV (.csv) files**.

Excel (.xlsx) and Google Sheets links are not supported.

  

Please refer to **CSV File Format for Importing** for detailed formatting rules before starting.

* * *

**TABLE OF CONTENTS**

-   [Prerequisites](#Prerequisites)
    
    -   [User Permissions](#User-Permissions)
    -   [File Requirements](#File-Requirements)
    -   [Field Preparation](#Field-Preparation)
    
-   [Common Mistakes to Avoid](#Common-Mistakes-to-Avoid)
-   [Import Modes Explained](#Import-Modes-Explained)
    -   [1️⃣ Create](#1%EF%B8%8F%E2%83%A3-Create)
    -   [2️⃣ Update](#2%EF%B8%8F%E2%83%A3-Update)
    -   [3️⃣ Create & Update](#3%EF%B8%8F%E2%83%A3-Create-&-Update)
-   [How to Import Companies or Custom Objects](#How-to-Import-Companies-or-Custom-Objects)
    -   [Step 1: Navigate to Import](#Step-1%3A-Navigate-to-Import)
    -   [Step 2: Select Object](#Step-2%3A-Select-Object)
    -   [Step 3: Upload CSV File](#Step-3%3A-Upload-CSV-File)
    -   [Step 4: Map Columns to Fields](#Step-4%3A-Map-Columns-to-Fields)
        -   [“Don’t Update Empty Values”](#%E2%80%9CDon%E2%80%99t-Update-Empty-Values%E2%80%9D)
-   [Duplicate Handling & Unique Fields](#Duplicate-Handling-&-Unique-Fields)
-   [Update Empty Values Restrictions](#Update-Empty-Values-Restrictions)
-   [Monitor Import Status](#Monitor-Import-Status)
    -   [Import Stats](#Import-Stats)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
    
    -   [Q: Can I import multiple Custom Objects at once?](#Q%3A-Can-I-import-multiple-Custom-Objects-at-once?)
    -   [Q: Can I import system fields like Created At?](#Q%3A-Can-I-import-system-fields-like-Created-At?)
    -   [Q: What happens if unique fields conflict?](#Q%3A-What-happens-if-unique-fields-conflict?)
    -   [Q: Can I undo an import?](#Q%3A-Can-I-undo-an-import?)
    -   [Q: Where do I see past imports?](#Q%3A-Where-do-I-see-past-imports?)
    
-   [Related Articles](#Related-Articles)

* * *

# **Prerequisites**

  

Before starting your import:

  

### **User Permissions**

  

You must have **Admin access** to perform imports.

  

### **File Requirements**

-   File format must be **.csv**
    
-   Maximum file size: **30 MB**
    
-   Only **one sheet/tab**
    
-   The first row must contain headers
    
-   Headers should match existing standard or custom fields
    

### **Field Preparation**

-   Required fields must contain valid values
    
-   Custom fields must already exist in your account
    
-   If updating records, ensure you include the correct identifier (e.g., Record ID)
    

* * *

# **Common Mistakes to Avoid**

  

❌ Missing required fields

❌ Blank primary field values

❌ Incorrect Record IDs when using Update mode

❌ Unique field conflicts

❌ CSV headers that don’t match CRM field names

  

Always test with a small file first.

* * *

# **Import Modes Explained**

  

When uploading your CSV, you’ll choose one of three modes:

* * *

## **1️⃣ Create**

  

Creates new records only.

-   Requires the Primary field
    
-   Existing records will not be updated
    
-   Duplicate handling follows unique field rules (if applicable)
    

* * *

## **2️⃣ Update**

  

Updates existing records only.

-   Requires **Record ID or unique fields in case of custom objects**
    
-   Rows without a matching Record ID/unique field will be skipped
    

* * *

## **3️⃣ Create & Update**

  

Creates new records and updates existing ones.

-   If Record ID or unique field matches → record updates
    
-   If no match → record is created
    
-   Unique field rules apply if configured
    

* * *

# **How to Import Companies or Custom Objects**

* * *

## **Step 1: Navigate to Import**

  

**For Companies**

-   Go to **Companies**
    
-   Click **Import on the top right**
    

  

**For Custom Objects**

-   Go to **Custom Object**
    
-   Click **Import on the top right**
    

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685583/original/G2gI4btAt6lgdcuJ5cLFkamG20Khpa7S8w.png?1772024077)**

* * *

## **Step 2: Select Object**

-   Choose the Company or Custom Object you want to import
    
-   Only one Custom Object can be imported at a time
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685630/original/bbwPLf7dW1SdP8smduTetEDmmYQkmQz5pA.png?1772024110)

  

* * *

## **Step 3: Upload CSV File**

-   Upload your CSV
    
-   Choose your import mode
    
-   ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685650/original/zrQRJT8Wlw-M4M7Y2kZFKtx4dZ4W2FcsdQ.png?1772024121)
    
-   If applicable, select the unique field to deduplicate on  
      
    

* * *

## **Step 4: Map Columns to Fields**

  

Match each CSV column to the correct CRM field.

-   Required fields must be mapped
    
-   Unmapped columns can be ignored
    
-   Fields successfully mapped will show a green indicator
    
-   Errors or warnings will be highlighted
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685739/original/qaGZJaJaKcpSBunjjkfejWK8ONI3_z-kew.png?1772024163)

  

* * *

### **“Don’t Update Empty Values”**

  

If enabled:

-   Blank cells in your CSV will NOT overwrite existing values.
    

  

If disabled:

-   Blank cells will clear existing values (except restricted fields).
    

* * *

# **Duplicate Handling & Unique Fields**

  

If your Company or Custom Object contains unique fields:

-   You must select Record ID or one unique field as the deduplication field (if multiple are mapped)
    
-   The system checks other unique fields for conflicts
    
-   If a non-selected unique field conflicts, that row will fail
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685760/original/z1g9Q4S3C-mO0RqByyBiH5pDfeglXcoYdA.jpeg?1772024187)

This ensures clean, conflict-free data.

* * *

# **Update Empty Values Restrictions**

  

The following cannot be updated to empty:

-   Primary field
    
-   Required fields
    

  

These protections prevent accidental data loss.

* * *

# **Monitor Import Status**

  

All imports can be tracked in **Bulk Actions**.

  

From Bulk Actions you can:

-   View status (Processing, Completed, Failed)
    
-   Pause, Resume, or Cancel (while running)
    
-   View detailed statistics
    
-   Download error logs
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685790/original/NIVNFTkm6lKxOyQ6CpPZ5qDwwXmnhluQMA.png?1772024204)

  

* * *

## **Import Stats**

  

Each import provides:

  

Tabs:

-   All
    
-   Success
    
-   Error
    
-   Warning
    

  

Row-level details:

-   Line number
    
-   Record ID
    
-   Primary field
    
-   Status
    
-   Error/Warning message
    
-   Resolution guidance
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065685806/original/Tq4KKZ-u5QfR5wNyQ26j4g32T7t_j8Xuqw.png?1772024213)

  

* * *

# **Frequently Asked Questions**

  

### **Q: Can I import multiple Custom Objects at once?**

  

No. Only one Custom Object can be imported at a time.

* * *

### **Q: Can I import system fields like Created At?**

  

No. System fields cannot be modified through imports.

* * *

### **Q: What happens if unique fields conflict?**

  

That specific row will fail. The rest of the import continues.

* * *

### **Q: Can I undo an import?**

  

No. Imports cannot be reversed. Always validate your CSV before starting.

* * *

### **Q: Where do I see past imports?**

  

Go to **Bulk Actions** to view import history and statistics.

* * *

# **Related Articles**

-   [CSV File Format for Importing](https://help.gohighlevel.com/support/solutions/articles/155000005143)
    
-   [Importing Contacts Using a CSV File](https://help.gohighlevel.com/en/support/solutions/articles/155000004432)
    
-   [Importing Opportunities Using a CSV File](https://help.gohighlevel.com/en/support/solutions/articles/155000002517) 
    
-   [Managing Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000004023) 
    
-   [Managing Companies](https://help.gohighlevel.com/en/support/solutions/articles/48001223777)