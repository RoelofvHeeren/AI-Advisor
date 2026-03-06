---
title: "PDF Generation for Invoices and Receipts"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005216-pdf-generation-for-invoices-and-receipts"
category: "Uncategorized"
---

# PDF Generation for Invoices and Receipts

This article outlines the recent upgrade to the PDF generation pipeline for invoices and receipts in HighLevel. This update enhances performance, eliminates timeouts, and reduces support overhead, resulting in a faster and more reliable user experience across all PDF-related workflows.

**TABLE OF CONTENTS**

-   [What is the PDF Generation Pipeline?](#What-is-the-PDF-Generation-Pipeline?)
-   [Key Benefits of the PDF Pipeline](#Key-Benefits-of-the-PDF-Pipeline)
-   [How To Experience the New PDF Engine](#How-To-Experience-the-New-PDF-Engine)
-   [Performance Comparison](#Performance-Comparison)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

  

* * *

## What is the PDF Generation Pipeline?

The PDF generation pipeline is the system responsible for producing downloadable and email-ready PDF documents for invoices and receipts. It powers user actions such as downloading an invoice directly from the interface or triggering receipt delivery through automated workflows.

This pipeline is essential for ensuring end customers receive timely and accurate documentation of their payments and billing.

  

## Key Benefits of the PDF Pipeline

The re-engineered pipeline delivers substantial improvements in speed, reliability, and customer satisfaction. These enhancements directly impact both manual downloads and automated email workflows involving invoices and receipts.

-   Average PDF generation time reduced by approximately 80%  
      
    
-   P95 latency reduced by 75%, ensuring a faster response even in higher-load scenarios  
      
    
-   Timeout-related failures have been completely eliminated in production  
      
    
-   All invoice and receipt workflows now complete more quickly and reliably  
      
    
-   Reduction in support tickets related to failed or missing PDFs  
      
    
-   Increased customer trust and satisfaction due to near-instantaneous document delivery  
      
    

## How To Experience the New PDF Engine

Users do not need to take any manual action to take advantage of the updated PDF pipeline. The improvements have been rolled out across the platform and are already in effect for all relevant use cases.

-   All invoice and receipt downloads initiated through the interface are now significantly faster.  
      
    
-   Automated workflows that email receipts or invoices to contacts now complete without timeout errors.  
      
    
-   No configuration changes or updates are required from users.  
      
    

## Performance Comparison

The following table summarizes the performance improvements resulting from the new PDF generation pipeline:

<table style="border:none;border-collapse:collapse;"><colgroup><col width="180"><col width="106"><col width="98"><col width="119"></colgroup><tbody><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Metric</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Before</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">After</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Improvement</span></p></td></tr><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Average Generation Time</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">~14.8 seconds</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">2.97 seconds</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">80% faster</span></p></td></tr><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">P95 Latency</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">~19.5 seconds</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">4.8 seconds</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">75% faster</span></p></td></tr><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Timeout Failures</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">~1%</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">0%</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">100% reliability</span></p></td></tr></tbody></table>

##   

* * *

## Frequently Asked Questions

Q: Do I need to enable or configure anything to use the improved pipeline?  
 No. The new pipeline is already active and applies to all workflows and downloads involving invoice and receipt PDFs.

Q: What if a PDF fails to generate or is delayed?  
 Since the rollout, timeout-related issues have been eliminated. Any new issues may be unrelated and should be reported to support for further investigation.

Q: Are existing workflows automatically upgraded?  
 Yes. Any workflow that includes invoice or receipt PDF generation or email actions will automatically benefit from the performance improvements.

Q: Can I observe the difference in performance?  
 Yes. Users are encouraged to manually download an invoice or trigger a receipt email via workflow to experience the improved speed.

Q: Will this change affect other document types?  
 This update specifically applies to invoice and receipt PDFs. Other document types are not affected by this release.