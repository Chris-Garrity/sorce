
var housePrices = document.getElementById('housePrices');

if (housePrices.getContext){

  var cv = housePrices.getContext('2d');

  var img = new Image();

  img.onload = function(){

    cv.drawImage(img,0,0);
    drawGraph();

  };

  img.src = 'media/house.jpg';
}

var coords = [  { h:200, v:200},{ h:250, v:150},
                { h:400, v:250},{ h:450, v:150},
                { h:500, v:250},{ h:525, v:50},
                { h:600, v:450} ]; 

var timer;

function drawGraph() {

    cv.beginPath();
    cv.moveTo(100,100);   
    cv.lineWidth = 10;
    cv.strokeStyle = '#DACE12';

    timer = setInterval( drawNext, 500 ); 
}

function drawNext() {

    if ( coords.length ) {
      // Remove next coordinate pair from front of array.
      var object = coords.shift();
      cv.lineTo( object.h , object.v );
      cv.stroke();

    } else {
      clearInterval( timer );
    }
}