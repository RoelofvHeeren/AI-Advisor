---
title: "Unable to send whats app text, due to invalid parameter error."
url: "https://help.gohighlevel.com/support/solutions/articles/155000005114-unable-to-send-whats-app-text-due-to-invalid-parameter-error-"
category: "Uncategorized"
---

# Unable to send whats app text, due to invalid parameter error.

WhatsApp text fails with invalid parameter errors as per the below screenshot.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045416532/original/qfxzFl3vBfbvog8o6oToLFny6oH_7nHzAA.png?1745301423)  
  
  

**Solution:**  
In this case, we need to check whether the "From" and "To" numbers are the same. If both numbers are identical, the WhatsApp message will fail with an "Invalid Parameter" error.

This is because we do not support sending WhatsApp messages to the same number from which it is being sent. Please inform the client to use a different number for testing.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045416555/original/oEzUfUBFQ574x6OY4yrCRPoIR2NvLVbDsg.png?1745301475)