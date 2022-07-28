from datetime import datetime
from django.db import models

# Create your models here.

class Demosubs(models.Model):
    a_name = models.CharField(max_length=100)
    a_email = models.CharField(max_length=100)
    t_name = models.CharField(max_length=100)
    t_url = models.CharField(max_length=100)
    t_dis = models.TextField()

class ImgGallery(models.Model):
    link = models.TextField()
    imgLink = models.TextField()

class Contact(models.Model):
    date = models.DateTimeField(default=datetime.now)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField()

class Released(models.Model):
    name = models.CharField(max_length=100)
    altImg = models.CharField(max_length=100)
    albumartLink = models.TextField()
    sLink = models.TextField()
    genre = models.CharField(max_length=100)

class EmailList(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    active = models.BooleanField(default=True)
    
class HomeScreenYT(models.Model):
    link = models.TextField()
    