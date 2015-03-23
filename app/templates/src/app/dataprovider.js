define(['q','q-xhr','knockout','dataLoader','mapping'], function(q,Q,ko,dl,map) {
		
	return new Dataprovider();

	function Dataprovider() {
	  	var self = this;
	  	self.path = path = 'data/project.json';
	  	self.data = ko.observable(null);
	  	
	  	self.point = ko.observable(0);

	  	self.splot = ko.computed(function(){
	  		//debugger;
	  		return self.data() !== null ? ko.toJS(self.data().executiveSummaryScatterPlot()[self.point()]) : []
	  	})

	  	self.cad = ko.computed(function(){
	  		return self.data() !== null ? ko.toJS(self.data().cadviewer()[self.point()]) : []
	  	})

	  	self.table = ko.computed(function(){
	  		return self.data() !== null ? ko.toJS(self.data().table()[self.point()]) : []
	  	})

	  	dl.GET(path)
	  	.then(function(resp){
	  		var data = map.fromJS(resp.data)
	  		self.data(data);
	  	})
	}
});
