
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

function drawGraph() {

    cv.beginPath();
    cv.moveTo(100,100);   
    cv.lineWidth = 10;
    cv.strokeStyle = '#DACE12';

    // ANIMATE GRAPH ===============
 
}