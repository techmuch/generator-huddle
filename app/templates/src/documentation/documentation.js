define([
    "text!/documentation/overview.html",
    "text!/documentation/st1.html",
    "text!/documentation/spmr.html",
    "text!/documentation/datamanager.html",
    "text!/documentation/experimantalmode.html"
  ], function(
    overview, 
    st1, 
    spmr, 
    datamanager, 
    experimantalmode
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
        id: "st1",
        label: "2.  ST1",
        contents: st1
      },
      {
        id: "spmr",
        label: "3.  SPMR",
        contents: spmr
      },
      {
        id: "datamanager",
        label: "4.  Data Manager",
        contents: datamanager
      },
      {
        id: "experimantalmode",
        label: "5.  Experimental Mode",
        contents: experimantalmode
      }
    ];
  }

  return new Documentation;

});