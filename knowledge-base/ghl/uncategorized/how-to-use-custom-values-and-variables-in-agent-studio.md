---
title: "How to Use Custom Values and Variables in Agent Studio"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007432-how-to-use-custom-values-and-variables-in-agent-studio"
category: "Uncategorized"
---

# How to Use Custom Values and Variables in Agent Studio

Use Custom Values and built-in variable sources to make your Agent Studio workflows dynamic, reusable, and scalable. Instead of manually typing business details or contact information into every node, you can insert smart placeholders that automatically pull real data when your agent runs.

  

This guide explains how to use Account details, Contact data, real-time date and time, form submissions, and Custom Values inside your agents without duplication or manual updates.

* * *

**TABLE OF CONTENTS**

-   [What Are Custom Values and Variables?](#%E2%80%8B%E2%80%8BWhat-Are-Custom-Values-and-Variables?)
-   [Key Benefits of Using Variables in Agent Studio](#Key-Benefits-of-Using-Variables-in-Agent-Studio)
-   [Custom Values](#Custom-Values)
-   [Account Variables](#Account-Variables)
-   [Right Now Variables](#Right-Now-Variables)
-   [Form Data Variables](#Form-Data-Variables)
-   [Contact Variables](#Contact-Variables)
-   [Contact vs Runtime Variables](#Contact-vs-Runtime-Variables)
-   [How To Set Up Custom Values and Variables](#How-To-Set-Up-Custom-Values-and-Variables)
-   [Frequently Asked Question](#Frequently-Asked-Question)
    -   [Related Articles](#Related-Articles)

* * *

# **What Are Custom Values and Variables?**

  

Custom Values and Variables allow you to insert real information into your agent automatically. A variable is a placeholder written inside double curly braces, like {{contact.first\_name}}, which is replaced with real data when the agent runs.

  

For example:

  

**Hi {{contact.first\_name}}**

  

If the contact’s name is John, the message becomes: **Hi John**.

  

You can use variables anywhere you type text inside Agent Studio, including AI Agent prompts, Text Generation nodes, tool inputs, message cards, and conditional logic fields. Simply click the dropdown arrow in the text field to insert a variable or type it manually using {{ }}.

  

Agent Studio includes five built-in variable categories:

-   Account
    
-   Custom Values
    
-   Right Now
    
-   Form Data
    
-   Contact
    

  

Each category pulls information from a different part of your system.

* * *

## **Key Benefits of Using Variables in Agent Studio**

  

Using variables helps you build dynamic and reusable agents.

  

-   **Build once, use everywhere:** One agent template can work across multiple locations automatically.

  

-   **No manual updates:** If a phone number or address changes, it updates everywhere instantly.

  

-   **Automatic personalization:** Pull contact names and CRM data into conversations without extra work.

  

-   **Real-time awareness:** Insert today’s date or current time automatically.

  

-   **Safe execution:** If a variable has no value, it returns blank instead of breaking your agent.

  

* * *

## **Custom Values**

  

Custom Values are reusable key–value pairs you define in:

  

**Settings → Custom Values**

  

You create them once and use them anywhere.

  

**Example:**

  

**Key:** support\_email

**Value:** support@yourcompany.com

  

**Then inside your agent:** For help, email {{custom\_values.support\_email}}

  

If you update the value later, it automatically updates everywhere the variable is used.

* * *

## **Account Variables**

  

Account variables pull business information from your Location settings.

  

Use these when your agent needs to reference:

  

-   Business name
    
-   Phone number
    
-   Address
    
-   Website
    
-   Logo URL
    

  

**Example:** Welcome to {{account.name}}. Call us at {{account.primary\_phone}}.

  

These values pull directly from your Location settings.

* * *

## **Right Now Variables**

  

Right Now variables insert live date and time information.

  

Examples include:

  

-   Today’s full date
    
-   Current time
    
-   Day of the week
    
-   Month or year
    

  

**Example:** Today is {{right\_now.date}}.

  

The system automatically inserts the correct date based on the location’s timezone.

* * *

## **Form Data Variables**

  

Form Data variables are available when your agent is triggered by a **Form Submitted** event.

  

Each form field becomes available as a variable.

  

**Example:** If your form has a field called “service\_type”, you can use: You selected {{form.service\_type}}

  

**Important:** Form variables only populate when the agent is triggered by a form submission.

* * *

## **Contact Variables**

  

Contact variables pull information directly from the CRM record. They allow standard as well as custom fields for deep personalization.

  

**Examples:**

  

-   {{contact.first\_name}}
    
-   {{contact.last\_name}}
    
-   {{contact.email}}
    
-   Custom contact fields
    

  

If the contact record updates, the next time the agent runs it will use the updated information.

* * *

## **Contact vs Runtime Variables**

  

-   Contact variables pull saved CRM data.

  

-   Runtime variables store temporary information collected during the current conversation.

  

-   If the information already exists in the contact record before the conversation starts, use Contact variables.

  

-   If the value is collected during the conversation, use Runtime variables.

* * *

## **How To Set Up Custom Values and Variables**

  

Follow these steps to start using variables.

###   

### **Step 1: Create Custom Values**

1.  ### Go to **Settings → Custom Values**
    
2.  Click **Add Custom Value**
    
3.  Enter a Key and Value
    
4.  Click **Save**
    

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066195846/original/UcquCJLbh_kjtNn829WXLxBUD765leQiTA.gif?1772634838)**

  

###   

### **Step 2: Open Agent Studio**

1.  ### Go to **AI Agents → Agent Studio**
    
2.  Open an existing agent or create a new one
    

###   

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066195961/original/6Q9_iM4uoiCl-xbPRENoIWMs6iBGa9F6pQ.png?1772634894)

  

  

### **Step 3: Insert a Variable**

1.  ### 
    
    Click inside any prompt or message field
    
2.  Click the dropdown arrow in the field
    
    OR type {{ manually
    
3.  Choose a category:
    
    -   Account
        
    -   Custom Values
        
    -   Right Now
        
    -   Form Data
        
    -   Contact
        
4.  Click a variable to insert it
    

###   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066196827/original/ArejnkNFCsmPfC-hrhaWzg9fZJRtn2kK6g.png?1772635327)

  

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066197202/original/VQqhp9eIAz5W_LF314FtD0LW78jD23JeBw.png?1772635503)

  

  

### **Step 4: Save and Test**

1.  ### 
    
    Click **Save**
    
2.  Click **Test**
    
3.  Run a sample conversation
    
4.  Confirm variables resolve correctly
    

  

If a value appears blank, verify that the corresponding data exists in the CRM or Location settings.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066197432/original/KdPrTrYGBxPWiMmIep4m85sHuAzBW4q0OA.png?1772635632)

###   

### **Step 5: Publish**

  

Once everything works correctly, promote the agent to Production.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066197575/original/8nM_gF_XQQU9MzeYYeu--GbY4pUsxGqYtg.png?1772635693)

* * *

## **Frequently Asked Question**

  

**Q: What happens if a Custom Value is deleted?**

It returns an empty value instead of causing an error.

  

**Q: Can I reference Opportunity or Task fields?**

Currently supported sources are Account, Custom Values, Right Now, Form Data, and Contact.

  

**Q: What Happens If a Variable Has No Value?**

If a variable is missing or empty, the system returns a blank value. It does not cause an error or stop the agent from running. This ensures safe and reliable execution.

  

**Q: Do Right Now variables respect timezone?**

Yes. They use the sub-account’s timezone.

  

**Q: Can Form Data variables be used anywhere?**

They populate only when triggered by a Form Submitted event.

  

**Q: Are variable placeholders case-sensitive?**

Yes. Use the exact key names shown in the variable picker.

* * *

### **Related Articles**

-   ### 
    
    [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel) 
    
-   [How to use Custom Values](https://help.gohighlevel.com/support/solutions/articles/48001161575-how-to-use-custom-values)
    
-   [How to Set Up Agent Studio Triggers for Real-Time Starts](https://help.gohighlevel.com/support/solutions/articles/155000007310-how-to-set-up-agent-studio-triggers-for-real-time-starts)