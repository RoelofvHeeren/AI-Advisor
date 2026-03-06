---
title: "Message throughput (MPS) and Trust Scores for A2P 10DLC in the US"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004527-message-throughput-mps-and-trust-scores-for-a2p-10dlc-in-the-us"
category: "Uncategorized"
---

# Message throughput (MPS) and Trust Scores for A2P 10DLC in the US

#### [](https://help.twilio.com/articles/1260800720410-What-is-A2P-10DLC-)

[](https://help.twilio.com/articles/1260800720410-What-is-A2P-10DLC-)

Under the new **[](https://help.gohighlevel.com/en/support/solutions/articles/48001238163)**[](https://help.gohighlevel.com/en/support/solutions/articles/48001238163)[A2P 10DLC service](https://help.gohighlevel.com/en/support/solutions/articles/48001238163)[](https://help.gohighlevel.com/en/support/solutions/articles/48001238163)**[](https://help.gohighlevel.com/en/support/solutions/articles/48001238163)** for sending messages via 10-digit long code numbers in the United States, there are changes to how message sending throughput is allocated. A2P 10DLC message throughput in the US will now be determined based on your Brand type, Campaign type (use case), and Trust Score (for Standard Brands). This guide gives an overview of these changes, and how throughput is allocated.

  

T-Mobile will also impose daily message limits toward their subscribers. This is separate from message sending throughput. See [T-Mobile daily message limits for long code messaging with A2P 10DLC for details.](https://help.twilio.com/articles/1260804800549-T-Mobile-daily-message-limits-for-long-code-messaging-with-A2P-10DLC)

  

**TABLE OF CONTENTS**

-   [Throughput overview](#Throughput-overview)
-   [What is a Trust Score?](#What-is-a-Trust-Score?)
-   [How is throughput (MPS) allocated for A2P 10DLC?](#How-is-throughput-\(MPS\)-allocated-for-A2P-10DLC?)
-   [Current status of message throughput in A2P 10DLC](#Current-status-of-message-throughput-in-A2P-10DLC)
-   [Declared Use Cases: Message Throughput](#Declared-Use-Cases%3A-Message-Throughput)
-   [Mixed / Marketing Use Cases: Message Throughput](#Mixed-/-Marketing-Use-Cases%3A-Message-Throughput)
-   [Sole Proprietor Use Cases: Message Throughput](#Sole-Proprietor-Use-Cases%3A-Message-Throughput)

* * *

[](https://help.twilio.com/articles/1260803225669-Message-throughput-MPS-and-Trust-Scores-for-A2P-10DLC-in-the-US#h_01FAKRGP4EF1X4DF02X4JCEAP0)[  
](https://help.twilio.com/articles/1260803225669-Message-throughput-MPS-and-Trust-Scores-for-A2P-10DLC-in-the-US#h_01FAKRGP4EF1X4DF02X4JCEAP0)

[](https://help.twilio.com/articles/1260803225669-Message-throughput-MPS-and-Trust-Scores-for-A2P-10DLC-in-the-US#h_01FAKRGP4EF1X4DF02X4JCEAP0)

# **Throughput overview**

  

Message sending throughput for SMS is measured in **message segments per second (MPS).** Each message segment consists of up to 160 GSM-7 encoded characters, so an SMS with more characters and/or different character encoding can be comprised of multiple segments. For full details, see [What The Heck Is A Segment.](https://www.twilio.com/en-us/blog/what-the-heck-is-a-segment-html?_gl=1%2Ayvfi1g%2A_gcl_au%2AMzAzODAyMTg3LjE3MzU1NTg2MDQ.%2A_ga%2AMjg3Nzk4OTM0LjE3MzUwNDAxMTI.%2A_ga_RRP8K4M4F3%2AMTczNzcxODExOC40OC4xLjE3Mzc3MjIwNDEuMC4wLjA.)

  

In the past, MPS for US long code numbers was set at a standard 1 MPS per number, shared across all mobile carriers. This rate is changing under the new A2P 10DLC service. Going forward, MPS throughput will be determined based on the sender's Brand type, Campaign type (use case), and Trust Score (for Standard Brands).

#   

# **What is a Trust Score?**

  

A Trust Score is a score assigned during **Standard Brand** registration with The Campaign Registry (TCR - the 3rd party that administers the US wireless carriers' new registration system). When an A2P Customer Profile registration for US 10DLC messaging is submitted, we send this information to TCR for review. HighLevel also submits the Brand for "secondary vetting," which assigns a score from 0 to 100 and gives access to higher default throughput and message limits toward US mobile carriers.

  

The Standard Brand registration process uses a reputation algorithm to review specific criteria relating to your company, and then assigns a “Trust Score”. In short, the higher your Trust Score, the higher your messaging throughput (MPS). **Note: Sole Proprietor** and **Low Volume Brands** do not go through "secondary vetting", are not assigned a Trust Score. Throughput is fixed based on their corresponding use case. 

  

**Trust Scores are static and do not automatically change over time.**

  

T-Mobile will also impose daily message limits toward their subscribers. See [T-Mobile daily message limits for long code messaging with A2P 10DLC for complete details.](https://help.twilio.com/articles/1260804800549-T-Mobile-daily-message-limits-for-long-code-messaging-with-A2P-10DLC)

  

**What if I am not satisfied with my Trust Score? Can I appeal?**

  

Low Trust Scores can result from the following:

  

-   Data discrepancies in the information you submitted in your A2P registration, such as a different address than the one associated with your official business registration number (e.g. EIN).
-   A small brand footprint

  

In general, smaller organizations and those with less business presence will receive lower scores. 

  

If you receive a low Trust Score, HighLevel will do our best to offer guidance on possible causes or resolutions for a low score. If this applies to you, please contact HighLevel support.

  

For more information about resubmitting brands, please see our product documentation on Resubmitting Standard/LVS Brands.

  

# **How is throughput (MPS) allocated for A2P 10DLC?**

  

A set maximum MPS is granted for each of your registered campaigns (use cases). This MPS is shared across all US/Canada long code numbers allocated to your campaign, and all wireless carriers. Whether you choose to send messages over a single number to a specific carrier, or split up messages over a collection of local numbers to multiple carriers, the same MPS limit applies.

  

You will also need to factor in Account Based Rate Limiting, which is an upper MPS limit set at the account level, combined across all senders. For example, if you have an Account Based Rate Limit of 100 MPS, with three A2P 10DLC Campaigns approved on the same account for 75 MPS each, you'll still be limited to 100 MPS combined across all Campaigns. This will not prevent you from sending at a combined 225 MPS to the HighLevel Messaging API in this scenario, but each message segment that exceeds that 100 per second will be placed in queue.

  

Specific Use Cases (what carriers call “Declared” Campaigns) may receive higher MPS for the same Trust Score than a “Mixed” or Marketing type Use Case.

  

For a full list of Use Case and Campaign types as defined by carriers, and their respective per-message fees and other considerations, see [List of Campaign Types and Use Case Types for A2P 10DLC registration.](https://help.gohighlevel.com/en/support/solutions/articles/155000000235)

  

**Is Toll-Free SMS throughput affected?**

  

No. Toll-Free SMS is not affected by the throughput changes described in this article, nor is it subject to the new campaign registration requirements. A US Toll-Free number has a total of 3 MPS toward all US and Canada carriers by default. You can request higher message throughput for a US Toll-Free number by contacting our Sales team.

  

**Is messaging to countries other than the United States affected?**

  

No.

  

# **Current status of message throughput in A2P 10DLC**

  

The Trust Score you receive (for Standard Brands), and the Campaign type you select, will dictate the throughput of your long code numbers toward AT&T, Verizon, and T-Mobile. Please review the respective table below based on your selected Campaign type for specific MPS information.

  

# **Declared Use Cases: Message Throughput**

  

A Declared use case means you have chosen one specific non-marketing use case (examples: 2FA, Account Notifications, etc.). For a full list, see List of Campaign Types and Use Cases.

  

<table data-identifyelement="755" style="width: 100%;"><tbody data-identifyelement="756"><tr data-identifyelement="757" style="font-size: 14px;"><td data-identifyelement="758" dir="ltr" style="width: 31.1836%; vertical-align: middle; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="759" style="font-size: 14px;"><strong data-identifyelement="760">Trust Score</strong></span></td><td data-identifyelement="761" style="width: 17.9807%; vertical-align: middle; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="762" style="font-size: 14px;"><strong data-identifyelement="763">Total SMS MPS toward major* US networks<span data-identifyelement="764" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="765"></strong></span></td><td data-identifyelement="766" style="width: 16.9634%; vertical-align: middle; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="767" style="font-size: 14px;"><strong data-identifyelement="768">AT&amp;T SMS MPS<span data-identifyelement="769" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="770"></strong></span></td><td data-identifyelement="771" dir="ltr" style="width: 18.2168%; vertical-align: middle; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="772" style="font-size: 14px;"><strong data-identifyelement="773">T-Mobile SMS MPS</strong><span data-identifyelement="774" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="775"></span></td><td data-identifyelement="776" style="width: 15.5858%; vertical-align: middle; font-size: 14px; background-color: rgb(239, 239, 239);"><p data-identifyelement="777" dir="ltr" style="font-size: 14px;"><span data-identifyelement="778" style="font-size: 14px;"><strong data-identifyelement="779">Verizon SMS MPS</strong></span></p></td></tr><tr data-identifyelement="780" style="font-size: 14px;"><td data-identifyelement="781" style="width: 31.1836%; font-size: 14px;"><span data-identifyelement="782" style="font-size: 14px;">75 - 100<span data-identifyelement="783" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="784"></span></td><td data-identifyelement="785" dir="ltr" style="width: 17.9807%; font-size: 14px;"><span data-identifyelement="786" style="font-size: 14px;">225<br data-identifyelement="787"></span></td><td data-identifyelement="788" dir="ltr" style="width: 16.9634%; font-size: 14px;"><span data-identifyelement="789" style="font-size: 14px;">75</span></td><td data-identifyelement="790" dir="ltr" style="width: 18.2168%; font-size: 14px;"><span data-identifyelement="791" style="font-size: 14px;">75</span></td><td data-identifyelement="792" dir="ltr" style="width: 15.5858%; font-size: 14px;"><span data-identifyelement="793" style="font-size: 14px;">75</span></td></tr><tr data-identifyelement="794" style="font-size: 14px;"><td data-identifyelement="795" style="width: 31.1836%; font-size: 14px;"><span data-identifyelement="796" style="font-size: 14px;">50 - 74<span data-identifyelement="797" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="798"></span></td><td data-identifyelement="799" dir="ltr" style="width: 17.9807%; font-size: 14px;"><span data-identifyelement="800" style="font-size: 14px;">120</span></td><td data-identifyelement="801" dir="ltr" style="width: 16.9634%; font-size: 14px;"><span data-identifyelement="802" style="font-size: 14px;">40</span></td><td data-identifyelement="803" dir="ltr" style="width: 18.2168%; font-size: 14px;"><span data-identifyelement="804" style="font-size: 14px;">40</span></td><td data-identifyelement="805" dir="ltr" style="width: 15.5858%; font-size: 14px;"><span data-identifyelement="806" style="font-size: 14px;">40</span></td></tr><tr data-identifyelement="807" style="font-size: 14px;"><td data-identifyelement="808" style="width: 31.1836%; font-size: 14px;"><span data-identifyelement="809" style="font-size: 14px;">1 - 49<span data-identifyelement="810" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="811"></span></td><td data-identifyelement="812" dir="ltr" style="width: 17.9807%; font-size: 14px;"><span data-identifyelement="813" style="font-size: 14px;">12</span></td><td data-identifyelement="814" dir="ltr" style="width: 16.9634%; font-size: 14px;"><span data-identifyelement="815" style="font-size: 14px;">4</span></td><td data-identifyelement="816" dir="ltr" style="width: 18.2168%; font-size: 14px;"><span data-identifyelement="817" style="font-size: 14px;">4</span></td><td data-identifyelement="818" dir="ltr" style="width: 15.5858%; font-size: 14px;"><span data-identifyelement="819" style="font-size: 14px;">4</span></td></tr><tr data-identifyelement="820"><td data-identifyelement="821" dir="ltr" style="width: 31.1836%; font-size: 14px;"><span data-identifyelement="822" style="font-size: 14px;">0 (Low Volume Standard Brand - Skipped Secondary Vetting)<br data-identifyelement="823"></span></td><td data-identifyelement="824" dir="ltr" style="width: 17.9807%; font-size: 14px;"><span data-identifyelement="825" style="font-size: 14px;">12</span></td><td data-identifyelement="826" dir="ltr" style="width: 16.9634%; font-size: 14px;"><span data-identifyelement="827" style="font-size: 14px;">4</span></td><td data-identifyelement="828" dir="ltr" style="width: 18.2168%; font-size: 14px;"><span data-identifyelement="829" style="font-size: 14px;">4</span></td><td data-identifyelement="830" dir="ltr" style="width: 15.5858%;"><span data-identifyelement="831" style="font-size: 14px;">4</span></td></tr></tbody></table>

  

\*Your messages toward the US Cellular mobile network will be based on your major network throughput, up to a maximum of 8 MPS; your MPS toward all other **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS per phone number.

  

# **Mixed / Marketing Use Cases: Message Throughput**

  

Mixed / Marketing use cases can be registered for customers who want to send messages for multiple use cases from the same set of numbers, or for marketing. Different throughput levels are allocated for Mixed / Marketing use cases than for Declared use cases.

  

Please note, in addition to the "Mixed / Marketing" use case, there is a separate Campaign use case designated as **"Low Volume Mixed"** – this option has a lower monthly fee than a standard Campaign, but is fixed at the lowest throughput tier below, regardless of your Trust Score.

<table data-identifyelement="858" style="width: 100%; font-size: 14px;"><tbody data-identifyelement="859"><tr data-identifyelement="860"><td data-identifyelement="861" style="width: 27.507%; font-size: 14px; background-color: rgb(239, 239, 239);"><strong data-identifyelement="862"><span data-identifyelement="863" style="font-size: 14px;"><strong data-identifyelement="864">Trust Score<span data-identifyelement="865" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="866"></strong></span></strong></td><td data-identifyelement="867" style="width: 20.5431%; font-size: 14px; background-color: rgb(239, 239, 239);"><strong data-identifyelement="868"><span data-identifyelement="869" style="font-size: 14px;">Total SMS MPS toward major US networks*<span data-identifyelement="870" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span></strong></td><td data-identifyelement="871" style="width: 16.168%; font-size: 14px; background-color: rgb(239, 239, 239);"><strong data-identifyelement="872"><span data-identifyelement="873" style="font-size: 14px;">AT&amp;T SMS MPS<span data-identifyelement="874" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="875"></span></strong></td><td data-identifyelement="876" style="width: 18.0122%; font-size: 14px; background-color: rgb(239, 239, 239);"><strong data-identifyelement="877"><span data-identifyelement="878" style="font-size: 14px;">T-Mobile SMS MPS<span data-identifyelement="879" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="880"></span></strong></td><td data-identifyelement="881" style="width: 17.5063%; font-size: 14px; background-color: rgb(239, 239, 239);"><p data-identifyelement="882" dir="ltr" style="font-size: 14px;"><span data-identifyelement="883" style="font-size: 14px;"><strong data-identifyelement="884" dir="ltr">Verizon SMS MPS</strong></span></p></td></tr><tr data-identifyelement="885"><td data-identifyelement="886" style="width: 27.507%; font-size: 14px;"><span data-identifyelement="887" style="font-size: 14px;">75 - 100<span data-identifyelement="888" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="889"></span></td><td data-identifyelement="890" style="width: 20.5431%; font-size: 14px;"><span data-identifyelement="891" dir="ltr" style="font-size: 14px;">225</span></td><td data-identifyelement="892" style="width: 16.168%; font-size: 14px;"><span data-identifyelement="893" dir="ltr" style="font-size: 14px;">75</span></td><td data-identifyelement="894" style="width: 18.0122%; font-size: 14px;"><span data-identifyelement="895" dir="ltr" style="font-size: 14px;">75</span></td><td data-identifyelement="896" style="width: 17.5063%; font-size: 14px;"><span data-identifyelement="897" dir="ltr" style="font-size: 14px;">75</span></td></tr><tr data-identifyelement="898"><td data-identifyelement="899" style="width: 27.507%; font-size: 14px;"><span data-identifyelement="900" style="font-size: 14px;">50 - 74<span data-identifyelement="901" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="902"></span></td><td data-identifyelement="903" style="width: 20.5431%; font-size: 14px;"><span data-identifyelement="904" dir="ltr" style="font-size: 14px;">120</span></td><td data-identifyelement="905" style="width: 16.168%; font-size: 14px;"><span data-identifyelement="906" dir="ltr" style="font-size: 14px;">40</span></td><td data-identifyelement="907" style="width: 18.0122%; font-size: 14px;"><span data-identifyelement="908" dir="ltr" style="font-size: 14px;">40</span></td><td data-identifyelement="909" style="width: 17.5063%; font-size: 14px;"><span data-identifyelement="910" dir="ltr" style="font-size: 14px;">40</span></td></tr><tr data-identifyelement="911"><td data-identifyelement="912" style="width: 27.507%; font-size: 14px;"><span data-identifyelement="913" style="font-size: 14px;">1 - 49<span data-identifyelement="914" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="915"></span></td><td data-identifyelement="916" style="width: 20.5431%; font-size: 14px;"><span data-identifyelement="917" dir="ltr" style="font-size: 14px;">12</span></td><td data-identifyelement="918" style="width: 16.168%; font-size: 14px;"><span data-identifyelement="919" dir="ltr" style="font-size: 14px;">4</span></td><td data-identifyelement="920" style="width: 18.0122%; font-size: 14px;"><span data-identifyelement="921" dir="ltr" style="font-size: 14px;">4</span></td><td data-identifyelement="922" style="width: 17.5063%; font-size: 14px;"><span data-identifyelement="923" dir="ltr" style="font-size: 14px;">4</span></td></tr><tr data-identifyelement="924"><td data-identifyelement="925" style="width: 27.507%; font-size: 14px;"><span data-identifyelement="926" dir="ltr" style="font-size: 14px;">0 (Low Volume Standard Brand - Skipped Secondary Vetting)<br data-identifyelement="927"></span></td><td data-identifyelement="928" style="width: 20.5431%; font-size: 14px;"><span data-identifyelement="929" dir="ltr" style="font-size: 14px;">12</span></td><td data-identifyelement="930" style="width: 16.168%; font-size: 14px;"><span data-identifyelement="931" dir="ltr" style="font-size: 14px;">4</span></td><td data-identifyelement="932" style="width: 18.0122%; font-size: 14px;"><span data-identifyelement="933" dir="ltr" style="font-size: 14px;">4</span></td><td data-identifyelement="934" style="width: 17.5063%; font-size: 14px;"><span data-identifyelement="935" dir="ltr" style="font-size: 14px;">4</span></td></tr><tr data-identifyelement="936"><td data-identifyelement="937" style="width: 27.507%; font-size: 14px;"><span data-identifyelement="938" style="font-size: 14px;">Low Volume Mixed Campaign (regardless of Trust Score)<span data-identifyelement="939" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="940"></span></td><td data-identifyelement="941" style="width: 20.5431%; font-size: 14px;"><span data-identifyelement="942" dir="ltr" style="font-size: 14px;">3.75</span></td><td data-identifyelement="943" style="width: 16.168%; font-size: 14px;"><span data-identifyelement="944" dir="ltr" style="font-size: 14px;">1.25</span></td><td data-identifyelement="945" style="width: 18.0122%; font-size: 14px;"><span data-identifyelement="946" dir="ltr" style="font-size: 14px;">1.25</span></td><td data-identifyelement="947" style="width: 17.5063%; font-size: 14px;"><span data-identifyelement="948" dir="ltr" style="font-size: 14px;">1.25</span></td></tr></tbody></table>

  

\*Your messages toward the US Cellular mobile network will be based on your major network throughput, up to a maximum of 8 MPS; your MPS toward all other **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS per phone number.

  

# **Sole Proprietor Use Cases: Message Throughput**

  

Sole Proprietor Brands are available for individuals or small businesses without a tax ID sending low-volume messaging. Sole proprietor brands are limited to 1 Campaign, 1 phone number per Campaign, and a throughput limit of 1 MPS.  Sole Proprietor Campaigns do not have a Trust Score, and have a fixed throughput as well as limits of 1000 msg/day (T-Mobile) and 15 msg/minute (AT&T) per Campaign. If more throughput is desired, the business should be registered as a Standard Brand.

<table data-identifyelement="970" style="width: 100%;"><tbody data-identifyelement="971"><tr data-identifyelement="972"><td data-identifyelement="973" style="width: 25%; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="974" style="font-size: 14px;"><strong data-identifyelement="975">Total SMS MPS toward major US networks**<span data-identifyelement="976" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="977"></strong></span></td><td data-identifyelement="978" style="width: 25%; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="979" style="font-size: 14px;"><strong data-identifyelement="980">AT&amp;T SMS MPS<span data-identifyelement="981" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="982"></strong></span></td><td data-identifyelement="983" style="width: 25%; font-size: 14px; background-color: rgb(239, 239, 239);"><span data-identifyelement="984" style="font-size: 14px;"><strong data-identifyelement="985">T-Mobile SMS MPS<span data-identifyelement="986" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span><br data-identifyelement="987"></strong></span></td><td data-identifyelement="988" style="width: 25%; background-color: rgb(239, 239, 239);"><p data-identifyelement="989" dir="ltr" style="font-size: 14px;"><strong data-identifyelement="990"><span data-identifyelement="991" style="font-size: 14px;"><strong data-identifyelement="992" dir="ltr">Verizon SMS MPS</strong></span></strong></p><br data-identifyelement="993"></td></tr><tr data-identifyelement="994"><td data-identifyelement="995" dir="ltr" style="width: 25.0000%;">2.25</td><td data-identifyelement="996" dir="ltr" style="width: 25.0000%;">0.25</td><td data-identifyelement="997" style="width: 25.0000%;">1 per number<span data-identifyelement="998" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></td><td data-identifyelement="1000" style="width: 25.0000%;">1 per number<span data-identifyelement="1001" dir="ltr" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></td></tr></tbody></table>

  

\*Your messages toward all **minor** US carriers (small independent carriers comprising less than 5% of the overall mobile market share) will be 1 MPS.

  

\*\* A Sole Prop Campaign can contain up to 1 US/Canada long code numbers. All numbers will share 0.25 MPS toward AT&T, but each number will get 1 MPS toward T-Mobile and 1 MPS toward Verizon. This adds up to a maximum of 2.25 MPS toward the major US networks.