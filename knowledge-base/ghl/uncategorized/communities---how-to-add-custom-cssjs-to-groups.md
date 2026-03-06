---
title: "Communities - How to Add Custom CSS/JS to Groups"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002165-communities-how-to-add-custom-css-js-to-groups"
category: "Uncategorized"
---

# Communities - How to Add Custom CSS/JS to Groups

Add custom CSS and JavaScript to your Communities **Groups** to fine‑tune branding, layout, and interactive behavior. This article shows where you can add your own CSS or JavaScript. 

  

**Note:** HighLevel does not provide guidance, recommendations, or support for custom code (including writing, debugging, or maintaining it).

* * *

**TABLE OF CONTENTS**

-   [What is Adding Custom CSS/JS to Groups?](#What-is-Adding-Custom-CSS/JS-to-Groups?)[](#Key-Benefits-of-Adding-Custom-CSS/JS)
-   [Key Benefits of Adding Custom CSS/JS](#Key-Benefits-of-Adding-Custom-CSS/JS)[](#How-to-Add-Custom-CSS/JS-to-Groups)
-   [How to Add Custom CSS/JS to Groups](#How-to-Add-Custom-CSS/JS-to-Groups)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is Adding Custom CSS/JS to Groups?**

  

Adding custom CSS and JavaScript at the **group level** lets you change how your group looks and behaves without altering other parts of Communities. You can paste code directly, test safely, and then publish to members with confidence.

* * *

## **Key Benefits of Adding Custom CSS/JS**

  

-   **Precise branding**: match fonts, spacing, and components to your brand guidelines.  
      
    
-   **Targeted changes**: scope CSS/JS to a single group without impacting other groups.  
      
    
-   **Controlled rollout**: use **Test Preview** before turning on **Live Mode**.  
      
    
-   **Better UX**: enhance navigation or micro-interactions with small JS snippets.  
      
    
-   **Mobile flexibility**: tailor responsive rules for phones and tablets.
    

* * *

## **How to Add Custom CSS/JS to Groups**

  

Follow these steps to add custom code to your groups:

  

1.  Log into your sub‑account.  
      
    
2.  Go to **Memberships >** **Communities >** **Groups**.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061246022/original/zfEW7dJceNSM4tNRzkZM1Bbv6otwOID3JA.png?1766501351)  
      
    
3.  Login to the **Group** you want to customize.  
      
    ![](https://jumpshare.com/share/WEmixhUQ0ro5XQi8XOS0+/Screen+Shot+2025-12-23+at+8.21.16+PM.png)  
      
    
4.  Click **Settings** in the group.  
      
    ![](https://jumpshare.com/share/5G9662alBgx3HMphI0Ar+/Screen+Shot+2025-12-23+at+8.24.17+PM.png)  
      
    
5.  Click the **Branding** tab and scroll down to **Advanced Options** and click to expand it.  
      
    ![](https://jumpshare.com/share/z9vpc1V1LeAWqJ35ZTqu+/Screen+Shot+2025-12-23+at+8.33.17+PM.png)  
      
    
6.  Scroll to **Custom CSS** and **Custom JavaScript** fields and paste your code.  
      
    ![](https://jumpshare.com/share/KW2JPZ0zRZQ1YYu7HWyA+/Screen+Shot+2025-12-23+at+8.34.57+PM.png)  
      
    
7.  Click **Test Preview** to review your changes.  
      
    
8.  If satisfied, turn **Live Mode** **On**. If not, make adjustments and test again.  
      
    
9.  Click **Save** to finish.  
      
    ![](https://jumpshare.com/share/YhxRqrwpECkyaPRqyIzG+/Screen+Shot+2025-12-23+at+8.36.24+PM.png)
    

* * *

## **Frequently Asked Questions**

  

**Q: Can I quickly disable custom code to troubleshoot?**

Yes. Turn **Live Mode** off.

  

**Q: What should I do if I'm experiencing issues in a community after applying custom code?**

If you encounter any problems within a community where custom HTML, CSS, or JavaScript has been implemented, it's important to isolate whether the issue is being caused by the custom code. To do this, you can temporarily disable the custom code and see if the problem still occurs. Simply add 'customCode=false' to the end of the community's URL in your browser's address bar and press Enter. This action deactivates the custom code for your current session, allowing you to check if the issue persists without the customizations. If the problem is resolved with custom code disabled, it indicates that adjustments to your custom code may be necessary.

  

**Q: How can I apply different styles for dark mode vs. light mode in my community portal?**

To target night mode (dark theme) styles specifically, use the .dark class in your CSS. This class is automatically applied to the root when night mode is active.

Avoid using overly broad selectors like div:nth-of-type(2) unless you’re absolutely sure it won’t impact other parts of the page. Always preview and test both modes to ensure visual consistency.

* * *

## **Related Articles**

  

-   [Communities - Change your group theme](https://help.gohighlevel.com/en/support/solutions/articles/155000002455)  
      
    
-   [Communities - Automatic Newsletters](https://help.gohighlevel.com/en/support/solutions/articles/155000006773)  
      
    
-   [Communities - Use Go Live to Host Meetings & Broadcasts](https://help.gohighlevel.com/en/support/solutions/articles/155000006673)  
      
    
-   [Content Management in Communities](https://help.gohighlevel.com/en/support/solutions/articles/155000000297)