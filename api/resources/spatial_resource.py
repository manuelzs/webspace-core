from tastypie.resources import ModelResource

from space.models import SpatialResource

class SpatialResource(ModelResource):

    class Meta:
        queryset = SpatialResource.objects.all()
        resource_name = 'spaces'
        api_name = 'v1'
        filtering = {
            'pos_x': ['gte','lte','exact'],
            'pos_y': ['gte','lte','exact'],
            }


