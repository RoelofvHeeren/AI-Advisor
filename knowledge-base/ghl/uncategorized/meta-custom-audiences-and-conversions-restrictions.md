---
title: "Meta: Custom Audiences and Conversions restrictions"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006301-meta-custom-audiences-and-conversions-restrictions"
category: "Uncategorized"
---

# Meta: Custom Audiences and Conversions restrictions

Beginning September 2, 2025, we will begin rolling out more proactive restrictions on custom audiences and custom conversions that may include information not permitted under [our terms](https://www.facebook.com/legal/terms/businesstools?_rdr). For example, any custom audience or custom conversions suggesting specific health conditions (e.g., “arthritis”, “diabetes”) or financial status (e.g., “credit score”, “high income”) will be flagged and prevented from being used for new and ongoing ad campaigns.

These changes are part of our ongoing efforts designed to help prevent advertisers from sharing information that is not allowed under our terms. While these measures are designed to complement advertisers’ compliance efforts, they are not a substitute for advertisers’ own compliance mechanisms.

If you manage custom audiences, custom conversions or campaigns that use custom audiences or custom conversions on behalf of your customers, you should familiarize yourself with these changes now and prepare to support your customers with any necessary updates ahead of restrictions in September.  

Impact on Your Customers’ Campaigns After Restrictions Begin 

Meta will not pause your customers’ ongoing campaigns after restrictions begin on September 2, 2025. However, the impact you and your customers may observe will depend primarily on if and how flagged custom audiences or custom conversions are used.

-   Custom audiences: Flagged custom audiences with non-permitted information will be proactively flagged and prevented from being used for new ad campaigns. New users will not be added to flagged custom audiences, and any existing campaigns using flagged audiences may see reduced delivery and performance over time unless resolved. 
    
-   Custom conversions: Flagged custom conversions with non-permitted information will be proactively flagged and prevented from being used for new ad campaigns. Flagged custom conversions will no longer be matched, and any campaigns using the flagged custom conversion will stop receiving new conversion data and may see reduced optimization and performance over time unless resolved. 
    

How To Resolve Flagged Custom Audiences

-   For Custom Audiences (Web, Mobile App, Offline, Customer File Custom Audiences): 
    
    -   Review and remove any non-permitted information from the custom audiences.
        
    -   Create a new custom audience or choose different existing audiences and make sure these do not include information not allowed under our terms.
        
-   For Lookalike Audiences: Resolve issues with the underlying custom audience (also known as seed audience) or create a new lookalike audience and make sure these do not include information not allowed under our terms.
    
-   Request a Review: If you or your customers believe that their custom audiences have been flagged in error, they can request a review in Ads Manager or Audience Manager if/when they begin receiving in-product notifications.
    

More information can be found  [here](https://www.facebook.com/business/help/1055828013359808?locale=en_US&draft=1055828013359808).

How To Resolve Flagged Custom Conversions

-   New Campaigns: Create a new custom conversion and make sure it does not include information not allowed under our terms, or choose a different custom conversion and make sure it does not include information not allowed under our terms.
    
-   Existing Campaigns: If a running campaign is flagged due to a flagged custom conversion, consider duplicating the campaign and selecting a different custom conversion and make sure these do not include information not allowed under our terms prior to publishing the new duplicated campaign. Once the campaign is published, removing or selecting a different custom conversion is NOT possible. 
    
-   Request a Review: If you or your customers believe that their custom conversions have been flagged in error, they can request a review in Ads Manager or Events Manager if/when they begin receiving in-product notifications. 
    

More information can be found [here](https://www.facebook.com/business/help/2455915321411996?locale=en_US&draft=2455915321411996).

How Can You Support Your Customers

-   Be prepared to assist customers with changes to their audiences or ad campaign strategies, and familiarize yourself with the resources available to support them. 
    
-   Beginning July 15, 2025, advertisers will receive emails and in-product notifications if their custom audiences or custom conversions are affected by these restrictions, enabling them to resolve issues before restrictions begin. Please work directly with your customers to understand the impact ahead of September 2, 2025.
    
-   Work with your customers to ensure that any custom audiences you provide or upload to Meta on their behalf  comply with [our terms](https://www.facebook.com/legal/terms/businesstools?_rdr) and do not suggest non-permitted information.
    
-   Alongside restrictions, we will surface new operations status via the API to help identify flagged audiences, conversions, and impacted ad sets. Most actions to resolve flagged audiences or conversions can be done through the existing API, with further improvements planned for the next version release.
    
-   Note that restrictions will be applied on Meta's end, so you should not expect failed API calls for flagged custom audiences or custom conversions.