
$(".details").hide();

$("li").on( "click" , function() {

	if ( $(this).data().name !== undefined ) {

		// Set the paragraph with an ID of name equal to the data attribute DATA-NAME

		$("#name").text( $(this).data().name );
		$("#born").text( $(this).data().born );
		$("#biog").text( $(this).data().biog );
		$("#wiki").text( $(this).data().name );	

		$("#wiki").attr( "href" , $(this).data().wiki )

		$(".details").show();
	}
	
}) ;
