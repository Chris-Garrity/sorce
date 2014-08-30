
// Read the time out of localStorage. Convert back to an object, and display it.

if ( localStorage.time !== undefined ) {

	var raceTime = JSON.parse( localStorage.time );
	console.log( raceTime );

	$("#hours").val( raceTime.hours )
	$("#minutes").val( raceTime.minutes )

}

// On every keystroke, store a string version of the time object to localStorage.

$("input").on( "keyup", function() {

	var raceTime = { 
		hours : Number( $("#hours").val()),
		minutes : Number( $("#minutes").val())
	 }

	localStorage.time = JSON.stringify( raceTime );
})
