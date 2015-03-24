define(['jquery', 'knockout', 'd3', 'text!./<%= filename %>.html'], function($, ko, d3, templateMarkup) {

	function <%= viewModelClassName %> (params, componentInfo) {
		var self = this;
		self.element = componentInfo.element;
		self.firstRender = ko.observable(true)

		self.data = params.data

		// list variable common to both render() and update()
		self.svg = null;

		//debugger;

		self.render = function() {

		}
		
		self.update = function() {

		}

		self.reactor = ko.computed(function() {
			var data = self.data();
			//debugger;
			if (typeof data.data !== 'undefined') {
				if (self.firstRender()) {
					self.render()
				} else {
					self.update()
				}
			}
			return data;
		})
	}

	// This runs when the component is torn down. Put here any logic necessary to clean up,
	// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
	<%= viewModelClassName %>.prototype.dispose = function() {};

	return {
		viewModel: {
			createViewModel: <%= viewModelClassName %>
		},
		template: templateMarkup
	};

});