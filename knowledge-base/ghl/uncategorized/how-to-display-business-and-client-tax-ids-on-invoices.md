---
title: "How to Display Business and Client Tax IDs on Invoices?"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-"
category: "Uncategorized"
---

# How to Display Business and Client Tax IDs on Invoices?

**TABLE OF CONTENTS**

-   [Create Custom Fields and Values](#Create-Custom-Fields-and-Values)
    -   [1\. Creating custom field called Tax ID which will be available to fill against every contact.](#1.-Creating-custom-field-called-Tax-ID-which-will-be-available-to-fill-against-every-contact.)
    -   [2\. Creating custom value called VAT ID which will be a fixed text/number that can be filled within business details of the invoice](#2.-Creating-custom-value-called-VAT-ID-which-will-be-a-fixed-text/number-that-can-be-filled-within-business-details-of-the-invoice)
-   [Customize the Invoice Layout](#Customize-the-Invoice-Layout)
-   [Add the Tax ID for the Invoice Recipient](#Once-done,-Add-the-Tax-ID-for-the-Invoice-Recipient)

**Overview**

  

This article outlines how to configure your system to automatically include essential **Business Tax ID under your business details section and the client's Tax ID under the contact section** on every client invoice, ensuring compliance and clarity.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078344/original/tJfyvWx779RfJ4ddb1FuJqpIuERrP63fgA.png?1762859977)

  

The process is broken into two main stages:

1.  **Data Setup:** You must first use **Custom Fields** to store your clients' individual Tax IDs and **Custom Values** to store your agency's Tax ID. This creates the required data points in your system.
2.  **Layout Implementation:** The final step involves customizing the default **Invoice Layout** in your payment settings. You map the stored data—placing your **Business Tax ID** under the business details section and the client's **Tax ID** under the contact section.

By following this setup, your invoices will automatically pull and display both required identification numbers whenever they are present against the contact and in your custom values.

  

  

### **Create Custom Fields and Values**

  

#### **1\. Creating custom field called Tax ID which will be available to fill against every contact.**

-   Go to **Settings** in the Left Pane.

  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057439390/original/i3vLobT_JyK9Ay2bxbXMeN_vD9YFjytHCw.png?1762173044)

  

-   Under "Other Settings," click on **Custom Fields** and select **+Add Field**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057442015/original/iqZp9Fb_BzjYZeQlvyB6Iwc2o17zyprM3A.png?1762174242)

  

-   Under "Text Input," select **Single Line** and click **Next**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443081/original/nRQ_Au4UnenfK-0LyH4GB18e0htD_R1eSA.png?1762174639)

  

-   Input the **Name** as "**Tax ID**" or anything that you want to refer it as, and select "**Contact**" from both the **Object** and **Group** dropdowns. Click **Save**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443393/original/WGAI7cxzXzlKVWQ8cV8VzuvZ9RdwJjvWCg.png?1762174797)

  

  

#### **2\. Creating custom value called VAT ID which will be a fixed text/number that can be filled within business details of the invoice**

-   Go back to **Settings**. Under "Other Settings," click on **Custom Values** and select **+Custom Value**.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443595/original/oMdD_mbVPJJ6UlO0zg-52WdtmgPPs4Odew.png?1762174926)
-   Enter the **Name** and **Value** for your Tax ID and click **Create**.  
    In this case, **VAT ID: 1234**

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447315/original/FU0vkBffuh-8T5Zw1jd_T5-7tVTB_BbTXg.png?1762176710)

  

### **Customize the Invoice Layout**

-   Go back to **Payments** and select **Settings** under "Invoices & Estimates."

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447546/original/dfpkyRPBTYVSVuzPC_WTvvxXeWOWOnALjQ.png?1762176837)

  

-   Under "Title, Terms and Layout," scroll down to **Invoice Layout** and click on **Customize Layout**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447952/original/kI939SCDN8RF8bRu2okxAnyDGXybqnaF4A.png?1762177067)

  

-   **For Business Tax ID:**
    -   In the Layout tab, under **Business Information**, click on **+Add Custom Value**.
    -   Select "**Business Tax ID**" from the dropdown menu.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448506/original/H2kxaj-1Dq8A5W0QnnGiERbP5JlwLdG2Qg.png?1762177267)

  

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448973/original/9qmi0FvMzAbJe8-pocH2i6NMHgHq-pMMLw.png?1762177506)

  

-   **For Contact Tax ID:**
    -   In the Layout tab, under **Contact Information**, click on **+Add Custom Field**.
    -   Select "**Tax ID**" from the dropdown menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057449628/original/vGD94XvisF9AqTIC1ADgB0CD00cGNM-p-Q.png?1762177773)

  

  

-   Check the preview to confirm the details are visible and click **Save changes**.

###   

### **Once done, Add the Tax ID for the Invoice Recipient**

-   Go to **Contacts,** click on **Additional info** tab.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078523/original/QAVaWYu9KIRuJL1qef79KOdv_pSwOEfN0g.png?1762860040)

  

-   Click on **TAX ID** and enter the contact's TAX ID and **save** it.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688782/original/TOgvhFSGkjKD69lBNM0zQTiA80kz624Asg.png?1762411604)

  

-   Click on **Actions** drop down, select **Create Invoice** within the Payments tab of contacts or you can go to Payments -> Create Invoice directly.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688919/original/c07SeVUgn03Ke30oFeoICkhQI4-xbByppg.png?1762411775)

  

-   Now you can find the **TAX ID (particular to the contact)** and Business Tax ID (**VAT ID: 1234)** present in your Invoice.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078616/original/VBpNdg36ZXyiENBAXxB7X2_n5qgmtanrBA.png?1762860100)