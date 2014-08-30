
var v = document.getElementById('bunny');

v.playbackRate = 4;

// The ENDED event is triggered when the video reaches the end.
v.addEventListener( "ended" , function() {

	// Rewind
	v.currentTime = 0;
	// Reset to normal playback speed.
	v.playbackRate = 1;	
});

// Listen for changes to the current playback time, and display it.
var time = document.getElementById('time');

v.addEventListener( "timeupdate" , function() {
	time.innerHTML = parseInt( v.currentTime );	
});

// http://craftymind.com/factory/html5video/CanvasVideo.html