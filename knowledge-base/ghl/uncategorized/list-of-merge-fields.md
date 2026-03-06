---
title: "List of Merge Fields"
url: "https://help.gohighlevel.com/support/solutions/articles/48001078171-list-of-merge-fields"
category: "Uncategorized"
---

# List of Merge Fields

Merge fields let you personalize messages and documents by inserting saved details automatically, such as a contact’s name, an assigned user’s email, appointment times, or invoice totals. When a message sends or a document generates, each merge field is replaced with the matching value for that specific recipient or record. This helps keep communication consistent and accurate across emails, text messages, invoices, campaigns, and automated workflows.  
  

> **Note on “Raw” Phone Format:** Phone fields shown in raw format remove spaces, parentheses, and dashes. Raw format is especially helpful when using phone numbers in links, tracking parameters, or international formats.

* * *

**TABLE OF CONTENTS**

-   [Contact Merge Fields](#Contact-Merge-Fields)
-   [User Merge Fields](#User-Merge-Fields)
-   [Appointment Merge Fields](#Appointment-Merge-Fields)
-   [Calendar Merge Fields](#Calendar-Merge-Fields)
-   [Campaign Merge Fields](#Campaign-Merge-Fields)
-   [Message Merge Fields](#Message-Merge-Fields)
-   [Account Merge Fields](#Account-Merge-Fields)
-   [Right Now Merge Fields](#Right-Now-Merge-Fields)
-   [Attribution Merge Fields](#Attribution-Merge-Fields)
-   [First Attribution](#First-Attribution%E2%80%8B)
-   [Latest Attribution](#Latest-Attribution)
-   [Invoice Merge Fields](#Invoice-Merge-Fields)
-   [Company Details](#Company-Details%E2%80%8B)
-   [Customer Details](#Customer-Details%E2%80%8B)
-   [Sender Details](#Sender-Details%E2%80%8B)
-   [Card Information](#Card-Information%E2%80%8B)[](#Course-Merge-Fields)
-   [Course Merge Fields](#Course-Merge-Fields)
-   [Service Booking Merge Fields](#Service-Booking-Merge-Fields)
-   [Service Line Items and Assigned User](#Service-Line-Items-and-Assigned-User%E2%80%8B)[](#Default-or-Fallback-Values-for-Empty-Fields)
-   [Default or Fallback Values for Empty Fields](#Default-or-Fallback-Values-for-Empty-Fields)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Need-Help?)
-   [Need Help?](#Need-Help?)

* * *

## **Contact Merge Fields**

  

These fields pull information saved on the contact record. They’re commonly used for greetings, confirmations, and personalized follow-ups.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Full name

 | 

{{contact.name}}

 | 

Jane Smith

 |
| 

First name

 | 

{{contact.first\_name}}

 | 

Jane

 |
| 

Last name

 | 

{{contact.last\_name}}

 | 

Smith

 |
| 

Email

 | 

{{contact.email}}

 | 

jane@smith.com

 |
| 

Phone

 | 

{{contact.phone}}

 | 

(515) 555-2345

 |
| 

Phone (raw format)

 | 

{{contact.phone\_raw}}

 | 

+15155552345

 |
| 

Company name

 | 

{{contact.company\_name}}

 | 

Smith Plumbing

 |
| 

Full address

 | 

{{contact.full\_address}}

 | 

1234 W. Main St, Chicago, IL 60657

 |
| 

Address line 1

 | 

{{contact.address1}}

 | 

1234 W. Main St

 |
| 

City

 | 

{{contact.city}}

 | 

Chicago

 |
| 

State/Region

 | 

{{contact.state}}

 | 

Illinois

 |
| 

Postal code

 | 

{{contact.postal\_code}}

 | 

60657

 |
| 

Time zone

 | 

{{contact.timezone}}

 | 

GMT-06:00 America/Chicago

 |
| 

Date of birth

 | 

{{contact.date\_of\_birth}}

 | 

Jan 3, 1980

 |
| 

Source

 | 

{{contact.source}}

 | 

Referral

 |
| 

Website

 | 

{{contact.website}}

 | 

www.example.com

 |
| 

Contact ID

 | 

{{contact.id}}

 | 

FZDn5mYlkZuCCQe5Bep8

 |

* * *

## **User Merge Fields**

  

These fields pull information about the assigned user (or sender) tied to the activity, conversation, or appointment.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Full name

 | 

{{user.name}}

 | 

John Doe

 |
| 

First name

 | 

{{user.first\_name}}

 | 

John

 |
| 

Last name

 | 

{{user.last\_name}}

 | 

Doe

 |
| 

Email

 | 

{{user.email}}

 | 

john@doe.com

 |
| 

Phone

 | 

{{user.phone}}

 | 

(333) 555-9876

 |
| 

Phone (raw format)

 | 

{{user.phone\_raw}}

 | 

+13335559876

 |
| 

Email signature

 | 

{{user.email\_signature}}

 | 

John Doejohn@doe.com(333) 555-9876

 |
| 

Booking link

 | 

{{user.calendar\_link}}

 | 

https://booking.example.com/schedule/john-doe

 |
| 

Appointment user phone (raw)

 | 

{{appointment.user.phone\_raw}}

 | 

+13335559876

 |
| 

External calling number

 | 

{{user.call\_provider\_phone\_number}}

 | 

(234) 555-9876

 |
| 

External calling number (raw)

 | 

{{user.call\_provider\_phone\_number\_raw}}

 | 

+12345559876

 |

  
  

> **Important:** Some accounts may display different field names for “external calling number” depending on configuration. Use the merge field picker in your editor to insert the exact field name available in your account.

* * *

## **Appointment Merge Fields**

  

These fields pull details from an appointment record and are commonly used in confirmations, reminders, and reschedule messages.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Title

 | 

{{appointment.title}}

 | 

Appointment with Bob

 |
| 

Start date/time

 | 

{{appointment.start\_time}}

 | 

Wed, Nov 5, 2025 3:30 PM

 |
| 

Start date only

 | 

{{appointment.only\_start\_date}}

 | 

Nov 5, 2025

 |
| 

Start time only

 | 

{{appointment.only\_start\_time}}

 | 

3:30 PM

 |
| 

End date/time

 | 

{{appointment.end\_time}}

 | 

Wed, Nov 5, 2025 4:00 PM

 |
| 

End date only

 | 

{{appointment.only\_end\_date}}

 | 

Nov 5, 2025

 |
| 

End time only

 | 

{{appointment.only\_end\_time}}

 | 

4:00 PM

 |
| 

Day of week

 | 

{{appointment.day\_of\_week}}

 | 

Monday

 |
| 

Month number

 | 

{{appointment.month}}

 | 

11

 |
| 

Time zone

 | 

{{appointment.timezone}}

 | 

CST

 |
| 

Cancellation link

 | 

{{appointment.cancellation\_link}}

 | 

https://booking.example.com/cancel?event\_id=123

 |
| 

Reschedule link

 | 

{{appointment.reschedule\_link}}

 | 

https://booking.example.com/reschedule?event\_id=123

 |
| 

Meeting location

 | 

{{appointment.meeting\_location}}

 | 

123 W Main St, Chicago, IL 60657

 |
| 

Notes

 | 

{{appointment.notes}}

 | 

This is our second meeting.

 |
| 

Add to calendar link

 | 

{{appointment.add\_to\_calendar}}

 | 

https://booking.example.com/add-to-calendar?event\_id=123

 |
| 

Google Calendar link

 | 

{{appointment.add\_to\_google\_calendar}}

 | 

https://booking.example.com/google/calendar/add-event/calendarid

 |
| 

iCal/ICS link

 | 

{{appointment.add\_to\_ical}}

 | 

https://booking.example.com/get-ics?event\_id=123

 |
| 

Recurring repeats

 | 

{{appointment.recurring.repeats}}

 | 

0

 |
| 

Recurring times to repeat

 | 

{{appointment.recurring.times\_to\_repeat}}

 | 

1

 |
| 

Assigned user name

 | 

{{appointment.user.name}}

 | 

John Doe

 |
| 

Assigned user email

 | 

{{appointment.user.email}}

 | 

john@doe.com

 |
| 

Assigned user phone

 | 

{{appointment.user.phone}}

 | 

(333) 555-9876

 |
| 

Assigned user phone (raw)

 | 

{{appointment.user.phone\_raw}}

 | 

+13335559876

 |
| 

Assigned user signature

 | 

{{appointment.user.email\_signature}}

 | 

John Doejohn@doe.com

 |

* * *

## **Calendar Merge Fields**

  

These fields pull details from the calendar associated with the event.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Calendar name

 | 

{{calendar.name}}

 | 

Lawn Services Calendar

 |

* * *

## **Campaign Merge Fields**

  

These fields support scheduled campaign events and timing variables.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Event date/time

 | 

{{campaign.event\_date\_time}}

 | 

Nov 5, 2025 3:30 PM

 |
| 

Event date

 | 

{{campaign.event\_date}}

 | 

Nov 5, 2025

 |
| 

Event time

 | 

{{campaign.event\_time}}

 | 

3:30 PM

 |

* * *

## **Message Merge Fields**

  

These fields are useful when referencing the content of a message inside a workflow or automation.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Message body

 | 

{{message.body}}

 | 

Hi, just a quick reminder about our call tomorrow morning.

 |
| 

Message subject

 | 

{{message.subject}}

 | 

Meeting Reminder

 |

* * *

## **Account Merge Fields**

  

These fields pull business or account-level details used for branding, receipts, and standard business identity.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Account name

 | 

{{location.name}}

 | 

WidgetWorks

 |
| 

Full address

 | 

{{location.full\_address}}

 | 

555 Oak St, Tampa, FL 33602

 |
| 

Address line 1

 | 

{{location.address}}

 | 

555 Oak St

 |
| 

City

 | 

{{location.city}}

 | 

Tampa

 |
| 

State/Region

 | 

{{location.state}}

 | 

Florida

 |
| 

Country

 | 

{{location.country}}

 | 

US

 |
| 

Postal code

 | 

{{location.postal\_code}}

 | 

33602

 |
| 

Email

 | 

{{location.email}}

 | 

name@domain.com

 |
| 

Phone

 | 

{{location.phone}}

 | 

(333) 555-3344

 |
| 

Phone (raw format)

 | 

{{location.phone\_raw}}

 | 

+13335553344

 |
| 

Website

 | 

{{location.website}}

 | 

mywebsiteurl.com

 |
| 

Logo URL

 | 

{{location.logo\_url}}

 | 

https://files.example.com/logo.png

 |
| 

Owner first name

 | 

{{location\_owner.first\_name}}

 | 

Lisa

 |
| 

Owner last name

 | 

{{location\_owner.last\_name}}

 | 

White

 |
| 

Owner email

 | 

{{location\_owner.email}}

 | 

lisa@white.com

 |
| 

Account ID

 | 

{{location.id}}

 | 

DP4mTqaz7L9XpweFvRjC

 |

* * *

## **Right Now Merge Fields**

  

These fields insert the current time values at the moment the message is generated.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Second

 | 

{{right\_now.second}}

 | 

9

 |
| 

Minute

 | 

{{right\_now.minute}}

 | 

10

 |
| 

Hour (24h)

 | 

{{right\_now.hour}}

 | 

14

 |
| 

Hour (AM/PM)

 | 

{{right\_now.hour\_ampm}}

 | 

2

 |
| 

AM/PM

 | 

{{right\_now.ampm}}

 | 

PM

 |
| 

Day of week

 | 

{{right\_now.day\_of\_week}}

 | 

Tuesday

 |
| 

Month name

 | 

{{right\_now.month\_name}}

 | 

November

 |
| 

Day

 | 

{{right\_now.day}}

 | 

4

 |
| 

Month (number)

 | 

{{right\_now.month}}

 | 

11

 |
| 

Year

 | 

{{right\_now.year}}

 | 

2025

 |
| 

Date (MM/DD/YYYY)

 | 

{{right\_now.middle\_endian\_date}}

 | 

11/4/2025

 |
| 

Date (DD/MM/YYYY)

 | 

{{right\_now.little\_endian\_date}}

 | 

4/11/2025

 |

* * *

## **Attribution Merge Fields**

  

These fields support tracking details tied to a contact’s first and most recent attribution source. Values commonly come from tracking parameters included in links.

  

### **First Attribution**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Session source

 | 

{{contact.attributionSource.sessionSource}}

 | 

Referral

 |
| 

Landing URL

 | 

{{contact.attributionSource.url}}

 | 

https://example.com/form?utm\_source=ads

 |
| 

Campaign

 | 

{{contact.attributionSource.campaign}}

 | 

fall\_sale

 |
| 

UTM source

 | 

{{contact.attributionSource.utmSource}}

 | 

ads

 |
| 

UTM medium

 | 

{{contact.attributionSource.utmMedium}}

 | 

banner

 |
| 

UTM content

 | 

{{contact.attributionSource.utmContent}}

 | 

ad12

 |
| 

Referrer

 | 

{{contact.attributionSource.referrer}}

 | 

https://referrer.example.com

 |
| 

Campaign ID

 | 

{{contact.attributionSource.campaignId}}

 | 

23849260571384729

 |
| 

Ad click ID

 | 

{{contact.attributionSource.clickId}}

 | 

ABC123XYZ

 |
| 

UTM keyword

 | 

{{contact.attributionSource.utmKeyword}}

 | 

running\_shoes

 |
| 

UTM match type

 | 

{{contact.attributionSource.utmMatchType}}

 | 

exact

 |
| 

Ad group ID

 | 

{{contact.attributionSource.adGroupId}}

 | 

123456

 |
| 

Ad ID

 | 

{{contact.attributionSource.adId}}

 | 

78910

 |

###   
**Latest Attribution**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Session source

 | 

{{contact.lastAttributionSource.sessionSource}}

 | 

Referral

 |
| 

Landing URL

 | 

{{contact.lastAttributionSource.url}}

 | 

https://example.com/form?utm\_source=ads

 |
| 

Campaign

 | 

{{contact.lastAttributionSource.campaign}}

 | 

xmas\_sale

 |
| 

UTM source

 | 

{{contact.lastAttributionSource.utmSource}}

 | 

ads

 |
| 

UTM medium

 | 

{{contact.lastAttributionSource.utmMedium}}

 | 

banner

 |
| 

UTM content

 | 

{{contact.lastAttributionSource.utmContent}}

 | 

ad18

 |
| 

Referrer

 | 

{{contact.lastAttributionSource.referrer}}

 | 

https://referrer.example.com

 |
| 

Campaign ID

 | 

{{contact.lastAttributionSource.campaignId}}

 | 

23850176293047583

 |
| 

Ad click ID

 | 

{{contact.lastAttributionSource.clickId}}

 | 

XYZ789ABC

 |
| 

UTM campaign

 | 

{{contact.lastAttributionSource.utmCampaign}}

 | 

blowout\_sale

 |
| 

UTM keyword

 | 

{{contact.lastAttributionSource.utmKeyword}}

 | 

hvac\_repair

 |
| 

UTM match type

 | 

{{contact.lastAttributionSource.utmMatchType}}

 | 

broad

 |
| 

Ad group ID

 | 

{{contact.lastAttributionSource.adGroupId}}

 | 

654321

 |
| 

Ad ID

 | 

{{contact.lastAttributionSource.adId}}

 | 

10987

 |

  

> **Important:** Some accounts may display provider-specific attribution fields. For a white-label-safe message template, use the merge field picker to insert the exact “click ID” field names available in your account, then avoid including provider names in the surrounding text.

* * *

## **Invoice Merge Fields**

  

These fields pull values from invoice records and are often used in invoices, receipts, payment confirmations, and reminders.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Invoice name

 | 

{{invoice.name}}

 | 

Consulting Contract

 |
| 

Invoice number

 | 

{{invoice.number}}

 | 

43255

 |
| 

Issue date

 | 

{{invoice.issue\_date}}

 | 

2025-04-05

 |
| 

Due date

 | 

{{invoice.due\_date}}

 | 

2025-10-05

 |
| 

Subtotal

 | 

{{invoice.sub\_total}}

 | 

$500.00

 |
| 

Discount amount

 | 

{{invoice.discount\_amount}}

 | 

$50.00

 |
| 

Tax amount

 | 

{{invoice.tax\_amount}}

 | 

$25.00

 |
| 

Total amount

 | 

{{invoice.total\_amount}}

 | 

$475.00

 |
| 

Invoice title

 | 

{{invoice.title}}

 | 

Consulting Invoice

 |
| 

Invoice link

 | 

{{invoice.url}}

 | 

https://pay.example.com/invoice/abc123

 |

###   
**Company Details**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Company name

 | 

{{invoice.company.name}}

 | 

Test Solutions

 |
| 

Company phone

 | 

{{invoice.company.phone}}

 | 

(888) 555-9876

 |
| 

Company address

 | 

{{invoice.company.address}}

 | 

1234 Maple St

 |
| 

Company city

 | 

{{invoice.company.city}}

 | 

Milwaukee

 |
| 

Company state

 | 

{{invoice.company.state}}

 | 

Wisconsin

 |
| 

Company country

 | 

{{invoice.company.country}}

 | 

US

 |
| 

Company website

 | 

{{invoice.company.website}}

 | 

www.example.com

 |
| 

Company logo URL

 | 

{{invoice.company.logo}}

 | 

https://files.example.com/logo.png

 |

###   
**Customer Details**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Customer name

 | 

{{invoice.customer.name}}

 | 

Tom Taylor

 |
| 

Customer first name

 | 

{{invoice.customer.first\_name}}

 | 

Tom

 |
| 

Customer last name

 | 

{{invoice.customer.last\_name}}

 | 

Taylor

 |
| 

Customer phone

 | 

{{invoice.customer.phone}}

 | 

(222) 555-3456

 |
| 

Customer email

 | 

{{invoice.customer.email}}

 | 

tom@taylor.com

 |
| 

Customer company

 | 

{{invoice.customer.company}}

 | 

Taylor Construction

 |
| 

Customer address

 | 

{{invoice.customer.address}}

 | 

3333 N. Main St

 |
| 

Customer city

 | 

{{invoice.customer.city}}

 | 

Chicago

 |
| 

Customer state

 | 

{{invoice.customer.state}}

 | 

Illinois

 |
| 

Customer postal code

 | 

{{invoice.customer.postal\_code}}

 | 

60657

 |

###   
**Sender Details**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Sender name

 | 

{{invoice.sender.name}}

 | 

Bob Brown

 |
| 

Sender email

 | 

{{invoice.sender.email}}

 | 

bob@brown.com

 |

###   
**Card Information**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Card brand

 | 

{{invoice.card.brand}}

 | 

Visa

 |
| 

Card last 4

 | 

{{invoice.card.last4}}

 | 

7654

 |

##   
**Course Merge Fields**

  

These fields support course or lesson content when sending enrollment or content-related messages.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Category title

 | 

{{courses.categoryTitle}}

 | 

Getting Started with Knitting

 |
| 

Product title

 | 

{{courses.productTitle}}

 | 

Basics of Knitting

 |
| 

Post title

 | 

{{courses.postTitle}}

 | 

The Best Types of Yarn

 |

* * *

## **Service Booking Merge Fields**

  

These fields pull details from a service booking record, including schedule, pricing, and assigned user information.  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Title

 | 

{{servicebooking.title}}

 | 

Men’s Haircut

 |
| 

Start time

 | 

{{servicebooking.start\_time}}

 | 

3:30 PM

 |
| 

End time

 | 

{{servicebooking.end\_time}}

 | 

4:30 PM

 |
| 

Start date

 | 

{{servicebooking.start\_date}}

 | 

March 6, 2026

 |
| 

End date

 | 

{{servicebooking.only\_end\_date}}

 | 

March 7, 2026

 |
| 

End time only

 | 

{{servicebooking.only\_end\_time}}

 | 

4:30 PM

 |
| 

Day of week

 | 

{{servicebooking.day\_of\_week}}

 | 

Monday

 |
| 

Month (number)

 | 

{{servicebooking.month}}

 | 

3

 |
| 

Month name

 | 

{{servicebooking.month\_name}}

 | 

March

 |
| 

Time zone

 | 

{{servicebooking.timezone}}

 | 

CST

 |
| 

Total price

 | 

{{servicebooking.total\_price}}

 | 

$55

 |
| 

Meeting location

 | 

{{servicebooking.meeting\_location}}

 | 

123 Main St, Chicago, IL 60657

 |
| 

Meeting location name

 | 

{{servicebooking.meeting\_location\_name}}

 | 

Chair 4

 |
| 

Reschedule link

 | 

{{servicebooking.reschedule\_link}}

 | 

https://booking.example.com/reschedule?booking\_id=123

 |
| 

Cancellation link

 | 

{{servicebooking.cancellation\_link}}

 | 

https://booking.example.com/cancel?booking\_id=123

 |

###   
**Service Line Items and Assigned User**  
  

| 
**Name**

 | 

**Merge Field**

 | 

**Example**

 |
| --- | --- | --- |
| 

Service name

 | 

{{this.name}}

 | 

Haircut - Regular

 |
| 

Service price

 | 

{{this.price}}

 | 

$125

 |
| 

Service duration

 | 

{{this.duration}}

 | 

45 mins

 |
| 

Service start date

 | 

{{this.only\_start\_date}}

 | 

March 6, 2026

 |
| 

Service start time

 | 

{{this.only\_start\_time}}

 | 

4:30 PM

 |
| 

Service time zone

 | 

{{this.timezone}}

 | 

GMT-06:00 America/Chicago

 |
| 

Addon name

 | 

{{this.addonName}}

 | 

Hair Coloring

 |
| 

Addon price

 | 

{{this.addonPrice}}

 | 

$25

 |
| 

Addon duration

 | 

{{this.addonDuration}}

 | 

15 mins

 |
| 

Addon quantity

 | 

{{this.addonQuantity}}

 | 

1

 |
| 

Assigned user name

 | 

{{this.user.name}}

 | 

Jane Smith

 |
| 

Assigned user email

 | 

{{this.user.email}}

 | 

jane@smith.com

 |
| 

Assigned user phone

 | 

{{this.user.phone}}

 | 

(515) 555-2345

 |
| 

Assigned user phone (raw)

 | 

{{this.user.phone\_raw}}

 | 

+15155552345

 |
| 

Assigned user signature

 | 

{{this.user.email\_signature}}

 | 

Jane Smithjane@smith.com

 |

* * *

## **Default or Fallback Values for Empty Fields**

  

Some merge fields may be blank if the saved data is missing. When a merge field has no value, it is typically replaced with nothing.

  

A practical workaround is to show one block of content when a field has a value, and a different block when it is empty. This approach helps keep messages readable and avoids awkward blank greetings.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064516854/original/2OAepGxVVU1dXnSiUzRVJsyHm0cUC0cOtg.png?1770653968)**  
_Toggle Conditional Sending, select a field such as First Name, set the condition (for example, “is not empty”), and define what content should display only when that condition is met. A separate block can then be configured to display when the condition is not met._

* * *

## **Frequently Asked Questions**

  

**Q: What happens if a merge field has no value?**

The merge field is usually replaced with a blank space, which may remove part of a sentence (for example, “Hi ,”).

  

**Q: What is the difference between a standard phone field and a raw phone field?**

Raw phone format removes characters like parentheses and dashes and is typically better for links, tracking parameters, and international formats.

  

**Q: Can merge fields be used in invoices and payment-related messages?**

Yes. Merge fields can insert invoice numbers, totals, due dates, customer details, and links.

  

**Q: Why do I see different merge fields than another account?**

Available merge fields can vary based on enabled tools, configuration, and the type of record you’re editing.

  

**Q: How can I avoid blank greetings when first name is missing?**

Use conditional content blocks so one greeting displays when the first name exists and another displays when it does not.

* * *

## **Need Help?**

  

If merge fields are not populating as expected, confirm the record contains the needed information (such as a first name, email, or appointment time). For template and automation issues, check that the correct merge field was inserted from the merge field picker and that the message is being sent from the expected context (contact, appointment, invoice, or booking).

  

If you still need assistance, use the in-app help options available in your account and include the merge field name, where it’s being used, and an example of the output you’re seeing.

##