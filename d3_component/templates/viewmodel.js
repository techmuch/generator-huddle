define(['jquery', 'knockout', 'd3', 'text!./<%= filename %>.html'], function($, ko, d3, templateMarkup) {

    function <%= viewModelClassName %> (params, componentInfo) {
        var vm = function(params) {
            var self = this;
            self.element = componentInfo.element;
            self.firstRender = ko.observable(true)

            self.data = params.data || ko.observable({})

            // list variable common to both render() and update()
            self.svg = null;

            //debugger;

            self.render = function() {

            }

            self.update = function() {

            }

            self.rerender = function() {
                $(self.element).find('svg').remove();
                self.render();
            }

            self.engridChangeHandle = $(window).on('engrid-change', function() {
                self.rerender()
            });
            self.resizeHandle = $(window).on('resize', function() {
                self.rerender()
            });

            self.reactor = ko.computed(function() {
                var data = self.data();
                //debugger;
                if (typeof data !== 'undefined') {
                    if (self.firstRender()) {
                        self.render()
                    } else {
                        self.update()
                    }
                }
                return data;
            })

            // This runs when the component is torn down. Put here any logic necessary to clean up,
            // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
            self.dispose = function() {
                self.engridChangeHandle.off();
                self.resizeHandle.off();
                self.reactor.dispose();
            };

            return self;

        }

        return new vm(params)
    }

    return {
        viewModel: {
            createViewModel: <%= viewModelClassName %>
        },
        template: templateMarkup
    };

});