from django.shortcuts import render
from .models import Product, Image, FeaturedProduct

def index(request):
    tmpl = "main/index.html"
    featured_product = Product.objects.get(name="Shirt 1")
    images = Image.objects.get(name__name="Shirt 1")

    context={
        "product":featured_product,
        "images": images,
    }

    return render(request, tmpl, context)
