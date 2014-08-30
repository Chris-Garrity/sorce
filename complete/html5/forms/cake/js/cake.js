
document.getElementById("cakeForm").addEventListener("submit", function(e) {

	e.preventDefault();

	var image = document.getElementById("cake");
	image.src = "media/" + (e.target.checkValidity() ? "cake.png" : "cake_error.png" );

});

document.getElementById("email").addEventListener("input", verifyEmail);
document.getElementById("email_confirm").addEventListener("input", verifyEmail);

function verifyEmail( e ) {

	var email_confirm = e.target;
	var email = document.getElementById('email');

	if (email_confirm.value !== email.value) {
	  email_confirm.setCustomValidity('The email addresses do not match.');
	} else {
	  email_confirm.setCustomValidity("");
	}
}

/* Turn off validation bubbles

var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
    }, true);
}

*/