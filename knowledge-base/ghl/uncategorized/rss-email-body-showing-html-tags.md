---
title: "RSS Email Body showing HTML tags?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-"
category: "Uncategorized"
---

# RSS Email Body showing HTML tags?

  

**Issue:** RSS Email body shows html tags like this <p>

  

**Fix:** Need to use Custom RSS Item element in the email builder, and instead of using {{rss\_item.content}} use {{{rss\_item.content}}}

  
  
  

## HTML Based RSS Feed

The values returned by the RSS-based custom variable `{{rss_item.title}}` are HTML-escaped. For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;` or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-stash", `{{{`:

Eg: if your RSS feed source is something like this

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897350/original/jh0m8OZsy48DpFj0I-j42H8lVgfzmFB7Yg.png?1636829726)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

without "triple-stash" it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897349/original/WrYKfyhcJ5DK5j0lLKBZhA2VMTG80JaNkw.png?1636829725)

once you will use "triple-stash" `{{{rss_item.content}}}` it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897351/original/rxmtzjEm8PqMouDcAVPjKT1IJ7DnYuLEfA.png?1636829727)