// ===============================================================

document.getElementById("cakeForm").addEventListener("submit", function(e) {

	e.preventDefault();

	var image = document.getElementById("cake");
	image.src = "media/" + (e.target.checkValidity() ? "cake.png" : "cake_error.png" );

});

// ===============================================================
// Store values into LOCAL STORAGE 

// Typing into <input type="text" name="first"> 
// creates { "first":"Fred" }

$("input").on("keyup" , function() {
	localStorage.setItem( $(this).attr("name"), $(this).val());
})

$("select").on("change" , function() {
	localStorage.setItem( $(this).attr("name"), $(this).val());
})