from django.urls import path
from . import views


urlpatterns = [
    path('', views.index,name='index'),
    path('home', views.index,name='index'),
    path('biography', views.index,name='index'),
    path('releases', views.index,name='index'),
    path('shop', views.index,name='index'),
    path('demos', views.index,name='index'),
    path('contact', views.index,name='index'),
    
    
    path('bio/images', views.bio,name='bio'),
    path('releases/tracks', views.rel,name='rel'),
    path('demo/send', views.demo,name='demo'),
    path('cont/send', views.cont,name='cont'),
    path('sevice/email', views.sendMail,name='emailService'),
    path('sevice/subs', views.emailSubUser,name='subsService'),
    path('sevice/home/ytvideo', views.home,name='YtVideo'),

]