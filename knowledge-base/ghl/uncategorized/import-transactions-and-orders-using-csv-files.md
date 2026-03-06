---
title: "Import Transactions and Orders using CSV files"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005544-import-transactions-and-orders-using-csv-files"
category: "Uncategorized"
---

# Import Transactions and Orders using CSV files

This article will show you how to import historical transactions and orders into your GHL sub-account using CSV files. This allows businesses to centralize financial data from external platforms, keep dashboards accurate, and manage revenue reporting with ease.

  

**TABLE OF CONTENTS**

-   [What is Transactions & Orders Import?](#What-is-Transactions-&-Orders-Import?)
-   [Key Benefits of Importing Transactions & Orders](#Key-Benefits-of-Importing-Transactions-&-Orders)
-   [How to Import Transactions](#How-to-Import-Transactions)
-   [How to Import Orders](#How-to-Import-Orders)
-   [CSV File Field Formats](#CSV-File-Field-Formats)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Next Steps](#Next-Steps)

* * *

# What is Transactions & Orders Import?

GHL now allows businesses to bulk import their past transactions and orders using CSV files. This feature helps consolidate historical financial data into your sub-account, ensuring your dashboards and contact timelines reflect accurate revenue history.

  

## Key Benefits of Importing Transactions & Orders

Importing allows businesses to maintain clean, centralized financial records. Here’s what you can gain from this feature:

-   Easily import historical data from previous platforms.
    
-   Automatically impact revenue dashboards and metrics.
    
-   Create or update customer records with import.
    
-   Separate timestamps for data ingestion vs actual transaction time.
    
-   Simplified preview and validation before upload.
    
-   Built-in format guides and downloadable sample CSVs.
    

  

## How to Import Transactions

Importing transactions lets you bring in data that reflects actual payment events, without necessarily creating linked order items.

1.  Navigate to **Payments > Transactions**.
    
2.  Click the **Import** button.
    
3.  Download the **Sample CSV** and ensure your data matches the required format.
    
4.  Upload your file and review the **preview modal** for validation.
    
5.  Confirm the import.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048479428/original/8zRY5lm6EdGJmGSyl0fa1mna_mBBuzAu0Q.png?1750253844)
    

**Note:** Transactions impact revenue metrics immediately once added.

  

  

## How to Import Orders

Orders represent itemized sales and automatically generate a linked transaction entry.

1.  Go to **Payments > Orders**.
    
2.  Select **Import**, then upload a properly formatted CSV.
    
3.  Validate your data in the preview.
    
4.  Each order record will auto-create a transaction and impact revenue.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048479458/original/xJI-izG6J90dtTt715A6igSaT5OPjE3xaA.png?1750253871)
    

**Note:** Both order and transaction entries will reflect on dashboards and reporting.

  

  

## CSV File Field Formats

Understanding the required structure for import ensures your data uploads without errors.

-   Field names must be **exactly** as defined.
    
-   Customer details must be included to match or create contacts.
    
-   Dates for execution and GHL ingestion must be properly set.
    

* * *

## Frequently Asked Questions

**Q: Will contacts be duplicated if they're already in GHL?**  
No. GHL attempts to match contacts via email or phone before creating new records.

**Q: Can I backdate a transaction?**  
Yes. You can specify the transaction execution date separately from when it’s added to GHL.

**Q: What happens if my CSV has errors?**  
You’ll see a preview highlighting any validation issues before proceeding with import.

**Q: Can I import refunds or voided transactions?**  
Not at this time. Only successful, completed transactions/orders are supported.

**Q: Does importing affect revenue tracking?**  
Yes. Revenue and other financial dashboards update based on your imports.

### Next Steps

-   Explore the Revenue Dashboard to confirm data impact.
    
-   Review your Contact timelines for imported activity.
    
-   Setup automated workflows that trigger on new orders or transactions.