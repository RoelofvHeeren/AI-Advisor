---
title: "Workflow Trigger - LinkedIn Lead Form Submitted"
url: "https://help.gohighlevel.com/support/solutions/articles/155000003497-workflow-trigger-linkedin-lead-form-submitted"
category: "Uncategorized"
---

# Workflow Trigger - LinkedIn Lead Form Submitted

Capture new leads from LinkedIn Lead Gen forms the moment they’re submitted and route them into HighLevel workflows. This guide explains what the **LinkedIn Lead Form Submitted** trigger does, when it fires, and how to configure filters like **Page** or custom fields for precise routing. You’ll also find setup steps, testing tips, and troubleshooting so your team responds to every LinkedIn lead fast.

* * *

# **What is the LinkedIn Lead Form Submitted trigger?**

  

The **LinkedIn Lead Form Submitted** trigger enrolls a Contact into a workflow immediately after they submit a LinkedIn Lead Gen form connected to your HighLevel account. Use it to launch instant follow-ups, assign leads to reps, create opportunities, and kick off nurture automations based on where the lead came from and the data they provided.

  

**Trigger Details**

  

  

<table style="width: 100%;"><tbody><tr><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1"><strong dir="ltr">Field Name</strong></p></td><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1"><strong dir="ltr">Description</strong></p></td><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1"><strong dir="ltr">Mandatory</strong></p></td></tr><tr><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1"><strong dir="ltr">Page</strong></p></td><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1" dir="ltr">The LinkedIn Page that owns the Lead Gen form. Select a specific Page to scope which submissions enter the workflow.</p></td><td style="width: 33.3333%; vertical-align: middle; text-align: center;"><p class="p1"><strong dir="ltr">No</strong></p></td></tr></tbody></table>

  

  

### **Operators available in filters**

  

| 
**Operator**

 | 

**Description**

 |
| --- | --- |
| 

**Is (Exact Match)**

 | 

Triggers when the field exactly matches the selected value.

 |
| 

**Contains Phrase**

 | 

Triggers when the field contains the phrase you enter.

 |
| 

**Does Not Contain Phrase**

 | 

Triggers when the field does not contain the phrase you enter.

 |
| 

**Is Empty**

 | 

Triggers when the field has no value.

 |
| 

**Is Not Empty**

 | 

Triggers when the field has any value.

 |

* * *

## **Key Benefits of LinkedIn Lead Form Submitted**

  

Understanding the benefits helps you design faster, cleaner workflows and improve conversion. Use these advantages to guide how you filter, route, and follow up with LinkedIn leads.

  

-   **Speed-to-lead:** triggers instantly on submission so you can text, email, or call right away.

  

-   **Precise routing:** filter by **Page** or mapped custom fields to assign the right owner or pipeline.

  

-   **Cleaner data:** pair with field mapping and deduplication to keep a single, accurate contact record.

  

-   **Automated follow-up:** start nurture sequences, tasks, and opportunity creation without manual work.

  

-   **Reporting clarity:** consistent source tracking helps you measure campaign performance.

* * *

## **Prerequisites**

  

Completing these prerequisites prevents “no leads entering” issues and makes testing straightforward.

  

-   LinkedIn Lead Ads integration connected in **Settings → Integrations** with access to the correct **LinkedIn Page** and **Ad Account**.

  

-   At least one **LinkedIn Lead Gen Form** published for the Page.

  

-   Field mapping planned (e.g., map Email, Phone, Company, Job Title; map niche/qualifiers to matching custom fields in HighLevel).

* * *

## **Filter Logic & Best Practices**

  

Combining filters correctly ensures only qualified submissions enter your automation and prevents accidental enrollments.

  

-   Multiple filters in the trigger are evaluated together (AND logic).

  

-   Start broad (e.g., **Page → Is → Your Page**) and then add qualifiers.

  

-   Avoid over-filtering during initial launch; add qualifiers after confirming leads are flowing.

  

-   Keep Page-specific workflows simple—one workflow per Page is easier to maintain than many complex conditions.

* * *

## **Recommended Workflow Settings**

  

A few workflow settings make testing easier and prevent duplicate outreach.

  

-   **Allow Re-entry:** enable during testing or when a lead might submit more than once; disable if only the first submission should trigger.

  

-   **Stop on Response (optional):** use to pause nurture when a lead replies.

  

-   **Enrollment Logs:** use Execution Logs to verify each lead’s path after submission.

* * *

## **How To Setup LinkedIn Lead Form Submitted**

  

Follow these steps to configure the trigger, add filters, and save. Accurate setup ensures only the leads you want enter the workflow and receive the right actions.

  

### **Open Workflows**

  

From the left navigation, go to **Automation → Workflows** and click **Create Workflow** in the top-right. Choose **Start from Scratch** (or **Select a Recipe**) to open a new builder canvas.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970620/original/bjb7_ZM6As5IQnHDubVlwOgeHmbZ6pRfkQ.png?1762770898)

  

  

### **Add Trigger**

  

In the workflow builder, hover over **+** **Add** and select  **Add Trigger**. This opens the trigger configuration panel on the right side of the screen.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970757/original/ZO4Sp2ScsO5zON3zyKR7MraIqsAcKr8MJg.png?1762770937)

  

  

### **Select Trigger**

  

Use the search bar or scroll to find **LinkedIn Lead Form Submitted** and select it. This chooses the LinkedIn lead-gen event as the enrollment source for the workflow.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970856/original/4Fl_2CeEkWff4CgxQwLUphkhtPfSb5ku3w.png?1762770991)

  

  

### **Name Trigger**

  

Enter a clear **Workflow Trigger Name** so teammates can recognize the source at a glance. Names like _LinkedIn Lead Form Submitted_ or _LinkedIn Leads — Page Scoped_ work well.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970933/original/G0Z4VMoMxIPaFl0XE8Pgvvjic7pmB05xpQ.png?1762771035)

  

  

### **Add Filters**

  

Click **Add filters** to open the field picker, which lists **Standard Fields** (e.g., **Page**) and your **Custom Fields**. Use the search box to quickly locate mapped fields such as Business Niche or Industry.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057971005/original/MDjTNpj9duZeivOY4JbYQxmsUJQWWyE9EQ.png?1762771083)

  

  

### **Page Filter**

  

Set **Page → Is**, then pick the specific LinkedIn Page from the dropdown. This limits workflow enrollments to submissions coming from that Page only.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057971148/original/RVvdtHDRlnX8gLr49tXNNye2EvMaZODjQg.png?1762771147)

* * *

## **Testing the Trigger**

  

Testing confirms the integration, mapping, and filters are working before you go live.

  

-   In LinkedIn Campaign Manager, submit a test lead for the connected Page and form.

  

-   In HighLevel, open **Contacts** and confirm the Contact was created/updated with mapped fields.

  

-   Open the workflow’s **Enrollment History / Execution Logs** to verify the trigger fired and actions ran.

  

-   Review any filters that prevented enrollment; adjust as needed.

* * *

## **Frequently Asked Questions**

  

**Q: Do I have to set the Page filter?**

No. Filters are optional, but using **Page** keeps enrollments scoped to a specific LinkedIn Page.

  

**Q: Can I filter by the exact LinkedIn Lead Gen form?**

If your mapping exposes a form identifier or you use a custom field indicating form name, you can filter on that value. Otherwise, use Page scoping and post-trigger conditions.

  

**Q: How are duplicates handled?**

HighLevel attempts to match on identifiers like email/phone. If a match exists, the Contact updates; otherwise, a new Contact is created. Keep dedup preferences tuned and merge when necessary.

  

**Q: Will resubmissions trigger the workflow again?**

That depends on **Allow Re-entry**. Enable it for testing or campaigns where a lead might submit multiple times.

  

**Q: What if mapped fields are empty?**

Use **Is Empty / Is Not Empty** operators to include or exclude those leads, or adjust the LinkedIn form to require those answers.

  

**Q: How fast will leads appear in HighLevel?**

Leads typically sync shortly after submission. Allow a brief delay during testing and check Execution Logs.

  

**Q: Can I run separate workflows for different Pages?**

Yes. Create one workflow per Page or use the **Page → Is** filter with branching actions.

  

**Q: Where can I verify that the trigger fired?**

Open the workflow’s **Enrollment History** and **Execution Logs** to see entries and action paths.