# *coding: utf-8*
import sys
import os
 
sys.path.append("/home/bas/app_1dbfa10a-fedf-4ae9-a6a5-17f86c007855")
os.environ['DJANGO_SETTINGS_MODULE'] = 'tutize.settings'
os.environ['PYTHON_EGG_CACHE'] = '/tmp/.python-egg'
 
import django.core.handlers.wsgi
 
application = django.core.handlers.wsgi.WSGIHandler()