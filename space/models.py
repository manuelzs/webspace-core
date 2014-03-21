from django.db import models

class SpatialResource(models.Model):
    name     = models.CharField(max_length=140)
    resource = models.URLField()
    pos_x    = models.IntegerField()
    pos_y    = models.IntegerField()
    image    = models.URLField()

    class Meta:
        unique_together = ('pos_x', 'pos_y')

    def __unicode__(self):
        return self.name + '[' + str(self.pos_x) + ',' + str(self.pos_y) + ']'
