from django.contrib import admin
from .models import Demosubs,ImgGallery,Contact, Released, EmailList,HomeScreenYT

# Register your models here.

# def download_csv(modeladmin, request, queryset):
#     import csv
#     f = open('Email List.csv', 'w')
#     writer = csv.writer(f)
#     writer.writerow(["name", "email", "active"])
#     for s in queryset:
#         writer.writerow([s.name, s.email, s.active])


@admin.register(Demosubs)
class demoSubAdmin(admin.ModelAdmin):
    list_display = ['a_name','t_name','t_url']


@admin.register(ImgGallery)
class imgGalleryAdmin(admin.ModelAdmin):
    list_display = ['link','imgLink']

@admin.register(Contact)
class contactAdmin(admin.ModelAdmin):
    list_display = ['date','name','subject']

@admin.register(Released)
class releasedAdmin(admin.ModelAdmin):
    list_display = ['name','albumartLink','sLink']

@admin.register(EmailList)
class emailListAdmin(admin.ModelAdmin):
    list_display = ['name','email','active']
    # actions = [download_csv]
    
@admin.register(HomeScreenYT)
class homeScreenYTAdmin(admin.ModelAdmin):
    list_display = ['link']
    
# admin.site.register(Demosubs)
# admin.site.register(ImgGallery)
# admin.site.register(Contact)
# admin.site.register(Released)
# admin.site.register(EmailList)
