
$( "form" ).on( "submit", function( event ) {
  //event.preventDefault();
  $("<p>" , { text : $( this ).serialize() } ).appendTo("body");
});