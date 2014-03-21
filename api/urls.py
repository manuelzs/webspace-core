from django.conf.urls.defaults import patterns, url, include

from tastypie.api import Api

from resources import SpatialResource

webspace_api = Api(api_name='v1')

webspace_api.register(SpatialResource())

urlpatterns = patterns('api',
   url(r'^', include(webspace_api.urls)),
)
