from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.shortcuts import redirect
from main.models import Category
from main.forms import SignUpForm
from shop.models import ChekoutHistory


# Create your views here.
def dashboard(request):
    tmpl = 'user/dashboard.html'
    all_categories = Category.objects.all()
    user = request.user

    seo = {
        "title":f"Dashboard",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. Look at your user dashboard",
        "keywords": f"shop, ecommerce, clothes"
    }

    context={
    "category": all_categories,
    "user":user,
    "seo":seo
    }
    return render(request, tmpl, context)

def current_orders(request):
    tmpl = 'user/currentorders.html'
    all_categories = Category.objects.all()
    user = request.user
    all_current_orders = ChekoutHistory.objects.filter(customer=user, is_delivered=False).order_by('-date') 
    
    seo = {
        "title":f"Current orders",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. See list of orders that will arrive to your address soon.",
        "keywords": f"shop, ecommerce, clothes"
    }


    context={
    "category": all_categories,
    "user":user,
    "all_current_orders":all_current_orders,
    "seo": seo
    }
    return render(request, tmpl, context)

def order_history(request):
    tmpl = 'user/orderhistory.html'
    all_categories = Category.objects.all()
    user = request.user
    all_order_history = ChekoutHistory.objects.filter(customer=user, is_delivered=True).order_by('-date') 
    user = request.user

    seo = {
        "title":f"Order history",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids. Take a look at your order history.",
        "keywords": f"shop, ecommerce, clothes"
    }

    context={
    "category": all_categories,
    "user":user,
    "all_order_history":all_order_history,
    "seo": seo
    }
    return render(request, tmpl, context)

def my_info(request):
    tmpl = 'user/myinfo.html'
    all_categories = Category.objects.all()
    user = request.user
    if request.method == 'POST':
        form = SignUpForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            messages.success(request, f"Information successfully changed!")
            return redirect("index")
        else: 
            messages.success(request, f"From is not valid!")
    else:
        form = SignUpForm(instance=user)

    seo = {
        "title":f"My info",
        "desc": f"Welcome to Clothyy best website for buying clothes for man woman and kids.",
        "keywords": f"shop, ecommerce, clothes"
    }

    context={
    "category": all_categories,
    "user":user,
    "form":form,
    "seo": seo
    }
    return render(request, tmpl, context)