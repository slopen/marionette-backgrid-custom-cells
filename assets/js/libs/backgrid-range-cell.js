(function (window, $, _, Backbone, Backgrid)  {

  var rangeCellEditor = Backgrid.Extension.rangeCellEditor = Backgrid.InputCellEditor.extend({

    tagName: "input",

    attributes: {
      type: 'range'
    }

  });

  Backgrid.Extension.RangeCell = Backgrid.Cell.extend ({
      className: "range-cell",
      editor: rangeCellEditor
  });

}(window, jQuery, _, Backbone, Backgrid));