---
title: "Import Invoices Using CSV"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005218-import-invoices-using-csv"
category: "Uncategorized"
---

# Import Invoices Using CSV

This article will show you how to quickly import invoices from external platforms using a CSV file. Whether you're migrating from another system or organizing historical billing data, this feature will save you hours of manual work.

**TABLE OF CONTENTS**

-   [What is CSV Invoice Import?](#What-is-CSV-Invoice-Import?)
-   [Key Benefits of CSV Invoice Import](#Key-Benefits-of-CSV-Invoice-Import)
-   [How to Import Invoices Using CSV](#How-to-Import-Invoices-Using-CSV)
-   [Tax Mapping](#Tax-Mapping)
-   [Automated Import Summary Email](#Automated-Import-Summary-Email)
-   [Important Notes](#Important-Notes)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## What is CSV Invoice Import?

CSV Invoice Import allows users to bring external invoice data—such as spreadsheets or exports from other platforms—directly into their HighLevel account. During the import, you can map essential fields such as issue date, due date, and taxes, and receive an automated summary of the import results. This enables a smooth transition from legacy systems and helps consolidate all billing information into a single location for streamlined management.

## Key Benefits of CSV Invoice Import

Importing invoices using a CSV file provides a range of efficiency and accuracy benefits that streamline operations and eliminate redundant data entry.

-   Quickly migrate invoice data from other billing systems or spreadsheets.  
      
    
-   Map essential fields such as issue dates, due dates, and tax values.  
      
    
-   Automatically receive a post-import email summary for transparency.  
      
    
-   Reduce the risk of manual entry errors.  
      
    
-   Improve reporting accuracy by centralizing invoice records in one location.  
      
    

## How to Import Invoices Using CSV

Importing invoices is a straightforward process that involves uploading your data, mapping it correctly, and reviewing the results. Follow these steps to complete the import.

1.  Navigate to Payments → Invoices & Estimates.  
      
    
2.  Click the \+ New button located in the top right corner.  
      
    
3.  Select Import Invoices using CSV from the dropdown menu.  
      
    
4.  Download the sample CSV file to understand the required column structure.  
      
    
5.  Prepare your CSV file by matching the sample format.  
      
    
6.  Ensure all applicable tax rates are already created in the platform by visiting Settings → Taxes.  
      
    
7.  Upload your CSV file.  
      
    
8.  Map each column in your CSV to the appropriate invoice field, including date fields (issue date, due date) using the correct date format.  
     Screenshot: Field mapping interface with dropdowns for CSV column matching.  
      
    
9.  The system will detect any tax-related columns and prompt you to map them to existing tax rates.  
     Screenshot: Tax mapping section showing dropdowns to match CSV tax names to system-defined tax rates.  
      
    
10.  Click Start Import to begin the process.  
      Screenshot: Green confirmation banner displaying successful initiation of import.  
       
     
11.  You will receive an Invoice Import Summary email containing details of the imported and failed invoices.  
       
     

## Tax Mapping

Proper tax mapping ensures that imported invoices reflect accurate tax values consistent with your existing tax configurations.

When the system detects tax-related columns during import:

-   Each detected column must be matched to a tax rate previously created in Settings → Taxes.  
      
    
-   If a matching tax rate does not exist, it must be added before completing the mapping process.  
      
    
-   The import process will pause if a tax field remains unmapped, ensuring no inaccurate data is imported.  
      
    

## Automated Import Summary Email

After the import is completed, an automated summary email will be sent to your registered email address. This message provides:

-   A count of successfully imported invoices.  
      
    
-   A detailed list of failed entries along with the specific reasons for failure.  
      
    
-   A CSV file attachment showing each invoice row's import status.  
      
    

## Important Notes

These key behaviors distinguish imported invoices from those created directly within the platform.

No Automated Reminders  
 Imported invoices will not trigger automated reminder emails or text messages. Reminder workflows will only apply to new invoices manually created inside the platform.

Late Fees and Tips  
Imported invoices will follow your configured default or global settings for late fees and tips. If you wish to disable these features for specific invoices, you must manually edit them after import.

* * *

## Frequently Asked Questions

Q: Can I import invoices with multiple tax types?  
 Yes. As long as each tax type is properly labeled in your CSV file and already exists in your account under Settings → Taxes, the system will allow you to map and import them accordingly.

Q: Will the imported invoices trigger emails or notifications to clients?  
 No. Imported invoices are treated as historical records and will not trigger any reminder or notification emails.

Q: Can I use the import tool to update or overwrite existing invoices?  
 No. The CSV import tool is only for creating new invoices. It cannot update or replace previously created invoices.

Q: What if some rows fail during import?  
 Any rows that fail to import will be listed in the summary email with specific reasons for each failure, such as an invalid date format or unmatched tax value.

Q: Is there a limit to the number of invoices I can import at one time?  
 While there is no strict upper limit, we recommend importing invoices in batches of 500 or fewer to ensure optimal performance and easier error management.