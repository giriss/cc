from django.conf.urls import patterns, url
from tut import views

urlpatterns = patterns('',
    url(r'^(?P<t_id>\d+\b)/$', views.view_tut, name='view_tut'),
    url(r'^add/$', views.add_tut, name='add_tut'),
)