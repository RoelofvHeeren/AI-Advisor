---
title: "Unlocking Customization: Enhancing Marketplace Apps with Custom JavaScript"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003278-unlocking-customization-enhancing-marketplace-apps-with-custom-javascript"
category: "Uncategorized"
---

# Unlocking Customization: Enhancing Marketplace Apps with Custom JavaScript

Custom JavaScript and CSS via the Marketplace Apps

The custom JS feature enhances our platform’s capabilities by adding Custom JavaScript codes on the Marketplace APPs. This functionality allows developers to personalize and extend the platform’s features within agency-distributed apps.

  

Introduction

The ability to integrate Custom JavaScript and CSS into our platform opens up a range of possibilities for developers looking to enhance the functionality and aesthetics of their agency-distributed apps. This feature supports a higher degree of customization and allows for more dynamic interactions within the platform. However, to maintain the integrity, security, and performance of our platform, all custom scripts must undergo a thorough review process before they can be deployed.

  

Distribution Type

The app must be of distribution type - Agency or Agency & Sub-account for adding custom Javascript code.

  

Review Process and Guidelines

When submitting custom JavaScript or CSS for agency distribution apps, adhere to the following guidelines to ensure a smooth review process. The review process has a Service Level Agreement (SLA) of up to 10 days. Once approved, scripts will be embedded into the agency apps.

  

Guidelines for Custom Scripts

-   Sensitive Data Access: Custom scripts must not access sensitive data to prevent unintended data manipulation or conflicts.
    
-   Obfuscated Code: Avoid using obfuscated code. Clear, readable code is required to prevent potential security risks and ensure script intentions are transparent.
    
-   Database Access: Custom scripts must not directly access the database to maintain data integrity and security.
    
-   Remote File References: All logic should be self-contained. Remote file references or on-the-fly script loads are not permitted.
    
-   Embedding Scripts: Ensure your JavaScript code is properly embedded within <script> tags for correct integration with the DOM.
    
-   Avoid Console Logs: Do not include console.log statements in your custom scripts to maintain clean and efficient code.
    

  

Testing Before Submission

To avoid potential issues, thoroughly test your custom scripts before submission. You can do this by adding them to the Custom JavaScript & Custom CSS section in the Agency view under Settings -> Company. If you lack agency access, consider creating a sandbox account to simulate the environment and test your scripts.

  

By following these guidelines, you contribute to a secure and reliable platform experience for all users. We appreciate your cooperation and look forward to seeing the innovative ways you enhance our platform!

  

[](https://highlevel.stoplight.io/docs/integrations/342bca923152a-custom-js)[How to utilize custom JS Wrapper Function?](https://highlevel.stoplight.io/docs/integrations/342bca923152a-custom-js)