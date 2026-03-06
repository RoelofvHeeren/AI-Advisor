---
title: "Customizing HighLevel Menus: A Guide to Custom Menu Links"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185767-customizing-highlevel-menus-a-guide-to-custom-menu-links"
category: "Uncategorized"
---

# Customizing HighLevel Menus: A Guide to Custom Menu Links

This article explains how to create, manage, and optimize Custom Menu Links in HighLevel to enhance platform navigation and integrate external tools directly into the user interface.

* * *

* * *

**TABLE OF CONTENTS**

-   [What Are Custom Menu Links?](#What-Are-Custom-Menu-Links?)
-   [Key Benefits of Custom Menu Links](#Key-Benefits-of-Custom-Menu-Links)
-   [Who Can Manage Custom Menu Links?](#Who-Can-Manage-Custom-Menu-Links?)
-   [How to Create and Manage Custom Menu Links](#How-to-Create-and-Manage-Custom-Menu-Links)
-   [Getting the user's context within the Custom Menu Link](#Getting-the-user's-context-within-the-Custom-Menu-Link)[  
    ](#How-to-Edit-or-Delete-a-Custom-Menu-Link)
-   [How to Edit or Delete a Custom Menu Link](#How-to-Edit-or-Delete-a-Custom-Menu-Link)
-   [Best Practices for Using Custom Menu Links](#Best-Practices-for-Using-Custom-Menu-Links)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

  

## **What Are Custom Menu Links?**

  

Custom Menu Links allow agencies to personalize the HighLevel navigation menu for sub-accounts and agency users. These links help direct users to essential external resources, training materials, or frequently accessed tools, improving workflow efficiency. This customization enhances user experience and allows for better navigation within the HighLevel platform.

  

Custom Menu Links can be configured in three ways:

  

-   **Embedded Page (iFrame):** Displays the external page within HighLevel while maintaining the navigation structure.  
      
    
-   **New Browser Tab:** Opens the link in a separate browser tab, keeping HighLevel open in the background.  
      
    
-   **Current Browser Tab:** Replaces the current HighLevel screen with the linked content, directing users outside of the platform.  
      
    

These options provide flexibility based on how agencies want their users to interact with external tools and resources.

* * *

## **Key Benefits of Custom Menu Links**

  

Custom Menu Links offer various advantages, including:

  

-   **Streamlined Navigation:** Centralized access to frequently used external tools, reducing the time spent switching between different platforms.  
      
    
-   **Increased Productivity:** Users can quickly access essential resources without leaving the HighLevel interface.  
      
    
-   **Better Training & Support Access:** Agencies can provide direct links to help documentation, knowledge bases, or customer support portals.  
      
    
-   **Seamless Third-Party Integrations:** Directly embed external dashboards, affiliate portals, or reporting tools within the platform.
    

* * *

## **Who Can Manage Custom Menu Links?**

  

Only **Agency Admins** can create and manage Custom Menu Links, ensuring that only authorized personnel can add or remove navigation options.

  

To adjust these permissions, navigate to **Settings > Team**. Select the team member whose permissions need updating and ensure the "Manage Custom Menu Links" permission is enabled.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044017895/original/_-z3BNFCNRSL3Q3xwHahQZSTqFp_3bOMrA.gif?1742996532)

* * *

## **How to Create and Manage Custom Menu Links**

  

Learn how to add and configure custom menu links that appear in the navigation sidebar for agency and sub-account users. These steps will help you seamlessly integrate external tools and resources directly into your HighLevel workspace. Follow these steps to create a new Custom Menu Link:  
  

**Step 1:** Navigate to **Settings > Custom Menu Links** in the left-hand menu and click on the **Create New** button at the top right.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044018239/original/KM6Ct_F5HuuTQ_y-i6CNLucTa_OlPZ4wEA.png?1742996694)  
  

**Step 2:** Fill in the required details:

  

-   **Link Icon:** Click to select an icon.  
      
    
-   **Link Title:** Enter the name of the menu link.  
      
    
-   **URL:** Provide the external URL to be linked. You may use Location values and Custom Values in here. (These will only work on the Location sidebar when inside an account.)  
    Example: [http://url.com/{{location.id}}?value={{custom\_values.my\_value}}](http://url.com/{{location.id}}?value={{custom_values.my_value}})  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044019159/original/ycCTWqoFnkAWHtYuDPTDZurOg3VbC-e91Q.gif?1742997208)  
      
    
    **IMPORTANT:**  The **Link URL** is the web address where the menu item will direct users. It must begin with `http://` or `https://`. Make sure the destination page allows embedding if using the Embedded Page (iFrame) option.
    

  

**Step 3:** Choose the opening method:

  

-   **Open in an Embedded Page (iFrame):** Displays the linked content directly within the HighLevel dashboard, keeping users in the same interface. Ideal for tools that support embedding.  
      
    
-   **Open in a New Browser Tab:** Opens the link in a separate tab, allowing users to access the resource without leaving their current HighLevel view.  
      
    
-   **Open in the Current Tab:** Redirects the current HighLevel tab to the linked URL. Best used when users are expected to complete tasks outside the platform.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044020106/original/B5o7eD0xRsZ4r4QyTg4PtYLt1JrdvO3JKQ.png?1742997794)  
      
    

**Step 4:** Set **Sidebar Preference** and **Role-Based Visibility**  
  

Set the **Sidebar Preference** and **Role-Based Visibility** to define where the link appears and who can access it. The **Sidebar Preference** allows you to choose whether the link appears in the Agency sidebar, the Sub-Account sidebar, or both:

-   Selecting the **Agency sidebar** will make the link visible to agency-level users.  
      
    
-   Selecting the **Sub-Account's sidebar** enables you to assign the link to specific sub-accounts only. Once selected, you can choose which subaccounts should display the custom menu link.  
      
    
-   **Role-Based Visibility** lets you control which types of users can see the custom menu link:**All:** The link will be visible to all roles. **User:** Only users with the User role will see the link. **Admin:** Only Admins will have access to the link.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044107677/original/YxznXAYax4VlyHyQIAKz2ixH-NGfXouCdw.jpeg?1743087683)

* * *

## **Getting the user's context within the Custom Menu Link**

  

While creating the Custom Menu Link, you can set the URL like this:

https://test.com/test?fname={{user.first\_name}}&lname={{user.last\_name}}&location\_id={{location.id}}&custom\_value\_example={{custom\_values.example\_field\_name}}

  

This way, when a user clicks on the link, HighLevel will dynamically replace the param variables with actual values based on the user's context. You can extract these params from the URL and get the user's context.

  

**Supported params to CML**

user.first\_name

user.last\_name

user.name

user.phone

user.email

location.id

location.name

location.city

location.state

location.country

location.address

location.email

location.phone

location.postal\_code

location.full\_address

location.website

location.logo\_url

location\_owner.first\_name

location\_owner.last\_name

location\_owner.email

custom\_values.{CUSTOM\_VALUE\_NAME}

  

## **How to Edit or Delete a Custom Menu Link**

  

Make quick updates or remove outdated custom menu links as your agency evolves. This section shows you how to keep your sidebar navigation clean and relevant by editing or deleting existing links.

  

#### **To modify or remove an existing Custom Menu Link:**

  

-   Navigate to **Settings > Custom Menu Links** and find the desired link and click the **Edit** (pencil icon) or **Delete** (trash icon) button. Make the necessary updates or confirm deletion. These changes include updating the name and icon of the existing link. Changes will immediately reflect in the navigation menu for all users.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108450/original/9Ra4Y9NK5t2A28FvNBd_hkzp8jz_LBg9DQ.png?1743088097)  
      
    

#### **How to Rearrange Custom Menu Links**

-   Click on the **Rearrange Custom Menu Links** button at the top right and drag and drop menu links to the desired order. Finally click **Save** to finalize the changes.  
      
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108908/original/eraT6jXtIGI2hNT_SgfDw8O0EBgA-_m4IQ.gif?1743088349)
    

* * *

## **Best Practices for Using Custom Menu Links**

  

To maximize the effectiveness of Custom Menu Links, consider the following:

  

-   **Keep It Organized:** Avoid adding too many links that might clutter the navigation menu.  
      
    
-   **Use Clear Titles & Icons:** Ensure that menu items are easily recognizable and intuitive for users.  
      
    
-   **Test iFrame Compatibility:** Some external websites may have restrictions preventing them from being embedded in an iFrame.  
      
    
-   **Regularly Review & Update Links:** Ensure that all links remain relevant and functional over time.
    

* * *

## **Frequently Asked Questions**

  

**Q: Can subaccounts create their own Custom Menu Links?**  
No, only agency users with the necessary permissions can manage Custom Menu Links.

  

  

**Q: Can I embed any website using the iFrame option?**  
Not all websites allow embedding via iFrame. Test the link before deploying it to users.

  

  

**Q: Can I restrict Custom Menu Links to specific users or roles?**  
Yes, you can control visibility based on user roles and permissions in the Team Settings.

  

  

**Q: How do I reorder Custom Menu Links?**  
Click **Rearrange Custom Menu Links**, drag and drop the links, and save the new order.

* * *

## **Related Articles**

-   [Agency | Managing user roles & permissions](https://help.gohighlevel.com/support/solutions/articles/155000002543-agency-managing-user-roles-permissions)
-   [How to Use Custom Menu Links in SaaS Plans](https://help.gohighlevel.com/support/solutions/articles/155000004196-how-to-use-custom-menu-links-in-saas-plans)