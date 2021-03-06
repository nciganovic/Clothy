from django.contrib.staticfiles.urls import static
from django.urls import path
from . import views
from clothy import settings

urlpatterns = [
    path('', views.index, name="index"),
    path('logout', views.logout_request, name="logout"),
    path('search', views.search, name="search"),
    path('faq', views.faq, name="faq"),
    path('size', views.size, name="size"),
    path('aboutus', views.aboutus, name="aboutus"),
    path('<category_slug>', views.category_slug, name="category slug"),
    path('<category_slug>/<product_slug>', views.product_slug, name="product slug"),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)