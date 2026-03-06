---
title: "When {{appointment.start_time}} or any other appointment custom values are not showing up"
url: "https://help.gohighlevel.com/support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up"
category: "Uncategorized"
---

# When {{appointment.start_time}} or any other appointment custom values are not showing up

When **{{appointment.start\_time}}** or **any other appointment custom values** are not showing

  

Or When the appointment reminder campaign is not firing properly according to the appointment start time:

  

Or when the Add to Google calendar / Add to iCal/Outlook link is not working when sending a test email.

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666282/original/q4MMHhuPiMD37Wp6ThVJqi-NqsWQv6AF_Q.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48052844868/original/4JZxe3z0S5CYdKCd8Bi5lBh62aoMBd_66w.png?1596761415)

  

  

We will need the **Appointment** or **Customer booked appointment** trigger in order for the **{{appointment.start\_time}}** or **any other appointments custom values** to show up. To test the Custom Values, you will need to book an actual appointment.

  

If you use the **Pipeline stage changed** as the trigger, HighLevel won't know which appointment it is.

  

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666284/original/Apr7vQ6cP9Pwsre_hMgvqtIO9wQ31k6caA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961455/original/DIXR2nEa75kIzA_3KDdiSjyIa-IonFjyig.png?1591812887)

  

Same with Workflows:

  

We need to use **Appointment** or **Customer booked appointment** as the workflow trigger:

  

To test the Custom Values, you will need to **book an actual appointment**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666389/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1619565768)

  

  

  

If you need to manually add the lead to the **Appointment Reminder** Campaign, you will need to select the **appointment start time** as the **event start date.**

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666281/original/J49Z7zBy-fLeedsG7RyZzHAF4thoqgtelA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961457/original/eb744U-ucYRPt_GWsfy1HdfBgbXdkgHO1A.png?1591812887)

  

  

  

  

  

To reschedule manually, you could go to the **Appointments** tab on the right and switch **Confirmed** to **Reschedule**. This will automate the process of removing the leads out of the original appointment reminder campaign and re-adding them to the appointment reminder campaign again with the new appointment time.

  

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666283/original/2a6LrAcwyEAM1mTDqVEmoHE4yEv4k8Lh1w.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961458/original/jT-AV5ARigSw3pYBCB-OnQaNDf6h5oocww.png?1591812887)

  

  

  

  

If you want your leads to be able to reschedule themselves, you could choose the **reschedule link** from the Custom Values in the appointment reminder campaign: 

  

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666279/original/B61mleFlU1RUPlPPZjkA_VVNUlOixAtLXg.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961456/original/62vMn961ixYBFsqpWIf1BJ1mzr5jt8eWQg.png?1591812887)

  

  

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666278/original/qYptao1e4Ky9XNjxR8tbTemyIZp8UvAmpQ.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961453/original/_tApzRr1QjXTOq9gDVBE7-YxuZ6TO4t_aA.png?1591812887)