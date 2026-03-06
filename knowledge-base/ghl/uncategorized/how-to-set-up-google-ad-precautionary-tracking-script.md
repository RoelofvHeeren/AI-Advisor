---
title: "How to set up Google Ad Precautionary Tracking Script"
url: "https://help.gohighlevel.com/support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script"
category: "Uncategorized"
---

# How to set up Google Ad Precautionary Tracking Script

**Covered in this article:**

#### [](#How-to-set-up-Google-Ad-Precautionary-Tracking-Script)

  
[**How to set up Google Ad Precautionary Tracking Script**](#How-to-set-up-Google-Ad-Precautionary-Tracking-Script)

[**Step 1:** Visit your Google Ad account](#Step-1%3A%C2%A0Visit-your-Google-Ad-account)

[**Step 2:** Click on Tools and Settings > Bulk Actions > Scripts (See image below)](#Step-2%3A-Click-on-Tools-and-Settings-%3E-Bulk-Actions-%3E-Scripts-\(See-image-below\)%C2%A0) 

[**Step 3:** Next, we need to remove the predefined code and add this script:](#Step-3%3A%C2%A0Next,-we-need-to-remove-the-predefined-code-and-add-this-script%3A)

[**Step 4:** After closing, we need to change the name of the script and change the frequency from the list to the Hourly view.](#Step-4%3A%C2%A0After-closing,-we-need-to-change-the-name-of-the-script-and-change-the-frequency-from-the-list-to-the-Hourly-view.)

  
[**Frequently Asked Questions**](#Frequently-Asked-Questions)

-   [If I have another script, will it affect it?](#If-I-have-another-script,-will-it-affect-it?)
-   [Why do I need to authorize it?](#Why-do-I-need-to-authorize-it?)

####   

  

* * *

## **How to set up Google Ad Precautionary Tracking Script**

The script is a simple example of how you would set up the Google AdPrecautionary tracking code. 

#### The script acts as a fail-safe if the UTM template fails in capturing the attribution data. 

  

It will track all clicks on a particular link and send it to Google Analytics. The only thing that needs to be changed in this script is the URL for the tracking page, which should match the one used by your website.

  

  

* * *

## **Step 1:** Visit your Google Ad account

##   
**Step 2:** Click on Tools and Settings > Bulk Actions > Scripts **(See image below)** 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241977655/original/vEEGwa2QwMlESew_jEuLDUxkpD7wzoHZ3w.png?1659117941)

  

**Please Note:**

If you are not able to find it, be sure to move to advanced view to see the tools and setting option.

  

* * *

## **Step 3:** Next, we need to remove the predefined code and add this script:

function main() {  
    var TrackingTemplate = "{lpurl}?utm\_source=adwords&utm\_medium={AdName}&utm\_campaign={CampaignName}&utm\_content={AdGroupName}&utm\_keyword={keyword}&utm\_matchtype={matchtype}&campaign\_id={campaignid}&ad\_group\_id={adgroupid}&ad\_id={creative}";  
  
  
    var \_CAMPAIGN\_CONTAINS = "";  
    var \_ADGROUP\_CONTAINS = "";  
    var STATUS = "ENABLED";  
  
  
    if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {  
        Logger.log("Enter at least one of the {CampaignName} or {AdGroupName} or {AdName} parameter in the tracking template");  
        return  
    }  
      
    if (TrackingTemplate.search("{AdGroupName}") > 0) {  
        var adgroupIterator = {  
            hasNext: function() {  
                return false  
            }  
        }  
        if (\_ADGROUP\_CONTAINS == "" && \_CAMPAIGN\_CONTAINS == "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("Status = " +  STATUS).get();  
        } else if (\_ADGROUP\_CONTAINS == "" && \_CAMPAIGN\_CONTAINS !== "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + \_CAMPAIGN\_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        } else if (\_ADGROUP\_CONTAINS !== "" && \_CAMPAIGN\_CONTAINS !== "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + \_CAMPAIGN\_CONTAINS + "'").withCondition("Name contains '" + \_ADGROUP\_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        } else if (\_ADGROUP\_CONTAINS !== "" && \_CAMPAIGN\_CONTAINS == "") {  
            adgroupIterator = AdsApp.adGroups().withCondition("Name contains '" + \_ADGROUP\_CONTAINS + "'").withCondition("Status = " + STATUS).get();  
        }  
  
  
        if (!adgroupIterator.hasNext()) {  
            Logger.log("No Campaigns/Adgroups matched with this condition");  
            return  
        }  
        while (adgroupIterator.hasNext()) {  
            var adgroup = adgroupIterator.next();  
            var adgrouptemplate = TrackingTemplate.replace(/{AdGroupName}/g, adgroup.getName().replace(/\\s/g, '%20'))  
            if (TrackingTemplate.search("{CampaignName}") > 0) {  
                adgrouptemplate = adgrouptemplate.replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\\s/g, '%20'))  
            }  
  
  
            if (TrackingTemplate.search("{AdName}") > 0) {  
                var adsIterator = adgroup.ads().get();  
                while (adsIterator.hasNext()) {  
                  var ad = adsIterator.next();  
                  var adType = ad.getType();  
                  var headline = "";  
  
  
                  if (ad.getHeadline()) {  
                    headline = ad.getHeadline();  
                  } else if(ad.isType().expandedTextAd()) {  
                    headline = ad.asType().expandedTextAd().getHeadlinePart1();  
                  } else if(ad.isType().gmailImageAd()) {  
                    headline = ad.asType().gmailImageAd().getName();  
                  } else if(ad.isType().gmailMultiProductAd()) {  
                    headline = ad.asType().gmailMultiProductAd().getHeadline();  
                  } else if(ad.isType().gmailSinglePromotionAd()) {  
                    headline = ad.asType().gmailSinglePromotionAd().getHeadline();  
                  } else if(ad.isType().html5Ad()) {  
                    headline = ad.asType().html5Ad().getName();  
                  } else if(ad.isType().imageAd()) {  
                    headline = ad.asType().imageAd().getName();  
                  } else if(ad.isType().responsiveDisplayAd()) {  
                    headline = ad.asType().responsiveDisplayAd().getShortHeadline();  
                  } else if(ad.isType().responsiveSearchAd()) {  
                    var headlines = ad.asType().responsiveSearchAd().getHeadlines();  
                    if (headlines && headlines\[0\].text) {  
                      headline = headlines\[0\].text;  
                    }  
                  }  
  
  
                  Logger.log("Headline text : " + headline);  
  
  
                  if (headline) {  
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, headline.replace(/\\s/g, '%20'))  
                  } else {  
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, ad.getId())  
                  }  
                }  
            }  
            adgroup.urls().setTrackingTemplate(adgrouptemplate);  
            Logger.log(adgroup.getCampaign().getName() + " => " + adgroup.getName() + " => " + adgrouptemplate)  
        }
    }
}

  

##   
  

## **Step 4:** After closing, we need to change the name of the script and change the **frequency** from the list to the **H****ourly** view.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248384457/original/eWel0Kfb1IBQoxSSLIJ2-oWLVw2oYZZ-_g.png?1661957147)

  

  

  

* * *

# **Frequently Asked Questions**

  

### **If I have another script, will it affect it?**

Yes, Scripts can override as it is affecting UTM parameters.

  

  

### **Why do I need to authorize it?**

Authorization is needed for the script as it gets implemented on Google Ad Account. It is necessary to check the preview before running it, it should show the majority of campaigns as successful with the landing page found.