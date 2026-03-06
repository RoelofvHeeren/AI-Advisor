---
title: "Using custom fonts in the Email Builder"
url: "https://help.gohighlevel.com/support/solutions/articles/48001203783-using-custom-fonts-in-the-email-builder"
category: "Uncategorized"
---

# Using custom fonts in the Email Builder

When creating your own HTML Email Design System, you may want to use a custom font beyond the standard ones available. When working with brand guidelines where you need to use a custom font, it's always best to use a custom font with a solid fallback in place.

  

### **Email client support**

The first consideration to take into account when working with custom fonts is that email client support is patchy. The following email clients support custom fonts:

-   Apple Mail
-   iOS Mail
-   Samsung Mail
-   Outlook.com

It's important to define a font-stack when using custom fonts. This should include some standard system fonts to make sure that your email renders in clients which don't support custom fonts.

  

```
'OpenSansBold', Helvetica, Arial, sans-serif
```

To host your custom fonts, you can either use a service such as Google Fonts, or host them yourself. We can also host them for our customers - we'll need to see proof of your license before we can do this.

  

For situations where your custom fonts aren't supported, you should select fallbacks that are included on [the majority of computers](https://www.cssfontstack.com/). These fallbacks define what fonts will be displayed if the email client doesn't support custom fonts.

  

### CSS set up

  

The most reliable way to include a specific font into your email is to use @font-face. Below is an example of this in action: 

  

<style> @font-face { font-family: 'Festive', cursive; src: url('[https://fonts.googleapis.com/css2?family=Festive&display=swap](https://fonts.googleapis.com/css2?family=Festive&display=swap)') }
\* { font-family: 'Festive', cursive; }
</style>

  

When working with Outlook, we need to wrap this @font-face in a @media tag. This is because Outlook 2007, 2010 and 2017 don't support them.