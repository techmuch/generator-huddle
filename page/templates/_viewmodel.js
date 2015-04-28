define(["knockout", "text!./<%= filename %>.html"], function(ko, Template) {

  function ViewModel(route) {
    this.message = ko.observable('Welcome to <%= filename %>!');
  }

  ViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: ViewModel, template: Template };

});
