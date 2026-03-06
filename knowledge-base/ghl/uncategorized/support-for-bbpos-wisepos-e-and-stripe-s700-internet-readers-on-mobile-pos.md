---
title: "Support for BBPOS WisePOS E and Stripe S700 Internet Readers on Mobile POS"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005873-support-for-bbpos-wisepos-e-and-stripe-s700-internet-readers-on-mobile-pos"
category: "Uncategorized"
---

# Support for BBPOS WisePOS E and Stripe S700 Internet Readers on Mobile POS

  

This article shows you how to pair Stripe’s Wi-Fi–enabled **WisePOS E** and **S700** readers with the HighLevel, LeadConnector, or your own white-label mobile app. Once connected, you can take secure, card-present payments right inside the POS—no dongles, cables, or browser windows required!

* * *

**TABLE OF CONTENTS**

-   [What Are Stripe Internet Readers?](#What-Are-Stripe-Internet-Readers?)
    -   [Key Benefits of Using WisePOS E & S700 With Mobile POS](#%E2%80%8B%E2%80%8B%E2%80%8BKey-Benefits-of-Using-WisePOS-E-&-S700-With-Mobile-POS)
    -   [Prerequisites](#Prerequisites)
    -   [How to Register a WisePOS E or S700 Reader](#How-to-Register-a-WisePOS-E-or-S700-Reader)
    -   [Taking a Payment With a Registered Reader](#Taking-a-Payment-With-a-Registered-Reader)
    -   [Troubleshooting & Best Practices](#Troubleshooting-&-Best-Practices)
    -   [Frequently Asked Questions](#Frequently-Asked-Questions)
    -   [Related Articles](#Related-Articles)

* * *

# **What Are Stripe Internet Readers?**

  

Stripe Internet Readers are standalone payment terminals that connect to your phone or tablet over local Wi-Fi. Because they’re internet-connected, every tap, insert, or swipe flows directly through Stripe’s PCI-certified infrastructure for end-to-end encryption. Pairing them with HighLevel turns any iOS or Android device into a countertop-to-mobile checkout station.

  

<table class="fr-no-borders" style="width: 100%;"><tbody><tr><td style="width: 50%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053905517/original/A7AmwsibFdzVLKFzsnh2CyDQbIvtNeQvGg.jpeg?1758053802" style="width: auto; max-width: 100%;" class="fr-fil fr-dib" data-attachment="[object Object]" data-id="155053905517"></td><td dir="ltr" style="width: 50.0000%;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053905495/original/-EXzFtt8c7SUGSdS0eiSEXMMtS44oZ8tuw.png?1758053726" class="fr-fil fr-dib fr-bordered" data-id="155053905495" style="box-sizing: border-box; border: 0px; max-width: 100%; cursor: pointer; padding: 0px 1px; margin-bottom: 5px; margin-left: 0px; display: block; text-align: left; color: rgb(0, 0, 0); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 13px; font-weight: 400; text-indent: 0px; width: 338px;" data-attachment="[object Object]"></td></tr></tbody></table>

* * *

## **Key Benefits of Using WisePOS E & S700 With Mobile POS**

  

Knowing the advantages helps you choose the right hardware for every checkout lane or roaming associate.

  

-   **All-In-One Hardware:** Accept chip, tap, and magnetic-stripe payments out of the box.  
      
    
-   **Speedier Lines:** Customer-facing prompts slash cashier time.  
      
    
-   **Unlimited Readers Per Location:** Register as many devices as you need; each appears in the Payment Instruments list.  
      
    
-   **Unified Reporting:** In-person and online sales land in the same HighLevel Payments dashboard.  
      
    
-   **Automatic Compliance:** Firmware updates add new card-scheme requirements with no manual effort.

* * *

## **Prerequisites**

Confirm these items before you begin to avoid pairing errors and failed transactions.  
  

-   A live Stripe account connected in **Payments → Integrations**  
      
    
-   Mobile device and reader on the same 2.4 GHz or 5 GHz Wi-Fi network  
      
    
-   Device enrolled in the HighLevel / LeadConnector public beta on the App Store or Google Play  
      
    
-   Mobile-app version v 3.103.4 or later

* * *

## **How to Register a WisePOS E or S700 Reader**

  

Pairing links the physical terminal to your sub-account so it appears at checkout.

  

####   
**Step 1:** Get Pairing Code from Reader

  

-   Power on the reader  
      
    
-   On the idle screen, tap Generate Pairing Code to display a six-digit code.

  

  

#### **Step 2:** Navigate to Internet Reader Settings

  

-   Open the **mobile app** and select the correct sub-account  
      
    
-   Navigate to **Settings** → **Stripe Payment Hardware** → **Pair New Devices** → **Internet Readers**  
      
    

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053906031/original/GGg16hSwyUPy3RiltXf_b0z9tloUU5SiGw.png?1758054983)**  

  

#### **Step 3:** Pair Device

  

-   Enter a reader name you’ll recognize at checkout (e.g., FrontCounter\_WisePOS1)  
      
    
-   Type the pairing code shown on the reader.  
      
    
-   Tap Pair. Look for the toast “FrontCounter\_WisePOS1 registered successfully.”

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053906064/original/WGuq0-NGLB8w4lbzuYLcUUdfTJExIHQDng.png?1758055049)

  

  

#### **Step 4:** Repeat for Other Devices  
  

-   Repeat these steps for any other additional readers on the network

* * *

## **Taking a Payment With a Registered Reader**

Once paired, selecting a reader is as easy as choosing a card-on-file.

  

1.  Start a sale in the POS and add items to the cart.  
      
    
2.  On Payment Instruments, choose the reader you want to use.  
      
    
3.  Present the reader to the customer. They can tap, insert, or swipe. A 5-minute timer counts down on the mobile screen.  
      
    
4.  Wait for confirmation. The reader shows “Approved,” and the sale appears instantly in Transaction History.

* * *

## **Troubleshooting & Best Practices**

Use these quick fixes to keep every lane moving.

  

<table style="border:none;border-collapse:collapse;"><colgroup><col width="199"><col width="425"></colgroup><tbody><tr style="height:25.75pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Symptom</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; text-align: center; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Fix</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Reader not found</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Verify both devices are on the same SSID; restart the reader; ensure ports 443 &amp; 4070 are open.</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Pairing code expired</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Codes last 60 seconds—generate a new one on the reader and try again.</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Payment timer expired</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Relaunch the sale; ask the customer to keep the card in place until the beep.</span></p></td></tr><tr style="height:39.25pt;"><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Need to move readers between stores</span></p></td><td style="padding: 5pt; overflow: hidden; overflow-wrap: break-word;"><p dir="ltr" style="line-height: 1.38; margin-bottom: 0pt;"><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">Unpair in&nbsp;</span><span style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 700;">Payment Devices</span><span dir="ltr" style="font-size: 11pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-weight: 400;">, then repeat the pairing steps on the new Wi-Fi network.</span></p></td></tr></tbody></table>

* * *

## **Frequently Asked Questions**

**Q: How many internet readers can I register in one sub-account?**  
Unlimited. Each reader shows up individually in Payment Instruments.

  

**Q: Do I need Bluetooth?**  
No. WisePOS E and S700 pair over local Wi-Fi.

  

**Q: Can customers add a tip on the reader?**  
Yes. Enable Prompt for Tip under POS Settings → Gratuity.

**Q: Can I refund these payments from the web app?**  
Absolutely—the refund flow is identical to online Stripe charges.

**Q: Do the readers work offline?**  
Transactions require an active internet connection. If Wi-Fi drops, accept cash or card-on-file.

* * *

## **Related Articles**

  

-   [How to Connect Stripe to Your Sub‑Account](https://help.gohighlevel.com/en/support/solutions/articles/48000981400)  
      
    
-   [Accept Payments on Stripe Mobile POS Terminals](https://help.gohighlevel.com/en/support/solutions/articles/155000004148)  
      
    
-    [Active Transaction Inside POS for Mobile Payments](https://help.gohighlevel.com/en/support/solutions/articles/155000005666)  
      
    
-   [Tap to Pay on Square for POS and Mobile Payments](https://help.gohighlevel.com/en/support/solutions/articles/155000005506)  
      
    
-   [Where Payment Providers Work by Product Area](https://help.gohighlevel.com/en/support/solutions/articles/155000006075)  
      
    
-   [How to manage Refunds within the CRM](https://help.gohighlevel.com/en/support/solutions/articles/48001238332)