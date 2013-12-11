define ([

    'underscore',
    'backbone'

], function (_, Backbone) {

	// model for item in list
    var collection = Backbone.Collection.extend({

    	initialize: function(){
    		this.fetch({reset: true});
    	}
    }); 
    
    return collection;

});