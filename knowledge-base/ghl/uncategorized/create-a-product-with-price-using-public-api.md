---
title: "Create a Product with Price using Public API"
url: "https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api"
category: "Uncategorized"
---

# Create a Product with Price using Public API

**TABLE OF CONTENTS**

1.  [Introduction](#Introduction)
2.  [Products](#Products)
    1.  [Types of Products](#Types-of-Products)
        1.  [Products with Price](#Products-with-Price)
        2.  [Products with Variants](#Products-with-Variants)
3.  [Create Product using Public API](#Create-Product-using-Public-API)
    1.  [Authorization](#Authorization)
    2.  [Creation of Product](#Creation-of-Product)
        1.  [Create Product](#Create-Product)
        2.  [Example Payload for Product with Price:](#Example-Payload-for-Product-with-Price%3A)
        3.  [Example Payload for Product with Variants:](#Example-Payload-for-Product-with-Variants%3A)
        4.  [Create Price for a Product](#Create-Price-for-a-Product)
        5.  [Example Payload for Price for Product With Variants](#Example-Payload-for-Price-for-Product-With-Variants)
    3.  [Add Image to a variant through Public API](#Add-Image-to-a-variant-through-Public-API)
        1.  [Example Payload for Product Media Update with PriceIds](#Example-Payload-for-Product-Media-Update-with-PriceIds)
4.  [Conclusion](#Conclusion)

  

## Introduction

This article mainly aims to guide the users on how to create a product using the public API provided by Highlevel. It also delves down for the cases and several types which the users can take the advantage of while creating a product

  

  

## Products

Products are the one of the main entities in Highlevel using which, users can sell the products that they want to sell through many forms of selling channels, using E-commerce Stores, Invoices, Estimates, and more

  

### Types of Products

In Highlevel, products are majorly of two type products: 

-   Products with price
-   Products with Variants

  

#### Products with Price

These types of products are simple products which don't have any variants to them. Any product which doesn't _require variants (or) has only 1 variant classification_ can be created in this format. Best example would be Poster with possible sizes

  

#### Products with Variants

This type of products are the products which have _multiple variations_ for a single product. Best example would be a T-shirt where there might be multiple colors and sizes

  

  

## Create Product using Public API

### Authorization

In order to perform CRUD (Create, Read, Update and Delete) entities related to Highlevel using Public API, we need access token. The authorization process is explained in the below link:

  

[](https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization)[https://marketplace.gohighlevel.com/docs/Authorization/authorization\_doc](https://marketplace.gohighlevel.com/docs/Authorization/authorization_doc)

  

### Creation of Product

For creating a product we are going to utilize the following Public APIs

-   Create a Product - [](https://highlevel.stoplight.io/docs/integrations/9eda2dc176c9c-create-product)[https://marketplace.gohighlevel.com/docs/ghl/products/create-product](https://marketplace.gohighlevel.com/docs/ghl/products/create-product)
-   Create a Price for Product - [](https://highlevel.stoplight.io/docs/integrations/a47cd944aede9-create-price-for-a-product)[https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product](https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product)

It is advised to follow the order of the content in order to create a Product

####   

#### **Create Product**

First we need to create a product using the [Create a Product API](https://marketplace.gohighlevel.com/docs/ghl/products/create-product) . Let us see the basic properties required for Creation of Product

-   name - name of the product
-   locationId - for which sub-account this product is created
-   description - brief description for the product which will be useful in the sales channels to exhibit the product
-   productType - let us keep it as `DIGITAL` 
-   image - Featured image which will be displayed by default to the end customer
-   availableInStore - whether a product should be made available for E-commerce Stores or not
-   medias - array
    -   id - unique identifier for media
    -   title - title for the media
    -   url - source url of the media
    -   type - currently only image is supported
    -   isFeatured - set to `true` if needs to be displayed to the end customer
-   variants - only required if you are trying to create a variant product
    -   id - unique ID for variant
    -   name - Name of the variant
    -   options - array
        -   id - unique ID for variant option **(will be required for creation of Price)**
        -   name - name of the option

#### **Example Payload for Product with Price:**

{  
  "name": "High Speed Memory Drive",  
  "description": "A high speed memory drive with latest safety features and breath taking design",  
  "locationId": "<sub-account\_ID>",   
  "availableInStore": true,  
  "productType": "PHYSICAL",  
  "image": "https://via.placeholder.com/150",  
  "medias": \[  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "title": "High Speed Memory Drive",  
      "url": "https://via.placeholder.com/150",  
      "type": "image",  
      "isFeatured": true  
    }  
  \]  
}

#### Example Payload for Product with Variants:

{  
  "name": "T-shirt",  
  "description": "Latest t-shirt with latest design and quality",  
  "locationId": "<sub\_account\_id>",   
  "availableInStore": true,  
  "productType": "PHYSICAL",  
  "image": "https://via.placeholder.com/150",  
  "medias": \[  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "title": "T-shirt",  
      "url": "https://via.placeholder.com/150",  
      "type": "image",  
      "isFeatured": true  
    }  
  \],  
  "variants": \[  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "name": "Color",  
      "options": \[  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440002",  
          "name": "Red"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440001",  
          "name": "Blue"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440003",  
          "name": "Green"  
        }  
      \]  
    },  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440111",  
      "name": "Size",  
      "options": \[  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440112",  
          "name": "Small"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440113",  
          "name": "Medium"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440114",  
          "name": "Large"  
        }  
      \]  
    }  
  \]  
}

> Note: For Variant Product, keep in track of the option Ids as they will be playing an important role while creating price

Upon creating a product, we will get a response which will have the property `_id` which is the created productId. That will be used to create price for a product

####   

#### **Create Price for a Product**

We will be using the [Create Price for a Product API](https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product) to create a price for product. Here are the basic properties required for creating a price for a product

-   product - Id of the product for which it is created
-   locationId - sub-account Id
-   name - Name of the Price 
-   type - As we support recurring products as well, the available values are `one_time` and `recurring` 
-   currency - Currency of the Price 
-   amount - Amount relevant to the currency
-   description - Description for the Price
-   variantOptionIds - required for a product with variants
    -   For an example if the variant combination is `Red/Small` , then variantOptionIds values should be as follows - 

  \["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"\]

-   where `550e8400-e29b-41d4-a716-446655440002` is for `**Red**`  and `550e8400-e29b-41d4-a716-446655440112`  is for `**Small**` 
-   For Product with Variants, variantOptionIds are required in order to render product correctly, absence of this property will render the variant combinations incorrectly
-   trackInventory - If the inventory needs to be tracked, then set to `true` 
-   availableQuantity - Available Quantity, applicable if trackInventory is `true` 
-   allowOutOfStockPurchases - Allow purchases of the product even if it is out of stock, only applicable if trackInventory is `true` 
-   sku - SKU of the price (or) variant
-   isDigitalProduct - `true`  if it is a Digital Product
-   shippingOptions - shipping properties for `PHYSICAL`product ( will be useful for shipping integrations )
    -   weight - weight options
        -   value  - value of the weight
        -   unit - metric unit. Supported values - `kg, g, lb, oz` 
    -   dimensions - dimensions of the Physical Product
        -   height - number
        -   width - number
        -   length - number
        -   unit - unit supported for dimensions - Supported values - `cm, in, m`

Example Payload for Simple Price (Without Variants):

    {  
  "product": "66b6021be68f7a98102ba272",  
  "locationId": "<sub\_account\_id>",  
  "name": "256 GB",   
  "type": "one\_time",  
  "currency": "USD",  
  "amount": 100,  
  "description": "256 GB of storage",  
  "sku": "PS-256GB",  
  "isDigitalProduct": false,  
  "shippingOptions": {  
    "weight": {  
      "value": 100,  
      "unit": "g"  
    },  
    "dimensions": {  
      "length": 10,  
      "width": 10,  
      "height": 10,  
      "unit": "cm"  
    }  
  }  
}

#### Example Payload for Price for Product With Variants

{  
  "product": "66b6021be68f7a98102ba272",  
  "locationId": "<sub\_account\_id>",  
  "name": "Red / Small",  
  "type": "one\_time",  
  "currency": "USD",  
  "amount": 100,  
  "description": "Red / Small",  
  "sku": "PS-RED-SMALL",  
  "isDigitalProduct": false,  
  "variantOptionIds": \["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"\],  
  "shippingOptions": {  
    "weight": {  
      "value": 100,  
      "unit": "g"  
    },  
    "dimensions": {  
      "length": 10,  
      "width": 10,  
      "height": 10,  
      "unit": "cm"  
    }  
  }  
}

> Note: Variant Option Ids are required for correct rendering of the product variations

  

### **Add Image to a variant through Public API**

This feature is available only for variant type of products and not price type of products. After creating Price for a product, in the response we will get the Internal Id of the price. Using that we will now update the images for specific variants. Using the received priceIds, we will update the product again with the following payload. 

####   

#### **Example Payload for Product Media Update with PriceIds**

In the product payload, there will be an array for medias, each and every media array is provided with a property called "priceIds" which in turn is an array, By assigning the respective priceIds, the media will get mapped to variants automatically. 

{
  "name": "T-shirt",
  "description": "Latest t-shirt with latest design and quality",
  "locationId": "<sub\_account\_id>", 
  "availableInStore": true,
  "productType": "PHYSICAL",
  "image": "https://via.placeholder.com/150",
  "medias": \[
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "T-shirt",
      "url": "https://via.placeholder.com/150",
      "type": "image",
      "priceIds": \["<created\_price\_Id>"\],
      "isFeatured": true
    }
  \],
  "variants": \[
   {...existing variants data}
  \]
}

> As of now, we support only one image mapped to one priceId, mapping multiple priceIds to a single image will cause problems in rending the products

## Conclusion

Using the above APIs we were able to create a basic ONE TIME Physical product with simple price and also with variants. The flexibility doesn't stop here, as Highlevel supports recurring Products as well, you can refer to the Price API documentation in detail and make use of the properties specifically provided for recurring products