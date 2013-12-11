define ([

    'underscore',
    'backbone',

    'routes/registry'

], function (_, Backbone, registry) {

  return function (app){

    var router = Backbone.Router.extend({

      initialize: function(){

        // apply routes from registry
        _.each (registry, function (entry) {
          var route     = entry [0],
              eventName = entry [1],
              getLayout = entry [2];

          this.route (route, eventName, _.bind (function () {
            var layout = getLayout.apply(this, arguments);
            this.swapLayout ( new layout );
          }, this));

        }, this);

      },

      swapLayout: function (layout) {
        // cleanup the previous view
        app.mainRegion.close ();
        app.mainRegion.show (layout);
      }

    });

    return new router;

  };

}); 