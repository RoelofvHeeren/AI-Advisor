---
title: "ACH Debit payment method on invoices"
url: "https://help.gohighlevel.com/support/solutions/articles/155000000611-ach-debit-payment-method-on-invoices"
category: "Uncategorized"
---

# ACH Debit payment method on invoices

  

  

ACH Direct Debit is now available as a payment method on invoices. This supports one-time invoices, Text2Pay links, and recurring invoices along with auto-payments

* * *

**TABLE OF CONTENTS**

-   [What is the ACH Debit Payment Method on Invoices?](#What-is-the-ACH-Debit-Payment-Method-on-Invoices?)[](#Key-Benefits-of-the-ACH-Debit-Payment-Method-on-Invoices)
-   [Key Benefits of the ACH Debit Payment Method on Invoices](#Key-Benefits-of-the-ACH-Debit-Payment-Method-on-Invoices)[](#How-to-Set-Up-the-ACH-Debit-Payment-Method-on-Invoices)
-   [How to Set Up the ACH Debit Payment Method on Invoices](#How-to-Set-Up-the-ACH-Debit-Payment-Method-on-Invoices)[](#Frequently-Asked-Questions)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)

* * *

# **What is the ACH Debit Payment Method on Invoices?**

The ACH Debit Payment Method allows businesses to accept payments directly from customers' bank accounts through ACH (Automated Clearing House) transfers. This feature provides a seamless, cost-effective alternative to traditional credit card payments, especially for larger transactions. By integrating with Stripe, this payment method is available for invoices generated within your platform, enabling a streamlined payment experience for you and your customers.

  

With ACH Direct Debit, customers can authorize one-time or recurring payments directly from their bank accounts, ensuring reliable cash flow and reducing the dependency on manual payment reminders.

#   

* * *

## **Key Benefits of the ACH Debit Payment Method on Invoices**

  

1.  **Cost-Effective Payment Solution**: ACH transactions typically incur lower processing fees compared to credit card payments, helping businesses save on transaction costs.
    
2.  **Enhanced Convenience for Customers**: Customers can make payments directly from their bank accounts without needing to use credit or debit cards, improving their payment experience.
    
3.  **Seamless Integration with Stripe**: The integration ensures secure and compliant payment processing while enabling businesses to manage transactions and payment methods directly from their Stripe dashboard.
    
4.  **Supports Large Transactions**: ACH payments are ideal for high-value transactions, as they bypass credit card limits and provide a secure mechanism for larger payments.
    
5.  **Auto-Payment for Recurring Invoices**: Businesses can enable auto-payments for recurring invoices, ensuring timely payments without manual intervention.
    

* * *

## **How to Set Up the ACH Debit Payment Method on Invoices**

  

1.  **Enable ACH Direct Debit in Stripe**:
    
    -   Log in to your Stripe account.
    -   Navigate to **Settings > Payment Methods** and ensure that ACH Direct Debit is enabled for your account.
2.  **Integrate Stripe with Your Platform**:
    
    -   In your platform, go to **Settings > Integrations**.
    -   Click on the **Connect Stripe** button and follow the prompts to log in and link your Stripe account.
3.  **Configure Payment Options for Invoices**:
    
    -   When creating an invoice, select ACH Direct Debit as a payment method option.
    -   If applicable, enable the **Auto-Payment** feature for recurring invoices.
4.  **Send Invoices to Customers**:
    
    -   Once the setup is complete, customers will see the ACH Debit option when viewing their invoices.
    -   They can input their bank account details to authorize payments securely.
5.  **Monitor Payments in Stripe**:
    
    -   Use your Stripe dashboard to track ACH payments, resolve any failed transactions, and update customer payment details as needed.

* * *

## **Frequently Asked Questions**

  

**Q:** **Are there any fees associated with accepting ACH Direct Debit payments through Stripe?**

Yes, Stripe applies specific fees for processing ACH Direct Debit payments, which differ from standard card transaction fees. For the most current pricing details, please refer to Stripe's official pricing page.

  

  

****Q: Can I use ACH Direct Debit for recurring invoices with auto-payments enabled?**  
**

Yes, ACH Direct Debit can be used for recurring invoices with auto-payments enabled. When setting up a recurring invoice, you can enable auto-payments by toggling the auto-pay option during the invoice sending process. This allows subsequent payments to be automatically charged on scheduled payment dates.

  

  

****Q: How can I manage which payment methods are displayed to my customers on invoices?**  
**

You can manage the payment methods displayed to your customers by configuring settings in your Stripe dashboard. Navigate to Settings > Connect > Payment Methods in Stripe, select the appropriate configuration (e.g., Invoice, InvoiceWithAutopayment), and enable or disable specific payment methods as desired.

  

  

****Q: What should I do if an ACH Direct Debit payment fails due to insufficient funds or other reasons?**  
**

If an ACH Direct Debit payment fails, Stripe will notify you of the failure reason, such as insufficient funds or an invalid account number. It's advisable to contact the customer to resolve the issue, which may involve updating their bank account information or selecting an alternative payment method.

  

**Q: How can I save a customer’s ACH bank account for future payments?**

When a customer pays an invoice using ACH Direct Debit and selects auto-pay (if available), Stripe will securely store the bank account as a payment method on file for future use.

If auto-pay is not selected, you’ll need to use Stripe’s customer management features to manually save the bank account for reuse. You can also ask the customer to make a payment using a payment link that saves their bank account by default (e.g., recurring payment setup).