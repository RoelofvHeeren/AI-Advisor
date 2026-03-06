---
title: "Workflow Action - AI Summarize"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005886-workflow-action-ai-summarize"
category: "Uncategorized"
---

# Workflow Action - AI Summarize

The AI Summarize action uses AI to automatically condense long content into concise summaries. Simply specify your desired summary length and input text, and the action will generate a shortened version while preserving key information.

  

**TABLE OF CONTENTS**

-   [How It Works](#How-It-Works)
-   [Setup Instructions](#Setup-Instructions)
    
    -   [Step 1: Add the Action](#Step-1%3A-Add-the-Action)
    -   [Step 2: Configure Settings](#Step-2%3A-Configure-Settings)
    -   [Using the Output](#Using-the-Output)
    
-   [Example Use Cases](#Example-Use-Cases)
    
    -   [SMS-Friendly Appointment Notes](#SMS-Friendly-Appointment-Notes)
    -   [Pipeline Stage Change Summary](#Pipeline-Stage-Change-Summary)
    -   [Review Response Summary](#Review-Response-Summary)
    -   [Meeting Notes Condensation](#Meeting-Notes-Condensation)
    
-   [Pricing](#Pricing)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

  

# **How It Works**

  

The action processes your input text through AI to:

1.  Identify key points and main ideas
2.  Remove redundant information
3.  Restructure content to fit your specified length
4.  Maintain context and readability

  

  

# **Setup Instructions**

### **Step 1: Add the Action**

Search for "AI Summarize" in the workflow actions menu and add it to your workflow.

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014376/original/dmV8LdoUk5g9t-uP0mar_rPnbWPwZcU4lg.png?1767706588)

### **Step 2: Configure Settings**

  

1.  **Action Name**: Give your action a descriptive name (e.g., "Summarize Customer Review")
2.  **Max Length Input**: Specify your desired summary length
    -   Number of words (e.g., "50 words")
    -   Number of characters (e.g., "280 characters")
    -   Number of sentences (e.g., "3 sentences")
    -   Number of paragraphs (e.g., "1 paragraph")
3.  **Input Text**: Provide the text to summarize
    -   **Static Value**: Enter text directly
    -   **Dynamic Variable**: Use custom value picker for variables
4.  **Save**: Click save to complete the setup

  

### **  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014625/original/2AgugMjNLt4ZNFhA7Ttgybs37pDb8xUxhg.jpeg?1767706650)**

### **Using the Output**

  

After configuration, the summarized text is available as a custom variable:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014690/original/iZTWZbHyc9A3MZV_lgtfJ6EqAutG6aZFfA.png?1767706692)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014725/original/DbQwCTPY9uOA3loSOAvjv-NVM8x5jHXgRA.png?1767706710)

  

This variable can be used in subsequent workflow actions such as:

-   Sending summary via SMS or email
-   Storing in custom fields
-   Displaying in notifications
-   Passing to other workflow actions

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008553/original/q4CqnxHF7IDOEhbyOLaw0h6-KnCDo_kVgA.png?1754471642)

# **Example Use Cases**

### **SMS-Friendly Appointment Notes**

**Trigger**: Appointment Booked  
**Input**: Detailed appointment notes from form  
**Max Length**: 160 characters  
**Action**: Send confirmation SMS with summary

###   

### **Pipeline Stage Change Summary**

**Trigger**: Opportunity Stage Changed  
**Input**: All opportunity notes and activities  
**Max Length**: 1 paragraph  
**Action**: Email summary to account manager

###   

### **Review Response Summary**

**Trigger**: Review Received (Google/Facebook)  
**Input**: Full customer review text  
**Max Length**: 50 words  
**Action**: Post to team Slack channel

###   

### **Meeting Notes Condensation**

**Input**: Full meeting transcript  
**Max Length**: 1 paragraph  
**Output**: Executive summary for stakeholders

##   

# **Pricing**

-   **Cost:** 1 cent ($0.01) per execution
-   Part of Premium Actions suite 

# **Frequently Asked Questions**

  

**Q: Can I summarize multiple messages or concatenated text?**

A: Yes, you can combine multiple text sources using custom values before summarizing.

**Q: Can I chain multiple summarize actions?**

A: Yes, you can progressively summarize content—first to 500 words, then to 100 words in a second action.

**Q: How accurate are the summaries?**

A: The AI maintains high accuracy for key information while removing redundant details. Always test with sample data first.

**Q: Is there a way to exclude certain information from summaries?**

A: Currently, the AI decides what's important. For specific exclusions, consider preprocessing the text with other workflow actions first.