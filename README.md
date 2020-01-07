# Clothy
E-commerce website for selling clothes for man, woman and kids.

## Description
Full-stack website made with Django 2.7, Javascript (Jquery), HTML 5, CSS 3 and MySQL. Website has functionalities like buying a product, sorting products by categories, showing special product on index page, user login, user registration, payment system, shopping cart, buying history of each user, reciving email newsletter. All of those functionalities are in detail explained bellow.

## Table of content
1. Overview
2. Code that is on every page (base.html)
2. Index.html (first page)
3. Category.html
4. Product.html
5. Login, logout, register
6. Cart.html
7. Checkout.html
8. Search.html
9. User personal pages
10. Other pages

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

## 3. Index.html (first page)

- Contains direct links to Man, Woman and Kids category.

- Displays featured product (Product id is picked in backend)

- Links 'Man pants' and 'Woman dress' contain direct link to search.html where search results will automaticly be like user searched for some of those.

## 4. Category.html
