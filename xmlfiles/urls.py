from django.conf.urls import patterns, url
from xmlfiles import views

urlpatterns = patterns('',
        url(r'^tutorial/(?P<t_id>\d+\b)/$', views.xml, name='xml_files'),
)