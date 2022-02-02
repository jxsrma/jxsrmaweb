from django.urls import path
from . import views


urlpatterns = [
    path('', views.index,name='index'),
    path('home', views.index,name='index'),
    path('bio/images', views.bio,name='bio'),
    path('releases/tracks', views.rel,name='rel'),
    path('shop', views.shop,name='shop'),
    path('demo/sub', views.demo,name='demo'),
    path('cont/send', views.cont,name='cont'),
    path('subs/email', views.subs,name='subs'),
    path('email', views.email,name='email'),

]