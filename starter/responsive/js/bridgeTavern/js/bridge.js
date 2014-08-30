
var Tavern = ( function() {

	// Private ======================================
	
	var PHONE = "phone";
	var TABLET = "tablet";
	var DESKTOP = "desktop";
	var WIDE = "wide";

	var image_prefix = "media/bridge_" ;

	function getBreakPoint() {
		return window.getComputedStyle(document.body,':after').getPropertyValue('content');
	}

	function draw() {
		// Call getBreakPoint(), and draw the image..
	}

	function load( image ) {		
		$("#bridge").attr( "src" , image );
	}

	function info( bp,image ) {
		$(".info").text( "[" + bp.toUpperCase() + "] " + image );	
	}

	// Public ======================================

	return {
		draw : draw
	}
}) () ;



