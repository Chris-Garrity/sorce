
// Detect support for HTML5 features, using Modernizr

detectSupport( "<canvas>" , Modernizr.canvas );
drawLine();

// =============================================================

function detectSupport( s,detect ) {
	$("<p>" , { class: (detect ? "success":"fail") , text:s }).appendTo("body");
}

function drawLine() {
	$("<hr>").appendTo("body");
}