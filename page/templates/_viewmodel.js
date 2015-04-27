define(["knockout", "text!./<%= filename %>.html"], function(ko, homeTemplate) {

  function HomeViewModel(route) {
    this.message = ko.observable('Welcome to <%= filename %>!');
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
