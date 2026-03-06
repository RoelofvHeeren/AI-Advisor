---
title: "Understanding UTM parameters for email campaigns"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002929-understanding-utm-parameters-for-email-campaigns"
category: "Uncategorized"
---

# Understanding UTM parameters for email campaigns

  

  

Learn about UTM tracking, how it works, and how you can use it in your GHL email marketing to better understand how well your marketing efforts are performing.

##   
**What is UTM tracking?**

  
UTM parameters are short codes attached to the end of URLs. They assist tools like Google Analytics in identifying the sources of your website traffic. By including UTM parameters in your GHL email campaigns, you can analyze how your messaging impacts your website traffic and conversions.  
  
In our current implementation, there are 3 UTM parameters that we support by default -

   
**a. utm\_source = email :** This is a mandatory field that is kept selected by default and has the value "email" for internal tracking purpose  
**b. utm\_medium** = email marketing: This is an mandatory field but the value can be customised. The default value is "email marketing"  
**c. utm\_campaign** = Campaign Name (Send Date): This is an optional fields where the value can be chosen from the drop downs

You can add additional parameters upto 5 in this list by specifying the value as a text.  
  
  

## **Best Practices for UTM Parameters**

1.  **Avoid PII:** Do not use personally identifiable information (e.g., social security numbers, addresses). This data is restricted by analytics platforms.
    

1.  **Use Essential Parameters:** Stick to `utm_source`, `utm_medium`, and `utm_campaign` for clarity and effective analysis.
    
2.  **Consistent Case:** UTM parameters are case sensitive. Choose a capitalization rule and use it consistently.
    
3.  **Prefer Underscores:** Use underscores (\_) instead of spaces to avoid encoding issues.  
      
    

##   
**Where would UTM Parameters would not work?**

  
1\. **Trigger Links:** For links under trigger links, the UTM parameters would not work in this version of the release  
2\. **Incorrect Syntax:** The links need to have the necessary prefixes like https:// and needs to be correct, specially if they were saved under a custom value

3\. **Test Emails:** It is advisable to send dummy campaigns to test UTM parameters  
  

## **Steps to Use UTM Parameters**

1.  **Navigate to Email Marketing:** Go to the Email Marketing section of your platform.
    
2.  **Access Settings:** Click on the **Settings** page under **Email Campaign**.
    
3.  **Review Tracking Options:** Click on the **Tracking** option to review the default UTM parameters.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046572/original/fI_PPIE21-aT1Yd6u-LMpPirqnNNBaqsyg.png?1722254439)
    
4.  **Enable Default UTM Parameters:** To apply UTM parameters to all campaigns by default, toggle the enable switch.
    
5.  **Edit Default Values:** Modify the values for `utm_medium` or `utm_campaign` as needed.
    
6.  **Add Custom Parameters:** Click on **Add Custom Parameter** to specify additional parameters and their values.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046649/original/929hzznoa3R_PTPyddZje_pSglisCBjXNw.png?1722254559)
    
7.  **Select Parameters:** Check the boxes next to the UTM parameters you wish to add to your campaigns.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046703/original/uYJ62iZfgOdEDWrpOou3Uzz7Wfsj1k7Q6Q.png?1722254616)
    
8.  **Save Changes:** Click **Save** to apply your settings.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046732/original/kgRF5qcYybs4RpNWmqdck9_TQpjy_qLtug.png?1722254648)
    
9.  **Disable for Specific Campaigns:** To disable UTM parameters for a particular campaign, turn off the tracking option on the **Send** or **Schedule** page.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030046814/original/ydy9bC1vs5nh1NzOMn_2Q34EOHSgZUnr6A.png?1722254677)
    

##