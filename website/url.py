from django.urls import path
from . import views


urlpatterns = [
    path('', views.index,name='index'),
    path('home', views.index,name='index'),
    path('bio', views.bio,name='bio'),
    path('releases', views.rel,name='rel'),
    path('shop', views.shop,name='shop'),
    path('demo', views.demo,name='demo'),
    path('contact', views.cont,name='cont'),

]