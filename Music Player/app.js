/////////////////////////////
// playlist resize fitting //
/////////////////////////////

const playlists = document.getElementById("playlists");

new ResizeObserver(function() {
	if (playlists.clientWidth < 300) {
		playlists.style.gridTemplateColumns = "1fr";
	} else {
		playlists.style.gridTemplateColumns = "1fr 1fr";
	}
}).observe(playlists);

///////////////////
// volume slider //
///////////////////

const volumeSlider = document.getElementById("volume-slider");
const volumeButton = document.getElementById("volume-button");
const volumeNumber = document.getElementById("volume-number");

const volumeNormal = document.getElementById("volume-normal-icon")
const volumeMuted = document.getElementById("volume-muted-icon")

var savedVolume = volumeSlider.value;
var muted = savedVolume === 0;

// initialize

volumeMuted.classList.toggle("disabled")

// slider

function updateVolume() {
	volumeNumber.innerHTML = volumeSlider.value + "%";

	// if slid when muted, reset slider and icon

	if (muted === true && volumeSlider.value > 0) {
		muted = false;

		volumeMuted.classList.toggle("disabled")
		volumeNormal.classList.toggle("disabled")
	}
}

volumeSlider.oninput = function() {
	updateVolume();
}

// button

volumeButton.onclick = function() {
	muted = !muted;

	if (muted === true) {
		savedVolume = volumeSlider.value;

		volumeSlider.value = 0;
	} else {
		volumeSlider.value = savedVolume;
	}

	volumeMuted.classList.toggle("disabled")
	volumeNormal.classList.toggle("disabled")

	updateVolume();
}

/////////////////
// now playing //
/////////////////

const closeNowPlayingButton = document.getElementById("close-now-playing");
const nowPlayingButton = document.getElementById("now-playing-button");
const nowPlaying = document.getElementById("now-playing");
const body = document.querySelector("body");

var nowPlayingOpen = true;

function nowPlayingToggle() {
	nowPlayingOpen = !nowPlayingOpen;

	if (nowPlayingOpen === true) {
		nowPlaying.style.display = "block";
		body.style.gridTemplateAreas = '"header header header" "sidebar main playing" "footer footer footer"';
	} else {
		nowPlaying.style.display = "none";
		body.style.gridTemplateAreas = '"header header header" "sidebar main main" "footer footer footer"';
	}
}

closeNowPlayingButton.onclick = nowPlayingToggle;
nowPlayingButton.onclick = nowPlayingToggle;