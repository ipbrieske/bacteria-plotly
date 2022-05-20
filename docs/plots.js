function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      //console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })};
  
  init();

  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  };

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
  
        var variables = ['ID', 'ETHNICITY', 'GENDER', 'AGE', 'LOCATION', 'BBTYPE', 'WFREQ'];

        PANEL.html("");

        for (var i = 0; i < variables.length; i++) {
            var variable = variables[i].toLowerCase(); 
            PANEL.append("h6").text(variables[i] + ': ' + result[variable]);
        };
    });
  };