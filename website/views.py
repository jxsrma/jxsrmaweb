from django.shortcuts import render
from .models import Demosubs, ImgGallery, Contact

# Create your views here.

def index(request):
    return render(request,'index.html')

def bio(request):
    galleryImg = ImgGallery.objects.raw('select * from website_imggallery order by rand()')
    return render(request,'bio.html',{'galleryImg': galleryImg})

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
    if request.method == 'POST':
        Cname = request.POST['Cname']
        Cemail = request.POST['Memail']
        Csubject = request.POST['Msubject']
        Ctext = request.POST['Mconserns']
        print('success')

        meg = Contact(name = Cname, email = Cemail, subject = Csubject, message = Ctext )
        meg.save()
        return render(request,'contact.html')

    else:    
        return render(request,'contact.html')