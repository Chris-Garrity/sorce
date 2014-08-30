// The SNAP svg library uses AJAX calls, so this page
// needs to load from an HTTP address, e.g. : http://localhost:1200/Desktop/svg_map/anim.html

var s = Snap()

Snap.load("usmap.svg", function (f) {
    s.append(f);
	highlightStates()

	s.animate( { opacity : 0.2 } , 1 );
});

function highlightStates() {

	$(".state").on( "mouseover" , function() {
		$(this).animate( { fill : "FF0000" , opacity : 0.6 } , 50 );
		$("#state_abbrev").html(($(this).attr("id")));
	});

	$(".state").on( "mouseout" , function() {
		$(this).animate( { opacity : 1 } , 50 );
	});	
}
