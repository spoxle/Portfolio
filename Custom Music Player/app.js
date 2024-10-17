const root = document.querySelector(":root");

/////////////
// SIDEBAR //
/////////////

const sidebarResizer = document.getElementById("sidebar-resizer");
const sidebarContent = document.getElementById("sidebar-content");
const sidebarHeader = document.getElementById("sidebar-header");
const sidebar = document.getElementById("sidebar");

function setSidebarWidth(n) {
	const sidebarWidth = sidebar.clientWidth;

	if (n <= 150) {
		n = 75;
	}

	if (sidebarWidth <= 75) {
		sidebarHeader.style.display = "none";
	} else {
		sidebarHeader.style.display = "block";
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