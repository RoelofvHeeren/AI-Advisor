---
title: "Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots"
category: "Uncategorized"
---

# Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots

This article will show you how to create a snapshot of fully configured Conversation AI Bots, including all prompts, actions, and settings. Snapshots make it easy to deploy the same bot across multiple sub-accounts with full consistency and minimal effort.

  

**TABLE OF CONTENTS**

-   [What is the Conversation AI Bot Snapshot Feature?](#What-is-the-Conversation-AI-Bot-Snapshot-Feature?)
-   [Key Benefits of Conversation AI Bot Snapshots](#Key-Benefits-of-Conversation-AI-Bot-Snapshots)
-   [How to Create a Snapshot with Bots](#How-to-Create-a-Snapshot-with-Bots)
-   [Conversation AI Snapshot Options & Behaviors](#Conversation-AI-Snapshot-Options-&-Behaviors)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Next Steps](#Next-Steps)

* * *

### **What is the Conversation AI Bot Snapshot Feature?**

  

The Conversation AI Bot Snapshot feature allows users to clone entire bots—including prompts, actions, and configurations—into a reusable snapshot. This eliminates the need to manually recreate bots across sub-accounts and ensures consistency in customer interactions, training data, and bot logic.

  

### **Key Benefits of Conversation AI Bot Snapshots**

  

Creating snapshots of your bots can streamline setup across accounts and reduce human error.

-   Capture full bot configurations, including settings, prompts, and actions.
    
-   Eliminate repetitive bot setup in every sub-account.
    
-   Maintain consistency in tone and capabilities across all client accounts.
    
-   Automatically set the imported bot as the primary bot (if one doesn’t already exist).
    
-   Include all bot training data (Web Crawler URLs and FAQs).
    
-   Choose how to handle existing bots in the destination—overwrite or skip them.
    

### **How to Create a Snapshot with Bots**

  

To replicate bots across sub-accounts, follow these steps to create a snapshot that includes your Conversation AI configurations.

1.  Navigate to the **Account Snapshots** tab in your left-hand navigation menu.
    
2.  Click **Create New Snapshot**.
    
3.  Select the **source sub-account** that contains the bot you want to snapshot.
    
4.  Enter a descriptive **name** for the snapshot.
    
5.  Scroll to the **Conversation AI** section.
    
6.  Review the bots listed. This section will include:
    
    -   Bot names
        
    -   Bot Training Web Crawler URLs
        
    -   Custom Bot Responses (FAQs)
        
7.  Once reviewed, click **Create Snapshot**.
    

  

### **Conversation AI Snapshot Options & Behaviors**

  

Knowing what gets copied and how import rules work ensures a smoother bot migration process.

  

**Primary Bot Auto-Assignment**

If the destination sub-account doesn’t already have a primary bot, the imported bot from the snapshot will automatically be set as the primary.

  

**Conflict Handling**

If a bot with the same name already exists in the destination sub-account, you’ll have two options:

-   **Overwrite** – Replace the existing bot with the one from the snapshot.
    
-   **Skip** – Keep the existing bot and ignore the one from the snapshot.
    

  

**What’s Included in the Snapshot?**

-   Complete bot structure: all actions and prompt-response mappings.
    
-   Bot settings and configurations.
    
-   Bot Training Web Crawler URLs.
    
-   Custom FAQ data created via the Bot Training tab.
    

  

* * *

### **Frequently Asked Questions**

  

**Q: What if a bot with the same name already exists in the destination sub-account?**

During import, you’ll be prompted to overwrite the existing bot or skip the new one.

  

**Q: Will my prompt and action logic be preserved?**

Yes, the snapshot preserves all flows, actions, and responses exactly as configured.

  

**Q: Can I change the primary bot after importing a snapshot?**

Yes, if the snapshot bot doesn’t become the primary, you can manually assign it as primary from the Conversation AI settings.

  

**Q: Does this include training data like FAQs and Web Crawler links?**

Yes. All training data—including URLs and FAQs—are included in the snapshot.

  

**Q: Can I edit a snapshot later?**

No, snapshots are immutable. You must create a new snapshot if you make changes to the original bot.

###   

* * *

### **Next Steps**

-   After importing the snapshot, verify that the bot is functioning properly in the new sub-account.
    
-   Manually assign it as the primary bot if it’s not automatically selected.
    
-   Test the bot’s training data to ensure accurate responses.
    
-   Continue building or modifying the bot for specific account needs using the **Bot Training** and **Bot Flow Builder** tools.