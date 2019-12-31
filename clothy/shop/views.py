import stripe
from django.contrib.auth.models import User
from django.shortcuts import render
from main.models import Category;
from django.conf import settings
from .models import ShippingCountry, ChekoutHistory

stripe.api_key = settings.STRIPE_SECRET_KEY

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
    countries = ShippingCountry.objects.all() 
    context={
    "category": all_categories,
    "countries": countries,
    }
    return render(request, tmpl, context)

def charge(request):
    tmpl = 'shop/charge.html'

    if request.user.is_authenticated:
        user = request.user
    else:
        user = User.objects.get(username="Anonimus")

    ch = ChekoutHistory.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        company_name = request.POST['company_name'],
        country = request.POST['country'],
        street_address = request.POST['street_address'],
        apartment = request.POST['apartment'],
        postcode = request.POST['postcode'],
        town = request.POST['town'],
        phone = request.POST['phone'],
        email = request.POST['email'],
        other_notes = request.POST['other_notes'],
        price = request.POST['price'],
        customer = user
    )
    ch.save()

    price = request.POST['price']
    stripePrice = float(price) * 100
    print('Price ->', stripePrice)
    charge = stripe.Charge.create(
            amount=int(stripePrice),
            currency='usd',
            description='Clothyy charge',
            source=request.POST['stripeToken']
        )
    return render(request, tmpl)