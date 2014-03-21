from django.conf.urls.defaults import patterns, url, include

urlpatterns = patterns('webfront',
   url(r'^templates.js$', 'views.jst', name='templates'),
   url(r'^', 'views.home', name='home'),
)
