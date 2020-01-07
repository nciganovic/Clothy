# Clothy
E-commerce website for selling clothes for man, woman and kids.

## Description
Full-stack website made with Django 2.7, Javascript (Jquery), HTML 5, CSS 3 and MySQL. Website has functionalities like buying a product, sorting products by categories, showing special product on index page, user login, user registration, payment system, shopping cart, buying history of each user, reciving email newsletter. All of those functionalities are in detail explained bellow.

## Installation


## Table of content
1. Overview
2. Code that is on every page (base.html)
3. Index (first page)
4. Category
5. Product
6. Login, logout, register
7. Car
8. Checkout
9. Search
10. User personal pages
11. Other pages

## 1. Overview
This Django website consists of three apps. Main, Shop and User. You can see them by opening clothy folder. 
In Main app there are functions for accessing index page, categories page, product page, login, register logout, search page and other less important pages.
In Shop app there are function for handling shopping cart, checkout page and payments.
In User page there are function that enable each user to see their buying history and product that they ordered.

> To see all html files go to clothy/templates

> To see Javascript files go to clothy/appname/static/appname/js, for example clothy/main/static/main/js for all Javascript inside main app.

## 2. Code that is on every page (base.html)
- On every page user has option to login register or send email to recive newsletter thanks to [user_reg](https://github.com/nciganovic/Clothy/blob/master/clothy/main/views.py) function. 

- He can also recive messages that will appear on bottom of screen if something goes wrong with login or registration.

- Every page contains same navbar and footer.

## 3. Index (first page)

- Contains direct links to Man, Woman and Kids category.

- Displays featured product (Product id is picked in backend)

- Links 'Man pants' and 'Woman dress' contain direct link to search.html where search results will automaticly be like user searched for some of those.

## 4. Category

- Get all products from database that are in certian category.

- By clicking on one of the links bellow background image results will automaticly filter.

- Background image changes on switching categories.

- Hovering over image will display product in different color.

## 5. Product

- Switch product colors with arrows on screen.

- Add to cart product after you choose size.

- Contains four other related products.

## 6. Login, register

- Available in every page.

- They are inside modal.html in templates folder.

- If login or register fails they will recive message on bottom of the screen.

- If registration is successfull user will be automaticly logged in.

## 7. Cart

- Contains list of all products that user selected.

- User can change number of products that he wants to buy.

- Total price and price for every separate product will be automaticly calculated.

- Everything in cart will be saved in cookie

- User must choose shipping type beafore proceeding to checkout page

- User can delete product from cart.

- User cannot go to checkout page if cart is empty.

## 8. Checkout

- On the left side of the page is form that collects necessery information about user.

- On the right side of the page is list of all products that user wants to buy with shipping cost.

- Regex is applied in form so user need to put correct information.

- Payment is handled with Stripe.

- For testing user can put 4242 4242 4242 4242 as Credit card number.

- If payment is successfull user will be redirected to new charge.html page

- After completion payment with information will be saved in database.

## 9. Search

- Enables user to type name of product and search for it.

- The search result will be shown by the product name and product description.

- When user finds product he wants he can go to product page directly from there.

## 10. User personal pages

- They are available when user is logged in with name 'My Account'

- Inside My Account user can see what products are ordered but not delivered in Current orders section.

- In Order History section user can see all the products that are successfully delivered to his address.

- By clicking logout link user will be logged out and redirected to index page.

## 11. Other pages

- Other pages like Faq, Size are availble in footer. 

- About us is page about author and links to his Portfolio, Github and LinkeIn pages.

