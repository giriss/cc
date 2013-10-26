from django.conf.urls import patterns, url
from u import views

urlpatterns = patterns('',
    url(r'^$', views.home, name='home'),

    #url(r'^(?P<username>(?!tutorial\b)\b\w+)/$', views.home, name='home'),

    url(r'^tutorial/(?P<action>add\b|delete/(?P<t_id>\d+)\b)/$', views.addDelTut, name='addTut'),

    #url(r'^tutorial/delete/(?P<num>\d+)$', views.delTut, name='delTut'),
)