define(['jquery', 'knockout', './router', 'dataprovider', 'documentation', 'bootstrap', 'knockout-projections'], function($, ko, router, dp, doc) {

  // !!! ALL ko.components.register() line that are commented out will not be compiled in the dist/ !!!
  
  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });

  // [Scaffolded page registrations will be inserted here. To retain this feature, don't remove this comment.]

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Make global
  window.dp = dp;
  window.router = router;
  window.doc = doc;

  // Start the application
  ko.applyBindings({ route: router.currentRoute, routes: router.routes });
});
