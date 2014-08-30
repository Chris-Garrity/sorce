
// Change the heading to display the class name of the SVG sprite that is clicked.

$(".icon").on( "click" , function() {

	var icon = $(this).attr("class").split(" ")[1];
	$("h1").text( icon );
})