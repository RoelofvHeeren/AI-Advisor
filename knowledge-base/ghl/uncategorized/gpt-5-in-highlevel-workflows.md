---
title: "GPT-5 in HighLevel Workflows"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005919-gpt-5-in-highlevel-workflows"
category: "Uncategorized"
---

# GPT-5 in HighLevel Workflows

Harness the power of cutting‑edge AI directly inside your automations. GPT‑5 in Workflows lets you embed OpenAI’s newest language models, GPT‑5, GPT‑5 Mini, GPT-5.1 and GPT‑5 Nano into HighLevel steps for smarter, faster, and cost‑efficient task execution. This guide explains what the feature is, why it matters, its costs, and the exact steps to get started.

* * *

**TABLE OF CONTENTS**

-   [What is GPT 5 in Workflows?](#What-is-GPT%E2%80%AF5-in-Workflows?)
-   [Key Benefits of GPT 5 in Workflows](#Key-Benefits-of-GPT%E2%80%AF5-in-Workflows)
-   [GPT 5 Models, Pricing, and Token Math](#GPT%E2%80%AF5-Models,-Pricing,-and-Token-Math)
-   [How To Set Up GPT 5 in Workflows](#How%E2%80%AFTo%E2%80%AFSet%E2%80%AFUp-GPT%E2%80%AF5-in-Workflows)
    -   [Step 1: Select the GPT action](#Step-1%3A%C2%A0Select-the-GPT-action)
    -   [Step 2: Choose GPT‑5 Mini, GPT‑5 or GPT‑5 Nano](#Step-2%3A-Choose-GPT%E2%80%915-Mini,-GPT%E2%80%915-or-GPT%E2%80%915-Nano)
-   [Best-Practice Prompt Tips for GPT-5 Models](#Best-Practice-Prompt-Tips-for-GPT-5-Models)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

## **What is GPT 5 in Workflows?**

  
GPT‑5 in Workflows is HighLevel’s latest integration of OpenAI’s GPT‑5 family, enabling any workflow to generate or transform text with unprecedented accuracy and speed. By selecting the GPT action and choosing a GPT‑5 variant, you unlock longer context windows, richer reasoning, and lower latency compared to earlier models.

* * *

## **Key Benefits of GPT 5 in Workflows**

  
Intelligent automation gets real‑time, enterprise‑grade language understanding.

  

-   **Speed:** Accelerated processing for near real‑time execution, reducing wait times for customers.  
      
    
-   **Reliability:** Consistent, high‑quality outputs thanks to GPT‑5’s refined reasoning abilities.  
      
    
-   **Flexibility:** Three model tiers let you balance performance and budget without rewriting workflows.  
      
    
-   **Simplicity:** Native, click‑to‑configure action keeps integration and maintenance effortless.
    

* * *

## **GPT 5 Models, Pricing, and Token Math**

  
Choose the tier that matches your volume and performance needs—pay only for the tokens you consume.

  

| Model | Best For | Max Context Window | Relative Latency\* | Input Cost per 1M Tokens | Output Cost per 1M Tokens |
| --- | --- | --- | --- | --- | --- |
| GPT‑5 | Long‑form reasoning, document analysis, high‑stakes copy | 256k | ◼︎◼︎◼︎◼︎ (slower) | $1.25 | $10.00 |
| GPT‑5 Mini (default) | General email drafting, chat replies, marketing copy | 128k | ◼︎◼︎◼︎ (balanced) | $0.25 | $2.00 |
| GPT‑5 Nano | High‑volume classification, short replies, light summarization | 64k | ◼︎◼︎ (fastest) | $0.05 | $0.40 |
| GPT-5.1 | 
Better Instruction following over other OpenAI models with a warmer, more conversational personality.

 | 128k |   
 | $1.25 | $10.00 |

  

  

**IMPORTANT**: Pricing mirrors OpenAI’s published rates and is billed via your HighLevel AI wallet. Both agency markup and client rebilling apply automatically.

  

  

### **Token Math**

  
Mastering token math lets you forecast AI costs accurately and avoid billing surprises. HighLevel bills GPT‑5 usage exactly as OpenAI does, by counting input tokens (your prompt + context) and output tokens (the model’s response). One token is roughly four characters of English text. Charges are prorated to the nearest thousandth of a million tokens (0.001 M).

  

#### **Example:-** A 400-word email (~2,000 characters ≈ 500 tokens) sent to GPT-5 Mini costs:

  

-   **Input**: 500 tokens × $0.25 / 1M = $0.000125  
      
    
-   **Output**: 500 tokens × $2.00 / 1M = $0.001  
      
    
-   **Total**: $0.001125 for that action.

* * *

## **How To Set Up GPT 5 in Workflows**

  

Proper setup ensures the right GPT‑5 model is applied, balances speed and cost, and keeps your workflows production‑ready. Here’s how to configure it in a few clicks.

  

### **Step 1:** Select the GPT action

  

Open your workflow and under 'add action' click the “+” icon where you want the AI step and search for “GPT powered by OpenAI.” Select the GPT action.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051630525/original/xqhHze4dKq1K8OUUxD6KbnJU_g9-AKFQMw.png?1755178385)  
  

### **Step 2:** Choose GPT‑5 Mini, GPT‑5, GPT‑5 Nano or GPT 5.1

  

In the Model dropdown, leave the default GPT‑5 Mini or choose GPT‑5 / GPT‑5 Nano to match your use‑case.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051630743/original/Y2gNqJmyLdVsbkiusI1G3MlhrYXJ6lwIpg.png?1755178517)

  

**Please Note:** Compose your prompt or map inbound data fields. (See [AI Prompting 101](https://help.gohighlevel.com/support/solutions/articles/155000002254-ai-prompting-101) for best practices.) Save the step and publish the workflow. Your automation now runs with GPT‑5 intelligence.

* * *

## **Best-Practice Prompt Tips for GPT-5 Models**

  

-   **Provide Role & Format:** Begin system prompts with the model’s role and the exact output schema.  
      
    
-   **Use Delimiters for Long Inputs**: Wrap large documents in triple back-ticks ( \`\`\`\` ) to preserve formatting.  
      
    
-   **Chunk When Possible:** For Nano, split multi-page content into smaller calls to keep cost ultra-low.  
      
    
-   **Include Examples:** Few-shot examples still improve consistency, especially with Mini or Nano.  
    

* * *

## **Frequently Asked Questions**

  

**Q: Which GPT‑5 model is most cost‑effective for large‑volume tasks?**  
GPT‑5 Nano offers the lowest per‑token rate, making it ideal for high‑volume or background tasks where speed is less critical.

  

**Q: Can I change the model later without rebuilding the workflow?**  
Yes, edit the GPT action, select a different model, and save; no other steps need adjustment.

  

**Q: How are input and output tokens calculated?**  
Input tokens include the prompt and context; output tokens are the model’s response. Both are metered and priced separately.

  

**Q: Are there usage limits on GPT‑5 requests?**  
HighLevel enforces the same rate limits as OpenAI. Heavy usage may queue requests during peak traffic.

  

**Q: Does GPT‑5 support longer context windows than GPT‑4 Turbo?**  
Yes, GPT‑5 supports up to 256k tokens of context, allowing richer conversations and multi‑step reasoning.

* * *

## **Related Articles**

  

-   **[](https://help.gohighlevel.com/support/solutions/articles/155000000209)**[](https://help.gohighlevel.com/support/solutions/articles/155000000209)[Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209)  
      
    
-   [GPT-4 Turbo in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002331-gpt-4-turbo-in-highlevel)  
      
    
-    [AI Tools in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000002166-ai-tools-in-highlevel)  
      
    
-    [AI Prompting 101](https://help.gohighlevel.com/support/solutions/articles/155000002254-ai-prompting-101)  
      
    
-   [History for GPT actions (AI Memory Key)](https://help.gohighlevel.com/support/solutions/articles/155000003026-history-for-gpt-actions-ai-memory-key-)[](https://help.gohighlevel.com/support/solutions/articles/155000003026-history-for-gpt-actions-ai-memory-key-)**[](https://help.gohighlevel.com/support/solutions/articles/155000003026-history-for-gpt-actions-ai-memory-key-)**