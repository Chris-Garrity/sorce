
// Find the canvas element in the DOM.
var housePrices = document.getElementById('housePrices');

// Check if this browser supports CANVAS.
if (housePrices.getContext){

  // Store a reference to the canvas into a variable
  var cv = housePrices.getContext('2d');

}

function drawGraph() {
    // Draw a graph into the canvas.
}
