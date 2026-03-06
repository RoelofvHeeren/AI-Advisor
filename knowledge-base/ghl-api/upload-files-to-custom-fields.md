---
title: "Upload files to custom fields"
url: "https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields"
category: ""
---

# Upload files to custom fields

# Upload files to custom fields

POST 

## /forms/upload-custom-files

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom\_field\_id >\_< file\_id >".  
Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid)  
There is support for multiple file uploads as well. Have multiple fields in the format mentioned.  
File size is limited to 50 MB.  
  
The allowed file types are:  

-   PDF
-   DOCX
-   DOC
-   JPG
-   JPEG
-   PNG
-   GIF
-   CSV
-   XLSX
-   XLS
-   MP4
-   MPEG
-   ZIP
-   RAR
-   TXT
-   SVG

  
  
The API will return the updated contact object.

## Request[​](#request "Direct link to Request")

## Responses[​](#responses "Direct link to Responses")

-   200
-   400
-   401

Successful response

Bad Request

Unauthorized