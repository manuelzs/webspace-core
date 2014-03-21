App.Collections.PlaceCollection = Backbone.Collection.extend({
	model: App.Models.Place,
	resourceName: 'places',
	
	getChildAt: function(pos_x, pos_y) {
	    var item = this.where({
		    pos_x: parseInt(pos_x),
		    pos_y: parseInt(pos_y),
		});
	    return item[0];
	}
    });