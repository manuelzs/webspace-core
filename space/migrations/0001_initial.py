# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'SpatialResource'
        db.create_table('space_spatialresource', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=140)),
            ('resource', self.gf('django.db.models.fields.URLField')(max_length=200)),
            ('pos_x', self.gf('django.db.models.fields.IntegerField')()),
            ('pos_y', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal('space', ['SpatialResource'])

        # Adding unique constraint on 'SpatialResource', fields ['pos_x', 'pos_y']
        db.create_unique('space_spatialresource', ['pos_x', 'pos_y'])


    def backwards(self, orm):
        # Removing unique constraint on 'SpatialResource', fields ['pos_x', 'pos_y']
        db.delete_unique('space_spatialresource', ['pos_x', 'pos_y'])

        # Deleting model 'SpatialResource'
        db.delete_table('space_spatialresource')


    models = {
        'space.spatialresource': {
            'Meta': {'unique_together': "(('pos_x', 'pos_y'),)", 'object_name': 'SpatialResource'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '140'}),
            'pos_x': ('django.db.models.fields.IntegerField', [], {}),
            'pos_y': ('django.db.models.fields.IntegerField', [], {}),
            'resource': ('django.db.models.fields.URLField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['space']