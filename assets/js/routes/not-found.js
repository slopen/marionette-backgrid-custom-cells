define ([

    // layouts
    'layouts/not-found'

], function (

    // layouts
    notFound

) {

  // common routes code

  var routes = {};

  // collection route 
  routes ['*notFound'] = {

    eventName: 'not-found',

    getLayout: function (path) {
      return notFound.extend({
        model: new Backbone.Model({path: path})
      });
    }
  };

  return routes;

}); 