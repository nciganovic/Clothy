import stripe
from django.contrib.auth.models import User
from django.shortcuts import render
from main.models import Category;
from django.conf import settings
from .models import ShippingCountry, ChekoutHistory
from main.views import user_reg
from main.forms import SignUpForm, myAuthenticationForm

stripe.api_key = settings.STRIPE_SECRET_KEY

# Create your views here.
def cart(request):
    tmpl = "shop/cart.html"
    all_categories = Category.objects.all()
    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)

    seo = {
        "title":f"Clothyy Cart",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. Manage you cart to buy new products.",
        "keywords": f"shop, ecommerce, clothes, cart"
    }

    context={
    "category": all_categories,
    "sign_up": sing_up_form, 
    "login": login_form,
    "seo": seo 
    }
    return render(request, tmpl, context)

def checkout(request):
    tmpl = "shop/checkout.html"
    all_categories = Category.objects.all()
    countries = ShippingCountry.objects.all() 
    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)

    seo = {
        "title":f"Clothyy Checkout",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. Put your information in order to buy products.",
        "keywords": f"shop, ecommerce, clothes, checkout"
    }

    context={
    "category": all_categories,
    "countries": countries,
    "sign_up": sing_up_form, 
    "login": login_form,
    "seo": seo
    }
    return render(request, tmpl, context)

def charge(request):
    tmpl = 'shop/charge.html'
    all_categories = Category.objects.all()
    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)
    
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
        product = request.POST['productList'],
        shipping_type = request.POST['shippingType'],
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

    seo = {
        "title":f"Thank you",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. Thank you for buying clothes from our store.",
        "keywords": f"shop, ecommerce, clothes"
    }
    
    context={
        "category": all_categories,
        "sign_up": sing_up_form, 
        "login": login_form,
        "seo": seo
    }
    return render(request, tmpl, context)