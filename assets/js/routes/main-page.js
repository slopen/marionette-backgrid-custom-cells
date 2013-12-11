define ([

    'marionette',

    // data
    'models/object',
    'collections/collection',

    // layouts
    'layouts/main-page',

    // localStorage adapter
    'localstorage'

], function (

    Marionette,

    // data
    testObject,
    testCollection,

    // layouts
    mainPageLayout,

    // localStorage adapter
    localStorage
  ) {

  // ------------------------------------------------------------

  // NOTE: essential backbone.localStorage module issue
  // must be created one time for model/collection to keep persistency
  var localStorage = new localStorage ('test-objects');

  // prepare for backbone.localStorage support
  var testObject     = testObject.extend({localStorage: localStorage}),
      testCollection = testCollection.extend({
        model       : testObject,
        localStorage: localStorage
      });

  // ------------------------------------------------------------


  // common routes code

  var routes = {};

  // collection route 
  routes [''] = {

    eventName: 'main-page',

    getLayout: function () {
      return mainPageLayout.extend({
        collection: new testCollection
      });
    }
  };

  return routes;

}); 