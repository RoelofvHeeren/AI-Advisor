---
title: "Whitelabel Email Template Sharing: Step-by-Step Guide"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006716-whitelabel-email-template-sharing-step-by-step-guide"
category: "Uncategorized"
---

# Whitelabel Email Template Sharing: Step-by-Step Guide

You can create template share links that let sub-account users import a template directly into their own account. With a quick adjustment, these links can also be formatted to use your own white-labeled domain, keeping everything fully branded to your agency.  
  
  

**TABLE OF CONTENTS**

-   [Steps to Create a Template Share Link](#%E2%80%8B%E2%80%8BSteps-to-Create-a-Template-Share-Link)
    -   [1\. Generate a Template Share Link](#1.-Generate-a-Template-Share-Link)
    -   [2\. Grab the Share ID](#2.-Grab-the-Share-ID)
    -   [3\. Insert the Share ID Into the Template](#3.-Insert-the-Share-ID-Into-the-Template)
    -   [4\. Share the Custom Link](#4.-Share-the-Custom-Link)

###   
**Steps to Create a Template Share Link**

#### **1\. Generate a Template Share Link**

  

-   Go to **Marketing > Emails > Templates**.
-   Click the three dots next to the template you want to share.
-   Select **Share**.
-   Copy the generated share link. It will look like this:

```
https://affiliates.gohighlevel.com/?fp_ref=xxxx&email_template_share=6438b5b145411d0ce4332f1b
```

####   
**2\. Grab the Share ID**

  

Paste the link and find the part after `template_share=`.  
**_Note_**: _Share wont work for the account/ location user role. It is accessible only by agency owner/admin, agency user and account admin._

**Example:**

```
email_template_share=6438b5b145411d0ce4332f1b
```

The **Share ID** here is:

```
6438b5b145411d0ce4332f1b
```

####   
**3\. Insert the Share ID Into the Template**

Use this template to build your custom share link:

```
https://app.YOURDOMAIN.com/emails/share/SHAREID
```

Replace `YOURDOMAIN.com` with your white-labeled domain.

Replace `SHAREID` with the Share ID you copied.

**Example:**

```
https://app.whitelabel.com/emails/share/6438b5b145411d0ce4332f1b
```

####   
**4\. Share the Custom Link**

  

Now you can share this link with sub-account users, allowing them to import the template directly into their accounts under your branded domain.