from django.db import models

# Create your models here.

class Demosubs(models.Model):
    a_name = models.CharField(max_length=100)
    a_email = models.CharField(max_length=100)
    t_name = models.CharField(max_length=100)
    t_url = models.CharField(max_length=100)
    t_dis = models.TextField()