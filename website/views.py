from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from .models import Demosubs, ImgGallery, Contact, Released
# import pandas

# Create your views here.

def index(request):
    return render(request,'index.html')

def bio(request):
    galleryImg = ImgGallery.objects.raw('select * from website_imggallery order by rand()')
    # for x in galleryImg:
    #     print(x[0])
    # galCol = galleryImg.columns
    # for row in galleryImg:
    #     print(galCol.__getattribute__(galCol[0]))
    # class Tab(models.Model):
    #     field1 = models.BooleanField()
    #     field2 = models.PositiveIntegerField()
    # objs = Tab.objects.raw(galleryImg)
    # for obj in objs:
    #     print obj.field1, obj.field2
    #return render(request,'bio.html',{'galleryImg': galleryImg})
    img_Dict = {"link":[],"img":[]}
    for imgs in galleryImg:
        img_Dict['link'].append(str(imgs.link))
        img_Dict['img'].append(str(imgs.img))
    return JsonResponse(img_Dict)

def rel(request):
    relSongData = Released.objects.raw('select * from website_released order by id DESC ')
    rel_Dict = {"name":[],"altImg":[],"albumart":[],"sLink":[],"genre":[]}
    for rels in relSongData:
        rel_Dict['name'].append(str(rels.name))
        rel_Dict['altImg'].append(str(rels.altImg))
        rel_Dict['albumart'].append(str(rels.albumart))
        rel_Dict['sLink'].append(str(rels.sLink))
        rel_Dict['genre'].append(str(rels.genre))
        
    return JsonResponse(rel_Dict)

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