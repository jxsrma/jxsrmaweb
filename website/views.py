from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from matplotlib import image
from .models import Demosubs, EmailList, ImgGallery, Contact, Released
from django.views.decorators.csrf import csrf_exempt
import base64


# Create your views here.

def emailSubUser(userEmail):
    if EmailList.objects.filter(email = userEmail).exists():
            pass
    else:
        emailSub = EmailList(email = userEmail)
        emailSub.save()

def index(request):
    return render(request, 'index.html')


@csrf_exempt
def bio(request):
    if request.method == 'GET':
        ImageData = ''
        galleryImg = ImgGallery.objects.raw(
            'select * from website_imggallery order by rand()')

        img_list = []
        for imgs in galleryImg:

            with open('./static/images/'+str(imgs.img), 'rb') as image_file:
                ImageData = base64.b64encode(image_file.read()).decode('utf-8')

            imageLinkBase64 = {
                'link': str(imgs.link),
                'img': ImageData
            }
            img_list.append(imageLinkBase64.copy())
        return JsonResponse({
            "success": True,
            "Images": img_list
        })


def rel(request):
    if request.method == 'GET':
        albumArt = ''
        relSongData = Released.objects.raw(
            'select * from website_released order by id DESC ')
        track_list = []

        for tracks in relSongData:
            with open('./static/images/'+str(tracks.albumart), 'rb') as image_file:
                albumArt = base64.b64encode(image_file.read()).decode('utf-8')
            albumArtBase64 = {
                'name': str(tracks.name),
                'altImg': str(tracks.altImg),
                'albumart': albumArt,
                'sLink': str(tracks.sLink),
                'genre': str(tracks.genre)
            }
            track_list.append(albumArtBase64.copy())
        return JsonResponse({
            "success": True,
            "tracks": track_list
        })



def shop(request):
    pass

@csrf_exempt
def demo(request):
    if request.method == 'POST':
        print('POST')

        demoData = json.loads(base64.b64decode(request.body).decode('utf-8'))

        artname = demoData['artname']
        email = demoData['email']
        trackname = demoData['trackname']
        trackurl = demoData['trackurl']
        infotext = demoData['infotext']

        demoData = Demosubs(a_name = artname, a_email = email, t_name = trackname, t_url = trackurl, t_dis = infotext )
        demoData.save()
        
        emailSubUser(email)      

        return JsonResponse({
            "success": True,
        })
    if request.method == 'GET':
        return JsonResponse({
            "success": False,
            "error": "Error Occurred"
        })


@csrf_exempt
def cont(request):
    if request.method == 'POST':
        print('POST')
        contData = json.loads(base64.b64decode(request.body).decode('utf-8'))
        print(contData)

        Cname = contData['cName']
        Cemail = contData['cEmail']
        Csubject = contData['cSubject']
        Ctext = contData['cMess']

        meg = Contact(name=Cname, email=Cemail,
                      subject=Csubject, message=Ctext)
        meg.save()
        
        emailSubUser(Cemail)
        
        return JsonResponse({
            "success": True,
        })
    if request.method == 'GET':
        print('GET')
        return JsonResponse({
            "success": False,
            "error": "No Data"
        })


@csrf_exempt
def subs(request):
    if request.method == 'POST':
        subsEmail = json.loads(base64.b64decode(request.body).decode('utf-8'))
        print(subsEmail)
        return JsonResponse({
            "success": True
        })

def email(request):
    if request.method == 'GET':
        return render(request, 'email/Demo.html')
    if request.method == 'POST':
        
        