from django.contrib.staticfiles.urls import static
from django.urls import path
from . import views
from clothy import settings

urlpatterns = [
    path('', views.index, name="index"),
    path('user', views.user, name="user"),
    path('logout', views.logout_request, name="logout"),
    path('<category_slug>', views.category_slug, name="category slug"),
    path('<category_slug>/<product_slug>', views.product_slug, name="product slug"),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)