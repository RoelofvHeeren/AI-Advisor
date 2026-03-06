---
title: "Manus – Actions & Triggers in Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007351-manus-actions-triggers-in-workflows"
category: "Uncategorized"
---

# Manus – Actions & Triggers in Workflows

Connect HighLevel workflows with **Manus** to create, manage, and automate AI-powered tasks directly from your CRM.

This integration allows you to trigger workflows based on Manus task activity and perform task operations (create, update, fetch, delete, or continue tasks) from within HighLevel.

* * *

## **What is Manus in Workflows?**

Manus is a task-based AI system. Each task:

1.  Starts with an initial prompt
    
2.  Processes structured AI logic
    
3.  Returns a response or output
    
4.  Can be continued with additional prompts
    

With this integration, HighLevel can both:

-   Send instructions to Manus
    
-   React to task lifecycle events
    

* * *

## **Available Triggers (Manus → HighLevel)**

| Trigger | Description |
| --- | --- |
| **New Task Created** | Fires when a new task is created in Manus |
| **Task Stopped** | Fires when a Manus task is stopped or completed |

These triggers fetches updates based on AI task progress.

Triggers fire only when a task is created through a workflow action. It will not fire when a task is created from the Manus app.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064998923/original/fsvO2Gl6blXIZeszcQDbgat-9aLbmdJGOQ.png?1771243363)

* * *

## **Available Actions (HighLevel → Manus)**

| Action | Description |
| --- | --- |
| **Create Task** | Create a new task in Manus |
| **Get Task** | Retrieve details of a specific task |
| **Update Task** | Modify task metadata or parameters |
| **Fetch Tasks** | Retrieve a list of tasks |
| **Delete Task** | Remove a task |
| **Continue a Task with a Prompt** | Add a follow-up prompt to an existing task |

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064999064/original/40rgbcvq2v2gxXaNpIRP6A1VEmNp_aq1CQ.jpeg?1771243403)

* * *

## **Connecting Your Manus Account**

### Connect from Workflow Builder

1.  Go to **Automation → Workflows**
    
2.  Add a Manus action or trigger
    
3.  Click **Connect Now**
    
4.  Authorize your Manus account with API key
    

### Connect from Integrations Page

1.  Go to **Settings → Integrations**
    
2.  Select **Manus**
    
3.  Click **Connect** 
    
4.  Complete authentication with API key
    

Once connected, Manus actions and triggers will be visible inside workflows.

**Getting Your Manus API Key**

1.  Navigate to **Manus API Settings**.
    
2.  Click on **Create New**.
    
3.  Copy the generated API key.
    
4.  Paste the key into the API key field when prompted.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064998866/original/0QpR_uN37jIFiJZ8jCdlLKy9B2VmKsyzow.png?1771243333)

  

* * *

## **How to Use Manus in a Workflow**

1.  Go to **Automation → Workflows**
    
2.  Create or open a workflow
    
3.  Select a trigger (e.g., Form Submitted, Pipeline Stage Changed)
    
4.  Add a Manus action (e.g., Create Task)
    
5.  Map merge fields such as:
    
    -   {{contact.first\_name}}
        
    -   {{contact.email}}
        
    -   {{opportunity.name}}
        
    -   {{custom\_values}}
        
6.  Optionally store the returned Task ID in a custom field
    
7.  Add conditions or Wait steps
    
8.  Test and Publish
    

* * *

## **Best Practice: Storing Task IDs**

After creating a task, store the returned **Task ID** in a custom field.

You can later use it to:

-   Get Task
    
-   Continue Task
    
-   Update Task
    
-   Delete Task
    

This enables multi-step AI workflows.

* * *

# Common Use Cases

Below are practical agency and business examples.

## 1\. Proposal Generation + ClickUp Review Task

**Goal:** Auto-generate proposal when deal reaches “Proposal Requested” and create review task in ClickUp.

**Trigger**  
Pipeline Stage Changed → Stage = Proposal Requested

**Workflow Steps**

1.  Create Task (Manus)  
    Prompt: Generate a proposal for {{contact.first\_name}} for {{opportunity.name}} including scope, deliverables, pricing, and timeline.
    
2.  Store Task ID → `manus_proposal_task_id`
    
3.  Wait (1–2 min)
    
4.  Get Task (Manus)
    
5.  Create Internal Note (HighLevel) → Attach draft
    
6.  Create Task (ClickUp) → “Review Proposal – {{opportunity.name}}”
    
7.  Internal Notification → Assigned sales rep
    

**Outcome:** Sales gets a ready draft. Delivery sees task instantly in ClickUp.

* * *

## 2\. Lead Research + Google Contacts Enrichment

**Goal:** Auto-research inbound leads before sales outreach.

**Trigger**  
Form Submitted → Inbound Lead Form

**Workflow Steps**

1.  Create Task (Manus)  
    Prompt: Research {{custom.company\_name}}. Summarize industry, size, competitors, and likely pain points.
    
2.  Store Task ID
    
3.  Wait
    
4.  Get Task (Manus)
    
5.  Create Internal Note (HighLevel)
    
6.  Update Contact (Google Contacts) → Add research summary
    
7.  Internal Notification → Sales rep
    

**Outcome:** Rep starts call with AI-generated insights. CRM and Google Contacts both enriched.

* * *

## 3 Website Scraping & Personalized Prospecting (Opportunity-Based)

### Goal

Automatically research a prospect’s company website from an Opportunity and generate personalized outbound messaging.

* * *

### Trigger

-   Pipeline Stage Changed → “Prospecting”
    
-   OR Opportunity Created
    

Store website in an Opportunity custom field:  
`{{opportunity.website}}`

* * *

### Step 1: Create Task (Manus) – Website Analysis

Add **Create Task (Manus)**.

**Prompt Example:**

`Analyze this website: {{opportunity.website}}  Extract: - Positioning - Core services - Target audience - Differentiators  Then write 1 personalized cold email referencing their positioning and services. Keep it concise and consultative.`

* * *

### Step 2: Store Task ID

Save to: `manus_scrape_task_id`

* * *

### Step 3: Wait (1–2 min) → Get Task

Use **Get Task (Manus)** to retrieve:

-   Website insights
    
-   Personalized email draft
    

* * *

### Step 4: Use the Output

-   Create internal note on Opportunity
    
-   Update Opportunity custom fields
    
-   Send generated email
    
-   Create follow-up task for SDR
    

* * *

### Outcome

When an Opportunity enters Prospecting, the system auto-researches the company and drafts tailored outreach — reducing manual SDR effort and improving personalization at scale.

* * *

# 4 Competitor Ad Scraping + AI Content Generation (Manus + OpenRouter)

### Goal

Scrape competitor ads, extract messaging patterns, and generate differentiated ad creatives automatically.

* * *

### Trigger

-   Pipeline Stage Changed → “Content Strategy”
    
-   OR Opportunity Tag Added → “Ad Research”
    

Store competitor URLs in:  
`{{opportunity.competitor_urls}}`

* * *

### Step 1: Create Task (Manus) – Scrape & Analyze Ads

Add **Create Task (Manus)**.

**Prompt Example:**

`Scrape ads from:  {{opportunity.competitor_urls}}  Extract: - Hooks - Value propositions - Offers - CTAs - Emotional triggers  Summarize common themes and identify positioning gaps.`

* * *

### Step 2: Store Task ID

Save to: `manus_ad_research_task_id`

* * *

### Step 3: Wait → Get Task

Retrieve structured competitor insights.

* * *

### Step 4: Generate Creative (OpenRouter Action)

Add **OpenRouter Action**.

**Prompt Example:**

`Using this competitor analysis:  {{manus_output}}  Create: - 3 Facebook ad variations - 2 LinkedIn ads - 1 landing page section  Differentiate clearly from competitors. Tone: Conversion-focused and authoritative.`

* * *

### Step 5: Route Output

-   Create internal note
    
-   Create “Review Ads” task
    
-   Push to ClickUp/Notion
    
-   Notify marketing team
    

* * *

### Outcome

When an Opportunity enters Content Strategy, competitor ads are analyzed automatically and differentiated creatives are generated — creating an AI-driven competitive intelligence and content engine inside HighLevel.

  

* * *

# Frequently Asked Questions

**Q: Where can I view the full output of a Manus task?**  
Detailed AI responses, prompt history, iterations, and lifecycle status are available in the Manus dashboard. HighLevel confirms task initiation, API response, and the returned Task ID, while Manus stores the full execution details.

**Q: How do I retrieve the output of a task inside HighLevel?**  
Use the “Get Task” action and reference the stored Task ID to fetch the latest task details.

**Q: What are common reasons a task might fail?**  
Integration disconnected, invalid Task ID, task already stopped, missing required prompt input, or API authorization failure. Check Automation → Workflows → Execution Logs for error details.

**Q: Do I need a paid Manus plan to use this integration?**  
The integration works with Manus accounts, but usage limits and advanced features depend on your Manus subscription.

**Q: Can I continue a task multiple times?**  
Yes, as long as the task remains active.

**Q: Can I update a task after creation?**  
Yes, use the “Update Task” action.

**Q: Are Manus actions and triggers premium workflow steps?**  
Yes, they follow HighLevel Premium Workflow billing rules.

**Q: Is there a limit to how many tasks I can create?**  
Task limits depend on your Manus subscription plan and API usage caps.

**Q : Does HighLevel include AI credits for Manus?**  
No. HighLevel does not include AI credits for Manus. AI usage is billed by Manus, along with standard automation rates in HighLevel.

##