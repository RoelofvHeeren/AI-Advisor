---
title: "How to Use FTP to Access Your WordPress Website"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006783-how-to-use-ftp-to-access-your-wordpress-website"
category: "Uncategorized"
---

# How to Use FTP to Access Your WordPress Website

**FTP (File Transfer Protocol)** is a secure and fast way to access your website’s files. You can upload, download, or edit files directly, just like managing files on your computer.

  

### ? Why You Might Use FTP:

-   Upload custom plugins or themes
    
-   Edit wp-config or .htaccess files
    
-   Troubleshoot white screen or plugin issues
    
-   Download backups or specific files
    

* * *

### ✅ What You’ll Need

Before connecting via FTP, grab these details from your WordPress Hosting dashboard (under **Sites → WordPress → Advanced Settings → FTP Access**):

-   **Host** (e.g., `103.67.202.37`)
    
-   **Port** (usually `21`)
    
-   **Username** (e.g., `example@ssvnXXXX.wpdns.site`)
    
-   **Password** (click “Reset Password” if not available)
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056863793/original/b0fcEMhfP_-WRJbd1opIx3-jCtzBmQ5zYQ.png?1761545264)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056863827/original/a0CfpauKAMmmqSIgF1vOham57IA3mNq1HQ.png?1761545322)

* * *

### ? Step-by-Step: Connect to FTP Using FileZilla

We recommend [FileZilla](https://filezilla-project.org/), a free and trusted FTP client.

#### 1\. **Download and Install FileZilla**

-   Visit: https://filezilla-project.org/download.php
    
-   Choose the version for your OS (Windows, Mac, or Linux)
    
-   FileZilla Client Downloads  
    
    -   **Windows (64-bit):** [Download FileZilla Client for Windows](https://filezilla-project.org/download.php?platform=win64)
    -   **macOS (Apple Silicon):** [Download FileZilla Client for macOS (Apple Silicon)](https://filezilla-project.org/download.php?platform=macos-arm64)
    -   **macOS (Intel):** [Download FileZilla Client for macOS (Intel)](https://filezilla-project.org/download.php?platform=osx)
    -   **Linux (64-bit):** [Download FileZilla Client for Linux](https://www.google.com/search?q=https://filezilla-project.org/download.php%3Fplatform%3Dlinux-x86_64)

  

  

  

#### 2\. **Open FileZilla and Enter Your Credentials**

At the top of the FileZilla window:

| Field | Value |
| --- | --- |
| **Host** | Your FTP Host (e.g., `103.67.202.37`) |
| **Username** | Provided in the dashboard |
| **Password** | The one you generated/reset |
| **Port** | `21` |

Then click **Quickconnect**.

####   

####   

#### 3\. **Navigate Your Website Files**

-   **Right side** = Your website files on the server
    
-   **Left side** = Your local computer files
    
-   You can **drag & drop files** between both sides.
    

* * *

### ? Pro Tips

-   Don’t delete files unless you know what they do.
    
-   To edit a file, right-click and select **View/Edit**.
    
-   Always **download a backup** before making changes.
    

* * *

### ❓Common Issues

| Issue | Solution |
| --- | --- |
| Can't connect | Double-check password, port, and host IP |
| Timeout error | Try passive mode in FileZilla → Settings |
| Permission denied | Contact your admin or reset FTP password |

* * *

### ? Helpful Resources

-   [FileZilla Official Documentation](https://wiki.filezilla-project.org/Documentation)
    
-   [Beginner FTP Video Guide (YouTube)](https://www.youtube.com/results?search_query=filezilla+ftp+tutorial)
    

* * *

### ? Still need help?

If you’re stuck, reach out to your admin with the following:

-   Site name
    
-   Username
    
-   Screenshot of your FileZilla settings