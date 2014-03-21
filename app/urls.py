from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # url(r'^$', 'webspace.views.home', name='home'),
    
    url(r'^api/', include('api.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^', include('webfront.urls')),
)
