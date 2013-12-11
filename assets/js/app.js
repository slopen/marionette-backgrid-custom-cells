define ([

    'jquery',
    'underscore',
    'marionette',
    'router'

], function ($, _, Marionette, createRouter) {

    var app = new Marionette.Application();

    // create main region
    app.addRegions({
      mainRegion : '#main'
    });

    // create routes and populate it with routes
    app.addInitializer(function(){

      app.router = createRouter (app);

      console.log('application router created...');
    });

    // initialize navigation
    app.addInitializer(function(){
      
      $(document).on('click', 'a[href]', function (){
        // links click cause the router navigate
        app.router.navigate( $(this).attr('href'), true );
        return false;
      });

      Backbone.history.start ();         

      console.log('application navigation initialized...');
    });


    return window.app = app;

}); 