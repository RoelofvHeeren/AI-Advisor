---
title: "Google Login for WL agencies"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005082-google-login-for-wl-agencies"
category: "Uncategorized"
---

# Google Login for WL agencies

## **Enabling Google Login for White-Label Agencies**

**Agency Admins and Owners** can enable Google Login for their white-label (WL) domains by following the steps below:

-   **Log in** to your agency account.
    
-   Navigate to **Settings > Company > Whitelabel**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188581/original/IH6fLYFmJCOe8VmFqAoRZ20Cklh6wDnvjQ.png?1744799250)
    
-   If your white-label domain is configured correctly, you'll see a **toggle to enable Google Login**.
    
-   Once enabled, the WL login page will display a **"Sign in with Google" CTA**, allowing users to authenticate via Google OAuth.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045188729/original/i-gl6yA1JB1c65Mo473oiM4bEXx2BDi7Xw.png?1744799340)
    

  

  

## **Login flow for users:**

When logging in to a White-Label domain using Google, users should follow these steps:

-   **Visit the White-Label domain** and click on the **“Sign in with Google”** CTA on the login page.
    
-   The user will be redirected to the following URL:  
    `https://login.leadconnectorhq.com/google?origin=<your whitelabel domain>`
    
-   **Allow pop-ups** for the above URL in your browser.
    
    > This is a **one-time action per browser** and is required for the Google OAuth window to appear properly.
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045196662/original/yvTdGvq0Gvx1R7i0a87dkUhc7AwDzJ4ydQ.png?1744804372)

-   Once pop-ups are enabled, the **Google OAuth screen** will appear.
    
    -   Select the Google account that is **registered with the corresponding WL agency**.
        
    -   If the selected account is **not associated with the agency**, an error message will be shown:
        
        > _“User does not exist”_
        

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045197802/original/8JFZDxXMqHMlj-XnVvwiJ6jJPhibA2BIlA.png?1744805165)

-   Upon successful authentication, the user will be **redirected back to the login screen** and signed into their account.

  

## **Custom CSS:**

-   The addition of the new CTA will not impact any existing CSS implementations. However, agency admins may need to add or adjust CSS specifically for the new CTA based on their individual use case and styling preferences.