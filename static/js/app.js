// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    
    // Filter the metadata for the object with the desired sample number
    const object = data.metadata.find((element) => element.id == sample)
    //console.log(object)
    // Use d3 to select the panel with id of `#sample-metadata`
    const Dataset = d3.select('#sample-metadata')

    // Use `.html("") to clear any existing metadata
    Dataset.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (const demo of Object.entries(object)) {
      // console.log(demo)
      Dataset.append('div').text(`${demo[0]} : ${demo[1]}`)
    }
    });
}


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {


    // Filter the samples for the object with the desired sample number
    const samples = data.samples.find((element) => element.id == sample)
    console.log(samples)
    // Get the otu_ids, otu_labels, and sample_values
    const otuID = samples.otu_ids
    const otuLab = samples.otu_labels
    const sampVal = samples.sample_values

    // Build a Bubble Chart
    var bubbletrace = {
      x: otuID,
      y: sampVal,
      text: otuLab,
      mode: 'markers',
      marker: {
        color: otuID,
        size: sampVal
      }
    };
    
    var bubbledata = [bubbletrace];
    
    var bubblelayout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {title: 'OTU ID'},
      yaxis : {title: 'Number of Bacteria'},
      showlegend: false,
      height: 600,
      width: 1200
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbledata, bubblelayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otuID.slice(0, 10).map(id => `OTU ${id}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var barChart = {
      type: 'bar',
      orientation: 'h',
      x: sampVal.slice(0, 10).reverse(),
      y: yticks,
      text: otuLab.slice(0, 10).reverse()
    };

  // Layout for Bar Chart
  var barChartLayout = {
    title: 'Top 10 Bacteria Cultures Found',
    xaxis: { title: 'Number of Bacteria' }
  };

    // Render the Bar Chart
  Plotly.newPlot('bar', [barChart], barChartLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  //console.log(data.names)
    // Get the names field
    const names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
  const dropdown = d3.select('#selDataset')

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (const option of names) {
      //console.log(option)
     dropdown.append('option').text(option)
    }

    // Get the first sample from the list
  const first = names[0]

    // Build charts and metadata panel with the first sample
  optionChanged(first)

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
buildMetadata(newSample)
buildCharts(newSample)
}

// Initialize the dashboard
init();
