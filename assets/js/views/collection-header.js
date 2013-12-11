define([

	'marionette'

], function (Marionette) {

	return Marionette.ItemView.extend({

		template: '#collection-header',

		templateHelpers: function(){
			return {
				total: this.collection.length
			};
		},	

		events: {
			"click .controls .add-row" : "addRow",
			"click .controls .save"    : "saveData"
		},

		initialize: function (options){
			this.collection = options.collection;
			this.grid = options.grid;

			this.listenTo(this.collection, 'all', this.render, this);
		},	

		addRow: function(){

			this.collection.create({});

			return false;
		},

		saveData: function(){
			this.collection.invoke('save');

			return false;
		}		   
	});

});