---
title: "Shipping Profiles: Custom Shipping Rates and App Integrations"
url: "https://help.gohighlevel.com/support/solutions/articles/155000006618-shipping-profiles-custom-shipping-rates-and-app-integrations"
category: "Uncategorized"
---

# Shipping Profiles: Custom Shipping Rates and App Integrations

  

  

Shipping Profiles in HighLevel let you set flexible, product-specific shipping rates across your store. Use them to charge accurate shipping costs for different types of products or app integrations, while a General Profile automatically covers everything else.

* * *

**TABLE OF CONTENTS**

-   [What Are Shipping Profiles?](#What-Are-Shipping-Profiles?)
-   [Key Benefits of Shipping Profiles](#Key-Benefits-of-Shipping-Profiles)
-   [General Shipping Profile](#General-Shipping-Profile)
-   [Custom Shipping Profiles](#Custom-Shipping-Profiles)
-   [Checkout Logic](#Checkout-Logic)
-   [How to Set Up Shipping Profiles](#How-to-Set-Up-Shipping-Profiles)
-   [Limit a Shipping Zone by ZIP/Postcode](#Limit-a-Shipping-Zone-by-ZIP/Postcode)
-   [Frequently Asked Questions](#Frequently-Asked-Questions)
-   [Related Articles](#Related-Articles)

* * *

# **What Are Shipping Profiles?**

  

Shipping Profiles let you apply unique shipping rules to specific products, stores, or app integrations. They determine how much customers pay for shipping at checkout, based on zones and rate types.

  

If a product isn’t assigned to a custom profile, it automatically uses the **General Shipping Profile**—so every checkout always has a valid shipping rate.

* * *

## **Key Benefits of Shipping Profiles**  
  

-   **Flexible control:** Set different rates for bulky or lightweight products.  
      
    
-   **Custom pricing models:** Choose between flat, weight-based, price-based, or free shipping.  
      
    
-   **App integrations:** Automatically sync rates from third-party shipping apps.  
      
    
-   **Accurate checkout totals:** Combine multiple shipping profiles into one seamless rate.  
      
    
-   **Fail-safe logic:** Products not assigned to any profile automatically use the General Profile.
    

* * *

## **General Shipping Profile**  
  

The **General Shipping Profile** is automatically created for your store. It applies to all products that aren’t assigned to a custom or app-defined profile.  
  

Use this as your fallback for standard shipping rates or when a third-party app doesn’t return rates.

  

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055669232/original/BAx9WZJMDWXOifiRXQuOowHhCi-vYvgi8g.png?1760076708)

* * *

## **Custom Shipping Profiles**

  

Custom Shipping Profiles give you the flexibility to charge specific rates for certain products or groups.

  

Each profile can:

-   Apply to one or more stores.  
      
    
-   Include selected products.  
      
    
-   Define zones by country, region, or province.  
      
    
-   Use any combination of rate types (flat, price-based, weight-based, or free).
    

  

Products can only belong to one custom profile at a time—reassigning a product overrides the old profile.

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055669280/original/5hBunWaBUGORsnuuDCQ4j4917nxI_S9UdA.png?1760076786)**

* * *

## **Checkout Logic**

  

When customers buy items from multiple profiles, HighLevel automatically calculates a combined total:  
  

-   If profile names differ, checkout shows a single line called **“Shipping.”**  
      
    
-   If profile names match, the rates combine and appear under that shared name.
    

  

This ensures accurate, transparent shipping costs for mixed-cart orders.

* * *

## **How to Set Up Shipping Profiles**

  

Follow these steps to create a new profile and define your shipping rates:  
  

1.  Go to **Payments → Settings → Shipping & Delivery → Custom Profiles.**  
      
    
2.  Click **Add Custom.**  
      
    
3.  Enter a **unique profile name** (this is for internal use only).  
      
    
4.  Select the **store(s)** this profile applies to.  
      
    
5.  Choose the **products or product groups** to include.  
      
    
6.  Click **Add Zone** and select the countries or regions you deliver to.
    

  

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055669365/original/G3q_IcTpmFoKIqvTDDAuEf9GIKBZreuACg.png?1760076895)**  

7.  For each zone, add one or more rate types:
    
    -   Flat rate (e.g., $5)  
          
        
    -   Price-based (e.g., Free over $50)  
          
        
    -   Weight-based (e.g., $10 for 0–10 lb)  
          
        
    -   Free shipping  
          
        
8.  Click **Save** when done.  
      
    
9.  Place a test order to confirm the correct rates display at checkout.
    

  

**Pro Tip:** Start by creating your General Profile first, then layer in Custom Profiles only for products or regions that require unique shipping rates.

* * *

## **Limit a Shipping Zone by ZIP/Postcode**

  

When creating or editing a shipping zone, you can restrict the zone so it only applies to specific ZIP/postcodes. This supports hyper-local delivery coverage and prevents a zone from applying to unwanted areas.

  

**Enable ZIP/Postcode Restriction**

  

1.  In your shipping zone, enable Limit Shipping to Specific ZIP/Postcodes.  
      
    
2.  Enter one or more ZIP/postcodes using any of the following formats:  
      
    Single code (example: "100210")  
    Comma-separated codes (example: "100210,122021")  
    Wildcard prefix (example: **46\*** to match all ZIP/postcodes starting with "46")  
      
    

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064557369/original/WOF4431SGZsN8YlsvocBa0KMZjSeB8olUg.png?1770715257)

  
**Validation Rules**

-   Wildcards are allowed only as a \*\*trailing asterisk (\`\*\`)\*\* (example: \`56\*\`).
-   The zone cannot be saved if ZIP/postcode restriction is enabled but \*\*no valid entries\*\* are provided.
-   Invalid or duplicate entries are blocked during input.

* * *

## **Frequently Asked Questions**

  

**Q: Can two custom profiles share the same name?**

No. Each profile must have a unique name to prevent checkout confusion.

  

**Q: What happens if I delete a custom profile?**

Products in that profile automatically return to the General Profile.

  

**Q: How are shipping rates calculated for mixed carts?**

Rates from all applicable profiles are added together and displayed as one combined shipping line.

  

**Q: Can I override rates from an app integration?**

Yes. Create a custom profile for the same products to override app-defined rates.

  

**Q: What happens if an app fails to return rates?**

HighLevel automatically applies the fallback rate from the General Profile.

  

**Q: What happens if a customer ZIP/postcode does not match my restricted zone?**

That shipping zone does not apply at checkout if the customer ZIP/postcode does not match any configured entry or wildcard pattern.

  

**Q: How do I enter a ZIP/postcode range?**

Use a wildcard with an asterisk (" \* ") at the end of the entry. For example, **56\*** matches any ZIP/postcode that starts with \`56\`.

* * *

## **Related Articles**

  

-   [](https://help.gohighlevel.com/)[How to Configure Shipping & Delivery Rates in Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000002428)  
      
    
-   [](https://help.gohighlevel.com/)[Shipping & Delivery Rates for Ecommerce Stores](https://help.gohighlevel.com/en/support/solutions/articles/155000002842)  
      
    
-   [](https://help.gohighlevel.com/)[How to Connect Shippo Integration](https://help.gohighlevel.com/en/support/solutions/articles/155000003109)  
      
    
-   [](https://help.gohighlevel.com/)[Set Up ShipStation for Ecommerce Shipping](https://help.gohighlevel.com/en/support/solutions/articles/155000006094)