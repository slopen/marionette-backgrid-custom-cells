(function (window, $, _, Backbone, Backgrid)  {

  var textareaCellEditor = Backgrid.Extension.textareaCellEditor = Backgrid.InputCellEditor.extend({

    tagName: "textarea",

    saveOrCancel: function (e) {

      var formatter = this.formatter;
      var model = this.model;
      var column = this.column;

      var command = new Backgrid.Command(e);
      var blurred = e.type === "blur";

      if (command.moveUp() || command.moveDown() || command.moveLeft() || command.moveRight() || blurred) {

        e.preventDefault();
        e.stopPropagation();

        var val = this.$el.val();
        var newValue = formatter.toRaw(val, model);
        if (_.isUndefined(newValue)) {
          model.trigger("backgrid:error", model, column, val);
        }
        else {
          model.set(column.get("name"), newValue);
          model.trigger("backgrid:edited", model, column, command);
        }
      }
      // esc
      else if (command.cancel()) {
        // undo
        e.stopPropagation();
        model.trigger("backgrid:edited", model, column, command);
      }
    }
  });

  Backgrid.Extension.TextareaCell = Backgrid.Cell.extend ({
      className: "textarea-cell",
      editor: textareaCellEditor
  });

}(window, jQuery, _, Backbone, Backgrid));