// ajax.js

var mediaQuery = window.matchMedia( "screen and (min-width: 50em)");
mediaQuery.addListener( loadImages );

loadImages();

function loadImages() {

	if ( mediaQuery.matches ) {
		$("img").each( function() {
			$(this).attr( "src" , $(this).attr("data-src"));
		});
	}
}