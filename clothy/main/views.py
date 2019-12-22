from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Product, Category
from .forms import SignUpForm, myAuthenticationForm

def user_reg(request):
    #sing up
    if request.method == 'POST':
        sing_up_form = SignUpForm(request.POST)
        login_form = myAuthenticationForm(request, data=request.POST)
        if request.POST.get('register') == 'register':
            print('Register section')
            if sing_up_form.is_valid():
                print('Register form is valid')
                sing_up_form.save()
                username = sing_up_form.cleaned_data.get('username')
                raw_password = sing_up_form.cleaned_data.get('password1')
                user = authenticate(username=username, password=raw_password)
                login(request, user)
                return redirect('index')
            else:
                messages.error(request, f"Register form is not valid!")
        
        #else:
        elif request.POST.get('login') == 'login':
            print('Login section')
            if login_form.is_valid():
                print('Login form is valid')
                username = login_form.cleaned_data.get('username')
                password = login_form.cleaned_data.get('password')
                user = authenticate(username=username, password=password)
                print('User :', user)
                if user is not None:
                    login(request, user)
                    return redirect("index")
            else:
                print('Login error')
                messages.error(request, f"Login form is not valid!")
    else:       
        sing_up_form = SignUpForm() 
        login_form = myAuthenticationForm()


def index(request):
    tmpl = "main/index.html"
    featured_product = Product.objects.get(name="Classic man sweatshirt")
    category = Category.objects.all()
    man_category = Category.objects.get(category_name="Man")
    woman_category = Category.objects.get(category_name="Woman")
    kids_category = Category.objects.get(category_name="Kids")

    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)

    context={
        "product":featured_product,
        "category": category,
        "man_category":man_category,
        "woman_category":woman_category,
        "kids_category":kids_category,
        "sign_up": sing_up_form, 
        "login": login_form,
        }
    return render(request, tmpl, context)

def user(request):
    tmpl = 'main/userinfo.html'
    all_categories = Category.objects.all()
    context={
    "category": all_categories,
    }
    return render(request, tmpl, context)

def category_slug(request, category_slug):
    tmpl = "main/category.html"
    all_categories = Category.objects.all()
    categories = [c.category_slug for c in all_categories]

    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)

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
            "sign_up": sing_up_form, 
            "login": login_form,
        }
        
        return render(request, tmpl, context)
    else:
        return HttpResponse('<h1>Page was not found</h1>')

def product_slug(request, category_slug, product_slug):
    tmpl = "main/product.html"
    all_categories = Category.objects.all()

    sing_up_form = SignUpForm() 
    login_form = myAuthenticationForm()
    user_reg(request)

    #Test if product is in correct category, without this man products can be found in woman category if url is changed manually
    products = [p.product_slug for p in Product.objects.filter(category_name__category_slug=category_slug)]
    if product_slug in products:
        matching_category = Category.objects.filter(category_slug=category_slug)
        matching_product = Product.objects.filter(product_slug=product_slug) 
        similar_products = Product.objects.filter(category_name__category_slug=category_slug).exclude(product_slug=product_slug)[:4] #TODO change later to also filter for tags
        context={
            "category":all_categories,
            "this_product": matching_product[0],
            "this_category": matching_category[0],
            "similar_products":similar_products,
            "sign_up": sing_up_form, 
            "login": login_form,
        }
        return render(request, tmpl, context)
    else:
        return HttpResponse('<h1>Page was not found</h1>')

def logout_request(request):
    logout(request)
    return redirect("index")