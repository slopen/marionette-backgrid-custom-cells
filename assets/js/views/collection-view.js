define ([

    'underscore',
    'backgrid',

    // backgrid extensions
    'backgridTextareaCell',
    'backgridRangeCell',
    'backgridNestedGridCell',
    'backgridDeleteRowCell'

], function (_, Backgrid) {

    return function (options) {

      // simple remove row column
      var removeRowCell = {

        name: "remove",
        label: "delete row cell",
        sortable: false,
        editable: false,

        cell: Backgrid.Extension.DeleteRowCell
      }; 


      // columns for nested grid
      var nestedColumns = [
        {
          name : "title",
          label: "Title",
          cell : "string"
        },
        {
          name : "field1",
          label: "field 1",
          cell : "string"
        }
      ];

      nestedColumns.push(removeRowCell);


      // columns for main grid
      var columns = [
        {
          name : "title",
          label: "Title",
          cell : "string"
        },
        {
          name : "field1",
          label: "nested grid cell",
          editable: false,
          sortable: false,

          cell : Backgrid.Extension.NestedGridCell.extend({
            
            // use columns array for nested grid
            columns: nestedColumns,

            // new items will be added with as nestedModel instances
            nestedModel: Backbone.Model.extend({
              defaults: {
                title: 'sub object',
                field1: 'field1'
              }
            })

          })
        },
        {
          name : "field2",
          label: "range cell",
          cell : Backgrid.Extension.RangeCell
        },        
        {
          name : "field3",
          label: "textarea cell",
          cell : Backgrid.Extension.TextareaCell
        }              
      ];

      columns.push(removeRowCell);      

      // creating grid instance
      return new Backgrid.Grid({
        columns: columns,
        collection: options.collection
      });

    };

}); 