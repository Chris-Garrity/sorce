
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

    // Draw text
    cv.font = "40pt Georgia";
    cv.fillStyle = "white";
    cv.fillText( "House Prices" ,10,400 );

    cv.beginPath();
    cv.lineWidth = 10;
    cv.strokeStyle = 'rgba(218,216,18,0.6)';
    cv.moveTo(100,100);
    
    cv.lineTo(200,200);
    cv.lineTo(250,150);
    cv.lineTo(400,250);
    cv.lineTo(450,150);
    cv.lineTo(500,250);
    cv.lineTo(525,50);
    cv.lineTo(600,450); 
    
    cv.stroke();  
}

// NOTES

// Setting the width of the canvas will ERASE its contents.
// cv.width = cv.width