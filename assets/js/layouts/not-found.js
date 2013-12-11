define ([

    'marionette'

], function (Marionette){

	var itemLayout = Marionette.Layout.extend({
		template: '#not-found'
	});

	return itemLayout;
});