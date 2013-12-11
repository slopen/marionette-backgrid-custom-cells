(function (window, $, _, Backbone, Backgrid)  {

  Backgrid.Extension.DeleteRowCell = Backgrid.Cell.extend ({

      className: "delete-row-cell",

      // can be overridden via extend
      btnClass: "btn btn-danger",

      // can be overridden via extend
      btnText: "&times;",

      template: _.template('<button class="<%= data.btnClass %>"><%= data.btnText %></button>'),

      events: {
        "click": "deleteRow"
      },

      // can be overridden via extend
      deleteRow: function () {
          this.model.destroy();
          return false;
      },

      render: function () {
        this.$el.html(this.template({
          data: {
            btnClass: this.btnClass,
            btnText : this.btnText 
          }
        }));
        
        return this;
      }
  });

}(window, jQuery, _, Backbone, Backgrid));