(function( undefined ) {
    Backbone.rootApiUrl = '/';

    Backbone.Model.prototype.url = function() {
	// Use the id if possible
	var url = this.id;
	
	// If there's no idAttribute, use the 'urlRoot'. Fallback to try to have the collection construct a url.
	// Explicitly add the 'id' attribute if the model has one.
	if ( !url ) {
	    if (this.resourceName) {
		url = Backbone.rootApiUrl + this.resourceName;
	    }
	    
	    url = this.urlRoot;
	    url = url || this.collection && ( _.isFunction( this.collection.url ) ? this.collection.url() : this.collection.url );
	    
	    if ( url && this.has( 'id' ) ) {
		url = addSlash( url ) + this.get( 'id' );
	    }
	}
	
	url = url && addSlash( url );
	
	return url || null;
    };

    Backbone.Collection.prototype.url = function( models ) {
	var url;
	if (this.resourceName) {
	    url = Backbone.rootApiUrl + this.resourceName;
	    //	} else if (this.model && this.model.resourceName) {
	    //url = Backbone.rootApiUrl + this.model.resourceName;
	} else {
	    url = this.urlRoot || ( models && models.length && models[0].urlRoot );
	}
	url = url && addSlash( url );
	
	// Build a url to retrieve a set of models. This assume the last part of each model's idAttribute
	// (set to 'resource_uri') contains the model's id.
	if ( models && models.length ) {
	    var ids = _.map( models, function( model ) {
		    var parts = _.compact( model.id.split( '/' ) );
		    return parts[ parts.length - 1 ];
		});
	    url += 'set/' + ids.join( ';' ) + '/';
	}
	
	return url || null;
    };

    var addSlash = function( str ) {
	return str + ( ( str.length > 0 && str.charAt( str.length - 1 ) === '/' ) ? '' : '/' );
    }
})();
