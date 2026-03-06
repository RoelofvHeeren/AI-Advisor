---
title: "Pushing & Loading Snapshot Updates to Client Accounts"
url: "https://help.gohighlevel.com/support/solutions/articles/48000982587-pushing-loading-snapshot-updates-to-client-accounts"
category: "Uncategorized"
---

# Pushing & Loading Snapshot Updates to Client Accounts

## What’s the Difference?  
  

-   Pushing Updates = Sends changes from an updated snapshot to sub-accounts that previously loaded it.
    
-   Loading a Snapshot = Adds snapshot items into an existing sub-account without deleting or modifying existing content.  
      
      
    

## Part 1: Pushing Updates to Sub-Accounts  
  
When to Use:

You’ve made changes to your original sub-account and refreshed the snapshot - now you want to **sync those updates** to sub-accounts that previously loaded that snapshot.Important: Always refresh the snapshot before pushing updates to ensure the latest changes are included.

###  How to Push Snapshot Updates

1.  Go to Agency View > Account Snapshots  
      
    
2.  Locate your snapshot and click the ? Refresh icon to pull in recent changes
    
3.  Then click the Push Updates icon next to the snapshot
    
4.  Confirm the prompt by clicking OK  
      
    
5.  Select the sub-accounts you want to update.
    
6.  Choose which assets to push (e.g., workflows, funnels, forms)  
      
    

### What Happens When You Push Updates?

-   New assets added via snapshot refresh will be added to the sub-accounts
    
-   Existing assets (e.g., workflows, campaigns) will be overwritten with the latest version in the snapshot
    

Any custom changes made by the client to snapshot-linked assets will be lost unless they’re duplicated first

###   
Important Rules to Know:

<table style="border:none;border-collapse:collapse;"><colgroup><col width="284"><col width="340"></colgroup><tbody><tr style="height:25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Behavior</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Outcome</span></p></td></tr><tr style="height:40.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;Items originally created by the snapshot</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Will be&nbsp;</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">overwritten</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;during push</span></p></td></tr><tr style="height:40.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;Items edited manually in the sub-account</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Will be&nbsp;</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">reverted</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;if included in push</span></p></td></tr><tr style="height:40.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;Items duplicated by the user (e.g., copy of a campaign)</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Safe - not touched</span></p></td></tr><tr style="height:27.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;Custom Values</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Never edited or deleted</span></p></td></tr><tr style="height:27.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;Users (e.g., assigned in campaigns)</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Not modified</span></p></td></tr><tr style="height:40.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">&nbsp;External agency accounts</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Cannot receive push updates - they must re-import via shared link</span></p></td></tr></tbody></table>

###   
Pro Tip: How to Prevent Overwrites

If you want to let clients customize a campaign without it being overwritten:

1.  Create a copy of the original item (e.g., “Campaign X (Copy)”)
    
2.  Instruct the client to make edits to the copied version  
      
    
3.  Update any connected automations to use the copy instead  
    

 The copied version is not tracked by the snapshot and will remain untouched during updates.

* * *

## Part 2: Loading Snapshots into Existing Accounts

  

This is for adding snapshot content into a live sub-account manually.

### What Happens:

-   Nothing gets deleted  
    
-   Snapshot items are added on top of existing content
    
-   If you load the same snapshot multiple times, items will duplicate  
    
-   For agencies loading snapshots into 100+ accounts:  
    
    -   The first 100 are processed immediately  
        
    -   Next 100 after 10 minutes  
        
    -   Then every 10 minutes thereafter in batches of 100  
          
        

 Use Load Snapshot if you’re onboarding a client with a template  
 Use Push Update if they’ve already been onboarded and need synced changes

* * *

Related Articles

-   [Refresh/Update Snapshots  
      
    ](https://help.gohighlevel.com/support/solutions/articles/48000982583-refresh-update-snapshots)
    
-   [Load Snapshots Into Existing Account  
      
    ](https://help.gohighlevel.com/support/solutions/articles/48000982582-load-snapshots-into-existing-sub-account)
    
-   [Share Snapshots with Other Agencies](https://help.gohighlevel.com/support/solutions/articles/48000982513-how-to-share-snapshots)
    

##   

#