---
title: "Marketplace: App Uninstall API"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006586-marketplace-app-uninstall-api"
category: "Uncategorized"
---

# Marketplace: App Uninstall API

Explore the new HighLevel Marketplace feature, App Uninstall API. This powerful tool lets developers remove dormant user accounts from their applications—reducing unnecessary webhook activity and optimizing performance. Benefit from detailed setup instructions and learn about upcoming enhancements geared toward flexible webhook management. 

* * *

**TABLE OF CONTENTS**

-   [What is App Uninstall API?](#What-is-App-Uninstall-API?)
-   [Key Benefits of App Uninstall API](#Key-Benefits-of-App-Uninstall-API)
-   [Managing Webhook Subscriptions](#Managing-Webhook-Subscriptions)
-   [How To Setup App Uninstall API](#How-To-Setup-App-Uninstall-API)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

## **What is App Uninstall API?**

  

The App Uninstall API is a dedicated capability within HighLevel’s Marketplace that allows app developers to programmatically remove their applications from inactive or dormant user accounts. By targeting and uninstalling apps from unused accounts, this API not only streamlines app management but also minimizes the processing of redundant webhook events—ensuring that resources remain focused on active user interactions.

* * *

## **Key Benefits of App Uninstall API**

  

This feature contributes directly to enhanced efficiency and performance within your app ecosystem by offering several tangible advantages:

  

-   **Reduced Overhead Costs** – Uninstalling apps from dormant accounts lessens redundant webhook triggers and lowers processing expenses.  
      
    
-   **Improved System Latency** – Fewer unnecessary events lead to faster responses and smoother operations for active users.  
      
    
-   **Streamlined App Management** – Automate the cleanup of inactive accounts, allowing for cleaner and more manageable app deployments.  
      
    
-   **Cost Efficiency** – Minimize resource utilization by focusing processing power on active, revenue-generating accounts.

* * *

## **Managing Webhook Subscriptions**

  

While the App Uninstall API addresses the immediate need to control webhook noise from dormant accounts, future enhancements are on the horizon. Developers can look forward to increased control over webhook subscriptions on a per-account basis. This upcoming capability is designed to grant finer control over event notifications, further tailoring performance improvements to specific operational needs:

  

-   **Enhanced Flexibility** – Customize how webhook events are subscribed for each account.  
      
    
-   **Improved Customization** – Adjust event triggers to better differentiate between active and inactive account activities.  
      
    
-   **Optimized Resource Management** – Further reduce processing load by fine-tuning webhook configurations.

* * *

## **How To Setup App Uninstall API**

  

Integrating the App Uninstall API into your workflow is straightforward and ensures that you can immediately start reducing unnecessary webhook traffic. Follow these steps for a seamless setup process:

  

  

1\. **Authentication**: Verify that you have valid API credentials from HighLevel to authorize your requests.

  

2\. **Identify Dormant Accounts**: Utilize your app’s analytics or database to pinpoint inactive user accounts that require uninstallation.

  

3\. **Call the API Endpoint**: Use the designated App Uninstall API endpoint as described in the [Public API documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application) to initiate the removal process.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055533358/original/YHVXP1etZ8BJdZMFB_6OxgDQR1xSstvPMg.png?1759933243)

  

  

4\. **Monitor Webhook Activity**: Check your webhook logs to confirm that events from uninstalled, dormant accounts cease, ensuring active accounts operate with improved efficiency.

  

  

5\. **Automate Your Process**: Integrate the API call into your routine maintenance or monitoring scripts for ongoing, automated management of dormant accounts.

  

  

This systematic approach assures that your app remains lean and responsive, delivering resources where they matter most.

* * *

## **Frequently Asked Questions**

  

**Q: What is the App Uninstall API?**

It is a HighLevel Marketplace feature that lets developers programmatically remove their app from dormant user accounts.

  

  

**Q: How does uninstalling apps from dormant accounts benefit my application?**

It minimizes unnecessary webhook events, reducing overhead costs and improving latency for active accounts.

  

  

**Q: Where can I find documentation for the App Uninstall API?**

Detailed instructions and endpoint information are available in the Public API documentation at 

[Uninstall an application](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application/index.html).

  

  

**Q: Can the API be integrated into automated workflows?**

Yes, you can incorporate the API calls into automated scripts to regularly manage dormant accounts.

  

  

**Q: Will there be future enhancements related to webhook events?**

Absolutely. In Q4, additional APIs will let developers manage webhook subscriptions per account, offering more flexibility.

  

  

**Q: What prerequisites are needed before using this API?**

Ensure you have valid API credentials and a reliable method for identifying dormant accounts through your app’s analytics.