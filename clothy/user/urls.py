from django.contrib.staticfiles.urls import static
from django.urls import path
from . import views
from clothy import settings

urlpatterns = [
    path('dashboard', views.dashboard, name="dashboard"),
    path('currentorders', views.current_orders, name="current_orders"),
    path('orderhistory', views.order_history, name="order_history"),
    path('myinfo', views.my_info, name="my_info"),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
