---
title: "Scroll to Elements or Sections in Websites or Funnels"
url: "https://help.gohighlevel.com/support/solutions/articles/48001158589-scroll-to-elements-or-sections-in-websites-or-funnels"
category: "Uncategorized"
---

# Scroll to Elements or Sections in Websites or Funnels

This article shows you how to make buttons, links, or menu items automatically scroll to specific sections on your website or funnel pages. This is great for improving user experience and creating smooth navigation.

* * *

**TABLE OF CONTENTS**

-   [What is Scroll to Element?](#What-is-Scroll-to-Element?)
-   [Key Benefits of Scroll to Element](#Key-Benefits-of-Scroll-to-Element)
-   [Smooth Scroll Enhancement](#Smooth-Scroll-Enhancement%C2%A0) 
-   [Setting Up Scroll to Element](#Setting-Up-Scroll-to-Element)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What is Scroll to Element?**

  

The scroll-to-element feature allows you to link any clickable item to a specific section on a page. This makes your pages more dynamic and user-friendly, especially for landing pages or long-format content.

* * *

## **Key Benefits of Scroll to Element**

  

Understanding how to use scroll-to actions helps streamline user journeys and create seamless interactions.

  

-   **Navigation Control:** Send users to specific sections of the page without reloading.  
      
    
-   **Cleaner UX:** Helps reduce bounce by guiding users through content fluidly.  
      
    
-   **Custom Interaction:** Works for buttons, links, and navigation menus.  
      
    
-   **Optimized for CTAs:** Great for “Jump to Pricing” or “Learn More” buttons.  
      
    
-   **Mobile Friendly:** Scroll-to also functions smoothly across devices.
    

* * *

## **Smooth Scroll Enhancement** 

  

  

Scroll-to-element actions now use smooth scrolling, instead of abrupt page jumps.

  

When users click a button, text link, or navigation menu item configured with “Scroll to Element,” the page transitions smoothly to the selected section. This creates a more natural browsing experience and improves visual flow, especially on long-form pages.

  

No additional configuration is required. Smooth scrolling is automatically applied to all scroll-to-element actions across funnels and websites.

* * *

## **Setting Up Scroll to Element**

  

Learn how to scroll to a specific section using a simple selector-based linking method. Once you copy the selector, you can use it with text, buttons, or menu items.

  

### **Step 1:** Copy the CSS Selector  
  

Every scroll-to setup starts with getting the selector of the section you want to scroll to. You’ll paste this selector at the end of your link in Step 2.

  

1.  Open your funnel or website in the builder.  
      
    
2.  Click on the section you want to scroll to.  
      
    
3.  In the right-hand panel, go to the **Advanced** tab.  
      
    
4.  Copy the value shown in the **CSS Selector** field.  
      
    

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047383045/original/anO66C_loo2lL1GPQvoixLANqmOIWVPvmw.png?1748448179)_

  

  

### **Step 2:** Choose a Scroll Method  
  

Now that you have the CSS selector, choose one of the following methods to activate the scroll behavior when users click.

  
  

#### **Method 1:** Hyperlink Text to a Section  
  

Turn text into a clickable scroll link using the copied selector.

  

1.  Highlight the desired text.  
      
    
2.  Click the **Link icon** in the formatting toolbar.  
      
    
3.  Enter your full page URL + the CSS selector you copied. (Example: _www.yourdomain.com/#section\_abc12_)  
      
    

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384005/original/FijLk7q_-n8ODDI3qrTOxRZ-U5rUBdjziw.png?1748448985)_  

  

#### **Method 2:** Use a Button with a URL Link

####   

Scroll to a section by assigning a direct URL to a button.

  

1.  Select the button in the builder.  
      
    
2.  Under **Button Actions**, click the **Link To** dropdown and choose **Website URL**.  
      
    
3.  Enter your full page URL + the CSS selector you copied. (Example: _www.yourdomain.com/#section\_abc12_)
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384459/original/WsennYVa7c4fJYehxIZq4NuUfrgJSG6tYw.png?1748449481)

  

  

#### **Method 3:** Use a Button with Scroll to Element Action  
  

Scroll to a section using HighLevel’s built-in scroll behavior.

  

1.  Select the button in the builder.  
      
    
2.  Under **Button Actions**, click the **Link To** dropdown and choose **Scroll to Element**.  
      
    
3.  Use the dropdown to select the section you want the button to scroll to.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384714/original/jwaXrN6ERXJq6E693Nt9RYvzs5sPw2Ex-w.png?1748449782)

  

  

#### **Method 4:** Make a Navigation Menu Item Scroll

  

Navigation menus can also be configured to scroll to a section of the page.  
  

1.  Select the **Navigation Menu**.  
      
    
2.  Click the **three dots** next to a menu item.  
      
    
3.  Change the **Go to** field to **Go to** **website URL**.  
      
    
4.  Enter your full page URL + the CSS selector you copied. (Example: _www.yourdomain.com/#section\_abc12_)  
      
    
5.  Click **Submit**.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047384833/original/IZvf5P519qqENTLgp_ewqdwp2ZbSJxlhzQ.png?1748449923)

* * *

## **Frequently Asked Questions**

  

**Q: Can I scroll between different funnel steps?**  
No. Scroll-to only works on the same page.  
  

**Q: Will this work on mobile?**  
Yes, the scroll functionality works across devices.  
  

**Q: My scroll isn’t working. What should I do?**  
Check that your selector is correct and that it starts with `#`. Refresh the page and test again.

  

**Q: What happens if multiple sections have the same CSS selector?**  
Only the first match will be used. Ensure each scroll target has a unique selector.

* * *

## **Related Articles**

  

-   [Navigation Menus In The HighLevel Funnel Builder](https://help.gohighlevel.com/en/support/solutions/articles/48000986314)  
      
    
-   [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/en/support/solutions/articles/155000004983)  
      
    
-   [Sites Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000001633)