
// Simple NODE server program to display FORM data.
// Command line : node server.js

var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/myaction', function(request, response) {
  
  var form = request.body;

  var delivery 
  	= "Send a " + form.cake + " cake"
  	+ " to " + form.first 
  	+ " " + form.last
  	+ " by " + form.delivery + " delivery." ;


  console.log( delivery );
  // response.send( delivery );

});

app.listen(8080, function() {
  console.log('Server : http://127.0.0.1:8080/');
});