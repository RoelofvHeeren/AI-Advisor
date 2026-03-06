---
title: "Physical VoIP Deskphones (SIP)"
url: "https://help.gohighlevel.com/support/solutions/articles/155000005487-physical-voip-deskphones-sip-"
category: "Uncategorized"
---

# Physical VoIP Deskphones (SIP)

Integrate your **physical VoIP deskphone** directly to HighLevel. This feature offers seamless call management, enabling both outbound and inbound calls along with call recording and transcription, all while keeping your CRM updated in real time.

* * *

**TABLE OF CONTENTS**

-   [What is the VoIP Deskphone Integration?](#What-is-the-VoIP-Deskphone-Integration?)[](#Permissions-To-Set-Up-VoIP-Deskphones)
-   [Permissions To Set Up VoIP Deskphones](#Permissions-To-Set-Up-VoIP-Deskphones)[](#Technical-Requirements-&-Recommended-Deskphones)
-   [Technical Requirements & Recommended Deskphones](#Technical-Requirements-&-Recommended-Deskphones)[](#Connect-VoIP-Deskphones-to-HighLevel)
-   [Connect VoIP Deskphones to HighLevel](#Connect-VoIP-Deskphones-to-HighLevel)[](#Reset-Device-\(SIP-User\)-Password)
-   [Reset Device (SIP User) Password](#Reset-Device-\(SIP-User\)-Password)
-   [Delete a Device](#Delete-a-Device)[](#Troubleshooting)
-   [Troubleshooting](#Troubleshooting)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)[](#Related-Articles)
-   [Related Articles](#Related-Articles)

* * *

# **What is the VoIP Deskphone Integration?**

  

This feature empowers users to **connect their physical VoIP deskphones directly to HighLevel**. It provides a stable link between your CRM and your physical phone system, ensuring that all call activities, from making outbound calls to receiving inbound calls, are managed inside HighLevel. By leveraging this integration, you can enhance call-handling capabilities and maintain a consistent connection to your customer data.

  

All of HighLevel's digital CRM features continue to work, you just get to use your physical deskphone:  
  

-   Call Recording  
      
    
-   Call Transfers  
      
    
-   Call Transcription  
      
    
-   And more!

  

* * *

## **Permissions To Set Up VoIP Deskphones**

  

-   **Agency admins** – full provisioning rights in every location  
      
    
-   **Sub-account admins** – can provision devices only inside their own location  
      
    
-   **Other users** – read-only; they’ll see a tooltip prompting them to “Ask an admin to configure this.”
    

* * *

## **Technical Requirements & Recommended Deskphones**

  

  

**Network & protocol prerequisites**

  

-   SIP over UDP, TCP, or TLS
    
-   Open outbound ports **5060/5061** for SIP signalling
    
-   Open UDP **10000-20000** for RTP audio
    
-   PoE switch or external power adaptor
    

  

  

**What to look for when buying hardware**

  

-   “SIP” and “PoE” on the spec-sheet
    
-   At least two programmable line keys
    
-   Avoid carrier-locked or proprietary-provisioning devices
    

  

  

**Popular models**

  

-   Yealink T54W / T58W
    
-   Poly VVX 450
    
-   Grandstream GXP 2170
    
-   Snom D785
    
-   Cisco 7841
    

* * *

## **Connect VoIP Deskphones to HighLevel**

  

**Step 1:** Navigate to the Wizard

  

Log in and go to **Sub-Account Settings → Phone Numbers → Advanced Settings → VoIP Deskphone (SIP) → Get Started**.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050093926/original/YS4668PA9CkKqvVzZi-iCSDpL4zwgmAVHw.png?1752866528)

  

  

**Step 2:** SIP Server Configuration

  

-   Confirm or edit your SIP domain. A suggested domain such as _`<LocationName>.sip.ashburn.twilio.com`_ appears.  
      
    
-   You can change it **once** before saving.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947940/original/T_RoByQReSUzOcLWvCk_S-OlnygySLa2mg.png?1750964313)

  

  

**Step 3:** SIP User

  

Choose an extension (number or text) plus a strong password and save them somewhere safe.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947928/original/MgsSV8OV1wJbZoUkMb7urN7BZExwWyiLVQ.png?1750964269)

  

  

**Step 4:** Assign User

  

Each VoIP deskphone needs to be connected to a user in your sub-account. Select one user from the Assign to User dropdown.

  

Make sure the user's individual phone settings are configured to use deskphone. Navigate to **Settings > My Staff > Choose staff > Edit > Call & Voicemail Settings**, please enable "Deskphone" for the options you need. Enable it for "Forward Calls to" to receive calls addressed to you on the Deskphone. If you're receiving calls as part of "Ring multiple", and you want to receive them on the deskphone, enable Deskphone under "Ring all".  
  
If the user sets Default channel for IVR = Deskphone, IVR-routed calls will ring the deskphone.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048947966/original/L3fI9Oggy2nZ9JE1bPLRwQdMYOycNEvsUw.png?1750964402)

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050752109/original/s6wUPXQfAjDIUvnnGnpzS6V7a2bKE_GdjA.png?1753979052)

  

  

**Step 5:** Configure the Physical Phone

  

-   Enter the SIP Domain, Username, and Password into the phone’s **Registrar / Server / Proxy** fields (varies by phone model and manufacturer).
    

  

  

**Step 6:** Run the Built-In Test Calls (Optional)

  

-   **Navigate** to VoiP Deskphone (SIP) > Test Calls > Simulate Calls.  
      
    
-   **Outbound test** – Dial the displayed number; you should hear “This is a test call” three times if successful.  
      
    
-   **Inbound test** – Click _Inbound Test Call_; the deskphone should ring.
    

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094240/original/q3Ukfp7AIe5rXyIjZpLnTQqSp7uBWzIUUw.png?1752867440)

  

  

**Need Help?** If a test fails, reach out to customer support with the error codes from the failed test call.

* * *

## **Reset Device (SIP User) Password**

  

Navigate to **Settings > Phone Numbers > Advanced Settings > VIP Desktop (SIP)** > **Manage Devices** tab and select the **pencil icon** for the device that you want to reset the password for.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094265/original/uKVc1XmL5W74kkBCOiueVF7_8Up0fC8H8A.png?1752867520)

* * *

## **Delete a Device**

  

Navigate to **Settings > Phone Numbers > Advanced Settings > VIP Desktop (SIP)** > **Manage Devices** tab and select the **trash can icon** to delete a device.

  

**WARNING:** This action will immediately unregister the handset.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050094286/original/HLX6OxRIGnOvDhywfsLHaB5kEnAXQWo7Qw.png?1752867571)

  

* * *

**Deskphone to deskphone transfer**

  

## **1\. Direct Extension Dialing Between Deskphones** 

You can now call any teammate with a configured deskphone simply by dialing their extension.

### What’s New?

If your teammate’s extension is **101**, just dial **201** from your deskphone to connect instantly , no external numbers or additional routing required.

### Key Details

-    Fast extension-to-extension calling
    
-    Works between configured deskphones
    
-    Supported on deskphones only
    

This update makes internal communication quicker and more efficient for teams using deskphones.

## **2\. IVR Call Transfer Between Deskphones**

**You can now transfer IVR calls from one deskphone directly to another deskphone.**

  

**How it works?**

During an active IVR call on your deskphone:

1.  Initiate a transfer.
    
2.  Dial your teammate’s extension.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065084807/original/hAOdaYjFSw10_XmuBQrArbP9dGoGJGH0Eg.png?1771329355)
    
3.  The call is routed directly to their deskphone.  
    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065084806/original/XqWn-AXejIHACYzbx0ChB_iERS33xnIURw.png?1771329355)
    

Simple and seamless.

> **Note:** Only **blind transfers** are supported. Warm transfers are not currently available

* * *

### **Troubleshooting**

  

  

| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| **401 / 403 Unauthorized** | Wrong username or password (case-sensitive) | Re-enter credentials |
| **No audio** | Firewall blocking RTP (UDP 10000-20000) | Open ports / disable SIP ALG |
| **Phone rings but won’t answer** | NAT / SIP ALG interfering with RTP | Disable SIP ALG on router |
| **Can’t save SIP domain** | Name already taken | Edit the domain or accept the suggested increment |
| **Still stuck?** | – | Click Contact Support with your SIP Domain & handset model |

  

  

* * *

## **Frequently Asked Questions**

  

**Q: Which VoIP deskphones are compatible?**  
Most open-SIP models—see the recommended list above.

  

****Q:** Can I record and transcribe every call?**  
Yes. Once enabled, all calls are automatically recorded and transcribed.

  

****Q:** How do I perform a blind transfer during a call?**  
Use the **Blind Transfer** option on your deskphone UI.

  

****Q:** Is there an extra charge for using deskphones?**  
No. Deskphone calls share the same per-minute rates as web/mobile calls. There is no additional cost for the call transfer to a deskphone.

  

****Q:** Can two deskphones point at the same HighLevel user?**  
No, you can only connect a single user to each VoIP deskphone.

  

****Q:** Do you support SIP Trunking?**  
No, we do not support SIP Trunking as of now. So you cannot connect your existing PBX/Asterix to GHL as of now.

  

****Q:** Why am I not able to receive the incoming call on my deskphone?**  
Make sure the user's individual phone settings are deskphone. Navigate to **Settings > My Staff > Choose staff > Edit > Call & Voicemail Settings**, please enable **"Deskphone"** for the options you need.

  

**Q: Can I place callers on hold with music from a deskphone?**

Music played during a _handset_ Hold depends on your SIP phone model and its local Hold behavior. HighLevel does **not** control music-on-hold triggered by a device’s Hold button. If you want callers to hear audio while they wait _inside a call flow_, use an **IVR** step with an audio prompt in your workflow.

See **_[Interactive Voice Response (IVR)](https://help.gohighlevel.com/en/support/solutions/articles/155000001200)_** for more information.

  

**Q: Can I transfer a call to another user’s extension from a deskphone? Are extensions visible on the phone?**

Yes—supported SIP handsets can perform a **blind transfer** to another user’s extension. **Warm transfer** is **not** supported as of now. Showing other users/extensions on the deskphone screen is not supported as of now.

For assisted transfers on the web, see **_[Outbound Calls with the Web Dialer](https://help.gohighlevel.com/en/support/solutions/articles/48000981431)_**.

  

**Q: Can I check HighLevel voicemail from the deskphone’s voicemail button?**

Voicemails that route to HighLevel are reviewed in **Conversations** and in **Reporting → Call Reporting**. A phone’s native voicemail feature (if present) is separate and does **not** access HighLevel voicemail.

See _[**Voicemail for Company and for Users**](https://help.gohighlevel.com/en/support/solutions/articles/48001146671)_ for more information.

  

**Q: Is there a single place to review all call recordings?**

Yes. Use **Reporting → Call Reporting** for a consolidated list of calls and recordings. You can also open recordings from each contact’s **Conversations** thread. IVR-connected calls may include multiple recordings for different call legs.

  

**Q: Are there known compatibility issues with certain SIP deskphones?**

Most open-SIP phones work when standard SIP registration is supported. Ensure network prerequisites are met (e.g., disable SIP ALG; allow SIP/RTP). If you’re unsure, share your handset **make/model and firmware** so we can point you to the best approach.

  

**Q: Do you have configuration blueprints or model-specific setup guides?**

Follow the steps in this article to create the SIP user/extension, then enter those credentials in your phone’s SIP account fields (commonly: **SIP URI**, **Username/Extension**, **Authentication/Password**). If you provide your phone model, we can share the most relevant instructions.  
  

  

**Q: I’m able to make outbound calls, but inbound calls are not working properly. What should I check?**

If outbound calls are working but inbound calls are not, we recommend checking the **Keep Alive** setting. Please ensure that Keep Alive is enabled and set to **_Options_**. If it hasn’t been configured yet, updating this setting often resolves inbound call issues.  
  
You can update this setting by navigating to **Account → Advanced → Keep Alive Type**.

* * *

## **Related Articles**

  

-   [What is LC - Phone System?](https://help.gohighlevel.com/en/support/solutions/articles/48001223546)  
      
    
-   [How to Enable Call Transcriptions for Recorded Calls](https://help.gohighlevel.com/en/support/solutions/articles/155000002841)  
      
    
-   [Number Intelligence - Number Validation, Spam Detection, and Unknown Caller](https://help.gohighlevel.com/en/support/solutions/articles/48001153968)  
      
    
-   [Outbound Calls with the Web Dialer](https://help.gohighlevel.com/en/support/solutions/articles/48000981431)[](https://help.gohighlevel.com/en/support/solutions/articles/48001146671)  
      
    
-   [Voicemail for Company and for Users](https://help.gohighlevel.com/en/support/solutions/articles/48001146671)  
      
    
-   [Interactive Voice Response (IVR) Guide - Actions & Triggers](https://help.gohighlevel.com/en/support/solutions/articles/155000001200)