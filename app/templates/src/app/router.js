define(["knockout", "crossroads", "hasher"], function(ko, crossroads, hasher) {

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    // route options:
    // label: false will not show a link on the nav bar
    // Example of using the experimental mode { url: "st3", label: "ST3", params: { page: "st3-page", experimental: true }}
    return new Router({
        routes: [
             {url: '', label: 'Home', params: { page: 'home-page' }}
            // [Scaffolded route registrations will be inserted here. To retain this feature, don't remove this comment.]
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});
        var routes = this.routes = ko.observable(config.routes);
        var experimentalMode = this.experimentalMode = ko.observable(false);

        ko.utils.arrayForEach(config.routes, function(route) {
            route.visible = ko.computed(function(){
                if(route.label){
                    if(typeof route.params.experimental === 'undefined' || !route.params.experimental ||(route.params.experimental && experimentalMode())){
                        return true;
                    }
                }
                return false;
            });
            crossroads.addRoute(route.url, function(requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });
        crossroads.bypassed.add(function(request){
            window.location.hash = '';
        });
        activateCrossroads();
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});