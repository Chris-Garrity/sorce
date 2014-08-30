
$("*").on("mouseover" , function(e) {

	var id = ($(this).context.id.length) ? "ID=" + $(this).context.id : "" ;
	var clas = ($(this).context.className.length) ? "CLASS=" + $(this).context.className : "" ;

	var debug = "<" + $(this).context.localName + "> " + $(this).css( "fontSize") + 
	" " + id + " " + clas ;

	$("#debug").text( debug );

	// Prevent event being passed up to containing elements.
	e.stopPropagation();
})