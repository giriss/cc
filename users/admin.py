from django.contrib import admin
from users.models import user

class userAdminConf(admin.ModelAdmin):
    list_display = ['fullName', 'email', 'dateJoined', 'confirmed']
    list_filter = ['confirmed']
    search_fields = ['fullName','email']
    date_hierarchy = 'dateJoined'
    fieldsets = [
        ("User Detail",               {'fields': ['fullName', 'email']}),
        ('Other', {'fields': ['dateJoined', 'confirmed']}),
        ("Password", {'fields':['password'], 'classes': ['collapse']})
        ]

admin.site.register(user, userAdminConf)