# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'SpatialResource.image'
        db.add_column('space_spatialresource', 'image',
                      self.gf('django.db.models.fields.URLField')(default='https://twitter.com/images/resources/twitter-bird-blue-on-white.png', max_length=200),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'SpatialResource.image'
        db.delete_column('space_spatialresource', 'image')


    models = {
        'space.spatialresource': {
            'Meta': {'unique_together': "(('pos_x', 'pos_y'),)", 'object_name': 'SpatialResource'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.URLField', [], {'max_length': '200'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'pos_x': ('django.db.models.fields.IntegerField', [], {}),
            'pos_y': ('django.db.models.fields.IntegerField', [], {}),
            'resource': ('django.db.models.fields.URLField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['space']