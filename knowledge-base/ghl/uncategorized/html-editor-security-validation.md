---
title: "HTML Editor Security Validation"
url: "https://help.gohighlevel.com/support/solutions/articles/155000007400-html-editor-security-validation"
category: "Uncategorized"
---

# HTML Editor Security Validation

## Overview

We’ve added security validation to the **HTML Code Editor** inside:

-   Forms
    
-   Surveys
    
-   Quizzes
    

This update prevents unsafe JavaScript from being saved. It protects accounts from:

-   Cross-site scripting (XSS)
    
-   Cookie theft
    
-   Token/session hijacking
    
-   Account takeover attempts
    

If unsafe code is detected, the system blocks the save action and displays an error message.

  

**TABLE OF CONTENTS**

-   [How It Works](#How-It-Works)
-   [What Is Blocked](#What-Is-Blocked)
    -   [1\. Accessing Cookies](#1.-Accessing-Cookies)
    -   [2\. Using eval()](#2.-Using-eval\(\))
    -   [3\. Using new Function()](#3.-Using-new-Function\(\))
    -   [4\. Using setTimeout() With a String](#4.-Using-setTimeout\(\)-With-a-String)
    -   [5\. Using setInterval() With a String](#5.-Using-setInterval\(\)-With-a-String)
    -   [6\. Reading From localStorage](#6.-Reading-From-localStorage)
-   [What Is Allowed](#What-Is-Allowed)
-   [Important Notes](#Important-Notes)
-   [If Your Code Is Being Blocked](#If-Your-Code-Is-Being-Blocked)

* * *

## How It Works

When editing custom HTML:

1.  Open Form / Survey / Quiz Builder
    
2.  Add an **HTML element**
    
3.  Click **Edit HTML**
    
4.  Enter your code
    

The editor automatically scans the code in real time.

If a security issue is found:

-   A red error message appears below the editor
    
-   The **Save** button is disabled
    
-   You must remove the unsafe code before saving
    

* * *

## What Is Blocked

The editor blocks high-risk JavaScript patterns that can expose sensitive data.

### 1\. Accessing Cookies

Blocked:

document.cookie

Also blocked:

document\['cookie'\]
window\['document'\]\['cookie'\]

Cookies may contain authentication data. Accessing them can lead to account compromise.

* * *

### 2\. Using `eval()`

Blocked:

eval("alert('hello')")

`eval()` executes arbitrary strings as code and can be used to hide malicious scripts.

* * *

### 3\. Using `new Function()`

Blocked:

new Function('return document.cookie')

This dynamically executes string-based code and poses the same risks as `eval()`.

* * *

### 4\. Using `setTimeout()` With a String

Blocked:

setTimeout("alert('hi')", 1000)

Allowed:

setTimeout(function () {
  alert('hi')
}, 1000)

Passing a string causes the browser to evaluate it as code.

* * *

### 5\. Using `setInterval()` With a String

Blocked:

setInterval('checkStatus()', 5000)

Allowed:

setInterval(() => checkStatus(), 5000)

* * *

### 6\. Reading From `localStorage`

Blocked:

localStorage.getItem("authToken")

Reading from `localStorage` may expose sensitive session or authentication data.

Allowed:

localStorage.setItem("theme", "dark")
localStorage.removeItem("temp")
localStorage.clear()

* * *

## What Is Allowed

The following are not blocked:

-   Standard HTML
    
-   Safe JavaScript logic
    
-   Arrow functions
    
-   Function references in timers
    
-   Writing to `localStorage`
    
-   `sessionStorage` usage
    

* * *

## Important Notes

-   Detection is case-insensitive (`eval`, `EVAL`, etc.).
    
-   If the same issue appears multiple times, only one error message is shown.
    
-   Empty HTML fields are allowed.
    
-   Pure HTML (without scripts) is allowed.
    

* * *

## If Your Code Is Being Blocked

To resolve the issue:

-   Remove any direct cookie access
    
-   Avoid `eval()` or `new Function()`
    
-   Use function references instead of string-based timers
    
-   Do not read authentication or session data from `localStorage`