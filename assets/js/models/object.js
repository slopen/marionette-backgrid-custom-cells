define ([

    'underscore',
    'backbone'

], function (_, Backbone) {

	// model for item in list
    var itemModel = Backbone.Model.extend({

        defaults: {
            title : 'mock test object',
			field1: [
                {
                    title: 'sub object 1',
                    field1: 'field1'
                },
                {
                    title: 'sub object 2',
                    field1: 'field1'
                },                
            ],
			field2: 50,
			field3: 'line1\nline2'
        }
    }); 
    
    return itemModel;

});