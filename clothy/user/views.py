from django.shortcuts import render
from main.models import Category
from shop.models import ChekoutHistory

# Create your views here.
def dashboard(request):
    tmpl = 'user/dashboard.html'
    all_categories = Category.objects.all()
    user = request.user
    context={
    "category": all_categories,
    "user":user,
    }
    return render(request, tmpl, context)

def current_orders(request):
    tmpl = 'user/currentorders.html'
    all_categories = Category.objects.all()
    user = request.user
    all_current_orders = ChekoutHistory.objects.filter(customer=user, is_delivered=False) 
    print(all_current_orders)
    context={
    "category": all_categories,
    "user":user,
    "all_current_orders":all_current_orders,
    }
    return render(request, tmpl, context)

def order_history(request):
    tmpl = 'user/orderhistory.html'
    all_categories = Category.objects.all()
    user = request.user
    context={
    "category": all_categories,
    "user":user,
    }
    return render(request, tmpl, context)

def my_info(request):
    tmpl = 'user/myinfo.html'
    all_categories = Category.objects.all()
    user = request.user
    context={
    "category": all_categories,
    "user":user,
    }
    return render(request, tmpl, context)