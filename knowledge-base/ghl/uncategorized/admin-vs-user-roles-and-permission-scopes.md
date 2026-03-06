---
title: "Admin Vs. User Roles and Permission Scopes"
url: "https://help.gohighlevel.com/support/solutions/articles/48001078296-admin-vs-user-roles-and-permission-scopes"
category: "Uncategorized"
---

# Admin Vs. User Roles and Permission Scopes

The following is a table outlining permissions of sub-account level roles.

  

  

  

### **Sub-Account Level User Roles**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018238155/original/mcE4xdl46E3pyAgBhVD9qRWDvOg8gfscqg.png?1705709137)**

* * *

## **Quick-Reference Permission Matrix.  
**

  

  

<table style="width: 100%;"><tbody><tr><td style="width: 33.3333%; text-align: center;"><p class="p1"><strong dir="ltr">Agency-Only</strong></p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1"><strong dir="ltr">Sub-Account-Only</strong></p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1"><strong dir="ltr">Available in Both</strong></p><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Create / Edit / Delete Sub-Accounts</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Pipelines &amp; Opportunities</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">User Management (Admins can add/edit users within their level)</p><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Manage SaaS Mode &amp; Reselling</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Workflows / Campaigns</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Dashboard Reporting</p><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Global Integrations (Mailgun, Twilio Rebilling, Google API, etc.)</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Calendars &amp; Appointment Settings</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Media Library</p><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Snapshot Management</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Conversations (SMS, Email, Chat)</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Audit Logs</p><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Agency-Level Billing &amp; Branding</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Contact Management &amp; Smart Lists</p><br></td><td style="width: 33.3333%; text-align: center;"><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Agency Settings (Company Info, Rebilling Settings)</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Reputation Management</p><br></td><td style="width: 33.3333%; text-align: center;"><br></td></tr><tr><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">White-Label Settings (Custom Domains, Logos, Colors)</p><br></td><td style="width: 33.3333%; text-align: center;"><p class="p1" dir="ltr">Funnel &amp; Website Builder</p><br></td><td style="width: 33.3333%; text-align: center;"><br></td></tr></tbody></table>

  

  

**Note:** If a permission is not listed, assume it inherits the broader role’s default capabilities at its respective level.

  

  

Admins can change the role of a particular user by going to **Settings > My Staff > Edit (pencil icon) > Scroll to and expand "User Roles"****  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018238329/original/SO6U66a5eqB-L00Pot42Kknck7OO6w0K8Q.png?1705709967)**

  

* * *

## **Frequently Asked Questions**

  

**Q. Can an Agency Admin restrict a Sub-Account Admin from accessing certain features?**

No. Agency Admins cannot customize Sub-Account Admin role permissions directly. Sub-Account Admins always inherit full access within their assigned sub-account. To limit scope, create a _User_ role instead of an Admin role in that sub-account.

  

**Q. If a permission is available at both Agency and Sub-Account levels, does the Agency Admin override Sub-Account Admins?**

Yes. Agency Admins hold global authority. For permissions like user management, reporting, or media library, Agency Admin actions apply across all sub-accounts, while Sub-Account Admins manage only within their assigned sub-account.

  

**Q. What happens if a user is added at the Agency level and then also given access to a Sub-Account?**

The user will have **two role scopes**: agency-wide access from their Agency role, plus sub-account-specific access from their Sub-Account role. Permissions don’t cancel out—they stack, with the broader Agency permissions always taking precedence.

  

**Q. Do all Agency Admins have “Login As”?****No**. “Login As” is controlled by the Enable Login As **permission at the agency level**. If it’s disabled for an admin, the Login As option is hidden for that user.