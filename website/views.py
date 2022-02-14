import base64
import json

import threading
import time

from django.conf import settings
from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Demosubs, EmailList, ImgGallery, Contact, Released
from django.views.decorators.csrf import csrf_exempt

from email.message import EmailMessage
from django.template.loader import get_template

from django.core.mail import EmailMessage
from django.template import Context
from django.template.loader import get_template


# Create your views here.

@csrf_exempt
def sendMail(emailData):
    time.sleep(5)
    userName = emailData['name']
    userEmail = emailData['email']
    serviceType = emailData['type']

    if serviceType == 'demo':
        message = get_template("email/Demo.html").render({'name': userName})
        mail = EmailMessage(
            subject="Demo Submission Confirmation",
            body=message,
            from_email=getattr(settings, "DEFAULT_FROM_EMAIL", None),
            to=[userEmail],
            reply_to=[getattr(settings, "APPLICATION_EMAIL", None)],
        )
        mail.content_subtype = "html"
        mail.send()
    elif serviceType == 'contact':
        message = get_template(
            "email/contactus.html").render({'name': userName})
        mail = EmailMessage(
            subject="Query Submission Confirmation",
            body=message,
            from_email=getattr(settings, "DEFAULT_FROM_EMAIL", None),
            to=[userEmail],
            reply_to=[getattr(settings, "APPLICATION_EMAIL", None)],
        )

        mail.content_subtype = "html"
        mail.send()

    emailFunc(userName, userEmail)


def emailFunc(userName, userEmail):
    if EmailList.objects.filter(email=userEmail).exists():
        activeCheck = EmailList.objects.get(email=userEmail)
        if activeCheck.active == False:
            activeCheck.active = True
            activeCheck.name = userName
            activeCheck.save()
            return {
                "success": False,
            }
        else:
            return {
                "success": False,
            }
    else:
        emailSub = EmailList(name=userName, email=userEmail)
        emailSub.save()
        return {
            "success": True,
        }


@csrf_exempt
def emailSubUser(request):
    if request.method == 'POST':
        subsData = json.loads(base64.b64decode(request.body).decode('utf-8'))

        userName = subsData['name']
        userEmail = subsData['email']

        return JsonResponse(emailFunc(userName, userEmail))


def index(request):
    return render(request, 'index.html')


@csrf_exempt
def bio(request):
    if request.method == 'GET':
        ImageData = ''
        galleryImg = ImgGallery.objects.raw(
            'select * from website_imggallery order by random()')

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

        demoData = json.loads(base64.b64decode(
            request.body).decode('utf-8'))

        artname = demoData['artname']
        email = demoData['email']
        trackname = demoData['trackname']
        trackurl = demoData['trackurl']
        infotext = demoData['infotext']
        demoData = Demosubs(a_name=artname, a_email=email,
                            t_name=trackname, t_url=trackurl, t_dis=infotext)
        demoData.save()
        emailData = {
            "success": True,
            "type": "demo",
            "name": artname,
            "email": email
        }
        mailThread = threading.Thread(target=sendMail,args=(emailData,))
        mailThread.start()
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
        contData = json.loads(base64.b64decode(request.body).decode('utf-8'))

        Cname = contData['cName']
        Cemail = contData['cEmail']
        Csubject = contData['cSubject']
        Ctext = contData['cMess']

        meg = Contact(name=Cname, email=Cemail,
                      subject=Csubject, message=Ctext)
        meg.save()

        emailData = {
            "success": True,
            "type": "contact",
            "name": Cname,
            "email": Cemail
        }
        mailThread = threading.Thread(target=sendMail,args=(emailData,))
        mailThread.start()
        
        return JsonResponse({
            "success": True,
        })
    if request.method == 'GET':
        return JsonResponse({
            "success": False,
            "error": "No Data"
        })


@csrf_exempt
def subs(request):
    if request.method == 'POST':
        subsEmail = json.loads(base64.b64decode(request.body).decode('utf-8'))
        if emailSubUser(subsEmail['name'], subsEmail['email']):
            return JsonResponse({
                "success": True
            })
        else:
            return JsonResponse({
                "success": False,
                "msg": "Already Subscribed"
            })
