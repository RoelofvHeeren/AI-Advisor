---
title: "How to Set Default Values for Custom Fields Via Conditional Sending"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005433-how-to-set-default-values-for-custom-fields-via-conditional-sending"
category: "Uncategorized"
---

# How to Set Default Values for Custom Fields Via Conditional Sending

  
Personalise your emails with contact details—like name, company, or location—to boost engagement. If a custom field (such as First Name) is empty, Conditional Sending lets you display a default value, ensuring your emails always look polished.

**TABLE OF CONTENTS**

-   [What Is Conditional Sending?](#What-Is-Conditional-Sending?)
-   [Benefits](#Benefits)
-   [Step-by-Step Guide](#Step-by-Step-Guide)
-   [Limitations](#Limitations)
-   [Tips](#Tips)
-   [FAQ](#FAQ)

  

### **What Is Conditional Sending?**

**Conditional Sending lets you show or hide content blocks based on your contacts’ custom field data. This means you can tailor email content to each recipient and display a default value if a field (like First Name) isn’t filled in.**

  

### **Benefits**

-   **Professionalism:** Avoids blanks or missing information in greetings and messages.
    
-   **Personalisation:** Ensures each recipient sees a relevant, friendly greeting—even if some data is missing.
    
-   **Consistency:** Maintains a uniform look and feel across all emails, regardless of data quality.
    
-   **Higher Engagement:** Personalised emails are more likely to be opened and read.
    

  

## **Step-by-Step Guide**

**Example Goal:**  
Show "Dear {{contact.first\_name}}," if First Name is available, or "Dear Customer," if not.

  

1.  **Enable Conditional Sending**  
    Toggle on Conditional Sending in your content block’s sidebar.
2.  **Set Up the Personalised Greeting**
    -   Add a text block:  
        `Dear {{contact.first_name}},`
        
    -   Under Set your conditions:
        
        -   Select a custom field: "First Name"
            
        -   Condition: "Is Not"
            
        -   Value: (leave blank)
            
    -   This block displays only if First Name is not empty.
        
3.  **Set Up the Default Greeting**
    -   Add another text block:  
        `Dear Customer,`
        
    -   Under Set your conditions:
        
        -   Select a custom field: "First Name"
            
        -   Condition: "Is"
            
        -   Value: (leave blank)
            
    -   This block displays only if First Name is empty.
        
4.  **Preview and Test**  
    Use the preview feature to see how your email appears for contacts with and without a First Name.

##   

###   

### **Limitations**

-   Only one custom value can be used under Conditional Sending per content block.
    
-   You cannot apply multiple conditional settings for the same field within a single block or section.
    

  

### **Tips**

-   Always preview with test contacts to ensure your conditions work.
-   Use clear, friendly default values for a professional tone.

  

  

### **FAQ**

**Q1:** **Can I use Conditional Sending for fields other than First Name?**  
**A:** Yes, this method works for any custom field you add.

**Q2:** **Can I use multiple custom fields in one block?**  
**A:** No, only one custom value per content block.

**Q3:** **What if I leave "Enter a value" blank?**  
**A:** The condition checks for empty or non-empty fields, letting you show or hide content accordingly.

**Q4:** **Can I set any default value?**  
**A:** Yes, customize the default message to fit your brand.