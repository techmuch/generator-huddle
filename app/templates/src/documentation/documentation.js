define([
    "text!./overview.md",
    "text!./installation.md",
    "text!./yeomen-commands.md",
    "text!./using-bower.md",
    "text!./using-standard-components.md"
  ], function(
    overview,
    installation,
    yeomenCommands,
    usingBower,
    usingStandardComponents
  ){

  function Documentation() {
  	var self = this;

    self.documentation = [
      {
        id: "overview",
        label: "1.  Overview",
        contents: overview
      },
      {
        id: "installation",
        label: "2.  Installation",
        contents: installation
      },
      {
        id: "yeomenCommands",
        label: "3.  Command Line Features",
        contents: yeomenCommands
      },
      {
        id: "usingBower",
        label: "4.  Using Bower",
        contents: usingBower
      },
      {
        id: "usingStandardComponents",
        label: "5.  Using Standard Components",
        contents: usingStandardComponents
      }
    ];
  }

  return new Documentation;

});
