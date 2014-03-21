App.Views.SpaceView = Backbone.View.extend({
	pos_x: 0,
	pos_y: 0,

	initialize: function(options) {
	    this.pos_x = options.pos_x;
	    this.pos_y = options.pos_y;
	    this.render();
	},

	render: function() {
	    var template = JST.content({ place: this.collection.getChildAt(this.pos_x, this.pos_y)});
	    $(this.el).html(template)
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x-1, this.pos_y+1),
			location: 'nw',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x, this.pos_y+1),
			location: 'n',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x+1, this.pos_y+1),
			location: 'ne',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x+1, this.pos_y),
			location: 'e',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x+1, this.pos_y-1),
			location: 'se',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x, this.pos_y-1),
			location: 's',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x-1, this.pos_y-1),
			location: 'sw',
			});
	    new App.Views.Preview({
		    model: this.collection.getChildAt(this.pos_x-1, this.pos_y),
			location: 'w',
			});

	}
    });

App.Views.Preview = Backbone.View.extend({
	location: null,

	initialize: function(options) {
	    this.location = options.location;
	    this.render();
	},

	render: function() {
	    var template = JST.preview({ model: this.model });
	    $('#preview-' + this.location).html(template);
	}
    });