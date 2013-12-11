define ([

    'marionette',

    // views
    'views/collection-header',    
    'views/collection-view'    

], function(

	Marionette,

	collectionHeader,
	collectionView

){

	var layout = Marionette.Layout.extend({

		template: '#main-page-layout',

		regions: {
			header : '#header',
			content: '#content'
		},

		onShow: function(){
			var grid = this.initializeGrid();
			var header = this.initializeHeader();

			this.header.show (header);
			this.content.show (grid);
		},

		initializeHeader: function(){
			return new collectionHeader ({
				collection: this.collection,
				grid: this.grid
			})
		},

		initializeGrid: function(){
			return this.grid = collectionView({
				collection: this.collection			
			});
		}

	});

	return layout;
});