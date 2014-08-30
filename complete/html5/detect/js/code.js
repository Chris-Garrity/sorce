
// Detect support for HTML5 features.

// If this browser supports a feature, create a green para. Otherwise create a red para.

detectSupport( "<canvas>" , Modernizr.canvas );
drawLine();

detectSupport( "<video>" , Modernizr.video );
detectSupport( "Ogg video" , Modernizr.video.ogg );
detectSupport( "H264 video" , Modernizr.video.h264 );
detectSupport( "WebM video" , Modernizr.video.webm );
drawLine();

detectSupport( "Local Storage" , Modernizr.localstorage );
drawLine();

detectSupport( "Geolocation" , Modernizr.geolocation );
drawLine();

detectSupport( "Input type of EMAIL" , Modernizr.inputtypes.email );
detectSupport( "Input type of TEL" , Modernizr.inputtypes.email );
detectSupport( "Placeholder" , Modernizr.input.placeholder );
detectSupport( "Autofocus" , Modernizr.input.autofocus );
drawLine();

detectSupport( "Web SQL Db" , Modernizr.websqldatabase );

function detectSupport( s,detect ) {
	$("<p>" , { class: (detect ? "success":"fail") , text:s }).appendTo("body");
}

function drawLine() {
	$("<hr>").appendTo("body");
}