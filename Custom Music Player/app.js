const root = document.querySelector(":root");
const rootStyle = getComputedStyle(document.querySelector(":root"));

/////////////
// SIDEBAR //
/////////////

const sidebarResizer = document.getElementById("sidebar-resizer");
const sidebarContent = document.getElementById("sidebar-content");
const sidebarHeader = document.getElementById("sidebar-header");
const sidebar = document.getElementById("sidebar");

const playlistsInfo = document.querySelectorAll(".playlist > p");

console.log(root.style.getPropertyValue("--container-padding"));

function setSidebarWidth(n) {
	const sidebarWidth = sidebar.clientWidth;

	if (n <= 200) {
		n = 100;
	}

	if (sidebarWidth <= 100) {
		sidebarHeader.style.display = "none";
		root.style.setProperty("--playlist-padding", 0);

		playlistsInfo.forEach(function(info) {
			info.classList.add("disabled")
		});
	} else {
		sidebarHeader.style.display = "block";
		root.style.setProperty("--playlist-padding", rootStyle.getPropertyValue("--container-padding"))

		playlistsInfo.forEach(function(info) {
			info.classList.remove("disabled")
		});
	}

	root.style.setProperty("--sidebar-width", n + "px");

	root.style.setProperty("--playlists-columns", Math.ceil(sidebarWidth / 250))
};

// sidebar resizing

let resizing = false;

document.addEventListener("mousemove", (event) => {
	if (resizing) {
		setSidebarWidth(event.clientX - sidebarResizer.clientWidth * 1.5);
	}
});

sidebarResizer.addEventListener("mousedown", () => {
	resizing = true;
});

document.addEventListener("mouseup", () => {
	resizing = false;
});