from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import Demosubs,ImgGallery,Contact, Released, EmailList,HomeScreenYT

# Register your models here.

@admin.register(Demosubs)
class demoSubAdmin(ImportExportModelAdmin):
    list_display = ['a_name','t_name','t_url']

@admin.register(ImgGallery)
class imgGalleryAdmin(ImportExportModelAdmin):
    list_display = ['link','imgLink']

@admin.register(Contact)
class contactAdmin(ImportExportModelAdmin):
    list_display = ['date','name','subject']

@admin.register(Released)
class releasedAdmin(ImportExportModelAdmin):
    list_display = ['name','albumartLink','sLink']
@admin.register(EmailList)
class emailListAdmin(ImportExportModelAdmin):
    list_display = ['name','email','active']
    
@admin.register(HomeScreenYT)
class homeScreenYTAdmin(ImportExportModelAdmin):
    list_display = ['link']
