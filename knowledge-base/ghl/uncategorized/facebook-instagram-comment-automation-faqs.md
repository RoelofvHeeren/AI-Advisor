---
title: "Facebook & Instagram comment automation FAQs"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002180-facebook-instagram-comment-automation-faqs"
category: "Uncategorized"
---

# Facebook & Instagram comment automation FAQs

  

**Q: I am not able to select the Facebook & Instagram actions and triggers in the workflow?**

Ans - Check is you have integrated your Facebook account or not. To integrate your account go to the "Integrations" tab in Settings.

  

**Q: Why do all the filter options disappear when I delete "Page is" in the trigger?**

Ans - "Page is" is the primary filter for the Interactive Messenger action. Deleting it removes all dependent filters.

  

**Q: How many buttons can I add in the Interactive Messenger action?**

Ans - You can add up to 3 buttons to provide different choices for users within the interactive message.

  

**Q: Can I add actions after the "Call" button?**

**Ans -** No. The "Call" button acts as the final action, and users who click it will be directed to the Default Branch.

  

**Q: When can I use the "Reply to DM" option?**

**Ans -** Use "Reply to DM" in two scenarios:

-   **Initiating a conversation:** Respond privately to users who send you a direct message (DM).
-   **Continuing a conversation:** Send follow-up messages after an initial "Reply to comment via DM" (DM).

**Q: Does "Reply to DM" always work?**

**Ans -** The system checks for an existing conversation within the last 24 hours before sending a Reply to DM. If no recent conversation exists, the message delivery will fail.

  

**Q: How long do I have to reply to a comment?**

**Ans -** A 7-day window applies to Comment Replies. You must send the reply via DM within 7 days, or delivery will fail.

  

**Q: Can I continue the conversation if the user has not replied to my DM which was a reply to the comment?**

**Ans -** If the user has not replied then they will move to the "Default Branch" and because there is no reply you can't use another Interactive Messenger action to continue the conversation. If the user has replied then you can use the action to continue the conversation.

  

**Q: I want to send a Reply to DM to a user comment but it is not working**?

**Ans -** To send a comment reply via DM make sure that "Reply Type" is selected as "Reply to comment via DM" for the first action and as "Reply to DM"for all the subsequent actions.

  

1.  **Q****: What is the default wait time added in the Interactive Messenger action?**
2.  **Ans -** By default, a wait of 1 minute is added, which is editable. If no button is selected, the contact will go to the "Default Timeout" branch.

**Q****: Will this trigger work for Ads also?**

  

**Ans -** Yes, select Custom in "Post type" and paste the post URL in "Post is" field and this will work.