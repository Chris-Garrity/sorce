
$("select").on("change", function(e) {

	var flexType = $(this).find("option:selected").val();
  	$("ul").css("justify-content", flexType );

});