from django.shortcuts import render

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
    return render(request,'demo.html')

def cont(request):
    return render(request,'contact.html')