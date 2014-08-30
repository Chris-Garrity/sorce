
var debug = $("#debug");
var w = $("#wrapper");
var i = $("#responsive");
var c = $("#web");
var f = $("#design");

$(window).resize( function() {
	
	debug.text( parseInt(w.width()) + "px " 
			+ parseInt(i.width()) + "px " 
			+ parseInt(c.width()) + "px " 
			+ parseInt(f.width()) + "px"  );

});
