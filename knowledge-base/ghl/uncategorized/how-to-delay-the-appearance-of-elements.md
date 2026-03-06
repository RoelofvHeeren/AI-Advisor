---
title: "How to delay the appearance of elements"
url: "https://help.gohighlevel.com/support/solutions/articles/48001079544-how-to-delay-the-appearance-of-elements"
category: "Uncategorized"
---

# How to delay the appearance of elements

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48037120959/original/37Dy8I4bBcPLV_tEuxjyUpx8wHwPNbHOeA.jpg?1587592047)

  

#row-7680 {

opacity: 0;

animation: fadeIn 1s;

animation-delay: 900s;

animation-fill-mode: forwards;

pointer-events: none;

}

@keyframes fadeIn {

from { opacity: 0; pointer-events: none; }

to { opacity: 1; pointer-events: auto; }
  
}