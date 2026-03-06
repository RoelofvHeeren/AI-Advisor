---
title: "AI Employee - Knowledge Base Tables"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006637-ai-employee-knowledge-base-tables"
category: "Uncategorized"
---

# AI Employee - Knowledge Base Tables

  

  

Give your AI Agents instant access to tables! Table Search in HighLevel Knowledge Base lets you upload CSV files and query them with natural-language questions, turning static rows of data into dynamic knowledge your bots can use during conversations.

* * *

**TABLE OF CONTENTS**

-   [What is Table Search in Knowledge Base?](#What-is-Table-Search-in-Knowledge-Base?)[](#Key-Benefits-of-Table-Search-in-Knowledge-Base)
-   [Key Benefits of Table Search in Knowledge Base](#Key-Benefits-of-Table-Search-in-Knowledge-Base)[](#How-to-Setup-Table-Search-in-Knowledge-Base)
-   [How to Setup Table Search in Knowledge Base](#How-to-Setup-Table-Search-in-Knowledge-Base)[](#CSV-File-Requirements)
-   [CSV File Requirements](#CSV-File-Requirements)[](#Semantic-Search-Intelligence)
-   [Semantic Search Intelligence](#Semantic-Search-Intelligence)[](#Smart-Table-Processing)
-   [Smart Table Processing](#Smart-Table-Processing)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Table Search in Knowledge Base?**

  

Table Search adds a new “**Table** **Source**” type to HighLevel Knowledge Base. By ingesting CSV files (up to 50,000 rows, 500 columns and select the 20 most relevant columns), the platform semantically indexes every record so your AI bots can answer questions about customers, inventory, transactions, or any other structured data you provide. Unlike keyword search, HighLevel applies semantic similarity matching, allowing users to ask plain-English questions and receive context-aware results.

* * *

## **Key Benefits of Table Search in Knowledge Base**

  

-   **Natural-language queries:** Ask plain-English questions on table data without formulas or filters.  
      
    
-   **Semantic search intelligence:** Returns accurate, context-aware answers from relevant rows and columns.  
      
    
-   **Large CSV support:** Handles up to 50,000 rows and 500 columns; select the 20 most relevant for indexing.  
      
    
-   **Beyond web/docs:** Surfaces structured data that web pages and documents don’t capture well.  
      
    
-   **Bot enablement:** Lets AI employees handle customer records, product catalogs, KPIs, and similar tabular use cases.
    

* * *

## **How to Setup Table Search in Knowledge Base**

  

1.  Open **AI Agents** → **Knowledge Base**.  
      
    ![](https://jumpshare.com/share/BEnlIdlnCRxrdC9eSszT+/Screen+Shot+2026-01-07+at+7.02.31+PM.png)  
      
    
2.  **Edit** an **existing** **Knowledge** **Base**, or click **Create** **Knowledge** **Base** and give it a name & description.  
      
    ![](https://jumpshare.com/share/kJHVNu71XsnEDwTtYtLI+/Screen+Shot+2026-01-07+at+7.04.46+PM.png)  
      
    
3.  Click **Add Source**, then choose **Table****s**.  
      
    ![](https://jumpshare.com/share/0FWEBd3hReS7yWyJ2dQ9+/Screen+Shot+2026-01-07+at+7.05.59+PM.png)  
      
    
4.  Upload your **CSV** **file** using drag-and-drop or file picker. (Max **50** **MB**).  
      
    ![](https://jumpshare.com/share/oKskwpnUnQiL6qZVb5km+/Screen+Shot+2026-01-07+at+7.07.14+PM.png)  
      
    
5.  **Review** detected **columns**; adjust data types if needed.  
      
    ![](https://jumpshare.com/share/gL8ymbdP17XBITWl1PoS+/Screen+Shot+2026-01-07+at+7.09.28+PM.png)  
      
    
6.  Click **Done** to index the table. Progress shows chunking status.  
      
    
7.  Attach the Knowledge Base to your AI Agent (Chat, Voice, or Workflow AI) as usual.  
      
    
8.  Test a sample question like “Which customers have overdue invoices?” to confirm results.  
      
    ![](https://jumpshare.com/share/4MxvShbziO8Htfs2lkob+/Screen+Shot+2026-01-07+at+7.12.44+PM.png)

* * *

## **CSV File Requirements**

  

Understanding the file specifications ensures a flawless upload.  
  

-   **Format:** **.csv** only (UTF-8 recommended)  
      
    
-   **Size limits:** **50,000 rows** and **500 columns** per location (select the 20 most relevant columns), upload files up to **50 MB**.  
      
    
-   **Header row:** First row must contain column names  
      
    
-   **Data types:** Automatic schema detection with 80 % confidence threshold  
      
    
-   **Clean data:** Remove null values, hidden formulas, merged cells, etc

  

The CSV can be rejected at several points. For example, if the format of the CSV is accepted, the data itself might still contain an error.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756639/original/urfsUUfSsQNa9gkEA3ky9QT_lVhFQVjZzg.png?1760136946)

  
  

In this case you can inspect the CSV manually in a spreadsheet program or even a text editor.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756630/original/9pUQ1ro4k9ZiwjCvuA_OWRJEXhN18INQZw.png?1760136905)

* * *

## **Semantic Search Intelligence**

  

HighLevel converts each table row into vector embeddings so the bot can “understand” meanings rather than exact words. This enables queries like “Show me customers who complained about billing” or “Which orders shipped overnight last week?” The engine compares the user’s question to every row chunk and returns the most semantically similar matches—no SQL needed.

* * *

## **Smart Table Processing**

  

Behind the scenes, HighLevel:  
  

-   Detects column types (text, number, date, etc.) with 80 % accuracy  
      
    
-   Chunks rows into groups of five (max 2,000 characters) for efficient indexing  
      
    
-   Stores chunk metadata so answers can reference the correct records

* * *

## **Frequently Asked Questions**

  

**Q: Can I upload Excel (.xlsx) files?**

Not yet—export or save your sheet as CSV before uploading.

  

**Q: How soon are new CSV uploads available to bots?**

Typically within a few minutes—the indexing progress bar will show when processing is complete.

  

**Q: Does Table Search support filters or sorting in the query?**

Filtering, comparison, and sorting features are coming soon; for now, ask descriptive questions or refine with follow-ups.

  

**Q: Will table data appear in the Response Info sidebar?**

Yes—rows that informed the answer are cited, so you can verify or edit them on the spot.

  

**Q: Can I restrict table access to specific bots?**

Yes—only bots linked to the Knowledge Base containing your Table Source can query it.

  

**Q: How is privacy handled for sensitive CSV data?**

Table Sources inherit existing Knowledge Base security; only users with access to that Knowledge Base can see or query the data.

* * *

## **Related Articles**

  

-   [Conversation AI - New Knowledge Sources & Quality Upgrades](https://help.gohighlevel.com/en/support/solutions/articles/155000006456) 
-   [Knowledge Base Integration for Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000005266) 
-   [View & Edit AI Response Info in Conversations](https://help.gohighlevel.com/en/support/solutions/articles/155000004183)