---
title: "Workflow Action - If/Else"
url: "https://help.gohighlevel.com/support/solutions/articles/48001180266-workflow-action-if-else"
category: "Uncategorized"
---

# Workflow Action - If/Else

##   

**TABLE OF CONTENTS**

[**When using Includes/ Does Not Include as a condition:**](#When-using-Includes/-Does-Not-Include%C2%A0as-a-condition%3A%C2%A0) 

[Creating an And condition:](#Creating-an-And-condition%3A)

[Creating an Or Condition](#Creating-an%C2%A0Or-Condition)

  
[**If/ Else Branches**](#If/-Else-Branches)

[What happens when two branches are both true? Will the lead go down both paths?](#What-happens-when-two-branches-are-both-true?-Will-the-lead-go-down-both-paths?)

  
[**Time Comparison Operators**](#Time-Comparison-Operators)

[The "Is" Operator](#The-)

[The "Is Not" Operator](#The-)

[The "Is After" Operator](#The-)

[The "Is on or After" Operator](#The-)

[The "Is before" Operator](#The-)

[The "Is on or before" Operator](#The-)

[The "Is not empty" or "Is empty" Operator](#The-)

  
[**Troubleshooting**](#Troubleshooting)

  

  

* * *

## **When using Includes/ Does Not Include as a condition:**   
  

**Please Note:** 

There are several conditional parameters in Workflow Builder where you'll have the option to specify "**Includes**" or "**Does not include**" such as Tags and other multiple-option custom fields (checkbox fields, dropdown pickers, etc.)

  

##   

## **Creating an _And_ condition:**

In the example below we are using the AND condition. The system is searching to make sure that the contact Tags - "**Does NOT include**" both the '**consultation\_booked**' **AND** '**consultation\_confirmed**' tags.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250497669/original/FlAzFJDU1cdgpaFpt9G1g1I-LshYykcoIw.png?1662994820)

  

  

 If one of the two tags is present on the respective contact, then the condition will **fail**. 

In this example in order for this contact to go down the "YES" path, both tags would NOT be present on the contact profile/record.

  

  

  

  

* * *

## **Creating an** **_Or_ Condition**

If your intention is to create an "OR" scenario, you would want to break the two tags into separate conditions and choose the OR option like this:

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48250492624/original/PVEr200i5xqjrUmLV8Th7Z7N3w-UC0p-Hg.png?1662993828)

  

In this case, if the contact meets ONE or both of the "Or tags" then the condition is true. The system is only looking for one or both conditions to be correct before pushing the contact down the "**Yes**" path.

  

**More info: [If/ Else Conditions - Troubleshooting AND or OR conditions](https://help.gohighlevel.com/en/support/solutions/articles/48001202137)**

* * *

## **If/ Else Branches**

  

  

**Please Note:**

If or else branches support up to 10 different outcomes per event.

  

##   

### **What happens when two branches are both true? Will the lead go down both paths?**

No, the system will push the lead down the first correct path/branch in your setup. So it goes top down in the order you built the conditions/branches.

  

  

* * *

## **Time Comparison Operators**

Time Comparison Operators are essential components in workflows used to compare the current date and time with a specified input value. These operators enable workflow automation systems to make informed decisions based on time conditions. The different date and time units that can be compared using these operators include the current day of the week, the current day of the month, the current month, the current year, and the current hour.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767416/original/KoCQkLH9MoyKbTKOIcvnrgut3GGu561TCg.png?1678205389)  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285767549/original/dbRqTFVic08R06DsjrWJTBvu_oQTTHsuvA.png?1678205424)Once you choose the specific Time Parameter for which you want to use a Time Comparison Operator for, you need to choose the Time Comparison Operator from the drop down for **Select Operator:**  
  
**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768884/original/teNiXrftXKTqW1mha1KThd6BZnUd0INqGA.png?1678205723)**

### **  
The "Is" Operator  
**

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285768774/original/ky0A4uISIeeisjKdlTEGXhxz--Q1Om2W7w.png?1678205699)**

###   
  

The "Is" comparison operator checks whether the selected date unit is the same as the input value. For instance, "Current Day of the Week Is Monday" will only return true if today is Monday. Similarly, "Current Month Is January" will only return true if it is currently January. For the options like **Current day of the Month is**, you need to specify the date of the current month like the 1st, 2nd, 3rd .

###   
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285770094/original/wIhZ5qcg5hVwFuc6UAXzWcxuFSZn2B49Uw.png?1678206019)**The "Is Not" Operator**

The "Is not" operator, on the other hand, checks if the selected date unit is different than the provided input. For instance, "Current Day of the Week Is Not Saturday" will return true for all days except Saturday.  
  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285772852/original/kCKx0qld3p_3b3nSPMEKESQphNrTsArYkg.png?1678206507)

### **  
The "Is After" Operator  
**

The "Is after" operator checks if the selected date unit is after the provided input. However, in the case of **hours**, this operator only considers minutes that start on the next hour. For instance, "Current Hour Is After 6 PM" will only return true if the time is 7:00 PM onwards because 6:59 PM is still considered inside of 6 PM.  
  
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285773967/original/ctdTUP7-6TRTnlqG6bAo06Ops_t3tZrBKA.png?1678206767)

  

### **  
The "Is on or After" Operator  
**

The "Is on or after" operator checks if the selected date unit is on or after the provided input. For **hours**, this operator considers minutes from the same hour and onwards. For instance, "Current Hour Is On or After 6 PM" will return true for 6:59 PM because it is considered to be "On" 6 PM. And it will also be true for any time after 6PM because of the **on or After** logic in it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285774725/original/LbFSGZ2xAz7OwUALQtrjMyULCNhd4uguww.png?1678206957)

  

### **The "Is before" Operator**

  

The "Is before" operator checks if the selected date unit is before the provided input. For example, "Current Month Is Before June" will return true for all months before June.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775110/original/Bkcc0xt6Pds6vD8yLtPApbAMaM6GcnUwlQ.png?1678207054)

  

### **The "Is on or before" Operator**

The "Is on or before" operator checks if the selected date unit is on or before the provided input. For **hours**, this operator also considers minutes from the same hour. For instance, "Current Hour Is On or Before 6 PM" will return true for 6:59 PM because it is considered to be "On" 6 PM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48285775589/original/2EYd4ky4Khaa70G3s6_cbNPSXs3-NMj_Wg.png?1678207145)  

### **The "Is not empty" or "Is empty" Operator**

Lastly, the "Is not empty" operator checks if the field has a value, while the "Is empty" operator checks if the field does not have any value. These two operators are used to ensure that the workflow automation system receives valid input values.

* * *

# **Troubleshooting**

  
**[If/ Else Conditions - Troubleshooting AND or OR conditions](https://help.gohighlevel.com/en/support/solutions/articles/48001202137)  
**