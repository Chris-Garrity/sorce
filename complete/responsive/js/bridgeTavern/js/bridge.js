
// This example uses getComputedStyle(..).getPropertyValue(..)
// to allow loosely coupled communication between responsive CSS media queries
// and Javascript.
// The Javascript code here avoids referring to specific screen width numbers.

// The example uses a MODULE PATTERN to create encapsulation and privacy.
// It uses a self-executing anonymous function.
// Tavern contains an object, which is returned by the self-executing function.
// Tavern has access, via closure, to its private methods and functions.

var Tavern = ( function() {

	// Private ======================================
	
	var PHONE 	= "phone";
	var TABLET 	= "tablet";
	var DESKTOP = "desktop";
	var WIDE 	= "wide";

	var image_prefix = "media/bridge_" ;

	function getBreakPoint() {
		return window.getComputedStyle(document.body,':after').getPropertyValue('content');
	}

	function draw() {

		var breakPoint = getBreakPoint();
		var image = image_prefix + breakPoint + ".jpg";

		load( image );
		info( breakPoint,image );
	}

	function load( image ) {
		
		// Do not reload the same image, if already in the DOM.
		if ( $("#bridge").attr( "src" ) !== image ) {
			$("#bridge").attr( "src" , image );
		}
	}

	function info( bp,image ) {
		$(".info").text( "[" + bp.toUpperCase() + "] " + image );		
	}

	// Public ======================================

	return {
		draw : draw
	}
}) () ;

// The module pattern prevents encapsulation from breaking. This code fails to change the private copy of phone.
// Tavern.PHONE = -45;

$("#button").on( "click" , Tavern.draw );

$(window).on( "resize" , Tavern.draw )


