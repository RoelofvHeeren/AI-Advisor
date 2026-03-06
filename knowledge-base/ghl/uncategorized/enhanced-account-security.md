---
title: "Enhanced Account Security"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002545-enhanced-account-security"
category: "Uncategorized"
---

# Enhanced Account Security

We’ve rolled out a new security update to keep your data safer than ever!

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034345888/original/4BHSSG3Nx3UB57D_SZGBk9bU54xXrf8SRA.jpeg?1728418263)

The enhanced security option does not restore API key generation for locations where it was previously revoked. It only applies to locations that still have an active API key.

  

Enabling Enhanced Account Security will:

1.  Disable Auto-generation of Location API keys: To enhance account security, API keys will not be automatically generated when you create a new location via API or our user interface (UI). Instead, you will need to generate them manually through the UI. 
    

  

2.  Exclude API Keys in Location CRUD APIs: Previously, you could access API keys via the Location CRUD APIs responses. Going forward, you’ll need to log in and retrieve the keys directly from the UI.  
      
    
3.  **Disable Users APIs on API v1:** User APIs on API v1 (legacy API version) for creating, updating and deleting users will be disabled. These APIs can be used to hack into your account easily if a hacker gets hold of your API key, hence these legacy APIs pose a security risk to your account.
    

  
  

Please note that as of June 17th, 2024 the Enhanced Account Security setting will become the default for all accounts, unless you have opted-out in advance. 

  

You’ll have the ability to opt-out in [Settings](https://app.gohighlevel.com/settings/company); however, we strongly advise against it as it will put your account and data at risk.