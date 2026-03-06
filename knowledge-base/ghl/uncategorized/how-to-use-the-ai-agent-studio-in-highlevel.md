---
title: "How to Use the AI Agent Studio in HighLevel"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel"
category: "Uncategorized"
---

# How to Use the AI Agent Studio in HighLevel

Agent Studio is HighLevel’s no-code/low-code platform that makes it easy to design, manage, and deploy AI-driven agents. With an intuitive drag-and-drop builder, powerful tool nodes, and flexible deployment options, Agent Studio empowers you to create intelligent agents without needing advanced technical skills. Whether you’re building conversation flows, connecting APIs, or attaching knowledge bases, Agent Studio helps you launch AI solutions quickly and reliably.

  

**TABLE OF CONTENTS**

-   [What is Agent Studio?](#What-is-Agent-Studio?)
-   [Key Benefits of Agent Studio](#Key-Benefits-of-Agent-Studio)
-   [Drag-and-Drop Agent Builder](#Drag-and-Drop-Agent-Builder)
-   [Tool Nodes](#Tool-Nodes)
-   [Logic & Flow Control](#Logic-&-Flow-Control)
-   [Version Control](#Version-Control)
-   [Export & Import Agents](#Export-&-Import-Agents)
-   [Test Tab](#Test-Tab)
-   [API Access](#API-Access)
-   [How To Setup Agent Studio](#How-To-Setup-Agent-Studio)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is Agent Studio?**

  

Agent Studio is a visual platform in HighLevel for creating AI-powered agents. It combines drag-and-drop workflows, versatile tool nodes, and seamless integrations so you can design agents that respond intelligently, automate processes, and connect with external data sources.

  

Agent Studio provides the tools needed to create robust agents that can support customers, streamline operations, and integrate into your existing systems.

##   

Note: Agent Studio is currently only available for agency admins and agency users.

  

## **Key Benefits of Agent Studio**

  

Agent Studio is designed to make building AI agents simple, powerful, and adaptable for real-world use cases.

-   **Drag-and-drop builder**: Create workflows quickly with an intuitive visual canvas.
    
-   **Versatile tool nodes**: Add intelligence, knowledge, and integrations with dedicated node types.
    
-   **Logic and flow control**: Manage branching, conditions, and variable handling for smarter automation.
    
-   **Version control**: Safely develop, test, and deploy agents with structured lifecycle stages.
    
-   **Built-in testing**: Validate agent performance before deploying to production.
    
-   **Integration flexibility**: Connect to APIs, knowledge bases, and the web for dynamic, context-aware responses.
    
-   **Export/import capabilities**: Easily share, back up, or migrate agents.
    
-   **API access**: Run agents programmatically to fit within existing workflows.
    

## **Drag-and-Drop Agent Builder**

  

The drag-and-drop builder provides a visual way to create and manage your AI agent workflows. By connecting nodes and setting flow conditions, you can design complex processes with ease.

  

This builder allows you to:

-   Connect tool nodes for logic, data, and intelligence.
    
-   Configure workflows visually without coding.
    
-   Manage runtime and global variables for dynamic responses.
    

  

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051847732/original/5W_KZpJS2W_xGyJGw2cXw48l8Iq9Jmdp7w.png?1755545252)_

##   

## **Tool Nodes**

  

Tool nodes are the core building blocks of Agent Studio. Each node type adds specific functionality, enabling you to design agents that meet your unique needs.

  

### **LLM Node**

  

The LLM node leverages advanced large language models to generate intelligent, context-aware responses. You can configure prompts, parameters, and output handling to suit your workflows.

  

### **MCP Tool Node**

  

The MCP tool node integrates external tools through the Model Context Protocol, extending your agent’s abilities. This is useful for accessing external data sources or triggering actions.

  

### **API Tool Node**

  

The API tool node connects directly to third-party services by sending and receiving data via APIs. This allows your agent to interact with outside systems dynamically.

  

### **Knowledge Base Tool Node**

  

Attach a knowledge base to your agent so it can respond based on uploaded documents or stored information. This ensures accurate and consistent answers.

  

### **Web Search Tool Node**

  

Allow your agent to retrieve the latest information from the internet. This keeps your agent’s responses fresh, relevant, and accurate.

  

##   

## **Logic & Flow Control**

  

Logic and flow control features allow your agent to handle complex scenarios and make decisions based on conditions.

-   **Branching via edge conditions**: Define different paths depending on variable values or input.
    
-   **Variable management**: Create global, runtime, or input variables to ensure context-aware and flexible responses.
    

  

##   

## **Version Control**

  

Agent Studio supports structured lifecycle management with Draft, Staging, and Production modes. This ensures that changes are tested before they go live, preventing disruptions in production.

##   

Agent Studio uses version management to help you test changes safely before they affect live conversations.

**Staging:**Your work-in-progress version. Saving updates Staging without impacting live traffic.

**Production:** The live version that runs for real contacts. A Production version is created only when you \*\*promote\*\* a Staging version.


For details on promoting, restoring, and working with multiple Production versions, see: Agent Studio Version Management (Staging, Production, Version History).

  

  

  

  

## **Export & Import Agents**

  

With export/import functionality, you can back up, share, or move agents between environments. This makes it easier to collaborate or migrate setups without rebuilding agents from scratch.

##   

## **Test Tab**

  

The built-in Test Tab allows you to simulate and validate agent workflows before pushing them to production. This helps you identify errors, confirm logic paths, and refine your agent’s performance.

  

##   

## **API Access**

  

Agent Studio provides secure APIs so you can execute your agents programmatically. This makes it easy to embed agents into your existing systems or workflows.

##   

## **How To Setup Agent Studio**

  

Proper setup ensures you get the most from Agent Studio and its features. Follow these steps to get started:

1.  Navigate to **AI Agents** > **Agent Studio** from your HighLevel dashboard.
    
2.  Click **Create Agent** to open the drag-and-drop builder.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051847840/original/pFVtm3nY83aETZK4qzFlUYel2jCBwVDYUw.png?1755545519)
    
3.  Add tool nodes (LLM, MCP, API, Knowledge Base, or Web Search) to your workflow.
    
4.  Connect nodes with edges to define logic paths.
    
5.  Configure variables to pass data between nodes.
    
6.  Use the **Test Tab** to validate your agent’s flow.
    
7.  Save your agent to create/update the **Staging version**. When you are ready to go live, **promote** the Staging version to **Production**.
    
8.  (Optional) Export or share your agent if needed.
    
9.  Use API Access to run agents programmatically.
    

  

* * *

## **Frequently Asked Questions**

  

**Q: How does Agent Studio differ from Conversation AI?**

A: Agent Studio provides a visual builder with multiple node types, enabling more complex workflows and integrations compared to Conversation AI.

  

**Q: Can I use my own documents in Agent Studio?**

A: Yes, you can attach a knowledge base with your uploaded documents, making your agent capable of delivering precise answers.

  

**Q: What is MCP, and why would I use it?**

A: MCP (Model Context Protocol) allows integration with external tools, expanding your agent’s functionality beyond standard nodes.

  

**Q: Is version control mandatory when creating agents?**

A: While not mandatory, version control is recommended to safely test and stage agents before deploying them to production.

  

**Q: Can I migrate agents between accounts?**

A: Yes, the export/import functionality allows you to share or move agents between environments.

  

**Q: How do I test my agent before going live?**

A: Use the built-in Test Tab to run simulations and validate your agent’s workflow.

  

**Q: Who can access Agent Studio in HighLevel?**

A: Access depends on your account permissions. Agency admins and users with appropriate roles can build and manage agents.

  

**Q: Does Agent Studio support API integrations?**

A: Yes, you can connect external APIs via the API tool node or execute your agent through secure API access.

* * *

### **Related Articles**

-   [AI Employee Overview](https://help.gohighlevel.com/support/solutions/articles/155000003906-ai-employee-overview)
    
-   [Setting Up Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)
    
-   [Getting Started with Reviews AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000005156-getting-started-with-reviews-ai-agents)
    
-   [Knowledge Base Integration for Voice-AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000005266-knowledge-base-integration-for-voice-ai-agents)
    
-   [How to Use the HighLevel MCP Server](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)
    

##