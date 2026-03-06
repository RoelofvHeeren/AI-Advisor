---
title: "Vapi - Actions and Triggers in Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007349-vapi-actions-and-triggers-in-workflows"
category: "Uncategorized"
---

# Vapi - Actions and Triggers in Workflows

Connect HighLevel workflows with **VAPI (Voice AI Platform Integration)** to automate AI-powered voice assistants, calls, chats, and file handling — without third-party tools. This guide explains what the integration is, key benefits, setup steps, available triggers & actions, real-world use cases, and best practices.

  

**TABLE OF CONTENTS**

-   [What is VAPI in Workflows?](#What-is-VAPI-in-Workflows?)
    -   [VAPI → HighLevel (Triggers)](#VAPI-%E2%86%92-HighLevel-\(Triggers\))
    -   [HighLevel → VAPI (Actions)](#HighLevel-%E2%86%92-VAPI-\(Actions\))
-   [Key Benefits](#Key-Benefits)
-   [Prerequisites & Permissions](#Prerequisites-&-Permissions)
-   [Connecting Your VAPI Account](#Connecting-Your-VAPI-Account)
    -   [Connect from Workflow Builder](#Connect-from-Workflow-Builder)
    -   [Connect from Integrations Page](#Connect-from-Integrations-Page)
-   [Available Triggers (VAPI → HighLevel)](#Available-Triggers-\(VAPI-%E2%86%92-HighLevel\))
-   [Available Actions (HighLevel → VAPI)](#Available-Actions-\(HighLevel-%E2%86%92-VAPI\))
-   [Upload File – Supported File Types](#Upload-File-%E2%80%93-Supported-File-Types)
    -   [Supported File Formats](#Supported-File-Formats)
-   [Call Concurrency & Rate Limits](#Call-Concurrency-&-Rate-Limits)
    -   [Default Concurrency](#Default-Concurrency)
    -   [Increasing Concurrency](#Increasing-Concurrency)
    -   [API Rate Limits](#API-Rate-Limits)
-   [Supported Phone Numbers](#Supported-Phone-Numbers)
-   [How To Set Up VAPI in a Workflow](#How-To-Set-Up-VAPI-in-a-Workflow)
-   [Common Use Cases](#Common-Use-Cases)
    -   [Where to View Call Details](#Where-to-View-Call-Details)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Q. What is the default concurrency limit?](#Q.-What-is-the-default-concurrency-limit?)
    -   [Q. Can I increase concurrency?](#Q.-Can-I-increase-concurrency?)
    -   [Q. Can I upload multiple files?](#Q.-Can-I-upload-multiple-files?)
    -   [Q. What file types are supported?](#Q.-What-file-types-are-supported?)
    -   [Q. Can I use my own phone numbers?](#Q.-Can-I-use-my-own-phone-numbers?)
    -   [Q. Are these premium workflow steps?](#Q.-Are-these-premium-workflow-steps?)
    -   [Q. What are some of the common error causes?](#Q.-What-are-some-of-the-common-error-causes?)

* * *

## **What is VAPI in Workflows?**

VAPI allows HighLevel workflows to initiate and manage AI-powered voice and chat interactions.

There are two directions of automation:

### **VAPI → HighLevel (Triggers)**

Start a HighLevel workflow when an event occurs in VAPI (e.g., a new call is created).

### **HighLevel → VAPI (Actions)**

Trigger AI calls, chats, or file uploads inside VAPI when CRM events occur (e.g., a new lead submits a form).

This enables agencies and businesses to automate lead qualification, appointment reminders, onboarding assistance, and outbound campaigns using AI voice automation.

* * *

## **Key Benefits**

-   **Instant AI Lead Qualification** – Automatically call leads after form submission.
    
-   **CRM + AI Sync** – Update opportunities based on AI outcomes.
    
-   **Automated Appointment Confirmation** – Reduce no-shows with reminder calls.
    
-   **Knowledge-Powered Assistants** – Upload documents to enhance AI responses.
    
-   **Reduced Manual Work** – Eliminate external webhook or Zapier setups.
    

* * *

## **Prerequisites & Permissions**

Before using VAPI in workflows:

-   Access to **Automation → Workflows**
    
-   A connected and active VAPI account
    
-   Premium Workflow features enabled
    

* * *

## **Connecting Your VAPI Account**

### **Connect from Workflow Builder**

1.  Go to **Automation → Workflows**
    
2.  Add any VAPI trigger or action
    
3.  Click **Connect Now**
    
4.  Authorize your VAPI account
    

### **Connect from Integrations Page**

1.  Go to **Settings → Integrations**
    
2.  Select **VAPI**
    
3.  Click **Connect**
    
4.  Complete authentication
    

Once connected, VAPI steps will load automatically in the workflow builder.

**How to Find Your VAPI API Key**

1.  Go to **[dashboard.vapi.ai](http://dashboard.vapi.ai)** and log in to your account.
2.  Open the **Account** menu.
3.  Click on **“API Keys.”**
4.  Generate a new key (if needed) and copy your **Private API Key**.

* * *

## **Available Triggers (VAPI → HighLevel)**

| Trigger | Description |
| --- | --- |
| **New Assistant** | Fires when a new AI assistant is created in VAPI |
| **New Call** | Fires when a new call is initiated in VAPI |
| **New File** | Fires when a knowledge file is uploaded to VAPI |

Use filters to limit workflow enrollments if needed. These triggers work on polling every 5 minutes.

* * *

## **Available Actions (HighLevel → VAPI)**

| Action | Description |
| --- | --- |
| **Create a Call** | Initiate an AI-powered voice call |
| **Create Chat** | Start a new AI chat session |
| **Upload File** | Upload a knowledge file to power AI assistants |
| **Delete Call Data** | Remove stored call data |
| **Delete Chat Data** | Remove chat session data |
| **Delete File** | Remove a knowledge file |
| **Update Call Name** | Modify call metadata |
| **Find Call** | Retrieve call details by ID |

* * *

## **Upload File – Supported File Types**

Only **one file can be uploaded per Upload File action step**.

If multiple files are required, add multiple Upload File steps in sequence.

### Supported File Formats

-   Markdown (.md)
    
-   PDF (.pdf)
    
-   Text files (.txt, .log)
    
-   CSV / TSV (.csv, .tsv)
    
-   HTML / CSS / JS / TS (.html, .css, .js, .ts)
    
-   XML (.xml)
    
-   JSON (.json)
    
-   YAML (.yaml, .yml)
    
-   Microsoft Word (.doc, .docx)
    

These files are typically used as knowledge sources for AI assistants.

* * *

## **Call Concurrency & Rate Limits**

### Default Concurrency

Every VAPI account includes **10 concurrent call slots by default**.

This means:

-   Only 10 calls can run simultaneously.
    
-   Additional calls are automatically queued and retried as slots become available.
    

For example:  
If 25 calls are triggered at the same time:

-   10 calls start immediately.
    
-   15 calls wait in queue until a slot frees up.
    

* * *

### Increasing Concurrency

You can increase concurrency via:

**VAPI Dashboard → Settings → Billing → Reserved Concurrency**

Additional billing may apply depending on your subscription.

* * *

### API Rate Limits

In addition to concurrency limits, API rate limits may apply depending on your VAPI subscription tier.

Best practices for high-volume campaigns:

-   Avoid triggering hundreds of calls simultaneously.
    
-   Use Wait steps in workflows.
    
-   Stagger outbound automation.
    
-   Monitor Execution Logs for API errors.
    

* * *

## **Supported Phone Numbers**

Currently, only phone numbers purchased directly inside VAPI are supported.

The following are not supported:

-   Custom Twilio numbers (Coming soon)
    
-   HighLevel phone numbers (Coming soon)
    
-   Imported external numbers (Coming soon)
    

If you attempt to initiate a call using an unsupported number, the call will fail.

* * *

## **How To Set Up VAPI in a Workflow**

1.  Go to **Automation → Workflows**
    
2.  Create or open an existing workflow
    
3.  Choose a trigger (e.g., Form Submitted, Appointment Created, Pipeline Stage Changed)
    
4.  Add a VAPI action (e.g., Create a Call)
    
5.  Map dynamic fields using merge values such as:
    
    -   {{contact.first\_name}}
        
    -   {{contact.phone}}
        
    -   {{opportunity.name}}
        
    -   {{custom\_values}}
        
6.  Add conditions or Wait steps if needed
    
7.  Test in draft mode
    
8.  Click **Publish**
    

* * *

## Common Use Cases

**1\. Instant AI Lead Qualification**  
Trigger: Form Submitted → Action: Create Call  
If AI result = Qualified → Move to Sales Stage  
If Unqualified → Add to Nurture Campaign

**2\. AI Appointment Reminder**  
Trigger: Appointment Created → Wait (before appointment) → Create Call  
If no answer → Send SMS reminder

**3\. AI Onboarding Assistant**  
Trigger: Deal Closed Won → Upload File (Onboarding PDF) → Create Chat → Internal Notification

**4\. Automated Data Cleanup**  
Trigger: Deal Closed Lost → Find Call → Delete Call Data → Delete Chat Data

* * *

### **Where to View Call Details**

HighLevel confirms call initiation.

For detailed call-level intelligence, go to the **VAPI Dashboard**.

The VAPI dashboard includes:

-   Call transcript
    
-   Call duration
    
-   Call latency
    
-   AI interaction logs
    
-   Recording (if enabled)
    
-   Call outcome and status
    
-   Assistant behavior and analytics
    

All detailed call data is stored inside VAPI.

* * *

## Frequently Asked Questions

### Q. What is the default concurrency limit?

A. 10 concurrent calls per VAPI account.

### Q. Can I increase concurrency?

A.Yes, through Reserved Concurrency in VAPI billing settings or the enterprise plan of VAPI. This has to be configured in the VAPI dashboard.

### Q. Can I upload multiple files?

A.Only one file per Upload File step. Add multiple steps if needed.

### Q. What file types are supported?

A. .md, .pdf, .txt, .log, .csv, .tsv, .html, .css, .js, .ts, .xml, .json, .yaml, .yml, .doc, .docx

### Q. Can I use my own phone numbers?

A. No. Only phone numbers purchased directly inside VAPI are supported.

### Q. Are these premium workflow steps?

A.Yes. VAPI actions and triggers follow Premium Workflow billing. These will be charged at default premium actions and triggers rate.

### Q. What are some of the common error causes?

A. 

-   Concurrency limit reached
    
-   Unsupported phone number
    
-   Integration disconnected
    
-   Missing assistant configuration
    
-   Invalid phone format
    
-   API rate limit exceeded
    

##