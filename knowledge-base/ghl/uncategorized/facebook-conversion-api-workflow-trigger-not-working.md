---
title: "Facebook Conversion API Workflow Trigger Not Working"
url: "https://help.gohighlevel.com/support/solutions/articles/48001185898-facebook-conversion-api-workflow-trigger-not-working"
category: "Uncategorized"
---

# Facebook Conversion API Workflow Trigger Not Working

Please make sure that you are not using the test workflow button when testing the Facebook Conversion API in Workflow.

  

Always save and publish and use one of these triggers to test your conversion..

  

  

Trigger should be a input trigger like

1.  Form Submission
2.  Survey submission
3.  Appointment Submission (from booking widget)
4.  2 step order form

  

For appointment it will only work with

“Customer Booked appointment” not with “appointment” as appointments is general trigger and “Customer Booked appointment” is the trigger for widget

  

Lead value is required if you will use Purchase event of else you can keep it blank.