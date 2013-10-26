from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'tutize.views.home', name='home'),
    # SSL verification
    url(r'^CF46647BFFCA31CA77A05EE6D3380D9C.txt$', 'tutize.views.sslverify', name='SSL'),
    # url(r'^tutize/', include('tutize.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^users/', include("users.urls", namespace="users")),
    url(r'^u/', include("u.urls", namespace="u")),
    url(r'^xmlfiles/', include("xmlfiles.urls", namespace="xmlfiles")),
    url(r'^tut/', include("tut.urls", namespace="tut")),
)
