---
title: "Setting Up ActiveProspect Consent Tracking On A HighLevel Form & Survey"
url: "https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey"
category: "Uncategorized"
---

# Setting Up ActiveProspect Consent Tracking On A HighLevel Form & Survey

  

  

To set up ActiveProspect consent tracking on a HighLevel form:

  

1.  Build your form as you normally would
2.  Create a Custom Short Text Field called 'xxTrustedFormCertUrl' > drag the field into your form above the submit button
3.  Save the form > Click 'Integrate Form' button > Click 'Link' tab > Copy form url and open in another Google Chrome tab (you will come back to this tab after step 4)
4.  Drag an HTML field into the form below the button > select the HTML field > click 'Edit Script' button > copy/paste the Custom Script below (don't save yet)
5.  Go back to the tab you opened in Step 3 > right-click the page and select 'Inspect' > choose the mouse pointer > click the xxTrustedFormCertUrl field > copy its ID
6.  Go back to the form/Edit Script modal and replace FORMID in both instances with the ID you copied > Save
7.  Copy the Custom CSS below > Open the Styles Tab > paste into the Custom CSS field > change the number in parenthesis to correspond with the position of the xxTrustedFormCertUrl field in your form.
8.  Save form

  

**Custom CSS For Forms:**

.form-field-wrapper:nth-child(n) {
  display: none;
}

**Custom CSS For Surveys:**

.slide-no-SlideNumber .form-field-wrapper:nth-child(n) {
  display: none;
}

Note:

1.  SlideNumber is a placeholder. It should be replaced with actual survey slide number. 
2.  n is a placeholder for field which customer wants to hide.
3.  Please place xxTrustedFormCertUrl above all the hidden field in a slide/form.

  

**Example**:

If xxTrustedFormCertUrl field is on 2nd slide and 4th element

  

.slide-no-2 .form-field-wrapper:nth-child(4) {
  display: none;
}

  

**Custom Script:**

<script type="text/javascript">
  (function() {
      var field = 'xxTrustedFormCertUrl';
      var provideReferrer = false;
      var invertFieldSensitivity = false;
      var tf = document.createElement('script');
      tf.type = 'text/javascript'; tf.async = true;
      tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
        '://api.trustedform.com/trustedform.js?provide\_referrer=' + escape(provideReferrer) + '&field=' + escape(field) + '&l='+new Date().getTime()+Math.random() + '&invert\_field\_sensitivity=' + invertFieldSensitivity;
      var s = document.getElementsByTagName('script')\[0\]; s.parentNode.insertBefore(tf, s); }
  )();
function trustedFormCertUrlCallback(certificateUrl) {
    document.getElementsByName('customFieldId')\[0\].value = certificateUrl; 
  document.getElementsByName('customFieldId')\[0\].dispatchEvent(new Event("input"));
}
</script>
<noscript>
    <img src="http://api.trustedform.com/ns.gif" />
</noscript>