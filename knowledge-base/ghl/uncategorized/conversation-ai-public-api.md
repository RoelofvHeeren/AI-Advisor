---
title: "Conversation AI Public API"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api"
category: "Uncategorized"
---

# Conversation AI Public API

  

  

HighLevel’s Conversation AI API gives developers programmatic control over AI agents, actions, and conversation generations. Use secure tokens and granular scopes to automate agent setup, integrate with external apps, and export conversation data for analytics or compliance. This guide explains what the API is, the benefits, authentication options (PIT & JWT), endpoint families, and step-by-step setup with screenshots.

* * *

**TABLE OF CONTENTS**

-   [What is the Conversation AI API?](#What-is-the-Conversation-AI-API?)
    -   [Key Benefits of Conversation AI API](#Key-Benefits-of-Conversation-AI-API)
    -   [Authentication (PIT & JWT)](#Authentication-\(PIT-&-JWT\))
    -   [API Documentation](#API-Documentation)
        -   [Actions](#Actions)
        -   [Agents](#Agents)
        -   [Generations](#Generations)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the Conversation AI API?**

  

Conversation AI API exposes the same core capabilities available in the Conversation AI UI (creating and managing agents, attaching actions, and pulling AI response details) so your team can automate configuration and connect Conversation AI to your own systems. Using this API, you can provision agents at scale, script action updates, and retrieve message-level generation data for reporting and audits.

* * *

## **Key Benefits of Conversation AI API**

  

Understanding practical benefits helps you decide when to use the API versus the UI. These points highlight the outcomes teams typically automate: faster provisioning, consistent configuration at scale, and reliable access to detailed conversation data.

  

-   Faster onboarding: Automate agent creation and action attachment for new locations or clients in minutes.  
      
    
-   Scalable configuration: Apply consistent agent settings and actions across many sub-accounts via scripts or CI/CD jobs.  
      
    
-   Deeper analytics: Retrieve generations (AI response details) to power dashboards, QA workflows, audits, and compliance exports.  
      
    
-   Flexible integration: Orchestrate HighLevel with your internal tools—trigger workflows, track outcomes, and log events externally.  
      
    
-   Least‑privilege security: Use read-only or write scopes to limit access precisely to what your integration needs.

* * *

## **Authentication (PIT & JWT)**

  

Choosing the right auth method ensures reliable, secure access. Personal Integration Tokens (PIT) are quick to generate and scope, while JSON Web Tokens (JWT) support OAuth-based app flows. Both can be used for Conversation AI API access.

  

Open Settings → Private Integrations in your HighLevel sub‑account (location).

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757617/original/ts1j0byLnjbb0jt99rFE5zAeNMciISFLfw.png?1760142557)

  

Give it basic info (name and description).

  

Select the Conversation AI scopes.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757647/original/cL1YDtaxgdGf1N_fDfvyZiHWKMg074PACQ.png?1760142690)

  

Create the token and make a copy of it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757653/original/aM2uidnmv1wZAV2tiKGaxvONRM7KugMBpQ.png?1760142733)

  

Maintain and use the token appropriately.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757662/original/1_4zzbMedmTiu_KnHwljW4LoQPj0fk235Q.png?1760142791)

* * *

## **API Documentation**

  

View the full API Documentation here [Marketplace API 2.0 Conversation AI Actions](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/actions)

  

### **Actions**

  

-   Attach Action To Agent
-   List Actions For An Agent
-   Get Action By ID
-   Update Action
-   Remove Action From Agent
-   Update Followup Settings

  

### **Agents**

  

-   Create An Agent
-   Search Agents
-   Update Agent
-   Get Agent
-   Delete Agent

  

### **Generations**

  

-   Get Generation Details

* * *

## **Frequently Asked Questions**

  

**Q: Do I need a Sub‑Account or Agency token for Conversation AI?** 

A: Use a Sub‑Account token so calls act within the correct location context.

  

**Q: Can I use both PIT and JWT?** 

A: Yes. You can authenticate with either method. Choose PIT for simple server‑to‑server integrations; use JWT for OAuth app flows.

  

**Q: Where do I find the agentId?** 

A: Create or search agents via the Agents API, then use the returned id field in subsequent calls.

  

**Q: How do I audit AI responses programmatically?** 

A: Use the Generations endpoint to retrieve message‑level response details and store them in your analytics or compliance system.

  

**Q: What causes a 403 when my token looks valid?** 

A: Most often, the token lacks the required scope or isn’t a Sub‑Account token for the target location.