---
title: "Association Limits"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005346-association-limits"
category: "Uncategorized"
---

# Association Limits

##   

## What Are Association Limits?

  

Association limits let you control how many records can be linked together between objects. These rules ensure data remains organized, prevent over-association, and are now visually enforced in the UI.

##   

## What Are Association Limits?

  

-    Avoids over-linking between records.
    
-   Helps keep data structures clean.
    
-   Reduces user confusion when the limits are reached with clear UI feedback.
    

  

  

## Supported Relationship Types

  

### For multi-label associations:

-   One-to-One (1:1)
    
-   One-to-N (where N ≤ 1000)
    
-   One-to-Many
    
-   Many-to-Many
    

### For single-label contact-to-contact associations:

-   One-to-One (1:1)
    
-   Many-to-Many
    
-   Custom N-to-N
    

Note: Limits are enforced per label and reflected in the user interface.

  

## How to Set Up Association Limits

  

1.  Go to your sub-account, Navigate to Settings > Objects
    
2.  Select any Custom Object or Contacts![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047099121/original/j94NQGkBL1lsLO6m8jvWXcoDH_MzVAAOEQ.png?1747948523)
    
3.  Go to the Associations tab, Click Create Association or edit an existing one![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047099116/original/ExPdo2iAEguMb-5QAs0fnSuI9w4LOI4gyg.png?1747948522)
    
4.  Choose either a single label or a pair of labels.
    
5.  Under Configure Relationship, select the type (e.g. 1:1, 1:N) and define limits if applicable
    
6.  Use the Preview section to confirm constraints before saving.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047099119/original/E25loEVlQ7uYBZ3wmTwoOYt01TB7VlC94A.jpeg?1747948523)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047099118/original/u5Pd6PGpmm81C3NJgLmpNOrPfSLwwHHtlg.jpeg?1747948522)
    
7.  The configured associations are also shown in the associations tab.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047099120/original/OLMwz5bpP_ZeobCw1H0xK3GgTQ3qu9p7YA.png?1747948523)
    

## Example: Real Estate Management

A real estate agency wants to ensure that each Agent manages no more than 50 Properties:

-   Create a one-to-N relationship from Agent to Property
    
-   Set the limit as N = 50
    
-   When an agent hits this cap, users will see a UI warning and can no longer assign more properties, ensuring balanced workloads.
    

## Association Limits:

-   If you try to associate beyond the allowed count, an error message will be shown instantly, this helps in clear and efficient management of the data-structures