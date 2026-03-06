---
title: "Ring Incoming call to multiple users"
url: "https://help.gohighlevel.com/support/solutions/articles/155000002850-ring-incoming-call-to-multiple-users"
category: "Uncategorized"
---

# Ring Incoming call to multiple users

In this article, we will understand how **'Ring Incoming call to all Users'/'****Ring Incoming call to multiple users'** option works.

  

**Why do we need 'Ring Incoming call to multiple users'?**

You may have a phone number for incoming calls that is quite important for your business. You want no calls to go answered. So you want to direct calls made to this number to multiple people in your team. This is where 'Ring multiple users' comes in. With this option, incoming calls made to your number can be directed to multiple people in your team. The first one to answer the call speaks to the caller, others don't need to do anything.

  

**How can you setup 'Ring Incoming call to multiple users'?**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029556966/original/aH5sWzDR4fl4cfAfxsGW448-oQphg6ABvA.jpeg?1721394025)

1.  Go to sub-account > Settings > Phone numbers > Edit configuration (3 dots in phone number row) > 'Ring Incoming Call to multiple Users'
2.  Enable the checkbox
3.  Add one or more users to the field (upto 6 users)
4.  Click on 'Save'

  

**How does the call flow when 'Ring Incoming Call to multiple Users'?**

Incoming call flow in order of priority:

1.  Incoming call goes to Workflow/IVR/Automation: Ring Incoming Call to multiple Users does NOT work
2.  Incoming call goes to User linked to the called number: Ring Incoming Call to multiple Users works
3.  Incoming call goes to User linked to the contact who called: Ring Incoming Call to multiple Users works
4.  Incoming call goes to forwarding number: Ring Incoming Call to multiple Users works
5.  Incoming call goes to business profile phone number: Ring Incoming Call to multiple Users works

  

**How do I select which device the users receive the call on?**

If you want to specify a particular device type/channel where you want your user to receive the call via 'Ring Incoming call to multiple users', you can go under Sub-account > Settings > My Staff > Edit user > Call & Voicemail Settings > Default Channel for Ring All. This option can be configured for each individual user.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029551777/original/x0G55lIJAFyA9wRh4_CVaTjjrAPtMkLBwQ.png?1721390236)

  

  

**FAQs**

How many people can I ring in parallel with 'Ring Incoming call for multiple users'?

You can ring upto 6 users in parallel with this option. The first one to answer the call talks to the caller, the rest do not.

  

On which device would these users receive the call?

Each user can set their preference regarding which device they want to use to answer the calls routed through ring incoming call for multiple users. This can be done under Sub-account > Settings > My Staff > Edit user > Call & Voicemail Settings > Default Channel for Ring All.

  

What if one of the users under 'Ring Incoming call for multiple users' declines the call?

The call will keep ringing other users as usual. One user declining the incoming call won't affect the other users.

  

What if there's a 'Forwarding number' and 'Ring Incoming call for multiple users' setup at the same time?

All of them will receive the call. The first one to answer the call remains connected to the caller.

  

If a phone number is linked to a user and I add that user under 'Ring Incoming Call to multiple Users' too, what will happen?

Since the phone number is already linked to the user, they will receive a call as per preferences set under Settings > My Staff > Call & Voicemail settings > Forward calls to. The channel set under 'Default channel for Ring all' will not be used since the user is already supposed to be getting a call.