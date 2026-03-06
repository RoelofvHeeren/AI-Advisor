---
title: "? How to Increase PHP Upload Limits on Your WordPress Site (Post Max Size, Upload Max Filesize)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-"
category: "Uncategorized"
---

# ? How to Increase PHP Upload Limits on Your WordPress Site (Post Max Size, Upload Max Filesize)

If you have your WordPress site hosted with us and are experiencing issues uploading large files or themes due to PHP size restrictions, follow these steps to increase the limits via your WordPress dashboard.

> **⚠️ Note:** The maximum upload limit that can be set using `.htaccess` is **300MB**. If you set values above that, it may show in the media library but the upload will **not work**.

* * *

## PHP max input variables: 10000 or higher  
PHP post max size: 300M or higher  
PHP memory limit: 2GB or higher  
PHP time limit: 600 or higher  
? Steps to Increase PHP Memory Limits

### ✅ Step 1: Install a File Manager Plugin

1.  Log into your **WordPress dashboard**.
    
2.  Navigate to **Plugins > Add New**.
    
3.  Search for **"WP File Manager"** or any similar file manager plugin.
    
4.  Click **Install** and then **Activate** the plugin.
    

* * *

### ✅ Step 2: Locate the `.htaccess` File

1.  In your WordPress dashboard, go to **WP File Manager** from the sidebar.
    
2.  Open the folder named **`public_html`** (or the root directory where WordPress is installed).
    
3.  Look for the file named `.htaccess`.
    
    -   If it is not visible, enable the **"Show Hidden Files"** setting in the file manager plugin.
        

* * *

### ✅ Step 3: Edit the `.htaccess` File

1.  Right-click on the `.htaccess` file.
    
2.  Select **"Code Editor"** or **"Edit"** (depending on your plugin).
    
3.  Scroll to the bottom of the file and **add the following lines** based on your required limits:
    
    apache
    
    CopyEdit
    
    `php_value upload_max_filesize 128M php_value post_max_size 128M`
    
4.  Click **Save** or **Update File**.
    

* * *

## ? How to Verify the Change?

1.  Go to **Media > Add New** in your WordPress dashboard.
    
2.  Check the upload size mentioned at the bottom of the file upload area.
    
3.  If it shows the new limit (e.g., 128MB), the update was successful.
    

* * *

## ? Troubleshooting

-   **Still seeing old limits?** Clear your browser and site cache and recheck.
    
-   **Uploads still fail?** Ensure the limit is under 300MB. Anything higher needs to be configured via server-level settings.
    
-   **Need help?** Reach out to our support team.
    

* * *