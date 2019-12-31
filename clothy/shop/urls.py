from django.contrib.staticfiles.urls import static
from django.urls import path
from . import views
from clothy import settings

urlpatterns = [
    path('cart', views.cart, name="cart"),
    path('checkout', views.checkout, name="checkout"),
    path('charge', views.charge, name="charge"),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


