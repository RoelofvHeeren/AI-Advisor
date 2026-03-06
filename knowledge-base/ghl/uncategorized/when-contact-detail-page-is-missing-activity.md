---
title: "When contact detail page is Missing Activity"
url: "https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity"
category: "Uncategorized"
---

# When contact detail page is Missing Activity

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48102407459/original/ivyljfwjRUuiUZ_imGedAavptkRZ_mdh8Q.png?1620342991)

Our developer, Malde dives deep into this and added more logs to troubleshoot further to find the following reasons:

  

One reason why attribution activity is missing from the contact details might be because the lead fills out the form using iPhone/safari. And this issue happened because the User turns on the option to block all the cookies when form submission happens.

Here is the reference link: [https://support.apple.com/en-in/guide/safari/sfri11471/mac](https://support.apple.com/en-in/guide/safari/sfri11471/mac)

  

  

And one other case where we can't track activity, If

  

?notrack=true

params are present on the URL. ex: 

[https://test.com/?notrack=true](https://test.com/?notrack=true)

  

  

Cookies and local storage permissions are required. We are storing user's activity and server session-id on the browser's local storage. If session-id does not store on their local storage or if we can't access it, we can't store contact activity.

For the notes: we are storing every activity but not assign them to contact if the session is not stored or access.