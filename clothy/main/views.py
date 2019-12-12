from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from .models import Product, Image, FeaturedProduct, Category

def index(request):
    tmpl = "main/index.html"
    featured_product = Product.objects.get(name="Shirt 1")
    images = Image.objects.get(name__name="Shirt 1")
    category = Category.objects.all()
    man_category = Category.objects.get(category_name="Man")
    woman_category = Category.objects.get(category_name="Woman")
    kids_category = Category.objects.get(category_name="Kids")
    context={
        "product":featured_product,
        "images": images,
        "category": category,
        "man_category":man_category,
        "woman_category":woman_category,
        "kids_category":kids_category,
    }
    return render(request, tmpl, context)

def category_slug(requset, category_slug):
    tmpl = "main/category.html"
    all_categories = Category.objects.all()
    categories = [c.category_slug for c in all_categories]
    if category_slug in categories:
        matching_category = Category.objects.filter(category_slug=category_slug)
        matching_products = Product.objects.filter(category_name__category_slug=category_slug)
        context={
            "this_category": matching_category[0],
            "this_products": matching_products,
            "category": all_categories,
        }
        
        return render(requset, tmpl, context)
    else:
        return HttpResponse('<h1>Page was not found</h1>')

def product_slug(request, category_slug, product_slug):
    tmpl = "main/product.html"
    all_categories = Category.objects.all()
    #Test if product is in correct category, without this man products can be found in woman category if url is changed manually
    products = [p.product_slug for p in Product.objects.filter(category_name__category_slug=category_slug)]
    if product_slug in products:
        matching_category = Category.objects.filter(category_slug=category_slug)
        matching_product = Product.objects.filter(product_slug=product_slug) 
        context={
            "category":all_categories,
            "this_product": matching_product[0],
            "this_category": matching_category[0],
        }
        return render(request, tmpl, context)
    else:
        return HttpResponse('<h1>Page was not found</h1>')