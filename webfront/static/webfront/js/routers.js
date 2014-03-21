App.Routers.Workspace = Backbone.Router.extend(
    {
	pos_x: 0,
	pos_y: 0,
	
	initialize: function() {
	    Data.Collections.Places = new App.Collections.PlaceCollection();
	},
	
	routes: {
	    '!/*coords':     'home'
	},
	
	home: function(coords) {
	    this.pos_x = coords.split(',')[0];
	    this.pos_y = coords.split(',')[1];
	    var filter = buildFilter(this.pos_x, this.pos_y);
	    var self = this;
	    Data.Collections.Places.fetch(
		{
		    data: filter,
		    success: function(results) {
			Data.Views.Space = new App.Views.SpaceView(
			    {
				el: '#content', 
				collection: results,
				pos_x: self.pos_x,
				pos_y: self.pos_y
			    });
		    }
		});
	    
	},
	
    });

function buildFilter(pos_x, pos_y) {
    var xl = parseInt(pos_x)+1;
    var xg = parseInt(pos_x)-1;
    var yl = parseInt(pos_y)+1;
    var yg = parseInt(pos_y)-1;

    var filter =
	'pos_x__lte=' + xl 
	+ '&pos_x__gte=' + xg
	+ '&pos_y__lte=' + yl
	+ '&pos_y__gte=' + yg;

    return filter;
}
