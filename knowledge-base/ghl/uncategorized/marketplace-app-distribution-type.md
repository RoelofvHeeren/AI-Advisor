---
title: "Marketplace App Distribution Type"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002141-marketplace-app-distribution-type"
category: "Uncategorized"
---

# Marketplace App Distribution Type

Below is a developer-facing guide covering both the new, simplified Marketplace distribution model and the OAuth flow you’ll need to implement to obtain the correct access tokens.

* * *

**TABLE OF CONTENTS**

-   [App Distribution Model](#App-Distribution-Model)
-   [Distribution scenarios](#Distribution-scenarios)
-   [Article elaborating pricing models supported for each distribution model](#Article-elaborating-pricing-models-supported-for-each-distribution-model)
-   [Backward compatibility](#Backward-compatibility)
-   [Target User: Agency](#Target-User%3A-Agency)
-   [Target User: Sub-account - Both Can Install](#Target-User%3A-Sub-account---Both-Can-Install)
-   [Target User: Sub-account - Only Agency Can Install](#Target-User%3A-Sub-account---Only-Agency-Can-Install)

* * *

## App Distribution Model

  

To configure your desired app distribution model, you have three fields:

<table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;"><colgroup><col width="112"><col width="139"><col width="373"></colgroup><tbody><tr style="height:25.75pt;"><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(209, 213, 216);"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Field</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(209, 213, 216); width: 17.416%;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Values</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(209, 213, 216); width: 64.6174%;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Description</span></p></td></tr><tr style="height:39.25pt;"><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Who is the target user of the app?</span></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 17.416%;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">‘Agency’ / ‘Sub-account’</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 64.6174%;"><ul style="margin-bottom: 0px; padding-inline-start: 48px;"><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Who is going to interact with the app?&nbsp;</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">In other words, whose access token does the app ultimately need?</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">For 95% of the apps, this would be <strong dir="ltr">“Sub-account” (Recommended)</strong></span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0);">This field cannot be modified once set.</span><br><br></p></li></ul></td></tr><tr style="height:39.25pt;"><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Who can install the app?</span></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 17.416%;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">‘Both Agency and Sub-account’ / ‘Agency Only’</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 64.6174%;"><ul style="margin-bottom: 0px; padding-inline-start: 48px;"><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Which user(s) may see and install the app from the Marketplace UI?</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">The <strong>recommended option is “Both Agency &amp; Sub-account”</strong>, to ensure your app has the maximum reach</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Use "Agency Only" If you’re build an app exclusively as a fully white-labelled SaaS feature that only agencies can discover and install to their sub-accounts.&nbsp;</span></p></li></ul></td></tr><tr style="height:39.25pt;"><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Can this app be bulk-installed by agencies?</span></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 17.416%;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">‘Yes’ / ‘No’</span></p></td><td style="border-width: 0.5pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 64.6174%;"><ul style="margin-bottom: 0px; padding-inline-start: 48px;"><li><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; background-color: transparent;">This is <strong>purely for backwards compatibility</strong> of apps already in the Marketplace. All apps added to the Marketplace going forward will be set to "Yes" (mandatory).</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; background-color: transparent;">If ‘Yes’, an agency owner/admin can install your app to multiple subaccounts in one operation.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 12pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Once set to 'Yes', this field cannot be reverted back to 'No'.</span></p></li></ul></td></tr></tbody></table>

##   

* * *

## Distribution scenarios

  

<table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;"><colgroup><col width="103"><col width="99"><col width="89"><col width="142"><col width="148"><col width="165"></colgroup><tbody><tr style="height:21pt;"><td colspan="3" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(209, 213, 216);"><p dir="ltr" style="line-height: 1.2; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Developer’s distribution config scenarios</span></p></td><td rowspan="2" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%; background-color: rgb(239, 239, 239);"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">User Installation Scenarios</span></p></td><td colspan="2" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 41.365%; background-color: rgb(209, 213, 216);"><p dir="ltr" style="line-height: 1.2; text-align: center; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Getting the right access token</span></p></td></tr><tr style="height:21pt;"><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(239, 239, 239); width: 12.1311%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Who is the target user?</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(239, 239, 239); width: 12.2356%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Who can install the app?</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(239, 239, 239); width: 14.6446%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Can the app be bulk-installed by agencies?</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%; background-color: rgb(239, 239, 239);"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Step 1: Identifying the type of installation from&nbsp;</span><a href="https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); font-weight: 700; text-decoration-skip-ink: none;">Get Access Token API</span></a><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">&nbsp;</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; background-color: rgb(239, 239, 239);"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Step 2:&nbsp;</span></p></td></tr><tr style="height:0pt;"><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 12.1311%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 12.2356%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 14.6446%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : false,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType” : ”Company”</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td></tr><tr style="height:21pt;"><td rowspan="5" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 12.1311%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Sub-account&nbsp;</span></p></td><td rowspan="4" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 12.2356%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency &amp; sub-account</span></p></td><td rowspan="2" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 14.6446%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">No</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Sub-account user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : false,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType” : ”Location”</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td></tr><tr style="height:21pt;"><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : <span dir="ltr" style="color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 14.6667px; font-weight: 400; text-align: start; text-indent: 0px; display: inline !important;">false</span>,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType" : "Location”</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td></tr><tr style="height:21pt;"><td rowspan="2" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 14.6446%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Yes</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Sub-account user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : <span dir="ltr" style="color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 14.6667px; font-weight: 400; text-align: start; text-indent: 0px; display: inline !important;">false</span>,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType" : "Location”</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">NA</span></p></td></tr><tr style="height:21pt;"><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(106, 168, 79); font-weight: 700;">[NEW and RECOMMENDED]</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : true,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType" : "Company”</span></p></td><td rowspan="2" style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 21.1699%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">1.&nbsp;</span><a href="https://marketplace.gohighlevel.com/docs/ghl/oauth/get-installed-location"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); font-weight: 400; text-decoration-skip-ink: none;">Get sub-accounts where app is installed</span></a></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><br></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">2.&nbsp;</span><a href="https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); font-weight: 400; text-decoration-skip-ink: none;">Get Location Token using Agency Token</span></a><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;for every location where app is installed</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><br></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">3. Listen to <a dir="ltr" href="https://marketplace.gohighlevel.com/docs/webhook/AppInstall" rel="noreferrer" target="_blank">AppInstall webhook event</a> for automatic future installations or installs done as part of a SaaS plan, and <a href="https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token" style="box-sizing: border-box; color: rgb(44, 92, 197); user-select: auto; font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-align: start; text-indent: 0px;"><span dir="ltr" style="box-sizing: border-box; font-size: 11pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); font-weight: 400; text-decoration-skip-ink: none;">Get Location Token using Agency Token</span></a> for the newly installed locations.</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><br></p></td></tr><tr style="height:21pt;"><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 12.2356%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency Only</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 14.6446%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Yes</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 19.6378%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Agency user installs the app</span></p></td><td style="border-width: 1pt; border-style: solid; border-color: rgb(0, 0, 0); padding: 5pt; overflow: hidden; overflow-wrap: break-word; width: 20.1951%;"><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“isBulkInstallation” : true,</span></p><p dir="ltr" style="line-height: 1.2; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">“userType" : "Company”</span></p></td></tr></tbody></table>

  

## **[](https://help.gohighlevel.com/support/solutions/articles/155000001217-set-up-your-app-pricing#Distribution-Types-and-Pricing-Models)[Article elaborating pricing models supported for each distribution model](https://help.gohighlevel.com/support/solutions/articles/155000001217-set-up-your-app-pricing#Distribution-Types-and-Pricing-Models)**

* * *

## Backward compatibility

  

For all existing apps, to ensure the existing installation flow and token exchange mechanism is maintained, we have configured the fields as follows for the existing/legacy distribution types:

  

  

| Legacy Distribution Type  
 | Developer’s distribution config mapping to ensure backward compatibility  
 | Recommendation on how you can maximise the reach for your app  
 |
| --- | --- | --- |
| Who is the target user?  
 | Who can install the app?  
 | Can the app be bulk-installed by agencies?  
 |
| --- | --- | --- |
| Agency Only  
 | Agency  
 | NA  
 | NA  
 | NA  
 |
| Sub-account Only  
 | Sub-account  | Agency & sub-account  
 | No  
 | 1\. Develop the token exchange mechanism for bulk-installation flow as mentioned above.  
2\. Once done, set "Can the app be bulk-installed by agencies?" to "Yes"  
 |
| Agency & Sub-account  
 | Sub-account  | Agency Only  
 | Yes  
 | To make the app accessible to sub-accounts, you must ensure the app does not require any agency-level access such as:  
-   Agency Level Scopes - companies.readonly, companies.write, location.write, saas/location.write, snapshots.readonly, snapshots.write, custom-menu-link.readonly, custom-menu-link.write
-   Module > Snapshots
-   Module > CustomJS

  
If your app does not require any of the above:  
1\. Develop the OAuth flow for installation by sub-account admins, which would generate a **userType: Location** token, as mentioned above.  
2\. Once done, change "Who can install the app?" **to** "**Agency & sub-account"** |

  

* * *

## **Target User: Agency**

  

Choose the Agency distribution type if your app's functionalities are applicable only to agency-level accounts.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583581/original/w4Mv3eWxtc7ky1cU_fU1FfLuBdg8fYAt_w.png?1750392548)

  

  
**App Listing**: Apps will be listed solely in the agency level app marketplace.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583594/original/f4TxfrBHaJTtETQV7pYDWWQ4nI5z7bz-vw.png?1750392601)

  

  

**Installation and Uninstallation**:  Only agency administrators or owners have the authority to install or uninstall the app at the agency account level.

  

**Payments**: For paid applications, the installing agency is responsible for the app's cost.

  

**Re-selling**: Agencies cannot re-sell these apps, as they are not available for installation at the sub-account level.

* * *

## **Target User: Sub-account - Both Can Install**

  

Select the Sub-account (both can install) type if your app's functionalities are intended for sub-account level accounts.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583624/original/kJtU4fEgullilWG0fxoAnDDRM-hJdD-cdg.png?1750392750)

  

  
**App Listing**: These apps are available to both agency owners/admins and sub-account admins to install. These apps are listed in both Marketplaces.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583635/original/eYRbavl9kxE3dTmJWUzJ26BuxrtACE9o4g.png?1750392836)

  

  

**Installation and Uninstallation**:  Both Sub-account admins and agency admins can install the app. 

Sub-account admins can discover and install these apps to their respective sub-accounts.

  

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404538/original/lQxf69LOM8uFEPOdE9MQ6M8gYq-b4GDkoA.png?1711222807)

  

  

**Bulk Installation**: If bulk-installation is supported by the app developer, agency admins can bulk-install such apps. If not, agency admins can install the app one sub-account at a time. Agencies can automatically install these apps for future sub-accounts if they choose the 'all sub-accounts' option during the initial installation.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

  

  

**Payments**:  The sub-account installing a paid app will bear its cost.

  

**Re-selling**:  These apps can be re-sold by agencies.

* * *

## **Target User: Sub-account - Only Agency Can Install**

  

Opt for type Sub-account (only agency can install) distribution if your app is designed such a way that agency owners are the only relevant installers.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048584235/original/ifH_YbCWG2-uY5wxZFLw6jeWGAm3Ma0PpQ.png?1750394316)

  

  
**App Listing**: These apps will only show up in the agency view of the Marketplace.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404478/original/ZaZlYBRJIocjPL0AfUJkH_yXBSpC_BEoWg.png?1711222458)

  

  
**Installation and Uninstallation**: Installation and uninstallation of these apps at the sub-account level must be carried out by agency admins or owners only.

  

**Bulk Installation**: If enabled, Agency admins can bulk-install such apps. If not, agency admins can install the app one sub-account at a time. Agencies can automatically install these apps for future sub-accounts if they choose the 'all sub-accounts' option during the initial installation.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

  

  

**Re-selling**: Agencies can re-sell these apps to their sub-accounts, with the agency paying the base price set by the developer and sub-accounts paying a marked-up price set by the agency.[](https://help.gohighlevel.com/en/support/solutions/articles/155000001220)[](https://help.gohighlevel.com/en/support/solutions/articles/155000001220)