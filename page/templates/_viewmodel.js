define(["knockout", "text!./<%= filename %>.html", "mapping"], function(ko, Template, map) {

    function ViewModel(route) {
        var self = this;
        self.layout = map.fromJS({
            layout: 'a=/bc;c=/df/g',
            showConfiguration: false,
            b: {
                title: "b",
                html: "",
                widget: "",
                params: ""
            },
            d: {
                title: "d",
                html: "",
                widget: "",
                params: ""
            },
            f: {
                title: "f",
                html: "",
                widget: "",
                params: ""
            },
            g: {
                title: "g",
                html: "",
                widget: "",
                params: ""
            }
        });

        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
        self.dispose = function() {};

        return self;
    }

    return {
        viewModel: ViewModel,
        template: Template
    };

});