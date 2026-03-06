---
title: "Hydration event in custom code in Funnels"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels"
category: "Uncategorized"
---

# Hydration event in custom code in Funnels

A new custom event `hydrationDone` has been introduced in the preview. This event will be dispatched when the funnel/website preview has completed its hydration so a user can run specific custom code post hydration.

  

**Why this is needed?**  
Previously, users might have faced issues where their custom scripts would execute before our preview hydration had completed. This timing mismatch could lead to incorrect execution flow and hinder the intended functionality of their custom code. 

  

**How did we solve this?**

1.  By dispatching the 'hydrationDone' event after complete hydration of the preview is completed, we've effectively eliminated this source of contention.
2.  Users can add an event listener on the `hydrationDone` event and execute their following code. This is especially useful if they are trying to manipulate DOM content.

**How to use?**

-   Add a code element in the builder
-   Listen the `hydrationDone` event like below

 document.addEventListener(
  "hydrationDone",
  () => {
     // Add custom javascript here
})

-   Once the preview DOM content is loaded and hydration event is received, the custom code will run without any issue or race condition.

**_Note_**_: Optimise javascript may need to be disabled if user's custom code is critical on page load, as it delays the hydration event if there is no user interaction._

  

_This is how your custom Javascript/ HTML should look like:  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026075581/original/JUAS8WOxjL8rYexXLNPsz4ITdqJTBToK8A.png?1715782328)_