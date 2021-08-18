from django.shortcuts import render
from django.contrib import messages
from .models import Demosubs

# Create your views here.

def index(request):
    return render(request,'index.html')

def bio(request):
    return render(request,'bio.html')

def rel(request):
    return render(request,'releases.html')

def shop(request):
    return render(request,'shop.html')

def demo(request):

    if request.method == 'POST':
        artname = request.POST['artname']
        email = request.POST['email']
        trackname = request.POST['trackname']
        trackurl = request.POST['trackurl']
        infotext = request.POST['infotext']
        print('success')

        demoData = Demosubs(a_name = artname, a_email = email, t_name = trackname, t_url = trackurl, t_dis = infotext )
        demoData.save()
        return render(request,'demo.html')

    else:    
        return render(request,'demo.html')


def cont(request):
    return render(request,'contact.html')
