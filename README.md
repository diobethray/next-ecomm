Next.js E-commerce Demo

Tech: Next.js | React | Material-UI | Redux Toolkit | TypeScript | Emotion | MUI Data Grid | RTK Query | Redux Persist (stored in Local Storage) | Vercel

Demo: https://bandage-ecommerce-pi.vercel.app/

Details: Converted Figma designs for Landing page and Product Detail page into a Next.js App. 

Pages:

1. Homepage

This page have a mixed of static contents and dynamic contents. The dynamic contents is the products list section only, which comes from https://dummyjson.com/products. The rest can be static, this includes the header contents, the footer contents. It has a LOAD MORE pagination feature that sends more request to the API WITHOUT REFRESHING THE PAGE.

2. Product Detail Page

Clicking on 1 of those product in the product list from Homepage will redirect to Product Detail's Page. Product details such as title, description, images, prices, etc are coming from the Product API (https://dummyjson.com/product1/1). Users are able to add the product to the cart as well as on their wishlist. Both of these pages are using REUSABLE COMPONENTS shared throughout the app.

Modals / Popups:

1. Cart

By clicking the icon button at the header, users will be able to see the products they've added to their cart together with the SUM of the amount of all the products. Users can increase or decrease the quantity of each product and remove them as well.

2. Wishlist

List of products the users have liked or marked as favorite. Delete function (removing a product from wishlist) is also available here.

Data Persistent
The cart and wishlist data are persistent, even if you refresh or clear the cache it will stay.

Deployed in Vercel (CI/CD) setup.
