from django.shortcuts import render
from main.models import Category;

# Create your views here.
def cart(request):
    tmpl = "shop/cart.html"
    all_categories = Category.objects.all()
    context={
    "category": all_categories,
    }
    return render(request, tmpl, context)

def checkout(request):
    tmpl = "shop/checkout.html"
    all_categories = Category.objects.all()
    context={
    "category": all_categories,
    }
    return render(request, tmpl, context)