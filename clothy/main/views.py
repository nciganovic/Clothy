from django.shortcuts import render

def index(request):
    tmpl = "main/index.html"
    return render(request, tmpl)
