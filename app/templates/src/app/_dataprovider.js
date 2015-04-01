define(['q','q-xhr','knockout','dataLoader','mapping'], function(q,Q,ko,dl,map) {

	function grabUrlEncodedVariables(){
		var o = {};
		var s = location.search.split('?');
		for (var i = 1; i < s.length; i++) {
			var a = s[i].split('&');
			for (var j = 0; j < a.length; j++) {
				var v = a[j].split('=');
				o[v[0]] = v[1];
			};
		};
		return o;
	}

	function Dataprovider() {
	  	var self = this;

	  	// variables and functions starting "self." are externally accessible
	  	self.huddleProjectId = '<%= projectId %>';
	  	
	  	// grabUrlEncodedVariables() needs to run before the url can change.
	  	self.urlEncodedVariables = grabUrlEncodedVariables();
	  	self.resourceUrl = typeof self.urlEncodedVariables.resource_url !== 'undefined' ? self.urlEncodedVariables.resource_url : '';
	  	

	  	/*dl.GET(path)
	  	.then(function(resp){
	  		var data = map.fromJS(resp.data)
	  		self.data(data);
	  	})*/
	}

	return new Dataprovider();
});
