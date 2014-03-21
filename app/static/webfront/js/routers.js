var Workspace = Backbone.Router.extend({
	
	routes: {
	    '#!/':     'home',
	    '#!/pepe': 'pepe',   
	},

	home: function() {
	    alert('home');
	},

	pepe: function() {
	    alert('pepe');
	}
    });