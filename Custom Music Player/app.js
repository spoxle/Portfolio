const root = document.querySelector(":root");

/////////////
// SIDEBAR //
/////////////

const sidebarResizer = document.getElementById("sidebar-resizer");
const sidebarContent = document.getElementById("sidebar-content");
const sidebarHeader = document.getElementById("sidebar-header");
const sidebar = document.getElementById("sidebar");

function setSidebarWidth(n) {
	root.style.setProperty("--sidebar-width", n + "px");

	const sidebarWidth = sidebar.clientWidth;

	if (sidebarWidth <= 75) {
		sidebarHeader.style.display = "none";
	} else {
		sidebarHeader.style.display = "block";
	}

	root.style.setProperty("--playlists-columns", Math.ceil(sidebarWidth / 200))
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