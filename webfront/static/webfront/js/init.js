var App = {
    Views: {},
    Routers: {},
    Models: {},
    Collections: {},
    init: function(){
	Data.Routers.Workspace = new App.Routers.Workspace();
	Backbone.history.start();
    },    
};

var Data = {
    Views: {},
    Routers: {},
    Models: {},
    Collections: {},
};

Backbone.rootApiUrl = '/api/v1/';
