(function (window, $, _, Backbone, Backgrid)  {

  Backgrid.Extension.NestedGridCell = Backgrid.Cell.extend ({

      template: _.template(
        '<div>' +
          '<div class="nested-content"/>' +
          '<div class="nested-controls">' +
            '<button class="btn btn-default add-row">add row</button>' +
          '</div>' +
        '</div>'
      ),

      nestedModel: Backbone.Model,

      className: "nested-grid-cell",

      events:{
        'click .add-row': 'addRow'
      },

      initialize: function() {
        Backgrid.Cell.prototype.initialize.apply(this, arguments);

        this.subCollection = new Backbone.Collection(
          this.model.get(this.column.get("name"))
        );

        this.listenTo(this.subCollection, 'change destroy add', this.listener, this);        
      },

      render: function(){

        var html = this.template({ data: this.subCollection.toJSON() });

        var grid = new Backgrid.Grid({
          columns: this.columns,
          collection: this.subCollection
        });        

        this.$el.html(html);
        this.$el.find('.nested-content').append(grid.render().el);

        return this;
      },

      listener: function(){
        var data = {};
        data [this.column.get('name')] = this.subCollection.toJSON();
        this.model.set(data, {silent: true});
      },

      addRow: function(){
        this.subCollection.add(new this.nestedModel);
        return false;
      }
  });

}(window, jQuery, _, Backbone, Backgrid));