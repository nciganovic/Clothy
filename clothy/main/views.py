from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from .models import Product, Category

def index(request):
    tmpl = "main/index.html"
    featured_product = Product.objects.get(name="Classic man sweatshirt")
    category = Category.objects.all()
    man_category = Category.objects.get(category_name="Man")
    woman_category = Category.objects.get(category_name="Woman")
    kids_category = Category.objects.get(category_name="Kids")
    context={
        "product":featured_product,
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

        #getting all the different tags for current category
        all_tags = [mp.tag_name for mp in matching_products]
        collection_of_tags = []
        for at in all_tags:
            if at not in collection_of_tags:
                collection_of_tags.append(at)

        matching_product_filterd_tags = {}
        for idx, c in enumerate(collection_of_tags):
            matching_product_filterd_tags[f'pt{idx}'] = Product.objects.filter(tag_name=c, category_name__category_slug=category_slug)
        
        print("-->", matching_product_filterd_tags.values())

        if str(matching_category[0]) == 'Man':
            cover_image_id = 'bg-img-man'
        elif str(matching_category[0]) == 'Woman':
            cover_image_id = 'bg-img-woman'
        elif str(matching_category[0]) == 'Kids':
            cover_image_id = 'bg-img-kids'

        context={
            "this_category": matching_category[0],
            "this_products": matching_products,
            "category": all_categories,
            "cover_image_id": cover_image_id,
            "this_tags":collection_of_tags,
            "mpft":matching_product_filterd_tags.values(),
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