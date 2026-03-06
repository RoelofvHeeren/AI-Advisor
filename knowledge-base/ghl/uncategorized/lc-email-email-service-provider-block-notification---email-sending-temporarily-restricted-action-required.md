---
title: "LC Email: Email Service Provider Block Notification - Email Sending Temporarily Restricted (Action Required)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007065-lc-email-email-service-provider-block-notification-email-sending-temporarily-restricted-action-re"
category: "Uncategorized"
---

# LC Email: Email Service Provider Block Notification - Email Sending Temporarily Restricted (Action Required)

## New ESP Block Policy - Implementation Timeline

**Effective Date: \[12th Feb 2026\]**

This new ESP Block Policy will be implemented on ****12th Feb 2026****. Current users will receive advance notification and have time to review their email practices before enforcement begins.

**What you should do now:**

-   Review your current bounce classification data
-   Implement recommended email authentication and best practices
-   Clean your email lists and improve content quality
-   Monitor your ESP block rates closely

  

## URGENT: Action Required Within 24-48 Hours (When Policy is Active)

**Your GoHighLevel sub-account has been temporarily restricted from sending emails due to ESP (Email Service Provider) blocks.** This is part of our Anti-Spam Policy designed to protect your sender reputation and ensure high deliverability rates.

##   
What Are ESP Blocks?

ESP blocks occur when major email providers (Gmail, Yahoo, Outlook, etc.) reject your emails due to:

-   Authentication failures (DMARC, SPF, DKIM issues)
-   Poor sender reputation
-   Content that appears spam-like
-   Policy violations
-   Technical configuration problems

**Unlike regular bounces, ESP blocks are calculated separately and trigger immediate restrictions to protect your long-term email deliverability.**

  

## New ESP Block System

| ESP Block Rate | Action | Duration | Block Level |
| --- | --- | --- | --- |
| **3%** | Warning Email Sent | Immediate notification | Pre-Block Warning |
| **5%** | Email sending suspended | 12 hours | **1st block** |
| **3% (after 1st block)** | Critical Warning Email Sent | Immediate notification | Pre-2nd Block Warning |
| **5% (after 1st block)** | Email sending suspended | 24 hours | **2nd block** |
| **3% (after 2nd block)** | Final Warning Email Sent | Immediate notification | Pre-3rd Block Final Warning |
| **5% (after 2nd block)** | **PERMANENT SUSPENSION** | Permanent | **3rd block - FINAL** |

**Critical:** **All blocks are reset after 7 consecutive days of maintaining ESP block rates below 1%.**

**In this release, email sending will not be permanently disabled. Each block will be temporary and limited to a 24-hour duration only.**  
  

If your email service is **blocked** due to **ESP Block Detected**, you will see the following error message displayed as a **top banner** inside the affected subaccount:

> **Email sending is blocked due to a high number of spam blocks from email providers.**

> ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064792608/original/5TW75eQ0t8kTt0vQOwFX3kr_-mcIEgdcDQ.png?1770907247)

This block is enforced to protect email deliverability and prevent further reputation damage with Email Service Providers (ESPs).

  
  
_Note: Refer_ [_ESP Block Detected - Immediate Action Required to Restore Email Sending_](https://help.gohighlevel.com/support/solutions/articles/155000007341-lc-email-email-service-provider-block-detected-immediate-action-required-to-restore-email-sending)  
  

###   

## Immediate Steps Required

###   
Step 1: Access Bounce Classification Feature

1.  Log into your GoHighLevel sub-account
2.  Navigate to **Sub-account Settings → Email Services → Bounce Classification**
3.  Review your ESP block categories and error details
4.  Identify the highest volume ESP blocks affecting your sub-account

### Step 2: Identify Your Primary Issues

The Bounce Classification feature will show you:

-   **Specific ESP block categories** (DMARC failures, reputation issues, etc.)
-   **Error volumes** by provider (Gmail, Yahoo, Outlook)
-   **Detailed error messages** with exact reasons for blocks
-   **Recommended actions** for each block type

### Step 3: Implement Fixes

Based on your bounce classification results, you'll need to address:

-   Email authentication setup (SPF, DKIM, DMARC)
-   Content and template improvements
-   List hygiene and engagement issues
-   Technical configuration problems  
      
    

## Prepare for the New Policy

### Phase 1: Audit Your Current Performance

1.  **Check Bounce Classification Dashboard**
    -   Navigate to Sub-account Settings → Email Services → Bounce Classification
    -   Identify current ESP block rates and categories
    -   Review recent email campaign performance
    -   Document problem areas that need attention
2.  **Analyze Historical Data**
    -   Review bounce rates over the past 30 days
    -   Identify patterns in ESP blocks
    -   Check which email providers are blocking you most

### Phase 2: Implement Email Best Practices

1.  **Email Authentication Setup**
    -   Configure SPF records to include GoHighLevel's sending IPs
    -   Set up DKIM signing for your domain
    -   Implement DMARC policy (start with p=none for monitoring)
    -   Verify all DNS records are properly configured
2.  **List Hygiene and Quality**
    -   Remove all bounced and invalid email addresses
    -   Implement double opt-in for new subscribers
    -   Segment lists based on engagement levels
    -   Remove inactive subscribers (6+ months no engagement)
3.  **Content Optimization**
    -   Avoid spam trigger words and excessive promotional language
    -   Maintain proper text-to-image ratio (60:40)
    -   Include clear unsubscribe links
    -   Use professional, branded email templates
    -   Test content with spam checking tools

### Phase 3: Monitor and Test

1.  **Pre-Implementation Testing**
    -   Send test emails to major providers (Gmail, Yahoo, Outlook)
    -   Monitor delivery rates and engagement metrics
    -   Use email testing tools to check spam scores
    -   Verify email authentication is working correctly
2.  **Ongoing Monitoring**
    -   Check bounce classification dashboard daily
    -   Monitor ESP block rates closely
    -   Track engagement metrics (opens, clicks, unsubscribes)
    -   Set up alerts for unusual bounce patterns  
          
        

## Why This Matters

### Protecting Your Business

-   ESP blocks damage your sender reputation permanently
-   Poor reputation leads to emails landing in spam folders
-   Reduced deliverability impacts your business revenue
-   Recovery can take weeks or months without proper action

### Industry Standards

-   Major ESPs are increasingly strict about email quality
-   Authentication requirements are now mandatory
-   Content filtering has become more sophisticated
-   Sender reputation affects all future campaigns

## Next Steps

1.  **Analyze:** Use the Bounce Classification feature to understand your specific ESP blocks
2.  **Fix:** Address the identified issues using our detailed support articles
3.  **Monitor:** Track your improvements through the bounce classification dashboard
4.  **Verify:** Ensure fixes are working before resuming normal sending  
      
    

## Support Resources

### Bounce Classification Feature

-   Access detailed ESP block analysis
-   View error categories and volumes
-   Get specific recommendations for your sub-account
-   Monitor improvement progress

### Category-Specific Support Articles

Each ESP block category in your bounce classification links to detailed fix guides:

-   DMARC Authentication Failures
-   Domain/IP Reputation Issues
-   Content and Spam Filtering
-   Technical Configuration Problems
-   And more...  
      
    

## Time-Sensitive Actions

### Before Policy Implementation

-   Complete email authentication setup
-   Clean all email lists thoroughly
-   Optimize email content and templates
-   Test email delivery across major providers
-   Monitor bounce classification dashboard daily

### When Policy is Active - Within 24 Hours of Warning

-   Review bounce classification data immediately
-   Identify top 3 ESP block categories
-   Begin implementing critical fixes (authentication, major content issues)

### When Policy is Active - Within 48 Hours of Block

-   Complete all technical fixes
-   Clean email lists and remove problematic content
-   Test email delivery to major providers

### Ongoing

-   Monitor bounce classification dashboard daily
-   Maintain email best practices
-   Regular list hygiene and engagement monitoring  
      
    

## Frequently Asked Questions

### When does this new policy take effect?

The ESP Block System will be implemented on ****12 Feb 2026****, giving all users 30 days to prepare and optimize their email practices.  
  

### What happens to my current ESP blocks?

Your ESP block history will reset on the implementation date. However, we strongly recommend addressing any current issues before the policy goes live to ensure smooth operations.  
  

### How do block reset?

Blocks reset after 7 consecutive days of maintaining ESP block rates below 1%. However, if you receive 3 blocks within any 7-day period, permanent suspension will occur.  
  

### Can permanent suspensions be reversed?

Permanent unblocking **cannot be done automatically**. A manual review by the GHL Support team is required. Also Please note that unblocking is not guaranteed and depends on compliance with email best practices.. This is why we provide multiple warnings and temporary suspensions before taking final action.  
  

### Will I receive notifications before each block?

Yes, you will receive warning emails when your ESP block rate reaches 3%, giving you time to take corrective action before the 5% threshold triggers a block.  
  

### What if I'm currently above 3% ESP block rate?

Use the preparation period before **12th Feb 2026** to address these issues. The block system will not be enforced until the implementation date, giving you time to fix problems.  
  

### How is this different from regular bounce management?

ESP blocks are calculated separately from regular bounces and have their own block system. Regular bounces (invalid addresses, full mailboxes) are handled differently than ESP blocks (reputation, authentication, policy issues).

  

## Need Help?

### Self-Service Options

-   Use the Bounce Classification feature for detailed analysis
-   Follow category-specific support articles for step-by-step fixes
-   Access our email best practices documentation

### Contact Support

If you need assistance interpreting your bounce classification data or implementing fixes, contact our support team with:

-   Your sub-account details
-   Screenshots from bounce classification feature
-   Specific error messages you're seeing  
      
    

## Important Reminders

-   **ESP blocks are separate from regular bounces** - they require immediate attention
-   **Each provider has different requirements** - use bounce classification to see provider-specific issues
-   **Prevention is better than cure** - implement proper email practices from the start
-   **Time is critical** - delays in fixing issues can lead to permanent restrictions
-   **You have 30 days to prepare** - use this time wisely to optimize your email practices

**Your email deliverability and business success depend on taking action now. Start with the Bounce Classification feature and begin preparing for the new policy implementation.**

* * *

_This policy is designed to protect your sender reputation and ensure long-term email deliverability success. We're here to help you prepare and succeed with these new requirements._