---
title: "What is LC Email?"
url: "https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-"
category: "Uncategorized"
---

# What is LC Email?

LC Email is an "Email Service Provider", or the "engine" that powers email. It helps agencies avoid the hassle of signing up for Mailgun or another 3rd party email service provider external to the system. In the past, when an agency signed up, they would need to integrate with Mailgun or another email service provider to send/receive email. With LC Email, sending and receiving email works on every sub-account with very little setup required.

If you are looking to migrate over to LC Email please see the setup guide: how to Migrate over to LC Email. 

* * *

## **What is LC Email?**

  
LC Email acts as an email service provider hosted by the CRM, which has industry-leading Deliverability, Error Monitoring, and Compliance so your emails are much more likely to be delivered. It's also considerably less expensive when compared to other email service providers in the market.

* * *

## **Why was this feature built?**

  

LC Email is designed to help agencies avoid the hassle of setting up and managing 3rd party email service providers like Mailgun or Sendgrid. 

  

As such, we built LC Email to work out-of-the-box with minimal setup and configuration required by an agency or a sub-account. In short, we wanted to provide an email service that "just works."

* * *

## **Setup**

## **Errors & Sending Limits  
**

  
When you schedule an email send, HighLevel may show an inline error if the scheduled send would exceed your current sending limits. (Needs Confirmation: exact UI wording and where the message appears.)

  
**How to resolve:  
**

-   Reduce recipients for the scheduled send or split the send into smaller batches.  
      
    
-   If you need higher throughput, follow the guidance in this article’s Ramp-Up Model and Extend Sending Limit sections.

  

Do not rely on static thresholds in other articles. Limits vary by ramp-up stage and configuration. Use this LC Email article as the authoritative reference for current limits and ramp-up behavior.

* * *

## **LC Email Pricing**

  

Pricing is $0.675/1000 emails for all the plans and the transactions will be detailed at the Agency Level:

  
To view them, go to "Agency View" > "Billing" > "Credits"

  

**Note: All incoming and outgoing emails (To, CC, and BCC) will incur charges**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831080/original/uWgbiGCqEjw3nsUKsb4CDekqJyDBOK5k_w.jpg?1721846702)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831093/original/0vmQ0pA0iItR2tdwnbThShKEIZfJXFO0yQ.jpg?1721846737)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831105/original/aDQoUwqqzj67hlwzUOazHPU0QM-W-2yZXg.jpg?1721846772)

* * *

## **LC Email Verification Pricing**

  

You can turn on email verification, which will help to ensure you are sending emails to valid addresses. This service is charged at $2.50 per 1,000 email verifications.

* * *

## **LC Email Forwarding Pricing  
**

  
The LC email forwarding charges are the same as the LC email Pricing charges.

Forwarded emails are billed the same way as outgoing emails. At the Agency level, each forwarded email incurs a charge. If re-billing is enabled for a sub-account, the sub-account will be charged for each forwarded email. 

  
To view detailed billing notifications; Go to -> Settings -> Billing -> Wallets & Transactions -> Detailed Transactions:

-     
    Billing Source Type – the type of service generating the charge
-     
    Billing Trigger ID – the unique identifier for the forwarded email event
-     
    
-   This makes it easier to track and verify which forwarded emails are being billed.

* * *

## **Ramp-Up Model:**

  

Every new sub-account on the LC Email system follows a Ramp-Up Model, which gradually increases the daily sending limit to help build the sending reputation and avoid spam filters.

  

The email limits scale daily for the first seven days. Starting on the 8th day, the limit depends on whether you’re using a shared IP or a dedicated IP for sending:

  
  

<table dir="ltr"><tbody><tr><td><span style="font-family: Helvetica,sans-serif;">Day</span></td><td><span style="font-family: Helvetica,sans-serif;">Email Limit</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">1</span></td><td><span style="font-family: Helvetica,sans-serif;">250</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">2</span></td><td><span style="font-family: Helvetica,sans-serif;">500</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">3</span></td><td><span style="font-family: Helvetica,sans-serif;">1,000</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">4</span></td><td><span style="font-family: Helvetica,sans-serif;">2,500</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">5</span></td><td><span style="font-family: Helvetica,sans-serif;">5,000</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">6</span></td><td><span style="font-family: Helvetica,sans-serif;">7,500</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">7</span></td><td><span style="font-family: Helvetica,sans-serif;">10,000</span></td></tr><tr><td><span style="font-family: Helvetica,sans-serif;">8th Day &amp; Ongoing</span></td><td><span style="font-family: Helvetica,sans-serif;">Shared domain: 150,00<br>Dedicated domain: 450,000</span></td></tr></tbody></table>

  

Please Note:

  

The daily counter resets every day at midnight 00:00:01 AM UTC. If the limit is reached before the rest time, the account is locked for the rest of the period.

  

Please note: It's important to validate the sub-account activity and make sure it is not a spam account.

* * *

## **Extend Sending Limit:  
**

1\. The limit for Shared IP email sending is 250 to 15,000 (To increase you must set up a Dedicated Sending Domain for the sub-account)

  

2\. The limit for Dedicated IP email sending is 250 to 450,000 (To increase this limit, please contact our support team)

  

Go to the sub-account detail page by navigating to "Agency View" > "Sub-Accounts" > Search and click on the Sub-Account Name and scroll down to the "Additional Settings" section to increase the limit. 

  

Shared domain:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831160/original/IxE4M2xEjR2qx9aoQ10sAa-0ZvnYSO-UJQ.jpg?1721846888)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831170/original/9JOJvixRnNLQ9wuWQ897afP7aES4Wnlj0A.jpg?1721846920)

  

Dedicated domain:![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831185/original/Ctf9TQgszFvp8BSf5E340Lvcy56c_rpNaA.jpg?1721846955)  

**How Does This Impact Affiliates?**

  

LC Email eliminates one of the two major hurdles to getting up and running with the CRM, which means your new affiliates will likely find success and stick.

* * *

## **Frequently Asked Questions:**

  

**How do I migrate my agency over to LC Email?**

  

Check out the help guide: Migrating My Agency Over to LC Email

  

  

**What About Agencies Who Want To Integrate Their SMTP?**

  

No problem! All new accounts will, by default, use LC Email, but a third-party SMTP provider can be integrated anytime.

  
**Where can I see my client's email usage?**

  

You can see the client's email usage by navigating to - Agency Settings -> Billing -> See Details (under Credits)

  

**What About Existing Accounts?**

  

Agencies will have the ability to seamlessly migrate to LC Email for existing HighLevel accounts!

  

**How can I bill my clients for usage?**

  

If you are on the Pro-plan, you can rebill your clients and save the time & effort needed to bill them manually.

  

**Will Email rebilling work with ISV?**

  

Absolutely! All agencies on the Pro Plan will continue to have the ability to re-bill email usage while using LC Email or a connected third-party SMTP. With the lower cost, there's even more margin for your agency!

  

**Does cold email work with LC email?**  
  

Yes. Please see this help article for more information.

  

**Is LC email HIPAA compliant?  
**

  
Yes We have a signed BAA with Twilio for HIPAA compliance. As long as you have our HIPAA compliance package you should be good to go!

  

**Why does my sub-account only have a 15,000 email limit?  
**

  
A sub-account without a Dedicated Domain will be considered a shared domain even if the agency has a Dedicated Domain. To resolve this, add a Dedicated Domain to the sub-account.