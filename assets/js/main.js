require.config({

  paths: {

    // 'text'              : 'libs/text',

    'jquery'                : 'libs/jquery.min',
    'underscore'            : 'libs/lodash.min',

    'backbone'              : 'libs/backbone.min',
    'marionette'            : 'libs/backbone.marionette',
    
    'backgrid'              : 'libs/backgrid',
    'backgridTextareaCell'  : 'libs/backgrid-textarea-cell',
    'backgridRangeCell'     : 'libs/backgrid-range-cell',
    'backgridNestedGridCell': 'libs/backgrid-nested-grid-cell',
    'backgridDeleteRowCell' : 'libs/backgrid-delete-row-cell',
    
    'localstorage'          : 'libs/backbone.localStorage',

    'bootstrap'             : 'libs/bootstrap', 
    
    // application    
    'app'                   : 'app'
  },

  shim: {

      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },

      'marionette': {
          deps: ['backbone'],
          exports: 'Backbone.Marionette'
      },

      'backgrid': {
          deps: ['jquery', 'underscore', 'backbone'],
          exports: 'Backgrid'
      }, 
      'backgridTextareaCell': {
          deps: ['jquery', 'underscore', 'backbone', 'backgrid']
      },
      'backgridRangeCell': {
          deps: ['jquery', 'underscore', 'backbone', 'backgrid']
      },                    
      'backgridNestedGridCell': {
          deps: ['jquery', 'underscore', 'backbone', 'backgrid']
      },                    
      'backgridDeleteRowCell': {
          deps: ['jquery', 'underscore', 'backbone', 'backgrid']
      },

      'bootstrap': {
        deps: ['jquery']
      }
  }  

});

var deps = [

    // application
    'app',

    // libs
    'jquery',
    'bootstrap'

];

require (deps, function (app, $) {

    // launching
   app.start();  

});