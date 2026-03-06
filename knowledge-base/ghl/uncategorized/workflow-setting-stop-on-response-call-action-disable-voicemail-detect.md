---
title: "Workflow Setting Stop On Response & Call Action Disable Voicemail Detect"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect"
category: "Uncategorized"
---

# Workflow Setting Stop On Response & Call Action Disable Voicemail Detect

This article explains the important interaction between the workflow's "Stop on Response" setting and the "Disable Voicemail Detect" setting within the Call action.

  

These two settings control how your workflow reacts when an automated phone call is made to a contact. They allow you to decide whether the workflow should prioritize accuracy by distinguishing a human from a voicemail, or prioritize speed for faster call connections.

  

The main [Workflow Settings - Overview](https://help.gohighlevel.com/en/support/solutions/articles/48001239875) article is here.

  

Note that what the Business does in the Call action is irrelevant to Stop on Response. The Business will be called first; if the Business doesn't answer, the workflow will continue, if the Business does answer, and the Contact then doesn't answer, the workflow will continue. Only the Contact (or the Contact's voicemail) is relevant to Stop on Response.

  

* * *

## **Stop on Response**

  

This is a general setting for your entire workflow. When enabled, it automatically removes a contact from the workflow if they respond to any communication sent from it, including SMS, emails, or calls. This prevents you from sending more automated messages to a lead who is already engaged.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954910/original/ExA6xUTEZTcK0JLbf1jsuHXFp7yL2rBvPg.png?1761609860)

* * *

## **Disable Voicemail Detect**

  

This is an advanced setting found specifically within the "Call" action. Its job is to control whether the system attempts to identify if a call was answered by a person or an answering machine.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954924/original/iFgpTL5EKEjFsCvGfpReEPw1rPfH3D3g5g.png?1761609939)

* * *

## **Combinations**

  

Understanding how to configure these settings depends on your goal. Do you want to ensure the workflow never stops for a voicemail, or do you want the fastest possible call connection time?

  

<table style="width: 100%;"><tbody><tr><td class="fr-thick" dir="ltr" style="width: 33.3333%;">Stop On Response is</td><td class=" fr-thick" dir="ltr" style="width: 33.3333%;">Disable Voicemail Detect is</td><td class="fr-thick" dir="ltr" style="width: 33.3333%;">Therefore</td></tr><tr><td dir="ltr" style="width: 33.3333%;">ON</td><td dir="ltr" style="width: 33.3333%;">ON</td><td dir="ltr" style="width: 33.3333%;">The workflow will stop if the contact's voicemail answers.<br><br>Set the call timeout to less than 20 seconds to ensure the call will not go to voicemail.</td></tr><tr><td dir="ltr" style="width: 33.3333%;">ON</td><td dir="ltr" style="width: 33.3333%;">OFF</td><td dir="ltr" style="width: 33.3333%;">The workflow will detect voicemail, so calls that go to voicemail will not activate Stop On Response, the contact will continue in the workflow.</td></tr><tr><td dir="ltr" style="width: 33.3333%;">OFF</td><td dir="ltr" style="width: 33.3333%;">OFF</td><td dir="ltr" style="width: 33.3333%;">The workflow will continue regardless of contact responses or voicemail.<br><br>This will be a little slower since voicemail detection is enabled by default.</td></tr><tr><td dir="ltr" style="width: 33.3333%;">OFF</td><td dir="ltr" style="width: 33.3333%;">ON</td><td dir="ltr" style="width: 33.3333%;">The workflow will continue regardless of contact responses or voicemail.<br><br>This will be a little faster since voicemail detect is disabled.</td></tr></tbody></table>

  

* * *

## **Frequently Asked Questions**

  

**Q: Why is my workflow stopping after a call even if the person didn't answer?**

A: This typically happens when you have "Stop on Response" enabled for the workflow and "Disable Voicemail Detect" enabled on the Call action. If the call goes to voicemail, the system sees it as a response and stops the workflow. To prevent this, set the "Call Timeout" on that action to 20 seconds or less.

  

**Q: What causes the delay when voicemail detection is enabled?**

A: When voicemail detection is on (the default setting), the system pauses for a few seconds after the call is answered to analyze the audio. It is listening for indicators of a live person versus a pre-recorded voicemail greeting. This analysis causes the short delay before the call is fully connected.

  

**Q: What is the recommended 'Call Timeout' to avoid triggering voicemail?**

A: A timeout of 20 seconds is generally recommended. Most phone services and mobile carriers will ring for more than 20 seconds before forwarding the call to a voicemail service.

  

**Q: Does 'Stop on Response' apply to manual calls I make from the Conversations tab?**

A: No. The "Stop on Response" setting only applies to automated actions sent from within that specific workflow. Manual communications or communications from other workflows will not affect it.